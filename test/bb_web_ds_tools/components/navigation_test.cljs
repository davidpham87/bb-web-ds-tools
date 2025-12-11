(ns bb-web-ds-tools.components.navigation-test
  (:require [cljs.test :refer-macros [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.components.navigation :as nav]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest top-bar-portal-test
  (async done
    (let [div (.createElement js/document "div")]
      ;; Manually suppress warnings for the async part
      ((:before setup/suppress-re-frame-warnings))

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

           ;; Manually restore warnings
           ((:after setup/suppress-re-frame-warnings))
           (done)))
       100))))
