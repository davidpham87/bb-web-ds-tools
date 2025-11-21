(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bb-web-ds-tools.malli-tools :as malli-tools]
            [bb-web-ds-tools.honeysql-tools :as honeysql-tools]
            [bb-web-ds-tools.ui.core :as ui]
            [bb-web-ds-tools.vega-lite :as vega]
            [bb-web-ds-tools.gemma :as gemma]))

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

(defn nav-item [label tab-id]
  [:button
   {:class "text-white hover:bg-red-700 px-3 py-2 rounded font-medium transition-colors duration-200 focus:outline-none"
    :on-click #(rf/dispatch [::set-active-tab tab-id])}
   label])

(defn nav-bar []
  [:nav {:class "bg-red-600 shadow-lg p-4 mb-4"}
   [:div {:class "container mx-auto flex items-center justify-between flex-wrap"}
    [:div {:class "text-white text-2xl font-bold mr-6"} "BB Web DS Tools"]
    [:div {:class "flex flex-wrap gap-2"}
     [nav-item "Reader Tool" :reader]
     [nav-item "Editor" :editor]
     [nav-item "Vega Lite" :vega-lite]
     [nav-item "Malli Tools" :malli]
     [nav-item "Honeysql Tools" :honeysql]
     [nav-item "Gemma" :gemma]]]])

(defn main-panel []
  (let [active-tab @(rf/subscribe [::active-tab])]
    [:div.container.mx-auto.p-4
     (case active-tab
       :reader [:div "Reader Tool"]
       :vega-lite [vega/view]
       :editor [ui/codemirror]
       :malli [malli-tools/malli-tools-panel]
       :honeysql [honeysql-tools/honeysql-tools-panel]
       :gemma [gemma/gemma-page]
       [:div "Select a tool"])]))

(defn app []
  [:div.min-h-screen.bg-gray-50
   [nav-bar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch-sync [::vega/initialize])
  (rf/dispatch [::set-active-tab :editor])
  (rdom/render [app] (.getElementById js/document "app")))
