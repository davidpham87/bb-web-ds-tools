(ns bb-web-ds-tools.views.landing.background
  "Key functions:
  - (update-background-colors [colors])
  - (draw-background-pattern [ctx width height t cols])
  - (background-canvas [])

  History:
  - 2025-12-14: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [reagent.core :as r]))

(defn- update-background-colors
  "Updates the color state based on CSS variables."
  [colors]
  (let [style (js/getComputedStyle js/document.body)
        get-color (fn [k]
                    (let [v (.getPropertyValue style k)]
                      (if (empty? v) (get @colors k) (clojure.string/trim v))))]
    (reset! colors {:c1 (get-color "--text-accent")
                    :c2 (get-color "--text-secondary")
                    :c3 (get-color "--bg-button-primary")
                    :c4 (get-color "--text-danger")})))

(defn- draw-background-pattern
  "Draws the animated background pattern on the canvas."
  [ctx width height t cols]
  (.clearRect ctx 0 0 width height)

  (set! (.-lineWidth ctx) 2)
  (set! (.-globalAlpha ctx) 0.15)

  (dotimes [i 20]
    (let [seed (+ t (* i 0.1))
          scale (+ 100 (* 50 (Math/sin seed)))]
      (.beginPath ctx)
      (set! (.-strokeStyle ctx)
            (case (mod i 4)
              0 (:c1 cols)
              1 (:c2 cols)
              2 (:c3 cols)
              3 (:c4 cols)))

      (dotimes [j 100]
        (let [angle (+ (* j 0.1) seed)
              r (+ scale (* scale 0.5 (Math/cos (* angle 3))))
              x (+ (/ width 2) (* r (Math/cos angle)))
              y (+ (/ height 2) (* r (Math/sin angle)))]
          (if (zero? j)
            (.moveTo ctx x y)
            (.lineTo ctx x y))))
      (.closePath ctx)
      (.stroke ctx)))

  (set! (.-globalAlpha ctx) 0.05)
  (dotimes [i 5]
    (let [wave-t (+ t (* i 1.5))
          y-offset (+ (/ height 2) (* 200 (Math/sin wave-t)))]
      (set! (.-fillStyle ctx) (case (mod i 3) 0 (:c1 cols) 1 (:c2 cols) 2 (:c3 cols)))
      (.beginPath ctx)
      (.moveTo ctx 0 height)
      (doseq [x (range 0 width 20)]
        (let [y (+ y-offset (* 100 (Math/sin (+ wave-t (* x 0.005))))) ]
          (.lineTo ctx x y)))
      (.lineTo ctx width height)
      (.fill ctx))))

(defn background-canvas
  "Renders an animated background canvas."
  []
  (let [canvas-ref (r/atom nil)
        animation-id (r/atom nil)
        resize-observer (r/atom nil)
        dimensions (r/atom {:width 0 :height 0})
        colors (r/atom {:c1 "#8cd0d3" :c2 "#dfaf8f" :c3 "#9fc59f" :c4 "#cc9393"})]

    (r/create-class
     {:display-name "background-canvas"

      :component-did-mount
      (fn [this]
        (when-let [canvas @canvas-ref]
          (let [ctx (.getContext canvas "2d")
                update-size (fn []
                              (let [w js/window.innerWidth
                                    h js/window.innerHeight]
                                (reset! dimensions {:width w :height h})
                                (set! (.-width canvas) w)
                                (set! (.-height canvas) h)))
                observer (js/ResizeObserver. (fn [_] (update-size)))]

            (.observe observer js/document.body)
            (reset! resize-observer observer)
            (update-size)
            (update-background-colors colors)

            (let [start-time (js/Date.now)
                  loop-fn (fn loop-fn []
                            (let [elapsed (- (js/Date.now) start-time)
                                  {:keys [width height]} @dimensions
                                  t (* elapsed 0.0002)
                                  cols @colors]
                              (when (and (> width 0) (> height 0))
                                (draw-background-pattern ctx width height t cols))
                              (reset! animation-id (js/requestAnimationFrame loop-fn))))]
              (loop-fn)))))

      :component-will-unmount
      (fn []
        (when-let [id @animation-id]
          (js/cancelAnimationFrame id))
        (when-let [obs @resize-observer]
          (.disconnect obs)))

      :reagent-render
      (fn []
        [:canvas {:ref #(reset! canvas-ref %) :class "fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"}])})))
