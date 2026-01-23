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

## 2026-01-23 - [SCI Context Pollution]
**Vulnerability:** Shared SCI context allowed malicious HoneySQL input (e.g., `(def ...)`) to persist global state, potentially affecting subsequent operations or other users sharing the runtime environment.
**Learning:** SCI contexts are stateful by default. Reusing a context without isolation (`sci/fork`) allows "noisy neighbor" attacks or environment poisoning.
**Prevention:** Always use `sci/fork` to create a lightweight, disposable child context for each evaluation of untrusted code.
