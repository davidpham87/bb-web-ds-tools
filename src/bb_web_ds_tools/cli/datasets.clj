(ns bb-web-ds-tools.cli.datasets
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [babashka.fs :as fs]
            [babashka.cli :as cli]))

(def cli-specs
  {:convert
   {:format {:desc "Input format (csv, json, edn)"
             :ref "<fmt>"
             :alias :f
             :require true}
    :to     {:desc "Output format (csv, json, edn)"
             :ref "<fmt>"
             :alias :t
             :default "json"
             :default-desc "json"}
    :input-struct {:desc "Input data structure (row-maps, columnar, rows)"
                   :ref "<struct>"
                   :alias :S}
    :output-struct {:desc "Output data structure (row-maps, columnar, rows)"
                    :ref "<struct>"
                    :alias :s}
    :file   {:desc "Input file (stdin if omitted)"
             :ref "<file>"
             :alias :i}
    :out    {:desc "Output file (inferred if input file given, else stdout)"
             :ref "<file>"
             :alias :o}}})

(defn- read-input [opts]
  (if-let [f (:file opts)]
    (slurp f)
    (slurp *in*)))

(defn- infer-output [opts default-ext]
  (or (:out opts)
      (when (:file opts)
        (str (fs/strip-ext (:file opts)) "." default-ext))))

(defn- write-output [opts content default-ext]
  (if-let [f (infer-output opts default-ext)]
    (spit f content)
    (println content)))

(defn- parse-csv [text]
  (let [data (csv/read-csv text)
        header (first data)
        rows (rest data)]
    (mapv #(zipmap header %) rows)))

(defn- parse-json [text]
  (json/read-str text :key-fn keyword))

(defn- parse-edn [text]
  (edn/read-string text))

(defn- detect-structure [data]
  (cond
    (and (sequential? data) (map? (first data))) :row-maps
    (map? data) :columnar
    (and (sequential? data) (sequential? (first data))) :rows
    :else :unknown))

(defn- to-row-maps [data struct]
  (case struct
    :row-maps data
    :columnar (let [cols (keys data)
                    count (count (first (vals data)))]
                (mapv (fn [i] (zipmap cols (map #(nth (get data %) i) cols))) (range count)))
    :rows (let [header (first data)
                rows (rest data)]
            (mapv #(zipmap header %) rows))
    data))

(defn- to-columnar [data struct]
  (case struct
    :columnar data
    :row-maps (if (empty? data)
                {}
                (let [cols (keys (first data))]
                  (reduce (fn [acc col]
                            (assoc acc col (mapv #(get % col) data)))
                          {}
                          cols)))
    :rows (let [header (first data)
                rows (rest data)]
            (if (empty? rows)
              (zipmap header (repeat []))
              (reduce (fn [acc i]
                        (let [col-name (nth header i)]
                          (assoc acc col-name (mapv #(nth % i) rows))))
                      {}
                      (range (count header)))))
    data))

(defn- to-rows [data struct]
  (case struct
    :rows data
    :row-maps (if (empty? data)
                []
                (let [header (keys (first data))]
                  (cons header (mapv (fn [row] (mapv #(get row %) header)) data))))
    :columnar (if (empty? data)
                []
                (let [header (keys data)
                      count (count (first (vals data)))
                      rows (mapv (fn [i] (mapv #(nth (get data %) i) header)) (range count))]
                  (cons header rows)))
    data))

(defn- transform-structure [data input-struct target-struct]
  (let [actual-struct (or (keyword input-struct) (detect-structure data) :row-maps)
        target (or (keyword target-struct) actual-struct)]
    (if (= actual-struct target)
      data
      (case target
        :row-maps (to-row-maps data actual-struct)
        :columnar (to-columnar data actual-struct)
        :rows (to-rows data actual-struct)
        data))))

(defn- to-csv [data]
  (let [sw (java.io.StringWriter.)]
    (cond
      ;; If map (columnar), convert to row-maps first
      (map? data)
      (let [row-maps (to-row-maps data :columnar)
            header (keys (first row-maps))
            rows (map (fn [row] (map #(get row %) header)) row-maps)]
        (csv/write-csv sw (cons header rows)))

      ;; If vector of vectors (rows), use directly
      (and (sequential? data) (sequential? (first data)))
      (csv/write-csv sw data)

      ;; Default: Assume row-maps
      :else
      (let [header (keys (first data))
            rows (map (fn [row] (map #(get row %) header)) data)]
        (csv/write-csv sw (cons header rows))))
    (.toString sw)))

(defn- to-json [data]
  (json/write-str data {:indent true}))

(defn- to-edn [data]
  (with-out-str (pprint/pprint data)))

(defn convert [{:keys [opts]}]
  (let [format (:format opts) ;; input format: csv, json, edn
        out-format (:to opts "json") ;; output format: csv, json, edn
        text (read-input opts)]
    (try
      (let [raw-data (case format
                       "csv" (parse-csv text)
                       "json" (parse-json text)
                       "edn" (parse-edn text)
                       (throw (ex-info "Unknown input format. Use --format [csv|json|edn]" {})))
            processed-data (transform-structure raw-data (:input-struct opts) (:output-struct opts))
            output (case out-format
                     "csv" (to-csv processed-data)
                     "json" (to-json processed-data)
                     "edn" (to-edn processed-data)
                     (throw (ex-info "Unknown output format. Use --to [csv|json|edn]" {})))]
        (write-output opts output out-format))
      (catch Exception e
        (binding [*out* *err*]
          (println "Error:" (.getMessage e))
          (.printStackTrace e))))))

(defn show-help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.datasets <command> [opts]")
  (println "\nCommands:\n")
  (doseq [[cmd spec] cli-specs]
    (println "  " (name cmd))
    (println (cli/format-opts {:spec spec :indent 4}))))

(def table
  [{:cmds ["convert"] :fn convert :spec (:convert cli-specs)}
   {:cmds [] :fn show-help}])

(defn -main [& args]
  (cli/dispatch table args))
