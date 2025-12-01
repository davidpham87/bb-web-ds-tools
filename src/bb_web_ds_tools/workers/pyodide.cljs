(ns bb-web-ds-tools.workers.pyodide
  (:require [clojure.string :as str]
            [goog.object :as gobj]
            [portal.web :as p]))

(defonce pyodide-instance (atom nil))

(defn post-msg [msg]
  (js/postMessage (clj->js msg)))

(defn run-code [code]
  (when @pyodide-instance
    (let [run-fn (gobj/get @pyodide-instance "runPythonAsync")]
      (-> (run-fn code)
          (.then (fn [res]
                   (p/submit {:type :result :value (str res)})))
          (.catch (fn [err]
                    (p/submit {:type :error :text (str err)})
                    (post-msg {:type :error :text (str err)})))))))

(defn load-runtime []
  (try
    (js/importScripts "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js")
    (-> (js/loadPyodide
         (clj->js {:indexURL "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/"
                   :stdout (fn [text] (p/submit {:type :stdout :text text}))
                   :stderr (fn [text] (p/submit {:type :stderr :text text}))}))
        (.then (fn [p]
                 (reset! pyodide-instance p)
                 (post-msg {:type :ready})))
        (.catch (fn [e]
                  (p/submit {:type :error :text (str "Load Error: " e)})
                  (post-msg {:type :error :text (str "Load Error: " e)}))))
    (catch :default e
      (p/submit {:type :error :text (str "Import Error: " e)})
      (post-msg {:type :error :text (str "Import Error: " e)}))))

(defn init []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [data (js->clj (.-data e) :keywordize-keys true)
           {:keys [type code]} data]
       (case type
         "load" (load-runtime)
         "run" (run-code code)
         (js/console.warn "Unknown message type:" type))))))
