(ns bb-web-ds-tools.repro-test
  (:require [cljs.test :refer [deftest is testing]]))

(deftest repro-test
  (testing "Basic test execution"
    (is (= 1 1) "Math should work")))
