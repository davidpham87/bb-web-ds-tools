(ns bb-web-ds-tools.workers.pyodide
  (:require
   [cognitect.transit :as t]
   [goog.object :as gobj]))

(defonce pyodide-instance (atom nil))

(defn post-msg
  "Posts a message back to the main thread.

  Args:
    msg (map): The message to send.

  Returns:
    nil."
  [msg]
  (try
    (let [w (t/writer :json)
          payload (t/write w msg)]
      (js/postMessage payload))
    (catch :default e
      (js/console.error "Worker postMessage failed:" e)
      (try
        (let [w (t/writer :json)
              payload (t/write w {:type :error :text (str "Worker Communication Error: " (.-message e))})]
          (js/postMessage payload))
        (catch :default _
          (js/console.error "Fatal: Could not send error message."))))))

(defn run-code
  "Runs Python code using Pyodide.

  Args:
    code (string): The Python code.

  Returns:
    nil: Posts result or error messages."
  [code]
  (when @pyodide-instance
    (let [run-fn (gobj/get @pyodide-instance "runPythonAsync")]
      (-> (run-fn code)
          (.then
           (fn [^js res]
             (post-msg
              {:type :result
               :value (cond
                        (and res (.-toJs res)) (js->clj (.toJs ^js res #js {"create_pyproxies" false}))
                        (nil? res) "None"
                        :else res)})))
          (.catch
           (fn [err]
             (.log js/console err)
             (post-msg {:type :error :text (str err)})))))))

(def datasets-target (js-obj))

(defn update-datasets
  "Updates the shared datasets object.

  Args:
    new-datasets (map): The new datasets map."
  [new-datasets]
  ;; Clear existing keys
  (doseq [k (js/Object.keys datasets-target)]
    (js/Reflect.deleteProperty datasets-target k))
  ;; Populate new keys
  (doseq [[k v] new-datasets]
    (js/Reflect.set datasets-target k (clj->js v))))

(defn create-datasets-proxy []
  (js/Proxy. datasets-target
             (clj->js {:set (fn [obj prop value receiver]
                              (let [js-val (if (and value (.-toJs value))
                                             (.toJs ^js value #js {"create_pyproxies" false})
                                             value)]
                                (js/Reflect.set obj prop js-val receiver)
                                (post-msg {:type "dataset-update" :key prop :value js-val})
                                true))
                       :deleteProperty (fn [obj prop]
                                         (js/Reflect.deleteProperty obj prop)
                                         (post-msg {:type "dataset-delete" :key prop})
                                         true)})))

(defn load-runtime
  "Loads the Pyodide runtime.

  Returns:
    nil: Posts status messages."
  []
  (try
    (js/importScripts "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js")
    (-> (js/loadPyodide
         (clj->js {:indexURL "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/"
                   :stdout (fn [text] (post-msg {:type "stdout" :text (str text)}))
                   :stderr (fn [text] (post-msg {:type :error :text (str text)}))}))
        (.then (fn [p]
                 (reset! pyodide-instance p)
                 (.registerJsModule ^js p "datasets" (clj->js {:datasets (create-datasets-proxy)}))
                 (run-code "import pyodide_js\nawait pyodide_js.loadPackage('micropip')")
                 (post-msg {:type :ready})))
        (.catch (fn [e] (post-msg {:type :error :text (str "Load Error: " e)}))))
    (catch :default e
      (post-msg {:type :error :text (str "Import Error: " e)}))))

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
         "load" (load-runtime)
         "run" (run-code code)
         "update-datasets" (update-datasets datasets)
         (js/console.warn "Unknown message type:" type))))))
