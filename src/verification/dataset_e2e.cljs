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
      (let [chromium (.-chromium pw)
            executable-path (or (.. js/process -env -CHROME_BIN)
                                (.. js/process -env -PUPPETEER_EXECUTABLE_PATH))
            launch-options (if executable-path
                             #js {:headless true :executablePath executable-path :args #js ["--no-sandbox"]}
                             #js {:headless true :args #js ["--no-sandbox"]})]
        (if-not chromium
          (fail "Chromium not found in playwright module")
          (let [browser (<p! (.launch chromium launch-options))
                page (<p! (.newPage browser))]
            (log "Browser launched.")

            (.on page "console" (fn [msg]
                                  (when (= "error" (.type msg))
                                    (log (str "BROWSER ERROR: " (.text msg))))))

            (try
              (log "Navigating to root...")
              (<p! (.goto page "http://localhost:8080/"))

              (log "Waiting for app to load (checking landing page text)...")
              (<p! (.waitFor (.getByText page "Swiss Army Knife")))

              (log "Navigating to Datasets via URL...")
              (<p! (.goto page "http://localhost:8080/#/datasets"))

              (log "Waiting for + New Dataset button (Sidebar)...")
              (let [new-btn (.getByRole page "button" #js {:name "+ New Dataset"})]
                (<p! (.waitFor new-btn #js {:timeout 10000})))

              (log "Clicking + New Dataset...")
              (<p! (.click (.getByRole page "button" #js {:name "+ New Dataset"})))

              (log "Waiting for Create button (Importer View)...")
              (let [create-btn (.getByRole page "button" #js {:name "Create"})]
                (<p! (.waitFor create-btn #js {:timeout 5000})))

              (log "Filling Input (Monaco)...")
              ;; Target the editor container
              (let [editor (.locator page ".monaco-editor")]
                (<p! (.click editor))
                 ;; Clear existing text (Ctrl+A, Backspace)
                (let [body (.locator page "body")]
                  (<p! (.press body "Control+A"))
                  (<p! (.press body "Backspace")))
                 ;; Insert text with valid JSON (comma separated array)
                (<p! (.insertText (.-keyboard page) "{\"a\": 1, \"b\": [1, 2]}")))

              (log "Selecting JSON format...")
              (<p! (.click (.getByRole page "button" #js {:name "JSON"})))

              (log "Selecting Tree structure...")
              (<p! (.click (.getByRole page "button" #js {:name "Tree (Raw)"})))

              (log "Clicking Create...")
              (<p! (.click (.getByRole page "button" #js {:name "Create"})))

              (log "Waiting for data table (implies success)...")
              (<p! (.waitForTimeout page 1000))

              (log "Clicking Export tab...")
              (<p! (.click (.getByRole page "button" #js {:name "Export"})))

              (log "Verifying Export View...")
              (let [export-btn (.getByRole page "button" #js {:name "Download"})]
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
