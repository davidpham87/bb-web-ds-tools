(ns bb-web-ds-tools.runtime.webr
  (:require
   [bb-web-ds-tools.components.async-buffer :as ab]
   [bb-web-ds-tools.portal :as portal]
   [cljs.core.async :as a :refer [go <!]]
   [cljs.core.async.interop :refer [<p!]]
   [clojure.string :as str]
   [re-frame.core :as rf]))

(defonce webr-instance (atom nil))

;; Helpers to avoid type inference warnings in go blocks
(defn- to-js [^js obj]
  (.toJs obj))

(defn- get-shelter-class [^js webr]
  (.-Shelter webr))

(defn- init-obj [^js obj]
  (.init obj))

(defn- capture-r [^js shelter code options]
  (.captureR shelter code options))

(defn- purge-shelter [^js shelter]
  (.purge shelter))

(defn- get-result-props [^js res]
  [(.-output res) (.-images res) (.-result res)])

(defn- get-width [^js obj] (.-width obj))
(defn- get-height [^js obj] (.-height obj))

(defn- get-global-env [^js webr]
  (.-globalEnv webr))

(defn- bind-r [^js env name val]
  (.bind env name val))

(defn- get-r [^js env name]
  (.get env name))

(def input-buffer (a/chan 1000))
(def flush!
  (ab/create
   {:input-chan input-buffer
    :flush-interval-ms 50
    :on-flush
    (fn [xs]
      (rf/dispatch
       [::portal/submit [:portal.viewer/code (str/join "\n" xs)] :portal.viewer/hiccup]))}))

(defn- portal-submit [{:keys [text] :as value} & [viewer]]
  (let [viewer
        (or viewer
            (cond
              (= (:type value) :code) :portal.viewer/code
              (= (:type value) :result)
              (let [v (:value value)]
                (cond
                  (and (map? v) (or (:image v) (:beatmap v))) :portal.viewer/image
                  :else :portal.viewer/edn))
              (#{:stdout :stderr :error} (:type value)) :portal.viewer/hiccup
              :else nil))]
    (cond
      (and (= (:type value) :code) text)
      (rf/dispatch [::portal/submit text viewer])

      text (a/go (a/>! input-buffer text))

      :else
      (rf/dispatch [::portal/submit (:value value) viewer]))))

(defn- image-bitmap->data-url [^js image-bitmap]
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")]
    (set! (.-width canvas) (.-width image-bitmap))
    (set! (.-height canvas) (.-height image-bitmap))
    (.drawImage ctx image-bitmap 0 0)
    (.toDataURL canvas)))

