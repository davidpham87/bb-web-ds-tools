(ns bb-web-ds-tools.views.repl
  (:require [reagent.core :as r]
            [sci.core :as sci]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [cljs.pprint :as pprint]
            ["monaco-editor/esm/vs/editor/editor.api.js" :refer [KeyChord KeyMod KeyCode]]
            [bb-web-ds-tools.components.editor :as editor]
            [bb-web-ds-tools.components.repl :as repl-comp]
            [bb-web-ds-tools.components.common :as c]))

(def sci-ctx
  (sci/init {:namespaces {'re-frame.core {'subscribe rf/subscribe
                                          'dispatch rf/dispatch}
                          'clojure.core {'println println}}}))

(rf/reg-sub ::instances (fn [db _] (get-in db [:user-input :repl])))
(rf/reg-event-db ::add-instance (fn [db _]
                                 (let [new-id (str (random-uuid))]
                                   (-> db
                                       (assoc-in [:user-input :repl new-id] {:id new-id :code ""})
                                       (assoc-in [::repl new-id] {:output []})))))

(rf/reg-event-fx
 ::eval-code
 (fn [{:keys [db]} [_ instance-id code]]
   {:db (try
          (let [result (sci/eval-string code sci-ctx)
                pretty-result (with-out-str (pprint/pprint result))]
            (update-in db [::repl instance-id :output] conj {:type :result :text pretty-result}))
          (catch :default e
            (update-in db [::repl instance-id :output] conj {:type :error :text (str e)})))}))

(rf/reg-sub ::output (fn [db [_ instance-id]] (get-in db [::repl instance-id :output])))
(rf/reg-sub ::code :<- [::instances] (fn [instances [_ instance-id]] (get-in instances [instance-id :code])))
(rf/reg-sub ::mac-os? (fn [db _] (get-in db [:platform :mac-os?])))

(def active-instance-id (r/atom nil))

(defn find-last-sexpr [text cursor-pos]
  (let [substr (subs text 0 cursor-pos)
        trimmed (clojure.string/trimr substr)
        end-idx (count trimmed)]
    (if (zero? end-idx)
      ""
      (let [last-char (get trimmed (dec end-idx))
            delims {\) \( \] \[ \} \{}
            openers (set (vals delims))]
        (cond
          (contains? delims last-char)
          (loop [i (dec end-idx) stack [] in-string? false]
            (if (< i 0) trimmed
                (let [c (get trimmed i)]
                  (cond
                    (and in-string? (= c \") (not= (get trimmed (dec i)) \\)) (recur (dec i) stack false)
                    in-string? (recur (dec i) stack true)
                    (= c \") (recur (dec i) stack true)
                    (contains? delims c) (recur (dec i) (conj stack (delims c)) false)
                    (contains? openers c) (let [expected (peek stack)]
                                            (if (= c expected)
                                              (let [new-stack (pop stack)]
                                                (if (empty? new-stack) (subs trimmed i) (recur (dec i) new-stack false)))
                                              (recur (dec i) stack false)))
                    :else (recur (dec i) stack false)))))
          (= last-char \")
          (loop [i (- end-idx 2)]
            (if (< i 0) trimmed
                (let [c (get trimmed i)]
                  (if (and (= c \") (not= (get trimmed (dec i)) \\)) (subs trimmed i) (recur (dec i))))))
          :else (let [match (re-find #"[^\s\(\)\[\]\{\}\"]+$" trimmed)] (or match trimmed)))))))

(defn key-chord [first-part second-part]
  (bit-or first-part (bit-shift-left second-part 16)))

(defn setup-editor-actions [^js editor instance-id mac-os?]
  (let [eval-action (fn [code] (rf/dispatch [::eval-code instance-id code]))
        ctrl-key (editor/get-ctrl-key mac-os?)]
    (editor/setup-editor-actions editor mac-os? eval-action)
    (.addAction editor (clj->js {:id "eval-sexpr"
                                 :label "Evaluate Expression"
                                 :keybindings [(key-chord (bit-or ctrl-key KeyCode/KeyX) (bit-or ctrl-key KeyCode/KeyE))]
                                 :run (fn [^js ed]
                                        (let [pos (.getPosition ed)
                                              offset (.getOffsetAt (.getModel ed) pos)
                                              code (.getValue ed)
                                              sexpr (find-last-sexpr code offset)]
                                          (when (not (empty? sexpr))
                                            (eval-action sexpr))))}))))

(defn- repl-instance [{:keys [instance-id]}]
  (let [code @(rf/subscribe [::code instance-id])
        output @(rf/subscribe [::output instance-id])
        mac-os? @(rf/subscribe [::mac-os?])]
    [repl-comp/repl-card
     {:instance-id instance-id
      :code code
      :output output
      :on-eval (fn [code] (rf/dispatch [::eval-code instance-id code]))
      :on-focus #(reset! active-instance-id instance-id)
      :on-blur #(reset! active-instance-id nil)
      :on-editor-mount #(setup-editor-actions % instance-id mac-os?)
      :path [:user-input :repl instance-id :form]}]))

(defn panel []
  (r/create-class
   {:component-did-mount (fn [this])
    :component-will-unmount (fn [this])
    :reagent-render
    (fn []
      (let [instances (rf/subscribe [::instances])]
        [:div {:class "flex flex-col h-full space-y-6 p-6"}

         [:div {:class "text-sm text-[#9f9f9f]"} "Use (re-frame.core/subscribe ...) or (re-frame.core/dispatch ...) to interact with the app."]
         (into [:div]
               (for [[instance-id] @instances]
                 ^{:key instance-id}
                 [repl-instance {:instance-id instance-id}]))
         [:div {:class "flex justify-end"}
          [c/button {:on-click #(rf/dispatch [::add-instance])} "Add REPL"]]]))}))
