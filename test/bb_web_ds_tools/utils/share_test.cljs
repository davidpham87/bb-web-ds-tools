(ns bb-web-ds-tools.utils.share-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.share :as share]))

(deftest sanitize-state-test
  (testing "Sanitization of state"
    (let [input-state {:user-input {:some "data"}
                       :bb-web-ds-tools.views.malli/malli {:state "safe"}
                       :platform {:mac-os? false} ;; Disallowed
                       :runtime {:workers "bad"}} ;; Disallowed
          encoded (share/encode-state input-state)
          decoded (share/decode-state encoded)]
      (is (= {:user-input {:some "data"}
              :bb-web-ds-tools.views.malli/malli {:state "safe"}}
             decoded)
          "Disallowed keys should be removed"))))
