# Visual Bug Report

## 1. Hardcoded Hex Codes
The following elements use undefined hex codes instead of semantic theme tokens, violating the design system consistency.

*   **File:** `src/bb_web_ds_tools/views/datasets.cljs`
    *   **Element:** Dataset Title Input (Focus State)
    *   **Issue:** Uses `focus:border-[#f0dfaf]`.
    *   **Fix:** Create/Use a theme token for the accent border color (e.g., `t/border-focus-accent`).
    *   **Element:** Delete Dataset Button
    *   **Issue:** Uses `text-[#3f3f3f]`.
    *   **Fix:** Use `t/text-button-primary` (which maps to the same color but is semantically defined).

## 2. Grid & Spacing Deviations
The "Dense Data Grid" component deviates from the "Engineering-Grade" spec.

*   **File:** `src/bb_web_ds_tools/components/common.cljs`
    *   **Component:** `th`, `td`
    *   **Issue:** Uses `px-6 py-3` (th) and `px-6 py-4` (td).
    *   **Spec Violation:** The spec requires `px-3` padding and 32px row height. The current padding results in significantly taller rows (>50px) and wider columns.
    *   **Fix:** Update padding to `px-3` and adjust vertical padding (e.g., `py-1.5` or `py-2`) to match the 32px height constraint.

## 3. Optical Alignment Failures
Instances where elements are mathematically aligned but visually unbalanced.

1.  **Table Header Sort Indicators:**
    *   The sort arrows (`▲`/`▼`) are appended as text characters within the `th` element. Due to font metrics, these glyphs often do not align with the cap-height of the header text, causing them to float or sink visually.

2.  **Dataset View Title vs. Row Count:**
    *   The dataset title is `text-xl` (20px/28px) and the row count is `text-sm` (14px/20px). While aligned via `items-center` (flexbox), the significant difference in baseline and cap-height makes the smaller text feel "floating" relative to the title's baseline.

3.  **Importer View Buttons vs. Labels:**
    *   The `c/button-xs` components are mixed with text labels like "Load Example:". The button padding (`py-1`) combined with the border and text size creates a container height that may not align its text baseline with the adjacent static label text, creating a "stair-step" effect.
