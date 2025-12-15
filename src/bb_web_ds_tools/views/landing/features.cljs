(ns bb-web-ds-tools.views.landing.features
  "Namespace: bb-web-ds-tools.views.landing.features

  Key functions:
  - (features-carousel [])
  - flow-steps

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [bb-web-ds-tools.components.landing :as landing]
            [bb-web-ds-tools.components.landing.animations :as animations]
            [bb-web-ds-tools.theme :as t]))

(def flow-steps
  [{:draw-fn animations/draw-fast-io
    :title "Zero I/O Friction"
    :desc "Stop wrestling with file paths. Just paste your data and go."}
   {:draw-fn animations/draw-instant-charts
    :title "Instant Visuals"
    :desc "Charts that look handwritten, generated in milliseconds."}
   {:draw-fn animations/draw-multi-runtime
    :title "Multi-Runtime"
    :desc "Clojure, Python, R. Run them all. Simultaneously. Chaos awaits. We
    wanted to add JavaScript, but we did not have 10 days."}])

(defn features-carousel
  "Renders features as full-screen scroll-snap sections."
  []
  [:<>
   (map-indexed
    (fn [idx {:keys [draw-fn title desc]}]
      ^{:key title}
      [:section {:class (str "min-h-screen snap-start flex flex-col items-center justify-center p-8 z-10 relative "
                             (if (even? idx) "text-left" "text-right"))}
       [:div {:class "max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12"}
        ;; Icon/Visual
        [:div {:class (str "w-full md:w-1/2 flex justify-center " (when (odd? idx) "md:order-last"))}
         [:div {:class (str "relative p-8 rounded-3xl " t/bg-card " border " t/border-subtle " shadow-2xl transform hover:scale-105 transition-transform duration-500")}
          [landing/animated-icon {:draw-fn draw-fn :class "w-64 h-64 mx-auto"}]]]

        ;; Text
        [:div {:class "w-full md:w-1/2 space-y-6"}
         [:h3 {:class (str "text-4xl md:text-5xl font-bold " t/text-primary " leading-tight")} title]
         [:p {:class (str "text-xl md:text-2xl " t/text-muted " leading-relaxed")} desc]]]])
    flow-steps)])
