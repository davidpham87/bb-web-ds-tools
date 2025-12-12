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
/**
 * Converts a string to snake_case.
 * Example: 'camelCase' -> 'camel_case'
 * 
 *   Args:
 *  s (string): The input string.
 * 
 *   Returns:
 *  string: The snake_case string.
 */
bb_web_ds_tools.utils.dataset_processing.to_snake_case = (function bb_web_ds_tools$utils$dataset_processing$to_snake_case(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(s,/([a-z])([A-Z])/,"$1_$2"),/[\s-]/,"_"));
});
/**
 * Converts a string to CamelCase.
 * Example: 'snake_case' -> 'SnakeCase'
 * 
 *   Args:
 *  s (string): The input string.
 * 
 *   Returns:
 *  string: The CamelCase string.
 */
bb_web_ds_tools.utils.dataset_processing.to_camel_case = (function bb_web_ds_tools$utils$dataset_processing$to_camel_case(s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/[\s-_]/," "),/ /);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,parts));
});
/**
 * Converts a string to kebab-case.
 * Example: 'camelCase' -> 'camel-case'
 * 
 *   Args:
 *  s (string): The input string.
 * 
 *   Returns:
 *  string: The kebab-case string.
 */
bb_web_ds_tools.utils.dataset_processing.to_kebab_case = (function bb_web_ds_tools$utils$dataset_processing$to_kebab_case(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(s,/([a-z])([A-Z])/,"$1-$2"),/[\s_]/,"-"));
});
/**
 * Normalizes a column name based on the provided configuration.
 * Can convert case (snake, camel, kebab) and output type (string, keyword, symbol).
 * 
 *   Args:
 *  col-name (string/keyword/symbol): The column name to normalize.
 *  opts (map): Configuration options.
 *    - :case (keyword): :snake_case, :CamelCase, :kebab-case.
 *    - :output (keyword): :string, :keyword, :symbol.
 * 
 *   Returns:
 *  The normalized column name.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__47042){
var map__47044 = p__47042;
var map__47044__$1 = cljs.core.__destructure_map(map__47044);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__47045 = cljs.core._EQ_;
var expr__47046 = case$;
if(cljs.core.truth_((pred__47045.cljs$core$IFn$_invoke$arity$2 ? pred__47045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__47046) : pred__47045.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__47046)))){
return bb_web_ds_tools.utils.dataset_processing.to_snake_case(s);
} else {
if(cljs.core.truth_((pred__47045.cljs$core$IFn$_invoke$arity$2 ? pred__47045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__47046) : pred__47045.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__47046)))){
return bb_web_ds_tools.utils.dataset_processing.to_camel_case(s);
} else {
if(cljs.core.truth_((pred__47045.cljs$core$IFn$_invoke$arity$2 ? pred__47045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__47046) : pred__47045.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__47046)))){
return bb_web_ds_tools.utils.dataset_processing.to_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__47050 = cljs.core._EQ_;
var expr__47051 = output;
if(cljs.core.truth_((pred__47050.cljs$core$IFn$_invoke$arity$2 ? pred__47050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__47051) : pred__47050.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__47051)))){
return s_case;
} else {
if(cljs.core.truth_((pred__47050.cljs$core$IFn$_invoke$arity$2 ? pred__47050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__47051) : pred__47050.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__47051)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__47050.cljs$core$IFn$_invoke$arity$2 ? pred__47050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__47051) : pred__47050.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__47051)))){
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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47057_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__47057_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47060 = cljs.core.get_global_hierarchy;
return (fexpr__47060.cljs$core$IFn$_invoke$arity$0 ? fexpr__47060.cljs$core$IFn$_invoke$arity$0() : fexpr__47060.call(null));
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
var vec__47061 = lines;
var seq__47062 = cljs.core.seq(vec__47061);
var first__47063 = cljs.core.first(seq__47062);
var seq__47062__$1 = cljs.core.next(seq__47062);
var header_line = first__47063;
var first__47063__$1 = cljs.core.first(seq__47062__$1);
var seq__47062__$2 = cljs.core.next(seq__47062__$1);
var ___$2 = first__47063__$1;
var data_lines = seq__47062__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__47066 = arguments.length;
switch (G__47066) {
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
}catch (e47068){if((e47068 instanceof Error)){
var e = e47068;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e47068;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__47070 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__47070 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__47070);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__47072 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__47072 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__47072);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__47073 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__47073 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__47073);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__47074 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__47074 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__47074);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47076_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__47076_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__47079 = arguments.length;
switch (G__47079) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47077_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__47077_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__47081 = arguments.length;
switch (G__47081) {
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
var G__47082 = structure;
var G__47082__$1 = (((G__47082 instanceof cljs.core.Keyword))?G__47082.fqn:null);
switch (G__47082__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47082__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47083 = cljs.core.get_global_hierarchy;
return (fexpr__47083.cljs$core$IFn$_invoke$arity$0 ? fexpr__47083.cljs$core$IFn$_invoke$arity$0() : fexpr__47083.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__47156__delegate = function (fmt,structure,p__47084){
var vec__47085 = p__47084;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47085,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__47156 = function (fmt,structure,var_args){
var p__47084 = null;
if (arguments.length > 2) {
var G__47157__i = 0, G__47157__a = new Array(arguments.length -  2);
while (G__47157__i < G__47157__a.length) {G__47157__a[G__47157__i] = arguments[G__47157__i + 2]; ++G__47157__i;}
  p__47084 = new cljs.core.IndexedSeq(G__47157__a,0,null);
} 
return G__47156__delegate.call(this,fmt,structure,p__47084);};
G__47156.cljs$lang$maxFixedArity = 2;
G__47156.cljs$lang$applyTo = (function (arglist__47158){
var fmt = cljs.core.first(arglist__47158);
arglist__47158 = cljs.core.next(arglist__47158);
var structure = cljs.core.first(arglist__47158);
var p__47084 = cljs.core.rest(arglist__47158);
return G__47156__delegate(fmt,structure,p__47084);
});
G__47156.cljs$core$IFn$_invoke$arity$variadic = G__47156__delegate;
return G__47156;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47159__delegate = function (_,___$1,p__47088){
var vec__47089 = p__47088;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47089,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__47159 = function (_,___$1,var_args){
var p__47088 = null;
if (arguments.length > 2) {
var G__47160__i = 0, G__47160__a = new Array(arguments.length -  2);
while (G__47160__i < G__47160__a.length) {G__47160__a[G__47160__i] = arguments[G__47160__i + 2]; ++G__47160__i;}
  p__47088 = new cljs.core.IndexedSeq(G__47160__a,0,null);
} 
return G__47159__delegate.call(this,_,___$1,p__47088);};
G__47159.cljs$lang$maxFixedArity = 2;
G__47159.cljs$lang$applyTo = (function (arglist__47161){
var _ = cljs.core.first(arglist__47161);
arglist__47161 = cljs.core.next(arglist__47161);
var ___$1 = cljs.core.first(arglist__47161);
var p__47088 = cljs.core.rest(arglist__47161);
return G__47159__delegate(_,___$1,p__47088);
});
G__47159.cljs$core$IFn$_invoke$arity$variadic = G__47159__delegate;
return G__47159;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47162__delegate = function (_,___$1,p__47092){
var vec__47093 = p__47092;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47093,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__47162 = function (_,___$1,var_args){
var p__47092 = null;
if (arguments.length > 2) {
var G__47163__i = 0, G__47163__a = new Array(arguments.length -  2);
while (G__47163__i < G__47163__a.length) {G__47163__a[G__47163__i] = arguments[G__47163__i + 2]; ++G__47163__i;}
  p__47092 = new cljs.core.IndexedSeq(G__47163__a,0,null);
} 
return G__47162__delegate.call(this,_,___$1,p__47092);};
G__47162.cljs$lang$maxFixedArity = 2;
G__47162.cljs$lang$applyTo = (function (arglist__47164){
var _ = cljs.core.first(arglist__47164);
arglist__47164 = cljs.core.next(arglist__47164);
var ___$1 = cljs.core.first(arglist__47164);
var p__47092 = cljs.core.rest(arglist__47164);
return G__47162__delegate(_,___$1,p__47092);
});
G__47162.cljs$core$IFn$_invoke$arity$variadic = G__47162__delegate;
return G__47162;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47165__delegate = function (_,___$1,p__47096){
var vec__47097 = p__47096;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47097,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__47165 = function (_,___$1,var_args){
var p__47096 = null;
if (arguments.length > 2) {
var G__47166__i = 0, G__47166__a = new Array(arguments.length -  2);
while (G__47166__i < G__47166__a.length) {G__47166__a[G__47166__i] = arguments[G__47166__i + 2]; ++G__47166__i;}
  p__47096 = new cljs.core.IndexedSeq(G__47166__a,0,null);
} 
return G__47165__delegate.call(this,_,___$1,p__47096);};
G__47165.cljs$lang$maxFixedArity = 2;
G__47165.cljs$lang$applyTo = (function (arglist__47167){
var _ = cljs.core.first(arglist__47167);
arglist__47167 = cljs.core.next(arglist__47167);
var ___$1 = cljs.core.first(arglist__47167);
var p__47096 = cljs.core.rest(arglist__47167);
return G__47165__delegate(_,___$1,p__47096);
});
G__47165.cljs$core$IFn$_invoke$arity$variadic = G__47165__delegate;
return G__47165;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47168__delegate = function (_,structure,p__47100){
var vec__47101 = p__47100;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47101,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__47168 = function (_,structure,var_args){
var p__47100 = null;
if (arguments.length > 2) {
var G__47169__i = 0, G__47169__a = new Array(arguments.length -  2);
while (G__47169__i < G__47169__a.length) {G__47169__a[G__47169__i] = arguments[G__47169__i + 2]; ++G__47169__i;}
  p__47100 = new cljs.core.IndexedSeq(G__47169__a,0,null);
} 
return G__47168__delegate.call(this,_,structure,p__47100);};
G__47168.cljs$lang$maxFixedArity = 2;
G__47168.cljs$lang$applyTo = (function (arglist__47170){
var _ = cljs.core.first(arglist__47170);
arglist__47170 = cljs.core.next(arglist__47170);
var structure = cljs.core.first(arglist__47170);
var p__47100 = cljs.core.rest(arglist__47170);
return G__47168__delegate(_,structure,p__47100);
});
G__47168.cljs$core$IFn$_invoke$arity$variadic = G__47168__delegate;
return G__47168;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__47171__delegate = function (_,structure,p__47104){
var vec__47105 = p__47104;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47105,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__47171 = function (_,structure,var_args){
var p__47104 = null;
if (arguments.length > 2) {
var G__47172__i = 0, G__47172__a = new Array(arguments.length -  2);
while (G__47172__i < G__47172__a.length) {G__47172__a[G__47172__i] = arguments[G__47172__i + 2]; ++G__47172__i;}
  p__47104 = new cljs.core.IndexedSeq(G__47172__a,0,null);
} 
return G__47171__delegate.call(this,_,structure,p__47104);};
G__47171.cljs$lang$maxFixedArity = 2;
G__47171.cljs$lang$applyTo = (function (arglist__47173){
var _ = cljs.core.first(arglist__47173);
arglist__47173 = cljs.core.next(arglist__47173);
var structure = cljs.core.first(arglist__47173);
var p__47104 = cljs.core.rest(arglist__47173);
return G__47171__delegate(_,structure,p__47104);
});
G__47171.cljs$core$IFn$_invoke$arity$variadic = G__47171__delegate;
return G__47171;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__47174__delegate = function (_,structure,p__47108){
var vec__47109 = p__47108;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47109,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__47174 = function (_,structure,var_args){
var p__47108 = null;
if (arguments.length > 2) {
var G__47175__i = 0, G__47175__a = new Array(arguments.length -  2);
while (G__47175__i < G__47175__a.length) {G__47175__a[G__47175__i] = arguments[G__47175__i + 2]; ++G__47175__i;}
  p__47108 = new cljs.core.IndexedSeq(G__47175__a,0,null);
} 
return G__47174__delegate.call(this,_,structure,p__47108);};
G__47174.cljs$lang$maxFixedArity = 2;
G__47174.cljs$lang$applyTo = (function (arglist__47176){
var _ = cljs.core.first(arglist__47176);
arglist__47176 = cljs.core.next(arglist__47176);
var structure = cljs.core.first(arglist__47176);
var p__47108 = cljs.core.rest(arglist__47176);
return G__47174__delegate(_,structure,p__47108);
});
G__47174.cljs$core$IFn$_invoke$arity$variadic = G__47174__delegate;
return G__47174;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47177__delegate = function (_,structure,p__47112){
var vec__47113 = p__47112;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47113,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47116_47178 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47117_47179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47118_47180 = true;
var _STAR_print_fn_STAR__temp_val__47119_47181 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47118_47180);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47119_47181);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47117_47179);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47116_47178);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__47177 = function (_,structure,var_args){
var p__47112 = null;
if (arguments.length > 2) {
var G__47182__i = 0, G__47182__a = new Array(arguments.length -  2);
while (G__47182__i < G__47182__a.length) {G__47182__a[G__47182__i] = arguments[G__47182__i + 2]; ++G__47182__i;}
  p__47112 = new cljs.core.IndexedSeq(G__47182__a,0,null);
} 
return G__47177__delegate.call(this,_,structure,p__47112);};
G__47177.cljs$lang$maxFixedArity = 2;
G__47177.cljs$lang$applyTo = (function (arglist__47183){
var _ = cljs.core.first(arglist__47183);
arglist__47183 = cljs.core.next(arglist__47183);
var structure = cljs.core.first(arglist__47183);
var p__47112 = cljs.core.rest(arglist__47183);
return G__47177__delegate(_,structure,p__47112);
});
G__47177.cljs$core$IFn$_invoke$arity$variadic = G__47177__delegate;
return G__47177;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__47184__delegate = function (_,structure,p__47120){
var vec__47121 = p__47120;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47124_47185 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47125_47186 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47126_47187 = true;
var _STAR_print_fn_STAR__temp_val__47127_47188 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47126_47187);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47127_47188);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47125_47186);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47124_47185);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__47184 = function (_,structure,var_args){
var p__47120 = null;
if (arguments.length > 2) {
var G__47189__i = 0, G__47189__a = new Array(arguments.length -  2);
while (G__47189__i < G__47189__a.length) {G__47189__a[G__47189__i] = arguments[G__47189__i + 2]; ++G__47189__i;}
  p__47120 = new cljs.core.IndexedSeq(G__47189__a,0,null);
} 
return G__47184__delegate.call(this,_,structure,p__47120);};
G__47184.cljs$lang$maxFixedArity = 2;
G__47184.cljs$lang$applyTo = (function (arglist__47190){
var _ = cljs.core.first(arglist__47190);
arglist__47190 = cljs.core.next(arglist__47190);
var structure = cljs.core.first(arglist__47190);
var p__47120 = cljs.core.rest(arglist__47190);
return G__47184__delegate(_,structure,p__47120);
});
G__47184.cljs$core$IFn$_invoke$arity$variadic = G__47184__delegate;
return G__47184;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__47191__delegate = function (_,structure,p__47128){
var vec__47129 = p__47128;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47132_47192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47133_47193 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47134_47194 = true;
var _STAR_print_fn_STAR__temp_val__47135_47195 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47134_47194);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47135_47195);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47133_47193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47132_47192);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__47191 = function (_,structure,var_args){
var p__47128 = null;
if (arguments.length > 2) {
var G__47196__i = 0, G__47196__a = new Array(arguments.length -  2);
while (G__47196__i < G__47196__a.length) {G__47196__a[G__47196__i] = arguments[G__47196__i + 2]; ++G__47196__i;}
  p__47128 = new cljs.core.IndexedSeq(G__47196__a,0,null);
} 
return G__47191__delegate.call(this,_,structure,p__47128);};
G__47191.cljs$lang$maxFixedArity = 2;
G__47191.cljs$lang$applyTo = (function (arglist__47197){
var _ = cljs.core.first(arglist__47197);
arglist__47197 = cljs.core.next(arglist__47197);
var structure = cljs.core.first(arglist__47197);
var p__47128 = cljs.core.rest(arglist__47197);
return G__47191__delegate(_,structure,p__47128);
});
G__47191.cljs$core$IFn$_invoke$arity$variadic = G__47191__delegate;
return G__47191;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__47198__delegate = function (_,___$1,p__47136){
var vec__47137 = p__47136;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47137,(0),null);
return "";
};
var G__47198 = function (_,___$1,var_args){
var p__47136 = null;
if (arguments.length > 2) {
var G__47199__i = 0, G__47199__a = new Array(arguments.length -  2);
while (G__47199__i < G__47199__a.length) {G__47199__a[G__47199__i] = arguments[G__47199__i + 2]; ++G__47199__i;}
  p__47136 = new cljs.core.IndexedSeq(G__47199__a,0,null);
} 
return G__47198__delegate.call(this,_,___$1,p__47136);};
G__47198.cljs$lang$maxFixedArity = 2;
G__47198.cljs$lang$applyTo = (function (arglist__47200){
var _ = cljs.core.first(arglist__47200);
arglist__47200 = cljs.core.next(arglist__47200);
var ___$1 = cljs.core.first(arglist__47200);
var p__47136 = cljs.core.rest(arglist__47200);
return G__47198__delegate(_,___$1,p__47136);
});
G__47198.cljs$core$IFn$_invoke$arity$variadic = G__47198__delegate;
return G__47198;
})()
);
bb_web_ds_tools.utils.dataset_processing.filter_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)],[cljs.core.first,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.count,cljs.core.last,cljs.core.inc,cljs.core.not,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.dec,cljs.core._LT_,cljs.core.nth,cljs.core.subs]),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"includes?","includes?",-2049283381,null),clojure.string.includes_QMARK_,new cljs.core.Symbol(null,"lower-case","lower-case",1428172944,null),clojure.string.lower_case,new cljs.core.Symbol(null,"upper-case","upper-case",1427515769,null),clojure.string.upper_case,new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),clojure.string.starts_with_QMARK_,new cljs.core.Symbol(null,"ends-with?","ends-with?",-346570208,null),clojure.string.ends_with_QMARK_], null)], null)], null));
/**
 * Compiles a filter string into a predicate function using SCI.
 * If the string is empty, returns nil.
 * If compilation fails, returns a string equality predicate.
 * 
 *   Args:
 *  expression-str (string): The filter expression (e.g. '(> % 10)').
 * 
 *   Returns:
 *  fn: A predicate function accepting a value and returning boolean.
 */
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
}catch (e47140){var _ = e47140;
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
var map__47143 = view_state;
var map__47143__$1 = cljs.core.__destructure_map(map__47143);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
return cljs.core.every_QMARK_((function (p__47144){
var vec__47145 = p__47144;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(1),null);
try{var G__47149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47149) : f.call(null,G__47149));
}catch (e47148){var _ = e47148;
return false;
}}),compiled_filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__47142_SHARP_,p2__47141_SHARP_){
return cljs.core.compare(p2__47141_SHARP_,p1__47142_SHARP_);
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
