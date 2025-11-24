(ns bb-web-ds-tools.views.honeysql-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.honeysql :as sut]
            [malli.generator :as mg]
            [clojure.string :as str]))

(deftest honeysql-property-test
  (rf-test/run-test-sync
   (rf/dispatch [:honeysql/initialize])

   (let [actions (mg/generate [:vector {:min 5 :max 20}
                               [:enum
                                [:update-input "{:select [:a] :from [:b]}"]
                                [:update-input "{:invalid"]
                                [:convert]]])]

     (doseq [action actions]
       (let [[cmd arg] (if (vector? action) action [action nil])]
         (case cmd
           :update-input
           (do
             (rf/dispatch [:honeysql/update-input arg])
             (is (= arg @(rf/subscribe [:honeysql/input]))))

           :convert
           (do
             (rf/dispatch [:honeysql/convert-to-sql])
             (let [output @(rf/subscribe [:honeysql/output])]
               (is (string? output))
               ;; Check if output is SQL-like or error
               (is (or (str/includes? output "SELECT")
                       (str/includes? output "Error")
                       (str/includes? output "Invalid")))))))))))
