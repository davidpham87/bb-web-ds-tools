(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]))

(defn feature-card [title description icon]
  [:div {:class "bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300"}
   [:div {:class "text-3xl mb-4"} icon]
   [:h3 {:class "text-xl font-bold text-white mb-2"} title]
   [:p {:class "text-gray-400"} description]])

(defn hero-section []
  [:div {:class "text-center py-20 px-4"}
   [:h1 {:class "text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"}
    "BB Web DS Tools"]
   [:p {:class "text-xl text-gray-300 max-w-2xl mx-auto mb-10"}
    "A comprehensive suite of data science tools running entirely in your browser. Leverage the power of ClojureScript, Malli, HoneySQL, and local LLMs."]
   [:div {:class "flex justify-center gap-4"}
    [c/button {:on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate :malli])
               :class "rounded-full px-8 py-3"}
     "Get Started"]
    [:a {:href "https://github.com/google/gemini-cli-tools"
         :target "_blank"
         :class "border border-gray-600 hover:border-gray-400 text-gray-300 font-bold py-3 px-8 rounded-full transition-all duration-200"}
     "View on GitHub"]]])

(defn features-section []
  [:div {:class "container mx-auto px-4 py-16"}
   [:h2 {:class "text-3xl font-bold text-center text-white mb-12"} "Key Features"]
   [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}
    [feature-card "Malli Tools" "Schema inference and data generation using metosin/malli." "🧩"]
    [feature-card "HoneySQL" "Convert Clojure data structures to SQL with HoneySQL v2." "🍯"]
    [feature-card "Vega-Lite" "Instant data visualization and plotting without a backend." "📊"]
    [feature-card "Gemma LLM" "Run Google's Gemma model locally in your browser via MediaPipe." "🤖"]]])

(defn landing-page []
  [:div {:class "min-h-screen bg-gray-900"}
   [hero-section]
   [features-section]])
