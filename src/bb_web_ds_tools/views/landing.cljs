(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]))

(defn tool-card [{:keys [title desc icon route]}]
  [c/card {:class "p-6 hover:border-[#7f7f7f] transition-all cursor-pointer group h-full flex flex-col"
           :on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate route])}
   [l/flex-row {:class "items-start justify-between mb-4"}
    [:span {:class "text-2xl bg-[#2f2f2f] p-2 rounded-lg"} icon]
    [:span {:class (str "text-xs px-2 py-1 rounded bg-[#2f2f2f] " t/text-muted " group-hover:text-white transition-colors")} "Launch →"]]
   [:h3 {:class (str "text-lg font-bold " t/text-primary " mb-2")} title]
   [:p {:class (str "text-sm " t/text-secondary " flex-grow")} desc]])

(defn landing-page []
  [l/page-container {:class "p-8"}
   [l/flex-col {:class "space-y-12 max-w-7xl mx-auto"}
    ;; Header
    [l/flex-col {:class "items-center text-center space-y-4 mt-8"}
     [:h1 {:class (str "text-4xl font-extrabold " t/text-primary " tracking-tight")} "Data Science Workbench"]
     [:p {:class (str "text-lg " t/text-secondary " max-w-2xl")}
      "Local-first environment for data analysis, schema validation, and visualization."]]

    ;; Tools Grid
    [l/grid {:class "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}
     [tool-card {:title "Malli Schema" :desc "Infer and generate data schemas from EDN/JSON." :icon "🧩" :route :malli}]
     [tool-card {:title "Datasets" :desc "Import, view, and edit CSV/JSON datasets." :icon "💾" :route :datasets}]
     [tool-card {:title "HoneySQL" :desc "Build SQL queries programmatically." :icon "🍯" :route :honeysql}]
     [tool-card {:title "Vega-Lite" :desc "Create visualizations from your data." :icon "📊" :route :vega-lite}]
     [tool-card {:title "Gemma LLM" :desc "Run local AI models in your browser." :icon "🤖" :route :gemma}]
     [tool-card {:title "Python (Pyodide)" :desc "Run Python code and analyzing data." :icon "🐍" :route :pyodide}]
     [tool-card {:title "R (WebR)" :desc "Statistical computing with R." :icon "📈" :route :r-repl}]
     [tool-card {:title "Clojure REPL" :desc "Interactive ClojureScript environment." :icon "⚡" :route :repl}]
     [tool-card {:title "Editor" :desc "Scratchpad for code and notes." :icon "📝" :route :editor}]]]])
