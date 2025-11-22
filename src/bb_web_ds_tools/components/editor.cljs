(ns bb-web-ds-tools.components.editor
  (:require [reagent.core :as r]
            ["codemirror" :as CodeMirror]
            ["react-dom" :as react-dom]))

(defn codemirror-editor-inner []
  (let [editor-instance (r/atom nil)]
    (r/create-class
     {:displayName "codemirror-editor"
      :component-did-mount
      (fn [this]
        (let [{:keys [value on-change mode]} (r/props this)
              editor (CodeMirror. (react-dom/findDOMNode this)
                                  #js{:lineNumbers true
                                      :mode (or mode "clojure")
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
        [:div.editor-wrapper.border.border-gray-700])})))

(defn codemirror-editor [props]
  [codemirror-editor-inner props])
