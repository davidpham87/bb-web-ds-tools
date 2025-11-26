(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.theme :as t]))

(def nav-items
  [{:label "App DB" :route :app-db :icon "🗄️"}
   {:label "Datasets" :route :datasets :icon "📊"}
   {:label "Malli" :route :malli :icon "✅"}
   {:label "HoneySQL" :route :honeysql :icon "🍯"}
   {:label "Vega-Lite" :route :vega-lite :icon "📈"}
   {:label "Gemma" :route :gemma :icon "🤖"}
   {:label "Pyodide" :route :pyodide :icon "🐍"}
   {:label "Editor" :route :editor :icon "📝"}
   {:label "Repl" :route :repl :icon "💻"}
   {:label "R" :route :r-repl :icon "🇷"}
   {:label "Settings" :route :settings :icon "⚙️"}
   {:label "Changelog" :route :changelog :icon "📜"}])

(defn nav-card [{:keys [label route icon]}]
  [c/card
   {:class (str "flex flex-col items-center justify-center p-6 text-center "
                "cursor-pointer transition-transform transform hover:scale-105 "
                t/bg-card-hover)
    :on-click #(rf/dispatch [::navigate route nil nil])}
   [:div {:class "text-4xl mb-2"} icon]
   [:span {:class "font-semibold"} label]])

(defn landing-page []
  [:div {:class "p-6"}
   [:h1 {:class (str "text-3xl font-bold mb-6 " t/text-accent)}
    "Welcome to the Data Science Workbench"]
   [:div {:class "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"}
    (for [item nav-items]
      ^{:key (:route item)}
      [nav-card item])]])
