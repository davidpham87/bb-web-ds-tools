# CLI Tools Guide: Or How I Learned to Stop Worrying and Love the Terminal

_2025-12-07_

Welcome, brave data explorer. You've likely found yourself here because the beautiful, pixel-perfect web interface of `bb-web-ds-tools` was just too "easy" for you. You crave the raw power of the command line. You want to feel the bits flowing through your fingertips. Or maybe you just need to script something and don't want to use a headless browser. Whatever your reason, we support you. Sort of.

In this guide, we'll walk through the CLI tools available in this repository. They are, essentially, wrappers around the same logic that powers the web app, but with less clicking and more typing.

## Prerequisites

You'll need `babashka` installed. If you don't have it, go get it. We'll wait.

## The Tools

We have three main tools for your enjoyment: `data`, `sql`, and `schema`.

You can access them all via the `dstools` entry point:

```bash
bb -m dstools <command> <subcommand> [opts]
```

### 1. Datasets: The Data Plumber (`data`)

The `data` tool is your Swiss Army knife for converting data formats. Because sometimes you have JSON, but you really, really want EDN.

**Note on Data Format:** By default, the tool guesses the structure of your data (e.g., row-maps vs columnar). You can explicitly control this with `--input-struct` and `--output-struct`. See `docs/CLI_DATA_STRUCTURES.md` for details.

**Usage:**

```bash
bb -m dstools data convert [opts]
```

**Options:**

- `-f, --format <fmt>`: Input format (csv, json, edn). Required.
- `-t, --to <fmt>`: Output format (csv, json, edn). Default: `json`.
- `-i, --file <file>`: Input file. Reads from stdin if omitted.
- `-o, --out <file>`: Output file. Writes to stdout if omitted. Inferred from input filename if possible (e.g., `input.json` -> `input.edn`).
- `-S, --input-struct <struct>`: Input data structure (row-maps, columnar, rows).
- `-s, --output-struct <struct>`: Output data structure (row-maps, columnar, rows).

**Example: Converting Cars**

Let's take a classic dataset, `cars.json` (from the Vega datasets collection), and convert it to EDN. Why? Because keywords are better than strings. Everyone knows that.

First, imagine you have `cars.json`:

```json
[
  {"Name": "chevrolet chevelle malibu", "Miles_per_Gallon": 18, "Cylinders": 8, "Displacement": 307, "Horsepower": 130, "Weight_in_lbs": 3504, "Acceleration": 12, "Year": "1970-01-01", "Origin": "USA"},
  {"Name": "buick skylark 320", "Miles_per_Gallon": 15, "Cylinders": 8, "Displacement": 350, "Horsepower": 165, "Weight_in_lbs": 3693, "Acceleration": 11.5, "Year": "1970-01-01", "Origin": "USA"}
]
```

Now, let's convert it:

```bash
bb -m dstools data convert -f json -t edn -i cars.json
```

This will create `cars.edn` automatically. Your `cars.edn` will look something like this (but prettier, because EDN is beautiful):

```clojure
[{:Name "chevrolet chevelle malibu",
  :Miles_per_Gallon 18,
  :Cylinders 8,
  :Displacement 307,
  :Horsepower 130,
  :Weight_in_lbs 3504,
  :Acceleration 12,
  :Year "1970-01-01",
  :Origin "USA"}
 {:Name "buick skylark 320",
  :Miles_per_Gallon 15,
  :Cylinders 8,
  :Displacement 350,
  :Horsepower 165,
  :Weight_in_lbs 3693,
  :Acceleration 11.5,
  :Year "1970-01-01",
  :Origin "USA"}]
```

### 2. HoneySQL: The Query Whisperer (`sql`)

You write Clojure data structures. You get SQL strings. It's magic, but with more parentheses.

**Usage:**

```bash
bb -m dstools sql convert [opts]
```

**Options:**

- `-i, --file <file>`: Input file containing a HoneySQL map. Stdin if omitted.
- `-o, --out <file>`: Output file. Inferred from input filename (e.g., `query.edn` -> `query.sql`).

**Example:**

Input `query.edn`:

```clojure
{:select [:*]
 :from [:cars]
 :where [:= :Origin "USA"]}
```

Command:

```bash
bb -m dstools sql convert -i query.edn
```

Output (to `query.sql`):

```sql
SELECT * FROM cars WHERE Origin = 'USA'
```

### 3. Malli: The Schema Enforcer (`schema`)

Infer schemas, generate data, and validate your life choices (or at least your data).

**Commands:**

*   `infer`: Guess the schema from data.
*   `generate`: Create random data from a schema.
*   `validate`: Check if data matches a schema.

**Example: Inferring Schema from Cars**

Remember that `cars.edn` file? Let's see what Malli thinks of it.

```bash
bb -m dstools schema infer -i cars.edn
```

Output (something like):

```clojure
[:vector
 [:map
  [:Name string?]
  [:Miles_per_Gallon int?]
  [:Cylinders int?]
  [:Displacement int?]
  [:Horsepower int?]
  [:Weight_in_lbs int?]
  [:Acceleration double?]
  [:Year string?]
  [:Origin string?]]]
```

And there you have it. The CLI tools. Use them wisely, or at least use them to avoid opening a browser.
