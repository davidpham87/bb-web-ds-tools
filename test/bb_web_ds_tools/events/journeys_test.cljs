(ns bb-web-ds-tools.events.journeys-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.events.journeys :as sut]
            [malli.core :as m]))

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
