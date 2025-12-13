(ns bb-web-ds-tools.components.landing.animations
  (:require [bb-web-ds-tools.utils.themes :as themes]))

(def zenburn (themes/get-theme :zenburn))

(defn clear [ctx w h]
  (.clearRect ctx 0 0 w h))

(defn clear-rect [ctx w h]
  (.clearRect ctx 0 0 w h))

(defn draw-workspaces [ctx w h t]
  (clear ctx w h)
  (let [cycle (mod t 4000)
        open-phase (< cycle 2000)
        angle (if open-phase
                (* Math/PI 0.1 (Math/sin (* t 0.003)))
                0)
        cx (/ w 2)
        cy (/ h 2)]
    (set! (.-strokeStyle ctx) (:portal.colors/string zenburn))
    (set! (.-lineWidth ctx) 3)
    (set! (.-fillStyle ctx) (:portal.colors/string zenburn))

    (.save ctx)
    (.translate ctx cx cy)
    ;; Folder back
    (.beginPath ctx)
    (.moveTo ctx -40 -30)
    (.lineTo ctx 40 -30)
    (.lineTo ctx 40 30)
    (.lineTo ctx -40 30)
    (.fill ctx)

    ;; Folder flap (animated)
    (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
    (.beginPath ctx)
    (.moveTo ctx -40 30)
    (.lineTo ctx 40 30)
    (.lineTo ctx (+ 40 (* (Math/sin angle) 10)) (+ -30 (* (Math/cos angle) -10)))
    (.lineTo ctx (+ -40 (* (Math/sin angle) 10)) (+ -30 (* (Math/cos angle) -10)))
    (.fill ctx)
    (.restore ctx)))

(defn draw-app-db [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)]
    (set! (.-fillStyle ctx) (:portal.colors/number zenburn))
    ;; Cylinder / DB icon
    (.beginPath ctx)
    (.ellipse ctx cx (- cy 20) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    (.beginPath ctx)
    (.rect ctx (- cx 40) (- cy 20) 80 50)
    (.fill ctx)

    (set! (.-fillStyle ctx) (:portal.colors/background zenburn))
    (.beginPath ctx)
    (.ellipse ctx cx (+ cy 30) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    (set! (.-fillStyle ctx) (:portal.colors/number zenburn))
    (.beginPath ctx)
    (.ellipse ctx cx (+ cy 25) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    ;; Pulsing data particles
    (set! (.-fillStyle ctx) (:portal.colors/keyword zenburn))
    (dotimes [i 5]
      (let [offset (* i 1000)
            y-pos (+ -50 (mod (* (+ t offset) 0.05) 100))
            x-pos (+ cx (* 60 (Math/sin (* (+ t offset) 0.002))))]
        (when (and (> y-pos -50) (< y-pos 50))
          (.beginPath ctx)
          (.arc ctx x-pos (+ cy y-pos) 3 0 (* Math/PI 2))
          (.fill ctx))))))

(defn draw-code [ctx w h t]
  (clear-rect ctx w h)
  (let [cycle 8000
        phase (mod t cycle)
        code-lines ["(partition 2 1"
                    " (range 4))"]
        result-lines ["((0 1) (1 2)"
                      " (2 3))"]

        font-size 14
        line-h 20
        start-x (- (/ w 2) 60)
        start-y (- (/ h 2) 40)

        type-duration 2000
        highlight-duration 1500
        exec-duration 1000]

    (set! (.-font ctx) (str font-size "px monospace"))
    (set! (.-textAlign ctx) "left")
    (set! (.-textBaseline ctx) "middle")

    (cond
      ;; Phase 1: Typing (0 - 2000ms)
      (< phase type-duration)
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

              (recur (rest lines) (inc line-idx) (- chars-left show-len))))))

      ;; Phase 2: Highlight (2000 - 3500ms)
      (< phase (+ type-duration highlight-duration))
      (do
        ;; Draw background selection
        (set! (.-fillStyle ctx) "rgba(255, 255, 255, 0.2)")
        (dotimes [i (count code-lines)]
          (.fillRect ctx (- start-x 2) (- (+ start-y (* i line-h)) 10) (* (count (nth code-lines i)) 8.5) 20))

        ;; Draw text
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (dotimes [i (count code-lines)]
          (.fillText ctx (nth code-lines i) start-x (+ start-y (* i line-h)))))

      ;; Phase 3: Execute Cue (3500 - 4500ms)
      (< phase (+ type-duration highlight-duration exec-duration))
      (do
        ;; Draw text
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (dotimes [i (count code-lines)]
          (.fillText ctx (nth code-lines i) start-x (+ start-y (* i line-h))))

        ;; Draw CTRL+ENTER hint
        (let [hint-alpha (Math/sin (* (- phase type-duration highlight-duration) 0.005))
              is-mac (re-find #"(?i)mac" (or (.-platform js/navigator) ""))
              key-text (if is-mac "Cmd+Enter" "Ctrl+Enter")]
          (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
          (set! (.-globalAlpha ctx) hint-alpha)
          (set! (.-font ctx) "bold 12px sans-serif")
          (.fillText ctx key-text (+ start-x 80) (+ start-y (* (count code-lines) line-h) 10))
          (set! (.-globalAlpha ctx) 1.0)))
      ;; Phase 4: Result (4500 - 8000ms)
      :else
      (do
        ;; Draw text
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (dotimes [i (count code-lines)]
          (.fillText ctx (nth code-lines i) start-x (+ start-y (* i line-h))))

        ;; Draw Result
        (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
        (dotimes [i (count result-lines)]
          (.fillText ctx (nth result-lines i) start-x (+ start-y (* (+ (count code-lines) 1 i) line-h))))))))

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
        (.fillText ctx "[{:a 1} {:a 2}]") cx cy)
      (set! (.-globalAlpha ctx) 1.0)

      ;; Phase 2: Schema Inference (2000 - 5000ms)
      (< phase 5000)
      (let [progress (/ (- phase 2000) 1000) ;; Animate in
            alpha-in (min 1.0 progress)
            alpha-out (if (> phase 4500) (- 1.0 (/ (- phase 4500) 500)) 1.0)]
        (set! (.-globalAlpha ctx) (* alpha-in alpha-out))

        ;; Raw Data (moved up)
        (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
        (.fillText ctx "[{:a 1} {:a 2}]") cx (- cy 20))

      ;; Arrow
      (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
      (set! (.-font ctx) "20 sans-serif")
      (.fillText ctx "⬇" cx (+ cy 5))

      ;; Schema (appearing below)
      (set! (.-font ctx) (str font-size "px monospace"))
      (set! (.-fillStyle ctx) (:portal.colors/keyword zenburn))
      (.fillText ctx "[:map [:a :int]]" cx (+ cy 30))

      (set! (.-globalAlpha ctx) 1.0)

      ;; Phase 3: Validation (5000 - 8000ms)
      :else)
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
      (set! (.-globalAlpha ctx) 1.0))))))

