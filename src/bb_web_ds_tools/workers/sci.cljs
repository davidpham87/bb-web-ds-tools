(ns bb-web-ds-tools.workers.sci
  (:require [sci.core :as sci]
            [clojure.tools.reader :as tr]
            [clojure.tools.reader.reader-types :as rt]
            [portal.web :as p]))

(defn post-msg [msg]
  (js/postMessage (clj->js msg)))

(def sci-ctx
  (sci/init {:namespaces {'clojure.core {'println (fn [& args]
                                                    (p/submit {:type :stdout
                                                               :text (apply str (interpose " " args))}))}
                          're-frame.core {'dispatch (fn [event]
                                                      (post-msg {:type :dispatch
                                                                 :event event}))
                                          'subscribe (fn [_]
                                                       (p/submit {:type :stderr
                                                                  :text "rf/subscribe is not supported in the worker."})
                                                       (atom nil))}}}))

(defn eval-code [code]
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

(defn init []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [data (js->clj (.-data e) :keywordize-keys true)
           {:keys [type code]} data]
       (case type
         "eval" (eval-code code)
         (js/console.warn "Unknown message type:" type))))))
