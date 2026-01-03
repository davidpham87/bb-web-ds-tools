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
          result (m-comp/infer-schema data)]
      (is (= {:success true
              :schema [:time/local-date {:min d1 :max d2}]}
             result) "Should infer correct schema with min/max"))))
