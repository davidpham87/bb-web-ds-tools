(ns verification.e2e.core
  (:require [promesa.core :as p]))

(defonce registry (atom []))

(defn register [name f]
  (swap! registry conj {:name name :f f}))

(defn run-all []
  (let [tests @registry]
    (println "Running" (count tests) "tests")
    (p/loop [tests tests]
      (if (seq tests)
        (let [{:keys [name f]} (first tests)]
          (println "Testing" name)
          (-> (p/do! (f))
              (p/catch (fn [e]
                         (println "Error in test" name e)
                         (when (.-stack e)
                           (println "Stack:" (.-stack e)))))
              (p/then (fn [_]
                        (p/recur (rest tests))))))
        (println "Finished all tests.")))))
