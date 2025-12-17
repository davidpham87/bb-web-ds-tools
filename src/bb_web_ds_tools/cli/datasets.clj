(ns bb-web-ds-tools.cli.datasets
  "Key functions:
  - (read-input [opts])
  - (infer-output [opts default-ext])
  - (write-output [opts content default-ext])
  - (infer-format [filename])
  - (convert [{:keys [opts])
  - (show-help [_])
  - (-main [& args])
  - cli-specs
  - table

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [clojure.string :as str]
            [babashka.fs :as fs]
            [babashka.cli :as cli]
            [bb-web-ds-tools.impl.datasets :as impl]
            [bb-web-ds-tools.impl.io :as io]))

(def cli-specs
  {:convert
   {:format
    {:desc "Input format (csv, json, edn, yaml)", :ref "<fmt>", :alias :f},
    :to {:desc "Output format (csv, json, edn, yaml)",
         :ref "<fmt>",
         :alias :t,
         :default "json",
         :default-desc "json"},
    :input-struct {:desc "Input data structure (row-maps, columnar, rows)",
                   :ref "<struct>",
                   :alias :S},
    :output-struct {:desc "Output data structure (row-maps, columnar, rows)",
                    :ref "<struct>",
                    :alias :s},
    :file {:desc "Input file (stdin if omitted)", :ref "<file>", :alias :i},
    :out {:desc "Output file (inferred if input file given, else stdout)",
          :ref "<file>",
          :alias :o}}})

(defn- read-input
  [opts]
  (if-let [f (:file opts)]
    (slurp f)
    (slurp *in*)))

(defn- infer-output
  [opts default-ext]
  (or (:out opts)
      (when (:file opts) (str (fs/strip-ext (:file opts)) "." default-ext))))

(defn- write-output
  [opts content default-ext]
  (if-let [f (infer-output opts default-ext)]
    (spit f content)
    (println content)))

(defn- infer-format
  [filename]
  (when filename
    (let [ext (str/lower-case (fs/extension filename))]
      (case ext
        "csv" "csv"
        "json" "json"
        "edn" "edn"
        "yml" "yaml"
        "yaml" "yaml"
        nil))))

(defn convert
  [{:keys [opts]}]
  (let [in-format (or (:format opts) (infer-format (:file opts)))
        out-format (:to opts "json") ;; output format: csv, json, edn, yaml
        text (read-input opts)]
    (try
      (let
       [raw-data
        (try
          (io/parse-string in-format text)
          (catch Exception e
            (throw
             (ex-info
              (if (:format opts)
                (str "Unknown input format: " in-format)
                "Could not infer input format from filename. Please use --format.")
              {}))))
        input-struct (or (keyword (:input-struct opts))
                         (impl/detect-structure raw-data))
        output-struct (or (keyword (:output-struct opts)) input-struct)
        processed-data (impl/transform raw-data input-struct output-struct)
        output (try (io/write-string out-format processed-data)
                    (catch IllegalArgumentException _
                      (throw (ex-info (str "Unknown output format: "
                                           out-format)
                                      {}))))]
        (write-output opts output out-format))
      (catch Exception e
        (binding [*out* *err*]
          (println "Error:" (.getMessage e))
          (.printStackTrace e))))))

(defn show-help
  [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.datasets <command> [opts]")
  (println "\nCommands:\n")
  (doseq [[cmd spec] cli-specs]
    (println "  " (name cmd))
    (println (cli/format-opts {:spec spec, :indent 4}))))

(def table
  [{:cmds ["convert"], :fn convert, :spec (:convert cli-specs)}
   {:cmds [], :fn show-help}])

(defn -main [& args] (cli/dispatch table args))
