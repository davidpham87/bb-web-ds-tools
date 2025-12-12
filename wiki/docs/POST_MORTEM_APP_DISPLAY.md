# Post Mortem: App Not Displaying

## Date

2025-12-01

## Issue

The application failed to display (blank screen) after building and running the
release artifact (`docs/`). E2E tests failed with timeouts waiting for the
landing page content.

## Root Cause

The `shadow-cljs` build configuration in `shadow-cljs.edn` defines multiple
modules (`:main`, `:shared`, `:sci-worker`, `:pyodide-worker`). When using code
splitting with modules, the `:main` module depends on the `:shared` module.
However, `docs/index.html` was only loading `main.js` and `libs.js`, but failing
to load `shared.js`.

This caused a runtime error (`SHADOW_ENV is not defined` or similar dependency
errors) because the shared runtime code was not loaded before `main.js`
execution.

Additionally, the `Gemma` view was commented out in
`src/bb_web_ds_tools/core.cljs`, causing verification failures for that specific
route. The `Repl` view was missing the "Add REPL" button expected by the
verification script.

## Resolution

1.  **Updated `docs/index.html`**: Added
    `<script src="js/compiled/shared.js" type="text/javascript"></script>`
    before `main.js` to ensure shared code is loaded first.
2.  **Restored `Gemma` View**: Uncommented the `gemma` require and `defmethod`
    in `src/bb_web_ds_tools/core.cljs`.
3.  **Updated `Repl` View**: Added the "Add REPL" button to
    `src/bb_web_ds_tools/views/repl.cljs` to match E2E test expectations and
    restore functionality.

## Verification

Ran `python3 test/e2e/verify_release.py` after rebuilding the app. All pages,
including Landing, Gemma, and Repl, verified successfully.
