(ns bb-web-ds-tools.components.layout
  (:require [bb-web-ds-tools.theme :as t]))

(defn page-container [props & children]
  (into [:div (merge {:class (str "min-h-screen " t/bg-page " " t/text-primary " " (:class props))}
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

(defn sidebar [props & children]
  (into [:aside (merge {:class (str "w-64 " t/bg-sidebar " border-r " t/border-main " flex flex-col h-full sticky top-12 " (:class props))}
                       (dissoc props :class))]
        children))

(defn header [props & children]
  (into [:header (merge {:class (str "mb-6 " (:class props))}
                        (dissoc props :class))]
        children))

(defn main [props & children]
  (into [:main (merge {:class (str "flex-grow p-6 overflow-x-hidden flex flex-col " (:class props))}
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
