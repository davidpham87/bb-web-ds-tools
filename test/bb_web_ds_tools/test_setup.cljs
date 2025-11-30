(ns bb-web-ds-tools.test-setup
  (:require [re-frame.loggers :as loggers]
            [clojure.string :as str]))

(defn suppress-re-frame-warnings [f]
  (let [orig-warn (get (loggers/get-loggers) :warn)]
    (loggers/set-loggers!
     {:warn (fn [& args]
              (let [msg (first args)]
                (when-not (and (string? msg)
                               (str/includes? msg "Subscribe was called outside of a reactive context"))
                  (apply orig-warn args))))})
    (try
      (f)
      (finally
        (loggers/set-loggers! {:warn orig-warn})))))
