(ns verification.e2e.runner
  (:require [verification.e2e.core]
            [verification.e2e.sample-test]
            [verification.e2e.verify-font]
            [verification.e2e.theme-test]))

(defn -main []
  (println "Starting e2e tests...")
  (verification.e2e.core/run-all))
