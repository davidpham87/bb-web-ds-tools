goog.provide('bb_web_ds_tools.views.changelog');
bb_web_ds_tools.views.changelog.changelog_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.6.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-28",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updated changelog view to support categorized entries (Added, Changed, etc.) matching CHANGELOG.md","Synced in-app changelog with CHANGELOG.md"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.5.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default View: The application now defaults to the Malli view instead of a dedicated landing page, streamlining the user experience.","Sidebar State: The navigation sidebar is now closed by default on initial load.","URL Structure: Simplified routing by removing the dedicated `/landing` route."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.4.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Implemented code splitting for application views, significantly reducing the initial bundle size from ~1.5MB to ~228KB. This improves the initial load time by loading view-specific code on demand."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.3.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-24",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App DB Inspector: Real-time inspection and modification of the re-frame application database. Includes watching paths, editing values, and viewing data.","ClojureScript REPL: Interactive ClojureScript environment powered by SCI. Features browser evaluation, re-frame interaction, and multiple instances.","Changelog Viewer: In-app viewer for the project changelog."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.2.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-22",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datasets Manager: New full-featured CSV/TSV/JSON dataset management. Features import, editable table view, column visibility, and multiple datasets.","Pyodide Integration: Python runtime environment in the browser. Features direct code execution, Monaco editor, and stdout/stderr capture.","WebR REPL: R runtime environment via WebAssembly. Features interactive terminal and full R evaluation loop."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.1.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2024-05-21",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Initial release of BB Web DS Tools.","Malli Tools: Schema inference and data generation.","HoneySQL Tools: SQL formatting from Clojure data structures.","Vega-Lite: Client-side data visualization.","Gemma: Local LLM integration using MediaPipe.","Editor: CodeMirror scratchpad."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Refactored project structure: moved tool panels to `src/bb_web_ds_tools/views/` and shared components to `src/bb_web_ds_tools/components/`.","Updated application layout to a dark \"Gemini CLI\" theme."], null)], null)], null)], null)], null);
bb_web_ds_tools.views.changelog.changelog_item = (function bb_web_ds_tools$views$changelog$changelog_item(p__28209){
var map__28210 = p__28209;
var map__28210__$1 = cljs.core.__destructure_map(map__28210);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28210__$1,new cljs.core.Keyword(null,"version","version",425292698));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28210__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28210__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#4f4f4f] border-l-4 border-[#8cd0d3] p-6 mb-6 rounded-r-lg shadow-md"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold text-[#f0dfaf]"], null),["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[#9f9f9f] text-sm"], null),date], null)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211(s__28212){
return (new cljs.core.LazySeq(null,(function (){
var s__28212__$1 = s__28212;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28212__$1);
if(temp__5825__auto__){
var s__28212__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28212__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28212__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28214 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28213 = (0);
while(true){
if((i__28213 < size__5502__auto__)){
var map__28215 = cljs.core._nth(c__5501__auto__,i__28213);
var map__28215__$1 = cljs.core.__destructure_map(map__28215);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28215__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28215__$1,new cljs.core.Keyword(null,"items","items",1031954938));
cljs.core.chunk_append(b__28214,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (i__28213,map__28215,map__28215__$1,title,items,c__5501__auto__,size__5502__auto__,b__28214,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28216(s__28217){
return (new cljs.core.LazySeq(null,((function (i__28213,map__28215,map__28215__$1,title,items,c__5501__auto__,size__5502__auto__,b__28214,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections){
return (function (){
var s__28217__$1 = s__28217;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28217__$1);
if(temp__5825__auto____$1){
var s__28217__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28217__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__28217__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__28219 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__28218 = (0);
while(true){
if((i__28218 < size__5502__auto____$1)){
var item = cljs.core._nth(c__5501__auto____$1,i__28218);
cljs.core.chunk_append(b__28219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__28236 = (i__28218 + (1));
i__28218 = G__28236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28219),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28216(cljs.core.chunk_rest(s__28217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28219),null);
}
} else {
var item = cljs.core.first(s__28217__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28216(cljs.core.rest(s__28217__$2)));
}
} else {
return null;
}
break;
}
});})(i__28213,map__28215,map__28215__$1,title,items,c__5501__auto__,size__5502__auto__,b__28214,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections))
,null,null));
});})(i__28213,map__28215,map__28215__$1,title,items,c__5501__auto__,size__5502__auto__,b__28214,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)));

var G__28237 = (i__28213 + (1));
i__28213 = G__28237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28214),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211(cljs.core.chunk_rest(s__28212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28214),null);
}
} else {
var map__28220 = cljs.core.first(s__28212__$2);
var map__28220__$1 = cljs.core.__destructure_map(map__28220);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28220__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28220__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (map__28220,map__28220__$1,title,items,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28221(s__28222){
return (new cljs.core.LazySeq(null,(function (){
var s__28222__$1 = s__28222;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28222__$1);
if(temp__5825__auto____$1){
var s__28222__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28222__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28222__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28224 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28223 = (0);
while(true){
if((i__28223 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__28223);
cljs.core.chunk_append(b__28224,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__28238 = (i__28223 + (1));
i__28223 = G__28238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28224),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28221(cljs.core.chunk_rest(s__28222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28224),null);
}
} else {
var item = cljs.core.first(s__28222__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211_$_iter__28221(cljs.core.rest(s__28222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__28220,map__28220__$1,title,items,s__28212__$2,temp__5825__auto__,map__28210,map__28210__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28211(cljs.core.rest(s__28212__$2)));
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
bb_web_ds_tools.views.changelog.changelog_page = (function bb_web_ds_tools$views$changelog$changelog_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-[#3f3f3f] py-12 px-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto max-w-3xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-3xl font-bold text-[#f0dfaf] text-center mb-8"], null),"Changelog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$changelog_page_$_iter__28225(s__28226){
return (new cljs.core.LazySeq(null,(function (){
var s__28226__$1 = s__28226;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28226__$1);
if(temp__5825__auto__){
var s__28226__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28226__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28226__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28228 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28227 = (0);
while(true){
if((i__28227 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__28227);
cljs.core.chunk_append(b__28228,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__28248 = (i__28227 + (1));
i__28227 = G__28248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28228),bb_web_ds_tools$views$changelog$changelog_page_$_iter__28225(cljs.core.chunk_rest(s__28226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28228),null);
}
} else {
var item = cljs.core.first(s__28226__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$views$changelog$changelog_page_$_iter__28225(cljs.core.rest(s__28226__$2)));
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
