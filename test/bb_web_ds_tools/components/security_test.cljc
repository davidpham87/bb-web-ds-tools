(ns bb-web-ds-tools.components.security-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]))

(deftest sci-isolation-test
  (testing "Global definitions should not persist"
    ;; Define 'pwned' in one execution
    (sut/convert-to-sql "(def pwned true) {:select [:*]}")

    ;; Try to access it in the next execution
    (let [res (sut/convert-to-sql "pwned")]
      ;; Should fail to resolve symbol
      (is (re-find #"Could not resolve symbol: pwned" (:error res)))))

  (testing "JS Interop should remain disabled"
    (let [res (sut/convert-to-sql "(js/Math.abs -5)")]
      (is (re-find #"Could not resolve symbol: js/Math" (:error res)))))

  (testing "Core function overrides should not persist"
    ;; Try to redefine + to -
    (sut/convert-to-sql "(def + -) {:select [:*]}")

    ;; Check if + is back to normal
    (let [res (sut/convert-to-sql "(+ 10 5)")]
      ;; Should be 15, not 5
      (is (= "Error: Last evaluated value must be a map. Got: 15" (:error res))))))
