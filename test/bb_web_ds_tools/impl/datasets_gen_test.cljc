(ns bb-web-ds-tools.impl.datasets-gen-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [bb-web-ds-tools.impl.datasets :as sut]))

;; --- Generators ---

(def simple-value-gen
  (gen/one-of [gen/int gen/boolean gen/string-alphanumeric]))

(def row-map-gen
  (gen/map gen/keyword simple-value-gen {:min-elements 1 :max-elements 5}))

(def row-maps-gen
  (gen/vector row-map-gen))

(def columnar-gen
  (gen/let [keys (gen/vector gen/keyword 1 5)
            len (gen/choose 0 10)
            cols (gen/vector (gen/vector simple-value-gen len) (count keys))]
    (zipmap keys cols)))

(def rows-gen
  (gen/let [header (gen/vector gen/keyword 1 5)
            rows (gen/vector (gen/vector simple-value-gen (count header)))]
    (vec (cons header rows))))

;; --- Properties ---

(def detect-structure-prop
  (prop/for-all [rm row-maps-gen
                 col columnar-gen
                 rows rows-gen]
    (and (or (empty? rm) (= :row-maps (sut/detect-structure rm)))
         (= :columnar (sut/detect-structure col))
         (= :rows (sut/detect-structure rows)))))

(def consistent-row-maps-gen-2
   (gen/let [keys (gen/vector gen/keyword 1 5)
             val-vecs (gen/vector (gen/vector simple-value-gen (count keys)))]
     (mapv (fn [vals] (zipmap keys vals)) val-vecs)))

(def transform-cycle-prop
  (prop/for-all [data consistent-row-maps-gen-2]
    (let [col (sut/transform data :row-maps :columnar)
          rows (sut/transform data :row-maps :rows)
          back-from-col (sut/transform col :columnar :row-maps)
          back-from-rows (sut/transform rows :rows :row-maps)]
      (and (= data back-from-col)
           (= data back-from-rows)))))

;; --- Tests ---

(deftest detect-structure-test
  (testing "Generative structure detection"
    (let [result (tc/quick-check 50 detect-structure-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest transform-cycle-test
  (testing "Generative transform cycles"
    (let [result (tc/quick-check 50 transform-cycle-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))
