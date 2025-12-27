(ns bb-web-ds-tools.views.repl-selection-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [bb-web-ds-tools.components.editor :as sut]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest get-code-to-eval-test
  (testing "returns full buffer when no selection"
    (let [mock-editor #js {:getSelection (fn [] #js {:isEmpty (fn [] true)})
                           :getModel (fn [] nil)
                           :getValue (fn [] "full code")}]
      (is (= "full code" (sut/get-code-to-eval mock-editor)))))

  (testing "returns selected text when selection exists"
    (let [mock-editor #js {:getSelection (fn [] #js {:isEmpty (fn [] false)})
                           :getModel (fn [] #js {:getValueInRange (fn [sel] "selected code")})
                           :getValue (fn [] "full code")}]
      (is (= "selected code" (sut/get-code-to-eval mock-editor)))))

  (testing "returns full buffer when selection is null"
    (let [mock-editor #js {:getSelection (fn [] nil)
                           :getModel (fn [] nil)
                           :getValue (fn [] "full code")}]
      (is (= "full code" (sut/get-code-to-eval mock-editor))))))
