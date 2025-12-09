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

              menu-btn (.locator page "button[title='Menu']")
              is-visible (.isVisible menu-btn)
              _ (when is-visible
                  (println "Clicking Menu button")
                  (.click menu-btn))

              _ (println "Clicking Settings")
              _ (.click page "text=Settings")

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

              val (.inputValue page "select")]

        (check (= "nord" val) "Selected theme should be 'nord'")
        (println "Theme test passed")))))
