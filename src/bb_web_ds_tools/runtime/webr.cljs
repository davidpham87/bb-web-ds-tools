(ns bb-web-ds-tools.runtime.webr
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.portal :as portal]))

(defonce webr-instance (atom nil))

(defn- portal-submit [value]
  (let [viewer (cond
                 (= (:type value) :code) :portal.viewer/code
                 (= (:type value) :result)
                 (let [v (:value value)]
                   (cond
                     (and (map? v) (or (:image v) (:beatmap v))) :portal.viewer/image
                     :else :portal.viewer/edn))
                 (#{:stdout :stderr :error} (:type value)) :portal.viewer/text
                 :else nil)]
    (rf/dispatch [::portal/submit value viewer])))

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
                             (= type "stdout") (portal-submit {:type :stdout :text data})
                             (= type "stderr") (portal-submit {:type :stderr :text data})
                             (= type "closed") nil
                             :else nil)
                           (when (not= type "closed")
                             (loop-fn)))))
                (.catch #(portal-submit {:type :error :text (str "WebR Read Error:" %)}))))]
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
      (portal-submit {:type :code :text code})
      (-> (.evalR ^js @webr-instance code (clj->js {:autoprint true}))
          (.then (fn [^js res]
                   (try
                     (let [val (try (js->clj (.toJs res) :keywordize-keys true)
                                    (catch js/Error _ (str res)))]
                       (portal-submit {:type :result :value val}))
                     (.destroy res)
                     (catch js/Error _))))
          (.catch (fn [e] (portal-submit {:type :error :text (str e)}))))
      (catch js/Error e
        (portal-submit {:type :error :text (str e)})))
    (portal-submit {:type :error :text "WebR not loaded"})))
