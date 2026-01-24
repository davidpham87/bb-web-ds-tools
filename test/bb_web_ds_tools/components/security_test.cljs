(ns bb-web-ds-tools.components.security-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]))

(deftest sci-sandbox-check
  (testing "Can we define global vars?"
    (sut/convert-to-sql "(def pwned true) {:select [:*]}")
    (let [res (sut/convert-to-sql "pwned")]
      ;; We expect a fresh context, so 'pwned' should not be resolvable
      (is (re-find #"Could not resolve symbol: pwned" (:error res)))))

  (testing "Can we access JS interop?"
    ;; Try to access js/Math
    (let [res (sut/convert-to-sql "(js/Math.abs -5)")]
      ;; If JS is disabled, it should say "Could not resolve symbol: js/Math"
      (is (re-find #"Could not resolve symbol: js/Math" (:error res))))))
