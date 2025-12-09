# Datasets View

## Why?

Because manual data entry is a form of torture banned by the Geneva Convention.
You're here because you have data in a format that looks like it was generated
by a drunk typewriter, and you need it to look like a respectable table before
your boss asks why the Q3 projections are written in Sanskrit.

The **Datasets View** is the central hub for managing tabular data within the
application. It provides tools to import, visualize, edit, and export datasets
in various formats (CSV, JSON, EDN, Markdown). Imported datasets are stored in
the application state and can be accessed by other views, such as Vega-Lite for
visualization or the Code environments (Clojure, Python, R) for analysis.

## Features

- **Multi-Format Import**: Support for CSV, TSV, JSON, EDN, and Markdown tables.
- **Structure Normalization**: Automatically converts various data shapes
  (row-maps, columnar, row-arrays) into a unified internal format.
- **Data Editing**: Inline editing of cell values.
- **Data Exploration**: Sortable and filterable table view with pagination.
- **Dataset Management**: Rename, delete, and switch between multiple active
  datasets.
- **Export**: Copy data to clipboard or save in different formats.

## Dataset Structure

The application standardizes on **Row Maps** for internal processing, but
supports importing and exporting three common structures:

1.  **Row Maps**: A sequence of maps, where keys are column names.
    - _Default for JSON/EDN._
    - `[{:col1 1} {:col1 2}]`
2.  **Columnar**: A map of vectors, where keys are column names and values are
    columns.
    - _Default for CSV/TSV/Markdown._
    - `{:col1 [1 2]}`
3.  **Row Arrays**: A sequence of vectors, with the first vector as the header.
    - `[["col1"] [1] [2]]`

## Step-by-Step Examples

### 1. Loading Data

You can import data by pasting text or selecting a file. The system will attempt
to infer the format, but you can also specify it manually.

**Example Dataset:** We will use the standard example dataset with columns:
`id`, `score`, `category`, and `date`.

**JSON Format:**

```json
[
  { "id": 1, "score": 12.5, "category": "a", "date": "2023-01-01" },
  { "id": 2, "score": 10.2, "category": "b", "date": "2023-01-02" },
  { "id": 3, "score": 8.7, "category": "c", "date": "2023-01-03" },
  { "id": 4, "score": 15.0, "category": "a", "date": "2023-01-04" },
  { "id": 5, "score": 9.9, "category": "b", "date": "2023-01-05" }
]
```

**CSV Format:**

```csv
id,score,category,date
1,12.5,a,2023-01-01
2,10.2,b,2023-01-02
3,8.7,c,2023-01-03
4,15.0,a,2023-01-04
5,9.9,b,2023-01-05
```

**Steps:**

1.  Navigate to the **Datasets** view.
2.  Click the **Add Dataset** button (or **Import** tab).
3.  In the editor, paste the example JSON or CSV data above.
4.  Select the **Format** dropdown (e.g., `:json` or `:csv`).
5.  (Optional) Select the **Structure** if the default inference is incorrect
    (e.g., `:row-maps` for JSON, `:columnar` for CSV).
6.  Click **Import**.
7.  The new dataset will appear in the sidebar list, and the table will populate
    with the data.

### 2. Renaming a Dataset

1.  In the sidebar, find the dataset you just imported (it will have a default
    name like "Dataset 1").
2.  Click the **Edit** (pencil) icon next to the name.
3.  Type a new name, e.g., `example-data`.
4.  Press **Enter** or click the checkmark to save.

### 3. Editing Data

1.  Locate a cell in the table you wish to change (e.g., change the score of id
    1 from `12.5` to `20.0`).
2.  Double-click the cell.
3.  Enter the new value.
4.  Press **Enter** or click away to commit the change.

### 4. Filtering and Sorting

**Sorting:**

1.  Click on the column header `score`.
2.  The table will toggle between Ascending (`▲`) and Descending (`▼`) order.

**Filtering:**

The filter inputs accept arbitrary Clojure expressions, which are evaluated
using SCI (Small Clojure Interpreter).

1.  **Exact Match**: Type a value like `10` or `"a"` (strings must be quoted for
    Clojure evaluation, but unquoted strings fall back to equality checks).
    - Example: `12.5` matches rows where the column value is `12.5`.
    - Example: `a` matches rows where the column value is `"a"` (fallback behavior).
2.  **Predicates**: Type a function literal to filter values.
    - Example: `#(> % 10)` matches rows where the value is greater than 10.
    - Example: `even?` matches rows where the value is even.
    - Example: `#(str/starts-with? % "2023")` for date strings.

### 5. Exporting Data

1.  With the `example-data` dataset active, click the **Export** button/tab.
2.  Choose your desired output format (e.g., `:edn` or `:markdown`).
3.  Choose the desired structure (e.g., `:columnar`).
4.  Copy the generated text from the output editor.
