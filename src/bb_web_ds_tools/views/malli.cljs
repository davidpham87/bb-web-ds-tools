(ns bb-web-ds-tools.views.malli
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [bb-web-ds-tools.components.common :as c]
   [bb-web-ds-tools.components.editor :as editor]
   [bb-web-ds-tools.components.layout :as l]
   [bb-web-ds-tools.components.layout.tool-view :refer [tool-view]]
   [bb-web-ds-tools.components.malli :as c-malli]
   [bb-web-ds-tools.components.navigation :as nav]
   [bb-web-ds-tools.portal :as portal :refer [portal-panel]]
   [bb-web-ds-tools.theme :as t]
   [bb-web-ds-tools.views.datasets :as datasets]
   [bb-web-ds-tools.utils.dataset-processing :as dp]))

;; Helper for state extraction
(defn get-malli-state
  "Extracts the malli view state from the application database.

  Args:
    db (map): The application state map.

  Returns:
    map: The extracted state containing schemas, inputs, and results."
  [db]
  (let [user-input (get-in db [:user-input :malli :default])
        component-state (::malli db)]
    {:schema-text (:schema-text user-input)
     :inference-input (:inference-input user-input)
     :max-enum-values (get user-input :max-enum-values 10)
     :generated-data (:generated-data component-state)
     :inferred-schema (:inferred-schema component-state)
     :input-fmt (:input-format component-state)
     :samples (get component-state :generation-samples 1)
     :generation-fmt (get component-state :generation-format :edn)
     :active-tab (:active-tab component-state)
     :validation-result (:validation-result component-state)
     :json-schema-result (:json-schema-result component-state)}))

;; Event handlers
(rf/reg-event-db
 :malli/initialize
 (fn [db _]
   (let [user-input-exists? (get-in db [:user-input :malli :default])
         component-state-exists? (::malli db)]
     (cond-> db
       (not user-input-exists?)
       (assoc-in [:user-input :malli :default]
                 {:schema-text "[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]"
                  :inference-input "{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}"
                  :max-enum-values 10})

       (not component-state-exists?)
       (assoc ::malli
              {:generated-data ""
               :input-format :edn
               :inferred-schema ""
               :active-tab :inference
               :generation-samples 1
               :generation-format :edn})))))

(rf/reg-event-db
 :malli/update-schema-text
 (fn [db [_ text]]
   (assoc-in db [:user-input :malli :default :schema-text] text)))

(rf/reg-event-db
 :malli/update-inference-input
 (fn [db [_ text]]
   (assoc-in db [:user-input :malli :default :inference-input] text)))

(rf/reg-event-db
 :malli/set-max-enum-values
 (fn [db [_ n]]
   (assoc-in db [:user-input :malli :default :max-enum-values] (c-malli/parse-int n))))

(rf/reg-event-db
 :malli/set-active-tab
 (fn [db [_ tab]]
   (assoc-in db [::malli :active-tab] tab)))

(rf/reg-event-db
 :malli/set-input-format
 (fn [db [_ fmt]]
   (assoc-in db [::malli :input-format] fmt)))

(rf/reg-event-db
 :malli/set-generation-samples
 (fn [db [_ n]]
   (assoc-in db [::malli :generation-samples] (c-malli/parse-int n))))

(rf/reg-event-db
 :malli/set-generation-format
 (fn [db [_ fmt]]
   (assoc-in db [::malli :generation-format] fmt)))

(rf/reg-event-fx
 :malli/parse-schema-and-generate
 (fn [{:keys [db]} _]
   (let [{:keys [schema-text]} (get-malli-state db)
         result (c-malli/parse-schema-and-generate schema-text)]
     (if (:success result)
       {:dispatch [:malli/generate-data (:schema result)]}
       {:db (assoc-in db [::malli :generated-data] (:error result))}))))

