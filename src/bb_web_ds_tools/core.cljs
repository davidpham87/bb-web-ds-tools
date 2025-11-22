(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bb-web-ds-tools.malli-tools :as malli-tools]
            [bb-web-ds-tools.honeysql-tools :as honeysql-tools]
            [bb-web-ds-tools.ui.core :as ui]
            [bb-web-ds-tools.vega-lite :as vega]
            [bb-web-ds-tools.gemma :as gemma]
            [bb-web-ds-tools.landing :as landing]
            [bb-web-ds-tools.changelog :as changelog]))

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
   {:code "initial code"
    :active-tab :landing})) ;; Set default here too

(rf/reg-sub
 ::code
 (fn [db]
   (:code db)))

(rf/reg-event-db
 ::code-changed
 (fn [db [_ new-code]]
   (assoc db :code new-code)))

(defn nav-item [label tab-id current-tab]
  (let [active? (= tab-id current-tab)]
    [:button
     {:class (str "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none "
                  (if active?
                    "bg-gray-800 text-blue-400 shadow-inner"
                    "text-gray-300 hover:text-white hover:bg-gray-700"))
      :on-click #(rf/dispatch [::set-active-tab tab-id])}
     label]))

(defn nav-bar []
  (let [active-tab @(rf/subscribe [::active-tab])]
    [:nav {:class "bg-gray-900 border-b border-gray-800 sticky top-0 z-50"}
     [:div {:class "container mx-auto px-4"}
      [:div {:class "flex items-center justify-between h-16"}
       ;; Logo / Brand
       [:div {:class "flex-shrink-0 cursor-pointer"
              :on-click #(rf/dispatch [::set-active-tab :landing])}
        [:span {:class "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"}
         "BB Web DS Tools"]]

       ;; Desktop Menu
       [:div {:class "hidden md:flex space-x-2"}
        [nav-item "Home" :landing active-tab]
        [nav-item "Malli" :malli active-tab]
        [nav-item "HoneySQL" :honeysql active-tab]
        [nav-item "Vega-Lite" :vega-lite active-tab]
        [nav-item "Gemma" :gemma active-tab]
        [nav-item "Editor" :editor active-tab]
        [nav-item "Changelog" :changelog active-tab]]

       ;; Mobile Menu Button (simplified for now, just visible on all screens wraps)
       ]]]))

(defn main-panel []
  (let [active-tab @(rf/subscribe [::active-tab])]
    [:div {:class "min-h-screen bg-gray-950 text-gray-200"}
     (case active-tab
       :landing [landing/landing-page]
       :changelog [changelog/changelog-page]
       :reader [:div.p-4 "Reader Tool"] ;; Kept for compatibility if needed, but not in nav
       :vega-lite [:div.p-4 [vega/view]]
       :editor [:div.p-4 [ui/codemirror]]
       :malli [:div.p-4 [malli-tools/malli-tools-panel]]
       :honeysql [:div.p-4 [honeysql-tools/honeysql-tools-panel]]
       :gemma [:div.p-4 [gemma/gemma-page]]
       [landing/landing-page])]))

(defn app []
  [:div.min-h-screen.bg-gray-950
   [nav-bar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch-sync [::vega/initialize])
  (rf/dispatch-sync [::gemma/initialize])
  (rf/dispatch [::set-active-tab :landing])
  (rdom/render [app] (.getElementById js/document "app")))
