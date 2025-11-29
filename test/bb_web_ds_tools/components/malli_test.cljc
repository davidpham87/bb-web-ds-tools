(ns bb-web-ds-tools.components.malli-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.malli :as sut]
            [clojure.string :as str]
            [malli.core :as m]
            [clojure.edn :as edn]
            #?(:cljs [cljs.test :refer-macros [deftest is testing]])))

(deftest detect-and-parse-test
  (testing "EDN parsing"
    (is (= {:a 1} (sut/detect-and-parse "{:a 1}"))))
  (testing "JSON parsing"
    (let [res (sut/detect-and-parse "{\"a\": 1}")]
      #?(:clj (is (nil? res))
         :bb  (is (= {:a 1} res))
         :cljs (is (= {:a 1} res)))))
  (testing "Invalid input"
    (is (nil? (sut/detect-and-parse "{:a")))))

(deftest infer-schema-test
  (testing "Infers schema from data"
    (let [data [{:a 1} {:a 2}]
          schema-str (sut/infer-schema data)]
      (is (string? schema-str) "infer-schema should return a string")
      (when (string? schema-str)
        (let [schema (edn/read-string schema-str)]
          (println "Inferred Schema:" schema)
          ;; Schema can be a vector or other valid schema form
          (is (or (vector? schema) (keyword? schema) (map? schema)) (str "Schema should be valid structure, got: " (type schema)))
          ;; mp/provide treats input collection as samples, returns schema for ONE element
          (is (every? #(m/validate schema %) data)))))))

(deftest generate-data-test
  (testing "Generates data from schema"
    (let [schema-str "[:map [:a int?]]"
          output (sut/generate-data schema-str 1 :edn)
          data (edn/read-string output)]
      (is (map? data))
      (is (integer? (:a data)))))

  (testing "Round trip: Infer -> Generate -> Validate"
    (let [original-data [{:a 1 :b "x"} {:a 2 :b "y"}]
          schema-str (sut/infer-schema original-data)]
      (is (string? schema-str))
      (when (string? schema-str)
        (let [schema (edn/read-string schema-str)
              ;; Use 1 sample to generate one instance of the schema
              generated-str (sut/generate-data schema-str 1 :edn)
              generated-data (edn/read-string generated-str)]
          (println "Generated Data:" generated-data)
          ;; With 1 sample, result is the item (map), not a vector of items
          (is (map? generated-data) (str "Generated data should be map, got: " (type generated-data)))
          (is (m/validate schema generated-data)))))))
