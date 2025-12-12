(ns bb-web-ds-tools.views.landing
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [bb-web-ds-tools.components.landing :as landing]
            [bb-web-ds-tools.theme :as t]
            [bb-web-ds-tools.utils.themes :as themes]))

(def github-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}]])

(defn background-canvas []
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
                update-colors (fn []
                                (let [style (js/getComputedStyle js/document.body)
                                      get-color (fn [k]
                                                  (let [v (.getPropertyValue style k)]
                                                    (if (empty? v) (get @colors k) (clojure.string/trim v))))]
                                  (reset! colors {:c1 (get-color "--text-accent")
                                                  :c2 (get-color "--text-secondary")
                                                  :c3 (get-color "--bg-button-primary")
                                                  :c4 (get-color "--text-danger")})))

                observer (js/ResizeObserver. (fn [_] (update-size)))]

            (.observe observer js/document.body)
            (reset! resize-observer observer)
            (update-size)
            (update-colors)

            (let [start-time (js/Date.now)
                  loop-fn (fn loop-fn []
                            (let [elapsed (- (js/Date.now) start-time)
                                  {:keys [width height]} @dimensions
                                  t (* elapsed 0.0002)
                                  cols @colors]
                              (when (and (> width 0) (> height 0))
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
        [:canvas {:ref #(reset! canvas-ref %)
                  :class "fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"}])})))

(defn landing-page
  "Renders the landing page with animated feature cards.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "min-h-full flex flex-col items-center relative overflow-hidden font-['Source_Code_Pro']"}
   [:style
    "@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
     .animate-float { animation: float 6s ease-in-out infinite; }
     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }
     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"]
   ;; Background
   [background-canvas]

   [:div {:class "max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8"}

    ;; Intro Section
    [:div {:class "text-center mb-16 space-y-8 animate-fade-in-up"}
     [:h1 {:class (str "text-6xl md:text-8xl font-extrabold mb-4 " t/text-accent " tracking-tight drop-shadow-lg")}
      "The \"Swiss Army Knife\" of Data Science"]

     [:p {:class (str "text-2xl md:text-3xl " t/text-secondary " max-w-4xl mx-auto leading-relaxed font-light")}
      "Decrease I/O friction. Copy paste data like a pro. Visualize without tears."]

     ;; Top cards: Smaller cards (max-w-4xl), larger gap (gap-10), animated
     [:div {:class "grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-12"}
      [:div {:class (str "p-6 rounded-lg " t/bg-card " border " t/border-subtle " shadow-md transform hover:scale-105 transition-transform duration-300 animate-float")}
       [:div {:class (str "text-5xl mb-4 " t/text-accent)} "⚡"]
       [:h3 {:class (str "text-xl font-bold mb-2 " t/text-primary)} "Zero I/O Friction"]
       [:p {:class (str "text-base " t/text-muted)} "Stop wrestling with file paths. Just paste your data and go."]]

      [:div {:class (str "p-6 rounded-lg " t/bg-card " border " t/border-subtle " shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-1")}
       [:div {:class (str "text-5xl mb-4 " t/text-accent)} "📊"]
       [:h3 {:class (str "text-xl font-bold mb-2 " t/text-primary)} "Instant Visuals"]
       [:p {:class (str "text-base " t/text-muted)} "Charts that look handwritten, generated in milliseconds."]]

      [:div {:class (str "p-6 rounded-lg " t/bg-card " border " t/border-subtle " shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-2")}
       [:div {:class (str "text-5xl mb-4 " t/text-accent)} "🛠️"]
       [:h3 {:class (str "text-xl font-bold mb-2 " t/text-primary)} "Multi-Runtime"]
       [:p {:class (str "text-base " t/text-muted)} "Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."]]]

     [:p {:class (str "mt-8 text-xl " t/text-secondary " max-w-3xl mx-auto italic opacity-80")}
      "\"It's like having a data science team in your pocket, but they don't ask for equity.\""]]

    ;; Features Grid (Bigger cards)
    [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-8"}
     (for [card landing/feature-cards]
       ^{:key (:route card)}
       [landing/canvas-card card])]]

   [:footer {:class (str "w-full py-8 mt-16 border-t " t/border-default " z-10 bg-opacity-80 backdrop-blur-sm " t/bg-page)}
    [:div {:class "flex justify-center items-center gap-8"}
     [:a {:href "wiki/"
          :class (str "text-lg flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      "Wiki"]
     [:a {:href "blog/"
          :class (str "text-lg flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      "Blog"]
     [:a {:href "https://github.com/davidpham87/bb-web-ds-tools"
          :target "_blank"
          :class (str "text-lg flex items-center gap-2 " t/text-secondary " hover:text-white transition-colors")}
      github-icon
      "View on GitHub"]]]])
