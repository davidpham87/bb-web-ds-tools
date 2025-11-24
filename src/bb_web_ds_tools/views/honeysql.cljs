(ns bb-web-ds-tools.views.honeysql
  (:require [re-frame.core :as rf]
            [honey.sql :as h]
            [cljs.reader :as reader]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.theme :as t]))

;; Event handlers
(rf/reg-event-db
 :honeysql/initialize
 (fn [db _]
   (assoc-in db [:user-input :honeysql :default]
             {:input "{:select [:id :username :email]\n :from [:users]\n :where [:and\n         [:= :active true]\n         [:> :created_at \"2023-01-01\"]]}"
              :output ""})))

(rf/reg-event-db
 :honeysql/update-input
 (fn [db [_ text]]
   (assoc-in db [:user-input :honeysql :default :input] text)))

(rf/reg-event-fx
 :honeysql/convert-to-sql
 (fn [{:keys [db]} _]
   (let [input-text (get-in db [:user-input :honeysql :default :input])
         input-data (try (reader/read-string input-text) (catch js/Error e nil))]
     (if input-data
       (try
         {:db (assoc-in db [:user-input :honeysql :default :output] (first (h/format input-data)))} ;; h/format returns [sql params], take first for sql string if no params
         (catch js/Error e
           {:db (assoc-in db [:user-input :honeysql :default :output] (str "Error: " (.-message e)))}))
       {:db (assoc-in db [:user-input :honeysql :default :output] "Invalid Honeysql data.")}))))

;; Subscriptions
(rf/reg-sub :honeysql/root (fn [db _] (get-in db [:user-input :honeysql :default])))
(rf/reg-sub :honeysql/input :<- [:honeysql/root] (fn [root _] (:input root)))
(rf/reg-sub :honeysql/output :<- [:honeysql/root] (fn [root _] (:output root)))

;; UI components
(defn panel []
  (let [honeysql-input @(rf/subscribe [:honeysql/input])
        honeysql-output @(rf/subscribe [:honeysql/output])]
    [l/split-view {:ratio :2-1}
     ;; LEFT: Input
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [:h3 {:class (str "text-xl font-semibold " t/text-accent " flex items-center gap-2")}
       [:span "🍯"] "Convert to SQL"]
      [c/label "HoneySQL Map (EDN)"]
      [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
       [editor/monaco-editor {:value honeysql-input
                              :language "clojure"
                              :on-change #(rf/dispatch [:honeysql/update-input %])}]]
      [c/button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert"]]

     ;; RIGHT: Output
     [l/flex-col {:class "h-full p-4 space-y-4"}
      [c/label "SQL Output"]
      [c/pre-block {:content honeysql-output :class "flex-grow"}]]]))
