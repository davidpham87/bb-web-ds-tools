(ns bb-web-ds-tools.views.vega-lite.core
  (:require
   ["react-dom" :as ReactDOM]
   [bb-web-ds-tools.components.common :as c]
   [bb-web-ds-tools.components.editor :as editor]
   [bb-web-ds-tools.components.layout :as l]
   [bb-web-ds-tools.components.navigation :as nav]
   [bb-web-ds-tools.portal :as portal :refer [portal-panel]]
   [bb-web-ds-tools.theme :as t]
   [bb-web-ds-tools.utils.dataset-processing :as dp]
   [bb-web-ds-tools.views.datasets :as datasets]
   [bb-web-ds-tools.views.vega-lite.common :as common]
   [bb-web-ds-tools.views.vega-lite.events :as events]
   [bb-web-ds-tools.views.vega-lite.subs :as subs]
   [cljs.pprint :refer [pprint]]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defn load-example
  "Loads a Vega-Lite example into the state."
  [fmt structure]
  (rf/dispatch [::events/set-format fmt])
  (rf/dispatch [::events/set-structure structure])
  (rf/dispatch [::events/set-data-input (dp/example-data fmt structure)])
  (rf/dispatch [::events/parse-data]))

(defn render-vega
  "Renders the Vega-Lite visualization into the DOM."
  [component spec-obj data]
  (when (and spec-obj data)
    (try
      (let [spec-with-data (js/Object.assign #js{} spec-obj)]
        (set! (.-data spec-with-data) #js{:values (clj->js data)})
        (js/vegaEmbed (ReactDOM/findDOMNode component) spec-with-data))
      (catch js/Error e (js/console.warn "Vega render error" e)))))

(defn vega-viz
  "Wrapper component for Vega-Lite visualization."
  [{:keys [spec-obj data]}]
  (r/create-class
   {:display-name "vega-viz"
    :component-did-mount
    (fn [this]
      (render-vega this (:spec-obj (r/props this)) (:data (r/props this))))
    :component-did-update
    (fn [this]
      (render-vega this (:spec-obj (r/props this)) (:data (r/props this))))
    :render
    (fn [] [:div {:style {:width "100%" :height "100%"}}])}))

(defn save-config-modal []
  (let [open? (r/atom false)
        name-input (r/atom "")]
    (fn []
      [:div {:class "relative inline-block"}
       [c/button {:size :sm
                  :on-click #(reset! open? true)} "Save"]
       (when @open?
         [:div {:class (str "absolute top-8 right-0 z-50 p-2 rounded shadow-lg border "
                            t/bg-input " " t/border-default " flex items-center space-x-2")}
          [c/input {:class "w-32 text-xs"
                    :placeholder "Name"
                    :value @name-input
                    :on-change #(reset! name-input (.. % -target -value))}]
          [c/button {:size :sm
                     :class "text-green-400 !px-2"
                     :on-click #(do (rf/dispatch [::events/save-config @name-input])
                                    (reset! open? false))}
           "✓"]
          [c/button {:size :sm
                     :class "text-red-400 !px-2"
                     :on-click #(reset! open? false)}
           "✗"]])])))

(defn data-tab-content []
  (let [data-input @(rf/subscribe [::subs/data-input])
        format @(rf/subscribe [::subs/format])
        datasets @(rf/subscribe [::datasets/items])]
    [l/flex-col {:class "h-full"}
     [l/flex-row {:class "p-2 gap-2 flex-wrap border-b border-[#3f3f3f] bg-[#1c2128] items-center"}
      [c/button {:size :sm :on-click #(load-example :csv :columnar)} "CSV"]
      [c/button {:size :sm :on-click #(load-example :tsv :columnar)} "TSV"]
      [c/button {:size :sm :on-click #(load-example :markdown :columnar)} "MD"]
      [c/button {:size :sm :on-click #(load-example :json :row-maps)} "JSON Maps"]
      [c/button {:size :sm :on-click #(load-example :json :row-arrays)} "JSON Arrays"]
      [c/button {:size :sm :on-click #(load-example :edn :row-maps)} "EDN Maps"]
      [c/button {:size :sm :on-click #(load-example :edn :columnar)} "EDN Col"]
      [:div {:class "relative group ml-auto"}
       [c/button {:size :sm
                  :class "border-dashed border-white/50"} "Import Dataset ▼"]
       [:div {:class (str "absolute hidden group-hover:block right-0 " t/bg-input " border " t/border-default " p-1 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto")}
        (if (seq datasets)
          (for [[id ds] datasets]
            [:div {:key id
                   :class (str "cursor-pointer px-2 py-1 text-xs " t/bg-item-hover " truncate")
                   :on-click #(rf/dispatch [::events/import-dataset id])}
             (:name ds)])
          [:div {:class "text-xs text-gray-500 p-2"} "No datasets created."])]]]
     [:div {:class "flex-grow relative"}
      [editor/monaco-editor
       {:value data-input
        :language (if (= format :json) "json" "clojure")
        :options {:rulers [80] :minimap {:enabled false}}
        :on-change (fn [val]
                     (rf/dispatch [::events/set-data-input val])
                     (rf/dispatch [::events/parse-data]))}]]]))

(defn config-tab-content []
  (let [config-input @(rf/subscribe [::subs/config-input])
        config-mode @(rf/subscribe [::subs/config-mode])
        saved-configs @(rf/subscribe [::subs/saved-configs])
        active-config-name @(rf/subscribe [::subs/active-config-name])]
    [l/flex-col {:class "h-full"}
     [l/flex-row {:class "p-2 gap-2 border-b border-[#3f3f3f] bg-[#1c2128] items-center justify-between"}
      [l/flex-row {:class "space-x-2 items-center text-xs text-gray-400"}
       [:span "Mode:"]
       [:label {:class "flex items-center space-x-1 cursor-pointer"}
        [:input {:type "radio" :name "config-mode" :checked (= config-mode :json)
                 :on-change #(rf/dispatch [::events/set-config-mode :json])}]
        [:span "JSON"]]
       [:label {:class "flex items-center space-x-1 cursor-pointer"}
        [:input {:type "radio" :name "config-mode" :checked (= config-mode :edn)
                 :on-change #(rf/dispatch [::events/set-config-mode :edn])}]
        [:span "EDN"]]]

      [l/flex-row {:class "space-x-2 items-center"}
       (when (seq saved-configs)
         [:select {:class (str "text-xs py-1 px-2 rounded " t/bg-input " " t/border-default)
                   :value (or active-config-name "")
                   :on-change #(rf/dispatch [::events/load-config (.. % -target -value)])}
          [:option {:value ""} "Select Config..."]
          (for [name (keys saved-configs)]
            [:option {:key name :value name} name])])
       [save-config-modal]
       (when active-config-name
         [c/button {:size :sm
                    :class "text-red-400 !px-2"
                    :on-click #(rf/dispatch [::events/delete-config active-config-name])}
          [c/dustbin-icon]])]]

     [:div {:class "flex-grow relative"}
      [editor/monaco-editor
       {:value config-input
        :language (if (= config-mode :json) "json" "clojure")
        :options {:rulers [80] :minimap {:enabled false}}
        :on-change #(rf/dispatch [::events/set-config-input %])}]]]))

(defn left-panel []
  (let [active-left-tab (or @(rf/subscribe [::subs/active-left-tab]) :data)]
    [:div {:class "h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] w-full md:max-w-3xl flex-shrink-0"}
     [l/flex-col {:class "h-full"}
      [:div {:class "flex-grow overflow-hidden relative"}
       [l/flex-row {:class "items-center gap-1"}
        [c/nav-tabs {:tabs [{:id :data :label "Data"}
                            {:id :config :label "Config"}]
                     :active-tab-id active-left-tab
                     :class "border-b-0 bg-transparent px-0 text-xs"
                     :on-change #(rf/dispatch [::events/set-active-left-tab %])}]
        [c/help-button
         {:href (nav/get-wiki-url :vega-lite)
          :title "Help: Vega-Lite"
          :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]
       (case active-left-tab
         :data [data-tab-content]
         :config [config-tab-content]
         nil)]]]))

(defn right-panel []
  (let [active-right-tab (or @(rf/subscribe [::subs/active-right-tab]) :plot)
        parsed-data @(rf/subscribe [::subs/parsed-data])
        inferred-schema @(rf/subscribe [::subs/inferred-schema])
        parsed-config-obj @(rf/subscribe [::subs/parsed-config-obj])]
    [:div {:class "h-1/2 md:h-full overflow-auto flex-grow"}
     [l/flex-col {:class "h-full"}
      [c/nav-tabs {:tabs [{:id :plot :label "Plot"}
                          {:id :parsed :label "Parsed Data"}
                          {:id :schema :label "Schema"}
                          {:id :portal :label "Portal"}]
                   :active-tab-id active-right-tab
                   :class "border-b-0 bg-transparent px-0 text-xs"
                   :on-change #(rf/dispatch [::events/set-active-right-tab %])}]

      [:div {:class "flex-grow overflow-hidden relative bg-white"}
       (case active-right-tab
         :plot
         [:div {:class "h-full w-full overflow-auto p-2"}
          [:div {:class "mb-2"}
           [c/button {:size :sm
                      :on-click #(let [config-edn (js->clj parsed-config-obj :keywordize-keys true)
                                       final-edn (assoc config-edn :data {:values parsed-data})]
                                   (rf/dispatch [::portal/submit final-edn]))}
            "Send to Portal"]]
          [vega-viz {:spec-obj parsed-config-obj :data parsed-data}]]

         :parsed
         [:div {:class (str "h-full w-full " t/bg-page)}
          ^{:key active-right-tab}
          [editor/monaco-editor
           {:value (with-out-str (pprint (common/limit-preview parsed-data)))
            :language "clojure"
            :options {:readOnly true :minimap {:enabled false}}}]]

         :schema
         (if (seq parsed-data)
           [:div {:class (str "h-full w-full " t/bg-page)}
            ^{:key active-right-tab}
            [editor/monaco-editor
             {:value (with-out-str (pprint inferred-schema))
              :language "clojure"
              :options {:readOnly true :minimap {:enabled false}}}]]
           [:div {:class (str "h-full w-full flex items-center justify-center " t/bg-page " " t/text-secondary)}
            "No data available to infer schema."])

         :portal
         [:div {:class "w-full h-full flex-grow overflow-hidden"}
          ^{:key active-right-tab}
          (let [config-edn (js->clj parsed-config-obj :keywordize-keys true)
                final-edn (assoc config-edn :data {:values parsed-data})]
            [portal-panel final-edn :portal.viewer/vega-lite])]
         nil)]]]))

(defn panel-render []
  [l/flex-col {:class "h-full w-full"}
   [:div {:class "flex flex-col md:flex-row h-full w-full overflow-hidden"}
    [left-panel]
    [right-panel]]])

(defn panel []
  [l/create-panel {:display-name "vega-lite-panel"
                   :init-event [::events/initialize]
                   :render-fn panel-render}])
