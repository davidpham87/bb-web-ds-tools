(ns bb-web-ds-tools.components.common
  (:require [bb-web-ds-tools.theme :as t]))

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

(defn textarea [{:keys [value on-change placeholder class] :as props}]
  [:textarea
   (merge {:class (str "w-full " t/bg-input " " t/text-primary " border " t/border-default " rounded p-4 font-mono text-sm " t/border-focus " " t/outline-none " focus:ring-1 " t/ring-focus " transition-colors " class)
           :value value
           :placeholder placeholder
           :on-change on-change}
          (dissoc props :class :value :placeholder :on-change))])

(defn pre-block [{:keys [content class]}]
  [:pre {:class (str "w-full " t/bg-input " " t/text-code " border " t/border-subtle " rounded p-4 font-mono text-sm overflow-auto scrollbar-thin " class)}
   content])

(defn card [props & children]
  (into [:div {:class (str t/bg-card " rounded shadow-md " t/text-primary " " (:class props))}]
        children))

(defn page-header [_]
  nil)

(defn label [text]
  [:label {:class (str "block text-sm font-medium " t/text-secondary " mb-2")} text])
