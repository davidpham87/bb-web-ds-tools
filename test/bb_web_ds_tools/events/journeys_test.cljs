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

(deftest events-metadata-test
  (testing "events have route metadata"
    (doseq [[event-key props] journeys/events]
      (is (contains? props :route) (str "Event " event-key " should have :route metadata"))
      (is (keyword? (:route props)) (str "Route for " event-key " should be a keyword")))))

(deftest fsm-structure-test
  (testing "fsm is a map"
    (is (map? journeys/fsm)))

  (testing "fsm keys are events"
    (is (every? keyword? (keys journeys/fsm))))

  (testing "fsm values are maps of next events to weights"
    (doseq [[current nexts] journeys/fsm]
      (is (map? nexts))
      (is (every? keyword? (keys nexts)))
      (is (every? number? (vals nexts)))))

  (testing "fsm is connected via navigation"
    (let [nav-event :bb-web-ds-tools.core/navigate]
      (is (contains? journeys/fsm nav-event))
      ;; Check that navigation leads to everything
      (is (= (set (keys journeys/events)) (set (keys (get journeys/fsm nav-event)))))
      ;; Check that every event can lead to navigation
      (doseq [[event nexts] journeys/fsm]
        (is (contains? nexts nav-event) (str event " should lead to navigation"))))))

(deftest generate-journey-test
  (testing "generates a sequence of events"
    (let [journey (journeys/generate-journey journeys/fsm journeys/events {:max-steps 10})]
      (is (seq? journey))
      (is (<= (count journey) 10))
      (doseq [[event args] journey]
        (is (keyword? event))
        (is (vector? args)))))

  (testing "respects route constraints"
    ;; We'll generate a longer sequence to ensure transitions happen
    (let [journey (journeys/generate-journey journeys/fsm journeys/events {:max-steps 50})
          nav-event journeys/nav-event]

      (loop [remaining journey
             current-route nil]
        (when (seq remaining)
          (let [[event args] (first remaining)
                evt-props (get journeys/events event)]

            ;; Check that current event is valid for current route
            ;; If it's not a global event, it MUST match current route
            (when (and current-route (not= (:route evt-props) :global))
              (is (= (:route evt-props) current-route)
                  (str "Event " event " route " (:route evt-props) " mismatch with current " current-route)))

            ;; Update route if navigation happened
            (let [new-route (if (= event nav-event)
                              (first args)
                              current-route)]
              (recur (rest remaining) new-route))))))))
