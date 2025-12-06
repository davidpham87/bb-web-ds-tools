# Vega-Lite View

The Vega-Lite view is a playground for creating visualizations using [Vega-Lite](https://vega.github.io/vega-lite/). You can define the visualization specification in JSON or EDN format.

## Features

- **Split View**: Code editor on the left, visualization preview on the right.
- **Format Support**: Switch between JSON and EDN syntax for your specifications.
- **Datasets Integration**: Use data imported in the Datasets view (if supported by the specific implementation details, often data is embedded or referenced by URL).

## Usage

1.  Navigate to the **Vega-Lite** view.
2.  Choose your preferred format (JSON or EDN).
3.  Enter the Vega-Lite specification.
4.  The chart renders automatically as you type.

## Example

Here is a visualization for the example dataset (Score by Category).

**EDN Format:**

```clojure
{:data {:values [{:category "a" :score 12.5}
                 {:category "b" :score 10.2}
                 {:category "c" :score 8.7}
                 {:category "a" :score 15.0}
                 {:category "b" :score 9.9}]}
 :mark :bar
 :encoding {:x {:field "category" :type "nominal"}
            :y {:field "score" :type "quantitative"}}}
```

**JSON Format:**

```json
{
  "data": {
    "values": [
      {"category": "a", "score": 12.5},
      {"category": "b", "score": 10.2},
      {"category": "c", "score": 8.7},
      {"category": "a", "score": 15.0},
      {"category": "b", "score": 9.9}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "type": "nominal"},
    "y": {"field": "score", "type": "quantitative"}
  }
}
```
