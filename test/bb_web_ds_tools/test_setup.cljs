(ns bb-web-ds-tools.test-setup
  (:require [re-frame.loggers :as loggers]
            [clojure.string :as str]))

(def ^:private saved-warn-logger (atom nil))

(def suppress-re-frame-warnings
  {:before (fn []
             (let [orig-warn (get (loggers/get-loggers) :warn)]
               (reset! saved-warn-logger orig-warn)
               (loggers/set-loggers!
                {:warn (fn [& args]
                         (let [msg (first args)]
                           (when-not (and (string? msg)
                                          (str/includes? msg "Subscribe was called outside of a reactive context"))
                             (if orig-warn
                               (apply orig-warn args)
                               (js/console.warn (apply str args))))))})))
   :after (fn []
            (when-let [orig @saved-warn-logger]
              (loggers/set-loggers! {:warn orig})
              (reset! saved-warn-logger nil)))})
