(ns bb-web-ds-tools.components.malli-gen-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer [defspec]]
            [malli.core :as m]
            [malli.generator :as mg]
            [bb-web-ds-tools.components.malli :as sut]))

;; --- Generators ---

(def simple-value-gen
  (gen/one-of [gen/string gen/boolean]))

(def simple-schema-gen
  (gen/elements [:string :boolean :int :double]))

(def map-schema-gen
  (gen/fmap (fn [props]
              (into [:map] (map (fn [[k v]] [k v]) props)))
            (gen/map gen/keyword simple-schema-gen)))

;; --- Properties ---

(def inference-validation-prop
  (prop/for-all [data (gen/vector (gen/map gen/keyword simple-value-gen))]
                (if (empty? data)
                  true
                  (let [result (sut/infer-schema data)
                        schema (when (:success result) (:schema result))]
                    (and (:success result)
                         (every? #(m/validate schema %) data))))))

(def generation-validation-prop
  (prop/for-all [schema map-schema-gen]
                (let [gen-result (sut/generate-data schema 10 :edn)
                      generated-data (:data gen-result)
                      validation-results (map #(sut/validate-data schema %) generated-data)]
                  (and (:success gen-result)
                       (every? :success validation-results)))))

;; --- Tests ---

(deftest inference-validation-test
  (testing "Inferred schema validates original data"
    (let [result (tc/quick-check 20 inference-validation-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest generation-validation-test
  (testing "Generated data validates against schema"
    (let [result (tc/quick-check 20 generation-validation-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(defspec infer-enum-spec
  100
  (prop/for-all [vals (gen/vector (gen/elements ["A" "B" "C"]) 20 50)]
                (let [data (mapv (fn [v] {:col v}) vals)
                      res (sut/infer-schema data)
                      schema (:schema res)]
                  (and (:success res)
                       (= :map (first schema))
                       (let [col-schema (last (first (filter #(= :col (first %)) (rest schema))))]
                         (or (= :enum (first col-schema))
                             ;; Sometimes if cardinality is too high relative to total it might stay string,
                             ;; but here 3 unique vs 20-50 total should always trigger enum logic
                             ;; (3 < 200 max-values, 3 < 0.1 * 20 is FALSE... wait)
                             ;; The logic is: (or (< unique-count (* 0.1 total-count)) (< longest-string-len 60))
                             ;; "A" len is 1 < 60. So it should be enum.
                             (= :enum (first col-schema))))))))
