(ns bb-web-ds-tools.workers.sci
  (:require
   [cljs-bean.core :refer (->clj)]
   [clojure.edn :as edn]
   [clojure.set :as set]
   [clojure.string :as str]
   [clojure.tools.reader :as tr]
   [clojure.tools.reader.reader-types :as rt]
   [cognitect.transit :as t]
   [sci.core :as sci]))

(def datasets-atom (atom {}))
(def datasets-sci-var (sci/new-var 'datasets datasets-atom))
(def ^:dynamic *suppress-sync* false)

(defn post-msg
  "Posts a message back to the main thread.

  Args:
    msg (map): The message to send.

  Returns:
    nil."
  [msg]
  (let [w (t/writer :json)
        payload (t/write w (if (seq msg) msg "nil"))]
    (js/postMessage payload)))

(add-watch datasets-atom :sync-main
           (fn [_ _ old-state new-state]
             (when-not *suppress-sync*
               (let [keys-old (set (keys old-state))
                     keys-new (set (keys new-state))
                     added (set/difference keys-new keys-old)
                     common (set/intersection keys-new keys-old)
                     changed (filter #(not= (get old-state %) (get new-state %)) common)
                     patch (select-keys new-state (concat added changed))]
                 (when (seq patch)
                   (post-msg {:type :patch-datasets :patch patch}))))))

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
                                                      :text "rf/subscribe is not supported in the worker."}))}
              'user {'datasets datasets-sci-var}}}))

;; Initialize aliases
(sci/eval-string* sci-ctx "(require '[clojure.string :as str] '[clojure.set :as set] '[clojure.edn :as edn])")

(defn prepare-for-transport [val]
  (cond
    (nil? val) val
    (number? val) val
    (string? val) val
    (boolean? val) val
    (keyword? val) val
    (symbol? val) val
    (uuid? val) val
    (inst? val) val
    (coll? val) val ;; Maps, Vectors, Sets, Lists (Transit handles these)
    :else (str val))) ;; Functions, Atoms, Promises, Vars, etc. -> String

(defn eval-code
  "Evaluates Clojure code using SCI.

  Args:
    code (string): The code to evaluate.

  Returns:
    nil: Posts messages with results or errors."
  [code]
  (if (seq code)
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
                               (catch :default e {:error (str "Eval Error: " e)}))
                      safe-res (if (:error res) res (prepare-for-transport res))]
                  (post-msg {:type :result :value safe-res})
                  (recur (conj acc safe-res)))))))
        (catch :default e
          (post-msg {:type :error :text (str e)}))))
    (post-msg {:type :warning :text "Code is empty"})))

(defn init
  "Initializes the worker listener.

  Returns:
    nil."
  []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [r (t/reader :json)
           data (t/read r (.-data e))
           {:keys [type code datasets]} data]
       (case type
         "eval" (eval-code code)
         "update-datasets" (binding [*suppress-sync* true]
                             (reset! datasets-atom (->clj datasets)))
         (js/console.warn "Unknown message type:" type))))))
