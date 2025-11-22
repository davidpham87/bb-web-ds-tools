(ns bb-web-ds-tools.views.repl
  (:require [reagent.core :as r]
            [sci.core :as sci]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [bb-web-ds-tools.components.repl :as repl-comp]
            ["@xterm/xterm" :refer [Terminal]]
            ["@xterm/addon-fit" :refer [FitAddon]]))

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


(defn- repl-instance [{:keys [instance-id]}]
  (let [code @(rf/subscribe [::code instance-id])
        output @(rf/subscribe [::output instance-id])]
    [repl-comp/repl-card
     {:instance-id instance-id
      :code code
      :output output
      :on-eval (fn [code] (rf/dispatch [::eval-code instance-id code]))
      :on-focus #(reset! active-instance-id instance-id)
      :on-blur #(reset! active-instance-id nil)
      :path [:repl :instances instance-id :form]}]))

(defn standard-repl []
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
         [:div.flex.flex-col.space-y-4
          [:div.text-sm.text-gray-600 "Use (re-frame.core/subscribe ...) or (re-frame.core/dispatch ...) to interact with the app."]
          (into [:div]
                (for [[instance-id] @instances]
                  ^{:key instance-id}
                  [repl-instance {:instance-id instance-id}]))
          [:div.flex.justify-end
           [:button.bg-green-600.text-white.px-6.py-2.rounded.shadow.hover:bg-green-700.transition
            {:on-click #(rf/dispatch [::add-instance])}
            "Add REPL"]]]))}))

(defn- pop-last-char [s]
  (if (> (count s) 0)
    (subs s 0 (dec (count s)))
    s))

(defn terminal-repl []
  (let [container-ref (r/atom nil)
        term-ref (r/atom nil)
        input-buffer (r/atom "")
        prompt "user=> "
        history (r/atom [])
        history-index (r/atom -1)]
    (r/create-class
      {:component-did-mount
       (fn []
         (when @container-ref
           (let [term (new Terminal (clj->js {:cursorBlink true
                                              :convertEol true
                                              :fontFamily "Menlo, Monaco, 'Courier New', monospace"
                                              :fontSize 14
                                              :theme {:background "#1f2937"
                                                      :foreground "#e5e7eb"}}))
                 fit-addon (new FitAddon)]

             (.loadAddon term fit-addon)
             (.open term @container-ref)
             (.fit fit-addon)
             (reset! term-ref term)

             (js/window.addEventListener "resize" #(.fit fit-addon))

             (.write term (str "\u001b[1;34mClojure (SCI) REPL\u001b[0m\r\n" prompt))

             (.onData term (fn [data]
                             (let [code (.charCodeAt data 0)]
                               (cond
                                 (= code 13) ;; Enter
                                 (let [cmd @input-buffer]
                                   (.write term "\r\n")
                                   (when-not (empty? cmd)
                                     (swap! history conj cmd)
                                     (reset! history-index -1))
                                   (reset! input-buffer "")

                                   (if (empty? cmd)
                                     (.write term prompt)
                                     (try
                                       (let [res (sci/eval-string cmd sci-ctx)]
                                         (.write term (str "\u001b[32m=> " (pr-str res) "\u001b[0m\r\n" prompt)))
                                       (catch :default e
                                         (.write term (str "\u001b[31mError: " e "\u001b[0m\r\n" prompt))))))

                                 (= code 127) ;; Backspace
                                 (when (> (count @input-buffer) 0)
                                   (.write term "\b \b")
                                   (swap! input-buffer pop-last-char))

                                 :else
                                 (when (>= code 32)
                                   (.write term data)
                                   (swap! input-buffer str data)))))))))
       :component-will-unmount
       (fn [] (when @term-ref (.dispose @term-ref)))

       :reagent-render
       (fn []
         [:div.flex.flex-col.h-full.w-full
          [:div.flex-grow.bg-gray-800.rounded.overflow-hidden.p-2
           {:ref #(reset! container-ref %)
            :style {:height "500px" :width "100%"}}]])})))

(defn panel []
  (let [mode (r/atom :standard)]
    (fn []
      [:div.flex.flex-col.h-full.space-y-4.p-4
       [:div.flex.justify-between.items-center
        [:div.text-lg.font-bold "Clojure REPL"]
        [:div.bg-gray-800.rounded.p-1.flex.space-x-1
         [:button.px-3.py-1.rounded.text-sm.transition
          {:class (if (= @mode :standard) "bg-blue-600 text-white" "text-gray-400 hover:text-white")
           :on-click #(reset! mode :standard)}
          "Standard"]
         [:button.px-3.py-1.rounded.text-sm.transition
          {:class (if (= @mode :terminal) "bg-blue-600 text-white" "text-gray-400 hover:text-white")
           :on-click #(reset! mode :terminal)}
          "Terminal"]]]

       (case @mode
         :standard [standard-repl]
         :terminal [terminal-repl])])))
