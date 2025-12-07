(ns bb-web-ds-tools.cli.honeysql-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.cli.honeysql :as sut]
            [clojure.string :as str]
            [babashka.fs :as fs]))

(deftest convert-test
  (testing "Convert HoneySQL EDN to SQL"
    (testing "File input/output"
       (let [tmp-dir (fs/create-temp-dir {:prefix "honeysql-test"})
             input-file (str (fs/file tmp-dir "input.edn"))
             output-file (str (fs/file tmp-dir "output.sql"))]
         (spit input-file "{:select [:*] :from [:table]}")
         (sut/convert {:opts {:file input-file :out output-file}})
         (is (str/includes? (slurp output-file) "SELECT * FROM table"))))

    (testing "Stdin/Stdout"
      (let [input-str "{:select [:a] :from [:t]}"]
        (with-in-str input-str
          (let [output (with-out-str
                         (sut/convert {:opts {}}))]
            (is (str/includes? output "SELECT a FROM t"))))))))

(deftest infer-output-test
  (testing "Infers .sql extension"
    (is (= "test.sql" (#'sut/infer-output {:file "test.edn"})))
    (is (= "custom.out" (#'sut/infer-output {:file "test.edn" :out "custom.out"})))
    (is (nil? (#'sut/infer-output {})))))
