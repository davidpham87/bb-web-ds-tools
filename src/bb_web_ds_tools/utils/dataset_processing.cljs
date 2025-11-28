(ns bb-web-ds-tools.utils.dataset-processing
  (:require ["papaparse" :as Papa]
            [clojure.string :as str]
            [clojure.edn :as edn]))

;; --- Normalization ---

(defn normalize-columnar [data]
  (let [cols (keys data)
        vals-seq (vals data)
        cnt (if (seq vals-seq) (count (first vals-seq)) 0)]
    (mapv (fn [i]
            (zipmap cols (map #(nth (get data %) i) cols)))
          (range cnt))))

(defn normalize-row-arrays [data]
  (let [header (map keyword (first data))
        rows (rest data)]
    (mapv (fn [row] (zipmap header row)) rows)))

;; --- Parsing Logic ---

(defmulti parse-dataset (fn [format structure _text] [format structure]))

;; CSV/TSV are inherently "columnar" (tabular) in this context, but produce row-maps via PapaParse.
;; We treat them as valid inputs for :columnar structure selection.
(defmethod parse-dataset [:csv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset [:tsv :columnar] [_ _ text]
  (let [res (.parse Papa text #js {:delimiter "\t" :header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defn- parse-json [text]
  (try
    (js->clj (js/JSON.parse text) :keywordize-keys true)
    (catch js/Error e
      (js/console.error "JSON Parse Error" e)
      nil)))

(defmethod parse-dataset [:json :columnar] [_ _ text]
  (some-> (parse-json text) normalize-columnar))

(defmethod parse-dataset [:json :row-maps] [_ _ text]
  (parse-json text))

(defmethod parse-dataset [:json :row-arrays] [_ _ text]
  (some-> (parse-json text) normalize-row-arrays))

(defmethod parse-dataset [:edn :columnar] [_ _ text]
  (some-> (edn/read text) normalize-columnar))

(defmethod parse-dataset [:edn :row-maps] [_ _ text]
  (edn/read text))

(defmethod parse-dataset [:edn :row-arrays] [_ _ text]
  (some-> (edn/read text) normalize-row-arrays))

(defmethod parse-dataset :default [_ _ _]
  [])

;; --- Examples ---

(defn example-data [fmt structure]
  (case [fmt structure]
    [:csv :columnar] "col1,col2,col3,col4\n1,2,3,4\n5,6,7,8\n9,10,11,12"
    [:tsv :columnar] "col1\tcol2\tcol3\tcol4\n1\t2\t3\t4\n5\t6\t7\t8\n9\t10\t11\t12"
    [:json :columnar] "{\n  \"col1\": [1, 5, 9],\n  \"col2\": [2, 6, 10],\n  \"col3\": [3, 7, 11],\n  \"col4\": [4, 8, 12]\n}"
    [:json :row-maps] "[\n  {\"col1\": 1, \"col2\": 2, \"col3\": 3, \"col4\": 4},\n  {\"col1\": 5, \"col2\": 6, \"col3\": 7, \"col4\": 8},\n  {\"col1\": 9, \"col2\": 10, \"col3\": 11, \"col4\": 12}\n]"
    [:json :row-arrays] "[\n  [\"col1\", \"col2\", \"col3\", \"col4\"],\n  [1, 2, 3, 4],\n  [5, 6, 7, 8],\n  [9, 10, 11, 12]\n]"
    [:edn :columnar] "{:col1 [1 5 9]\n :col2 [2 6 10]\n :col3 [3 7 11]\n :col4 [4 8 12]}"
    [:edn :row-maps] "[{:col1 1 :col2 2 :col3 3 :col4 4}\n {:col1 5 :col2 6 :col3 7 :col4 8}\n {:col1 9 :col2 10 :col3 11 :col4 12}]"
    [:edn :row-arrays] "[[:col1 :col2 :col3 :col4]\n [1 2 3 4]\n [5 6 7 8]\n [9 10 11 12]]"
    ""))

;; --- Table Processing ---

(defn process-table-data [data view-state]
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
        start-idx (* page rows-per-page)
        end-idx (min (+ start-idx rows-per-page) total-rows)
        page-data (subvec (vec sorted-data) start-idx end-idx)
        visible-columns (remove hidden-columns all-columns)]

    {:filtered-data filtered-data ;; In case we need it
     :page-data page-data
     :total-rows total-rows
     :start-idx start-idx
     :end-idx end-idx
     :visible-columns visible-columns}))
