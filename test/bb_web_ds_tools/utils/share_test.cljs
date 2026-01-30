(ns bb-web-ds-tools.utils.share-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.share :as share]))

(deftest sanitize-state-test
  (testing "Allowed keys are preserved"
    (let [state {:user-input {:some "data"}
                 :bb-web-ds-tools.views.malli/malli {:config "foo"}}]
      (is (= state (share/sanitize-state state)))))

  (testing "Disallowed keys are removed"
    (let [state {:platform {:mac-os? false}
                 :runtime {:some "worker"}
                 :portal {:theme :dark}}
          sanitized (share/sanitize-state state)]
      (is (empty? sanitized))))

  (testing "Mixed content is filtered"
    (let [state {:user-input {:data "ok"}
                 :platform {:hack "attempt"}
                 :bb-web-ds-tools.views.datasets/datasets {:items []}}
          expected {:user-input {:data "ok"}
                    :bb-web-ds-tools.views.datasets/datasets {:items []}}]
      (is (= expected (share/sanitize-state state))))))

(deftest decode-state-test
  (testing "Decoding validates state"
    (let [malicious-state {:user-input {:a 1} :platform {:b 2}}
          encoded (share/encode-state malicious-state)
          decoded (share/decode-state encoded)]
      (is (= {:user-input {:a 1}} decoded)))))
