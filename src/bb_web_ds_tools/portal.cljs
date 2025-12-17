(ns bb-web-ds-tools.portal
  "Key functions:
  - (portal-frame [])
  - (portal-panel [value & [viewer])

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   [portal.web :as p]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [bb-web-ds-tools.events.theme :as theme-events]))

(rf/reg-fx
 :portal/open
 (fn [{:keys [iframe-parent-id theme]}]
   (tap> iframe-parent-id)
   (let [options (cond-> {:theme (or (keyword "portal.colors" (name theme)) :portal.colors/zenburn)}
                   iframe-parent-id
                   (assoc :launcher :iframe
                          :iframe-parent (.getElementById js/document iframe-parent-id)))]
     (p/open options))))

(rf/reg-event-fx
 ::open
 (fn [{:keys [db]} [_ {:keys [node-id] :as opts}]]
   (let [theme (get db ::theme-events/current-theme :zenburn)]
     {:portal/open {:iframe-parent-id node-id
                    :theme theme}})))

(rf/reg-fx
 :portal/submit
 (fn [value]
   (p/submit value)))

(rf/reg-event-fx
 ::submit
 (fn [_ [_ value viewer]]
   {:portal/submit
    (if viewer
      (if (satisfies? IWithMeta value)
        (with-meta value {:portal.viewer/default viewer})
        [viewer value])
      value)}))

(defn portal-frame
  "Renders a div that acts as the container for the Portal iframe.

  Returns:
    vector: A hiccup vector representing the portal container."
  []
  (let [current-theme @(rf/subscribe [::theme-events/current-theme])]
    [:div {:class "w-full"
           :style {:height "100%" :margin 0 :padding 0}
           :ref (fn [el]
                  (when el
                    (p/open {:launcher :iframe
                             :iframe-parent el
                             :theme (keyword "portal.colors" (name current-theme))})))}]))

(defn portal-panel
  "A Reagent component that renders a Portal inspector and automatically submits data to it.

  Args:
    value (any): The data to inspect.
    viewer (keyword, optional): The default viewer to use (e.g., :portal.viewer/table).

  Returns:
    vector: A hiccup vector representing the component."
  [value & [viewer]]
  (r/create-class
   {:component-did-mount
    (fn [this]
      (let [[_ value viewer] (r/argv this)]
        (rf/dispatch [::submit value viewer])))
    :component-did-update
    (fn [this [_ old-value old-viewer]]
      (let [[_ value viewer] (r/argv this)]
        (when (or (not= value old-value)
                  (not= viewer old-viewer))
          (rf/dispatch [::submit value viewer]))))
    :reagent-render
    (fn [value viewer]
      [portal-frame])}))

(comment
  (p/submit 1232)
  (p/clear)
  (p/close))
