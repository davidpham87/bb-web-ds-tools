(ns bb-web-ds-tools.views.malli
  (:require [re-frame.core :as rf]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [cljs.reader :as reader]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.malli :as view]))

;; Event handlers
(rf/reg-event-db
  :malli/initialize
  (fn [db _]
    (assoc-in db [:user-input :malli :default]
              {:generated-data ""
               :inferred-schema ""})))

(rf/reg-event-fx
  :malli/generate-data
  (fn [{:keys [db]} [_ values]]
    (let [schema-text (get values "schema-text")
          schema (try (reader/read-string schema-text) (catch js/Error e nil))]
      (if schema
        {:db (assoc-in db [:user-input :malli :default :generated-data] (pr-str (mg/generate schema)))}
        {:db (assoc-in db [:user-input :malli :default :generated-data] "Invalid schema.")}))))

(rf/reg-event-fx
  :malli/infer-schema
  (fn [{:keys [db]} [_ values]]
    (let [input-text (get values "inference-input")
          input-data (try (reader/read-string input-text) (catch js/Error e nil))]
      (if (and (coll? input-data) (seq input-data))
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] (pr-str (mp/provide input-data)))}
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] "Invalid input data.")}))))

;; Subscriptions
(rf/reg-sub
  :malli/root
  (fn [db _]
    (get-in db [:user-input :malli :default])))

(rf/reg-sub
  :malli/generated-data
  :<- [:malli/root]
  (fn [root _]
    (:generated-data root)))

(rf/reg-sub
  :malli/inferred-schema
  :<- [:malli/root]
  (fn [root _]
    (:inferred-schema root)))

;; UI components
(defn panel []
  (let [generated-data @(rf/subscribe [:malli/generated-data])
        inferred-schema @(rf/subscribe [:malli/inferred-schema])]
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [c/page-header "Malli Tools"]

     ;; Schema Inference Section
     [fork/form {:path [:user-input :malli :default :inference-form]
                 :form-id "inference-form"
                 :initial-values {"inference-input" ""}
                 :on-submit #(rf/dispatch [:malli/infer-schema (:values %)])}
      (fn [{:keys [values handle-change handle-submit]}]
        [view/inference-panel {:values values
                               :handle-change handle-change
                               :on-infer handle-submit
                               :inferred-schema inferred-schema}])]

     ;; Data Generation Section
     [fork/form {:path [:user-input :malli :default :generation-form]
                 :form-id "generation-form"
                 :initial-values {"schema-text" ""}
                 :on-submit #(rf/dispatch [:malli/generate-data (:values %)])}
      (fn [{:keys [values handle-change handle-submit]}]
        [view/generation-panel {:values values
                                :handle-change handle-change
                                :on-generate handle-submit
                                :generated-data generated-data}])]
     ]))
