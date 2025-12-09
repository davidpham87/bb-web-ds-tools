(ns examples.usage
  (:require [bb-web-ds-tools.impl.datasets :as datasets]
            [bb-web-ds-tools.impl.io :as io]
            [bb-web-ds-tools.components.honeysql :as h]
            [bb-web-ds-tools.components.malli :as m]
            ;; Direct library dependencies for comparison
            [honey.sql :as sql]
            [malli.core :as mc]
            [malli.provider :as mp]
            [malli.generator :as mg]))

;; -----------------------------------------------------------------------------
;; 1. Datasets (Convert)
;; -----------------------------------------------------------------------------
;; Equivalent to: bb -m bb-web-ds-tools.cli.datasets convert --input-struct row-maps --output-struct columnar --format csv --to json

(println "--- Datasets Convert ---")
(let [csv-data "id,name\n1,Alice\n2,Bob"
      ;; Step 1: Parse input (simulating reading from file/stdin)
      parsed-data (io/parse-string :csv csv-data)
      ;; Step 2: Transform structure
      transformed-data (datasets/transform parsed-data :row-maps :columnar)
      ;; Step 3: Write output
      output-string (io/write-string :json transformed-data)]
  (println output-string))

;; -----------------------------------------------------------------------------
;; 2. HoneySQL (Convert)
;; -----------------------------------------------------------------------------
;; Equivalent to: bb -m bb-web-ds-tools.cli.honeysql convert --file query.edn

(println "\n--- HoneySQL Convert ---")
;; Note: convert-to-sql expects a string representation of the EDN map because
;; it uses sci to evaluate it (allowing dynamic code in queries).
(let [sql-map-str "{:select [:a :b] :from [:table] :where [:= :a 1]}"
      res (h/convert-to-sql sql-map-str)]
  (if (:success res)
    (println (:output res))
    (println "Error:" (:error res))))

;; Direct Usage (honey.sql)
;; The wrapper handles string evaluation (via SCI) and error handling.
;; Directly, you pass the data structure.
(println ">> Direct honey.sql usage:")
(let [sql-map {:select [:a :b] :from [:table] :where [:= :a 1]}
      ;; :inline true is used to generate a single string without parameters
      sql-vec (sql/format sql-map {:inline true})]
  (println (first sql-vec)))

;; -----------------------------------------------------------------------------
;; 3. Malli (Infer)
;; -----------------------------------------------------------------------------
;; Equivalent to: bb -m bb-web-ds-tools.cli.malli infer --max-enum 10

(println "\n--- Malli Infer ---")
(let [data [{:user/name "Alice" :user/age 30 :user/role "admin"}
            {:user/name "Bob"   :user/age 25 :user/role "user"}]
      max-enum-values 10
      res (m/infer-schema data max-enum-values)]
  (if (:success res)
    (println (:schema-str res))
    (println "Error:" (:error res))))

;; Direct Usage (malli.provider)
;; The wrapper adds additional refinement (like enum inference and min/max stats).
(println ">> Direct malli.provider usage:")
(let [data [{:user/name "Alice" :user/age 30 :user/role "admin"}
            {:user/name "Bob"   :user/age 25 :user/role "user"}]
      schema (mp/provide data)]
  (println schema))

;; -----------------------------------------------------------------------------
;; 4. Malli (Generate)
;; -----------------------------------------------------------------------------
;; Equivalent to: bb -m bb-web-ds-tools.cli.malli generate --samples 2 --format edn

(println "\n--- Malli Generate ---")
;; Note: parse-schema-and-generate takes a string because it parses EDN safely.
(let [schema-str "[:map [:x int?] [:y int?]]"
      parse-res (m/parse-schema-and-generate schema-str)]
  (if (:success parse-res)
    (let [schema (:schema parse-res)
          samples 2
          format :edn
          gen-res (m/generate-data schema samples format)]
      (if (:success gen-res)
        (println (:output gen-res))
        (println "Error:" (:error gen-res))))
    (println "Error parsing schema:" (:error parse-res))))

;; Direct Usage (malli.generator)
;; The wrapper handles multiple samples and output formatting.
(println ">> Direct malli.generator usage:")
(let [schema [:map [:x int?] [:y int?]]
      sample (mg/generate schema)]
  (println sample))

;; -----------------------------------------------------------------------------
;; 5. Malli (Validate)
;; -----------------------------------------------------------------------------
;; Equivalent to: bb -m bb-web-ds-tools.cli.malli validate --schema schema.edn --file data.edn

(println "\n--- Malli Validate ---")
(let [schema [:map [:id int?] [:name string?]]
      valid-data {:id 1 :name "Alice"}
      invalid-data {:id "1" :name "Bob"}

      res-valid (m/validate-data schema valid-data)
      res-invalid (m/validate-data schema invalid-data)]

  (println "Valid:" (:result res-valid))
  (println "Invalid:" (:result res-invalid)))

;; Direct Usage (malli.core)
;; The wrapper formats the error explanation.
(println ">> Direct malli.core usage:")
(let [schema [:map [:id int?] [:name string?]]
      invalid-data {:id "1" :name "Bob"}]
  (if (mc/validate schema invalid-data)
    (println "Valid")
    (println "Invalid:" (mc/explain schema invalid-data))))
