(ns bb-web-ds-tools.theme)

(def colors
  {:bg-page "#383838"
   :bg-sidebar "#303030"
   :bg-card "#4f4f4f"
   :bg-input "#303030"
   :bg-toolbar "#303030"
   :bg-table-head "#383838"
   :bg-table-body "#303030"
   :bg-table-row-hover "#383838"
   :bg-item-hover "#4f4f4f"

   :bg-button "#4f4f4f"
   :bg-button-hover "#5c888b"
   :bg-button-primary "#9fc59f"
   :bg-button-primary-hover "#afd8af"
   :bg-button-danger "#cc9393"
   :bg-button-danger-hover "#dfaf8f"
   :bg-button-xs "#4f4f4f"
   :bg-button-xs-hover "#5c888b"
   :bg-button-disabled "#303030"

   :text-primary "#dcdccc"
   :text-secondary "#dfaf8f"
   :text-accent "#f0dfaf"
   :text-code "#8cd0d3"
   :text-muted "#5c888b"
   :text-danger "#cc9393"
   :text-disabled "#4f4f4f"
   :text-button "#dcdccc"
   :text-button-primary "#383838"

   :border-main "#4f4f4f"
   :border-subtle "#4f4f4f"
   :border-default "#4f4f4f"
   :border-hover "#8cd0d3"
   :border-focus "#8cd0d3"
   :border-focus-accent "#f0dfaf"

   :ring-focus "#8cd0d3"})

(defn color
  "Retrieves the hex color code for a given semantic key.

  Args:
    k (keyword): The semantic color key (e.g., :bg-page).

  Returns:
    string: The hex color code, or nil if not found."
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

(def zenburn
  {::text        "#ffffff"
   ::background  "#383838"
   ::background2 "#303030"
   ::boolean     "#bfebbf"
   ::string      "#ffcfcf"
   ::keyword     "#d0ffd0"
   ::namespace   "#8cd0d3"
   ::tag         "#fffacd"
   ::symbol      "#ffffff"
   ::number      "#bfefff"
   ::uri         "#ffe4b5"
   ::border      "#4f4f4f"
   ::package     "#bfefff"
   ::exception   "#ffcfcf"
   ::diff-add    "#9fc59f"
   ::diff-remove "#ffcfcf"
   ::comment     "#9faf9f"})
