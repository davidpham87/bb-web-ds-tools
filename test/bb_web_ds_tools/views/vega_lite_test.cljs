(ns bb-web-ds-tools.views.vega-lite-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.vega-lite.core :as sut]
            [bb-web-ds-tools.views.vega-lite.events :as events]
            [bb-web-ds-tools.views.vega-lite.subs :as subs]
            [bb-web-ds-tools.core :as core]
            [clojure.edn :as edn]
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
     (let [config @(rf/subscribe [::subs/config-input])]
       (is (string? config))
        ;; Verify content matches {:a 1}
       (is (= {:a 1} (edn/read-string config)) "Should be valid EDN matching original JSON")))

   (testing "EDN to JSON conversion"
     (rf/dispatch [::events/set-config-mode :json])
     (is (= :json @(rf/subscribe [::subs/config-mode])))
     (let [config @(rf/subscribe [::subs/config-input])]
       (is (string? config))
       (let [parsed (js->clj (js/JSON.parse config) :keywordize-keys true)]
         (is (= {:a 1} parsed) "Should be valid JSON matching EDN"))))))
