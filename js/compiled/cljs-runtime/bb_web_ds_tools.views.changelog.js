goog.provide('bb_web_ds_tools.views.changelog');
bb_web_ds_tools.views.changelog.changelog_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.6.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-28",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updated changelog view to support categorized entries (Added, Changed, etc.) matching CHANGELOG.md","Synced in-app changelog with CHANGELOG.md"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.5.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default View: The application now defaults to the Malli view instead of a dedicated landing page, streamlining the user experience.","Sidebar State: The navigation sidebar is now closed by default on initial load.","URL Structure: Simplified routing by removing the dedicated `/landing` route."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.4.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-25",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Implemented code splitting for application views, significantly reducing the initial bundle size from ~1.5MB to ~228KB. This improves the initial load time by loading view-specific code on demand."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.3.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-24",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["App DB Inspector: Real-time inspection and modification of the re-frame application database. Includes watching paths, editing values, and viewing data.","ClojureScript REPL: Interactive ClojureScript environment powered by SCI. Features browser evaluation, re-frame interaction, and multiple instances.","Changelog Viewer: In-app viewer for the project changelog."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.2.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2025-11-22",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datasets Manager: New full-featured CSV/TSV/JSON dataset management. Features import, editable table view, column visibility, and multiple datasets.","Pyodide Integration: Python runtime environment in the browser. Features direct code execution, Monaco editor, and stdout/stderr capture.","WebR REPL: R runtime environment via WebAssembly. Features interactive terminal and full R evaluation loop."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"version","version",425292698),"0.1.0",new cljs.core.Keyword(null,"date","date",-1463434462),"2024-05-21",new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Added",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Initial release of BB Web DS Tools.","Malli Tools: Schema inference and data generation.","HoneySQL Tools: SQL formatting from Clojure data structures.","Vega-Lite: Client-side data visualization.","Gemma: Local LLM integration using MediaPipe.","Editor: CodeMirror scratchpad."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Changed",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Refactored project structure: moved tool panels to `src/bb_web_ds_tools/views/` and shared components to `src/bb_web_ds_tools/components/`.","Updated application layout to a dark \"Gemini CLI\" theme."], null)], null)], null)], null)], null);
bb_web_ds_tools.views.changelog.changelog_item = (function bb_web_ds_tools$views$changelog$changelog_item(p__28176){
var map__28177 = p__28176;
var map__28177__$1 = cljs.core.__destructure_map(map__28177);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"version","version",425292698));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#4f4f4f] border-l-4 border-[#8cd0d3] p-6 mb-6 rounded-r-lg shadow-md"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold text-[#f0dfaf]"], null),["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[#9f9f9f] text-sm"], null),date], null)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178(s__28179){
return (new cljs.core.LazySeq(null,(function (){
var s__28179__$1 = s__28179;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28179__$1);
if(temp__5825__auto__){
var s__28179__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28179__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28179__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28181 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28180 = (0);
while(true){
if((i__28180 < size__5502__auto__)){
var map__28182 = cljs.core._nth(c__5501__auto__,i__28180);
var map__28182__$1 = cljs.core.__destructure_map(map__28182);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28182__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28182__$1,new cljs.core.Keyword(null,"items","items",1031954938));
cljs.core.chunk_append(b__28181,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (i__28180,map__28182,map__28182__$1,title,items,c__5501__auto__,size__5502__auto__,b__28181,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28183(s__28184){
return (new cljs.core.LazySeq(null,((function (i__28180,map__28182,map__28182__$1,title,items,c__5501__auto__,size__5502__auto__,b__28181,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections){
return (function (){
var s__28184__$1 = s__28184;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28184__$1);
if(temp__5825__auto____$1){
var s__28184__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28184__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__28184__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__28186 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__28185 = (0);
while(true){
if((i__28185 < size__5502__auto____$1)){
var item = cljs.core._nth(c__5501__auto____$1,i__28185);
cljs.core.chunk_append(b__28186,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__28199 = (i__28185 + (1));
i__28185 = G__28199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28186),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28183(cljs.core.chunk_rest(s__28184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28186),null);
}
} else {
var item = cljs.core.first(s__28184__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28183(cljs.core.rest(s__28184__$2)));
}
} else {
return null;
}
break;
}
});})(i__28180,map__28182,map__28182__$1,title,items,c__5501__auto__,size__5502__auto__,b__28181,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections))
,null,null));
});})(i__28180,map__28182,map__28182__$1,title,items,c__5501__auto__,size__5502__auto__,b__28181,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)));

var G__28200 = (i__28180 + (1));
i__28180 = G__28200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28181),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178(cljs.core.chunk_rest(s__28179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28181),null);
}
} else {
var map__28187 = cljs.core.first(s__28179__$2);
var map__28187__$1 = cljs.core.__destructure_map(map__28187);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 last:mb-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-[#8cd0d3] mb-2"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-disc list-inside text-[#dcdccc] space-y-1"], null),(function (){var iter__5503__auto__ = ((function (map__28187,map__28187__$1,title,items,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections){
return (function bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28188(s__28189){
return (new cljs.core.LazySeq(null,(function (){
var s__28189__$1 = s__28189;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28189__$1);
if(temp__5825__auto____$1){
var s__28189__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28189__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28189__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28191 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28190 = (0);
while(true){
if((i__28190 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__28190);
cljs.core.chunk_append(b__28191,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__28201 = (i__28190 + (1));
i__28190 = G__28201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28191),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28188(cljs.core.chunk_rest(s__28189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28191),null);
}
} else {
var item = cljs.core.first(s__28189__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178_$_iter__28188(cljs.core.rest(s__28189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__28187,map__28187__$1,title,items,s__28179__$2,temp__5825__auto__,map__28177,map__28177__$1,version,date,sections))
;
return iter__5503__auto__(items);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)),bb_web_ds_tools$views$changelog$changelog_item_$_iter__28178(cljs.core.rest(s__28179__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-[#3f3f3f] py-12 px-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto max-w-3xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-3xl font-bold text-[#f0dfaf] text-center mb-8"], null),"Changelog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$changelog$changelog_page_$_iter__28192(s__28193){
return (new cljs.core.LazySeq(null,(function (){
var s__28193__$1 = s__28193;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28193__$1);
if(temp__5825__auto__){
var s__28193__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28193__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28193__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28195 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28194 = (0);
while(true){
if((i__28194 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__28194);
cljs.core.chunk_append(b__28195,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__28202 = (i__28194 + (1));
i__28194 = G__28202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28195),bb_web_ds_tools$views$changelog$changelog_page_$_iter__28192(cljs.core.chunk_rest(s__28193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28195),null);
}
} else {
var item = cljs.core.first(s__28193__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$views$changelog$changelog_page_$_iter__28192(cljs.core.rest(s__28193__$2)));
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
