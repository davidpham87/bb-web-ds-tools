(ns bb-web-ds-tools.views.code
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.views.pyodide :as pyodide]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.views.editor :as editor]
            [bb-web-ds-tools.views.r-repl :as r-repl]))

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

(defn panel-render
  "Renders the content of the Code view, switching between sub-views based on the active tab.

  Returns:
    vector: A hiccup vector."
  []
  (let [active-tab @(rf/subscribe [::active-tab])
        tabs [{:id :clojure-repl :label "Clojure REPL"}
              {:id :pyodide :label "Python (Pyodide)"}
              {:id :r-repl :label "R (WebR)"}
              {:id :editor :label "Editor"}]]
    [l/flex-col {:class "h-full w-full"}
     ;; Tabs Navigation (Portaled to Top Bar)
     [nav/portal-to-top-bar
      [c/nav-tabs {:tabs tabs
                   :active-tab-id active-tab
                   :class "border-b-0 bg-transparent px-0"
                   :on-change #(rf/dispatch [::set-active-tab %])}]]

     [:div {:class "flex-grow overflow-hidden relative h-full"}
      (case active-tab
        :clojure-repl [repl/panel]
        :pyodide [pyodide/panel]
        :r-repl [r-repl/panel]
        :editor [editor/panel]
        [repl/panel])]]))

(defn panel
  "Main component for the Code view. Initializes state on mount.

  Returns:
    vector: A hiccup vector."
  []
  (r/create-class
   {:display-name "code-panel"
    :component-did-mount #(rf/dispatch [::initialize])
    :reagent-render panel-render}))
