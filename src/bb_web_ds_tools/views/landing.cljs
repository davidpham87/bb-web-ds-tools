(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [bb-web-ds-tools.components.landing :as landing]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.utils.themes :as themes]))

(def github-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}]])

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

(def flow-steps
  [{:draw-fn landing/draw-fast-io
    :title "Zero I/O Friction"
    :desc "Stop wrestling with file paths. Just paste your data and go."}
   {:draw-fn landing/draw-instant-charts
    :title "Instant Visuals"
    :desc "Charts that look handwritten, generated in milliseconds."}
   {:draw-fn landing/draw-multi-runtime
    :title "Multi-Runtime"
    :desc "Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."}])

(defn- get-scroll-parent
  "Traverses up the DOM tree to find the first scrollable ancestor."
  [node]
  (if (or (nil? node) (identical? node js/document.body))
    js/window
    (let [style (js/getComputedStyle node)
          overflow-y (.getPropertyValue style "overflow-y")]
      (if (or (= overflow-y "auto") (= overflow-y "scroll"))
        node
        (recur (.-parentNode node))))))

(defn scroll-flow-section
  "A section that scrolls through the flow-steps using sticky positioning."
  []
  (let [container-ref (r/atom nil)
        active-step (r/atom 0)
        listener-ref (r/atom nil)]
    (r/create-class
     {:display-name "scroll-flow-section"
      :component-did-mount
      (fn [this]
        ;; Use @container-ref instead of (rdom/dom-node this)
        ;; as the ref is attached to the root div of this component.
        (when-let [el @container-ref]
          (let [parent (get-scroll-parent el)
                handle-scroll
                (fn []
                  (when-let [el @container-ref]
                    (let [rect (.getBoundingClientRect el)
                          parent-rect (if (= parent js/window)
                                        {:top 0}
                                        (.getBoundingClientRect parent))
                          parent-height (if (= parent js/window)
                                          js/window.innerHeight
                                          (.-clientHeight parent))
                          top (- (.-top rect) (:top parent-rect))
                          height (.-height rect)
                          ;; Calculate scroll progress (0.0 to 1.0) through the container
                          ;; When top is 0, progress is 0.
                          ;; When bottom is at window bottom, progress is 1.
                          scroll-dist (- height parent-height)
                          raw-progress (if (zero? scroll-dist) 0 (/ (- top) scroll-dist))
                          progress (max 0 (min 1 raw-progress))
                          step-count (count flow-steps)
                          current (Math/floor (* progress step-count))]
                      (reset! active-step (min (dec step-count) current)))))]
            (reset! listener-ref {:parent parent :handler handle-scroll})
            (.addEventListener parent "scroll" handle-scroll)
            (handle-scroll)))) ;; Initial check

      :component-will-unmount
      (fn []
        (when-let [{:keys [parent handler]} @listener-ref]
          (.removeEventListener parent "scroll" handler)))

      :reagent-render
      (fn []
        ;; The container needs to be tall to allow scrolling
        [:div {:ref #(reset! container-ref %) :class "relative h-[300vh] w-full"}
         [:div {:class "sticky top-0 h-screen flex items-center justify-center overflow-hidden"}
          (doall
           (map-indexed
            (fn [idx {:keys [draw-fn title desc]}]
              (let [active? (= idx @active-step)]
                ^{:key title}
                [:div {:class (str "absolute transition-all duration-700 ease-in-out transform flex flex-col items-center max-w-xl p-8 rounded-xl "
                                   t/bg-card " border " t/border-subtle " shadow-2xl "
                                   (if active? "opacity-100 translate-y-0 scale-100" "opacity-0 translate-y-10 scale-95"))}
                 [landing/animated-icon {:draw-fn draw-fn :class "w-32 h-32 mb-6 mx-auto"}]
                 [:h3 {:class (str "text-4xl font-bold mb-4 " t/text-primary " text-center")} title]
                 [:p {:class (str "text-xl " t/text-muted " text-center leading-relaxed")} desc]

                 ;; Step indicator
                 [:div {:class "flex gap-2 mt-8"}
                  (for [i (range (count flow-steps))]
                    ^{:key i}
                    [:div {:class (str "w-3 h-3 rounded-full transition-colors duration-300 "
                                       (if (= i idx) t/text-accent (str t/bg-sidebar " opacity-50"))
                                       " bg-current")}
                     ])]])))
           flow-steps)]])})))

(defn landing-page
  "Renders the landing page with animated feature cards.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "min-h-full flex flex-col items-center relative font-['Source_Code_Pro']"}
   [:style
    "@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
     .animate-float { animation: float 6s ease-in-out infinite; }
     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }
     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"]
   ;; Background
   [background-canvas]

   [:div {:class "max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8 pb-0"}

    ;; Intro Section
    [:div {:class "text-center mb-8 space-y-8 animate-fade-in-up"}
     [:h1 {:class (str "text-6xl md:text-8xl font-extrabold mb-4 " t/text-accent " tracking-tight drop-shadow-lg")}
      "The \"Swiss Army Knife\" of Data Science"]

     [:p {:class (str "text-2xl md:text-3xl " t/text-secondary " max-w-4xl mx-auto leading-relaxed font-light")}
      "Decrease I/O friction. Copy paste data like a pro. Visualize without tears."]

     [:p {:class (str "mt-8 text-xl " t/text-secondary " max-w-3xl mx-auto italic opacity-80")}]]]

   ;; Scroll Flow Section
   [scroll-flow-section]])
