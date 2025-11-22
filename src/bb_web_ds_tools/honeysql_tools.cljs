(ns bb-web-ds-tools.honeysql-tools
  (:require [re-frame.core :as rf]
            [honey.sql :as h]
            [cljs.reader :as reader]))

;; Event handlers
(rf/reg-event-db
  :honeysql/initialize
  (fn [db _]
    (merge db {:honeysql-input ""
               :honeysql-output ""})))

(rf/reg-event-db
  :honeysql/update-input
  (fn [db [_ text]]
    (assoc db :honeysql-input text)))

(rf/reg-event-fx
  :honeysql/convert-to-sql
  (fn [{:keys [db]} _]
    (let [input-text (:honeysql-input db)
          input-data (try (reader/read-string input-text) (catch js/Error e nil))]
      (if input-data
        (try
          {:db (assoc db :honeysql-output (first (h/format input-data)))} ;; h/format returns [sql params], take first for sql string if no params
          (catch js/Error e
            {:db (assoc db :honeysql-output (str "Error: " (.-message e)))}))
        {:db (assoc db :honeysql-output "Invalid Honeysql data.")}))))

;; Subscriptions
(rf/reg-sub
  :honeysql/input
  (fn [db _]
    (:honeysql-input db)))

(rf/reg-sub
  :honeysql/output
  (fn [db _]
    (:honeysql-output db)))

;; UI components
(defn honeysql-tools-panel []
  (let [honeysql-input @(rf/subscribe [:honeysql/input])
        honeysql-output @(rf/subscribe [:honeysql/output])]
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [:div {:class "text-center mb-8"}
      [:h2 {:class "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"} "HoneySQL Tools"]]

     [:div {:class "bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"}
      [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
       [:span "🍯"] "Convert to SQL"]
      [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "HoneySQL Map (EDN)"]
        [:textarea {:class "w-full h-96 bg-gray-900 text-gray-200 border border-gray-700 rounded p-4 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    :value honeysql-input
                    :placeholder "{:select [:a :b] :from [:table]}"
                    :on-change #(rf/dispatch [:honeysql/update-input (-> % .-target .-value)])}]
        [:div {:class "mt-4"}
         [:button {:class "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-200 transform hover:scale-105"
                   :on-click #(rf/dispatch [:honeysql/convert-to-sql])}
          "Convert"]]]
       [:div
        [:label {:class "block text-sm font-medium text-gray-400 mb-2"} "SQL Output"]
        [:pre {:class "w-full h-96 bg-gray-950 text-green-400 border border-gray-800 rounded p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"}
         honeysql-output]]]]]))
