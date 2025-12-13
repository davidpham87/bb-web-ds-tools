(ns bb-web-ds-tools.components.navigation
  (:require [bb-web-ds-tools.components.common :as common]
            [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            ["react-dom" :as ReactDOM]))

(def wiki-base-url "https://davidpham87.github.io//bb-web-ds-tools/wiki/")

(def wiki-mapping
  {:landing-page "index.md"
   :app-db "app_db.md"
   :changelog "changelog.md"
   :code "code_environments.md"
   :datasets "datasets.md"
   :gemma "gemma.md"
   :honeysql "honeysql.md"
   :malli "malli.md"
   :vega-lite "vega_lite.md"
   :settings "index.md"})

(defn get-wiki-url
  "Returns the wiki URL for a given route name."
  [route-name]
  (let [page (get wiki-mapping route-name "index.md")]
    (str wiki-base-url page)))

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
      - :active-label (string): The label of the current section.
      - :active-route (keyword): The current route name.

  Returns:
    vector: A hiccup vector."
  [{:keys [active-label active-route]}]
  [:div {:class (str "flex items-center w-full h-12 px-4 border-b " t/border-main " " t/bg-toolbar)}
   ;; Menu Button
   [menu-button]

   ;; Current Section Title
   [:div {:class (str "ml-4 font-bold text-lg " t/text-accent)}
    active-label]

   ;; Portal Target (for secondary nav)
   [:div {:class "flex-grow h-full flex items-center justify-end"
          :ref (fn [el] (rf/dispatch [::set-top-bar-ref el]))}
    ;; Global Help Button at the far right
    [common/help-button
     {:href (get-wiki-url :landing-page)
      :title "Global Help (Wiki)"
      :class "ml-2"}]]])
