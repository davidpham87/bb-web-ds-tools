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
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
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
/**
 * Normalizes columnar data (map of arrays) into a sequence of row maps.
 * Handles uneven column lengths by padding with nil.
 * 
 *   Args:
 *  data (map): A map where keys are column names and values are sequences of column values.
 * 
 *   Returns:
 *  vector: A vector of maps, where each map represents a row.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_columnar = (function bb_web_ds_tools$utils$dataset_processing$normalize_columnar(data){
var cols = cljs.core.keys(data);
var vals_seq = cljs.core.vals(data);
var cnt = ((cljs.core.seq(vals_seq))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vals_seq)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37846_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__37846_SHARP_),i);
}),cols));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
});
/**
 * Normalizes row-array data (vector of vectors, first is header) into a sequence of row maps.
 * 
 *   Args:
 *  data (seq): A sequence of vectors. The first vector is expected to be the header row.
 * 
 *   Returns:
 *  vector: A vector of maps, where each map represents a row.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$normalize_row_arrays(data){
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(data));
var rows = cljs.core.rest(data);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.zipmap(header,row);
}),rows);
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.parse_dataset !== 'undefined')){
} else {
/**
 * Parses dataset text into a sequence of maps (row-maps) based on format and structure.
 * 
 *   Args:
 *  format (keyword): The input format (:csv, :tsv, :json, :edn, :markdown).
 *  structure (keyword): The input structure (:columnar, :row-maps, :row-arrays).
 *  text (string): The raw text content to parse.
 * 
 *   Returns:
 *  vector: A vector of maps representing the dataset rows.
 */
