(ns bb-web-ds-tools.utils.worker
  (:require [clojure.core.async :as a]))

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
             (let [data (js->clj (.-data e) :keywordize-keys true)]
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

(defn post-message
  "Sends a message to the worker."
  [{:keys [worker]} message]
  (.postMessage worker (clj->js message)))

(defn terminate
  "Terminates the worker."
  [{:keys [worker out-chan]}]
  (.terminate worker)
  (when out-chan (a/close! out-chan)))
