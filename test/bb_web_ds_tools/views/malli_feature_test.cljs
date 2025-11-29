(ns bb-web-ds-tools.views.malli-feature-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.malli :as malli]
            [cljs.reader :as reader]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :once (fn [f] (setup/suppress-re-frame-warnings) (f)))

(deftest malli-generation-features-test
  (rf-test/run-test-sync
   (rf/dispatch [:malli/initialize])

   (testing "Generate data with default settings (1 sample, EDN)"
     (rf/dispatch [:malli/update-schema-text "[:map [:a int?]]"])
     ;; Simulate UI click: no arguments passed.
     (rf/dispatch [:malli/parse-schema-and-generate])
     (let [res @(rf/subscribe [:malli/generated-data])]
       (is (string? res))
       (is (not= "Invalid schema." res))
       (let [data (reader/read-string res)]
         (is (map? data))
         (is (contains? data :a)))))

   (testing "Generate multiple samples"
     (rf/dispatch [:malli/set-generation-samples 2])
     (rf/dispatch [:malli/parse-schema-and-generate])
     (let [res @(rf/subscribe [:malli/generated-data])
           data (reader/read-string res)]
       (is (sequential? data) "Should be a sequence/vector of samples")
       (is (= 2 (count data)))))

   (testing "Generate JSON output"
     (rf/dispatch [:malli/set-generation-samples 1])
     (rf/dispatch [:malli/set-generation-format :json])
     (rf/dispatch [:malli/parse-schema-and-generate])
     (let [res @(rf/subscribe [:malli/generated-data])
           data (js->clj (js/JSON.parse res) :keywordize-keys true)]
       (is (map? data))
       (is (contains? data :a))))))
