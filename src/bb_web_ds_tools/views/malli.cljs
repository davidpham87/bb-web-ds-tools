(ns bb-web-ds-tools.views.malli
  (:require [re-frame.core :as rf]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [cljs.reader :as reader]
            [bb-web-ds-tools.components.common :as c]))

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
(defn panel []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])
        inference-input @(rf/subscribe [:malli/inference-input])
        inferred-schema @(rf/subscribe [:malli/inferred-schema])]
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [c/page-header "Malli Tools"]

     ;; Schema Inference Section
     [c/card
      [:div
       [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
        [:span "🧩"] "Schema Inference"]
       [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
        [:div
         [c/label "Input Data (EDN)"]
         [c/textarea {:value inference-input
                      :placeholder "{:user/name \"Alice\" :user/age 30}"
                      :on-change #(rf/dispatch [:malli/update-inference-input (-> % .-target .-value)])
                      :class "h-64"}]
         [:div {:class "mt-4"}
          [c/button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]]]
        [:div
         [c/label "Inferred Schema"]
         [c/pre-block {:content inferred-schema :class "h-64"}]]]]]

     ;; Data Generation Section
     [c/card
      [:div
       [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
        [:span "🎲"] "Data Generation"]
       [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
        [:div
         [c/label "Schema (EDN)"]
         [c/textarea {:value schema-text
                      :placeholder "[:map [:x int?] [:y int?]]"
                      :on-change #(rf/dispatch [:malli/update-schema-text (-> % .-target .-value)])
                      :class "h-64"}]
         [:div {:class "mt-4"}
          [c/button {:on-click #(rf/dispatch [:malli/generate-data])} "Generate Data"]]]
        [:div
         [c/label "Generated Data"]
         [c/pre-block {:content generated-data :class "h-64"}]]]]]]))
