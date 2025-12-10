# CLI Tools Documentation

## Why?

Because using a mouse is for casuals. Real engineers prefer to type obscure
commands into a black box and pretend to understand the error messages. This is
for when you want to look busy in a coffee shop without actually accomplishing
anything visible.

The application exposes its core logic as a suite of Command Line Interface
(CLI) tools, powered by [Babashka](https://babashka.org/). These tools allow you
to perform data processing, schema validation, and SQL generation directly from
your terminal, enabling automation and scripting.

## Installation / Setup

Ensure you have `bb` (Babashka) installed on your path. The entry point is the
`src/dstools.clj` script.

**Execution Wrapper:**

```bash
alias dstools="bb -m dstools"
```

## Tools Overview

All commands follow the pattern: `dstools <namespace> <command> [options]`

### 1. Datasets (`data`)

Manage and convert tabular data between formats (CSV, JSON, EDN, Markdown) and
structures (Row Maps, Columnar, Row Arrays).

**Command:** `convert`

**Features:**

- **Format Conversion**: e.g., JSON -> CSV.
- **Structure Reshaping**: e.g., Row Maps -> Columnar.
- **Automatic Inference**: Guesses input format and structure if not specified.

**Options:**

- `-f, --format <fmt>`: Input format (`csv`, `json`, `edn`, `yaml`).
- `-t, --to <fmt>`: Output format (`csv`, `json`, `edn`, `yaml`).
- `-i, --file <file>`: Input file path (defaults to stdin).
- `-o, --out <file>`: Output file path (defaults to stdout; infers extension if
  input provided).
- `-S, --input-struct <struct>`: Input structure (`row-maps`, `columnar`,
  `rows`).
- `-s, --output-struct <struct>`: Output structure (`row-maps`, `columnar`,
  `rows`).

**Examples:**

1.  **Convert JSON to EDN (Row Maps to Columnar)**

    ```bash
    dstools data convert -i data.json -t edn -s columnar
    ```

2.  **Convert CSV to Markdown Table**

    ```bash
    dstools data convert -i data.csv -t markdown
    ```

### 2. HoneySQL (`sql`)

Compile [HoneySQL](https://github.com/seancorfield/honeysql) data structures
into standard SQL.

**Command:** `convert`

**Features:**

- **Compilation**: Transforms `.edn` files containing Clojure maps into `.sql`
  files.

**Options:**

- `-i, --file <file>`: Input file path containing the HoneySQL map.
- `-o, --out <file>`: Output file path.

**Example:**

1.  **Compile a Query**
    - Input (`query.edn`): `{:select [:*] :from [:users]}`
    - Command:

      ```bash
      dstools sql convert -i query.edn
      ```

    - Output (`query.sql`): `SELECT * FROM users`

### 3. Malli (`schema`)

Work with [Malli](https://github.com/metosin/malli) schemas for validation,
inference, and generation.

**Commands:**

- `infer`: Generate a schema from a dataset file.
- `generate`: Create random data based on a schema file.
- `validate`: Check if a dataset conforms to a schema.

**Options (Common):**

- `-i, --file <file>`: Input file (data for `infer`/`validate`, schema for
  `generate`).
- `-s, --schema <file>`: Schema file (required for `validate`).

**Examples:**

1.  **Infer Schema from JSON**

    ```bash
    dstools schema infer -i data.json > schema.edn
    ```

2.  **Generate Data from Schema**

    ```bash
    dstools schema generate -i schema.edn --samples 10 --format json
    ```

3.  **Validate Data**

    ```bash
    dstools schema validate -i data.json -s schema.edn
    ```
