(ns bb-web-ds-tools.components.honeysql-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.honeysql :as sut]
            [clojure.string :as str]
            #?(:cljs [cljs.test :refer-macros [deftest is testing]])))

(deftest convert-to-sql-test
  (testing "Simple Select"
    (let [input "{:select [:a] :from [:table]}"
          output (sut/convert-to-sql input)]
      (is (string? output))
      (is (str/includes? (str/upper-case output) "SELECT"))
      (is (str/includes? (str/upper-case output) "FROM"))))

  (testing "Error handling"
    (let [output (sut/convert-to-sql "{:invalid")]
      (is (str/starts-with? output "Error"))))

  (testing "Non-map input"
    (let [output (sut/convert-to-sql "[:vec]")]
      (is (str/starts-with? output "Error")))))
