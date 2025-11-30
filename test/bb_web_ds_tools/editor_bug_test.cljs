(ns bb-web-ds-tools.editor-bug-test
  (:require [cljs.test :refer [deftest is async]]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [bb-web-ds-tools.components.editor :as editor]))

(deftest language-update-test
  (async done
    (let [div (.createElement js/document "div")
          _ (.appendChild js/document.body div)
          language (r/atom "clojure")
          editor-ref (atom nil)
          comp (fn []
                 [editor/monaco-editor
                  {:value "(+ 1 1)"
                   :language @language
                   :on-mount (fn [ed] (reset! editor-ref ed))}])]
      (rdom/render [comp] div)

      ;; Wait for mount
      (js/setTimeout
       (fn []
         (if (nil? @editor-ref)
           (do
             (is false "Editor was not mounted (editor-ref is nil)")
             (rdom/unmount-component-at-node div)
             (.removeChild js/document.body div)
             (done))
           (let [^js model (.getModel ^js @editor-ref)]
             (if (nil? model)
               (do
                 (is false "Editor model is nil")
                 (rdom/unmount-component-at-node div)
                 (.removeChild js/document.body div)
                 (done))
               (do
                 (is (= "clojure" (.getLanguageId model)) "Initial language should be clojure")

                 ;; Change language
                 (reset! language "r")
                 (r/flush)

                 ;; Wait for update
                 (js/setTimeout
                  (fn []
                     ;; Verification
                     (let [^js model (.getModel ^js @editor-ref)]
                       (if model
                         (let [new-lang (.getLanguageId model)]
                           (is (= "r" new-lang) (str "Language should update to r, but got " new-lang)))
                         (is false "Model disappeared?")))

                     ;; Cleanup
                     (rdom/unmount-component-at-node div)
                     (.removeChild js/document.body div)
                     (done))
                  500))))))
       500))))
