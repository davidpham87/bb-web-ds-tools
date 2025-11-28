(ns bb-web-ds-tools.views.vega-lite
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            ["react-dom" :as ReactDOM]
            #_["vega-embed" :default vega-embed]
            [cljs.pprint :refer [pprint]]
            [malli.provider :as mp]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

;; --- State ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (-> db
       (assoc-in [:user-input :vega-lite :default]
                 {::data-input ""
                  ::config-input "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}"})
       (assoc ::vega-lite
              {::format :csv
               ::structure :columnar
               ::parsed-data nil
               ::inferred-schema nil
               ::active-sub-tab :plot
               ::builder-state {:x nil :y nil :color nil :mark "bar" :ops #{}}}))))

(rf/reg-sub ::user-input-root (fn [db] (get-in db [:user-input :vega-lite :default])))
(rf/reg-sub ::component-root (fn [db] (::vega-lite db)))
(rf/reg-sub ::data-input :<- [::user-input-root] (fn [root] (::data-input root)))
(rf/reg-sub ::config-input :<- [::user-input-root] (fn [root] (::config-input root)))
(rf/reg-sub ::format :<- [::component-root] (fn [root] (::format root)))
(rf/reg-sub ::structure :<- [::component-root] (fn [root] (::structure root)))
(rf/reg-sub ::parsed-data :<- [::component-root] (fn [root] (::parsed-data root)))
(rf/reg-sub ::inferred-schema :<- [::component-root] (fn [root] (::inferred-schema root)))
(rf/reg-sub ::active-sub-tab :<- [::component-root] (fn [root] (::active-sub-tab root)))
(rf/reg-sub ::builder-state :<- [::component-root] (fn [root] (::builder-state root)))

(rf/reg-event-db ::set-data-input (fn [db [_ val]] (assoc-in db [:user-input :vega-lite :default ::data-input] val)))
(rf/reg-event-db ::set-config-input (fn [db [_ val]] (assoc-in db [:user-input :vega-lite :default ::config-input] val)))
(rf/reg-event-db ::set-format (fn [db [_ fmt]] (assoc-in db [::vega-lite ::format] fmt)))
(rf/reg-event-db ::set-structure (fn [db [_ s]] (assoc-in db [::vega-lite ::structure] s)))
(rf/reg-event-db ::set-active-sub-tab (fn [db [_ tab]] (assoc-in db [::vega-lite ::active-sub-tab] tab)))
(rf/reg-event-db ::set-inferred-schema (fn [db [_ schema]] (assoc-in db [::vega-lite ::inferred-schema] schema)))
(rf/reg-event-db ::update-builder-state (fn [db [_ k v]] (assoc-in db [::vega-lite ::builder-state k] v)))

;; --- Parsing ---

(rf/reg-event-db
 ::parse-data
 (fn [db _]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         component-state (::vega-lite db)
         text (::data-input user-input)
         fmt (::format component-state)
         structure (::structure component-state)
         parsed (dp/parse-dataset fmt structure text)
         schema (try (mp/provide parsed) (catch js/Error e (str "Error inferring schema: " (.-message e))))]
     (update db ::vega-lite assoc ::parsed-data parsed ::inferred-schema schema))))

;; --- Components ---

(defn load-example [fmt structure]
  (rf/dispatch [::set-format fmt])
  (rf/dispatch [::set-structure structure])
  (rf/dispatch [::set-data-input (dp/example-data fmt structure)])
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
              (vega-embed (ReactDOM/findDOMNode this) spec-with-data))
            (catch js/Error e (js/console.warn "Vega render error" e))))))
    :component-did-update
    (fn [this _]
      (let [{:keys [spec data]} (r/props this)]
        (when (and spec data)
          (try
            (let [spec-obj (js/JSON.parse spec)
                  spec-with-data (js/Object.assign #js{} spec-obj)]
              (set! (.-data spec-with-data) #js{:values (clj->js data)})
              (vega-embed (ReactDOM/findDOMNode this) spec-with-data))
            (catch js/Error e (js/console.warn "Vega render error" e))))))
    :render
    (fn [] [:div {:style {:width "100%" :height "400px"}}])}))

