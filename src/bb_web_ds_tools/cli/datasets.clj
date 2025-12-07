(ns bb-web-ds-tools.cli.datasets
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clj-yaml.core :as yaml]
            [babashka.fs :as fs]
            [babashka.cli :as cli]
            [bb-web-ds-tools.impl.datasets :as impl]))

(def cli-specs
  {:convert
   {:format {:desc "Input format (csv, json, edn, yaml)"
             :ref "<fmt>"
             :alias :f}
    :to     {:desc "Output format (csv, json, edn, yaml)"
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

(defn- infer-format [filename]
  (when filename
    (let [ext (str/lower-case (fs/extension filename))]
      (case ext
        "csv" "csv"
        "json" "json"
        "edn" "edn"
        "yml" "yaml"
        "yaml" "yaml"
        nil))))

(defn- parse-csv [text]
  (let [data (csv/read-csv text)
        header (first data)
        rows (rest data)]
    (mapv #(zipmap header %) rows)))

(defn- parse-json [text]
  (json/read-str text :key-fn keyword))

(defn- parse-edn [text]
  (edn/read-string text))

(defn- parse-yaml [text]
  (yaml/parse-string text))

(defn- to-csv [data]
  (let [sw (java.io.StringWriter.)]
    (cond
      ;; If map (columnar), convert to row-maps first
      (map? data)
      (let [row-maps (impl/transform data :columnar :row-maps)
            header (keys (first row-maps))
            rows (map (fn [row] (map #(get row %) header)) row-maps)]
        (csv/write-csv sw (cons header rows)))

      ;; If vector of vectors (rows), use directly
      (and (sequential? data) (sequential? (first data)))
      (csv/write-csv sw data)

      ;; Default: Assume row-maps
      :else
      (if (empty? data)
        ""
        (let [header (keys (first data))
              rows (map (fn [row] (map #(get row %) header)) data)]
          (csv/write-csv sw (cons header rows)))))
    (.toString sw)))

(defn- to-json [data]
  (json/write-str data {:indent true}))

(defn- to-edn [data]
  (with-out-str (pprint/pprint data)))

(defn- to-yaml [data]
  (yaml/generate-string data))

(defn convert [{:keys [opts]}]
  (let [in-format (or (:format opts) (infer-format (:file opts)))
        out-format (:to opts "json") ;; output format: csv, json, edn, yaml
        text (read-input opts)]
    (try
      (let [raw-data (case in-format
                       "csv" (parse-csv text)
                       "json" (parse-json text)
                       "edn" (parse-edn text)
                       "yaml" (parse-yaml text)
                       (throw (ex-info (if (:format opts)
                                         "Unknown input format. Use --format [csv|json|edn|yaml]"
                                         "Could not infer input format from filename. Please use --format.")
                                       {})))

            input-struct (or (keyword (:input-struct opts)) (impl/detect-structure raw-data))
            output-struct (or (keyword (:output-struct opts)) input-struct)

            processed-data (impl/transform raw-data input-struct output-struct)

            output (case out-format
                     "csv" (to-csv processed-data)
                     "json" (to-json processed-data)
                     "edn" (to-edn processed-data)
                     "yaml" (to-yaml processed-data)
                     (throw (ex-info "Unknown output format. Use --to [csv|json|edn|yaml]" {})))]
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
