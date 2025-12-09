(ns verification.e2e.navigation-test
  (:require-macros [verification.e2e.macros :refer [def-e2e-test]])
  (:require [clojure.string :as str]
            [verification.e2e.core :refer [with-page check]]
            [promesa.core :as p]))

(def-e2e-test verify-direct-url-access
  (with-page
    (fn [^js page]
      (p/let [target-url "http://localhost:8080/#/editor"
              _ (println "Navigating directly to" target-url)
              _ (.goto page target-url)

              ;; Wait for the editor to load which confirms we are on the right page
              _ (.waitForSelector page "text=Save Code" #js {:timeout 10000})

              url (.url page)]

        (println "Current URL:" url)
        (check (str/includes? url "editor") "URL should verify we are on the editor page")
        (println "Direct URL navigation verification passed")))))
