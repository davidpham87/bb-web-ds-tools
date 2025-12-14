(ns bb-web-ds-tools.components.malli-gen-test
  "Tests for bb-web-ds-tools.components.malli-gen-test.

  Key functionality: simple-value-gen, simple-schema-gen, map-schema-gen, inference-validation-prop, generation-validation-prop"
  (:require [cljs.test :refer [deftest is testing]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
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
