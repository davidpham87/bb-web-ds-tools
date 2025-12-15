(ns bb-web-ds-tools.components.landing.animations.datasets
  "Namespace: bb-web-ds-tools.components.landing.animations.datasets

  Key functions:
  - (draw-datasets [ctx w h t])

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))



(defn draw-datasets [ctx w h t]
  (clear-rect ctx w h)
  (let [cycle 8000
        phase (mod t cycle)
        phase-duration 2000 ;; Each phase is 2s (1.5s display + 0.5s transition)
        display-time 1500
        transition-time 500]

    (cond
      ;; Phase 1: Data Table (0 - 2000ms)
      (< phase phase-duration)
      (let [progress (if (> phase display-time)
                       (/ (- phase display-time) transition-time)
                       0)
            alpha (- 1.0 progress)
            rows 4 cols 4
            cell-w 20 cell-h 12
            start-x (- (/ w 2) (/ (* cols cell-w) 2))
            start-y (- (/ h 2) (/ (* rows cell-h) 2))]
        (set! (.-globalAlpha ctx) alpha)
        (dotimes [i cols]
          (dotimes [j rows]
            (set! (.-fillStyle ctx) (if (even? (+ i j))
                                      (:portal.colors/background2 zenburn)
                                      (:portal.colors/background zenburn)))
            (.fillRect ctx (+ start-x (* i cell-w)) (+ start-y (* j cell-h)) (- cell-w 2) (- cell-h 2))
            (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
            (.fillRect ctx (+ start-x (* i cell-w) 4) (+ start-y (* j cell-h) 4) 12 4)))
        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 2: Filter/Map (2000 - 4000ms)
      (< phase (* 2 phase-duration))
      (let [local-t (- phase phase-duration)
            progress (if (> local-t display-time)
                       (/ (- local-t display-time) transition-time)
                       0)
            alpha-in (min 1.0 (/ local-t transition-time))
            alpha-out (- 1.0 progress)
            rows 4 cols 4
            cell-w 20 cell-h 12
            start-x (- (/ w 2) (/ (* cols cell-w) 2))
            start-y (- (/ h 2) (/ (* rows cell-h) 2))]
        (set! (.-globalAlpha ctx) (* alpha-in alpha-out))

        ;; Draw items moving through a "filter"
        (dotimes [j rows]
          (let [row-progress (mod (+ (* t 0.002) (* j 0.2)) 1.0)
                x (+ start-x (* 4 cell-w) (* row-progress 40))
                y (+ start-y (* j cell-h))]
            (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
            (.fillRect ctx x y 12 4)

            ;; Filter gate
            (set! (.-fillStyle ctx) (:portal.colors/diff-remove zenburn))
            (.fillRect ctx (+ start-x (* 4 cell-w) 20) start-y 2 (* rows cell-h))))
        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 3: Transposed Data Table (4000 - 6000ms)
      (< phase (* 3 phase-duration))
      (let [local-t (- phase (* 2 phase-duration))
            progress (if (> local-t display-time)
                       (/ (- local-t display-time) transition-time)
                       0)
            alpha-in (min 1.0 (/ local-t transition-time))
            alpha-out (- 1.0 progress)
            rows 4 cols 4
            cell-w 20 cell-h 12
            ;; Swapped dimensions for visual effect
            start-x (- (/ w 2) (/ (* rows cell-w) 2))
            start-y (- (/ h 2) (/ (* cols cell-h) 2))]
        (set! (.-globalAlpha ctx) (* alpha-in alpha-out))
        (set! (.-fillStyle ctx) (:portal.colors/keyword zenburn))
        (.font ctx "10px sans-serif")
        (.fillText ctx "T" (- start-x 15) start-y)

        (dotimes [i rows]
          (dotimes [j cols]
            (set! (.-fillStyle ctx) (if (even? (+ i j))
                                      (:portal.colors/background2 zenburn)
                                      (:portal.colors/background zenburn)))
            (.fillRect ctx (+ start-x (* i cell-w)) (+ start-y (* j cell-h)) (- cell-w 2) (- cell-h 2))
            (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
            (.fillRect ctx (+ start-x (* i cell-w) 4) (+ start-y (* j cell-h) 4) 12 4)))
        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 4: Vertical Bars (6000 - 8000ms)
      :else
      (let [local-t (- phase (* 3 phase-duration))
            alpha-in (min 1.0 (/ local-t transition-time))
            cols 5
            bar-w 15 gap 5
            total-w (+ (* cols bar-w) (* (dec cols) gap))
            start-x (- (/ w 2) (/ total-w 2))
            base-y (+ (/ h 2) 20)]
        (set! (.-globalAlpha ctx) alpha-in)
        (dotimes [i cols]
          (let [freq (+ 0.002 (* i 0.001))
                height (+ 20 (* 30 (Math/abs (Math/sin (* t freq)))))
                x (+ start-x (* i (+ bar-w gap)))
                y (- base-y height)]
            (set! (.-fillStyle ctx) (nth [(:portal.colors/diff-add zenburn) (:portal.colors/number zenburn) (:portal.colors/string zenburn) (:portal.colors/keyword zenburn) (:portal.colors/uri zenburn)] (mod i 5)))
            (.fillRect ctx x y bar-w height)))
        (set! (.-globalAlpha ctx) 1.0)))))
