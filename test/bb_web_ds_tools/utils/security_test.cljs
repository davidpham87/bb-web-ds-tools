(ns bb-web-ds-tools.utils.security-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

(deftest csv-injection-bypass-test
  (testing "Sanitize value bypass attempts"
    ;; Current protection
    (is (= "'=cmd" (sut/sanitize-value "=cmd")))
    (is (= "'+cmd" (sut/sanitize-value "+cmd")))
    (is (= "'-cmd" (sut/sanitize-value "-cmd")))
    (is (= "'@cmd" (sut/sanitize-value "@cmd")))

    ;; Potential Bypasses
    ;; Tab injection
    (is (= "'\t=cmd" (sut/sanitize-value "\t=cmd")) "Tab prefix should be sanitized")
    ;; Carriage return injection
    (is (= "'\r=cmd" (sut/sanitize-value "\r=cmd")) "CR prefix should be sanitized")
    ;; Newline injection
    (is (= "'\n=cmd" (sut/sanitize-value "\n=cmd")) "LF prefix should be sanitized")
    ;; Pipe injection (DDE)
    (is (= "'|cmd" (sut/sanitize-value "|cmd")) "Pipe prefix should be sanitized")
    ;; Percent injection
    (is (= "'%cmd" (sut/sanitize-value "%cmd")) "Percent prefix should be sanitized")))
