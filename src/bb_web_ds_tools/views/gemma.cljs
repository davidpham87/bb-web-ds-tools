(ns bb-web-ds-tools.views.gemma
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            ["@mediapipe/tasks-genai" :as genai]
            [bb-web-ds-tools.components.common :as c]))

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
     (let [response (.generateResponse @llm-instance text)]
       (rf/dispatch [::add-message :model response])
       (rf/dispatch [::set-loading false]))
     (catch js/Error e
       (rf/dispatch [::set-error (str "Generation failed: " e)])))))

;; Re-frame events and subscriptions

(rf/reg-event-db
 ::initialize
 (fn [db _]
   (assoc db :gemma/messages []
             :gemma/loading? false
             :gemma/error nil
             :gemma/model-loaded? false)))

(rf/reg-event-db
 ::set-loading
 (fn [db [_ loading?]]
   (assoc db :gemma/loading? loading?)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ error]]
   (assoc db :gemma/error error
             :gemma/loading? false)))

(rf/reg-event-db
 ::model-loaded
 (fn [db _]
   (assoc db :gemma/model-loaded? true
             :gemma/loading? false
             :gemma/error nil)))

(rf/reg-event-db
 ::add-message
 (fn [db [_ role text]]
   (update db :gemma/messages conj {:role role :content text})))

(rf/reg-event-fx
 ::load-model
 (fn [{:keys [db]} [_ model-url]]
   {:db (assoc db :gemma/loading? true)
    :fx [[::load-model-fx model-url]]}))

(rf/reg-event-fx
 ::send-message
 (fn [{:keys [db]} [_ text]]
   (if @llm-instance
     {:db (-> db
              (update :gemma/messages conj {:role :user :content text})
              (assoc :gemma/loading? true))
      :fx [[::generate-response-fx text]]}
     {})))

(rf/reg-sub
 ::messages
 (fn [db]
   (:gemma/messages db)))

(rf/reg-sub
 ::loading?
 (fn [db]
   (:gemma/loading? db)))

(rf/reg-sub
 ::error
 (fn [db]
   (:gemma/error db)))

(rf/reg-sub
 ::model-loaded?
 (fn [db]
   (:gemma/model-loaded? db)))

;; UI Components

(defn model-loader []
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
            [c/card
             [:div
              [:h3 {:class "text-xl font-bold text-white mb-2"} "Load Gemma Model"]
              [:p {:class "text-gray-400 mb-4 text-sm"} "Enter the URL to the .bin model file (e.g., from Kaggle or HuggingFace)."]
              [:input {:type "text"
                       :name "url"
                       :placeholder "Model URL (e.g. /gemma-2b-it-gpu-int4.bin)"
                       :value (get values "url")
                       :on-change handle-change
                       :on-blur handle-blur
                       :class "w-full bg-gray-900 text-white border border-gray-600 rounded p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"}]
              [c/button {:type "submit"
                         :disabled loading?
                         :class "w-full"}
               (if loading? "Loading..." "Load Model")]
              (when error
                [:div {:class "text-red-400 mt-4 p-3 bg-red-900/30 border border-red-800 rounded"} error])]]])]))))

(defn chat-interface []
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
            [c/card
             [:div
              [:div.messages {:class "bg-gray-900 border border-gray-700 rounded-lg p-4 h-[500px] overflow-y-auto mb-4 custom-scrollbar"}
               (for [[idx msg] (map-indexed vector messages)]
                 [:div {:key idx :class (str "mb-4 " (if (= (:role msg) :user) "text-right" "text-left"))}
                  [:div {:class (str "inline-block px-4 py-2 rounded-lg max-w-[80%] "
                                     (if (= (:role msg) :user)
                                       "bg-blue-600 text-white"
                                       "bg-gray-800 text-gray-200 border border-gray-700"))}
                   [:div {:class "text-xs opacity-75 mb-1 font-bold"} (if (= (:role msg) :user) "You" "Gemma")]
                   [:span (:content msg)]]])]
              [:div.input-area {:class "flex gap-4"}
               [:textarea {:name "text"
                           :value (get values "text")
                           :on-change handle-change
                           :on-blur handle-blur
                           :class "flex-1 bg-gray-800 text-white border border-gray-700 rounded p-3 h-20 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                           :placeholder "Type your message..."
                           :disabled loading?}]
               [c/button {:type "submit"
                          :disabled (or loading? (empty? (get values "text")))
                          :class "h-20 px-8"}
                "Send"]]]]])]))))

(defn panel []
  (let [loaded?-sub (rf/subscribe [::model-loaded?])]
    (fn []
      (let [loaded? @loaded?-sub]
        [:div.gemma-page {:class "container mx-auto px-4 py-8"}
         [c/page-header "Gemma Local LLM"]
         (if loaded?
           [chat-interface]
           [model-loader])]))))
