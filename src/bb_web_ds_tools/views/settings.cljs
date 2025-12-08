(ns bb-web-ds-tools.views.settings
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.portal :as portal]
            [bb-web-ds-tools.events.theme :as theme-events]
            [bb-web-ds-tools.utils.themes :as themes]))

(defn panel
  "Renders the settings panel.

  Returns:
    vector: A hiccup vector."
  []
  (let [current-theme @(rf/subscribe [::theme-events/current-theme])]
    [:div {:class "h-full w-full p-6 text-[#dcdccc]"}
     [:h2 {:class "text-2xl font-bold mb-6"} "Settings"]
     [c/card {:class "p-6 space-y-4"}
      [:h3 {:class "text-xl font-bold"} "Development Tools"]
      [:p {:class "text-sm text-gray-400"} "Tools to assist with debugging and development."]
      [:div {:class "mt-4"}
       [:button
        {:class "px-4 py-2 bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white rounded transition-colors"
         :on-click #(rf/dispatch [::portal/open])}
        "Open Portal"]]]
     [c/card {:class "p-6 space-y-4 mt-6"}
      [:h3 {:class "text-xl font-bold"} "Appearance"]
      [:div
       [:label {:class "block text-sm font-medium mb-2"} "Theme"]
       [:select
        {:class "bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]"
         :value (name current-theme)
         :on-change #(rf/dispatch [::theme-events/set-theme (keyword (.. % -target -value))])}
        (for [theme-name (keys themes/themes)]
          ^{:key theme-name}
          [:option {:value (name theme-name)} (name theme-name)])]]]]))
