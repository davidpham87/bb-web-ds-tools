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

(defn editor-form [{:keys [path initial-code]
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
        [:div.bg-white.rounded.shadow-sm.overflow-hidden
         [editor/monaco-editor {:value (:code values)
                                :style {:height "600px"}
                                :on-change #(set-values {:code %})}]]
        [:div.flex.justify-end
         [c/button {:type "submit"} "Save Code"]]])]))

(defn panel []
  [:div.container.mx-auto.max-w-6xl
   [c/page-header "Code Editor"]
   [:div.bg-gray-800.rounded-lg.p-6.border.border-gray-700.shadow-lg
    [editor-form {}]]])
