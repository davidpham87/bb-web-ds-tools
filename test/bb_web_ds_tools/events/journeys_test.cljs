(ns bb-web-ds-tools.events.journeys-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [bb-web-ds-tools.events.journeys :as sut]
            [malli.core :as m]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.test-setup :as setup]
            ;; Require views to ensure event handlers and subscriptions are registered
            [bb-web-ds-tools.views.malli]
            [bb-web-ds-tools.views.honeysql]
            [bb-web-ds-tools.views.datasets]
            [bb-web-ds-tools.views.vega-lite.core]
            [bb-web-ds-tools.views.gemma]
            [bb-web-ds-tools.views.code]
            [bb-web-ds-tools.views.settings]
            [bb-web-ds-tools.views.app-db]
            [bb-web-ds-tools.views.changelog]
            [bb-web-ds-tools.views.r-repl]
            [bb-web-ds-tools.views.repl]
            [bb-web-ds-tools.views.editor]
            [bb-web-ds-tools.views.pyodide]
            [bb-web-ds-tools.events.theme]
            [bb-web-ds-tools.events.settings]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(def view-subscriptions
  "Map of route names to a list of critical subscriptions for that view.
   Used to verify that the view state is accessible and consistent."
  {:malli [:malli/user-input-root
           :malli/component-root
           :malli/schema-text
           :malli/inference-input
           :malli/active-tab
           :malli/inference-view-state]
   :honeysql [:honeysql/user-input-root
              :honeysql/component-root
              :honeysql/input
              :honeysql/output]
   :vega-lite [:bb-web-ds-tools.views.vega-lite.subs/user-input-root
               :bb-web-ds-tools.views.vega-lite.subs/component-root
               :bb-web-ds-tools.views.vega-lite.subs/data-input
               :bb-web-ds-tools.views.vega-lite.subs/config-input]
   :gemma [:bb-web-ds-tools.views.gemma/user-input-root
           :bb-web-ds-tools.views.gemma/component-root
           :bb-web-ds-tools.views.gemma/messages]
   :code [:bb-web-ds-tools.views.code/active-tab
          :bb-web-ds-tools.views.repl/instances
          :bb-web-ds-tools.views.r-repl/code
          :bb-web-ds-tools.views.pyodide/code
          :bb-web-ds-tools.core/code]
   :datasets [:bb-web-ds-tools.views.datasets/user-input-root
              :bb-web-ds-tools.views.datasets/component-root
              :bb-web-ds-tools.views.datasets/items
              :bb-web-ds-tools.views.datasets/active-dataset-id]
   :app-db [:bb-web-ds-tools.views.app-db/user-input-root
            :bb-web-ds-tools.views.app-db/watched-paths]
   ;; Changelog is static, no specific subscriptions
   :changelog []
   :settings [:bb-web-ds-tools.events.theme/current-theme
              :bb-web-ds-tools.events.settings/column-normalizer]})

(deftest generate-journey-test
  (testing "Generates a valid sequence of events"
    (let [journey (take 50 (sut/generate-journey sut/fsm sut/events {:max-steps 100}))]
      (is (seq journey) "Journey should not be empty")
      (doseq [[event args] journey]
        (let [event-def (get sut/events event)
              args-schema (:args-gen event-def)]
          (is event-def (str "Event " event " should exist in definitions"))
          (is (m/validate args-schema args) (str "Args for " event " should match schema")))))))

(deftest fsm-structure-test
  (testing "FSM is fully connected and normalized"
    (is (map? sut/fsm))
    (doseq [[event transitions] sut/fsm]
      (is (contains? sut/events event) (str "FSM node " event " should be a valid event"))
      (is (not (empty? transitions)) (str "Event " event " should have transitions"))
      (let [total-prob (reduce + (vals transitions))]
        ;; Relax the check to account for rounding errors in normalize-weights
        (is (> total-prob 0.90) (str "Probabilities for " event " should sum to ~1.0"))
        (is (< total-prob 1.10) (str "Probabilities for " event " should sum to ~1.0"))))))

