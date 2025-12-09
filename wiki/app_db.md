# App DB View

## Why?

Because you broke the state again, didn't you? It's okay. We all do it. This
view is your confession booth, where you can stare directly into the soul of
your application and realize that `nil` is not, in fact, a valid map key, no
matter how much you wish it were.

The **App DB View** is a powerful debugging and introspection tool designed for
developers. It provides a direct window into the `re-frame` application database
(`app-db`), which holds the entire client-side state of the application.

## Features

- **Path Watching**: Subscribe to specific paths within the state tree to
  monitor changes in real-time.
- **Portal Integration**: Inspect state values using the rich data visualization
  capabilities of Portal.
- **History/Diffs**: (If enabled) Track how the state changes over time.

## Step-by-Step Examples

### 1. Inspecting Global Datasets

To see what datasets are currently loaded in memory:

**Steps:**

1.  Navigate to the **App DB** view.
2.  In the "Watch Path" input (sidebar), type or select the path where datasets
    are stored.
    - _Typically: `[:bb-web-ds-tools.views.datasets/datasets]` or similar,
      depending on the internal key structure._
3.  Click **Add Watch**.
4.  The right-hand Portal panel will display the current value of that path.
5.  Expand the map to see the details of loaded datasets (rows, metadata, etc.).

### 2. Monitoring User Input

To debug a form input issue:

**Steps:**

1.  Add a watch for the user input path, e.g., `[:user-input]`.
2.  Open the application in a separate window or split view (if available).
3.  Type into a text field in another view (e.g., the Malli editor).
4.  Observe the `[:user-input]` value updating in the App DB view in real-time.

### 3. Runtime State

To check the status of background workers (Pyodide, WebR, SCI):

**Steps:**

1.  Add a watch for `[:runtime]`.
2.  Inspect the resulting map to see keys like `:sci`, `:pyodide`, or `:webr`.
3.  You can verify flags like `:ready?` or `:loading?` to diagnose
    initialization issues.
