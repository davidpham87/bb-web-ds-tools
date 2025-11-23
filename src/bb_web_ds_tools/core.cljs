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
            [bb-web-ds-tools.theme :as t]))

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
(defmethod view :pyodide [_] [:div.p-4 [pyodide/panel]])
(defmethod view :editor [_] [:div.p-4 [editor/panel]])
(defmethod view :repl [_] [:div.p-4 [repl/panel]])
(defmethod view :r-repl [_] [:div.p-4.h-screen [r-repl/r-repl]])
(defmethod view :datasets [_] [datasets/panel])
(defmethod view :changelog [_] [changelog/changelog-page])
(defmethod view :reader [_] [:div.p-4 "Reader Tool"])
(defmethod view :default [_] [landing/landing-page])

(def nav-items
  [{:label "Home" :route :landing}
   {:label "Datasets" :route :datasets}
   {:label "Malli" :route :malli}
   {:label "HoneySQL" :route :honeysql}
   {:label "Vega-Lite" :route :vega-lite}
   {:label "Gemma" :route :gemma}
   {:label "Pyodide" :route :pyodide}
   {:label "Editor" :route :editor}
   {:label "Repl" :route :repl}
   {:label "R" :route :r-repl}
   {:label "Changelog" :route :changelog}])

(defn drawer [open? on-close items]
  [:<>
   (when @open?
     [:div {:class "fixed inset-0 bg-black/50 z-40"
            :on-click on-close}])
   [:div {:class (str "fixed top-0 left-0 h-full w-64 " t/bg-sidebar " shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto "
                      (if @open? "translate-x-0" "-translate-x-full"))}
    [:div {:class (str "p-4 border-b " t/border-main " flex justify-between items-center " t/bg-toolbar)}
     [:span {:class (str "text-xl font-bold " t/text-accent)} "Menu"]
     [:button {:class (str t/text-primary " hover:text-white font-bold") :on-click on-close} "✕"]]
    [:div {:class "py-2"}
     (for [item items]
       ^{:key (:route item)}
       [:a {:href (rfe/href (:route item))
            :class (str "block px-4 py-3 text-sm " t/text-primary " " t/bg-item-hover " transition-colors")
            :on-click on-close}
        (:label item)])]]])

(defn nav-bar []
  (let [menu-open? (r/atom false)]
    (fn []
      (let [current-route @(rf/subscribe [::current-route])
            route-name (:name (:data current-route))]
        [:nav {:class (str t/bg-page " border-b " t/border-default " sticky top-0 z-40 h-12 flex items-center px-4 shadow-md")}
         ;; Hamburger Menu
         [:button {:class (str "mr-4 " t/text-primary " hover:" t/text-accent " focus:outline-none text-2xl leading-none")
                   :on-click #(swap! menu-open? not)}
          "≡"]

         ;; Breadcrumbs / Title
         [:div {:class (str "flex items-center space-x-2 text-sm " t/text-primary)}
          [:span {:class (str "cursor-pointer hover:" t/text-accent " font-bold")
                  :on-click #(rf/dispatch [::navigate :landing])}
           "Home"]
          (when (and route-name (not= route-name :landing))
            [:<>
             [:span {:class t/text-muted} "/"]
             [:span {:class (str "font-medium " t/text-accent)}
              (clojure.string/capitalize (name route-name))]])]

         [drawer menu-open? #(reset! menu-open? false) nav-items]]))))

(defn main-panel []
  (let [current-route @(rf/subscribe [::current-route])]
    [:div {:class (str "min-h-screen " t/bg-page " " t/text-primary)}
     (if current-route
       (view current-route)
       [landing/landing-page])]))

(defn app []
  [:div {:class (str "min-h-screen " t/bg-page)}
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
