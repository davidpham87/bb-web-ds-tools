(ns bb-web-ds-tools.views.repl-flow-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.repl :as sut]
            [malli.generator :as mg]))

(deftest repl-flow-test
  (rf-test/run-test-sync
   ;; Ensure at least one instance
   (rf/dispatch [::sut/add-instance])

   (let [actions (mg/generate [:vector {:min 5 :max 20}
                               [:enum :add-instance :eval]])]

     (doseq [action actions]
       (case action
         :add-instance
         (let [prev-count (count @(rf/subscribe [::sut/instances]))]
           (rf/dispatch [::sut/add-instance])
           (is (= (inc prev-count) (count @(rf/subscribe [::sut/instances])))))

         :eval
         (let [instances @(rf/subscribe [::sut/instances])]
           (when (seq instances)
             (let [id (key (first instances))
                   code (rand-nth ["(+ 1 1)" "(str \"a\" \"b\")" "(/ 1 0)" "invalid-symbol"])]
               (rf/dispatch [::sut/eval-code id code])
               (let [output @(rf/subscribe [::sut/output id])]
                 (is (not (empty? output)))
                 (is (contains? #{:result :error} (:type (last output)))))))))))))
