# R Integration

The application integrates with the R runtime (WebR) and allows sharing datasets between the UI and R.

## Sharing Datasets

The application's global datasets are automatically synchronized with the R environment.

### Reading Datasets in R

When you run R code, the current datasets from the "Datasets" view are available in the R global environment as a named list called `datasets`.

The structure of `datasets` is a named list of data frames (or lists, depending on structure). You can access them by name:

```r
# Access the dataset named "My Data"
df <- datasets[["My Data"]]
head(df)
```

### Updating Datasets from R

Any modifications to the `datasets` variable in R are synchronized back to the application after the script finishes execution. This allows you to process data in R and view the results in the application.

**Example: Creating a new dataset**

```r
# Create a new dataset in R
datasets[["Processed Data"]] <- mtcars
```

After running this code, a new dataset named "Processed Data" will appear in the "Datasets" view.

**Example: Modifying an existing dataset**

```r
# Add a new column to an existing dataset
datasets[["My Data"]]$new_col <- datasets[["My Data"]]$value * 2
```

The "My Data" dataset in the application will be updated with the new column.

## Technical Details

*   **Injection**: Before executing user code, the application binds the `datasets` list to the R global environment.
*   **Synchronization**: After execution, the application reads the `datasets` variable, converts it back to Clojure data, and updates the application state. It preserves dataset IDs for existing names but will generate new IDs for new names.
*   **Format**: Data frames in R are converted to row-maps in the application. Ensure your R data structures are compatible (e.g., lists of atomic vectors).
