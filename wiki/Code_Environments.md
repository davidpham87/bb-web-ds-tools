# Code Environments

The **Code** view aggregates multiple programming environments, allowing you to run code in the browser and inspect results using [Portal](https://github.com/djblue/portal).

## Environments

### 1. Clojure REPL
- **Runtime**: SCI (Small Clojure Interpreter).
- **Usage**: Type Clojure code and execute it.
- **Example**:
  ```clojure
  (def data [{:a 1} {:a 2}])
  (map :a data)
  ;; Result: (1 2)
  ```

### 2. Python (Pyodide)
- **Runtime**: Pyodide (Python compiled to WebAssembly).
- **Usage**: Run full Python code, including libraries like NumPy or Pandas if loaded.
- **Example**:
  ```python
  import numpy as np
  arr = np.array([1, 2, 3])
  arr.mean()
  # Result: 2.0
  ```

### 3. R (WebR)
- **Runtime**: WebR (R compiled to WebAssembly).
- **Usage**: Execute R code for statistical analysis.
- **Example**:
  ```r
  x <- c(10, 20, 30)
  mean(x)
  # Result: 20
  ```

### 4. Editor
- **Runtime**: General purpose editor with syntax highlighting.
- **Usage**: Useful for drafting code or editing text files.

## Common Features

- **Execution**: Press `Ctrl+Enter` (or `Cmd+Enter` on Mac) to evaluate the selected code or the current block.
- **Portal Inspector**: The right-hand panel displays the output of your code. It allows you to drill down into data structures, filter tables, and view rich visualizations.
