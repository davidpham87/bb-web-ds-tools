(ns bb-web-ds-tools.views.datasets
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

;; --- Utilities ---

(defn deep-merge [& maps]
  (if (every? map? maps)
    (apply merge-with deep-merge maps)
    (last maps)))

;; --- State Management ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (-> db
       (update-in [:user-input :datasets] #(deep-merge % {:items {}
                                                          :new-dataset-state {:text "" :format :csv :structure :columnar}}))
       (assoc ::datasets {:active-dataset-id :new}))))

(rf/reg-sub ::user-input-root (fn [db] (get-in db [:user-input :datasets])))
(rf/reg-sub ::component-root (fn [db] (::datasets db)))
(rf/reg-sub ::items :<- [::user-input-root] (fn [root] (:items root)))
(rf/reg-sub ::active-dataset-id :<- [::component-root] (fn [root] (:active-dataset-id root)))
(rf/reg-sub ::new-dataset-state :<- [::user-input-root] (fn [root] (:new-dataset-state root)))

(rf/reg-sub
 ::active-dataset
 :<- [::items]
 :<- [::active-dataset-id]
 (fn [[items id]]
   (get items id)))

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
 (fn [db [_ {:keys [name data]}]]
   (let [id (str (random-uuid))
         valid-data (if (seq data)
                      (if (map? (first data))
                        data
                        (mapv (fn [row] {:value row}) data))
                      [])
         data-with-ids (mapv #(assoc % :_uuid (str (random-uuid))) valid-data)
         columns (if (seq valid-data)
                   (keys (first valid-data))
                   [])]
     (-> db
         (assoc-in [:user-input :datasets :items id]
                   {:id id
                    :name (or name "Untitled Dataset")
                    :data data-with-ids
                    :columns columns
                    :view-state {:page 0 :rows-per-page 10 :filters {} :hidden-columns #{}}})
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

;; --- Helper Components ---

(defn column-toggle-dropdown [id columns hidden-columns]
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

(defn importer-view []
  (let [state (rf/subscribe [::new-dataset-state])]
    (fn []
      (let [{:keys [text format structure]} @state
            structure (or structure :columnar)

            set-state (fn [k v] (rf/dispatch [::update-new-dataset-state k v]))

            supported-structures (if (contains? #{:csv :tsv} format)
                                   #{:columnar}
                                   #{:columnar :row-maps :row-arrays})

            struct-labels {:columnar "Columnar (Map of Arrays)"
                           :row-maps "Row (Array of Maps)"
                           :row-arrays "Array (Array of Arrays)"}]

        [l/flex-col {:class "h-full space-y-4 p-4"}
         [l/flex-row {:class "justify-between items-center"}
          [:h3 {:class (str "text-xl font-bold " t/text-accent)} "Create New Dataset"]
          [l/flex-row {:class "space-x-2"}
           (for [fmt [:csv :tsv :json :edn]]
             [c/button-xs {:key fmt
                           :class (if (= format fmt) (str t/bg-button-primary " text-white") "")
                           :on-click #(do (set-state :format fmt)
                                          (when (#{:csv :tsv} fmt)
                                            (set-state :structure :columnar)))}
              (str/upper-case (name fmt))])]]

         [l/flex-row {:class "items-center space-x-2"}
          [:span {:class (str "text-sm " t/text-primary)} "Structure:"]
          (for [s [:columnar :row-maps :row-arrays]]
            [c/button-xs {:key s
                          :disabled (not (contains? supported-structures s))
                          :class (if (= structure s)
                                   (str t/bg-button-primary " text-white")
                                   (if (not (contains? supported-structures s)) "opacity-50 cursor-not-allowed" ""))
                          :on-click #(set-state :structure s)}
             (get struct-labels s)])]

         [l/flex-row {:class (str "space-x-2 text-sm " t/text-primary " items-center")}
          [:span "Load Example:"]
          [c/button-xs {:on-click #(set-state :text (dp/example-data format structure))}
           "Load Example"]]

         [:div {:class (str "flex-grow " t/bg-input " rounded overflow-hidden shadow-inner border " t/border-default)}
          [editor/monaco-editor
           {:value text
            :language (case format
                        :json "json"
                        :edn "clojure"
                        "plaintext")
            :on-change [::update-new-dataset-state :text]}]]

         [l/flex-row {:class "justify-end"}
          [c/button {:class (str t/bg-button-primary " " t/bg-button-primary-hover)
                     :on-click #(let [parsed (dp/parse-dataset format structure text)]
                                  (rf/dispatch [::add-dataset {:name (str "New " (name format)) :data parsed}]))}
           "Parse & Create Dataset"]]]))))


(defn data-table [dataset]
  (let [{:keys [id data columns view-state]} dataset
        {:keys [page rows-per-page filters hidden-columns sort-col sort-dir]} view-state
        {:keys [page-data total-rows start-idx end-idx visible-columns]}
        (dp/process-table-data data (assoc view-state :columns columns))]

    [l/flex-col {:class "space-y-4 p-4"}
     ;; Toolbar
     [l/flex-row {:class (str "flex-wrap gap-4 items-end " t/bg-toolbar " p-4 rounded shadow-sm")}
      [:div
       [c/label "Rows"]
       [c/select {:value rows-per-page
                  :on-change #(rf/dispatch [::update-view-state id :rows-per-page (js/parseInt (.. % -target -value))])}
        [:option {:value 5} "5"]
        [:option {:value 10} "10"]
        [:option {:value 25} "25"]
        [:option {:value 50} "50"]]]
      [:div
       [c/label "Columns"]
       [column-toggle-dropdown id columns hidden-columns]]
      [:div {:class "flex-grow"}]
      [:div {:class (str "text-sm " t/text-secondary)}
       (str (inc start-idx) "-" end-idx " of " total-rows)]
      [l/flex-row {:class "space-x-2"}
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (dec page)])
                     :disabled (zero? page)} "Prev"]
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (inc page)])
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
               [:span (if (= sort-dir :asc) "▲" "▼")])]])]]
       [c/tbody {}
        ;; Filter Row
        [c/tr {}
         (for [col visible-columns]
           [c/td {:key (str "filter-" col) :class "px-6 py-2"}
            [c/input {:class "text-sm"
                      :placeholder (str "Filter " (name col))
                      :value (get filters col "")
                      :on-change #(rf/dispatch [::update-view-state id :filters (assoc filters col (.. % -target -value))])}]])]
        ;; Data Rows
        (for [row page-data]
          (let [row-uuid (:_uuid row)]
            [c/tr {:key row-uuid}
             (for [col visible-columns]
               [c/td {:key col}
                [c/input {:class (str "bg-transparent focus:" t/bg-input " focus:ring-1 " t/ring-focus
                                      " rounded px-1 outline-none border-0")
                          :value (get row col "")
                          :on-change #(rf/dispatch [::update-cell id row-uuid col (.. % -target -value)])}]])]))]]]]))

(defn dataset-view [dataset]
  [l/flex-col {:class "h-full"}
   [l/flex-row {:class (str "justify-between " t/bg-toolbar " p-4 rounded shadow-sm m-4 mb-0")}
    [l/flex-row {:class "space-x-4"}
     [:input {:class (str "text-xl font-bold bg-transparent " t/text-accent " border-b border-transparent "
                          t/border-focus-accent " " t/outline-none)
              :value (:name dataset)
              :on-change #(rf/dispatch [::update-dataset-name (:id dataset) (.. % -target -value)])}]
     [:span {:class (str t/text-secondary " text-sm")} (str (count (:data dataset)) " rows")]]
    [c/button {:class (str t/bg-button-danger " " t/bg-button-danger-hover " " t/text-button-primary)
               :on-click #(rf/dispatch [::delete-dataset (:id dataset)])}
     "Delete"]]
   [data-table dataset]])

(defn dataset-list []
  (let [items @(rf/subscribe [::items])
        active-id @(rf/subscribe [::active-dataset-id])]
    [:div {:class (str "h-full " t/bg-sidebar " flex flex-col")}
     [:div {:class (str "p-4 border-b " t/border-main)}
      [:h3 {:class (str "text-lg font-semibold " t/text-accent " mb-4")} "Datasets"]
      [c/button {:class (str "w-full " t/bg-button " " t/bg-button-hover)
                 :on-click #(rf/dispatch [::set-active-dataset-id :new])}
       "+ New Dataset"]]
     [:div {:class "flex-grow overflow-y-auto p-2 space-y-1"}
      (if (seq items)
        (for [[id ds] items]
          [:div {:key id
                 :class (str "p-3 rounded cursor-pointer transition-colors text-sm font-medium "
                             (if (= id active-id)
                               (str t/bg-card " " t/text-accent " shadow-sm")
                               (str t/text-primary " " t/bg-item-hover)))
                 :on-click #(rf/dispatch [::set-active-dataset-id id])}
           (:name ds)])
        [:div {:class (str "text-sm " t/text-muted " italic p-2")} "No datasets"])]]))

(defn panel-render []
  (let [active-id @(rf/subscribe [::active-dataset-id])
        active-dataset @(rf/subscribe [::active-dataset])]
    [l/split-view {:ratio :1-2}
     [dataset-list]
     (if (= active-id :new)
       [importer-view]
       (if active-dataset
         [dataset-view active-dataset]
         [:div {:class (str "text-center " t/text-muted " mt-20")} "Select a dataset."]))]))

(defn panel []
  (r/create-class
   {:display-name "datasets-panel"
    :component-did-mount #(rf/dispatch [::initialize])
    :reagent-render panel-render}))
