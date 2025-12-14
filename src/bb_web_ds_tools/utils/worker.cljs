(ns bb-web-ds-tools.utils.worker
  "Utility functions for worker.

  Key functionality: create-worker, set-handler, post-message, terminate"
  (:require [clojure.core.async :as a]
            [cognitect.transit :as t]))

(defn create-worker
  "Creates a web worker from the given URL.
   If on-message is provided, it is called with each message.
   Returns a map with the worker instance and optionally a channel if no callback provided."
  ([url]
   (create-worker url nil))
  ([url on-message]
   (let [worker (js/Worker. url)
         out-chan (when-not on-message (a/chan))]
     (set! (.-onmessage worker)
           (fn [e]
             (let [r (t/reader :json)
                   data (t/read r (.-data e))]
               (if on-message
                 (on-message data)
                 (a/put! out-chan data)))))
     (set! (.-onerror worker)
           (fn [e]
             (let [err {:type :error :text (str "Worker Error: " (.-message e))}]
               (js/console.error "Worker Error" e)
               (if on-message
                 (on-message err)
                 (a/put! out-chan err)))))
     (cond-> {:worker worker}
       out-chan (assoc :out-chan out-chan)))))

(defn set-handler
  "Updates the message handler for an existing worker."
  [{:keys [worker]} on-message]
  (set! (.-onmessage worker)
        (fn [e]
          (let [r (t/reader :json)
                data (t/read r (.-data e))]
            (on-message data))))
  (set! (.-onerror worker)
        (fn [e]
          (let [err {:type :error :text (str "Worker Error: " (.-message e))}]
            (js/console.error "Worker Error" e)
            (on-message err)))))

(defn post-message
  "Sends a message to the worker."
  [{:keys [worker]} message]
  (let [w (t/writer :json)
        payload (t/write w message)]
    (.postMessage worker payload)))

(defn terminate
  "Terminates the worker."
  [{:keys [worker out-chan]}]
  (.terminate worker)
  (when out-chan (a/close! out-chan)))
