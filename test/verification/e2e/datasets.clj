(ns verification.e2e.datasets
  (:require
   [verification.e2e.core :as core]
   [promesa.core :as p]))

(core/register "Datasets View"
  (fn []
    (core/with-page
      (fn [page]
        (-> (.goto page "http://localhost:8080/#/datasets")
            (p/then #(do (println "Page loaded.")
                         (.waitForSelector page "text=Datasets")))
            (p/then #(do (println "Datasets visible.")
                         (.click (.getByText page "+ New Dataset"))))
            (p/then #(do (println "Clicked New Dataset.")
                         (.waitForSelector page "text=Format")))
            (p/then #(do (println "Format visible.")
                         (.waitForSelector page "text=Structure")))
            (p/then #(do (println "Structure visible.")
                         (.waitForSelector page "text=Download from URLs")))
            (p/then #(do (println "Download visible.")
                         (.screenshot page #js {:path "verification/datasets_view_cljs.png"})))
            (p/then #(println "Screenshot taken. Verification complete!")))))))
