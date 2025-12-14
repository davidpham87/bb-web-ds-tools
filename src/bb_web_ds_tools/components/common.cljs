(ns bb-web-ds-tools.components.common
  "Component for common."
  (:require [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]))

(defn- get-button-classes
  "Returns CSS classes for a button based on variant and disabled state."
  [variant disabled? size]
  (let [size-classes (case size
                       :xs (str "text-xs px-2 py-1 " t/bg-button-xs " " t/bg-button-xs-hover " " t/text-button " rounded transition-colors")
                       :sm "py-1 px-3 text-sm font-medium rounded shadow-sm transition-all duration-200"
                       ;; Default :md
                       "py-2 px-4 text-sm font-bold rounded shadow-sm transition-all duration-200")
        color-classes (if disabled?
                        (str t/bg-button-disabled " " t/text-disabled " cursor-not-allowed")
                        (case variant
                          :primary (str t/bg-button-primary " " t/bg-button-primary-hover " " t/text-button-primary)
                          :danger (str t/bg-button-danger " " t/bg-button-danger-hover " text-white")
                          ;; Default
                          (if (= size :xs)
                            "" ;; xs handles its own colors usually or uses defaults above
                            (str t/bg-button " " t/bg-button-hover " " t/text-button))))]
    (str size-classes " " color-classes)))

(defn button
  "Renders a styled button component.
   Unified component replacing button-sm, button-md, button-xs.

  Args:
    props (map): Standard HTML attributes.
      - :size (keyword): :sm, :xs, or :md (default).
      - :variant (keyword): :primary, :danger, or nil (default).
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (let [{:keys [variant disabled class size] :or {size :md}} props
        clean-props (dissoc props :variant :class :size)]
    (into [:button
           (merge clean-props
                  {:class (str (get-button-classes variant disabled size) " " class)})]
          children)))

(defn button-sm
  "DEPRECATED: Use (button {:size :sm} ...).
   Renders a small styled button component.
   Style: py-1 px-3 text-sm font-medium.

  Args:
    props (map): Standard HTML attributes.
      - :variant (keyword): :primary, :danger, or nil (default).
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [button (assoc props :size :sm)] children))

(defn button-md
  "DEPRECATED: Use (button {:size :md} ...).
   Renders a medium (standard) styled button component.
   Style: py-2 px-4 text-sm font-bold.

  Args:
    props (map): Standard HTML attributes.
      - :variant (keyword): :primary, :danger, or nil (default).
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [button (assoc props :size :md)] children))

(defn button-xs
  "DEPRECATED: Use (button {:size :xs} ...).
   Renders an extra small styled button component.
   Style: text-xs px-2 py-1.

  Args:
    props (map): Standard HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [button (assoc props :size :xs)] children))

(defn button-info
  "Renders an informational button (blue style).

  Args:
    props (map): Standard HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [button (merge props {:size :xs :class (str "!bg-blue-600 hover:!bg-blue-700 !text-white " (:class props))})]
        children))

(defn icon-button-link
  "Renders an icon button that acts as a link, opening in a new tab.

  Args:
    props (map): Props. Keys:
      - :href (string): The URL.
      - :icon (hiccup): The icon SVG.
      - :title (string): Tooltip.
      - :class (string): Extra classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [href icon title class]}]
  [:a {:href href
       :target "_blank"
       :rel "noopener noreferrer"
       :class (str "p-2 rounded hover:bg-white/10 transition-colors " t/text-secondary " hover:text-white flex items-center justify-center " class)
       :title title}
   icon])

(def help-icon
  [:svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-4 h-4"}
   [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}]])

(defn help-button
  "Renders a help button linking to a URL.

  Args:
    props (map): Props. Keys:
      - :href (string): The URL.
      - :title (string): Tooltip.
      - :class (string): Extra classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [href title class]}]
  [icon-button-link
   {:href href
    :title (or title "Help")
    :class (or class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2")
    :icon help-icon}])

