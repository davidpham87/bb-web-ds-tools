(ns bb-web-ds-tools.workers.sci
  (:require
   [cljs-bean.core :refer (->js ->clj)]
   [clojure.tools.reader :as tr]
   [clojure.tools.reader.reader-types :as rt]
   [sci.core :as sci]
   [clojure.string :as str]
   [clojure.set :as set]
   [clojure.edn :as edn]))

(def datasets-atom (atom {}))

(defn post-msg
  "Posts a message back to the main thread.

  Args:
    msg (map): The message to send.

  Returns:
    nil."
  [msg]
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
                                           (atom nil))}
              'clojure.string {'blank? str/blank?
                               'capitalize str/capitalize
                               'ends-with? str/ends-with?
                               'escape str/escape
                               'includes? str/includes?
                               'index-of str/index-of
                               'join str/join
                               'last-index-of str/last-index-of
                               'lower-case str/lower-case
                               're-quote-replacement str/re-quote-replacement
                               'replace str/replace
                               'replace-first str/replace-first
                               'reverse str/reverse
                               'split str/split
                               'split-lines str/split-lines
                               'starts-with? str/starts-with?
                               'trim str/trim
                               'trim-newline str/trim-newline
                               'triml str/triml
                               'trimr str/trimr
                               'upper-case str/upper-case}
              'clojure.set {'difference set/difference
                            'index set/index
                            'intersection set/intersection
                            'join set/join
                            'map-invert set/map-invert
                            'project set/project
                            'rename set/rename
                            'rename-keys set/rename-keys
                            'select set/select
                            'subset? set/subset?
                            'superset? set/superset?
                            'union set/union}
              'clojure.edn {'read-string edn/read-string}
              'user {'datasets datasets-atom}}}))

;; Initialize aliases
(sci/eval-string sci-ctx "(require '[clojure.string :as str] '[clojure.set :as set] '[clojure.edn :as edn])")

(defn eval-code
  "Evaluates Clojure code using SCI.

  Args:
    code (string): The code to evaluate.

  Returns:
    nil: Posts messages with results or errors."
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
                (post-msg {:type :error :text (:error form)})
                (recur (conj acc form)))
              (let [res (try (sci/eval-form sci-ctx form)
                             (catch :default e {:error (str "Eval Error: " e)}))]
                (post-msg {:type :result :value res})
                (recur (conj acc res)))))))
      (catch :default e
        (post-msg {:type :error :text (str e)})))))

(defn init
  "Initializes the worker listener.

  Returns:
    nil."
  []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [data (->clj (.-data e) :keywordize-keys true)
           {:keys [type code datasets]} data]
       (case type
         "eval" (eval-code code)
         "update-datasets" (reset! datasets-atom datasets)
         (js/console.warn "Unknown message type:" type))))))
