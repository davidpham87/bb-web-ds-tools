(ns bb-web-ds-tools.components.layout
  (:require [bb-web-ds-tools.theme :as t]
            [reagent.core :as r]
            [re-frame.core :as rf]))

(defn page-container
  "Renders the top-level page container.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "h-screen w-full flex overflow-hidden " t/bg-page " " t/text-primary " " (:class props))}
                     (dissoc props :class))]
        children))

(defn container
  "Renders a centered container.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "container mx-auto px-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn section
  "Renders a section element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:section (merge {:class (str "py-16 " (:class props))}
                         (dissoc props :class))]
        children))

(defn grid
  "Renders a grid container.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "grid gap-8 " (:class props))}
                     (dissoc props :class))]
        children))

(defn flex-row
  "Renders a flex row container.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "flex items-center " (:class props))}
                     (dissoc props :class))]
        children))

(defn flex-col
  "Renders a flex column container.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "flex flex-col " (:class props))}
                     (dissoc props :class))]
        children))

(defn header
  "Renders a header element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:header (merge {:class (str "mb-6 " (:class props))}
                        (dissoc props :class))]
        children))

(defn main
  "Renders a main element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:main (merge {:class (str "flex-grow flex flex-col overflow-hidden relative " (:class props))}
                      (dissoc props :class))]
        children))

(defn row
  "Renders a bootstrap-like row.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "flex flex-wrap -mx-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn col
  "Renders a bootstrap-like column.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str "px-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn split-view
  "Renders a split view layout (left/right).

  Args:
    props (map): Props. Keys:
      - :ratio (keyword): Split ratio (:1-1, :2-1, :1-2, :1-3).
    left (element): Left content.
    right (element): Right content.

  Returns:
    vector: A hiccup vector."
  [{:keys [ratio] :or {ratio :2-1} :as props} left right]
  (let [left-width (case ratio
                     :1-1 "w-full"
                     :2-1 "w-full md:w-2/3"
                     :1-2 "w-full md:w-1/3"
                     :1-3 "w-full md:w-1/4"
                     "w-full md:w-1/3")
        right-width (case ratio
                      :1-1 "w-full md:w-1/2"
                      :2-1 "w-full md:w-1/3"
                      :1-2 "w-full md:w-2/3"
                      :1-3 "w-full md:w-3/4"
                      "w-full md:w-2/3")]
    [:div {:class "flex flex-col md:flex-row h-full w-full overflow-hidden"}
     [:div {:class (str "h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] " left-width)}
      left]
     [:div {:class (str "h-1/2 md:h-full overflow-auto " right-width)}
      right]]))

(defn create-panel
  "Creates a React component that dispatches an initialization event on mount.

  Args:
    props (map): Properties. Keys:
      - :display-name (string): Component name for debugging.
      - :init-event (vector): Re-frame event vector to dispatch on mount.
      - :render-fn (fn): Render function returning hiccup.

  Returns:
    React component."
  [{:keys [display-name init-event render-fn]}]
  (r/create-class
   {:display-name (or display-name "panel")
    :component-did-mount (when init-event #(rf/dispatch init-event))
    :reagent-render render-fn}))
