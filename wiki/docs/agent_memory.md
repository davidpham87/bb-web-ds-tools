# Core Directives and Principles

Author: Jules
Date: 2024-10-25

## Memory detail

*   **Form State Management**: Aggressively use `fork.re-frame` for form state management when refactoring or building new components. Use `fork.reagent` for pure Reagent components and `fork.re-frame` for re-frame integration.
*   **Documentation & Examples**: Project documentation is in `wiki/`. Consistently use the example dataset (id, score, category, date) from `bb-web-ds-tools.utils.dataset-processing` for all code and usage examples.
*   **Verification**: Always Verify Your Work. Edit Source, Not Artifacts. Practice Proactive Testing.
*   **Environment**: Do not add benchmarks (unstable env). Direct execution of sudo/interactive scripts is blocked.
*   **Git & File Operations**: `overwrite_file_with_block` may auto-commit. `package-lock.json` is ignored. `quickblog` must be a pinned git dependency.
*   **Code Style**: Top-level forms in CLJS must be separated by at least one blank line. Docstrings required for public functions.

# Testing and Verification Strategy

Author: Jules
Date: 2024-10-25

## Memory detail

*   **E2E Tests**: Success is defined as rendering non-blank screen after 5s. Run with `test/e2e/verify_release.py`. Requires production build (`npx shadow-cljs release app && npx webpack --config-name app`).
*   **Frontend Verification**: Use Python Playwright scripts. `frontend_verification_complete` requires screenshots in root.
*   **Re-frame Testing**: Warnings suppressed via `suppress-re-frame-warnings` fixture. Verify state using `re-frame/subscribe` (dereferenced). Use `day8.re-frame/test` for sync testing.
*   **Playwright**: Target scrollable containers for scrolling verification. Use `page.keyboard.insert_text` for Monaco. Check for `popup` events for new windows. Use role-based locators for tabs.
*   **Karma**: `npm test` runs `shadow-cljs compile test`. Requires `chromium-browser` and `--no-sandbox` in Docker. `shadow-cljs watch test` intercepts failures faster.
*   **Visual Reports**: Documented in `docs/visual_report.md`.

# Build, Deployment, and Runtime

Author: Jules
Date: 2024-10-25

## Memory detail

*   **Build Output**: `docs/` is the build output and web root. `shadow-cljs watch app` may fail to serve despite starting.
*   **Compilation**: CLJS changes need explicit recompilation to update `docs`. `shadow-cljs` build `:app` uses `:js-provider :external` with Webpack.
*   **Dependencies**: `npm install` handles vendoring via `postinstall` (e.g., Monaco, Pyodide).
*   **Runtime Layers**:
    *   **WebR**: Submission via `[::portal/submit value viewer]`. `autoprint: true` in `.evalR()`. Managed in `bb-web-ds-tools.runtime.webr`.
    *   **Pyodide**: Initialized in dedicated Web Worker. Managed in `bb-web-ds-tools.runtime.pyodide`.
    *   **SCI**: Exposes `user/datasets` atom. Supports `eval-in-worker` and `eval-in-main`.
*   **CI/CD**: `deploy.yml` on push to `releases`. Custom Docker image with pre-installed deps.
*   **Storybook**: Output to `docs/js/stories`. Story namespaces must export metadata to `js/module.exports.default`.

# CLI Tools Architecture

Author: Jules
Date: 2024-10-25

## Memory detail

*   **Unified Entry**: `src/dstools.clj` via `bb -m dstools`. Dispatches subcommands (data, sql, schema).
*   **Features**:
    *   **Datasets**: Infers structure if not provided (list of maps -> row-maps, map -> columnar, list of lists -> rows). Defaults to stdin/stdout.
    *   **Honeysql**: Integrates `cli-specs`.
    *   **Malli**: Uses `cli-specs`.
*   **Implementation**: `babashka.cli/dispatch`. Handlers accept context map `{:keys [opts]}`. Custom `show-help`.

# User Interface and Components

Author: Jules
Date: 2024-10-25

## Memory detail

*   **Layout**: `h-screen overflow-hidden` mostly. `top-bar` external to content. `split-view` (ratios: :2-1, :1-2, :1-3).
*   **Components**:
    *   **Dense Data Grid**: 32px rows, `py-2` th, `py-1.5` td, `px-3`.
    *   **Card**: Requires explicit properties map `[c/card {} child]`.
    *   **Monaco Editor**: Preferred input. Configured with visual ruler (80), read-only output. Keybindings for evaluation (`Ctrl+Enter`).
    *   **Portal**: `portal-panel` component. `::portal/open`, `::portal/submit`.
    *   **Vega-Lite**: Supports JSON and EDN. Highlighting: 'json' or 'clojure'.
    *   **Malli**: `unified-view` for tab switching. `btn` with `!important` styles.
*   **Styling**: Tailwind. Dark Mode (Zenburn). Font stack: Inter (UI), JetBrains Mono (Code).
*   **Reagent/React**: React 18. Form-3 `component-did-update` usage. `component-did-mount` for one-time init.

# Codebase Conventions and Specifics

Author: Jules
Date: 2024-10-25

## Memory detail

*   **Structure**: `src/bb_web_ds_tools/` -> `views/`, `components/`, `utils/`, `events/`, `core.cljs`.
*   **Naming**: Directories use underscores. Avoid shadowing `clojure.core/name`.
*   **Data Processing**: `bb-web-ds-tools.utils.dataset-processing`. `parse-dataset` multimethod.
*   **Re-frame**:
    *   Events: `::navigate`, `::portal/submit`.
    *   State: User input (`[:user-input ...]`) vs Derived state (`[::component-key]`).
    *   Effects: Return effect map, use `:dispatch`.
*   **Interop**: Use `^js` hints to avoid warnings. `clj->js` options (omit optional keys). `js->clj` for Portal.
*   **Navigation**: `reitit` with hash history. `::navigate` event `[route-name params query]`.

# Schema Specifications

Author: Jules
Date: 2024-10-25

## Memory detail

### Malli Schema

```clojure
[:map
 [:author :string]
 [:date inst?]
 [:tags [:vector :string]]
 [:topic :string]
 [:title :string]
 [:memories [:vector [:map [:title :string] [:description :string]]]]]
```

### DataScript Schema

```clojure
{:snapshot/author {:db/cardinality :db.cardinality/one
                   :db/valueType :db.type/string}
 :snapshot/date {:db/cardinality :db.cardinality/one
                 :db/valueType :db.type/instant}
 :snapshot/tags {:db/cardinality :db.cardinality/many
                 :db/valueType :db.type/string}
 :snapshot/topic {:db/cardinality :db.cardinality/one
                  :db/valueType :db.type/string}
 :snapshot/title {:db/cardinality :db.cardinality/one
                  :db/valueType :db.type/string}
 :snapshot/memories {:db/cardinality :db.cardinality/many
                     :db/valueType :db.type/ref
                     :db/isComponent true}
 :memory/title {:db/cardinality :db.cardinality/one
                :db/valueType :db.type/string}
 :memory/description {:db/cardinality :db.cardinality/one
                      :db/valueType :db.type/string}}
```
