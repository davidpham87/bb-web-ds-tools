(ns bb-web-ds-tools.workspaces-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [datascript.core :as d]
            [bb-web-ds-tools.workspaces.core :as ws]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each
  setup/suppress-re-frame-warnings
  {:after (fn [] (d/unlisten! ws/conn :listener))})

(deftest workspace-logic-test
  (rf-test/run-test-sync
   (rf/dispatch [::ws/init])

   (testing "Create Workspace"
     (rf/dispatch [::ws/create-workspace "Test Workspace"])
     (let [active-id @(rf/subscribe [::ws/active-workspace-id])
           workspace @(rf/subscribe [::ws/active-workspace])]
       (is (some? active-id) "Active workspace ID should be set")
       (is (= {:workspace/name "Test Workspace"}
              (dissoc workspace :db/id :workspace/id :workspace/created-at :workspace/updated-at)))))

   (testing "Save Input"
     (rf/dispatch [::ws/save-input {:type :dataset
                                    :name "test.csv"
                                    :content "a,b\n1,2"
                                    :metadata {:format :csv}}])
      ;; We need to wait for subscription or ensure db updated.
      ;; DataScript listener updates atom, which triggers re-frame.
      ;; run-test-sync might not catch the DataScript listener side-effect immediately if it's async?
      ;; But DataScript listeners are sync.
      ;; Reagent atom update might need a flush?
      ;; Let's rely on the fact that `ws/current-inputs` derefs `ds-version`.

     (let [inputs @(rf/subscribe [::ws/current-inputs])]
       (is (= [{:input/content "a,b\n1,2"
                :input/metadata {:format :csv}
                :input/name "test.csv"
                :input/type :dataset}]
              (map #(dissoc % :db/id :input/id :input/updated-at :input/workspace) inputs)))))))
