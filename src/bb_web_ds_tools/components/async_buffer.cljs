(ns bb-web-ds-tools.components.async-buffer
  "Namespace: bb-web-ds-tools.components.async-buffer

  Key functions:
  - (create [{:keys [input-chan flush-interval-ms on-flush])

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [cljs.core.async :as a]))

(defn create
  "Creates a buffered message processor.
   Arguments:
   - `input-chan`: Channel to read messages from.
   - `flush-interval-ms`: (Optional) Interval in ms to auto-flush after the first message arrives.
   - `on-flush`: Function called with a vector of buffered messages.

   Returns:
   - A function that, when called, triggers a manual flush.
   "
  [{:keys [input-chan flush-interval-ms on-flush]}]
  (let [flush-ch (a/chan)]
    (a/go-loop [buffer []
                timer-ch nil]
      (let [ports (cond-> [input-chan flush-ch]
                    timer-ch (conj timer-ch))
            [v port] (a/alts! ports)]

        (condp = port
          input-chan
          (if (nil? v)
            ;; Channel closed, flush remaining and exit
            (when (seq buffer)
              (on-flush buffer))

            ;; New message
            (let [new-buffer (conj buffer v)
                  new-timer-ch (if (and flush-interval-ms (nil? timer-ch))
                                 (a/timeout flush-interval-ms)
                                 timer-ch)]
              (recur new-buffer new-timer-ch)))

          flush-ch
          (do
            (when (seq buffer)
              (on-flush buffer))
            ;; Manual flush clears buffer and effectively cancels pending timer (by ignoring it)
            (recur [] nil))

          timer-ch
          (do
            (when (seq buffer)
              (on-flush buffer))
            ;; Timer fired, clear buffer and timer
            (recur [] nil)))))
    (fn [] (a/put! flush-ch :flush))))
