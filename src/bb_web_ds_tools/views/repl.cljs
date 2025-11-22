(ns bb-web-ds-tools.views.repl
  (:require [reagent.core :as r]
            [sci.core :as sci]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.editor :as editor-comp]))

(def sci-ctx
  (sci/init {:namespaces {'re-frame.core {'subscribe rf/subscribe
                                          'dispatch rf/dispatch}
                          'clojure.core {'println println}}}))

(rf/reg-sub
 ::instances
 (fn [db _]
   (-> db :repl :instances)))

(rf/reg-event-db
 ::add-instance
 (fn [db _]
   (let [new-id (str (random-uuid))]
     (assoc-in db [:repl :instances new-id] {:id new-id
                                             :code ""
                                             :output []}))))

(rf/reg-event-fx
 ::eval-code
 (fn [{:keys [db]} [_ instance-id code]]
   {:db (try
          (let [result (sci/eval-string code sci-ctx)]
            (update-in db [:repl :instances instance-id :output] conj {:type :result :text (pr-str result)}))
          (catch :default e
            (update-in db [:repl :instances instance-id :output] conj {:type :error :text (str e)})))}))

(rf/reg-sub
  ::output
  :<- [::instances]
  (fn [instances [_ instance-id]]
    (get-in instances [instance-id :output])))

(rf/reg-sub
  ::code
  :<- [::instances]
  (fn [instances [_ instance-id]]
    (get-in instances [instance-id :code])))

;; Atom to track the currently focused REPL instance
(def active-instance-id (r/atom nil))

;; Atom to store the keydown listener function for proper removal
(defonce keydown-listener-atom (r/atom nil))


(defn- code-editor [{:keys [instance-id]}]
  (let [path [:repl :instances instance-id :form]
        code @(rf/subscribe [::code instance-id])]
    [fork/form {:initial-values {"code" code}
                :keywordize-keys true
                :path path
                :prevent-default? true
                :clean-on-unmount? true
                :on-submit (fn [{:keys [values]}]
                             (rf/dispatch [::eval-code instance-id (:code values)]))}
     (fn [{:keys [values set-values handle-submit]}]
       [:div
        [:div.flex-grow.relative.h-64
         [editor-comp/monaco-editor {:value (:code values)
                                     :on-change #(set-values {:code %})
                                     :on-focus #(reset! active-instance-id instance-id)
                                     :on-blur #(reset! active-instance-id nil)}]]
        [:div.flex.justify-end.mt-2
         [:button.bg-blue-600.text-white.px-6.py-2.rounded.shadow.hover:bg-blue-700.transition
          {:on-click handle-submit}
          "Evaluate"]]] )]))


(defn- repl-instance [{:keys [instance-id]}]
  (let [output-log (rf/subscribe [::output instance-id])]
    [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mb-4
     [:div.flex.flex-col.border.rounded.shadow-sm
      [:div.bg-gray-100.p-2.border-b.font-semibold "Code Input"]
      [:div.p-2
       [code-editor {:instance-id instance-id}]]]
     [:div.flex.flex-col.border.rounded.shadow-sm
      [:div.bg-gray-100.p-2.border-b.font-semibold "Output Log"]
      [:div.flex-grow.p-2.overflow-auto.bg-white.font-mono.text-sm.h-64.border-t
       (if (empty? @output-log)
         [:div.text-gray-400.italic "No output yet..."]
         (for [[i entry] (map-indexed vector (reverse @output-log))]
           ^{:key i}
           [:div.mb-1.border-b.pb-1 {:class (if (= (:type entry) :error) "text-red-600" "text-green-700")}
            [:span.font-bold.mr-2 (if (= (:type entry) :error) "ERR:" "=>")]
            (:text entry)]))]]]))

(defn panel []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [listener (fn [e]
                        (when (and @active-instance-id
                                   (or (.-ctrlKey e) (.-metaKey e))
                                   (= (.-key e) "Enter"))
                          ;; Need to deref the subscribe inside the event listener.
                          (let [form-values @(rf/subscribe [::fork/form-values [:repl :instances @active-instance-id :form]])]
                            (rf/dispatch [::eval-code @active-instance-id (:code form-values)]))
                          (.preventDefault e)))]
         (reset! keydown-listener-atom listener)
         (js/document.addEventListener "keydown" listener)))

     :component-will-unmount
     (fn [this]
       (when @keydown-listener-atom
         (js/document.removeEventListener "keydown" @keydown-listener-atom)
         (reset! keydown-listener-atom nil)))

     :reagent-render
     (fn []
       (let [instances (rf/subscribe [::instances])]
         [:div.flex.flex-col.h-full.space-y-4.p-4
          [:div.text-lg.font-bold "Clojure REPL"]
          [:div.text-sm.text-gray-600 "Use (re-frame.core/subscribe ...) or (re-frame.core/dispatch ...) to interact with the app."]
          (into [:div]
                (for [[instance-id] @instances]
                  ^{:key instance-id}
                  [repl-instance {:instance-id instance-id}]))
          [:div.flex.justify-end
           [:button.bg-green-600.text-white.px-6.py-2.rounded.shadow.hover:bg-green-700.transition
            {:on-click #(rf/dispatch [::add-instance])}
            "Add REPL"]]]))}))
