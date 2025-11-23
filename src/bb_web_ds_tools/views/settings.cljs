(ns bb-web-ds-tools.views.settings
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [day8.re-frame-10x :as rf-10x]))

(defn toggle-panel []
  ;; Attempt to subscribe to the internal 10x subscription.
  ;; We wrap it in a try-catch via a custom sub or just hope it exists.
  ;; Since we require the namespace, it should be registered.
  (let [visible? (try
                   @(rf/subscribe [:day8.re-frame-10x.panels.settings.subs/show-panel?])
                   (catch :default _ false))]
    [:div
     [c/label "re-frame-10x Debug Panel"]
     [:div {:class "flex items-center space-x-2"}
      [:input {:type "checkbox"
               :class "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               :checked (boolean visible?)
               :on-change #(rf-10x/show-panel! (not visible?))}]
      [:span {:class "text-sm text-gray-300"} "Show Panel"]]]))

(defn panel []
  [:div {:class "p-4 text-[#dcdccc]"}
   [:h2 {:class "text-2xl font-bold mb-6"} "Settings"]
   [c/card {:class "p-6 space-y-4"}
    [:h3 {:class "text-xl font-bold"} "Development Tools"]
    [:p {:class "text-sm text-gray-400"} "Tools to assist with debugging and development."]
    [:div {:class "mt-4"}
     [toggle-panel]]]])
