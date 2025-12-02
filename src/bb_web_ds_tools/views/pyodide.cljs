(ns bb-web-ds-tools.views.pyodide
  (:require
   [bb-web-ds-tools.components.common :as c]
   [bb-web-ds-tools.components.editor :as editor]
   [bb-web-ds-tools.components.layout :as l]
   [bb-web-ds-tools.portal :as portal]
   [bb-web-ds-tools.runtime.pyodide :as pyodide-runtime]
   [bb-web-ds-tools.theme :as t]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(def packages
  ["numpy" "pandas" "altair" "cytoolz" "scikit-learn" "sqlite3" "protobuf"
   "vega-datasets"])

(def plot-code
  "Plots to show how to use altair"
  "source = vd.data.cars()

chart = alt.Chart(source).mark_circle(size=60).encode(
    x='Horsepower',
    y='Miles_per_Gallon',
    color='Origin',
    tooltip=['Name', 'Origin', 'Horsepower', 'Miles_per_Gallon']
).interactive()

# Then in portal, click on value and then the \"v\" key and choose HTML viewer
chart.to_html()")

(def initial-code
  "initial code from the console"
  (let [import-fn #(str "import " %1 (when %2 (str " as " %2)))
        install-fn #(str "await micropip.install(\"" %1 "\")")]
    (str/join
     "\n"
     ["import micropip"
      ""
      (str/join "\n" (mapv install-fn packages))
      ""
      (import-fn "numpy" "np")
      (import-fn "pandas" "pd")
      (import-fn "altair" "alt")
      (import-fn "sklearn.linear_model" "lm")
      (import-fn "cytoolz" "tz")
      (import-fn "vega_datasets" "vd")
      ""
      plot-code])))

(def setup-code
  "Code run at start of pyodide"
  (str "import pyodide_js\nawait pyodide_js.loadPackage('micropip')"
       "\n"
       initial-code))

(defn on-worker-message [msg]
  (let [{:keys [type text value]} msg]
    (case (keyword type)
      :ready (rf/dispatch [::on-ready])
      :error (do (rf/dispatch [::set-error text])
                 (rf/dispatch [::portal/submit msg]))
      :result (rf/dispatch [::portal/submit value])
      :stdout (rf/dispatch [::portal/submit text])
      (js/console.warn "Unknown worker msg:" msg))))

(rf/reg-event-fx
 ::initialize
 (fn [{:keys [db]} _]
   (let [exists? (get-in db [:user-input :pyodide :default ::code])
         ready? (get-in db [:pyodide ::ready?])]
     {:db (-> db
              (cond->
                  (not exists?)
                (assoc-in [:user-input :pyodide :default ::code] initial-code))
              (assoc-in [:pyodide ::loading?] true))
      :fx [(when-not ready? [::load-runtime])]})))

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
 :<- [::pyodide]
 (fn [root] (::ready? root)))

(rf/reg-sub
 ::error
 :<- [::pyodide]
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

(rf/reg-event-fx
 ::on-ready
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:pyodide ::ready?] true)
    :fx [[:dispatch [::set-loading false]]
         [:dispatch [::run-code setup-code]]]}))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (pyodide-runtime/init-worker! on-worker-message)
   (pyodide-runtime/load-runtime-worker)))

(rf/reg-fx
 ::execute-python
 (fn [code]
   (pyodide-runtime/eval-in-worker code)))

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

            ready?
            [portal/portal-frame]

            loading?
            [l/flex-col {:class "h-full p-4 space-y-4"}
             [:div "Loading Pyodide..."]]

            error
            [l/flex-col {:class "h-full p-4 space-y-4"}
             [:div {:class "text-red-500"} (str "Error: " error)]]

            :else
            [portal/portal-frame])]]))))

(defn panel []
  (r/create-class
   {:component-did-mount #(rf/dispatch [::initialize])
    :reagent-render internal-view}))
