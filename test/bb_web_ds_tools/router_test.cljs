(ns bb-web-ds-tools.router-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.utils.share :as share]
            [bb-web-ds-tools.test-setup :as setup]
            [reitit.core :as r]
            [day8.re-frame.test :as rf-test]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest route-matching-test
  (testing "Nested tab routes"
    (let [router core/router
          match-code (r/match-by-path router "/code/pyodide")
          match-malli (r/match-by-path router "/malli/inference")]

      (is (= :code-tab (get-in match-code [:data :name])))
      (is (= "pyodide" (get-in match-code [:path-params :tab])))

      (is (= :malli-tab (get-in match-malli [:data :name])))
      (is (= "inference" (get-in match-malli [:path-params :tab]))))))

(deftest state-sharing-test
  (testing "Encoding and decoding state"
    (let [state {:user-input {:a 1 :b "test" :c [1 2 3]}}
          encoded (share/encode-state state)
          decoded (share/decode-state encoded)]
      (is (string? encoded))
      (is (= state decoded)))))

(deftest navigation-event-test
  (rf-test/run-test-sync
   (rf/dispatch [:bb-web-ds-tools.core/initialize-db])

   (testing "Navigation sets active tab for code view"
     (let [match {:data {:name :code-tab}
                  :parameters {:path {:tab "r-repl"}}}]
       (rf/dispatch [:bb-web-ds-tools.core/navigated match])
       (is (= :r-repl @(rf/subscribe [:bb-web-ds-tools.views.code/active-tab])))))

   (testing "Navigation sets active tab for malli view"
     (let [match {:data {:name :malli-tab}
                  :parameters {:path {:tab "generation"}}}]
       (rf/dispatch [:bb-web-ds-tools.core/navigated match])
       (is (= :generation @(rf/subscribe [:malli/active-tab])))))

   (testing "Navigation restores shared state"
     ;; load-shared-state merges the decoded map into the DB root.
     ;; We will verify this by checking a allowed key (e.g. :user-input) in the DB.
     (let [shared-state {:user-input {:custom-key "restored"}}
           encoded (share/encode-state shared-state)
           match {:data {:name :landing-page}
                  :query-params {:state encoded}}]
       (rf/dispatch [:bb-web-ds-tools.core/navigated match])
       ;; We subscribe to the full DB to check the user-input key
       (is (= "restored" (get-in @(rf/subscribe [:bb-web-ds-tools.router-test/test-db]) [:user-input :custom-key])))))

   (testing "Navigation with both tab and state works simultaneously"
     (let [shared-state {:user-input {:custom-key "combined"}}
           encoded (share/encode-state shared-state)
           match {:data {:name :code-tab}
                  :parameters {:path {:tab "pyodide"}}
                  :query-params {:state encoded}}]
       (rf/dispatch [:bb-web-ds-tools.core/navigated match])
       (is (= :pyodide @(rf/subscribe [:bb-web-ds-tools.views.code/active-tab])))
       (is (= "combined" (get-in @(rf/subscribe [:bb-web-ds-tools.router-test/test-db]) [:user-input :custom-key])))))))

;; Helper subscription for testing
(rf/reg-sub ::test-db (fn [db _] db))
