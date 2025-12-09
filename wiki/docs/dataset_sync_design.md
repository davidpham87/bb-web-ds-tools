# Dataset Synchronization Design

This document describes the design of the dataset synchronization mechanism between the main thread and web workers (specifically the SCI worker).

## Overview

The application maintains a global state of datasets in the main thread (re-frame `app-db`). Workers need to access and potentially modify these datasets. The synchronization mechanism ensures that changes in the main thread are propagated to the worker, and changes in the worker are propagated back to the main thread.

## Mechanism

### Main Thread -> Worker

The `bb-web-ds-tools.runtime.sci` namespace subscribes to `::datasets/items`. A watcher on this subscription sends an `update-datasets` message to the worker whenever the datasets change.

```clojure
;; bb-web-ds-tools.runtime.sci
(worker/post-message @sci-worker {:type "update-datasets" :datasets new-val})
```

### Worker -> Main Thread

The worker (`bb-web-ds-tools.workers.sci`) maintains a `datasets-atom` which is exposed to the SCI context as `user/datasets`.

1.  **Watch**: A watcher is added to `datasets-atom` to detect changes.
2.  **Diff**: When the atom changes, the watcher calculates the difference (added or updated keys) between the old and new state.
3.  **Patch**: A `:patch-datasets` message containing only the changed datasets is sent to the main thread.
4.  **Suppression**: To prevent infinite loops, updates originating from the main thread (via `update-datasets` message) are applied within a dynamic binding `*suppress-sync*` set to true, which prevents the watcher from triggering a feedback loop.

```clojure
;; bb-web-ds-tools.workers.sci
(add-watch datasets-atom :sync-main
  (fn [_ _ old-state new-state]
    (when-not *suppress-sync*
      (let [patch (calculate-diff old-state new-state)]
        (post-msg {:type :patch-datasets :patch patch})))))
```

### Main Thread Handling

The main thread receives the `:patch-datasets` message and dispatches `::datasets/patch-datasets` event, which merges the patch into the app-db.

## SQL WASM Integration (Extendability)

This mechanism is extendable to support workflows where a worker uses SQL WASM to persist data and notify the main thread.

### Workflow

1.  **Worker Write**: The worker (e.g., executing user code via SCI) writes data to a local SQL WASM database (backed by OPFS or memory).
2.  **Dataset Update**: After writing, the worker updates the `user/datasets` atom. This can be done by:
    *   Reading the data back from SQL and putting it into the dataset map.
    *   Or, if the data is large, creating a dataset entry that contains metadata or a reference (e.g., file path) pointing to the SQL resource.
3.  **Sync**: The `datasets-atom` watcher detects this change and syncs the new dataset entry (containing the data or reference) to the main thread.
4.  **Main Thread Action**: The main thread receives the update. If the dataset contains a reference (e.g., `{:type :sql-ref :path "/mydb.sqlite3"}`), the main thread can then act on it (e.g., if it has access to the same OPFS, it can read the file, or it can display a UI element indicating the data is in SQL).

### Example: Worker Code

```clojure
;; In the SCI REPL (Worker)
(require '[bb-web-ds-tools.workers.persistence :as p]) ;; Assuming persistence is exposed

;; 1. Write to SQL
(p/execute! "INSERT INTO results (val) VALUES (42)")

;; 2. Read back
(let [results (p/query "SELECT * FROM results")]
  ;; 3. Update datasets
  (swap! user/datasets assoc :sql-results {:name "SQL Results" :data results}))

;; The watcher automatically syncs :sql-results to main thread.
```

To fully enable this, `bb-web-ds-tools.workers.sci` would need to expose the SQL functions (from `persistence.cljs`) in the SCI context. Currently, `persistence.cljs` is a separate module, but the synchronization pattern described above handles the communication aspect regardless of how the data is generated.
