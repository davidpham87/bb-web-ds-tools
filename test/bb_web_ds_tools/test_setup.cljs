(ns bb-web-ds-tools.test-setup
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

(defn suppress-re-frame-warnings []
  (let [orig-warn (or (:warn (rf/console-loggers)) js/console.warn)]
    (rf/set-loggers!
     {:warn (fn [& args]
              (let [msg (first args)]
                (when-not (and (string? msg)
                               (str/includes? msg "Subscribe was called outside"))
                  (apply orig-warn args))))})))
