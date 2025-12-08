# CLI Data Structures

The `dstools data convert` command supports converting between different internal data structures. This is useful when you need to reshape data, for example, from a list of objects (row-maps) to an object of arrays (columnar).

## Supported Structures

*   `row-maps`: A sequence of maps. Example: `[{:a 1 :b 2} {:a 3 :b 4}]`.
*   `columnar`: A map of sequences. Example: `{:a [1 3] :b [2 4]}`.
*   `rows`: A sequence of sequences, where the first element is the header. Example: `[[:a :b] [1 2] [3 4]]`.

## Structure Guessing

If you do not specify an input structure using `--input-struct` (or `-S`), the tool attempts to guess it based on the parsed data:

1.  **Row Maps**: If the data is a sequence and the first element is a map.
2.  **Columnar**: If the data is a map.
3.  **Rows**: If the data is a sequence and the first element is also a sequence.

## Explicit Conversion

You can enforce specific input and output structures using the options:

*   `-S, --input-struct <struct>`: Declare the structure of the input data.
*   `-s, --output-struct <struct>`: Request the structure of the output data.

If `--output-struct` is provided but `--input-struct` is not, the tool will guess the input structure and convert it to the requested output structure. If neither is provided, the structure remains unchanged (except for CSV output, which always requires/produces a row-based format internally before writing).

## Examples

### Convert Row Maps to Columnar

Given `data.json`:
```json
[{"a": 1, "b": 2}, {"a": 3, "b": 4}]
```

Command:
```bash
bb -m dstools data convert -f json -t json -s columnar -i data.json
```

Output:
```json
{"a": [1, 3], "b": [2, 4]}
```

### Convert Columnar to Row Maps

Given `cols.json`:
```json
{"a": [1, 3], "b": [2, 4]}
```

Command:
```bash
bb -m dstools data convert -f json -t json -s row-maps -i cols.json
```

Output:
```json
[{"a": 1, "b": 2}, {"a": 3, "b": 4}]
```
