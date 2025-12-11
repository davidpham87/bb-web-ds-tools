(ns bb-web-ds-tools.theme-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.views.settings :as settings]
            [bb-web-ds-tools.utils.themes :as themes]
            [bb-web-ds-tools.events.theme :as theme-events]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest theme-sorting-test
  (testing "Themes are sorted alphabetically in settings"
    (rf/dispatch-sync [::core/initialize-db])
    (let [component (settings/general-settings)
          ;; Find the select element
          select (first (filter #(and (vector? %) (= :select (first %)))
                                (tree-seq vector? seq component)))
          ;; The select element structure is [:select props options...]
          ;; If props are present (map?), options are the rest.
          select-children (if (map? (second select))
                            (drop 2 select)
                            (rest select))
          ;; In general-settings, it uses (for ...) which returns a single sequence.
          ;; So select-children is a list containing that sequence: ((:option ...) (:option ...))
          ;; We take the first element to get the sequence of options.
          options (first select-children)
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
