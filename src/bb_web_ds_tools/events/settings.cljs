(ns bb-web-ds-tools.events.settings
  (:require [re-frame.core :as rf]))

;; --- Events ---

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (if (get-in db [:settings :column-normalizer])
     db
     (assoc-in db [:settings :column-normalizer]
               {:case :snake_case
                :output :string}))))

(rf/reg-event-db
 ::set-column-normalizer-case
 (fn [db [_ case-val]]
   (assoc-in db [:settings :column-normalizer :case] case-val)))

(rf/reg-event-db
 ::set-column-normalizer-output
 (fn [db [_ output-val]]
   (assoc-in db [:settings :column-normalizer :output] output-val)))

;; --- Subscriptions ---

(rf/reg-sub
 ::column-normalizer
 (fn [db]
   (get-in db [:settings :column-normalizer] {:case :snake_case :output :string})))
