(ns bb-web-ds-tools.cli.datasets-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.cli.datasets :as sut]
            [clojure.string :as str]
            [babashka.fs :as fs]
            [clojure.data.json :as json]
            [clojure.edn :as edn]))

(deftest infer-format-test
  (testing "Format inference from filename"
    (is (= "csv" (#'sut/infer-format "test.csv")))
    (is (= "json" (#'sut/infer-format "test.json")))
    (is (= "edn" (#'sut/infer-format "test.edn")))
    (is (= "yaml" (#'sut/infer-format "test.yaml")))
    (is (= "yaml" (#'sut/infer-format "test.yml")))
    (is (nil? (#'sut/infer-format "test.txt")))))

(deftest convert-integration-test
  (testing "Convert CSV to JSON with real files"
    (let [tmp-dir (fs/create-temp-dir {:prefix "datasets-test"})
          input-file (str (fs/file tmp-dir "input.csv"))
          output-file (str (fs/file tmp-dir "output.json"))]
      (spit input-file "a,b\n1,2")
      (sut/convert {:opts {:file input-file :out output-file}})
      (let [content (slurp output-file)]
        (is (= [{"a" "1" "b" "2"}] (json/read-str content))))))

  (testing "Convert JSON to EDN (stdin/stdout)"
    (let [input-str "[{\"a\":1}]"]
      (with-in-str input-str
        (let [output (with-out-str
                       (sut/convert {:opts {:format "json" :to "edn"}}))]
          (is (= [{:a 1}] (edn/read-string output))))))))
