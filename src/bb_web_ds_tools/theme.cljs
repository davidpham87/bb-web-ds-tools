(ns bb-web-ds-tools.theme)

(def colors
  {:bg-page "#3f3f3f"
   :bg-sidebar "#2f2f2f"
   :bg-card "#4f4f4f"
   :bg-input "#2f2f2f"
   :bg-toolbar "#2f2f2f"
   :bg-table-head "#3f3f3f"
   :bg-table-body "#2f2f2f"
   :bg-table-row-hover "#3f3f3f"
   :bg-item-hover "#4f4f4f"

   :bg-button "#5f5f5f"
   :bg-button-hover "#6f6f6f"
   :bg-button-primary "#7f9f7f"
   :bg-button-primary-hover "#8fb28f"
   :bg-button-danger "#cc9393"
   :bg-button-danger-hover "#bc8383"
   :bg-button-xs "#4f4f4f"
   :bg-button-xs-hover "#5f5f5f"
   :bg-button-disabled "#3f3f3f"

   :text-primary "#dcdccc"
   :text-secondary "#9f9f9f"
   :text-accent "#f0dfaf"
   :text-code "#93e0e3"
   :text-muted "#7f7f7f"
   :text-danger "#cc9393"
   :text-disabled "#7f7f7f"
   :text-button "#dcdccc"
   :text-button-primary "#3f3f3f"

   :border-main "#3f3f3f"
   :border-subtle "#4f4f4f"
   :border-default "#5f5f5f"
   :border-hover "#7f7f7f"
   :border-focus "#8cd0d3"
   :border-focus-accent "#f0dfaf"

   :ring-focus "#8cd0d3"})

(defn color [k] (get colors k))

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
