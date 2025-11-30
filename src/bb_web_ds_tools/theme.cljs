(ns bb-web-ds-tools.theme)

(def zenburn
  {:text        "#dcdccc"
   :background  "#383838"
   :background2 "#303030"
   :boolean     "#bfebbf"
   :string      "#cc9393"
   :keyword     "#afd8af"
   :namespace   "#5c888b"
   :tag         "#f0dfaf"
   :symbol      "#dcdccc"
   :number      "#8cd0d3"
   :uri         "#dfaf8f"
   :border      "#4f4f4f"
   :package     "#8cd0d3"
   :exception   "#cc9393"
   :diff-add    "#9fc59f"
   :diff-remove "#cc9393"})

(def colors
  {:bg-page (:background zenburn)
   :bg-sidebar (:background2 zenburn)
   :bg-card (:border zenburn)
   :bg-input (:background2 zenburn)
   :bg-toolbar (:background2 zenburn)
   :bg-table-head (:background zenburn)
   :bg-table-body (:background2 zenburn)
   :bg-table-row-hover (:background zenburn)
   :bg-item-hover (:border zenburn)

   :bg-button (:border zenburn)
   :bg-button-hover "#6f6f6f"
   :bg-button-primary (:diff-add zenburn)
   :bg-button-primary-hover (:keyword zenburn)
   :bg-button-danger (:exception zenburn)
   :bg-button-danger-hover "#bc8383"
   :bg-button-xs (:border zenburn)
   :bg-button-xs-hover "#5f5f5f"
   :bg-button-disabled (:background zenburn)

   :text-primary (:text zenburn)
   :text-secondary (:namespace zenburn)
   :text-accent (:tag zenburn)
   :text-code (:number zenburn)
   :text-muted "#7f7f7f"
   :text-danger (:exception zenburn)
   :text-disabled "#7f7f7f"
   :text-button (:text zenburn)
   :text-button-primary (:background2 zenburn)

   :border-main (:background zenburn)
   :border-subtle (:border zenburn)
   :border-default "#5f5f5f"
   :border-hover "#7f7f7f"
   :border-focus (:number zenburn)
   :border-focus-accent (:tag zenburn)

   :ring-focus (:number zenburn)})

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
