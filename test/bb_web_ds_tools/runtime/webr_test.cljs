(ns bb-web-ds-tools.runtime.webr-test
  (:require [cljs.test :refer-macros [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.runtime.webr :as webr]
            [portal.web :as p]
            [bb-web-ds-tools.test-setup :as setup]
            [re-frame.core :as rf]))

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
  setup/suppress-re-frame-warnings
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
    (let [dispatched (atom [])
          mock-dispatch (fn [event] (swap! dispatched conj event))
          orig-dispatch rf/dispatch]
      (set! rf/dispatch mock-dispatch)
      (async done
        (-> (webr/eval-in-main "1 + 1")
            (.then (fn []
                     (is (some #(and (= (first %) :bb-web-ds-tools.portal/submit)
                                     (= (:type (second %)) :code)
                                     (= (nth % 2) :portal.viewer/code))
                               @dispatched) "Code should be submitted")
                     (let [res-event (last @dispatched)
                           res-val (second res-event)
                           res-viewer (nth res-event 2)]
                       (is (= (first res-event) :bb-web-ds-tools.portal/submit))
                       (is (= (:type res-val) :result))
                       (is (= (:value res-val) 42))
                       (is (= res-viewer :portal.viewer/edn)))
                     (set! rf/dispatch orig-dispatch)
                     (done)))
            (.catch (fn [err]
                      (is false (str "Evaluation failed: " err))
                      (set! rf/dispatch orig-dispatch)
                      (done))))))))
