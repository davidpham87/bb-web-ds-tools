(ns bb-web-ds-tools.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [reitit.frontend :as rf-router]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [bb-web-ds-tools.components.layout :as layout]
            [bb-web-ds-tools.portal :as portal]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.views.landing :as landing]
            [bb-web-ds-tools.views.malli :as malli]
            [bb-web-ds-tools.views.honeysql :as honeysql]
            [bb-web-ds-tools.views.vega-lite :as vega-lite]
            [bb-web-ds-tools.views.gemma :as gemma]
            [bb-web-ds-tools.views.pyodide :as pyodide]
            [bb-web-ds-tools.views.editor :as editor]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.views.r-repl :as r-repl]
            [bb-web-ds-tools.views.datasets :as datasets]
            [bb-web-ds-tools.views.changelog :as changelog]
            [bb-web-ds-tools.views.settings :as settings]
            [bb-web-ds-tools.views.app-db :as app-db]))

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


;; --- Views ---

(defmulti view (fn [match] (:name (:data match))))
(defmethod view :landing-page [_] [landing/landing-page])
(defmethod view :malli [_] [malli/panel])
(defmethod view :honeysql [_] [honeysql/panel])
(defmethod view :vega-lite [_] [vega-lite/panel])
(defmethod view :gemma [_] [gemma/panel])
(defmethod view :pyodide [_] [pyodide/panel])
(defmethod view :editor [_] [editor/panel])
(defmethod view :repl [_] [repl/panel])
(defmethod view :r-repl [_] [r-repl/panel])
(defmethod view :datasets [_] [datasets/panel])
(defmethod view :changelog [_] [changelog/changelog-page])
(defmethod view :reader [_] [:div "Reader Tool"])
(defmethod view :settings [_] [settings/panel])
(defmethod view :app-db [_] [app-db/panel])

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

(defn top-tab-bar []
  (let [current-route @(rf/subscribe [::current-route])
        current-name (:name (:data current-route))
        tab-style (fn [route-name]
                    (str "px-4 py-2 text-xs font-medium rounded-t-lg "
                         (if (= current-name route-name)
                           (str t/bg-page " " t/text-accent " border-t border-l border-r " t/border-main)
                           (str t/text-primary " hover:" t/text-accent " border-transparent border-t border-l border-r"))))]
    [:nav {:class (str "h-10 " t/bg-toolbar " border-b " t/border-main " flex items-end")}
     [:a {:href (rfe/href :landing-page)
          :class (str (tab-style :landing-page) " ml-2")}
      "Home"]
     (for [item nav-items]
       ^{:key (:route item)}
       [:a {:href (rfe/href (:route item))
            :class (tab-style (:route item))}
        (:label item)])]))

(defn main-panel []
  (let [current-route @(rf/subscribe [::current-route])]
    [layout/main {}
     [top-tab-bar]
     [:div {:class "flex-grow overflow-auto relative"}
      (when current-route
        (view current-route))]]))

(defn app []
  [layout/page-container {}
   [main-panel]])

(defn ^:export init []
  (rf/dispatch-sync [::initialize-db])
  (init-routes!)
  (rf/dispatch [::navigate :landing-page nil nil])
  (rf/dispatch [::portal/open])
  (rdom/render [app] (.getElementById js/document "app")))
