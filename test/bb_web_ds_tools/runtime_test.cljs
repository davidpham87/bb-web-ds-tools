(ns bb-web-ds-tools.runtime-test
  (:require [cljs.test :refer [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.runtime.sci :as sci]
            [portal.web :as p]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest test-sci-main-eval
  (testing "eval-in-main executes code"
    (let [results (atom [])]
      (with-redefs [p/submit (fn [res] (swap! results conj res))]
        (sci/eval-in-main "(+ 1 2)")
        (is (= [{:value "3"}] @results))))))
