(ns bb-web-ds-tools.components.malli-inference-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [bb-web-ds-tools.components.malli :as sut]))

(defn get-field-schema [schema field]
  (let [schema-def (if (vector? schema) schema schema)
        entries (if (= :map (first schema-def))
                  (rest schema-def)
                  [])
        entry (first (filter #(= field (first %)) entries))]
    (if entry
      (second entry)
      nil)))

(deftest test-refine-schema-with-data
  (testing "New Logic: Enum if Unique <= 200 AND (Unique < 10% OR MaxLen < 60)"

    (testing "Scenario 1: Large Dataset, Low Cardinality (Standard Enum)"
      (let [unique-vals (map #(str "Val" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 20 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= :enum (first (get-field-schema schema :a))))))

    (testing "Scenario 2: Small Dataset (10 rows), 3 unique values"
      ;; Unique=3. (30%). Length < 60.
      ;; OR condition satisfies logic (Length < 60). -> Enum.
      (let [data (vec (repeat 10 {:a "Cat"}))
            data (assoc-in data [1 :a] "Dog")
            data (assoc-in data [2 :a] "Fish")]
        (is (= {:success true
                :schema [:map [:a [:enum "Cat" "Dog" "Fish"]]]}
               (sut/infer-schema data)))))

    (testing "Scenario 3: Large Dataset, ID Column (High Cardinality)"
      ;; Unique=1000. Fails 200 limit. -> String.
      (let [data (mapv (fn [i] {:a (str "ID" i)}) (range 1000))]
        (is (= {:success true
                :schema [:map [:a :string]]}
               (sut/infer-schema data)))))

    (testing "Scenario 4: Medium Dataset, Unique < 200, but > 10%, Short Strings"
      ;; Unique=50. Total=100. (50%). Length < 60.
      ;; OR condition satisfies logic (Length < 60). -> Enum.
      (let [unique-vals (map #(str "V" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))
            expected-enums (sort unique-vals)]
        (is (= {:success true
                :schema [:map [:a (into [:enum] expected-enums)]]}
               (sut/infer-schema data)))))

    (testing "Scenario 5: Long Strings (Description)"
      ;; MaxLen=70. Total=100. Unique=1. (1%).
      ;; OR condition satisfies logic (Unique < 10%). -> Enum.
      (let [long-str (apply str (repeat 70 "X"))
            data (vec (repeat 100 {:a long-str}))]
        (is (= {:success true
                :schema [:map [:a [:enum long-str]]]}
               (sut/infer-schema data)))))

    (testing "Scenario 6: Long Strings, High Percentage"
      ;; MaxLen=70. Unique=10. Total=20. (50%).
      ;; Fails OR condition (Neither < 10% nor < 60). -> String.
      (let [unique-vals (map #(str (apply str (repeat 70 "X")) %) (range 10))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))]
        (is (= {:success true
                :schema [:map [:a :string]]}
               (sut/infer-schema data)))))))
