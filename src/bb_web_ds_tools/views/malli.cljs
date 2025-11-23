(ns bb-web-ds-tools.views.malli
  (:require [re-frame.core :as rf]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [cljs.reader :as reader]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]))

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
  (fn [{:keys [db]} _]
    (let [schema-text (get-in db [:user-input :malli :default :schema-text])
          schema (try (reader/read-string schema-text) (catch js/Error e nil))]
      (if schema
        {:db (assoc-in db [:user-input :malli :default :generated-data] (pr-str (mg/generate schema)))}
        {:db (assoc-in db [:user-input :malli :default :generated-data] "Invalid schema.")}))))

(rf/reg-event-fx
  :malli/infer-schema
  (fn [{:keys [db]} _]
    (let [input-text (get-in db [:user-input :malli :default :inference-input])
          input-data (try (reader/read-string input-text) (catch js/Error e nil))]
      (if (and (coll? input-data) (seq input-data))
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] (pr-str (mp/provide input-data)))}
        {:db (assoc-in db [:user-input :malli :default :inferred-schema] "Invalid input data.")}))))

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
        inferred-schema @(rf/subscribe [:malli/inferred-schema])]
    [c/card {}
     [:div
      [:h3 {:class "text-xl font-semibold text-[#f0dfaf] mb-4 flex items-center gap-2"}
       [:span "🧩"] "Schema Inference"]
      [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
       [:div
        [c/label "Input Data (EDN)"]
        [:div {:class "h-64 rounded overflow-hidden border border-[#5f5f5f]"}
         [editor/monaco-editor {:value inference-input
                                :language "clojure"
                                :on-change #(rf/dispatch [:malli/update-inference-input %])}]]
        [:div {:class "mt-4"}
         [c/button {:on-click #(rf/dispatch [:malli/infer-schema])} "Infer Schema"]]]
       [:div
        [c/label "Inferred Schema"]
        [c/pre-block {:content inferred-schema :class "h-64"}]]]]]))

(defn generation-view []
  (let [schema-text @(rf/subscribe [:malli/schema-text])
        generated-data @(rf/subscribe [:malli/generated-data])]
    [c/card {}
     [:div
      [:h3 {:class "text-xl font-semibold text-[#f0dfaf] mb-4 flex items-center gap-2"}
       [:span "🎲"] "Data Generation"]
      [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
       [:div
        [c/label "Schema (EDN)"]
        [:div {:class "h-64 rounded overflow-hidden border border-[#5f5f5f]"}
         [editor/monaco-editor {:value schema-text
                                :language "clojure"
                                :on-change #(rf/dispatch [:malli/update-schema-text %])}]]
        [:div {:class "mt-4"}
         [c/button {:on-click #(rf/dispatch [:malli/generate-data])} "Generate Data"]]]
       [:div
        [c/label "Generated Data"]
        [c/pre-block {:content generated-data :class "h-64"}]]]]]))

(defn panel []
  (let [active-tab (or @(rf/subscribe [:malli/active-tab]) :inference)]
    [:div {:class "space-y-6 container mx-auto max-w-6xl p-6"}

     ;; Tabs Navigation
     [:div {:class "flex space-x-6 border-b border-[#5f5f5f]"}
      [:button {:class (str "pb-2 font-medium transition-colors border-b-2 "
                            (if (= active-tab :inference) "border-[#f0dfaf] text-[#f0dfaf]" "border-transparent text-[#9f9f9f] hover:text-[#dcdccc]"))
                :on-click #(rf/dispatch [:malli/set-active-tab :inference])}
       "Inference"]
      [:button {:class (str "pb-2 font-medium transition-colors border-b-2 "
                            (if (= active-tab :generation) "border-[#f0dfaf] text-[#f0dfaf]" "border-transparent text-[#9f9f9f] hover:text-[#dcdccc]"))
                :on-click #(rf/dispatch [:malli/set-active-tab :generation])}
       "Generation"]]

     (case active-tab
       :inference [inference-view]
       :generation [generation-view])]))
