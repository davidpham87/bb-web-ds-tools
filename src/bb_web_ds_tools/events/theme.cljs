(ns bb-web-ds-tools.events.theme
  "Re-frame event handlers for theme.

  Key functionality:
  - (get-base-theme [bg-color])"
  (:require [re-frame.core :as rf]
            [bb-web-ds-tools.utils.themes :as themes]
            [bb-web-ds-tools.theme :as t]
            ["monaco-editor/esm/vs/editor/editor.api.js" :as monaco]))

(rf/reg-event-fx
 ::set-theme
 (fn [{:keys [db]} [_ theme-name]]
   (let [theme (themes/get-theme theme-name)]
     {:db (assoc db ::current-theme theme-name)
      :theme/apply {:name (name theme-name)
                    :data theme
                    :css-vars (t/resolve-theme-colors theme)}})))

(rf/reg-sub
 ::current-theme
 (fn [db]
   (get db ::current-theme :zenburn)))

(defn- get-base-theme [bg-color]
  (let [r (js/parseInt (subs bg-color 1 3) 16)
        g (js/parseInt (subs bg-color 3 5) 16)
        b (js/parseInt (subs bg-color 5 7) 16)
        brightness (/ (+ (* r 299) (* g 587) (* b 114)) 1000)]
    (if (> brightness 128) "vs" "vs-dark")))

(rf/reg-fx
 :theme/apply
 (fn [{:keys [name data css-vars]}]
   ;; 1. Apply CSS variables to root
   (let [root (.-documentElement js/document)
         body (.-body js/document)]
     (doseq [[k v] css-vars]
       (.setProperty (.-style root) k v))

     ;; 2. Apply base styles to body to ensure coverage
     (.setProperty (.-style body) "background-color" "var(--bg-page)")
     (.setProperty (.-style body) "color" "var(--text-primary)"))

   ;; 3. Update Monaco Theme
   (try
     (monaco/editor.defineTheme
      name
      (clj->js {:base (get-base-theme (:portal.colors/background data))
                :inherit true
                :rules [{:background (:portal.colors/background data)
                         :foreground (:portal.colors/text data)}]
                :colors {:editor.background (:portal.colors/background data)
                         :editor.foreground (:portal.colors/text data)
                         :editorCursor.foreground (:portal.colors/namespace data) ;; approximation
                         :editor.lineHighlightBackground (:portal.colors/background2 data)
                         :editor.selectionBackground (:portal.colors/border data) ;; approximation
                         :editor.inactiveSelectionBackground (:portal.colors/background2 data)}}))
     (monaco/editor.setTheme name)
     (catch js/Error e
       (js/console.error "Failed to apply Monaco theme" e)))))
