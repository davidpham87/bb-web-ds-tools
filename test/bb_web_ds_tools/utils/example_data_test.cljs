(ns bb-web-ds-tools.utils.example-data-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as dp]
            [clojure.string :as str]))

(deftest example-data-test
  (testing "Example data generation and parsing loop"
    (doseq [fmt [:csv :tsv :json :edn]
            structure (if (#{:csv :tsv} fmt) [:columnar] [:columnar :row-maps :row-arrays])]
      (testing (str "Format: " fmt ", Structure: " structure)
        (let [example-str (dp/example-data fmt structure)]
          (is (string? example-str))
          (is (not (str/blank? example-str)))

          (let [parsed (dp/parse-dataset fmt structure example-str)]
            ;; parse-dataset always returns a sequence of row maps
            (is (sequential? parsed))
            (is (= 10 (count parsed)))

            ;; Check content of first row
            (let [sample (first parsed)]
              (is (map? sample))
              (is (contains? sample :score))
              (is (contains? sample :category))
              (is (contains? sample :date))
              (is (number? (:score sample)))
              (is (string? (:category sample)))
              (is (string? (:date sample))))))))))
