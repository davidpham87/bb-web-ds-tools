# Malli View

## Why?

Because your data is messy, unorganized, and frankly, a little embarrassing.
It's time to bring some law and order to that wild west of a map you call a
"data structure." Think of Malli as the strict librarian who shushes your data
into compliance.

The **Malli View** provides a comprehensive toolkit for working with
[Malli](https://github.com/metosin/malli), a data-driven schema library for
Clojure/Script. It enables you to infer schemas from data, generate synthetic
data from schemas, validate values, and convert schemas to other formats like
JSON Schema.

## Features

- **Schema Inference**: Automatically deduce a Malli schema from existing EDN
  data samples.
- **Data Generation**: Produce random, property-based test data from a Malli
  schema using `malli.generator`.
- **Validation**: Interactively check if a data value conforms to a given
  schema.
- **JSON Schema Conversion**: Transform Malli schemas into standard JSON Schema
  format for interoperability.
- **Save Generated Data**: Directly save generated datasets to the global
  Datasets list.

## Step-by-Step Examples

### 1. Schema Inference

The inference tool is useful when you have raw data and want to formalize its
structure.

**Steps:**

1.  Navigate to the **Malli** view and select the **Inference** tab.
2.  In the input editor, paste the following sample data (a subset of our
    standard example):
    ```clojure
    [{:id 1 :score 12.5 :category "a" :date "2023-01-01"}
     {:id 2 :score 10.2 :category "b" :date "2023-01-02"}]
    ```
3.  The view will automatically process the input.
4.  Observe the **Inferred Schema** in the right-hand panel. It should look
    similar to:
    ```clojure
    [:vector
     [:map
      [:id :int]
      [:score :double]
      [:category :string]
      [:date :string]]]
    ```
    _(Note: The system may infer more specific types or enums depending on the
    data variety.)_

### 2. Data Generation

You can use the inferred schema (or write your own) to generate more synthetic
data.

**Steps:**

1.  Switch to the **Generation** tab.
2.  In the **Schema** editor, enter the schema for our example dataset:
    ```clojure
    [:vector
     [:map
      [:id :int]
      [:score :double]
      [:category [:enum "a" "b" "c"]]
      [:date :string]]]
    ```
3.  Click the **Generate** button.
4.  A list of randomly generated maps matching the schema will appear in the
    output panel.
5.  (Optional) Click **Save to Datasets** to import this generated data into the
    Datasets view for further analysis.

### 3. Validation

Use the validation tool to debug why a specific value doesn't match a schema.

**Steps:**

1.  Switch to the **Validation** tab.
2.  In the **Schema** editor, enter:
    ```clojure
    [:map
     [:id :int]
     [:score :double]]
    ```
3.  In the **Value** editor, enter an invalid value (e.g., `score` as a string):
    ```clojure
    {:id 1
     :score "12.5"}
    ```
4.  The output panel will display `Valid: false` and provide a detailed error
    explanation, highlighting that `:score` expected a `:double` but got a
    string.

### 4. JSON Schema Export

**Steps:**

1.  Switch to the **JSON Schema** tab.
2.  Paste the Malli schema from the previous examples.
3.  The equivalent JSON Schema object will be generated in the output panel,
    ready for use in external systems.
