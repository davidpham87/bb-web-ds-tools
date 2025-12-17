(ns bb-web-ds-tools.views.code
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.portal :as portal]
            [bb-web-ds-tools.views.pyodide :as pyodide]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.views.editor :as editor]
            [bb-web-ds-tools.views.r-repl :as r-repl]
            [bb-web-ds-tools.events.settings :as settings-events]))

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (if (::active-tab db)
     db
     (assoc db ::active-tab :clojure-repl))))

(rf/reg-event-db
 ::set-active-tab
 (fn [db [_ tab]]
   (assoc db ::active-tab tab)))

(rf/reg-sub
 ::active-tab
 (fn [db _]
   (get db ::active-tab :clojure-repl)))

(rf/reg-event-db
 ::set-mobile-view-mode
 (fn [db [_ mode]]
   (assoc db ::mobile-view-mode mode)))

(rf/reg-sub
 ::mobile-view-mode
 (fn [db _]
   (get db ::mobile-view-mode :editor)))

(defn mobile-view-toggle [mode set-mode-fn]
  [:div {:class "flex flex-row space-x-4 p-2 md:hidden justify-center bg-[#2d2d2d] border-b border-[#3f3f3f]"}
   [:label {:class "flex items-center space-x-2 cursor-pointer"}
    [:input {:type "radio"
             :name "mobile-view-mode"
             :checked (= mode :editor)
             :on-change #(set-mode-fn :editor)
             :class "form-radio text-blue-600"}]
    [:span "Editor"]]
   [:label {:class "flex items-center space-x-2 cursor-pointer"}
    [:input {:type "radio"
             :name "mobile-view-mode"
             :checked (= mode :portal)
             :on-change #(set-mode-fn :portal)
             :class "form-radio text-blue-600"}]
    [:span "Portal"]]])

(defn panel-render
  "Renders the content of the Code view, switching between sub-views based on the active tab.

  Returns:
    vector: A hiccup vector."
  []
  (let [active-tab @(rf/subscribe [::active-tab])
        editor-settings @(rf/subscribe [::settings-events/editor-settings])
        mobile-view-mode @(rf/subscribe [::mobile-view-mode])
        ;; Track if screen is at least medium (md breakpoint is 768px in Tailwind)
        is-md? (r/with-let [mql (js/window.matchMedia "(min-width: 768px)")
                            match (r/atom (.-matches mql))
                            handler (fn [e] (reset! match (.-matches e)))]
                 (.addEventListener mql "change" handler)
                 @match
                 (finally (.removeEventListener mql "change" handler)))
        tabs [{:id :clojure-repl :label "Clojure"}
              {:id :pyodide :label "Python"}
              {:id :r-repl :label "R"}
              {:id :editor :label "Editor"}]
        tabs-component [c/nav-tabs {:tabs tabs
                                    :active-tab-id active-tab
                                    :class "border-b-0 bg-transparent px-0 text-xs"
                                    :on-change #(rf/dispatch [::set-active-tab %])}]]
    [l/flex-col {:class "h-full w-full"}
     (when-not is-md?
       [mobile-view-toggle mobile-view-mode #(rf/dispatch [::set-mobile-view-mode %])])
     [:div {:class "flex flex-col md:flex-row h-full w-full overflow-hidden"}
      (when (or is-md? (= mobile-view-mode :editor))
        [:div {:class "h-full md:h-full overflow-auto border-r border-[#3f3f3f] flex-shrink-0"
               :style (when is-md?
                        {:width (:width editor-settings)})}
         (let [props {:header-content tabs-component}]
           (case active-tab
             :clojure-repl [repl/panel props]
             :pyodide [pyodide/panel props]
             :r-repl [r-repl/panel props]
             :editor [editor/panel props]
             [repl/panel props]))])
      (when (or is-md? (= mobile-view-mode :portal))
        [:div {:class "h-full md:h-full flex-grow overflow-hidden"}
         [portal/portal-frame]])]]))

(defn panel
  "Main component for the Code view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  [l/create-panel {:display-name "code-panel"
                   :init-event [::initialize]
                   :render-fn panel-render}])
