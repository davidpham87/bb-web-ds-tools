(ns bb-web-ds-tools.views.pyodide
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [goog.object :as gobj]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]))

;; State initialization
(rf/reg-event-fx
 ::initialize
 (fn [{:keys [db]} _]
   {:db (-> db
            (assoc-in [:user-input :pyodide :default]
                      {::code "import micropip\n\nawait micropip.install(\"numpy\")\nawait micropip.install(\"pandas\")\nawait micropip.install(\"statsmodels\")\n\nimport numpy as np\nimport pandas as pd"})
            (assoc ::pyodide {::loading? false
                              ::ready? false
                              ::error nil
                              ::output ""}))
    :fx [[:dispatch ::initialize-runtime]]}))

;; Subscriptions
(rf/reg-sub ::user-input-root (fn [db _] (get-in db [:user-input :pyodide :default])))
(rf/reg-sub ::component-root (fn [db _] (::pyodide db)))
(rf/reg-sub ::loading? :<- [::component-root] (fn [root] (::loading? root)))
(rf/reg-sub ::ready? :<- [::component-root] (fn [root] (::ready? root)))
(rf/reg-sub ::error :<- [::component-root] (fn [root] (::error root)))
(rf/reg-sub ::code :<- [::user-input-root] (fn [root] (::code root)))
(rf/reg-sub ::output :<- [::component-root] (fn [root] (::output root)))
(rf/reg-sub ::mac-os? (fn [db _] (get-in db [:platform :mac-os?])))

;; Events
(rf/reg-event-db ::set-loading (fn [db [_ v]] (assoc-in db [::pyodide ::loading?] v)))
(rf/reg-event-db ::set-ready (fn [db [_ v]] (assoc-in db [::pyodide ::ready?] v)))
(rf/reg-event-db ::set-error (fn [db [_ v]] (update db ::pyodide assoc ::error v ::loading? false)))
(rf/reg-event-db ::set-code (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::code] v)))
(rf/reg-event-db ::append-output (fn [db [_ v]] (update-in db [::pyodide ::output] str v "\n")))
(rf/reg-event-db ::clear-output (fn [db _] (assoc-in db [::pyodide ::output] "")))

;; Pyodide Loader
(defn load-script [src on-load on-error]
  (let [script (js/document.createElement "script")]
    (set! (.-src script) src)
    (set! (.-onload script) on-load)
    (set! (.-onerror script) on-error)
    (js/document.body.appendChild script)))

(def pyodide-url "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js")
(defonce pyodide-instance (atom nil))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (if @pyodide-instance
     (rf/dispatch [::set-ready true])
     (let [init-fn (fn []
                     (-> (js/loadPyodide #js {:stdout (fn [t] (rf/dispatch [::append-output :stdout t]))
                                              :stderr (fn [t] (rf/dispatch [::append-output :stderr t]))})
                         (.then (fn [p]
                                  (reset! pyodide-instance p)
                                  (let [run-fn (gobj/get p "runPythonAsync")]
                                    (run-fn "import pyodide_js\nawait pyodide_js.loadPackage('micropip')"))))
                         (.then (fn [_]
                                  (rf/dispatch [::set-ready true])
                                  (rf/dispatch [::set-loading false])))
                         (.catch (fn [e]
                                   (rf/dispatch [::set-error (str "Init failed: " e)])))))]
       (if (exists? js/loadPyodide)
         (init-fn)
         (load-script pyodide-url init-fn #(rf/dispatch [::set-error "Script load failed"])))))))

(rf/reg-event-fx
 ::initialize-runtime
 (fn [{:keys [db]} _]
   {:db (update db ::pyodide assoc ::loading? true ::error nil)
    :fx [[::load-runtime]]}))

;; Execution
(rf/reg-fx
 ::execute-python
 (fn [code]
   (when @pyodide-instance
     (try
       (let [run-fn (gobj/get @pyodide-instance "runPythonAsync")]
         (-> (run-fn code)
             (.then (fn [res]
                      (when res
                        (rf/dispatch [::append-output :result (str res)]))))
             (.catch (fn [e]
                       (rf/dispatch [::append-output :error (str e)])))))
       (catch js/Error e
         (rf/dispatch [::append-output :error (str e)]))))))

(rf/reg-event-fx
 ::run-code
 (fn [_ [_ code]]
   {:fx [[::execute-python code]]}))

;; View
(defn panel []
  (r/create-class
   {:component-did-mount
    (fn [this]
      (rf/dispatch [::initialize]))
    :reagent-render
    (fn []
      (let [loading? @(rf/subscribe [::loading?])
            ready? @(rf/subscribe [::ready?])
            error @(rf/subscribe [::error])
            code @(rf/subscribe [::code])
            output @(rf/subscribe [::output])
            mac-os? @(rf/subscribe [::mac-os?])]
        [:div {:class "container mx-auto max-w-6xl space-y-6 p-6"}

         (cond
           loading? [:div {:class "text-center text-[#8cd0d3]"} "Loading Pyodide..."]
           error [:div {:class "text-center text-[#cc9393]"} error]
           (not ready?) [:div {:class "text-center"}
                         [c/button {:on-click #(rf/dispatch [::initialize-runtime])} "Load Python Environment"]])

         (when ready?
           [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
            [:div {:class "space-y-4"}
             [c/card {}
              [:h3 {:class "text-lg font-bold text-[#dcdccc] mb-4"} "Code"]
              [:div {:class "rounded overflow-hidden h-64 border border-[#5f5f5f]"}
               [editor/monaco-editor {:value code
                                      :language "python"
                                      :on-change #(rf/dispatch [::set-code %])
                                      :on-mount #(editor/setup-editor-actions % mac-os? (fn [code] (rf/dispatch [::run-code code])))}]]
              [:div {:class "mt-4 flex justify-end"}
               [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]]]

            [:div {:class "space-y-4"}
             [c/card {}
              [:div {:class "flex justify-between items-center mb-4"}
               [:h3 {:class "text-lg font-bold text-[#dcdccc]"} "Output"]
               [c/button-xs {:on-click #(rf/dispatch [::clear-output])} "Clear"]]
              [c/pre-block {:content [editor/render-output output] :class "h-96"}]]]])]))}))
