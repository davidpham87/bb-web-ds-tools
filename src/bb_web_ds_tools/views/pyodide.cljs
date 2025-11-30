(ns bb-web-ds-tools.views.pyodide
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.portal :as portal]
            ["pyodide" :refer [loadPyodide]]))

(defonce pyodide-instance (atom nil))

(rf/reg-event-fx
 ::initialize
 (fn [{:keys [db]} _]
   (let [exists? (get-in db [:user-input :pyodide :default ::code])
         code "print('Hello Pyodide')\nimport sys\nprint(sys.version)"]
     {:db (cond-> db
            (not exists?)
            (assoc-in [:user-input :pyodide :default ::code] code))
      :fx [[::load-runtime]]})))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _] (get-in user-input [:pyodide :default])))

(rf/reg-sub
 ::code
 :<- [::user-input-root]
 (fn [root] (::code root)))

(rf/reg-sub
 ::pyodide
 (fn [db] (:pyodide db)))

(rf/reg-sub
 ::loading?
 :<- [::pyodide]
 (fn [root] (::loading? root)))

(rf/reg-sub
 ::ready?
 :<- [::user-input-root]
 (fn [root] (::ready? root)))

(rf/reg-sub
 ::error
 :<- [::user-input-root]
 (fn [root] (::error root)))

(rf/reg-sub
 ::mac-os?
 (fn [db _] (get-in db [:platform :mac-os?])))

(rf/reg-event-db
 ::set-code
 (fn [db [_ v]]
   (assoc-in db [:user-input :pyodide :default ::code] v)))

(rf/reg-event-db
 ::set-loading
 (fn [db [_ v]]
   (assoc-in db [:pyodide ::loading?] v)))

(rf/reg-event-db
 ::set-ready
 (fn [db [_ v]]
   (assoc-in db [:pyodide ::ready?] v)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ v]]
   (assoc-in db [:pyodide ::error] v)))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (if @pyodide-instance
     (rf/dispatch [::set-ready true])
     (-> (loadPyodide
          (clj->js {:indexURL "js/pyodide"
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
  (let [code-sub (rf/subscribe [::code])]
    (fn []
      (let [code @code-sub
            mac-os? @(rf/subscribe [::mac-os?])
            loading? @(rf/subscribe [::loading?])
            ready? @(rf/subscribe [::ready?])
            error @(rf/subscribe [::error])]
        [:div {:class "w-full border border-gray-700 rounded mb-4"}
         [l/flex-row {:class "h-full w-screen"}
          [l/flex-col {:class "h-fulll w-full max-w-3xl"}
           [l/flex-row {:class "justify-between py-4"}
            [c/label "Python Code"]
            [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]
           [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
                  :style {:height "85vh"}}
            [editor/monaco-editor
             {:value code
              :language "python"
              :options {:rulers [80] :lineNumbers "off"}
              :on-change #(rf/dispatch [::set-code %])
              :on-mount #(editor/setup-editor-actions
                          % mac-os?
                          (fn [c] (rf/dispatch [::run-code c])))}]]]
          (cond
            loading?
            [l/flex-col {:class "h-full p-4 space-y-4"}
             [:div "Loading Pyodide..."]]

            error
            [l/flex-col {:class "h-full p-4 space-y-4"}
             [:div {:class "text-red-500"} (str "Error: " error)]]
            ready?
            [portal/portal-frame]

            :else
            [portal/portal-frame])]]))))

(defn panel []
  (r/create-class
   {:component-did-mount #(rf/dispatch [::initialize])
    :reagent-render internal-view}))
