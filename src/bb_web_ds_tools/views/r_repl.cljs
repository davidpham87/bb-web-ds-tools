(ns bb-web-ds-tools.views.r-repl
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.theme :as t]))

;; State initialization
(rf/reg-event-db
 ::initialize
 (fn [db _]
   (assoc-in db [:user-input :r-repl :default]
             {::loading? false
              ::ready? false
              ::error nil
              ::code "install.packages(c(\"ggplot2\", \"dplyr\"))\n\nlibrary(ggplot2)\nlibrary(dplyr)\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point()"
              ::output []})))

;; Subscriptions
(rf/reg-sub ::root (fn [db _] (get-in db [:user-input :r-repl :default])))
(rf/reg-sub ::loading? :<- [::root] (fn [root] (::loading? root)))
(rf/reg-sub ::ready? :<- [::root] (fn [root] (::ready? root)))
(rf/reg-sub ::error :<- [::root] (fn [root] (::error root)))
(rf/reg-sub ::code :<- [::root] (fn [root] (::code root)))
(rf/reg-sub ::output :<- [::root] (fn [root] (::output root)))
(rf/reg-sub ::mac-os? (fn [db _] (get-in db [:platform :mac-os?])))

;; Events
(rf/reg-event-db ::set-loading (fn [db [_ v]] (assoc-in db [:user-input :r-repl :default ::loading?] v)))
(rf/reg-event-db ::set-ready (fn [db [_ v]] (assoc-in db [:user-input :r-repl :default ::ready?] v)))
(rf/reg-event-db ::set-error (fn [db [_ v]] (update-in db [:user-input :r-repl :default] assoc ::error v ::loading? false)))
(rf/reg-event-db ::set-code (fn [db [_ v]] (assoc-in db [:user-input :r-repl :default ::code] v)))
(rf/reg-event-db ::append-output (fn [db [_ type text]] (update-in db [:user-input :r-repl :default ::output] conj {:type type :text text})))
(rf/reg-event-db ::clear-output (fn [db _] (assoc-in db [:user-input :r-repl :default ::output] [])))

;; WebR Loader
(defonce webr-instance (atom nil))

(defn start-read-loop [webr]
  (letfn [(loop-fn []
            (-> (.read webr)
                (.then (fn [msg]
                         (let [type (.-type msg)
                               data (.-data msg)]
                           (cond
                             (= type "stdout") (rf/dispatch [::append-output :stdout data])
                             (= type "stderr") (rf/dispatch [::append-output :stderr data])
                             (= type "closed") nil
                             :else nil)
                           (when (not= type "closed")
                             (loop-fn)))))
                (.catch #(rf/dispatch [::set-error (str "WebR Read Error:" %)]))))]
    (loop-fn)))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (if @webr-instance
     (rf/dispatch [::set-ready true])
     (let [init-fn (fn []
                     (let [webr (new js/WebR (clj->js {}))]
                       (reset! webr-instance webr)
                       (-> (.init webr)
                           (.then (fn []
                                    (start-read-loop webr)
                                    (rf/dispatch [::set-ready true])
                                    (rf/dispatch [::set-loading false])))
                           (.catch (fn [e]
                                     (rf/dispatch [::set-error (str "WebR Init failed: " e)]))))))]
       (if (exists? js/WebR)
         (init-fn)
         (rf/dispatch [::set-error "WebR script not loaded"]))))))

(rf/reg-event-fx
 ::initialize-runtime
 (fn [{:keys [db]} _]
   {:db (update-in db [:user-input :r-repl :default] assoc ::loading? true ::error nil)
    :fx [[::load-runtime]]}))

;; Execution
(rf/reg-fx
 ::execute-r
 (fn [code]
   (when @webr-instance
     (try
       (-> (.evalR @webr-instance code (clj->js {:autoprint true}))
           (.then (fn [res] (try (.destroy res) (catch js/Error _))))
           (.catch (fn [e] (rf/dispatch [::append-output :error (str e)]))))
       (catch js/Error e
         (rf/dispatch [::append-output :error (str e)]))))))

(rf/reg-event-fx
 ::run-code
 (fn [_ [_ code]]
   {:fx [[::execute-r code]]}))

;; View
(defn panel-render []
  (let [loading? @(rf/subscribe [::loading?])
        ready? @(rf/subscribe [::ready?])
        error @(rf/subscribe [::error])
        code @(rf/subscribe [::code])
        output @(rf/subscribe [::output])
        mac-os? @(rf/subscribe [::mac-os?])]
    [:div {:class "container mx-auto max-w-6xl space-y-6 p-6"}

     (cond
       loading? [:div {:class (str "text-center " t/text-accent)} "Loading WebR..."]
       error [:div {:class (str "text-center " t/text-danger)} error]
       (not ready?) [:div {:class "text-center"}
                     [c/button {:on-click #(rf/dispatch [::initialize-runtime])} "Load R Environment"]])

     (when ready?
       [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
        [:div {:class "space-y-4"}
         [c/card {}
          [:h3 {:class (str "text-lg font-bold " t/text-primary " mb-4")} "Code"]
          [:div {:class (str "rounded overflow-hidden h-64 border " t/border-default)}
           [editor/monaco-editor {:value code
                                  :language "r"
                                  :on-change #(rf/dispatch [::set-code %])
                                  :on-mount #(editor/setup-editor-actions % mac-os? (fn [code] (rf/dispatch [::run-code code])))}]]
          [:div {:class "mt-4 flex justify-end"}
           [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]]]

        [:div {:class "space-y-4"}
         [c/card {}
          [:div {:class "flex justify-between items-center mb-4"}
           [:h3 {:class (str "text-lg font-bold " t/text-primary)} "Output"]
           [c/button-xs {:on-click #(rf/dispatch [::clear-output])} "Clear"]]
          [c/pre-block {:content [editor/render-output output] :class "h-96"}]]]])]))

(defn panel []
  (r/create-class
   {:display-name "r-repl-panel"
    :component-did-mount (fn [] (rf/dispatch [::initialize]))
    :reagent-render (fn [] [panel-render])}))
