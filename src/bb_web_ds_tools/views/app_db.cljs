(ns bb-web-ds-tools.views.app-db
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :refer [read-string]]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.editor :refer [monaco-editor]]))

(rf/reg-sub
 ::whole-db
 (fn [db _]
   db))

(rf/reg-event-db
 ::update-db
 (fn [_ [_ new-db]]
   new-db))

(defn panel []
  (let [db @(rf/subscribe [::whole-db])]
    (r/with-let [local-edn (r/atom (with-out-str (pprint db)))]
      [:div {:class "p-4 h-[calc(100vh-4rem)] flex flex-col space-y-4 text-[#dcdccc]"}
       [:div {:class "flex justify-between items-center"}
        [:h2 {:class "text-2xl font-bold"} "App DB Editor"]
        [:div {:class "space-x-2"}
         [c/button
          {:on-click #(reset! local-edn (with-out-str (pprint db)))}
          "Refresh"]
         [c/button
          {:on-click (fn []
                       (try
                         (let [new-db (read-string @local-edn)]
                           (rf/dispatch [::update-db new-db]))
                         (catch :default e
                           (js/alert (str "Invalid EDN: " (.-message e))))))}
          "Update DB"]]]

       [c/card {:class "flex-grow p-0 overflow-hidden border border-gray-700"}
        [monaco-editor
         {:value @local-edn
          :language "clojure"
          :theme "zenburn"
          :options {:minimap {:enabled false}
                    :fontSize 14
                    :scrollBeyondLastLine false}
          :on-change #(reset! local-edn %)}]]])))
