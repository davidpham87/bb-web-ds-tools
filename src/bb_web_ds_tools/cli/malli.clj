(ns bb-web-ds-tools.cli.malli
  (:require [bb-web-ds-tools.components.malli :as m]
            [clojure.pprint :as pprint]
            [babashka.cli :as cli]
            [clojure.edn :as edn]
            [clojure.string :as str]))

;; Need to ensure dependencies for malli are available in bb.edn if running via bb
;; or just assume the user runs this with correct classpath.

(defn- read-input [opts]
  (if-let [f (:file opts)]
    (slurp f)
    (slurp *in*)))

(defn infer [opts]
  (let [input-str (read-input opts)
        ;; Try to parse as EDN first, then fallback or fail.
        ;; For CLI, we might expect valid EDN or JSON if we implement JSON parsing here or reuse component logic.
        data (m/detect-and-parse input-str)]
    (if data
      (let [res (m/infer-schema data (or (:max-enum opts) 10))]
        (if (:success res)
          (println (:schema-str res))
          (binding [*out* *err*]
            (println "Error inferring schema:" (:error res)))))
      (binding [*out* *err*]
        (println "Error: Could not parse input as EDN or JSON.")))))

(defn generate [opts]
  (let [schema-str (read-input opts)
        samples (or (:samples opts) 1)
        fmt (keyword (or (:format opts) "edn"))]
    (let [parse-res (m/parse-schema-and-generate schema-str)]
      (if (:success parse-res)
        (let [gen-res (m/generate-data (:schema parse-res) samples fmt)]
          (if (:success gen-res)
            (println (:output gen-res))
            (binding [*out* *err*]
              (println "Error generating data:" (:error gen-res)))))
        (binding [*out* *err*]
          (println "Error parsing schema:" (:error parse-res)))))))

(defn validate [opts]
  (let [schema-file (:schema opts)
        data-file (:file opts)
        schema-str (if schema-file (slurp schema-file) (throw (ex-info "Missing --schema" {})))
        data-str (if data-file (slurp data-file) (slurp *in*))]
    (let [schema (edn/read-string schema-str)
          data (m/detect-and-parse data-str)
          res (m/validate-data schema data)]
      (if (:success res)
        (println (:result res))
        (binding [*out* *err*]
          (println "Validation Failed:\n" (:result res)))))))

(defn help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.malli <command> [opts]")
  (println "Commands:")
  (println "  infer    : Infer schema from data (stdin or --file)")
  (println "             Opts: --max-enum <int>")
  (println "  generate : Generate data from schema (stdin or --file)")
  (println "             Opts: --samples <int>, --format <edn|json>")
  (println "  validate : Validate data against schema")
  (println "             Opts: --schema <file>, --file <data-file>"))

(defn -main [& args]
  (let [opts (cli/parse-opts args)
        cmd (first (:cmds opts))]
    (case cmd
      "infer" (infer opts)
      "generate" (generate opts)
      "validate" (validate opts)
      "help" (help opts)
      (help opts))))
