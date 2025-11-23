(ns bb-web-ds-tools.stories.layout-stories
  (:require [bb-web-ds-tools.components.layout :as l]
            [reagent.core :as r]
            [goog.object :as gobj]))

(def meta-data
  #js {:title "Layout/Components"})

(defn ^:export PageContainerDefault []
  (r/as-element
   [l/page-container {:class "p-4"}
    [:h1 "Page Container"]
    [:p "This component takes full height and sets the background color."]]))

(defn ^:export ContainerDefault []
  (r/as-element
   [l/container {:class "bg-[#4f4f4f] text-white p-4"}
    [:h1 "Container"]
    [:p "Centered container with horizontal padding."]]))

(defn ^:export SectionDefault []
  (r/as-element
   [l/section {:class "bg-[#2f2f2f] text-white border border-gray-500"}
    [:h2 "Section"]
    [:p "A generic section with vertical padding."]]))

(defn ^:export GridDefault []
  (r/as-element
   [l/grid {:class "grid-cols-3 gap-4 p-4"}
    [:div {:class "bg-red-500 p-4"} "1"]
    [:div {:class "bg-green-500 p-4"} "2"]
    [:div {:class "bg-blue-500 p-4"} "3"]
    [:div {:class "bg-yellow-500 p-4"} "4"]]))

(defn ^:export FlexRowDefault []
  (r/as-element
   [l/flex-row {:class "gap-4 p-4 bg-[#2f2f2f]"}
    [:div {:class "bg-red-500 p-4"} "Row Item 1"]
    [:div {:class "bg-blue-500 p-4"} "Row Item 2"]]))

(defn ^:export FlexColDefault []
  (r/as-element
   [l/flex-col {:class "gap-4 p-4 bg-[#2f2f2f]"}
    [:div {:class "bg-red-500 p-4"} "Col Item 1"]
    [:div {:class "bg-blue-500 p-4"} "Col Item 2"]]))

(defn ^:export SidebarDefault []
  (r/as-element
   [l/flex-row {:class "h-64 border border-gray-500"}
    [l/sidebar {:class "static h-full"} ;; static and h-full for demo purposes inside a constrained container
     [:div {:class "p-4 text-white"} "Sidebar Content"]]
    [l/main
     [:div {:class "p-4 text-white"} "Main Content"]]]))

(defn ^:export RowColDefault []
  (r/as-element
   [l/container
    [l/row
     [l/col {:class "w-1/2 bg-red-500 p-4 text-white"} "Col 1/2"]
     [l/col {:class "w-1/2 bg-blue-500 p-4 text-white"} "Col 1/2"]]]))

;; Manually export default for Storybook
(gobj/set js/module.exports "default" meta-data)
