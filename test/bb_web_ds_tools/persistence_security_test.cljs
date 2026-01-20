(ns bb-web-ds-tools.persistence-security-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.workspaces.persistence-fx :as sut]))

(deftest persist-datasets-security-test
  (testing "persist-datasets! uses parameterized queries"
    (let [mock-db-log (atom [])
          mock-db #js {:exec (fn [arg]
                               (swap! mock-db-log conj arg))}
          datasets {"ds1" {:name "My ' Dataset" :data [1 2 3]}}]

      ;; Call the function
      (sut/persist-datasets! mock-db datasets)

      ;; Check log
      (let [calls @mock-db-log]
        ;; We expect transaction management
        ;; Access properties safely
        (is (some (fn [call]
                    (let [sql (if (string? call) call (.-sql ^js call))]
                      (re-find #"BEGIN TRANSACTION" sql)))
                  calls)
            "Should start transaction")

        ;; We check if we have bound parameters instead of string concatenation
        (is (some (fn [call]
                    (and (object? call) (.-bind ^js call)))
                  calls)
            "Should use bound parameters")))))
