(ns bb-web-ds-tools.views.vega-lite.events
  (:require
   [bb-web-ds-tools.utils.dataset-processing :as dp]
   [bb-web-ds-tools.views.vega-lite.common :as common]
   [cljs.pprint :refer [pprint]]
   [clojure.edn :as edn]
   [malli.provider :as mp]
   [re-frame.core :as rf]
   [cljs.core.async :refer [go <! timeout chan put! alts! close!]]
   [bb-web-ds-tools.events.settings :as settings-events]))

(defonce config-chan (chan))
(defonce loop-running? (atom false))

(defn start-debounce-loop []
  (when (compare-and-set! loop-running? false true)
    (go
      (loop []
        (when-let [val (<! config-chan)]
          (loop [v val]
            (let [debounce-ms @(rf/subscribe [::settings-events/vega-lite-debounce-ms])
                  timeout-ch (timeout debounce-ms)
                  [new-val p] (alts! [config-chan timeout-ch])]
              (if (= p timeout-ch)
                (do
                  (rf/dispatch [::commit-config])
                  (recur (<! config-chan))) ;; Correctly recur to outer loop waiting for fresh input
                (if new-val
                  (recur new-val)
                  (recur v)))))))))) ;; Channel closed or nil? shouldn't happen with defonce

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (start-debounce-loop)
   (let [user-input-exists? (get-in db [:user-input :vega-lite])
         component-state-exists? (common/state-key db)]
     (cond-> db
       (not user-input-exists?)
       (assoc-in [:user-input :vega-lite]
                 {:saved-configs {}
                  :default {:data-input ""
                            :config-input common/default-config-json
                            :config-mode :json
                            :active-config-name nil}})

       (not component-state-exists?)
       (assoc common/state-key
              {:format :csv
               :structure :columnar
               :parsed-data nil
               :inferred-schema nil
               :active-left-tab :data
               :active-right-tab :plot})

       (not (get-in db [:runtime :vega-lite :logs]))
       (assoc-in [:runtime :vega-lite :logs] [])

       (not (get-in db [:runtime :vega-lite :error]))
       (assoc-in [:runtime :vega-lite :error] nil)))))

(rf/reg-event-db
 ::set-data-input
 (fn [db [_ val]]
   (assoc-in db [:user-input :vega-lite :default :data-input] val)))

(rf/reg-event-db
 ::set-config-input
 (fn [db [_ val]]
   (put! config-chan val)
   (assoc-in db [:user-input :vega-lite :default :config-input] val)))

(rf/reg-event-db
 ::set-config-mode
 (fn [db [_ new-mode]]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         current-mode (:config-mode user-input)
         current-input (:config-input user-input)
         new-input (cond
                     (and (= current-mode :json) (= new-mode :edn))
                     (try
                       (let [obj (js/JSON.parse current-input)
                             edn-data (js->clj obj :keywordize-keys true)]
                         (with-out-str (pprint edn-data)))
                       (catch js/Error _ current-input))

                     (and (= current-mode :edn) (= new-mode :json))
                     (try
                       (let [edn-data (edn/read-string current-input)
                             obj (clj->js edn-data)]
                         (js/JSON.stringify obj nil 2))
                       (catch js/Error _ current-input))

                     :else current-input)]
     (-> db
         (assoc-in [:user-input :vega-lite :default :config-mode] new-mode)
         (assoc-in [:user-input :vega-lite :default :config-input] new-input)))))

(rf/reg-event-db
 ::set-active-config-name
 (fn [db [_ name]]
   (assoc-in db [:user-input :vega-lite :default :active-config-name] name)))

(rf/reg-event-db
 ::set-format
 (fn [db [_ fmt]]
   (assoc-in db [common/state-key :format] fmt)))

(rf/reg-event-db
 ::set-structure
 (fn [db [_ s]]
   (assoc-in db [common/state-key :structure] s)))

(rf/reg-event-db
 ::set-active-left-tab
 (fn [db [_ tab]]
   (assoc-in db [common/state-key :active-left-tab] tab)))

(rf/reg-event-db
 ::set-active-right-tab
 (fn [db [_ tab]]
   (assoc-in db [common/state-key :active-right-tab] tab)))

