(ns bb-web-ds-tools.portal
  (:require [portal.web :as p]
            [re-frame.core :as rf]))

(rf/reg-fx
 :portal/open
 (fn [_]
   (p/open)))

(rf/reg-event-fx
 ::open
 (fn [_ _]
   {:portal/open nil}))

(rf/reg-fx
 :portal/submit
 (fn [value]
   (p/submit value)))

(rf/reg-event-fx
 ::submit
 (fn [_ [_ value]]
   {:portal/submit value}))
