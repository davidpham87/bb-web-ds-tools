(ns bb-web-ds-tools.components.layout
  (:require [bb-web-ds-tools.theme :as t]))

(defn page-container [props & children]
  (into [:div (merge {:class (str "h-screen w-full flex overflow-hidden " t/bg-page " " t/text-primary " " (:class props))}
                     (dissoc props :class))]
        children))

(defn container [props & children]
  (into [:div (merge {:class (str "container mx-auto px-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn section [props & children]
  (into [:section (merge {:class (str "py-16 " (:class props))}
                         (dissoc props :class))]
        children))

(defn grid [props & children]
  (into [:div (merge {:class (str "grid gap-8 " (:class props))}
                     (dissoc props :class))]
        children))

(defn flex-row [props & children]
  (into [:div (merge {:class (str "flex items-center " (:class props))}
                     (dissoc props :class))]
        children))

(defn flex-col [props & children]
  (into [:div (merge {:class (str "flex flex-col " (:class props))}
                     (dissoc props :class))]
        children))

(defn header [props & children]
  (into [:header (merge {:class (str "mb-6 " (:class props))}
                        (dissoc props :class))]
        children))

(defn main [props & children]
  (into [:main (merge {:class (str "flex-grow flex flex-col overflow-hidden relative " (:class props))}
                      (dissoc props :class))]
        children))

(defn row [props & children]
  (into [:div (merge {:class (str "flex flex-wrap -mx-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn col [props & children]
  (into [:div (merge {:class (str "px-4 " (:class props))}
                     (dissoc props :class))]
        children))

(defn split-view [{:keys [ratio] :or {ratio :2-1} :as props} left right]
  (let [left-width (case ratio
                     :1-1 "w-full"
                     :2-1 "w-full md:w-2/3"
                     :1-2 "w-full md:w-1/3"
                     :1-3 "w-full md:w-1/4"
                     "w-full md:w-1/3")
        right-width (case ratio
                      :1-1 "w-full md:w-1/2"
                      :2-1 "w-full md:w-1/3"
                      :1-2 "w-full md:w-2/3"
                      :1-3 "w-full md:w-3/4"
                      "w-full md:w-2/3")]
    [:div {:class "flex flex-col md:flex-row h-full w-full overflow-hidden"}
     [:div {:class (str "h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] " left-width)}
      left]
     [:div {:class (str "h-1/2 md:h-full overflow-auto " right-width)}
      right]]))
