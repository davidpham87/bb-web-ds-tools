(ns bb-web-ds-tools.utils.dataset-processing
  (:require ["papaparse" :as Papa]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [cljs.pprint :as pprint]))

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
  (some-> (edn/read-string text) normalize-columnar))

(defmethod parse-dataset [:edn :row-maps] [_ _ text]
  (edn/read-string text))

(defmethod parse-dataset [:edn :row-arrays] [_ _ text]
  (some-> (edn/read-string text) normalize-row-arrays))

(defmethod parse-dataset :default [_ _ _]
  [])

;; --- Examples ---

(def example-rows
  [{:score 12.5 :category "a" :date "2023-01-01"}
   {:score 10.2 :category "b" :date "2023-01-02"}
   {:score 8.7  :category "c" :date "2023-01-03"}
   {:score 15.0 :category "a" :date "2023-01-04"}
   {:score 9.9  :category "b" :date "2023-01-05"}
   {:score 11.1 :category "c" :date "2023-01-06"}
   {:score 13.4 :category "a" :date "2023-01-07"}
   {:score 7.8  :category "b" :date "2023-01-08"}
   {:score 14.2 :category "c" :date "2023-01-09"}
   {:score 10.0 :category "a" :date "2023-01-10"}])

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

(defn example-data [fmt structure]
  (let [data (case structure
               :row-maps example-rows
               :columnar (to-columnar example-rows)
               :row-arrays (to-row-arrays example-rows))]
    (case fmt
      :csv (.unparse Papa (clj->js example-rows) #js {:header true})
      :tsv (.unparse Papa (clj->js example-rows) #js {:delimiter "\t" :header true})
      :json (js/JSON.stringify (clj->js data) nil 2)
      :edn (with-out-str (pprint/pprint data))
      "")))

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
