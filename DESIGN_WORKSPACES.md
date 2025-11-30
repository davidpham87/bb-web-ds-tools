# Design Doc: Workspaces and User Input Persistency

## Overview

This document outlines the design for adding "Workspaces" and "User Input Persistency" to the `bb-web-ds-tools` application. The goal is to allow users to switch between different environments (workspaces) and persist their inputs (datasets, schemas, code, configs) across sessions.

## Architecture

We will use a layered architecture:

1.  **UI Layer**: React/Reagent components for managing workspaces (create, switch, delete) and displaying/editing inputs.
2.  **State Management Layer**: `re-frame` for UI state, backed by **DataScript** for the domain model (workspaces, inputs).
3.  **Persistence Layer**: **SQL.wasm** (SQLite) to persist the DataScript database (or a serialized version of it) to the browser's storage (e.g., IndexedDB or OPFS via SQL.js).

### Libraries

*   **DataScript**: An immutable, in-memory database and Datalog query engine for ClojureScript. It will serve as the "source of truth" for the workspace metadata and content while the app is running.
*   **SQL.wasm (`sql.js`)**: A port of SQLite to WebAssembly. It will be used to persist the workspace data to a SQLite database file, which can be saved to the browser's storage or exported/imported by the user.

## Data Model

The DataScript schema will define the following entities:

### Workspace
*   `:workspace/id` (uuid, unique identity)
*   `:workspace/name` (string)
*   `:workspace/created-at` (inst)
*   `:workspace/updated-at` (inst)

### Input
*   `:input/id` (uuid, unique identity)
*   `:input/workspace` (ref to `:workspace/id`)
*   `:input/type` (keyword/enum: `:dataset`, `:schema`, `:code`, `:config`)
*   `:input/name` (string, e.g., filename or identifier)
*   `:input/content` (string or blob - the actual user input)
*   `:input/metadata` (map - optional extra info like language, format)
*   `:input/updated-at` (inst)

## Persistence Strategy

1.  **On Load**:
    *   Initialize SQL.wasm.
    *   Load the SQLite database from IndexedDB (or similar local storage).
    *   Query the SQLite DB for all workspaces and inputs.
    *   Hydrate the DataScript DB with this data.
    *   Populate `re-frame` app-db with the active workspace.

2.  **On Change**:
    *   When a user modifies an input or switches workspaces, update the DataScript DB transactionally.
    *   (Optionally) Debounce and sync the changes to the SQL.wasm DB.
    *   Persist the SQL.wasm DB file to storage.

## UI / UX

*   **Workspace Selector**: A dropdown or modal in the top navigation/sidebar to switch workspaces.
*   **Input Management**: The existing views (Malli, HoneySQL, Editor, etc.) will need to be updated to bind their state to the *current workspace's* relevant input.
    *   For example, the "Malli" view currently might use local state or a global atom. It should now subscribe to the "active schema input" of the current workspace.

## Implementation Details

*   **Namespace**: `bb-web-ds-tools.workspaces`
*   **Components**: `workspace-selector`, `input-manager`
*   **Events**: `::add-workspace`, `::switch-workspace`, `::save-input`

## Semantic Usage Mapping

*   **Datasets**: Mapped to `:input/type :dataset`. Used in Data Grid, Vega-Lite, etc.
*   **Schema**: Mapped to `:input/type :schema`. Used in Malli views.
*   **Code**: Mapped to `:input/type :code`. Used in Editors (Clojure, Python, R).
*   **Configs**: Mapped to `:input/type :config`. Used in Settings, Vega-Lite config.

## Testing

*   Unit tests for DataScript schema and transactions.
*   Integration tests for the persistence layer (mocking SQL.wasm if needed).
*   E2E tests for workspace switching and data persistence.
