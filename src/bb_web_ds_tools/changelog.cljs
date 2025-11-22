(ns bb-web-ds-tools.changelog)

(def changelog-data
  [{:version "0.1.0"
    :date "2024-05-21"
    :changes ["Initial release of BB Web DS Tools"
              "Added Malli Schema Inference and Generator"
              "Added HoneySQL Formatter"
              "Added Vega-Lite Visualization"
              "Added Gemma Local LLM integration"
              "Added CodeMirror editor"]}])

(defn changelog-item [{:keys [version date changes]}]
  [:div {:class "bg-gray-800 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg"}
   [:div {:class "flex items-center justify-between mb-4"}
    [:h3 {:class "text-2xl font-bold text-white"} (str "v" version)]
    [:span {:class "text-gray-400 text-sm"} date]]
   [:ul {:class "list-disc list-inside text-gray-300 space-y-2"}
    (for [change changes]
      ^{:key change}
      [:li change])]])

(defn changelog-page []
  [:div {:class "min-h-screen bg-gray-900 py-12 px-4"}
   [:div {:class "container mx-auto max-w-3xl"}
    [:h1 {:class "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12"}
     "Changelog"]
    [:div
     (for [item changelog-data]
       ^{:key (:version item)}
       [changelog-item item])]]])
