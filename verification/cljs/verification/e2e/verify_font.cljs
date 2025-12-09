(ns verification.e2e.verify-font
  (:require-macros [verification.e2e.macros :refer [def-e2e-test]])
  (:require [clojure.string :as str]
            [verification.e2e.core]
            ["playwright" :as playwright]
            [promesa.core :as p]))

(defn check [val msg]
  (if val
    (println "PASS:" msg)
    (do
      (println "FAIL:" msg)
      (throw (ex-info (str "Assertion failed: " msg) {})))))

(defn with-page [f]
  (let [executable-path (or (.. js/process -env -CHROME_BIN)
                            (.. js/process -env -PUPPETEER_EXECUTABLE_PATH))
        launch-options (if executable-path
                         #js {:headless true :executablePath executable-path}
                         #js {:headless true})]
    (-> (p/let [^js browser (.launch playwright/chromium launch-options)
                ^js context (.newContext browser)
                ^js page (.newPage context)]
          (-> (f page)
              (p/finally (fn []
                           (.close browser)))))
        (p/catch (fn [e]
                   (println "Test failed inside with-page:" e)
                   (check false (str "Error: " e)))))))

(def-e2e-test verify-editor-font
  (with-page
    (fn [^js page]
      (p/let [_ (println "Navigating to http://localhost:8080/#/code")
              _ (.goto page "http://localhost:8080/#/code")
              _ (.waitForSelector page ".monaco-editor" #js {:timeout 10000})

              ;; Evaluate script to check font family
              font-family (.evaluate page
                                     (fn []
                                       (let [el (js/document.querySelector ".monaco-editor .view-lines")]
                                         (.. js/window (getComputedStyle el) -fontFamily))))]

        (println "Computed font family:" font-family)
        (check (str/includes? font-family "Source Code Pro") "Font family should include 'Source Code Pro'")
        (println "Font verification passed")))))
