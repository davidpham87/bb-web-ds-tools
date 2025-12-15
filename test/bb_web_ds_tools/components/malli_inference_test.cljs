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
  (testing "New Logic: Enum if Unique <= MaxValues (Default 200) AND (Unique < 10% OR MaxLen < 60)"

    (testing "Scenario 1: Large Dataset, Low Cardinality (Standard Enum)"
      ;; Unique=50. MaxValues=200 (Default).
      (let [unique-vals (map #(str "Val" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 20 {:a v})) unique-vals))
            res (sut/infer-schema data) ;; Uses default 200
            schema (:schema res)]
        (is (= :enum (first (get-field-schema schema :a))))))

    (testing "Scenario 2: Small Dataset (10 rows), 3 unique values"
      ;; Unique=3.
      (let [data (vec (repeat 10 {:a "Cat"}))
            data (assoc-in data [1 :a] "Dog")
            data (assoc-in data [2 :a] "Fish")
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:enum "Cat" "Dog" "Fish"] (get-field-schema schema :a)))))

    (testing "Scenario 3: Large Dataset, ID Column (High Cardinality)"
      ;; Unique=1000. > 200.
      (let [data (mapv (fn [i] {:a (str "ID" i)}) (range 1000))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= :string (get-field-schema schema :a)))))

    (testing "Scenario 4: Medium Dataset, Unique < 200, but > 10%, Short Strings"
      (let [unique-vals (map #(str "V" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= :enum (first (get-field-schema schema :a))))))

    (testing "Scenario 5: Long Strings (Description)"
      (let [long-str (apply str (repeat 70 "X"))
            data (vec (repeat 100 {:a long-str}))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= :enum (first (get-field-schema schema :a))))))

    (testing "Scenario 6: Long Strings, High Percentage"
      (let [unique-vals (map #(str (apply str (repeat 70 "X")) %) (range 10))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= :string (get-field-schema schema :a)))))
  )
)
