# Malli View

The Malli view provides tools for working with [Malli](https://github.com/metosin/malli) schemas. It includes functionality for schema inference, data generation, and validation.

## Features

- **Inference**: Generate a Malli schema from a sample Clojure/EDN data structure.
- **Generation**: Generate random data based on a provided Malli schema.
- **Validation**: Validate data against a schema.
- **JSON Schema**: Convert Malli schemas to JSON Schema.

## Usage

### Schema Inference

1.  Go to the **Inference** tab within the Malli view.
2.  Paste a sample data structure (e.g., a vector of maps).
3.  The inferred schema will appear in the output panel.

**Example Input:**

```clojure
[{:id 1 :score 12.5 :category "a"}
 {:id 2 :score 10.2 :category "b"}]
```

**Inferred Output:**

```clojure
[:vector
 [:map
  [:id :int]
  [:score :double]
  [:category :string]]]
```

### Data Generation

1.  Go to the **Generation** tab.
2.  Enter a Malli schema.
3.  Click **Generate** to create sample data.

**Example Schema:**

```clojure
[:map
 [:name :string]
 [:age [:int {:min 18 :max 99}]]
 [:active :boolean]]
```

### Validation

1.  Go to the **Validation** tab.
2.  Enter your Schema and the Value you want to check.
3.  The view will report if the value is valid or provide error details.
