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
    (assoc-in db [:user-input :malli :default]
              {:schema-text "[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]"
               :generated-data ""
               :inference-input "{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}"
               :inferred-schema ""
               :active-tab :inference})))

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
    (assoc-in db [:user-input :malli :default :active-tab] tab)))

(rf/reg-event-fx
  :malli/generate-data
  (fn [{:keys [db]} [_ values]]
    (let [schema-text (get values "schema-text")
          schema (try (reader/read-string schema-text) (catch js/Error e nil))]
      (if schema
        {:db (assoc-in db [:user-input :malli :default :generated-data] (pr-str (mg/generate schema)))}
        {:db (assoc-in db [:user-input :malli :default :generated-data] "Invalid schema.")}))))

(rf/reg-event-fx
  :malli/infer-schema
  (fn [{:keys [db]} [_ values]]
    (let [input-text (get values "inference-input")
          input-data (detect-and-parse input-text)]
      (if (and (coll? input-data) (seq input-data))
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] (pr-str (mp/provide input-data)))}
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] "Invalid input data. Must be valid EDN or JSON collection.")}))))

(rf/reg-event-db
 :malli/load-dataset
 (fn [db [_ dataset-id]]
   (let [dataset (get-in db [:user-input :datasets :items dataset-id])
         data (:data dataset)]
     (if data
       (assoc-in db [:user-input :malli :default :inference-input] (with-out-str (cljs.pprint/pprint data)))
       db))))

;; Subscriptions
(rf/reg-sub :malli/root (fn [db _] (get-in db [:user-input :malli :default])))
(rf/reg-sub :malli/schema-text :<- [:malli/root] (fn [root _] (:schema-text root)))
(rf/reg-sub :malli/generated-data :<- [:malli/root] (fn [root _] (:generated-data root)))
(rf/reg-sub :malli/inference-input :<- [:malli/root] (fn [root _] (:inference-input root)))
(rf/reg-sub :malli/inferred-schema :<- [:malli/root] (fn [root _] (:inferred-schema root)))
(rf/reg-sub :malli/active-tab :<- [:malli/root] (fn [root _] (:active-tab root)))

;; UI components

(defn inference-view []
  (let [inference-input @(rf/subscribe [:malli/inference-input])
        inferred-schema @(rf/subscribe [:malli/inferred-schema])
        datasets @(rf/subscribe [::datasets/items])]
    [c/card {}
     [l/flex-col {:class "space-y-4"}
      [l/grid {:class "grid-cols-1 lg:grid-cols-2 gap-6"}
       [l/flex-col {:class "space-y-2"}
        [l/flex-row {:class "justify-between items-center"}
         [c/label "Input Data (EDN/JSON)"]
         (when (seq datasets)
           [:div {:class "flex items-center space-x-2"}
            [:span {:class (str "text-xs " t/text-secondary)} "Load:"]
            [c/select {:class "py-1 px-2 text-xs"
                       :on-change #(rf/dispatch [:malli/load-dataset (.. % -target -value)])
                       :value ""}
             [:option {:value ""} "Select Dataset..."]
             (for [[id ds] datasets]
               [:option {:key id :value id} (:name ds)])]])]

        [:div {:class (str "h-64 rounded overflow-hidden border " t/border-default)}
         [editor/monaco-editor {:value inference-input
                                :language "clojure"
                                :on-change #(rf/dispatch [:malli/update-inference-input %])}]]
        [c/button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]]
       [l/flex-col {:class "space-y-2"}
        [c/label "Inferred Schema"]
        [c/pre-block {:content inferred-schema :class "h-64"}]]]]]))

(defn generation-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])]
    [c/card {}
     [l/flex-col {:class "space-y-4"}
      [:h3 {:class (str "text-xl font-semibold " t/text-accent " flex items-center gap-2")}
       [:span "🎲"] "Data Generation"]
      [l/grid {:class "grid-cols-1 lg:grid-cols-2 gap-6"}
       [l/flex-col {:class "space-y-2"}
        [c/label "Schema (EDN)"]
        [:div {:class (str "h-64 rounded overflow-hidden border " t/border-default)}
         [editor/monaco-editor {:value schema-text
                                :language "clojure"
                                :on-change #(rf/dispatch [:malli/update-schema-text %])}]]
        [c/button {:on-click #(rf/dispatch [:malli/generate-data])} "Generate Data"]]
       [l/flex-col {:class "space-y-2"}
        [c/label "Generated Data"]
        [c/pre-block {:content generated-data :class "h-64"}]]]]]))

(defn panel []
  (let [active-tab (or @(rf/subscribe [:malli/active-tab]) :inference)]
    [l/container {:class "max-w-6xl space-y-6"}

     ;; Tabs Navigation
     [l/flex-row {:class (str "space-x-6 border-b " t/border-default)}
      [:button {:class (str "pb-2 font-medium transition-colors border-b-2 "
                            (if (= active-tab :inference) (str "border-[#f0dfaf] " t/text-accent) (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
                :on-click #(rf/dispatch [:malli/set-active-tab :inference])}
       "Inference"]
      [:button {:class (str "pb-2 font-medium transition-colors border-b-2 "
                            (if (= active-tab :generation) (str "border-[#f0dfaf] " t/text-accent) (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
                :on-click #(rf/dispatch [:malli/set-active-tab :generation])}
       "Generation"]]

     (case active-tab
       :inference [inference-view]
       :generation [generation-view])]))
