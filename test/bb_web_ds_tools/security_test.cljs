(ns bb-web-ds-tools.security-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [day8.re-frame.test :as rf-test]
            [re-frame.core :as rf]
            [bb-web-ds-tools.core :as core]
            [bb-web-ds-tools.utils.share :as share]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

;; Helper event/sub for test
(rf/reg-event-db
  :test/inject-sensitive-data
  (fn [db [_ val]]
    (assoc db :test/sensitive-data val)))

(rf/reg-sub
  :test/sensitive-data
  (fn [db _]
    (:test/sensitive-data db)))

(deftest load-shared-state-security-test
  (rf-test/run-test-sync
    (testing "State injection vulnerability"
      ;; 1. Initialize DB with a sensitive key
      (rf/dispatch [::core/initialize-db])
      ;; Manually inject a sensitive key into the DB to simulate existing state
      (rf/dispatch [:test/inject-sensitive-data "safe"])

      (let [initial-db @(rf/subscribe [:test/sensitive-data])
            payload {:test/sensitive-data "pwned"
                     :user-input {:editor {:default {:code "hacked"}}}}
            encoded (share/encode-state payload)]

        (is (= "safe" initial-db) "Initial sensitive data should be 'safe'")
        (is (some? encoded) "Encoding should succeed")

        ;; 2. Load shared state which contains malicious override
        (rf/dispatch [::core/load-shared-state encoded])

        ;; 3. Check if sensitive data was overwritten
        (let [new-db @(rf/subscribe [:test/sensitive-data])
              new-code (get-in @(rf/subscribe [::core/user-input]) [:editor :default :code])]

          ;; This assertion should FAIL if the vulnerability exists
          (is (= "safe" new-db) "Sensitive data should NOT be overwritten by shared state")

          ;; Feature requirement: user-input SHOULD be updated
          (is (= "hacked" new-code) "User input SHOULD be updated by shared state"))))))
