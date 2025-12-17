(ns dstools
  "Key functions:
  - (show-help [_])
  - (-main [& args])
  - table

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [bb-web-ds-tools.cli.datasets :as datasets]
            [bb-web-ds-tools.cli.honeysql :as honeysql]
            [bb-web-ds-tools.cli.malli :as malli]
            [babashka.cli :as cli]))

(defn show-help
  [_]
  (println "Usage: bb -m dstools <command> <subcommand> [opts]")
  (println "\nCommands:")
  (println "  data    Data processing tools (datasets)")
  (println "  sql     SQL generation tools (honeysql)")
  (println "  schema  Schema tools (malli)")
  (println "\nRun a command without subcommands to see help for that tool."))

(def table
  ;; Datasets
  (concat
   [{:cmds ["data" "convert"],
     :fn datasets/convert,
     :spec (:convert datasets/cli-specs)}
    {:cmds ["data"], :fn datasets/show-help}]
    ;; HoneySQL
   [{:cmds ["sql" "convert"],
     :fn honeysql/convert,
     :spec (:convert honeysql/cli-specs)}
    {:cmds ["sql"], :fn honeysql/show-help}]
    ;; Malli
   [{:cmds ["schema" "infer"], :fn malli/infer, :spec (:infer malli/cli-specs)}
    {:cmds ["schema" "generate"],
     :fn malli/generate,
     :spec (:generate malli/cli-specs)}
    {:cmds ["schema" "validate"],
     :fn malli/validate,
     :spec (:validate malli/cli-specs)}
    {:cmds ["schema"], :fn malli/show-help}]
    ;; Main Help
   [{:cmds [], :fn show-help}]))

(defn -main [& args] (cli/dispatch table args))
