(ns bb-web-ds-tools.components.landing.animations.vega-lite
  "Key functions:
  - (draw-vega-lite [ctx w h t])

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn draw-vega-lite [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 8000
        phase (mod t cycle)
        code-snippet "{:mark :bar :encoding ...}"
        font-size 14]

    (cond
      ;; Phase 1: Code Snippet (0 - 2000ms)
      (< phase 2000)
      (do
        (set! (.-font ctx) (str font-size "px monospace"))
        (set! (.-textAlign ctx) "center")
        (set! (.-textBaseline ctx) "middle")
        (set! (.-fillStyle ctx) (:portal.colors/keyword zenburn))
        (let [progress (/ phase 1500)
              chars-to-show (min (count code-snippet) (Math/floor (* progress (count code-snippet))))]
          (.fillText ctx (subs code-snippet 0 chars-to-show) cx cy)))

      ;; Phase 2: Full Screen Charts Sequence (2000 - 8000ms)
      :else
      (let [chart-phase (- phase 2000)
            chart-duration 2000
            transition 500]

        ;; 1. Bar Chart (2000 - 4000ms)
        (when (< chart-phase 2000)
          (let [progress (min 1.0 (/ chart-phase transition))
                alpha (if (> chart-phase 1500) (- 1.0 (/ (- chart-phase 1500) 500)) 1.0)]
            (set! (.-globalAlpha ctx) (* progress alpha))
            ;; Draw Bar Chart
            (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
            (let [bar-w 40 gap 20
                  start-x (- cx (* 1.5 (+ bar-w gap)))]
              (dotimes [i 3]
                (let [h (+ 50 (* i 30))
                      x (+ start-x (* i (+ bar-w gap)))]
                  (.fillRect ctx x (- cy (- h 50)) bar-w h))))))

        ;; 2. Line Chart (4000 - 6000ms)
        (when (and (>= chart-phase 2000) (< chart-phase 4000))
          (let [local-t (- chart-phase 2000)
                progress (min 1.0 (/ local-t transition))
                alpha (if (> local-t 1500) (- 1.0 (/ (- local-t 1500) 500)) 1.0)]
            (set! (.-globalAlpha ctx) (* progress alpha))
            ;; Draw Line Chart
            (set! (.-strokeStyle ctx) (:portal.colors/number zenburn))
            (set! (.-lineWidth ctx) 4)
            (.beginPath ctx)
            (let [points 10
                  step (/ w points)]
              (dotimes [i points]
                (let [x (* i step)
                      y (+ cy (* 60 (Math/sin (* i 0.8))))]
                  (if (zero? i)
                    (.moveTo ctx x y)
                    (.lineTo ctx x y))))))
          (.stroke ctx))

        ;; 3. Scatter Plot (6000 - 8000ms)
        (when (>= chart-phase 4000)
          (let [local-t (- chart-phase 4000)
                progress (min 1.0 (/ local-t transition))]
            (set! (.-globalAlpha ctx) progress)
            ;; Draw Scatter Plot
            (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
            (dotimes [i 20]
              (let [x (+ (* (mod (* i 123) w)) (- (/ w 2)))
                    y (+ (* (mod (* i 456) h)) (- (/ h 2)))]
                ;; Scatter around center but spread out
                (.beginPath ctx)
                (.arc ctx (+ cx (* (Math/cos i) (* i 5))) (+ cy (* (Math/sin i) (* i 3))) 5 0 (* Math/PI 2))
                (.fill ctx)))))
        (set! (.-globalAlpha ctx) 1.0)))))
