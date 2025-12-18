(ns bb-web-ds-tools.utils.dataset-processing
  (:require ["papaparse" :as Papa]
            ["js-yaml" :as yaml]
            [sci.core :as sci]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [cljs.pprint :as pprint]
            [camel-snake-kebab.core :as csk]))

(defn normalize-column-name
  "Normalizes a column name based on the provided configuration.

  Args:
    col-name (keyword/string): The original column name.
    config (map): Normalization config with keys :case and :output.

  Returns:
    keyword/string/symbol: The normalized column name."
  [col-name {casing :case output :output}]
  (let [s (if (or (keyword? col-name) (symbol? col-name))
            (name col-name)
            (str col-name))
        s-case (case casing
                 :snake_case (csk/->snake_case s)
                 :CamelCase (csk/->PascalCase s)
                 :kebab-case (csk/->kebab-case s)
                 s)]
    (case output
      :keyword (keyword s-case)
      :symbol (symbol s-case)
      s-case)))

(def config
  "Default configuration for dataset parsing and formatting."
  {:markdown {:cell-separator " | "
              :row-start "| "
              :row-end " |"
              :header-dash "---"}
   :json {:indent 2
          :error-msg "JSON Parse Error"}})

;; --- Normalization ---

(defn normalize-columnar
  "Normalizes columnar data (map of arrays) into a sequence of row maps.

  Args:
    data (map): Data in columnar format e.g. {:col1 [v1 v2] :col2 [v3 v4]}.

  Returns:
    vector: A vector of maps e.g. [{:col1 v1 :col2 v3} ...]."
  [data]
  (let [cols (keys data)
        col-vecs (mapv data cols)
        cnt (if (seq col-vecs) (reduce max 0 (map count col-vecs)) 0)]
    (mapv (fn [i]
            (zipmap cols (map #(nth % i nil) col-vecs)))
          (range cnt))))

(defn normalize-row-arrays
  "Normalizes row-array data (vector of vectors, first is header) into a sequence of row maps.

  Args:
    data (vector): Data in row-array format e.g. [[col1 col2] [v1 v2]].

  Returns:
    vector: A vector of maps."
  [data]
  (let [header (map keyword (first data))
        rows (rest data)]
    (mapv (fn [row] (zipmap header row)) rows)))

;; --- Parsing Logic ---

(defn- parse-json
  "Parses a JSON string into Clojure data.

  Args:
    text (string): The JSON string.
    conf (map, optional): Configuration map.

  Returns:
    any: Parsed Clojure data or nil on error."
  ([text] (parse-json text (:json config)))
  ([text conf]
   (let [conf (or conf (:json config))]
     (try
       (js->clj (js/JSON.parse text) :keywordize-keys true)
       (catch js/Error e
         (js/console.error (:error-msg conf) e)
         nil)))))

(defn- parse-yaml
  "Parses a YAML string into Clojure data.

  Args:
    text (string): The YAML string.

  Returns:
    any: Parsed Clojure data or nil on error."
  [text]
  (try
    (js->clj (yaml/load text) :keywordize-keys true)
    (catch js/Error e
      (js/console.error "YAML Parse Error" e)
      nil)))

(defn- parse-structured
  "Parses structured text (JSON/EDN/YAML) and normalizes it based on the target structure.

  Args:
    parse-fn (fn): Function to parse text into data (e.g., parse-json, edn/read-string).
    structure (keyword): Target structure (:columnar, :row-maps, :row-arrays, :tree).
    text (string): The text to parse.

  Returns:
    any: The normalized data."
  [parse-fn structure text]
  (let [data (parse-fn text)]
    (case structure
      :columnar (some-> data normalize-columnar)
      :row-maps data
      :row-arrays (some-> data normalize-row-arrays)
      :tree data
      data)))

(defmulti parse-dataset
  "Parses raw text into a dataset based on format and structure.

  Args:
    format (keyword): The format of the input text (:csv, :tsv, :json, :edn, :yaml, :markdown, :text).
    structure (keyword): The desired structure of the output data (:columnar, :row-maps, :row-arrays, :tree, :lines, :raw).
    text (string): The raw input text.

  Returns:
    any: The parsed dataset."
  (fn [format structure _text]
    (if (#{:json :edn :yaml} format)
      format
      [format structure])))

(defmethod parse-dataset [:csv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset [:tsv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:delimiter "\t" :header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defn- parse-markdown-row [line]
  (let [parts (into [] (map str/trim) (str/split line #"\|"))
        n (count parts)
        start (if (and (> n 0) (empty? (nth parts 0))) 1 0)
        end (if (and (> n 0) (empty? (peek parts))) (dec n) n)]
    (if (< start end)
      (subvec parts start end)
      [])))

(defmethod parse-dataset [:markdown :columnar] [_ _ text]
  (let [lines (into [] (comp (map str/trim) (remove empty?)) (str/split-lines text))
        [header-line _ & data-lines] lines
        header (map keyword (parse-markdown-row header-line))]
    (mapv (fn [line] (zipmap header (parse-markdown-row line))) data-lines)))

;; Structured parsing (dispatch by format only)
(defmethod parse-dataset :json [_ structure text] (parse-structured parse-json structure text))
(defmethod parse-dataset :edn [_ structure text] (parse-structured edn/read-string structure text))
(defmethod parse-dataset :yaml [_ structure text] (parse-structured parse-yaml structure text))

(defmethod parse-dataset [:text :lines] [_ _ text]
  (mapv (fn [line] {:line line}) (str/split-lines text)))

(defmethod parse-dataset [:text :raw] [_ _ text]
  [{:text text}])

(defmethod parse-dataset :default [_ _ _]
  [])

;; --- Examples ---

(def example-rows
  "Example dataset rows used for generating sample data."
  [{:id 1 :score 12.5 :category "a" :date "2023-01-01"}
   {:id 2 :score 10.2 :category "b" :date "2023-01-02"}
   {:id 3 :score 8.7  :category "c" :date "2023-01-03"}
   {:id 4 :score 15.0 :category "a" :date "2023-01-04"}
   {:id 5 :score 9.9  :category "b" :date "2023-01-05"}
   {:id 6 :score 11.1 :category "c" :date "2023-01-06"}
   {:id 7 :score 13.4 :category "a" :date "2023-01-07"}
   {:id 8 :score 7.8  :category "b" :date "2023-01-08"}
   {:id 9 :score 14.2 :category "c" :date "2023-01-09"}
   {:id 10 :score 10.0 :category "a" :date "2023-01-10"}])

(def example-tree
  "Example tree data for testing."
  {:name "root"
   :children [{:name "child1" :value 1}
              {:name "child2" :value 2
               :children [{:name "grandchild1" :value 3}]}]})

(defn- to-columnar
  "Converts a sequence of row maps to columnar format."
  [rows]
  (let [ks (keys (first rows))]
    (reduce (fn [acc k]
              (assoc acc k (mapv #(get % k) rows)))
            {}
            ks)))

(defn- to-row-arrays
  "Converts a sequence of row maps to row-array format (with header)."
  [rows]
  (let [ks (keys (first rows))]
    (vec (cons (vec ks)
               (mapv (fn [row] (mapv #(get row %) ks)) rows)))))

(defn- to-markdown-table
  "Formats data as a Markdown table."
  ([rows] (to-markdown-table rows (:markdown config)))
  ([rows conf]
   (let [conf (or conf (:markdown config))
         ks (keys (first rows))
         cell-sep (:cell-separator conf)
         row-start (:row-start conf)
         row-end (:row-end conf)
         dash (:header-dash conf)
         header (str row-start (str/join cell-sep (map name ks)) row-end)
         separator (str row-start (str/join cell-sep (repeat (count ks) dash)) row-end)
         data-lines (map (fn [row]
                           (str row-start (str/join cell-sep (map #(get row %) ks)) row-end))
                         rows)]
     (str/join "\n" (cons header (cons separator data-lines))))))

(defn- stringify-json
  "Converts data to a JSON string with indentation."
  ([data] (stringify-json data (:json config)))
  ([data conf]
   (let [conf (or conf (:json config))]
     (js/JSON.stringify (clj->js data) nil (:indent conf)))))

(defn- stringify-yaml
  "Converts data to a YAML string."
  [data]
  (yaml/dump (clj->js data)))

(defn- get-structured-data
  "Returns the example data in the requested structure."
  [structure]
  (case structure
    :row-maps example-rows
    :columnar (to-columnar example-rows)
    :row-arrays (to-row-arrays example-rows)
    :tree example-tree
    example-rows))

(defn- example-structured
  "Generates example data for structured formats (JSON/EDN).

  Args:
    format-fn (fn): Function to format data as string.
    structure (keyword): Target structure.
    conf (map, optional): Configuration map (passed to format-fn if supported).

  Returns:
    string: The formatted example data."
  [format-fn structure conf]
  (let [data (get-structured-data structure)]
    (format-fn data conf)))

(defmulti example-data
  "Generates example data string for a given format and structure.

  Args:
    fmt (keyword): Output format (:csv, :tsv, :json, :edn, :yaml, :markdown, :text).
    structure (keyword): Data structure (:columnar, :row-maps, :row-arrays, :tree, :lines, :raw).
    conf (map, optional): Configuration map.

  Returns:
    string: The example data string."
  (fn [fmt structure & [conf]]
    (if (#{:json :edn :yaml} fmt)
      fmt
      [fmt structure])))

(defmethod example-data [:csv :columnar] [_ _ & [conf]]
  (.unparse Papa (clj->js example-rows) #js {:header true}))

(defmethod example-data [:tsv :columnar] [_ _ & [conf]]
  (.unparse Papa (clj->js example-rows) #js {:delimiter "\t" :header true}))

(defmethod example-data [:markdown :columnar] [_ _ & [conf]]
  (to-markdown-table example-rows (:markdown conf)))

;; Structured examples (dispatch by format only)
(defmethod example-data :json [_ structure & [conf]]
  (example-structured stringify-json structure conf))

(defmethod example-data :edn [_ structure & [conf]]
  (example-structured (fn [d _] (with-out-str (pprint/pprint d))) structure conf))

(defmethod example-data :yaml [_ structure & [conf]]
  (example-structured (fn [d _] (stringify-yaml d)) structure conf))

(defmethod example-data [:text :lines] [_ _ & [conf]]
  "Line 1: Hello World
Line 2: This is a text file
Line 3: 123-456-7890")

(defmethod example-data [:text :raw] [_ _ & [conf]]
  "This is a raw text block.\nIt contains newlines and special characters.\n\nUse it to test regex matching on the whole content.")

(defmethod example-data :default [_ _ & [conf]] "")

;; --- Conversion Logic ---

(defn- remove-internal-keys
  [data]
  (if (and (sequential? data) (map? (first data)))
    (into [] (map #(dissoc % :_uuid)) data)
    data))

(defn- format-data
  [clean-data structured-data format structure]
  (case format
    :csv (if (= structure :columnar)
           (.unparse Papa (clj->js clean-data) #js {:header true})
           "CSV only supports columnar structure.")
    :tsv (if (= structure :columnar)
           (.unparse Papa (clj->js clean-data) #js {:delimiter "\t" :header true})
           "TSV only supports columnar structure.")
    :markdown (if (= structure :columnar)
                (to-markdown-table clean-data)
                "Markdown only supports columnar structure.")
    :json (stringify-json structured-data)
    :edn (with-out-str (pprint/pprint structured-data))
    :yaml (stringify-yaml structured-data)
    "Unsupported format"))

(defn convert-data
  "Converts the dataset to the specified format and structure.

  Args:
    data (seq): Sequence of row maps (the internal dataset representation).
    format (keyword): Target format (:csv, :tsv, :json, :edn, :yaml, :markdown).
    structure (keyword): Target structure (:columnar, :row-maps, :row-arrays, :tree).

  Returns:
    string: The converted data string."
  [data format structure]
  (let [clean-data (remove-internal-keys data)
        structured-data (case structure
                          :columnar (to-columnar clean-data)
                          :row-arrays (to-row-arrays clean-data)
                          clean-data)]
    (format-data clean-data structured-data format structure)))

;; --- Table Processing ---

(def filter-ctx
  (sci/init {:classes {}
             :namespaces {'clojure.core {'= =
                                         '> >
                                         '< <
                                         '>= >=
                                         '<= <=
                                         'count count
                                         'not not
                                         'inc inc
                                         'dec dec
                                         'first first
                                         'last last
                                         'nth nth
                                         'subs subs}
                          'clojure.string {'includes? str/includes?
                                           'lower-case str/lower-case
                                           'upper-case str/upper-case
                                           'starts-with? str/starts-with?
                                           'ends-with? str/ends-with?}}}))

(defn compile-filter
  "Compiles a filter string into a predicate function using SCI."
  [expression-str]
  (try
    (if (str/blank? expression-str)
      nil
      (let [res (sci/eval-string expression-str filter-ctx)]
        (if (fn? res)
          res
          (fn [val] (= val res)))))
    (catch :default _
      (fn [val]
        (let [val-str (str val)
              input-str (str expression-str)]
          (= val-str input-str))))))

(defn compile-filters
  "Compiles a map of raw filter strings into a map of predicate functions."
  [filters]
  (reduce-kv (fn [m k v]
               (if (str/blank? v)
                 m
                 (assoc m k (compile-filter v))))
             {}
             filters))

(defn- match-filter? [row [k f]]
  (try
    (f (get row k))
    (catch :default _ false)))

(defn apply-filters
  "Filters the data based on the compiled filters map.
   Uses a transducer for performance."
  [data compiled-filters]
  (if (seq compiled-filters)
    (into []
          (filter (fn [row]
                    (every? #(match-filter? row %) compiled-filters)))
          data)
    data))

(defn apply-sorting
  "Sorts the data based on sort column and direction."
  [data sort-col sort-dir]
  (if sort-col
    (sort-by sort-col (if (= sort-dir :asc) compare #(compare %2 %1)) data)
    data))

(defn get-pagination-info
  "Calculates pagination indices and slices the data."
  [data page rows-per-page]
  (let [total-rows (count data)
        start-idx (min (* page rows-per-page) total-rows)
        end-idx (min (+ start-idx rows-per-page) total-rows)]
    {:total-rows total-rows
     :start-idx start-idx
     :end-idx end-idx
     :page-data (subvec (vec data) start-idx end-idx)}))

(defn process-table-data
  "Processes dataset data for display in a table: filtering, sorting, and pagination.

  Returns a map containing:
    - :filtered-data (seq): Data after filtering.
    - :page-data (vector): Data for the current page.
    - :total-rows (int): Total count after filtering.
    - :start-idx (int): Start index of display.
    - :end-idx (int): End index of display.
    - :visible-columns (seq): List of visible column keys."
  [data {:keys [page rows-per-page filters hidden-columns sort-col sort-dir columns]}]
  (let [all-columns (or columns (keys (first data)))
        compiled-filters (when (seq filters) (compile-filters filters))
        filtered-data (apply-filters data compiled-filters)
        sorted-data (apply-sorting filtered-data sort-col sort-dir)
        pagination (get-pagination-info sorted-data page rows-per-page)
        visible-columns (remove hidden-columns all-columns)]
    (merge {:filtered-data filtered-data
            :visible-columns visible-columns}
           pagination)))
