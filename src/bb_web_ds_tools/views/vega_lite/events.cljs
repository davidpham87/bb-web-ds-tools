(ns bb-web-ds-tools.views.vega-lite.events
  (:require
   [bb-web-ds-tools.utils.dataset-processing :as dp]
   [bb-web-ds-tools.views.vega-lite.common :as common]
   [cljs.pprint :refer [pprint]]
   [clojure.edn :as edn]
   [malli.provider :as mp]
   [re-frame.core :as rf]))

(rf/reg-event-db
 ::initialize
 (fn [db _]
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
               :active-right-tab :plot})))))

(rf/reg-event-db
 ::set-data-input
 (fn [db [_ val]]
   (assoc-in db [:user-input :vega-lite :default :data-input] val)))

(rf/reg-event-db
 ::set-config-input
 (fn [db [_ val]]
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
