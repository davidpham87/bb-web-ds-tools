(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bb-web-ds-tools.ui.core :as ui]
            [bb-web-ds-tools.vega-lite :as vega]))

(rf/reg-sub
 ::active-tab
 (fn [db]
   (:active-tab db)))

(rf/reg-event-db
 ::set-active-tab
 (fn [db [_ tab]]
   (assoc db :active-tab tab)))

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

(defn main-panel []
  (let [active-tab @(rf/subscribe [::active-tab])
        code @(rf/subscribe [::code])]
    [:div
     (case active-tab
       :reader [:div "Reader Tool"]
       :editor [:div
                [ui/codemirror-editor
                 {:value code
                  :on-change #(rf/dispatch [::code-changed %])}]
                [:button {:on-click #(js/alert (str "Saving code: " code))} "Save"]]
       :vega-lite [vega/view]
       [:div "Select a tool"])]))

(defn nav-bar []
  [:nav
   [:ul
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :reader])} "Reader Tool"]]
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :editor])} "Editor"]]
    [:li [:a {:href "#" :on-click #(rf/dispatch [::set-active-tab :vega-lite])} "Vega Lite"]]]])

(defn app []
  [:div
   [:h1 "BB Web DS Tools"]
   [nav-bar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch-sync [::vega/initialize])
  (rf/dispatch [::set-active-tab :editor])
  (rdom/render [app] (.getElementById js/document "app")))
