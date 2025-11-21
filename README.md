# bb-web-ds-tools

A ClojureScript web application providing a suite of data science tools running entirely in the browser. This project leverages modern browser capabilities to bring tools like Malli, HoneySQL, Vega-Lite, and even LLMs (Gemma) directly to the client side.

## Features

### 1. Malli Tools
Leverage `metosin/malli` for schema management:
*   **Schema Inference:** Provide EDN data (Clojure data structures) to automatically infer a Malli schema using `malli.provider`.
*   **Data Generation:** Specify a Malli schema to generate random sample data using `malli.generator`.

### 2. HoneySQL Tools
Convert Clojure data structures to SQL:
*   **HoneySQL Formatter:** Input HoneySQL maps (v1 syntax) and convert them to formatted SQL strings. This is useful for debugging queries or quick conversion tasks.

### 3. Vega-Lite Visualization
Visualize data instantly without a backend:
*   **Data Parsing:** Supports parsing data from various formats including CSV, TSV, JSON (Maps & Arrays), and Markdown tables.
*   **Plotting:** Render interactive charts using Vega-Lite JSON specifications.
*   **Example Data:** Includes built-in examples for quick testing.

### 4. Gemma LLM (Browser-side)
Run Google's Gemma model locally in the browser:
*   **Private & Local:** Uses MediaPipe to run the LLM on your device (GPU/CPU) via WebAssembly/WebGL without sending data to a server.
*   **Chat Interface:** Interact with the model via a conversational UI.
*   **Model Loading:** Load compatible `.bin` model files (e.g., Gemma 2B int4) from a URL.

### 5. Code Editor
*   A built-in scratchpad using CodeMirror for editing code or data with syntax highlighting.

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
    *   `malli_tools.cljs`: Logic for Malli schema inference and generation.
    *   `honeysql_tools.cljs`: Logic for HoneySQL to SQL conversion.
    *   `vega_lite.cljs`: Vega-Lite integration, data parsing (CSV, TSV, JSON, MD), and visualization components.
    *   `gemma.cljs`: Interface for MediaPipe GenAI (Gemma).
    *   `ui/`: Reusable UI components (CodeMirror, etc.).
*   `public/`: Static assets.
    *   `js/libs/`: Vendored libraries (Vega, Vega-Lite, Vega-Embed).
