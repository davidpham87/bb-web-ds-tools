var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$papaparse.js");
require("./clojure.string.js");
require("./clojure.edn.js");
require("./cljs.pprint.js");
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.utils.dataset_processing.js");

goog.provide('bb_web_ds_tools.utils.dataset_processing');
bb_web_ds_tools.utils.dataset_processing.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660)," | ",new cljs.core.Keyword(null,"row-start","row-start",-1075739176),"| ",new cljs.core.Keyword(null,"row-end","row-end",231209112)," |",new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542),"---"], null),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"JSON Parse Error"], null)], null);
bb_web_ds_tools.utils.dataset_processing.normalize_columnar = (function bb_web_ds_tools$utils$dataset_processing$normalize_columnar(data){
var cols = cljs.core.keys(data);
var vals_seq = cljs.core.vals(data);
var cnt = ((cljs.core.seq(vals_seq))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vals_seq)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37798_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__37798_SHARP_),i);
}),cols));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
});
bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$normalize_row_arrays(data){
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(data));
var rows = cljs.core.rest(data);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.zipmap(header,row);
}),rows);
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.parse_dataset !== 'undefined')){
} else {
bb_web_ds_tools.utils.dataset_processing.parse_dataset = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37800 = cljs.core.get_global_hierarchy;
return (fexpr__37800.cljs$core$IFn$_invoke$arity$0 ? fexpr__37800.cljs$core$IFn$_invoke$arity$0() : fexpr__37800.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","parse-dataset"),(function (format,structure,_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,structure], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var res = shadow.js.shim.module$papaparse.parse(text,({"header": true, "dynamicTyping": true, "skipEmptyLines": true}));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var res = shadow.js.shim.module$papaparse.parse(text,({"delimiter": "\t", "header": true, "dynamicTyping": true, "skipEmptyLines": true}));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(res.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split_lines(text)));
var parse_row = (function (line){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\|/)));
});
var vec__37805 = lines;
var seq__37806 = cljs.core.seq(vec__37805);
var first__37807 = cljs.core.first(seq__37806);
var seq__37806__$1 = cljs.core.next(seq__37806);
var header_line = first__37807;
var first__37807__$1 = cljs.core.first(seq__37806__$1);
var seq__37806__$2 = cljs.core.next(seq__37806__$1);
var ___$2 = first__37807__$1;
var data_lines = seq__37806__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__37812 = arguments.length;
switch (G__37812) {
case 1:
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1 = (function (text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$2(text,new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config));
}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$2 = (function (text,conf){
var conf__$1 = (function (){var or__5025__auto__ = conf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config);
}
})();
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e37814){if((e37814 instanceof Error)){
var e = e37814;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e37814;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37817 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37817 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37817);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37818 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37818 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37818);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37819 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37819 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37819);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37820 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37820 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37820);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return cljs.core.PersistentVector.EMPTY;
}));
bb_web_ds_tools.utils.dataset_processing.example_rows = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"score","score",-1963588780),12.5,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-01"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"score","score",-1963588780),10.2,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-02"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"score","score",-1963588780),8.7,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-03"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"score","score",-1963588780),15.0,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-04"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"score","score",-1963588780),9.9,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-05"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"score","score",-1963588780),11.1,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-06"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"score","score",-1963588780),13.4,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-07"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"score","score",-1963588780),7.8,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-08"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"score","score",-1963588780),14.2,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-09"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"score","score",-1963588780),10.0,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-10"], null)], null);
bb_web_ds_tools.utils.dataset_processing.to_columnar = (function bb_web_ds_tools$utils$dataset_processing$to_columnar(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(k,rows));
}),cljs.core.PersistentArrayMap.EMPTY,ks);
});
bb_web_ds_tools.utils.dataset_processing.to_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$to_row_arrays(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.vec(cljs.core.cons(cljs.core.vec(ks),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37821_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37821_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__37827 = arguments.length;
switch (G__37827) {
case 1:
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2 = (function (rows,conf){
var conf__$1 = (function (){var or__5025__auto__ = conf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config);
}
})();
var ks = cljs.core.keys(cljs.core.first(rows));
var cell_sep = new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660).cljs$core$IFn$_invoke$arity$1(conf__$1);
var row_start = new cljs.core.Keyword(null,"row-start","row-start",-1075739176).cljs$core$IFn$_invoke$arity$1(conf__$1);
var row_end = new cljs.core.Keyword(null,"row-end","row-end",231209112).cljs$core$IFn$_invoke$arity$1(conf__$1);
var dash = new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542).cljs$core$IFn$_invoke$arity$1(conf__$1);
var header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
var separator = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ks),dash)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
var data_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37822_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37822_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__37835 = arguments.length;
switch (G__37835) {
case 1:
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$1 = (function (data){
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config));
}));

(bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2 = (function (data,conf){
var conf__$1 = (function (){var or__5025__auto__ = conf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config);
}
})();
return JSON.stringify(cljs.core.clj__GT_js(data),null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(conf__$1));
}));

(bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.get_structured_data = (function bb_web_ds_tools$utils$dataset_processing$get_structured_data(structure){
var G__37836 = structure;
var G__37836__$1 = (((G__37836 instanceof cljs.core.Keyword))?G__37836.fqn:null);
switch (G__37836__$1) {
case "row-maps":
return bb_web_ds_tools.utils.dataset_processing.example_rows;

break;
case "columnar":
return bb_web_ds_tools.utils.dataset_processing.to_columnar(bb_web_ds_tools.utils.dataset_processing.example_rows);

break;
case "row-arrays":
return bb_web_ds_tools.utils.dataset_processing.to_row_arrays(bb_web_ds_tools.utils.dataset_processing.example_rows);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37836__$1)].join('')));

}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.example_data !== 'undefined')){
} else {
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37837 = cljs.core.get_global_hierarchy;
return (fexpr__37837.cljs$core$IFn$_invoke$arity$0 ? fexpr__37837.cljs$core$IFn$_invoke$arity$0() : fexpr__37837.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__37913__delegate = function (fmt,structure,p__37838){
var vec__37839 = p__37838;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__37913 = function (fmt,structure,var_args){
var p__37838 = null;
if (arguments.length > 2) {
var G__37914__i = 0, G__37914__a = new Array(arguments.length -  2);
while (G__37914__i < G__37914__a.length) {G__37914__a[G__37914__i] = arguments[G__37914__i + 2]; ++G__37914__i;}
  p__37838 = new cljs.core.IndexedSeq(G__37914__a,0,null);
} 
return G__37913__delegate.call(this,fmt,structure,p__37838);};
G__37913.cljs$lang$maxFixedArity = 2;
G__37913.cljs$lang$applyTo = (function (arglist__37915){
var fmt = cljs.core.first(arglist__37915);
arglist__37915 = cljs.core.next(arglist__37915);
var structure = cljs.core.first(arglist__37915);
var p__37838 = cljs.core.rest(arglist__37915);
return G__37913__delegate(fmt,structure,p__37838);
});
G__37913.cljs$core$IFn$_invoke$arity$variadic = G__37913__delegate;
return G__37913;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37916__delegate = function (_,___$1,p__37843){
var vec__37844 = p__37843;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37844,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__37916 = function (_,___$1,var_args){
var p__37843 = null;
if (arguments.length > 2) {
var G__37917__i = 0, G__37917__a = new Array(arguments.length -  2);
while (G__37917__i < G__37917__a.length) {G__37917__a[G__37917__i] = arguments[G__37917__i + 2]; ++G__37917__i;}
  p__37843 = new cljs.core.IndexedSeq(G__37917__a,0,null);
} 
return G__37916__delegate.call(this,_,___$1,p__37843);};
G__37916.cljs$lang$maxFixedArity = 2;
G__37916.cljs$lang$applyTo = (function (arglist__37918){
var _ = cljs.core.first(arglist__37918);
arglist__37918 = cljs.core.next(arglist__37918);
var ___$1 = cljs.core.first(arglist__37918);
var p__37843 = cljs.core.rest(arglist__37918);
return G__37916__delegate(_,___$1,p__37843);
});
G__37916.cljs$core$IFn$_invoke$arity$variadic = G__37916__delegate;
return G__37916;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37919__delegate = function (_,___$1,p__37847){
var vec__37848 = p__37847;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37848,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__37919 = function (_,___$1,var_args){
var p__37847 = null;
if (arguments.length > 2) {
var G__37920__i = 0, G__37920__a = new Array(arguments.length -  2);
while (G__37920__i < G__37920__a.length) {G__37920__a[G__37920__i] = arguments[G__37920__i + 2]; ++G__37920__i;}
  p__37847 = new cljs.core.IndexedSeq(G__37920__a,0,null);
} 
return G__37919__delegate.call(this,_,___$1,p__37847);};
G__37919.cljs$lang$maxFixedArity = 2;
G__37919.cljs$lang$applyTo = (function (arglist__37921){
var _ = cljs.core.first(arglist__37921);
arglist__37921 = cljs.core.next(arglist__37921);
var ___$1 = cljs.core.first(arglist__37921);
var p__37847 = cljs.core.rest(arglist__37921);
return G__37919__delegate(_,___$1,p__37847);
});
G__37919.cljs$core$IFn$_invoke$arity$variadic = G__37919__delegate;
return G__37919;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37922__delegate = function (_,___$1,p__37851){
var vec__37852 = p__37851;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37922 = function (_,___$1,var_args){
var p__37851 = null;
if (arguments.length > 2) {
var G__37924__i = 0, G__37924__a = new Array(arguments.length -  2);
while (G__37924__i < G__37924__a.length) {G__37924__a[G__37924__i] = arguments[G__37924__i + 2]; ++G__37924__i;}
  p__37851 = new cljs.core.IndexedSeq(G__37924__a,0,null);
} 
return G__37922__delegate.call(this,_,___$1,p__37851);};
G__37922.cljs$lang$maxFixedArity = 2;
G__37922.cljs$lang$applyTo = (function (arglist__37925){
var _ = cljs.core.first(arglist__37925);
arglist__37925 = cljs.core.next(arglist__37925);
var ___$1 = cljs.core.first(arglist__37925);
var p__37851 = cljs.core.rest(arglist__37925);
return G__37922__delegate(_,___$1,p__37851);
});
G__37922.cljs$core$IFn$_invoke$arity$variadic = G__37922__delegate;
return G__37922;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37926__delegate = function (_,structure,p__37855){
var vec__37856 = p__37855;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37856,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37926 = function (_,structure,var_args){
var p__37855 = null;
if (arguments.length > 2) {
var G__37927__i = 0, G__37927__a = new Array(arguments.length -  2);
while (G__37927__i < G__37927__a.length) {G__37927__a[G__37927__i] = arguments[G__37927__i + 2]; ++G__37927__i;}
  p__37855 = new cljs.core.IndexedSeq(G__37927__a,0,null);
} 
return G__37926__delegate.call(this,_,structure,p__37855);};
G__37926.cljs$lang$maxFixedArity = 2;
G__37926.cljs$lang$applyTo = (function (arglist__37928){
var _ = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var structure = cljs.core.first(arglist__37928);
var p__37855 = cljs.core.rest(arglist__37928);
return G__37926__delegate(_,structure,p__37855);
});
G__37926.cljs$core$IFn$_invoke$arity$variadic = G__37926__delegate;
return G__37926;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37929__delegate = function (_,structure,p__37859){
var vec__37860 = p__37859;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37860,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37929 = function (_,structure,var_args){
var p__37859 = null;
if (arguments.length > 2) {
var G__37930__i = 0, G__37930__a = new Array(arguments.length -  2);
while (G__37930__i < G__37930__a.length) {G__37930__a[G__37930__i] = arguments[G__37930__i + 2]; ++G__37930__i;}
  p__37859 = new cljs.core.IndexedSeq(G__37930__a,0,null);
} 
return G__37929__delegate.call(this,_,structure,p__37859);};
G__37929.cljs$lang$maxFixedArity = 2;
G__37929.cljs$lang$applyTo = (function (arglist__37931){
var _ = cljs.core.first(arglist__37931);
arglist__37931 = cljs.core.next(arglist__37931);
var structure = cljs.core.first(arglist__37931);
var p__37859 = cljs.core.rest(arglist__37931);
return G__37929__delegate(_,structure,p__37859);
});
G__37929.cljs$core$IFn$_invoke$arity$variadic = G__37929__delegate;
return G__37929;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__37932__delegate = function (_,structure,p__37863){
var vec__37864 = p__37863;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37864,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37932 = function (_,structure,var_args){
var p__37863 = null;
if (arguments.length > 2) {
var G__37933__i = 0, G__37933__a = new Array(arguments.length -  2);
while (G__37933__i < G__37933__a.length) {G__37933__a[G__37933__i] = arguments[G__37933__i + 2]; ++G__37933__i;}
  p__37863 = new cljs.core.IndexedSeq(G__37933__a,0,null);
} 
return G__37932__delegate.call(this,_,structure,p__37863);};
G__37932.cljs$lang$maxFixedArity = 2;
G__37932.cljs$lang$applyTo = (function (arglist__37934){
var _ = cljs.core.first(arglist__37934);
arglist__37934 = cljs.core.next(arglist__37934);
var structure = cljs.core.first(arglist__37934);
var p__37863 = cljs.core.rest(arglist__37934);
return G__37932__delegate(_,structure,p__37863);
});
G__37932.cljs$core$IFn$_invoke$arity$variadic = G__37932__delegate;
return G__37932;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37935__delegate = function (_,structure,p__37867){
var vec__37868 = p__37867;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37868,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37871_37936 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37872_37937 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37873_37938 = true;
var _STAR_print_fn_STAR__temp_val__37874_37939 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37873_37938);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37874_37939);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37872_37937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37871_37936);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37935 = function (_,structure,var_args){
var p__37867 = null;
if (arguments.length > 2) {
var G__37940__i = 0, G__37940__a = new Array(arguments.length -  2);
while (G__37940__i < G__37940__a.length) {G__37940__a[G__37940__i] = arguments[G__37940__i + 2]; ++G__37940__i;}
  p__37867 = new cljs.core.IndexedSeq(G__37940__a,0,null);
} 
return G__37935__delegate.call(this,_,structure,p__37867);};
G__37935.cljs$lang$maxFixedArity = 2;
G__37935.cljs$lang$applyTo = (function (arglist__37941){
var _ = cljs.core.first(arglist__37941);
arglist__37941 = cljs.core.next(arglist__37941);
var structure = cljs.core.first(arglist__37941);
var p__37867 = cljs.core.rest(arglist__37941);
return G__37935__delegate(_,structure,p__37867);
});
G__37935.cljs$core$IFn$_invoke$arity$variadic = G__37935__delegate;
return G__37935;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37942__delegate = function (_,structure,p__37878){
var vec__37879 = p__37878;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37882_37943 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37883_37944 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37884_37945 = true;
var _STAR_print_fn_STAR__temp_val__37885_37946 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37884_37945);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37885_37946);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37883_37944);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37882_37943);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37942 = function (_,structure,var_args){
var p__37878 = null;
if (arguments.length > 2) {
var G__37947__i = 0, G__37947__a = new Array(arguments.length -  2);
while (G__37947__i < G__37947__a.length) {G__37947__a[G__37947__i] = arguments[G__37947__i + 2]; ++G__37947__i;}
  p__37878 = new cljs.core.IndexedSeq(G__37947__a,0,null);
} 
return G__37942__delegate.call(this,_,structure,p__37878);};
G__37942.cljs$lang$maxFixedArity = 2;
G__37942.cljs$lang$applyTo = (function (arglist__37948){
var _ = cljs.core.first(arglist__37948);
arglist__37948 = cljs.core.next(arglist__37948);
var structure = cljs.core.first(arglist__37948);
var p__37878 = cljs.core.rest(arglist__37948);
return G__37942__delegate(_,structure,p__37878);
});
G__37942.cljs$core$IFn$_invoke$arity$variadic = G__37942__delegate;
return G__37942;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__37949__delegate = function (_,structure,p__37886){
var vec__37887 = p__37886;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37887,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37890_37950 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37891_37951 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37892_37952 = true;
var _STAR_print_fn_STAR__temp_val__37893_37953 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37892_37952);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37893_37953);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37891_37951);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37890_37950);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37949 = function (_,structure,var_args){
var p__37886 = null;
if (arguments.length > 2) {
var G__37954__i = 0, G__37954__a = new Array(arguments.length -  2);
while (G__37954__i < G__37954__a.length) {G__37954__a[G__37954__i] = arguments[G__37954__i + 2]; ++G__37954__i;}
  p__37886 = new cljs.core.IndexedSeq(G__37954__a,0,null);
} 
return G__37949__delegate.call(this,_,structure,p__37886);};
G__37949.cljs$lang$maxFixedArity = 2;
G__37949.cljs$lang$applyTo = (function (arglist__37955){
var _ = cljs.core.first(arglist__37955);
arglist__37955 = cljs.core.next(arglist__37955);
var structure = cljs.core.first(arglist__37955);
var p__37886 = cljs.core.rest(arglist__37955);
return G__37949__delegate(_,structure,p__37886);
});
G__37949.cljs$core$IFn$_invoke$arity$variadic = G__37949__delegate;
return G__37949;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__37956__delegate = function (_,___$1,p__37894){
var vec__37895 = p__37894;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(0),null);
return "";
};
var G__37956 = function (_,___$1,var_args){
var p__37894 = null;
if (arguments.length > 2) {
var G__37957__i = 0, G__37957__a = new Array(arguments.length -  2);
while (G__37957__i < G__37957__a.length) {G__37957__a[G__37957__i] = arguments[G__37957__i + 2]; ++G__37957__i;}
  p__37894 = new cljs.core.IndexedSeq(G__37957__a,0,null);
} 
return G__37956__delegate.call(this,_,___$1,p__37894);};
G__37956.cljs$lang$maxFixedArity = 2;
G__37956.cljs$lang$applyTo = (function (arglist__37958){
var _ = cljs.core.first(arglist__37958);
arglist__37958 = cljs.core.next(arglist__37958);
var ___$1 = cljs.core.first(arglist__37958);
var p__37894 = cljs.core.rest(arglist__37958);
return G__37956__delegate(_,___$1,p__37894);
});
G__37956.cljs$core$IFn$_invoke$arity$variadic = G__37956__delegate;
return G__37956;
})()
);
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,view_state){
var map__37903 = view_state;
var map__37903__$1 = cljs.core.__destructure_map(map__37903);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var filtered_data = ((cljs.core.seq(filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__37904){
var vec__37905 = p__37904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(1),null);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k))),clojure.string.lower_case(v));
}),filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__37899_SHARP_,p2__37898_SHARP_){
return cljs.core.compare(p2__37898_SHARP_,p1__37899_SHARP_);
})),filtered_data):filtered_data);
var total_rows = cljs.core.count(sorted_data);
var start_idx = (function (){var x__5113__auto__ = (page * rows_per_page);
var y__5114__auto__ = total_rows;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var end_idx = (function (){var x__5113__auto__ = (start_idx + rows_per_page);
var y__5114__auto__ = total_rows;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var page_data = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(sorted_data),start_idx,end_idx);
var visible_columns = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(hidden_columns,all_columns);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),filtered_data,new cljs.core.Keyword(null,"page-data","page-data",1443840710),page_data,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528),total_rows,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745),start_idx,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788),end_idx,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660),visible_columns], null);
});

//# sourceMappingURL=bb_web_ds_tools.utils.dataset_processing.js.map
