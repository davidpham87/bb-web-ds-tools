(ns bb-web-ds-tools.views.gemma
  "Key functions:
  - (model-loader [])
  - (chat-interface [])
  - (panel [])

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            ["@mediapipe/tasks-genai" :as genai]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.navigation :as nav]))

;; State for the LLM instance
(defonce llm-instance (r/atom nil))

;; Re-frame effects

(rf/reg-fx
 ::load-model-fx
 (fn [model-url]
   (-> (genai/FilesetResolver.forGenAiTasks
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm")
       (.then (fn [genai-fileset]
                (genai/LlmInference.createFromOptions genai-fileset
                                                      #js {:baseOptions #js {:modelAssetPath model-url}})))
       (.then (fn [llm]
                (reset! llm-instance llm)
                (rf/dispatch [::model-loaded])))
       (.catch (fn [err]
                 (rf/dispatch [::set-error (str "Failed to load model: " err)]))))))

(rf/reg-fx
 ::generate-response-fx
 (fn [text]
   (try
     (let [response (.generateResponse ^js @llm-instance text)]
       (rf/dispatch [::add-message :model response])
       (rf/dispatch [::set-loading false]))
     (catch js/Error e
       (rf/dispatch [::set-error (str "Generation failed: " e)])))))

;; Re-frame events and subscriptions

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (-> db
       (assoc-in [:user-input :gemma :default]
                 {:messages []})
       (assoc ::gemma {:loading? false
                       :error nil
                       :model-loaded? false}))))

(rf/reg-event-db
 ::set-loading
 (fn [db [_ loading?]]
   (assoc-in db [::gemma :loading?] loading?)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ error]]
   (update db ::gemma
           assoc :error error :loading? false)))

(rf/reg-event-db
 ::model-loaded
 (fn [db _]
   (update db ::gemma
           assoc :model-loaded? true :loading? false :error nil)))

(rf/reg-event-db
 ::add-message
 (fn [db [_ role text]]
   (update-in db [:user-input :gemma :default :messages] conj {:role role :content text})))

(rf/reg-event-fx
 ::load-model
 (fn [{:keys [db]} [_ model-url]]
   {:db (assoc-in db [::gemma :loading?] true)
    :fx [[::load-model-fx model-url]]}))

(rf/reg-event-fx
 ::send-message
 (fn [{:keys [db]} [_ text]]
   (if @llm-instance
     {:db (-> db
              (update-in [:user-input :gemma :default :messages] conj {:role :user :content text})
              (assoc-in [::gemma :loading?] true))
      :fx [[::generate-response-fx text]]}
     {})))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input _]
   (get-in user-input [:gemma :default])))

(rf/reg-sub
 ::component-root
 (fn [db _]
   (::gemma db)))

(rf/reg-sub
 ::messages
 :<- [::user-input-root]
 (fn [root]
   (:messages root)))

(rf/reg-sub
 ::loading?
 :<- [::component-root]
 (fn [root]
   (:loading? root)))

(rf/reg-sub
 ::error
 :<- [::component-root]
 (fn [root]
   (:error root)))

(rf/reg-sub
 ::model-loaded?
 :<- [::component-root]
 (fn [root]
   (:model-loaded? root)))

;; UI Components

