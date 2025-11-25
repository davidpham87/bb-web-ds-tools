(ns bb-web-ds-tools.views.malli
  (:require [re-frame.core :as rf]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [cljs.reader :as reader]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.views.datasets :as datasets]))

(defn detect-and-parse [text]
  (if (clojure.string/blank? text)
    nil
    (try
      (reader/read-string text)
      (catch :default _
        (try
          (js->clj (js/JSON.parse text) :keywordize-keys true)
          (catch :default _ nil))))))

;; Event handlers
(rf/reg-event-db
 :malli/initialize
 (fn [db _]
   (-> db
       (assoc-in [:user-input :malli :default]
                 {:schema-text "[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]"
                  :inference-input "{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}"})
       (assoc ::malli
              {:generated-data ""
               :input-format :edn
               :inferred-schema ""
               :active-tab :inference
               :generation-samples 1
               :generation-format :edn}))))

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
   (assoc-in db [::malli :generation-samples] (js/parseInt n))))

(rf/reg-event-db
 :malli/set-generation-format
 (fn [db [_ fmt]]
   (assoc-in db [::malli :generation-format] fmt)))

(rf/reg-event-fx
 :malli/generate-data
 (fn [{:keys [db]} _]
   (let [user-input (get-in db [:user-input :malli :default])
         component-state (::malli db)
         schema-text (:schema-text user-input)
         samples (get component-state :generation-samples 1)
         format (get component-state :generation-format :edn)
         schema (try (reader/read-string schema-text) (catch js/Error e nil))]
     (if schema
       (let [data (if (> samples 1)
                    (vec (repeatedly samples #(mg/generate schema)))
                    (mg/generate schema))
             output (case format
                      :edn (with-out-str (cljs.pprint/pprint data))
                      :json (js/JSON.stringify (clj->js data) nil 2)
                      (pr-str data))]
         {:db (assoc-in db [::malli :generated-data] output)})
       {:db (assoc-in db [::malli :generated-data] "Invalid schema.")}))))

(rf/reg-event-fx
 :malli/infer-schema
 (fn [{:keys [db]} _]
   (let [user-input (get-in db [:user-input :malli :default])
         component-state (::malli db)
         input-text (:inference-input user-input)
         format (:input-format component-state)
         input-data (case format
                      :edn (detect-and-parse input-text)
                      (datasets/parse-dataset format input-text))]
     (if (and (coll? input-data) (seq input-data))
       {:db (assoc-in db [::malli :inferred-schema] (pr-str (mp/provide input-data)))}
       {:db (assoc-in db [::malli :inferred-schema] (str "Invalid input data for format " (name format) ".")) }))))

(rf/reg-event-db
 :malli/load-dataset
 (fn [db [_ dataset-id]]
   (let [dataset (get-in db [:user-input :datasets :items dataset-id])
         data (:data dataset)]
     (if data
       (-> db
           (assoc-in [:user-input :malli :default :inference-input] (with-out-str (cljs.pprint/pprint data)))
           (assoc-in [::malli :input-format] :edn))
       db))))

;; Subscriptions
(rf/reg-sub :malli/user-input-root (fn [db _] (get-in db [:user-input :malli :default])))
(rf/reg-sub :malli/component-root (fn [db _] (::malli db)))
(rf/reg-sub :malli/schema-text :<- [:malli/user-input-root] (fn [root _] (:schema-text root)))
(rf/reg-sub :malli/generated-data :<- [:malli/component-root] (fn [root _] (:generated-data root)))
(rf/reg-sub :malli/inference-input :<- [:malli/user-input-root] (fn [root _] (:inference-input root)))
(rf/reg-sub :malli/inferred-schema :<- [:malli/component-root] (fn [root _] (:inferred-schema root)))
(rf/reg-sub :malli/active-tab :<- [:malli/component-root] (fn [root _] (:active-tab root)))
(rf/reg-sub :malli/input-format :<- [:malli/component-root] (fn [root _] (get root :input-format :edn)))
(rf/reg-sub :malli/generation-samples :<- [:malli/component-root] (fn [root _] (get root :generation-samples 1)))
(rf/reg-sub :malli/generation-format :<- [:malli/component-root] (fn [root _] (get root :generation-format :edn)))

;; UI components

(defn inference-view []
  (let [inference-input @(rf/subscribe [:malli/inference-input])
        inferred-schema @(rf/subscribe [:malli/inferred-schema])
        datasets @(rf/subscribe [::datasets/items])
        input-format @(rf/subscribe [:malli/input-format])]
    [l/split-view {:ratio :2-1}
     ;; LEFT: Input
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [l/flex-row {:class "justify-between items-center"}
       [c/label "Input Data"]
       [l/flex-row {:class "space-x-2"}
        [c/button-xs {:class (if (= input-format :edn) (str t/bg-button-primary " text-white") "")
                      :on-click #(rf/dispatch [:malli/set-input-format :edn])} "EDN"]
        [c/button-xs {:class (if (= input-format :csv) (str t/bg-button-primary " text-white") "")
                      :on-click #(rf/dispatch [:malli/set-input-format :csv])} "CSV"]
        [c/button-xs {:class (if (= input-format :tsv) (str t/bg-button-primary " text-white") "")
                      :on-click #(rf/dispatch [:malli/set-input-format :tsv])} "TSV"]
        [c/button-xs {:class (if (= input-format :json) (str t/bg-button-primary " text-white") "")
                      :on-click #(rf/dispatch [:malli/set-input-format :json])} "JSON"]]
       (when (seq datasets)
         [:div {:class "flex items-center space-x-2"}
          [:span {:class (str "text-xs " t/text-secondary)} "Load:"]
          [c/select {:class "py-1 px-2 text-xs"
                     :on-change #(rf/dispatch [:malli/load-dataset (.. % -target -value)])
                     :value ""}
           [:option {:value ""} "Select Dataset..."]
           (for [[id ds] datasets]
             [:option {:key id :value id} (:name ds)])]])]

      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value inference-input
                              :language (if (= input-format :edn) "clojure" "plaintext")
                              :on-change #(rf/dispatch [:malli/update-inference-input %])}]]
      [c/button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]]

     ;; RIGHT: Output
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "Inferred Schema"]
      [c/pre-block {:content inferred-schema :class "flex-grow"}]]]))

(defn generation-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])
        samples @(rf/subscribe [:malli/generation-samples])
        format @(rf/subscribe [:malli/generation-format])]
    [l/split-view {:ratio :2-1}
     ;; LEFT: Schema
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "Schema (EDN)"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value schema-text
                              :language "clojure"
                              :on-change #(rf/dispatch [:malli/update-schema-text %])}]]

      ;; Controls
      [l/flex-row {:class "items-end gap-4"}
       ;; Samples count
       [:div {:class "w-24"}
        [c/label "Samples"]
        [c/input {:type "number"
                  :min "1"
                  :max "100"
                  :value samples
                  :on-change #(rf/dispatch [:malli/set-generation-samples (.. % -target -value)])}]]

       ;; Format selection
       [:div {:class "w-32"}
        [c/label "Format"]
        [c/select {:value format
                   :on-change #(rf/dispatch [:malli/set-generation-format (keyword (.. % -target -value))])}
         [:option {:value "edn"} "EDN"]
         [:option {:value "json"} "JSON"]]]

       ;; Generate Button
       [c/button {:class "mb-[2px]"
                  :on-click #(rf/dispatch [:malli/generate-data])} "Generate Data"]]]

     ;; RIGHT: Generated Data
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [:h3 {:class (str "text-xl font-semibold " t/text-accent " flex items-center gap-2")}
       [:span "🎲"] "Data Generation"]
      [c/label "Generated Data"]
      [c/pre-block {:content generated-data :class "flex-grow"}]]]))

(defn panel []
  (let [active-tab (or @(rf/subscribe [:malli/active-tab]) :inference)]
    [l/flex-col {:class "h-full w-full"}
     ;; Tabs Navigation
     [l/flex-row {:class (str "space-x-6 border-b " t/border-default " px-4 " t/bg-toolbar " shrink-0")}
      [:button {:class (str "py-3 font-medium transition-colors border-b-2 "
                            (if (= active-tab :inference) (str "border-[#f0dfaf] " t/text-accent) (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
                :on-click #(rf/dispatch [:malli/set-active-tab :inference])}
       "Inference"]
      [:button {:class (str "py-3 font-medium transition-colors border-b-2 "
                            (if (= active-tab :generation) (str "border-[#f0dfaf] " t/text-accent) (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
                :on-click #(rf/dispatch [:malli/set-active-tab :generation])}
       "Generation"]]

     [:div {:class "flex-grow overflow-hidden"}
      (case active-tab
        :inference [inference-view]
        :generation [generation-view])]]))
