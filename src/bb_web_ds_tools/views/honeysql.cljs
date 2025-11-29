(ns bb-web-ds-tools.views.honeysql
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.honeysql :as h-comp]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]))

;; Event handlers
(rf/reg-event-db
 :honeysql/initialize
 (fn [db _]
   (-> db
       (assoc-in [:user-input :honeysql :default]
                 {:input "{:select [:id :username :email]\n :from [:users]\n :where [:and\n         [:= :active true]\n         [:> :created_at \"2023-01-01\"]]}"})
       (assoc ::honeysql {:output ""}))))

(rf/reg-event-db
 :honeysql/update-input
 (fn [db [_ text]]
   (assoc-in db [:user-input :honeysql :default :input] text)))

(rf/reg-event-fx
 :honeysql/convert-to-sql
 (fn [{:keys [db]} _]
   (let [input-text (get-in db [:user-input :honeysql :default :input])
         output (h-comp/convert-to-sql input-text)]
     {:db (assoc-in db [::honeysql :output] output)})))

;; Subscriptions
(rf/reg-sub :honeysql/user-input-root :<- [:bb-web-ds-tools.core/user-input] (fn [user-input _] (get-in user-input [:honeysql :default])))
(rf/reg-sub :honeysql/component-root (fn [db _] (::honeysql db)))
(rf/reg-sub :honeysql/input :<- [:honeysql/user-input-root] (fn [root _] (:input root)))
(rf/reg-sub :honeysql/output :<- [:honeysql/component-root] (fn [root _] (:output root)))

;; UI components
(defn panel-render []
  (let [honeysql-input @(rf/subscribe [:honeysql/input])
        honeysql-output @(rf/subscribe [:honeysql/output])]
    [l/split-view {:ratio :2-1}
     ;; LEFT: Input
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [:h3 {:class (str "text-xl font-semibold " t/text-accent " flex items-center gap-2")}
       [:span "🍯"] "Convert to SQL"]
      [c/label "Clojure Code (Last value must be HoneySQL Map)"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default " max-w-3xl")}
       [editor/monaco-editor {:value honeysql-input
                              :language "clojure"
                              :options {:rulers [80]}
                              :on-change #(rf/dispatch [:honeysql/update-input %])}]]
      [c/button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert"]]

     ;; RIGHT: Output
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "SQL Output"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value honeysql-output
                              :language "sql"
                              :options {:readOnly true}}]]]]))

(defn panel []
  (r/create-class
   {:display-name "honeysql-panel"
    :component-did-mount #(rf/dispatch [:honeysql/initialize])
    :reagent-render panel-render}))
