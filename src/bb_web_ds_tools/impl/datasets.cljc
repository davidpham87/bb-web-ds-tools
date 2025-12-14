(ns bb-web-ds-tools.impl.datasets
  "Implementation details for datasets.

  Key functionality: detect-structure")

(defn detect-structure
  "Detects the structure of the input data.

  Args:
    data: The data to inspect.

  Returns:
    keyword: :row-maps, :columnar, :rows, or :unknown."
  [data]
  (cond
    (and (sequential? data) (map? (first data))) :row-maps
    (map? data) :columnar
    (and (sequential? data) (sequential? (first data))) :rows
    :else :unknown))

(defmulti transform
  "Transforms data between different structures (row-maps, columnar, rows).

  Args:
    data: The input data.
    input-struct: The structure of the input data (keyword).
    output-struct: The desired output structure (keyword).

  Returns:
    The transformed data."
  (fn [data input-struct output-struct]
    [(or (keyword input-struct) (detect-structure data) :row-maps)
     (keyword output-struct)]))

(defmethod transform :default
  [data _ _]
  "Default identity transform."
  data)

;; Identity transforms
(defmethod transform [:row-maps :row-maps] [data _ _]
  "Identity transform for row-maps."
  data)

(defmethod transform [:columnar :columnar] [data _ _]
  "Identity transform for columnar data."
  data)

(defmethod transform [:rows :rows] [data _ _]
  "Identity transform for rows."
  data)

;; Row Maps -> Columnar
(defmethod transform [:row-maps :columnar]
  [data _ _]
  "Transforms a sequence of row maps to a columnar map."
  (if (empty? data)
    {}
    (let [cols (keys (first data))]
      (reduce (fn [acc col]
                (assoc acc col (mapv #(get % col) data)))
              {}
              cols))))

;; Row Maps -> Rows
(defmethod transform [:row-maps :rows]
  [data _ _]
  "Transforms a sequence of row maps to a sequence of rows (header + values)."
  (if (empty? data)
    []
    (let [header (keys (first data))]
      (cons header (mapv (fn [row] (mapv #(get row %) header)) data)))))

;; Columnar -> Row Maps
(defmethod transform [:columnar :row-maps]
  [data _ _]
  "Transforms a columnar map to a sequence of row maps."
  (let [cols (keys data)
        count (count (first (vals data)))]
    (mapv (fn [i] (zipmap cols (map #(nth (get data %) i) cols))) (range count))))

;; Columnar -> Rows
(defmethod transform [:columnar :rows]
  [data _ _]
  "Transforms a columnar map to a sequence of rows (header + values)."
  (if (empty? data)
    []
    (let [header (keys data)
          count (count (first (vals data)))
          rows (mapv (fn [i] (mapv #(nth (get data %) i) header)) (range count))]
      (cons header rows))))

;; Rows -> Row Maps
(defmethod transform [:rows :row-maps]
  [data _ _]
  "Transforms a sequence of rows (header + values) to a sequence of row maps."
  (let [header (first data)
        rows (rest data)]
    (mapv #(zipmap header %) rows)))

;; Rows -> Columnar
(defmethod transform [:rows :columnar]
  [data _ _]
  "Transforms a sequence of rows (header + values) to a columnar map."
  (let [header (first data)
        rows (rest data)]
    (if (empty? rows)
      (zipmap header (repeat []))
      (reduce (fn [acc i]
                (let [col-name (nth header i)]
                  (assoc acc col-name (mapv #(nth % i) rows))))
              {}
              (range (count header))))))
