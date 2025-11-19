(ns bb-web-ds-tools.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]))

(defn app []
  [:div
   [:h1 "BB Web DS Tools"]
   [:ul
    [:li [:a {:href "reader.html"} "Reader Tool"]]]])

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [app] (.getElementById js/document "app")))
