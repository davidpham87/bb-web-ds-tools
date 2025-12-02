(ns bb-web-ds-tools.views.editor
  (:require [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]))

(rf/reg-event-db
 ::save-code
 (fn [db _]
   (js/alert (str "Saved code successfully!"))
   db))

(defn editor-form
  "Renders the editor form.

  Args:
    props (map): Optional properties map with keys :path and :initial-code.

  Returns:
    vector: A hiccup vector."
  [{:keys [path initial-code]
    :or {path [:editor-form]
         initial-code @(rf/subscribe [:bb-web-ds-tools.core/code])}}]
  (let [initial-code @(rf/subscribe [:bb-web-ds-tools.core/code])]
    [fork/form {:initial-values {"code" initial-code}
                :keywordize-keys true
                :path path
                :prevent-default? true
                :clean-on-unmount? true
                :on-submit (fn [{:keys [values]}]
                             (rf/dispatch [:bb-web-ds-tools.core/code-changed
                                           (:code values)])
                             (rf/dispatch [::save-code]))}
     (fn [{:keys [values set-values handle-submit]}]
       [:form {:on-submit handle-submit :class "space-y-4"}
        [:div {:class "bg-[#2f2f2f] rounded shadow-sm overflow-hidden border border-[#5f5f5f]"}
         [editor/monaco-editor {:value (:code values)
                                :style {:height "600px"}
                                :on-change #(set-values {:code %})}]]
        [:div.flex.justify-end
         [c/button {:type "submit"} "Save Code"]]])]))

(defn panel
  "Renders the editor view panel.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "container mx-auto max-w-6xl p-6"}
   [c/card {}
    [editor-form {}]]])
