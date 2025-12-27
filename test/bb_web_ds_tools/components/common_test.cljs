(ns bb-web-ds-tools.components.common-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.tabs :as tabs]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest tabs-component-test
  (testing "tabs component structure"
    (let [tabs-data [{:id :tab1 :label "Tab 1"} {:id :tab2 :label "Tab 2"}]
          component (tabs/tabs {:tabs tabs-data
                                :active-tab-id :tab1
                                :on-change identity
                                :on-add identity})]
      ;; Form-2 component returns a function if called directly, but we want to check hiccup.
      ;; The new component is Form-2-ish (returns a function).
      ;; If we call it as (tabs/tabs ...), it returns a function.
      ;; We need to call that function to get the hiccup?
      ;; No, Reagent handles this.
      ;; But for testing:
      ;; (tabs/tabs props) returns the render function.
      ;; ((tabs/tabs props) props) returns the hiccup.

      (let [render-fn (if (fn? component) component (constantly component))
            hiccup (render-fn {:tabs tabs-data
                               :active-tab-id :tab1
                               :on-change identity
                               :on-add identity})]
        (is (vector? hiccup))
        (is (= :div (first hiccup)))
        (is (string? (:class (second hiccup))))
         ;; Check if it contains the tabs
        (is (some #(= "Tab 1" %) (tree-seq coll? seq hiccup)))))))

(deftest collapsible-card-test
  (testing "collapsible-card structure"
    (let [props {:title "Test Card" :default-expanded? true}
          child [:div "Content"]
          ;; Form-2 component
          component (c/collapsible-card props child)
          render-fn (if (fn? component) component (constantly component))
          hiccup (render-fn props child)]
      (is (vector? hiccup))
      (is (= :div (first hiccup)))
      ;; Check title presence
      (is (some #(= "Test Card" %) (tree-seq coll? seq hiccup)))
      ;; Check content presence (since expanded)
      (is (some #(= "Content" %) (tree-seq coll? seq hiccup))))))
