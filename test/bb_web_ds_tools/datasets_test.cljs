(ns bb-web-ds-tools.datasets-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.views.datasets :as d]))

(deftest parse-csv-test
  (testing "CSV parsing"
    (let [csv "name,age\nAlice,30\nBob,25"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (d/parse-csv csv))))))

(deftest parse-json-test
  (testing "JSON parsing"
    (let [json "[{\"name\": \"Alice\", \"age\": 30}, {\"name\": \"Bob\", \"age\": 25}]"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (d/parse-json json))))))