(rf/reg-event-db
 ::save-config
 (fn [db [_ name]]
   (let [root (get-in db [:user-input :vega-lite :default])
         config (select-keys root [:config-input :config-mode])]
     (-> db
         (assoc-in [:user-input :vega-lite :saved-configs name] config)
         (assoc-in [:user-input :vega-lite :default :active-config-name] name)))))

(rf/reg-event-db
 ::load-config
 (fn [db [_ name]]
   (let [config (get-in db [:user-input :vega-lite :saved-configs name])]
     (-> db
         (update-in [:user-input :vega-lite :default] merge config)
         (assoc-in [:user-input :vega-lite :default :active-config-name] name)))))

(rf/reg-event-db
 ::delete-config
 (fn [db [_ name]]
   (let [active-name (get-in db [:user-input :vega-lite :default :active-config-name])]
     (cond-> db
       true (update-in [:user-input :vega-lite :saved-configs] dissoc name)
       (= active-name name) (assoc-in [:user-input :vega-lite :default :active-config-name] nil)))))

(rf/reg-event-fx
 ::import-dataset
 (fn [{:keys [db]} [_ dataset-id]]
   (let [datasets (get-in db [:user-input :datasets :items])
         dataset (get datasets dataset-id)
         data (:data dataset)
         clean-data (mapv #(dissoc % :_uuid) data)
         data-str (with-out-str (pprint clean-data))]
     {:db (-> db
              (assoc-in [:user-input :vega-lite :default :data-input] data-str)
              (assoc-in [common/state-key :format] :edn)
              (assoc-in [common/state-key :structure] :row-maps)
              (assoc-in [common/state-key :active-left-tab] :config)
              (assoc-in [common/state-key :active-right-tab] :plot))
      :dispatch [::parse-data]})))

(rf/reg-event-db
 ::parse-data
 (fn [db _]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         component-state (common/state-key db)
         text (:data-input user-input)
         fmt (:format component-state)
         structure (:structure component-state)
         parsed (dp/parse-dataset fmt structure text)
         schema (try (mp/provide parsed) (catch js/Error e (str "Error inferring schema: " (.-message e))))]
     (update db common/state-key assoc :parsed-data parsed :inferred-schema schema))))

(rf/reg-event-fx
 ::commit-config
 (fn [{:keys [db]} _]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         input (:config-input user-input)
         mode (:config-mode user-input)]
     (try
       (let [parsed (case mode
                      :json (js->clj (js/JSON.parse input) :keywordize-keys true)
                      :edn (edn/read-string input))]
         ;; Basic Vega-Lite validation
         (cond
           (not (map? parsed))
           {:dispatch [::log-error "Config must be a map/object."]}

           ;; Check for at least one major key
           (not (some #(contains? parsed %) [:mark :layer :concat :hconcat :vconcat :repeat :facet :spec :$schema]))
           {:dispatch [::log-error "Config missing required fields (mark, layer, etc)."]}

           :else
           {:dispatch [::validation-success]}))
       (catch js/Error e
         {:dispatch [::log-error (str "Invalid Config: " (.-message e))]})))))

(rf/reg-event-db
 ::log-error
 (fn [db [_ msg]]
   (let [logs (get-in db [:runtime :vega-lite :logs] [])
         new-logs (vec (take 10 (cons {:type :error :text msg :timestamp (js/Date.)} logs)))]
     (-> db
         (assoc-in [:runtime :vega-lite :error] msg)
         (assoc-in [:runtime :vega-lite :logs] new-logs)))))

(rf/reg-event-db
 ::validation-success
 (fn [db _]
   (assoc-in db [:runtime :vega-lite :error] nil)))

(rf/reg-event-db
 ::format-config
 (fn [db _]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         input (:config-input user-input)
         mode (:config-mode user-input)
         formatted (try
                     (case mode
                       :json (js/JSON.stringify (js/JSON.parse input) nil 2)
                       :edn (with-out-str (pprint (edn/read-string input))))
                     (catch js/Error _ input))]
     (assoc-in db [:user-input :vega-lite :default :config-input] formatted))))
