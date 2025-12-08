(ns bb-web-ds-tools.workspaces.persistence
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.workspaces.persistence-fx]))

;; --- Events ---

(rf/reg-event-fx
 ::init-persistence
 (fn [_ _]
   {:persistence/init nil}))

(rf/reg-event-fx
 ::save-datasets
 (fn [{:keys [db]} _]
   {:persistence/save-datasets (get-in db [:user-input :datasets :items])}))

(rf/reg-event-fx
 ::load-datasets
 (fn [_ _]
   {:persistence/load-datasets nil}))

(rf/reg-event-db
 ::datasets-loaded
 (fn [db [_ datasets]]
   (assoc-in db [:user-input :datasets :items] datasets)))
