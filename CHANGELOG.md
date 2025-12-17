# Changelog

All notable changes to a project will be documented in this file.

## [0.11.3] - 2025-05-23

### Refactoring

- **Code Cleanup**: Removed deprecated button components (`button-sm`, `button-md`, `button-xs`) from `components/common`.
- **DRY**: Refactored `utils/dataset-processing` to remove repetitive logic in `parse-dataset` and `example-data` multimethods using helper functions.
- **Documentation**: Added comprehensive docstrings to `utils/dataset-processing` and `components/common`.

## [0.11.2] - 2025-05-23

### Refactoring

- **Code Cleanup**: Simplified `help-button` usage across all views by leveraging default values, removing redundant code (local).
- **Documentation**: Added missing docstrings to `utils/themes`, `workers/sci`, `workers/persistence`, `workers/pyodide`, and animation components (local).

### Added

- **Help Button**: Added Context Sensitive Help Button to all tool views (128f03b).

## [0.11.1] - 2025-05-23

### Refactoring

- Refactored `bb-web-ds-tools.components.common` to consolidate button components.
- Refactored `bb-web-ds-tools.utils.dataset-processing` to improve documentation and maintainability.
- Replaced deprecated button components in Datasets view (`src/bb_web_ds_tools/views/datasets.cljs`).
- Optimized landing page canvas rendering logic (`src/bb_web_ds_tools/views/landing.cljs`).

### Documentation

- Added missing docstrings to `bb-web-ds-tools.views.landing`, `bb-web-ds-tools.utils.dataset-processing`, and `bb-web-ds-tools.components.common`.
- Added docstrings to `src/bb_web_ds_tools/workspaces/persistence_fx.cljs`.

## [0.11.0] - 2025-12-12

### Added

- **Documentation**: Added comprehensive docstrings to `impl/datasets.cljc`, `views/settings.cljs`, and other view components.
- **Refactoring**: Introduced `create-panel` helper in `components/layout.cljs` to standardize view initialization.
- **Vega-Lite**: Refactored Vega-Lite render panel into smaller, maintainable components.

## [0.10.0] - 2025-12-10

### Added

- **Wiki**: Comprehensive documentation added in `wiki/` covering App DB, CLI Tools, Datasets, Gemma, HoneySQL, Malli, and Vega-Lite (118c26e).
- **R Runtime**: Enhanced R runtime integration with bidirectional dataset synchronization (118c26e).
- **Design Docs**: Added design documentation for Client-Side Filesystem, FSM Logic, and Dataset Sync (118c26e).
- **Visual Testing**: Added visual bug reporting and verification scripts (118c26e).
- **Integration Tests**: Added `cljs/verification/e2e` for end-to-end testing of datasets, navigation, release, and themes.
- **Storybook**: Added `preview-head.html` and `main.js` configuration for Storybook integration.
- **Externs**: Added externs for `webr.js` and `datascript.js` to support advanced compilation.
- **Workspaces**: Added persistence and schema logic for workspaces in `src/bb_web_ds_tools/workspaces`.

### Changed

- **Refactoring**: Massive codebase refactoring to support unified worker-main thread dataset synchronization (118c26e).
- **Documentation**: Migrated and updated blog posts (118c26e).
- **Styles**: Updated editor and xterm CSS handling (118c26e).
- **Build**: Updated `webpack.config.js` and `shadow-cljs.edn` to support new assets and externs.
- **CLI**: Refactored CLI tools for datasets, malli, and honeysql into `src/bb_web_ds_tools/cli/`.
- **Runtime Protocol**: Updated runtime protocol to handle new message types and synchronization logic.
- **Dependencies**: Updated `deps.edn` and `package.json` dependencies.

## [0.9.0] - 2025-12-08

### Added

- **CLI Tools**: Added CLI tools for datasets, malli, and honeysql (e000518,
  cafebb5).
- **SQL Persistence**: Reintroduced SQL WASM and added dataset persistence
  (cf6130f).
- **Theme Support**: Allow users to change theme (737f0c2).
- **SCI Context**: Expose datasets and aliases in SCI context (d610a20).
- **Blog**: Migrate blog to quickblog and separate content directory (3915ed0).

### Changed

- **Editor Theme**: Update editor theme colors for better contrast (7464e2c).
- **Layout**: Standardize Main Container Padding (b474846) and allow overflow-y
  on landing page (b02cf07).

### Fixed

- **WebR**: Fix WebR runtime tests to match new event structure (0704331).
- **REPL**: Fix advanced compilation issue in REPL by adding Datascript externs
  (ba0641a).
- **Landing Page**: Fix canvas animations using ResizeObserver (affc403).

## [0.8.0] - 2025-12-05

### Added

- Malli Time Schemas and Min/Max Inference (e029186).

## [0.7.0] - 2025-12-01

### Fixed

- Corrected a typo in the Gemma view (`gemma.cljs`) (5736b98).

### Added

- Malli validation JSON schema (1560443).

## [0.6.0] - 2025-11-28

### Changed

- **Changelog View**: Updated to support categorized entries (Added, Changed,
  etc.) and synced with `CHANGELOG.md`.

## [0.5.0] - 2025-11-25

### Changed

- **Default View**: The application now defaults to the Malli view instead of a
  dedicated landing page, streamlining the user experience.
- **Sidebar State**: The navigation sidebar is now closed by default on initial
  load.
- **URL Structure**: Simplified routing by removing the dedicated `/landing`
  route.

## [0.4.0] - 2025-11-25

### Changed

- Implemented code splitting for application views, significantly reducing the
  initial bundle size from ~1.5MB to ~228KB. This improves the initial load time
  by loading view-specific code on demand.

## [0.3.0] - 2025-11-24

### Added

- **App DB Inspector**: Real-time inspection and modification of the re-frame
  application database.
  - Watch specific paths in the `app-db`.
  - Edit values using EDN syntax.
  - View data with formatting.
- **ClojureScript REPL**: Interactive ClojureScript environment powered by SCI.
  - Evaluate code in the browser.
  - Interaction with re-frame `subscribe` and `dispatch`.
  - Multiple REPL instances.
- **Changelog Viewer**: In-app viewer for the project changelog.

## [0.2.0] - 2025-11-22

### Added

- **Datasets Manager**: New full-featured CSV/TSV/JSON dataset management.
  - Import data from files or text paste.
  - Editable table view with sorting, filtering, and pagination.
  - Column visibility toggles.
  - Support for multiple datasets stored in local state.
- **Pyodide Integration**: Python runtime environment in the browser.
  - Run Python code directly.
  - Monaco editor for code input.
  - Standard output/error capture.
- **WebR REPL**: R runtime environment via WebAssembly.
  - Interactive terminal using xterm.js.
  - Full R evaluation loop.

## [0.1.0] - 2024-05-21

### Added

- Initial release of BB Web DS Tools.
- **Malli Tools**: Schema inference and data generation.
- **HoneySQL Tools**: SQL formatting from Clojure data structures.
- **Vega-Lite**: Client-side data visualization.
- **Gemma**: Local LLM integration using MediaPipe.
- **Editor**: CodeMirror scratchpad.

### Changed

- Refactored project structure: moved tool panels to
  `src/bb_web_ds_tools/views/` and shared components to
  `src/bb_web_ds_tools/components/`.
- Updated application layout to a dark "Gemini CLI" theme.
