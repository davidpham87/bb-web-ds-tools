(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]))

(defn feature-card [title description icon]
  [:div {:class "bg-[#4f4f4f] rounded shadow-md p-6 hover:shadow-lg transition-all duration-300"}
   [:div {:class "text-3xl mb-4"} icon]
   [:h3 {:class "text-xl font-bold text-[#f0dfaf] mb-2"} title]
   [:p {:class "text-[#dcdccc]"} description]])

(defn hero-section []
  [:div {:class "text-center py-20 px-4"}
   [:h1 {:class "text-5xl md:text-6xl font-extrabold text-[#dcdccc] mb-6 drop-shadow-md"}
    "BB Web DS Tools"]
   [:p {:class "text-xl text-[#9f9f9f] max-w-2xl mx-auto mb-10"}
    "A comprehensive suite of data science tools running entirely in your browser. Leverage the power of ClojureScript, Malli, HoneySQL, and local LLMs."]
   [:div {:class "flex justify-center gap-4"}
    [c/button {:on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate :malli])
               :class "rounded-full px-8 py-3 bg-[#7f9f7f] hover:bg-[#8fb28f] text-[#3f3f3f] font-bold"}
     "Get Started"]
    [:a {:href "https://github.com/google/gemini-cli-tools"
         :target "_blank"
         :class "border border-[#5f5f5f] hover:border-[#7f7f7f] text-[#dcdccc] font-bold py-3 px-8 rounded-full transition-all duration-200"}
     "View on GitHub"]]])

(defn features-section []
  [:div {:class "container mx-auto px-4 py-16"}
   [:h2 {:class "text-3xl font-bold text-center text-[#f0dfaf] mb-12"} "Key Features"]
   [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}
    [feature-card "Malli Tools" "Schema inference and data generation using metosin/malli." "🧩"]
    [feature-card "HoneySQL" "Convert Clojure data structures to SQL with HoneySQL v2." "🍯"]
    [feature-card "Vega-Lite" "Instant data visualization and plotting without a backend." "📊"]
    [feature-card "Gemma LLM" "Run Google's Gemma model locally in your browser via MediaPipe." "🤖"]]])

(defn landing-page []
  [:div {:class "min-h-screen bg-[#3f3f3f]"}
   [hero-section]
   [features-section]])
