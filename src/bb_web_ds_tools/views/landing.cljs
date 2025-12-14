(ns bb-web-ds-tools.views.landing
  "View component for landing.

  Key functionality:
  - (app-footer [])
  - (landing-page [])
  - github-icon
  - blog-icon
  - docs-icon"
  (:require [bb-web-ds-tools.views.landing.background :as background]
            [bb-web-ds-tools.views.landing.features :as features]
            [bb-web-ds-tools.views.landing.tour :as tour]
            [bb-web-ds-tools.theme :as t]))

(def github-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}]])

(def blog-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}] [:path {:d "M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"}]])

(def docs-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :class "w-5 h-5"}
   [:path {:d "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}] [:polyline {:points "14 2 14 8 20 8"}]])

(defn app-footer
  "Application footer with links."
  []
  [:footer {:class (str "w-full py-8 " t/bg-sidebar " border-t " t/border-subtle " z-10 snap-end")}
   [:div {:class "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4"}
    [:p {:class (str "text-sm " t/text-muted)} "© 2025 BB Web DS Tools. All rights reserved."]
    [:div {:class "flex items-center gap-6"}
     [:a {:href "/blog" :class (str "flex items-center gap-2 " t/text-secondary " hover:" t/text-primary " transition-colors")}
      blog-icon "Blog"]
     [:a {:href "/docs" :class (str "flex items-center gap-2 " t/text-secondary " hover:" t/text-primary " transition-colors")}
      docs-icon "Docs"]
     [:a {:href "https://github.com/davidpham87/bb-web-ds-tools" :target "_blank" :rel "noopener noreferrer" :class (str "flex items-center gap-2 " t/text-secondary " hover:" t/text-primary " transition-colors")}
      github-icon "GitHub"]]]])

(defn landing-page
  "Renders the landing page with full-screen scroll-snap sections."
  []
  [:div {:class "h-screen w-full overflow-y-scroll snap-y snap-mandatory relative font-['Source_Code_Pro'] scroll-smooth"}
   [:style
    "@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
     .animate-float { animation: float 6s ease-in-out infinite; }
     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }
     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"]
   ;; Background
   [background/background-canvas]

   ;; Intro Section
   [:section {:class "min-h-screen snap-start flex flex-col justify-center items-center z-10 relative p-8"}
    [:div {:class "text-center space-y-8 animate-fade-in-up max-w-5xl"}
     [:h1 {:class (str "text-6xl md:text-8xl font-extrabold mb-4 " t/text-accent " tracking-tight drop-shadow-lg")}
      "Swiss Army Knife of Data Science"]

     [:h3 {:class (str "text-2xl md:text-4xl font-extrabold mb-4 " t/text-accent " tracking-tight drop-shadow-lg")}
      "We looked at the separation of concerns and said, \"Nah.\""]

     [:p {:class (str "text-2xl md:text-3xl " t/text-secondary " max-w-4xl mx-auto leading-relaxed font-light")}
      "Decrease I/O friction. Copy paste data like a pro. Visualize without tears. Learn and have fun."]

     [:p {:class (str "mt-8 text-xl " t/text-secondary " max-w-3xl mx-auto italic opacity-80")}]]]

   ;; Features Sections
   [features/features-carousel]

   ;; Product Tour Section
   [:section {:class "min-h-screen snap-start flex flex-col justify-center items-center z-10 relative p-4"}
    [tour/product-tour]]

   ;; Footer
   [app-footer]])
