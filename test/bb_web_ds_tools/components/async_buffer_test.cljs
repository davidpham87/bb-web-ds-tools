(ns bb-web-ds-tools.components.async-buffer-test
  "Tests for bb-web-ds-tools.components.async-buffer-test."
  (:require [cljs.test :refer [deftest is testing async use-fixtures]]
            [cljs.core.async :as a]
            [bb-web-ds-tools.components.async-buffer :as buffer]))

(deftest manual-flush-test
  (async done
         (a/go
           (let [input-ch (a/chan)
                 results (atom [])
                 on-flush (fn [items] (swap! results conj items))
                 flush! (buffer/create {:input-chan input-ch
                                        :on-flush on-flush})]

             (a/>! input-ch 1)
             (a/>! input-ch 2)
             (a/<! (a/timeout 20)) ;; give loop time to process

             (is (empty? @results) "Buffer should not flush automatically without timer")

             (flush!)
             (a/<! (a/timeout 20)) ;; give loop time to process flush

             (is (= [[1 2]] @results) "Manual flush should flush all items")

             (a/>! input-ch 3)
             (flush!)
             (a/<! (a/timeout 20))
             (is (= [[1 2] [3]] @results) "Subsequent flush should work")

             (done)))))

(deftest timer-flush-test
  (async done
         (a/go
           (let [input-ch (a/chan)
                 results (atom [])
                 on-flush (fn [items] (swap! results conj items))
                 _ (buffer/create {:input-chan input-ch
                                   :flush-interval-ms 100
                                   :on-flush on-flush})]

             (a/>! input-ch 1)
             (a/>! input-ch 2)

             (a/<! (a/timeout 50))
             (is (empty? @results) "Should not flush before timeout")

             (a/<! (a/timeout 100)) ;; Total 150ms > 100ms
             (is (= [[1 2]] @results) "Should flush after timeout")

        ;; Test batching reset
             (a/>! input-ch 3)
             (a/<! (a/timeout 50))
             (a/>! input-ch 4)
             (a/<! (a/timeout 20)) ;; Total 70ms since first message 3
             (is (= [[1 2]] @results) "Should not flush 3,4 yet")

             (a/<! (a/timeout 80)) ;; Total 150ms since first message 3
             (is (= [[1 2] [3 4]] @results) "Should flush 3,4 after timeout from first message")

             (done)))))

(deftest close-input-test
  (async done
         (a/go
           (let [input-ch (a/chan)
                 results (atom [])
                 on-flush (fn [items] (swap! results conj items))
                 _ (buffer/create {:input-chan input-ch
                                   :on-flush on-flush})]

             (a/>! input-ch :a)
             (a/>! input-ch :b)
             (a/close! input-ch)

             (a/<! (a/timeout 20))
             (is (= [[:a :b]] @results) "Closing input should flush remaining")
             (done)))))
