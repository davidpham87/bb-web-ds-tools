(ns bb-web-ds-tools.views.datasets
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            ["papaparse" :as Papa]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [malli.provider :as mp]))

;; --- Parsing Logic ---

(defn parse-csv [text]
  (let [res (.parse Papa text #js {:header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defn parse-tsv [text]
  (let [res (.parse Papa text #js {:delimiter "\t" :header true :dynamicTyping true :skipEmptyLines true})]
    (js->clj (.-data res) :keywordize-keys true)))

(defn parse-json [text]
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
    [:div {:class "flex flex-col h-full space-y-4"}
     [:div {:class "flex items-center justify-between"}
      [:h3 {:class "text-xl font-bold text-[#f0dfaf]"} "Create New Dataset"]
      [:div {:class "flex space-x-2"}
       [c/button-xs {:class (if (= format :csv) "bg-[#7f9f7f] text-white" "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :csv])} "CSV"]
       [c/button-xs {:class (if (= format :tsv) "bg-[#7f9f7f] text-white" "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :tsv])} "TSV"]
       [c/button-xs {:class (if (= format :json) "bg-[#7f9f7f] text-white" "")
                     :on-click #(rf/dispatch [::update-new-dataset-state :format :json])} "JSON"]]]

     [:div {:class "flex space-x-2 items-center text-sm text-[#dcdccc]"}
      [:span "Load Example:"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :csv])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :csv)]))} "CSV"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :tsv])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :tsv)]))} "TSV"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :json])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :json-maps)]))} "JSON Maps"]
      [c/button-xs {:on-click #(do (rf/dispatch [::update-new-dataset-state :format :json])
                                   (rf/dispatch [::update-new-dataset-state :text (example-data :json-arrays)]))} "JSON Arrays"]]

     [:div {:class "flex-grow bg-[#2f2f2f] rounded overflow-hidden shadow-inner border border-[#5f5f5f]"}
      [editor/monaco-editor
       {:value text
        :language (case format :json "json" "plaintext")
        :on-change #(rf/dispatch [::update-new-dataset-state :text %])}]]

     [:div {:class "flex justify-end"}
      [c/button {:class "bg-[#7f9f7f] hover:bg-[#8fb28f]"
                 :on-click #(let [parsed (case format
                                           :csv (parse-csv text)
                                           :tsv (parse-tsv text)
                                           :json (parse-json text))]
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

    [:div {:class "space-y-4"}
     ;; Toolbar
     [:div {:class "flex flex-wrap gap-4 items-end bg-[#2f2f2f] p-4 rounded shadow-sm"}
      [:div
       [c/label "Rows"]
       [:select {:class "bg-[#3f3f3f] text-[#dcdccc] p-2 rounded border border-[#5f5f5f]"
                 :value rows-per-page
                 :on-change #(rf/dispatch [::update-view-state id :rows-per-page (js/parseInt (.. % -target -value))])}
        [:option {:value 5} "5"]
        [:option {:value 10} "10"]
        [:option {:value 25} "25"]
        [:option {:value 50} "50"]]]
      [:div
       [c/label "Columns"]
       [:div {:class "relative group"}
        [:button {:class "bg-[#3f3f3f] text-[#dcdccc] px-4 py-2 rounded border border-[#5f5f5f]"} "Select Columns"]
        [:div {:class "absolute hidden group-hover:block bg-[#3f3f3f] border border-[#5f5f5f] p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"}
         (for [col columns]
           [:div {:key col :class "flex items-center space-x-2 p-1 hover:bg-[#4f4f4f]"}
            [:input {:type "checkbox"
                     :checked (not (contains? hidden-columns col))
                     :on-change #(if (contains? hidden-columns col)
                                   (rf/dispatch [::update-view-state id :hidden-columns (disj hidden-columns col)])
                                   (rf/dispatch [::update-view-state id :hidden-columns (conj hidden-columns col)]))}]
            [:span {:class "text-[#dcdccc]"} (name col)]])]]]
      [:div {:class "flex-grow"}]
      [:div {:class "text-sm text-[#9f9f9f]"}
       (str (inc start-idx) "-" end-idx " of " total-rows)]
      [:div {:class "flex space-x-2"}
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (dec page)])
                     :disabled (zero? page)} "Prev"]
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (inc page)])
                     :disabled (>= end-idx total-rows)} "Next"]]]

     ;; Table
     [:div {:class "overflow-x-auto bg-[#2f2f2f] rounded shadow-md border border-[#4f4f4f]"}
      [:table {:class "min-w-full divide-y divide-[#4f4f4f]"}
       [:thead {:class "bg-[#3f3f3f]"}
        [:tr
         (for [col visible-columns]
           [:th {:key col
                 :class "px-6 py-3 text-left text-xs font-medium text-[#f0dfaf] uppercase tracking-wider cursor-pointer hover:bg-[#4f4f4f]"
                 :on-click #(let [new-dir (if (and (= sort-col col) (= sort-dir :asc)) :desc :asc)]
                              (rf/dispatch [::update-view-state id :sort-col col])
                              (rf/dispatch [::update-view-state id :sort-dir new-dir]))}
            [:div {:class "flex items-center space-x-1"}
             [:span (name col)]
             (when (= sort-col col)
               [:span (if (= sort-dir :asc) "▲" "▼")])]])]]
       [:tbody {:class "bg-[#2f2f2f] divide-y divide-[#4f4f4f]"}
        ;; Filter Row
        [:tr
         (for [col visible-columns]
           [:td {:key (str "filter-" col) :class "px-6 py-2"}
            [:input {:class "w-full text-sm bg-[#3f3f3f] text-[#dcdccc] border-[#5f5f5f] rounded px-2 py-1 border focus:border-[#8cd0d3] focus:outline-none"
                     :placeholder (str "Filter " (name col))
                     :value (get filters col "")
                     :on-change #(rf/dispatch [::update-view-state id :filters (assoc filters col (.. % -target -value))])}]])]
        ;; Data Rows
        (for [row page-data]
          (let [row-uuid (:_uuid row)]
            [:tr {:key row-uuid :class "hover:bg-[#3f3f3f] transition-colors"}
             (for [col visible-columns]
               [:td {:key col :class "px-6 py-4 whitespace-nowrap text-sm text-[#dcdccc]"}
                [:input {:class "w-full bg-transparent focus:bg-[#3f3f3f] focus:ring-1 focus:ring-[#8cd0d3] rounded px-1 outline-none"
                         :value (get row col "")
                         :on-change #(rf/dispatch [::update-cell id row-uuid col (.. % -target -value)])}]])]))]]]
     ]))

(defn dataset-view [dataset]
  [:div {:class "space-y-6"}
   [:div {:class "flex items-center justify-between bg-[#2f2f2f] p-4 rounded shadow-sm"}
    [:div {:class "flex items-center space-x-4"}
     [:input {:class "text-xl font-bold bg-transparent text-[#f0dfaf] border-b border-transparent focus:border-[#f0dfaf] focus:outline-none"
              :value (:name dataset)
              :on-change #(rf/dispatch [::update-dataset-name (:id dataset) (.. % -target -value)])}]
     [:span {:class "text-[#9f9f9f] text-sm"} (str (count (:data dataset)) " rows")]]
    [c/button {:class "bg-[#cc9393] hover:bg-[#bc8383] text-[#3f3f3f]"
               :on-click #(rf/dispatch [::delete-dataset (:id dataset)])}
     "Delete"]]
   [data-table dataset]])

(defn sidebar []
  (let [items @(rf/subscribe [::items])
        active-id @(rf/subscribe [::active-dataset-id])]
    [:div {:class "w-64 bg-[#2f2f2f] border-r border-[#3f3f3f] flex flex-col h-[calc(100vh-3rem)] sticky top-12"}
     [:div {:class "p-4 border-b border-[#3f3f3f]"}
      [:h3 {:class "text-lg font-semibold text-[#f0dfaf] mb-4"} "Datasets"]
      [c/button {:class "w-full bg-[#5f5f5f] hover:bg-[#6f6f6f]"
                 :on-click #(rf/dispatch [::set-active-dataset-id :new])}
       "+ New Dataset"]]
     [:div {:class "flex-grow overflow-y-auto p-2 space-y-1"}
      (if (seq items)
        (for [[id ds] items]
          [:div {:key id
                 :class (str "p-3 rounded cursor-pointer transition-colors text-sm font-medium "
                             (if (= id active-id) "bg-[#4f4f4f] text-[#f0dfaf] shadow-sm" "text-[#dcdccc] hover:bg-[#3f3f3f]"))
                 :on-click #(rf/dispatch [::set-active-dataset-id id])}
           (:name ds)])
        [:div {:class "text-sm text-[#7f7f7f] italic p-2"} "No datasets"])]]))

(defn panel []
  (let [active-id @(rf/subscribe [::active-dataset-id])
        active-dataset @(rf/subscribe [::active-dataset])]
    [:div {:class "flex min-h-screen bg-[#3f3f3f]"}
     [sidebar]
     [:div {:class "flex-grow p-6 overflow-x-hidden flex flex-col"}
      (if (= active-id :new)
        [importer-view]
        (if active-dataset
          [dataset-view active-dataset]
          [:div {:class "text-center text-[#7f7f7f] mt-20"} "Select a dataset."]))]]))
