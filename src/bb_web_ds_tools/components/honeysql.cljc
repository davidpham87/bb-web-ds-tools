(ns bb-web-ds-tools.components.honeysql
  "Key functions:
  - (convert-to-sql [input-text])
  - sci-ctx

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [honey.sql :as h]
            [sci.core :as sci]))

(def sci-ctx (sci/init {}))

(defn convert-to-sql
  "Converts a HoneySQL map (as a string or data) to a SQL string.

  Args:
    input-text (string): The HoneySQL map as a string (EDN).

  Returns:
    map: {:success true/false :output string :error string}."
  [input-text]
  (try
    (let [input-data (sci/eval-string input-text sci-ctx)]
      (if (map? input-data)
        (try
          {:success true
           :output (first (h/format input-data {:inline true}))}
          (catch #?(:cljs :default :clj Exception) e
            {:success false
             :error (str "Error formatting SQL: " (ex-message e))}))
        {:success false
         :error (str "Error: Last evaluated value must be a map. Got: " (pr-str input-data))}))
    (catch #?(:cljs :default :clj Exception) e
      {:success false
       :error (str "Error evaluating code: " (ex-message e))})))
