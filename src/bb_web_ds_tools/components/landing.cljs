(ns bb-web-ds-tools.components.landing
  (:require [reagent.core :as r]
            [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]))

(defn- setup-canvas [canvas width height]
  (let [ctx (.getContext canvas "2d")
        dpr (or js/window.devicePixelRatio 1)]
    (set! (.-width canvas) (* width dpr))
    (set! (.-height canvas) (* height dpr))
    (.scale ctx dpr dpr)
    ctx))

(defn canvas-card
  "A card with a canvas animation header.

  Args:
    props (map):
      - :label (string): Title.
      - :description (string): Description text.
      - :route (keyword): Navigation route.
      - :draw-fn (fn [ctx width height timestamp]): Animation function.
  "
  [{:keys [label description route draw-fn]}]
  (let [canvas-ref (r/atom nil)
        animation-id (r/atom nil)
        resize-observer (r/atom nil)
        dimensions (r/atom {:width 0 :height 0})]
    (r/create-class
      {:display-name (str "canvas-card-" label)

       :component-did-mount
       (fn [this]
         (when-let [canvas @canvas-ref]
           (let [ctx (.getContext canvas "2d")
                 update-size (fn []
                               (let [w (.-offsetWidth canvas)
                                     h (.-offsetHeight canvas)]
                                 (reset! dimensions {:width w :height h})
                                 (setup-canvas canvas w h)))
                 observer (js/ResizeObserver. (fn [_] (update-size)))]

             (.observe observer canvas)
             (reset! resize-observer observer)
             (update-size)

             (let [start-time (js/Date.now)
                   loop-fn (fn loop-fn []
                             (let [elapsed (- (js/Date.now) start-time)
                                   {:keys [width height]} @dimensions]
                               (when (and (> width 0) (> height 0))
                                 (draw-fn ctx width height elapsed))
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
         [:div {:class (str "flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border " t/border-subtle " " t/border-hover " " t/bg-card)
                :on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate route nil nil])}
          [:div {:class (str "relative h-40 w-full " t/bg-sidebar " border-b " t/border-main)}
           [:canvas {:ref #(reset! canvas-ref %)
                     :class "w-full h-full block"}]]
          [:div {:class "p-5 flex flex-col flex-grow"}
           [:h3 {:class (str "text-lg font-bold mb-2 " t/text-accent)} label]
           [:p {:class (str "text-sm leading-relaxed " t/text-primary " opacity-90")} description]]])})))

;; --- Animation Helpers ---

(defn clear [ctx w h]
  (set! (.-fillStyle ctx) (:bg-sidebar t/colors))
  (.fillRect ctx 0 0 w h))

(def colors t/colors)
(def zenburn t/zenburn)

;; --- Animations ---

(defn draw-workspaces [ctx w h t]
  (clear ctx w h)
  (let [cycle (mod t 4000)
        open-phase (< cycle 2000)
        angle (if open-phase
                 (* Math/PI 0.1 (Math/sin (* t 0.003)))
                 0)
        cx (/ w 2)
        cy (/ h 2)]
    (set! (.-strokeStyle ctx) (::t/string zenburn))
    (set! (.-lineWidth ctx) 3)
    (set! (.-fillStyle ctx) (::t/string zenburn))

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
    (set! (.-fillStyle ctx) (::t/tag zenburn))
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
    (set! (.-fillStyle ctx) (::t/number zenburn))
    ;; Cylinder / DB icon
    (.beginPath ctx)
    (.ellipse ctx cx (- cy 20) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    (.beginPath ctx)
    (.rect ctx (- cx 40) (- cy 20) 80 50)
    (.fill ctx)

    (set! (.-fillStyle ctx) (::t/background zenburn))
    (.beginPath ctx)
    (.ellipse ctx cx (+ cy 30) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    (set! (.-fillStyle ctx) (::t/number zenburn))
    (.beginPath ctx)
    (.ellipse ctx cx (+ cy 25) 40 15 0 0 (* Math/PI 2))
    (.fill ctx)

    ;; Pulsing data particles
    (set! (.-fillStyle ctx) (::t/keyword zenburn))
    (dotimes [i 5]
      (let [offset (* i 1000)
            y-pos (+ -50 (mod (* (+ t offset) 0.05) 100))
            x-pos (+ cx (* 60 (Math/sin (* (+ t offset) 0.002))))]
        (when (and (> y-pos -50) (< y-pos 50))
          (.beginPath ctx)
          (.arc ctx x-pos (+ cy y-pos) 3 0 (* Math/PI 2))
          (.fill ctx))))))

(defn draw-code [ctx w h t]
  (clear ctx w h)
  (let [line-h 14
        start-x 40
        start-y 40
        chars-per-line 30
        total-lines 8
        typer-pos (mod (Math/floor (/ t 50)) (* chars-per-line total-lines))]

    (set! (.-font ctx) "12px monospace")
    (dotimes [i total-lines]
      (let [y (+ start-y (* i line-h))
            chars (min chars-per-line (max 0 (- typer-pos (* i chars-per-line))))]

        ;; Draw lines as rectangles representing code
        (when (> chars 0)
          (set! (.-fillStyle ctx) (if (even? i) (::t/keyword zenburn) (::t/string zenburn)))
          (.fillRect ctx start-x y (* chars 5) 8))))

    ;; Cursor
    (let [current-line (Math/floor (/ typer-pos chars-per-line))
          current-char (mod typer-pos chars-per-line)]
      (when (< current-line total-lines)
        (set! (.-fillStyle ctx) (::t/text zenburn))
        (.fillRect ctx (+ start-x (* current-char 5)) (+ start-y (* current-line line-h)) 2 12)))))

(defn draw-datasets [ctx w h t]
  (clear ctx w h)
  (let [cols 5
        bar-w 20
        gap 10
        total-w (+ (* cols bar-w) (* (dec cols) gap))
        start-x (- (/ w 2) (/ total-w 2))
        base-y (+ (/ h 2) 40)]

    (dotimes [i cols]
      (let [freq (+ 0.002 (* i 0.001))
            height (+ 30 (* 40 (Math/abs (Math/sin (* t freq)))))
            x (+ start-x (* i (+ bar-w gap)))
            y (- base-y height)]
        (set! (.-fillStyle ctx) (nth [(::t/diff-add zenburn) (::t/number zenburn) (::t/string zenburn) (::t/keyword zenburn) (::t/uri zenburn)] (mod i 5)))
        (.fillRect ctx x y bar-w height)))))

(defn draw-malli [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        radius 40]
    ;; Shield or Checkmark
    (set! (.-strokeStyle ctx) (::t/diff-add zenburn))
    (set! (.-lineWidth ctx) 5)
    (.beginPath ctx)
    (.arc ctx cx cy radius 0 (* Math/PI 2))
    (.stroke ctx)

    ;; Animated checkmark
    (let [progress (mod (* t 0.001) 2)
          p (min 1 progress)]
      (when (> p 0)
        (.beginPath ctx)
        (.moveTo ctx (- cx 20) cy)
        (.lineTo ctx (- cx 5) (+ cy 15))
        (when (> p 0.5)
           (.lineTo ctx (+ cx 25) (- cy 20)))
        (.stroke ctx)))
    (set! (.-font ctx) "20px sans-serif")
    (set! (.-fillStyle ctx) (::t/text zenburn))
    (set! (.-textAlign ctx) "center")
    (.fillText ctx "Valid" cx (+ cy 60))))

(defn draw-honeysql [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        orbit-r 60
        angle (* t 0.001)]
    (set! (.-font ctx) "bold 24px sans-serif")
    (set! (.-textAlign ctx) "center")
    (set! (.-textBaseline ctx) "middle")

    ;; Central pot
    (set! (.-fillStyle ctx) (::t/tag zenburn))
    (.fillText ctx "{}" cx cy)

    ;; Orbiting keywords
    (doseq [[i text color] [[0 "SELECT" (::t/keyword zenburn)]
                            [1 "FROM" (::t/string zenburn)]
                            [2 "WHERE" (::t/number zenburn)]]]
      (let [theta (+ angle (* i (/ (* Math/PI 2) 3)))
            x (+ cx (* orbit-r (Math/cos theta)))
            y (+ cy (* orbit-r (Math/sin theta)))]
        (set! (.-fillStyle ctx) color)
        (set! (.-font ctx) "14px sans-serif")
        (.fillText ctx text x y)))))

(defn draw-vega-lite [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)]
    (.beginPath ctx)
    (set! (.-strokeStyle ctx) (::t/number zenburn))
    (set! (.-lineWidth ctx) 3)
    (dotimes [i 100]
      (let [x (+ (- cx 100) (* i 2))
            y (+ cy (* 40 (Math/sin (+ (* i 0.1) (* t 0.005)))))]
        (if (zero? i)
          (.moveTo ctx x y)
          (.lineTo ctx x y))))
    (.stroke ctx)

    ;; Points
    (set! (.-fillStyle ctx) (::t/diff-remove zenburn))
    (dotimes [i 5]
      (let [offset (* i 20)
            x (+ (- cx 100) (* offset 2))
            y (+ cy (* 40 (Math/sin (+ (* offset 0.1) (* t 0.005)))))]
         (.beginPath ctx)
         (.arc ctx x y 4 0 (* Math/PI 2))
         (.fill ctx)))))

(defn draw-gemma [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        scale (+ 1 (* 0.1 (Math/sin (* t 0.005))))]
    (.save ctx)
    (.translate ctx cx cy)
    (.scale ctx scale scale)

    (set! (.-fillStyle ctx) (::t/diff-add zenburn))
    ;; Robot head shape
    (.fillRect ctx -30 -30 60 60)

    ;; Eyes
    (set! (.-fillStyle ctx) (:bg-sidebar t/colors))
    (.fillRect ctx -20 -10 15 10)
    (.fillRect ctx 5 -10 15 10)

    ;; Blinking eyes
    (let [blink (mod (* t 0.0005) 5)]
      (when (> blink 4.8)
        (set! (.-fillStyle ctx) (::t/diff-add zenburn))
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
                          (.lineTo ctx (* rad (Math/cos angle)) (* rad (Math/sin angle)))))
                      (.closePath ctx)
                      (.fill ctx)
                      ;; Hole
                      (set! (.-globalCompositeOperation ctx) "destination-out")
                      (.beginPath ctx)
                      (.arc ctx 0 0 hole-r 0 (* Math/PI 2))
                      (.fill ctx)
                      (set! (.-globalCompositeOperation ctx) "source-over"))
                    (.restore ctx))]
    (draw-gear cx cy 40 8 0.001 (::t/text zenburn))
    (draw-gear (+ cx 50) (+ cy 50) 25 6 -0.002 (::t/namespace zenburn))))

