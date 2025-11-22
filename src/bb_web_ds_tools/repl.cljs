(ns bb-web-ds-tools.repl
  (:require [reagent.core :as r]
            [sci.core :as sci]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [bb-web-ds-tools.ui.core :as ui]))

(def sci-ctx
  (sci/init {:namespaces {'re-frame.core {'subscribe rf/subscribe
                                          'dispatch rf/dispatch}
                          're-frame.db {'app-db rf-db/app-db}
                          'clojure.core {'println println}}}))

(defn eval-code [code output-atom]
  (try
    (let [result (sci/eval-string code sci-ctx)]
      (swap! output-atom conj {:type :result :text (pr-str result)}))
    (catch :default e
      (swap! output-atom conj {:type :error :text (str e)}))))

(defn repl-panel []
  (let [input-code (r/atom "(+ 1 1)")
        output-log (r/atom [])]
    (fn []
      [:div.flex.flex-col.h-full.space-y-4.p-4
       [:div.text-lg.font-bold "Clojure REPL"]
       [:div.text-sm.text-gray-600 "Use (re-frame.core/subscribe ...) or (re-frame.core/dispatch ...) to interact with the app."]
       [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
        ;; Input
        [:div.flex.flex-col.border.rounded.shadow-sm
         [:div.bg-gray-100.p-2.border-b.font-semibold "Code Input"]
         [:div.flex-grow.relative.h-64
          [ui/codemirror-editor {:value @input-code
                                 :on-change #(reset! input-code %)}]]]
        ;; Output
        [:div.flex.flex-col.border.rounded.shadow-sm
         [:div.bg-gray-100.p-2.border-b.font-semibold "Output Log"]
         [:div.flex-grow.p-2.overflow-auto.bg-white.font-mono.text-sm.h-64.border-t
          (if (empty? @output-log)
            [:div.text-gray-400.italic "No output yet..."]
            (for [[i entry] (map-indexed vector (reverse @output-log))]
              ^{:key i}
              [:div.mb-1.border-b.pb-1 {:class (if (= (:type entry) :error) "text-red-600" "text-green-700")}
               [:span.font-bold.mr-2 (if (= (:type entry) :error) "ERR:" "=>")]
               (:text entry)]))]]]
       [:div.flex.justify-end
        [:button.bg-blue-600.text-white.px-6.py-2.rounded.shadow.hover:bg-blue-700.transition
         {:on-click #(eval-code @input-code output-log)}
         "Evaluate"]]])))
