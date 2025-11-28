(ns bb-web-ds-tools.views.vega-lite
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.portal :as portal]
            ["react-dom" :as ReactDOM]
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
               ::active-left-tab :data
               ::active-right-tab :plot}))))

(rf/reg-sub ::user-input-root (fn [db] (get-in db [:user-input :vega-lite :default])))
(rf/reg-sub ::component-root (fn [db] (::vega-lite db)))

(rf/reg-sub ::data-input :<- [::user-input-root] (fn [root] (::data-input root)))
(rf/reg-sub ::config-input :<- [::user-input-root] (fn [root] (::config-input root)))

(rf/reg-sub ::format :<- [::component-root] (fn [root] (::format root)))
(rf/reg-sub ::structure :<- [::component-root] (fn [root] (::structure root)))
(rf/reg-sub ::parsed-data :<- [::component-root] (fn [root] (::parsed-data root)))
(rf/reg-sub ::active-left-tab :<- [::component-root] (fn [root] (::active-left-tab root)))
(rf/reg-sub ::active-right-tab :<- [::component-root] (fn [root] (::active-right-tab root)))

(rf/reg-event-db ::set-data-input (fn [db [_ val]] (assoc-in db [:user-input :vega-lite :default ::data-input] val)))
(rf/reg-event-db ::set-config-input (fn [db [_ val]] (assoc-in db [:user-input :vega-lite :default ::config-input] val)))
(rf/reg-event-db ::set-format (fn [db [_ fmt]] (assoc-in db [::vega-lite ::format] fmt)))
(rf/reg-event-db ::set-structure (fn [db [_ s]] (assoc-in db [::vega-lite ::structure] s)))
(rf/reg-event-db ::set-active-left-tab (fn [db [_ tab]] (assoc-in db [::vega-lite ::active-left-tab] tab)))
(rf/reg-event-db ::set-active-right-tab (fn [db [_ tab]] (assoc-in db [::vega-lite ::active-right-tab] tab)))

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

(defn render-vega [component spec data]
  (when (and spec data)
    (try
      (let [spec-obj (js/JSON.parse spec)
            spec-with-data (js/Object.assign #js{} spec-obj)]
        (set! (.-data spec-with-data) #js{:values (clj->js data)})
        (js/vegaEmbed (ReactDOM/findDOMNode component) spec-with-data))
      (catch js/Error e (js/console.warn "Vega render error" e)))))

(defn vega-viz [{:keys [spec data]}]
  (r/create-class
   {:display-name "vega-viz"
    :component-did-mount
    (fn [this]
      (render-vega this (:spec (r/props this)) (:data (r/props this))))
    :component-did-update
    (fn [this]
      (render-vega this (:spec (r/props this)) (:data (r/props this))))
    :render
    (fn [] [:div {:style {:width "100%" :height "100%"}}])}))

(defn tab-button [active? label on-click]
  [:button {:class (str "py-2 px-4 font-medium text-sm transition-colors border-b-2 "
                        (if active?
                          (str "border-[#f0dfaf] " t/text-accent)
                          (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
            :on-click on-click}
   label])

(defn panel-render []
  (let [data-input @(rf/subscribe [::data-input])
        config-input @(rf/subscribe [::config-input])
        parsed-data @(rf/subscribe [::parsed-data])
        active-left-tab (or @(rf/subscribe [::active-left-tab]) :data)
        active-right-tab (or @(rf/subscribe [::active-right-tab]) :plot)]
    [l/split-view {:ratio :1-1}
     ;; Left Column (Inputs)
     [l/flex-col {:class "h-full border-r border-[#3f3f3f]"}
      ;; Left Tabs
      [l/flex-row {:class (str "justify-between border-b " t/border-default " px-2 " t/bg-toolbar)}
       [l/flex-row {:class "space-x-2"}
        [tab-button (= active-left-tab :data) "Data" #(rf/dispatch [::set-active-left-tab :data])]
        [tab-button (= active-left-tab :config) "Config" #(rf/dispatch [::set-active-left-tab :config])]]
       ;; Toolbar for Config
       (when (= active-left-tab :config)
         [c/button-xs {:on-click #(rf/dispatch [::portal/submit (try (js/JSON.parse config-input) (catch js/Error _ config-input))])}
          "Send to Portal"])]

      ;; Left Content
      [:div {:class "flex-grow overflow-hidden relative"}
       (case active-left-tab
         :data
         [l/flex-col {:class "h-full"}
          [l/flex-row {:class "p-2 gap-2 flex-wrap border-b border-[#3f3f3f] bg-[#1c2128]"}
           [c/button-xs {:on-click #(load-example :csv :columnar)} "CSV"]
           [c/button-xs {:on-click #(load-example :tsv :columnar)} "TSV"]
           [c/button-xs {:on-click #(load-example :markdown :columnar)} "MD"]
           [c/button-xs {:on-click #(load-example :json :row-maps)} "JSON Maps"]
           [c/button-xs {:on-click #(load-example :json :row-arrays)} "JSON Arrays"]
           [c/button-xs {:on-click #(load-example :edn :row-maps)} "EDN Maps"]
           [c/button-xs {:on-click #(load-example :edn :columnar)} "EDN Col"]]
          [:div {:class "flex-grow relative"}
           [editor/monaco-editor
            {:value data-input
             :language "plaintext"
             :options {:rulers [80] :minimap {:enabled false}}
             :on-change (fn [val]
                          (rf/dispatch [::set-data-input val])
                          (rf/dispatch [::parse-data]))}]]]

         :config
         [:div {:class "h-full relative"}
          [editor/monaco-editor
           {:value config-input
            :language "json"
            :options {:rulers [80] :minimap {:enabled false}}
            :on-change #(rf/dispatch [::set-config-input %])}]]
         nil)]]

     ;; Right Column (Outputs)
     [l/flex-col {:class "h-full"}
      ;; Right Tabs
      [l/flex-row {:class (str "border-b " t/border-default " px-2 " t/bg-toolbar)}
       [tab-button (= active-right-tab :plot) "Plot" #(rf/dispatch [::set-active-right-tab :plot])]
       [tab-button (= active-right-tab :parsed) "Parsed Data" #(rf/dispatch [::set-active-right-tab :parsed])]]

      ;; Right Content
      [:div {:class "flex-grow overflow-hidden relative bg-white"}
       (case active-right-tab
         :plot
         [:div {:class "h-full w-full overflow-auto p-4"}
          [vega-viz {:spec config-input :data parsed-data}]]

         :parsed
         [:div {:class (str "h-full w-full " t/bg-page)}
          [editor/monaco-editor
           {:value (with-out-str (pprint parsed-data))
            :language "clojure"
            :options {:readOnly true :minimap {:enabled false}}}]]
         nil)]]]))

(defn panel []
  (r/create-class
   {:display-name "vega-lite-panel"
    :component-did-mount #(rf/dispatch [::initialize])
    :reagent-render panel-render}))
