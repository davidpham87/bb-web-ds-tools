(ns bb-web-ds-tools.components.repl
  (:require [fork.re-frame :as fork]
            [bb-web-ds-tools.components.editor :as editor-comp]))

(defn input-panel [{:keys [path code on-submit on-focus on-blur]}]
  [fork/form {:initial-values {"code" code}
              :keywordize-keys true
              :path path
              :prevent-default? true
              :clean-on-unmount? true
              :on-submit (fn [{:keys [values]}]
                           (on-submit (:code values)))}
   (fn [{:keys [values set-values handle-submit]}]
     [:div
      [:div.flex-grow.relative.h-64
       [editor-comp/codemirror-editor {:value (:code values)
                                       :on-change #(set-values {:code %})
                                       :on-focus on-focus
                                       :on-blur on-blur}]]
      [:div.flex.justify-end.mt-2
       [:button.bg-blue-600.text-white.px-6.py-2.rounded.shadow.hover:bg-blue-700.transition
        {:on-click handle-submit}
        "Evaluate"]]])])

(defn output-panel [{:keys [output]}]
  [:div.flex.flex-col.border.rounded.shadow-sm
   [:div.bg-gray-100.p-2.border-b.font-semibold "Output Log"]
   [:div.flex-grow.p-2.overflow-auto.bg-white.font-mono.text-sm.h-64.border-t
    (if (empty? output)
      [:div.text-gray-400.italic "No output yet..."]
      (for [[i entry] (map-indexed vector (reverse output))]
        ^{:key i}
        [:div.mb-1.border-b.pb-1 {:class (if (= (:type entry) :error) "text-red-600" "text-green-700")}
         [:span.font-bold.mr-2 (if (= (:type entry) :error) "ERR:" "=>")]
         (:text entry)]))]])

(defn repl-card [{:keys [code output on-eval on-focus on-blur path]}]
  [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mb-4
   [:div.flex.flex-col.border.rounded.shadow-sm
    [:div.bg-gray-100.p-2.border-b.font-semibold "Code Input"]
    [:div.p-2
     [input-panel {:path path
                   :code code
                   :on-submit on-eval
                   :on-focus on-focus
                   :on-blur on-blur}]]]
   [output-panel {:output output}]])
