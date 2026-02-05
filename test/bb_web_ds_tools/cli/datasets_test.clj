(ns bb-web-ds-tools.cli.datasets-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.cli.datasets :as sut]
            [babashka.fs :as fs]))

(deftest infer-format-test
  (testing "Format inference from filename"
    (is (= ["csv" "json" "edn" "yaml" "yaml" nil]
           (map #'sut/infer-format ["test.csv" "test.json" "test.edn" "test.yaml" "test.yml" "test.txt"])))))

(deftest convert-integration-test
  (testing "Convert CSV to JSON with real files"
    (let [tmp-dir (fs/create-temp-dir {:prefix "datasets-test"})
          input-file (str (fs/file tmp-dir "input.csv"))
          output-file (str (fs/file tmp-dir "output.json"))]
      (spit input-file "a,b\n1,2")
      (sut/convert {:opts {:file input-file :out output-file}})
      (let [content (slurp output-file)]
        (is (= "[\n  {\n    \"a\": \"1\",\n    \"b\": \"2\"\n  }\n]" content)))))

  (testing "Convert JSON to EDN (stdin/stdout)"
    (let [input-str "[{\"a\":1}]"]
      (with-in-str input-str
        (let [output (with-out-str
                       (sut/convert {:opts {:format "json" :to "edn"}}))]
          (is (= "[{:a 1}]\n\n" output)))))))
