(ns bb-web-ds-tools.components.malli-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.malli :as sut]
            [malli.core :as m]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer [defspec]]))

(deftest detect-and-parse-test
  (testing "EDN parsing"
    (is (= {:a 1} (sut/detect-and-parse "{:a 1}")))
    (is (= [1 2 3] (sut/detect-and-parse "[1 2 3]"))))

  (testing "JSON parsing"
    (is (= {:a 1} (sut/detect-and-parse "{\"a\": 1}")))
    (is (= [1 2 3] (sut/detect-and-parse "[1, 2, 3]"))))

  (testing "Invalid input"
    (is (nil? (sut/detect-and-parse "{:a")))
    (is (nil? (sut/detect-and-parse "{a: 1}")))))

(defspec generate-data-test 10
  (prop/for-all [schema (gen/elements [[:map [:a int?]] [:vector string?]])]
    (let [result (sut/generate-data schema 1 :edn)]
      (and (:success result)
           (string? (:output result))
           (m/validate schema (:data result))))))

(defspec infer-schema-test 10
  (prop/for-all [data (gen/vector (gen/map gen/keyword gen/int) 1 5)]
    (let [result (sut/infer-schema data)]
      (if (:success result)
        (let [inferred-schema (sut/read-edn (:schema-str result))]
           (every? #(m/validate inferred-schema %) data))
        false))))

(deftest validate-data-test
  (testing "Valid data"
    (let [schema [:map [:a int?]]
          data {:a 1}
          result (sut/validate-data schema data)]
      (is (:success result))
      (is (= "✅ Data is valid." (:result result)))))

  (testing "Invalid data"
    (let [schema [:map [:a int?]]
          data {:a "string"}
          result (sut/validate-data schema data)]
      (is (not (:success result)))
      (is (map? (:result result))))) ;; Returns explanation map

  (testing "Missing schema/data"
    (is (not (:success (sut/validate-data nil {:a 1}))))
    (is (not (:success (sut/validate-data [:map [:a int?]] nil))))))

(deftest transform-to-json-schema-test
  (testing "Valid schema"
    (let [schema [:map [:a int?]]
          result (sut/transform-to-json-schema schema)]
      (is (:success result))
      (is (string? (:json-schema result)))
      ;; Check if it's valid JSON
      (is (sut/parse-json (:json-schema result)))))

  (testing "Invalid schema"
    (is (not (:success (sut/transform-to-json-schema nil))))))
