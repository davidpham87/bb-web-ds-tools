(ns bb-web-ds-tools.components.editor
  (:require [reagent.core :as r]
            ["react-dom" :as react-dom]
            ["monaco-editor/esm/vs/editor/editor.api.js" :as monaco :refer [KeyMod KeyCode]]
            ["monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js"]
            ["monaco-editor/esm/vs/basic-languages/python/python.contribution.js"]
            ["monaco-editor/esm/vs/basic-languages/r/r.contribution.js"]))

(defonce theme-initialized
  (try
    (monaco/editor.defineTheme "zenburn"
                               (clj->js {:base "vs-dark"
                                         :inherit true
                                         :rules [{:background "3f3f3f" :foreground "dcdccc"}]
                                         :colors {:editor.background "#3f3f3f"
                                                  :editor.foreground "#dcdccc"
                                                  :editorCursor.foreground "#737373"
                                                  :editor.lineHighlightBackground "#4f4f4f"
                                                  :editor.selectionBackground "#5f5f5f"
                                                  :editor.inactiveSelectionBackground "#4f4f4f"}}))
    true
    (catch js/Error e
      (js/console.warn "Failed to define Zenburn theme" e)
      false)))

(defn monaco-editor-inner [_]
  (let [editor-instance (r/atom nil)
        subscription (r/atom nil)
        retry-timer (r/atom nil)]
    (r/create-class
     {:displayName "monaco-editor"
      :component-did-mount
      (fn [this]
        (try
          (let [{:keys [value on-change mode language options on-focus on-blur on-mount]} (r/props this)
                node (react-dom/findDOMNode this)
                lang (or language
                         (case mode
                           "application/json" "json"
                           "markdown" "markdown"
                           "clojure"))
                editor (monaco/editor.create
                        node
                        (clj->js (merge
                                  {:value (or value "")
                                   :language lang
                                   :theme "zenburn"
                                   :automaticLayout true
                                   :minimap {:enabled false}
                                   :scrollBeyondLastLine false
                                   :fontFamily "Menlo, Monaco, 'Courier New', monospace"
                                   :fontSize 14}
                                  options)))]

            (reset! editor-instance editor)

            (when on-mount
              (on-mount editor))

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
            (js/console.error "Monaco initialization failed:" e))))

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
          [:div.editor-wrapper
           {:class class
            :style (merge {:width "100%" :height "100%"} style)}]))})))

(defn monaco-editor [props]
  [monaco-editor-inner props])

;; Shared Editor Utilities

(defn get-code-to-eval [^js editor]
  (let [selection (.getSelection editor)
        model (.getModel editor)]
    (if (and selection (not (.isEmpty selection)))
      (.getValueInRange model selection)
      (.getValue editor))))

(defn get-ctrl-key [mac-os?]
  "Use Ctrl on all platforms for consistent keyboard shortcuts."
  (if mac-os?
    (.-WinCtrl KeyMod)
    (.-CtrlCmd KeyMod)))

(defn setup-editor-actions [^js editor mac-os? eval-action]
  (let [ctrl-key (get-ctrl-key mac-os?)]
    (.addAction editor (clj->js {:id "eval-buffer"
                                 :label "Evaluate Buffer"
                                 :keybindings [(bit-or ctrl-key (.-Enter KeyCode))]
                                 :run (fn [^js ed] (eval-action (get-code-to-eval ed)))}))))

(defn render-output [output]
  (into [:div]
        (for [{:keys [type text]} output]
          ^{:key (random-uuid)}
          [:pre {:class (case type
                          :result "text-[#dcdccc]"
                          :stdout "text-[#dcdccc]"
                          :stderr "text-[#cc9393]"
                          :error "text-[#cc9393]")}
           text])))
