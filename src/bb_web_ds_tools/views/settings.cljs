(ns bb-web-ds-tools.views.settings
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.portal :as portal]
            [bb-web-ds-tools.events.settings :as settings-events]
            [bb-web-ds-tools.events.theme :as theme-events]
            [bb-web-ds-tools.utils.themes :as themes]))

(def settings-nav
  [{:id :general
    :label "General"
    :icon "⚙️"
    :children [{:id :appearance :label "Appearance"}
               {:id :development :label "Development"}]}
   {:id :datasets
    :label "Datasets"
    :icon "📊"
    :children [{:id :dataset-import :label "Import Defaults"}]}
   {:id :code
    :label "Code"
    :icon "💻"
    :children [{:id :webr-settings :label "WebR"}]}])

(defn sidebar-item
  [{:keys [item active-id expanded-ids on-select on-toggle]}]
  (let [has-children? (seq (:children item))
        expanded? (contains? expanded-ids (:id item))
        active? (= active-id (:id item))]
    [:div
     [:div {:class (str "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3f3f3f] transition-colors "
                        (when active? "bg-[#3f3f3f] text-[#f0dfaf]"))
            :on-click #(if has-children?
                         (on-toggle (:id item))
                         (on-select (:id item)))}
      [:div {:class "flex items-center space-x-2"}
       [:span (:icon item)]
       [:span {:class "font-medium"} (:label item)]]
      (when has-children?
        [:span {:class "text-xs text-gray-400"}
         (if expanded? "▼" "▶")])]
     (when (and has-children? expanded?)
       [:div {:class "bg-black/20"}
        (for [child (:children item)]
          ^{:key (:id child)}
          [:div {:class (str "pl-10 pr-4 py-2 text-sm cursor-pointer hover:bg-[#3f3f3f] transition-colors "
                             (when (= active-id (:id child)) "bg-[#3f3f3f] text-[#f0dfaf]"))
                 :on-click #(on-select (:id child))}
           (:label child)])])]))

(defn general-settings []
  (let [current-theme @(rf/subscribe [::theme-events/current-theme])]
    [c/card {:class "p-6 space-y-6"}
     [:h3 {:class "text-xl font-bold"} "General Settings"]
     [:div
      [:label {:class "block text-sm font-medium mb-2"} "Theme"]
      [:select
       {:class "bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]"
        :value (name current-theme)
        :on-change #(rf/dispatch [::theme-events/set-theme (keyword (.. % -target -value))])}
       (for [theme-name (sort (keys themes/themes))]
         ^{:key theme-name}
         [:option {:value (name theme-name)} (name theme-name)])]]]))

(defn appearance-settings []
  [general-settings])

(defn development-settings []
  [c/card {:class "p-6 space-y-4"}
   [:h3 {:class "text-xl font-bold"} "Development Tools"]
   [:p {:class "text-sm text-gray-400"} "Tools to assist with debugging and development."]
   [:div {:class "mt-4"}
    [:button
     {:class "px-4 py-2 bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white rounded transition-colors"
      :on-click #(rf/dispatch [::portal/open])}
     "Open Portal"]]])

(defn dataset-import-settings []
  (let [col-norm @(rf/subscribe [::settings-events/column-normalizer])]
    [c/card {:class "p-6 space-y-4"}
     [:h3 {:class "text-xl font-bold"} "Dataset Import Defaults"]
     [:div
      [:label {:class "block text-sm font-medium mb-2"} "Default Column Name Case"]
      [:select
       {:class "bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]"
        :value (name (:case col-norm))
        :on-change #(rf/dispatch [::settings-events/set-column-normalizer-case (keyword (.. % -target -value))])}
       (for [c [:snake_case :CamelCase :kebab-case]]
         ^{:key c}
         [:option {:value (name c)} (name c)])]]
     [:div {:class "mt-4"}
      [:label {:class "block text-sm font-medium mb-2"} "Default Column Name Type"]
      [:select
       {:class "bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]"
        :value (name (:output col-norm))
        :on-change #(rf/dispatch [::settings-events/set-column-normalizer-output (keyword (.. % -target -value))])}
       (for [o [:string :keyword :symbol]]
         ^{:key o}
         [:option {:value (name o)} (name o)])]]]))

(defn webr-settings []
  (let [settings @(rf/subscribe [::settings-events/webr-settings])]
    [c/card {:class "p-6 space-y-6"}
     [:h3 {:class "text-xl font-bold"} "WebR Settings"]
     [:div
      [:label {:class "block text-sm font-medium mb-2"} "Graphic Container Width (px)"]
      [c/input {:type "number"
                :value (:container-width settings)
                :on-change-event [::settings-events/set-webr-setting :container-width]
                :class "w-full max-w-xs"}]]
     [:div
      [:label {:class "block text-sm font-medium mb-2"} "Graphic Container Height (px)"]
      [c/input {:type "number"
                :value (:container-height settings)
                :on-change-event [::settings-events/set-webr-setting :container-height]
                :class "w-full max-w-xs"}]]
     [:div
      [:label {:class "block text-sm font-medium mb-2"} "Canvas Scale Factor"]
      [c/input {:type "number"
                :step "0.01"
                :value (:canvas-scale settings)
                :on-change-event [::settings-events/set-webr-setting :canvas-scale]
                :class "w-full max-w-xs"}]]]))

(defn content-panel [active-view]
  [:div {:class "p-6 h-full overflow-y-auto"}
   (case active-view
     :general [general-settings]
     :appearance [appearance-settings]
     :development [development-settings]
     :datasets [dataset-import-settings] ;; Fallback if parent clicked
     :dataset-import [dataset-import-settings]
     :code [webr-settings] ;; Fallback
     :webr-settings [webr-settings]
     [:div "Select a setting"])])

(defn panel
  "Renders the settings panel with a sidebar layout."
  []
  (let [active-view @(rf/subscribe [::settings-events/active-view])
        expanded-views @(rf/subscribe [::settings-events/expanded-views])]
    [l/split-view {:ratio :1-3}
     ;; Sidebar
     [:div {:class "h-full bg-[#2b2b2b] border-r border-[#3f3f3f] overflow-y-auto py-4"}
      [:h2 {:class "text-xl font-bold px-4 mb-4 text-[#dcdccc]"} "Settings"]
      (for [item settings-nav]
        ^{:key (:id item)}
        [sidebar-item {:item item
                       :active-id active-view
                       :expanded-ids expanded-views
                       :on-select #(rf/dispatch [::settings-events/set-active-view %])
                       :on-toggle #(rf/dispatch [::settings-events/toggle-expanded-view %])}])]
     ;; Content
     [content-panel active-view]]))
