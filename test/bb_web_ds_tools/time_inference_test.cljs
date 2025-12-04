(ns bb-web-ds-tools.time-inference-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [bb-web-ds-tools.components.malli :as m-comp]
            [malli.core :as m]
            [malli.registry :as mr]
            [malli.experimental.time :as met]
            ["@js-joda/core" :as js-joda :refer [LocalDate]]))

;; Register time schemas for the test environment
(mr/set-default-registry!
 (mr/composite-registry
  (m/default-schemas)
  (met/schemas)))

(deftest infer-local-date-min-max
  (testing "Inference of min/max for LocalDate"
    (let [d1 (LocalDate.parse "2023-01-01")
          d2 (LocalDate.parse "2023-01-10")
          d3 (LocalDate.parse "2023-01-05")
          data [d1 d2 d3]
          result (m-comp/infer-schema data)
          schema-str (:schema-str result)]
      (is (:success result) "Inference should succeed")
      (println "Inferred Schema:" schema-str)
      (is (clojure.string/includes? schema-str ":time/local-date") "Should infer :time/local-date")
      (is (clojure.string/includes? schema-str ":min") "Should include :min constraint")
      (is (clojure.string/includes? schema-str ":max") "Should include :max constraint"))))
