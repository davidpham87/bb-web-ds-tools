(ns bb-web-ds-tools.views.app-db
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :as reader]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :refer [monaco-editor]]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.portal :as portal]
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
     (let [path (reader/read-string path-str)]
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
           (assoc-in [:user-input :app-db :active-path] (first new-paths)))))))

(rf/reg-event-db
 ::update-path-value
 (fn [db [_ path-str new-value-str]]
   (try
     (let [path (reader/read-string path-str)
           new-value (reader/read-string new-value-str)]
       (assoc-in db path new-value))
     (catch :default e
       (js/console.error "Failed to update path:" e)
       db))))

(rf/reg-event-fx
 ::open-in-portal
 (fn [{:keys [db]} _]
   {:dispatch [::portal/submit db]}))

;; Components

(defn path-viewer [path-str]
  (let [print-level (r/atom 5) ;; Default depth
        local-edn (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (let [val @(rf/subscribe [::path-value path-str])]
          (reset! local-edn (with-out-str (binding [*print-level* @print-level] (pprint val))))))

      :reagent-render
      (fn [path-str]
        (let [current-value @(rf/subscribe [::path-value path-str])]
          [:div {:class "flex flex-col space-y-2"}
           [l/flex-row {:class "justify-between items-center"}
            [:h4 {:class (str "font-mono text-sm font-bold " t/text-accent)} path-str]

            [l/flex-row {:class "items-center space-x-2 text-xs"}
             ;; Depth Control
             [:span {:class (str "font-medium " t/text-secondary)} "Depth:"]
             [:input {:type "number"
                      :value @print-level
                      :on-change #(do (reset! print-level (js/parseInt (.. % -target -value)))
                                      (reset! local-edn (with-out-str (binding [*print-level* @print-level] (pprint current-value)))))
                      :class (str "w-12 rounded px-1 " t/bg-input " " t/border-default " " t/text-primary)}]

             ;; Refresh Button
             [c/button-xs {:on-click #(reset! local-edn (with-out-str (binding [*print-level* @print-level] (pprint current-value))))}
              "Refresh View"]

             ;; Update Path Button
             [c/button-xs {:on-click #(rf/dispatch [::update-path-value path-str @local-edn])
                           :class (str t/bg-button-primary " " t/text-button-primary)}
              "Update Path"]]]

           [:div {:class (str "h-[500px] border " t/border-default)}
            [monaco-editor
             {:value @local-edn
              :language "clojure"
              :theme "zenburn"
              :options {:minimap {:enabled false}
                        :fontSize 14
                        :scrollBeyondLastLine false}
              :on-change #(reset! local-edn %)}]]]))})))

(defn add-path-view []
  (r/with-let [new-path (r/atom "")]
    [c/card {:class "p-8 flex flex-col items-center justify-center space-y-4 bg-transparent shadow-none"}
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

(defn panel []
  (let [watched-paths @(rf/subscribe [::watched-paths])
        active-path @(rf/subscribe [::active-path])
        ;; Ensure active path is valid, default to first or :new
        current-tab (or active-path
                        (first watched-paths)
                        :new)]

    [l/container {:class "space-y-6"}
     [l/flex-row {:class "justify-between items-center"}
      [:h2 {:class "text-2xl font-bold"} "App DB Editor"]
      [c/button {:on-click #(rf/dispatch [::open-in-portal])}
       "Inspect DB in Portal"]]

     [c/card {:class "flex flex-col min-h-[600px]"}
      ;; Tabs
      [c/tabs {:tabs (map (fn [p] {:id p :label p :on-close #(rf/dispatch [::remove-watch-path %])}) watched-paths)
               :active-tab-id current-tab
               :on-change #(rf/dispatch [::set-active-path %])
               :on-add #(rf/dispatch [::set-active-path :new])
               :class "px-2 pt-2"}]

      ;; Content
      [:div {:class "p-4 flex-grow"}
       (if (= current-tab :new)
         [add-path-view]
         ^{:key current-tab}
         [path-viewer current-tab])]]]))
