(ns verification.e2e.runner
  (:require [verification.e2e.core]
            [verification.e2e.release]
            [verification.e2e.theme]
            [verification.e2e.navigation]
            [verification.e2e.datasets]))

(defn -main []
  (println "Starting e2e tests...")
  (verification.e2e.core/run-all))
