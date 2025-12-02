(ns bb-web-ds-tools.utils.dataset-processing-bug-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

(deftest normalize-columnar-uneven-test
  (testing "normalize-columnar with uneven column lengths"
    (let [input {:short [1 2]
                 :long  [1 2 3 4 5]}
          ;; We expect it to handle the longest column, padding others with nil
          result (dp/normalize-columnar input)]
      (is (= 5 (count result)) "Should have 5 rows based on longest column")
      (is (= {:short 1 :long 1} (first result)))
      (is (= {:short nil :long 5} (last result))))))
