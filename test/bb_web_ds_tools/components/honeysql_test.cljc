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
            :error (str "Error: Last evaluated value must be a map. Got: "
                        #?(:clj "class clojure.lang.PersistentVector"
                           :cljs "cljs.core/PersistentVector"))}
           (sut/convert-to-sql "[:select :*]")))))
