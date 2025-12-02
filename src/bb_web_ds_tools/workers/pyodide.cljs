(ns bb-web-ds-tools.workers.pyodide
  (:require
   [cljs-bean.core :refer (->js ->clj)]
   [goog.object :as gobj]))

(defonce pyodide-instance (atom nil))

(defn post-msg [msg]
  (js/postMessage (->js msg)))

(defn run-code [code]
  (when @pyodide-instance
    (let [run-fn (gobj/get @pyodide-instance "runPythonAsync")]
      (-> (run-fn code)
          (.then
           (fn [^js res]
             (post-msg
              {:type :result
               :value (cond
                        (and res (.-toJs res)) (.toJs ^js res #js {"create_pyproxies" true})
                        (nil? res) "None"
                        :else res)})))
          (.catch
           (fn [err]
             (.log js/console err)
             (post-msg {:type :error :text (str err)})))))))

(defn load-runtime []
  (try
    (js/importScripts "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js")
    (-> (js/loadPyodide
         (clj->js {:indexURL "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/"
                   :stdout (fn [text] (post-msg #js {"type" "stdout" "text" text}))
                   :stderr (fn [text] (post-msg {:type :error :text text}))}))
        (.then (fn [p]
                 (reset! pyodide-instance p)
                 (post-msg {:type :ready})))
        (.catch (fn [e] (post-msg {:type :error :text (str "Load Error: " e)}))))
    (catch :default e
      (post-msg {:type :error :text (str "Import Error: " e)}))))

(defn init []
  (js/self.addEventListener
   "message"
   (fn [e]
     (let [data (->clj (.-data e) :keywordize-keys true)
           {:keys [type code]} data]
       (case type
         "load" (load-runtime)
         "run" (run-code code)
         (js/console.warn "Unknown message type:" type))))))
