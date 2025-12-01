(ns bb-web-ds-tools.card-usage-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [clojure.walk :as walk]
            [bb-web-ds-tools.core]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
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
  (rf/dispatch-sync [:malli/initialize])
  (let [inference (get-render malli/inference-view)
        generation (get-render malli/generation-view)
        rows (concat (find-component-usages l/flex-row inference)
                     (find-component-usages l/flex-row generation))]
    (is (seq rows) "Should find flex-row in malli (replacing split-view)")
    (doseq [row rows]
      ;; The second element (index 1) should be the props map.
      (is (map? (nth row 1)) (str "Flex-row props should be a map, found: " (pr-str (nth row 1)))))))

(deftest honeysql-layout-test
  (rf/dispatch-sync [:honeysql/initialize])
  (let [hiccup (get-render honeysql/panel)
        rows (find-component-usages l/flex-row hiccup)]
    (is (seq rows) "Should find flex-row in honeysql (replacing split-view)")
    (doseq [row rows]
      (is (map? (nth row 1)) (str "Flex-row props should be a map, found: " (pr-str (nth row 1)))))))
