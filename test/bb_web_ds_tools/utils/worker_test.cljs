(ns bb-web-ds-tools.utils.worker-test
  (:require [cljs.test :refer [deftest is testing async use-fixtures]]
            [cljs.core.async :as a]
            [bb-web-ds-tools.utils.worker :as sut]))

;; Mock Worker
(def last-worker-mock (atom nil))
(def original-worker js/Worker)

(defn mock-worker [url]
  (let [listeners (atom {})
        mock (reify
               Object
               (postMessage [this msg]
                 (when-let [handler (:message @listeners)]
                   ;; Echo back with a slight transformation to verify round trip
                   (js/setTimeout #(handler #js {:data msg}) 0)))
               (terminate [this]
                 (reset! listeners {})))]
    (reset! last-worker-mock {:mock mock :listeners listeners})
    (js/Object.defineProperties mock
      #js {:onmessage #js {:set (fn [f] (swap! listeners assoc :message f))}
           :onerror   #js {:set (fn [f] (swap! listeners assoc :error f))}})
    mock))

(use-fixtures :each
  {:before #(set! js/Worker mock-worker)
   :after #(set! js/Worker original-worker)})

(deftest create-worker-channel-test
  (testing "Creates worker and returns channel"
    (async done
      (let [{:keys [out-chan] :as w} (sut/create-worker "test.js")]
        (is (some? out-chan))
        (sut/post-message w {:type :ping})
        (a/go
          (let [msg (a/<! out-chan)]
            (is (= :ping (:type msg)))
            (sut/terminate w)
            (done)))))))

(deftest create-worker-callback-test
  (testing "Creates worker with callback"
    (async done
      (let [received (atom nil)
            on-msg (fn [msg]
                     (reset! received msg)
                     (is (= :pong (:type msg)))
                     (done))
            w (sut/create-worker "test.js" on-msg)]
        (is (nil? (:out-chan w)))
        (sut/post-message w {:type :pong})))))
