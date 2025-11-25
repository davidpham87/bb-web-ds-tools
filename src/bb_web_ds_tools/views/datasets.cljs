(ns bb-web-ds-tools.views.datasets
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            ["papaparse" :as Papa]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [malli.provider :as mp]))

;; --- Parsing Logic ---

(defmulti parse-dataset (fn [format _text] format))

(defmethod parse-dataset :csv [_ text]
  (let [res (.parse Papa text #js {:header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset :tsv [_ text]
  (let [res (.parse Papa text #js {:delimiter "\t" :header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defmethod parse-dataset :json [_ text]
  (try
    (let [json (js/JSON.parse text)
          clj-json (js->clj json :keywordize-keys true)]
      (if (and (vector? clj-json) (vector? (first clj-json)))
        (let [header (map keyword (first clj-json))
              rows (rest clj-json)]
          (mapv (fn [row] (zipmap header row)) rows))
        clj-json))
    (catch js/Error e
      (js/console.error "JSON Parse Error" e)
      [])))

(defmethod parse-dataset :default [_ _]
  [])

;; --- Examples ---

(defn example-data [fmt]
  (case fmt
    :csv "col1,col2,col3,col4\n1,2,3,4\n5,6,7,8\n9,10,11,12"
    :tsv "col1\tcol2\tcol3\tcol4\n1\t2\t3\t4\n5\t6\t7\t8\n9\t10\t11\t12"
    :json-maps "[\n  {\"col1\": 1, \"col2\": 2, \"col3\": 3, \"col4\": 4},\n  {\"col1\": 5, \"col2\": 6, \"col3\": 7, \"col4\": 8},\n  {\"col1\": 9, \"col2\": 10, \"col3\": 11, \"col4\": 12}\n]"
    :json-arrays "[\n  [\"col1\", \"col2\", \"col3\", \"col4\"],\n  [1, 2, 3, 4],\n  [5, 6, 7, 8],\n  [9, 10, 11, 12]\n]"
    ""))

;; --- State Management ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (update-in db [:user-input :datasets] merge
              {:active-dataset-id :new ;; Default to new
               :items {}
               :new-dataset-state {:text "" :format :csv}})))

(rf/reg-sub ::root (fn [db] (get-in db [:user-input :datasets])))
(rf/reg-sub ::items :<- [::root] (fn [root] (:items root)))
(rf/reg-sub ::active-dataset-id :<- [::root] (fn [root] (:active-dataset-id root)))
(rf/reg-sub ::new-dataset-state :<- [::root] (fn [root] (:new-dataset-state root)))

(rf/reg-sub
 ::active-dataset
 :<- [::items]
 :<- [::active-dataset-id]
 (fn [[items id]]
   (get items id)))

(rf/reg-event-db
 ::set-active-dataset-id
 (fn [db [_ id]]
   (assoc-in db [:user-input :datasets :active-dataset-id] id)))

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
         (assoc-in [:user-input :datasets :active-dataset-id] id)))))

(rf/reg-event-db
 ::delete-dataset
 (fn [db [_ id]]
   (-> db
       (update-in [:user-input :datasets :items] dissoc id)
       (assoc-in [:user-input :datasets :active-dataset-id] :new))))

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

;; --- UI Components ---

(defn importer-view []
  (let [state @(rf/subscribe [::new-dataset-state])
        {:keys [text format]} state]
    [l/flex-col {:class "h-full space-y-4 p-4"}
     [l/flex-row {:class "justify-between"}
      [:h3 {:class (str "text-xl font-bold " t/text-accent)} "Create New Dataset"]
      [l/flex-row {:class "space-x-2"}
       [c/button-xs {:class (if (= format :csv) (str t/bg-button-primary " text-white") "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :csv])} "CSV"]
       [c/button-xs {:class (if (= format :tsv) (str t/bg-button-primary " text-white") "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :tsv])} "TSV"]
       [c/button-xs {:class (if (= format :json) (str t/bg-button-primary " text-white") "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :json])} "JSON"]]]

     [l/flex-row {:class (str "space-x-2 text-sm " t/text-primary)}
      [:span "Load Example:"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :csv])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :csv)]))} "CSV"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :tsv])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :tsv)]))} "TSV"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :json])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :json-maps)]))} "JSON Maps"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :json])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :json-arrays)]))} "JSON Arrays"]]

     [:div {:class (str "flex-grow " t/bg-input " rounded overflow-hidden shadow-inner border " t/border-default)}
      [editor/monaco-editor
       {:value text
        :language (case format :json "json" "plaintext")
        :on-change #(rf/dispatch [::update-new-dataset-state :text %])}]]

     [l/flex-row {:class "justify-end"}
      [c/button {:class (str t/bg-button-primary " " t/bg-button-primary-hover)
                 :on-click #(let [parsed (parse-dataset format text)]
                              (rf/dispatch [::add-dataset {:name (str "New " (name format)) :data parsed}]))}
       "Parse & Create Dataset"]]]))

(defn data-table [dataset]
  (let [{:keys [id data columns view-state]} dataset
        {:keys [page rows-per-page filters hidden-columns sort-col sort-dir]} view-state
        filtered-data (if (seq filters)
                        (filter (fn [row]
                                  (every? (fn [[k v]]
                                            (str/includes? (str/lower-case (str (get row k))) (str/lower-case v)))
                                          filters))
                                data)
                        data)
        sorted-data (if sort-col
                      (sort-by sort-col (if (= sort-dir :asc) compare #(compare %2 %1)) filtered-data)
                      filtered-data)
        total-rows (count sorted-data)
        start-idx (* page rows-per-page)
        end-idx (min (+ start-idx rows-per-page) total-rows)
        page-data (subvec (vec sorted-data) start-idx end-idx)
        visible-columns (remove hidden-columns columns)]

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
            [:span {:class t/text-primary} (name col)]])]]]
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
                [c/input {:class (str "bg-transparent focus:" t/bg-input " focus:ring-1 " t/ring-focus " rounded px-1 outline-none border-0")
                          :value (get row col "")
                          :on-change #(rf/dispatch [::update-cell id row-uuid col (.. % -target -value)])}]])]))]]]]))

(defn dataset-view [dataset]
  [l/flex-col {:class "h-full"}
   [l/flex-row {:class (str "justify-between " t/bg-toolbar " p-4 rounded shadow-sm m-4 mb-0")}
    [l/flex-row {:class "space-x-4"}
     [:input {:class (str "text-xl font-bold bg-transparent " t/text-accent " border-b border-transparent " t/border-focus-accent " " t/outline-none)
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
                             (if (= id active-id) (str t/bg-card " " t/text-accent " shadow-sm") (str t/text-primary " " t/bg-item-hover)))
                 :on-click #(rf/dispatch [::set-active-dataset-id id])}
           (:name ds)])
        [:div {:class (str "text-sm " t/text-muted " italic p-2")} "No datasets"])]]))

(defn panel []
  (rf/dispatch-sync [::initialize])
  (let [active-id @(rf/subscribe [::active-dataset-id])
        active-dataset @(rf/subscribe [::active-dataset])]
    [l/split-view {:ratio :1-2}
     [dataset-list]
     (if (= active-id :new)
       [importer-view]
       (if active-dataset
         [dataset-view active-dataset]
         [:div {:class (str "text-center " t/text-muted " mt-20")} "Select a dataset."]))]))
