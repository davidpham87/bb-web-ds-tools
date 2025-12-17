(ns bb-web-ds-tools.views.vega-lite.common)

(def state-key :bb-web-ds-tools.views.vega-lite/state)

(def default-config-json "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}")

(defn limit-preview
  "Limits the data for preview to the first 100 observations."
  [data]
  (let [limit 100]
    (cond
      (sequential? data) (into [] (take limit data))
      (map? data) (into {} (map (fn [[k v]] [k (if (sequential? v) (into [] (take limit v)) v)]) data))
      :else data)))
