(ns bb-web-ds-tools.components.landing.animations.malli
  "Component for malli."
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn draw-malli [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 8000
        phase (mod t cycle)
        font-size 12]

    (set! (.-font ctx) (str font-size "px monospace"))
    (set! (.-textAlign ctx) "center")
    (set! (.-textBaseline ctx) "middle")

    (cond
      ;; Phase 1: Raw Data (0 - 2000ms)
      (< phase 2000)
      (let [alpha (if (> phase 1500) (- 1.0 (/ (- phase 1500) 500)) 1.0)]
        (set! (.-globalAlpha ctx) alpha)
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (.fillText ctx "[{:a 1} {:a 2}]" cx cy)
        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 2: Schema Inference (2000 - 5000ms)
      (< phase 5000)
      (let [progress (/ (- phase 2000) 1000) ;; Animate in
            alpha-in (min 1.0 progress)
            alpha-out (if (> phase 4500) (- 1.0 (/ (- phase 4500) 500)) 1.0)]
        (set! (.-globalAlpha ctx) (* alpha-in alpha-out))

        ;; Raw Data (moved up)
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (.fillText ctx "[{:a 1} {:a 2}]" cx (- cy 20))

        ;; Arrow
        (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
        (set! (.-font ctx) "20 sans-serif")
        (.fillText ctx "⬇" cx (+ cy 5))

        ;; Schema (appearing below)
        (set! (.-font ctx) (str font-size "px monospace"))
        (set! (.-fillStyle ctx) (:portal.colors/keyword zenburn))
        (.fillText ctx "[:map [:a :int]]" cx (+ cy 30))

        (set! (.-globalAlpha ctx) 1.0))

      ;; Phase 3: Validation (5000 - 8000ms)
      :else
      (let [progress (/ (- phase 5000) 500)
            alpha (min 1.0 progress)
            radius 30]
        (set! (.-globalAlpha ctx) alpha)
        ;; Shield or Checkmark
        (set! (.-strokeStyle ctx) (:portal.colors/diff-add zenburn))
        (set! (.-lineWidth ctx) 4)
        (.beginPath ctx)
        (.arc ctx cx cy radius 0 (* Math/PI 2))
        (.stroke ctx)

        ;; Animated checkmark
        (.beginPath ctx)
        (.moveTo ctx (- cx 15) cy)
        (.lineTo ctx (- cx 5) (+ cy 10))
        (.lineTo ctx (+ cx 20) (- cy 15))
        (.stroke ctx)

        (set! (.-font ctx) "16 sans-serif")
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (.fillText ctx "Valid" cx (+ cy 50))
        (set! (.-globalAlpha ctx) 1.0)))))
