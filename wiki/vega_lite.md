# Vega-Lite View

The **Vega-Lite View** is a powerful environment for creating declarative statistical visualizations using [Vega-Lite](https://vega.github.io/vega-lite/). It supports specifications written in both JSON (the native format) and EDN (Clojure data format), with automatic bidirectional conversion.

## Features

-   **Dual-Format Editor**: Write specifications in JSON or EDN. Switching formats automatically converts your code.
-   **Live Preview**: The chart renders in real-time as you edit the specification.
-   **Dataset Integration**: Access data stored in the global Datasets view directly within your specification.
-   **Gist Support**: Load specifications from GitHub Gists.

## Step-by-Step Examples

### 1. Basic Bar Chart (Embedded Data)

We will visualize the "score" by "category" using our standard example data embedded directly in the specification.

**Steps:**
1.  Navigate to the **Vega-Lite** view.
2.  Ensure the format toggle (top right of the editor) is set to **EDN**.
3.  Paste the following code:
    ```clojure
    {:data {:values [{:id 1 :score 12.5 :category "a" :date "2023-01-01"}
                     {:id 2 :score 10.2 :category "b" :date "2023-01-02"}
                     {:id 3 :score 8.7  :category "c" :date "2023-01-03"}
                     {:id 4 :score 15.0 :category "a" :date "2023-01-04"}
                     {:id 5 :score 9.9  :category "b" :date "2023-01-05"}]}
     :mark :bar
     :encoding {:x {:field "category" :type "nominal" :axis {:title "Category"}}
                :y {:field "score"    :type "quantitative" :axis {:title "Score"}}}}
    ```
4.  The bar chart will render in the right-hand panel.

### 2. Using Global Datasets

Instead of hardcoding data, you can reference a dataset you imported in the **Datasets** view.

**Prerequisites:**
*   You have a dataset named `example-data` loaded in the Datasets view (see [Datasets View](datasets.md)).

**Steps:**
1.  In the **Vega-Lite** editor, replace the `:data` map with a reference to the named dataset.
    *   *Note: The specific syntax for referencing global named datasets depends on the implementation. Typically, you use the `name` property in the data object.*
    ```clojure
    {:data {:name "example-data"}
     :mark :point
     :encoding {:x {:field "date"  :type "temporal"}
                :y {:field "score" :type "quantitative"}
                :color {:field "category" :type "nominal"}}}
    ```
2.  If the dataset is correctly loaded in the system, the scatter plot will appear.

### 3. Converting Formats

**Steps:**
1.  With the EDN specification from Example 1 or 2 in the editor, click the **JSON** toggle button.
2.  The code will automatically convert to standard JSON:
    ```json
    {
      "data": { "name": "example-data" },
      "mark": "point",
      "encoding": {
        "x": { "field": "date", "type": "temporal" },
        "y": { "field": "score", "type": "quantitative" },
        "color": { "field": "category", "type": "nominal" }
      }
    }
    ```
3.  You can edit in JSON and switch back to EDN at any time.
