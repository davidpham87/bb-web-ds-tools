(ns bb-web-ds-tools.runtime.pyodide
  (:require [bb-web-ds-tools.utils.worker :as worker]
            [portal.web :as p]
            [re-frame.core :as rf]
            [goog.object :as gobj]))

(defonce pyodide-worker (atom nil))
(defonce main-pyodide (atom nil))
(defonce main-loading (atom false))

(defn- default-on-message [msg]
  (let [{:keys [type text]} msg]
    (case (keyword type)
      :ready (js/console.log "Pyodide worker ready")
      :error (js/console.error "Pyodide worker error" text)
      (js/console.warn "Unknown worker msg:" msg))))

(defn init-worker! [& [on-message]]
  (when-not @pyodide-worker
    (reset! pyodide-worker (worker/create-worker "js/compiled/pyodide-worker.js" (or on-message default-on-message)))))

(defn load-runtime-worker []
  (init-worker!)
  (worker/post-message @pyodide-worker {:type "load"}))

(defn eval-in-worker [code]
  (init-worker!)
  (worker/post-message @pyodide-worker {:type "run" :code code}))

(defn- load-script [src onload onerror]
  (let [script (js/document.createElement "script")]
    (set! (.-src script) src)
    (set! (.-onload script) onload)
    (set! (.-onerror script) onerror)
    (js/document.body.appendChild script)))

(defn load-runtime-main [on-ready on-error]
  (cond
    @main-pyodide (on-ready)
    @main-loading (js/console.warn "Pyodide is already loading...")
    :else
    (do
      (reset! main-loading true)
      (let [url "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js"
            index-url "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/"]
        (load-script url
                     (fn []
                       (-> (js/loadPyodide
                            (clj->js {:indexURL index-url
                                      :stdout (fn [text] (p/submit {:type :stdout :text text}))
                                      :stderr (fn [text] (p/submit {:type :stderr :text text}))}))
                           (.then (fn [p]
                                    (reset! main-pyodide p)
                                    (reset! main-loading false)
                                    (on-ready)))
                           (.catch (fn [e]
                                     (reset! main-loading false)
                                     (on-error (str "Load Error: " e))))))
                     (fn [e]
                       (reset! main-loading false)
                       (on-error (str "Script Load Error: " e))))))))

(defn eval-in-main [code]
  (if @main-pyodide
    (let [run-fn (gobj/get @main-pyodide "runPythonAsync")]
      (-> (run-fn code)
          (.then (fn [res] (p/submit {:type :result :value res})))
          (.catch (fn [err] (p/submit {:type :error :text (str err)})))))
    (p/submit {:type :error :text "Pyodide not loaded"})))
