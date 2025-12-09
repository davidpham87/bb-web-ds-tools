(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.landing :as landing]
            [bb-web-ds-tools.theme :as t]))

(def github-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}]])

(defn landing-page
  "Renders the landing page with animated feature cards.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "min-h-full p-8 flex flex-col items-center"}
   [:div {:class "max-w-7xl w-full flex-grow flex flex-col justify-center"}
    [:div {:class "text-center mb-12"}
     [:h1 {:class (str "text-5xl font-extrabold mb-4 " t/text-accent " tracking-tight")}
      "The \"Swiss Army Knife\" of Data Science"]
     [:p {:class (str "text-xl " t/text-secondary " max-w-3xl mx-auto leading-relaxed")}
      "Because sometimes you just want to run Python, R, Clojure, and a Large Language Model in your browser simultaneously while editing SQL and validating JSON schemas, and you don't want to open a new tab."]]

    [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"}
     (for [card landing/feature-cards]
       ^{:key (:route card)}
       [landing/canvas-card card])]]

   [:footer {:class (str "w-full py-6 mt-12 border-t " t/border-default)}
    [:div {:class "flex justify-center items-center gap-8"}
     [:a {:href "wiki/"
          :class (str "flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      "Wiki"]
     [:a {:href "blog/"
          :class (str "flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      "Blog"]
     [:a {:href "https://github.com/davidpham87/bb-web-ds-tools"
          :target "_blank"
          :class (str "flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      github-icon
      "View on GitHub"]]]])
