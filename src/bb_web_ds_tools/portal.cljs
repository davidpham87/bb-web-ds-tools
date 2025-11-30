(ns bb-web-ds-tools.portal
  (:require
   [portal.web :as p]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(rf/reg-fx
 :portal/open
 (fn [iframe-parent-id]
   (tap> iframe-parent-id)
   (if iframe-parent-id
     (let [iframe-parent (.getElementById js/document iframe-parent-id)]
       (p/open {:launcher :iframe
                :iframe-parent iframe-parent}))
     (p/open))))

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
 (fn [_ [_ value]]
   (println value)
   {:portal/submit value}))

(defn portal-frame []
  (r/create-class
   {:component-did-mount
    (fn [] (rf/dispatch [:bb-web-ds-tools.portal/open {:node-id "portal-frame"}]))
    :reagent-render
    (fn []
      [:div {:id "portal-frame" :class "w-full"
             :style {:height "95vh" :margin-left 20}}])}))

(comment
  (p/submit 1232)
  (p/clear)
  (p/close)
  )
