(ns bb-web-ds-tools.portal
  (:require
   [portal.web :as p]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(def portal-frame-id "portal-frame")

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

(rf/reg-event-fx
 ::open-portal-frame
 (fn [_ _]
   {:portal/open portal-frame-id}))

(rf/reg-fx
 :portal/submit
 (fn [value]
   (p/submit value)))

(rf/reg-event-fx
 ::submit
 (fn [_ [_ value]]
   {:portal/submit value}))

(rf/reg-event-fx
 ::update-portal-frame
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:portal ::portal-frame-key] (str (random-uuid)))}))

(rf/reg-sub
 ::portal-frame-key
 (fn [db _] (get-in db [:portal ::portal-frame-key])))

(defn portal-frame []
  (r/create-class
   {:component-did-mount
    (fn [_] (rf/dispatch [::open-portal-frame]))
    :reagent-render
    (fn []
      [:div {:id portal-frame-id :class "w-full"
             :style {:height "95vh" :margin-left 20}}])}))

(comment
  (p/submit 1232)
  (p/clear)
  (p/close)

  #_(let [portal-frame-key (rf/subscribe [::portal-frame-key])]
      (r/create-class
       {:component-did-update
        (fn [_] (rf/dispatch [::open-portal-frame]))
        :reagent-render
        (fn []
          [:div {:id portal-frame-id :class "w-full"
                 :style {:height "95vh" :margin-left 20}}])}))
  )
