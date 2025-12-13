(ns bb-web-ds-tools.views.changelog
  (:require [bb-web-ds-tools.components.common :as c]
            [bb-web-ds-tools.components.navigation :as nav]))

(def changelog-data
  [{:version "0.11.0"
    :date "2025-12-12"
    :sections [{:title "Added"
                :items ["Documentation: Added comprehensive docstrings to `impl/datasets.cljc`, `views/settings.cljs`, and other view components."
                        "Refactoring: Introduced `create-panel` helper in `components/layout.cljs` to standardize view initialization."
                        "Vega-Lite: Refactored Vega-Lite render panel into smaller, maintainable components."]}]}
   {:version "0.10.0"
    :date "2025-12-10"
    :sections [{:title "Added"
                :items ["Wiki: Comprehensive documentation added in `wiki/` covering App DB, CLI Tools, Datasets, Gemma, HoneySQL, Malli, and Vega-Lite (118c26e)."
                        "R Runtime: Enhanced R runtime integration with bidirectional dataset synchronization (118c26e)."
                        "Design Docs: Added design documentation for Client-Side Filesystem, FSM Logic, and Dataset Sync (118c26e)."
                        "Visual Testing: Added visual bug reporting and verification scripts (118c26e)."
                        "Integration Tests: Added `cljs/verification/e2e` for end-to-end testing of datasets, navigation, release, and themes."
                        "Storybook: Added `preview-head.html` and `main.js` configuration for Storybook integration."
                        "Externs: Added externs for `webr.js` and `datascript.js` to support advanced compilation."
                        "Workspaces: Added persistence and schema logic for workspaces in `src/bb_web_ds_tools/workspaces`."]}
               {:title "Changed"
                :items ["Refactoring: Massive codebase refactoring to support unified worker-main thread dataset synchronization (118c26e)."
                        "Documentation: Migrated and updated blog posts (118c26e)."
                        "Styles: Updated editor and xterm CSS handling (118c26e)."
                        "Build: Updated `webpack.config.js` and `shadow-cljs.edn` to support new assets and externs."
                        "CLI: Refactored CLI tools for datasets, malli, and honeysql into `src/bb_web_ds_tools/cli/`."
                        "Runtime Protocol: Updated runtime protocol to handle new message types and synchronization logic."
                        "Dependencies: Updated `deps.edn` and `package.json` dependencies."]}]}
   {:version "0.9.0"
    :date "2025-12-08"
    :sections [{:title "Added"
                :items ["CLI Tools: Added CLI tools for datasets, malli, and honeysql (e000518, cafebb5)."
                        "SQL Persistence: Reintroduced SQL WASM and added dataset persistence (cf6130f)."
                        "Theme Support: Allow users to change theme (737f0c2)."
                        "SCI Context: Expose datasets and aliases in SCI context (d610a20)."
                        "Blog: Migrate blog to quickblog and separate content directory (3915ed0)."]}
               {:title "Changed"
                :items ["Editor Theme: Update editor theme colors for better contrast (7464e2c)."
                        "Layout: Standardize Main Container Padding (b474846) and allow overflow-y on landing page (b02cf07)."]}
               {:title "Fixed"
                :items ["WebR: Fix WebR runtime tests to match new event structure (0704331)."
                        "REPL: Fix advanced compilation issue in REPL by adding Datascript externs (ba0641a)."
                        "Landing Page: Fix canvas animations using ResizeObserver (affc403)."]}]}
   {:version "0.8.0"
    :date "2025-12-05"
    :sections [{:title "Added"
                :items ["Malli Time Schemas and Min/Max Inference (e029186)."]}]}
   {:version "0.7.0"
    :date "2025-12-01"
    :sections [{:title "Fixed"
                :items ["Corrected a typo in the Gemma view (`gemma.cljs`) (5736b98)."]}
               {:title "Added"
                :items ["Malli validation JSON schema (1560443)."]}]}
   {:version "0.6.0"
    :date "2025-11-28"
    :sections [{:title "Changed"
                :items ["Updated changelog view to support categorized entries (Added, Changed, etc.) matching CHANGELOG.md"
                        "Synced in-app changelog with CHANGELOG.md"]}]}
   {:version "0.5.0"
    :date "2025-11-25"
    :sections [{:title "Changed"
                :items ["Default View: The application now defaults to the Malli view instead of a dedicated landing page, streamlining the user experience."
                        "Sidebar State: The navigation sidebar is now closed by default on initial load."
                        "URL Structure: Simplified routing by removing the dedicated `/landing` route."]}]}
   {:version "0.4.0"
    :date "2025-11-25"
    :sections [{:title "Changed"
                :items ["Implemented code splitting for application views, significantly reducing the initial bundle size from ~1.5MB to ~228KB. This improves the initial load time by loading view-specific code on demand."]}]}
   {:version "0.3.0"
    :date "2025-11-24"
    :sections [{:title "Added"
                :items ["App DB Inspector: Real-time inspection and modification of the re-frame application database. Includes watching paths, editing values, and viewing data."
                        "ClojureScript REPL: Interactive ClojureScript environment powered by SCI. Features browser evaluation, re-frame interaction, and multiple instances."
                        "Changelog Viewer: In-app viewer for the project changelog."]}]}
   {:version "0.2.0"
    :date "2025-11-22"
    :sections [{:title "Added"
                :items ["Datasets Manager: New full-featured CSV/TSV/JSON dataset management. Features import, editable table view, column visibility, and multiple datasets."
                        "Pyodide Integration: Python runtime environment in the browser. Features direct code execution, Monaco editor, and stdout/stderr capture."
                        "WebR REPL: R runtime environment via WebAssembly. Features interactive terminal and full R evaluation loop."]}]}
   {:version "0.1.0"
    :date "2024-05-21"
    :sections [{:title "Added"
                :items ["Initial release of BB Web DS Tools."
                        "Malli Tools: Schema inference and data generation."
                        "HoneySQL Tools: SQL formatting from Clojure data structures."
                        "Vega-Lite: Client-side data visualization."
                        "Gemma: Local LLM integration using MediaPipe."
                        "Editor: CodeMirror scratchpad."]}
               {:title "Changed"
                :items ["Refactored project structure: moved tool panels to `src/bb_web_ds_tools/views/` and shared components to `src/bb_web_ds_tools/components/`."
                        "Updated application layout to a dark \"Gemini CLI\" theme."]}]}])

