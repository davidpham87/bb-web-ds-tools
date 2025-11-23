(ns bb-web-ds-tools.components.repl
  (:require [fork.re-frame :as fork]
            [bb-web-ds-tools.components.editor :as editor-comp]
            [bb-web-ds-tools.components.common :as c]))

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
      [:div {:class "flex-grow relative h-64 rounded overflow-hidden border border-subtle bg-canvas"}
       [editor-comp/monaco-editor {:value (:code values)
                                   :on-change #(set-values {:code %})
                                   :on-focus on-focus
                                   :on-blur on-blur
                                   :on-mount on-editor-mount}]]
      [:div {:class "flex justify-end mt-2"}
       [c/button {:on-click handle-submit} "Evaluate"]]])])

(defn output-panel [{:keys [output]}]
  [:div {:class "flex flex-col rounded shadow-sm bg-canvas border border-subtle"}
   [:div {:class "bg-floating p-2 border-b border-subtle font-semibold text-gray-100 font-ui"} "Output Log"]
   [:div {:class "flex-grow p-2 overflow-auto font-code text-sm h-64 text-gray-200"}
    (if (empty? output)
      [:div {:class "text-gray-500 italic"} "No output yet..."]
      (for [[i entry] (map-indexed vector (reverse output))]
        ^{:key i}
        [:div {:class (str "mb-1 border-b border-subtle pb-1 " (if (= (:type entry) :error) "text-red-300" "text-green-300"))}
         [:span {:class "font-bold mr-2"} (if (= (:type entry) :error) "ERR:" "=>")]
         (:text entry)]))]])

(defn repl-card [{:keys [code output on-eval on-focus on-blur path on-editor-mount]}]
  [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}
   [:div {:class "flex flex-col rounded shadow-sm bg-surface border border-subtle"}
    [:div {:class "bg-floating p-2 border-b border-subtle font-semibold text-gray-100 font-ui"} "Code Input"]
    [:div {:class "p-2"}
     [input-panel {:path path
                   :code code
                   :on-submit on-eval
                   :on-focus on-focus
                   :on-blur on-blur
                   :on-editor-mount on-editor-mount}]]]
   [output-panel {:output output}]])
