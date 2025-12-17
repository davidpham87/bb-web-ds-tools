(ns bb-web-ds-tools.views.datasets
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.portal :as portal :refer [portal-frame portal-panel]]
            [bb-web-ds-tools.events.settings :as settings-events]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.utils.dataset-processing :as dp]
            [bb-web-ds-tools.workspaces.persistence :as wp]))

;; --- Utilities ---

(defn deep-merge
  "Recursively merges maps.

  Args:
    maps (rest): Maps to merge.

  Returns:
    map: The merged map."
  [& maps]
  (if (every? map? maps)
    (apply merge-with deep-merge maps)
    (last maps)))

(defn download-file
  "Triggers a file download in the browser.

  Args:
    content (string): The file content.
    filename (string): The filename to save as.
    mime-type (string): The MIME type of the file."
  [content filename mime-type]
  (let [blob (js/Blob. #js [content] #js {:type mime-type})
        url (js/URL.createObjectURL blob)
        a (js/document.createElement "a")]
    (set! (.-href a) url)
    (set! (.-download a) filename)
    (js/document.body.appendChild a)
    (.click a)
    (js/document.body.removeChild a)
    (js/URL.revokeObjectURL url)))

;; --- State Management ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (-> db
       (update-in [:user-input :datasets] #(deep-merge % {:items {}
                                                          :new-dataset-state {:name "New Dataset" :text "" :format :csv :structure :columnar :override-norm? false}}))
       (assoc ::datasets {:active-dataset-id :new}))))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input]
   (get user-input :datasets)))

(rf/reg-sub
 ::component-root
 (fn [db]
   (::datasets db)))

(rf/reg-sub
 ::items
 :<- [::user-input-root]
 (fn [root]
   (:items root)))

(rf/reg-sub
 ::active-dataset-id
 :<- [::component-root]
 (fn [root]
   (:active-dataset-id root)))

(rf/reg-sub
 ::new-dataset-state
 :<- [::user-input-root]
 (fn [root]
   (:new-dataset-state root)))

(rf/reg-sub
 ::active-dataset
 :<- [::items]
 :<- [::active-dataset-id]
 (fn [[items id]]
   (get items id)))

(rf/reg-sub
 ::dataset-list-state
 :<- [::items]
 :<- [::active-dataset-id]
 (fn [[items active-id] _]
   {:items items
    :active-id active-id}))

(rf/reg-sub
 ::panel-state
 :<- [::active-dataset-id]
 :<- [::active-dataset]
 (fn [[active-id active-dataset] _]
   {:active-id active-id
    :active-dataset active-dataset}))

(rf/reg-sub
 ::vega-datasets-list
 :<- [::component-root]
 (fn [root]
   (:vega-datasets-list root)))

(rf/reg-sub
 ::loading-vega-list?
 :<- [::component-root]
 (fn [root]
   (:loading-vega-list? root)))

(rf/reg-sub
 ::loading-vega-dataset?
 :<- [::component-root]
 (fn [root]
   (:loading-vega-dataset? root)))

(rf/reg-event-db
 ::set-active-dataset-id
 (fn [db [_ id]]
   (assoc-in db [::datasets :active-dataset-id] id)))

(rf/reg-event-db
 ::update-new-dataset-state
 (fn [db [_ k v]]
   (assoc-in db [:user-input :datasets :new-dataset-state k] v)))

