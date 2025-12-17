(ns bb-web-ds-tools.utils.dataset-processing-gen-test
  (:require [cljs.test :refer [deftest is testing]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

;; --- Generators ---

(def simple-value-gen
  ;; Limit to simple types
  (gen/one-of [gen/string
               gen/boolean]))

(def row-map-gen
  (gen/map gen/keyword simple-value-gen))

(def dataset-gen
  (gen/vector row-map-gen))

;; --- Properties ---

(def json-round-trip-prop
  (prop/for-all [dataset dataset-gen]
                (let [json-str (js/JSON.stringify (clj->js dataset))
                      parsed (dp/parse-dataset :json :row-maps json-str)
          ;; Normalize original dataset to what we expect from JSON parsing
          ;; 1. Convert to JS and back to handling keyword conversion
                      normalized (js->clj (clj->js dataset) :keywordize-keys true)]
                  (= normalized parsed))))

(def edn-round-trip-prop
  (prop/for-all [dataset dataset-gen]
                (let [edn-str (pr-str dataset)
                      parsed (dp/parse-dataset :edn :row-maps edn-str)]
                  (= dataset parsed))))

(def normalize-column-name-prop
  (prop/for-all [s gen/string-alphanumeric]
                (let [res (dp/normalize-column-name s {:case :snake_case :output :string})]
                  (string? res))))

;; --- Tests ---

(deftest json-round-trip-test
  (testing "Generative JSON round-trip"
    (let [result (tc/quick-check 50 json-round-trip-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest edn-round-trip-test
  (testing "Generative EDN round-trip"
    (let [result (tc/quick-check 50 edn-round-trip-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest normalize-column-name-test
  (testing "Generative normalize-column-name"
    (let [result (tc/quick-check 50 normalize-column-name-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))
