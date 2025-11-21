(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bb-web-ds-tools.ui.core :as ui]
            [bb-web-ds-tools.gemma :as gemma]))

(rf/reg-sub
 ::active-tab
 (fn [db]
   (:active-tab db)))

(rf/reg-event-db
 ::set-active-tab
 (fn [db [_ tab]]
   (assoc db :active-tab tab)))

(defn main-panel []
  (let [active-tab @(rf/subscribe [::active-tab])]
    [:div
     (case active-tab
       :reader [:div "Reader Tool"]
       :editor [ui/codemirror]
       :gemma [gemma/gemma-page]
       [:div "Select a tool"])]))

(defn nav-bar []
  [:nav
   [:ul
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :reader])} "Reader Tool"]]
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :editor])} "Editor"]]
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :gemma])} "Gemma"]]]])

(defn app []
  [:div
   [:h1 "BB Web DS Tools"]
   [nav-bar]
   [main-panel]])

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   {:code "initial code"}))

(rf/reg-sub
 ::code
 (fn [db]
   (:code db)))

(rf/reg-event-db
 ::code-changed
 (fn [db [_ new-code]]
   (assoc db :code new-code)))

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch [::set-active-tab :editor])
  (rdom/render [app] (.getElementById js/document "app")))
