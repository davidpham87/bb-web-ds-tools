(ns bb-web-ds-tools.views.malli
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.malli :as c-malli]
            [bb-web-ds-tools.portal :as portal :refer [portal-frame portal-viewer]]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.views.datasets :as datasets]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

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
                  :inference-input "{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}"})

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
    (let [schema-text (get-in db [:user-input :malli :default :schema-text])
          result (c-malli/parse-schema-and-generate schema-text)]
      (if (:success result)
        {:dispatch [:malli/generate-data (:schema result)]}
        {:db (assoc-in db [::malli :generated-data] (:error result))}))))

(rf/reg-event-fx
 :malli/generate-data
 (fn [{:keys [db]} [_ schema]]
   (let [component-state (::malli db)
         samples (get component-state :generation-samples 1)
         format (get component-state :generation-format :edn)
         result (c-malli/generate-data schema samples format)
         output (if (:success result) (:output result) (:error result))]
     {:db (assoc-in db [::malli :generated-data] output)})))

(rf/reg-event-fx
 :malli/infer-schema
 (fn [{:keys [db]} _]
   (let [user-input (get-in db [:user-input :malli :default])
         component-state (::malli db)
         input-text (:inference-input user-input)
         format (:input-format component-state)
         input-data (case format
                      :edn (c-malli/detect-and-parse input-text)
                      (dp/parse-dataset format input-text))
         result (c-malli/infer-schema input-data)
         output (if (:success result) (:schema-str result) (str "Invalid input data for format " (name format) "."))]
     {:db (assoc-in db [::malli :inferred-schema] output)})))

