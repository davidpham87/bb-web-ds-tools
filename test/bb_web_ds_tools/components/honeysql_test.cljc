(ns bb-web-ds-tools.components.honeysql-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]))

(deftest convert-to-sql-test
  (testing "Converts valid HoneySQL map"
    (is (= {:success true, :output "SELECT * FROM users"}
           (sut/convert-to-sql "{:select [:*] :from [:users]}"))))

  (testing "Handles invalid EDN"
    (is (= {:success false, :error "Error evaluating code: EOF while reading, expected } to match { at [1,1]"}
           (sut/convert-to-sql "{:select"))))

  (testing "Handles valid EDN but not a map"
    (is (= {:success false
            :error "Error: Last evaluated value must be a map. Got: [:select :*]"}
           (sut/convert-to-sql "[:select :*]"))))

  (testing "Security: SCI Sandbox Check"
    (testing "Prevents global state pollution via sci/fork"
      ;; 1. Attempt to define a global var
      (sut/convert-to-sql "(def pwned true) {:select [:*]}")

      ;; 2. Attempt to access it in a subsequent call
      (let [res (sut/convert-to-sql "pwned")]
        ;; 3. It should FAIL to resolve 'pwned' if context is forked/isolated
        ;;    Currently (VULNERABLE), it resolves to true and returns "Error ... Got: true"
        ;;    Desired (SECURE), it should return "Error ... Could not resolve symbol: pwned"
        (is (re-find #"Could not resolve symbol: pwned" (:error res))
            "Global state should not persist between calls")))

    (testing "Can we access JS interop?"
      (let [res (sut/convert-to-sql "(js/Math.abs -5)")]
        (is (re-find #"Could not resolve symbol: js/Math" (:error res))
            "JS interop should be restricted")))))
