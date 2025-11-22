(ns bb-web-ds-tools.views.pyodide
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [goog.object :as gobj]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]))

;; State initialization
(rf/reg-event-db
 ::initialize
 (fn [db _]
   (assoc db
          ::loading? false
          ::ready? false
          ::error nil
          ::code "print('Hello from Pyodide!')\nimport sys\nprint(sys.version)"
          ::output "")))

;; Subscriptions
(rf/reg-sub ::loading? (fn [db] (::loading? db)))
(rf/reg-sub ::ready? (fn [db] (::ready? db)))
(rf/reg-sub ::error (fn [db] (::error db)))
(rf/reg-sub ::code (fn [db] (::code db)))
(rf/reg-sub ::output (fn [db] (::output db)))

;; Events
(rf/reg-event-db ::set-loading (fn [db [_ v]] (assoc db ::loading? v)))
(rf/reg-event-db ::set-ready (fn [db [_ v]] (assoc db ::ready? v)))
(rf/reg-event-db ::set-error (fn [db [_ v]] (assoc db ::error v ::loading? false)))
(rf/reg-event-db ::set-code (fn [db [_ v]] (assoc db ::code v)))
(rf/reg-event-db ::append-output (fn [db [_ v]] (update db ::output str v "\n")))
(rf/reg-event-db ::clear-output (fn [db _] (assoc db ::output "")))

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
                     (-> (js/loadPyodide #js {:stdout (fn [t] (rf/dispatch [::append-output t]))
                                              :stderr (fn [t] (rf/dispatch [::append-output (str "ERR: " t)]))})
                         (.then (fn [p]
                                  (reset! pyodide-instance p)
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
   {:db (assoc db ::loading? true ::error nil)
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
                        (rf/dispatch [::append-output (str "=> " res)]))))
             (.catch (fn [e]
                       (rf/dispatch [::append-output (str "Error: " e)])))))
       (catch js/Error e
         (rf/dispatch [::append-output (str "Sync Error: " e)]))))))

(rf/reg-event-fx
 ::run-code
 (fn [{:keys [db]} _]
   {:fx [[::execute-python (::code db)]]}))

;; View
(defn panel []
  (let [loading? @(rf/subscribe [::loading?])
        ready? @(rf/subscribe [::ready?])
        error @(rf/subscribe [::error])
        code @(rf/subscribe [::code])
        output @(rf/subscribe [::output])]
    [:div.container.mx-auto.max-w-6xl.space-y-6
     [c/page-header "Pyodide Python Environment"]

     (cond
       loading? [:div.text-center.text-blue-400 "Loading Pyodide..."]
       error [:div.text-center.text-red-400 error]
       (not ready?) [:div.text-center
                     [c/button {:on-click #(rf/dispatch [::initialize-runtime])} "Load Python Environment"]])

     (when ready?
       [:div.grid.grid-cols-1.lg:grid-cols-2.gap-6
        [:div.space-y-4
         [:div.bg-gray-800.rounded-lg.p-6.border.border-gray-700.shadow-lg
          [:h3.text-lg.font-bold.text-white.mb-4 "Code"]
          [:div.bg-white.rounded.overflow-hidden.h-64
           [editor/monaco-editor {:value code
                                  :language "python"
                                  :on-change #(rf/dispatch [::set-code %])}]]
          [:div.mt-4.flex.justify-end
           [c/button {:on-click #(rf/dispatch [::run-code])} "Run"]]]]

        [:div.space-y-4
         [:div.bg-gray-800.rounded-lg.p-6.border.border-gray-700.shadow-lg
          [:div.flex.justify-between.items-center.mb-4
           [:h3.text-lg.font-bold.text-white "Output"]
           [c/button-xs {:on-click #(rf/dispatch [::clear-output])} "Clear"]]
          [c/pre-block {:content output :class "h-96"}]]]])]))
