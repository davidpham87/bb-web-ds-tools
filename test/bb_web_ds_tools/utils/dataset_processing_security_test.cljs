(ns bb-web-ds-tools.utils.dataset-processing-security-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

(deftest sanitize-value-security-test
  (testing "Standard CSV injection characters are sanitized"
    (is (= "'=1+1" (sut/sanitize-value "=1+1")))
    (is (= "'+1+1" (sut/sanitize-value "+1+1")))
    (is (= "'-1+1" (sut/sanitize-value "-1+1")))
    (is (= "'@1+1" (sut/sanitize-value "@1+1"))))

  (testing "Tab/CR/LF injection bypasses are sanitized"
    (is (= "'\t=1+1" (sut/sanitize-value "\t=1+1")))
    (is (= "'\r=1+1" (sut/sanitize-value "\r=1+1")))
    (is (= "'\n=1+1" (sut/sanitize-value "\n=1+1")))
    (is (= "'\t+cmd" (sut/sanitize-value "\t+cmd")))))
