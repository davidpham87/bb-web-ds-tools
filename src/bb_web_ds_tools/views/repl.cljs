(ns bb-web-ds-tools.views.repl
  (:require
   ["monaco-editor/esm/vs/editor/editor.api.js" :refer [KeyCode]]
   [bb-web-ds-tools.components.common :as c]
   [bb-web-ds-tools.components.editor :as editor]
   [bb-web-ds-tools.components.layout :as l]
   [bb-web-ds-tools.portal :as portal :refer (portal-frame)]
   [bb-web-ds-tools.runtime.sci :as sci-runtime]
   [bb-web-ds-tools.theme :as t]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(rf/reg-sub
 ::instances
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get user-input :repl)))

(rf/reg-event-db
 ::add-instance
 (fn [db _]
   (let [new-id (str (random-uuid))]
     (assoc-in db [:user-input :repl new-id] {:id new-id :code ""}))))

(rf/reg-fx
 ::eval-code
 (fn [code]
   (sci-runtime/eval-in-worker code)))

(rf/reg-event-fx
 ::eval-code
 (fn [_ [_ _ code]]
   {::eval-code code}))

(rf/reg-sub
 ::code
 :<- [::instances]
 (fn [instances [_ instance-id]]
   (get-in instances [instance-id :code])))

(rf/reg-sub
 ::mac-os?
 (fn [db _]
   (get-in db [:platform :mac-os?])))

(rf/reg-sub
 ::repl-instance-state
 (fn [[_ instance-id] _]
   [(rf/subscribe [::code instance-id])
    (rf/subscribe [::mac-os?])])
 (fn [[code mac-os?] _]
   {:code code
    :mac-os? mac-os?}))

(rf/reg-event-db
 ::update-code
 (fn [db [_ instance-id code]]
   (assoc-in db [:user-input :repl instance-id :code] code)))

(defn find-last-sexpr
  "Finds the last S-expression before the cursor position.

  Args:
    text (string): The code text.
    cursor-pos (number): The cursor index.

  Returns:
    string: The found S-expression or empty string."
  [text cursor-pos]
  (let [substr (subs text 0 cursor-pos)
        trimmed (str/trimr substr)
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
                    (and in-string? (= c \")
                         (not= (get trimmed (dec i)) \\))
                    (recur (dec i) stack false)

                    in-string? (recur (dec i) stack true)

                    (= c \") (recur (dec i) stack true)

                    (contains? delims c) (recur (dec i) (conj stack (delims c)) false)

                    (contains? openers c)
                    (let [expected (peek stack)]
                      (if (= c expected)
                        (let [new-stack (pop stack)]
                          (if (empty? new-stack)
                            (subs trimmed i)
                            (recur (dec i) new-stack false)))
                        (recur (dec i) stack false)))

                    :else (recur (dec i) stack false)))))
          (= last-char \")
          (loop [i (- end-idx 2)]
            (if (< i 0) trimmed
                (let [c (get trimmed i)]
                  (if (and (= c \") (not= (get trimmed (dec i)) \\)) (subs trimmed i) (recur (dec i))))))
          :else (let [match (re-find #"[^\s\(\)\[\]\{\}\"]+$" trimmed)] (or match trimmed)))))))

(defn key-chord
  "Combines two key codes into a chord.

  Args:
    first-part (number): The first key code.
    second-part (number): The second key code.

  Returns:
    number: The combined chord."
  [first-part second-part]
  (bit-or first-part (bit-shift-left second-part 16)))

(defn setup-editor-actions
  "Configures custom actions for the Monaco editor.

  Args:
    editor (object): The Monaco editor instance.
    instance-id (string): The REPL instance ID.
    mac-os? (boolean): Whether running on macOS.

  Returns:
    nil: Modifies the editor instance."
  [^js editor instance-id mac-os?]
  (let [eval-action (fn [code]
                      (rf/dispatch [::eval-code instance-id code]))
        ctrl-key (editor/get-ctrl-key mac-os?)]
    (editor/setup-editor-actions editor mac-os? eval-action)
    (.addAction
     editor
     (clj->js {:id "eval-sexpr"
               :label "Evaluate Expression"
               :keybindings [(key-chord (bit-or ctrl-key (.-KeyX KeyCode))
                                        (bit-or ctrl-key (.-KeyE KeyCode)))]
               :run (fn [^js ed]
                      (let [pos (.getPosition ed)
                            offset (.getOffsetAt (.getModel ed) pos)
                            code (.getValue ed)
                            sexpr (find-last-sexpr code offset)]
                        (when (not (empty? sexpr))
                          (eval-action sexpr))))}))))

(defn- repl-instance
  "Renders a single REPL instance.

  Args:
    props (map): Contains :instance-id.

  Returns:
    vector: A hiccup vector."
  [{:keys [instance-id]}]
  (let [state-sub (rf/subscribe [::repl-instance-state instance-id])]
    (fn []
      (let [{:keys [code mac-os?]} @state-sub]
        [:div {:class "w-full border border-gray-700 rounded mb-4"}
         [l/flex-row {:class "h-full w-screen"}
          [l/flex-col {:class "space-y-2 w-full max-w-3xl"}
           [l/flex-row {:class "justify-between"}
            [c/label "Clojure Code"]
            [c/button {:on-click #(rf/dispatch [::eval-code instance-id code])} "Eval"]]
           [:div {:class (str "flex-grow rounded overflow-hidden border w-screen-1/2"
                              t/border-default)
                  :style {:height "85vh"}}
            [editor/monaco-editor
             {:value code
              :language "clojure"
              :options {:rulers [80] :lineNumbers "off"}
              :on-change #(rf/dispatch [::update-code instance-id %])
              :on-mount #(setup-editor-actions % instance-id mac-os?)}]]]
          [portal-frame]]]))))

(defn on-worker-message
  "Handles messages from the SCI worker.

  Args:
    msg (map): The message object.

  Returns:
    nil: Dispatches events."
  [msg]
  (let [{:keys [type event value]} msg]
    (case (keyword type)
      :dispatch (rf/dispatch event)
      :error (rf/dispatch [::portal/submit msg])
      :result (rf/dispatch [::portal/submit value])
      (js/console.warn "Unknown worker msg:" msg))))

(defn panel
  "Main component for the Clojure REPL view. Initializes SCI on mount.

  Returns:
    vector: A hiccup vector."
  []
  (r/create-class
   {:component-did-mount #(sci-runtime/init! on-worker-message)
    :reagent-render
    (fn []
      (let [instances (rf/subscribe [::instances])]
        [:div {:class "flex flex-col h-full overflow-y-clip"}
         (into [:div]
               (for [[instance-id] @instances]
                 ^{:key instance-id}
                 [repl-instance {:instance-id instance-id}]))]))}))


(comment
  (rf/dispatch [:bb-web-ds-tools.portal/open {:node-id "clojure-repl"}])
  @(rf/subscribe [::eval-count])
  (.getElementById js/document "clojure-repl")
  )
