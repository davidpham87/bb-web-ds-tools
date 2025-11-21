(ns bb-web-ds-tools.vega-lite
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.ui.core :as ui]
            ["papaparse" :as Papa]
            ["react-dom" :as ReactDOM]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]))

;; --- State ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (assoc db
          ::data-input ""
          ::config-input "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}"
          ::format :csv
          ::parsed-data nil
          ::active-sub-tab :plot)))

(rf/reg-sub ::data-input (fn [db] (::data-input db)))
(rf/reg-sub ::config-input (fn [db] (::config-input db)))
(rf/reg-sub ::format (fn [db] (::format db)))
(rf/reg-sub ::parsed-data (fn [db] (::parsed-data db)))
(rf/reg-sub ::active-sub-tab (fn [db] (::active-sub-tab db)))

(rf/reg-event-db ::set-data-input (fn [db [_ val]] (assoc db ::data-input val)))
(rf/reg-event-db ::set-config-input (fn [db [_ val]] (assoc db ::config-input val)))
(rf/reg-event-db ::set-format (fn [db [_ fmt]] (assoc db ::format fmt)))
(rf/reg-event-db ::set-active-sub-tab (fn [db [_ tab]] (assoc db ::active-sub-tab tab)))

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
                  [])]
     (assoc db ::parsed-data parsed))))

;; --- Components ---

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

(defn view []
  (let [data-input @(rf/subscribe [::data-input])
        config-input @(rf/subscribe [::config-input])
        parsed-data @(rf/subscribe [::parsed-data])
        active-sub-tab @(rf/subscribe [::active-sub-tab])]
    [:div
     [:h2 "Vega Lite Tool"]
     [:div {:style {:display "flex" :gap "20px"}}
      [:div {:style {:flex "1"}}
       [:h3 "Data Input"]
       [:div
        [:button {:on-click #(load-example :csv :csv)} "Example CSV"]
        [:button {:on-click #(load-example :tsv :tsv)} "Example TSV"]
        [:button {:on-click #(load-example :markdown :markdown)} "Example MD"]
        [:button {:on-click #(load-example :json :json-maps)} "Example JSON (Maps)"]
        [:button {:on-click #(load-example :json :json-arrays)} "Example JSON (Arrays)"]]
       [ui/codemirror-editor
        {:value data-input
         :on-change (fn [val]
                      (rf/dispatch [::set-data-input val])
                      (rf/dispatch [::parse-data]))}]
       [:h3 "Config Input (Vega Lite JSON)"]
       [ui/codemirror-editor
        {:value config-input
         :mode "application/json"
         :on-change #(rf/dispatch [::set-config-input %])}]]
      [:div {:style {:flex "1"}}
       [:div {:style {:margin-bottom "10px"}}
        [:button {:disabled (= active-sub-tab :plot)
                  :on-click #(rf/dispatch [::set-active-sub-tab :plot])} "Plot"]
        [:button {:disabled (= active-sub-tab :parsed)
                  :on-click #(rf/dispatch [::set-active-sub-tab :parsed])} "Parsed Data (EDN)"]]
       (case active-sub-tab
         :plot [vega-viz {:spec config-input :data parsed-data}]
         :parsed [:pre (with-out-str (pprint parsed-data))]
         nil)]]]))
