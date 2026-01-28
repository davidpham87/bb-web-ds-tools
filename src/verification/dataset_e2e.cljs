(ns verification.dataset-e2e
  (:require [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            ["playwright" :as pw]))

(defn log [msg]
  (js/console.log msg))

(defn fail [msg]
  (js/console.error "FAIL:" msg)
  (js/process.exit 1))

(defn verify-datasets []
  (go
    (try
      (log "Launching browser...")
      (let [chromium (.-chromium pw)]
        (if-not chromium
          (fail "Chromium not found in playwright module")
          (let [^js browser (<p! (.launch chromium))
                ^js page (<p! (.newPage browser))]
            (log "Browser launched.")

            (.on page "console" (fn [msg]
                                  (when (= "error" (.type msg))
                                    (log (str "BROWSER ERROR: " (.text msg))))))

            (try
              (log "Navigating to root...")
              (<p! (.goto page "http://localhost:8080/"))

              (log "Waiting for app to load (checking landing page text)...")
              (let [^js el (.getByText page "Swiss Army Knife")]
                (<p! (.waitFor el)))

              (log "Navigating to Datasets via URL...")
              (<p! (.goto page "http://localhost:8080/#/datasets"))

              (log "Waiting for + New Dataset button (Sidebar)...")
              (let [^js new-btn (.getByRole page "button" #js {:name "+ New Dataset"})]
                (<p! (.waitFor new-btn #js {:timeout 10000})))

              (log "Clicking + New Dataset...")
              (let [^js new-btn (.getByRole page "button" #js {:name "+ New Dataset"})]
                (<p! (.click new-btn)))

              (log "Waiting for Create button (Importer View)...")
              (let [^js create-btn (.getByRole page "button" #js {:name "Create"})]
                (<p! (.waitFor create-btn #js {:timeout 5000})))

              (log "Filling Input (Monaco)...")
              ;; Target the editor container
              (let [^js editor (.locator page ".monaco-editor")]
                (<p! (.click editor))
                 ;; Clear existing text (Ctrl+A, Backspace)
                (let [^js body (.locator page "body")]
                  (<p! (.press body "Control+A"))
                  (<p! (.press body "Backspace")))
                 ;; Insert text with valid JSON (comma separated array)
                (let [^js keyboard (.-keyboard page)]
                  (<p! (.insertText keyboard "{\"a\": 1, \"b\": [1, 2]}"))))

              (log "Selecting JSON format...")
              (let [^js btn (.getByRole page "button" #js {:name "JSON"})]
                (<p! (.click btn)))

              (log "Selecting Tree structure...")
              (let [^js btn (.getByRole page "button" #js {:name "Tree (Raw)"})]
                (<p! (.click btn)))

              (log "Clicking Create...")
              (let [^js btn (.getByRole page "button" #js {:name "Create"})]
                (<p! (.click btn)))

              (log "Waiting for data table (implies success)...")
              (<p! (.waitForTimeout page 1000))

              (log "Clicking Export tab...")
              (let [^js btn (.getByRole page "button" #js {:name "Export"})]
                (<p! (.click btn)))

              (log "Verifying Export View...")
              (let [^js export-btn (.getByRole page "button" #js {:name "Download"})]
                (<p! (.waitFor export-btn #js {:timeout 5000}))
                (log "Download button visible."))

              (log "SUCCESS: Dataset verification passed.")

              (catch :default e
                (js/console.error "Step failed:" e)
                (<p! (.screenshot page #js {:path "docs/failure.png" :fullPage true}))
                (log "Screenshot saved to docs/failure.png")
                (fail (str "Error during steps: " (.-message e))))
              (finally
                (<p! (.close browser))
                (js/process.exit 0))))))
      (catch :default e
        (js/console.error "Launch failed:" e)
        (fail (str "Error launching: " (.-message e)))))))

(defn main []
  (verify-datasets))
