# Agent Best Practices

This document outlines the best practices to follow when working with the
`bb-web-ds-tools` codebase.

## Technology Stack

The project is a ClojureScript single-page application (SPA) built with the
following core technologies:

- **UI Framework:** Reagent and Re-frame
- **Routing:** Reitit
- **Schema Validation:** Malli
- **SQL Generation:** HoneySQL
- **Build Tool:** Shadow-CLJS
- **Testing:** Karma, `day8.re-frame/test`

## Project Structure

- `src/`: ClojureScript source code.
- `test/`: Test files.
- `docs/`: Build output and web root.
- `deps.edn`: ClojureScript dependencies.
- `package.json`: JavaScript dependencies.
- `shadow-cljs.edn`: Shadow-CLJS build configuration.

## Development Workflow

1.  Install dependencies: `npm install`
2.  Start the development server: `npx shadow-cljs watch app`
3.  Run tests: `npm test`

## Coding Style

- Follow the official [Clojure Style Guide](https://guide.clojure.style/).
- Use `cljfmt` to format your code.
- Write clean, idiomatic ClojureScript.

## State Management

- Use Re-frame for managing application state.
- Keep event handlers pure and use effects for side-effects.
- Use subscriptions to access data from the `app-db`.

## Testing

- Write tests for all new features and bug fixes.
- Use `day8.re-frame/test` for synchronous testing of Re-frame event handlers and
  subscriptions.
- Use Karma for running browser-based tests.

## Markdown Formatting

- All Markdown files should have a maximum line width of 80 characters.
