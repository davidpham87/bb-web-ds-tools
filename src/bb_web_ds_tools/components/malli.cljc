(ns bb-web-ds-tools.components.malli
  (:require [clojure.walk :as walk]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [malli.core :as m]
            [malli.json-schema :as json-schema]
            [clojure.string :as str]
            #?(:cljs [cljs.pprint :as pprint]
               :clj [clojure.pprint :as pprint])
            #?(:cljs [cljs.reader :as reader]
               :clj [clojure.edn :as reader])
            #?(:clj [cheshire.core :as json])
            #?(:cljs [bb-web-ds-tools.components.common :as c])
            #?(:cljs ["@js-joda/core" :as js-joda])))

;; Utils

(defn compare-time
  "Comparator for time objects (Java time or JS Joda).

  Args:
    a (any): First time object.
    b (any): Second time object.

  Returns:
    int: Negative if a < b, positive if a > b, 0 if equal."
  [a b]
  #?(:cljs (.compareTo ^js a b)
     :clj (compare a b)))

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
  (if (and schema (pos? samples))
    (let [data (if (> samples 1)
                 (vec (repeatedly samples #(mg/generate schema)))
                 (mg/generate schema))
          output (case format
                   :edn (pretty-print-str data)
                   :json (generate-json data)
                   (pr-str data))]
      {:success true :output output :data data})
    {:success false :error "Invalid schema or samples."}))

(defn- annotate-schema
  "Recursively builds a tree of {:type ... :data ...} to align data with schema."
  [schema data]
  (cond
    ;; Map
    (and (vector? schema) (= :map (first schema)))
    (let [[type & tail] schema
          [props entries] (if (map? (first tail))
                            [(first tail) (rest tail)]
                            [nil tail])
          maps (if (map? data) [data] (filter map? data))]
      {:type :map
       :schema-type type
       :props props
       :children (mapv (fn [entry]
                         (if (vector? entry)
                           (let [has-props? (map? (second entry))
                                 k (first entry)
                                 [p v-schema] (if has-props?
                                                [(second entry) (nth entry 2)]
                                                [nil (second entry)])
                                 vals (map #(get % k) maps)
                                 child-node (annotate-schema v-schema vals)]
                             {:type :entry :key k :props p :child child-node})
                           {:type :entry-raw :original entry}))
                       entries)})

    ;; Collection
    (and (vector? schema) (#{ :vector :sequential :set } (first schema)))
    (let [[type child-schema] schema
          child-data (if (every? coll? data) (mapcat identity data) data)]
      {:type :collection
       :collection-type type
       :child (annotate-schema child-schema child-data)})

    ;; Wrapper (Maybe)
    (and (vector? schema) (= :maybe (first schema)))
    (let [[type child-schema] schema
          child-data (remove nil? data)]
      {:type :wrapper
       :wrapper-type type
       :child (annotate-schema child-schema child-data)})

    ;; Leaf
    :else
    {:type :leaf
     :schema schema
     :data data}))

(defn- deannotate-schema
  "Reconstructs schema from annotated tree using postwalk."
  [tree]
  (walk/postwalk
    (fn [node]
      (if (map? node)
        (case (:type node)
          :map (into (if (:props node) [(:schema-type node) (:props node)] [(:schema-type node)])
                     (:children node))
          :entry (if (:props node)
                   [(:key node) (:props node) (:child node)]
                   [(:key node) (:child node)])
          :entry-raw (:original node)
          :collection [(:collection-type node) (:child node)]
          :wrapper [(:wrapper-type node) (:child node)]
          :leaf (:schema node)
          node)
        node))
    tree))

(defn- refine-schema-with-data
  "Refines schema by replacing string types with enums and adding min/max to numbers and dates."
  [schema data max-values]
  (let [annotated (annotate-schema schema data)
        refined (walk/postwalk
                  (fn [node]
                    (if (and (map? node) (= :leaf (:type node)))
                      (let [s (:schema node)
                            d (:data node)
                            s-type (if (vector? s) (first s) s)]
                        (cond
                          ;; Enum Inference
                          (or (= s-type 'string?) (= s-type :string))
                          (let [strings (filter string? d)
                                distinct-vals (distinct strings)
                                cnt (count distinct-vals)]
                            (if (and (pos? cnt) (<= cnt max-values))
                              (assoc node :schema (into [:enum] (sort distinct-vals)))
                              node))

                          ;; Min/Max Inference (Numbers)
                          (#{:int :double :number 'int? 'double? 'number?} s-type)
                          (let [nums (filter number? d)]
                            (if (seq nums)
                              (let [min-val (apply min nums)
                                    max-val (apply max nums)
                                    existing-props (if (and (vector? s) (map? (second s))) (second s) nil)
                                    new-props (merge existing-props {:min min-val :max max-val})
                                    new-schema (if (vector? s)
                                                 (if (map? (second s))
                                                   (assoc s 1 new-props)
                                                   (into [(first s) new-props] (rest s)))
                                                 [s new-props])]
                                (assoc node :schema new-schema))
                              node))

                          ;; Min/Max Inference (Dates)
                          (or (= s-type 'inst?) (= s-type :inst))
                          (let [dates (filter inst? d)]
                            (if (seq dates)
                              (let [sorted (sort dates)
                                    min-val (first sorted)
                                    max-val (last sorted)
                                    existing-props (if (and (vector? s) (map? (second s))) (second s) nil)
                                    new-props (merge existing-props {:min min-val :max max-val})
                                    new-schema (if (vector? s)
                                                 (if (map? (second s))
                                                   (assoc s 1 new-props)
                                                   (into [(first s) new-props] (rest s)))
                                                 [s new-props])]
                                (assoc node :schema new-schema))
                              node))

                          ;; Min/Max Inference (Time Types)
                          (#{:time/instant :time/local-date :time/local-date-time} s-type)
                          (let [times (filter #(not (nil? %)) d)]
                            (if (seq times)
                              (let [sorted (sort compare-time times)
                                    min-val (first sorted)
                                    max-val (last sorted)
                                    existing-props (if (and (vector? s) (map? (second s))) (second s) nil)
                                    new-props (merge existing-props {:min min-val :max max-val})
                                    new-schema (if (vector? s)
                                                 (if (map? (second s))
                                                   (assoc s 1 new-props)
                                                   (into [(first s) new-props] (rest s)))
                                                 [s new-props])]
                                (assoc node :schema new-schema))
                              node))

                          :else node))
                      node))
                  annotated)]
    (deannotate-schema refined)))

(defn infer-schema
  "Infers a Malli schema from data.

  Args:
    input-data (coll): The input data sample.
    max-enum-values (int, optional): Max values to infer enum. Default 10.

  Returns:
    map: {:success true :schema-str string} or error."
  ([input-data] (infer-schema input-data 10))
  ([input-data max-enum-values]
   (if (and (coll? input-data) (seq input-data))
     (let [schema (mp/provide input-data)
           refined-schema (refine-schema-with-data schema input-data max-enum-values)]
       {:success true
        :schema-str (pretty-print-str refined-schema)})
     {:success false
      :error "Invalid input data or empty sequence."})))

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
