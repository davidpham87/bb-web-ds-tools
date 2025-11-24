(ns bb-web-ds-tools.views.settings
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]))

(defn panel []
  [:div {:class "p-4 text-[#dcdccc]"}
   [:h2 {:class "text-2xl font-bold mb-6"} "Settings"]
   [c/card {:class "p-6 space-y-4"}
    [:h3 {:class "text-xl font-bold"} "Development Tools"]
    [:p {:class "text-sm text-gray-400"} "Tools to assist with debugging and development."]
    [:div {:class "mt-4"}
     [:span {:class "text-gray-500"} "No settings available."]]]])