(rf/reg-event-fx
 :malli/generate-data
 (fn [{:keys [db]} [_ schema]]
   (let [{:keys [samples generation-fmt]} (get-malli-state db)
         result (c-malli/generate-data schema samples generation-fmt)
         output (if (:success result) (:output result) (:error result))]
     {:db (assoc-in db [::malli :generated-data] output)})))

(rf/reg-event-fx
 :malli/infer-schema
 (fn [{:keys [db]} _]
   (let [{:keys [inference-input input-fmt max-enum-values]} (get-malli-state db)
         input-data (case input-fmt
                      :edn (c-malli/detect-and-parse inference-input)
                      :json (dp/parse-dataset :json :row-maps inference-input)
                      (dp/parse-dataset input-fmt :columnar inference-input))
         result (c-malli/infer-schema input-data max-enum-values)
         output (if (:success result) (c-malli/pretty-print-str (:schema result)) (str "Invalid input data for format " (name input-fmt) "."))]
     {:db (assoc-in db [::malli :inferred-schema] output)})))

(rf/reg-event-fx
 :malli/save-dataset
 (fn [{:keys [db]} _]
   (let [{:keys [generated-data generation-fmt]} (get-malli-state db)
         parsed-data (c-malli/save-dataset-data generated-data generation-fmt)]
     (if parsed-data
       {:dispatch [::datasets/add-dataset {:name (str "Malli Generated " (rand-int 1000))
                                           :data parsed-data}]}
       {}))))

(rf/reg-event-db
 :malli/load-dataset
 (fn [db [_ dataset-id]]
   (let [dataset (get-in db [:user-input :datasets :items dataset-id])
         data (:data dataset)]
     (if data
       (-> db
           (assoc-in [:user-input :malli :default :inference-input] (c-malli/pretty-print-str data))
           (assoc-in [::malli :input-format] :edn))
       db))))

(rf/reg-event-fx
 :malli/validate
 (fn [{:keys [db]} _]
   (let [{:keys [schema-text inference-input input-fmt]} (get-malli-state db)
         schema-result (c-malli/parse-schema-and-generate schema-text)
         input-data (case input-fmt
                      :edn (c-malli/detect-and-parse inference-input)
                      (dp/parse-dataset input-fmt inference-input))]
     (if (:success schema-result)
       (let [result (c-malli/validate-data (:schema schema-result) input-data)]
         {:db (assoc-in db [::malli :validation-result] (:result result))})
       {:db (assoc-in db [::malli :validation-result] (:error schema-result))}))))

(rf/reg-event-fx
 :malli/transform-json
 (fn [{:keys [db]} _]
   (let [{:keys [schema-text]} (get-malli-state db)
         schema-result (c-malli/parse-schema-and-generate schema-text)]
     (if (:success schema-result)
       (let [result (c-malli/transform-to-json-schema (:schema schema-result))
             output (if (:success result) (:json-schema result) (:error result))]
         {:db (assoc-in db [::malli :json-schema-result] output)})
       {:db (assoc-in db [::malli :json-schema-result] (:error schema-result))}))))

;; Subscriptions
(rf/reg-sub
 :malli/user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get-in user-input [:malli :default])))

(rf/reg-sub
 :malli/component-root
 (fn [db _]
   (::malli db)))

(rf/reg-sub
 :malli/schema-text
 :<- [:malli/user-input-root]
 (fn [root _]
   (:schema-text root)))

(rf/reg-sub
 :malli/generated-data
 :<- [:malli/component-root]
 (fn [root _]
   (:generated-data root)))

(rf/reg-sub
 :malli/inference-input
 :<- [:malli/user-input-root]
 (fn [root _]
   (:inference-input root)))

(rf/reg-sub
 :malli/max-enum-values
 :<- [:malli/user-input-root]
 (fn [root _]
   (get root :max-enum-values 10)))

(rf/reg-sub
 :malli/inferred-schema
 :<- [:malli/component-root]
 (fn [root _]
   (:inferred-schema root)))

