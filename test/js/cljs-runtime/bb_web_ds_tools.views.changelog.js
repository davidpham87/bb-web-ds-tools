goog.provide('bb_web_ds_tools.views.changelog');
bb_web_ds_tools.views.changelog.changelog_data = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.11.2",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-05-23",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Refactoring",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Code Cleanup: Simplified `help-button` usage across all views by leveraging default values, removing redundant code (local).","Documentation: Added missing docstrings to `utils/themes`, `workers/sci`, `workers/persistence`, `workers/pyodide`, and animation components (local)."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Help Button: Added Context Sensitive Help Button to all tool views (128f03b)."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.11.1",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-05-23",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Refactoring",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Refactored `bb-web-ds-tools.components.common` to consolidate button components.","Refactored `bb-web-ds-tools.utils.dataset-processing` to improve documentation and maintainability.","Replaced deprecated button components in Datasets view (`src/bb_web_ds_tools/views/datasets.cljs`).","Optimized landing page canvas rendering logic (`src/bb_web_ds_tools/views/landing.cljs`)."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Documentation",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Added missing docstrings to `bb-web-ds-tools.views.landing`, `bb-web-ds-tools.utils.dataset-processing`, and `bb-web-ds-tools.components.common`.","Added docstrings to `src/bb_web_ds_tools/workspaces/persistence_fx.cljs`."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.11.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-12-12",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Documentation: Added comprehensive docstrings to `impl/datasets.cljc`, `views/settings.cljs`, and other view components.","Refactoring: Introduced `create-panel` helper in `components/layout.cljs` to standardize view initialization.","Vega-Lite: Refactored Vega-Lite render panel into smaller, maintainable components."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.10.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-12-10",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wiki: Comprehensive documentation added in `wiki/` covering App DB, CLI Tools, Datasets, Gemma, HoneySQL, Malli, and Vega-Lite (118c26e).","R Runtime: Enhanced R runtime integration with bidirectional dataset synchronization (118c26e).","Design Docs: Added design documentation for Client-Side Filesystem, FSM Logic, and Dataset Sync (118c26e).","Visual Testing: Added visual bug reporting and verification scripts (118c26e).","Integration Tests: Added `cljs/verification/e2e` for end-to-end testing of datasets, navigation, release, and themes.","Storybook: Added `preview-head.html` and `main.js` configuration for Storybook integration.","Externs: Added externs for `webr.js` and `datascript.js` to support advanced compilation.","Workspaces: Added persistence and schema logic for workspaces in `src/bb_web_ds_tools/workspaces`."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Refactoring: Massive codebase refactoring to support unified worker-main thread dataset synchronization (118c26e).","Documentation: Migrated and updated blog posts (118c26e).","Styles: Updated editor and xterm CSS handling (118c26e).","Build: Updated `webpack.config.js` and `shadow-cljs.edn` to support new assets and externs.","CLI: Refactored CLI tools for datasets, malli, and honeysql into `src/bb_web_ds_tools/cli/`.","Runtime Protocol: Updated runtime protocol to handle new message types and synchronization logic.","Dependencies: Updated `deps.edn` and `package.json` dependencies."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.9.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-12-08",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLI Tools: Added CLI tools for datasets, malli, and honeysql (e000518, cafebb5).","SQL Persistence: Reintroduced SQL WASM and added dataset persistence (cf6130f).","Theme Support: Allow users to change theme (737f0c2).","SCI Context: Expose datasets and aliases in SCI context (d610a20).","Blog: Migrate blog to quickblog and separate content directory (3915ed0)."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Editor Theme: Update editor theme colors for better contrast (7464e2c).","Layout: Standardize Main Container Padding (b474846) and allow overflow-y on landing page (b02cf07)."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Fixed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebR: Fix WebR runtime tests to match new event structure (0704331).","REPL: Fix advanced compilation issue in REPL by adding Datascript externs (ba0641a).","Landing Page: Fix canvas animations using ResizeObserver (affc403)."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.8.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-12-05",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Malli Time Schemas and Min/Max Inference (e029186)."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.7.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-12-01",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Fixed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Corrected a typo in the Gemma view (`gemma.cljs`) (5736b98)."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Malli validation JSON schema (1560443)."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.6.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-28",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updated changelog view to support categorized entries (Added, Changed, etc.) matching CHANGELOG.md","Synced in-app changelog with CHANGELOG.md"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.5.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default View: The application now defaults to the Malli view instead of a dedicated landing page, streamlining the user experience.","Sidebar State: The navigation sidebar is now closed by default on initial load.","URL Structure: Simplified routing by removing the dedicated `/landing` route."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.4.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Implemented code splitting for application views, significantly reducing the initial bundle size from ~1.5MB to ~228KB. This improves the initial load time by loading view-specific code on demand."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.3.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-24",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App DB Inspector: Real-time inspection and modification of the re-frame application database. Includes watching paths, editing values, and viewing data.","ClojureScript REPL: Interactive ClojureScript environment powered by SCI. Features browser evaluation, re-frame interaction, and multiple instances.","Changelog Viewer: In-app viewer for the project changelog."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.2.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-22",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datasets Manager: New full-featured CSV/TSV/JSON dataset management. Features import, editable table view, column visibility, and multiple datasets.","Pyodide Integration: Python runtime environment in the browser. Features direct code execution, Monaco editor, and stdout/stderr capture.","WebR REPL: R runtime environment via WebAssembly. Features interactive terminal and full R evaluation loop."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.1.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2024-05-21",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Initial release of BB Web DS Tools.","Malli Tools: Schema inference and data generation.","HoneySQL Tools: SQL formatting from Clojure data structures.","Vega-Lite: Client-side data visualization.","Gemma: Local LLM integration using MediaPipe.","Editor: CodeMirror scratchpad."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Refactored project structure: moved tool panels to `src/bb_web_ds_tools/views/` and shared components to `src/bb_web_ds_tools/components/`.","Updated application layout to a dark \"Gemini CLI\" theme."], null)], null)], null)], null)], null);
/**
 * Renders a single changelog entry card.
 * 
 *   Args:
 *  props (map): Changelog entry containing :version, :date, and :sections.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.changelog.changelog_item = (function bb_web_ds_tools$views$changelog$changelog_item(p__22616){
var map__22617 = p__22616;
var map__22617__$1 = cljs.core.__destructure_map(map__22617);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"version","version",425292698));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#4f4f4f] border-l-4 border-[#8cd0d3] p-6 mb-6 rounded-r-lg shadow-md"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold text-[#f0dfaf]"], null),["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[#9f9f9f] text-sm"], null),date], null)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618(s__22619){
return (new cljs.core.LazySeq(null,(function (){
var s__22619__$1 = s__22619;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22619__$1);
if(temp__5825__auto__){
var s__22619__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22619__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22619__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22621 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22620 = (0);
while(true){
if((i__22620 < size__5502__auto__)){
var map__22629 = cljs.core._nth(c__5501__auto__,i__22620);
var map__22629__$1 = cljs.core.__destructure_map(map__22629);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22629__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22629__$1,new cljs.core.Keyword(null,"items","items",1031954938));
cljs.core.chunk_append(b__22621,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (i__22620,map__22629,map__22629__$1,title,items,c__5501__auto__,size__5502__auto__,b__22621,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22630(s__22631){
return (new cljs.core.LazySeq(null,((function (i__22620,map__22629,map__22629__$1,title,items,c__5501__auto__,size__5502__auto__,b__22621,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections){
return (function (){
var s__22631__$1 = s__22631;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22631__$1);
if(temp__5825__auto____$1){
var s__22631__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22631__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__22631__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__22633 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__22632 = (0);
while(true){
if((i__22632 < size__5502__auto____$1)){
var item = cljs.core._nth(c__5501__auto____$1,i__22632);
cljs.core.chunk_append(b__22633,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__22666 = (i__22632 + (1));
i__22632 = G__22666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22633),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22630(cljs.core.chunk_rest(s__22631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22633),null);
}
} else {
var item = cljs.core.first(s__22631__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22630(cljs.core.rest(s__22631__$2)));
}
} else {
return null;
}
break;
}
});})(i__22620,map__22629,map__22629__$1,title,items,c__5501__auto__,size__5502__auto__,b__22621,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections))
,null,null));
});})(i__22620,map__22629,map__22629__$1,title,items,c__5501__auto__,size__5502__auto__,b__22621,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)));

var G__22667 = (i__22620 + (1));
i__22620 = G__22667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22621),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618(cljs.core.chunk_rest(s__22619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22621),null);
}
} else {
var map__22644 = cljs.core.first(s__22619__$2);
var map__22644__$1 = cljs.core.__destructure_map(map__22644);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (map__22644,map__22644__$1,title,items,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22645(s__22646){
return (new cljs.core.LazySeq(null,(function (){
var s__22646__$1 = s__22646;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22646__$1);
if(temp__5825__auto____$1){
var s__22646__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22646__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22646__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22648 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22647 = (0);
while(true){
if((i__22647 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__22647);
cljs.core.chunk_append(b__22648,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__22672 = (i__22647 + (1));
i__22647 = G__22672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22648),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22645(cljs.core.chunk_rest(s__22646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22648),null);
}
} else {
var item = cljs.core.first(s__22646__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618_$_iter__22645(cljs.core.rest(s__22646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__22644,map__22644__$1,title,items,s__22619__$2,temp__5825__auto__,map__22617,map__22617__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__22618(cljs.core.rest(s__22619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(sections);
})()], null);
});
/**
 * Renders the full changelog page.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.changelog.panel = (function bb_web_ds_tools$views$changelog$panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full bg-[#3f3f3f] py-12 px-4 overflow-y-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto max-w-3xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.page_header,"Changelog",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"changelog","changelog",-435725878)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Changelog",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$panel_$_iter__22657(s__22658){
return (new cljs.core.LazySeq(null,(function (){
var s__22658__$1 = s__22658;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22658__$1);
if(temp__5825__auto__){
var s__22658__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22658__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22658__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22660 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22659 = (0);
while(true){
if((i__22659 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__22659);
cljs.core.chunk_append(b__22660,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__22673 = (i__22659 + (1));
i__22659 = G__22673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22660),bb_web_ds_tools$views$changelog$panel_$_iter__22657(cljs.core.chunk_rest(s__22658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22660),null);
}
} else {
var item = cljs.core.first(s__22658__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$views$changelog$panel_$_iter__22657(cljs.core.rest(s__22658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.views.changelog.changelog_data);
})()], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.changelog.js.map
