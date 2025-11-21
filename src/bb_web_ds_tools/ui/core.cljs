(ns bb-web-ds-tools.ui.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.core :as fork]
            ["codemirror" :as CodeMirror]
            ["react-dom" :as ReactDOM]))

(rf/reg-event-db
 ::save-code
 (fn [db _]
   (js/alert (str "Saving code: " (:code db)))
   db))

(defn codemirror-editor [props]
  (let [editor-instance (r/atom nil)]
    (r/create-class
     {:display-name "codemirror-editor"
      :component-did-mount
      (fn [this]
        (let [{:keys [value on-change mode]} (r/props this)
              conf (clj->js {:lineNumbers true
                             :value (or value "")
                             :mode (or mode "javascript")})
              editor (CodeMirror. (ReactDOM/findDOMNode this) conf)]
          (.on editor "change"
               (fn [cm]
                 (when on-change
                   (on-change (.getValue cm)))))
          (reset! editor-instance editor)))
      :component-did-update
      (fn [this _]
        (let [editor @editor-instance
              current-code (.getValue editor)
              {:keys [value]} (r/props this)]
          (when (and value (not= current-code value))
            (.setValue editor value))))
      :render
      (fn []
        [:div.editor-wrapper])})))

(defn codemirror []
  (let [code (rf/subscribe [::code])]
    (fn []
      [:div
       [codemirror-editor
        {:value @code
         :on-change #(rf/dispatch [::code-changed %])}]
       [:button {:on-click #(rf/dispatch [::save-code])} "Save"]])))
