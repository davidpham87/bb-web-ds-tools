(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]))

(defn feature-card [title description icon]
  [c/card {:class "p-6 hover:shadow-lg transition-all duration-300"}
   [:div {:class "text-3xl mb-4"} icon]
   [:h3 {:class (str "text-xl font-bold " t/text-accent " mb-2")} title]
   [:p {:class t/text-primary} description]])

(defn hero-section []
  [l/section {:class "text-center py-20 px-4"}
   [:h1 {:class (str "text-5xl md:text-6xl font-extrabold " t/text-primary " mb-6 drop-shadow-md")}
    "BB Web DS Tools"]
   [:p {:class (str "text-xl " t/text-secondary " max-w-2xl mx-auto mb-10")}
    "A comprehensive suite of data science tools running entirely in your browser. Leverage the power of ClojureScript, Malli, HoneySQL, and local LLMs."]
   [l/flex-row {:class "justify-center gap-4"}
    [c/button {:on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate :malli])
               :class (str "rounded-full px-8 py-3 " t/bg-button-primary " " t/bg-button-primary-hover " " t/text-button-primary " font-bold")}
     "Get Started"]
    [:a {:href "https://github.com/google/gemini-cli-tools"
         :target "_blank"
         :class (str "border " t/border-default " hover:border-[#7f7f7f] " t/text-primary " font-bold py-3 px-8 rounded-full transition-all duration-200")}
     "View on GitHub"]]])

(defn features-section []
  [l/container {:class "py-16"}
   [:h2 {:class (str "text-3xl font-bold text-center " t/text-accent " mb-12")} "Key Features"]
   [l/grid {:class "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}
    [feature-card "Malli Tools" "Schema inference and data generation using metosin/malli." "🧩"]
    [feature-card "HoneySQL" "Convert Clojure data structures to SQL with HoneySQL v2." "🍯"]
    [feature-card "Vega-Lite" "Instant data visualization and plotting without a backend." "📊"]
    [feature-card "Gemma LLM" "Run Google's Gemma model locally in your browser via MediaPipe." "🤖"]]])

(defn landing-page []
  [l/page-container {}
   [hero-section]
   [features-section]])
