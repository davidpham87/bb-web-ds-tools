(ns bb-web-ds-tools.utils.dataset-processing-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

(deftest parse-dataset-markdown-empty-cells-test
  (testing "Markdown table with empty cells should preserve column alignment"
    (let [markdown "| col1 | col2 | col3 |\n|---|---|---|\n| val1 |  | val3 |"
          result (sut/parse-dataset :markdown :columnar markdown)]
      ;; The current buggy implementation produces: [{:col1 "val1" :col2 "val3"}]
      ;; We expect: [{:col1 "val1" :col2 "" :col3 "val3"}] or similar (nil is also fine for empty).

      (is (= 1 (count result)))
      (let [row (first result)]
        (is (= "val1" (:col1 row)))
        ;; If fixed, col2 should be empty string or nil, but definitely not "val3"
        (is (not= "val3" (:col2 row)) "col2 should not contain value from col3 due to shifting")
        (is (= "val3" (:col3 row)))))))
