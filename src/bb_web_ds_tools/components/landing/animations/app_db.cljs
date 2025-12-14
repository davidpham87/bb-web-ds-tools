(ns bb-web-ds-tools.components.landing.animations.app-db
  "Reagent component library for app-db.

  Key functionality:
  - (draw-app-db [ctx w h t])"
  (:require
   [bb-web-ds-tools.components.landing.animations.common
    :refer (clear-rect zenburn)]))


(defn draw-app-db [ctx w h t]
  (clear-rect ctx w h)
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
