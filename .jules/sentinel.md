# Sentinel's Journal

## 2024-05-22 - Initial Scan
**Vulnerability:** Pending
**Learning:** Pending
**Prevention:** Pending

## 2025-05-22 - Content Security Policy
**Vulnerability:** Missing CSP allowed potential XSS/injection attacks.
**Learning:** For this project, docs/index.html is the source of truth, not a build artifact.
**Prevention:** CSP added with strict allow-list for CDNs (Tailwind, WebR, Pyodide).

## 2025-12-24 - [CSV Formula Injection Protection]
**Vulnerability:** User-controlled data exported to CSV/TSV could contain formulas (starting with =, +, -, @) that execute when opened in Excel/Google Sheets.
**Learning:** Standard regex matching (`re-matches .*`) in ClojureScript/JS does not match newlines by default, allowing bypass via multiline strings.
**Prevention:** Use `re-find` with start-of-string anchor (`^...`) instead of `re-matches` with `.*`, or enable dot-all mode if full matching is required.

## 2026-01-25 - SCI Context Pollution
**Vulnerability:** The HoneySQL conversion tool used a shared global SCI context for evaluating user input, allowing malicious input to redefine core functions (e.g., `def + -`) or persist state across executions.
**Learning:** `sci/init` creates a context that is mutable by default unless explicitly forked or configured otherwise. `sci/eval-string` operates directly on the passed context.
**Prevention:** Use `(sci/fork context)` to create a disposable child context for each execution, ensuring isolation.