(rf/reg-event-db
 ::add-dataset
 (fn [db [_ {:keys [name data norm-config]}]]
   (let [id (str (random-uuid))
         valid-data (cond
                      (map? data) [data]
                      (seq data) (if (map? (first data))
                                   data
                                   (mapv (fn [row] {:value row}) data))
                      :else [])
         ;; Apply normalization
         normalized-data (if norm-config
                           (mapv (fn [row]
                                   (reduce-kv (fn [m k v]
                                                (assoc m (dp/normalize-column-name k norm-config) v))
                                              {}
                                              row))
                                 valid-data)
                           valid-data)
         data-with-ids (mapv #(assoc % :_uuid (str (random-uuid))) normalized-data)
         columns (if (seq normalized-data)
                   (keys (first normalized-data))
                   [])]
     (-> db
         (assoc-in [:user-input :datasets :items id]
                   {:id id
                    :name (or name "Untitled Dataset")
                    :data data-with-ids
                    :columns columns
                    :view-state {:page 0 :rows-per-page 10 :filters {} :hidden-columns {} :mode :table}})
         (assoc-in [::datasets :active-dataset-id] id)))))

(rf/reg-event-db
 ::delete-dataset
 (fn [db [_ id]]
   (-> db
       (update-in [:user-input :datasets :items] dissoc id)
       (assoc-in [::datasets :active-dataset-id] :new))))

(rf/reg-event-db
 ::update-dataset-name
 (fn [db [_ id name]]
   (assoc-in db [:user-input :datasets :items id :name] name)))

(rf/reg-event-db
 ::patch-datasets
 (fn [db [_ patch]]
   (update-in db [:user-input :datasets :items] merge patch)))

(rf/reg-event-db
 ::patch-datasets-from-r
 (fn [db [_ r-datasets]]
   (let [current-items (get-in db [:user-input :datasets :items])
         ;; Create a map of name -> id for existing items to preserve IDs
         name-to-id (reduce (fn [acc [id item]] (assoc acc (:name item) id)) {} current-items)

         updates (reduce (fn [acc [ds-name data]]
                           (let [existing-id (get name-to-id ds-name)
                                 id (or existing-id (str (random-uuid)))
                                 ;; Data from R is typically columnar (named list/map of arrays) if it was a data frame.
                                 ;; Or it might be row-maps if we just bound what we sent.
                                 ;; But user might have modified it.
                                 ;; If it's a map (columnar), normalize to row-maps.
                                 normalized-data (cond
                                                   (map? data) (dp/normalize-columnar data)
                                                   (sequential? data) (vec data)
                                                   :else [])
                                 ;; Ensure UUIDs
                                 data-with-ids (mapv #(if (:_uuid %) % (assoc % :_uuid (str (random-uuid)))) normalized-data)
                                 columns (if (seq data-with-ids) (keys (first data-with-ids)) [])]
                             (assoc acc id {:id id
                                            :name ds-name
                                            :data data-with-ids
                                            :columns columns
                                            ;; Preserve view state if exists, else default
                                            :view-state (get-in current-items [id :view-state]
                                                                {:page 0 :rows-per-page 10 :filters {} :hidden-columns {} :mode :table})})))
                         {}
                         r-datasets)]
     (update-in db [:user-input :datasets :items] merge updates))))

(rf/reg-event-db
 ::update-cell
 (fn [db [_ dataset-id row-uuid col-key value]]
   (update-in db [:user-input :datasets :items dataset-id :data]
              (fn [data]
                (mapv (fn [row]
                        (if (= (:_uuid row) row-uuid)
                          (assoc row col-key value)
                          row))
                      data)))))

(rf/reg-event-db
 ::update-view-state
 (fn [db [_ id key value]]
   (assoc-in db [:user-input :datasets :items id :view-state key] value)))

(rf/reg-event-fx
 ::fetch-vega-datasets
 (fn [{:keys [db]} _]
   (-> (js/fetch "https://cdn.jsdelivr.net/npm/vega-datasets/data/")
       (.then #(.text %))
       (.then #(rf/dispatch [::receive-vega-datasets %]))
       (.catch #(js/console.error "Failed to fetch vega datasets list" %)))
   {:db (assoc-in db [::datasets :loading-vega-list?] true)}))

(rf/reg-event-db
 ::receive-vega-datasets
 (fn [db [_ html-content]]
   (let [parser (new js/DOMParser)
         doc (.parseFromString parser html-content "text/html")
         links (array-seq (.querySelectorAll doc "a"))
         filenames (->> links
                        (map #(.-innerText %))
                        (filter #(re-find #"\.(json|csv|tsv|md)$" %))
                        (sort)
                        (distinct))]
     (-> db
         (assoc-in [::datasets :vega-datasets-list] filenames)
         (assoc-in [::datasets :loading-vega-list?] false)))))

(rf/reg-event-fx
 ::fetch-vega-dataset
 (fn [{:keys [db]} [_ filename]]
   (let [url (str "https://cdn.jsdelivr.net/npm/vega-datasets@3/data/" filename)]
     (-> (js/fetch url)
         (.then #(.text %))
         (.then #(rf/dispatch [::receive-vega-dataset-content filename %]))
         (.catch #(js/console.error "Failed to fetch vega dataset" %)))
     {:db (assoc-in db [::datasets :loading-vega-dataset?] true)})))

(rf/reg-event-db
 ::receive-vega-dataset-content
 (fn [db [_ filename content]]
   (let [extension (last (str/split filename #"\."))
         format (case extension
                  "json" :json
                  "csv" :csv
                  "tsv" :tsv
                  "md" :markdown
                  :csv)]
     (-> db
         (assoc-in [:user-input :datasets :new-dataset-state :text] content)
         (assoc-in [:user-input :datasets :new-dataset-state :name] filename)
         (assoc-in [:user-input :datasets :new-dataset-state :format] format)
         (assoc-in [:user-input :datasets :new-dataset-state :structure]
                   (if (#{:csv :tsv :markdown} format) :columnar :row-maps))
         (assoc-in [::datasets :loading-vega-dataset?] false)))))

;; --- Helper Components ---

(defn column-toggle-dropdown
  "Renders a dropdown menu to toggle column visibility.

  Args:
    id (string): The dataset ID.
    columns (seq): List of all columns.
    hidden-columns (set): Set of hidden columns.

  Returns:
    vector: A hiccup vector."
  [id columns hidden-columns]
  [:div {:class "relative group"}
   [:button {:class (str t/bg-input " " t/text-primary " px-4 py-2 rounded border " t/border-default)} "Select Columns"]
   [:div {:class (str "absolute hidden group-hover:block " t/bg-input " border " t/border-default " p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto")}
    (for [col columns]
      [:div {:key col :class (str "flex items-center space-x-2 p-1 " t/bg-item-hover)}
       [c/input {:type "checkbox"
                 :class "w-auto"
                 :checked (not (contains? hidden-columns col))
                 :on-change #(if (contains? hidden-columns col)
                               (rf/dispatch [::update-view-state id :hidden-columns (disj hidden-columns col)])
                               (rf/dispatch [::update-view-state id :hidden-columns (conj hidden-columns col)]))}]
       [:span {:class t/text-primary} (name col)]])]])

;; --- UI Components ---

(defn importer-view
  "Renders the dataset importer view.

  Returns:
    vector: A hiccup vector."
  []
  (let [state (rf/subscribe [::new-dataset-state])
        default-norm-config (rf/subscribe [::settings-events/column-normalizer])
        vega-list (rf/subscribe [::vega-datasets-list])
        loading-list? (rf/subscribe [::loading-vega-list?])
        loading-dataset? (rf/subscribe [::loading-vega-dataset?])]
    (fn []
      (let [{:keys [text structure override-norm? norm-case norm-output] fmt :format name-val :name} @state
            structure (or structure :columnar)
            dataset-name (or name-val "New Dataset")

            norm-config (if override-norm?
                          {:case (or norm-case (:case @default-norm-config))
                           :output (or norm-output (:output @default-norm-config))}
                          @default-norm-config)

            set-state (fn [k v] (rf/dispatch [::update-new-dataset-state k v]))

            supported-structures (cond
                                   (= fmt :text) #{:lines :raw}
                                   (contains? #{:csv :tsv :markdown} fmt) #{:columnar}
                                   (contains? #{:json :edn :yaml} fmt) #{:columnar :row-maps :row-arrays :tree}
                                   :else #{:columnar :row-maps :row-arrays})

            struct-labels {:columnar "Columnar"
                           :row-maps "Row (Maps)"
                           :row-arrays "Array (Arrays)"
                           :tree "Tree (Raw)"
                           :lines "Lines"
                           :raw "Raw Text"}]

        (when (and (nil? @vega-list) (not @loading-list?))
          (rf/dispatch [::fetch-vega-datasets]))

        [l/flex-col {:class "h-full space-y-4 p-4"}
         [l/flex-row {:class "justify-between items-center"}
          [:div {:class "flex-grow"}
           [c/section-header "Create New Dataset"
            [c/help-button
             {:href (nav/get-wiki-url :datasets)
              :title "Help: Datasets"
              :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]]

          [l/flex-row {:class "space-x-4 items-center"}
           ;; Vega Dataset Selector
           [l/flex-row {:class "items-center space-x-2"}
            (if @loading-list?
              [:span {:class "text-sm text-gray-500"} "Loading datasets..."]
              [:select {:class (str "text-sm border rounded p-1 max-w-[150px] " t/bg-input " " t/text-primary " " t/border-default)
                        :value ""
                        :on-change #(when (not-empty (.. % -target -value))
                                      (rf/dispatch [::fetch-vega-dataset (.. % -target -value)]))}
               [:option {:value ""} "Select Example Data..."]
               (for [ds @vega-list]
                 [:option {:key ds :value ds} ds])])]

           [l/flex-row {:class "space-x-2"}
            (for [f [:csv :tsv :json :edn :yaml :markdown :text]]
              [c/button {:size :xs
                         :key f
                         :class (if (= fmt f) (str t/bg-button-primary " text-white") "")
                         :on-click #(do (set-state :format f)
                                        (cond
                                          (= f :text) (set-state :structure :lines)
                                          (#{:csv :tsv :markdown} f) (set-state :structure :columnar)
                                          (#{:json :edn :yaml} f) (set-state :structure :row-maps)))}
               (if (= f :markdown) "MD" (str/upper-case (name f)))])]]]

         [c/input {:value dataset-name
                   :placeholder "Dataset Name"
                   :on-change #(set-state :name (.. % -target -value))}]

         [l/flex-row {:class "items-center space-x-4 flex-wrap gap-y-2"}
          [l/flex-row {:class "items-baseline space-x-2"}
           [:span {:class (str "text-sm " t/text-primary)} "Structure:"]
           (for [s [:columnar :row-maps :row-arrays :tree :lines :raw]]
             [c/button {:size :xs
                        :key s
                        :disabled (not (contains? supported-structures s))
                        :class (if (= structure s)
                                 (str t/bg-button-primary " text-white")
                                 (if (not (contains? supported-structures s)) "hidden" ""))
                        :on-click #(set-state :structure s)}
              (get struct-labels s)])]

          (when (= fmt :text)
            [:div {:class "text-xs text-gray-400 p-2 bg-black/10 rounded space-y-1"}
             [:p "Work directly on text files. Load as 'Lines' (split by newline) or 'Raw' (single text block)."]
             [:p {:class "font-mono"} ";; Example: Slurp (simulated via raw text)"]
             [:p {:class "font-mono"} "(def content (-> @user/datasets :ds-id :data first :text))"]
             [:p {:class "font-mono"} ";; Example: Regex Match"]
             [:p {:class "font-mono"} "(re-seq #\"[0-9]+\" content)"]])

          [l/flex-row {:class (str "space-x-2 text-sm " t/text-primary " items-center")}
           [c/button-info {:on-click #(set-state :text (dp/example-data fmt structure))}
            "Load Local Example"]
           (when @loading-dataset?
             [:span {:class "text-xs animate-pulse text-yellow-500"} "Fetching..."])]

          [:div {:class "flex-grow"}]

          [l/flex-row {:class "items-center gap-2"}
           [:div {:class (str "text-xs " t/text-secondary)}
            "CLI: " [:code {:class "bg-black/20 p-1 rounded"} "bb -x bb-web-ds-tools.cli.datasets/convert"]]
           [c/button {:size :xs
                      :class (str t/bg-button-primary " " t/bg-button-primary-hover " text-white px-4")
                      :on-click #(let [parsed (dp/parse-dataset fmt structure text)]
                                   (rf/dispatch [::add-dataset {:name dataset-name :data parsed :norm-config norm-config}]))}
            "Create"]]]

         ;; Normalization Settings
         [c/card {:class "p-2 space-y-2"}
          [l/flex-row {:class "items-center space-x-2 mb-2"}
           [c/input {:type "checkbox"
                     :class "w-auto"
                     :checked override-norm?
                     :on-change #(set-state :override-norm? (not override-norm?))}]
           [:span {:class "text-sm font-bold"} "Override Column Normalization"]]

          (when override-norm?
            [l/flex-row {:class "items-center space-x-4"}
             [:div
              [:span {:class "text-xs block mb-1 text-gray-400"} "Case"]
              [:select {:class (str "text-sm border rounded p-1 " t/bg-input " " t/text-primary " " t/border-default)
                        :value (name (:case norm-config))
                        :on-change #(set-state :norm-case (keyword (.. % -target -value)))}
               (for [c [:snake_case :CamelCase :kebab-case]]
                 [:option {:key c :value (name c)} (name c)])]]
             [:div
              [:span {:class "text-xs block mb-1 text-gray-400"} "Output"]
              [:select {:class (str "text-sm border rounded p-1 " t/bg-input " " t/text-primary " " t/border-default)
                        :value (name (:output norm-config))
                        :on-change #(set-state :norm-output (keyword (.. % -target -value)))}
               (for [o [:string :keyword :symbol]]
                 [:option {:key o :value (name o)} (name o)])]]])]

         [:div {:class (str "flex-grow " t/bg-input " rounded overflow-hidden shadow-inner border " t/border-default)}
          [editor/monaco-editor
           {:value text
            :language (case fmt
                        :json "json"
                        :edn "clojure"
                        :markdown "markdown"
                        :yaml "yaml"
                        "plaintext")
            :on-change [::update-new-dataset-state :text]}]]]))))

(defn data-row
  "Renders a single data row."
  [id row visible-columns]
  (let [row-uuid (:_uuid row)]
    [c/tr {:key row-uuid}
     (for [col visible-columns]
       [c/td {:key col}
        [c/input {:class (str "bg-transparent focus:" t/bg-input " focus:ring-1 " t/ring-focus
                              " rounded px-1 outline-none border-0")
                  :value (get row col "")
                  :on-change #(rf/dispatch [::update-cell id row-uuid col (.. % -target -value)])}]])]))

(defn data-table
  "Renders the interactive data table for a dataset.

  Args:
    dataset (map): The dataset map containing :data, :columns, etc.

  Returns:
    vector: A hiccup vector."
  [dataset]
  (let [save-modal-open? (r/atom false)
        new-dataset-name (r/atom (str (:name dataset) " (filtered)"))]
    (fn [dataset]
      (let [{:keys [id data columns view-state]} dataset
            {:keys [page rows-per-page filters hidden-columns sort-col sort-dir]} view-state
            {:keys [page-data total-rows start-idx end-idx visible-columns filtered-data]}
            (dp/process-table-data data (assoc view-state :columns columns))]

        [l/flex-col {:class "space-y-4 p-4"}
         ;; Save Filtered Modal
         (when @save-modal-open?
           [:div {:class "fixed inset-0 z-50 flex items-center justify-center bg-black/50"}
            [c/card {:class "p-6 space-y-4 w-96 shadow-xl border border-gray-600"}
             [:h3 {:class "text-lg font-bold"} "Save Filtered Data"]
             [:div
              [:label {:class "block text-sm font-medium mb-1"} "New Dataset Name"]
              [c/input {:value @new-dataset-name
                        :auto-focus true
                        :on-change #(reset! new-dataset-name (.. % -target -value))
                        :on-key-down #(when (= "Enter" (.-key %))
                                        (rf/dispatch [::add-dataset {:name @new-dataset-name :data filtered-data}])
                                        (reset! save-modal-open? false))}]]
             [l/flex-row {:class "justify-end space-x-2"}
              [c/button {:class "bg-gray-600 hover:bg-gray-500 text-white"
                         :on-click #(reset! save-modal-open? false)}
               "Cancel"]
              [c/button {:class (str t/bg-button-primary " " t/bg-button-primary-hover " text-white")
                         :on-click #(do (rf/dispatch [::add-dataset {:name @new-dataset-name :data filtered-data}])
                                        (reset! save-modal-open? false))}
               "Save"]]]])

         ;; Toolbar
         [l/flex-row {:class (str "flex-wrap gap-4 items-end " t/bg-toolbar " p-2 rounded shadow-sm")}
          [:div
           [c/label "Rows"]
           [c/select {:class "py-1"
                      :value rows-per-page
                      :on-change #(rf/dispatch [::update-view-state id :rows-per-page (js/parseInt (.. % -target -value))])}
            [:option {:value 5} "5"]
            [:option {:value 10} "10"]
            [:option {:value 25} "25"]
            [:option {:value 50} "50"]]]
          [:div
           [c/label "Columns"]
           [column-toggle-dropdown id columns hidden-columns]]
          [:div {:class "flex-grow"}]
          [c/button {:size :xs
                     :class (if (seq filters) (str t/bg-button-primary " text-white") "opacity-50 cursor-not-allowed")
                     :disabled (empty? filters)
                     :title "Save current filtered results as a new dataset"
                     :on-click #(do (reset! new-dataset-name (str (:name dataset) " (filtered)"))
                                    (reset! save-modal-open? true))}
           "Save Filtered"]
          [:div {:class (str "text-sm " t/text-secondary)}
           (str (inc start-idx) "-" end-idx " of " total-rows)]
          [l/flex-row {:class "space-x-2"}
           [c/button {:size :xs
                      :on-click #(rf/dispatch [::update-view-state id :page (dec page)])
                      :disabled (zero? page)} "Prev"]
           [c/button {:size :xs
                      :on-click #(rf/dispatch [::update-view-state id :page (inc page)])
                      :disabled (>= end-idx total-rows)} "Next"]]]

         ;; Table
         [c/table-container {}
          [c/table {}
           [c/thead {}
            [c/tr {}
             (for [col visible-columns]
               [c/th {:key col
                      :class (str "cursor-pointer " t/bg-item-hover)
                      :on-click #(let [new-dir (if (and (= sort-col col) (= sort-dir :asc)) :desc :asc)]
                                   (rf/dispatch [::update-view-state id :sort-col col])
                                   (rf/dispatch [::update-view-state id :sort-dir new-dir]))}
                [:div {:class "flex items-center space-x-1"}
                 [:span (name col)]
                 (when (= sort-col col)
                   [:span {:class "text-[10px] transform translate-y-px"} (if (= sort-dir :asc) "▲" "▼")])]])]]
           [c/tbody {}
            ;; Filter Row
            [c/tr {}
             (for [col visible-columns]
               [c/td {:key (str "filter-" col) :class "px-3 py-1.5"}
                [c/input {:class "text-sm"
                          :placeholder (str "Filter " (name col) " (expr)")
                          :title "Enter a value or a Clojure expression (e.g. #(> % 10))"
                          :value (get filters col "")
                          :on-change #(rf/dispatch [::update-view-state id :filters (assoc filters col (.. % -target -value))])}]])]
            ;; Data Rows
            (for [row page-data]
              [data-row id row visible-columns])]]]]))))

(defn dataset-export-view
  "Renders the export/download view for a dataset."
  [dataset]
  (let [export-state (r/atom {:fmt :csv :struct :columnar})]
    (fn [dataset]
      (let [{:keys [fmt struct]} @export-state
            supported-structures (cond
                                   (contains? #{:csv :tsv :markdown} fmt) #{:columnar}
                                   (contains? #{:json :edn :yaml} fmt) #{:columnar :row-maps :row-arrays :tree}
                                   :else #{:columnar})
            preview (try (dp/convert-data (:data dataset) fmt struct) (catch :default e (str "Error: " e)))
            filename (str (:name dataset) "." (name fmt))]
        [l/flex-col {:class "h-full space-y-4 p-4"}
         [c/section-header "Export / Download"]

         ;; Format selection
         [:div {:class "flex flex-row space-x-2"}
          (doall (for [f [:csv :tsv :json :edn :yaml :markdown]]
                   ^{:key f}
                   [c/button {:size :xs
                              :class (if (= fmt f) (str t/bg-button-primary " text-white") "")
                              :on-click #(do (swap! export-state assoc :fmt f)
                                             (cond
                                               (#{:csv :tsv :markdown} f) (swap! export-state assoc :struct :columnar)
                                               (#{:json :edn :yaml} f) (swap! export-state assoc :struct :row-maps)))}
                    (if (= f :markdown) "MD" (str/upper-case (name f)))]))]

         ;; Structure selection
         [:div {:class "flex flex-row items-baseline space-x-2"}
          [:span {:class (str "text-sm " t/text-primary)} "Structure:"]
          (doall (for [s [:columnar :row-maps :row-arrays :tree]]
                   ^{:key s}
                   [c/button {:size :xs
                              :disabled (not (contains? supported-structures s))
                              :class (if (= struct s)
                                       (str t/bg-button-primary " text-white")
                                       (if (not (contains? supported-structures s)) "hidden" ""))
                              :on-click #(swap! export-state assoc :struct s)}
                    (name s)]))]

         ;; Preview and Download
         [l/flex-row {:class "justify-between items-center"}
          [:span {:class "text-sm text-gray-500"} (str "Preview (" filename ")")]
          [c/button {:class (str t/bg-button-primary " text-white")
                     :on-click #(download-file preview filename (case fmt
                                                                  :json "application/json"
                                                                  :csv "text/csv"
                                                                  :tsv "text/tab-separated-values"
                                                                  :yaml "text/yaml"
                                                                  :edn "application/edn"
                                                                  :markdown "text/markdown"
                                                                  "text/plain"))}
           "Download"]]

         [:div {:class (str "flex-grow " t/bg-input " rounded overflow-hidden shadow-inner border " t/border-default)}
          [editor/monaco-editor
           {:value preview
            :language (case fmt
                        :json "json"
                        :edn "clojure"
                        :markdown "markdown"
                        :yaml "yaml"
                        (:csv :tsv) "csv"
                        "plaintext")
            :readOnly true}]]]))))


(defn dataset-view
  "Renders the main view for a single dataset (table or portal).

  Args:
    dataset (map): The dataset map.

  Returns:
    vector: A hiccup vector."
  [dataset]
  (let [view-mode (get-in dataset [:view-state :mode] :table)]
    [l/flex-col {:class "h-full"}
     [l/flex-row {:class (str "justify-between " t/bg-toolbar " p-2 rounded shadow-sm m-4 mt-0 mb-0")}
      [l/flex-row {:class "items-baseline space-x-4"}
       [:input {:class (str "text-2xl font-bold bg-transparent " t/text-accent " border-b border-transparent "
                            t/border-focus-accent " " t/outline-none)
                :value (:name dataset)
                :on-change #(rf/dispatch [::update-dataset-name (:id dataset) (.. % -target -value)])}]
       [:span {:class (str t/text-secondary " text-sm")} (str (count (:data dataset)) " rows")]]

      [l/flex-row {:class "space-x-2 items-center"}
       ;; View Toggles
       [:div {:class "flex rounded bg-black/20 p-1 space-x-1"}
        [c/button {:size :xs
                   :class (if (= view-mode :table) (str t/bg-button-primary " text-white") "opacity-50 hover:opacity-100")
                   :on-click #(rf/dispatch [::update-view-state (:id dataset) :mode :table])}
         "Table"]
        [c/button {:size :xs
                   :class (if (= view-mode :portal) (str t/bg-button-primary " text-white") "opacity-50 hover:opacity-100")
                   :on-click #(rf/dispatch [::update-view-state (:id dataset) :mode :portal])}
         "Portal"]
        [c/button {:size :xs
                   :class (if (= view-mode :export) (str t/bg-button-primary " text-white") "opacity-50 hover:opacity-100")
                   :on-click #(rf/dispatch [::update-view-state (:id dataset) :mode :export])}
         "Export"]]

       [c/button {:class (str t/bg-button-danger " " t/bg-button-danger-hover " " t/text-button-primary)
                  :on-click #(rf/dispatch [::delete-dataset (:id dataset)])}
        [c/dustbin-icon {:class "w-5 h-5"}]]]]

     (case view-mode
       :portal [portal-panel dataset]
       :export [dataset-export-view dataset]
       [data-table dataset])]))

(defn dataset-list-item
  "Renders a single dataset item in the sidebar list.

  Args:
    id (string): The dataset ID.
    ds (map): The dataset map.
    active-id (string): The currently active dataset ID.

  Returns:
    vector: A hiccup vector."
  [id ds active-id]
  (let [editing? (r/atom false)
        temp-name (r/atom (:name ds))]
    (fn [id ds active-id]
      (let [active? (= id active-id)]
        (if @editing?
          [:div {:class (str "p-2 rounded " t/bg-input " border " t/border-focus " flex items-center space-x-2")}
           [c/input {:class "flex-grow h-6 text-sm py-0"
                     :value @temp-name
                     :auto-focus true
                     :on-change #(reset! temp-name (.. % -target -value))
                     :on-key-down #(case (.-key %)
                                     "Enter" (do (rf/dispatch [::update-dataset-name id @temp-name])
                                                 (reset! editing? false))
                                     "Escape" (do (reset! temp-name (:name ds))
                                                  (reset! editing? false))
                                     nil)}]
           [c/button {:size :xs
                      :on-click #(do (rf/dispatch [::update-dataset-name id @temp-name])
                                     (reset! editing? false))} "Save"]]
          [:div {:class (str "group flex items-center justify-between p-3 rounded cursor-pointer transition-colors text-sm font-medium "
                             (if active?
                               (str t/bg-card " " t/text-accent " shadow-sm")
                               (str t/text-primary " " t/bg-item-hover)))
                 :on-click #(rf/dispatch [::set-active-dataset-id id])}
           [:span {:class "truncate flex-grow"} (:name ds)]
           [:div {:class (str "flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity "
                              (when active? "opacity-100"))}
            ;; Rename button
            [:button {:class (str "p-1 rounded hover:" t/bg-button-hover " text-xs")
                      :title "Rename"
                      :on-click (fn [e]
                                  (.stopPropagation e)
                                  (reset! temp-name (:name ds))
                                  (reset! editing? true))}
             "✎"]
            ;; Delete button
            [:button {:class (str "p-1 rounded hover:" t/bg-button-danger-hover " hover:text-white text-xs")
                      :title "Delete"
                      :on-click (fn [e]
                                  (.stopPropagation e)
                                  (when (js/confirm (str "Delete dataset '" (:name ds) "'?"))
                                    (rf/dispatch [::delete-dataset id])))}
             [c/dustbin-icon]]]])))))

(defn dataset-list
  "Renders the sidebar list of datasets.

  Returns:
    vector: A hiccup vector."
  []
  (let [state-sub (rf/subscribe [::dataset-list-state])]
    (fn []
      (let [{:keys [items active-id]} @state-sub]
        [:div {:class (str "h-full w-full " t/bg-sidebar " flex flex-col p-4 border-r border-[#3f3f3f]")}
         [:div {:class (str "pb-4 border-b " t/border-main " flex flex-col gap-2")}
          [c/section-header "Datasets"
           [c/help-button
            {:href (nav/get-wiki-url :datasets)
             :title "Help: Datasets"
             :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]

          ;; Persistence Controls
          [l/flex-row {:class "gap-2"}
           [c/button {:size :xs
                      :class (str "flex-1 " t/bg-button " " t/bg-button-hover)
                      :title "Save all datasets to browser storage"
                      :on-click #(rf/dispatch [::wp/save-datasets])}
            "Save All"]
           [c/button {:size :xs
                      :class (str "flex-1 " t/bg-button " " t/bg-button-hover)
                      :title "Load datasets from browser storage"
                      :on-click #(rf/dispatch [::wp/load-datasets])}
            "Load All"]]

          [c/button {:size :xs
                     :class (str "w-full " t/bg-button " " t/bg-button-hover " justify-center")
                     :on-click #(rf/dispatch [::set-active-dataset-id :new])}
           "+ New Dataset"]]
         [:div {:class "flex-grow overflow-y-auto pt-4 space-y-1"}
          (if (seq items)
            (for [[id ds] items]
              ^{:key id} [dataset-list-item id ds active-id])
            [:div {:class (str "text-sm " t/text-muted " italic p-2")} "No datasets"])]]))))

(defn panel-render
  "Renders the datasets panel content (split view).

  Returns:
    vector: A hiccup vector."
  []
  (let [state-sub (rf/subscribe [::panel-state])]
    (fn []
      (let [{:keys [active-id active-dataset]} @state-sub]
        [l/split-view {:ratio :1-3}
         [dataset-list]
         (if (= active-id :new)
           [importer-view]
           (if active-dataset
             [dataset-view active-dataset]
             [:div {:class (str "text-center " t/text-muted " mt-20")} "Select a dataset."]))]))))

(defn panel
  "Main component for the Datasets view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  [l/create-panel {:display-name "datasets-panel"
                   :init-event [::initialize]
                   :render-fn panel-render}])
