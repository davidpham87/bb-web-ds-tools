(ns bb-web-ds-tools.components.editor
  "Key functions:
  - (monaco-editor [_])
  - (get-code-to-eval [^js editor])
  - (get-ctrl-key [mac-os?])
  - (setup-editor-actions [^js editor mac-os? eval-action])
  - (render-output [output])

  History:
  - 2025-12-14: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["react-dom" :as react-dom]
            ["monaco-editor/esm/vs/editor/editor.api.js" :as monaco :refer [KeyMod KeyCode]]
            ["monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js"]
            ["monaco-editor/esm/vs/basic-languages/python/python.contribution.js"]
            ["monaco-editor/esm/vs/basic-languages/r/r.contribution.js"]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.events.theme :as theme-events]))

(defn monaco-editor
  "Renders a Monaco Editor component.

  Args:
    props (map): Props for the editor. Keys:
      - :value (string): Code content.
      - :language (string): Language mode.
      - :options (map): Monaco editor options.
      - :on-change (fn/vec): Callback or event vector.
      - :on-mount (fn): Callback(editor-instance).

  Returns:
    vector: A hiccup vector."
  [_]
  (let [editor-instance (r/atom nil)
        subscription (r/atom nil)
        on-change-ref (atom nil)
        ignore-change? (atom false)
        current-theme (rf/subscribe [::theme-events/current-theme])]
    (r/create-class
     {:displayName "monaco-editor"
      :component-did-mount
      (fn [this]
        (try
          (let [{:keys [value mode language options on-focus
                        on-blur on-mount on-change]} (r/props this)
                node (react-dom/findDOMNode this)
                lang (or language
                         (case mode
                           "application/json" "json"
                           "markdown" "markdown"
                           "clojure"))
                editor (monaco/editor.create
                        node
                        (clj->js
                         (merge
                          {:value (or value "")
                           :language lang
                           :linenumber "off"
                           :theme (or (:theme options) (name @current-theme))
                           :automaticLayout true
                           :minimap {:enabled false}
                           :scrollBeyondLastLine false
                           :fontFamily "'Source Code Pro', monospace"
                           :fontSize 14}
                          options)))]

            (reset! editor-instance editor)
            (reset! on-change-ref on-change)

            (when on-mount
              (on-mount editor))

            (let [sub (.onDidChangeModelContent
                       editor
                       (fn []
                         (reset! ignore-change? true)
                         (let [new-val (.getValue editor)]
                           (when-let [handler @on-change-ref]
                             (if (vector? handler)
                               (rf/dispatch (conj handler new-val))
                               (handler new-val))))
                         (reset! ignore-change? false)))]
              (reset! subscription sub))

            (when on-focus
              (.onDidFocusEditorText editor on-focus))
            (when on-blur
              (.onDidBlurEditorText editor on-blur)))
          (catch js/Error e
            (js/console.error "Monaco initialization failed:" e))))

      :component-did-update
      (fn [this [_ old-props]]
        (let [{:keys [value language mode options on-change]} (r/props this)
              editor ^js @editor-instance]
          (reset! on-change-ref on-change)
          (when editor
            (when (and (not @ignore-change?)
                       (not= (.getValue editor) value))
              (.setValue editor (or value "")))

            (let [lang (or language
                           (case mode
                             "application/json" "json"
                             "markdown" "markdown"
                             "clojure"))
                  model (.getModel editor)
                  current-lang (when model (.getLanguageId model))]
              (when (and model lang (not= current-lang lang))
                (monaco/editor.setModelLanguage model lang)))

            (when (not= (:options old-props) options)
              (.updateOptions editor (clj->js options))))))

      :component-will-unmount
      (fn [this]
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

;; Shared Editor Utilities

(defn get-code-to-eval
  "Gets the code to evaluate from the editor (selected text or full content).

  Args:
    editor (object): The Monaco editor instance.

  Returns:
    string: The code string."
  [^js editor]
  (let [selection (.getSelection editor)
        model (.getModel editor)]
    (if (and selection (not (.isEmpty selection)))
      (.getValueInRange model selection)
      (.getValue editor))))

(defn get-ctrl-key
  "Gets the Control key constant for the current platform.

  Args:
    mac-os? (boolean): Whether running on macOS.

  Returns:
    number: The KeyMod constant."
  [mac-os?]
  "Use Ctrl on all platforms for consistent keyboard shortcuts."
  (if mac-os?
    (.-WinCtrl KeyMod)
    (.-CtrlCmd KeyMod)))

(defn setup-editor-actions
  "Sets up standard actions (like Evaluate Buffer) for the editor.

  Args:
    editor (object): The editor instance.
    mac-os? (boolean): Platform flag.
    eval-action (fn): Callback(code) to execute.

  Returns:
    nil."
  [^js editor mac-os? eval-action]
  (let [ctrl-key (get-ctrl-key mac-os?)]
    (.addAction editor (clj->js {:id "eval-buffer"
                                 :label "Evaluate Buffer"
                                 :keybindings [(bit-or ctrl-key (.-Enter KeyCode))]
                                 :run (fn [^js ed] (eval-action (get-code-to-eval ed)))}))))

(defn render-output
  "Renders a list of output messages.

  Args:
    output (seq): List of message maps {:type :text}.

  Returns:
    vector: A hiccup vector."
  [output]
  (into [:div]
        (for [{:keys [type text]} output]
          ^{:key (random-uuid)}
          [:pre {:class (case type
                          :result t/text-primary
                          :stdout t/text-primary
                          :stderr t/text-danger
                          :error t/text-danger)}
           text])))