(rf/reg-event-fx
 :malli/save-dataset
 (fn [{:keys [db]} _]
   (let [generated-data (get-in db [::malli :generated-data])
         format (get-in db [::malli :generation-format] :edn)
         parsed-data (c-malli/save-dataset-data generated-data format)]
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
   (let [schema-text (get-in db [:user-input :malli :default :schema-text])
         input-text (get-in db [:user-input :malli :default :inference-input])
         format (get-in db [::malli :input-format] :edn)
         schema-result (c-malli/parse-schema-and-generate schema-text)
         input-data (case format
                      :edn (c-malli/detect-and-parse input-text)
                      (dp/parse-dataset format input-text))]
     (if (:success schema-result)
       (let [result (c-malli/validate-data (:schema schema-result) input-data)]
         {:db (assoc-in db [::malli :validation-result] (:result result))})
       {:db (assoc-in db [::malli :validation-result] (:error schema-result))}))))

(rf/reg-event-fx
 :malli/transform-json
 (fn [{:keys [db]} _]
   (let [schema-text (get-in db [:user-input :malli :default :schema-text])
         schema-result (c-malli/parse-schema-and-generate schema-text)]
     (if (:success schema-result)
       (let [result (c-malli/transform-to-json-schema (:schema schema-result))
             output (if (:success result) (:json-schema result) (:error result))]
         {:db (assoc-in db [::malli :json-schema-result] output)})
       {:db (assoc-in db [::malli :json-schema-result] (:error schema-result))}))))

;; Subscriptions
(rf/reg-sub :malli/user-input-root :<- [:bb-web-ds-tools.core/user-input] (fn [user-input _] (get-in user-input [:malli :default])))
(rf/reg-sub :malli/component-root (fn [db _] (::malli db)))
(rf/reg-sub :malli/schema-text :<- [:malli/user-input-root] (fn [root _] (:schema-text root)))
(rf/reg-sub :malli/generated-data :<- [:malli/component-root] (fn [root _] (:generated-data root)))
(rf/reg-sub :malli/inference-input :<- [:malli/user-input-root] (fn [root _] (:inference-input root)))
(rf/reg-sub :malli/inferred-schema :<- [:malli/component-root] (fn [root _] (:inferred-schema root)))
(rf/reg-sub :malli/active-tab :<- [:malli/component-root] (fn [root _] (:active-tab root)))
(rf/reg-sub :malli/input-format :<- [:malli/component-root] (fn [root _] (get root :input-format :edn)))
(rf/reg-sub :malli/generation-samples :<- [:malli/component-root] (fn [root _] (get root :generation-samples 1)))
(rf/reg-sub :malli/generation-format :<- [:malli/component-root] (fn [root _] (get root :generation-format :edn)))
(rf/reg-sub :malli/validation-result :<- [:malli/component-root] (fn [root _] (:validation-result root)))
(rf/reg-sub :malli/json-schema-result :<- [:malli/component-root] (fn [root _] (:json-schema-result root)))

;; UI components

(defn inference-view []
  (let [inference-input-sub (rf/subscribe [:malli/inference-input])
        inferred-schema-sub (rf/subscribe [:malli/inferred-schema])
        datasets-sub (rf/subscribe [::datasets/items])
        input-format-sub (rf/subscribe [:malli/input-format])]
    (fn []
      (let [inference-input @inference-input-sub
            inferred-schema @inferred-schema-sub
            datasets @datasets-sub
            input-format @input-format-sub]
        [l/flex-row {:class "h-full w-full"}
         ;; LEFT: Input
         [l/flex-col {:class "h-full w-full max-w-3xl"}
          [l/flex-row {:class "justify-between py-4 items-center"}
           [c/label "Input Data"]
           [l/flex-row {:class "space-x-2 items-center"}
            [c/button-xs {:class (if (= input-format :edn) (str t/bg-button-primary " text-white") "")
                          :on-click #(rf/dispatch [:malli/set-input-format :edn])} "EDN"]
            [c/button-xs {:class (if (= input-format :csv) (str t/bg-button-primary " text-white") "")
                          :on-click #(rf/dispatch [:malli/set-input-format :csv])} "CSV"]
            [c/button-xs {:class (if (= input-format :tsv) (str t/bg-button-primary " text-white") "")
                          :on-click #(rf/dispatch [:malli/set-input-format :tsv])} "TSV"]
            [c/button-xs {:class (if (= input-format :json) (str t/bg-button-primary " text-white") "")
                          :on-click #(rf/dispatch [:malli/set-input-format :json])} "JSON"]
            (when (seq datasets)
              [:div {:class "flex items-center space-x-2"}
               [:span {:class (str "text-xs " t/text-secondary)} "Load:"]
               [c/select {:class "py-1 px-2 text-xs"
                          :on-change #(rf/dispatch [:malli/load-dataset (.. % -target -value)])
                          :value ""}
                [:option {:value ""} "Select Dataset..."]
                (for [[id ds] datasets]
                  [:option {:key id :value id} (:name ds)])]])
            [c/button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]]]

          [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
                 :style {:height "85vh"}}
           [editor/monaco-editor {:value inference-input
                                  :language (case input-format
                                              :edn "clojure"
                                              :json "json"
                                              "plaintext")
                                  :options {:rulers [80] :lineNumbers "off"}
                                  :on-change #(rf/dispatch [:malli/update-inference-input %])}]]]

         ;; RIGHT: Output
         [portal-viewer inferred-schema]]))))

(defn generation-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])
        samples @(rf/subscribe [:malli/generation-samples])
        format @(rf/subscribe [:malli/generation-format])]
    [l/flex-row {:class "h-full w-full"}
     ;; LEFT: Schema
     [l/flex-col {:class "h-full w-full max-w-3xl"}
      [l/flex-row {:class "justify-between py-4 items-end"}
       [c/label "Schema (EDN)"]
       [l/flex-row {:class "items-end gap-4"}
        [:div {:class "w-24"}
         [c/label "Samples"]
         [c/input {:type "number"
                   :min "1"
                   :max "100"
                   :value samples
                   :on-change #(rf/dispatch [:malli/set-generation-samples (.. % -target -value)])}]]
        [:div {:class "w-32"}
         [c/label "Format"]
         [c/select {:value format
                    :on-change #(rf/dispatch [:malli/set-generation-format (keyword (.. % -target -value))])}
          [:option {:value "edn"} "EDN"]
          [:option {:value "json"} "JSON"]]]
        [c/button {:class "mb-[1px]"
                   :on-click #(rf/dispatch [:malli/parse-schema-and-generate])} "Parse & Gen"]]]

      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "85vh"}}
       [editor/monaco-editor {:value schema-text
                              :language "clojure"
                              :options {:rulers [80] :lineNumbers "off"}
                              :on-change #(rf/dispatch [:malli/update-schema-text %])}]]]

     ;; RIGHT: Generated Data
     [l/flex-col {:class "h-full w-full"}
       [l/flex-row {:class "justify-between items-center py-4 px-5"}
        [c/label "Generated Data"]
        [c/button-xs {:on-click #(rf/dispatch [:malli/save-dataset])} "Save to Datasets"]]
       [portal-viewer generated-data]]]))

(defn validation-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        inference-input @(rf/subscribe [:malli/inference-input])
        input-format @(rf/subscribe [:malli/input-format])
        validation-result @(rf/subscribe [:malli/validation-result])]
    [l/flex-row {:class "h-full w-full"}
     ;; LEFT: Schema & Data
     [l/flex-col {:class "h-full w-full max-w-3xl"}
      ;; Schema Section
      [l/flex-row {:class "justify-between py-4"} [c/label "Schema (EDN)"]]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "40vh"}}
       [editor/monaco-editor {:value schema-text
                              :language "clojure"
                              :options {:rulers [80] :lineNumbers "off"}
                              :on-change #(rf/dispatch [:malli/update-schema-text %])}]]

      ;; Data Section
      [l/flex-row {:class "justify-between py-4"}
       [c/label "Data to Validate"]
       [c/button {:on-click #(rf/dispatch [:malli/validate])} "Validate"]]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "40vh"}}
       [editor/monaco-editor {:value inference-input
                              :language (case input-format :edn "clojure" :json "json" "plaintext")
                              :options {:rulers [80] :lineNumbers "off"}
                              :on-change #(rf/dispatch [:malli/update-inference-input %])}]]]

     ;; RIGHT: Validation Result
     [portal-viewer validation-result]]))

(defn json-schema-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        json-schema-result @(rf/subscribe [:malli/json-schema-result])]
    [l/flex-row {:class "h-full w-full"}
     ;; LEFT: Schema
     [l/flex-col {:class "h-full w-full max-w-3xl"}
      [l/flex-row {:class "justify-between py-4"}
       [c/label "Schema (EDN)"]
       [c/button {:on-click #(rf/dispatch [:malli/transform-json])} "Transform to JSON Schema"]]

      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "85vh"}}
       [editor/monaco-editor {:value schema-text
                              :language "clojure"
                              :options {:rulers [80] :lineNumbers "off"}
                              :on-change #(rf/dispatch [:malli/update-schema-text %])}]]]

     ;; RIGHT: JSON Schema Output
     [portal-viewer json-schema-result]]))

(defn panel-render []
  (let [active-tab (or @(rf/subscribe [:malli/active-tab]) :inference)
        tabs [{:id :inference :label "Inference"}
              {:id :generation :label "Generation"}
              {:id :validation :label "Validation"}
              {:id :json-schema :label "JSON Schema"}]]
    [l/flex-col {:class "h-full w-full"}
     ;; Tabs Navigation
     [c/nav-tabs {:tabs tabs
                  :active-tab-id active-tab
                  :on-change #(rf/dispatch [:malli/set-active-tab %])}]

     [:div {:class "flex-grow overflow-hidden"}
      (case active-tab
        :inference [inference-view]
        :generation [generation-view]
        :validation [validation-view]
        :json-schema [json-schema-view])]]))

(defn panel []
  (r/create-class
   {:display-name "malli-panel"
    :component-did-mount #(rf/dispatch [:malli/initialize])
    :reagent-render panel-render}))
