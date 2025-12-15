(ns bb-web-ds-tools.components.landing.animations.common
  "Namespace: bb-web-ds-tools.components.landing.animations.common

  Key functions:
  - (clear [ctx w h])
  - zenburn
  - clear-rect

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require [bb-web-ds-tools.utils.themes :as themes]))

(def zenburn (themes/get-theme :zenburn))

(defn clear [ctx w h]
  (.clearRect ctx 0 0 w h))

(def clear-rect clear)
