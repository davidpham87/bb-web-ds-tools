(ns bb-web-ds-tools.components.honeysql
  (:require [honey.sql :as h]
            [sci.core :as sci]))

(def sci-ctx (sci/init {}))

(defn convert-to-sql [input-text]
  (try
    (let [input-data (sci/eval-string input-text sci-ctx)]
      (if (map? input-data)
        (first (h/format input-data {:inline true}))
        (str "Error: Last evaluated value must be a map. Got: " (type input-data))))
    (catch #?(:cljs :default :clj Exception) e
      (str "Error evaluating code: " (ex-message e)))))
