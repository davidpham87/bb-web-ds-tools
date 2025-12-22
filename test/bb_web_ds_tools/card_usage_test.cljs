(ns bb-web-ds-tools.card-usage-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [clojure.walk :as walk]
            [bb-web-ds-tools.core]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.layout.tool-view :refer [tool-view]]
            [bb-web-ds-tools.views.malli :as malli]
            [bb-web-ds-tools.views.honeysql :as honeysql]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(defn find-component-usages [component hiccup]
  (let [usages (atom [])]
    (walk/postwalk
     (fn [x]
       (when (and (vector? x) (= (first x) component))
         (swap! usages conj x))
       x)
     hiccup)
    @usages))

(defn get-render [component-fn]
  (let [res (component-fn)]
    (if (fn? res) (res) res)))

(deftest honeysql-layout-test
  (rf/dispatch-sync [:honeysql/initialize])
  (let [hiccup (get-render honeysql/panel)
        rows (find-component-usages tool-view hiccup)]
    (is (seq rows) "Should find tool-view in honeysql (replacing split-view)")
    (let [[_ props] (first rows)]
      (is (= "Convert to SQL" (:title props)))
      (is (= :honeysql (:wiki-key props))))))
