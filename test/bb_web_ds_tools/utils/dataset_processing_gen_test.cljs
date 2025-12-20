(ns bb-web-ds-tools.utils.dataset-processing-gen-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.string :as str]
            [bb-web-ds-tools.utils.dataset-processing :as sut]))

;; Generators

(def gen-val
  (gen/one-of [gen/int gen/string gen/boolean (gen/double* {:NaN? false :infinite? false})]))

(def gen-keys
  (gen/not-empty (gen/vector gen/keyword)))

(defn gen-row-from-keys [ks]
  (gen/fmap (partial zipmap ks)
            (gen/vector gen-val (count ks))))

(def gen-uniform-rows
  (gen/let [ks gen-keys
            rows (gen/not-empty (gen/vector (gen-row-from-keys ks)))]
    rows))

;; Tests

(defspec normalize-columnar-spec
  100
  (prop/for-all [rows gen-uniform-rows]
                (let [columnar (#'sut/to-columnar rows)
                      normalized (sut/normalize-columnar columnar)]
                  (= rows normalized))))

(defspec normalize-row-arrays-spec
  100
  (prop/for-all [rows gen-uniform-rows]
                (let [row-arrays (#'sut/to-row-arrays rows)
                      normalized (sut/normalize-row-arrays row-arrays)]
                  (= rows normalized))))

(deftest normalize-column-name-test
  (testing "normalize-column-name handles various cases"
    (is (= "foo_bar" (sut/normalize-column-name :foo-bar {:case :snake_case :output :string})))
    (is (= :FooBar (sut/normalize-column-name "foo_bar" {:case :CamelCase :output :keyword})))
    (is (= 'foo-bar (sut/normalize-column-name "FooBar" {:case :kebab-case :output :symbol})))
    (is (= "a" (sut/normalize-column-name :a {:case :snake_case :output :string})))))

(deftest to-markdown-table-test
  (testing "to-markdown-table formats correctly"
    (let [rows [{:a 1 :b 2} {:a 3 :b 4}]
          table (#'sut/to-markdown-table rows)]
      (is (str/includes? table "| a | b |"))
      (is (str/includes? table "| --- | --- |"))
      (is (str/includes? table "| 1 | 2 |"))
      (is (str/includes? table "| 3 | 4 |")))))
