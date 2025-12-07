# CLI Tools Documentation

The `bb-web-ds-tools` repository includes a set of command-line interface (CLI) tools designed to be run with Babashka. These tools expose the core logic of the web application for scripting and automation.

## General Usage

All tools are executed via the unified entry point `dstools`:

```bash
bb -m dstools <command> <subcommand> [opts]
```

## Tools

### 1. Datasets (`data`)

Converts data between CSV, JSON, and EDN formats.

**Command:** `convert`

**Data Format Note:** The tool expects input data to be a **sequence of maps** (row-maps). Columnar data formats (e.g., object of arrays) are not currently supported for automatic conversion to row-based formats like CSV.

**Options:**

*   `-f, --format <fmt>`: Input format (`csv`, `json`, `edn`). **Required**.
*   `-t, --to <fmt>`: Output format (`csv`, `json`, `edn`). Default: `json`.
*   `-i, --file <file>`: Input file path. Reads from stdin if omitted.
*   `-o, --out <file>`: Output file path. Writes to stdout if omitted. If input file is provided and output is not, the filename is inferred (e.g., `data.json` -> `data.edn`).

**Example:**

```bash
# Convert JSON to EDN
bb -m dstools data convert -f json -t edn -i data.json
# Output: data.edn
```

### 2. HoneySQL (`sql`)

Converts HoneySQL EDN data structures into SQL strings.

**Command:** `convert`

**Options:**

*   `-i, --file <file>`: Input file path containing the HoneySQL map. Reads from stdin if omitted.
*   `-o, --out <file>`: Output file path. Inferred from input filename if omitted.

**Example:**

```bash
# Convert a HoneySQL map in query.edn to SQL
bb -m dstools sql convert -i query.edn
# Output: query.sql
```

### 3. Malli (`schema`)

Provides utilities for schema inference, data generation, and validation using the Malli library.

**Commands:**

*   `infer`: Infers a Malli schema from an input dataset.
    *   `-e, --max-enum <int>`: Max distinct values to treat as an enum. Default: `10`.
    *   `-i, --file <file>`: Input data file.

*   `generate`: Generates sample data from a Malli schema.
    *   `-s, --samples <int>`: Number of samples to generate. Default: `1`.
    *   `-f, --format <fmt>`: Output format (`edn`, `json`). Default: `edn`.
    *   `-i, --file <file>`: Input schema file.

*   `validate`: Validates data against a schema.
    *   `-s, --schema <file>`: Path to the schema file. **Required**.
    *   `-i, --file <file>`: Path to the data file.

**Example:**

```bash
# Infer schema
bb -m dstools schema infer -i data.json

# Generate data
bb -m dstools schema generate -i schema.edn -s 5

# Validate data
bb -m dstools schema validate -s schema.edn -i data.edn
```
