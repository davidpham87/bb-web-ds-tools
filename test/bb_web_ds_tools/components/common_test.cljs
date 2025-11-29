(ns bb-web-ds-tools.components.common-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.components.common :as c]))

(deftest tabs-component-test
  (testing "tabs component structure"
    (let [tabs-data [{:id :tab1 :label "Tab 1"} {:id :tab2 :label "Tab 2"}]
          component (c/tabs {:tabs tabs-data
                             :active-tab-id :tab1
                             :on-change identity
                             :on-add identity})]
      (is (vector? component))
      (is (= :div (first component)))
      (is (string? (:class (second component))))
      ;; Check if it contains the tabs
      (is (some #(and (vector? %) (= "Tab 1" (second (second %)))) (tree-seq coll? seq component))))))
