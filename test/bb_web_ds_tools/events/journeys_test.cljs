(ns bb-web-ds-tools.events.journeys-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.events.journeys :as journeys]
            [malli.core :as m]))

(deftest events-structure-test
  (testing "events is a map"
    (is (map? journeys/events)))

  (testing "events have generators"
    (doseq [[event-key props] journeys/events]
      (is (keyword? event-key) (str "Event key should be keyword: " event-key))
      (is (map? props) "Props should be a map")
      (is (contains? props :args-gen) "Props should contain :args-gen")
      ;; Validate that args-gen is a valid malli schema
      (is (m/schema (:args-gen props)) (str "Invalid schema for " event-key)))))

(deftest fsm-structure-test
  (testing "fsm is a map"
    (is (map? journeys/fsm)))

  (testing "fsm keys are events"
    (is (every? keyword? (keys journeys/fsm))))

  (testing "fsm values are sets of next events"
    (doseq [[current nexts] journeys/fsm]
      (is (set? nexts))
      (is (every? keyword? nexts))))

  (testing "fsm is connected via navigation"
    (let [nav-event :bb-web-ds-tools.core/navigate]
      (is (contains? journeys/fsm nav-event))
      ;; Check that navigation leads to everything
      (is (= (set (keys journeys/events)) (get journeys/fsm nav-event)))
      ;; Check that every event can lead to navigation
      (doseq [[event nexts] journeys/fsm]
        (is (contains? nexts nav-event) (str event " should lead to navigation"))))))
