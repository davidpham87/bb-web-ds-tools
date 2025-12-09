(ns bb-web-ds-tools.views.changelog
  (:require [bb-web-ds-tools.components.common :as c]))

(def changelog-data
  [{:version "0.9.0"
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
    [c/page-header "Changelog"]
    [:div
     (for [item changelog-data]
       ^{:key (:version item)}
       [changelog-item item])]]])