(defn draw-fast-io [ctx w h t]
(clear-rect ctx w h)
(let [cx (/ w 2)
      cy (/ h 2)
      cycle 6000
      phase (mod t cycle)

      ;; Layout
      win-w 200
      win-h 140
      win-x (- cx (/ win-w 2))
      win-y (- cy (/ win-h 2))]

(cond
  ;; Phase 1: Browsing Sources (0 - 2000ms)
  (< phase 2000)
  (let [active-tab (int (mod (/ phase 600) 3))
        tab-w (/ win-w 3)]

    ;; Window Chrome
    (set! (.-fillStyle ctx) (:portal.colors/background2 zenburn))
    (.fillRect ctx win-x win-y win-w win-h)

    ;; Tabs
    (dotimes [i 3]
      (set! (.-fillStyle ctx) (if (= i active-tab)
                                (:portal.colors/background2 zenburn)
                                (:portal.colors/background zenburn)))
      (.fillRect ctx (+ win-x (* i tab-w)) (- win-y 10) tab-w 10))

    ;; Content Lines
    (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
    (dotimes [i 4]
      ;; Random-ish line lengths based on tab
      (let [len (+ 20 (mod (* (+ i active-tab) 37) 60))]
        (.fillRect ctx (+ win-x 10) (+ win-y 15 (* i 15)) len 8))))

  ;; Phase 2: Selection & Copy (2000 - 3000ms)
  (< phase 3000)
  (do
    ;; Static Window
    (set! (.-fillStyle ctx) (:portal.colors/background2 zenburn))
    (.fillRect ctx win-x win-y win-w win-h)
    ;; Tabs
    (dotimes [i 3]
      (set! (.-fillStyle ctx) (if (= i 2) ;; last one active
                                (:portal.colors/background2 zenburn)
                                (:portal.colors/background zenburn)))
      (.fillRect ctx (+ win-x (* i (/ win-w 3))) (- win-y 10) (/ win-w 3) 10))
    ;; Content
    (set! (.-fillStyle ctx) (:portal.colors/text zenburn))
    (dotimes [i 4]
      (.fillRect ctx (+ win-x 10) (+ win-y 15 (* i 15)) 50 8))

    ;; Selection Overlay
    (let [pulse (Math/sin (* t 0.01))]
      (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
      (set! (.-globalAlpha ctx) (+ 0.2 (* 0.1 pulse)))
      (.fillRect ctx win-x win-y win-w win-h)
      (set! (.-globalAlpha ctx) 1.0)

      ;; Copy Text
      (set! (.-font ctx) "bold 14px sans-serif")
      (set! (.-fillStyle ctx) "#fff")
      (set! (.-textAlign ctx) "center")
      (.fillText ctx "COPY" cx cy)))

  ;; Phase 3: Transition/Paste (3000 - 3500ms)
  (< phase 3500)
  (let [progress (/ (- phase 3000) 500) ;; 0 -> 1
        scale (- 1 progress)]
    (.save ctx)
    (.translate ctx cx cy)
    (.scale ctx scale scale)
    (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
    (.fillRect ctx (- (/ win-w 2)) (- (/ win-h 2)) win-w win-h)
    (.restore ctx))

  ;; Phase 4: Result (3500 - 6000ms)
  :else
  (let [progress (/ (- phase 3500) 500) ;; 0 -> 1 (fade in)
        alpha (min 1.0 progress)
        font-size 14
        line-h 18
        start-x (- cx 50)
        start-y (- cy 10)
        draw-tokens (fn [y tokens]
                      (loop [toks tokens
                             cur-x start-x]
                        (when (seq toks)
                          (let [[text color] (first toks)]
                            (set! (.-fillStyle ctx) color)
                            (.fillText ctx text cur-x y)
                            (recur (rest toks) (+ cur-x (.-width (.measureText ctx text))))))))]
    (set! (.-globalAlpha ctx) alpha)
    (set! (.-font ctx) (str font-size "px monospace"))
    (set! (.-textAlign ctx) "left")
    (set! (.-textBaseline ctx) "middle")

    (draw-tokens start-y [["[{" (:portal.colors/text zenburn)]
                          [":n" (:portal.colors/keyword zenburn)]
                          [" " (:portal.colors/text zenburn)]
                          ["\"A\"" (:portal.colors/string zenburn)]
                          [" " (:portal.colors/text zenburn)]
                          [":v" (:portal.colors/keyword zenburn)]
                          [" " (:portal.colors/text zenburn)]
                          ["1" (:portal.colors/number zenburn)]
                          ["}" (:portal.colors/text zenburn)]])

    (draw-tokens (+ start-y line-h) [[" {" (:portal.colors/text zenburn)]
                                     [":n" (:portal.colors/keyword zenburn)]
                                     [" " (:portal.colors/text zenburn)]
                                     ["\"B\"" (:portal.colors/string zenburn)]
                                     [" " (:portal.colors/text zenburn)]
                                     [":v" (:portal.colors/keyword zenburn)]
                                     [" " (:portal.colors/text zenburn)]
                                     ["2" (:portal.colors/number zenburn)]
                                     ["}]" (:portal.colors/text zenburn)]])
    (set! (.-globalAlpha ctx) 1.0)))))

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
            (.arc ctx 0 0 (* r 0.3) 0 (* Math/PI 2))
            (.fill ctx)
            (set! (.-globalCompositeOperation ctx) "source-over"))
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

        (defn draw-honeysql [ctx w h t]
          (clear-rect ctx w h)
          (let [cx (/ w 2)
                cy (/ h 2)
                cycle 6000
                phase (mod t cycle)
                orbit-r 60
                angle (* t 0.001)
                sql-lines ["SELECT *" "FROM users" "WHERE id > 10"]]

            (set! (.-font ctx) "bold 24px sans-serif")
            (set! (.-textAlign ctx) "center")
            (set! (.-textBaseline ctx) "middle")

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

        (defn draw-vega-lite [ctx w h t](clear-rect ctx w h)
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
        (.stroke ctx)))

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
        draw-gear (fn [x y r teeth speed color]
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
                          (.lineTo ctx (* rad (Math/cos angle)) (* rad (Math/sin angle))))))
                    (.closePath ctx)
                    (.fill ctx)
                    ;; Hole
                    (set! (.-globalCompositeOperation ctx) "destination-out")
                    (.beginPath ctx)
                    (.arc ctx 0 0 hole-r 0 (* Math/PI 2))
                    (.fill ctx)
                    (set! (.-globalCompositeOperation ctx) "source-over")
                    (.restore ctx))]
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
