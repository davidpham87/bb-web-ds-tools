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
 ::watched-paths
 (fn [db _]
   (get-in db [:user-input :app-db :watched-paths] [])))

(rf/reg-sub
 ::path-value
 (fn [db [_ path-str]]
   (try
     (let [path (reader/read-string path-str)]
       (get-in db path :bb-web-ds-tools.views.app-db/not-found))
     (catch :default _ :bb-web-ds-tools.views.app-db/error))))

;; Events

(rf/reg-event-db
 ::add-watch-path
 (fn [db [_ path-str]]
   (update-in db [:user-input :app-db :watched-paths] (fnil conj []) path-str)))

(rf/reg-event-db
 ::remove-watch-path
 (fn [db [_ path-str]]
   (update-in db [:user-input :app-db :watched-paths] (fn [paths] (vec (remove #(= % path-str) paths))))))

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

(defn update-view [local-edn print-level val]
  (reset! local-edn (with-out-str (binding [*print-level* @print-level] (pprint val)))))

(defn path-viewer [path-str]
  (let [print-level (r/atom 5) ;; Default depth
        local-edn (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (let [val @(rf/subscribe [::path-value path-str])]
          (update-view local-edn print-level val)))

      :reagent-render
      (fn [path-str]
        (let [current-value @(rf/subscribe [::path-value path-str])]
          [c/card {:class "flex flex-col space-y-2"}
           [l/flex-row {:class "justify-between items-center"}
            [:h4 {:class (str "font-mono text-sm font-bold " t/text-accent)} path-str]
            [l/flex-row {:class "space-x-2"}
             [c/button-xs {:on-click #(rf/dispatch [::remove-watch-path path-str])
                           :class t/bg-button-danger} "Remove"]]]

           [l/flex-row {:class "items-center space-x-2 text-xs"}
            [c/label "Depth:"]
            [:input {:type "number"
                     :value @print-level
                     :on-change #(do (reset! print-level (js/parseInt (.. % -target -value)))
                                     (update-view local-edn print-level current-value))
                     :class (str "w-12 rounded px-1 " t/bg-input " " t/border-default " " t/text-primary)}]
            [c/button-xs {:on-click #(update-view local-edn print-level current-value)}
             "Refresh View"]]

           [:div {:class (str "h-64 border " t/border-default)}
            [monaco-editor
             {:value @local-edn
              :language "clojure"
              :theme "zenburn"
              :options {:minimap {:enabled false}
                        :fontSize 12
                        :scrollBeyondLastLine false}
              :on-change #(reset! local-edn %)}]]

           [c/button {:class "w-full"
                      :on-click #(rf/dispatch [::update-path-value path-str @local-edn])}
            "Update Path"]]))})))

(defn panel []
  (let [watched-paths @(rf/subscribe [::watched-paths])]
    (r/with-let [new-path (r/atom "")]
      [l/container {:class "space-y-6"}
       [l/flex-row {:class "justify-between items-center"}
        [:h2 {:class "text-2xl font-bold"} "App DB Editor"]
        [c/button {:on-click #(rf/dispatch [::open-in-portal])}
         "Inspect DB in Portal"]]

       ;; Add Path Control
       [c/card {}
        [l/flex-row {:class "items-center space-x-4"}
         [c/input {:value @new-path
                   :on-change #(reset! new-path (.. % -target -value))
                   :placeholder "Enter path e.g. [:user-input :datasets]"
                   :class "flex-grow font-mono"}]
         [c/button {:on-click #(do (rf/dispatch [::add-watch-path @new-path])
                                   (reset! new-path ""))}
          "Watch Path"]]]

       ;; List of Watched Paths
       (if (seq watched-paths)
         [l/grid {:class "grid-cols-1 gap-4"}
          (for [path watched-paths]
            ^{:key path}
            [path-viewer path])]
         [:div {:class (str "text-center " t/text-muted " italic")} "No paths watched. Add a path to start."])])))
