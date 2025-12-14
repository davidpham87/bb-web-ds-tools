(ns bb-web-ds-tools.events.journeys
  "Event handlers for journeys."
  (:require [malli.core :as m]
            [malli.generator :as mg]))

(def nav-event :bb-web-ds-tools.core/navigate)

(def events
  "Map of user-triggerable events to their argument generators and route metadata."
  {;; Malli View
   :malli/update-schema-text
   {:args-gen [:tuple [:string {:min 1}]]
    :route :malli}

   :malli/update-inference-input
   {:args-gen [:tuple :string]
    :route :malli}

   :malli/set-active-tab
   {:args-gen [:tuple [:enum :inference :generation :validation :json-schema]]
    :route :malli}

   :malli/set-input-format
   {:args-gen [:tuple [:enum :edn :csv :tsv :json]]
    :route :malli}

   :malli/set-generation-samples
   {:args-gen [:tuple [:int {:min 1 :max 100}]]
    :route :malli}

   :malli/set-generation-format
   {:args-gen [:tuple [:enum :edn :json]]
    :route :malli}

   :malli/parse-schema-and-generate
   {:args-gen [:tuple]
    :route :malli}

   :malli/infer-schema
   {:args-gen [:tuple]
    :route :malli}

   :malli/save-dataset
   {:args-gen [:tuple]
    :route :malli}

   :malli/load-dataset
   {:args-gen [:tuple :int]
    :route :malli}

   :malli/validate
   {:args-gen [:tuple]
    :route :malli}

   :malli/transform-json
   {:args-gen [:tuple]
    :route :malli}

   ;; R-REPL (Code View)
   :bb-web-ds-tools.views.r-repl/set-code
   {:args-gen [:tuple :string]
    :route :code}

   :bb-web-ds-tools.views.r-repl/run-code
   {:args-gen [:tuple]
    :route :code}

   ;; HoneySQL View
   :honeysql/update-input
   {:args-gen [:tuple :string]
    :route :honeysql}

   :honeysql/convert-to-sql
   {:args-gen [:tuple]
    :route :honeysql}

   ;; App DB View
   :bb-web-ds-tools.views.app-db/add-watch-path
   {:args-gen [:tuple [:vector keyword?]]
    :route :app-db}

   :bb-web-ds-tools.views.app-db/remove-watch-path
   {:args-gen [:tuple [:vector keyword?]]
    :route :app-db}

   ;; Pyodide (Code View)
   :bb-web-ds-tools.views.pyodide/set-code
   {:args-gen [:tuple :string]
    :route :code}

   ;; Gemma View
   :bb-web-ds-tools.views.gemma/load-model
   {:args-gen [:tuple]
    :route :gemma}

   :bb-web-ds-tools.views.gemma/send-message
   {:args-gen [:tuple :string]
    :route :gemma}

   ;; Clojure REPL (Code View)
   :bb-web-ds-tools.views.repl/eval-code
   {:args-gen [:tuple :string]
    :route :code}

   ;; Vega-Lite View
   :bb-web-ds-tools.views.vega-lite/set-data-input
   {:args-gen [:tuple :string]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/set-config-input
   {:args-gen [:tuple :string]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/set-config-mode
   {:args-gen [:tuple [:enum :json :edn]]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/set-active-config-name
   {:args-gen [:tuple :string]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/set-format
   {:args-gen [:tuple [:enum :json :edn :csv :tsv]]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/save-config
   {:args-gen [:tuple]
    :route :vega-lite}

   :bb-web-ds-tools.views.vega-lite/import-dataset
   {:args-gen [:tuple]
    :route :vega-lite}

   ;; Datasets View
   :bb-web-ds-tools.views.datasets/set-active-dataset-id
   {:args-gen [:tuple :int]
    :route :datasets}

   :bb-web-ds-tools.views.datasets/update-new-dataset-state
   {:args-gen [:tuple [:map [:name :string] [:data :string]]]
    :route :datasets}

   :bb-web-ds-tools.views.datasets/add-dataset
   {:args-gen [:tuple [:map [:name :string] [:data :any]]]
    :route :datasets}

   :bb-web-ds-tools.views.datasets/delete-dataset
   {:args-gen [:tuple :int]
    :route :datasets}

   :bb-web-ds-tools.views.datasets/update-dataset-name
   {:args-gen [:tuple :int :string]
    :route :datasets}

   :bb-web-ds-tools.views.datasets/update-cell
   {:args-gen [:tuple :int keyword? :any]
    :route :datasets}

   ;; Editor (Code View)
   :bb-web-ds-tools.views.editor/save-code
   {:args-gen [:tuple]
    :route :code}

   ;; Navigation (Global)
   :bb-web-ds-tools.core/navigate
   {:args-gen [:tuple [:enum :landing-page :malli :honeysql :vega-lite :gemma :code :datasets :changelog :settings :app-db]
               [:maybe :map]
               [:maybe :map]]
    :route :global}})

(defn- round-2 [n]
  (/ #?(:clj (Math/round (* n 100.0))
        :cljs (js/Math.round (* n 100.0)))
     100.0))

(defn- normalize-weights [weights]
  (let [total (reduce + (vals weights))]
    (if (zero? total)
      weights
      (into {} (map (fn [[k w]] [k (round-2 (/ w total))]) weights)))))

(defn- get-heuristic-weight [event]
  (let [n (name event)]
    (cond
      ;; Navigation away: low probability
      (= event nav-event) 0.05

      ;; High frequency inputs (typing, editing)
      (or (= event :malli/update-schema-text)
          (= event :malli/update-inference-input)
          (= event :honeysql/update-input)
          (= event :bb-web-ds-tools.views.r-repl/set-code)
          (= event :bb-web-ds-tools.views.pyodide/set-code)
          (= event :bb-web-ds-tools.views.vega-lite/set-data-input)
          (= event :bb-web-ds-tools.views.vega-lite/set-config-input)
          (= event :bb-web-ds-tools.views.datasets/update-cell)
          (= event :bb-web-ds-tools.views.datasets/update-new-dataset-state)) 0.80

      ;; Medium frequency actions (running, generating)
      (or (re-find #"run-code" n)
          (re-find #"eval-code" n)
          (re-find #"generate" n)
          (re-find #"infer" n)
          (re-find #"validate" n)
          (re-find #"send-message" n)) 0.30

      ;; Low frequency actions (deleting, saving)
      (or (re-find #"delete" n)
          (re-find #"save" n)) 0.05

      ;; Default
      :else 0.10)))

(def fsm
  "Directed graph where nodes are events and edges are maps of {next-event probability}.
   Probabilities are normalized to sum to ~1.0."
  (let [all-events (keys events)
        view-events (group-by namespace all-events)]
    (reduce
     (fn [graph event]
       (let [ns (namespace event)
             same-view (get view-events ns [])
             candidates (conj (set same-view) nav-event)
             candidates (if (= event nav-event)
                          (set all-events)
                          candidates)

             ;; Calculate raw weights
             raw-weights (reduce (fn [m evt]
                                   (assoc m evt (get-heuristic-weight evt)))
                                 {}
                                 candidates)
             ;; Normalize
             weighted (normalize-weights raw-weights)]
         (assoc graph event weighted)))
     {}
     all-events)))

(defn weighted-choice
  "Selects a key from a map of {key weight} based on weights."
  [weights]
  (let [total (reduce + (vals weights))
        r (rand total)]
    (loop [opts (seq weights)
           acc 0]
      (if (seq opts)
        (let [[k w] (first opts)
              acc (+ acc w)]
          (if (< r acc)
            k
            (recur (rest opts) acc)))
        (ffirst weights)))))

(defn generate-journey
  "Generates a lazy sequence of [event args] representing a user journey.
   Arguments:
     fsm (map): The FSM graph (map of maps).
     events (map): The events definition map.
     opts (map): Optional configuration.
       :start-event (keyword) - The event to start with (default: navigate).
       :max-steps (int) - Limit the sequence (default: infinity)."
  ([fsm events] (generate-journey fsm events {}))
  ([fsm events {:keys [start-event max-steps]}]
   (let [start (or start-event nav-event)

         step (fn step [current-event current-route steps-taken]
                (lazy-seq
                 (when (or (nil? max-steps) (< steps-taken max-steps))
                   (let [args (mg/generate (:args-gen (get events current-event)))
                         new-route (if (= current-event nav-event)
                                     (first args)
                                     current-route)
                         candidates-map (get fsm current-event)

                         valid-entries (filter (fn [[evt _]]
                                                 (let [evt-route (:route (get events evt))]
                                                   (or (= evt nav-event)
                                                       (= evt-route :global)
                                                       (= evt-route new-route))))
                                               candidates-map)
                         valid-candidates-map (into {} valid-entries)

                         next-event (when (seq valid-candidates-map)
                                      (weighted-choice valid-candidates-map))]
                     (cons [current-event args]
                           (when next-event
                             (step next-event new-route (inc steps-taken))))))))]

     (step start (:route (get events start)) 0))))
