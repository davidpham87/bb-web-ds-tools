(ns bb-web-ds-tools.runtime.sci
  (:require [bb-web-ds-tools.utils.worker :as worker]
            [portal.web :as p]
            [sci.core :as sci]
            [clojure.tools.reader :as tr]
            [clojure.tools.reader.reader-types :as rt]
            [re-frame.core :as rf]))

(defonce sci-worker (atom nil))

(defn- default-on-message
  "Default handler for messages from the SCI worker.

  Args:
    msg (map): The message map containing :type, :event, :value, or :text.

  Returns:
    nil: Performs side-effects (dispatch or console log)."
  [msg]
  (let [{:keys [type event value text]} msg]
    (case (keyword type)
      :dispatch (rf/dispatch event)
      (js/console.warn "Unknown worker msg:" msg))))

(defn init!
  "Initializes the SCI worker if it hasn't been initialized yet.

  Args:
    on-message (fn, optional): Custom message handler. Defaults to `default-on-message`.

  Returns:
    nil: Sets the global sci-worker atom."
  [& [on-message]]
  (when-not @sci-worker
    (reset! sci-worker (worker/create-worker "js/compiled/sci-worker.js" (or on-message default-on-message)))))

(defn eval-in-worker
  "Evaluates Clojure code in the SCI worker.

  Args:
    code (string): The Clojure source code to evaluate.

  Returns:
    nil: Posts a message to the worker."
  [code]
  (init!)
  (worker/post-message @sci-worker {:type "eval" :code code}))

;; Main thread SCI context
(def sci-ctx
  (sci/init {:namespaces
             {'clojure.core {'println (fn [& args]
                                        (p/submit {:type :stdout
                                                   :text (apply str (interpose " " args))}))}
              're-frame.core {'dispatch rf/dispatch
                              'subscribe (fn [_]
                                           (p/submit {:type :stderr
                                                      :text "rf/subscribe is not supported in SCI main thread yet."})
                                           (atom nil))}}}))

(defn eval-in-main
  "Evaluates Clojure code in the main thread using SCI.

  Args:
    code (string): The Clojure source code to evaluate.

  Returns:
    vector: A vector of results or error maps from evaluating the forms."
  [code]
  (let [rdr (rt/string-push-back-reader code)]
    (try
      (loop [acc []]
        (let [form (try (tr/read rdr false :eof)
                        (catch :default e {:error (str "Read Error: " e)}))]
          (if (= form :eof)
            acc
            (if (and (map? form) (:error form))
              (do
                (p/submit {:type :error :text (:error form)})
                (recur (conj acc form)))
              (let [res (try (sci/eval-form sci-ctx form)
                             (catch :default e {:error (str "Eval Error: " e)}))]
                (p/submit {:type :result :value (str res)})
                (recur (conj acc res)))))))
      (catch :default e
        (p/submit {:type :error :text (str e)})))))
