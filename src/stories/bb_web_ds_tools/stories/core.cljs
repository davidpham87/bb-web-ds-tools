(ns bb-web-ds-tools.stories.core
  (:require [reagent.core :as r]
            [bb-web-ds-tools.components.common :as c]
            [goog.object :as gobj]))

(defn sample-component []
  [:div.p-4.border.rounded "Hello Storybook from ClojureScript"])

(defn basic-story []
  (r/as-element [sample-component]))

(def default-export
  #js {:title "Common/Sample"
       :component sample-component})

;; Export default for CSF
(gobj/set js/module.exports "default" default-export)

;; Export named story
(gobj/set js/module.exports "Basic" basic-story)
