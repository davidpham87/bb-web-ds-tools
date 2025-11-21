(ns bb-web-ds-tools.ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [fork.core :as fork]
            ["codemirror" :as CodeMirror]
            ["react-dom" :as react-dom]))

(rf/reg-event-db
 ::save-code
 (fn [db _]
   (js/alert (str "Saving code: " (:code db)))
   db))

(defn codemirror-editor []
  (let [editor-instance (r/atom nil)
        code-sub (rf/subscribe [:bb-web-ds-tools.core/code])]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [editor (CodeMirror. (react-dom/findDOMNode this)
                                     #js{:lineNumbers true
                                         :value @code-sub})]
          (.on editor "change"
               (fn [cm]
                 (rf/dispatch [:bb-web-ds-tools.core/code-changed (.getValue cm)])))
          (reset! editor-instance editor)))
      :component-did-update
      (fn [this _]
        (let [editor @editor-instance
              current-code (.getValue editor)
              new-code @code-sub]
          (when (not= current-code new-code)
            (.setValue editor new-code))))
      :render
      (fn []
        [:div.editor-wrapper])})))

(defn codemirror []
  [:div
   [codemirror-editor]
   [:button {:on-click #(rf/dispatch [::save-code])} "Save"]])
