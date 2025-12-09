(ns verification.e2e.runner
  (:require [verification.e2e.core]
            [verification.e2e.release-test]
            [verification.e2e.theme-test]
            [verification.e2e.navigation-test]))

(defn -main []
  (println "Starting e2e tests...")
  (verification.e2e.core/run-all))
