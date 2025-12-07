(ns bb-web-ds-tools.impl.datasets)

(defn detect-structure [data]
  (cond
    (and (sequential? data) (map? (first data))) :row-maps
    (map? data) :columnar
    (and (sequential? data) (sequential? (first data))) :rows
    :else :unknown))

(defmulti transform (fn [data input-struct output-struct]
                      [(or (keyword input-struct) (detect-structure data) :row-maps)
                       (keyword output-struct)]))

(defmethod transform :default [data _ _]
  data)

;; Identity transforms
(defmethod transform [:row-maps :row-maps] [data _ _] data)
(defmethod transform [:columnar :columnar] [data _ _] data)
(defmethod transform [:rows :rows] [data _ _] data)

;; Row Maps -> Columnar
(defmethod transform [:row-maps :columnar] [data _ _]
  (if (empty? data)
    {}
    (let [cols (keys (first data))]
      (reduce (fn [acc col]
                (assoc acc col (mapv #(get % col) data)))
              {}
              cols))))

;; Row Maps -> Rows
(defmethod transform [:row-maps :rows] [data _ _]
  (if (empty? data)
    []
    (let [header (keys (first data))]
      (cons header (mapv (fn [row] (mapv #(get row %) header)) data)))))

;; Columnar -> Row Maps
(defmethod transform [:columnar :row-maps] [data _ _]
  (let [cols (keys data)
        count (count (first (vals data)))]
    (mapv (fn [i] (zipmap cols (map #(nth (get data %) i) cols))) (range count))))

;; Columnar -> Rows
(defmethod transform [:columnar :rows] [data _ _]
  (if (empty? data)
    []
    (let [header (keys data)
          count (count (first (vals data)))
          rows (mapv (fn [i] (mapv #(nth (get data %) i) header)) (range count))]
      (cons header rows))))

;; Rows -> Row Maps
(defmethod transform [:rows :row-maps] [data _ _]
  (let [header (first data)
        rows (rest data)]
    (mapv #(zipmap header %) rows)))

;; Rows -> Columnar
(defmethod transform [:rows :columnar] [data _ _]
  (let [header (first data)
        rows (rest data)]
    (if (empty? rows)
      (zipmap header (repeat []))
      (reduce (fn [acc i]
                (let [col-name (nth header i)]
                  (assoc acc col-name (mapv #(nth % i) rows))))
              {}
              (range (count header))))))
