(ns bb-web-ds-tools.components.common)

(defn button [props & children]
  (into [:button
         (merge {:class (str "bg-[#5f5f5f] hover:bg-[#6f6f6f] text-[#dcdccc] font-bold py-2 px-6 rounded transition-all duration-200 transform hover:scale-105 disabled:bg-gray-700 disabled:cursor-not-allowed shadow-md " (:class props))
                 :on-click (:on-click props)
                 :disabled (:disabled props)}
                (dissoc props :class :on-click :disabled))]
        children))

(defn button-xs [props & children]
  (into [:button
         (merge {:class (str "text-xs bg-[#4f4f4f] hover:bg-[#5f5f5f] text-[#dcdccc] px-2 py-1 rounded transition-colors " (:class props))
                 :on-click (:on-click props)}
                (dissoc props :class :on-click))]
        children))

(defn textarea [{:keys [value on-change placeholder class] :as props}]
  [:textarea
   (merge {:class (str "w-full bg-[#2f2f2f] text-[#dcdccc] border border-[#5f5f5f] rounded p-4 font-mono text-sm focus:border-[#8cd0d3] focus:outline-none focus:ring-1 focus:ring-[#8cd0d3] transition-colors " class)
           :value value
           :placeholder placeholder
           :on-change on-change}
          (dissoc props :class :value :placeholder :on-change))])

(defn pre-block [{:keys [content class]}]
  [:pre {:class (str "w-full bg-[#2f2f2f] text-[#93e0e3] border border-[#4f4f4f] rounded p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-[#5f5f5f] scrollbar-track-[#2f2f2f] " class)}
   content])

(defn card [props & children]
  (into [:div {:class (str "bg-[#3f3f3f]/90 backdrop-blur-sm rounded-lg p-6 border border-[#5f5f5f] shadow-lg text-[#dcdccc] " (:class props))}]
        children))

(defn page-header [title]
  [:div {:class "text-center mb-8"}
   [:h2 {:class "text-3xl font-bold text-[#f0dfaf] drop-shadow-sm"} title]])

(defn label [text]
  [:label {:class "block text-sm font-medium text-[#9f9f9f] mb-2"} text])
