(ns bb-web-ds-tools.components.malli-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.malli :as sut]
            [malli.core :as m]
            [malli.error :as me]
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
                    (let [inferred-schema (:schema result)]
                      (every? #(m/validate inferred-schema %) data))
                    false))))

(deftest validate-data-test
  (testing "Valid data"
    (is (= {:success true :result "✅ Data is valid."}
           (sut/validate-data [:map [:a int?]] {:a 1}))))

  (testing "Invalid data"
    (let [schema [:map [:a int?]]
          data {:a "string"}
          result (sut/validate-data schema data)]
      (is (= false (:success result)))
      ;; We expect a malli explanation map in :result
      (is (= {:a ["should be an int"]}
             (me/humanize (:result result))))))

  (testing "Missing schema/data"
    (is (= false (:success (sut/validate-data nil {:a 1}))))
    (is (= false (:success (sut/validate-data [:map [:a int?]] nil))))))

(deftest transform-to-json-schema-test
  (testing "Valid schema"
    (let [schema [:map [:a int?]]
          result (sut/transform-to-json-schema schema)
          expected-json "{\n  \"type\" : \"object\",\n  \"properties\" : {\n    \"a\" : {\n      \"type\" : \"integer\"\n    }\n  },\n  \"required\" : [ \"a\" ]\n}"]
      (is (:success result))
      (is (= (sut/parse-json expected-json)
             (sut/parse-json (:json-schema result))))))

  (testing "Invalid schema"
    (is (= false (:success (sut/transform-to-json-schema nil))))))

(deftest infer-schema-enum-test
  (testing "infer-schema uses max-enum-values to refine strings to enums"
    ;; Needs unique < 10% of total. 3 unique ("x", "y", "z"). Need > 30 rows.
    (let [data (vec (mapcat (fn [v] (repeat 11 {:a v})) ["x" "y" "z"]))] ;; 33 rows. 3 unique. 9%.
      (is (= {:success true
              :schema [:map [:a [:enum "x" "y" "z"]]]}
             (sut/infer-schema data)))))

  (testing "infer-schema respects max-enum-values limit"
    ;; Needs unique < 10% (to qualify) BUT unique > max-values (to fail limit).
    ;; 3 unique. Max values 2. Need > 30 rows.
    (let [data (vec (mapcat (fn [v] (repeat 11 {:a v})) ["1" "2" "3"])) ;; 33 rows. 3 unique.
          result (sut/infer-schema data 2)]
      ;; :string or string? depending on malli.provider version and config
      ;; Assuming :string for now based on standard provider behavior with keywords
      (is (contains? #{[:map [:a :string]] [:map [:a 'string?]]} (:schema result))))))

(deftest infer-schema-min-max-test
  (testing "infer-schema adds min/max to integers"
    (is (= {:success true
            :schema [:map [:a [:int {:min 1, :max 10}]]]}
           (sut/infer-schema [{:a 1} {:a 5} {:a 10}]))))

  (testing "infer-schema adds min/max to doubles"
    (is (= {:success true
            :schema [:map [:a [:double {:min 1.5, :max 5.5}]]]}
           (sut/infer-schema [{:a 1.5} {:a 5.5}]))))

  (testing "infer-schema handles nullable numbers"
    (is (= {:success true
            :schema [:map [:a [:maybe [:int {:min 1, :max 10}]]]]}
           (sut/infer-schema [{:a 1} {:a nil} {:a 10}])))))

(deftest infer-schema-date-min-max-test
  (testing "infer-schema adds min/max to dates"
    (let [d1 #inst "2023-01-01"
          d2 #inst "2023-01-05"
          d3 #inst "2023-01-10"]
      (is (= {:success true
              :schema [:map
                       [:a
                        ['inst?
                         {:min d1
                          :max d3}]]]}
             (sut/infer-schema [{:a d1} {:a d2} {:a d3}]))))))
