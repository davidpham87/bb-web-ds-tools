# Finite State Machine Logic & Event Mapping

This document describes the logic behind the Finite State Machine (FSM) schema and the event mapping for the `bb-web-ds-tools` application.

## Event Mapping

The `bb-web-ds-tools.events.journeys` namespace contains a `view-events` map that catalogs all re-frame events triggered by different views in the application.

This mapping serves as a reference for:
- Understanding which events belong to which domain (View).
- Designing user journeys and test scenarios.
- auditing the application's event surface.

### Structure

The map is keyed by the view name (as a keyword, e.g., `:malli`, `:datasets`) and the value is a vector of event keywords (e.g., `[:malli/initialize :malli/infer-schema]`).

## Finite State Machine (FSM) Schema

A recursive Malli schema `fsm-schema` is defined to model User Journeys as a Hierarchical Finite State Machine. This allows representing complex interactions where a state can itself contain a sub-machine (e.g., a "Form" state containing "Input", "Validation", "Submission" sub-states).

### Schema Definition

The schema is registered with the following structure:

```clojure
[:schema
 {:registry
  {::state [:map
            [:name keyword?]
            [:type [:enum :atomic :compound :final]]
            [:initial {:optional true} keyword?] ;; Required for :compound states
            [:states {:optional true} [:map-of keyword? [:ref ::state]]] ;; Nested states
            [:on {:optional true}
             [:map-of keyword? ;; Event triggering the transition
              [:map
               [:target keyword?] ;; The name of the next state
               [:action {:optional true} keyword?] ;; Optional side-effect identifier
               [:guard {:optional true} fn?]]]]]} ;; Optional guard predicate
  }
 [:ref ::state]]
```

### Components

1.  **State Types (`:type`)**:
    *   `:atomic`: A simple state with no internal structure.
    *   `:compound`: A state that contains sub-states (requires `:initial` and `:states`).
    *   `:final`: A terminal state indicating the end of a journey.

2.  **Transitions (`:on`)**:
    *   A map where keys are event names (from `view-events`) and values describe the transition.
    *   `[:target keyword?]`: The destination state.
    *   `[:action keyword?]`: An optional action to perform during transition.
    *   `[:guard fn?]`: A predicate function that must return true for the transition to occur.

### Usage Example

```clojure
(def my-journey
  {:name :dataset-creation
   :type :compound
   :initial :idle
   :states {:idle {:name :idle
                   :type :atomic
                   :on {:user/clicked-create {:target :creating}}}
            :creating {:name :creating
                       :type :compound
                       :initial :input
                       :states {:input {:name :input
                                        :type :atomic
                                        :on {:user/entered-data {:target :validating}}}
                                :validating {:name :validating
                                             :type :atomic
                                             :on {:validation/success {:target :saving}
                                                  :validation/failure {:target :input}}}}
                       :on {:user/cancelled {:target :idle}}}}})
```

This structure allows for modeling the application's behavior in a structured, verifiable way.
