(ns bb-web-ds-tools.runtime.webr-test
  (:require [cljs.test :refer-macros [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.runtime.webr :as webr]
            [portal.web :as p]))

(def last-submit (atom nil))

(defn mock-submit [val]
  (reset! last-submit val))

(def mock-result
  #js {:destroy (fn [])
       :toString (fn [] "Result: 1 + 1")})

(def mock-webr-proto
  #js {:init (fn [] (js/Promise.resolve))
       :read (fn [] (js/Promise.resolve #js {:type "closed" :data ""}))
       :evalR (fn [code _] (js/Promise.resolve mock-result))})

(defn mock-WebR [_]
  mock-webr-proto)

(use-fixtures :each
  {:before (fn []
             (reset! last-submit nil)
             (reset! webr/webr-instance nil))
   :after (fn [])})

(deftest load-runtime-test
  (testing "WebR initialization"
    (let [orig-webr (when (exists? js/WebR) js/WebR)
          orig-submit webr/submit-fn]
      (set! js/WebR mock-WebR)
      (set! webr/submit-fn mock-submit)
      (async done
        (webr/load-runtime-main
         (fn []
           (is (some? @webr/webr-instance))
           (set! js/WebR orig-webr)
           (set! webr/submit-fn orig-submit)
           (done))
         (fn [err]
           (is (nil? err))
           (set! js/WebR orig-webr)
           (set! webr/submit-fn orig-submit)
           (done)))))))

(deftest eval-in-main-test
  (testing "WebR evaluation"
    (reset! webr/webr-instance mock-webr-proto)
    (let [orig-submit webr/submit-fn]
      (set! webr/submit-fn mock-submit)
      (async done
        (-> (webr/eval-in-main "1 + 1")
            (.then (fn []
                     (is (= (:type @last-submit) :result))
                     (is (= (:value @last-submit) "Result: 1 + 1"))
                     (set! webr/submit-fn orig-submit)
                     (done))))))))
