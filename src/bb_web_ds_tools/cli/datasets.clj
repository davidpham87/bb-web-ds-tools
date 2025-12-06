(ns bb-web-ds-tools.cli.datasets
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [babashka.fs :as fs]
            [babashka.cli :as cli]))

(defn- parse-opts [args]
  (cli/parse-opts args))

(defn- read-input [opts]
  (if-let [f (:file opts)]
    (slurp f)
    (slurp *in*)))

(defn- write-output [opts content]
  (if-let [f (:out opts)]
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

(defn- to-csv [data]
  (let [header (keys (first data))
        rows (map (fn [row] (map #(get row %) header)) data)
        sw (java.io.StringWriter.)]
    (csv/write-csv sw (cons header rows))
    (.toString sw)))

(defn- to-json [data]
  (json/write-str data {:indent true}))

(defn- to-edn [data]
  (with-out-str (pprint/pprint data)))

(defn convert [opts]
  (let [format (:format opts) ;; input format: csv, json, edn
        out-format (:to opts "json") ;; output format: csv, json, edn
        text (read-input opts)]
    (try
      (let [data (case format
                   "csv" (parse-csv text)
                   "json" (parse-json text)
                   "edn" (parse-edn text)
                   (throw (ex-info "Unknown input format. Use --format [csv|json|edn]" {})))
            output (case out-format
                     "csv" (to-csv data)
                     "json" (to-json data)
                     "edn" (to-edn data)
                     (throw (ex-info "Unknown output format. Use --to [csv|json|edn]" {})))]
        (write-output opts output))
      (catch Exception e
        (binding [*out* *err*]
          (println "Error:" (.getMessage e)))))))

(defn help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.datasets convert --format <fmt> --to <fmt> [--file <input>] [--out <output>]")
  (println "  --format : Input format (csv, json, edn)")
  (println "  --to     : Output format (csv, json, edn). Default: json")
  (println "  --file   : Input file (stdin if omitted)")
  (println "  --out    : Output file (stdout if omitted)"))

(defn -main [& args]
  (let [opts (parse-opts args)
        cmd (first (:cmds opts))]
    (case cmd
      "convert" (convert opts)
      "help" (help opts)
      (help opts))))
