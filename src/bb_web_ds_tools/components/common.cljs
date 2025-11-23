(ns bb-web-ds-tools.components.common)

(defn button [props & children]
  (into [:button
         (merge {:class (str "bg-floating hover:bg-gray-700 text-gray-200 font-ui font-medium py-2 px-6 rounded transition-all duration-200 transform hover:scale-105 disabled:bg-gray-800 disabled:cursor-not-allowed shadow-md border border-subtle " (:class props))
                 :on-click (:on-click props)
                 :disabled (:disabled props)}
                (dissoc props :class :on-click :disabled))]
        children))

(defn button-xs [props & children]
  (into [:button
         (merge {:class (str "text-xs font-ui bg-floating hover:bg-gray-700 text-gray-200 px-2 py-1 rounded border border-subtle transition-colors " (:class props))
                 :on-click (:on-click props)}
                (dissoc props :class :on-click))]
        children))

(defn textarea [{:keys [value on-change placeholder class] :as props}]
  [:textarea
   (merge {:class (str "w-full bg-canvas text-gray-200 border border-subtle rounded p-4 font-code text-sm focus:border-focus-blue focus:outline-none focus:ring-1 focus:ring-focus-blue transition-colors " class)
           :value value
           :placeholder placeholder
           :on-change on-change}
          (dissoc props :class :value :placeholder :on-change))])

(defn pre-block [{:keys [content class]}]
  [:pre {:class (str "w-full bg-canvas text-gray-200 border border-subtle rounded p-4 font-code text-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent " class)}
   content])

(defn card [props & children]
  (into [:div {:class (str "bg-surface rounded-lg p-6 border border-subtle text-gray-200 " (:class props))}]
        children))

(defn page-header [title]
  [:div {:class "text-center mb-8"}
   [:h2 {:class "text-3xl font-ui font-bold text-gray-100 drop-shadow-sm"} title]])

(defn label [text]
  [:label {:class "block text-xs font-ui font-medium text-gray-400 uppercase tracking-wider mb-2"} text])

(defn progress-bar []
  [:div {:class "w-full h-px bg-surface overflow-hidden rounded-t"}
   [:div {:class "h-full bg-focus-blue animate-pulse w-full origin-left"}]])
