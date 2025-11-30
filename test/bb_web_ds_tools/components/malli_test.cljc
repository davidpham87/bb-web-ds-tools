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
