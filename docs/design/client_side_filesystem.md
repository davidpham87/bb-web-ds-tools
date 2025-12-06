# Client-Side File System & Persistence Design

## 1. Overview

This document outlines the design for implementing a persistent, client-side file system for `bb-web-ds-tools`. The goal is to allow users to create "workspaces" containing files (code, datasets, configurations) that persist across browser sessions and reloads, without relying on a backend server or manual file export/import.

The solution leverages:
*   **SQLite WASM**: For robust, SQL-based storage in the browser.
*   **Origin Private File System (OPFS)**: For performant, persistent backing of the SQLite database.
*   **DataScript**: For reactive, in-memory state management within the UI.
*   **Web Workers**: To offload database I/O from the main thread.

## 2. Architecture

### 2.1 Storage Layer: SQLite + OPFS

The core storage mechanism will be an SQLite database running in the browser.

*   **Persistence**: Instead of the current `:memory:` database, we will use the `opfs` VFS (Virtual File System) provided by the SQLite WASM build. This stores the database file in the browser's Origin Private File System, which is persistent and optimized for random access.
*   **File Format**: Standard SQLite `.db` file.
*   **Tables**:
    *   `workspaces`: Stores workspace metadata (id, name, dates).
    *   `files`: Stores the actual user content (code, datasets). This replaces the `inputs` concept to be more filesystem-like.

```sql
CREATE TABLE workspaces (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at INTEGER,
    updated_at INTEGER
);

CREATE TABLE files (
    id TEXT PRIMARY KEY,
    workspace_id TEXT NOT NULL,
    parent_id TEXT, -- For folder structure (optional future proofing)
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'dir', 'file'
    mime_type TEXT,     -- 'text/x-clojure', 'application/json', etc.
    content BLOB,       -- Text or binary content
    metadata JSON,      -- Extra app-specific metadata
    created_at INTEGER,
    updated_at INTEGER,
    FOREIGN KEY(workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE
);
```

### 2.2 Worker-Based I/O

The OPFS VFS in SQLite WASM is most performant when used from a dedicated Web Worker. This prevents large read/write operations from freezing the UI.

*   **Persistence Worker**: A new worker (`src/bb_web_ds_tools/workers/persistence.cljs`) will be created.
*   **Responsibilities**:
    *   Initialize the SQLite DB with OPFS backend.
    *   Handle messages: `:load-all`, `:save-file`, `:delete-file`, `:create-workspace`, etc.
    *   Post updates back to the main thread.

### 2.3 State Management: DataScript <-> SQLite Sync

The application currently uses DataScript for fast, queryable, reactive state in the UI. We will maintain this but treat it as a "cache" or "working copy" of the persistent SQLite DB.

*   **Load Strategy**: On app startup, the Persistence Worker fetches all workspace/file metadata (not content) and sends it to the main thread to populate DataScript. Content is lazy-loaded on demand or pre-loaded if small.
*   **Write Strategy**:
    *   User edits a file -> Update DataScript (immediate UI feedback).
    *   Debounced effect -> Send `:save-file` message to Persistence Worker.
    *   Worker writes to SQLite -> Confirms save (update "saved" status in UI).

## 3. Implementation Steps

### Phase 1: Persistence Worker & OPFS
1.  **Worker Setup**: Create a generic worker infrastructure for persistence (similar to `sci` or `pyodide` workers).
2.  **SQLite OPFS Init**: Modify the SQLite initialization logic to use the `opfs` pool if available (requires proper HTTP headers `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` on the server serving the app, or fallback to IndexedDB/LocalStorage if strictly necessary, though OPFS is preferred).
    *   *Note*: GitHub Pages supports these headers via a hack or by using the Service Worker fallback provided by SQLite WASM for environments without COOP/COEP.
3.  **CRUD Operations**: Implement handlers for creating workspaces and files in the worker.

### Phase 2: UI Integration
1.  **Service Layer**: Create `bb-web-ds-tools.services.persistence` to handle `postMessage` communication with the worker.
2.  **Re-frame Effects**: Register effects (e.g., `::persistence/save`) that delegate to the service layer.
3.  **Boot Sequence**: Update `core.cljs/init` to wait for the persistence worker to signal "ready" and load initial data before rendering the main UI.

### Phase 3: Virtual File System (VFS) UI
1.  **File Explorer**: Create a UI component (`bb-web-ds-tools.views.workspaces.explorer`) that visualizes the `workspaces` and `files` tables as a tree.
2.  **File Operations**: Context menus for Rename, Delete, Move (changing `parent_id` or `workspace_id`).
3.  **Editor Integration**: When a file is selected, load its content into the appropriate editor (Monaco, generic text, or visual editor like Malli/Vega).

## 4. Data Migration & Schema

The current `inputs` schema in DataScript will be mapped to the `files` table.

*   `input/type` -> `files.mime_type` (mapped)
*   `input/name` -> `files.name`
*   `input/content` -> `files.content`

Since there is no existing persistent data (only manual exports), no complex migration strategy for existing users is needed yet.

## 5. Challenges & Mitigations

*   **Concurrency**: If two tabs open the same workspace, SQLite OPFS handles locking, but the UI might get out of sync.
    *   *Mitigation*: Use `BroadcastChannel` in the worker to notify other tabs of changes, triggering a re-fetch in DataScript.
*   **Binary Data**: Datasets might be binary (Parquet, Arrow).
    *   *Mitigation*: Use `BLOB` storage in SQLite and transfer `ArrayBuffers` between worker and main thread.
*   **COOP/COEP Headers**: Required for high-performance OPFS.
    *   *Mitigation*: Ensure the deployment environment (GitHub Pages) is compatible, or use the "promiser" API of SQLite WASM which proxies to a worker that can use a slightly slower but more compatible backend if needed.
