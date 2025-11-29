(ns bb-web-ds-tools.views.gemma-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.gemma :as sut]
            [malli.generator :as mg]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

;; Mock effects to avoid actual network/JS interop calls
(rf/reg-fx
 ::sut/load-model-fx
 (fn [_]
   (reset! sut/llm-instance :mock-llm)
   (rf/dispatch [::sut/model-loaded])))

(rf/reg-fx
 ::sut/generate-response-fx
 (fn [text]
   (rf/dispatch [::sut/add-message :model (str "Echo: " text)])
   (rf/dispatch [::sut/set-loading false])))

(deftest gemma-property-test
  (rf-test/run-test-sync
   ;; Setup
   (rf/dispatch [::sut/initialize])
   (reset! sut/llm-instance nil)

   ;; Generate a random sequence of user actions
   (let [actions (mg/generate [:vector {:min 5 :max 20}
                               [:enum
                                [::sut/load-model "model.bin"]
                                [::sut/send-message "hello"]
                                [::sut/send-message "test"]]])]

     (doseq [[event arg] actions]
       (let [was-loaded? @(rf/subscribe [::sut/model-loaded?])
             prev-msgs   @(rf/subscribe [::sut/messages])]

         (rf/dispatch [event arg])

         (let [now-loaded? @(rf/subscribe [::sut/model-loaded?])
               now-msgs    @(rf/subscribe [::sut/messages])]

           (condp = event
             ::sut/load-model
             (is now-loaded? "Model should be loaded after load-model")

             ::sut/send-message
             (if was-loaded?
               (do
                 (is (= (+ 2 (count prev-msgs)) (count now-msgs))
                     "Should add user and model message when loaded")
                 (is (= :user (:role (peek (pop now-msgs)))))
                 (is (= :model (:role (peek now-msgs)))))
               (is (= prev-msgs now-msgs) "Should ignore message if not loaded")))))))))
