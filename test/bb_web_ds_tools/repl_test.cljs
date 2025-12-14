(ns bb-web-ds-tools.repl-test
  "Tests for bb-web-ds-tools.repl-test."
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest test-repl
  (testing "eval code dispatch"
    (let [id "test-id"]
      (rf/dispatch-sync [:bb-web-ds-tools.views.repl/eval-code id "(+ 1 2)"])
      (is true))))
