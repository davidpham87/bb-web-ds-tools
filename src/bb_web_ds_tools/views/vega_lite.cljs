(ns bb-web-ds-tools.views.vega-lite
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
   [cljs.pprint :refer [pprint]]
   [clojure.edn :as edn]
   [malli.provider :as mp]
   [re-frame.core :as rf]
   [reagent.core :as r]))

;; --- State ---

(def default-config-json "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}")

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (let [user-input-exists? (get-in db [:user-input :vega-lite])
         component-state-exists? (::vega-lite db)]
     (cond-> db
       (not user-input-exists?)
       (assoc-in [:user-input :vega-lite]
                 {:saved-configs {}
                  :default {::data-input ""
                            ::config-input default-config-json
                            ::config-mode :json
                            ::active-config-name nil}})

       (not component-state-exists?)
       (assoc ::vega-lite
              {::format :csv
               ::structure :columnar
               ::parsed-data nil
               ::inferred-schema nil
               ::active-left-tab :data
               ::active-right-tab :plot})))))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input]
   (get-in user-input [:vega-lite :default])))

(rf/reg-sub
 ::saved-configs
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input]
   (get-in user-input [:vega-lite :saved-configs])))

(rf/reg-sub
 ::component-root
 (fn [db]
   (::vega-lite db)))

(rf/reg-sub
 ::data-input
 :<- [::user-input-root]
 (fn [root]
   (::data-input root)))

(rf/reg-sub
 ::config-input
 :<- [::user-input-root]
 (fn [root]
   (::config-input root)))

(rf/reg-sub
 ::config-mode
 :<- [::user-input-root]
 (fn [root]
   (::config-mode root)))

(rf/reg-sub
 ::active-config-name
 :<- [::user-input-root]
 (fn [root]
   (::active-config-name root)))

(rf/reg-sub
 ::format
 :<- [::component-root]
 (fn [root]
   (::format root)))

(rf/reg-sub
 ::structure
 :<- [::component-root]
 (fn [root]
   (::structure root)))

(rf/reg-sub
 ::parsed-data
 :<- [::component-root]
 (fn [root]
   (::parsed-data root)))

(rf/reg-sub
 ::inferred-schema
 :<- [::component-root]
 (fn [root]
   (::inferred-schema root)))

(rf/reg-sub
 ::active-left-tab
 :<- [::component-root]
 (fn [root]
   (::active-left-tab root)))

(rf/reg-sub
 ::active-right-tab
 :<- [::component-root]
 (fn [root]
   (::active-right-tab root)))

(rf/reg-event-db
 ::set-data-input
 (fn [db [_ val]]
   (assoc-in db [:user-input :vega-lite :default ::data-input] val)))

(rf/reg-event-db
 ::set-config-input
 (fn [db [_ val]]
   (assoc-in db [:user-input :vega-lite :default ::config-input] val)))

(rf/reg-event-db
 ::set-config-mode
 (fn [db [_ new-mode]]
   (let [user-input (get-in db [:user-input :vega-lite :default])
         current-mode (::config-mode user-input)
         current-input (::config-input user-input)
         new-input (cond
                     (and (= current-mode :json) (= new-mode :edn))
                     (try
                       (let [obj (js/JSON.parse current-input)
                             edn-data (js->clj obj :keywordize-keys true)]
                         (with-out-str (pprint edn-data)))
                       (catch js/Error _ current-input))

                     (and (= current-mode :edn) (= new-mode :json))
                     (try
                       (let [edn-data (edn/read-string current-input)
                             obj (clj->js edn-data)]
                         (js/JSON.stringify obj nil 2))
                       (catch js/Error _ current-input))

                     :else current-input)]
     (-> db
         (assoc-in [:user-input :vega-lite :default ::config-mode] new-mode)
         (assoc-in [:user-input :vega-lite :default ::config-input] new-input)))))

(rf/reg-event-db
 ::set-active-config-name
 (fn [db [_ name]]
   (assoc-in db [:user-input :vega-lite :default ::active-config-name] name)))

