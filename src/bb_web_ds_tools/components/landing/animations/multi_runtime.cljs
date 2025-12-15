(ns bb-web-ds-tools.components.landing.animations.multi-runtime
  "Namespace: bb-web-ds-tools.components.landing.animations.multi-runtime

  Key functions:
  - (draw-multi-runtime [ctx w h t])

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn draw-multi-runtime [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 8000
        phase (mod t cycle)
        code-lines ["(->> ms (map :x)..."
                    "sum([m['x'] for m...])"
                    "Reduce(+, Filter..."]
        colors ["#dca3a3"  ;; red-ish (Clojure)
                "#72d5a3"  ;; green-ish (Python)
                "#94bff3"] ;; blue-ish (R)
        font-size 14]

    (set! (.-font ctx) (str "bold " font-size "px monospace"))
    (set! (.-textAlign ctx) "center")
    (set! (.-textBaseline ctx) "middle")

    (cond
      ;; Phase 1: Typing code (0 - 4000ms)
      (< phase 4000)
      (let [progress (/ phase 4000)
            total-lines (count code-lines)
            chars-per-line 20 ;; Approx chars to show
            total-chars (* total-lines chars-per-line)
            chars-to-show (Math/floor (* progress total-chars))]

        (dotimes [i total-lines]
          (let [line (nth code-lines i)
                line-chars-start (* i chars-per-line)
                chars-for-this-line (max 0 (min chars-per-line (- chars-to-show line-chars-start)))
                y (- cy 30 (* (- 1 i) 20))]

            (when (pos? chars-for-this-line)
              (set! (.-fillStyle ctx) (nth colors i))
              (.fillText ctx (subs line 0 chars-for-this-line) cx y)))))

      ;; Phase 2: Converging to Machine (4000 - 5500ms)
      (< phase 5500)
      (let [progress (/ (- phase 4000) 1500) ;; 0.0 -> 1.0
            box-size (+ 70 (* 10 (Math/sin (* t 0.01))))]

        ;; Move text to center
        (dotimes [i 3]
          (let [start-y (- cy 30 (* (- 1 i) 20))
                target-y cy
                curr-y (+ start-y (* (- target-y start-y) progress))]
            (set! (.-fillStyle ctx) (nth colors i))
            (set! (.-globalAlpha ctx) (- 1.0 progress))
            (.fillText ctx (nth code-lines i) cx curr-y)))

        (set! (.-globalAlpha ctx) 1.0)

        ;; Machine appearing
        (set! (.-globalAlpha ctx) progress)
        (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn)) ;; Green machine
        (.fillRect ctx (- cx (/ box-size 2)) (- cy (/ box-size 2)) box-size box-size))

      ;; Phase 3: Machine Processing (5500 - 8000ms)
      :else
      (let [box-size 80]
        ;; Machine Pulse
        (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
        (set! (.-shadowColor ctx) (:portal.colors/diff-add zenburn))
        (set! (.-shadowBlur ctx) (+ 10 (* 10 (Math/sin (* t 0.01)))))
        (.fillRect ctx (- cx (/ box-size 2)) (- cy (/ box-size 2)) box-size box-size)
        (set! (.-shadowBlur ctx) 0)

        ;; Gear Spinning
        (let [inner-r (* box-size 0.35)]
          (.save ctx)
          (.translate ctx cx cy)
          (.rotate ctx (* t 0.005))
          (set! (.-fillStyle ctx) (:portal.colors/background zenburn))
          (.beginPath ctx)
          (dotimes [i 8]
            (let [angle (* i (/ Math/PI 4))
                  r (if (even? i) inner-r (* inner-r 0.7))]
              (if (zero? i)
                (.moveTo ctx (* r (Math/cos angle)) (* r (Math/sin angle)))
                (.lineTo ctx (* r (Math/cos angle)) (* r (Math/sin angle))))))
          (.closePath ctx)
          (.fill ctx)
          ;; Hole
          (set! (.-globalCompositeOperation ctx) "destination-out")
          (.beginPath ctx)
          (.arc ctx 0 0 (* inner-r 0.3) 0 (* Math/PI 2))
          (.fill ctx)
          (set! (.-globalCompositeOperation ctx) "source-over")
          (.restore ctx))

        ;; Output particles
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (dotimes [i 5]
          (let [offset (* i 200)
                p-progress (mod (/ (+ t offset) 1000) 1.0)
                y (+ cy (/ box-size 2) (* p-progress 60)) ;; Move down
                alpha (- 1.0 p-progress)]
            (when (< p-progress 1.0)
              (set! (.-globalAlpha ctx) alpha)
              (.fillRect ctx (- cx 2) y 4 4))))
        (set! (.-globalAlpha ctx) 1.0)))))
