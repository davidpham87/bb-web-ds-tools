(ns bb-web-ds-tools.views.honeysql
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.honeysql :as c-honeysql]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.portal :as portal :refer [portal-frame portal-viewer]]
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
         result (c-honeysql/convert-to-sql input-text)
         output (if (:success result) (:output result) (:error result))]
     {:db (assoc-in db [::honeysql :output] output)})))

;; Subscriptions
(rf/reg-sub :honeysql/user-input-root :<- [:bb-web-ds-tools.core/user-input] (fn [user-input _] (get-in user-input [:honeysql :default])))
(rf/reg-sub :honeysql/component-root (fn [db _] (::honeysql db)))
(rf/reg-sub :honeysql/input :<- [:honeysql/user-input-root] (fn [root _] (:input root)))
(rf/reg-sub :honeysql/output :<- [:honeysql/component-root] (fn [root _] (:output root)))

;; UI components

(defn panel []
  (let [honeysql-input @(rf/subscribe [:honeysql/input])
        honeysql-output @(rf/subscribe [:honeysql/output])]
    [l/flex-row {:class "h-full w-full"}
     ;; LEFT: Input
     [l/flex-col {:class "h-full w-full max-w-3xl"}
      [l/flex-row {:class "justify-between py-4"}
       [l/flex-col
        [:h3 {:class (str "text-xl font-semibold " t/text-accent " flex items-center gap-2")}
         [:span "🍯"] "Convert to SQL"]
        [c/label "Clojure Code (Last value must be HoneySQL Map)"]]
       [c/button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert"]]

      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)
             :style {:height "85vh"}}
       [editor/monaco-editor {:value honeysql-input
                              :language "clojure"
                              :options {:rulers [80] :lineNumbers "off"}
                              :on-change #(rf/dispatch [:honeysql/update-input %])}]]]

     ;; RIGHT: Output
     [portal-viewer honeysql-output]]))
