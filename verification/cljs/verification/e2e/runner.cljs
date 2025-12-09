(ns verification.e2e.runner
  (:require [verification.e2e.core]
            [verification.e2e.verify-font]))

(defn -main []
  (println "Starting e2e tests...")
  (verification.e2e.core/run-all))
