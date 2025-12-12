(ns bb-web-ds-tools.core
  (:require
   [bb-web-ds-tools.components.common :refer (nav-items)]
   [bb-web-ds-tools.components.layout :as layout]
   [bb-web-ds-tools.components.navigation :as nav]
   [bb-web-ds-tools.events.settings :as settings-events]
   [bb-web-ds-tools.events.theme :as theme-events] ;; Import theme events
   [bb-web-ds-tools.portal :as portal]
   [bb-web-ds-tools.theme :as t]
   [bb-web-ds-tools.views.app-db :as app-db]
   [bb-web-ds-tools.views.changelog :as changelog]
   [bb-web-ds-tools.views.code :as code]
   [bb-web-ds-tools.views.datasets :as datasets]
   [bb-web-ds-tools.views.editor :as editor]
   [bb-web-ds-tools.views.gemma :as gemma]
   [bb-web-ds-tools.views.honeysql :as honeysql]
   [bb-web-ds-tools.views.landing :as landing]
   [bb-web-ds-tools.views.malli :as malli]
   [bb-web-ds-tools.views.pyodide :as pyodide]
   ;; [bb-web-ds-tools.views.r-repl :as r-repl]
   [bb-web-ds-tools.views.repl :as repl]
   [bb-web-ds-tools.views.settings :as settings]
   [bb-web-ds-tools.views.vega-lite :as vega-lite]
   ;; [bb-web-ds-tools.views.workspaces :as workspaces]
   ;; [bb-web-ds-tools.workspaces.core :as ws]
   [bb-web-ds-tools.workspaces.persistence :as wp]
   [malli.core :as m]
   [malli.registry :as mr]
   [malli.experimental.time :as met]
   [re-frame.core :as rf]
   [reagent.dom.client :as rdomc]
   [reitit.coercion.spec :as rss]
   [reitit.frontend :as rf-router]
   [reitit.frontend.easy :as rfe]))

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

(defn get-route-label
  "Retrieves the label for a given route name from nav-items.

  Args:
    route-name (keyword): The route name.

  Returns:
    string: The label."
  [route-name]
  (if-let [item (some #(when (= (:route %) route-name) %) nav-items)]
    (:label item)
    (if route-name
      (if (= route-name :landing-page) "Home" (name route-name))
      "")))

(rf/reg-event-db
 ::navigated
 (fn [db [_ match]]
   (assoc db :current-route match)))

(def routes
  ["/"
   ["" {:name :landing-page}]
   #_["workspaces" {:name :workspaces}]
   ["malli" {:name :malli}]
   ["honeysql"
    {:name :honeysql}]
   ["vega-lite"
    {:name :vega-lite}]
   ["gemma"
    {:name :gemma}]
   ["code"
    {:name :code}]
   ["datasets"
    {:name :datasets}]
   ["changelog"
    {:name :changelog}]
   ["settings"
    {:name :settings}]
   ["app-db"
    {:name :app-db}]])

(def router
  (rf-router/router
   routes
   {:data {:coercion rss/coercion}}))

(defn on-navigate
  "Callback function triggered when the router navigates to a new match.

  Args:
    match (map): The Reitit match object containing route data.
    _ (any): Unused history object.

  Returns:
    nil: Dispatches a re-frame event."
  [match _]
  (rf/dispatch [::navigated match]))

(defn init-routes!
  "Initializes the Reitit router and starts the HTML5 history listener.

  Returns:
    nil: Starts the router side-effect."
  []
  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))

;; ;; --- DB & Logic ---

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (let [repl-id (str (random-uuid))
         mac-os? (boolean (re-find #"(Mac|iPhone|iPod|iPad)" (.-platform js/navigator)))]
     {:platform {:mac-os? mac-os?}
      :repl {}
      :portal {}
      :open-tabs []
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

;; ;; --- Views ---

(defmulti view
  "Multimethod to render the view corresponding to the current route.

  Args:
    match (map): The Reitit match object.

  Returns:
    vector: A hiccup vector representing the view component."
  (fn [match] (:name (:data match))))

(defmethod view :default [_] [:div "404! Sorry"])
(defmethod view :landing-page [_] [landing/landing-page])
(defmethod view :malli [_] [malli/panel])
(defmethod view :honeysql [_] [honeysql/panel])
(defmethod view :vega-lite [_] [vega-lite/panel])
(defmethod view :gemma [_] [gemma/panel])
(defmethod view :code [_] [code/panel])
;; (defmethod view :pyodide [_] [pyodide/panel])
;; (defmethod view :editor [_] [editor/panel])
;; (defmethod view :repl [_] [repl/panel])
;; (defmethod view :r-repl [_] [r-repl/panel])
(defmethod view :datasets [_] [datasets/panel])
(defmethod view :changelog [_] [changelog/panel])
(defmethod view :settings [_] [settings/panel])
(defmethod view :app-db [_] [app-db/panel])
;; (defmethod view :workspaces [_] [workspaces/main-panel])

(defn main-panel
  "Renders the main application panel containing the tab bar and the current view.

  Returns:
    vector: A hiccup vector representing the main panel."
  []
  (let [current-route @(rf/subscribe [::current-route])
        active-tab-id (get-in current-route [:data :name])
        label (get-route-label active-tab-id)
        landing-page? (= active-tab-id :landing-page)]
    [:div {:class (str "flex flex-col h-screen w-full overflow-hidden " t/bg-page " " t/text-primary)}
     [nav/top-bar {:active-label label}]
     [layout/main {}
      [:div {:class (str "flex-grow relative h-full "
                         (if landing-page? "overflow-y-auto" "overflow-hidden"))}
       (when current-route
         [view current-route])]]]))

(defn app
  "The root component of the application.

  Returns:
    vector: A hiccup vector representing the root application component."
  []
  [layout/page-container {}
   [main-panel]])

;; (defn app []
;;   [:div {:style {:color :white}}
;;    "Hello" " works!"])

(defonce root (rdomc/create-root (.getElementById js/document "app")))


(defn ^:export init
  "The entry point of the application. Initializes the database, router, and mounts the React root.

  Returns:
    nil: Performs side-effects to start the app."
  []
  ;; Initialize Malli registry with time schemas
  (mr/set-default-registry!
   (mr/composite-registry
    (m/default-schemas)
    (met/schemas)))

  (rf/dispatch-sync [::initialize-db])
  ;; Initialize persistence
  (rf/dispatch [::wp/init-persistence])
  (rf/dispatch [::theme-events/set-theme :zenburn]) ;; Initialize theme
  (rf/dispatch [::settings-events/initialize])
  ;; #_(rf/dispatch [::ws/init])
  ;; #_(rf/dispatch [::wp/init-persistence])
  (init-routes!)
  ;; (rf/dispatch [::navigate :landing-page nil nil]) ;; Removed to allow deep linking
  (rdomc/render root [app]))

(defn ^:dev/after-load reload!
  "Reload hook for shadow-cljs. Re-mounts the application after code changes.

  Returns:
    nil: Re-renders the app."
  []
  (js/console.log "reload")
  (rdomc/render root [app]))

(comment
  (reload!))
