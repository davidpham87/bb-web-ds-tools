(ns bb-web-ds-tools.components.malli
  (:require [clojure.string :as str]
            [malli.provider :as mp]
            [malli.generator :as mg]
            [clojure.edn :as edn]
            #?(:cljs [cljs.pprint :as pprint]
               :clj [clojure.pprint :as pprint])
            #?(:cljs [bb-web-ds-tools.components.common :as c])))

;; --- Logic ---

(defn- parse-json [text]
  #?(:cljs (try
             (js->clj (js/JSON.parse text) :keywordize-keys true)
             (catch :default _ nil))
     :bb (try
           ((requiring-resolve 'cheshire.core/parse-string) text true)
           (catch :default _ nil))
     :clj nil))

(defn- stringify-json [data]
  #?(:cljs (js/JSON.stringify (clj->js data) nil 2)
     :bb ((requiring-resolve 'cheshire.core/generate-string) data {:pretty true})
     :clj (pr-str data)))

(defn detect-and-parse [text]
  (if (str/blank? text)
    nil
    (try
      (edn/read-string text)
      (catch #?(:cljs :default :clj Exception) _
        (parse-json text)))))

(defn infer-schema [data]
  (when (and (coll? data) (seq data))
    (with-out-str (pprint/pprint (mp/provide data)))))

(defn generate-data [schema-text samples format]
  (try
    (let [schema (edn/read-string schema-text)
          data (if (> samples 1)
                 (vec (repeatedly samples #(mg/generate schema)))
                 (mg/generate schema))]
      (case format
        :edn (with-out-str (pprint/pprint data))
        :json (stringify-json data)
        (pr-str data)))
    (catch #?(:cljs :default :clj Exception) e
      (str "Error: " (ex-message e)))))

;; --- UI ---

#?(:cljs
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
         [c/pre-block {:content inferred-schema :class "h-64"}]]]]]))

#?(:cljs
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
         [c/pre-block {:content generated-data :class "h-64"}]]]]]))
