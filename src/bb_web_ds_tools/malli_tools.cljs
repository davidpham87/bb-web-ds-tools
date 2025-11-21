(ns bb-web-ds-tools.malli-tools
  (:require [re-frame.core :as rf]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [cljs.reader :as reader]))

;; Event handlers
(rf/reg-event-db
  :malli/initialize
  (fn [db _]
    (merge db {:malli-schema-text ""
               :malli-generated-data ""
               :malli-inference-input ""
               :malli-inferred-schema ""})))

(rf/reg-event-db
  :malli/update-schema-text
  (fn [db [_ text]]
    (assoc db :malli-schema-text text)))

(rf/reg-event-db
  :malli/update-inference-input
  (fn [db [_ text]]
    (assoc db :malli-inference-input text)))

(rf/reg-event-fx
  :malli/generate-data
  (fn [{:keys [db]} _]
    (let [schema-text (:malli-schema-text db)
          schema (try (reader/read-string schema-text) (catch js/Error e nil))]
      (if schema
        {:db (assoc db :malli-generated-data (pr-str (mg/generate schema)))}
        {:db (assoc db :malli-generated-data "Invalid schema.")}))))

(rf/reg-event-fx
  :malli/infer-schema
  (fn [{:keys [db]} _]
    (let [input-text (:malli-inference-input db)
          input-data (try (reader/read-string input-text) (catch js/Error e nil))]
      (if (and (coll? input-data) (seq input-data))
        {:db (assoc db :malli-inferred-schema (pr-str (mp/provide input-data)))}
        {:db (assoc db :malli-inferred-schema "Invalid input data.")}))))

;; Subscriptions
(rf/reg-sub
  :malli/schema-text
  (fn [db _]
    (:malli-schema-text db)))

(rf/reg-sub
  :malli/generated-data
  (fn [db _]
    (:malli-generated-data db)))

(rf/reg-sub
  :malli/inference-input
  (fn [db _]
    (:malli-inference-input db)))

(rf/reg-sub
  :malli/inferred-schema
  (fn [db _]
    (:malli-inferred-schema db)))

;; UI components
(defn malli-tools-panel []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])
        inference-input @(rf/subscribe [:malli/inference-input])
        inferred-schema @(rf/subscribe [:malli/inferred-schema])]
    [:div
     [:h2 "Malli Tools"]
     [:div
      [:h3 "Schema Inference"]
      [:textarea {:rows 20 :cols 80
                  :value inference-input
                  :on-change #(rf/dispatch [:malli/update-inference-input (-> % .-target .-value)])}]
      [:br]
      [:button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]
      [:h4 "Inferred Schema"]
      [:pre inferred-schema]]
     [:div
      [:h3 "Data Generation"]
      [:textarea {:rows 10 :cols 80
                  :value schema-text
                  :on-change #(rf/dispatch [:malli/update-schema-text (-> % .-target .-value)])}]
      [:br]
      [:button {:on-click #(rf/dispatch [:malli/generate-data])} "Generate Data"]
      [:h4 "Generated Data"]
      [:pre generated-data]]]))
