(ns bb-web-ds-tools.utils.share
  (:require [cognitect.transit :as t]
            ["lz-string" :as lz]))

(defn encode-state
  "Encodes a state map using transit and lz-string compression.

   Args:
     state (map): The state to encode.

   Returns:
     string: Compressed encoded string."
  [state]
  (try
    (let [writer (t/writer :json)
          json-str (t/write writer state)]
      (lz/compressToEncodedURIComponent json-str))
    (catch :default e
      (js/console.error "Error encoding state:" e)
      nil)))

(defn decode-state
  "Decodes a compressed string back into a state map.

   Args:
     s (string): The compressed encoded string.

   Returns:
     map: The decoded state, or nil if invalid."
  [s]
  (try
    (let [json-str (lz/decompressFromEncodedURIComponent s)
          reader (t/reader :json)]
      (when json-str
        (t/read reader json-str)))
    (catch :default e
      (js/console.error "Error decoding state:" e)
      nil)))
