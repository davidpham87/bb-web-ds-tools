(ns bb-web-ds-tools.impl.io-test
  (:require [clojure.test :refer [deftest is testing]]
            [bb-web-ds-tools.impl.io :as sut]
            [clojure.string :as str]))

(deftest csv-injection-test
  (testing "Formula injection characters are escaped"
    (let [data [{:a "=cmd" :b "+cmd" :c "-cmd" :d "@cmd" :e "safe"}]
          csv (sut/write-string :csv data)]
      (is (str/includes? csv "'=cmd"))
      (is (str/includes? csv "'+cmd"))
      (is (str/includes? csv "'-cmd"))
      (is (str/includes? csv "'@cmd"))
      (is (str/includes? csv "safe"))
      (is (not (str/includes? csv "\n=cmd")))
      (is (not (str/includes? csv "\n+cmd")))
      (is (not (str/includes? csv "\n-cmd")))
      (is (not (str/includes? csv "\n@cmd"))))))
