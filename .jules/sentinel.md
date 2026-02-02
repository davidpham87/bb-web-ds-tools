## 2026-02-02 - Mass Assignment in State Sharing
**Vulnerability:** The application blindly merged deserialized state from the URL into the global `app-db`, allowing arbitrary keys (like `:platform` or `:runtime`) to be overwritten.
**Learning:** In Single Page Applications (SPAs) with global state stores (like re-frame), "state sharing" features must be strictly whitelisted to prevent overwriting critical application configuration or runtime state.
**Prevention:** Implement a strict allowlist of keys that can be imported from external sources (URLs, files) before merging into the application state.
