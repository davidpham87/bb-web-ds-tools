(ns bb-web-ds-tools.cli.honeysql
  "Namespace: bb-web-ds-tools.cli.honeysql

  Key functions:
  - (infer-output [opts])
  - (convert [{:keys [opts])
  - (show-help [_])
  - (-main [& args])
  - cli-specs
  - table

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [bb-web-ds-tools.components.honeysql :as h]
            [babashka.cli :as cli]
            [babashka.fs :as fs]))

(def cli-specs
  {:convert
   {:file {:desc "Input file (stdin if omitted)", :ref "<file>", :alias :i},
    :out {:desc "Output file (inferred if input file given, else stdout)",
          :ref "<file>",
          :alias :o}}})

(defn- infer-output
  [opts]
  (or (:out opts) (when (:file opts) (str (fs/strip-ext (:file opts)) ".sql"))))

(defn convert
  [{:keys [opts]}]
  (let [input-str (if-let [f (:file opts)]
                    (slurp f)
                    (slurp *in*))
        res (h/convert-to-sql input-str)]
    (if (:success res)
      (if-let [f (infer-output opts)]
        (spit f (:output res))
        (println (:output res)))
      (binding [*out* *err*] (println "Error:" (:error res))))))

(defn show-help
  [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.honeysql <command> [opts]")
  (println "\nCommands:\n")
  (doseq [[cmd spec] cli-specs]
    (println "  " (name cmd))
    (println (cli/format-opts {:spec spec, :indent 4}))))

(def table
  [{:cmds ["convert"], :fn convert, :spec (:convert cli-specs)}
   {:cmds [], :fn show-help}])

(defn -main [& args] (cli/dispatch table args))