(defn draw-changelog [ctx w h t]
  (clear ctx w h)
  (let [cx (/ w 2)
        cy (/ h 2)
        scroll-y (mod (* t 0.05) 200)]
    (set! (.-fillStyle ctx) (::t/text zenburn))
    (set! (.-font ctx) "12px monospace")
    (set! (.-textAlign ctx) "left")

    (doseq [i (range 10)]
      (let [y (- (+ 200 (* i 20)) scroll-y)]
        (when (and (> y 0) (< y 200))
          (.fillText ctx (str "- Update " i " fixed stuff") 20 y))))))

(def feature-cards
  [{:label "Workspaces"
    :route :workspaces
    :description "Persist your mess. Save your scripts before you accidentally close the tab and cry."
    :draw-fn draw-workspaces}
   {:label "App DB"
    :route :app-db
    :description "Inspect the state of the universe. See the matrix code behind the curtain."
    :draw-fn draw-app-db}
   {:label "Code"
    :route :code
    :description "It's VS Code, but just the editor part. Includes Python, R, and Clojure support."
    :draw-fn draw-code}
   {:label "Datasets"
    :route :datasets
    :description "Import CSVs, TSVs, JSON. Edit in a grid. Pretend you're using Excel."
    :draw-fn draw-datasets}
   {:label "Malli"
    :route :malli
    :description "Schema Inference & Generation. A spellchecker for your data structures."
    :draw-fn draw-malli}
   {:label "HoneySQL"
    :route :honeysql
    :description "SQL for Clojurists. Because writing strings is for cavemen."
    :draw-fn draw-honeysql}
   {:label "Vega-Lite"
    :route :vega-lite
    :description "Charts on the fly. Paste data, write spec, boom. Interactive charts."
    :draw-fn draw-vega-lite}
   {:label "Gemma"
    :route :gemma
    :description "Your Private AI Buddy. Uses your local GPU. Fans will spin."
    :draw-fn draw-gemma}
   {:label "Settings"
    :route :settings
    :description "Tweak the knobs. Change the font size until you can read it."
    :draw-fn draw-settings}
   {:label "Changelog"
    :route :changelog
    :description "What's new? Probably some bugs we fixed and some new ones we added."
    :draw-fn draw-changelog}])
