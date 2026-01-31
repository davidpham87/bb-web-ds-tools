(ns bb-web-ds-tools.components.malli-inference-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [bb-web-ds-tools.components.malli :as sut]))

(deftest test-refine-schema-with-data
  (testing "New Logic: Enum if Unique <= 200 AND (Unique < 10% OR MaxLen < 60)"

    (testing "Scenario 1: Large Dataset, Low Cardinality (Standard Enum)"
      (let [unique-vals (map #(str "Val" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 20 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a [:enum "Val0" "Val1" "Val10" "Val11" "Val12" "Val13" "Val14" "Val15" "Val16" "Val17" "Val18" "Val19" "Val2" "Val20" "Val21" "Val22" "Val23" "Val24" "Val25" "Val26" "Val27" "Val28" "Val29" "Val3" "Val30" "Val31" "Val32" "Val33" "Val34" "Val35" "Val36" "Val37" "Val38" "Val39" "Val4" "Val40" "Val41" "Val42" "Val43" "Val44" "Val45" "Val46" "Val47" "Val48" "Val49" "Val5" "Val6" "Val7" "Val8" "Val9"]]]
               schema))))

    (testing "Scenario 2: Small Dataset (10 rows), 3 unique values"
      ;; Unique=3. (30%). Length < 60.
      ;; OR condition satisfies logic (Length < 60). -> Enum.
      (let [data (vec (repeat 10 {:a "Cat"}))
            data (assoc-in data [1 :a] "Dog")
            data (assoc-in data [2 :a] "Fish")
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a [:enum "Cat" "Dog" "Fish"]]]
               schema))))

    (testing "Scenario 3: Large Dataset, ID Column (High Cardinality)"
      ;; Unique=1000. Fails 200 limit. -> String.
      (let [data (mapv (fn [i] {:a (str "ID" i)}) (range 1000))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a :string]]
               schema))))

    (testing "Scenario 4: Medium Dataset, Unique < 200, but > 10%, Short Strings"
      ;; Unique=50. Total=100. (50%). Length < 60.
      ;; OR condition satisfies logic (Length < 60). -> Enum.
      (let [unique-vals (map #(str "V" %) (range 50))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a [:enum "V0" "V1" "V10" "V11" "V12" "V13" "V14" "V15" "V16" "V17" "V18" "V19" "V2" "V20" "V21" "V22" "V23" "V24" "V25" "V26" "V27" "V28" "V29" "V3" "V30" "V31" "V32" "V33" "V34" "V35" "V36" "V37" "V38" "V39" "V4" "V40" "V41" "V42" "V43" "V44" "V45" "V46" "V47" "V48" "V49" "V5" "V6" "V7" "V8" "V9"]]]
               schema))))

    (testing "Scenario 5: Long Strings (Description)"
      ;; MaxLen=70. Total=100. Unique=1. (1%).
      ;; OR condition satisfies logic (Unique < 10%). -> Enum.
      (let [long-str (apply str (repeat 70 "X"))
            data (vec (repeat 100 {:a long-str}))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a [:enum "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"]]]
               schema))))

    (testing "Scenario 6: Long Strings, High Percentage"
      ;; MaxLen=70. Unique=10. Total=20. (50%).
      ;; Fails OR condition (Neither < 10% nor < 60). -> String.
      (let [unique-vals (map #(str (apply str (repeat 70 "X")) %) (range 10))
            data (vec (mapcat (fn [v] (repeat 2 {:a v})) unique-vals))
            res (sut/infer-schema data)
            schema (:schema res)]
        (is (= [:map [:a :string]]
               schema))))))
