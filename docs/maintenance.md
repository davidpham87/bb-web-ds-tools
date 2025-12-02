# Code Maintenance Guide

This document outlines the best practices for maintaining the `bb-web-ds-tools` codebase.

## 1. Project Structure & Namespaces

The project is organized into several key namespaces under `src/bb_web_ds_tools/`:

*   **`core`**: The application entry point and main router logic.
*   **`events`**: Contains re-frame event handlers. `journeys.cljc` is central for Event Mapping and FSM logic.
*   **`views`**: Reagent components representing different pages or features (e.g., `malli`, `datasets`, `r-repl`).
*   **`components`**: Reusable UI components (buttons, inputs, layout).
*   **`utils`**: Pure functions for data processing, datasets, and helpers.
*   **`runtime`**: Manages execution environments like SCI and Pyodide, often using Web Workers.
*   **`theme`**: Central definition for design tokens and colors (Zenburn palette).

## 2. Finite State Machine (FSM)

The application uses a Finite State Machine concept for complex user journeys.

*   **Logic Definition**: The logic and schema are documented in `docs/fsm_logic.md`.
*   **Implementation**: The code resides in `src/bb_web_ds_tools/events/journeys.cljc`.
*   **Updating the FSM**:
    1.  If you add new views or events, update the `view-events` map in `journeys.cljc`.
    2.  If the FSM structure requires changes, update `fsm-schema` in `journeys.cljc` and ensure it remains consistent with `docs/fsm_logic.md`.

## 3. Testing Strategy

We employ a multi-layered testing strategy.

### Unit & Integration Tests (ClojureScript)
*   **Run**: `npm test` (Runs Karma via Shadow-CLJS).
*   **Compile Check**: `npx shadow-cljs compile test`.
*   **Note**: Ensure `shadow-cljs.edn` is configured correctly for the test build.

### End-to-End (E2E) Tests
*   **Run**: `python3 test/e2e/verify_release.py`.
*   **Prerequisite**: A production build must exist (`npx shadow-cljs release app && npx webpack --config-name app`).
*   **Scope**: Verifies that the compiled application loads and critical paths (navigation, runtime initialization) work in a real browser environment.

## 4. Documenting Failures

When tests fail or bugs are discovered, documentation is key to preventing recurrence.

*   **Create a Post Mortem**: Specific complex failures (like build issues or blank screens) should be documented in a file like `docs/POST_MORTEM_<ISSUE_NAME>.md`.
*   **Content**:
    *   **Date**: When it happened.
    *   **Issue**: What failed (symptoms).
    *   **Root Cause**: Why it failed (technical explanation).
    *   **Resolution**: How it was fixed.
    *   **Verification**: How we ensured the fix works.

Refer to `docs/POST_MORTEM_APP_DISPLAY.md` for an example.
