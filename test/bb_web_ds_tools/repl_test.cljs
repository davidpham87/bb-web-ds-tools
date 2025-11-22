(ns bb-web-ds-tools.repl-test
  (:require [cljs.test :refer [deftest is testing]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.views.repl :as repl]))

(deftest test-repl
  (testing "add instance"
    (rf/dispatch-sync [:bb-web-ds-tools.views.repl/add-instance])
    (let [instances @(rf/subscribe [:bb-web-ds-tools.views.repl/instances])]
       (is (pos? (count instances)))))

  (testing "eval code"
    (rf/dispatch-sync [:bb-web-ds-tools.views.repl/add-instance])
    (let [instances @(rf/subscribe [:bb-web-ds-tools.views.repl/instances])
          id (first (keys instances))]
      (rf/dispatch-sync [:bb-web-ds-tools.views.repl/eval-code id "(+ 1 2)"])
      (let [output @(rf/subscribe [:bb-web-ds-tools.views.repl/output id])]
        (is (not (empty? output)))
        (is (= {:type :result :text "3"} (last output)))))))