(defn input
  "Renders a styled input element. Dispatches a re-frame event on change if provided.

  Args:
    props (map): Input attributes. Keys:
      - :value (any): Current value.
      - :on-change (fn): Callback function.
      - :on-change-event (vector): Re-frame event vector to dispatch on change (value appended).
      - :placeholder (string): Placeholder text.
      - :class (string): CSS classes.
      - :type (string): Input type (default 'text').
      - :checked (boolean): Checked state for checkboxes.

  Returns:
    vector: A hiccup vector."
  [{:keys [value on-change on-change-event placeholder class type checked] :as props}]
  (let [handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (let [new-val (if (= type "checkbox")
                                          (.. e -target -checked)
                                          (.. e -target -value))]
                            (rf/dispatch (conj on-change-event new-val)))))]
    [:input (merge {:class (str "w-full " t/bg-input " " t/text-primary " border " t/border-default " rounded px-2 py-1 " t/border-focus " " t/outline-none " " t/ring-focus " transition-colors " class)
                    :type (or type "text")
                    :value value
                    :checked checked
                    :on-change handle-change
                    :placeholder placeholder}
                   (dissoc props :class :value :on-change :on-change-event :placeholder :type :checked))]))

(defn select
  "Renders a styled select dropdown.

  Args:
    props (map): Select attributes. Keys:
      - :value (any): Selected value.
      - :on-change (fn): Callback function.
      - :on-change-event (vector): Re-frame event vector.
      - :class (string): CSS classes.
    children (rest): Option elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (let [{:keys [on-change on-change-event]} props
        handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (rf/dispatch (conj on-change-event (.. e -target -value)))))]
    (into [:select (merge {:class (str t/bg-input " " t/text-primary " p-2 rounded border " t/border-default " " (:class props))
                           :value (:value props)
                           :on-change handle-change}
                          (dissoc props :class :value :on-change :on-change-event))]
          children)))

(defn textarea
  "Renders a styled textarea element.

  Args:
    props (map): Textarea attributes.
      - :value (string): Content.
      - :on-change (fn): Callback.
      - :on-change-event (vector): Re-frame event.
      - :placeholder (string): Placeholder text.
      - :class (string): CSS classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [value on-change on-change-event placeholder class] :as props}]
  (let [handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (rf/dispatch (conj on-change-event (.. e -target -value)))))]
    [:textarea
     (merge {:class (str "w-full " t/bg-input " " t/text-primary " border " t/border-default " rounded p-4 font-mono text-sm " t/border-focus " " t/outline-none " focus:ring-1 " t/ring-focus " transition-colors " class)
             :value value
             :placeholder placeholder
             :on-change handle-change}
            (dissoc props :class :value :placeholder :on-change :on-change-event))]))

(defn pre-block
  "Renders a preformatted code block.

  Args:
    props (map): Props. Keys:
      - :content (string): The text content.
      - :class (string): CSS classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [content class]}]
  [:pre {:class (str "w-full " t/bg-input " " t/text-code " border " t/border-subtle " rounded p-4 font-mono text-sm overflow-auto scrollbar-thin " class)}
   content])

(defn card
  "Renders a card container component.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div (merge {:class (str t/bg-card " rounded shadow-md " t/text-primary " " (:class props))} (dissoc props :class))]
        children))

;; Table Components
(defn table-container
  "Renders a responsive container for a table.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:div {:class (str "overflow-x-auto " t/bg-table-body " rounded shadow-md border " t/border-subtle " " (:class props))}]
        children))

(defn table
  "Renders a styled table element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:table (merge {:class (str "min-w-full divide-y " t/border-subtle " " (:class props))}
                       (dissoc props :class))]
        children))

(defn thead
  "Renders a table head element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:thead (merge {:class (str t/bg-table-head " " (:class props))}
                       (dissoc props :class))]
        children))

(defn tbody
  "Renders a table body element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:tbody (merge {:class (str t/bg-table-body " divide-y " t/border-subtle " " (:class props))}
                       (dissoc props :class))]
        children))

(defn tr
  "Renders a table row element.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:tr (merge {:class (str t/bg-table-row-hover " transition-colors " (:class props))}
                    (dissoc props :class))]
        children))

(defn th
  "Renders a table header cell.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:th (merge {:class (str "px-3 py-2 text-left text-xs font-medium " t/text-accent " uppercase tracking-wider " (:class props))}
                    (dissoc props :class))]
        children))

(defn td
  "Renders a table data cell.

  Args:
    props (map): HTML attributes.
    children (rest): Child elements.

  Returns:
    vector: A hiccup vector."
  [props & children]
  (into [:td (merge {:class (str "px-3 py-1.5 whitespace-nowrap text-sm " t/text-primary " " (:class props))}
                    (dissoc props :class))]
        children))

