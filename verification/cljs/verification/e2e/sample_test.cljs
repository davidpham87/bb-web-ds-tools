(ns verification.e2e.sample-test
  (:require-macros [verification.e2e.macros :refer [def-e2e-test]])
  (:require [cljs.core.async :refer [go <!]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [clojure.string :as str]
            [verification.e2e.core]
            ["playwright" :as playwright]))

(defn check [val msg]
  (if val
    (println "PASS:" msg)
    (do
      (println "FAIL:" msg)
      (throw (ex-info (str "Assertion failed: " msg) {})))))

(defn with-page [f]
  (go
    (try
      (let [launch-options #js {:headless true}
            ^js browser (<p! (.launch playwright/chromium launch-options))
            ^js context (<p! (.newContext browser))
            ^js page (<p! (.newPage context))]
         (try
           (<! (f page))
           (finally
             (<p! (.close browser)))))
      (catch :default e
        (println "Error in test wrapper:" e)
        (check false (str "Error: " e))))))

(def-e2e-test simple-sync-test
  (check true "Sync test runs"))

(def-e2e-test navigate-tabs-test
  (with-page
    (fn [^js page]
      (go
        (println "Navigating to http://localhost:8080")
        (try
          (<p! (.goto page "http://localhost:8080"))

          (<p! (.waitForLoadState page "networkidle"))

          (let [^js menu-btn (<p! (.locator page "button[title='Menu']"))
                is-visible (<p! (.isVisible menu-btn))]
            (when is-visible
              (println "Clicking Menu button")
              (<p! (.click menu-btn))))

          (println "Clicking Settings")
          (<p! (.click page "text=Settings"))

          (<p! (.waitForSelector page "h2:has-text('Settings')"))
          (let [url (<p! (.url page))]
            (check (str/includes? url "settings") "URL should contain 'settings'"))
          (println "Navigation test passed")
          (catch :default e
             (println "Test failed:" e)
             (check false (str "Exception: " e))))))))

(def-e2e-test change-theme-test
  (with-page
    (fn [^js page]
      (go
        (println "Navigating to Settings directly")
        (try
          (<p! (.goto page "http://localhost:8080/#/settings"))
          (<p! (.waitForSelector page "h2:has-text('Settings')"))

          (<p! (.waitForSelector page "select"))

          (println "Changing theme to 'nord'")
          (<p! (.selectOption page "select" "nord"))

          (let [val (<p! (.inputValue page "select"))]
            (check (= "nord" val) "Selected theme should be 'nord'"))
          (println "Theme test passed")
          (catch :default e
             (println "Test failed:" e)
             (check false (str "Exception: " e))))))))
