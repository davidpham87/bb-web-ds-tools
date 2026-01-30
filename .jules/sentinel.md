# Sentinel's Journal

## 2024-05-22 - Initial Scan
**Vulnerability:** Pending
**Learning:** Pending
**Prevention:** Pending

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project,  is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project, docs/index.html is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project,  is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project, docs/index.html is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project,  is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project, docs/index.html is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).
## 2025-12-24 - [CSV Formula Injection Protection]
**Vulnerability:** User-controlled data exported to CSV/TSV could contain formulas (starting with =, +, -, @) that execute when opened in Excel/Google Sheets.
**Learning:** Standard regex matching (`re-matches .*`) in ClojureScript/JS does not match newlines by default, allowing bypass via multiline strings.
**Prevention:** Use `re-find` with start-of-string anchor (`^...`) instead of `re-matches` with `.*`, or enable dot-all mode if full matching is required.

## 2026-01-30 - [Insecure State Deserialization]
**Vulnerability:** The application blindly merged deserialized state from the URL (`?state=...`) into the global `app-db`, allowing Mass Assignment of any state key (including critical runtime/platform config).
**Learning:** Re-frame applications often expose their entire `app-db` to merge operations for state restoration, which is risky if not whitelisted.
**Prevention:** Implemented an allow-list (`allowed-keys`) for shared state and a sanitization function (`sanitize-state`) in the deserialization layer.
