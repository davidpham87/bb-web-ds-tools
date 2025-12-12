(ns bb-web-ds-tools.views.honeysql
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.honeysql :as c-honeysql]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.portal :as portal :refer [portal-frame portal-panel]]
            [bb-web-ds-tools.theme :as t]))

;; Helper
(defn get-honeysql-state
  "Retrieves the HoneySQL state from the database.

  Args:
    db (map): The application database.

  Returns:
    map: A map containing :input and :output."
  [db]
  (let [user-input (get-in db [:user-input :honeysql :default])
        component-state (::honeysql db)]
    {:input (:input user-input)
     :output (:output component-state)}))

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
   (let [{:keys [input]} (get-honeysql-state db)]
     (if (empty? input)
       {}
       (let [result (c-honeysql/convert-to-sql input)
             output (if (:success result) (:output result) (:error result))]
         {:db (assoc-in db [::honeysql :output] output)})))))

;; Subscriptions
(rf/reg-sub
 :honeysql/user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get-in user-input [:honeysql :default])))

(rf/reg-sub
 :honeysql/component-root
 (fn [db _]
   (::honeysql db)))

(rf/reg-sub
 :honeysql/input
 :<- [:honeysql/user-input-root]
 (fn [root _]
   (:input root)))

(rf/reg-sub
 :honeysql/output
 :<- [:honeysql/component-root]
 (fn [root _]
   (:output root)))

(rf/reg-sub
 :honeysql/panel-state
 :<- [:honeysql/input]
 :<- [:honeysql/output]
 (fn [[input output] _]
   {:input input
    :output output}))

;; UI components

(defn panel
  "Renders the HoneySQL view panel.

  Returns:
    vector: A hiccup vector."
  []
  (let [state-sub (rf/subscribe [:honeysql/panel-state])]
    (fn []
      (let [{:keys [input output]} @state-sub]
        [l/flex-row {:class "h-full items-start gap-0"}
         ;; LEFT: Input
         [l/flex-col {:class "gap-4 w-full max-w-3xl h-full p-4 border-r border-[#3f3f3f]"}
          [c/section-header "Convert to SQL" [:span {:class "ml-2"} "🍯"]]
          [c/label "Clojure Code (Last value must be HoneySQL Map)"]
          [:div {:class (str "flex-grow rounded overflow-hidden border " t/border-default)}
           [editor/monaco-editor {:value input
                                  :language "clojure"
                                  :options {:rulers [80]}
                                  :on-change #(rf/dispatch [:honeysql/update-input %])}]]
          [l/flex-row {:class "items-center gap-4"}
           [c/button {:on-click #(rf/dispatch [:honeysql/convert-to-sql])} "Convert"]
           [:div {:class (str "text-xs " t/text-secondary)}
            "CLI: " [:code {:class "bg-black/20 p-1 rounded"} "bb -x bb-web-ds-tools.cli.honeysql/convert"]]]]

         ;; RIGHT: Output
         [portal-panel output]]))))
