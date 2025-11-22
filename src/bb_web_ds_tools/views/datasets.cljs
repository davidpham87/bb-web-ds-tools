(ns bb-web-ds-tools.views.datasets
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            ["papaparse" :as Papa]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [malli.provider :as mp]))

;; --- Parsing Logic (Adapted from vega-lite) ---

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

;; --- State Management ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (update-in db [:user-input :datasets] merge
              {:active-dataset-id nil
               :items {}})))

(rf/reg-sub
 ::root
 (fn [db]
   (get-in db [:user-input :datasets])))

(rf/reg-sub
 ::items
 :<- [::root]
 (fn [root]
   (:items root)))

(rf/reg-sub
 ::active-dataset-id
 :<- [::root]
 (fn [root]
   (:active-dataset-id root)))

(rf/reg-sub
 ::active-dataset
 :<- [::items]
 :<- [::active-dataset-id]
 (fn [[items id]]
   (get items id)))

(rf/reg-sub
 ::active-dataset-data
 :<- [::active-dataset]
 (fn [ds]
   (:data ds)))

(rf/reg-event-db
 ::set-active-dataset-id
 (fn [db [_ id]]
   (assoc-in db [:user-input :datasets :active-dataset-id] id)))

(rf/reg-event-db
 ::add-dataset
 (fn [db [_ {:keys [name data]}]]
   (let [id (str (random-uuid))
         ;; Ensure data is a vector of maps
         valid-data (if (seq data)
                      (if (map? (first data))
                        data
                        (mapv (fn [row] {:value row}) data)) ;; Handle primitive lists
                      [])
         ;; Inject UUIDs for row identification
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
   (let [active-id (get-in db [:user-input :datasets :active-dataset-id])
         new-active-id (if (= active-id id) nil active-id)]
     (-> db
         (update-in [:user-input :datasets :items] dissoc id)
         (assoc-in [:user-input :datasets :active-dataset-id] new-active-id)))))

(rf/reg-event-db
 ::update-dataset-name
 (fn [db [_ id name]]
   (assoc-in db [:user-input :datasets :items id :name] name)))

(rf/reg-event-db
 ::update-data
 (fn [db [_ id data]]
    (assoc-in db [:user-input :datasets :items id :data] data)))

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

(defn file-importer []
  (let [text (r/atom "")
        fmt (r/atom :csv)]
    (fn []
      [:div {:class "space-y-4"}
       [:div {:class "flex space-x-2"}
        [:select {:class "bg-gray-700 text-white p-2 rounded"
                  :value @fmt
                  :on-change #(reset! fmt (keyword (.. % -target -value)))}
         [:option {:value :csv} "CSV"]
         [:option {:value :tsv} "TSV"]
         [:option {:value :json} "JSON"]]
        [c/button {:on-click #(let [parsed (case @fmt
                                              :csv (parse-csv @text)
                                              :tsv (parse-tsv @text)
                                              :json (parse-json @text))]
                                (rf/dispatch [::add-dataset {:name (str "New " (name @fmt)) :data parsed}]))}
         "Load from Text"]]
       [c/textarea {:value @text
                    :on-change #(reset! text (.. % -target -value))
                    :placeholder "Paste data here..."
                    :class "h-32"}]
       [:div
        [:input {:type "file"
                 :class "text-gray-400"
                 :on-change (fn [e]
                              (let [file (-> e .-target .-files (aget 0))
                                    reader (js/FileReader.)]
                                (set! (.-onload reader)
                                      (fn [e]
                                        (let [content (-> e .-target .-result)
                                              parsed (case @fmt
                                                       :csv (parse-csv content)
                                                       :tsv (parse-tsv content)
                                                       :json (parse-json content))]
                                          (rf/dispatch [::add-dataset {:name (.-name file) :data parsed}]))))
                                (.readAsText reader file)))}]]])))

