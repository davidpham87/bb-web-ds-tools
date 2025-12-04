(ns bb-web-ds-tools.runtime.webr
  (:require [portal.web :as p]))

(defonce webr-instance (atom nil))

(defn- start-read-loop
  "Starts the WebR read loop to capture stdout/stderr.

  Args:
    webr (object): The WebR instance.

  Returns:
    nil: Starts the async loop."
  [^js webr]
  (letfn [(loop-fn []
            (-> (.read webr)
                (.then (fn [^js msg]
                         (let [type (.-type msg)
                               data (.-data msg)]
                           (cond
                             (= type "stdout") (p/submit {:type :stdout :text data})
                             (= type "stderr") (p/submit {:type :stderr :text data})
                             (= type "closed") nil
                             :else nil)
                           (when (not= type "closed")
                             (loop-fn)))))
                (.catch #(p/submit {:type :error :text (str "WebR Read Error:" %)}))))]
    (loop-fn)))

(defn load-runtime-main
  "Loads the WebR runtime in the main thread.

  Args:
    on-ready (fn): Callback invoked when WebR is ready.
    on-error (fn): Callback invoked on load failure.

  Returns:
    nil: Initiates the loading process."
  [on-ready on-error]
  (if @webr-instance
    (on-ready)
    (if (exists? js/WebR)
      (let [webr (new js/WebR (clj->js {}))]
        (reset! webr-instance webr)
        (-> (.init webr)
            (.then (fn []
                     (start-read-loop webr)
                     (on-ready)))
            (.catch (fn [e]
                      (on-error (str "WebR Init failed: " e))))))
      (on-error "WebR script not loaded"))))

(defn eval-in-main
  "Evaluates R code in the main thread using WebR.

  Args:
    code (string): The R code to evaluate.

  Returns:
    nil: Submits results to Portal."
  [code]
  (if @webr-instance
    (try
      (p/submit {:type :code :text code})
      (-> (.evalR ^js @webr-instance code (clj->js {:autoprint true}))
          (.then (fn [^js res]
                   (try
                     (let [val (try (js->clj (.toJs res) :keywordize-keys true)
                                    (catch js/Error _ (str res)))]
                       (p/submit {:type :result :value val}))
                     (.destroy res)
                     (catch js/Error _))))
          (.catch (fn [e] (p/submit {:type :error :text (str e)}))))
      (catch js/Error e
        (p/submit {:type :error :text (str e)})))
    (p/submit {:type :error :text "WebR not loaded"})))
