(ns bb-web-ds-tools.utils.dataset-processing-gen-test
  (:require [cljs.test :refer [deftest is testing]]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.string :as str]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

;; --- Generators ---

(def simple-value-gen
  ;; Limit to simple types, removing large integers or floats that might cause issues with JSON parsing/formatting differences
  (gen/one-of [gen/string
               gen/boolean]))

(def row-map-gen
  (gen/map gen/keyword simple-value-gen))

(def dataset-gen
  (gen/vector row-map-gen))

(def string-gen (gen/not-empty gen/string-alphanumeric))

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

;; Casing Properties

(def snake-case-prop
  (prop/for-all [s string-gen]
    (let [res (dp/to-snake-case s)]
      (and (string? res)
           (= res (str/lower-case res))
           (not (str/includes? res " "))
           (not (str/includes? res "-"))))))

(def kebab-case-prop
  (prop/for-all [s string-gen]
    (let [res (dp/to-kebab-case s)]
      (and (string? res)
           (= res (str/lower-case res))
           (not (str/includes? res " "))
           (not (str/includes? res "_"))))))

;; Pagination Property

(def pagination-prop
  (prop/for-all [dataset dataset-gen
                 page (gen/choose 0 10)
                 rows-per-page (gen/choose 1 20)]
    (let [res (dp/get-pagination-info dataset page rows-per-page)
          count-data (count dataset)
          page-data-count (count (:page-data res))]
      (and
        (<= page-data-count rows-per-page)
        (if (> count-data (* page rows-per-page))
             (> page-data-count 0)
             (= page-data-count 0))
        (= (:total-rows res) count-data)))))

;; Sorting Property (Simple)

(defn sorted-seq? [pred coll]
  (every? (fn [[a b]] (pred a b)) (partition 2 1 coll)))

(def sort-prop
  (prop/for-all [vals (gen/vector gen/int)]
    (let [data (mapv (fn [v] {:val v}) vals)
          sorted-asc (dp/apply-sorting data :val :asc)
          sorted-desc (dp/apply-sorting data :val :desc)
          vals-asc (map :val sorted-asc)
          vals-desc (map :val sorted-desc)]
      (and
        (sorted-seq? <= vals-asc)
        (sorted-seq? >= vals-desc)))))


;; --- Tests ---

(deftest json-round-trip-test
  (testing "Generative JSON round-trip"
    (let [result (tc/quick-check 50 json-round-trip-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest edn-round-trip-test
  (testing "Generative EDN round-trip"
    (let [result (tc/quick-check 50 edn-round-trip-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))

(deftest casing-gen-test
  (testing "Snake case properties"
    (is (:pass? (tc/quick-check 50 snake-case-prop))))
  (testing "Kebab case properties"
    (is (:pass? (tc/quick-check 50 kebab-case-prop)))))

(deftest pagination-gen-test
  (testing "Pagination properties"
    (is (:pass? (tc/quick-check 50 pagination-prop)))))

(deftest sorting-gen-test
  (testing "Sorting properties"
    (let [result (tc/quick-check 50 sort-prop)]
      (is (:pass? result) (str "Failed: " (pr-str (:shrunk result)))))))
