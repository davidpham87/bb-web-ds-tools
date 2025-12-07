(ns bb-web-ds-tools.cli.honeysql
  (:require [bb-web-ds-tools.components.honeysql :as h]
            [babashka.cli :as cli]))

(def cli-specs
  {:convert
   {:file {:desc "Input file (stdin if omitted)"
           :ref "<file>"
           :alias :i}}})

(defn convert [{:keys [opts]}]
  (let [input-str (if-let [f (:file opts)]
                    (slurp f)
                    (slurp *in*))
        res (h/convert-to-sql input-str)]
    (if (:success res)
      (println (:output res))
      (binding [*out* *err*]
        (println "Error:" (:error res))))))

(defn show-help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.honeysql <command> [opts]")
  (println "\nCommands:\n")
  (doseq [[cmd spec] cli-specs]
    (println "  " (name cmd))
    (println (cli/format-opts {:spec spec :indent 4}))))

(def table
  [{:cmds ["convert"] :fn convert :spec (:convert cli-specs)}
   {:cmds [] :fn show-help}])

(defn -main [& args]
  (cli/dispatch table args))
