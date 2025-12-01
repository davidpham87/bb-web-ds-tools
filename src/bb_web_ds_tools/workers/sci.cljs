(ns bb-web-ds-tools.workers.sci
  (:require
   [cljs-bean.core :refer (->js ->clj)]
   [clojure.tools.reader :as tr]
   [clojure.tools.reader.reader-types :as rt]
   [sci.core :as sci]))

(defn post-msg [msg]
  (js/postMessage (->js msg)))

(def sci-ctx
  (sci/init {:namespaces
             {'clojure.core {'println (fn [& args]
                                        (post-msg {:type :stdout
                                                   :text (apply str (interpose " " args))}))}
              're-frame.core {'dispatch (fn [event]
                                          (post-msg {:type :dispatch
                                                     :event event}))
                              'subscribe (fn [_]
                                           (post-msg {:type :stderr
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
                (post-msg {:type :error :text (:error form)})
                (recur (conj acc form)))
              (let [res (try (sci/eval-form sci-ctx form)
                             (catch :default e {:error (str "Eval Error: " e)}))]
                (post-msg {:type :result :value res})
                (recur (conj acc res)))))))
      (catch :default e
        (post-msg {:type :error :text (str e)})))))

(defn init []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [data (->clj (.-data e) :keywordize-keys true)
           {:keys [type code]} data]
       (case type
         "eval" (eval-code code)
         (js/console.warn "Unknown message type:" type))))))
