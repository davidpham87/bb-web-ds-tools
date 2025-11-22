(ns bb-web-ds-tools.components.malli
  (:require [bb-web-ds-tools.components.common :as c]))

(defn inference-panel [{:keys [values handle-change on-infer inferred-schema]}]
  [c/card {}
   [:div
    [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
     [:span "🧩"] "Schema Inference"]
    [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
     [:div
      [c/label "Input Data (EDN)"]
      [c/textarea {:value (get values "inference-input")
                   :name "inference-input"
                   :placeholder "{:user/name \"Alice\" :user/age 30}"
                   :on-change handle-change
                   :class "h-64"}]
      [:div {:class "mt-4"}
       [c/button {:on-click on-infer} "Infer Schema"]]]
     [:div
      [c/label "Inferred Schema"]
      [c/pre-block {:content inferred-schema :class "h-64"}]]]]])

(defn generation-panel [{:keys [values handle-change on-generate generated-data]}]
  [c/card {}
   [:div
    [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
     [:span "🎲"] "Data Generation"]
    [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
     [:div
      [c/label "Schema (EDN)"]
      [c/textarea {:value (get values "schema-text")
                   :name "schema-text"
                   :placeholder "[:map [:x int?] [:y int?]]"
                   :on-change handle-change
                   :class "h-64"}]
      [:div {:class "mt-4"}
       [c/button {:on-click on-generate} "Generate Data"]]]
     [:div
      [c/label "Generated Data"]
      [c/pre-block {:content generated-data :class "h-64"}]]]]])
