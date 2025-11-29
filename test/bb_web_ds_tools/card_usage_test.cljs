(ns bb-web-ds-tools.card-usage-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [bb-web-ds-tools.test-setup :as setup]
            [clojure.walk :as walk]
            [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.layout :as l]
            [bb-web-ds-tools.views.malli :as malli]
            [bb-web-ds-tools.views.honeysql :as honeysql]))

(use-fixtures :once (fn [f] (setup/suppress-re-frame-warnings) (f)))

(defn find-component-usages [component hiccup]
  (let [usages (atom [])]
    (walk/postwalk
     (fn [x]
       (when (and (vector? x) (= (first x) component))
         (swap! usages conj x))
       x)
     hiccup)
    @usages))

(deftest malli-layout-test
  (rf/dispatch-sync [:malli/initialize])
  (let [inference (malli/inference-view)
        generation (malli/generation-view)
        splits (concat (find-component-usages l/split-view inference)
                       (find-component-usages l/split-view generation))]
    (is (seq splits) "Should find split-view in malli")
    (doseq [split splits]
      ;; The second element (index 1) should be the props map.
      (is (map? (nth split 1)) (str "Split-view props should be a map, found: " (pr-str (nth split 1)))))))

(deftest honeysql-layout-test
  (rf/dispatch-sync [:honeysql/initialize])
  (let [hiccup (honeysql/panel-render)
        splits (find-component-usages l/split-view hiccup)]
    (is (seq splits) "Should find split-view in honeysql")
    (doseq [split splits]
      (is (map? (nth split 1)) (str "Split-view props should be a map, found: " (pr-str (nth split 1)))))))