(defn model-loader
  "Renders the Gemma model loading interface.

  Returns:
    vector: A hiccup vector."
  []
  (let [loading?-sub (rf/subscribe [::loading?])
        error-sub (rf/subscribe [::error])]
    (fn []
      (let [loading? @loading?-sub
            error @error-sub]
        [fork/form {:initial-values {"url" ""}
                    :prevent-default? true
                    :on-submit (fn [{:keys [values]}]
                                 (rf/dispatch [::load-model (get values "url")]))}
         (fn [{:keys [values handle-change handle-blur handle-submit]}]
           [:form {:on-submit handle-submit :class "max-w-2xl mx-auto"}
            [c/card {}
             [:div
              [c/section-header "Load Gemma Model"
                [c/help-button
                {:href (nav/get-wiki-url :gemma)
                 :title "Help: Gemma"
                  :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]
              [:p {:class "text-[#dcdccc] mb-4 text-sm"} "Enter the URL to the .bin model file (e.g., from Kaggle or Hugging Face)."]
              [:input {:type "text"
                       :name "url"
                       :placeholder "Model URL (e.g. /gemma-2b-it-gpu-int4.bin)"
                       :value (get values "url")
                       :on-change handle-change
                       :on-blur handle-blur
                       :class "w-full bg-[#2f2f2f] text-[#dcdccc] border border-[#5f5f5f] rounded p-3 mb-4 focus:ring-2 focus:ring-[#8cd0d3] focus:outline-none"}]
              [c/button {:type "submit"
                         :disabled loading?
                         :class "w-full"}
               (if loading? "Loading..." "Load Model")]
              (when error
                [:div {:class "text-[#cc9393] mt-4 p-3 bg-[#3f3f3f] border border-[#cc9393] rounded"} error])]]])]))))

(defn chat-interface
  "Renders the chat interface for Gemma.

  Returns:
    vector: A hiccup vector."
  []
  (let [messages-sub (rf/subscribe [::messages])
        loading?-sub (rf/subscribe [::loading?])]
    (fn []
      (let [messages @messages-sub
            loading? @loading?-sub]
        [fork/form {:initial-values {"text" ""}
                    :prevent-default? true
                    :on-submit (fn [{:keys [values reset]}]
                                 (rf/dispatch [::send-message (get values "text")])
                                 (reset))}
         (fn [{:keys [values handle-change handle-blur handle-submit]}]
           [:form {:on-submit handle-submit :class "max-w-4xl mx-auto"}
            [c/card {}
             [:div
              [c/section-header "Gemma Chat"
               [c/help-button
                {:href (nav/get-wiki-url :gemma)
                 :title "Help: Gemma"
                 :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"}]]
              [:div.messages {:class "bg-[#2f2f2f] border border-[#5f5f5f] rounded-lg p-4 h-[500px] overflow-y-auto mb-4 custom-scrollbar"}
               (for [[idx msg] (map-indexed vector messages)]
                 [:div {:key idx :class (str "mb-4 " (if (= (:role msg) :user) "text-right" "text-left"))}
                  [:div {:class (str "inline-block px-4 py-2 rounded-lg max-w-[80%] "
                                     (if (= (:role msg) :user)
                                       "bg-[#7f9f7f] text-[#3f3f3f]"
                                       "bg-[#4f4f4f] text-[#dcdccc] border border-[#5f5f5f]"))}
                   [:div {:class "text-xs opacity-75 mb-1 font-bold"} (if (= (:role msg) :user) "You" "Gemma")]
                   [:span (:content msg)]]])]
              [:div.input-area {:class "flex gap-4"}
               [:textarea {:name "text"
                           :value (get values "text")
                           :on-change handle-change
                           :on-blur handle-blur
                           :class "flex-1 bg-[#2f2f2f] text-[#dcdccc] border border-[#5f5f5f] rounded p-3 h-20 focus:ring-2 focus:ring-[#8cd0d3] focus:outline-none resize-none"
                           :placeholder "Type your message..."
                           :disabled loading?}]
               [c/button {:type "submit"
                          :disabled (or loading? (empty? (get values "text")))
                          :class "h-20 px-8"}
                "Send"]]]]])]))))

(defn panel
  "Renders the main Gemma view panel.

  Returns:
    vector: A hiccup vector."
  []
  (rf/dispatch-sync [::initialize])
  (let [loaded?-sub (rf/subscribe [::model-loaded?])]
    (fn []
      (let [loaded? @loaded?-sub]
        [:div.gemma-page {:class "h-full w-full overflow-y-auto"}
         [:div {:class "container mx-auto px-4 py-6"}
          (if loaded?
            [chat-interface]
            [model-loader])]]))))
