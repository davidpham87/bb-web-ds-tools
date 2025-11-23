(ns bb-web-ds-tools.components.repl
  (:require [fork.re-frame :as fork]
            [bb-web-ds-tools.components.editor :as editor-comp]))

(defn input-panel [{:keys [path code on-submit on-focus on-blur on-editor-mount]}]
  [fork/form {:initial-values {"code" code}
              :keywordize-keys true
              :path path
              :prevent-default? true
              :clean-on-unmount? true
              :on-submit (fn [{:keys [values]}]
                           (on-submit (:code values)))}
   (fn [{:keys [values set-values handle-submit]}]
     [:div
      [:div {:class "flex-grow relative h-64 rounded overflow-hidden border border-[#5f5f5f]"}
       [editor-comp/monaco-editor {:value (:code values)
                                   :on-change #(set-values {:code %})
                                   :on-focus on-focus
                                   :on-blur on-blur
                                   :on-mount on-editor-mount}]]
      [:div {:class "flex justify-end mt-2"}
       [:button {:class "bg-[#7f9f7f] text-[#3f3f3f] font-bold px-6 py-2 rounded shadow hover:bg-[#8fb28f] transition"
                 :on-click handle-submit}
        "Evaluate"]]])])

(defn output-panel [{:keys [output]}]
  [:div {:class "flex flex-col rounded shadow-sm bg-[#2f2f2f]"}
   [:div {:class "bg-[#3f3f3f] p-2 border-b border-[#5f5f5f] font-semibold text-[#f0dfaf]"} "Output Log"]
   [:div {:class "flex-grow p-2 overflow-auto font-mono text-sm h-64 text-[#dcdccc]"}
    (if (empty? output)
      [:div {:class "text-[#7f7f7f] italic"} "No output yet..."]
      (for [[i entry] (map-indexed vector (reverse output))]
        ^{:key i}
        [:div {:class (str "mb-1 border-b border-[#4f4f4f] pb-1 " (if (= (:type entry) :error) "text-[#cc9393]" "text-[#7f9f7f]"))}
         [:span {:class "font-bold mr-2"} (if (= (:type entry) :error) "ERR:" "=>")]
         (:text entry)]))]])

(defn repl-card [{:keys [code output on-eval on-focus on-blur path on-editor-mount]}]
  [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}
   [:div {:class "flex flex-col rounded shadow-sm bg-[#4f4f4f]"}
    [:div {:class "bg-[#3f3f3f] p-2 border-b border-[#5f5f5f] font-semibold text-[#f0dfaf]"} "Code Input"]
    [:div {:class "p-2"}
     [input-panel {:path path
                   :code code
                   :on-submit on-eval
                   :on-focus on-focus
                   :on-blur on-blur
                   :on-editor-mount on-editor-mount}]]]
   [output-panel {:output output}]])
