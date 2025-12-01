# bb-web-ds-tools

A ClojureScript web application providing a suite of data science tools running
entirely in the browser. This project leverages modern browser capabilities to
bring tools like Malli, HoneySQL, Vega-Lite, and even LLMs (Gemma) directly to
the client side.

## Features

### 1. Malli Tools
Leverage `metosin/malli` for schema management.

*   **Schema Inference:** Provide EDN data to automatically infer a Malli schema using `malli.provider`.
    *   *Why it's useful:* Quickly generate schemas for existing data to use for validation or documentation without writing them by hand.
    *   *Example:*
        ```clojure
        ;; Input Data
        {:user {:name "Alice" :age 30 :active? true}}

        ;; Inferred Schema
        [:map
         [:user
          [:map
           [:name :string]
           [:age :int]
           [:active? :boolean]]]]
        ```
*   **Data Generation:** Specify a Malli schema to generate random sample data using `malli.generator`.

### 2. HoneySQL Tools
Convert Clojure data structures to SQL.

*   **HoneySQL Formatter:** Input HoneySQL maps (v1/v2 syntax) and convert them to formatted SQL strings.
    *   *Why it's useful:* Write SQL queries using composable Clojure data structures instead of fragile string concatenation.
    *   *Example:*
        ```clojure
        ;; Input
        {:select [:id :username :email]
         :from [:users]
         :where [:and
                 [:= :active true]
                 [:> :created_at "2023-01-01"]]}

        ;; Output
        SELECT id, username, email FROM users WHERE (active = TRUE AND created_at > '2023-01-01')
        ```

### 3. Vega-Lite Visualization
Visualize data instantly without a backend.

*   **Plotting:** Render interactive charts using Vega-Lite JSON specifications.
    *   *Why it's useful:* Rapidly explore data distributions and relationships directly in the browser.
    *   *Example:*
        ```json
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
          "data": {"values": [{"a": "A", "b": 28}, {"a": "B", "b": 55}]},
          "mark": "bar",
          "encoding": {
            "x": {"field": "a", "type": "nominal"},
            "y": {"field": "b", "type": "quantitative"}
          }
        }
        ```
*   **Data Parsing:** Supports parsing data from various formats including CSV, TSV, JSON, and Markdown tables.

### 4. Gemma LLM (Browser-side)
Run Google's Gemma model locally in the browser.

*   **Private & Local:** Uses MediaPipe to run the LLM on your device (GPU/CPU) via WebAssembly/WebGL without sending data to a server.
    *   *Why it's useful:* Experiment with LLMs securely without data privacy concerns or API costs.
*   **Model Loading:** Load compatible `.bin` model files from a URL.
    *   *Example URL:* `/gemma-2b-it-gpu-int4.bin`

### 5. Code Editor
A built-in scratchpad using Monaco Editor.

*   **Features:** Syntax highlighting for Clojure, JSON, and other languages.
*   *Why it's useful:* A convenient place to draft code snippets, format JSON, or edit data before pasting it into other tools.

### 6. Datasets Manager
Manage and manipulate tabular data.

*   **Import/Edit:** Load CSV, TSV, or JSON data and edit it in a grid view.
*   **Centralized State:** Persist multiple datasets in local application state.
    *   *Why it's useful:* Acts as a central hub for your data, allowing you to load a CSV once and use it across Malli inference, Vega-Lite plotting, and other tools.

### 7. Pyodide Integration (Python)
Run Python code in the browser.

*   **Runtime:** Execute Python scripts using Pyodide (WASM).
    *   *Why it's useful:* Use Python's rich ecosystem (NumPy, Pandas) for data analysis within the web app.
    *   *Example:*
        ```python
        import numpy as np
        x = np.array([1, 2, 3])
        print(x.mean()) # Output: 2.0
        ```

### 8. WebR REPL (R)
Run R code in the browser.

*   **Runtime:** Execute R code using WebR (WASM).
    *   *Why it's useful:* Perform statistical analysis using R's powerful libraries directly in the browser.
    *   *Example:*
        ```r
        x <- c(1, 2, 3)
        mean(x) # Output: 2
        ```

### 9. App DB Inspector
Debug the re-frame application state.

*   **Watch & Edit:** Monitor and modify the `app-db` state.
    *   *Why it's useful:* Essential for developers to understand the application's internal state, debug issues, and test how components react to state changes.

### 10. ClojureScript REPL
Interactive ClojureScript environment.

*   **SCI:** Uses the Small Clojure Interpreter to evaluate code.
    *   *Why it's useful:* Interactively test ClojureScript functions, inspect global state, or try out new logic without reloading the page.
    *   *Example:*
        ```clojure
        (+ 1 2 3) ;; -> 6
        (js/console.log "Hello from SCI")
        ```

## Prerequisites

*   **Node.js:** Required for package management and running the build tools.
*   **Java:** Required for running Clojure and Shadow-CLJS.
*   **Clojure CLI:** The project configuration (`shadow-cljs.edn`) uses `:deps true`, meaning the `clojure` command must be available on your system's PATH to resolve dependencies.
    *   *Note:* If you are using Babashka, you can alias `bb clojure` to `clojure` if the official CLI is not installed.

## Setup & Running

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This installs both NPM packages and prepares the environment.

2.  **Start Development Server:**
    ```bash
    npx shadow-cljs watch app
    ```
    The application will be served at `http://localhost:8080`. The build tool handles hot-reloading of ClojureScript code.

## Testing

To run the test suite (requires Google Chrome for the Karma runner):

```bash
npm test
```

## Project Structure

*   `src/bb_web_ds_tools/`:
    *   `core.cljs`: Main entry point, routing, and navigation.
    *   `views/`: Contains individual tool views (e.g., `malli.cljs`, `honeysql.cljs`, `vega_lite.cljs`).
    *   `components/`: Reusable UI components (buttons, layout, editors).
    *   `utils/`: Utility functions (dataset processing, worker helpers).
    *   `events/`: Event handlers.
*   `public/`: Static assets.
    *   `js/libs/`: Vendored libraries.
