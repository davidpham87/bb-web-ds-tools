(ns bb-web-ds-tools.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [reitit.frontend :as rf-router]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [shadow.lazy :as lazy]
            [bb-web-ds-tools.components.layout :as layout]
            [bb-web-ds-tools.portal :as portal]
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
   ["" {:name :landing-page}]
   ["malli" {:name :malli}]
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
    {:name :settings}]
   ["app-db"
    {:name :app-db}]])

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
   (let [repl-id (str (random-uuid))
         mac-os? (boolean (re-find #"(Mac|iPhone|iPod|iPad)" (.-platform js/navigator)))]
     {:platform {:mac-os? mac-os?}
      :sidebar {:expanded? false}
      :user-input {:editor {:default {:code "initial code"}}
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

(rf/reg-sub
 ::sidebar-expanded?
 (fn [db]
   (get-in db [:sidebar :expanded?])))

(rf/reg-event-db
 ::toggle-sidebar
 (fn [db _]
   (update-in db [:sidebar :expanded?] not)))

;; --- Views ---

(defmulti view (fn [match] (:name (:data match))))

(lazy/define-lazy-loadable landing-page-lazy [bb-web-ds-tools.views.landing/landing-page])
(lazy/define-lazy-loadable malli-panel-lazy [bb-web-ds-tools.views.malli/panel])
(lazy/define-lazy-loadable honeysql-panel-lazy [bb-web-ds-tools.views.honeysql/panel])
(lazy/define-lazy-loadable vega-panel-lazy [bb-web-ds-tools.views.vega-lite/panel])
(lazy/define-lazy-loadable gemma-panel-lazy [bb-web-ds-tools.views.gemma/panel])
(lazy/define-lazy-loadable pyodide-panel-lazy [bb-web-ds-tools.views.pyodide/panel])
(lazy/define-lazy-loadable editor-panel-lazy [bb-web-ds-tools.views.editor/panel])
(lazy/define-lazy-loadable repl-panel-lazy [bb-web-ds-tools.views.repl/panel])
(lazy/define-lazy-loadable r-repl-lazy [bb-web-ds-tools.views.r-repl/r-repl])
(lazy/define-lazy-loadable datasets-panel-lazy [bb-web-ds-tools.views.datasets/panel])
(lazy/define-lazy-loadable changelog-page-lazy [bb-web-ds-tools.views.changelog/changelog-page])
(lazy/define-lazy-loadable settings-panel-lazy [bb-web-ds-tools.views.settings/panel])
(lazy/define-lazy-loadable app-db-panel-lazy [bb-web-ds-tools.views.app-db/panel])

(defmethod view :landing-page [_] [landing-page-lazy])
(defmethod view :malli [_] [malli-panel-lazy])
(defmethod view :honeysql [_] [honeysql-panel-lazy])
(defmethod view :vega-lite [_] [vega-panel-lazy])
(defmethod view :gemma [_] [gemma-panel-lazy])
(defmethod view :pyodide [_] [pyodide-panel-lazy])
(defmethod view :editor [_] [editor-panel-lazy])
(defmethod view :repl [_] [repl-panel-lazy])
(defmethod view :r-repl [_] [:div.h-screen [r-repl-lazy]])
(defmethod view :datasets [_] [datasets-panel-lazy])
(defmethod view :changelog [_] [changelog-page-lazy])
(defmethod view :reader [_] [:div "Reader Tool"])
(defmethod view :settings [_] [settings-panel-lazy])
(defmethod view :app-db [_] [app-db-panel-lazy])

(def nav-items
  [{:label "App DB" :route :app-db :icon "🗄️"}
   {:label "Datasets" :route :datasets :icon "📊"}
   {:label "Malli" :route :malli :icon "✅"}
   {:label "HoneySQL" :route :honeysql :icon "🍯"}
   {:label "Vega-Lite" :route :vega-lite :icon "📈"}
   {:label "Gemma" :route :gemma :icon "🤖"}
   {:label "Pyodide" :route :pyodide :icon "🐍"}
   {:label "Editor" :route :editor :icon "📝"}
   {:label "Repl" :route :repl :icon "💻"}
   {:label "R" :route :r-repl :icon "🇷"}
   {:label "Settings" :route :settings :icon "⚙️"}
   {:label "Changelog" :route :changelog :icon "📜"}])

(defn sidebar []
  (let [expanded? @(rf/subscribe [::sidebar-expanded?])
        current-route @(rf/subscribe [::current-route])
        current-name (:name (:data current-route))]
    [layout/sidebar {:class (if expanded? "w-64" "w-16")}
     [:div {:class (str "p-4 flex items-center " (if expanded? "justify-between" "justify-center"))}
      (when expanded?
        [:span {:class (str "font-bold text-lg " t/text-accent)} "DS Tools"])
      [:button {:on-click #(rf/dispatch [::toggle-sidebar])
                :class (str t/text-primary " hover:text-white focus:outline-none")}
       (if expanded? "◀" "▶")]]
     [:nav {:class "flex-1 overflow-y-auto py-4"}
      (for [item nav-items]
        ^{:key (:route item)}
        [:a {:href (rfe/href (:route item))
             :class (str "flex items-center px-4 py-3 "
                         (if (= current-name (:route item))
                           (str t/bg-item-hover " " t/text-accent)
                           (str t/text-primary " hover:" t/text-accent))
                         " transition-colors duration-200")
             :title (:label item)}
         [:span {:class "text-xl"} (:icon item)]
         (when expanded?
           [:span {:class "ml-3 text-sm font-medium whitespace-nowrap"} (:label item)])])]]))

(defn top-tab-bar []
  (let [current-route @(rf/subscribe [::current-route])
        current-name (:name (:data current-route))]
    [:div {:class (str "h-10 " t/bg-toolbar " border-b " t/border-main " flex items-end px-2 space-x-1")}
     [:div {:class (str "px-4 py-2 text-xs font-medium rounded-t-lg "
                        t/bg-page " " t/text-accent " border-t border-l border-r " t/border-main)}
      (if current-name
        (clojure.string/capitalize (name current-name))
        "Home")]]))

(defn main-panel []
  (let [current-route @(rf/subscribe [::current-route])]
    [layout/main {}
     [top-tab-bar]
     [:div {:class "flex-grow overflow-auto relative"}
      (when current-route
        (view current-route))]]))

(defn app []
  [layout/page-container {}
   [sidebar]
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (init-routes!)
  (rdom/render [app] (.getElementById js/document "app")))
