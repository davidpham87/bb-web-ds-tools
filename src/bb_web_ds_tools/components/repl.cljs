(ns bb-web-ds-tools.components.repl
  "Reagent component library for repl.

  Key functionality:
  - (input-panel [{:keys [code on-change on-submit on-focus on-blur on-mount])
  - (output-panel [{:keys [output])
  - (repl-card [{:keys [code output on-change on-eval on-focus on-blur path on-mount])"
  (:require [bb-web-ds-tools.components.editor :as editor-comp]))

(defn input-panel
  "Renders the REPL input area with a Monaco editor.

  Args:
    props (map): Keys:
      - :code (string): Current code.
      - :on-change (fn): Change callback.
      - :on-submit (fn): Submit callback.
      - :on-focus (fn): Focus callback.
      - :on-blur (fn): Blur callback.
      - :on-mount (fn): Mount callback.

  Returns:
    vector: A hiccup vector."
  [{:keys [code on-change on-submit on-focus on-blur on-mount]}]
  [:div
   [:div {:class "flex-grow relative h-64 rounded overflow-hidden border border-[#5f5f5f]"}
    [editor-comp/monaco-editor {:value code
                                :on-change on-change
                                :on-focus on-focus
                                :on-blur on-blur
                                :on-mount on-mount}]]
   [:div {:class "flex justify-end mt-2"}
    [:button {:class "bg-[#7f9f7f] text-[#3f3f3f] font-bold px-6 py-2 rounded shadow hover:bg-[#8fb28f] transition"
              :on-click #(on-submit code)}
     "Evaluate"]]])

(defn output-panel
  "Renders the REPL output log.

  Args:
    props (map): Keys:
      - :output (seq): List of output entries.

  Returns:
    vector: A hiccup vector."
  [{:keys [output]}]
  [:div {:class "flex flex-col rounded shadow-sm bg-[#2f2f2f] h-full"}
   [:div {:class "bg-[#3f3f3f] p-2 border-b border-[#5f5f5f] font-semibold text-[#f0dfaf]"} "Output Log"]
   [:div {:class "flex-grow p-2 overflow-auto font-mono text-sm h-64 text-[#dcdccc]"}
    (if (empty? output)
      [:div {:class "text-[#7f7f7f] italic"} "No output yet..."]
      (for [[i entry] (map-indexed vector (reverse output))]
        ^{:key i}
        [:div {:class (str "mb-1 border-b border-[#4f4f4f] pb-1 " (if (= (:type entry) :error) "text-[#cc9393]" "text-[#7f9f7f]"))}
         [:span {:class "font-bold mr-2"} (if (= (:type entry) :error) "ERR:" "=>")]
         (:text entry)]))]])

(defn repl-card
  "Renders a REPL card with input and output panels.

  Args:
    props (map): Combined props for input and output panels.

  Returns:
    vector: A hiccup vector."
  [{:keys [code output on-change on-eval on-focus on-blur path on-mount]}]
  [:div {:class "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"}
   [:div {:class "flex flex-col md:col-span-2 rounded shadow-sm bg-[#4f4f4f]"}
    [:div {:class "bg-[#3f3f3f] p-2 border-b border-[#5f5f5f] font-semibold text-[#f0dfaf]"} "Code Input"]
    [:div {:class "p-2"}
     [input-panel {:code code
                   :on-change on-change
                   :on-submit on-eval
                   :on-focus on-focus
                   :on-blur on-blur
                   :on-mount on-mount}]]]
   [:div {:class "md:col-span-1"}
    [output-panel {:output output}]]])
