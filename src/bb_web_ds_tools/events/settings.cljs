(ns bb-web-ds-tools.events.settings
  "History:
  - 2025-12-14: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [re-frame.core :as rf]))

;; --- Events ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (cond-> db
     (not (get-in db [:settings :column-normalizer]))
     (assoc-in [:settings :column-normalizer]
               {:case :snake_case
                :output :string})

     (not (get-in db [:settings :active-view]))
     (assoc-in [:settings :active-view] :general)

     (not (get-in db [:settings :expanded-views]))
     (assoc-in [:settings :expanded-views] #{:code :datasets}) ;; Default expanded

     (not (get-in db [:settings :webr]))
     (assoc-in [:settings :webr]
               {:container-width 720
                :container-height 800
                :canvas-scale 0.72}))))

(rf/reg-event-db
 ::set-column-normalizer-case
 (fn [db [_ case-val]]
   (assoc-in db [:settings :column-normalizer :case] case-val)))

(rf/reg-event-db
 ::set-column-normalizer-output
 (fn [db [_ output-val]]
   (assoc-in db [:settings :column-normalizer :output] output-val)))

(rf/reg-event-db
 ::set-active-view
 (fn [db [_ view-id]]
   (assoc-in db [:settings :active-view] view-id)))

(rf/reg-event-db
 ::toggle-expanded-view
 (fn [db [_ view-id]]
   (update-in db [:settings :expanded-views]
              #(if (contains? % view-id)
                 (disj % view-id)
                 (conj % view-id)))))

(rf/reg-event-db
 ::set-webr-setting
 (fn [db [_ key val]]
   (assoc-in db [:settings :webr key] val)))

;; --- Subscriptions ---

(rf/reg-sub
 ::column-normalizer
 (fn [db]
   (get-in db [:settings :column-normalizer] {:case :snake_case :output :string})))

(rf/reg-sub
 ::active-view
 (fn [db]
   (get-in db [:settings :active-view] :general)))

(rf/reg-sub
 ::expanded-views
 (fn [db]
   (get-in db [:settings :expanded-views] #{})))

(rf/reg-sub
 ::webr-settings
 (fn [db]
   (get-in db [:settings :webr] {:container-width 720
                                 :container-height 800
                                 :canvas-scale 0.72})))
