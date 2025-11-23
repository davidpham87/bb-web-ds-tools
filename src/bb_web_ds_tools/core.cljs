(ns bb-web-ds-tools.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
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
            [bb-web-ds-tools.views.r-repl :as r-repl]
            [bb-web-ds-tools.views.pyodide :as pyodide]
            [bb-web-ds-tools.views.datasets :as datasets]
            [bb-web-ds-tools.views.settings :as settings]
            [day8.re-frame-10x.preload]))

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
   ["r-repl"
    {:name :r-repl}]
   ["datasets"
    {:name :datasets}]
   ["changelog"
    {:name :changelog}]
   ["reader"
    {:name :reader}]
   ["settings"
    {:name :settings}]])

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
(defmethod view :pyodide [_] [:div.p-4 [pyodide/panel]])
(defmethod view :editor [_] [:div.p-4 [editor/panel]])
(defmethod view :repl [_] [:div.p-4 [repl/panel]])
(defmethod view :r-repl [_] [:div.p-4.h-screen [r-repl/r-repl]])
(defmethod view :datasets [_] [datasets/panel])
(defmethod view :changelog [_] [changelog/changelog-page])
(defmethod view :reader [_] [:div.p-4 "Reader Tool"])
(defmethod view :settings [_] [settings/panel])
(defmethod view :default [_] [landing/landing-page])

(defn drawer [open? on-close]
  [:<>
   (when @open?
     [:div {:class "fixed inset-0 bg-black/50 z-40"
            :on-click on-close}])
   [:div {:class (str "fixed top-0 left-0 h-full w-64 bg-[#2f2f2f] shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto "
                      (if @open? "translate-x-0" "-translate-x-full"))}
    [:div {:class "p-4 border-b border-[#3f3f3f] flex justify-between items-center bg-[#282828]"}
     [:span {:class "text-xl font-bold text-[#f0dfaf]"} "Menu"]
     [:button {:class "text-[#dcdccc] hover:text-white font-bold" :on-click on-close} "✕"]]
    [:div {:class "py-2"}
     (for [item [{:label "Home" :route :landing}
                 {:label "Datasets" :route :datasets}
                 {:label "Malli" :route :malli}
                 {:label "HoneySQL" :route :honeysql}
                 {:label "Vega-Lite" :route :vega-lite}
                 {:label "Gemma" :route :gemma}
                 {:label "Pyodide" :route :pyodide}
                 {:label "Editor" :route :editor}
                 {:label "Repl" :route :repl}
                 {:label "R" :route :r-repl}
                 {:label "Changelog" :route :changelog}
                 {:label "Settings" :route :settings}]]
       ^{:key (:route item)}
       [:a {:href (rfe/href (:route item))
            :class "block px-4 py-3 text-sm text-[#dcdccc] hover:bg-[#3f3f3f] hover:text-[#f0dfaf] transition-colors"
            :on-click on-close}
        (:label item)])]]])

(defn nav-bar []
  (let [menu-open? (r/atom false)]
    (fn []
      (let [current-route @(rf/subscribe [::current-route])
            route-name (:name (:data current-route))]
        [:nav {:class "bg-[#3f3f3f] border-b border-[#5f5f5f] sticky top-0 z-40 h-12 flex items-center px-4 shadow-md"}
         ;; Hamburger Menu
         [:button {:class "mr-4 text-[#dcdccc] hover:text-[#f0dfaf] focus:outline-none text-2xl leading-none"
                   :on-click #(swap! menu-open? not)}
          "≡"]

         ;; Breadcrumbs / Title
         [:div {:class "flex items-center space-x-2 text-sm text-[#dcdccc]"}
          [:span {:class "cursor-pointer hover:text-[#f0dfaf] font-bold"
                  :on-click #(rf/dispatch [::navigate :landing])}
           "Home"]
          (when (and route-name (not= route-name :landing))
            [:<>
             [:span {:class "text-[#7f9f7f]"} "/"]
             [:span {:class "font-medium text-[#f0dfaf]"}
              (clojure.string/capitalize (name route-name))]])]

         [drawer menu-open? #(reset! menu-open? false)]]))))

(defn main-panel []
  (let [current-route @(rf/subscribe [::current-route])]
    [:div {:class "min-h-screen bg-[#3f3f3f] text-[#dcdccc]"}
     (if current-route
       (view current-route)
       [landing/landing-page])]))

(defn app []
  [:div {:class "min-h-screen bg-[#3f3f3f]"}
   [nav-bar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (rf/dispatch-sync [::vega/initialize])
  (rf/dispatch-sync [::gemma/initialize])
  (rf/dispatch-sync [::pyodide/initialize])
  (rf/dispatch-sync [::datasets/initialize])
  (init-routes!)
  (rdom/render [app] (.getElementById js/document "app")))
