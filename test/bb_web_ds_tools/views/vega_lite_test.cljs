(ns bb-web-ds-tools.views.vega-lite-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.vega-lite :as sut]
            [bb-web-ds-tools.core :as core]
            [clojure.edn :as edn]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(def sample-json "{\n  \"a\": 1\n}")

(deftest config-conversion-test
  (rf-test/run-test-sync
    (rf/dispatch [::sut/initialize])

    ;; Set initial state explicitly
    (rf/dispatch [::sut/set-config-input sample-json])
    (rf/dispatch [::sut/set-config-mode :json])

    (testing "JSON to EDN conversion"
      (rf/dispatch [::sut/set-config-mode :edn])
      (is (= :edn @(rf/subscribe [::sut/config-mode])))
      (let [config @(rf/subscribe [::sut/config-input])]
        (is (string? config))
        ;; Verify content matches {:a 1}
        (is (= {:a 1} (edn/read-string config)) "Should be valid EDN matching original JSON")))

    (testing "EDN to JSON conversion"
       (rf/dispatch [::sut/set-config-mode :json])
       (is (= :json @(rf/subscribe [::sut/config-mode])))
       (let [config @(rf/subscribe [::sut/config-input])]
         (is (string? config))
         (let [parsed (js->clj (js/JSON.parse config) :keywordize-keys true)]
           (is (= {:a 1} parsed) "Should be valid JSON matching EDN"))))))
