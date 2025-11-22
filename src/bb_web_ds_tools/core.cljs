(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [reitit.frontend :as rf-router]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [bb-web-ds-tools.views.malli :as malli]
            [bb-web-ds-tools.views.honeysql :as honeysql]
            [bb-web-ds-tools.views.vega-lite :as vega]
            [bb-web-ds-tools.views.gemma :as gemma]
            [bb-web-ds-tools.views.landing :as landing]
            [bb-web-ds-tools.views.changelog :as changelog]
            [bb-web-ds-tools.views.editor :as editor]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.views.pyodide :as pyodide]))

;; --- Routing & Navigation ---

(rf/reg-sub
 ::current-route
 (fn [db]
   (:current-route db)))

(rf/reg-event-fx
 ::navigate
 (fn [_ [_ route-name params query]]
   {:navigate [route-name params query]}))

(rf/reg-fx
 :navigate
 (fn [[route-name params query]]
   (rfe/push-state route-name params query)))

(rf/reg-event-db
 ::navigated
 (fn [db [_ match]]
   (assoc db :current-route match)))

(def routes
  ["/"
   [""
    {:name :landing}]
   ["malli"
    {:name :malli}]
   ["honeysql"
    {:name :honeysql}]
   ["vega-lite"
    {:name :vega-lite}]
   ["gemma"
    {:name :gemma}]
   ["pyodide"
    {:name :pyodide}]
   ["editor"
    {:name :editor}]
   ["repl"
    {:name :repl}]
   ["changelog"
    {:name :changelog}]
   ["reader"
    {:name :reader}]])

(def router
  (rf-router/router
   routes
   {:data {:coercion rss/coercion}}))

(defn on-navigate [match _]
  (rf/dispatch [::navigated match]))

(defn init-routes! []
  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))

;; --- DB & Logic ---

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (let [repl-id (str (random-uuid))]
     {:user-input {:editor {:default {:code "initial code"}}
                   :repl {repl-id {:id repl-id
                                   :code ""
                                   :output []}}}})))

(rf/reg-sub
 ::user-input
 (fn [db]
   (:user-input db)))

(rf/reg-sub
 ::editor
 :<- [::user-input]
 (fn [user-input]
   (get-in user-input [:editor :default])))

(rf/reg-sub
 ::code
 :<- [::editor]
 (fn [editor]
   (:code editor)))

(rf/reg-event-db
 ::code-changed
 (fn [db [_ new-code]]
   (assoc-in db [:user-input :editor :default :code] new-code)))

;; --- Views ---

(defmulti view (fn [match] (:name (:data match))))

(defmethod view :landing [_] [landing/landing-page])
(defmethod view :malli [_] [:div.p-4 [malli/panel]])
(defmethod view :honeysql [_] [:div.p-4 [honeysql/panel]])
(defmethod view :vega-lite [_] [:div.p-4 [vega/panel]])
(defmethod view :gemma [_] [:div.p-4 [gemma/panel]])
(defmethod view :editor [_] [:div.p-4 [editor/panel]])
(defmethod view :repl [_] [:div.p-4 [repl/panel]])
(defmethod view :pyodide [_] [:div.p-4 [pyodide/panel]])
(defmethod view :changelog [_] [changelog/changelog-page])
(defmethod view :reader [_] [:div.p-4 "Reader Tool"])
(defmethod view :default [_] [landing/landing-page])

(defn nav-item [label route-name current-route-name]
  (let [active? (= route-name current-route-name)]
    [:a
     {:href (rfe/href route-name)
      :class (str "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none inline-block decoration-transparent "
                  (if active?
                    "bg-gray-800 text-blue-400 shadow-inner"
                    "text-gray-300 hover:text-white hover:bg-gray-700"))}
     label]))

(defn nav-bar []
  (let [current-route @(rf/subscribe [::current-route])
        current-route-name (:name (:data current-route))]
    [:nav {:class "bg-gray-900 border-b border-gray-800 sticky top-0 z-50"}
     [:div {:class "container mx-auto px-4"}
      [:div {:class "flex items-center justify-between h-16"}
       ;; Logo / Brand
       [:div {:class "flex-shrink-0 cursor-pointer"
              :on-click #(rf/dispatch [::navigate :landing])}
        [:span {:class "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"}
         "BB Web DS Tools"]]
       ;; Desktop Menu
       [:div {:class "hidden md:flex space-x-2"}
        [nav-item "Home" :landing current-route-name]
        [nav-item "Malli" :malli current-route-name]
        [nav-item "HoneySQL" :honeysql current-route-name]
        [nav-item "Vega-Lite" :vega-lite current-route-name]
        [nav-item "Gemma" :gemma current-route-name]
        [nav-item "Pyodide" :pyodide current-route-name]
        [nav-item "Editor" :editor current-route-name]
        [nav-item "Repl" :repl current-route-name]
        [nav-item "Changelog" :changelog current-route-name]]]]]))


(defn main-panel []
  (let [current-route @(rf/subscribe [::current-route])]
    [:div {:class "min-h-screen bg-gray-950 text-gray-200"}
     (if current-route
       (view current-route)
       [landing/landing-page])]))

(defn app []
  [:div.min-h-screen.bg-gray-950
   [nav-bar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch-sync [::vega/initialize])
  (rf/dispatch-sync [::gemma/initialize])
  (rf/dispatch-sync [::pyodide/initialize])
  (init-routes!)
  (rdom/render [app] (.getElementById js/document "app")))
