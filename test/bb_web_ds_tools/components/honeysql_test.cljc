(ns bb-web-ds-tools.components.honeysql-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]))

(deftest convert-to-sql-test
  (testing "Converts valid HoneySQL map"
    (is (= {:success true, :output "SELECT * FROM users"}
           (sut/convert-to-sql "{:select [:*] :from [:users]}"))))

  (testing "Handles invalid EDN"
    (let [result (sut/convert-to-sql "{:select")]
      (is (= false (:success result)))
      (is (re-find #"Error reading EDN" (:error result)))))

  (testing "Handles valid EDN but not a map"
    (is (= {:success false
            :error "Error: Input must be a map. Got: [:select :*]"}
           (sut/convert-to-sql "[:select :*]")))))
