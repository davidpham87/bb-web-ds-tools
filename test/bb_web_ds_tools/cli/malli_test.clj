(ns bb-web-ds-tools.cli.malli-test
  "Tests for bb-web-ds-tools.cli.malli-test."
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.cli.malli :as sut]
            [clojure.string :as str]
            [babashka.fs :as fs]))

(deftest infer-test
  (testing "Infer schema from EDN input using file"
    (let [tmp-dir (fs/create-temp-dir {:prefix "malli-test"})
          input-file (str (fs/file tmp-dir "data.edn"))]
      (spit input-file "[{:a 1}]")
      (with-redefs [println (fn [content]
                              ;; Malli inference output format might vary, check for core structure
                              (is (str/includes? content ":map"))
                              (is (str/includes? content ":a"))
                              (is (str/includes? content ":int")))]
        (sut/infer {:opts {:file input-file}})))))

(deftest generate-test
  (testing "Generate data from schema using file"
    (let [tmp-dir (fs/create-temp-dir {:prefix "malli-test"})
          schema-file (str (fs/file tmp-dir "schema.edn"))]
      (spit schema-file "[:map [:a int?]]")
      (with-redefs [println (fn [content]
                              (is (str/starts-with? content "["))
                              (is (str/includes? content ":a")))]
        (sut/generate {:opts {:samples 2 :file schema-file}})))))

(deftest validate-test
  (testing "Validate data against schema using files"
    (let [tmp-dir (fs/create-temp-dir {:prefix "malli-test"})
          schema-file (str (fs/file tmp-dir "schema.edn"))
          data-file (str (fs/file tmp-dir "data.edn"))]
      (spit schema-file "[:map [:a int?]]")
      (spit data-file "{:a 1}")
      (with-redefs [println (fn [content]
                              ;; Validation success message might vary
                              (is (str/includes? (str content) "valid")))]
        (sut/validate {:opts {:schema schema-file :file data-file}})))))
