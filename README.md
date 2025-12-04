# 🛠️ bb-web-ds-tools: The "Swiss Army Knife" of Data Science 🇨🇭

> *Because sometimes you just want to run Python, R, Clojure, and a Large Language Model in your browser simultaneously while editing SQL and validating JSON schemas, and you don't want to open a new tab.*

Welcome to **bb-web-ds-tools**, the project that looked at the separation of concerns and said, "Nah." We've crammed an entire data science workstation into a single ClojureScript Single Page Application. It's fast, it's local, and it's slightly overwhelming!

## 🎩 The Magic Tricks (Features)

Here is everything this bad boy can do, right inside your browser:

### 1. 🧩 Malli Tools
**Schema Inference, Generation, & Validation**
*   **Inference:** Paste some messy EDN/JSON, and we'll tell you what the schema *should* be. It's like a spellchecker for your data structures.
*   **Generation:** Need dummy data? Give us a schema, and we'll vomit out 100 rows of valid test data faster than you can say "faker.js".

*Example:*
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

### 2. 🍯 HoneySQL Tools
**SQL Formatting for Clojurists**
*   Stop writing SQL strings like a caveman. Write Clojure data structures, and we'll compile them into beautiful, syntax-highlighted SQL.
*   *Why?* Because `{:select [:*] :from [:users]}` is poetry, and `SELECT * FROM users` is yelling.

*Example:*
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

### 3. 📈 Vega-Lite Visualization
**Charts on the Fly**
*   Paste data (CSV, JSON, EDN, Markdown table - we eat it all).
*   Write a Vega-Lite spec.
*   **Boom.** Interactive charts.

*Example:*
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

### 4. 🤖 Gemma LLM (Browser-side)
**Your Private AI Buddy**
*   Run Google's Gemma model **locally** via MediaPipe and WebAssembly.
*   **No API keys.** No data leaving your machine. Just your GPU fans spinning up like a jet engine.
*   *Example URL:* `/gemma-2b-it-gpu-int4.bin`

### 5. 🐍 Pyodide Integration
**Python in the Browser**
*   Full Python runtime via WASM. NumPy, Pandas, Scikit-learn included.
*   Write Python code, run it, and inspect the output.

*Example:*
```python
import numpy as np
x = np.array([1, 2, 3])
print(x.mean()) # Output: 2.0
```

### 6. 🇷 WebR Integration
**R in the Browser**
*   Run R code, use `dplyr` (if you install it), and perform statistical wizardry.

*Example:*
```r
x <- c(1, 2, 3)
mean(x) # Output: 2
```

### 7. 📝 Code Editor & Datasets
**Monaco Editor & Local Data Hub**
*   **Editor:** It's VS Code, but just the editor part. Syntax highlighting included.
*   **Datasets:** Import CSVs/TSVs/JSON, edit in a grid, and use them across all other tools.

### 8. 💻 ClojureScript REPL
**SCI (Small Clojure Interpreter)**
*   Evaluate Clojure code dynamically. Interact with the running app. It's meta.

*Example:*
```clojure
(+ 1 2 3) ;; -> 6
(js/console.log "Hello from SCI")
```

---

## 🚀 Getting Started

### Prerequisites
*   **Node.js** (Recent version)
*   **Java** (For Clojure)
*   **Clojure CLI** (The `clojure` or `bb` command needs to be on your path)

### Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```
    *This runs a `postinstall` script that copies a bunch of WASM and CSS files to the right places. Don't skip it.*

2.  **Run the Dev Server**
    ```bash
    npx shadow-cljs watch app
    ```
    *Wait for it...* Once it says "Build completed", open **http://localhost:8080**.

### Building for Production
Want to deploy this beast?
```bash
npm run build
```
This produces a `docs/` folder ready for GitHub Pages.

### Testing
We have tests! Real ones!
```bash
npm test
```
(Requires Chrome/Chromium installed)

---

## 🏗️ Project Structure

*   `src/bb_web_ds_tools/`: The brain.
    *   `core.cljs`: The spinal cord.
    *   `views/`: The pretty faces (UI).
    *   `components/`: The lego bricks.
    *   `events/`: The re-frame event handlers.
    *   `runtime/`: The heavy lifters (SCI, Pyodide, WebR interfaces).
    *   `utils/`: The helper functions.
    *   `workers/`: The background elves (Web Workers).
    *   `workspaces/`: The persistence layer (SQLite).
*   `docs/`: The build artifact (and where the website lives).

---

## 🤝 Contributing

Found a bug? Want to add Julia support? Go for it.
1.  Fork it.
2.  Branch it.
3.  Fix it.
4.  Pull Request it.

*Disclaimer: We are not responsible for any browser crashes caused by loading 1GB CSV files into the main thread.*

Happy Hacking! 👩‍💻👨‍💻
