(ns bb-web-ds-tools.gemma-test
  (:require [cljs.test :refer [deftest is testing]]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [bb-web-ds-tools.views.gemma :as gemma]))

(deftest test-gemma-handlers
  (testing "initial state"
    (rf/dispatch-sync [::gemma/initialize])
    (is (= [] @(rf/subscribe [::gemma/messages])))
    (is (= false @(rf/subscribe [::gemma/loading?])))
    (is (= nil @(rf/subscribe [::gemma/error]))))

  (testing "add message"
    (rf/dispatch-sync [::gemma/add-message :user "Hello"])
    (let [messages @(rf/subscribe [::gemma/messages])]
      (is (= 1 (count messages)))
      (is (= {:role :user :content "Hello"} (first messages)))))

  (testing "set loading"
    (rf/dispatch-sync [::gemma/set-loading true])
    (is (= true @(rf/subscribe [::gemma/loading?])))))
