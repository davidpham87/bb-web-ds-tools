(ns bb-web-ds-tools.components.common
  (:require [bb-web-ds-tools.theme :as t]
            [re-frame.core :as rf]))

(defn button [props & children]
  (into [:button
         (merge {:class (str t/bg-button " " t/bg-button-hover " " t/text-button " font-bold py-2 px-6 rounded shadow-sm transition-all duration-200 " t/bg-button-disabled " " t/text-disabled " disabled:cursor-not-allowed " (:class props))
                 :on-click (:on-click props)
                 :disabled (:disabled props)}
                (dissoc props :class :on-click :disabled))]
        children))

(defn button-xs [props & children]
  (into [:button
         (merge {:class (str "text-xs " t/bg-button-xs " " t/bg-button-xs-hover " " t/text-button " px-2 py-1 rounded transition-colors " (:class props))
                 :on-click (:on-click props)}
                (dissoc props :class :on-click))]
        children))

(defn input [{:keys [value on-change on-change-event placeholder class type checked] :as props}]
  (let [handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (let [new-val (if (= type "checkbox")
                                          (.. e -target -checked)
                                          (.. e -target -value))]
                            (rf/dispatch (conj on-change-event new-val)))))]
    [:input (merge {:class (str "w-full " t/bg-input " " t/text-primary " border " t/border-default " rounded px-2 py-1 " t/border-focus " " t/outline-none " " t/ring-focus " transition-colors " class)
                    :type (or type "text")
                    :value value
                    :checked checked
                    :on-change handle-change
                    :placeholder placeholder}
                   (dissoc props :class :value :on-change :on-change-event :placeholder :type :checked))]))

(defn select [props & children]
  (let [{:keys [on-change on-change-event]} props
        handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (rf/dispatch (conj on-change-event (.. e -target -value)))))]
    (into [:select (merge {:class (str t/bg-input " " t/text-primary " p-2 rounded border " t/border-default " " (:class props))
                           :value (:value props)
                           :on-change handle-change}
                          (dissoc props :class :value :on-change :on-change-event))]
          children)))

(defn textarea [{:keys [value on-change on-change-event placeholder class] :as props}]
  (let [handle-change (fn [e]
                        (when on-change (on-change e))
                        (when on-change-event
                          (rf/dispatch (conj on-change-event (.. e -target -value)))))]
    [:textarea
     (merge {:class (str "w-full " t/bg-input " " t/text-primary " border " t/border-default " rounded p-4 font-mono text-sm " t/border-focus " " t/outline-none " focus:ring-1 " t/ring-focus " transition-colors " class)
             :value value
             :placeholder placeholder
             :on-change handle-change}
            (dissoc props :class :value :placeholder :on-change :on-change-event))]))

(defn pre-block [{:keys [content class]}]
  [:pre {:class (str "w-full " t/bg-input " " t/text-code " border " t/border-subtle " rounded p-4 font-mono text-sm overflow-auto scrollbar-thin " class)}
   content])

(defn card [props & children]
  (into [:div (merge {:class (str t/bg-card " rounded shadow-md " t/text-primary " " (:class props))} (dissoc props :class))]
        children))

;; Table Components
(defn table-container [props & children]
  (into [:div {:class (str "overflow-x-auto " t/bg-table-body " rounded shadow-md border " t/border-subtle " " (:class props))}]
        children))

(defn table [props & children]
  (into [:table (merge {:class (str "min-w-full divide-y " t/border-subtle " " (:class props))}
                       (dissoc props :class))]
        children))

(defn thead [props & children]
  (into [:thead (merge {:class (str t/bg-table-head " " (:class props))}
                       (dissoc props :class))]
        children))

(defn tbody [props & children]
  (into [:tbody (merge {:class (str t/bg-table-body " divide-y " t/border-subtle " " (:class props))}
                       (dissoc props :class))]
        children))

(defn tr [props & children]
  (into [:tr (merge {:class (str t/bg-table-row-hover " transition-colors " (:class props))}
                    (dissoc props :class))]
        children))

(defn th [props & children]
  (into [:th (merge {:class (str "px-3 py-2 text-left text-xs font-medium " t/text-accent " uppercase tracking-wider " (:class props))}
                    (dissoc props :class))]
        children))

(defn td [props & children]
  (into [:td (merge {:class (str "px-3 py-1.5 whitespace-nowrap text-sm " t/text-primary " " (:class props))}
                    (dissoc props :class))]
        children))

(defn page-header [_]
  nil)

(defn label [text]
  [:label {:class (str "block text-sm font-medium " t/text-secondary " mb-2")} text])

(def nav-items
  [{:label "Workspaces" :route :workspaces :icon "📂"}
   {:label "App DB" :route :app-db :icon "🗄️"}
   {:label "Datasets" :route :datasets :icon "📊"}
   {:label "Malli" :route :malli :icon "✅"}
   {:label "HoneySQL" :route :honeysql :icon "🍯"}
   {:label "Vega-Lite" :route :vega-lite :icon "📈"}
   {:label "Gemma" :route :gemma :icon "🤖"}
   {:label "Pyodide" :route :pyodide :icon "🐍"}
   {:label "Editor" :route :editor :icon "📝"}
   {:label "Repl" :route :repl :icon "💻"}
   {:label "R" :route :r-repl :icon "🇷"}
   {:label "Settings" :route :settings :icon "⚙️"}
   {:label "Changelog" :route :changelog :icon "📜"}])
