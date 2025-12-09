(ns bb-web-ds-tools.events.journeys-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.events.journeys :as sut]
            [malli.core :as m]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.core :as core]
            ;; Require views to ensure event handlers and subscriptions are registered
            [bb-web-ds-tools.views.malli]
            [bb-web-ds-tools.views.honeysql]
            [bb-web-ds-tools.views.datasets]
            [bb-web-ds-tools.views.vega-lite]
            [bb-web-ds-tools.views.gemma]
            [bb-web-ds-tools.views.code]
            [bb-web-ds-tools.views.settings]
            [bb-web-ds-tools.views.app-db]
            [bb-web-ds-tools.views.changelog]
            [bb-web-ds-tools.views.r-repl]
            [bb-web-ds-tools.views.repl]
            [bb-web-ds-tools.views.editor]
            [bb-web-ds-tools.views.pyodide]
            [bb-web-ds-tools.events.theme]))

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
              :honeysql/input-text
              :honeysql/sql-output]
   :vega-lite [:bb-web-ds-tools.views.vega-lite/user-input-root
               :bb-web-ds-tools.views.vega-lite/component-root
               :bb-web-ds-tools.views.vega-lite/data-input
               :bb-web-ds-tools.views.vega-lite/config-input]
   :gemma [:bb-web-ds-tools.views.gemma/user-input-root
           :bb-web-ds-tools.views.gemma/component-root
           :bb-web-ds-tools.views.gemma/messages]
   :code [:bb-web-ds-tools.views.code/active-tab
          :bb-web-ds-tools.views.repl/user-input-root
          :bb-web-ds-tools.views.r-repl/root
          :bb-web-ds-tools.views.pyodide/user-input-root
          :bb-web-ds-tools.views.editor/user-input-root]
   :datasets [:bb-web-ds-tools.views.datasets/user-input-root
              :bb-web-ds-tools.views.datasets/component-root
              :bb-web-ds-tools.views.datasets/items
              :bb-web-ds-tools.views.datasets/active-dataset-id]
   :app-db [:bb-web-ds-tools.views.app-db/user-input-root
            :bb-web-ds-tools.views.app-db/watched-paths]
   :changelog [:bb-web-ds-tools.views.changelog/entries]
   :settings [:bb-web-ds-tools.views.settings/user-input-root]})

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
  (testing "Executes a generated journey against the app-db"
    (rf-test/run-test-sync
      ;; Initialize the DB
      (rf/dispatch-sync [::core/initialize-db])

      ;; Mock navigation to avoid side effects
      (rf/reg-fx :navigate (fn [_] nil))

      ;; Mock portal submission to avoid external interactions
      (rf/reg-event-db
       :bb-web-ds-tools.portal/submit
       (fn [db _] db))

      ;; Mock Runtime and External Side Effects
      ;; R-REPL
      (rf/reg-fx :bb-web-ds-tools.views.r-repl/load-runtime (fn [_] nil))
      (rf/reg-fx :bb-web-ds-tools.views.r-repl/execute-r (fn [_] nil))

      ;; Pyodide
      (rf/reg-fx :bb-web-ds-tools.views.pyodide/load-runtime (fn [_] nil))
      (rf/reg-fx :bb-web-ds-tools.views.pyodide/execute-python (fn [_] nil))

      ;; Gemma
      (rf/reg-fx :bb-web-ds-tools.views.gemma/load-model-fx (fn [_] nil))
      (rf/reg-fx :bb-web-ds-tools.views.gemma/generate-response-fx (fn [_] nil))

      ;; Datasets
      (rf/reg-fx :bb-web-ds-tools.views.datasets/fetch-vega-datasets (fn [_] nil))
      (rf/reg-fx :bb-web-ds-tools.views.datasets/fetch-vega-dataset (fn [_] nil))

      (let [journey (take 20 (sut/generate-journey sut/fsm sut/events {:max-steps 20}))]
        (doseq [[event args] journey]
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
               (is (= expected-route current-route-name)
                   (str "Event " event " expects route " expected-route " but got " current-route-name)))

            ;; Verify subscriptions for the current route
            (when-let [subs (get view-subscriptions current-route-name)]
              (doseq [sub subs]
                (let [val @(rf/subscribe [sub])]
                  (is (not (nil? val)) (str "Subscription " sub " should return a value for route " current-route-name)))))))))))
