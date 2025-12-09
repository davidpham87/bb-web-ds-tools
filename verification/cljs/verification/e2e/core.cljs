(ns verification.e2e.core
  (:require [cljs.core.async :refer [go <!]]
            [cljs.core.async.impl.protocols :as protocols]))

(defonce registry (atom []))

(defn register [name f]
  (swap! registry conj {:name name :f f}))

(defn is-channel? [c]
  (satisfies? protocols/ReadPort c))

(defn run-all []
  (go
    (println "Running" (count @registry) "tests")
    (doseq [{:keys [name f]} @registry]
      (println "Testing" name)
      (try
        (let [res (f)]
          (when (is-channel? res)
            (<! res)))
        (catch :default e
          (println "Error in test" name e)
          (println "Stack:" (.-stack e)))))
    (println "Finished all tests.")))
