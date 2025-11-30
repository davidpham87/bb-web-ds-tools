(ns bb-web-ds-tools.repl-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest test-repl
  (testing "add instance"
    (rf/dispatch-sync [:bb-web-ds-tools.views.repl/add-instance])
    (let [instances @(rf/subscribe [:bb-web-ds-tools.views.repl/instances])]
      (is (pos? (count instances)))))

  (testing "eval code dispatch"
    (rf/dispatch-sync [:bb-web-ds-tools.views.repl/add-instance])
    (let [instances @(rf/subscribe [:bb-web-ds-tools.views.repl/instances])
          id (first (keys instances))]
      ;; Just verify dispatch doesn't throw. Side effects (Portal) are not easily tested here without mocking.
      (rf/dispatch-sync [:bb-web-ds-tools.views.repl/eval-code id "(+ 1 2)"])
      (is true))))
