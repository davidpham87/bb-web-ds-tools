(ns bb-web-ds-tools.events.journeys
  (:require [malli.core :as m]
            [malli.generator :as mg]))

(def events
  "Map of user-triggerable events to their argument generators."
  {;; Malli View
   :malli/update-schema-text
   {:args-gen [:tuple [:string {:min 1}]]}

   :malli/update-inference-input
   {:args-gen [:tuple :string]}

   :malli/set-active-tab
   {:args-gen [:tuple [:enum :inference :generation :validation :json-schema]]}

   :malli/set-input-format
   {:args-gen [:tuple [:enum :edn :csv :tsv :json]]}

   :malli/set-generation-samples
   {:args-gen [:tuple [:int {:min 1 :max 100}]]}

   :malli/set-generation-format
   {:args-gen [:tuple [:enum :edn :json]]}

   :malli/parse-schema-and-generate
   {:args-gen [:tuple]}

   :malli/infer-schema
   {:args-gen [:tuple]}

   :malli/save-dataset
   {:args-gen [:tuple]}

   :malli/load-dataset
   {:args-gen [:tuple :int]}

   :malli/validate
   {:args-gen [:tuple]}

   :malli/transform-json
   {:args-gen [:tuple]}

   ;; R-REPL (Code View)
   :bb-web-ds-tools.views.r-repl/set-code
   {:args-gen [:tuple :string]}

   :bb-web-ds-tools.views.r-repl/run-code
   {:args-gen [:tuple]}

   ;; HoneySQL View
   :honeysql/update-input
   {:args-gen [:tuple :string]}

   :honeysql/convert-to-sql
   {:args-gen [:tuple]}

   ;; App DB View
   :bb-web-ds-tools.views.app-db/add-watch-path
   {:args-gen [:tuple [:vector keyword?]]}

   :bb-web-ds-tools.views.app-db/remove-watch-path
   {:args-gen [:tuple [:vector keyword?]]}

   ;; Pyodide (Code View)
   :bb-web-ds-tools.views.pyodide/set-code
   {:args-gen [:tuple :string]}

   ;; Gemma View
   :bb-web-ds-tools.views.gemma/load-model
   {:args-gen [:tuple]}

   :bb-web-ds-tools.views.gemma/send-message
   {:args-gen [:tuple :string]}

   ;; Clojure REPL (Code View)
   :bb-web-ds-tools.views.repl/eval-code
   {:args-gen [:tuple :string]}

   ;; Vega-Lite View
   :bb-web-ds-tools.views.vega-lite/set-data-input
   {:args-gen [:tuple :string]}

   :bb-web-ds-tools.views.vega-lite/set-config-input
   {:args-gen [:tuple :string]}

   :bb-web-ds-tools.views.vega-lite/set-config-mode
   {:args-gen [:tuple [:enum :json :edn]]}

   :bb-web-ds-tools.views.vega-lite/set-active-config-name
   {:args-gen [:tuple :string]}

   :bb-web-ds-tools.views.vega-lite/set-format
   {:args-gen [:tuple [:enum :json :edn :csv :tsv]]}

   :bb-web-ds-tools.views.vega-lite/save-config
   {:args-gen [:tuple]}

   :bb-web-ds-tools.views.vega-lite/import-dataset
   {:args-gen [:tuple]}

   ;; Datasets View
   :bb-web-ds-tools.views.datasets/set-active-dataset-id
   {:args-gen [:tuple :int]}

   :bb-web-ds-tools.views.datasets/update-new-dataset-state
   {:args-gen [:tuple [:map [:name :string] [:data :string]]]}

   :bb-web-ds-tools.views.datasets/add-dataset
   {:args-gen [:tuple [:map [:name :string] [:data :any]]]}

   :bb-web-ds-tools.views.datasets/delete-dataset
   {:args-gen [:tuple :int]}

   :bb-web-ds-tools.views.datasets/update-dataset-name
   {:args-gen [:tuple :int :string]}

   :bb-web-ds-tools.views.datasets/update-cell
   {:args-gen [:tuple :int keyword? :any]}

   ;; Editor
   :bb-web-ds-tools.views.editor/save-code
   {:args-gen [:tuple]}

   ;; Navigation (Global)
   :bb-web-ds-tools.core/navigate
   {:args-gen [:tuple [:enum :landing-page :malli :honeysql :vega-lite :gemma :code :datasets :changelog :settings :app-db]
               [:maybe :map]
               [:maybe :map]]}})

(def fsm
  "Directed graph where nodes are events and edges exist if the second event can be triggered after the first.
   This allows for random walks."
  (let [all-events (keys events)
        nav-event :bb-web-ds-tools.core/navigate
        view-events (group-by namespace all-events)]
    (reduce
     (fn [graph event]
       (let [ns (namespace event)
             ;; Events in same namespace can follow each other
             same-view (get view-events ns [])
             ;; Can always navigate away
             transitions (conj (set same-view) nav-event)
             ;; If the event IS navigate, it can go anywhere (simulating arrival at any view)
             transitions (if (= event nav-event)
                           (set all-events)
                           transitions)]
         (assoc graph event transitions)))
     {}
     all-events)))
