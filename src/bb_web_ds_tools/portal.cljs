(ns bb-web-ds-tools.portal
  (:require
   [portal.web :as p]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defn attach-meta [value meta-data]
  (if (and meta-data (satisfies? IWithMeta value))
    (with-meta value meta-data)
    value))

(rf/reg-fx
 :portal/open
 (fn [iframe-parent-id]
   (tap> iframe-parent-id)
   (if iframe-parent-id
     (let [iframe-parent (.getElementById js/document iframe-parent-id)]
       (p/open {:launcher :iframe
                :iframe-parent iframe-parent
                :theme :portal.colors/zenburn}))
     (p/open {:theme :portal.colors/zenburn}))))

(rf/reg-event-fx
 ::open
 (fn [_ [_ {:keys [node-id]}]]
   {:portal/open node-id}))

(rf/reg-fx
 :portal/submit
 (fn [value]
   (p/submit value)))

(rf/reg-event-fx
 ::submit
 (fn [_ [_ value viewer]]
   {:portal/submit (if viewer
                     (attach-meta value {:portal.viewer/default viewer})
                     value)}))

(defn portal-frame []
  [:div {:class "w-full"
         :style {:height "95vh" :margin-left 20}
         :ref (fn [el]
                (when el
                  (p/open {:launcher :iframe
                           :iframe-parent el
                           :theme :portal.colors/zenburn})))}])

(defn portal-panel [value & [viewer]]
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
