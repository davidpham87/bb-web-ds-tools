(ns bb-web-ds-tools.utils.worker
  (:require [clojure.core.async :as a]
            [cognitect.transit :as t]))

(defn- handle-message [reader on-message out-chan e]
  (let [data (t/read reader (.-data e))]
    (if on-message
      (on-message data)
      (a/put! out-chan data))))

(defn- handle-error [on-message out-chan e]
  (let [err {:type :error :text (str "Worker Error: " (.-message e))}]
    (js/console.error "Worker Error" e)
    (if on-message
      (on-message err)
      (a/put! out-chan err))))

(defn create-worker
  "Creates a web worker from the given URL.
   If on-message is provided, it is called with each message.
   Returns a map with the worker instance and optionally a channel if no callback provided."
  ([url]
   (create-worker url nil))
  ([url on-message]
   (let [worker (js/Worker. url)
         out-chan (when-not on-message (a/chan))
         reader (t/reader :json)]
     (set! (.-onmessage worker) #(handle-message reader on-message out-chan %))
     (set! (.-onerror worker) #(handle-error on-message out-chan %))
     (cond-> {:worker worker}
       out-chan (assoc :out-chan out-chan)))))

(defn set-handler
  "Updates the message handler for an existing worker."
  [{:keys [worker]} on-message]
  (let [reader (t/reader :json)]
    (set! (.-onmessage worker) #(handle-message reader on-message nil %))
    (set! (.-onerror worker) #(handle-error on-message nil %))))

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
