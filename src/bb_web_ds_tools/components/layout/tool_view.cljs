(ns bb-web-ds-tools.components.layout.tool-view
  (:require [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.navigation :as nav]
            [bb-web-ds-tools.theme :as t]))

(defn tool-view
  "Renders a standardized tool view with a header, editor/main area, and actions.

  Args:
    props (map): Configuration props. Keys:
      - :title (string): The title of the tool.
      - :wiki-key (keyword): The key for the wiki help link (e.g., :honeysql).
      - :actions (vector): Optional hiccup vector of action buttons.
      - :editor (hiccup): The editor component.
      - :output (hiccup, optional): The output/portal component. If present, renders a split view (flex-row).
      - :class (string): Optional CSS classes for the container.

  Returns:
    vector: A hiccup vector."
  [{:keys [title wiki-key actions editor output class]}]
  (if output
    ;; Split View (Editor + Output)
    [l/flex-row {:class (str "h-full items-start gap-0 " class)}
     ;; LEFT: Editor & Controls
     [l/flex-col {:class "gap-4 w-full max-w-3xl h-full p-4 border-r border-[#3f3f3f]"}
      [c/section-header title
       (when wiki-key
         [c/help-button
          {:href (nav/get-wiki-url wiki-key)
           :title (str "Help: " title)
           :class "!p-1 !w-6 !h-6 opacity-50 hover:opacity-100"}])]

      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "100%"}} ;; Ensure editor takes available space
       editor]

      (when actions
        [l/flex-row {:class "items-center gap-4 mt-2"}
         actions])]

     ;; RIGHT: Output
     output]

    ;; Single View (Just Editor/Main)
    [l/flex-col {:class (str "h-full p-4 gap-4 " class)}
     [l/flex-row {:class "justify-between"}
      [l/flex-row {:class "items-center gap-2"}
       [c/label title]
       (when wiki-key
         [c/help-button
          {:href (nav/get-wiki-url wiki-key)
           :title (str "Help: " title)
           :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"}])]
      (when actions
        [l/flex-row {:class "space-x-4"}
         actions])]

     [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
      editor]]))
