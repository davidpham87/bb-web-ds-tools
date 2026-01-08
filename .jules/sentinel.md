## 2026-01-08 - [CSV Injection Hardening]
**Vulnerability:** The application's `sanitize-value` function protected against standard formula injection characters (`=`, `+`, `-`, `@`) but missed other potential triggers like `|` (pipe) and `%` (percent) which can be exploited in certain contexts (e.g., DDE, command execution).
**Learning:** Security controls often need to be broader than the minimum standard list. Defense in depth suggests sanitizing any character that could be interpreted as a control character by the consuming application (e.g., Excel, Google Sheets).
**Prevention:** Expanded the regex in `sanitize-value` to include `|` and `%`.
