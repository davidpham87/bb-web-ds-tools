(ns bb-web-ds-tools.utils.dataset-processing-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

(deftest parse-dataset-markdown-empty-cells-test
  (testing "Markdown table with empty cells should preserve column alignment"
    (let [markdown "| col1 | col2 | col3 |\n|---|---|---|\n| val1 |  | val3 |"
          result (sut/parse-dataset :markdown :columnar markdown)]
      ;; The current buggy implementation produces: [{:col1 "val1" :col2 "val3"}]
      ;; We expect: [{:col1 "val1" :col2 "" :col3 "val3"}] or similar (nil is also fine for empty).
      (is (= [{:col1 "val1" :col2 "" :col3 "val3"}] result)))))
