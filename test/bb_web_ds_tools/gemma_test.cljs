(ns bb-web-ds-tools.gemma-test
  (:require [cljs.test :refer [deftest is testing]]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [bb-web-ds-tools.views.gemma :as gemma]))

(deftest test-gemma-handlers
  (testing "initial state"
    (rf/dispatch-sync [:bb-web-ds-tools.gemma/initialize])
    (let [db @rf-db/app-db]
      (is (= [] (:gemma/messages db)))
      (is (= false (:gemma/loading? db)))
      (is (= nil (:gemma/error db)))))

  (testing "add message"
    (rf/dispatch-sync [:bb-web-ds-tools.gemma/add-message :user "Hello"])
    (let [messages @(rf/subscribe [:bb-web-ds-tools.gemma/messages])]
      (is (= 1 (count messages)))
      (is (= {:role :user :content "Hello"} (first messages)))))

  (testing "set loading"
    (rf/dispatch-sync [:bb-web-ds-tools.gemma/set-loading true])
    (is (= true @(rf/subscribe [:bb-web-ds-tools.gemma/loading?])))))
