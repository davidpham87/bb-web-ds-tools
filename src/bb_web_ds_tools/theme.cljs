(ns bb-web-ds-tools.theme
  (:require [bb-web-ds-tools.utils.themes :as themes]))

(def colors
  {:bg-page "var(--bg-page)"
   :bg-sidebar "var(--bg-sidebar)"
   :bg-card "var(--bg-card)"
   :bg-input "var(--bg-input)"
   :bg-toolbar "var(--bg-toolbar)"
   :bg-table-head "var(--bg-table-head)"
   :bg-table-body "var(--bg-table-body)"
   :bg-table-row-hover "var(--bg-table-row-hover)"
   :bg-item-hover "var(--bg-item-hover)"

   :bg-button "var(--bg-button)"
   :bg-button-hover "var(--bg-button-hover)"
   :bg-button-primary "var(--bg-button-primary)"
   :bg-button-primary-hover "var(--bg-button-primary-hover)"
   :bg-button-danger "var(--bg-button-danger)"
   :bg-button-danger-hover "var(--bg-button-danger-hover)"
   :bg-button-xs "var(--bg-button-xs)"
   :bg-button-xs-hover "var(--bg-button-xs-hover)"
   :bg-button-disabled "var(--bg-button-disabled)"

   :text-primary "var(--text-primary)"
   :text-secondary "var(--text-secondary)"
   :text-accent "var(--text-accent)"
   :text-code "var(--text-code)"
   :text-muted "var(--text-muted)"
   :text-danger "var(--text-danger)"
   :text-disabled "var(--text-disabled)"
   :text-button "var(--text-button)"
   :text-button-primary "var(--text-button-primary)"

   :border-main "var(--border-main)"
   :border-subtle "var(--border-subtle)"
   :border-default "var(--border-default)"
   :border-hover "var(--border-hover)"
   :border-focus "var(--border-focus)"
   :border-focus-accent "var(--border-focus-accent)"

   :ring-focus "var(--ring-focus)"})

(def mapping
  "Maps App semantic keys to Portal theme keys."
  {:bg-page :portal.colors/background
   :bg-sidebar :portal.colors/background2
   :bg-card :portal.colors/border
   :bg-input :portal.colors/background2
   :bg-toolbar :portal.colors/background2
   :bg-table-head :portal.colors/background
   :bg-table-body :portal.colors/background2
   :bg-table-row-hover :portal.colors/background
   :bg-item-hover :portal.colors/border

   :bg-button :portal.colors/border
   :bg-button-hover :portal.colors/namespace
   :bg-button-primary :portal.colors/diff-add
   :bg-button-primary-hover :portal.colors/boolean
   :bg-button-danger :portal.colors/exception
   :bg-button-danger-hover :portal.colors/uri
   :bg-button-xs :portal.colors/border
   :bg-button-xs-hover :portal.colors/namespace
   :bg-button-disabled :portal.colors/background2

   :text-primary :portal.colors/text
   :text-secondary :portal.colors/uri
   :text-accent :portal.colors/tag
   :text-code :portal.colors/number
   :text-muted :portal.colors/namespace
   :text-danger :portal.colors/exception
   :text-disabled :portal.colors/border
   :text-button :portal.colors/text
   :text-button-primary :portal.colors/background

   :border-main :portal.colors/border
   :border-subtle :portal.colors/border
   :border-default :portal.colors/border
   :border-hover :portal.colors/number
   :border-focus :portal.colors/number
   :border-focus-accent :portal.colors/tag

   :ring-focus :portal.colors/number})

(defn color
  "Retrieves the CSS variable for a given semantic key."
  [k] (get colors k))

;; Backgrounds
(def bg-page (str "bg-[" (:bg-page colors) "]"))
(def bg-sidebar (str "bg-[" (:bg-sidebar colors) "]"))
(def bg-card (str "bg-[" (:bg-card colors) "]"))
(def bg-input (str "bg-[" (:bg-input colors) "]"))
(def bg-toolbar (str "bg-[" (:bg-toolbar colors) "]"))
(def bg-table-head (str "bg-[" (:bg-table-head colors) "]"))
(def bg-table-body (str "bg-[" (:bg-table-body colors) "]"))
(def bg-table-row-hover (str "hover:bg-[" (:bg-table-row-hover colors) "]"))
(def bg-item-hover (str "hover:bg-[" (:bg-item-hover colors) "]"))

;; Buttons
(def bg-button (str "bg-[" (:bg-button colors) "]"))
(def bg-button-hover (str "hover:bg-[" (:bg-button-hover colors) "]"))
(def bg-button-primary (str "bg-[" (:bg-button-primary colors) "]"))
(def bg-button-primary-hover (str "hover:bg-[" (:bg-button-primary-hover colors) "]"))
(def bg-button-danger (str "bg-[" (:bg-button-danger colors) "]"))
(def bg-button-danger-hover (str "hover:bg-[" (:bg-button-danger-hover colors) "]"))
(def bg-button-xs (str "bg-[" (:bg-button-xs colors) "]"))
(def bg-button-xs-hover (str "hover:bg-[" (:bg-button-xs-hover colors) "]"))
(def bg-button-disabled (str "disabled:bg-[" (:bg-button-disabled colors) "]"))

;; Text
(def text-primary (str "text-[" (:text-primary colors) "]"))
(def text-secondary (str "text-[" (:text-secondary colors) "]"))
(def text-accent (str "text-[" (:text-accent colors) "]"))
(def text-code (str "text-[" (:text-code colors) "]"))
(def text-muted (str "text-[" (:text-muted colors) "]"))
(def text-danger (str "text-[" (:text-danger colors) "]"))
(def text-disabled (str "disabled:text-[" (:text-disabled colors) "]"))
(def text-button (str "text-[" (:text-button colors) "]"))
(def text-button-primary (str "!text-[" (:text-button-primary colors) "]"))

;; Borders
(def border-main (str "border-[" (:border-main colors) "]"))
(def border-subtle (str "border-[" (:border-subtle colors) "]"))
(def border-default (str "border-[" (:border-default colors) "]"))
(def border-hover (str "hover:border-[" (:border-hover colors) "]"))
(def border-focus (str "focus:border-[" (:border-focus colors) "]"))
(def border-focus-accent (str "focus:border-[" (:border-focus-accent colors) "]"))

;; Rings/Focus
(def ring-focus (str "focus:ring-[" (:ring-focus colors) "]"))
(def outline-none "focus:outline-none")

(defn resolve-theme-colors
  "Given a theme map (from portal.colors), returns a map of CSS variable names (without var()) to values."
  [theme]
  (reduce-kv
   (fn [acc app-key portal-key]
     (if-let [val (get theme portal-key)]
       (assoc acc (subs (get colors app-key) 4 (dec (count (get colors app-key)))) val) ;; Extract --var-name from var(--var-name)
       acc))
   {}
   mapping))
