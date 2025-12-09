var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$papaparse.js");
require("./sci.core.js");
require("./clojure.string.js");
require("./clojure.edn.js");
require("./cljs.pprint.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.utils.dataset_processing.js");

goog.provide('bb_web_ds_tools.utils.dataset_processing');
bb_web_ds_tools.utils.dataset_processing.to_snake_case = (function bb_web_ds_tools$utils$dataset_processing$to_snake_case(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(s,/([a-z])([A-Z])/,"$1_$2"),/[\s-]/,"_"));
});
bb_web_ds_tools.utils.dataset_processing.to_camel_case = (function bb_web_ds_tools$utils$dataset_processing$to_camel_case(s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/[\s-_]/," "),/ /);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,parts));
});
bb_web_ds_tools.utils.dataset_processing.to_kebab_case = (function bb_web_ds_tools$utils$dataset_processing$to_kebab_case(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(s,/([a-z])([A-Z])/,"$1-$2"),/[\s_]/,"-"));
});
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__37338){
var map__37339 = p__37338;
var map__37339__$1 = cljs.core.__destructure_map(map__37339);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__37340 = cljs.core._EQ_;
var expr__37341 = case$;
if(cljs.core.truth_((pred__37340.cljs$core$IFn$_invoke$arity$2 ? pred__37340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__37341) : pred__37340.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__37341)))){
return bb_web_ds_tools.utils.dataset_processing.to_snake_case(s);
} else {
if(cljs.core.truth_((pred__37340.cljs$core$IFn$_invoke$arity$2 ? pred__37340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__37341) : pred__37340.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__37341)))){
return bb_web_ds_tools.utils.dataset_processing.to_camel_case(s);
} else {
if(cljs.core.truth_((pred__37340.cljs$core$IFn$_invoke$arity$2 ? pred__37340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__37341) : pred__37340.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__37341)))){
return bb_web_ds_tools.utils.dataset_processing.to_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__37343 = cljs.core._EQ_;
var expr__37344 = output;
if(cljs.core.truth_((pred__37343.cljs$core$IFn$_invoke$arity$2 ? pred__37343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__37344) : pred__37343.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__37344)))){
return s_case;
} else {
if(cljs.core.truth_((pred__37343.cljs$core$IFn$_invoke$arity$2 ? pred__37343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__37344) : pred__37343.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__37344)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__37343.cljs$core$IFn$_invoke$arity$2 ? pred__37343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__37344) : pred__37343.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__37344)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
return s_case;
}
}
}
})();
return final_val;
});
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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37346_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__37346_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37347 = cljs.core.get_global_hierarchy;
return (fexpr__37347.cljs$core$IFn$_invoke$arity$0 ? fexpr__37347.cljs$core$IFn$_invoke$arity$0() : fexpr__37347.call(null));
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
var parts = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\|/)));
var n = cljs.core.count(parts);
var start = (((((n > (0))) && (cljs.core.empty_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0))))))?(1):(0));
var end = (((((n > (0))) && (cljs.core.empty_QMARK_(cljs.core.peek(parts)))))?(n - (1)):n);
if((start < end)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(parts,start,end);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
var vec__37348 = lines;
var seq__37349 = cljs.core.seq(vec__37348);
var first__37350 = cljs.core.first(seq__37349);
var seq__37349__$1 = cljs.core.next(seq__37349);
var header_line = first__37350;
var first__37350__$1 = cljs.core.first(seq__37349__$1);
var seq__37349__$2 = cljs.core.next(seq__37349__$1);
var ___$2 = first__37350__$1;
var data_lines = seq__37349__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__37352 = arguments.length;
switch (G__37352) {
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
}catch (e37353){if((e37353 instanceof Error)){
var e = e37353;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e37353;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37354 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37354 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37354);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37355 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__37355 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37355);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__37356 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37356 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__37356);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__37362 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__37362 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__37362);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37364_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37364_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__37371 = arguments.length;
switch (G__37371) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37367_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__37367_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__37375 = arguments.length;
switch (G__37375) {
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
var G__37382 = structure;
var G__37382__$1 = (((G__37382 instanceof cljs.core.Keyword))?G__37382.fqn:null);
switch (G__37382__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37382__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37387 = cljs.core.get_global_hierarchy;
return (fexpr__37387.cljs$core$IFn$_invoke$arity$0 ? fexpr__37387.cljs$core$IFn$_invoke$arity$0() : fexpr__37387.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__37591__delegate = function (fmt,structure,p__37388){
var vec__37389 = p__37388;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37389,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__37591 = function (fmt,structure,var_args){
var p__37388 = null;
if (arguments.length > 2) {
var G__37593__i = 0, G__37593__a = new Array(arguments.length -  2);
while (G__37593__i < G__37593__a.length) {G__37593__a[G__37593__i] = arguments[G__37593__i + 2]; ++G__37593__i;}
  p__37388 = new cljs.core.IndexedSeq(G__37593__a,0,null);
} 
return G__37591__delegate.call(this,fmt,structure,p__37388);};
G__37591.cljs$lang$maxFixedArity = 2;
G__37591.cljs$lang$applyTo = (function (arglist__37594){
var fmt = cljs.core.first(arglist__37594);
arglist__37594 = cljs.core.next(arglist__37594);
var structure = cljs.core.first(arglist__37594);
var p__37388 = cljs.core.rest(arglist__37594);
return G__37591__delegate(fmt,structure,p__37388);
});
G__37591.cljs$core$IFn$_invoke$arity$variadic = G__37591__delegate;
return G__37591;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37596__delegate = function (_,___$1,p__37393){
var vec__37394 = p__37393;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__37596 = function (_,___$1,var_args){
var p__37393 = null;
if (arguments.length > 2) {
var G__37598__i = 0, G__37598__a = new Array(arguments.length -  2);
while (G__37598__i < G__37598__a.length) {G__37598__a[G__37598__i] = arguments[G__37598__i + 2]; ++G__37598__i;}
  p__37393 = new cljs.core.IndexedSeq(G__37598__a,0,null);
} 
return G__37596__delegate.call(this,_,___$1,p__37393);};
G__37596.cljs$lang$maxFixedArity = 2;
G__37596.cljs$lang$applyTo = (function (arglist__37599){
var _ = cljs.core.first(arglist__37599);
arglist__37599 = cljs.core.next(arglist__37599);
var ___$1 = cljs.core.first(arglist__37599);
var p__37393 = cljs.core.rest(arglist__37599);
return G__37596__delegate(_,___$1,p__37393);
});
G__37596.cljs$core$IFn$_invoke$arity$variadic = G__37596__delegate;
return G__37596;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37600__delegate = function (_,___$1,p__37401){
var vec__37402 = p__37401;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37402,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__37600 = function (_,___$1,var_args){
var p__37401 = null;
if (arguments.length > 2) {
var G__37601__i = 0, G__37601__a = new Array(arguments.length -  2);
while (G__37601__i < G__37601__a.length) {G__37601__a[G__37601__i] = arguments[G__37601__i + 2]; ++G__37601__i;}
  p__37401 = new cljs.core.IndexedSeq(G__37601__a,0,null);
} 
return G__37600__delegate.call(this,_,___$1,p__37401);};
G__37600.cljs$lang$maxFixedArity = 2;
G__37600.cljs$lang$applyTo = (function (arglist__37602){
var _ = cljs.core.first(arglist__37602);
arglist__37602 = cljs.core.next(arglist__37602);
var ___$1 = cljs.core.first(arglist__37602);
var p__37401 = cljs.core.rest(arglist__37602);
return G__37600__delegate(_,___$1,p__37401);
});
G__37600.cljs$core$IFn$_invoke$arity$variadic = G__37600__delegate;
return G__37600;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37603__delegate = function (_,___$1,p__37406){
var vec__37407 = p__37406;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37407,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37603 = function (_,___$1,var_args){
var p__37406 = null;
if (arguments.length > 2) {
var G__37604__i = 0, G__37604__a = new Array(arguments.length -  2);
while (G__37604__i < G__37604__a.length) {G__37604__a[G__37604__i] = arguments[G__37604__i + 2]; ++G__37604__i;}
  p__37406 = new cljs.core.IndexedSeq(G__37604__a,0,null);
} 
return G__37603__delegate.call(this,_,___$1,p__37406);};
G__37603.cljs$lang$maxFixedArity = 2;
G__37603.cljs$lang$applyTo = (function (arglist__37605){
var _ = cljs.core.first(arglist__37605);
arglist__37605 = cljs.core.next(arglist__37605);
var ___$1 = cljs.core.first(arglist__37605);
var p__37406 = cljs.core.rest(arglist__37605);
return G__37603__delegate(_,___$1,p__37406);
});
G__37603.cljs$core$IFn$_invoke$arity$variadic = G__37603__delegate;
return G__37603;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37606__delegate = function (_,structure,p__37410){
var vec__37411 = p__37410;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37606 = function (_,structure,var_args){
var p__37410 = null;
if (arguments.length > 2) {
var G__37607__i = 0, G__37607__a = new Array(arguments.length -  2);
while (G__37607__i < G__37607__a.length) {G__37607__a[G__37607__i] = arguments[G__37607__i + 2]; ++G__37607__i;}
  p__37410 = new cljs.core.IndexedSeq(G__37607__a,0,null);
} 
return G__37606__delegate.call(this,_,structure,p__37410);};
G__37606.cljs$lang$maxFixedArity = 2;
G__37606.cljs$lang$applyTo = (function (arglist__37608){
var _ = cljs.core.first(arglist__37608);
arglist__37608 = cljs.core.next(arglist__37608);
var structure = cljs.core.first(arglist__37608);
var p__37410 = cljs.core.rest(arglist__37608);
return G__37606__delegate(_,structure,p__37410);
});
G__37606.cljs$core$IFn$_invoke$arity$variadic = G__37606__delegate;
return G__37606;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37609__delegate = function (_,structure,p__37415){
var vec__37416 = p__37415;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37416,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37609 = function (_,structure,var_args){
var p__37415 = null;
if (arguments.length > 2) {
var G__37610__i = 0, G__37610__a = new Array(arguments.length -  2);
while (G__37610__i < G__37610__a.length) {G__37610__a[G__37610__i] = arguments[G__37610__i + 2]; ++G__37610__i;}
  p__37415 = new cljs.core.IndexedSeq(G__37610__a,0,null);
} 
return G__37609__delegate.call(this,_,structure,p__37415);};
G__37609.cljs$lang$maxFixedArity = 2;
G__37609.cljs$lang$applyTo = (function (arglist__37611){
var _ = cljs.core.first(arglist__37611);
arglist__37611 = cljs.core.next(arglist__37611);
var structure = cljs.core.first(arglist__37611);
var p__37415 = cljs.core.rest(arglist__37611);
return G__37609__delegate(_,structure,p__37415);
});
G__37609.cljs$core$IFn$_invoke$arity$variadic = G__37609__delegate;
return G__37609;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__37613__delegate = function (_,structure,p__37419){
var vec__37421 = p__37419;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37421,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__37613 = function (_,structure,var_args){
var p__37419 = null;
if (arguments.length > 2) {
var G__37614__i = 0, G__37614__a = new Array(arguments.length -  2);
while (G__37614__i < G__37614__a.length) {G__37614__a[G__37614__i] = arguments[G__37614__i + 2]; ++G__37614__i;}
  p__37419 = new cljs.core.IndexedSeq(G__37614__a,0,null);
} 
return G__37613__delegate.call(this,_,structure,p__37419);};
G__37613.cljs$lang$maxFixedArity = 2;
G__37613.cljs$lang$applyTo = (function (arglist__37615){
var _ = cljs.core.first(arglist__37615);
arglist__37615 = cljs.core.next(arglist__37615);
var structure = cljs.core.first(arglist__37615);
var p__37419 = cljs.core.rest(arglist__37615);
return G__37613__delegate(_,structure,p__37419);
});
G__37613.cljs$core$IFn$_invoke$arity$variadic = G__37613__delegate;
return G__37613;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__37616__delegate = function (_,structure,p__37425){
var vec__37428 = p__37425;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37428,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37432_37617 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37433_37618 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37434_37619 = true;
var _STAR_print_fn_STAR__temp_val__37435_37620 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37434_37619);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37435_37620);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37433_37618);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37432_37617);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37616 = function (_,structure,var_args){
var p__37425 = null;
if (arguments.length > 2) {
var G__37622__i = 0, G__37622__a = new Array(arguments.length -  2);
while (G__37622__i < G__37622__a.length) {G__37622__a[G__37622__i] = arguments[G__37622__i + 2]; ++G__37622__i;}
  p__37425 = new cljs.core.IndexedSeq(G__37622__a,0,null);
} 
return G__37616__delegate.call(this,_,structure,p__37425);};
G__37616.cljs$lang$maxFixedArity = 2;
G__37616.cljs$lang$applyTo = (function (arglist__37623){
var _ = cljs.core.first(arglist__37623);
arglist__37623 = cljs.core.next(arglist__37623);
var structure = cljs.core.first(arglist__37623);
var p__37425 = cljs.core.rest(arglist__37623);
return G__37616__delegate(_,structure,p__37425);
});
G__37616.cljs$core$IFn$_invoke$arity$variadic = G__37616__delegate;
return G__37616;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__37624__delegate = function (_,structure,p__37447){
var vec__37448 = p__37447;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37448,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37451_37626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37452_37627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37453_37628 = true;
var _STAR_print_fn_STAR__temp_val__37454_37629 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37453_37628);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37454_37629);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37452_37627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37451_37626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37624 = function (_,structure,var_args){
var p__37447 = null;
if (arguments.length > 2) {
var G__37631__i = 0, G__37631__a = new Array(arguments.length -  2);
while (G__37631__i < G__37631__a.length) {G__37631__a[G__37631__i] = arguments[G__37631__i + 2]; ++G__37631__i;}
  p__37447 = new cljs.core.IndexedSeq(G__37631__a,0,null);
} 
return G__37624__delegate.call(this,_,structure,p__37447);};
G__37624.cljs$lang$maxFixedArity = 2;
G__37624.cljs$lang$applyTo = (function (arglist__37632){
var _ = cljs.core.first(arglist__37632);
arglist__37632 = cljs.core.next(arglist__37632);
var structure = cljs.core.first(arglist__37632);
var p__37447 = cljs.core.rest(arglist__37632);
return G__37624__delegate(_,structure,p__37447);
});
G__37624.cljs$core$IFn$_invoke$arity$variadic = G__37624__delegate;
return G__37624;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__37633__delegate = function (_,structure,p__37459){
var vec__37460 = p__37459;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37464_37634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37465_37635 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37466_37636 = true;
var _STAR_print_fn_STAR__temp_val__37467_37637 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37466_37636);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37467_37637);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37465_37635);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37464_37634);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__37633 = function (_,structure,var_args){
var p__37459 = null;
if (arguments.length > 2) {
var G__37639__i = 0, G__37639__a = new Array(arguments.length -  2);
while (G__37639__i < G__37639__a.length) {G__37639__a[G__37639__i] = arguments[G__37639__i + 2]; ++G__37639__i;}
  p__37459 = new cljs.core.IndexedSeq(G__37639__a,0,null);
} 
return G__37633__delegate.call(this,_,structure,p__37459);};
G__37633.cljs$lang$maxFixedArity = 2;
G__37633.cljs$lang$applyTo = (function (arglist__37640){
var _ = cljs.core.first(arglist__37640);
arglist__37640 = cljs.core.next(arglist__37640);
var structure = cljs.core.first(arglist__37640);
var p__37459 = cljs.core.rest(arglist__37640);
return G__37633__delegate(_,structure,p__37459);
});
G__37633.cljs$core$IFn$_invoke$arity$variadic = G__37633__delegate;
return G__37633;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__37641__delegate = function (_,___$1,p__37475){
var vec__37482 = p__37475;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37482,(0),null);
return "";
};
var G__37641 = function (_,___$1,var_args){
var p__37475 = null;
if (arguments.length > 2) {
var G__37642__i = 0, G__37642__a = new Array(arguments.length -  2);
while (G__37642__i < G__37642__a.length) {G__37642__a[G__37642__i] = arguments[G__37642__i + 2]; ++G__37642__i;}
  p__37475 = new cljs.core.IndexedSeq(G__37642__a,0,null);
} 
return G__37641__delegate.call(this,_,___$1,p__37475);};
G__37641.cljs$lang$maxFixedArity = 2;
G__37641.cljs$lang$applyTo = (function (arglist__37643){
var _ = cljs.core.first(arglist__37643);
arglist__37643 = cljs.core.next(arglist__37643);
var ___$1 = cljs.core.first(arglist__37643);
var p__37475 = cljs.core.rest(arglist__37643);
return G__37641__delegate(_,___$1,p__37475);
});
G__37641.cljs$core$IFn$_invoke$arity$variadic = G__37641__delegate;
return G__37641;
})()
);
bb_web_ds_tools.utils.dataset_processing.filter_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)],[cljs.core.first,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.count,cljs.core.last,cljs.core.inc,cljs.core.not,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.dec,cljs.core._LT_,cljs.core.nth,cljs.core.subs]),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"includes?","includes?",-2049283381,null),clojure.string.includes_QMARK_,new cljs.core.Symbol(null,"lower-case","lower-case",1428172944,null),clojure.string.lower_case,new cljs.core.Symbol(null,"upper-case","upper-case",1427515769,null),clojure.string.upper_case,new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),clojure.string.starts_with_QMARK_,new cljs.core.Symbol(null,"ends-with?","ends-with?",-346570208,null),clojure.string.ends_with_QMARK_], null)], null)], null));
bb_web_ds_tools.utils.dataset_processing.compile_filter = (function bb_web_ds_tools$utils$dataset_processing$compile_filter(expression_str){
try{if(clojure.string.blank_QMARK_(expression_str)){
return null;
} else {
var res = sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(expression_str,bb_web_ds_tools.utils.dataset_processing.filter_ctx);
if(cljs.core.fn_QMARK_(res)){
return res;
} else {
return (function (val){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,res);
});
}
}
}catch (e37504){var _ = e37504;
return (function (val){
var val_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
var input_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(expression_str);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_str,input_str);
});
}});
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
var map__37524 = view_state;
var map__37524__$1 = cljs.core.__destructure_map(map__37524);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var compiled_filters = ((cljs.core.seq(filters))?cljs.core.reduce_kv((function (m,k,v){
if(clojure.string.blank_QMARK_(v)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,bb_web_ds_tools.utils.dataset_processing.compile_filter(v));
}
}),cljs.core.PersistentArrayMap.EMPTY,filters):null);
var filtered_data = ((cljs.core.seq(compiled_filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__37543){
var vec__37544 = p__37543;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(1),null);
try{var G__37548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37548) : f.call(null,G__37548));
}catch (e37547){var _ = e37547;
return false;
}}),compiled_filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__37521_SHARP_,p2__37520_SHARP_){
return cljs.core.compare(p2__37520_SHARP_,p1__37521_SHARP_);
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
