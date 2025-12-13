(ns bb-web-ds-tools.views.editor
  (:require [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.navigation :as nav]))

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
   [c/section-header "Editor"
    [c/icon-button-link
     {:href (nav/get-wiki-url :code)
      :title "Help: Editor"
      :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"
      :icon [:svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-4 h-4"}
             [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}]]}]]
   [c/card {}
    [editor-form {}]]])
