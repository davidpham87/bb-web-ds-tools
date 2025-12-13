(ns bb-web-ds-tools.components.landing.animations
  (:require
   [bb-web-ds-tools.utils.themes :as themes]
   [bb-web-ds-tools.components.landing.animations.app-db :as aa]
   [bb-web-ds-tools.components.landing.animations.datasets :as ad]
   [bb-web-ds-tools.components.landing.animations.code :as ac]
   [bb-web-ds-tools.components.landing.animations.malli :as am]
   [bb-web-ds-tools.components.landing.animations.workspaces :as aw]
   [bb-web-ds-tools.components.landing.animations.fast-io :as afi]))

(def zenburn (themes/get-theme :zenburn))

(defn clear [ctx w h]
  (.clearRect ctx 0 0 w h))

(defn clear-rect [ctx w h]
  (.clearRect ctx 0 0 w h))

(def draw-workspaces aw/draw-workspaces)
(def draw-app-db aa/draw-app-db)
(def draw-datasets ad/draw-datasets)
(def draw-code ac/draw-code)
(def draw-malli am/draw-malli)
(def draw-fast-io afi/draw-fast-io)

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
              (.fillText ctx (subs line 0 chars-for-this-line) cx y))))

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
            (set! (.-globalCompositeOperation ctx) "source-over"))
          (.restore ctx)

          ;; Output particles
          (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
          (dotimes [i 5]
            (let [offset (* i 200)
                  p-progress (mod (/ (+ t offset) 1000) 1.0)
                  y (+ cy (/ box-size 2) (* p-progress 60)) ;; Move down
                  alpha (- 1.0 p-progress)]
              (when (< p-progress 1.0)
                (set! (.-globalAlpha ctx) alpha)
                (.fillRect ctx (- cx 2) y 4 4)))))
        (set! (.-globalAlpha ctx) 1.0)))))

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

(defn draw-vega-lite [ctx w h t]
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

(defn draw-gemma [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        scale (+ 1 (* 0.1 (Math/sin (* t 0.005))))]
    (.save ctx)
    (.translate ctx cx cy)
    (.scale ctx scale scale)

    (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
    ;; Robot head shape
    (.fillRect ctx -30 -30 60 60)

    ;; Eyes
    (set! (.-fillStyle ctx) (:portal.colors/background2 zenburn))
    (.fillRect ctx -20 -10 15 10)
    (.fillRect ctx 5 -10 15 10)

    ;; Blinking eyes
    (let [blink (mod (* t 0.0005) 5)]
      (when (> blink 4.8)
        (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
        (.fillRect ctx -20 -10 15 10)
        (.fillRect ctx 5 -10 15 10)))
    (.restore ctx)))

(defn draw-settings [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        draw-gear
        (fn [x y r teeth speed color]
          (.save ctx)
          (.translate ctx x y)
          (.rotate ctx (* t speed))
          (set! (.-fillStyle ctx) color)
          (.beginPath ctx)
          (let [outer-r r
                inner-r (* r 0.8)
                hole-r (* r 0.3)]
            (dotimes [i (* teeth 2)]
              (let [angle (* i (/ Math/PI teeth))
                    rad (if (even? i) outer-r inner-r)]
                (.lineTo ctx (* rad (Math/cos angle)) (* rad (Math/sin angle)))))
            (.closePath ctx)
            (.fill ctx)
            ;; Hole
            (set! (.-globalCompositeOperation ctx) "destination-out")
            (.beginPath ctx)
            (.arc ctx 0 0 hole-r 0 (* Math/PI 2))
            (.fill ctx)
            (set! (.-globalCompositeOperation ctx) "source-over")
            (.restore ctx)))]
    (draw-gear cx cy 40 8 0.001 (:portal.colors/text zenburn))
    (draw-gear (+ cx 50) (+ cy 50) 25 6 -0.002 (:portal.colors/namespace zenburn))))

(defn draw-changelog [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        scroll-y (mod (* t 0.05) 200)]
    (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
    (set! (.-font ctx) "12px monospace")
    (set! (.-textAlign ctx) "left")

    (doseq [i (range 10)]
      (let [y (- (+ 200 (* i 20)) scroll-y)]
        (when (and (> y 0) (< y 200))
          (.fillText ctx (str "- Update " i " fixed stuff") 20 y))))))
