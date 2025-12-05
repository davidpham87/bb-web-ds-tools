# Visual Verification Report

## Overview
A visual verification of the application was performed using automated Playwright scripts to capture screenshots of all primary views and sub-views. The goal was to assess layout stability, consistency of UI elements (buttons, panels), and overall visual coherence.

## Findings

### 1. Global Layout Instability (Padding & Margins)
There is a significant inconsistency in how views handle the main content container's padding, causing content to "jump" when navigating between views.

*   **Full-Bleed Views:**
    *   `Code`, `Malli`, `Vega-Lite`, and `App DB` use the full height and width of the content area (`h-full w-full`).
    *   These views often manage their own internal padding or use split-panes that touch the edges of the screen.
*   **Padded Views:**
    *   `HoneySQL`, `Datasets`, and `Settings` apply a global padding (typically `p-4` or `p-6`) to their main container.
    *   `Gemma` uses a centered container approach (`container mx-auto px-4 py-4`).
    *   `Changelog` uses a specific background color and centered layout (`min-h-screen bg-[#3f3f3f] py-12 px-4`).

**Impact:** The user experiences a jarring transition where the UI "breathing room" changes unpredictably. The dividing line between navigation and content shifts.

### 2. Panel Alignment & Split Views
The application uses a mix of fixed-width columns and percentage-based split views, leading to misalignment of the primary "editor/input" areas across tools.

*   **Fixed Width:** `Malli` and `HoneySQL` constrain their left panel (input/controls) to `max-w-3xl`.
*   **Percentage Split:** `Code` uses a 50/50 split (`w-1/2`). `App DB` uses a 25/75 split (`:ratio :1-3`). `Vega-Lite` uses a 50/50 split on large screens (`2xl:w-1/2`).

**Impact:** The vertical divider line jumps horizontally when switching between `Malli` -> `Code` -> `Vega-Lite`.

### 3. Button Consistency
Button styling is fragmented, with local overrides defeating the purpose of a shared design system.

*   **Standard:** `c/button` (used in `Gemma`, `HoneySQL`) appears to have default padding/sizing.
*   **Malli Overrides:** `Malli` defines a local `btn` function that forces `!py-1 !px-3 !text-sm`, resulting in significantly smaller buttons than the rest of the app.
*   **Vega-Lite:** Uses a custom `tab-button` with `py-2 px-4`, different from Malli's compressed style.
*   **App DB:** Uses `c/button-xs` in some places, mixing sizes.

**Impact:** Click targets vary in size and visual weight, reducing perceived polish.

### 4. Navigation & Headers
*   **Tabs:** `Malli` and `Code` inject their sub-navigation tabs into the global **Top Bar** (via `portal-to-top-bar`). `Vega-Lite` renders its tabs **inside the page content**. This creates an inconsistent navigation model where "view modes" sometimes appear in the chrome and sometimes in the canvas.
*   **Typography:** Header usage is inconsistent.
    *   `HoneySQL` uses `h3` with an icon.
    *   `Datasets` uses `h2`.
    *   `Gemma` uses `h3` with custom colors (`text-[#f0dfaf]`).
    *   `Changelog` uses `h2` centered.

### 5. View-Specific Observations
*   **Gemma:** The layout shifts to a centered "container" mode, unlike the dashboard-style layout of other tools. While potentially intentional for a "chat" interface, it breaks the continuity of the "Tools" suite.
*   **Vega-Lite:** The internal border logic (`border-b 2xl:border-b-0 2xl:border-r`) creates complex responsive behavior that isn't mirrored in the `Code` view, despite similar split-pane requirements.

## Recommendations

1.  **Standardize Main Container:**
    *   Adopt a **Full-Bleed** default for all tool-style views (`Malli`, `Code`, `HoneySQL`, `Vega-Lite`, `Datasets`).
    *   Move the `p-4` padding *inside* the layout components (e.g., inside the specific panel that needs it) rather than on the root view container. This ensures the edges (scrollbars, splitters) always align.

2.  **Unify Button Styles:**
    *   Refactor `bb-web-ds-tools.components.common` to include standard `button-sm` and `button-md` variants.
    *   Remove the local `btn` definition in `malli.cljs` and replace with a standard component.

3.  **Consistent Split-Pane Ratios:**
    *   Standardize on a set of split ratios. For code/preview tools, a default of 50/50 or `max-w-3xl` (fixed) should be chosen and applied consistently. If `Malli` needs `max-w-3xl`, `HoneySQL` and `Code` should likely respect a similar grid or max-width for the editor column.

4.  **Navigation Consistency:**
    *   Move `Vega-Lite` tabs to the Top Bar using `portal-to-top-bar` to match `Malli` and `Code`. This reinforces the pattern that "Sub-views live in the Top Bar".

5.  **Typography System:**
    *   Define standard `page-header` and `section-header` components in `common.cljs` to enforce font-size (`text-xl` vs `text-2xl`) and color consistency.
