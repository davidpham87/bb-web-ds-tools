(ns bb-web-ds-tools.stories.common-stories
  "Namespace bb-web-ds-tools.stories.common-stories.

  Key functionality: meta-data, ^:export, ^:export, ^:export, ^:export, ..."
  (:require [bb-web-ds-tools.components.common :as common]
            [reagent.core :as r]
            [goog.object :as gobj]))

(def meta-data
  #js {:title "Common/Components"})

(defn ^:export ButtonDefault []
  (r/as-element [common/button {:on-click #(js/console.log "Clicked")} "Click Me"]))

(defn ^:export ButtonDisabled []
  (r/as-element [common/button {:disabled true} "Disabled"]))

(defn ^:export ButtonXS []
  (r/as-element [common/button-xs {:on-click #(js/console.log "XS Clicked")} "Small Button"]))

(defn ^:export CardDefault []
  (r/as-element [common/card {:class "w-64"}
                 [:h3 "Card Title"]
                 [:p "Card content goes here."]]))

(defn ^:export TextAreaDefault []
  (r/as-element [common/textarea {:value "Some text" :placeholder "Type here..."}]))

(defn ^:export PreBlockDefault []
  (r/as-element [common/pre-block {:content "Code block content"}]))

(defn ^:export PageHeaderDefault []
  (r/as-element [common/page-header "Page Title"]))

(defn ^:export LabelDefault []
  (r/as-element [common/label "Input Label"]))

;; Manually export default for Storybook
(gobj/set js/module.exports "default" meta-data)
