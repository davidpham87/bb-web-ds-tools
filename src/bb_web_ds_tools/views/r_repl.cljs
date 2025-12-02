(ns bb-web-ds-tools.views.r-repl
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.portal :as portal]))

;; State initialization
(rf/reg-event-db
 ::initialize
 (fn [db _]
   (let [exists? (get-in db [:user-input :r-repl :default])]
     (cond-> db
       (not exists?)
       (assoc-in [:user-input :r-repl :default]
                 {::loading? false
                  ::ready? false
                  ::error nil
                  ::code "install.packages(c(\"ggplot2\", \"dplyr\"))\n\nlibrary(ggplot2)\nlibrary(dplyr)\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point()"})))))

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
   (update-in db [:user-input :r-repl :default] assoc ::error v ::loading? false)))

(rf/reg-event-db
 ::set-code
 (fn [db [_ v]]
   (assoc-in db [:user-input :r-repl :default ::code] v)))

;; WebR Loader
(defonce webr-instance (atom nil))

(defn start-read-loop
  "Starts the WebR read loop to capture stdout/stderr.

  Args:
    webr (object): The WebR instance.

  Returns:
    nil: Starts the async loop."
  [^js webr]
  (letfn [(loop-fn []
            (-> (.read webr)
                (.then (fn [^js msg]
                         (let [type (.-type msg)
                               data (.-data msg)]
                           (cond
                             (= type "stdout") (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "stdout" :text data}])
                             (= type "stderr") (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "stderr" :text data}])
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
       (-> (.evalR ^js @webr-instance code (clj->js {:autoprint true}))
           (.then (fn [^js res]
                    (try
                      ;; Convert R object to JS or use capture?
                      ;; WebR objects might need conversion.
                      ;; For now, just submit string representation or the object if possible.
                      (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "result" :value (str res)}])
                      (.destroy res)
                      (catch js/Error _))))
           (.catch (fn [e] (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "error" :text (str e)}]))))
       (catch js/Error e
         (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "error" :text (str e)}]))))))

(rf/reg-event-fx
 ::run-code
 (fn [_ [_ code]]
   {:fx [[::execute-r code]]}))

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
     (cond
       loading? [:div {:class (str "text-center " t/text-accent " p-6")} "Loading WebR..."]
       error [:div {:class (str "text-center " t/text-danger " p-6")} error]
       (not ready?) [:div {:class "text-center p-6"}
                     [c/button {:on-click #(rf/dispatch [::initialize-runtime])} "Load R Environment"]])

     (when ready?
       [l/split-view {:ratio :1-1}
        ;; LEFT: Code
        [l/flex-col {:class "h-full p-4 space-y-4"}
         [c/label "Code"]
         [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
          [editor/monaco-editor {:value code
                                 :language "r"
                                 :options {:rulers [80]}
                                 :on-change #(rf/dispatch [::set-code %])
                                 :on-mount #(editor/setup-editor-actions % mac-os? (fn [code] (rf/dispatch [::run-code code])))}]]
         [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]

        ;; RIGHT: Output
        [l/flex-col {:class "h-full p-4 space-y-4 items-center justify-center"}
         [:div {:class "text-center space-y-4"}
          [:div "WebR Ready"]
          [:div "Results and output are sent to Portal."]
          [c/button {:on-click #(rf/dispatch [:bb-web-ds-tools.portal/open])} "Open Portal"]]]])]))

(defn panel
  "Main component for the R REPL view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  (r/create-class
   {:display-name "r-repl-panel"
    :component-did-mount (fn [] (rf/dispatch [::initialize]))
    :reagent-render (fn [] [panel-render])}))
