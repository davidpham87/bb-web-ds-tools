(ns bb-web-ds-tools.components.navigation-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [bb-web-ds-tools.components.navigation :as sut]))

(deftest get-wiki-url-test
  (testing "returns correct URL for existing routes"
    (is (= "https://davidpham87.github.io//bb-web-ds-tools/wiki/datasets.md"
           (sut/get-wiki-url :datasets)))
    (is (= "https://davidpham87.github.io//bb-web-ds-tools/wiki/gemma.md"
           (sut/get-wiki-url :gemma))))

  (testing "returns default URL for unknown routes"
    (is (= "https://davidpham87.github.io//bb-web-ds-tools/wiki/index.md"
           (sut/get-wiki-url :unknown-route)))
    (is (= "https://davidpham87.github.io//bb-web-ds-tools/wiki/index.md"
           (sut/get-wiki-url nil)))))
