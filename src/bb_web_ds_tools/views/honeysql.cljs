(ns bb-web-ds-tools.views.honeysql
  (:require [re-frame.core :as rf]
            [honey.sql :as h]
            [cljs.reader :as reader]
            [bb-web-ds-tools.components.common :as c]))

;; Event handlers
(rf/reg-event-db
  :honeysql/initialize
  (fn [db _]
    (assoc-in db [:user-input :honeysql :default]
              {:input ""
               :output ""})))

(rf/reg-event-db
  :honeysql/update-input
  (fn [db [_ text]]
    (assoc-in db [:user-input :honeysql :default :input] text)))

(rf/reg-event-fx
  :honeysql/convert-to-sql
  (fn [{:keys [db]} _]
    (let [input-text (get-in db [:user-input :honeysql :default :input])
          input-data (try (reader/read-string input-text) (catch js/Error e nil))]
      (if input-data
        (try
          {:db (assoc-in db [:user-input :honeysql :default :output] (first (h/format input-data)))} ;; h/format returns [sql params], take first for sql string if no params
          (catch js/Error e
            {:db (assoc-in db [:user-input :honeysql :default :output] (str "Error: " (.-message e)))}))
        {:db (assoc-in db [:user-input :honeysql :default :output] "Invalid Honeysql data.")}))))

;; Subscriptions
(rf/reg-sub
  :honeysql/root
  (fn [db _]
    (get-in db [:user-input :honeysql :default])))

(rf/reg-sub
  :honeysql/input
  :<- [:honeysql/root]
  (fn [root _]
    (:input root)))

(rf/reg-sub
  :honeysql/output
  :<- [:honeysql/root]
  (fn [root _]
    (:output root)))

;; UI components
(defn panel []
  (let [honeysql-input @(rf/subscribe [:honeysql/input])
        honeysql-output @(rf/subscribe [:honeysql/output])]
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [c/page-header "HoneySQL Tools"]

     [c/card
      [:div
       [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
        [:span "🍯"] "Convert to SQL"]
       [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
        [:div
         [c/label "HoneySQL Map (EDN)"]
         [c/textarea {:value honeysql-input
                      :placeholder "{:select [:a :b] :from [:table]}"
                      :on-change #(rf/dispatch [:honeysql/update-input (-> % .-target .-value)])
                      :class "h-96"}]
         [:div {:class "mt-4"}
          [c/button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert"]]]
        [:div
         [c/label "SQL Output"]
         [c/pre-block {:content honeysql-output :class "h-96"}]]]]]]))
