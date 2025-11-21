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
          {:db (assoc db :honeysql-output (h/format input-data))}
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
    [:div
     [:h2 "Honeysql to SQL"]
     [:textarea {:rows 20 :cols 80
                 :value honeysql-input
                 :on-change #(rf/dispatch [:honeysql/update-input (-> % .-target .-value)])}]
     [:br]
     [:button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert to SQL"]
     [:h3 "SQL Output"]
     [:pre honeysql-output]]))
