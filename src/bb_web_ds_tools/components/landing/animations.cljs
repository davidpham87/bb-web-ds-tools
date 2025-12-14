(ns bb-web-ds-tools.components.landing.animations
  "Component for animations."
  (:require
   [bb-web-ds-tools.utils.themes :as themes]
   [bb-web-ds-tools.components.landing.animations.app-db :as aa]
   [bb-web-ds-tools.components.landing.animations.datasets :as ad]
   [bb-web-ds-tools.components.landing.animations.code :as ac]
   [bb-web-ds-tools.components.landing.animations.malli :as am]
   [bb-web-ds-tools.components.landing.animations.workspaces :as aw]
   [bb-web-ds-tools.components.landing.animations.fast-io :as afi]
   [bb-web-ds-tools.components.landing.animations.instant-charts :as aic]
   [bb-web-ds-tools.components.landing.animations.multi-runtime :as amr]
   [bb-web-ds-tools.components.landing.animations.honeysql :as ah]
   [bb-web-ds-tools.components.landing.animations.vega-lite :as avl]
   [bb-web-ds-tools.components.landing.animations.gemma :as ag]
   [bb-web-ds-tools.components.landing.animations.settings :as as]
   [bb-web-ds-tools.components.landing.animations.changelog :as acl]))

(def zenburn (themes/get-theme :zenburn))

(defn clear [ctx w h]
  (.clearRect ctx 0 0 w h))

(defn clear-rect [ctx w h]
  (.clearRect ctx 0 0 w h))

(def draw-workspaces aw/draw-workspaces)
(def draw-app-db aa/draw-app-db)
(def draw-datasets ad/draw-datasets)
(def draw-code ac/draw-code)
(def draw-malli am/draw-malli)
(def draw-fast-io afi/draw-fast-io)
(def draw-instant-charts aic/draw-instant-charts)
(def draw-multi-runtime amr/draw-multi-runtime)
(def draw-honeysql ah/draw-honeysql)
(def draw-vega-lite avl/draw-vega-lite)
(def draw-gemma ag/draw-gemma)
(def draw-settings as/draw-settings)
(def draw-changelog acl/draw-changelog)
