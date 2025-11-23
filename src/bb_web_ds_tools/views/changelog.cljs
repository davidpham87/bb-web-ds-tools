(ns bb-web-ds-tools.views.changelog
  (:require [bb-web-ds-tools.components.common :as c]))

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
  [:div {:class "bg-[#4f4f4f] border-l-4 border-[#8cd0d3] p-6 mb-6 rounded-r-lg shadow-md"}
   [:div {:class "flex items-center justify-between mb-4"}
    [:h3 {:class "text-2xl font-bold text-[#f0dfaf]"} (str "v" version)]
    [:span {:class "text-[#9f9f9f] text-sm"} date]]
   [:ul {:class "list-disc list-inside text-[#dcdccc] space-y-2"}
    (for [change changes]
      ^{:key change}
      [:li change])]])

(defn changelog-page []
  [:div {:class "min-h-screen bg-[#3f3f3f] py-12 px-4"}
   [:div {:class "container mx-auto max-w-3xl"}
    ;; [c/page-header "Changelog"] ;; Removed as per request
    [:h2 {:class "text-3xl font-bold text-[#f0dfaf] text-center mb-8"} "Changelog"]
    [:div
     (for [item changelog-data]
       ^{:key (:version item)}
       [changelog-item item])]]])
