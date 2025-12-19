(ns bb-web-ds-tools.card-usage-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [clojure.walk :as walk]
            [bb-web-ds-tools.core]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.components.layout.tool-view :as tool-view]
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

(deftest malli-layout-test
  (let [mock-props {:controls [:div "ctrl"] :editors [] :output "out"}
        view (tool-view/tool-view mock-props)
        rows (find-component-usages l/flex-row view)]
    (is (seq rows) "Should find flex-row in tool-view")
    (doseq [row rows]
      (is (map? (nth row 1)) (str "Flex-row props should be a map, found: " (pr-str (nth row 1)))))))

(deftest honeysql-layout-test
  (rf/dispatch-sync [:honeysql/initialize])
  (let [hiccup (get-render honeysql/panel)
        rows (find-component-usages tool-view/tool-view hiccup)]
    (is (seq rows) "Should find tool-view in honeysql (replacing split-view)")
    (doseq [row rows]
      (is (map? (nth row 1)) (str "Tool-view props should be a map, found: " (pr-str (nth row 1)))))))