bb_web_ds_tools.utils.dataset_processing.parse_dataset = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37847 = cljs.core.get_global_hierarchy;
return (fexpr__37847.cljs$core$IFn$_invoke$arity$0 ? fexpr__37847.cljs$core$IFn$_invoke$arity$0() : fexpr__37847.call(null));
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
var vec__37848 = lines;
var seq__37849 = cljs.core.seq(vec__37848);
var first__37850 = cljs.core.first(seq__37849);
var seq__37849__$1 = cljs.core.next(seq__37849);
var header_line = first__37850;
var first__37850__$1 = cljs.core.first(seq__37849__$1);
var seq__37849__$2 = cljs.core.next(seq__37849__$1);
var ___$2 = first__37850__$1;
var data_lines = seq__37849__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__37852 = arguments.length;
switch (G__37852) {
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
}catch (e37853){if((e37853 instanceof Error)){
var e = e37853;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e37853;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37854 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37854 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37854);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37855 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37855 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37855);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37856 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37856 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37856);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37857 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37857 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37857);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37858_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37858_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__37861 = arguments.length;
switch (G__37861) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37859_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37859_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__37863 = arguments.length;
switch (G__37863) {
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
var G__37864 = structure;
var G__37864__$1 = (((G__37864 instanceof cljs.core.Keyword))?G__37864.fqn:null);
switch (G__37864__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37864__$1)].join('')));

}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.example_data !== 'undefined')){
} else {
/**
 * Generates example data text for a given format and structure.
 * 
 *   Args:
 *  fmt (keyword): The desired output format (:csv, :tsv, :json, :edn, :markdown).
 *  structure (keyword): The structure of the data (:columnar, :row-maps, :row-arrays).
 *  conf (map, optional): Configuration map (indentation, delimiters, etc.).
 * 
 *   Returns:
 *  string: The formatted example data string.
 */
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37865 = cljs.core.get_global_hierarchy;
return (fexpr__37865.cljs$core$IFn$_invoke$arity$0 ? fexpr__37865.cljs$core$IFn$_invoke$arity$0() : fexpr__37865.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__37959__delegate = function (fmt,structure,p__37866){
var vec__37867 = p__37866;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37867,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__37959 = function (fmt,structure,var_args){
var p__37866 = null;
if (arguments.length > 2) {
var G__37960__i = 0, G__37960__a = new Array(arguments.length -  2);
while (G__37960__i < G__37960__a.length) {G__37960__a[G__37960__i] = arguments[G__37960__i + 2]; ++G__37960__i;}
  p__37866 = new cljs.core.IndexedSeq(G__37960__a,0,null);
} 
return G__37959__delegate.call(this,fmt,structure,p__37866);};
G__37959.cljs$lang$maxFixedArity = 2;
G__37959.cljs$lang$applyTo = (function (arglist__37961){
var fmt = cljs.core.first(arglist__37961);
arglist__37961 = cljs.core.next(arglist__37961);
var structure = cljs.core.first(arglist__37961);
var p__37866 = cljs.core.rest(arglist__37961);
return G__37959__delegate(fmt,structure,p__37866);
});
G__37959.cljs$core$IFn$_invoke$arity$variadic = G__37959__delegate;
return G__37959;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37962__delegate = function (_,___$1,p__37870){
var vec__37871 = p__37870;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__37962 = function (_,___$1,var_args){
var p__37870 = null;
if (arguments.length > 2) {
var G__37963__i = 0, G__37963__a = new Array(arguments.length -  2);
while (G__37963__i < G__37963__a.length) {G__37963__a[G__37963__i] = arguments[G__37963__i + 2]; ++G__37963__i;}
  p__37870 = new cljs.core.IndexedSeq(G__37963__a,0,null);
} 
return G__37962__delegate.call(this,_,___$1,p__37870);};
G__37962.cljs$lang$maxFixedArity = 2;
G__37962.cljs$lang$applyTo = (function (arglist__37964){
var _ = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var ___$1 = cljs.core.first(arglist__37964);
var p__37870 = cljs.core.rest(arglist__37964);
return G__37962__delegate(_,___$1,p__37870);
});
G__37962.cljs$core$IFn$_invoke$arity$variadic = G__37962__delegate;
return G__37962;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37965__delegate = function (_,___$1,p__37874){
var vec__37875 = p__37874;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37875,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__37965 = function (_,___$1,var_args){
var p__37874 = null;
if (arguments.length > 2) {
var G__37966__i = 0, G__37966__a = new Array(arguments.length -  2);
while (G__37966__i < G__37966__a.length) {G__37966__a[G__37966__i] = arguments[G__37966__i + 2]; ++G__37966__i;}
  p__37874 = new cljs.core.IndexedSeq(G__37966__a,0,null);
} 
return G__37965__delegate.call(this,_,___$1,p__37874);};
G__37965.cljs$lang$maxFixedArity = 2;
G__37965.cljs$lang$applyTo = (function (arglist__37967){
var _ = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var ___$1 = cljs.core.first(arglist__37967);
var p__37874 = cljs.core.rest(arglist__37967);
return G__37965__delegate(_,___$1,p__37874);
});
G__37965.cljs$core$IFn$_invoke$arity$variadic = G__37965__delegate;
return G__37965;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37968__delegate = function (_,___$1,p__37878){
var vec__37879 = p__37878;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37879,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37968 = function (_,___$1,var_args){
var p__37878 = null;
if (arguments.length > 2) {
var G__37969__i = 0, G__37969__a = new Array(arguments.length -  2);
while (G__37969__i < G__37969__a.length) {G__37969__a[G__37969__i] = arguments[G__37969__i + 2]; ++G__37969__i;}
  p__37878 = new cljs.core.IndexedSeq(G__37969__a,0,null);
} 
return G__37968__delegate.call(this,_,___$1,p__37878);};
G__37968.cljs$lang$maxFixedArity = 2;
G__37968.cljs$lang$applyTo = (function (arglist__37970){
var _ = cljs.core.first(arglist__37970);
arglist__37970 = cljs.core.next(arglist__37970);
var ___$1 = cljs.core.first(arglist__37970);
var p__37878 = cljs.core.rest(arglist__37970);
return G__37968__delegate(_,___$1,p__37878);
});
G__37968.cljs$core$IFn$_invoke$arity$variadic = G__37968__delegate;
return G__37968;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37971__delegate = function (_,structure,p__37882){
var vec__37883 = p__37882;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37883,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37971 = function (_,structure,var_args){
var p__37882 = null;
if (arguments.length > 2) {
var G__37972__i = 0, G__37972__a = new Array(arguments.length -  2);
while (G__37972__i < G__37972__a.length) {G__37972__a[G__37972__i] = arguments[G__37972__i + 2]; ++G__37972__i;}
  p__37882 = new cljs.core.IndexedSeq(G__37972__a,0,null);
} 
return G__37971__delegate.call(this,_,structure,p__37882);};
G__37971.cljs$lang$maxFixedArity = 2;
G__37971.cljs$lang$applyTo = (function (arglist__37973){
var _ = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var structure = cljs.core.first(arglist__37973);
var p__37882 = cljs.core.rest(arglist__37973);
return G__37971__delegate(_,structure,p__37882);
});
G__37971.cljs$core$IFn$_invoke$arity$variadic = G__37971__delegate;
return G__37971;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37974__delegate = function (_,structure,p__37886){
var vec__37887 = p__37886;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37887,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37974 = function (_,structure,var_args){
var p__37886 = null;
if (arguments.length > 2) {
var G__37975__i = 0, G__37975__a = new Array(arguments.length -  2);
while (G__37975__i < G__37975__a.length) {G__37975__a[G__37975__i] = arguments[G__37975__i + 2]; ++G__37975__i;}
  p__37886 = new cljs.core.IndexedSeq(G__37975__a,0,null);
} 
return G__37974__delegate.call(this,_,structure,p__37886);};
G__37974.cljs$lang$maxFixedArity = 2;
G__37974.cljs$lang$applyTo = (function (arglist__37976){
var _ = cljs.core.first(arglist__37976);
arglist__37976 = cljs.core.next(arglist__37976);
var structure = cljs.core.first(arglist__37976);
var p__37886 = cljs.core.rest(arglist__37976);
return G__37974__delegate(_,structure,p__37886);
});
G__37974.cljs$core$IFn$_invoke$arity$variadic = G__37974__delegate;
return G__37974;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__37987__delegate = function (_,structure,p__37890){
var vec__37891 = p__37890;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37987 = function (_,structure,var_args){
var p__37890 = null;
if (arguments.length > 2) {
var G__37988__i = 0, G__37988__a = new Array(arguments.length -  2);
while (G__37988__i < G__37988__a.length) {G__37988__a[G__37988__i] = arguments[G__37988__i + 2]; ++G__37988__i;}
  p__37890 = new cljs.core.IndexedSeq(G__37988__a,0,null);
} 
return G__37987__delegate.call(this,_,structure,p__37890);};
G__37987.cljs$lang$maxFixedArity = 2;
G__37987.cljs$lang$applyTo = (function (arglist__37989){
var _ = cljs.core.first(arglist__37989);
arglist__37989 = cljs.core.next(arglist__37989);
var structure = cljs.core.first(arglist__37989);
var p__37890 = cljs.core.rest(arglist__37989);
return G__37987__delegate(_,structure,p__37890);
});
G__37987.cljs$core$IFn$_invoke$arity$variadic = G__37987__delegate;
return G__37987;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37990__delegate = function (_,structure,p__37894){
var vec__37895 = p__37894;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37898_37991 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37899_37992 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37900_37993 = true;
var _STAR_print_fn_STAR__temp_val__37901_37994 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37900_37993);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37901_37994);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37899_37992);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37898_37991);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37990 = function (_,structure,var_args){
var p__37894 = null;
if (arguments.length > 2) {
var G__37995__i = 0, G__37995__a = new Array(arguments.length -  2);
while (G__37995__i < G__37995__a.length) {G__37995__a[G__37995__i] = arguments[G__37995__i + 2]; ++G__37995__i;}
  p__37894 = new cljs.core.IndexedSeq(G__37995__a,0,null);
} 
return G__37990__delegate.call(this,_,structure,p__37894);};
G__37990.cljs$lang$maxFixedArity = 2;
G__37990.cljs$lang$applyTo = (function (arglist__37996){
var _ = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var structure = cljs.core.first(arglist__37996);
var p__37894 = cljs.core.rest(arglist__37996);
return G__37990__delegate(_,structure,p__37894);
});
G__37990.cljs$core$IFn$_invoke$arity$variadic = G__37990__delegate;
return G__37990;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37997__delegate = function (_,structure,p__37902){
var vec__37903 = p__37902;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37906_37998 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37907_37999 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37908_38000 = true;
var _STAR_print_fn_STAR__temp_val__37909_38001 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37908_38000);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37909_38001);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37907_37999);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37906_37998);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37997 = function (_,structure,var_args){
var p__37902 = null;
if (arguments.length > 2) {
var G__38002__i = 0, G__38002__a = new Array(arguments.length -  2);
while (G__38002__i < G__38002__a.length) {G__38002__a[G__38002__i] = arguments[G__38002__i + 2]; ++G__38002__i;}
  p__37902 = new cljs.core.IndexedSeq(G__38002__a,0,null);
} 
return G__37997__delegate.call(this,_,structure,p__37902);};
G__37997.cljs$lang$maxFixedArity = 2;
G__37997.cljs$lang$applyTo = (function (arglist__38003){
var _ = cljs.core.first(arglist__38003);
arglist__38003 = cljs.core.next(arglist__38003);
var structure = cljs.core.first(arglist__38003);
var p__37902 = cljs.core.rest(arglist__38003);
return G__37997__delegate(_,structure,p__37902);
});
G__37997.cljs$core$IFn$_invoke$arity$variadic = G__37997__delegate;
return G__37997;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__38004__delegate = function (_,structure,p__37910){
var vec__37911 = p__37910;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37911,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37914_38005 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37915_38006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37916_38007 = true;
var _STAR_print_fn_STAR__temp_val__37917_38008 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37916_38007);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37917_38008);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37915_38006);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37914_38005);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__38004 = function (_,structure,var_args){
var p__37910 = null;
if (arguments.length > 2) {
var G__38009__i = 0, G__38009__a = new Array(arguments.length -  2);
while (G__38009__i < G__38009__a.length) {G__38009__a[G__38009__i] = arguments[G__38009__i + 2]; ++G__38009__i;}
  p__37910 = new cljs.core.IndexedSeq(G__38009__a,0,null);
} 
return G__38004__delegate.call(this,_,structure,p__37910);};
G__38004.cljs$lang$maxFixedArity = 2;
G__38004.cljs$lang$applyTo = (function (arglist__38010){
var _ = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var structure = cljs.core.first(arglist__38010);
var p__37910 = cljs.core.rest(arglist__38010);
return G__38004__delegate(_,structure,p__37910);
});
G__38004.cljs$core$IFn$_invoke$arity$variadic = G__38004__delegate;
return G__38004;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__38011__delegate = function (_,___$1,p__37918){
var vec__37919 = p__37918;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37919,(0),null);
return "";
};
var G__38011 = function (_,___$1,var_args){
var p__37918 = null;
if (arguments.length > 2) {
var G__38012__i = 0, G__38012__a = new Array(arguments.length -  2);
while (G__38012__i < G__38012__a.length) {G__38012__a[G__38012__i] = arguments[G__38012__i + 2]; ++G__38012__i;}
  p__37918 = new cljs.core.IndexedSeq(G__38012__a,0,null);
} 
return G__38011__delegate.call(this,_,___$1,p__37918);};
G__38011.cljs$lang$maxFixedArity = 2;
G__38011.cljs$lang$applyTo = (function (arglist__38013){
var _ = cljs.core.first(arglist__38013);
arglist__38013 = cljs.core.next(arglist__38013);
var ___$1 = cljs.core.first(arglist__38013);
var p__37918 = cljs.core.rest(arglist__38013);
return G__38011__delegate(_,___$1,p__37918);
});
G__38011.cljs$core$IFn$_invoke$arity$variadic = G__38011__delegate;
return G__38011;
})()
);
/**
 * Processes dataset data for display in a table: filtering, sorting, and pagination.
 * 
 *   Args:
 *  data (seq): A sequence of row maps.
 *  view-state (map): The current view state containing:
 *    - :page (int): Current page index (0-based).
 *    - :rows-per-page (int): Number of rows per page.
 *    - :filters (map): Map of col-key -> filter-string.
 *    - :hidden-columns (set): Set of hidden column keys.
 *    - :sort-col (keyword): Column to sort by.
 *    - :sort-dir (keyword): Sort direction (:asc or :desc).
 *    - :columns (seq, optional): List of column keys (defaults to keys of first row).
 * 
 *   Returns:
 *  map: A map containing:
 *    - :filtered-data (seq): Data after filtering.
 *    - :page-data (vector): Data for the current page.
 *    - :total-rows (int): Total count after filtering.
 *    - :start-idx (int): Start index of display.
 *    - :end-idx (int): End index of display.
 *    - :visible-columns (seq): List of visible column keys.
 */
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,view_state){
var map__37924 = view_state;
var map__37924__$1 = cljs.core.__destructure_map(map__37924);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var filtered_data = ((cljs.core.seq(filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__37930){
var vec__37931 = p__37930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(1),null);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k))),clojure.string.lower_case(v));
}),filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__37923_SHARP_,p2__37922_SHARP_){
return cljs.core.compare(p2__37922_SHARP_,p1__37923_SHARP_);
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
