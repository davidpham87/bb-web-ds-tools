(ns bb-web-ds-tools.stories.malli-stories
  "Namespace bb-web-ds-tools.stories.malli-stories.

  Key functionality: ^:export, ^:export, ^:export"
  (:require [bb-web-ds-tools.components.malli :as malli]
            [reagent.core :as r]))

(def ^:export default
  #js {:title "Malli Components"
       :component (r/reactify-component malli/inference-panel)})

(defn ^:export InferencePanel []
  (r/as-element [malli/inference-panel
                 {:values {"inference-input" "{:user/name \"Alice\" :user/age 30}"}
                  :handle-change (fn [])
                  :on-infer (fn [])
                  :inferred-schema "[:map\n [:user/name string?]\n [:user/age int?]]"}]))

(defn ^:export GenerationPanel []
  (r/as-element [malli/generation-panel
                 {:values {"schema-text" "[:map [:x int?] [:y int?]]"}
                  :handle-change (fn [])
                  :on-generate (fn [])
                  :generated-data "{:x 123, :y 456}"}]))
