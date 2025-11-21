(ns bb-web-ds-tools.ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            ["codemirror" :as CodeMirror]
            ["react-dom" :as react-dom]))

(rf/reg-event-db
 ::save-code
 (fn [db _]
   (js/alert (str "Saved code successfully!"))
   db))

(defn codemirror-editor-inner []
  (let [editor-instance (r/atom nil)]
    (r/create-class
     {:displayName "codemirror-editor"
      :component-did-mount
      (fn [this]
        (let [{:keys [value on-change]} (r/props this)
              editor (CodeMirror. (react-dom/findDOMNode this)
                                  #js{:lineNumbers true
                                      :value (or value "")})]
          (.on editor "change"
               (fn [cm]
                 (let [new-val (.getValue cm)]
                   (when on-change
                     (on-change new-val)))))
          (reset! editor-instance editor)))
      :component-did-update
      (fn [this _]
        (let [{:keys [value]} (r/props this)
              editor @editor-instance]
          (when (and editor (not= (.getValue editor) value))
             (let [cursor (.getCursor editor)]
               (.setValue editor (or value ""))
               (.setCursor editor cursor)))))
      :render
      (fn []
        [:div.editor-wrapper.border.border-gray-300])})))

(defn codemirror-editor [props]
  [codemirror-editor-inner props])

(defn codemirror-form []
  (let [initial-code @(rf/subscribe [:bb-web-ds-tools.core/code])]
    [fork/form {:initial-values {"code" initial-code}
                :keywordize-keys true
                :path [:editor-form]
                :prevent-default? true
                :clean-on-unmount? true
                :on-submit (fn [{:keys [values]}]
                             (rf/dispatch [:bb-web-ds-tools.core/code-changed (:code values)])
                             (rf/dispatch [::save-code]))}
     (fn [{:keys [values set-values handle-submit]}]
       [:form {:on-submit handle-submit :class "space-y-4"}
        [:div.bg-white.rounded.shadow-sm.overflow-hidden
         [codemirror-editor {:value (:code values)
                             :on-change #(set-values {:code %})}]]
        [:div.flex.justify-end
         [:button {:type "submit"
                   :class "bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"}
          "Save Code"]]])]))

(defn codemirror []
  [:div.p-4
   [codemirror-form]])
