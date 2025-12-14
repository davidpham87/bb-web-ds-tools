(ns bb-web-ds-tools.components.landing.animations.changelog
  "Component for changelog."
  (:require
   [bb-web-ds-tools.components.landing.animations.common :refer (clear zenburn)]))

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
