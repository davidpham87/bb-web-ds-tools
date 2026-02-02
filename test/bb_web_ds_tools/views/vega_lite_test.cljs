(ns bb-web-ds-tools.views.vega-lite-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.vega-lite.core :as sut]
            [bb-web-ds-tools.views.vega-lite.events :as events]
            [bb-web-ds-tools.views.vega-lite.subs :as subs]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(def sample-json "{\n  \"a\": 1\n}")

(deftest config-conversion-test
  (rf-test/run-test-sync
   (rf/dispatch [::events/initialize])

    ;; Set initial state explicitly
   (rf/dispatch [::events/set-config-input sample-json])
   (rf/dispatch [::events/set-config-mode :json])

   (testing "JSON to EDN conversion"
     (rf/dispatch [::events/set-config-mode :edn])
     (is (= :edn @(rf/subscribe [::subs/config-mode])))
     (is (= "{:a 1}\n" @(rf/subscribe [::subs/config-input]))))

   (testing "EDN to JSON conversion"
     (rf/dispatch [::events/set-config-mode :json])
     (is (= :json @(rf/subscribe [::subs/config-mode])))
     (is (= "{\n  \"a\": 1\n}" @(rf/subscribe [::subs/config-input]))))))
