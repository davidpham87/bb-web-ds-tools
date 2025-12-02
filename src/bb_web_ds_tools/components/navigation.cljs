(ns bb-web-ds-tools.components.navigation
  (:require [bb-web-ds-tools.components.common :as common]
            [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            ["react-dom" :as ReactDOM]))

;; Events & Subscriptions
(rf/reg-event-db
 ::toggle-menu
 (fn [db _]
   (update-in db [:navigation :menu-open?] not)))

(rf/reg-event-db
 ::set-menu-open?
 (fn [db [_ open?]]
   (assoc-in db [:navigation :menu-open?] open?)))

(rf/reg-event-db
 ::set-top-bar-ref
 (fn [db [_ el]]
   (assoc-in db [:runtime :navigation :top-bar-ref] el)))

(rf/reg-sub
 ::menu-open?
 (fn [db _]
   (get-in db [:navigation :menu-open?])))

(rf/reg-sub
 ::top-bar-ref
 (fn [db _]
   (get-in db [:runtime :navigation :top-bar-ref])))

;; Components

(defn portal-to-top-bar
  "Renders content into the top-bar via a React Portal.

  Args:
    child (vector): The hiccup content to render.

  Returns:
    ReactElement: The portal."
  [child]
  (let [el (rf/subscribe [::top-bar-ref])]
    (fn [child]
      (when @el
        (ReactDOM/createPortal (r/as-element child) @el)))))

(defn menu-button
  "Renders a menu button that toggles a dropdown navigation menu.

  Returns:
    vector: A hiccup vector."
  []
  (let [open? (rf/subscribe [::menu-open?])
        close-fn #(rf/dispatch [::set-menu-open? false])]
    (fn []
      [:div {:class "relative"}
       [:button
        {:class (str "p-2 rounded hover:bg-white/10 transition-colors " t/text-primary)
         :on-click #(rf/dispatch [::toggle-menu])
         :title "Menu"}
        [:svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-6 h-6"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}]]]

       (when @open?
         [:div
          {:class (str "absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg " t/bg-card " border " t/border-subtle " z-50 py-1")
           :on-mouse-leave close-fn}
          ;; Home Link
          [:a {:href (rfe/href :landing-page)
               :class (str "block px-4 py-2 text-sm " t/text-primary " hover:bg-white/5")
               :on-click close-fn}
           "Home"]

          [:div {:class (str "border-t " t/border-subtle " my-1")}]

          ;; Nav Items
          (for [item common/nav-items]
            ^{:key (:route item)}
            [:a {:href (rfe/href (:route item))
                 :class (str "block px-4 py-2 text-sm " t/text-primary " hover:bg-white/5 flex items-center gap-2")
                 :on-click close-fn}
             [:span (:icon item)]
             [:span (:label item)]])])])))

(defn top-bar
  "Renders the top navigation bar.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class (str "flex items-center w-full h-12 px-4 border-b " t/border-main " " t/bg-toolbar)}
   ;; Menu Button
   [menu-button]

   ;; Portal Target for View Tabs
   [:div {:class "ml-4 flex-grow overflow-hidden h-full flex items-end"
          :ref #(rf/dispatch [::set-top-bar-ref %])}]])
