(ns bb-web-ds-tools.components.landing.animations.workspaces
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear-rect zenburn)]))

(defn- calculate-angle [t open-phase]
  (if open-phase
    (* Math/PI 0.1 (Math/sin (* t 0.003)))
    0))

(defn- draw-folder-back [ctx]
  (set! (.-fillStyle ctx) (:portal.colors/string zenburn))
  (.beginPath ctx)
  (.moveTo ctx -40 -30)
  (.lineTo ctx 40 -30)
  (.lineTo ctx 40 30)
  (.lineTo ctx -40 30)
  (.fill ctx))

(defn- draw-folder-flap [ctx angle]
  (set! (.-fillStyle ctx) (:portal.colors/tag zenburn))
  (.beginPath ctx)
  (.moveTo ctx -40 30)
  (.lineTo ctx 40 30)
  (.lineTo ctx (+ 40 (* (Math/sin angle) 10)) (+ -30 (* (Math/cos angle) -10)))
  (.lineTo ctx (+ -40 (* (Math/sin angle) 10)) (+ -30 (* (Math/cos angle) -10)))
  (.fill ctx))

(defn draw-workspaces [ctx w h t]
  (clear-rect ctx w h)
  (let [cycle (mod t 4000)
        open-phase (< cycle 2000)
        angle (calculate-angle t open-phase)
        cx (/ w 2)
        cy (/ h 2)]
    (set! (.-strokeStyle ctx) (:portal.colors/string zenburn))
    (set! (.-lineWidth ctx) 3)

    (.save ctx)
    (.translate ctx cx cy)

    (draw-folder-back ctx)
    (draw-folder-flap ctx angle)

    (.restore ctx)))
