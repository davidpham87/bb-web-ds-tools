(ns bb-web-ds-tools.utils.dataset-processing
  (:require ["papaparse" :as Papa]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [cljs.pprint :as pprint]))

(def config
  {:markdown {:cell-separator " | "
              :row-start "| "
              :row-end " |"
              :header-dash "---"}
   :json {:indent 2
          :error-msg "JSON Parse Error"}})

;; --- Normalization ---

(defn normalize-columnar
  "Normalizes columnar data (map of arrays) into a sequence of row maps.
   Handles uneven column lengths by padding with nil.

  Args:
    data (map): A map where keys are column names and values are sequences of column values.

  Returns:
    vector: A vector of maps, where each map represents a row."
  [data]
  (let [cols (keys data)
        vals-seq (vals data)
        cnt (if (seq vals-seq) (reduce max 0 (map count vals-seq)) 0)]
    (mapv (fn [i]
            (zipmap cols (map #(get (get data %) i) cols)))
          (range cnt))))

(defn normalize-row-arrays
  "Normalizes row-array data (vector of vectors, first is header) into a sequence of row maps.

  Args:
    data (seq): A sequence of vectors. The first vector is expected to be the header row.

  Returns:
    vector: A vector of maps, where each map represents a row."
  [data]
  (let [header (map keyword (first data))
        rows (rest data)]
    (mapv (fn [row] (zipmap header row)) rows)))

;; --- Parsing Logic ---

(defmulti parse-dataset
  "Parses dataset text into a sequence of maps (row-maps) based on format and structure.

  Args:
    format (keyword): The input format (:csv, :tsv, :json, :edn, :markdown).
    structure (keyword): The input structure (:columnar, :row-maps, :row-arrays).
    text (string): The raw text content to parse.

  Returns:
    vector: A vector of maps representing the dataset rows."
  (fn [format structure _text] [format structure]))

;; CSV/TSV are inherently "columnar" (tabular) in this context, but produce row-maps via PapaParse.
;; We treat them as valid inputs for :columnar structure selection.
(defmethod parse-dataset [:csv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset [:tsv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:delimiter "\t" :header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset [:markdown :columnar] [_ _ text]
  (let [lines (->> (str/split-lines text)
                   (map str/trim)
                   (remove empty?))
        parse-row (fn [line]
                    (->> (str/split line #"\|")
                         (map str/trim)
                         (remove empty?)))
        [header-line _ & data-lines] lines
        header (map keyword (parse-row header-line))]
    (mapv (fn [line] (zipmap header (parse-row line))) data-lines)))

(defn- parse-json
  ([text] (parse-json text (:json config)))
  ([text conf]
   (let [conf (or conf (:json config))]
     (try
       (js->clj (js/JSON.parse text) :keywordize-keys true)
       (catch js/Error e
         (js/console.error (:error-msg conf) e)
         nil)))))

(defmethod parse-dataset [:json :columnar] [_ _ text]
  (some-> (parse-json text) normalize-columnar))

(defmethod parse-dataset [:json :row-maps] [_ _ text]
  (parse-json text))

(defmethod parse-dataset [:json :row-arrays] [_ _ text]
  (some-> (parse-json text) normalize-row-arrays))

(defmethod parse-dataset [:edn :columnar] [_ _ text]
  (some-> (edn/read-string text) normalize-columnar))

(defmethod parse-dataset [:edn :row-maps] [_ _ text]
  (edn/read-string text))

(defmethod parse-dataset [:edn :row-arrays] [_ _ text]
  (some-> (edn/read-string text) normalize-row-arrays))

(defmethod parse-dataset :default [_ _ _]
  [])

;; --- Examples ---

(def example-rows
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

(defn- to-columnar [rows]
  (let [ks (keys (first rows))]
    (reduce (fn [acc k]
              (assoc acc k (mapv k rows)))
            {}
            ks)))

(defn- to-row-arrays [rows]
  (let [ks (keys (first rows))]
    (vec (cons (vec ks)
               (mapv (fn [row] (mapv #(get row %) ks)) rows)))))

(defn- to-markdown-table
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
  ([data] (stringify-json data (:json config)))
  ([data conf]
   (let [conf (or conf (:json config))]
     (js/JSON.stringify (clj->js data) nil (:indent conf)))))

(defn- get-structured-data [structure]
  (case structure
    :row-maps example-rows
    :columnar (to-columnar example-rows)
    :row-arrays (to-row-arrays example-rows)))

(defmulti example-data
  "Generates example data text for a given format and structure.

  Args:
    fmt (keyword): The desired output format (:csv, :tsv, :json, :edn, :markdown).
    structure (keyword): The structure of the data (:columnar, :row-maps, :row-arrays).
    conf (map, optional): Configuration map (indentation, delimiters, etc.).

  Returns:
    string: The formatted example data string."
  (fn [fmt structure & [conf]] [fmt structure]))

(defmethod example-data [:csv :columnar] [_ _ & [conf]]
  (.unparse Papa (clj->js example-rows) #js {:header true}))

(defmethod example-data [:tsv :columnar] [_ _ & [conf]]
  (.unparse Papa (clj->js example-rows) #js {:delimiter "\t" :header true}))

(defmethod example-data [:markdown :columnar] [_ _ & [conf]]
  (to-markdown-table example-rows (:markdown conf)))

(defmethod example-data [:json :columnar] [_ structure & [conf]]
  (stringify-json (get-structured-data structure) (:json conf)))

(defmethod example-data [:json :row-maps] [_ structure & [conf]]
  (stringify-json (get-structured-data structure) (:json conf)))

(defmethod example-data [:json :row-arrays] [_ structure & [conf]]
  (stringify-json (get-structured-data structure) (:json conf)))

(defmethod example-data [:edn :columnar] [_ structure & [conf]]
  (with-out-str (pprint/pprint (get-structured-data structure))))

(defmethod example-data [:edn :row-maps] [_ structure & [conf]]
  (with-out-str (pprint/pprint (get-structured-data structure))))

(defmethod example-data [:edn :row-arrays] [_ structure & [conf]]
  (with-out-str (pprint/pprint (get-structured-data structure))))

(defmethod example-data :default [_ _ & [conf]] "")

;; --- Table Processing ---

(defn process-table-data
  "Processes dataset data for display in a table: filtering, sorting, and pagination.

  Args:
    data (seq): A sequence of row maps.
    view-state (map): The current view state containing:
      - :page (int): Current page index (0-based).
      - :rows-per-page (int): Number of rows per page.
      - :filters (map): Map of col-key -> filter-string.
      - :hidden-columns (set): Set of hidden column keys.
      - :sort-col (keyword): Column to sort by.
      - :sort-dir (keyword): Sort direction (:asc or :desc).
      - :columns (seq, optional): List of column keys (defaults to keys of first row).

  Returns:
    map: A map containing:
      - :filtered-data (seq): Data after filtering.
      - :page-data (vector): Data for the current page.
      - :total-rows (int): Total count after filtering.
      - :start-idx (int): Start index of display.
      - :end-idx (int): End index of display.
      - :visible-columns (seq): List of visible column keys."
  [data view-state]
  (let [{:keys [page rows-per-page filters hidden-columns sort-col sort-dir columns]} view-state
        ;; Note: columns might be passed in view-state or derived from data if not present.
        ;; Assuming data is a vector of maps.
        all-columns (or columns (keys (first data)))

        filtered-data (if (seq filters)
                        (filter (fn [row]
                                  (every? (fn [[k v]]
                                            (str/includes? (str/lower-case (str (get row k))) (str/lower-case v)))
                                          filters))
                                data)
                        data)
        sorted-data (if sort-col
                      (sort-by sort-col (if (= sort-dir :asc) compare #(compare %2 %1)) filtered-data)
                      filtered-data)
        total-rows (count sorted-data)
        start-idx (min (* page rows-per-page) total-rows)
        end-idx (min (+ start-idx rows-per-page) total-rows)
        page-data (subvec (vec sorted-data) start-idx end-idx)
        visible-columns (remove hidden-columns all-columns)]

    {:filtered-data filtered-data ;; In case we need it
     :page-data page-data
     :total-rows total-rows
     :start-idx start-idx
     :end-idx end-idx
     :visible-columns visible-columns}))
