(ns bb-web-ds-tools.components.landing.animations.gemma
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear zenburn)]))

(defn- draw-robot-head [ctx]
  (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
  ;; Robot head shape
  (.fillRect ctx -30 -30 60 60))

(defn- draw-eyes [ctx]
  (set! (.-fillStyle ctx) (:portal.colors/background2 zenburn))
  (.fillRect ctx -20 -10 15 10)
  (.fillRect ctx 5 -10 15 10))

(defn- draw-blinking [ctx t]
  (let [blink (mod (* t 0.0005) 5)]
    (when (> blink 4.8)
      (set! (.-fillStyle ctx) (:portal.colors/diff-add zenburn))
      (.fillRect ctx -20 -10 15 10)
      (.fillRect ctx 5 -10 15 10))))

(defn draw-gemma [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        scale (+ 1 (* 0.1 (Math/sin (* t 0.005))))]
    (.save ctx)
    (.translate ctx cx cy)
    (.scale ctx scale scale)

    (draw-robot-head ctx)
    (draw-eyes ctx)
    (draw-blinking ctx t)

    (.restore ctx)))
