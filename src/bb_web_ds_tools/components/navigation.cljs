(ns bb-web-ds-tools.components.navigation
  (:require [bb-web-ds-tools.components.common :as common]
            [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            ["react-dom" :as ReactDOM]))

(defn menu-button
  "Renders a menu button that toggles a dropdown navigation menu.

  Returns:
    vector: A hiccup vector."
  []
  (r/with-let [open? (r/atom false)
               close-fn #(reset! open? false)]
    [:div {:class "relative"}
     [:button
      {:class (str "p-2 rounded hover:bg-white/10 transition-colors " t/text-primary)
       :on-click #(swap! open? not)
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
           [:span (:label item)]])])]))

(rf/reg-event-db
 ::set-top-bar-ref
 (fn [db [_ ref]]
   (assoc-in db [:runtime :navigation :top-bar-ref] ref)))

(rf/reg-sub
 ::top-bar-ref
 (fn [db _]
   (get-in db [:runtime :navigation :top-bar-ref])))

(defn portal-to-top-bar
  "Renders children into the top bar via a portal.

  Args:
    children (rest): Child elements to render.

  Returns:
    ReactPortal: The portal element."
  [& children]
  (let [el @(rf/subscribe [::top-bar-ref])]
    (when el
      (ReactDOM/createPortal (r/as-element (into [:div {:class "h-full flex items-center"}] children)) el))))

(defn top-bar
  "Renders the top navigation bar.

  Args:
    props (map): Props. Keys:
      - :active-tab-id (keyword): The ID of the currently active tab (route name).
      - :open-tabs (seq): List of open tabs (maps with :id, :label).
      - :on-tab-change (fn): Callback when a tab is clicked (arg: tab-id).
      - :on-tab-close (fn): Callback when a tab is closed (arg: tab-id).

  Returns:
    vector: A hiccup vector."
  [{:keys [active-tab-id open-tabs on-tab-change on-tab-close]}]
  [:div {:class (str "flex items-center w-full h-12 px-4 border-b " t/border-main " " t/bg-toolbar)}
   ;; Menu Button
   [menu-button]

   ;; Tabs
   [:div {:class "ml-4 flex-grow overflow-hidden h-full flex items-end"}
    [common/tabs
     {:tabs (for [tab open-tabs]
              {:id (:id tab)
               :label (:label tab)
               :on-close on-tab-close})
      :active-tab-id active-tab-id
      :on-change on-tab-change
      :class "border-b-0" }]]

   ;; Portal Target
   [:div {:class "h-full flex items-center"
          :ref (fn [el] (rf/dispatch [::set-top-bar-ref el]))}]])