(defn page-header
  "Renders a standard page header.

  Args:
    text (string): Header text.
    children (rest): Optional additional content (e.g., buttons) to place on the right.

  Returns:
    vector: A hiccup vector."
  [text & children]
  (into [:div {:class (str "flex items-center justify-between mb-6 pb-2 border-b " t/border-main)}
         [:h2 {:class (str "text-2xl font-bold " t/text-accent)} text]]
        children))

(defn section-header
  "Renders a standard section header.

  Args:
    text (string): Header text.
    children (rest): Optional additional content.

  Returns:
    vector: A hiccup vector."
  [text & children]
  (into [:div {:class "flex items-center justify-between mb-4"}
         [:h3 {:class (str "text-xl font-semibold " t/text-accent)} text]]
        children))

(defn label
  "Renders a label element.

  Args:
    text (string): The label text.

  Returns:
    vector: A hiccup vector."
  [text]
  [:label {:class (str "block text-sm font-medium " t/text-secondary " mb-2")} text])

(defn dustbin-icon
  "Renders a trash/delete icon SVG.

  Args:
    props (map, optional): SVG attributes.

  Returns:
    vector: A hiccup vector."
  [& [props]]
  [:svg (merge {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-4 h-4"} props)
   [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}]])

(def nav-items
  [#_{:label "Workspaces" :route :workspaces :icon "📂"}
   {:label "Datasets" :route :datasets :icon "📊"}
   {:label "Vega-Lite" :route :vega-lite :icon "📈"}
   {:label "Code" :route :code :icon "💻"}
   {:label "Malli" :route :malli :icon "✅"}
   {:label "HoneySQL" :route :honeysql :icon "🍯"}
   {:label "Gemma" :route :gemma :icon "🤖"}
   {:label "App DB" :route :app-db :icon "🗄️"}
   {:label "Settings" :route :settings :icon "⚙️"}
   {:label "Changelog" :route :changelog :icon "📜"}])

(defn tabs
  "Renders a horizontal scrollable tab bar.

  Args:
    props (map): Props. Keys:
      - :tabs (seq): List of maps with :id, :label, :on-close.
      - :active-tab-id (any): ID of active tab.
      - :on-change (fn): Callback(id) on tab switch.
      - :on-add (fn): Callback() on add button click.
      - :class (string): CSS classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [tabs active-tab-id on-change on-add class]}]
  [:div {:class (str "flex items-center space-x-2 border-b " t/border-default " " class)}
   [:div {:class "flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"}
    (for [{:keys [id label on-close]} tabs]
      ^{:key (str id)}
      [:div {:class (str "flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit "
                         (if (= id active-tab-id)
                           (str t/bg-card " " t/border-default " " t/text-accent " -mb-px pb-2.5 z-10")
                           (str t/bg-input " border-transparent " t/text-secondary " hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100")))
             :on-click #(when on-change (on-change id))}
       [:span {:class "whitespace-nowrap font-medium text-sm"} label]
       (when on-close
         [:button {:class (str "ml-2 p-0.5 rounded hover:bg-white/10 " t/text-muted " hover:text-red-400 transition-colors")
                   :on-click (fn [e]
                               (.stopPropagation e)
                               (on-close id))}
          [:span {:class "text-xs font-bold leading-none"} "✕"]])])]
   (when on-add
     [:button {:class (str "px-3 py-2 rounded-t-md " t/bg-button-xs " " t/bg-button-xs-hover " " t/text-button " font-bold text-lg leading-none mb-0.5")
               :on-click on-add
               :title "Add New"}
      "+"])])

(defn nav-tabs
  "Renders a top-level navigation tab bar (secondary nav).

  Args:
    props (map): Props. Keys:
      - :tabs (seq): List of maps with :id, :label.
      - :active-tab-id (any): ID of active tab.
      - :on-change (fn): Callback(id).
      - :class (string): CSS classes.

  Returns:
    vector: A hiccup vector."
  [{:keys [tabs active-tab-id on-change class]}]
  [:div {:class (str "flex flex-row space-x-6 border-b " t/border-default " px-4 " t/bg-toolbar " shrink-0 " class)}
   (for [{:keys [id label]} tabs]
     ^{:key (str id)}
     [:button {:class (str "py-3 font-medium transition-colors border-b-2 "
                           (if (= active-tab-id id)
                             (str "border-[#f0dfaf] " t/text-accent)
                             (str "border-transparent " t/text-secondary " hover:text-[#dcdccc]")))
               :on-click #(when on-change (on-change id))}
      label])])
