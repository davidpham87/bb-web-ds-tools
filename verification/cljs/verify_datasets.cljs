(ns verify-datasets
  (:require [promesa.core :as p]
            ["playwright" :as playwright]))

(println "Module loaded.")

(defn main []
  (println "Main function called.")
  (let [keep-alive (js/setInterval (fn []) 1000)
        executable-path (or (.. js/process -env -CHROME_BIN)
                            "/home/jules/.cache/ms-playwright/chromium-1187/chrome-linux/chrome")]
    (-> (.. playwright -chromium (launch #js {:headless true
                                              :executablePath executable-path
                                              :args #js ["--no-sandbox"]}))
        (.then (fn [browser]
                 (println "Browser launched.")
                 (-> (.newPage browser)
                     (.then (fn [page]
                              (println "Page created.")
                              (-> (.goto page "http://localhost:8000/#/datasets")
                                  (.then (fn [] (println "Page loaded.")
                                                (.waitForSelector page "text=Datasets")))
                                  (.then (fn [] (println "Datasets visible.")
                                                (.click (.getByText page "+ New Dataset"))))
                                  (.then (fn [] (println "Clicked New Dataset.")
                                                (.waitForSelector page "text=Format")))
                                  (.then (fn [] (println "Format visible.")
                                                (.waitForSelector page "text=Structure")))
                                  (.then (fn [] (println "Structure visible.")
                                                (.waitForSelector page "text=Download from URLs")))
                                  (.then (fn [] (println "Download visible.")
                                                (.screenshot page #js {:path "verification/datasets_view_cljs.png"})))
                                  (.then (fn [] (println "Screenshot taken.")
                                                (println "Verification complete!")
                                                (.close browser)
                                                (js/clearInterval keep-alive)))))))))
        (.catch (fn [err]
                  (println "Error:" err)
                  (js/clearInterval keep-alive))))))
