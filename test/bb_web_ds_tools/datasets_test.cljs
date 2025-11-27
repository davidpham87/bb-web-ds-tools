(ns bb-web-ds-tools.datasets-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.views.datasets :as d]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

(deftest parse-dataset-test
  (testing "CSV parsing"
    (let [csv "name,age\nAlice,30\nBob,25"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (dp/parse-dataset :csv csv)))))

  (testing "TSV parsing"
    (let [tsv "name\tage\nAlice\t30\nBob\t25"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (dp/parse-dataset :tsv tsv)))))

  (testing "JSON parsing"
    (let [json "[{\"name\": \"Alice\", \"age\": 30}, {\"name\": \"Bob\", \"age\": 25}]"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (dp/parse-dataset :json json))))))
