(ns verification.e2e.core
  (:require [promesa.core :as p]
            ["playwright" :as playwright]))

(defonce registry (atom []))

(defn register [name f]
  (swap! registry conj {:name name :f f}))

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
                         #js {:headless true :executablePath executable-path :args #js ["--no-sandbox"]}
                         #js {:headless true :args #js ["--no-sandbox"]})]
    (-> (p/let [^js browser (.launch playwright/chromium launch-options)
                ^js context (.newContext browser)
                ^js page (.newPage context)]

          (.on page "console" (fn [msg]
                                (when (= "error" (.type msg))
                                  (println "Browser Console Error:" (.text msg)))))
          (.on page "pageerror" (fn [err]
                                  (println "Browser Page Error:" err)))

          (-> (f page)
              (p/finally (fn []
                           (.close browser)))))
        (p/catch (fn [e]
                   (println "Test failed inside with-page:" e)
                   (check false (str "Error: " e)))))))

(defn run-all []
  (let [tests @registry]
    (println "Running" (count tests) "tests")
    (p/loop [tests tests]
      (if (seq tests)
        (let [{:keys [name f]} (first tests)]
          (println "Testing" name)
          (-> (p/do! (f))
              (p/catch (fn [e]
                         (println "Error in test" name e)
                         (when (.-stack e)
                           (println "Stack:" (.-stack e)))))
              (p/then (fn [_]
                        (p/recur (rest tests))))))
        (println "Finished all tests.")))))
