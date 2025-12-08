(ns bb-web-ds-tools.runtime.webr
  (:require
   [bb-web-ds-tools.components.async-buffer :as ab]
   [bb-web-ds-tools.portal :as portal]
   [cljs.core.async :as a]
   [clojure.string :as str]
   [re-frame.core :as rf]))

(defonce webr-instance (atom nil))

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
  (let [type (.-type msg)
        data (.-data msg)]
    (cond
      (#{"stdout" "stderr"} type)
      (js/Promise.resolve {:type (keyword type) :text data})

      (#{"message" "warning"} type)
      (-> (.toJs ^js data)
          (.then (fn [js-data]
                   (let [clj-data (js->clj js-data :keywordize-keys true)
                         text (or (:message clj-data) (str clj-data))]
                     {:type (keyword type) :text text})))
          (.catch (fn [_] {:type (keyword type) :text "Error decoding message"})))

      :else (js/Promise.resolve nil))))

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
      (let [options {:channelType 3 ;; PostMessage
                     :baseUrl "https://webr.r-wasm.org/v0.5.7/"}
            webr (new js/WebR (clj->js options))]
        (reset! webr-instance webr)
        (-> (.init webr)
            (.then (fn []
                     (on-ready)))
            (.catch (fn [e]
                      (js/console.error "WebR Init Error:" e)
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
      (let [create-shelter (fn []
                             (let [shelter-class (.-Shelter ^js @webr-instance)]
                               (if shelter-class
                                 (let [s (new shelter-class)]
                                   (if (instance? js/Promise s) s
                                       (if (exists? (.-init s))
                                         (-> (.init s) (.then (fn [] s)))
                                         (js/Promise.resolve s))))
                                 (js/Promise.reject (js/Error. "Shelter not found on WebR instance")))))]
        (-> (create-shelter)
            (.then
             (fn [^js shelter]
               (-> (.captureR shelter code (clj->js {:autoprint true}))
                   (.then (fn [^js res]
                            (let [output (.-output res)
                                  images (.-images res)
                                  result (.-result res)]

                              (-> (js/Promise.all (into-array (map process-output-msg (array-seq output))))
                                  (.then

                                   (fn [results]
                                     (doseq [res results]
                                       (when res (portal-submit res)))

                                     (doseq [img (array-seq images)]
                                       (let [data-url (image-bitmap->data-url img)
                                             canvas-hiccup [:div {:style {:width 720 :height 800}}
                                                            [:canvas
                                                             {:width (int (* (.-width img) 0.72))
                                                              :height (int (* (.-height img) 0.72))
                                                              :style {:background-image (str "url(" data-url ")")
                                                                      :background-size "cover"}}]]]
                                         (rf/dispatch [::portal/submit canvas-hiccup :portal.viewer/hiccup])))

                                     (let [js-val (.toJs result)]
                                       (if (instance? js/Promise js-val)
                                         (-> js-val
                                             (.then (fn [v]
                                                      (let [val (try (js->clj v :keywordize-keys true)
                                                                     (catch js/Error _ (str v)))]
                                                        (portal-submit {:type :result :value val}))))
                                             (.catch (fn [e] (portal-submit {:type :error :text (str e)}))))
                                         (let [val (try (js->clj js-val :keywordize-keys true)
                                                        (catch js/Error _ (str result)))]
                                           (portal-submit {:type :result :value val}))))))

                                  (.finally (fn [] (.purge shelter)))))))
                   (.catch (fn [e]
                             (.purge shelter)
                             (portal-submit {:type :error :text (str e)}))))))
            (.catch (fn [e] (portal-submit {:type :error :text (str e)})))))
      (catch js/Error e
        (portal-submit {:type :error :text (str e)})))
    (portal-submit {:type :error :text "WebR not loaded"})))
