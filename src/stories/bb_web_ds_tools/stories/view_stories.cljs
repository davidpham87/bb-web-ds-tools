(ns bb-web-ds-tools.stories.view-stories
  "Namespace bb-web-ds-tools.stories.view-stories.

  Key functionality:
  - (^:export [])
  - (^:export [])
  - meta-data"
  (:require [bb-web-ds-tools.views.landing :as landing]
            [bb-web-ds-tools.views.malli :as malli]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [goog.object :as gobj]))

(def meta-data
  #js {:title "Views"})

;; Landing Page Story
(defn ^:export LandingPage []
  (r/as-element [landing/landing-page]))

;; Malli View Story
(defn ^:export MalliView []
  (r/create-class
   {:displayName "MalliViewStory"
    :component-will-mount
    (fn []
      (rf/dispatch-sync [:malli/initialize]))
    :reagent-render
    (fn []
      (r/as-element [malli/panel]))}))

(gobj/set js/module.exports "default" meta-data)
