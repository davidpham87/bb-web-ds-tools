# Changelog

All notable changes to this project will be documented in this file.

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
- Refactored project structure: moved tool panels to `src/bb_web_ds_tools/views/`
  and shared components to `src/bb_web_ds_tools/components/`.
- Updated application layout to a dark "Gemini CLI" theme.
