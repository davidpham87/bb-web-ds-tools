(ns bb-web-ds-tools.views.app-db
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.edn :as edn]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.portal :as portal :refer [portal-frame portal-panel]]
            [bb-web-ds-tools.theme :as t]))

;; Subscriptions

(rf/reg-sub
 ::whole-db
 (fn [db _] db))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get user-input :app-db)))

(rf/reg-sub
 ::watched-paths
 :<- [::user-input-root]
 (fn [root _]
   (get root :watched-paths [])))

(rf/reg-sub
 ::active-path
 (fn [db _]
   (get-in db [:user-input :app-db :active-path])))

(rf/reg-sub
 ::path-value
 (fn [db [_ path-str]]
   (try
     (let [path (edn/read-string path-str)]
       (get-in db path :bb-web-ds-tools.views.app-db/not-found))
     (catch :default _ :bb-web-ds-tools.views.app-db/error))))

;; Events

(rf/reg-event-db
 ::set-active-path
 (fn [db [_ path]]
   (assoc-in db [:user-input :app-db :active-path] path)))

(rf/reg-event-db
 ::add-watch-path
 (fn [db [_ path-str]]
   (if (some #{path-str} (get-in db [:user-input :app-db :watched-paths] []))
     (assoc-in db [:user-input :app-db :active-path] path-str)
     (-> db
         (update-in [:user-input :app-db :watched-paths] (fnil conj []) path-str)
         (assoc-in [:user-input :app-db :active-path] path-str)))))

(rf/reg-event-db
 ::remove-watch-path
 (fn [db [_ path-str]]
   (let [watched-paths (get-in db [:user-input :app-db :watched-paths] [])
         new-paths (vec (remove #(= % path-str) watched-paths))
         active-path (get-in db [:user-input :app-db :active-path])]
     (-> db
         (assoc-in [:user-input :app-db :watched-paths] new-paths)
         (cond-> (= active-path path-str)
           (assoc-in [:user-input :app-db :active-path] (or (first new-paths) :new)))))))

(rf/reg-event-db
 ::update-watch-path
 (fn [db [_ old-path new-path]]
   (let [paths (get-in db [:user-input :app-db :watched-paths] [])
         idx (.indexOf paths old-path)
         active-path (get-in db [:user-input :app-db :active-path])]
     (if (neg? idx)
       db
       (-> db
           (assoc-in [:user-input :app-db :watched-paths] (assoc paths idx new-path))
           (cond-> (= active-path old-path)
             (assoc-in [:user-input :app-db :active-path] new-path)))))))

(rf/reg-event-fx
 ::open-in-portal
 (fn [{:keys [db]} _]
   {:dispatch [::portal/submit db]}))

;; Components

(defn path-list-item
  "Renders a single item in the watched paths list.

  Args:
    path (any): The path vector or string.
    active? (boolean): Whether this path is currently active.

  Returns:
    vector: A hiccup vector."
  [path active?]
  (let [editing? (r/atom false)
        temp-path (r/atom path)]
    (fn [path active?]
      (if @editing?
        [:div {:class (str "p-2 rounded " t/bg-input " border " t/border-focus " flex items-center space-x-2")}
         [c/input {:class "flex-grow h-6 text-sm py-0 font-mono"
                   :value @temp-path
                   :auto-focus true
                   :on-change #(reset! temp-path (.. % -target -value))
                   :on-key-down #(case (.-key %)
                                   "Enter" (do (rf/dispatch [::update-watch-path path @temp-path])
                                               (reset! editing? false))
                                   "Escape" (do (reset! temp-path path)
                                                (reset! editing? false))
                                   nil)}]
         [c/button {:size :sm
                    :on-click #(do (rf/dispatch [::update-watch-path path @temp-path])
                                   (reset! editing? false))} "Save"]]
        [:div {:class (str "group flex items-center justify-between p-3 rounded cursor-pointer transition-colors text-sm font-medium "
                           (if active?
                             (str t/bg-card " " t/text-accent " shadow-sm")
                             (str t/text-primary " " t/bg-item-hover)))
               :on-click #(rf/dispatch [::set-active-path path])}
         [:span {:class "truncate flex-grow font-mono"} path]
         [:div {:class (str "flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity "
                            (when active? "opacity-100"))}
          ;; Rename button
          [:button {:class (str "p-1 rounded hover:" t/bg-button-hover " text-xs")
                    :title "Edit"
                    :on-click (fn [e]
                                (.stopPropagation e)
                                (reset! temp-path path)
                                (reset! editing? true))}
           "✎"]
          ;; Delete button
          [:button {:class (str "p-1 rounded hover:" t/bg-button-danger-hover " hover:text-white text-xs")
                    :title "Delete"
                    :on-click (fn [e]
                                (.stopPropagation e)
                                (when (js/confirm (str "Remove watch '" path "'?"))
                                  (rf/dispatch [::remove-watch-path path])))}
           [c/dustbin-icon]]]]))))

(defn path-list
  "Renders the sidebar list of watched paths.

  Returns:
    vector: A hiccup vector."
  []
  (let [watched-paths @(rf/subscribe [::watched-paths])
        active-path @(rf/subscribe [::active-path])]
    [:div {:class (str "h-full " t/bg-sidebar " flex flex-col")}
     [:div {:class (str "p-4 border-b " t/border-main)}
      [c/section-header "App DB"
       [c/help-button
        {:href (nav/get-wiki-url :app-db)
         :title "Help: App DB"
         :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]
      [c/button {:size :sm
                 :class (str "w-full " t/bg-button " " t/bg-button-hover " justify-center")
                 :on-click #(rf/dispatch [::set-active-path :new])}
       "+ New Watch"]]
     [:div {:class "flex-grow overflow-y-auto p-2 space-y-1"}
      (if (seq watched-paths)
        (for [path watched-paths]
          ^{:key path} [path-list-item path (= path active-path)])
        [:div {:class (str "text-sm " t/text-muted " italic p-2")} "No watched paths"])]]))

(defn add-path-view
  "Renders the form to add a new path to watch.

  Returns:
    vector: A hiccup vector."
  []
  (r/with-let [new-path (r/atom "")]
    [c/card {:class "p-8 flex flex-col items-center justify-center space-y-4 bg-transparent shadow-none h-full"}
     [:h3 {:class "text-xl font-bold"} "Watch New Path"]
     [:div {:class "w-full max-w-lg"}
      [c/input {:value @new-path
                :on-change #(reset! new-path (.. % -target -value))
                :placeholder "Enter path e.g. [:user-input :datasets]"
                :class "font-mono mb-4"}]
      [c/button {:class "w-full"
                 :on-click #(do (rf/dispatch [::add-watch-path @new-path])
                                (reset! new-path ""))}
       "Add Watch"]]]))

(defn panel
  "Renders the App DB inspector panel.

  Returns:
    vector: A hiccup vector."
  []
  (let [active-path @(rf/subscribe [::active-path])
        ;; Subscribe to value if active path is valid and not :new
        active-value (when (and active-path (not= active-path :new))
                       @(rf/subscribe [::path-value active-path]))]
    [l/split-view {:ratio :1-3}
     [path-list]
     (if (or (nil? active-path) (= active-path :new))
       [add-path-view]
       ^{:key active-path}
       [portal-panel active-value])]))