(rf/reg-event-db
 ::set-format
 (fn [db [_ fmt]]
   (assoc-in db [::vega-lite ::format] fmt)))

(rf/reg-event-db
 ::set-structure
 (fn [db [_ s]]
   (assoc-in db [::vega-lite ::structure] s)))

(rf/reg-event-db
 ::set-active-left-tab
 (fn [db [_ tab]]
   (assoc-in db [::vega-lite ::active-left-tab] tab)))

(rf/reg-event-db
 ::set-active-right-tab
 (fn [db [_ tab]]
   (assoc-in db [::vega-lite ::active-right-tab] tab)))

(rf/reg-event-db
 ::save-config
 (fn [db [_ name]]
   (let [root (get-in db [:user-input :vega-lite :default])
         config (select-keys root [::config-input ::config-mode])]
     (-> db
         (assoc-in [:user-input :vega-lite :saved-configs name] config)
         (assoc-in [:user-input :vega-lite :default ::active-config-name] name)))))

(rf/reg-event-db
 ::load-config
 (fn [db [_ name]]
   (let [config (get-in db [:user-input :vega-lite :saved-configs name])]
     (-> db
         (update-in [:user-input :vega-lite :default] merge config)
         (assoc-in [:user-input :vega-lite :default ::active-config-name] name)))))

(rf/reg-event-db
 ::delete-config
 (fn [db [_ name]]
   (let [active-name (get-in db [:user-input :vega-lite :default ::active-config-name])]
     (cond-> db
       true (update-in [:user-input :vega-lite :saved-configs] dissoc name)
       (= active-name name) (assoc-in [:user-input :vega-lite :default ::active-config-name] nil)))))

