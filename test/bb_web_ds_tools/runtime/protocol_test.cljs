(ns bb-web-ds-tools.runtime.protocol-test
  "Tests for bb-web-ds-tools.runtime.protocol-test."
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.runtime.protocol :as protocol]))

(deftest portal-submit-dispatch-test
  (testing "Dispatches correctly on runtime and message type"
    ;; Define a test implementation for :test-runtime and :test-msg
    (defmethod protocol/portal-submit [:test-runtime :test-msg]
      [_ _]
      :handled-test-msg)

    ;; Define another implementation for :other-runtime and :other-msg
    (defmethod protocol/portal-submit [:other-runtime :other-msg]
      [_ _]
      :handled-other-msg)

    (is (= :handled-test-msg
           (protocol/portal-submit :test-runtime {:type :test-msg :payload "data"})))

    (is (= :handled-other-msg
           (protocol/portal-submit :other-runtime {:type :other-msg :val 123})))))
