(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.theme :as t]))


(defn nav-card
  "Renders a navigation card.

  Args:
    props (map): A map containing :label, :route, and :icon.

  Returns:
    vector: A hiccup vector."
  [{:keys [label route icon]}]
  [c/card
   {:class (str "flex flex-col items-center justify-center p-6 text-center "
                "cursor-pointer transition-transform transform hover:scale-105 "
                t/bg-item-hover)
    :on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate route nil nil])}
   [:div {:class "text-4xl mb-2"} icon]
   [:span {:class "font-semibold"} label]])

(defn landing-page
  "Renders the landing page with navigation cards.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "p-6"}
   [:h1 {:class (str "text-3xl font-bold mb-6 " t/text-accent)}
    "Welcome to the Data Science Workbench"]
   [:div {:class "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"}
    (for [item c/nav-items]
      ^{:key (:route item)}
      [nav-card item])]])