(defn- process-output-msg [msg]
  (go
    (let [type (.-type msg)
          data (.-data msg)]
      (cond
        (#{"stdout" "stderr"} type)
        {:type (keyword type) :text data}

        (#{"message" "warning"} type)
        (try
          (let [js-data (<p! (to-js data))
                clj-data (js->clj js-data :keywordize-keys true)
                text (or (:message clj-data) (str clj-data))]
            {:type (keyword type) :text text})
          (catch :default _
            {:type (keyword type) :text "Error decoding message"}))

        :else nil))))

(defn load-runtime-main
  "Loads the WebR runtime in the main thread.

  Args:
    on-ready (fn): Callback invoked when WebR is ready.
    on-error (fn): Callback invoked on load failure.

  Returns:
    nil: Initiates the loading process."
  [on-ready on-error]
  (go
    (if @webr-instance
      (on-ready)
      (if (exists? js/WebR)
        (try
          (let [options {:channelType 3 ;; PostMessage
                         :baseUrl "https://webr.r-wasm.org/v0.5.7/"}
                webr (new js/WebR (clj->js options))]
            (reset! webr-instance webr)
            (<p! (init-obj webr))
            (on-ready))
          (catch :default e
            (js/console.error "WebR Init Error:" e)
            (on-error (str "WebR Init failed: " e))))
        (on-error "WebR script not loaded")))))

(defn- datasets->js
  "Converts CLJS datasets (map of UUID -> map) to a JS object
   suitable for binding in R (named list of row-array objects).

   Args:
     datasets (map): The app-db datasets map.
     keys-to-bind (set/seq): Optional. Keys (names) of datasets to bind.

   Returns:
     js/Object: JS object { name: [row-objects], ... }"
  [datasets keys-to-bind]
  (let [filter-fn (if (seq keys-to-bind)
                    (set keys-to-bind)
                    (constantly true))
        ds-map (reduce (fn [acc [_ {:keys [name data]}]]
                         (if (filter-fn name)
                           (assoc acc name data)
                           acc))
                       {}
                       datasets)]
    (clj->js ds-map)))

(defn bind-datasets
  "Binds the datasets to the R global environment.

   Args:
     datasets (map): The datasets from app-db.
     keys-to-bind (seq): Optional keys to filter."
  [datasets & [keys-to-bind]]
  (if @webr-instance
    (go
      (try
        (let [webr @webr-instance
              js-datasets (datasets->js datasets keys-to-bind)]
          ;; .bind typically returns a Promise
          (<p! (bind-r (get-global-env webr) "datasets" js-datasets)))
        (catch :default e
          (js/console.error "Failed to bind datasets to R:" e))))
    (go (js/console.warn "WebR not loaded, cannot bind datasets"))))

(defn sync-datasets
  "Retrieves the 'datasets' variable from R, converts it back to CLJS,
   and dispatches an update event if found."
  []
  (if @webr-instance
    (go
      (try
        (let [webr @webr-instance
              ;; .get returns a Promise
              r-datasets (try (<p! (get-r (get-global-env webr) "datasets"))
                              (catch :default _ nil))]
          (when r-datasets
            (let [js-val (<p! (to-js r-datasets))
                  clj-datasets (js->clj js-val :keywordize-keys true)]
              ;; We assume the R user might have returned a named list of data frames (or lists).
              ;; We need to sync this back to app-db.
              ;; Dispatching an event to patch datasets.
              ;; We wrap it in a map for the event handler.
              (rf/dispatch [:bb-web-ds-tools.views.datasets/patch-datasets-from-r clj-datasets]))))
        (catch :default e
          (js/console.error "Failed to sync datasets from R:" e))))
    (go (js/console.warn "WebR not loaded, cannot sync datasets"))))

(defn eval-in-main
  "Evaluates R code in the main thread using WebR.

  Args:
    code (string): The R code to evaluate.
    opts (map, optional): Options.
      - :webr (map): Settings for WebR (container-width, container-height, canvas-scale).

  Returns:
    nil: Submits results to Portal."
  [code & [opts]]
  (if @webr-instance
    (go
      (try
        (portal-submit {:type :code :text code})
        (let [webr @webr-instance
              shelter-class (get-shelter-class webr)]
          (if shelter-class
            (let [s (new shelter-class)
                  shelter (try
                            (if (instance? js/Promise s)
                              (<p! s)
                              (do
                                (when (exists? (.-init s))
                                  (<p! (init-obj s)))
                                s))
                            (catch :default e (throw e)))]
              (try
                (let [res (<p! (capture-r shelter code (clj->js {:autoprint true})))
                      [output images result] (get-result-props res)
                      ;; Fix for output order regression:
                      ;; Map process-output-msg to create sequence of channels,
                      ;; then sequentially await them to preserve order.
                      output-chans (map process-output-msg (array-seq output))
                      output-msgs (if (seq output-chans)
                                    (loop [[ch & more] output-chans
                                           acc []]
                                      (let [val (<! ch)
                                            new-acc (conj acc val)]
                                        (if more
                                          (recur more new-acc)
                                          new-acc)))
                                    [])
                      ;; Default settings
                      webr-settings (get opts :webr {:container-width 720
                                                     :container-height 800
                                                     :canvas-scale 0.72})
                      container-width (:container-width webr-settings)
                      container-height (:container-height webr-settings)
                      canvas-scale (:canvas-scale webr-settings)]

                  (doseq [res output-msgs]
                    ;; Fix for null safety: explicitly check for non-nil results
                    (when res
                      (portal-submit res)))

                  (doseq [img (array-seq images)]
                    (let [data-url (image-bitmap->data-url img)
                          canvas-hiccup [:div {:style {:width container-width :height container-height}}
                                         [:canvas
                                          {:width (int (* (get-width img) canvas-scale))
                                           :height (int (* (get-height img) canvas-scale))
                                           :style {:background-image (str "url(" data-url ")")
                                                   :background-size "cover"}}]]]
                      (rf/dispatch [::portal/submit canvas-hiccup :portal.viewer/hiccup])))

                  (let [js-val (to-js result)
                        val (if (instance? js/Promise js-val)
                              (<p! js-val)
                              js-val)
                        clj-val (try (js->clj val :keywordize-keys true)
                                     (catch js/Error _ (str result)))]
                    (portal-submit {:type :result :value clj-val})))
                (catch :default e
                  (portal-submit {:type :error :text (str e)}))
                (finally
                  (purge-shelter shelter))))
            (throw (js/Error. "Shelter not found on WebR instance"))))
        (catch :default e
          (portal-submit {:type :error :text (str e)}))))
    (portal-submit {:type :error :text "WebR not loaded"})))
