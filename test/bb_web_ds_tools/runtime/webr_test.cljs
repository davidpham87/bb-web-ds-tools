(ns bb-web-ds-tools.runtime.webr-test
  (:require [cljs.test :refer-macros [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.runtime.webr :as webr]
            [portal.web :as p]))

(def submitted (atom []))

(defn mock-submit [val]
  (swap! submitted conj val))

(def mock-result
  #js {:destroy (fn [])
       :toJs (fn [] 42)
       :toString (fn [] "Result: 1 + 1")})

(def mock-webr-proto
  #js {:init (fn [] (js/Promise.resolve))
       :read (fn [] (js/Promise.resolve #js {:type "closed" :data ""}))
       :evalR (fn [code _] (js/Promise.resolve mock-result))})

(defn mock-WebR [_]
  mock-webr-proto)

(use-fixtures :each
  {:before (fn []
             (reset! submitted [])
             (reset! webr/webr-instance nil))
   :after (fn [])})

(deftest load-runtime-test
  (testing "WebR initialization"
    (let [orig-webr (when (exists? js/WebR) js/WebR)
          orig-submit p/submit]
      (set! js/WebR mock-WebR)
      (set! p/submit mock-submit)
      (async done
        (webr/load-runtime-main
         (fn []
           (is (some? @webr/webr-instance))
           (set! js/WebR orig-webr)
           (set! p/submit orig-submit)
           (done))
         (fn [err]
           (is (nil? err))
           (set! js/WebR orig-webr)
           (set! p/submit orig-submit)
           (done)))))))

(deftest eval-in-main-test
  (testing "WebR evaluation"
    (reset! webr/webr-instance mock-webr-proto)
    (let [orig-submit p/submit]
      (set! p/submit mock-submit)
      (async done
        (-> (webr/eval-in-main "1 + 1")
            (.then (fn []
                     (is (some #(= (:type %) :code) @submitted) "Code should be submitted")
                     (let [res (last @submitted)]
                       (is (= (:type res) :result))
                       (is (= (:value res) 42)))
                     (set! p/submit orig-submit)
                     (done)))
            (.catch (fn [err]
                      (is false (str "Evaluation failed: " err))
                      (set! p/submit orig-submit)
                      (done))))))))
