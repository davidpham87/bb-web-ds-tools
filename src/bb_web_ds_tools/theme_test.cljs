(ns bb-web-ds-tools.theme-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.views.settings :as settings]
            [bb-web-ds-tools.utils.themes :as themes]
            [bb-web-ds-tools.events.theme :as theme-events]
            [bb-web-ds-tools.core :as core]))

(defn find-in-hiccup [hiccup pred]
  (tree-seq vector? identity hiccup)
  (first (filter pred (tree-seq vector? identity hiccup))))

(deftest theme-sorting-test
  (testing "Themes are sorted alphabetically in settings"
    (rf/dispatch-sync [::core/initialize-db])
    (let [component (settings/panel)
          ;; Find the select element
          select (first (filter #(and (vector? %) (= :select (first %)))
                                (tree-seq vector? seq component)))
          ;; The options are the children of the select element (last element in vector if props are present)
          options (last select)
          ;; Extract values from options
          option-values (map #(-> % second :value) options)
          expected-values (map name (sort (keys themes/themes)))]

      (is (= expected-values option-values) "Theme options should be sorted alphabetically"))))

(deftest theme-switch-test
  (testing "Switching theme updates db"
    (rf/dispatch-sync [::core/initialize-db])
    (rf/reg-fx :theme/apply (fn [_] nil))
    (rf/dispatch-sync [::theme-events/set-theme :nord])
    (is (= :nord @(rf/subscribe [::theme-events/current-theme])))))
