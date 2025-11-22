(ns bb-web-ds-tools.components.common)

(defn button [props & children]
  (into [:button
         (merge {:class (str "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-200 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed " (:class props))
                 :on-click (:on-click props)
                 :disabled (:disabled props)}
                (dissoc props :class :on-click :disabled))]
        children))

(defn button-xs [props & children]
  (into [:button
         (merge {:class (str "text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded transition-colors " (:class props))
                 :on-click (:on-click props)}
                (dissoc props :class :on-click))]
        children))

(defn textarea [{:keys [value on-change placeholder class] :as props}]
  [:textarea
   (merge {:class (str "w-full bg-gray-900 text-gray-200 border border-gray-700 rounded p-4 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors " class)
           :value value
           :placeholder placeholder
           :on-change on-change}
          (dissoc props :class :value :placeholder :on-change))])

(defn pre-block [{:keys [content class]}]
  [:pre {:class (str "w-full bg-gray-950 text-green-400 border border-gray-800 rounded p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 " class)}
   content])

(defn card [props & children]
  (into [:div {:class (str "bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg " (:class props))}]
        children))

(defn page-header [title]
  [:div {:class "text-center mb-8"}
   [:h2 {:class "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"} title]])

(defn label [text]
  [:label {:class "block text-sm font-medium text-gray-400 mb-2"} text])