(defn changelog-item
  "Renders a single changelog entry card.

  Args:
    props (map): Changelog entry containing :version, :date, and :sections.

  Returns:
    vector: A hiccup vector."
  [{:keys [version date sections]}]
  [:div {:class "bg-[#4f4f4f] border-l-4 border-[#8cd0d3] p-6 mb-6 rounded-r-lg shadow-md"}
   [:div {:class "flex items-center justify-between mb-4"}
    [:h3 {:class "text-2xl font-bold text-[#f0dfaf]"} (str "v" version)]
    [:span {:class "text-[#9f9f9f] text-sm"} date]]
   (for [{:keys [title items]} sections]
     ^{:key title}
     [:div {:class "mb-4 last:mb-0"}
      [:h4 {:class "text-lg font-semibold text-[#8cd0d3] mb-2"} title]
      [:ul {:class "list-disc list-inside text-[#dcdccc] space-y-1"}
       (for [item items]
         ^{:key item}
         [:li {:class "leading-relaxed"} item])]])])

(defn panel
  "Renders the full changelog page.

  Returns:
    vector: A hiccup vector."
  []
  [:div {:class "h-full w-full bg-[#3f3f3f] py-12 px-4 overflow-y-auto"}
   [:div {:class "container mx-auto max-w-3xl"}
    [c/page-header "Changelog"
     [c/icon-button-link
      {:href (nav/get-wiki-url :changelog)
       :title "Help: Changelog"
       :class "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"
       :icon [:svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :class "w-4 h-4"}
              [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}]]}]]
    [:div
     (for [item changelog-data]
       ^{:key (:version item)}
       [changelog-item item])]]])
