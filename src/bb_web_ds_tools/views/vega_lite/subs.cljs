(ns bb-web-ds-tools.views.vega-lite.subs
  (:require
   [bb-web-ds-tools.views.vega-lite.common :as common]
   [clojure.edn :as edn]
   [re-frame.core :as rf]))

(rf/reg-sub
 ::user-input-root
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input]
   (get-in user-input [:vega-lite :default])))

(rf/reg-sub
 ::saved-configs
 :<- [:bb-web-ds-tools.core/user-input]
 (fn [user-input]
   (get-in user-input [:vega-lite :saved-configs])))

(rf/reg-sub
 ::component-root
 (fn [db]
   (common/state-key db)))

(rf/reg-sub
 ::data-input
 :<- [::user-input-root]
 (fn [root]
   (:data-input root)))

(rf/reg-sub
 ::config-input
 :<- [::user-input-root]
 (fn [root]
   (:config-input root)))

(rf/reg-sub
 ::config-mode
 :<- [::user-input-root]
 (fn [root]
   (:config-mode root)))

(rf/reg-sub
 ::active-config-name
 :<- [::user-input-root]
 (fn [root]
   (:active-config-name root)))

(rf/reg-sub
 ::format
 :<- [::component-root]
 (fn [root]
   (:format root)))

(rf/reg-sub
 ::structure
 :<- [::component-root]
 (fn [root]
   (:structure root)))

(rf/reg-sub
 ::parsed-data
 :<- [::component-root]
 (fn [root]
   (:parsed-data root)))

(rf/reg-sub
 ::inferred-schema
 :<- [::component-root]
 (fn [root]
   (:inferred-schema root)))

(rf/reg-sub
 ::active-left-tab
 :<- [::component-root]
 (fn [root]
   (:active-left-tab root)))

(rf/reg-sub
 ::active-right-tab
 :<- [::component-root]
 (fn [root]
   (:active-right-tab root)))

(rf/reg-sub
 ::parsed-config-obj
 :<- [::config-input]
 :<- [::config-mode]
 (fn [[input mode]]
   (try
     (case mode
       :json (js/JSON.parse input)
       :edn (clj->js (edn/read-string input)))
     (catch js/Error _ nil))))

(rf/reg-sub
 ::logs
 (fn [db]
   (get-in db [:runtime :vega-lite :logs] [])))

(rf/reg-sub
 ::error
 (fn [db]
   (get-in db [:runtime :vega-lite :error])))
