(ns bb-web-ds-tools.components.landing
  "Component for landing."
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
      - :id (string): Unique identifier for the card.
  "
  [{:keys [label description route draw-fn id]}]
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
        [:div {:id id
               :class (str "flex flex-col h-auto w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer border " t/border-subtle " " t/border-hover " " t/bg-card)
               :on-click #(rf/dispatch [:bb-web-ds-tools.core/navigate route nil nil])}
         [:div {:class (str "relative w-full h-64 " t/bg-sidebar " border-b " t/border-main)}
          [:canvas {:ref #(reset! canvas-ref %)
                    :class "w-full h-full block"}]]
         [:div {:class "p-6 flex flex-col justify-center w-full"}
          [:h3 {:class (str "text-2xl font-bold mb-4 " t/text-accent)} label]
          [:p {:class (str "text-base leading-relaxed " t/text-primary " opacity-90")} description]]])})))

(defn animated-icon
  [{:keys [draw-fn class]}]
  (let [canvas-ref (r/atom nil)
        animation-id (r/atom nil)
        resize-observer (r/atom nil)
        dimensions (r/atom {:width 0 :height 0})]
    (r/create-class
     {:display-name "animated-icon"

      :component-did-mount
      (fn [this]
        (when-let [canvas @canvas-ref]
          (let [ctx (.getContext canvas "2d")
                dpr (or js/window.devicePixelRatio 1)
                update-size (fn []
                              (let [w (.-offsetWidth canvas)
                                    h (.-offsetHeight canvas)]
                                (reset! dimensions {:width w :height h})
                                (set! (.-width canvas) (* w dpr))
                                (set! (.-height canvas) (* h dpr))
                                (.scale ctx dpr dpr)))
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
        [:canvas {:ref #(reset! canvas-ref %)
                  :class (or class "w-16 h-16 mb-4")}])})))
