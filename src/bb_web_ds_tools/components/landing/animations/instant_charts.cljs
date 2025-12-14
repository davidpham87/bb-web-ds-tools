(ns bb-web-ds-tools.components.landing.animations.instant-charts
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn draw-instant-charts [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 5000 ;; Slower cycle for clearer transition
        phase (mod t cycle)

        ;; Shared layout config
        font-size 14
        col-names ["Country" "Value 1" "Value 2"]
        data-rows [["USA" 123.45 67.89]
                   ["CAN" 98.76 54.32]
                   ["MEX" 23.45 87.65]
                   ["BRA" 76.54 21.09]]
        row-h 18
        col-w 70
        total-cols (count col-names)
        grid-w (* total-cols col-w)
        start-data-x (- cx (/ grid-w 2))
        start-data-y (- cy 50)

        ;; Plot dimensions
        plot-w 70
        plot-h 50

        ;; Plot positions (same as final phase)
        density-pos {:x (- cx 60) :y (- cy 25)}
        box-pos     {:x (+ cx 60) :y (- cy 25)}
        scatter-pos {:x cx        :y (+ cy 50)}]

    (cond      ;; Phase 1: Raw Data (0 - 1500ms)
      (< phase 1500)
      (let [progress (/ phase 1500)]
        (set! (.-font ctx) (str font-size "px monospace"))
        (set! (.-textAlign ctx) "left")

        ;; Draw column names
        (dotimes [i total-cols]
          (let [x (+ start-data-x (* i col-w))
                y start-data-y]
            (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
            (.fillText ctx (nth col-names i) x y)))

        ;; Draw data rows
        (dotimes [j (count data-rows)]
          (let [row (nth data-rows j)]
            (dotimes [i total-cols]
              (let [val (nth row i)
                    x (+ start-data-x (* i col-w))
                    y (+ start-data-y (* (inc j) row-h 1.2))]
                (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
                (.fillText ctx (str val) x y))))))

      ;; Phase 2: Transition (1500 - 3500ms) - Data fades out, plots zoom in
      (< phase 3500)
      (let [progress (/ (- phase 1500) 2000) ;; 0.0 -> 1.0
            ease-progress (- 1 (Math/pow (- 1 progress) 3)) ;; Cubic ease-out
            alpha-data (- 1.0 ease-progress)
            alpha-plots ease-progress]

        ;; Draw Data (Fading Out)
        (.save ctx)
        (set! (.-globalAlpha ctx) alpha-data)
        (set! (.-font ctx) (str font-size "px monospace"))
        (set! (.-textAlign ctx) "left")

        (dotimes [i total-cols]
          (let [x (+ start-data-x (* i col-w))
                y start-data-y]
            (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
            (.fillText ctx (nth col-names i) x y)))

        (dotimes [j (count data-rows)]
          (let [row (nth data-rows j)]
            (dotimes [i total-cols]
              (let [val (nth row i)
                    x (+ start-data-x (* i col-w))
                    y (+ start-data-y (* (inc j) row-h 1.2))]
                (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
                (.fillText ctx (str val) x y)))))
        (.restore ctx)

        ;; Draw Final Plots (Fading In & Zooming/Translating)
        (.save ctx)
        (.translate ctx cx cy) ;; Translate to center for scaling
        (.scale ctx (+ 0.5 (* 0.5 ease-progress)) (+ 0.5 (* 0.5 ease-progress))) ;; Scale from 0.5 to 1.0
        (.translate ctx (- cx) (- cy)) ;; Translate back
        (set! (.-globalAlpha ctx) alpha-plots)

        ;; 1. Density Plot (Top Left)
        (let [bx (:x density-pos) by (:y density-pos)]
          (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
          (.beginPath ctx)
          (.moveTo ctx (- bx (/ plot-w 2)) (+ by (/ plot-h 2)))
          (dotimes [i plot-w]
            (let [x (+ (- bx (/ plot-w 2)) i)
                  norm-x (/ (- i (/ plot-w 2)) 10)
                  y (- (+ by (/ plot-h 2)) (* 35 (Math/exp (* -0.5 norm-x norm-x))))]
              (.lineTo ctx x y)))
          (.lineTo ctx (+ bx (/ plot-w 2)) (+ by (/ plot-h 2)))
          (.fill ctx))

        ;; 2. Box Plot (Top Right)
        (let [bx (+ cx 50) by (- cy 20)
              box-w 20 box-h 30]
          (set! (.-strokeStyle ctx) (:portal.colors/number zenburn))
          (set! (.-lineWidth ctx) 2)
          (.beginPath ctx)
          (.moveTo ctx bx (- by 25))
          (.lineTo ctx bx (+ by 25))
          (.stroke ctx)
          (set! (.-fillStyle ctx) (:portal.colors/number zenburn))
          (.fillRect ctx (- bx (/ box-w 2)) (- by (/ box-h 2)) box-w box-h)
          (set! (.-fillStyle ctx) (:portal.colors/background zenburn))
          (.fillRect ctx (- bx (/ box-w 2)) by box-w 2))

        ;; 3. Scatter Plot (Bottom Center)
        (let [bx cx by (+ cy 40)]
          (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
          (dotimes [i 15]
            (let [offset (mod (+ (* i 73) t) 1000)
                  angle (* i 2.4)
                  dist (+ 10 (* 15 (Math/sin (+ angle (* t 0.002)))))
                  x (+ bx (* dist (Math/cos angle)))
                  y (+ by (* dist (Math/sin angle)))]
              (.beginPath ctx)
              (.arc ctx x y 2 0 (* Math/PI 2))
              (.fill ctx))))
        (.restore ctx)
        (set! (.-globalAlpha ctx) 1.0))


      ;; Phase 3: Final Plots (3500 - 5000ms) - Plots are fully visible
      :else
      (let [plot-w 60
            plot-h 40]
        ;; 1. Density Plot (from Column 0)
        (let [bx (:x density-pos) by (:y density-pos)]
          (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
          (.beginPath ctx)
          (.moveTo ctx (- bx (/ plot-w 2)) (+ by (/ plot-h 2)))
          (dotimes [i plot-w]
            (let [x (+ (- bx (/ plot-w 2)) i)
                  norm-x (/ (- i (/ plot-w 2)) 10)
                  y (- (+ by (/ plot-h 2)) (* 35 (Math/exp (* -0.5 norm-x norm-x))))]
              (.lineTo ctx x y)))
          (.lineTo ctx (+ bx (/ plot-w 2)) (+ by (/ plot-h 2)))
          (.fill ctx))

        ;; 2. Box Plot (from Column 1)
        (let [bx (+ cx 50) by (- cy 20)
              box-w 20 box-h 30]
          (set! (.-strokeStyle ctx) (:portal.colors/number zenburn))
          (set! (.-lineWidth ctx) 2)
          ;; Whiskers
          (.beginPath ctx)
          (.moveTo ctx bx (- by 25))
          (.lineTo ctx bx (+ by 25))
          (.stroke ctx)
          (set! (.-fillStyle ctx) (:portal.colors/number zenburn))
          (.fillRect ctx (- bx (/ box-w 2)) (- by (/ box-h 2)) box-w box-h)
          (set! (.-fillStyle ctx) (:portal.colors/background zenburn))
          (.fillRect ctx (- bx (/ box-w 2)) by box-w 2))

        ;; 3. Scatter Plot (from Column 2)
        (let [bx cx by (+ cy 40)]
          (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
          (dotimes [i 15]
            (let [offset (mod (+ (* i 73) t) 1000)
                  angle (* i 2.4)
                  dist (+ 10 (* 15 (Math/sin (+ angle (* t 0.002)))))
                  x (+ bx (* dist (Math/cos angle)))
                  y (+ by (* dist (Math/sin angle)))]
              (.beginPath ctx)
              (.arc ctx x y 2 0 (* Math/PI 2))
              (.fill ctx))))))))
