(ns bb-web-ds-tools.components.landing.animations.code
  (:require
   [bb-web-ds-tools.utils.themes :as themes]
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect)]))

(def zenburn (themes/get-theme :zenburn))

(def code-lines ["(partition 2 1"
                 " (range 4))"])
(def result-lines ["((0 1) (1 2)"
                   " (2 3))"])

(def font-size 14)
(def line-h 20)
(def type-duration 2000)
(def highlight-duration 1500)
(def exec-duration 1000)

(defn- setup-font [ctx]
  (set! (.-font ctx) (str font-size "px monospace"))
  (set! (.-textAlign ctx) "left")
  (set! (.-textBaseline ctx) "middle"))

(defn- draw-text [ctx lines start-x start-y]
  (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
  (dotimes [i (count lines)]
    (.fillText ctx (nth lines i) start-x (+ start-y (* i line-h)))))

(defn- draw-typing [ctx _w _h _t phase start-x start-y]
  (let [progress (/ phase type-duration)
        total-chars (reduce + (map count code-lines))
        chars-to-show (Math/floor (* progress total-chars))]

    (loop [lines code-lines
           line-idx 0
           chars-left chars-to-show]
      (when (and (seq lines) (pos? chars-left))
        (let [line (first lines)
              len (count line)
              show-len (min len chars-left)
              y (+ start-y (* line-idx line-h))]
          (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
          (.fillText ctx (subs line 0 show-len) start-x y)
          ;; Cursor
          (when (and (= show-len chars-left) (> chars-left 0))
            (set! (.-fillStyle ctx) (:portal.colors/cursor zenburn))
            (.fillRect ctx (+ start-x (* show-len 8.5)) (- y 8) 2 16))

          (recur (rest lines) (inc line-idx) (- chars-left show-len)))))))

(defn- draw-highlight [ctx _w _h _t _phase start-x start-y]
  ;; Draw background selection
  (set! (.-fillStyle ctx) "rgba(255, 255, 255, 0.2)")
  (dotimes [i (count code-lines)]
    (.fillRect ctx (- start-x 2) (- (+ start-y (* i line-h)) 10) (* (count (nth code-lines i)) 8.5) 20))

  ;; Draw text
  (draw-text ctx code-lines start-x start-y))

(defn- draw-execute-cue [ctx _w _h _t phase start-x start-y]
  (draw-text ctx code-lines start-x start-y)

  ;; Draw CTRL+ENTER hint
  (let [local-t (- phase type-duration highlight-duration)
        hint-alpha (Math/sin (* local-t 0.005))
        is-mac (re-find #"(?i)mac" (or (.-platform js/navigator) ""))
        key-text (if is-mac "Cmd+Enter" "Ctrl+Enter")]
    (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
    (set! (.-globalAlpha ctx) hint-alpha)
    (set! (.-font ctx) "bold 12px sans-serif")
    (.fillText ctx key-text (+ start-x 80) (+ start-y (* (count code-lines) line-h) 10))
    (set! (.-globalAlpha ctx) 1.0)
    ;; Restore font
    (set! (.-font ctx) (str font-size "px monospace"))))

(defn- draw-result [ctx _w _h _t _phase start-x start-y]
  (draw-text ctx code-lines start-x start-y)

  ;; Draw Result
  (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
  (dotimes [i (count result-lines)]
    (.fillText ctx (nth result-lines i) start-x (+ start-y (* (+ (count code-lines) 1 i) line-h)))))

(defn draw-code [ctx w h t]
  (clear-rect ctx w h)
  (let [cycle 8000
        phase (mod t cycle)
        start-x (- (/ w 2) 60)
        start-y (- (/ h 2) 40)]

    (setup-font ctx)

    (cond
      ;; Phase 1: Typing (0 - 2000ms)
      (< phase type-duration)
      (draw-typing ctx w h t phase start-x start-y)

      ;; Phase 2: Highlight (2000 - 3500ms)
      (< phase (+ type-duration highlight-duration))
      (draw-highlight ctx w h t phase start-x start-y)

      ;; Phase 3: Execute Cue (3500 - 4500ms)
      (< phase (+ type-duration highlight-duration exec-duration))
      (draw-execute-cue ctx w h t phase start-x start-y)

      ;; Phase 4: Result (4500 - 8000ms)
      :else
      (draw-result ctx w h t phase start-x start-y))))
