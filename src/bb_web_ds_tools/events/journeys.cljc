(ns bb-web-ds-tools.events.journeys
  (:require [malli.core :as m]))

(def view-events
  "Mapping of events in each of the views."
  {:malli
   [:malli/initialize
    :malli/update-schema-text
    :malli/update-inference-input
    :malli/set-active-tab
    :malli/set-input-format
    :malli/set-generation-samples
    :malli/set-generation-format
    :malli/parse-schema-and-generate
    :malli/generate-data
    :malli/infer-schema
    :malli/save-dataset
    :malli/load-dataset
    :malli/validate
    :malli/transform-json]

   :r-repl
   [:bb-web-ds-tools.views.r-repl/initialize
    :bb-web-ds-tools.views.r-repl/set-loading
    :bb-web-ds-tools.views.r-repl/set-ready
    :bb-web-ds-tools.views.r-repl/set-error
    :bb-web-ds-tools.views.r-repl/set-code
    :bb-web-ds-tools.views.r-repl/append-output
    :bb-web-ds-tools.views.r-repl/clear-output
    :bb-web-ds-tools.views.r-repl/initialize-runtime
    :bb-web-ds-tools.views.r-repl/run-code]

   :honeysql
   [:honeysql/initialize
    :honeysql/update-input
    :honeysql/convert-to-sql]

   :app-db
   [:bb-web-ds-tools.views.app-db/add-watch-path
    :bb-web-ds-tools.views.app-db/remove-watch-path
    :bb-web-ds-tools.views.app-db/update-path-value
    :bb-web-ds-tools.views.app-db/open-in-portal]

   :pyodide
   [:bb-web-ds-tools.views.pyodide/initialize
    :bb-web-ds-tools.views.pyodide/set-code]

   :gemma
   [:bb-web-ds-tools.views.gemma/initialize
    :bb-web-ds-tools.views.gemma/set-loading
    :bb-web-ds-tools.views.gemma/set-error
    :bb-web-ds-tools.views.gemma/model-loaded
    :bb-web-ds-tools.views.gemma/add-message
    :bb-web-ds-tools.views.gemma/load-model
    :bb-web-ds-tools.views.gemma/send-message]

   :repl
   [:bb-web-ds-tools.views.repl/add-instance
    :bb-web-ds-tools.views.repl/eval-code]

   :vega-lite
   [:bb-web-ds-tools.views.vega-lite/initialize
    :bb-web-ds-tools.views.vega-lite/set-data-input
    :bb-web-ds-tools.views.vega-lite/set-config-input
    :bb-web-ds-tools.views.vega-lite/set-config-mode
    :bb-web-ds-tools.views.vega-lite/set-active-config-name
    :bb-web-ds-tools.views.vega-lite/set-format
    :bb-web-ds-tools.views.vega-lite/set-structure
    :bb-web-ds-tools.views.vega-lite/set-active-left-tab
    :bb-web-ds-tools.views.vega-lite/set-active-right-tab
    :bb-web-ds-tools.views.vega-lite/save-config
    :bb-web-ds-tools.views.vega-lite/load-config
    :bb-web-ds-tools.views.vega-lite/delete-config
    :bb-web-ds-tools.views.vega-lite/import-dataset
    :bb-web-ds-tools.views.vega-lite/parse-data]

   :datasets
   [:bb-web-ds-tools.views.datasets/initialize
    :bb-web-ds-tools.views.datasets/set-active-dataset-id
    :bb-web-ds-tools.views.datasets/update-new-dataset-state
    :bb-web-ds-tools.views.datasets/add-dataset
    :bb-web-ds-tools.views.datasets/delete-dataset
    :bb-web-ds-tools.views.datasets/update-dataset-name
    :bb-web-ds-tools.views.datasets/update-cell
    :bb-web-ds-tools.views.datasets/update-view-state]

   :editor
   [:bb-web-ds-tools.views.editor/save-code]

   :settings
   [:bb-web-ds-tools.portal/open]

   :core
   [:bb-web-ds-tools.core/navigate
    :bb-web-ds-tools.core/initialize-db
    :bb-web-ds-tools.core/code-changed]

   :portal
   [:bb-web-ds-tools.portal/open
    :bb-web-ds-tools.portal/submit]})

(def fsm-schema
  "Recursive schema for a possible Finite State Machine.
   Supports Hierarchical State Machines (states can contain sub-states)."
  [:schema
   {:registry
    {::state [:map
              [:name keyword?]
              [:type [:enum :atomic :compound :final]]
              [:initial {:optional true} keyword?] ;; Entry point for compound states
              [:states {:optional true} [:map-of keyword? [:ref ::state]]] ;; Sub-states
              [:on {:optional true}
               [:map-of keyword? ;; Event name
                [:map
                 [:target keyword?] ;; Target state name
                 [:action {:optional true} keyword?] ;; Side effect / action name
                 [:guard {:optional true} fn?]]]]]} ;; Guard function
    }
   [:ref ::state]])