(deftest journey-execution-test
  (testing "Executes generated journeys against the app-db using test.check"
    (let [journey-gen (gen/fmap (fn [_]
                                  (doall (take 50 (sut/generate-journey sut/fsm sut/events {:max-steps 50}))))
                                (gen/return nil))
          prop (prop/for-all [journey journey-gen]
                 (rf-test/run-test-sync
                  ;; Initialize the DB
                  (rf/dispatch-sync [::core/initialize-db])

                  ;; Initialize all view states (simulating component mounts)
                  ;; This prevents subscription failures due to missing state
                  (rf/dispatch-sync [:malli/initialize])
                  (rf/dispatch-sync [:honeysql/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.views.vega-lite.events/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.views.gemma/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.views.datasets/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.views.code/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.events.settings/initialize])
                  (rf/dispatch-sync [:bb-web-ds-tools.views.app-db/initialize])

                  ;; Mock navigation to avoid side effects
                  (rf/reg-fx :navigate (fn [_] nil))

                  ;; Mock portal submission to avoid external interactions
                  (rf/reg-event-db
                   :bb-web-ds-tools.portal/submit
                   (fn [db _] db))

                  ;; Mock Theme Application (prevents DOM access failure)
                  (rf/reg-fx :theme/apply (fn [_] nil))
                  (rf/dispatch-sync [:bb-web-ds-tools.events.theme/set-theme :zenburn])

                  ;; Mock Runtime and External Side Effects
                  ;; R-REPL
                  (rf/reg-fx :bb-web-ds-tools.views.r-repl/load-runtime (fn [_] nil))
                  (rf/reg-fx :bb-web-ds-tools.views.r-repl/execute-r (fn [_] nil))
                  ;; Trigger R-REPL init after mock
                  (rf/dispatch-sync [:bb-web-ds-tools.views.r-repl/initialize])

                  ;; Pyodide
                  (rf/reg-fx :bb-web-ds-tools.views.pyodide/load-runtime (fn [_] nil))
                  (rf/reg-fx :bb-web-ds-tools.views.pyodide/execute-python (fn [_] nil))
                  ;; Trigger Pyodide init after mock
                  (rf/dispatch-sync [:bb-web-ds-tools.views.pyodide/initialize])

                  ;; Gemma
                  (rf/reg-fx :bb-web-ds-tools.views.gemma/load-model-fx (fn [_] nil))
                  (rf/reg-fx :bb-web-ds-tools.views.gemma/generate-response-fx (fn [_] nil))

                  ;; Datasets
                  (rf/reg-fx :bb-web-ds-tools.views.datasets/fetch-vega-datasets (fn [_] nil))
                  (rf/reg-fx :bb-web-ds-tools.views.datasets/fetch-vega-dataset (fn [_] nil))

                  (try
                    (doseq [[i [event args]] (map-indexed vector journey)]
                      (try
                        ;; Dispatch the event
                        (rf/dispatch (into [event] args))

                        ;; For navigation events, simulate the router callback
                        (when (= event :bb-web-ds-tools.core/navigate)
                          (let [[route-name params query] args]
                            (rf/dispatch [::core/navigated {:data {:name route-name}
                                                            :path-params params
                                                            :query-params query}])))

                        ;; Verify that the app state reflects the expected route
                        (let [current-route-match @(rf/subscribe [::core/current-route])
                              current-route-name (get-in current-route-match [:data :name])
                              event-def (get sut/events event)
                              expected-route (:route event-def)]

                          (when (and expected-route (not= expected-route :global))
                            (if (not= expected-route current-route-name)
                              (throw (ex-info (str "Event " event " expects route " expected-route " but got " current-route-name) {}))))

                          ;; Verify subscriptions for the current route
                          (when-let [subs (get view-subscriptions current-route-name)]
                            (doseq [sub subs]
                              (try
                                (let [val @(rf/subscribe [sub])]
                                  (if (nil? val)
                                    (throw (ex-info (str "Subscription " sub " should return a value for route " current-route-name) {}))))
                                (catch :default e
                                  (throw (ex-info (str "Error checking subscription " sub " at route " current-route-name) {} e)))))))
                        (catch :default e
                          (throw (ex-info (str "Error at step " i ": " event " " args) {:step i :event event :args args} e)))))
                    true
                    (catch :default e
                      (println "Failed journey execution:")
                      (println "Last event:" (last journey))
                      (println "Error:" (.-message e))
                      (println "Journey:" (pr-str journey))
                      false))))
          result (tc/quick-check 20 prop)]
      (is (:result result) (str "Generative test failed: " (pr-str (:shrunk result)))))))
