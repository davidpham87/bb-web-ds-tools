(ns bb-web-ds-tools.code-view-test
  (:require [cljs.test :refer-macros [deftest is async use-fixtures]]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.views.code :as code]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.test-setup :as setup]
            [day8.re-frame.test :as rf-test]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(defn mount-component [comp container]
  (rdom/render comp container))

(deftest test-code-view-tab-appearance
  (rf-test/run-test-sync
   (rf/dispatch [:bb-web-ds-tools.core/initialize-db])
   (rf/dispatch [::code/initialize])

   (let [root (.createElement js/document "div")
         top-bar (.createElement js/document "div")
         _ (.appendChild js/document.body root)
         _ (.appendChild root top-bar)]

      ;; Simulate Top Bar mounting and setting ref
     (rf/dispatch [::nav/set-top-bar-ref top-bar])

     (mount-component [code/panel] root)
     (r/flush)

      ;; Check if tabs are present in the top-bar or the root (before fix they are nowhere, after fix in top-bar)
     (let [top-bar-text (.-innerText top-bar)
           root-text (.-innerText root)]

       (println "Top Bar Text:" top-bar-text)
        ;; We expect "Clojure", "Python", "R", "Editor" tabs
        ;; BEFORE FIX: These should be MISSING from top-bar-text
        ;; AFTER FIX: These should be PRESENT in top-bar-text

        ;; Assert failure to confirm bug (optional, but good practice)
        ;; Note: In a 'reproduce' test, we usually assert the expected correct behavior and watch it fail.
       (is (re-find #"Clojure" top-bar-text) "Tab 'Clojure' should be in top bar")
       (is (re-find #"Python" top-bar-text) "Tab 'Python' should be in top bar"))

     (rdom/unmount-component-at-node root)
     (.remove root))))
