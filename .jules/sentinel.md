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
## 2025-05-23 - Memory Exhaustion via SCI Input
**Vulnerability:** Large HoneySQL inputs could cause memory exhaustion or DoS when evaluated by SCI. Attempts to limit execution depth via `check-reductions` were unsuccessful due to library version limitations in the environment.
**Learning:** Security controls like `sci/check-reductions` require precise environment matching; fallback mitigations (like input length limits) are often more reliable than complex runtime controls.
**Prevention:** Implemented strict input length validation (10k chars) in `convert-to-sql` to prevent processing of excessively large inputs.
