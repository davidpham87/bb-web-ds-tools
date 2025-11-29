(ns bb-web-ds-tools.components.malli
  (:require [malli.provider :as mp]
            [malli.generator :as mg]
            [clojure.string :as str]
            #?(:cljs [cljs.pprint :as pprint]
               :clj [clojure.pprint :as pprint])
            #?(:cljs [cljs.reader :as reader]
               :clj [clojure.edn :as reader])
            #?(:clj [cheshire.core :as json])
            #?(:cljs [bb-web-ds-tools.components.common :as c])))

;; Utils

(defn parse-int [s]
  #?(:cljs (js/parseInt s)
     :clj (Integer/parseInt s)))

(defn read-edn [s]
  (reader/read-string s))

(defn parse-json [s]
  #?(:cljs (js->clj (js/JSON.parse s) :keywordize-keys true)
     :clj (json/parse-string s true)))

(defn generate-json [data]
  #?(:cljs (js/JSON.stringify (clj->js data) nil 2)
     :clj (json/generate-string data {:pretty true})))

(defn pretty-print-str [data]
  (with-out-str (pprint/pprint data)))

;; Component Logic

(defn detect-and-parse [text]
  (if (str/blank? text)
    nil
    (try
      (read-edn text)
      (catch #?(:cljs :default :clj Exception) _
        (try
          (parse-json text)
          (catch #?(:cljs :default :clj Exception) _ nil))))))

(defn parse-schema-and-generate [schema-text]
  (try
    (let [schema (read-edn schema-text)]
      {:success true :schema schema})
    (catch #?(:cljs :default :clj Exception) e
      {:success false :error (str "Invalid schema EDN: " (ex-message e))})))

(defn generate-data [schema samples format]
  (if schema
    (let [data (if (> samples 1)
                 (vec (repeatedly samples #(mg/generate schema)))
                 (mg/generate schema))
          output (case format
                   :edn (pretty-print-str data)
                   :json (generate-json data)
                   (pr-str data))]
      {:success true :output output :data data})
    {:success false :error "Invalid schema."}))

(defn infer-schema [input-data]
  (if (and (coll? input-data) (seq input-data))
    {:success true
     :schema-str (pretty-print-str (mp/provide input-data))}
    {:success false
     :error "Invalid input data or empty sequence."}))

(defn save-dataset-data [generated-data format]
   (case format
      :edn (try (read-edn generated-data) (catch #?(:cljs :default :clj Exception) _ nil))
      :json (try (parse-json generated-data) (catch #?(:cljs :default :clj Exception) _ nil))
      nil))

;; Legacy UI Components (kept for stories compatibility)
#?(:cljs
   (do
     (defn inference-panel [{:keys [values handle-change on-infer inferred-schema]}]
       [c/card {}
        [:div
         [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
          [:span "🧩"] "Schema Inference"]
         [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
          [:div
           [c/label "Input Data (EDN)"]
           [c/textarea {:value (get values "inference-input")
                        :name "inference-input"
                        :placeholder "{:user/name \"Alice\" :user/age 30}"
                        :on-change handle-change
                        :class "h-64"}]
           [:div {:class "mt-4"}
            [c/button {:on-click on-infer} "Infer Schema"]]]
          [:div
           [c/label "Inferred Schema"]
           [c/pre-block {:content inferred-schema :class "h-64"}]]]]])

     (defn generation-panel [{:keys [values handle-change on-generate generated-data]}]
       [c/card {}
        [:div
         [:h3 {:class "text-xl font-semibold text-white mb-4 flex items-center gap-2"}
          [:span "🎲"] "Data Generation"]
         [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
          [:div
           [c/label "Schema (EDN)"]
           [c/textarea {:value (get values "schema-text")
                        :name "schema-text"
                        :placeholder "[:map [:x int?] [:y int?]]"
                        :on-change handle-change
                        :class "h-64"}]
           [:div {:class "mt-4"}
            [c/button {:on-click on-generate} "Generate Data"]]]
          [:div
           [c/label "Generated Data"]
           [c/pre-block {:content generated-data :class "h-64"}]]]]])))
