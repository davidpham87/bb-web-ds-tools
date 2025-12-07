(ns bb-web-ds-tools.cli.malli
  (:require [bb-web-ds-tools.components.malli :as m]
            [clojure.pprint :as pprint]
            [babashka.cli :as cli]
            [clojure.edn :as edn]
            [clojure.string :as str]))

;; Need to ensure dependencies for malli are available in bb.edn if running via bb
;; or just assume the user runs this with correct classpath.

(def cli-specs
  {:infer
   {:max-enum {:desc "Max distinct values for enum inference"
               :ref "<int>"
               :alias :e
               :coerce :int
               :default 10}
    :file     {:desc "Input file (stdin if omitted)"
               :ref "<file>"
               :alias :i}}
   :generate
   {:samples {:desc "Number of samples to generate"
              :ref "<int>"
              :alias :s
              :coerce :int
              :default 1}
    :format  {:desc "Output format (edn, json)"
              :ref "<fmt>"
              :alias :f
              :default "edn"}
    :file    {:desc "Schema input file (stdin if omitted)"
              :ref "<file>"
              :alias :i}}
   :validate
   {:schema {:desc "Schema file"
             :ref "<file>"
             :alias :s
             :require true}
    :file   {:desc "Data file (stdin if omitted)"
             :ref "<file>"
             :alias :i}}})

(defn- read-input [opts]
  (if-let [f (:file opts)]
    (slurp f)
    (slurp *in*)))

(defn infer [{:keys [opts]}]
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

(defn generate [{:keys [opts]}]
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

(defn validate [{:keys [opts]}]
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

(defn show-help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.malli <command> [opts]")
  (println "\nCommands:\n")
  (doseq [[cmd spec] cli-specs]
    (println "  " (name cmd))
    (println (cli/format-opts {:spec spec :indent 4}))))

(def table
  [{:cmds ["infer"] :fn infer :spec (:infer cli-specs)}
   {:cmds ["generate"] :fn generate :spec (:generate cli-specs)}
   {:cmds ["validate"] :fn validate :spec (:validate cli-specs)}
   {:cmds [] :fn show-help}])

(defn -main [& args]
  (cli/dispatch table args))
