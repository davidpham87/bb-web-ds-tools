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

(defn button-info [props & children]
  (into [button-xs (merge props {:class (str "!bg-blue-600 hover:!bg-blue-700 !text-white " (:class props))})]
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

(defn dustbin-icon [& [props]]
  [:svg (merge {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-4 h-4"} props)
   [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}]])

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

(defn tabs [{:keys [tabs active-tab-id on-change on-add class]}]
  [:div {:class (str "flex items-center space-x-2 border-b " t/border-default " " class)}
   [:div {:class "flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"}
    (for [{:keys [id label on-close]} tabs]
      ^{:key (str id)}
      [:div {:class (str "flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit "
                         (if (= id active-tab-id)
                           (str t/bg-card " " t/border-default " " t/text-accent " -mb-px pb-2.5 z-10")
                           (str t/bg-input " border-transparent " t/text-secondary " hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100")))
             :on-click #(when on-change (on-change id))}
       [:span {:class "whitespace-nowrap font-medium text-sm"} label]
       (when on-close
         [:button {:class (str "ml-2 p-0.5 rounded hover:bg-white/10 " t/text-muted " hover:text-red-400 transition-colors")
                   :on-click (fn [e]
                               (.stopPropagation e)
                               (on-close id))}
          [:span {:class "text-xs font-bold leading-none"} "✕"]])])]
   (when on-add
     [:button {:class (str "px-3 py-2 rounded-t-md " t/bg-button-xs " " t/bg-button-xs-hover " " t/text-button " font-bold text-lg leading-none mb-0.5")
               :on-click on-add
               :title "Add New"}
      "+"])])
