(ns bb-web-ds-tools.gemma
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["@mediapipe/tasks-genai" :as genai]))

;; State for the LLM instance
(defonce llm-instance (r/atom nil))

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

;; Logic

(defn load-model [model-url]
  (rf/dispatch [::set-loading true])
  (-> (genai/FilesetResolver.forGenAiTasks
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm")
      (.then (fn [genai-fileset]
               (genai/LlmInference.createFromOptions genai-fileset
                                               #js {:baseOptions #js {:modelAssetPath model-url}})))
      (.then (fn [llm]
               (reset! llm-instance llm)
               (rf/dispatch [::model-loaded])))
      (.catch (fn [err]
                (rf/dispatch [::set-error (str "Failed to load model: " err)])))))

(defn send-message [text]
  (when @llm-instance
    (rf/dispatch [::add-message :user text])
    (rf/dispatch [::set-loading true])
    (try
      (let [response (.generateResponse @llm-instance text)]
        (rf/dispatch [::add-message :model response])
        (rf/dispatch [::set-loading false]))
      (catch js/Error e
        (rf/dispatch [::set-error (str "Generation failed: " e)])))))

;; UI Components

(defn model-loader []
  (let [url (r/atom "")] ;; User enters the URL or path to the model
    (fn []
      [:div.model-loader
       [:h3 "Load Gemma Model"]
       [:p "Enter the URL to the .bin model file (e.g., from Kaggle or HuggingFace, if CORS allows, or a local file served via http)."]
       [:input {:type "text"
                :placeholder "Model URL (e.g. /gemma-2b-it-gpu-int4.bin)"
                :value @url
                :on-change #(reset! url (-> % .-target .-value))
                :style {:width "100%" :padding "8px"}}]
       [:button {:on-click #(load-model @url)
                 :disabled @(rf/subscribe [::loading?])
                 :style {:margin-top "10px"}}
        (if @(rf/subscribe [::loading?]) "Loading..." "Load Model")]
       (when-let [err @(rf/subscribe [::error])]
         [:div.error {:style {:color "red" :margin-top "10px"}} err])])))

(defn chat-interface []
  (let [input-text (r/atom "")]
    (fn []
      (let [messages @(rf/subscribe [::messages])
            loading? @(rf/subscribe [::loading?])]
        [:div.chat-interface
         [:div.messages {:style {:border "1px solid #ccc" :padding "10px" :height "400px" :overflow-y "scroll" :margin-bottom "10px"}}
          (for [[idx msg] (map-indexed vector messages)]
            [:div {:key idx :style {:margin-bottom "10px" :text-align (if (= (:role msg) :user) "right" "left")}}
             [:strong (if (= (:role msg) :user) "You: " "Gemma: ")]
             [:span (:content msg)]])]
         [:div.input-area
          [:textarea {:value @input-text
                      :on-change #(reset! input-text (-> % .-target .-value))
                      :style {:width "100%" :height "60px"}
                      :placeholder "Type your message..."
                      :disabled loading?}]
          [:button {:on-click (fn []
                                (send-message @input-text)
                                (reset! input-text ""))
                    :disabled (or loading? (empty? @input-text))
                    :style {:margin-top "5px"}}
           "Send"]]]))))

(defn gemma-page []
  (let [loaded? @(rf/subscribe [::model-loaded?])]
    [:div.gemma-page {:style {:padding "20px"}}
     [:h2 "Gemma E4B Interaction"]
     (if loaded?
       [chat-interface]
       [model-loader])]))
