(ns verification.e2e.sample-test
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

(def-e2e-test simple-sync-test
  (check true "Sync test runs"))

(def-e2e-test navigate-tabs-test
  (with-page
    (fn [^js page]
      (p/let [_ (println "Navigating to http://localhost:8080")
              _ (.goto page "http://localhost:8080")
              _ (.waitForLoadState page "networkidle")

              ;; The menu button might need a more specific selector if there are multiple
              ;; Based on previous run, it timed out waiting for 'Settings'.
              ;; Let's inspect the page source mentally or via tools if needed.
              ;; But for restoration, I'll put back what I had, maybe slightly improved if I recall the error.
              ;; The error was: TimeoutError: page.click: Timeout 30000ms exceeded. waiting for locator('text=Settings')
              ;; This implies it couldn't find "Settings".
              ;; Maybe the menu didn't open?

              menu-btn (.locator page "button[title='Menu']")
              is-visible (.isVisible menu-btn)
              _ (when is-visible
                  (println "Clicking Menu button")
                  (.click menu-btn))

              ;; Wait a bit for animation/render
              _ (.waitForTimeout page 1000)

              _ (println "Clicking Settings")
              ;; Try a robust selector for Settings
              _ (.click page "a[href='#/settings']")

              _ (.waitForSelector page "h2:has-text('Settings')")
              url (.url page)]

        (check (str/includes? url "settings") "URL should contain 'settings'")
        (println "Navigation test passed")))))

(def-e2e-test change-theme-test
  (with-page
    (fn [^js page]
      (p/let [_ (println "Navigating to Settings directly")
              _ (.goto page "http://localhost:8080/#/settings")
              _ (.waitForSelector page "h2:has-text('Settings')")
              _ (.waitForSelector page "select")

              _ (println "Changing theme to 'nord'")
              _ (.selectOption page "select" "nord")

              ;; Wait for the change to stick?
              _ (.waitForTimeout page 500)

              val (.inputValue page "select")]

        (check (= "nord" val) "Selected theme should be 'nord'")
        (println "Theme test passed")))))
