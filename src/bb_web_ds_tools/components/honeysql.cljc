(ns bb-web-ds-tools.components.honeysql
  (:require [honey.sql :as h]
            [clojure.edn :as edn]))

(defn convert-to-sql
  "Converts a HoneySQL map (as a string or data) to a SQL string.

  Args:
    input-text (string): The HoneySQL map as a string (EDN).

  Returns:
    map: {:success true/false :output string :error string}."
  [input-text]
  (try
    (let [input-data (edn/read-string input-text)]
      (if (map? input-data)
        (try
          {:success true
           :output (first (h/format input-data {:inline true}))}
          (catch #?(:cljs :default :clj Exception) e
            {:success false
             :error (str "Error formatting SQL: " (ex-message e))}))
        {:success false
         :error (str "Error: Input must be a map. Got: " (pr-str input-data))}))
    (catch #?(:cljs :default :clj Exception) e
      {:success false
       :error (str "Error reading EDN: " (ex-message e))})))