;; --- Builder & Schema Helpers ---

(defn extract-map-schema [schema]
  (cond
    (and (vector? schema) (= :map (first schema))) schema
    (and (vector? schema) (#{:vector :sequential :set :list} (first schema))) (extract-map-schema (second schema))
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
   (let [component-state (::vega-lite db)
         state (::builder-state component-state)
         schema (::inferred-schema component-state)
         config (generate-config state schema)]
     {:db (assoc-in db [:user-input :vega-lite :default ::config-input] config)})))

(defn panel-render []
  (let [data-input @(rf/subscribe [::data-input])
        config-input @(rf/subscribe [::config-input])
        parsed-data @(rf/subscribe [::parsed-data])
        ;; inferred-schema @(rf/subscribe [::inferred-schema])
        active-sub-tab @(rf/subscribe [::active-sub-tab])]
    [l/container {:class "space-y-8 max-w-6xl p-6"}
     [l/grid {:class "grid-cols-1 lg:grid-cols-2 gap-8"}
      ;; Input Column
      [l/flex-col {:class "space-y-6"}
       [c/card {}
        [:div
         [l/flex-row {:class "justify-between mb-4"}
          [:h3 {:class (str "text-lg font-semibold " t/text-accent)} "Data Input"]
          [l/flex-row {:class "flex-wrap gap-2"}
           [c/button-xs {:on-click #(load-example :csv :columnar)} "CSV"]
           [c/button-xs {:on-click #(load-example :tsv :columnar)} "TSV"]
           [c/button-xs {:on-click #(load-example :json :row-maps)} "JSON Maps"]
           [c/button-xs {:on-click #(load-example :json :row-arrays)} "JSON Arrays"]]]

         [:div {:class (str t/bg-input " rounded overflow-hidden border " t/border-default)}
          [editor/monaco-editor
           {:value data-input
            :language "plaintext"
            :style {:height "300px"}
            :on-change (fn [val]
                         (rf/dispatch [::set-data-input val])
                         (rf/dispatch [::parse-data]))}]]]]

       [c/card {}
        [:div
         [:h3 {:class (str "text-lg font-semibold " t/text-accent " mb-4")} "Config (Vega-Lite JSON)"]
         [:div {:class (str t/bg-input " rounded overflow-hidden border " t/border-default)}
          [editor/monaco-editor
           {:value config-input
            :language "json"
            :style {:height "300px"}
            :on-change #(rf/dispatch [::set-config-input %])}]]]]]

      ;; Output Column
      [c/card {:class "h-full flex flex-col"}
       [:div
        [l/flex-row {:class (str "space-x-4 mb-4 border-b " t/border-default " pb-2")}
         [:button {:class (str "px-4 py-2 font-medium transition-colors border-b-2 "
                               (if (= active-sub-tab :plot) (str t/text-accent " border-[#f0dfaf]") (str t/text-secondary " border-transparent hover:text-white")))
                   :on-click #(rf/dispatch [::set-active-sub-tab :plot])} "Plot"]
         [:button {:class (str "px-4 py-2 font-medium transition-colors border-b-2 "
                               (if (= active-sub-tab :parsed) (str t/text-accent " border-[#f0dfaf]") (str t/text-secondary " border-transparent hover:text-white")))
                   :on-click #(rf/dispatch [::set-active-sub-tab :parsed])} "Parsed Data"]]

        [:div {:class "flex-grow bg-white rounded p-4 overflow-auto min-h-[400px]"}
         (case active-sub-tab
           :plot [vega-viz {:spec config-input :data parsed-data}]
           :parsed [:pre {:class "text-gray-800 text-sm"} (with-out-str (pprint parsed-data))]
           nil)]]]]]))

(defn panel []
  (r/create-class
   {:display-name "vega-lite-panel"
    :component-did-mount #(rf/dispatch [::initialize])
    :reagent-render panel-render}))
