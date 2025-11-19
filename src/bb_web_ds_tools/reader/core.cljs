(ns bb-web-ds-tools.reader.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [reagent.dom :as rdom]
            [cljs.reader :as reader]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {}))

(rf/reg-event-db
 :reader/set-input
 (fn [db [_ input]]
   (assoc db :reader/input input)))

(rf/reg-sub
 :reader/input
 (fn [db]
   (:reader/input db)))

(rf/reg-event-db
 :reader/parse-input
 (fn [db]
   (let [input @(rf/subscribe [:reader/input])]
     (try
       (let [parsed (reader/read-string input)]
         (assoc db :reader/output parsed))
       (catch js/Error e
         (assoc db :reader/output {:error (.-message e)}))))))

(rf/reg-sub
  :reader/output
  (fn [db]
    (:reader/output db)))

(defn reader-input []
  (let [input @(rf/subscribe [:reader/input])]
    [:div
     [:h2 "EDN Input"]
     [:textarea {:rows 20
                 :cols 80
                 :value input
                 :on-change #(rf/dispatch [:reader/set-input (-> % .-target .-value)])}]
     [:button {:on-click #(rf/dispatch [:reader/parse-input])} "Parse"]]))

(defn reader-output []
  (let [output @(rf/subscribe [:reader/output])]
    [:div
     [:h2 "Parsed Output"]
     [:pre (pr-str output)]]))

(defn reader-app []
  [:div
   [:h1 "Reader Tool"]
   [reader-input]
   [reader-output]])

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [reader-app] (.getElementById js/document "app")))