(defn data-table [dataset]
  (let [{:keys [id data columns view-state]} dataset
        {:keys [page rows-per-page filters hidden-columns sort-col sort-dir]} view-state
        ;; Filter
        filtered-data (if (seq filters)
                        (filter (fn [row]
                                  (every? (fn [[k v]]
                                            (str/includes? (str/lower-case (str (get row k))) (str/lower-case v)))
                                          filters))
                                data)
                        data)
        ;; Sort
        sorted-data (if sort-col
                      (sort-by sort-col (if (= sort-dir :asc) compare #(compare %2 %1)) filtered-data)
                      filtered-data)
        ;; Paginate
        total-rows (count sorted-data)
        start-idx (* page rows-per-page)
        end-idx (min (+ start-idx rows-per-page) total-rows)
        page-data (subvec (vec sorted-data) start-idx end-idx)
        visible-columns (remove hidden-columns columns)]

    [:div {:class "space-y-4"}
     ;; Toolbar
     [:div {:class "flex flex-wrap gap-4 items-end bg-gray-900 p-4 rounded"}
      [:div
       [c/label "Rows per page"]
       [:select {:class "bg-gray-800 text-white p-2 rounded border border-gray-700"
                 :value rows-per-page
                 :on-change #(rf/dispatch [::update-view-state id :rows-per-page (js/parseInt (.. % -target -value))])}
        [:option {:value 5} "5"]
        [:option {:value 10} "10"]
        [:option {:value 25} "25"]
        [:option {:value 50} "50"]
        [:option {:value 100} "100"]]]
      [:div
       [c/label "Columns"]
       [:div {:class "relative group"}
        [:button {:class "bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"} "Select Columns"]
        [:div {:class "absolute hidden group-hover:block bg-gray-800 border border-gray-700 p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"}
         (for [col columns]
           [:div {:key col :class "flex items-center space-x-2 p-1 hover:bg-gray-700"}
            [:input {:type "checkbox"
                     :checked (not (contains? hidden-columns col))
                     :on-change #(if (contains? hidden-columns col)
                                   (rf/dispatch [::update-view-state id :hidden-columns (disj hidden-columns col)])
                                   (rf/dispatch [::update-view-state id :hidden-columns (conj hidden-columns col)]))}]
            [:span (name col)]])]]]
      [:div {:class "flex-grow"}]
      [:div {:class "text-sm text-gray-400"}
       (str "Showing " (inc start-idx) "-" end-idx " of " total-rows)]
      [:div {:class "flex space-x-2"}
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (dec page)])
                     :disabled (zero? page)} "Prev"]
       [c/button-xs {:on-click #(rf/dispatch [::update-view-state id :page (inc page)])
                     :disabled (>= end-idx total-rows)} "Next"]]]

     ;; Table
     [:div {:class "overflow-x-auto bg-white rounded shadow"}
      [:table {:class "min-w-full divide-y divide-gray-200"}
       [:thead {:class "bg-gray-50"}
        [:tr
         (for [col visible-columns]
           [:th {:key col
                 :class "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                 :on-click #(let [new-dir (if (and (= sort-col col) (= sort-dir :asc)) :desc :asc)]
                              (rf/dispatch [::update-view-state id :sort-col col])
                              (rf/dispatch [::update-view-state id :sort-dir new-dir]))}
            [:div {:class "flex items-center space-x-1"}
             [:span (name col)]
             (when (= sort-col col)
               [:span (if (= sort-dir :asc) "▲" "▼")])]])]]
       [:tbody {:class "bg-white divide-y divide-gray-200"}
        ;; Filter Row
        [:tr
         (for [col visible-columns]
           [:td {:key (str "filter-" col) :class "px-6 py-2"}
            [:input {:class "w-full text-sm border-gray-300 rounded px-2 py-1 border"
                     :placeholder (str "Filter " (name col))
                     :value (get filters col "")
                     :on-change #(rf/dispatch [::update-view-state id :filters (assoc filters col (.. % -target -value))])}]])]
        ;; Data Rows
        (for [row page-data]
          (let [row-uuid (:_uuid row)]
            [:tr {:key row-uuid :class "hover:bg-gray-50"}
             (for [col visible-columns]
               [:td {:key col :class "px-6 py-4 whitespace-nowrap text-sm text-gray-900"}
                [:input {:class "w-full bg-transparent focus:bg-white focus:ring-1 focus:ring-blue-500 rounded px-1"
                         :value (get row col "")
                         :on-change #(rf/dispatch [::update-cell id row-uuid col (.. % -target -value)])}]])]))]]]
     ]))

(defn dataset-view []
  (let [active-dataset @(rf/subscribe [::active-dataset])]
    (if active-dataset
      [:div {:class "space-y-6"}
       [:div {:class "flex items-center justify-between bg-gray-800 p-4 rounded"}
        [:div {:class "flex items-center space-x-4"}
         [:input {:class "text-xl font-bold bg-transparent text-white border-b border-transparent focus:border-blue-500 focus:outline-none"
                  :value (:name active-dataset)
                  :on-change #(rf/dispatch [::update-dataset-name (:id active-dataset) (.. % -target -value)])}]
         [:span {:class "text-gray-400 text-sm"} (str (count (:data active-dataset)) " rows")]]
        [c/button {:class "bg-red-600 hover:bg-red-700"
                   :on-click #(rf/dispatch [::delete-dataset (:id active-dataset)])}
         "Delete Dataset"]]
       [data-table active-dataset]]
      [:div {:class "text-center text-gray-500 mt-20"}
       "Select or create a dataset to get started."])))

(defn sidebar []
  (let [items @(rf/subscribe [::items])
        active-id @(rf/subscribe [::active-dataset-id])]
    [:div {:class "w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-[calc(100vh-4rem)] sticky top-16"}
     [:div {:class "p-4 border-b border-gray-800"}
      [:h3 {:class "text-lg font-semibold text-white mb-4"} "Datasets"]
      [file-importer]]
     [:div {:class "flex-grow overflow-y-auto p-4 space-y-2"}
      (if (seq items)
        (for [[id ds] items]
          [:div {:key id
                 :class (str "p-3 rounded cursor-pointer transition-colors "
                             (if (= id active-id) "bg-blue-900 text-white" "text-gray-400 hover:bg-gray-800 hover:text-white"))
                 :on-click #(rf/dispatch [::set-active-dataset-id id])}
           (:name ds)])
        [:div {:class "text-sm text-gray-600 italic"} "No datasets"])]]))

(defn panel []
  [:div {:class "flex min-h-screen bg-gray-950"}
   [sidebar]
   [:div {:class "flex-grow p-8 overflow-x-hidden"}
    [dataset-view]]])
