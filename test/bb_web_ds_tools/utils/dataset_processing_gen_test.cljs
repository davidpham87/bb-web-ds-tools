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

(def remove-internal-keys-prop
  (prop/for-all [dataset dataset-gen]
                (let [dataset-with-uuid (mapv #(assoc % :_uuid (random-uuid)) dataset)
                      ;; Access private function for testing. Note: In CLJS private vars are accessible but it's better to test public behavior.
                      ;; However, convert-data uses it. So we can test convert-data with :row-maps.
                      ;; But convert-data returns string.
                      ;; We can re-implement the logic or just trust that `convert-data` works if we can't access private var easily.
                      ;; Or use #' if targeting CLJ, but this is CLJS.
                      ;; In CLJS `dp/remove-internal-keys` works if we didn't use `defn-`.
                      ;; Since I used `defn-` I cannot access it directly easily.
                      ;; I will test via `convert-data` with :row-maps and :edn output, then read string back.
                      res-str (dp/convert-data dataset-with-uuid :edn :row-maps)
                      res-data (cljs.reader/read-string res-str)]
                  (= dataset res-data))))

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

(deftest remove-internal-keys-test
  (testing "Generative remove-internal-keys via convert-data"
    (let [result (tc/quick-check 50 remove-internal-keys-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))
