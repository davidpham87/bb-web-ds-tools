(ns bb-web-ds-tools.components.tabs
  (:require [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.events.tabs :as events]
            [re-frame.core :as rf]))

(defn tabs
  "Renders a horizontal scrollable tab bar.

  Args:
    props (map): Props. Keys:
      - :id (keyword, optional): Unique ID for implicit state management.
      - :tabs (seq): List of maps with :id, :label, :on-close.
      - :active-tab-id (any): ID of active tab (controlled).
      - :default-tab-id (any): Default active tab ID (implicit).
      - :on-change (fn): Callback(id) on tab switch.
      - :on-add (fn): Callback() on add button click.
      - :class (string): CSS classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [id] :as initial-props}]
  (let [active-tab-sub (when id (rf/subscribe [::events/active-tab id]))]
    (fn [{:keys [id tabs active-tab-id default-tab-id on-change on-add class]}]
      (let [active-tab (if (and id active-tab-sub)
                         @active-tab-sub
                         active-tab-id)
            current-tab (or active-tab
                            (when id (or default-tab-id (:id (first tabs)))))
            handle-change (fn [tab-id]
                            (when id
                              (rf/dispatch [::events/set-active-tab id tab-id]))
                            (when on-change
                              (on-change tab-id)))]
        [:div {:class (str "flex items-center space-x-2 border-b " t/border-default " " class)}
         [:div {:class "flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"}
          (for [{:keys [id label on-close]} tabs]
            ^{:key (str id)}
            [:div {:class (str "flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit "
                               (if (= id current-tab)
                                 (str t/bg-card " " t/border-default " " t/text-accent " -mb-px pb-2.5 z-10")
                                 (str t/bg-input " border-transparent " t/text-secondary " hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100")))
                   :on-click #(handle-change id)}
             [:span {:class "whitespace-nowrap font-medium text-sm"} label]
             (when on-close
               [:button {:class (str "ml-2 p-0.5 rounded hover:bg-white/10 " t/text-muted " hover:text-red-400 transition-colors")
                         :on-click (fn [e]
                                     (.stopPropagation e)
                                     (on-close id))}
                [:span {:class "text-xs font-bold leading-none"} "✕"]])])]
         (when on-add
           [:button {:class (str "px-3 py-2 rounded-t-md " t/bg-button-xs " " t/bg-button-xs-hover " " t/text-button " font-bold text-lg leading-none mb-0.5")
                     :on-click on-add
                     :title "Add New"}
            "+"])]))))