(rf/reg-sub
 :malli/active-tab
 :<- [:malli/component-root]
 (fn [root _]
   (:active-tab root)))

(rf/reg-sub
 :malli/input-format
 :<- [:malli/component-root]
 (fn [root _]
   (get root :input-format :edn)))

(rf/reg-sub
 :malli/generation-samples
 :<- [:malli/component-root]
 (fn [root _]
   (get root :generation-samples 1)))

(rf/reg-sub
 :malli/generation-format
 :<- [:malli/component-root]
 (fn [root _]
   (get root :generation-format :edn)))

(rf/reg-sub
 :malli/validation-result
 :<- [:malli/component-root]
 (fn [root _]
   (:validation-result root)))

(rf/reg-sub
 :malli/json-schema-result
 :<- [:malli/component-root]
 (fn [root _]
   (:json-schema-result root)))

;; Mobile view state
(rf/reg-event-db
 :malli/set-mobile-view-mode
 (fn [db [_ mode]]
   (assoc db ::mobile-view-mode mode)))

(rf/reg-sub
 ::mobile-view-mode
 (fn [db _]
   (get db ::mobile-view-mode :editor)))

(defn mobile-view-toggle [mode set-mode-fn]
  [:div {:class "flex flex-row space-x-4 p-2 md:hidden justify-center bg-[#2d2d2d] border-b border-[#3f3f3f]"}
   [:label {:class "flex items-center space-x-2 cursor-pointer"}
    [:input {:type "radio"
             :name "malli-mobile-view-mode"
             :checked (= mode :editor)
             :on-change #(set-mode-fn :editor)
             :class "form-radio text-blue-600"}]
    [:span "Editor"]]
   [:label {:class "flex items-center space-x-2 cursor-pointer"}
    [:input {:type "radio"
             :name "malli-mobile-view-mode"
             :checked (= mode :portal)
             :on-change #(set-mode-fn :portal)
             :class "form-radio text-blue-600"}]
    [:span "Portal"]]])

;; Combined Subscriptions

(rf/reg-sub
 :malli/inference-view-state
 :<- [:malli/inference-input]
 :<- [:malli/inferred-schema]
 :<- [::datasets/items]
 :<- [:malli/input-format]
 :<- [:malli/max-enum-values]
 (fn [[inference-input inferred-schema datasets input-format max-enum-values] _]
   {:inference-input inference-input
    :inferred-schema inferred-schema
    :datasets datasets
    :input-format input-format
    :max-enum-values max-enum-values}))

(rf/reg-sub
 :malli/generation-view-state
 :<- [:malli/schema-text]
 :<- [:malli/generated-data]
 :<- [:malli/generation-samples]
 :<- [:malli/generation-format]
 (fn [[schema-text generated-data samples fmt] _]
   {:schema-text schema-text
    :generated-data generated-data
    :samples samples
    :gen-fmt fmt}))

(rf/reg-sub
 :malli/validation-view-state
 :<- [:malli/schema-text]
 :<- [:malli/inference-input]
 :<- [:malli/input-format]
 :<- [:malli/validation-result]
 (fn [[schema-text inference-input input-format validation-result] _]
   {:schema-text schema-text
    :inference-input inference-input
    :input-format input-format
    :validation-result validation-result}))

(rf/reg-sub
 :malli/json-schema-view-state
 :<- [:malli/schema-text]
 :<- [:malli/json-schema-result]
 (fn [[schema-text json-schema-result] _]
   {:schema-text schema-text
    :json-schema-result json-schema-result}))

;; UI components

