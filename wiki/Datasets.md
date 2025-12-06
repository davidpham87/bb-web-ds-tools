# Datasets View

The Datasets view allows you to manage, import, and edit tabular data within the application. It serves as a central repository for data that can be used in other views like Vega-Lite or code environments.

## Features

- **Import**: Load data from various formats including CSV, TSV, JSON, EDN, and Markdown.
- **Edit**: Modify cell values directly in the table.
- **Filter & Sort**: Easily explore your data.
- **Export**: Copy data to clipboard or save to other formats.

## Usage

1.  Navigate to the **Datasets** tab.
2.  Click the **Add Dataset** button (or "Import").
3.  Paste your raw data into the text area.
4.  Select the appropriate format (e.g., `:json`, `:csv`).
5.  Click **Import**.

## Example Dataset

You can use the following JSON data to test the import feature:

```json
[
  {"id": 1, "score": 12.5, "category": "a", "date": "2023-01-01"},
  {"id": 2, "score": 10.2, "category": "b", "date": "2023-01-02"},
  {"id": 3, "score": 8.7,  "category": "c", "date": "2023-01-03"},
  {"id": 4, "score": 15.0, "category": "a", "date": "2023-01-04"},
  {"id": 5, "score": 9.9,  "category": "b", "date": "2023-01-05"}
]
```

Or as CSV:

```csv
id,score,category,date
1,12.5,a,2023-01-01
2,10.2,b,2023-01-02
3,8.7,c,2023-01-03
4,15.0,a,2023-01-04
5,9.9,b,2023-01-05
```

Once imported, you will see a table where you can sort by score or filter by category.
