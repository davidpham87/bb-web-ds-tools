# App DB View

The App DB view is a diagnostic tool for developers to inspect the current state of the application's re-frame database.

## Features

- **State Inspection**: View the entire client-side state tree.
- **Path Watcher**: Add specific paths (keywords) to watch their values update in real-time.

## Usage

1.  Navigate to the **App DB** view.
2.  The main panel displays the current `app-db` map.
3.  Use the sidebar to add "watches" for specific keys, for example `::user-input` or `::current-route`.
4.  This is helpful for debugging why a UI component might not be updating as expected.
