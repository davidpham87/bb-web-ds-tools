(ns bb-web-ds-tools.datasets-test
  "Tests for bb-web-ds-tools.datasets-test."
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [bb-web-ds-tools.utils.dataset-processing :as dp]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest parse-dataset-test
  (testing "CSV parsing"
    (let [csv "name,age\nAlice,30\nBob,25"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (dp/parse-dataset :csv :columnar csv)))))

  (testing "TSV parsing"
    (let [tsv "name\tage\nAlice\t30\nBob\t25"
          expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (is (= expected (dp/parse-dataset :tsv :columnar tsv)))))

  (testing "JSON parsing"
    (let [expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (testing "row-maps"
        (is (= expected (dp/parse-dataset :json :row-maps "[{\"name\": \"Alice\", \"age\": 30}, {\"name\": \"Bob\", \"age\": 25}]"))))
      (testing "columnar"
        (is (= expected (dp/parse-dataset :json :columnar "{\"name\": [\"Alice\", \"Bob\"], \"age\": [30, 25]}"))))
      (testing "row-arrays"
        (is (= expected (dp/parse-dataset :json :row-arrays "[[\"name\", \"age\"], [\"Alice\", 30], [\"Bob\", 25]]"))))))

  (testing "EDN parsing"
    (let [expected [{:name "Alice" :age 30} {:name "Bob" :age 25}]]
      (testing "row-maps"
        (is (= expected (dp/parse-dataset :edn :row-maps "[{:name \"Alice\" :age 30} {:name \"Bob\" :age 25}]"))))
      (testing "columnar"
        (is (= expected (dp/parse-dataset :edn :columnar "{:name [\"Alice\" \"Bob\"] :age [30 25]}"))))
      (testing "row-arrays"
        (is (= expected (dp/parse-dataset :edn :row-arrays "[[:name :age] [\"Alice\" 30] [\"Bob\" 25]]")))))))
