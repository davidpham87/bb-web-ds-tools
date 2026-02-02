(ns bb-web-ds-tools.utils.share
  (:require [cognitect.transit :as t]
            ["lz-string" :as lz]))

(def allowed-keys
  "Set of allowed top-level keys for shared state to prevent Mass Assignment."
  #{:user-input
    :bb-web-ds-tools.views.malli/malli
    :bb-web-ds-tools.views.honeysql/honeysql
    :bb-web-ds-tools.views.datasets/datasets
    :bb-web-ds-tools.views.vega-lite/state
    :bb-web-ds-tools.views.code/active-tab
    :bb-web-ds-tools.views.code/mobile-view-mode})

(defn sanitize-state
  "Filters the state map to only include allowed keys.

   Args:
     state (map): The raw state map.

   Returns:
     map: The sanitized state map."
  [state]
  (select-keys state allowed-keys))

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
  "Decodes a compressed string back into a state map and sanitizes it.

   Args:
     s (string): The compressed encoded string.

   Returns:
     map: The decoded and sanitized state, or nil if invalid."
  [s]
  (try
    (let [json-str (lz/decompressFromEncodedURIComponent s)
          reader (t/reader :json)]
      (when json-str
        (when-let [decoded (t/read reader json-str)]
          (sanitize-state decoded))))
    (catch :default e
      (js/console.error "Error decoding state:" e)
      nil)))
