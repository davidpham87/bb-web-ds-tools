(ns bb-web-ds-tools.views.settings
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.portal :as portal]))

(defn panel
  "Renders the settings panel.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "h-full w-full p-6 text-[#dcdccc]"}
   [:h2 {:class "text-2xl font-bold mb-6"} "Settings"]
   [c/card {:class "p-6 space-y-4"}
    [:h3 {:class "text-xl font-bold"} "Development Tools"]
    [:p {:class "text-sm text-gray-400"} "Tools to assist with debugging and development."]
    [:div {:class "mt-4"}
     [:button
      {:class "px-4 py-2 bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white rounded transition-colors"
       :on-click #(rf/dispatch [::portal/open])}
      "Open Portal"]]]])
