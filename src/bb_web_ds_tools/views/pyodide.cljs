(ns bb-web-ds-tools.views.pyodide
  "Namespace: bb-web-ds-tools.views.pyodide

  Key functions:
  - (on-worker-message [msg])
  - (internal-view [datasets])
  - (panel [])
  - packages
  - plot-code
  - initial-code
  - setup-code

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   [bb-web-ds-tools.components.common :as c]
   [bb-web-ds-tools.components.editor :as editor]
   [bb-web-ds-tools.components.layout :as l]
   [bb-web-ds-tools.components.navigation :as nav]
   [bb-web-ds-tools.portal :as portal]
   [bb-web-ds-tools.runtime.pyodide :as pyodide-runtime]
   [bb-web-ds-tools.theme :as t]
   [bb-web-ds-tools.views.datasets :as datasets]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(def packages
  "List of Python packages to install via micropip on initialization."
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
      "from datasets import datasets"
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

(rf/reg-event-fx
 ::handle-dataset-update
 (fn [{:keys [db]} [_ {:keys [key value]}]]
   {:fx [[:dispatch [::datasets/add-dataset {:name key :data value}]]]}))

(rf/reg-event-fx
 ::handle-dataset-delete
 (fn [{:keys [db]} [_ {:keys [key]}]]
   {:fx [[:dispatch [::datasets/delete-dataset key]]]}))

(defn on-worker-message
  "Handles messages from the Pyodide worker.

  Args:
    msg (map): The message object.

  Returns:
    nil: Dispatches events."
  [msg]
  (let [{:keys [type text value key]} msg]
    (case (keyword type)
      :ready (rf/dispatch [::on-ready])
      :error (rf/dispatch [::portal/submit msg])
      :result (rf/dispatch [::portal/submit value])
      :stdout (rf/dispatch [::portal/submit [:portal.viewer/code text]
                            :portal.viewer/hiccup])
      :dataset-update (rf/dispatch [::handle-dataset-update {:key key :value value}])
      :dataset-delete (rf/dispatch [::handle-dataset-delete {:key key}])
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
              (assoc-in [:pyodide ::loading?] (not ready?)))
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

(rf/reg-event-fx
 ::on-ready
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:pyodide ::ready?] true)
    :fx [[:dispatch [::set-loading false]]
         [:dispatch [::run-code setup-code]]]}))

(rf/reg-fx
 ::load-runtime
 (fn [_]
   (pyodide-runtime/load-runtime-worker on-worker-message)))

(rf/reg-fx
 ::execute-python
 (fn [code]
   (pyodide-runtime/eval-in-worker code)))

(rf/reg-fx
 ::sync-datasets
 (fn [datasets]
   (pyodide-runtime/sync-datasets datasets)))

(rf/reg-event-fx
 ::run-code
 (fn [_ [_ code]]
   {:fx [[::execute-python code]]}))

(defn internal-view
  "Renders the internal Pyodide view content.

  Args:
    datasets (map): The datasets map.

  Returns:
    vector: A hiccup vector."
  [datasets]
  (let [code-sub (rf/subscribe [::code])]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [datasets (second (r/argv this))]
          (pyodide-runtime/sync-datasets datasets)))
      :component-did-update
      (fn [this [_ old-datasets]]
        (let [new-datasets (second (r/argv this))]
          (when (not= old-datasets new-datasets)
            (pyodide-runtime/sync-datasets new-datasets))))
      :reagent-render
      (fn [datasets]
        (let [code @code-sub
              mac-os? @(rf/subscribe [::mac-os?])
              loading? @(rf/subscribe [::loading?])
              ready? @(rf/subscribe [::ready?])]
          [:div {:class "w-full rounded mb-4"}
           [l/flex-col {:class "h-full w-full p-2 space-y-2"}
            [l/flex-row {:class "justify-between"}
             [l/flex-row {:class "items-center gap-2"}
              [c/label "Python Code"]
              [c/help-button
               {:href (nav/get-wiki-url :code)
                :title "Help: Python (Pyodide)"
                :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"}]]
             [l/flex-row {:class "space-x-4"}
              [c/button {:on-click #(rf/dispatch [::run-code code])} "Run"]]]
            [:div {:class (str "flex-grow rounded overflow-hidden border  " t/border-default)
                   :style {:height "85vh"}}
             [editor/monaco-editor
              {:value code
               :language "python"
               :options {:rulers [80] :lineNumbers "off"}
               :on-change #(rf/dispatch [::set-code %])
               :on-mount #(editor/setup-editor-actions
                           % mac-os?
                           (fn [c] (rf/dispatch [::run-code c])))}]]]]))})))

(defn panel
  "Main component for the Pyodide view. Initializes on mount.

  Returns:
    vector: A hiccup vector."
  []
  (let [datasets-sub (rf/subscribe [::datasets/items])]
    (r/create-class
     {:component-did-mount #(rf/dispatch [::initialize])
      :reagent-render (fn []
                        [internal-view @datasets-sub])})))
