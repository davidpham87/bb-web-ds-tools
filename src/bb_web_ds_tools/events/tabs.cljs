(ns bb-web-ds-tools.events.tabs
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 ::set-active-tab
 (fn [db [_ component-id tab-id]]
   (assoc-in db [:tabs component-id :active-tab] tab-id)))

(rf/reg-sub
 ::active-tab
 (fn [db [_ component-id]]
   (get-in db [:tabs component-id :active-tab])))
