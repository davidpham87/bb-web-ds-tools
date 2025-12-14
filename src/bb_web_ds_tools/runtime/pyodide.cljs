(ns bb-web-ds-tools.runtime.pyodide
  "Runtime environment management for pyodide.

  Key functionality:
  - (default-on-message [msg])
  - (init-worker! [& [on-message])
  - (load-runtime-worker [& [on-message])
  - (eval-in-worker [code])
  - (sync-datasets [datasets])
  - ..."
  (:require [bb-web-ds-tools.utils.worker :as worker]
            [portal.web :as p]
            [re-frame.core :as rf]
            [goog.object :as gobj]))

(defonce pyodide-worker (atom nil))
(defonce main-pyodide (atom nil))
(defonce main-loading (atom false))

(defn- default-on-message
  "Default handler for messages from the Pyodide worker.

  Args:
    msg (map): The message map.

  Returns:
    nil: Side-effects (logging)."
  [msg]
  (let [{:keys [type text]} msg]
    (case (keyword type)
      :ready (js/console.log "Pyodide worker ready")
      :error (js/console.error "Pyodide worker error" text)
      (js/console.warn "Unknown worker msg:" msg))))

(defn init-worker!
  "Initializes the Pyodide worker.

  Args:
    on-message (fn, optional): Custom message handler.

  Returns:
    nil: Sets the global pyodide-worker atom."
  [& [on-message]]
  (if-not @pyodide-worker
    (reset! pyodide-worker
            (worker/create-worker "js/compiled/pyodide-worker.js" (or on-message default-on-message)))
    (when on-message
      (worker/set-handler @pyodide-worker on-message))))

(defn load-runtime-worker
  "Loads the Pyodide runtime inside the worker.

  Returns:
    nil: Posts a load message to the worker."
  [& [on-message]]
  (init-worker! on-message)
  (worker/post-message @pyodide-worker {:type "load"}))

(defn eval-in-worker
  "Evaluates Python code in the Pyodide worker.

  Args:
    code (string): The Python code to evaluate.

  Returns:
    nil: Posts a run message to the worker."
  [code]
  (init-worker!)
  (worker/post-message @pyodide-worker {:type "run" :code code}))

(defn sync-datasets
  "Syncs datasets to the Pyodide worker.

  Args:
    datasets (map): The datasets map.

  Returns:
    nil: Posts a message."
  [datasets]
  (init-worker!)
  (worker/post-message @pyodide-worker {:type "update-datasets" :datasets datasets}))

(defn- load-script
  "Dynamically loads a script tag into the document.

  Args:
    src (string): The source URL of the script.
    onload (fn): Callback on success.
    onerror (fn): Callback on error.

  Returns:
    nil: Appends the script to the document body."
  [src onload onerror]
  (let [script (js/document.createElement "script")]
    (set! (.-src script) src)
    (set! (.-onload script) onload)
    (set! (.-onerror script) onerror)
    (js/document.body.appendChild script)))

(defn load-runtime-main
  "Loads the Pyodide runtime in the main thread.

  Args:
    on-ready (fn): Callback invoked when Pyodide is ready.
    on-error (fn): Callback invoked on load failure.

  Returns:
    nil: Initiates the loading process."
  [on-ready on-error]
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

(defn eval-in-main
  "Evaluates Python code in the main thread using Pyodide.

  Args:
    code (string): The Python code to evaluate.

  Returns:
    nil: Uses a promise chain to submit results to Portal."
  [code]
  (if @main-pyodide
    (let [run-fn (gobj/get @main-pyodide "runPythonAsync")]
      (-> (run-fn code)
          (.then (fn [res] (p/submit {:type :result :value res})))
          (.catch (fn [err] (p/submit {:type :error :text (str err)})))))
    (p/submit {:type :error :text "Pyodide not loaded"})))
