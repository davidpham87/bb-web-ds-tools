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
        (is (some #(re-find #"BEGIN TRANSACTION" (if (string? %) % (.-sql %))) calls) "Should start transaction")

        ;; We check if we have bound parameters instead of string concatenation
        ;; The original vulnerable code would send a huge string.
        ;; The new code should send objects with :bind.

        ;; For now, let's just see what it does (it should fail this check if I haven't fixed it yet)
        (is (some #(and (object? %) (.-bind %)) calls) "Should use bound parameters")))))
