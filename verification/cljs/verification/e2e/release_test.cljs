(ns verification.e2e.release-test
  (:require-macros [verification.e2e.macros :refer [def-e2e-test]])
  (:require [clojure.string :as str]
            [verification.e2e.core :refer [with-page check]]
            [promesa.core :as p]))

(def items
  [{:label "Malli" :route "#/malli" :text "Input Data"}
   {:label "HoneySQL" :route "#/honeysql" :text "Convert to SQL"}
   {:label "Vega-Lite" :route "#/vega-lite" :text "Import Dataset"}
   {:label "Gemma" :route "#/gemma" :text "Load Gemma Model"}
   {:label "Pyodide" :route "#/pyodide" :text "Run"} ;; "Run" button is more reliable than "Python Code" which might be delayed or inside special layout
   {:label "Editor" :route "#/editor" :text "Save Code"}
   {:label "Repl" :route "#/repl" :text "Clojure Code"}
   {:label "Datasets" :route "#/datasets" :text "Create New Dataset"}
   {:label "Settings" :route "#/settings" :text "Settings"}
   {:label "Changelog" :route "#/changelog" :text "Changelog"}])

(def-e2e-test verify-release
  (with-page
    (fn [^js page]
      (p/let [_ (println "Navigating to landing page...")
              _ (.goto page "http://localhost:8080")
              ;; Updated text assertion based on landing.cljs
              _ (.waitForSelector page "text=Swiss Army Knife" #js {:timeout 30000})
              _ (println "Landing page loaded.")

              _ (p/loop [items items]
                  (if (seq items)
                    (let [{:keys [label route text]} (first items)]
                      (println "Navigating to" label "...")
                      (p/do!
                       (.goto page (str "http://localhost:8080/" route))

                       ;; Handle potential Jupyter dialogs that block the UI
                       (p/let [is-visible (.isVisible page "text=Select Kernel")]
                         (when is-visible
                           (println "Dismissing Kernel dialog...")
                           (.evaluate page "document.querySelectorAll('.jp-Dialog').forEach(e => e.remove())")))

                       (p/let [_ (.waitForSelector page (str "text=" text) #js {:timeout 10000})]
                         (println "Verified" label "page.")
                         (p/recur (rest items)))))
                    (p/resolved nil)))]
        (println "All pages verified successfully!")))))
