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
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [:div {:class "text-center mb-8"}
      [:h2 {:class "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"} "Malli Tools"]]

     ;; Schema Inference Section
     [:div {:class "bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"}
      [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
       [:span "🧩"] "Schema Inference"]
      [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "Input Data (EDN)"]
        [:textarea {:class "w-full h-64 bg-gray-900 text-gray-200 border border-gray-700 rounded p-4 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    :value inference-input
                    :placeholder "{:user/name \"Alice\" :user/age 30}"
                    :on-change #(rf/dispatch [:malli/update-inference-input (-> % .-target .-value)])}]
        [:div {:class "mt-4"}
         [:button {:class "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-200 transform hover:scale-105"
                   :on-click #(rf/dispatch [:malli/infer-schema])}
          "Infer Schema"]]]
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "Inferred Schema"]
        [:pre {:class "w-full h-64 bg-gray-950 text-green-400 border border-gray-800 rounded p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"}
         inferred-schema]]]]

     ;; Data Generation Section
     [:div {:class "bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"}
      [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
       [:span "🎲"] "Data Generation"]
      [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "Schema (EDN)"]
        [:textarea {:class "w-full h-64 bg-gray-900 text-gray-200 border border-gray-700 rounded p-4 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    :value schema-text
                    :placeholder "[:map [:x int?] [:y int?]]"
                    :on-change #(rf/dispatch [:malli/update-schema-text (-> % .-target .-value)])}]
        [:div {:class "mt-4"}
         [:button {:class "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-200 transform hover:scale-105"
                   :on-click #(rf/dispatch [:malli/generate-data])}
          "Generate Data"]]]
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "Generated Data"]
        [:pre {:class "w-full h-64 bg-gray-950 text-green-400 border border-gray-800 rounded p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"}
         generated-data]]]]]))
