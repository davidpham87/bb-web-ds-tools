(ns bb-web-ds-tools.components.landing.animations.fast-io
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(def win-w 200)
(def win-h 140)

(defn- draw-browsing-sources [ctx _w _h _t phase win-x win-y]
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
        (.fillRect ctx (+ win-x 10) (+ win-y 15 (* i 15)) len 8)))))

(defn- draw-selection-copy [ctx _w _h t _phase cx cy win-x win-y]
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

(defn- draw-transition-paste [ctx _w _h _t phase cx cy]
  (let [progress (/ (- phase 3000) 500) ;; 0 -> 1
        scale (- 1 progress)]
    (.save ctx)
    (.translate ctx cx cy)
    (.scale ctx scale scale)
    (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
    (.fillRect ctx (- (/ win-w 2)) (- (/ win-h 2)) win-w win-h)
    (.restore ctx)))

(defn- draw-result [ctx _w _h _t phase cx cy]
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
    (set! (.-globalAlpha ctx) 1.0)))

(defn draw-fast-io [ctx w h t]
  (clear-rect ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        cycle 6000
        phase (mod t cycle)

        ;; Layout
        win-x (- cx (/ win-w 2))
        win-y (- cy (/ win-h 2))]

    (cond
      ;; Phase 1: Browsing Sources (0 - 2000ms)
      (< phase 2000)
      (draw-browsing-sources ctx w h t phase win-x win-y)

      ;; Phase 2: Selection & Copy (2000 - 3000ms)
      (< phase 3000)
      (draw-selection-copy ctx w h t phase cx cy win-x win-y)

      ;; Phase 3: Transition/Paste (3000 - 3500ms)
      (< phase 3500)
      (draw-transition-paste ctx w h t phase cx cy)

      ;; Phase 4: Result (3500 - 6000ms)
      :else
      (draw-result ctx w h t phase cx cy))))
