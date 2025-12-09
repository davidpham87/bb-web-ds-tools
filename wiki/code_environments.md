# Code Environments

The **Code View** acts as a unified polyglot notebook environment. It integrates multiple language runtimes (Clojure, Python, R) directly in the browser, all connected to a shared [Portal](https://github.com/djblue/portal) inspector for rich data visualization.

## Features

-   **Polyglot Runtimes**: Switch between Clojure (SCI), Python (Pyodide), and R (WebR) without leaving the page.
-   **Integrated Data Inspector**: All evaluation results are sent to a persistent Portal pane on the right, allowing for deep exploration of nested data structures, tables, and charts.
-   **Dataset Access**: Access the global datasets (loaded via the Datasets view) from within any runtime.
-   **Rich Output**: Support for rendering text, EDN, JSON, images, and plots.

## Step-by-Step Examples

### 1. Clojure REPL (SCI)

The Clojure environment uses the Small Clojure Interpreter (SCI).

**Steps:**
1.  Navigate to the **Code** view.
2.  Select the **Clojure** tab.
3.  Paste the following code to manipulate our example data:
    ```clojure
    (def data
      [{:id 1 :score 12.5 :category "a"}
       {:id 2 :score 10.2 :category "b"}
       {:id 3 :score 8.7  :category "c"}])

    ;; Calculate average score
    (let [scores (map :score data)]
      (/ (reduce + scores) (count scores)))
    ```
4.  Press **Ctrl+Enter** (or **Cmd+Enter**).
5.  The result (`10.466...`) will appear in the Portal inspector on the right.

### 2. Python (Pyodide)

The Python environment runs Pyodide (Python compiled to WASM). It includes standard libraries and scientific packages.

**Steps:**
1.  Select the **Python** tab.
2.  (Optional) Wait for the runtime to initialize (look for the "Ready" indicator).
3.  Execute the following code:
    ```python
    import pandas as pd

    # Define the example dataframe
    df = pd.DataFrame([
        {"id": 1, "score": 12.5, "category": "a"},
        {"id": 2, "score": 10.2, "category": "b"},
        {"id": 3, "score": 8.7,  "category": "c"}
    ])

    # Calculate summary statistics
    df.describe()
    ```
4.  Press **Ctrl+Enter**.
5.  A rich table representation of the dataframe summary will appear in Portal.

### 3. R (WebR)

The R environment uses WebR (R compiled to WASM).

**Steps:**
1.  Select the **R** tab.
2.  (Optional) Wait for the runtime to initialize.
3.  Execute the following R code:
    ```r
    # Create the dataframe
    df <- data.frame(
      id = c(1, 2, 3),
      score = c(12.5, 10.2, 8.7),
      category = c("a", "b", "c")
    )

    # Perform a linear model (trivial example)
    summary(lm(score ~ id, data = df))
    ```
4.  Press **Ctrl+Enter**.
5.  The summary text output will be displayed in Portal.

### 4. Accessing Global Datasets

If you have imported a dataset named `example-data` in the Datasets view, you can access it in the runtimes.

**Clojure:**
```clojure
(get @user/datasets "example-data")
```

**Python (via PyProxy):**
*Accessing shared state requires specific interop calls depending on the implementation.*

**R:**
*Accessing shared state requires specific interop calls depending on the implementation.*
