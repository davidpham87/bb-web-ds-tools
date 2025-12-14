(ns bb-web-ds-tools.components.landing.animations.settings
  "Reagent component library for settings.

  Key functionality:
  - (draw-settings [ctx w h t])"
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear zenburn)]))

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
