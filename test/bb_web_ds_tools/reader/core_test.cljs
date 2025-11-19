(ns bb-web-ds-tools.reader.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.reader.core]))

(use-fixtures
  :each
  (fn [f]
    (rf/dispatch-sync [:initialize-db])
    (f)))

(deftest reader-events
  (testing "setting input"
    (rf/dispatch-sync [:reader/set-input "{:a 1}"])
    (is (= "{:a 1}" @(rf/subscribe [:reader/input]))))
  (testing "parsing input"
    (rf/dispatch-sync [:reader/set-input "{:a 1}"])
    (rf/dispatch-sync [:reader/parse-input])
    (is (= {:a 1} @(rf/subscribe [:reader/output])))))
