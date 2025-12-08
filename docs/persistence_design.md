# Persistence Design

This document outlines the design decisions and trade-offs for the client-side persistence layer of `bb-web-ds-tools`.

## Overview

The application uses SQLite WASM to persist user data (specifically Datasets and Workspaces) in the browser. This allows users to retain their work across page reloads and browser sessions.

## Architecture

### Storage Engine
- **SQLite WASM**: We use the official `@sqlite.org/sqlite-wasm` build.
- **Backend**: We primarily target the `JsStorageDb` backend (if available), which persists data to `localStorage` or `sessionStorage`. This provides a simple, synchronous-like API that works well for the scale of data typical in this application (up to ~5-10MB).
- **Fallback**: If `JsStorageDb` is unavailable, we fall back to an in-memory database (`:memory:`), where persistence is limited to the current session (effectively non-persistent across reloads, but functional for the session).

### Serialization
- **Transit**: Data stored in the SQLite database is serialized using `cognitect.transit` (JSON encoding). This handles Clojure-specific types (keywords, sets, dates) robustly compared to raw JSON.
- **Structure**:
    - **Datasets**: Stored in a `datasets` table as `(id TEXT, name TEXT, content TEXT, created_at INTEGER)`. The `content` column holds the Transit-encoded string of the dataset map.
    - **Workspaces**: Stored in `workspaces` and `inputs` tables, mirroring the DataScript schema.

### State Management
- **Re-frame Integration**:
    - **Pure Events**: Events like `::save-datasets` are pure; they update the `app-db` status (e.g., `:persistence/status :saving`) and return a side-effect description.
    - **Effects Handler**: The actual database operations are performed in `reg-fx` handlers defined in `bb-web-ds-tools.workspaces.persistence-fx`. This isolates side effects.
    - **Asynchrony**: While `sqlite-wasm` operations in the main thread are synchronous, the `reg-fx` pattern decouples the UI update cycle from the DB operation.

## Performance & Threading

### Current Implementation: Main Thread
Currently, the SQLite operations run on the main UI thread.

**Reasoning:**
1.  **Complexity**: Moving `sqlite-wasm` to a Web Worker involves significant architectural complexity:
    -   Asynchronous message passing (request/response correlation).
    -   Build configuration changes to output separate worker bundles and manage their loading.
    -   SharedArrayBuffer requirements for some high-performance modes (OPFS), which require specific HTTP headers (`Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`) that may not be available in all deployment environments (e.g., simple GitHub Pages hosting without configuration).
2.  **Scale**: For typical usage (datasets of a few thousand rows), the serialization and insertion time is negligible (< 50ms).
3.  **Simplicity**: The synchronous API of `JsStorageDb` simplifies the code significantly.

### Optimization: Batching
To mitigate blocking the main thread, we employ **SQL Batching**:
- Instead of executing thousands of individual `INSERT` statements, we construct a single SQL string containing a transaction:
  ```sql
  BEGIN TRANSACTION;
  INSERT INTO ... VALUES ...;
  INSERT INTO ... VALUES ...;
  COMMIT;
  ```
- This reduces the overhead of crossing the JS-WASM boundary and ensures atomic updates.

### Future Work: Worker Migration
If dataset sizes grow significantly (e.g., > 100k rows), blocking the main thread becomes a concern.

**Migration Plan:**
1.  Create a dedicated worker namespace (e.g., `bb-web-ds-tools.workers.persistence`).
2.  Move the `persistence-fx` logic into that worker.
3.  Replace the `reg-fx` handlers to post messages to the worker instead of calling DB functions directly.
4.  Implement a response handler event to update `app-db` upon completion.
