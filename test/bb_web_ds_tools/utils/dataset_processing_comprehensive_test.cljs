(ns bb-web-ds-tools.utils.dataset-processing-comprehensive-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

;; --- Helper Data ---

(def simple-rows
  [{:a 1 :b "x"}
   {:a 2 :b "y"}])

(def simple-columnar
  {:a [1 2]
   :b ["x" "y"]})

(def simple-row-arrays
  [[:a :b]
   [1 "x"]
   [2 "y"]])

;; --- Normalization Tests ---

(deftest normalize-columnar-test
  (testing "Normalizes columnar data to row maps"
    (is (= simple-rows (sut/normalize-columnar simple-columnar))))
  (testing "Handles uneven columns by padding with nil"
    (let [uneven {:a [1 2 3] :b ["x"]}]
      (is (= [{:a 1 :b "x"} {:a 2 :b nil} {:a 3 :b nil}]
             (sut/normalize-columnar uneven))))))

(deftest normalize-row-arrays-test
  (testing "Normalizes row arrays to row maps"
    (is (= simple-rows (sut/normalize-row-arrays simple-row-arrays)))))

;; --- Casing Tests ---

(deftest casing-test
  (testing "Snake case"
    (is (= "foo_bar" (sut/to-snake-case "fooBar")))
    (is (= "foo_bar" (sut/to-snake-case "foo-bar")))
    (is (= "foo_bar" (sut/to-snake-case "Foo Bar"))))
  (testing "Camel case"
    (is (= "FooBar" (sut/to-camel-case "foo_bar")))
    (is (= "FooBar" (sut/to-camel-case "foo-bar"))))
  (testing "Kebab case"
    (is (= "foo-bar" (sut/to-kebab-case "fooBar")))
    (is (= "foo-bar" (sut/to-kebab-case "foo_bar")))))

(deftest normalize-column-name-test
  (testing "Output format"
    (is (= :foo-bar (sut/normalize-column-name :fooBar {:case :kebab-case :output :keyword})))
    (is (= "foo_bar" (sut/normalize-column-name "FooBar" {:case :snake_case :output :string})))
    (is (= 'FooBar (sut/normalize-column-name :foo_bar {:case :CamelCase :output :symbol})))))

;; --- Parsing Tests ---

(deftest parse-dataset-json-test
  (testing "JSON row-maps"
    (let [json "[{\"a\":1,\"b\":\"x\"},{\"a\":2,\"b\":\"y\"}]"]
      (is (= simple-rows (sut/parse-dataset :json :row-maps json)))))
  (testing "JSON columnar"
    (let [json "{\"a\":[1,2],\"b\":[\"x\",\"y\"]}"]
      (is (= simple-rows (sut/parse-dataset :json :columnar json)))))
  (testing "JSON row-arrays"
    (let [json "[[\"a\",\"b\"],[1,\"x\"],[2,\"y\"]]"]
      (is (= simple-rows (sut/parse-dataset :json :row-arrays json))))))

(deftest parse-dataset-edn-test
  (testing "EDN row-maps"
    (let [edn "[{:a 1 :b \"x\"} {:a 2 :b \"y\"}]"]
      (is (= simple-rows (sut/parse-dataset :edn :row-maps edn)))))
  (testing "EDN columnar"
    (let [edn "{:a [1 2] :b [\"x\" \"y\"]}"]
      (is (= simple-rows (sut/parse-dataset :edn :columnar edn)))))
  (testing "EDN row-arrays"
    (let [edn "[[:a :b] [1 \"x\"] [2 \"y\"]]"]
      (is (= simple-rows (sut/parse-dataset :edn :row-arrays edn))))))

(deftest parse-dataset-markdown-test
  (testing "Markdown columnar (standard)"
    (let [md "| a | b |\n|---|---|\n| 1 | x |\n| 2 | y |"]
      ;; Note: Markdown parser returns strings for values
      (is (= [{:a "1" :b "x"} {:a "2" :b "y"}]
             (sut/parse-dataset :markdown :columnar md))))))

;; --- Table Processing Tests ---

(deftest process-table-data-test
  (let [data [{:id 1 :name "Alice" :score 10}
              {:id 2 :name "Bob" :score 20}
              {:id 3 :name "Charlie" :score 15}
              {:id 4 :name "David" :score 5}]
        base-state {:page 0
                    :rows-per-page 2
                    :filters {}
                    :hidden-columns #{}
                    :sort-col nil
                    :sort-dir :asc
                    :columns [:id :name :score]}]

    (testing "Pagination"
      (is (= {:filtered-data data
              :page-data [{:id 1 :name "Alice" :score 10} {:id 2 :name "Bob" :score 20}]
              :total-rows 4
              :start-idx 0
              :end-idx 2
              :visible-columns [:id :name :score]}
             (sut/process-table-data data base-state)))
      (is (= {:filtered-data data
              :page-data [{:id 3 :name "Charlie" :score 15} {:id 4 :name "David" :score 5}]
              :total-rows 4
              :start-idx 2
              :end-idx 4
              :visible-columns [:id :name :score]}
             (sut/process-table-data data (assoc base-state :page 1)))))

    (testing "Sorting"
      (is (= {:filtered-data data
              :page-data [{:id 2 :name "Bob" :score 20} {:id 3 :name "Charlie" :score 15}]
              :total-rows 4
              :start-idx 0
              :end-idx 2
              :visible-columns [:id :name :score]}
             (sut/process-table-data data (assoc base-state :sort-col :score :sort-dir :desc))))
      (is (= {:filtered-data data
              :page-data [{:id 4 :name "David" :score 5} {:id 1 :name "Alice" :score 10}]
              :total-rows 4
              :start-idx 0
              :end-idx 2
              :visible-columns [:id :name :score]}
             (sut/process-table-data data (assoc base-state :sort-col :score :sort-dir :asc)))))

    (testing "Filtering"
      (is (= {:filtered-data [{:id 1 :name "Alice" :score 10}]
              :page-data [{:id 1 :name "Alice" :score 10}]
              :total-rows 1
              :start-idx 0
              :end-idx 1
              :visible-columns [:id :name :score]}
             (sut/process-table-data data (assoc base-state :filters {:name "Alice"})))))

    (testing "Complex Filtering"
      (is (= {:filtered-data [{:id 2 :name "Bob" :score 20} {:id 3 :name "Charlie" :score 15}]
              :page-data [{:id 2 :name "Bob" :score 20} {:id 3 :name "Charlie" :score 15}]
              :total-rows 2
              :start-idx 0
              :end-idx 2
              :visible-columns [:id :name :score]}
             (sut/process-table-data data (assoc base-state :filters {:score "#(> % 12)"})))))

    (testing "Hidden Columns"
      (is (= {:filtered-data data
              :page-data [{:id 1 :name "Alice" :score 10} {:id 2 :name "Bob" :score 20}]
              :total-rows 4
              :start-idx 0
              :end-idx 2
              :visible-columns [:id :name]}
             (sut/process-table-data data (assoc base-state :hidden-columns #{:score})))))))
