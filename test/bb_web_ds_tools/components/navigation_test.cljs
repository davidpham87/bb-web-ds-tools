(ns bb-web-ds-tools.components.navigation-test
  (:require [cljs.test :refer-macros [deftest is testing async]]
            [bb-web-ds-tools.components.navigation :as nav]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

(deftest top-bar-portal-test
  (async done
    (let [div (.createElement js/document "div")]
      ;; Clean up potentially previous state
      (rf/dispatch-sync [::nav/set-top-bar-ref nil])

      (rdom/render [:div
                    [nav/top-bar {:open-tabs [] :active-tab-id nil}]
                    [nav/portal-to-top-bar [:div {:id "portal-content"} "Hello"]]]
                   div)

      ;; Give it a tick to mount and dispatch
      (js/setTimeout
       (fn []
         (let [ref @(rf/subscribe [::nav/top-bar-ref])]
           (is (some? ref) "Top bar ref should be set")
           (when ref
             (is (some? (.querySelector ref "#portal-content")) "Portal content should be rendered in top bar"))

           (rdom/unmount-component-at-node div)
           (done)))
       100))))
