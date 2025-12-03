# Agent Best Practices

This document outlines the best practices to follow when working with the
`bb-web-ds-tools` codebase.

## Technology Stack

The project is a ClojureScript single-page application (SPA) built with the
following core technologies:

-   **UI Framework:** [Reagent](https://reagent-project.github.io/) and
    [Re-frame](https://day8.github.io/re-frame/)
-   **Routing:** [Reitit](https://github.com/metosin/reitit)
-   **Schema Validation:** [Malli](https://github.com/metosin/malli)
-   **SQL Generation:** [HoneySQL](https://github.com/seancorfield/honeysql)
-   **Build Tool:** [Shadow-CLJS](http://shadow-cljs.org/)
-   **Testing:** [Karma](https://karma-runner.github.io/), `day8.re-frame/test`

## Project Structure

-   `src/`: ClojureScript source code.
-   `test/`: Test files.
-   `docs/`: Build output and web root.
-   `deps.edn`: ClojureScript dependencies.
-   `package.json`: JavaScript dependencies.
-   `shadow-cljs.edn`: Shadow-CLJS build configuration.

## Development Workflow

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    Conect to localhost:8080 to see the app and browse. Use this with e2e testing to perform changes.
    ```bash
    npx shadow-cljs watch app &
    ```

3.  **Run tests:**
    To have have test running continuously on file change
    
    ```bash
    npx shadow-cljs watch text-node &
    ```
    Alternatively, conect to localhost:8081 to see the test running or failing after running the command
    ```bash
    npx shadow-cljs watch text-interactive &
    ```


## Coding Style

-   Follow the official [Clojure Style Guide](https://guide.clojure.style/).
-   Use `cljfmt` to format your code.
    ```bash
    clojure -Sdeps '{:deps {dev.weavejester/cljfmt {:mvn/version "0.15.5"}}}' \
      -M -m cljfmt.main fix src test
    ```
-   Write clean, idiomatic ClojureScript.

## State Management with Re-frame

Re-frame is used for managing application state. For a detailed guide, refer to
the [official Re-frame documentation](https://day8.github.io/re-frame/getting-started/).

### Events and Subscriptions

-   **Co-location:** Events and subscriptions should be defined within the same
    namespace as the component that primarily uses them. This improves
    discoverability and modularity.

    ```clojurescript
    (ns my-app.components.my-feature
      (:require [re-frame.core :as rf]))

    ;; --- Subscriptions ---
    (rf/reg-sub
      ::my-data
      (fn [db _]
        (get-in db [:my-feature :data])))

    ;; --- Events ---
    (rf/reg-event-db
      ::set-data
      (fn [db [_ new-data]]
        (assoc-in db [:my-feature :data] new-data)))
    ```

### State Shape and Performance

-   **State Location:** For performance reasons, component state should be
    stored in a dedicated path within the `app-db`. Avoid storing component
    state at the root level.

-   **Subscription Layering:** Create layered subscriptions to avoid unnecessary
    re-computations. A base subscription can select a component's root state,
    and more specific subscriptions can derive from it.

    ```clojurescript
    ;; Base subscription for the feature's state
    (rf/reg-sub
      ::feature-state
      (fn [db _]
        (:my-feature db)))

    ;; Derived subscription for a specific piece of data
    (rf/reg-sub
      ::feature-data
      :<- [::feature-state]
      (fn [feature-state _]
        (:data feature-state)))
    ```

## Testing

-   Write tests for all new features and bug fixes.

### Re-frame Handler Testing

-   Use `day8.re-frame/test` for synchronous testing of Re-frame event handlers
    and subscriptions.

    ```clojurescript
    (ns my-app.components.my-feature-test
      (:require [cljs.test :refer [deftest is testing]]
                [day8.re-frame.test :refer [run-test-sync]]
                [my-app.components.my-feature :as my-feature]))

    (deftest set-data-test
      (testing "should update the data in the app-db"
        (run-test-sync
          (rf/dispatch [::my-feature/set-data "new value"])
          (is (= "new value" @(rf/subscribe [::my-feature/my-data]))))))
    ```

### Malli and Generative Testing

-   Use `malli.generator` to create generative tests for your components and
    event handlers. This is particularly useful for ensuring your code can handle
    a wide range of valid inputs.

    ```clojurescript
    (ns my-app.components.my-feature-test
      (:require [cljs.test :refer [deftest is]]
                [malli.core :as m]
                [malli.generator :as mg]))

    (def MyDataSchema
      [:map
       [:id :int]
       [:name :string]])

    (deftest data-processing-test
      (let [generated-data (mg/generate MyDataSchema)]
        ;; Your test logic here...
        (is (m/validate MyDataSchema generated-data))))
    ```

### Browser-based Testing

-   Use Karma for running browser-based tests. The test runner is configured in
    `karma.conf.js`.

## Markdown Formatting

-   All Markdown files should have a maximum line width of 80 characters.
