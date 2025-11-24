(ns bb-web-ds-tools.views.malli-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.views.malli :as malli]))

(deftest detect-and-parse-test
  (testing "EDN parsing"
    (is (= {:a 1} (malli/detect-and-parse "{:a 1}")))
    (is (= [1 2 3] (malli/detect-and-parse "[1 2 3]"))))

  (testing "JSON parsing"
    (is (= {:a 1} (malli/detect-and-parse "{\"a\": 1}")))
    (is (= [1 2 3] (malli/detect-and-parse "[1, 2, 3]"))))

  (testing "Invalid input"
    (is (nil? (malli/detect-and-parse "{:a")))
    (is (nil? (malli/detect-and-parse "{a: 1}")))))
