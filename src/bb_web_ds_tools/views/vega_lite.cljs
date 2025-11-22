(ns bb-web-ds-tools.views.vega-lite
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            ["papaparse" :as Papa]
            ["react-dom" :as ReactDOM]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [malli.provider :as mp]
            [malli.core :as m]))


;; --- State ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (assoc db
          ::data-input ""
          ::config-input "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}"
          ::format :csv
          ::parsed-data nil
          ::inferred-schema nil
          ::active-sub-tab :plot
          ::builder-state {:x nil :y nil :color nil :mark "bar" :ops #{}})))

(rf/reg-sub ::data-input (fn [db] (::data-input db)))
(rf/reg-sub ::config-input (fn [db] (::config-input db)))
(rf/reg-sub ::format (fn [db] (::format db)))
(rf/reg-sub ::parsed-data (fn [db] (::parsed-data db)))
(rf/reg-sub ::inferred-schema (fn [db] (::inferred-schema db)))
(rf/reg-sub ::active-sub-tab (fn [db] (::active-sub-tab db)))
(rf/reg-sub ::builder-state (fn [db] (::builder-state db)))

(rf/reg-event-db ::set-data-input (fn [db [_ val]] (assoc db ::data-input val)))
(rf/reg-event-db ::set-config-input (fn [db [_ val]] (assoc db ::config-input val)))
(rf/reg-event-db ::set-format (fn [db [_ fmt]] (assoc db ::format fmt)))
(rf/reg-event-db ::set-active-sub-tab (fn [db [_ tab]] (assoc db ::active-sub-tab tab)))
(rf/reg-event-db ::set-inferred-schema (fn [db [_ schema]] (assoc db ::inferred-schema schema)))
(rf/reg-event-db ::update-builder-state (fn [db [_ k v]] (assoc-in db [::builder-state k] v)))

;; --- Parsing ---

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

(defn parse-markdown [text]
  (let [lines (->> (str/split-lines text)
                   (map str/trim)
                   (remove empty?))
        parse-row (fn [line]
                    (->> (str/split line #"\|")
                         (map str/trim)
                         (remove empty?)))
        [header-line _ & data-lines] lines
        header (map keyword (parse-row header-line))]
    (mapv (fn [line] (zipmap header (parse-row line))) data-lines)))

(rf/reg-event-db
 ::parse-data
 (fn [db _]
   (let [text (::data-input db)
         fmt (::format db)
         parsed (case fmt
                  :csv (parse-csv text)
                  :tsv (parse-tsv text)
                  :json (parse-json text)
                  :markdown (parse-markdown text)
                  [])
         schema (try (mp/provide parsed) (catch js/Error e (str "Error inferring schema: " (.-message e))))]
     (assoc db ::parsed-data parsed ::inferred-schema schema))))

;; --- Components ---

(def examples
  [{:label "Example CSV" :fmt :csv :key :csv}
   {:label "Example TSV" :fmt :tsv :key :tsv}
   {:label "Example MD" :fmt :markdown :key :markdown}
   {:label "Example JSON (Maps)" :fmt :json :key :json-maps}
   {:label "Example JSON (Arrays)" :fmt :json :key :json-arrays}])

(defn example-data [fmt]
  (case fmt
    :csv "col1,col2,col3,col4\n1,2,3,4\n5,6,7,8\n9,10,11,12"
    :tsv "col1\tcol2\tcol3\tcol4\n1\t2\t3\t4\n5\t6\t7\t8\n9\t10\t11\t12"
    :markdown "| col1 | col2 | col3 | col4 |\n|---|---|---|---|\n| 1 | 2 | 3 | 4 |\n| 5 | 6 | 7 | 8 |\n| 9 | 10 | 11 | 12 |"
    :json-maps "[\n  {\"col1\": 1, \"col2\": 2, \"col3\": 3, \"col4\": 4},\n  {\"col1\": 5, \"col2\": 6, \"col3\": 7, \"col4\": 8},\n  {\"col1\": 9, \"col2\": 10, \"col3\": 11, \"col4\": 12}\n]"
    :json-arrays "[\n  [\"col1\", \"col2\", \"col3\", \"col4\"],\n  [1, 2, 3, 4],\n  [5, 6, 7, 8],\n  [9, 10, 11, 12]\n]"
    ""))

(defn load-example [fmt key]
  (rf/dispatch [::set-format fmt])
  (rf/dispatch [::set-data-input (example-data key)])
  (rf/dispatch [::parse-data]))

(defn vega-viz [spec-str data]
  (r/create-class
   {:display-name "vega-viz"
    :component-did-mount
    (fn [this]
      (let [{:keys [spec data]} (r/props this)]
        (when (and spec data)
          (try
            (let [spec-obj (js/JSON.parse spec)
                  spec-with-data (js/Object.assign #js{} spec-obj)]
              (set! (.-data spec-with-data) #js{:values (clj->js data)})
              (js/vegaEmbed (ReactDOM/findDOMNode this) spec-with-data))
            (catch js/Error e (js/console.warn "Vega render error" e))))))
    :component-did-update
    (fn [this _]
       (let [{:keys [spec data]} (r/props this)]
        (when (and spec data)
          (try
            (let [spec-obj (js/JSON.parse spec)
                  spec-with-data (js/Object.assign #js{} spec-obj)]
              (set! (.-data spec-with-data) #js{:values (clj->js data)})
              (js/vegaEmbed (ReactDOM/findDOMNode this) spec-with-data))
            (catch js/Error e (js/console.warn "Vega render error" e))))))
    :render
    (fn [] [:div {:style {:width "100%" :height "400px"}}])}))

;; --- Builder & Schema Helpers ---

(defn extract-map-schema [schema]
  (cond
    (and (vector? schema) (= :map (first schema))) schema
    (and (vector? schema) (#{ :vector :sequential :set :list } (first schema))) (extract-map-schema (second schema))
    :else nil))

(defn infer-type [schema field]
  (let [map-schema (extract-map-schema schema)
        props (if map-schema (rest map-schema) [])
        prop (first (filter #(= field (first %)) props))
        type-def (second prop)]
    (cond
      (= type-def :int) "quantitative"
      (= type-def :double) "quantitative"
      (= type-def :string) "nominal"
      (= type-def :boolean) "nominal"
      :else "nominal")))

(defn generate-config [state schema]
  (let [{:keys [x y color mark ops]} state
        encoding (cond-> {}
                   (not-empty x) (assoc :x {:field x :type (infer-type schema (keyword x))})
                   (not-empty y) (assoc :y {:field y :type (infer-type schema (keyword y))})
                   (not-empty color) (assoc :color {:field color :type (infer-type schema (keyword color))}))
        spec {:mark mark
              :encoding encoding}]
     ;; Apply ops (Repeat, Fold, Facet) - simplified
     (cond-> spec
       (contains? ops :repeat) (assoc :repeat {:layer [x y]}) ;; Simplified logic
       (contains? ops :facet) (assoc :facet {:row {:field (or color x) :type "nominal"}}) ;; Simplified
       true (js/JSON.stringify nil 2))))

(rf/reg-event-fx
 ::apply-builder
 (fn [{:keys [db]} _]
   (let [state (::builder-state db)
         schema (::inferred-schema db)
         config (generate-config state schema)]
     {:db (assoc db ::config-input config)})))

(defn builder-panel []
  (let [schema @(rf/subscribe [::inferred-schema])
        state @(rf/subscribe [::builder-state])
        map-schema (extract-map-schema schema)
        fields (if map-schema
                 (map name (keys (into {} (rest map-schema))))
                 [])]
    [:div {:style {:padding "10px" :border "1px solid #eee"}}
     [:h4 "Visual Builder"]
     [:div {:style {:display "flex" :gap "10px" :margin-bottom "10px"}}
      [:div
       [:label "X Axis "]
       [:select {:value (:x state)
                 :on-change #(rf/dispatch [::update-builder-state :x (-> % .-target .-value)])}
        [:option {:value ""} "Select..."]
        (for [f fields] [:option {:key f :value f} f])]]
      [:div
       [:label "Y Axis "]
       [:select {:value (:y state)
                 :on-change #(rf/dispatch [::update-builder-state :y (-> % .-target .-value)])}
        [:option {:value ""} "Select..."]
        (for [f fields] [:option {:key f :value f} f])]]
      [:div
       [:label "Color "]
       [:select {:value (:color state)
                 :on-change #(rf/dispatch [::update-builder-state :color (-> % .-target .-value)])}
        [:option {:value ""} "Select..."]
        (for [f fields] [:option {:key f :value f} f])]]]
     [:div {:style {:margin-bottom "10px"}}
       [:label "Mark "]
       [:select {:value (:mark state)
                 :on-change #(rf/dispatch [::update-builder-state :mark (-> % .-target .-value)])}
        [:option {:value "bar"} "Bar"]
        [:option {:value "point"} "Point"]
        [:option {:value "line"} "Line"]
        [:option {:value "area"} "Area"]]]
     [:div {:style {:margin-bottom "10px"}}
      [:label "Operations: "]
      [:label [:input {:type "checkbox"
                       :checked (contains? (:ops state) :repeat)
                       :on-change #(if (-> % .-target .-checked)
                                     (rf/dispatch [::update-builder-state :ops (conj (:ops state) :repeat)])
                                     (rf/dispatch [::update-builder-state :ops (disj (:ops state) :repeat)]))}] " Repeat (Dummy) "]
      [:label [:input {:type "checkbox"
                       :checked (contains? (:ops state) :facet)
                       :on-change #(if (-> % .-target .-checked)
                                     (rf/dispatch [::update-builder-state :ops (conj (:ops state) :facet)])
                                     (rf/dispatch [::update-builder-state :ops (disj (:ops state) :facet)]))}] " Facet (Dummy) "]]
     [:button {:on-click #(rf/dispatch [::apply-builder])} "Apply to Config"]]))

(defn panel []
  (let [data-input @(rf/subscribe [::data-input])
        config-input @(rf/subscribe [::config-input])
        parsed-data @(rf/subscribe [::parsed-data])
        inferred-schema @(rf/subscribe [::inferred-schema])
        active-sub-tab @(rf/subscribe [::active-sub-tab])]
    [:div {:class "space-y-8 container mx-auto max-w-6xl"}
     [c/page-header "Vega-Lite Visualization"]

     [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-8"}
      ;; Input Column
      [:div {:class "space-y-6"}
       [c/card
        [:div
         [:div {:class "flex items-center justify-between mb-4"}
          [:h3 {:class "text-lg font-semibold text-white"} "Data Input"]
          [:div {:class "flex flex-wrap gap-2"}
           [c/button-xs {:on-click #(load-example :csv :csv)} "CSV"]
           [c/button-xs {:on-click #(load-example :tsv :tsv)} "TSV"]
           [c/button-xs {:on-click #(load-example :markdown :markdown)} "MD"]
           [c/button-xs {:on-click #(load-example :json :json-maps)} "JSON Maps"]
           [c/button-xs {:on-click #(load-example :json :json-arrays)} "JSON Arrays"]]]

         [:div {:class "bg-white rounded overflow-hidden"}
          [editor/codemirror-editor
           {:value data-input
            :on-change (fn [val]
                         (rf/dispatch [::set-data-input val])
                         (rf/dispatch [::parse-data]))}]]]]

       [c/card
        [:div
         [:h3 {:class "text-lg font-semibold text-white mb-4"} "Config (Vega-Lite JSON)"]
         [:div {:class "bg-white rounded overflow-hidden"}
          [editor/codemirror-editor
           {:value config-input
            :mode "application/json"
            :on-change #(rf/dispatch [::set-config-input %])}]]]]]

      ;; Output Column
      [c/card {:class "h-full flex flex-col"}
       [:div
        [:div {:class "flex space-x-4 mb-4 border-b border-gray-700 pb-2"}
         [:button {:class (str "px-4 py-2 font-medium transition-colors "
                               (if (= active-sub-tab :plot) "text-blue-400 border-b-2 border-blue-400" "text-gray-400 hover:text-white"))
                   :on-click #(rf/dispatch [::set-active-sub-tab :plot])} "Plot"]
         [:button {:class (str "px-4 py-2 font-medium transition-colors "
                               (if (= active-sub-tab :parsed) "text-blue-400 border-b-2 border-blue-400" "text-gray-400 hover:text-white"))
                   :on-click #(rf/dispatch [::set-active-sub-tab :parsed])} "Parsed Data"]]

        [:div {:class "flex-grow bg-white rounded p-4 overflow-auto min-h-[400px]"}
         (case active-sub-tab
           :plot [vega-viz {:spec config-input :data parsed-data}]
           :parsed [:pre {:class "text-gray-800 text-sm"} (with-out-str (pprint parsed-data))]
           nil)]]]]]))
