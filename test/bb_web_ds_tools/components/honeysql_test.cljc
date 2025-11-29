(ns bb-web-ds-tools.components.honeysql-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]))

(deftest convert-to-sql-test
  (testing "Converts valid HoneySQL map"
    (let [res (sut/convert-to-sql "{:select [:*] :from [:users]}")]
      (is (:success res))
      ;; Check for partial match or specific string
      (is (re-find #"SELECT .* FROM .*users" (:output res)))))

  (testing "Handles invalid EDN"
    (let [res (sut/convert-to-sql "{:select")]
      (is (not (:success res)))
      (is (string? (:error res)))))

  (testing "Handles valid EDN but not a map"
    (let [res (sut/convert-to-sql "[:select :*]")]
      (is (not (:success res)))
      (is (re-find #"Last evaluated value must be a map" (:error res))))))