(rf/reg-event-fx
 ::import-dataset
 (fn [{:keys [db]} [_ dataset-id]]
   (let [datasets (get-in db [:user-input :datasets :items])
         dataset (get datasets dataset-id)
         data (:data dataset)
         clean-data (mapv #(dissoc % :_uuid) data)
         data-str (with-out-str (pprint clean-data))]
     {:db (-> db
              (assoc-in [:user-input :vega-lite :default ::data-input] data-str)
              (assoc-in [::vega-lite ::format] :edn)
              (assoc-in [::vega-lite ::structure] :row-maps)
              (assoc-in [::vega-lite ::active-left-tab] :config)
              (assoc-in [::vega-lite ::active-right-tab] :plot))
      :dispatch [::parse-data]})))

(defn limit-preview
  "Limits the data for preview to the first 100 observations."
  [data]
  (let [limit 100]
    (cond
      (sequential? data) (into [] (take limit data))
      (map? data) (into {} (map (fn [[k v]] [k (if (sequential? v) (into [] (take limit v)) v)]) data))
      :else data)))

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

(rf/reg-sub
 ::parsed-config-obj
 :<- [::config-input]
 :<- [::config-mode]
 (fn [[input mode]]
   (try
     (case mode
       :json (js/JSON.parse input)
       :edn (clj->js (edn/read-string input)))
     (catch js/Error _ nil))))

;; --- Components ---

(defn load-example
  "Loads a Vega-Lite example into the state.

  Args:
    fmt (keyword): The data format.
    structure (keyword): The data structure.

  Returns:
    nil: Dispatches events."
  [fmt structure]
  (rf/dispatch [::set-format fmt])
  (rf/dispatch [::set-structure structure])
  (rf/dispatch [::set-data-input (dp/example-data fmt structure)])
  (rf/dispatch [::parse-data]))

(defn render-vega
  "Renders the Vega-Lite visualization into the DOM.

  Args:
    component (object): The React component instance.
    spec-obj (object): The Vega-Lite specification.
    data (object): The data to visualize.

  Returns:
    nil: Modifies the DOM."
  [component spec-obj data]
  (when (and spec-obj data)
    (try
      (let [spec-with-data (js/Object.assign #js{} spec-obj)]
        (set! (.-data spec-with-data) #js{:values (clj->js data)})
        (js/vegaEmbed (ReactDOM/findDOMNode component) spec-with-data))
      (catch js/Error e (js/console.warn "Vega render error" e)))))

(defn vega-viz
  "Wrapper component for Vega-Lite visualization.

  Args:
    props (map): Contains :spec-obj and :data.

  Returns:
    vector: A hiccup vector."
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

(defn tab-button
  "Renders a tab button.

  Args:
    active? (boolean): Whether the tab is active.
    label (string): The tab label.
    on-click (fn): Click handler.

  Returns:
    vector: A hiccup vector."
  [active? label on-click]
  [:button {:class (str "py-2 px-4 font-medium text-sm transition-colors border-b-2 "
                        (if active?
                          (str "border-[#f0dfaf] " t/text-accent)
                          (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
            :on-click on-click}
   label])

(defn save-config-modal
  "Renders a modal to save the current configuration.

  Returns:
    vector: A hiccup vector."
  []
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
                     :on-click #(do (rf/dispatch [::save-config @name-input])
                                    (reset! open? false))}
           "✓"]
          [c/button {:size :sm
                     :class "text-red-400 !px-2"
                     :on-click #(reset! open? false)}
           "✗"]])])))

(defn panel-render
  "Renders the main Vega-Lite view content.

  Returns:
    vector: A hiccup vector."
  []
  (let [data-input @(rf/subscribe [::data-input])
        config-input @(rf/subscribe [::config-input])
        parsed-data @(rf/subscribe [::parsed-data])
        active-left-tab (or @(rf/subscribe [::active-left-tab]) :data)
        active-right-tab (or @(rf/subscribe [::active-right-tab]) :plot)
        datasets @(rf/subscribe [::datasets/items])
        config-mode @(rf/subscribe [::config-mode])
        saved-configs @(rf/subscribe [::saved-configs])
        active-config-name @(rf/subscribe [::active-config-name])
        parsed-config-obj @(rf/subscribe [::parsed-config-obj])
        format @(rf/subscribe [::format])
        inferred-schema @(rf/subscribe [::inferred-schema])]
    [l/flex-col {:class "h-full w-full"}
     ;; Tabs Navigation (Portaled to Top Bar)
     [:div {:class "flex flex-col md:flex-row h-full w-full overflow-hidden"}
      ;; Left Column (Inputs)
      [:div {:class "h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] w-full md:max-w-3xl flex-shrink-0"}
       [l/flex-col {:class "h-full"}
        ;; Left Content
        [:div {:class "flex-grow overflow-hidden relative"}
         [l/flex-row {:class "items-center gap-1"}
          [c/tabs {:tabs [{:id :data :label "Data"}
                          {:id :config :label "Config"}]
                   :active-tab-id active-left-tab
                   :class "border-b-0 bg-transparent px-0"
                   :on-change #(rf/dispatch [::set-active-left-tab %])}]
          [c/help-button
           {:href (nav/get-wiki-url :vega-lite)
            :title "Help: Vega-Lite"
            :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]
         (case active-left-tab
           :data
           [l/flex-col {:class "h-full"}
            [l/flex-row {:class "p-2 gap-2 flex-wrap border-b border-[#3f3f3f] bg-[#1c2128] items-center"}
             [c/button {:size :sm :on-click #(load-example :csv :columnar)} "CSV"]
             [c/button {:size :sm :on-click #(load-example :tsv :columnar)} "TSV"]
             [c/button {:size :sm :on-click #(load-example :markdown :columnar)} "MD"]
             [c/button {:size :sm :on-click #(load-example :json :row-maps)} "JSON Maps"]
             [c/button {:size :sm :on-click #(load-example :json :row-arrays)} "JSON Arrays"]
             [c/button {:size :sm :on-click #(load-example :edn :row-maps)} "EDN Maps"]
             [c/button {:size :sm :on-click #(load-example :edn :columnar)} "EDN Col"]
            ;; Dataset Import
             [:div {:class "relative group ml-auto"}
              [c/button {:size :sm
                         :class "border-dashed border-white/50"} "Import Dataset ▼"]
              [:div {:class (str "absolute hidden group-hover:block right-0 " t/bg-input " border " t/border-default " p-1 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto")}
               (if (seq datasets)
                 (for [[id ds] datasets]
                   [:div {:key id
                          :class (str "cursor-pointer px-2 py-1 text-xs " t/bg-item-hover " truncate")
                          :on-click #(rf/dispatch [::import-dataset id])}
                    (:name ds)])
                 [:div {:class "text-xs text-gray-500 p-2"} "No datasets created."])]]]
            [:div {:class "flex-grow relative"}
             [editor/monaco-editor
              {:value data-input
               :language (if (= format :json) "json" "clojure")
               :options {:rulers [80] :minimap {:enabled false}}
               :on-change (fn [val]
                            (rf/dispatch [::set-data-input val])
                            (rf/dispatch [::parse-data]))}]]]

           :config
           [l/flex-col {:class "h-full"}
            [l/flex-row {:class "p-2 gap-2 border-b border-[#3f3f3f] bg-[#1c2128] items-center justify-between"}
            ;; Mode Selection
             [l/flex-row {:class "space-x-2 items-center text-xs text-gray-400"}
              [:span "Mode:"]
              [:label {:class "flex items-center space-x-1 cursor-pointer"}
               [:input {:type "radio" :name "config-mode" :checked (= config-mode :json)
                        :on-change #(rf/dispatch [::set-config-mode :json])}]
               [:span "JSON"]]
              [:label {:class "flex items-center space-x-1 cursor-pointer"}
               [:input {:type "radio" :name "config-mode" :checked (= config-mode :edn)
                        :on-change #(rf/dispatch [::set-config-mode :edn])}]
               [:span "EDN"]]]

            ;; Config Management
             [l/flex-row {:class "space-x-2 items-center"}
              (when (seq saved-configs)
                [:select {:class (str "text-xs py-1 px-2 rounded " t/bg-input " " t/border-default)
                          :value (or active-config-name "")
                          :on-change #(rf/dispatch [::load-config (.. % -target -value)])}
                 [:option {:value ""} "Select Config..."]
                 (for [name (keys saved-configs)]
                   [:option {:key name :value name} name])])
              [save-config-modal]
              (when active-config-name
                [c/button {:size :sm
                           :class "text-red-400 !px-2"
                           :on-click #(rf/dispatch [::delete-config active-config-name])}
                 [c/dustbin-icon]])]]

            [:div {:class "flex-grow relative"}
             [editor/monaco-editor
              {:value config-input
               :language (if (= config-mode :json) "json" "clojure")
               :options {:rulers [80] :minimap {:enabled false}}
               :on-change #(rf/dispatch [::set-config-input %])}]]]
           nil)]]]

     ;; Right Column (Outputs)
      [:div {:class "h-1/2 md:h-full overflow-auto flex-grow"}
       [l/flex-col {:class "h-full"}
        ;; Right Tabs
        [c/tabs {:tabs [{:id :plot :label "Plot"}
                        {:id :parsed :label "Parsed Data"}
                        {:id :schema :label "Schema"}
                        {:id :portal :label "Portal"}]
                 :active-tab-id active-right-tab
                 :class "border-b-0 bg-transparent px-0"
                 :on-change #(rf/dispatch [::set-active-right-tab %])}]

       ;; Right Content
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
             {:value (with-out-str (pprint (limit-preview parsed-data)))
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
           nil)]]]]]))

(defn panel
  "Main component for the Vega-Lite view. Initializes on mount.

  Returns:
    vector: A hiccup vector."
  []
  [l/create-panel {:display-name "vega-lite-panel"
                   :init-event [::initialize]
                   :render-fn panel-render}])
