(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bb-web-ds-tools.malli-tools :as malli-tools]
            [bb-web-ds-tools.honeysql-tools :as honeysql-tools]))

;; -- State -------------------------------------------------------------------

(rf/reg-event-db
  :initialize-db
  (fn [_ _]
    {:active-panel :malli}))

(rf/reg-event-db
  :set-active-panel
  (fn [db [_ panel]]
    (assoc db :active-panel panel)))

(rf/reg-sub
  :active-panel
  (fn [db _]
    (:active-panel db)))

;; -- Views -------------------------------------------------------------------

(defn main-panel []
  (let [active-panel @(rf/subscribe [:active-panel])]
    [:div
     [:h1 "BB Web DS Tools"]
     [:div
      [:button {:on-click #(rf/dispatch [:set-active-panel :malli])} "Malli Tools"]
      [:button {:on-click #(rf/dispatch [:set-active-panel :honeysql])} "Honeysql Tools"]]
     (case active-panel
       :malli [malli-tools/malli-tools-panel]
       :honeysql [honeysql-tools/honeysql-tools-panel]
       [:div "Select a tool"])]))

;; -- App Initialization ------------------------------------------------------

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch-sync [:malli/initialize])
  (rf/dispatch-sync [:honeysql/initialize])
  (rdom/render [main-panel] (.getElementById js/document "app")))
