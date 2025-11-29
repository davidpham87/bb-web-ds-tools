(ns bb-web-ds-tools.views.malli-gen-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.malli :as sut]
            [malli.generator :as mg]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :once (fn [f] (setup/suppress-re-frame-warnings) (f)))

(deftest malli-property-test
  (rf-test/run-test-sync
   (rf/dispatch [:malli/initialize])

   (let [actions (mg/generate [:vector {:min 5 :max 20}
                               [:enum
                                [:update-schema "[:map [:a int?]]"]
                                [:update-schema "[:invalid"]
                                [:generate]
                                [:update-input "{:a 1}"]
                                [:update-input "{:invalid"]
                                [:infer]]])]

     (doseq [action actions]
       (let [[cmd arg] (if (vector? action) action [action nil])]
         (case cmd
           :update-schema
           (do
             (rf/dispatch [:malli/update-schema-text arg])
             (is (= arg @(rf/subscribe [:malli/schema-text]))))

           :generate
           (do
             (rf/dispatch [:malli/parse-schema-and-generate])
             (let [res @(rf/subscribe [:malli/generated-data])]
               (is (string? res) "Should produce string output (data or error)")))

           :update-input
           (do
             (rf/dispatch [:malli/update-inference-input arg])
             (is (= arg @(rf/subscribe [:malli/inference-input]))))

           :infer
           (do
             (rf/dispatch [:malli/infer-schema {"inference-input" @(rf/subscribe [:malli/inference-input])}])
             (let [res @(rf/subscribe [:malli/inferred-schema])]
               (is (string? res) "Should produce string output")))))))))
