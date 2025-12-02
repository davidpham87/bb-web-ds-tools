(ns bb-web-ds-tools.views.workspaces
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [bb-web-ds-tools.workspaces.core :as ws]
            [bb-web-ds-tools.workspaces.persistence :as wp]
            [bb-web-ds-tools.components.common :as c]))

(defn workspace-list
  "Renders the list of available workspaces.

  Returns:
    vector: A hiccup vector."
  []
  (let [workspaces @(rf/subscribe [::ws/workspaces])
        active-id @(rf/subscribe [::ws/active-workspace-id])]
    [:div.p-4
     [:h2.text-xl.font-bold.mb-4 "Workspaces"]
     [:div.space-y-2
      (for [w workspaces]
        ^{:key (:workspace/id w)}
        [:div.flex.items-center.justify-between.p-2.border.rounded
         {:class (if (= (:workspace/id w) active-id) "bg-blue-100 border-blue-500" "bg-white")}
         [:span.font-medium (:workspace/name w)]
         [:button.px-3.py-1.bg-blue-500.text-white.rounded
          {:on-click #(rf/dispatch [::ws/switch-workspace (:workspace/id w)])
           :disabled (= (:workspace/id w) active-id)}
          "Switch"]])
      [:div.mt-4
       [:button.px-4.py-2.bg-green-500.text-white.rounded
        {:on-click #(let [name (js/prompt "Workspace Name:")]
                      (when (seq name)
                        (rf/dispatch [::ws/create-workspace name])))}
        "Create Workspace"]]]]))

(defn input-list
  "Renders the list of inputs in the active workspace.

  Returns:
    vector: A hiccup vector."
  []
  (let [inputs @(rf/subscribe [::ws/current-inputs])]
    [:div.p-4
     [:h2.text-xl.font-bold.mb-4 "Inputs"]
     (if (seq inputs)
       [:div.space-y-2
        (for [i inputs]
          ^{:key (:input/id i)}
          [:div.p-2.border.rounded.bg-white
           [:div.font-bold (:input/name i)]
           [:div.text-xs.text-gray-500 (str (:input/type i))]])]
       [:div.text-gray-500 "No inputs in this workspace."])
     [:div.mt-4.flex.gap-2
      [:button.px-3.py-1.bg-gray-200.rounded
       {:on-click #(let [name (js/prompt "Input Name:")]
                     (when (seq name)
                       (rf/dispatch [::ws/save-input {:type :dataset :name name :content "" :metadata {}}])))}
       "Add Dataset"]
      [:button.px-3.py-1.bg-gray-200.rounded
       {:on-click #(rf/dispatch [::wp/export-workspaces])}
       "Export DB"]]]))

(defn main-panel
  "Renders the main workspaces view panel.

  Returns:
    vector: A hiccup vector."
  []
  [:div.flex.h-full
   [:div {:class "w-1/3 border-r overflow-y-auto"}
    [workspace-list]]
   [:div.flex-1.overflow-y-auto
    [input-list]]])
