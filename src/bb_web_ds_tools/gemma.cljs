(ns bb-web-ds-tools.gemma
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.core :as fork]
            ["@mediapipe/tasks-genai" :as genai]))

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
           [:form {:on-submit handle-submit}
            [:div.model-loader
             [:h3 "Load Gemma Model"]
             [:p "Enter the URL to the .bin model file (e.g., from Kaggle or HuggingFace, if CORS allows, or a local file served via http)."]
             [:input {:type "text"
                      :name "url"
                      :placeholder "Model URL (e.g. /gemma-2b-it-gpu-int4.bin)"
                      :value (get values "url")
                      :on-change handle-change
                      :on-blur handle-blur
                      :style {:width "100%" :padding "8px"}}]
             [:button {:type "submit"
                       :disabled loading?
                       :style {:margin-top "10px"}}
              (if loading? "Loading..." "Load Model")]
             (when error
               [:div.error {:style {:color "red" :margin-top "10px"}} error])]])]))))

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
           [:form {:on-submit handle-submit}
            [:div.chat-interface
             [:div.messages {:style {:border "1px solid #ccc" :padding "10px" :height "400px" :overflow-y "scroll" :margin-bottom "10px"}}
              (for [[idx msg] (map-indexed vector messages)]
                [:div {:key idx :style {:margin-bottom "10px" :text-align (if (= (:role msg) :user) "right" "left")}}
                 [:strong (if (= (:role msg) :user) "You: " "Gemma: ")]
                 [:span (:content msg)]])]
             [:div.input-area
              [:textarea {:name "text"
                          :value (get values "text")
                          :on-change handle-change
                          :on-blur handle-blur
                          :style {:width "100%" :height "60px"}
                          :placeholder "Type your message..."
                          :disabled loading?}]
              [:button {:type "submit"
                        :disabled (or loading? (empty? (get values "text")))
                        :style {:margin-top "5px"}}
               "Send"]]]])]))))

(defn gemma-page []
  (let [loaded?-sub (rf/subscribe [::model-loaded?])]
    (fn []
      (let [loaded? @loaded?-sub]
        [:div.gemma-page {:style {:padding "20px"}}
         [:h2 "Gemma E4B Interaction"]
         (if loaded?
           [chat-interface]
           [model-loader])]))))
