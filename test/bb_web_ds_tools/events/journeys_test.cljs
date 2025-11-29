(ns bb-web-ds-tools.events.journeys-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.events.journeys :as journeys]
            [malli.core :as m]))

(deftest view-events-structure-test
  (testing "view-events is a map"
    (is (map? journeys/view-events)))
  (testing "view-events has expected keys"
    (is (contains? journeys/view-events :malli))
    (is (contains? journeys/view-events :datasets)))
  (testing "values are vectors of keywords"
    (doseq [[_ events] journeys/view-events]
      (is (vector? events))
      (is (every? keyword? events)))))

(deftest fsm-schema-test
  (testing "fsm-schema is valid"
    (is (m/schema journeys/fsm-schema)))

  (testing "validates a simple state"
    (let [simple-state {:name :idle :type :atomic}]
      (is (m/validate journeys/fsm-schema simple-state))))

  (testing "validates a compound state"
    (let [compound-state {:name :parent
                          :type :compound
                          :initial :child
                          :states {:child {:name :child :type :atomic}}}]
      (is (m/validate journeys/fsm-schema compound-state))))

  (testing "validates transitions"
    (let [state-with-transition {:name :idle
                                 :type :atomic
                                 :on {:event/start {:target :running}}}]
      (is (m/validate journeys/fsm-schema state-with-transition)))))
