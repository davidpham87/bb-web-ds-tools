(ns bb-web-ds-tools.runtime.protocol
  "History:
  - 2025-12-14: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438")

(defmulti portal-submit
  "Dispatches a message based on the runtime identifier and the message type.
   Arguments:
     runtime - The runtime identifier (e.g., :sci, :pyodide, :webr).
     msg     - The message map, expected to have a :type key."
  (fn [runtime msg]
    [runtime (:type msg)]))
