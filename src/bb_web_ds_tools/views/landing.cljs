(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.landing :as landing]
            [bb-web-ds-tools.theme :as t]))

(defn landing-page
  "Renders the landing page with animated feature cards.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "min-h-full p-8 flex flex-col items-center justify-center"}
   [:div {:class "max-w-7xl w-full"}
    [:div {:class "text-center mb-12"}
     [:h1 {:class (str "text-5xl font-extrabold mb-4 " t/text-accent " tracking-tight")}
      "The \"Swiss Army Knife\" of Data Science"]
     [:p {:class (str "text-xl " t/text-secondary " max-w-3xl mx-auto leading-relaxed")}
      "Because sometimes you just want to run Python, R, Clojure, and a Large Language Model in your browser simultaneously while editing SQL and validating JSON schemas, and you don't want to open a new tab."]]

    [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"}
     (for [card landing/feature-cards]
       ^{:key (:route card)}
       [landing/canvas-card card])]]])
