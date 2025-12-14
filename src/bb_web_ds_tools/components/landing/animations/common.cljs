(ns bb-web-ds-tools.components.landing.animations.common
  "Reagent component library for common.

  Key functionality:
  - (clear [ctx w h])
  - zenburn
  - clear-rect"
  (:require [bb-web-ds-tools.utils.themes :as themes]))

(def zenburn (themes/get-theme :zenburn))

(defn clear [ctx w h]
  (.clearRect ctx 0 0 w h))

(def clear-rect clear)
