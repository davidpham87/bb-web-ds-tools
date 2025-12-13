(ns bb-web-ds-tools.components.landing.animations.honeysql
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn draw-honeysql [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 6000
        phase (mod t cycle)
        orbit-r 60
        angle (* t 0.001)
        sql-lines ["SELECT *" "FROM users" "WHERE id > 10"]

        ;; Moved inside let
        font-size 24
        text-align "center"
        text-baseline "middle"]

    (set! (.-font ctx) (str "bold " font-size "px sans-serif"))
    (set! (.-textAlign ctx) text-align)
    (set! (.-textBaseline ctx) text-baseline)

    (cond
      ;; Phase 1: Orbiting (0 - 3000ms)
      (< phase 3000)
      (let [alpha (if (> phase 2500) (- 1.0 (/ (- phase 2500) 500)) 1.0)]
        (set! (.-globalAlpha ctx) alpha)
        ;; Central pot
        (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
        (.fillText ctx "{}" cx cy)

        ;; Orbiting keywords
        (doseq [[i text color] [[0 "SELECT" (:portal.colors/keyword zenburn)]
                                [1 "FROM" (:portal.colors/string zenburn)]
                                [2 "WHERE" (:portal.colors/number zenburn)]]]
          (let [theta (+ angle (* i (/ (* Math/PI 2) 3)))
                x (+ cx (* orbit-r (Math/cos theta)))
                y (+ cy (* orbit-r (Math/sin theta)))]
            (set! (.-fillStyle ctx) color)
            (set! (.-font ctx) "14px sans-serif")
            (.fillText ctx text x y)))
        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 2: SQL Query (3000 - 6000ms)
      :else
      (let [progress (/ (- phase 3000) 1000)
            alpha (min 1.0 progress)
            start-x (- cx 80) ;; Left justify: Move starting x to the left
            start-y (- cy 20)
            line-h 24]
        (set! (.-globalAlpha ctx) alpha)
        (set! (.-font ctx) "16px monospace")
        (set! (.-textAlign ctx) "left") ;; Set alignment to left
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (dotimes [i (count sql-lines)]
          (.fillText ctx (nth sql-lines i) start-x (+ start-y (* i line-h))))
        (set! (.-globalAlpha ctx) 1.0)))))
