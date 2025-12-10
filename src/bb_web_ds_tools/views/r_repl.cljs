(ns bb-web-ds-tools.views.r-repl
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.portal :as portal]
            [bb-web-ds-tools.runtime.webr :as webr]
            [bb-web-ds-tools.events.settings :as settings-events]))

;; State initialization
(rf/reg-event-fx
 ::initialize
 (fn [{:keys [db]} _]
   (let [exists? (get-in db [:user-input :r-repl :default])
         ready? (get-in db [:user-input :r-repl :default ::ready?])
         loading? (get-in db [:user-input :r-repl :default ::loading?])]
     {:db (cond-> db
            (not exists?)
            (assoc-in [:user-input :r-repl :default]
                      {::loading? false
                       ::ready? false
                       ::error nil
                       ::code "# To install packages use webr::install(\"package_name\")\n# Example: webr::install(\"bootstrap\")\n# Repository available here: https://repo.r-wasm.org/\n\ninstall.packages(c(\"ggplot2\", \"dplyr\"))\n\nlibrary(ggplot2)\nlibrary(dplyr)\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point()"}))
      :fx [(when (and (not ready?) (not loading?))
             [:dispatch [::initialize-runtime]])]})))

;; Subscriptions
(rf/reg-sub
 ::root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get-in user-input [:r-repl :default])))

(rf/reg-sub
 ::loading?
 :<- [::root]
 (fn [root]
   (::loading? root)))

(rf/reg-sub
 ::ready?
 :<- [::root]
 (fn [root]
   (::ready? root)))

(rf/reg-sub
 ::error
 :<- [::root]
 (fn [root]
   (::error root)))

(rf/reg-sub
 ::code
 :<- [::root]
 (fn [root]
   (::code root)))

(rf/reg-sub
 ::mac-os?
 (fn [db _]
   (get-in db [:platform :mac-os?])))

;; Events
(rf/reg-event-db
 ::set-loading
 (fn [db [_ v]]
   (assoc-in db [:user-input :r-repl :default ::loading?] v)))

(rf/reg-event-db
 ::set-ready
 (fn [db [_ v]]
   (assoc-in db [:user-input :r-repl :default ::ready?] v)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ v]]
   (update-in db [:user-input :r-repl :default] assoc ::error v ::loading? false ::ready? false)))

(rf/reg-event-db
 ::set-code
 (fn [db [_ v]]
   (assoc-in db [:user-input :r-repl :default ::code] v)))

;; WebR Loader
(rf/reg-fx
 ::load-runtime
 (fn [_]
   (webr/load-runtime-main
    (fn []
      (rf/dispatch [::set-ready true])
      (rf/dispatch [::set-loading false]))
    (fn [err]
      (rf/dispatch [::set-error err])))))

(rf/reg-event-fx
 ::initialize-runtime
 (fn [{:keys [db]} _]
   {:db (update-in db [:user-input :r-repl :default] assoc ::loading? true ::error nil)
    :fx [[::load-runtime]]}))

;; Execution
(rf/reg-fx
 ::execute-r
 (fn [[code opts]]
   (webr/eval-in-main code opts)))

(rf/reg-fx
 ::bind-datasets
 (fn [{:keys [datasets keys-to-bind]}]
   (webr/bind-datasets datasets keys-to-bind)))

(rf/reg-fx
 ::sync-datasets
 (fn [_]
   (webr/sync-datasets)))

(rf/reg-event-fx
 ::run-code
 (fn [{:keys [db]} [_ code]]
   (let [webr-settings (get-in db [:settings :webr] {:container-width 720
                                                     :container-height 800
                                                     :canvas-scale 0.72})]
     {:fx [[::execute-r [code {:webr webr-settings}]]]})))

(rf/reg-event-fx
 ::on-mount
 (fn [{:keys [db]} _]
   (let [datasets (get-in db [:user-input :datasets :items])]
     {:fx [[:dispatch [::initialize]]
           [::bind-datasets {:datasets datasets}]]})))

(rf/reg-event-fx
 ::on-unmount
 (fn [_ _]
   {:fx [[::sync-datasets]]}))

;; View
(defn panel-render
  "Renders the R REPL view content.

  Returns:
    vector: A hiccup vector."
  []
  (let [loading? @(rf/subscribe [::loading?])
        ready? @(rf/subscribe [::ready?])
        error @(rf/subscribe [::error])
        code @(rf/subscribe [::code])
        mac-os? @(rf/subscribe [::mac-os?])]
    [l/flex-col {:class "h-full w-full"}
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [l/flex-row {:class "justify-between"}
       [c/label "Code"]
       [l/flex-row {:class "space-x-4"}
        (when loading? [:div {:class t/text-accent} "Loading WebR..."])
        (when error [:div {:class t/text-danger} error])
        [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value code
                              :language "r"
                              :options {:rulers [80]}
                              :on-change #(rf/dispatch [::set-code %])
                              :on-mount #(editor/setup-editor-actions % mac-os? (fn [code] (rf/dispatch [::run-code code])))}]]]]))

(defn panel
  "Main component for the R REPL view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  (r/create-class
   {:display-name "r-repl-panel"
    :component-did-mount (fn [] (rf/dispatch [::initialize]))
    :reagent-render (fn [] [panel-render])}))
