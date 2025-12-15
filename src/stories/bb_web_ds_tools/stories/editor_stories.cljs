(ns bb-web-ds-tools.stories.editor-stories
  (:require [bb-web-ds-tools.components.editor :as editor]
            [reagent.core :as r]
            [goog.object :as gobj]))

(def meta-data
  #js {:title "Components/Editor"})

(defn ^:export EditorDefault []
  (r/as-element
   [:div {:style {:height "400px" :width "100%"}}
    [editor/monaco-editor
     {:value "(+ 1 1)"
      :language "clojure"
      :on-change #(js/console.log "Editor changed:" %)}]]))

(gobj/set js/module.exports "default" meta-data)
