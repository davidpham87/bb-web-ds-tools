(ns bb-web-ds-tools.views.pyodide
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.portal :as portal]
            ["pyodide" :refer [loadPyodide]]))

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (let [exists? (get-in db [:user-input :pyodide :default ::code])]
     (cond-> db
       (not exists?)
       (assoc-in [:user-input :pyodide :default ::code] "print('Hello Pyodide')\nimport sys\nprint(sys.version)")))))

(rf/reg-sub ::user-input-root :<- [:bb-web-ds-tools.core/user-input] (fn [user-input _] (get-in user-input [:pyodide :default])))
(rf/reg-sub ::code :<- [::user-input-root] (fn [root] (::code root)))
(rf/reg-sub ::loading? :<- [::user-input-root] (fn [root] (::loading? root)))
(rf/reg-sub ::ready? :<- [::user-input-root] (fn [root] (::ready? root)))
(rf/reg-sub ::error :<- [::user-input-root] (fn [root] (::error root)))
(rf/reg-sub ::mac-os? (fn [db _] (get-in db [:platform :mac-os?])))

(rf/reg-event-db ::set-code (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::code] v)))
(rf/reg-event-db ::set-loading (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::loading?] v)))
(rf/reg-event-db ::set-ready (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::ready?] v)))
(rf/reg-event-db ::set-error (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::error] v)))

(defonce pyodide-instance (atom nil))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (if @pyodide-instance
     (rf/dispatch [::set-ready true])
     (-> (loadPyodide (clj->js {:indexURL "js/pyodide"
                                :stdout (fn [text] (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "stdout" :text text}]))
                                :stderr (fn [text] (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "stderr" :text text}]))}))
         (.then (fn [p]
                  (reset! pyodide-instance p)
                  (rf/dispatch [::set-ready true])
                  (rf/dispatch [::set-loading false])))
         (.catch (fn [e]
                   (rf/dispatch [::set-error (str e)])))))))

(rf/reg-event-fx
 ::initialize-runtime
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:user-input :pyodide :default ::loading?] true)
    :fx [[::load-runtime]]}))

(rf/reg-fx
 ::execute-python
 (fn [code]
   (when @pyodide-instance
     (try
       (let [res (.runPython ^js @pyodide-instance code)]
         (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "result" :value (str res)}]))
       (catch js/Error e
         (rf/dispatch [:bb-web-ds-tools.portal/submit {:type "error" :text (str e)}]))))))

(rf/reg-event-fx
 ::run-code
 (fn [_ [_ code]]
   {:fx [[::execute-python code]]}))

(defn internal-view []
  (let [code @(rf/subscribe [::code])
        mac-os? @(rf/subscribe [::mac-os?])
        loading? @(rf/subscribe [::loading?])
        ready? @(rf/subscribe [::ready?])
        error @(rf/subscribe [::error])]
    [l/split-view {:ratio :1-1}
     ;; Left: Editor
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "Python Code"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value code
                              :language "python"
                              :options {:rulers [80]}
                              :on-change #(rf/dispatch [::set-code %])
                              :on-mount #(editor/setup-editor-actions % mac-os? (fn [c] (rf/dispatch [::run-code c])))}]]
      [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]

     ;; Right: Info/Portal Link
     [l/flex-col {:class "h-full p-4 space-y-4 items-center justify-center"}
      (cond
        loading? [:div "Loading Pyodide..."]
        error [:div {:class "text-red-500"} (str "Error: " error)]
        (not ready?) [c/button {:on-click #(rf/dispatch [::initialize-runtime])} "Load Python"]
        :else
        [:div {:class "text-center space-y-4"}
         [:div "Pyodide Ready"]
         [:div "Results and output are sent to Portal."]
         [c/button {:on-click #(rf/dispatch [:bb-web-ds-tools.portal/open])} "Open Portal"]])]]))

(defn panel []
  (r/create-class
   {:component-did-mount #(rf/dispatch [::initialize])
    :reagent-render internal-view}))
