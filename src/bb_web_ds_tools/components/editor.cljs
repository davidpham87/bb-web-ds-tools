(ns bb-web-ds-tools.components.editor
  (:require [reagent.core :as r]
            ["react-dom" :as react-dom]))

(defn monaco-editor-inner [_]
  (let [editor-instance (r/atom nil)
        subscription (r/atom nil)
        retry-timer (r/atom nil)]
    (r/create-class
     {:displayName "monaco-editor"
      :component-did-mount
      (fn [this]
        (let [init-editor (fn init-editor []
                            (if (and (exists? js/monaco) (exists? js/monaco.editor))
                              (try
                                (let [{:keys [value on-change mode language options on-focus on-blur]} (r/props this)
                                      node (react-dom/findDOMNode this)
                                      lang (or language
                                               (case mode
                                                 "application/json" "json"
                                                 "markdown" "markdown"
                                                 "clojure"))
                                      editor (js/monaco.editor.create
                                              node
                                              (clj->js (merge
                                                        {:value (or value "")
                                                         :language lang
                                                         :theme "vs-dark"
                                                         :automaticLayout true
                                                         :minimap {:enabled false}
                                                         :scrollBeyondLastLine false}
                                                        options)))]

                                  (reset! editor-instance editor)

                                  (let [sub (.onDidChangeModelContent
                                             editor
                                             (fn []
                                               (let [new-val (.getValue editor)]
                                                 (when on-change
                                                   (on-change new-val)))))]
                                    (reset! subscription sub))

                                  (when on-focus
                                    (.onDidFocusEditorText editor on-focus))
                                  (when on-blur
                                    (.onDidBlurEditorText editor on-blur)))
                                (catch js/Error e
                                  (js/console.error "Monaco initialization failed:" e)))
                              ;; Not loaded yet, retry
                              (do
                                (reset! retry-timer (js/setTimeout init-editor 100)))))
                            ]
          (init-editor)))

      :component-did-update
      (fn [this _]
        (let [{:keys [value]} (r/props this)
              editor ^js @editor-instance]
          (when (and editor (not= (.getValue editor) value))
            (let [pos (.getPosition editor)]
              (.setValue editor (or value ""))
              (.setPosition editor pos)))))

      :component-will-unmount
      (fn [this]
        (when-let [timer @retry-timer]
          (js/clearTimeout timer))
        (when-let [sub @subscription]
          (.dispose sub))
        (when-let [editor @editor-instance]
          (.dispose editor)))

      :reagent-render
      (fn [props]
        (let [{:keys [style class]} props]
           [:div.editor-wrapper.border.border-gray-700
            {:class class
             :style (merge {:width "100%" :height "100%"} style)}]))})))

(defn monaco-editor [props]
  [monaco-editor-inner props])
