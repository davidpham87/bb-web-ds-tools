(ns bb-web-ds-tools.impl.io
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clj-yaml.core :as yaml]
            [bb-web-ds-tools.impl.datasets :as datasets]))

(defmulti parse-string (fn [format _] (keyword format)))

(defmethod parse-string :csv
  [_ text]
  (let [data (csv/read-csv text)
        header (first data)
        rows (rest data)]
    (mapv #(zipmap header %) rows)))

(defmethod parse-string :json [_ text] (json/read-str text :key-fn keyword))

(defmethod parse-string :edn [_ text] (edn/read-string text))

(defmethod parse-string :yaml [_ text] (yaml/parse-string text))

(defmulti write-string (fn [format _] (keyword format)))

(defn- sanitize-value
  "Sanitizes a value for CSV/TSV export to prevent formula injection.
   Prepends a single quote if the string starts with =, +, -, or @."
  [v]
  (if (and (string? v) (re-find #"^[=\+\-@]" v))
    (str "'" v)
    v))

(defn- sanitize-row
  "Sanitizes all values in a row (vector)."
  [row]
  (mapv sanitize-value row))

(defmethod write-string :csv
  [_ data]
  (let [sw (java.io.StringWriter.)]
    (cond
      ;; If map (columnar), convert to row-maps first
      (map? data) (let [row-maps (datasets/transform data :columnar :row-maps)
                        header (keys (first row-maps))
                        rows (map (fn [row] (map #(get row %) header))
                                  row-maps)]
                    (csv/write-csv sw (map sanitize-row (cons header rows))))
      ;; If vector of vectors (rows), use directly
      (and (sequential? data) (sequential? (first data))) (csv/write-csv sw
                                                                         (map sanitize-row data))
      ;; Default: Assume row-maps
      :else (if (empty? data)
              ""
              (let [header (keys (first data))
                    rows (map (fn [row] (map #(get row %) header)) data)]
                (csv/write-csv sw (map sanitize-row (cons header rows))))))
    (.toString sw)))

(defmethod write-string :json [_ data] (json/write-str data {:indent true}))

(defmethod write-string :edn [_ data] (with-out-str (pprint/pprint data)))

(defmethod write-string :yaml [_ data] (yaml/generate-string data))