(defn get-inference-props
  "Generates props for the unified view in Inference mode."
  [{:keys [inference-input inferred-schema datasets input-format max-enum-values]}]
  {:actions [:<>
             [l/flex-row {:class "space-x-2 items-center flex-wrap gap-y-2"}
              [c/button {:size :sm
                         :variant (if (= input-format :edn) :primary nil)
                         :on-click #(rf/dispatch [:malli/set-input-format :edn])} "EDN"]
              [c/button {:size :sm
                         :variant (if (= input-format :csv) :primary nil)
                         :on-click #(rf/dispatch [:malli/set-input-format :csv])} "CSV"]
              [c/button {:size :sm
                         :variant (if (= input-format :tsv) :primary nil)
                         :on-click #(rf/dispatch [:malli/set-input-format :tsv])} "TSV"]
              [c/button {:size :sm
                         :variant (if (= input-format :json) :primary nil)
                         :on-click #(rf/dispatch [:malli/set-input-format :json])} "JSON"]
              (when (seq datasets)
                [:div {:class "flex items-center space-x-2"}
                 [:span {:class (str "text-xs " t/text-secondary)} "Load:"]
                 [c/select {:class "py-1 px-2 text-sm" ;; Standardized text size
                            :on-change #(rf/dispatch [:malli/load-dataset (.. % -target -value)])
                            :value ""}
                  [:option {:value ""} "Select Dataset..."]
                  (for [[id ds] datasets]
                    [:option {:key id :value id} (:name ds)])]])

              [:div {:class "flex items-center gap-1 ml-2"}
               [:span {:class "text-xs"} "Max Enum:"]
               [c/input {:type "number"
                         :class "w-16 py-1 px-2 text-sm"
                         :min "1"
                         :max "100"
                         :value max-enum-values
                         :on-change #(rf/dispatch [:malli/set-max-enum-values (.. % -target -value)])}]]

              [c/button {:size :sm
                         :variant :primary
                         :on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]

              [:div {:class (str "ml-4 text-xs " t/text-secondary " hidden md:block")}
               "CLI: " [:code {:class "bg-black/20 p-1 rounded"} "bb -x bb-web-ds-tools.cli.malli/infer"]]]]
   :title "Input Data"
   :wiki-key :malli
   :editor [editor/monaco-editor
            {:value inference-input
             :language (case input-format
                         :edn "clojure"
                         :json "json"
                         "plaintext")
             :options {:rulers [80] :lineNumbers "off"}
             :on-change #(rf/dispatch [:malli/update-inference-input %])}]
   :output [portal-panel inferred-schema]})

(defn get-generation-props
  "Generates props for the unified view in Generation mode."
  [{:keys [schema-text generated-data samples gen-fmt]}]
  {:actions [:<>
             [l/flex-row {:class "items-center gap-2 flex-wrap"}
              ;; Samples count
              [:div {:class "flex items-center gap-1"}
               [:span {:class "text-xs"} "Samples:"]
               [c/input {:type "number"
                         :class "w-16 py-1 px-2 text-sm" ;; Standardized
                         :min "1"
                         :max "100"
                         :value samples
                         :on-change #(rf/dispatch [:malli/set-generation-samples (.. % -target -value)])}]]
              ;; Format selection
              [:div {:class "flex items-center gap-1"}
               [:span {:class "text-xs"} "Format:"]
               [c/select {:class "py-1 px-2 text-sm" ;; Standardized
                          :value gen-fmt
                          :on-change #(rf/dispatch [:malli/set-generation-format (keyword (.. % -target -value))])}
                [:option {:value "edn"} "EDN"]
                [:option {:value "json"} "JSON"]]]
              ;; Generate Button
              [c/button {:size :sm
                         :variant :primary
                         :on-click #(rf/dispatch [:malli/parse-schema-and-generate])} "Generate"]
              [c/button {:size :sm
                         :on-click #(rf/dispatch [:malli/save-dataset])} "Save to Datasets"]

              [:div {:class (str "ml-4 text-xs " t/text-secondary " hidden md:block")}
               "CLI: " [:code {:class "bg-black/20 p-1 rounded"} "bb -x bb-web-ds-tools.cli.malli/generate"]]]]
   :title "Schema (EDN)"
   :wiki-key :malli
   :editor [editor/monaco-editor
            {:value schema-text
             :language "clojure"
             :options {:rulers [80]}
             :on-change #(rf/dispatch [:malli/update-schema-text %])}]
   :output [portal-panel generated-data]})

(defn get-validation-props
  "Generates props for the unified view in Validation mode."
  [{:keys [schema-text inference-input input-format validation-result]}]
  {:actions [:<>
             [c/button {:size :sm
                        :variant :primary
                        :on-click #(rf/dispatch [:malli/validate])} "Validate"]

             [:div {:class (str "ml-4 text-xs " t/text-secondary " hidden md:block")}
              "CLI: " [:code {:class "bg-black/20 p-1 rounded"} "bb -x bb-web-ds-tools.cli.malli/validate"]]]
   :title "Schema (EDN)"
   :wiki-key :malli
   :editor [:div {:class "flex flex-col h-full"}
            [:div {:class "flex-grow flex flex-col h-1/2 border-b border-[#3f3f3f]"}
             [editor/monaco-editor
              {:value schema-text
               :language "clojure"
               :options {:rulers [80]}
               :on-change #(rf/dispatch [:malli/update-schema-text %])}]]
            [:div {:class "flex-grow flex flex-col h-1/2"}
             [c/label "Data to Validate"]
             [:div {:class "flex-grow rounded overflow-hidden"}
              [editor/monaco-editor
               {:value inference-input
                :language (case input-format :edn "clojure" :json "json" "plaintext")
                :options {:rulers [80]}
                :on-change #(rf/dispatch [:malli/update-inference-input %])}]]]]
   :output [portal-panel validation-result]})

(defn get-json-schema-props
  "Generates props for the unified view in JSON Schema mode."
  [{:keys [schema-text json-schema-result]}]
  {:actions [:<>
             [c/button {:size :sm
                        :variant :primary
                        :on-click #(rf/dispatch [:malli/transform-json])} "Transform to JSON Schema"]]
   :title "Schema (EDN)"
   :wiki-key :malli
   :editor [editor/monaco-editor
            {:value schema-text
             :language "clojure"
             :options {:rulers [80]}
             :on-change #(rf/dispatch [:malli/update-schema-text %])}]
   :output [portal-panel json-schema-result]})

(defn panel-render
  "Renders the main malli panel content including tabs.

  Returns:
    vector: A hiccup vector."
  []
  (let [active-tab (or @(rf/subscribe [:malli/active-tab]) :inference)
        tabs [{:id :inference :label "Inference"}
              {:id :generation :label "Generation"}
              {:id :validation :label "Validation"}
              {:id :json-schema :label "JSON Schema"}]
        ;; Resolve view-specific state and generate props
        view-props (case active-tab
                     :inference (get-inference-props @(rf/subscribe [:malli/inference-view-state]))
                     :generation (get-generation-props @(rf/subscribe [:malli/generation-view-state]))
                     :validation (get-validation-props @(rf/subscribe [:malli/validation-view-state]))
                     :json-schema (get-json-schema-props @(rf/subscribe [:malli/json-schema-view-state])))]
    [l/flex-col {:class "h-full w-full"}
     ;; Tabs Navigation (Portaled to Top Bar)
     [nav/portal-to-top-bar
      [c/nav-tabs {:tabs tabs
                   :active-tab-id active-tab
                   :class "border-b-0 bg-transparent px-0 text-xs"
                   :on-change #(rf/dispatch [:malli/set-active-tab %])}]]

     [:div {:class "flex-grow overflow-hidden"}
      [tool-view view-props]]]))

(defn panel
  "Main component for the Malli Tools view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  [l/create-panel {:display-name "malli-panel"
                   :init-event [:malli/initialize]
                   :render-fn panel-render}])
