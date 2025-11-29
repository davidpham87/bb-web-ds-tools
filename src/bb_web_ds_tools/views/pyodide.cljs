(ns bb-web-ds-tools.views.pyodide
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["react" :as react]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]
            ["@datalayer/jupyter-react" :refer [Jupyter Console useJupyter]]))

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (let [exists? (get-in db [:user-input :pyodide :default ::code])]
     (cond-> db
       (not exists?)
       (assoc-in [:user-input :pyodide :default ::code] "print('Hello Jupyter')")))))

(rf/reg-sub ::user-input-root (fn [db _] (get-in db [:user-input :pyodide :default])))
(rf/reg-sub ::code :<- [::user-input-root] (fn [root] (::code root)))
(rf/reg-event-db ::set-code (fn [db [_ v]] (assoc-in db [:user-input :pyodide :default ::code] v)))
(rf/reg-sub ::mac-os? (fn [db _] (get-in db [:platform :mac-os?])))

(defn run-actions [jupyter code]
  (let [kernel (.-kernel jupyter)]
    (if kernel
      (.requestExecute kernel (clj->js {:code code}))
      (js/console.warn "Kernel not ready"))))

(defn internal-view []
  (let [jupyter (useJupyter)
        jupyter-ref (react/useRef jupyter)
        code @(rf/subscribe [::code])
        mac-os? @(rf/subscribe [::mac-os?])]
    (set! (.-current jupyter-ref) jupyter)
    [l/split-view {:ratio :1-1}
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "Code"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value code
                              :language "python"
                              :options {:rulers [80]}
                              :on-change #(rf/dispatch [::set-code %])
                              :on-mount #(editor/setup-editor-actions % mac-os? (fn [c] (run-actions (.-current jupyter-ref) c)))}]]
      [c/button {:on-click #(run-actions jupyter code)} "Run"]]
     [:> Console]]))

(defn panel []
  (r/create-class
   {:component-did-mount #(rf/dispatch [::initialize])
    :reagent-render
    (fn []
      [:div {:class "h-full w-full"}
       [:> Jupyter {:lite true :className "h-full w-full"}
        [:f> internal-view]]])}))
