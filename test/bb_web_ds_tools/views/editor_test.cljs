(ns bb-web-ds-tools.views.editor-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.views.editor :as sut]
            [malli.generator :as mg]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest editor-property-test
  (rf-test/run-test-sync
   (rf/dispatch [::core/initialize-db])

   (let [new-codes (mg/generate [:vector {:min 5 :max 20} string?])]
     (doseq [code new-codes]
       (rf/dispatch [::core/code-changed code])
       (is (= code @(rf/subscribe [::core/code])) "Code should be updated in app-db")))))

(deftest editor-save-test
  (with-redefs [js/alert (fn [_] nil)]
    (rf-test/run-test-sync
     (rf/dispatch [::sut/save-code])
     (is true "Save code executed without error"))))
