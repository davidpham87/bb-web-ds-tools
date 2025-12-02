(ns bb-web-ds-tools.components.malli
  (:require [malli.provider :as mp]
            [malli.generator :as mg]
            [malli.core :as m]
            [malli.json-schema :as json-schema]
            [clojure.string :as str]
            #?(:cljs [cljs.pprint :as pprint]
               :clj [clojure.pprint :as pprint])
            #?(:cljs [cljs.reader :as reader]
               :clj [clojure.edn :as reader])
            #?(:clj [cheshire.core :as json])
            #?(:cljs [bb-web-ds-tools.components.common :as c])))

;; Utils

(defn parse-int
  "Parses a string to an integer. Cross-platform.

  Args:
    s (string): The string to parse.

  Returns:
    integer: The parsed integer."
  [s]
  #?(:cljs (js/parseInt s)
     :clj (Integer/parseInt s)))

(defn read-edn
  "Reads EDN from a string. Cross-platform.

  Args:
    s (string): The EDN string.

  Returns:
    any: The parsed data."
  [s]
  (reader/read-string s))

(defn parse-json
  "Parses a JSON string. Cross-platform.

  Args:
    s (string): The JSON string.

  Returns:
    any: The parsed data (keywordized keys in Clojure)."
  [s]
  #?(:cljs (js->clj (js/JSON.parse s) :keywordize-keys true)
     :clj (json/parse-string s true)))

(defn generate-json
  "Generates a JSON string from data. Cross-platform.

  Args:
    data (any): The data to serialize.

  Returns:
    string: The JSON string."
  [data]
  #?(:cljs (js/JSON.stringify (clj->js data) nil 2)
     :clj (json/generate-string data {:pretty true})))

(defn pretty-print-str
  "Pretty prints data to a string. Cross-platform.

  Args:
    data (any): The data to print.

  Returns:
    string: The formatted string."
  [data]
  (with-out-str (pprint/pprint data)))

;; Component Logic

(defn detect-and-parse
  "Detects input format (EDN or JSON) and parses it.

  Args:
    text (string): The input text.

  Returns:
    any: The parsed data or nil."
  [text]
  (if (str/blank? text)
    nil
    (try
      (read-edn text)
      (catch #?(:cljs :default :clj Exception) _
        (try
          (parse-json text)
          (catch #?(:cljs :default :clj Exception) _ nil))))))

(defn parse-schema-and-generate
  "Parses a Malli schema from EDN string.

  Args:
    schema-text (string): The schema EDN string.

  Returns:
    map: {:success true :schema ...} or {:success false :error ...}."
  [schema-text]
  (try
    (let [schema (read-edn schema-text)]
      {:success true :schema schema})
    (catch #?(:cljs :default :clj Exception) e
      {:success false :error (str "Invalid schema EDN: " (ex-message e))})))

(defn generate-data
  "Generates random data from a Malli schema.

  Args:
    schema (any): The Malli schema.
    samples (int): Number of samples.
    format (keyword): Output format (:edn or :json).

  Returns:
    map: {:success true :output string :data any}."
  [schema samples format]
  (if schema
    (let [data (if (> samples 1)
                 (vec (repeatedly samples #(mg/generate schema)))
                 (mg/generate schema))
          output (case format
                   :edn (pretty-print-str data)
                   :json (generate-json data)
                   (pr-str data))]
      {:success true :output output :data data})
    {:success false :error "Invalid schema."}))

(defn infer-schema
  "Infers a Malli schema from data.

  Args:
    input-data (coll): The input data sample.

  Returns:
    map: {:success true :schema-str string} or error."
  [input-data]
  (if (and (coll? input-data) (seq input-data))
    {:success true
     :schema-str (pretty-print-str (mp/provide input-data))}
    {:success false
     :error "Invalid input data or empty sequence."}))

(defn save-dataset-data
  "Parses generated data string back to data for saving.

  Args:
    generated-data (string): The data string.
    format (keyword): The format.

  Returns:
    any: The parsed data or nil."
  [generated-data format]
   (case format
      :edn (try (read-edn generated-data) (catch #?(:cljs :default :clj Exception) _ nil))
      :json (try (parse-json generated-data) (catch #?(:cljs :default :clj Exception) _ nil))
      nil))

(defn validate-data
  "Validates data against a schema.

  Args:
    schema (any): The Malli schema.
    data (any): The data to validate.

  Returns:
    map: {:success true :result string} or error."
  [schema data]
  (if (and schema data)
    (if (m/validate schema data)
      {:success true :result "✅ Data is valid."}
      {:success false :result (m/explain schema data)})
    {:success false :error "Invalid schema or data."}))

(defn transform-to-json-schema
  "Transforms a Malli schema to JSON Schema.

  Args:
    schema (any): The Malli schema.

  Returns:
    map: {:success true :json-schema string} or error."
  [schema]
  (if schema
    (try
      {:success true :json-schema (generate-json (json-schema/transform schema))}
      (catch #?(:cljs :default :clj Exception) e
        {:success false :error (str "Transformation failed: " (ex-message e))}))
    {:success false :error "Invalid schema."}))

;; Legacy UI Components (kept for stories compatibility)
#?(:cljs
   (do
     (defn inference-panel
       "Renders the legacy inference panel.

       Args:
         props (map): {:values, :handle-change, :on-infer, :inferred-schema}.

       Returns:
         vector: A hiccup vector."
       [{:keys [values handle-change on-infer inferred-schema]}]
       [c/card {}
        [:div
         [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
          [:span "🧩"] "Schema Inference"]
         [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
          [:div
           [c/label "Input Data (EDN)"]
           [c/textarea {:value (get values "inference-input")
                        :name "inference-input"
                        :placeholder "{:user/name \"Alice\" :user/age 30}"
                        :on-change handle-change
                        :class "h-64"}]
           [:div {:class "mt-4"}
            [c/button {:on-click on-infer} "Infer Schema"]]]
          [:div
           [c/label "Inferred Schema"]
           [c/pre-block {:content inferred-schema :class "h-64"}]]]]])

     (defn generation-panel
       "Renders the legacy generation panel.

       Args:
         props (map): {:values, :handle-change, :on-generate, :generated-data}.

       Returns:
         vector: A hiccup vector."
       [{:keys [values handle-change on-generate generated-data]}]
       [c/card {}
        [:div
         [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
          [:span "🎲"] "Data Generation"]
         [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
          [:div
           [c/label "Schema (EDN)"]
           [c/textarea {:value (get values "schema-text")
                        :name "schema-text"
                        :placeholder "[:map [:x int?] [:y int?]]"
                        :on-change handle-change
                        :class "h-64"}]
           [:div {:class "mt-4"}
            [c/button {:on-click on-generate} "Generate Data"]]]
          [:div
           [c/label "Generated Data"]
           [c/pre-block {:content generated-data :class "h-64"}]]]]])))
