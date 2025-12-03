(ns bb-web-ds-tools.runtime.protocol)

(defmulti handle-message
  "Dispatches a message based on the runtime identifier and the message type.
   Arguments:
     runtime - The runtime identifier (e.g., :sci, :pyodide, :webr).
     msg     - The message map, expected to have a :type key."
  (fn [runtime msg]
    [runtime (:type msg)]))
