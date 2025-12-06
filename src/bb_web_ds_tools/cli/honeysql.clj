(ns bb-web-ds-tools.cli.honeysql
  (:require [bb-web-ds-tools.components.honeysql :as h]
            [babashka.cli :as cli]))

(defn convert [opts]
  (let [input-str (if-let [f (:file opts)]
                    (slurp f)
                    (slurp *in*))
        res (h/convert-to-sql input-str)]
    (if (:success res)
      (println (:output res))
      (binding [*out* *err*]
        (println "Error:" (:error res))))))

(defn help [_]
  (println "Usage: bb -m bb-web-ds-tools.cli.honeysql convert [--file <input>]")
  (println "  Converts HoneySQL EDN map to SQL string.")
  (println "  Reads from stdin if --file is not provided."))

(defn -main [& args]
  (let [opts (cli/parse-opts args)
        cmd (first (:cmds opts))]
    (case cmd
      "convert" (convert opts)
      "help" (help opts)
      (help opts))))
