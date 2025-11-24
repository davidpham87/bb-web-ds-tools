(ns bb-web-ds-tools.card-usage-test
  (:require [cljs.test :refer [deftest is testing]]
            [re-frame.core :as rf]
            [clojure.walk :as walk]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.views.malli :as malli]
            [bb-web-ds-tools.views.honeysql :as honeysql]))

(defn find-card-usages [hiccup]
  (let [usages (atom [])]
    (walk/postwalk
     (fn [x]
       (when (and (vector? x) (= (first x) c/card))
         (swap! usages conj x))
       x)
     hiccup)
    @usages))

(deftest malli-card-usage-test
  (rf/dispatch-sync [:malli/initialize])
  (let [inference (malli/inference-view)
        generation (malli/generation-view)
        cards (concat (find-card-usages inference) (find-card-usages generation))]
    (is (seq cards) "Should find some card usages in malli")
    (doseq [card cards]
      ;; The second element (index 1) should be the props map.
      ;; If it is a vector, it means the props were omitted and the first child is being treated as props (bug).
      (is (map? (nth card 1)) (str "Card props should be a map, found: " (pr-str (nth card 1)))))))

(deftest honeysql-card-usage-test
  (rf/dispatch-sync [:honeysql/initialize])
  (let [hiccup (honeysql/panel)
        cards (find-card-usages hiccup)]
    (is (seq cards) "Should find some card usages in honeysql")
    (doseq [card cards]
      (is (map? (nth card 1)) (str "Card props should be a map, found: " (pr-str (nth card 1)))))))
