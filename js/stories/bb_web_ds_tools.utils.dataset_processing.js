var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$papaparse.js");
require("./sci.core.js");
require("./clojure.string.js");
require("./clojure.edn.js");
require("./cljs.pprint.js");
require("./camel_snake_kebab.core.js");
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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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
 * Normalizes a column name based on the provided configuration.
 * 
 *   Args:
 *  col-name (keyword/string): The original column name.
 *  config (map): Normalization config with keys :case and :output.
 * 
 *   Returns:
 *  keyword/string/symbol: The normalized column name.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__47459){
var map__47460 = p__47459;
var map__47460__$1 = cljs.core.__destructure_map(map__47460);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47460__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47460__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__47461 = cljs.core._EQ_;
var expr__47462 = case$;
if(cljs.core.truth_((pred__47461.cljs$core$IFn$_invoke$arity$2 ? pred__47461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__47462) : pred__47461.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__47462)))){
return camel_snake_kebab.core.__GT_snake_case(s);
} else {
if(cljs.core.truth_((pred__47461.cljs$core$IFn$_invoke$arity$2 ? pred__47461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__47462) : pred__47461.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__47462)))){
return camel_snake_kebab.core.__GT_PascalCase(s);
} else {
if(cljs.core.truth_((pred__47461.cljs$core$IFn$_invoke$arity$2 ? pred__47461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__47462) : pred__47461.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__47462)))){
return camel_snake_kebab.core.__GT_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__47464 = cljs.core._EQ_;
var expr__47465 = output;
if(cljs.core.truth_((pred__47464.cljs$core$IFn$_invoke$arity$2 ? pred__47464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__47465) : pred__47464.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__47465)))){
return s_case;
} else {
if(cljs.core.truth_((pred__47464.cljs$core$IFn$_invoke$arity$2 ? pred__47464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__47465) : pred__47464.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__47465)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__47464.cljs$core$IFn$_invoke$arity$2 ? pred__47464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__47465) : pred__47464.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__47465)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
return s_case;
}
}
}
})();
return final_val;
});
/**
 * Default configuration for dataset parsing and formatting.
 */
bb_web_ds_tools.utils.dataset_processing.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660)," | ",new cljs.core.Keyword(null,"row-start","row-start",-1075739176),"| ",new cljs.core.Keyword(null,"row-end","row-end",231209112)," |",new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542),"---"], null),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"JSON Parse Error"], null)], null);
/**
 * Normalizes columnar data (map of arrays) into a sequence of row maps.
 * 
 *   Args:
 *  data (map): Data in columnar format e.g. {:col1 [v1 v2] :col2 [v3 v4]}.
 * 
 *   Returns:
 *  vector: A vector of maps e.g. [{:col1 v1 :col2 v3} ...].
 */
bb_web_ds_tools.utils.dataset_processing.normalize_columnar = (function bb_web_ds_tools$utils$dataset_processing$normalize_columnar(data){
var cols = cljs.core.keys(data);
var vals_seq = cljs.core.vals(data);
var cnt = ((cljs.core.seq(vals_seq))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vals_seq)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47467_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__47467_SHARP_),i);
}),cols));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
});
/**
 * Normalizes row-array data (vector of vectors, first is header) into a sequence of row maps.
 * 
 *   Args:
 *  data (vector): Data in row-array format e.g. [[col1 col2] [v1 v2]].
 * 
 *   Returns:
 *  vector: A vector of maps.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$normalize_row_arrays(data){
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(data));
var rows = cljs.core.rest(data);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.zipmap(header,row);
}),rows);
});
/**
 * Parses a JSON string into Clojure data.
 * 
 *   Args:
 *  text (string): The JSON string.
 *  conf (map, optional): Configuration map.
 * 
 *   Returns:
 *  any: Parsed Clojure data or nil on error.
 */
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__47488 = arguments.length;
switch (G__47488) {
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
}catch (e47504){if((e47504 instanceof Error)){
var e = e47504;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e47504;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

/**
 * Parses structured text (JSON/EDN) and normalizes it based on the target structure.
 * 
 *   Args:
 *  parse-fn (fn): Function to parse text into data (e.g., parse-json, edn/read-string).
 *  structure (keyword): Target structure (:columnar, :row-maps, :row-arrays).
 *  text (string): The text to parse.
 * 
 *   Returns:
 *  any: The normalized data.
 */
bb_web_ds_tools.utils.dataset_processing.parse_structured = (function bb_web_ds_tools$utils$dataset_processing$parse_structured(parse_fn,structure,text){
var data = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(text) : parse_fn.call(null,text));
var G__47505 = structure;
var G__47505__$1 = (((G__47505 instanceof cljs.core.Keyword))?G__47505.fqn:null);
switch (G__47505__$1) {
case "columnar":
var G__47506 = data;
if((G__47506 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__47506);
}

break;
case "row-maps":
return data;

break;
case "row-arrays":
var G__47507 = data;
if((G__47507 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__47507);
}

break;
default:
return data;

}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.parse_dataset !== 'undefined')){
} else {
/**
 * Parses raw text into a dataset based on format and structure.
 * 
 *   Args:
 *  format (keyword): The format of the input text (:csv, :tsv, :json, :edn, :markdown, :text).
 *  structure (keyword): The desired structure of the output data (:columnar, :row-maps, :row-arrays, :lines, :raw).
 *  text (string): The raw input text.
 * 
 *   Returns:
 *  any: The parsed dataset.
 */
bb_web_ds_tools.utils.dataset_processing.parse_dataset = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47508 = cljs.core.get_global_hierarchy;
return (fexpr__47508.cljs$core$IFn$_invoke$arity$0 ? fexpr__47508.cljs$core$IFn$_invoke$arity$0() : fexpr__47508.call(null));
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
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_)),clojure.string.split_lines(text));
var parse_row = (function (line){
var parts = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\|/));
var n = cljs.core.count(parts);
var start = (((((n > (0))) && (cljs.core.empty_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0))))))?(1):(0));
var end = (((((n > (0))) && (cljs.core.empty_QMARK_(cljs.core.peek(parts)))))?(n - (1)):n);
if((start < end)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(parts,start,end);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
var vec__47532 = lines;
var seq__47533 = cljs.core.seq(vec__47532);
var first__47534 = cljs.core.first(seq__47533);
var seq__47533__$1 = cljs.core.next(seq__47533);
var header_line = first__47534;
var first__47534__$1 = cljs.core.first(seq__47533__$1);
var seq__47533__$2 = cljs.core.next(seq__47533__$1);
var ___$2 = first__47534__$1;
var data_lines = seq__47533__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(bb_web_ds_tools.utils.dataset_processing.parse_json,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(bb_web_ds_tools.utils.dataset_processing.parse_json,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(bb_web_ds_tools.utils.dataset_processing.parse_json,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(clojure.edn.read_string,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(clojure.edn.read_string,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(clojure.edn.read_string,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(function (_,___$1,text){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),line], null);
}),clojure.string.split_lines(text));
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"raw","raw",1604651272)], null),(function (_,___$1,text){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return cljs.core.PersistentVector.EMPTY;
}));
/**
 * Example dataset rows used for generating sample data.
 */
bb_web_ds_tools.utils.dataset_processing.example_rows = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"score","score",-1963588780),12.5,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-01"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"score","score",-1963588780),10.2,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-02"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"score","score",-1963588780),8.7,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-03"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"score","score",-1963588780),15.0,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-04"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"score","score",-1963588780),9.9,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-05"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"score","score",-1963588780),11.1,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-06"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"score","score",-1963588780),13.4,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-07"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"score","score",-1963588780),7.8,new cljs.core.Keyword(null,"category","category",-593092832),"b",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-08"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"score","score",-1963588780),14.2,new cljs.core.Keyword(null,"category","category",-593092832),"c",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-09"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"score","score",-1963588780),10.0,new cljs.core.Keyword(null,"category","category",-593092832),"a",new cljs.core.Keyword(null,"date","date",-1463434462),"2023-01-10"], null)], null);
/**
 * Converts a sequence of row maps to columnar format.
 */
bb_web_ds_tools.utils.dataset_processing.to_columnar = (function bb_web_ds_tools$utils$dataset_processing$to_columnar(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(k,rows));
}),cljs.core.PersistentArrayMap.EMPTY,ks);
});
/**
 * Converts a sequence of row maps to row-array format (with header).
 */
bb_web_ds_tools.utils.dataset_processing.to_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$to_row_arrays(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.vec(cljs.core.cons(cljs.core.vec(ks),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47564_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__47564_SHARP_);
}),ks);
}),rows)));
});
/**
 * Formats data as a Markdown table.
 */
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__47567 = arguments.length;
switch (G__47567) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47565_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__47565_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

/**
 * Converts data to a JSON string with indentation.
 */
bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__47569 = arguments.length;
switch (G__47569) {
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

/**
 * Returns the example data in the requested structure.
 */
bb_web_ds_tools.utils.dataset_processing.get_structured_data = (function bb_web_ds_tools$utils$dataset_processing$get_structured_data(structure){
var G__47571 = structure;
var G__47571__$1 = (((G__47571 instanceof cljs.core.Keyword))?G__47571.fqn:null);
switch (G__47571__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47571__$1)].join('')));

}
});
/**
 * Generates example data for structured formats (JSON/EDN).
 * 
 *   Args:
 *  format-fn (fn): Function to format data as string.
 *  structure (keyword): Target structure.
 *  conf (map, optional): Configuration map (passed to format-fn if supported).
 * 
 *   Returns:
 *  string: The formatted example data.
 */
bb_web_ds_tools.utils.dataset_processing.example_structured = (function bb_web_ds_tools$utils$dataset_processing$example_structured(format_fn,structure,conf){
var data = bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure);
return (format_fn.cljs$core$IFn$_invoke$arity$2 ? format_fn.cljs$core$IFn$_invoke$arity$2(data,conf) : format_fn.call(null,data,conf));
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.example_data !== 'undefined')){
} else {
/**
 * Generates example data string for a given format and structure.
 * 
 *   Args:
 *  fmt (keyword): Output format (:csv, :tsv, :json, :edn, :markdown, :text).
 *  structure (keyword): Data structure (:columnar, :row-maps, :row-arrays, :lines, :raw).
 *  conf (map, optional): Configuration map.
 * 
 *   Returns:
 *  string: The example data string.
 */
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47578 = cljs.core.get_global_hierarchy;
return (fexpr__47578.cljs$core$IFn$_invoke$arity$0 ? fexpr__47578.cljs$core$IFn$_invoke$arity$0() : fexpr__47578.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__47672__delegate = function (fmt,structure,p__47579){
var vec__47580 = p__47579;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47580,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__47672 = function (fmt,structure,var_args){
var p__47579 = null;
if (arguments.length > 2) {
var G__47673__i = 0, G__47673__a = new Array(arguments.length -  2);
while (G__47673__i < G__47673__a.length) {G__47673__a[G__47673__i] = arguments[G__47673__i + 2]; ++G__47673__i;}
  p__47579 = new cljs.core.IndexedSeq(G__47673__a,0,null);
} 
return G__47672__delegate.call(this,fmt,structure,p__47579);};
G__47672.cljs$lang$maxFixedArity = 2;
G__47672.cljs$lang$applyTo = (function (arglist__47674){
var fmt = cljs.core.first(arglist__47674);
arglist__47674 = cljs.core.next(arglist__47674);
var structure = cljs.core.first(arglist__47674);
var p__47579 = cljs.core.rest(arglist__47674);
return G__47672__delegate(fmt,structure,p__47579);
});
G__47672.cljs$core$IFn$_invoke$arity$variadic = G__47672__delegate;
return G__47672;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47675__delegate = function (_,___$1,p__47583){
var vec__47584 = p__47583;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47584,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__47675 = function (_,___$1,var_args){
var p__47583 = null;
if (arguments.length > 2) {
var G__47676__i = 0, G__47676__a = new Array(arguments.length -  2);
while (G__47676__i < G__47676__a.length) {G__47676__a[G__47676__i] = arguments[G__47676__i + 2]; ++G__47676__i;}
  p__47583 = new cljs.core.IndexedSeq(G__47676__a,0,null);
} 
return G__47675__delegate.call(this,_,___$1,p__47583);};
G__47675.cljs$lang$maxFixedArity = 2;
G__47675.cljs$lang$applyTo = (function (arglist__47677){
var _ = cljs.core.first(arglist__47677);
arglist__47677 = cljs.core.next(arglist__47677);
var ___$1 = cljs.core.first(arglist__47677);
var p__47583 = cljs.core.rest(arglist__47677);
return G__47675__delegate(_,___$1,p__47583);
});
G__47675.cljs$core$IFn$_invoke$arity$variadic = G__47675__delegate;
return G__47675;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47678__delegate = function (_,___$1,p__47587){
var vec__47588 = p__47587;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47588,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__47678 = function (_,___$1,var_args){
var p__47587 = null;
if (arguments.length > 2) {
var G__47679__i = 0, G__47679__a = new Array(arguments.length -  2);
while (G__47679__i < G__47679__a.length) {G__47679__a[G__47679__i] = arguments[G__47679__i + 2]; ++G__47679__i;}
  p__47587 = new cljs.core.IndexedSeq(G__47679__a,0,null);
} 
return G__47678__delegate.call(this,_,___$1,p__47587);};
G__47678.cljs$lang$maxFixedArity = 2;
G__47678.cljs$lang$applyTo = (function (arglist__47680){
var _ = cljs.core.first(arglist__47680);
arglist__47680 = cljs.core.next(arglist__47680);
var ___$1 = cljs.core.first(arglist__47680);
var p__47587 = cljs.core.rest(arglist__47680);
return G__47678__delegate(_,___$1,p__47587);
});
G__47678.cljs$core$IFn$_invoke$arity$variadic = G__47678__delegate;
return G__47678;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47681__delegate = function (_,___$1,p__47591){
var vec__47592 = p__47591;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__47681 = function (_,___$1,var_args){
var p__47591 = null;
if (arguments.length > 2) {
var G__47682__i = 0, G__47682__a = new Array(arguments.length -  2);
while (G__47682__i < G__47682__a.length) {G__47682__a[G__47682__i] = arguments[G__47682__i + 2]; ++G__47682__i;}
  p__47591 = new cljs.core.IndexedSeq(G__47682__a,0,null);
} 
return G__47681__delegate.call(this,_,___$1,p__47591);};
G__47681.cljs$lang$maxFixedArity = 2;
G__47681.cljs$lang$applyTo = (function (arglist__47683){
var _ = cljs.core.first(arglist__47683);
arglist__47683 = cljs.core.next(arglist__47683);
var ___$1 = cljs.core.first(arglist__47683);
var p__47591 = cljs.core.rest(arglist__47683);
return G__47681__delegate(_,___$1,p__47591);
});
G__47681.cljs$core$IFn$_invoke$arity$variadic = G__47681__delegate;
return G__47681;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47684__delegate = function (_,structure,p__47595){
var vec__47596 = p__47595;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47596,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__47684 = function (_,structure,var_args){
var p__47595 = null;
if (arguments.length > 2) {
var G__47685__i = 0, G__47685__a = new Array(arguments.length -  2);
while (G__47685__i < G__47685__a.length) {G__47685__a[G__47685__i] = arguments[G__47685__i + 2]; ++G__47685__i;}
  p__47595 = new cljs.core.IndexedSeq(G__47685__a,0,null);
} 
return G__47684__delegate.call(this,_,structure,p__47595);};
G__47684.cljs$lang$maxFixedArity = 2;
G__47684.cljs$lang$applyTo = (function (arglist__47686){
var _ = cljs.core.first(arglist__47686);
arglist__47686 = cljs.core.next(arglist__47686);
var structure = cljs.core.first(arglist__47686);
var p__47595 = cljs.core.rest(arglist__47686);
return G__47684__delegate(_,structure,p__47595);
});
G__47684.cljs$core$IFn$_invoke$arity$variadic = G__47684__delegate;
return G__47684;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__47687__delegate = function (_,structure,p__47599){
var vec__47600 = p__47599;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47600,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__47687 = function (_,structure,var_args){
var p__47599 = null;
if (arguments.length > 2) {
var G__47688__i = 0, G__47688__a = new Array(arguments.length -  2);
while (G__47688__i < G__47688__a.length) {G__47688__a[G__47688__i] = arguments[G__47688__i + 2]; ++G__47688__i;}
  p__47599 = new cljs.core.IndexedSeq(G__47688__a,0,null);
} 
return G__47687__delegate.call(this,_,structure,p__47599);};
G__47687.cljs$lang$maxFixedArity = 2;
G__47687.cljs$lang$applyTo = (function (arglist__47689){
var _ = cljs.core.first(arglist__47689);
arglist__47689 = cljs.core.next(arglist__47689);
var structure = cljs.core.first(arglist__47689);
var p__47599 = cljs.core.rest(arglist__47689);
return G__47687__delegate(_,structure,p__47599);
});
G__47687.cljs$core$IFn$_invoke$arity$variadic = G__47687__delegate;
return G__47687;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__47690__delegate = function (_,structure,p__47605){
var vec__47606 = p__47605;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47606,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__47690 = function (_,structure,var_args){
var p__47605 = null;
if (arguments.length > 2) {
var G__47691__i = 0, G__47691__a = new Array(arguments.length -  2);
while (G__47691__i < G__47691__a.length) {G__47691__a[G__47691__i] = arguments[G__47691__i + 2]; ++G__47691__i;}
  p__47605 = new cljs.core.IndexedSeq(G__47691__a,0,null);
} 
return G__47690__delegate.call(this,_,structure,p__47605);};
G__47690.cljs$lang$maxFixedArity = 2;
G__47690.cljs$lang$applyTo = (function (arglist__47692){
var _ = cljs.core.first(arglist__47692);
arglist__47692 = cljs.core.next(arglist__47692);
var structure = cljs.core.first(arglist__47692);
var p__47605 = cljs.core.rest(arglist__47692);
return G__47690__delegate(_,structure,p__47605);
});
G__47690.cljs$core$IFn$_invoke$arity$variadic = G__47690__delegate;
return G__47690;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__47693__delegate = function (_,structure,p__47609){
var vec__47610 = p__47609;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47610,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47613_47694 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47614_47695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47615_47696 = true;
var _STAR_print_fn_STAR__temp_val__47616_47697 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47615_47696);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47616_47697);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47614_47695);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47613_47694);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__47693 = function (_,structure,var_args){
var p__47609 = null;
if (arguments.length > 2) {
var G__47698__i = 0, G__47698__a = new Array(arguments.length -  2);
while (G__47698__i < G__47698__a.length) {G__47698__a[G__47698__i] = arguments[G__47698__i + 2]; ++G__47698__i;}
  p__47609 = new cljs.core.IndexedSeq(G__47698__a,0,null);
} 
return G__47693__delegate.call(this,_,structure,p__47609);};
G__47693.cljs$lang$maxFixedArity = 2;
G__47693.cljs$lang$applyTo = (function (arglist__47699){
var _ = cljs.core.first(arglist__47699);
arglist__47699 = cljs.core.next(arglist__47699);
var structure = cljs.core.first(arglist__47699);
var p__47609 = cljs.core.rest(arglist__47699);
return G__47693__delegate(_,structure,p__47609);
});
G__47693.cljs$core$IFn$_invoke$arity$variadic = G__47693__delegate;
return G__47693;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__47700__delegate = function (_,structure,p__47617){
var vec__47618 = p__47617;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47618,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47621_47701 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47622_47702 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47623_47703 = true;
var _STAR_print_fn_STAR__temp_val__47624_47704 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47623_47703);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47624_47704);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47622_47702);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47621_47701);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__47700 = function (_,structure,var_args){
var p__47617 = null;
if (arguments.length > 2) {
var G__47705__i = 0, G__47705__a = new Array(arguments.length -  2);
while (G__47705__i < G__47705__a.length) {G__47705__a[G__47705__i] = arguments[G__47705__i + 2]; ++G__47705__i;}
  p__47617 = new cljs.core.IndexedSeq(G__47705__a,0,null);
} 
return G__47700__delegate.call(this,_,structure,p__47617);};
G__47700.cljs$lang$maxFixedArity = 2;
G__47700.cljs$lang$applyTo = (function (arglist__47706){
var _ = cljs.core.first(arglist__47706);
arglist__47706 = cljs.core.next(arglist__47706);
var structure = cljs.core.first(arglist__47706);
var p__47617 = cljs.core.rest(arglist__47706);
return G__47700__delegate(_,structure,p__47617);
});
G__47700.cljs$core$IFn$_invoke$arity$variadic = G__47700__delegate;
return G__47700;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__47707__delegate = function (_,structure,p__47625){
var vec__47626 = p__47625;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47626,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47629_47708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47630_47709 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47631_47710 = true;
var _STAR_print_fn_STAR__temp_val__47632_47711 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47631_47710);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47632_47711);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47630_47709);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47629_47708);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__47707 = function (_,structure,var_args){
var p__47625 = null;
if (arguments.length > 2) {
var G__47712__i = 0, G__47712__a = new Array(arguments.length -  2);
while (G__47712__i < G__47712__a.length) {G__47712__a[G__47712__i] = arguments[G__47712__i + 2]; ++G__47712__i;}
  p__47625 = new cljs.core.IndexedSeq(G__47712__a,0,null);
} 
return G__47707__delegate.call(this,_,structure,p__47625);};
G__47707.cljs$lang$maxFixedArity = 2;
G__47707.cljs$lang$applyTo = (function (arglist__47713){
var _ = cljs.core.first(arglist__47713);
arglist__47713 = cljs.core.next(arglist__47713);
var structure = cljs.core.first(arglist__47713);
var p__47625 = cljs.core.rest(arglist__47713);
return G__47707__delegate(_,structure,p__47625);
});
G__47707.cljs$core$IFn$_invoke$arity$variadic = G__47707__delegate;
return G__47707;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(function() { 
var G__47714__delegate = function (_,___$1,p__47635){
var vec__47636 = p__47635;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(0),null);
return "Line 1: Hello World\nLine 2: This is a text file\nLine 3: 123-456-7890";
};
var G__47714 = function (_,___$1,var_args){
var p__47635 = null;
if (arguments.length > 2) {
var G__47719__i = 0, G__47719__a = new Array(arguments.length -  2);
while (G__47719__i < G__47719__a.length) {G__47719__a[G__47719__i] = arguments[G__47719__i + 2]; ++G__47719__i;}
  p__47635 = new cljs.core.IndexedSeq(G__47719__a,0,null);
} 
return G__47714__delegate.call(this,_,___$1,p__47635);};
G__47714.cljs$lang$maxFixedArity = 2;
G__47714.cljs$lang$applyTo = (function (arglist__47720){
var _ = cljs.core.first(arglist__47720);
arglist__47720 = cljs.core.next(arglist__47720);
var ___$1 = cljs.core.first(arglist__47720);
var p__47635 = cljs.core.rest(arglist__47720);
return G__47714__delegate(_,___$1,p__47635);
});
G__47714.cljs$core$IFn$_invoke$arity$variadic = G__47714__delegate;
return G__47714;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"raw","raw",1604651272)], null),(function() { 
var G__47721__delegate = function (_,___$1,p__47639){
var vec__47640 = p__47639;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(0),null);
return "This is a raw text block.\nIt contains newlines and special characters.\n\nUse it to test regex matching on the whole content.";
};
var G__47721 = function (_,___$1,var_args){
var p__47639 = null;
if (arguments.length > 2) {
var G__47722__i = 0, G__47722__a = new Array(arguments.length -  2);
while (G__47722__i < G__47722__a.length) {G__47722__a[G__47722__i] = arguments[G__47722__i + 2]; ++G__47722__i;}
  p__47639 = new cljs.core.IndexedSeq(G__47722__a,0,null);
} 
return G__47721__delegate.call(this,_,___$1,p__47639);};
G__47721.cljs$lang$maxFixedArity = 2;
G__47721.cljs$lang$applyTo = (function (arglist__47723){
var _ = cljs.core.first(arglist__47723);
arglist__47723 = cljs.core.next(arglist__47723);
var ___$1 = cljs.core.first(arglist__47723);
var p__47639 = cljs.core.rest(arglist__47723);
return G__47721__delegate(_,___$1,p__47639);
});
G__47721.cljs$core$IFn$_invoke$arity$variadic = G__47721__delegate;
return G__47721;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__47724__delegate = function (_,___$1,p__47643){
var vec__47644 = p__47643;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47644,(0),null);
return "";
};
var G__47724 = function (_,___$1,var_args){
var p__47643 = null;
if (arguments.length > 2) {
var G__47725__i = 0, G__47725__a = new Array(arguments.length -  2);
while (G__47725__i < G__47725__a.length) {G__47725__a[G__47725__i] = arguments[G__47725__i + 2]; ++G__47725__i;}
  p__47643 = new cljs.core.IndexedSeq(G__47725__a,0,null);
} 
return G__47724__delegate.call(this,_,___$1,p__47643);};
G__47724.cljs$lang$maxFixedArity = 2;
G__47724.cljs$lang$applyTo = (function (arglist__47726){
var _ = cljs.core.first(arglist__47726);
arglist__47726 = cljs.core.next(arglist__47726);
var ___$1 = cljs.core.first(arglist__47726);
var p__47643 = cljs.core.rest(arglist__47726);
return G__47724__delegate(_,___$1,p__47643);
});
G__47724.cljs$core$IFn$_invoke$arity$variadic = G__47724__delegate;
return G__47724;
})()
);
bb_web_ds_tools.utils.dataset_processing.filter_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)],[cljs.core.first,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.count,cljs.core.last,cljs.core.inc,cljs.core.not,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.dec,cljs.core._LT_,cljs.core.nth,cljs.core.subs]),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"includes?","includes?",-2049283381,null),clojure.string.includes_QMARK_,new cljs.core.Symbol(null,"lower-case","lower-case",1428172944,null),clojure.string.lower_case,new cljs.core.Symbol(null,"upper-case","upper-case",1427515769,null),clojure.string.upper_case,new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),clojure.string.starts_with_QMARK_,new cljs.core.Symbol(null,"ends-with?","ends-with?",-346570208,null),clojure.string.ends_with_QMARK_], null)], null)], null));
/**
 * Compiles a filter string into a predicate function using SCI.
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
}catch (e47647){var _ = e47647;
return (function (val){
var val_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
var input_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(expression_str);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_str,input_str);
});
}});
/**
 * Compiles a map of raw filter strings into a map of predicate functions.
 */
bb_web_ds_tools.utils.dataset_processing.compile_filters = (function bb_web_ds_tools$utils$dataset_processing$compile_filters(filters){
return cljs.core.reduce_kv((function (m,k,v){
if(clojure.string.blank_QMARK_(v)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,bb_web_ds_tools.utils.dataset_processing.compile_filter(v));
}
}),cljs.core.PersistentArrayMap.EMPTY,filters);
});
/**
 * Filters the data based on the compiled filters map.
 */
bb_web_ds_tools.utils.dataset_processing.apply_filters = (function bb_web_ds_tools$utils$dataset_processing$apply_filters(data,compiled_filters){
if(cljs.core.seq(compiled_filters)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__47650){
var vec__47651 = p__47650;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(1),null);
try{var G__47655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47655) : f.call(null,G__47655));
}catch (e47654){var _ = e47654;
return false;
}}),compiled_filters);
}),data);
} else {
return data;
}
});
/**
 * Sorts the data based on sort column and direction.
 */
bb_web_ds_tools.utils.dataset_processing.apply_sorting = (function bb_web_ds_tools$utils$dataset_processing$apply_sorting(data,sort_col,sort_dir){
if(cljs.core.truth_(sort_col)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__47657_SHARP_,p2__47656_SHARP_){
return cljs.core.compare(p2__47656_SHARP_,p1__47657_SHARP_);
})),data);
} else {
return data;
}
});
/**
 * Calculates pagination indices and slices the data.
 */
bb_web_ds_tools.utils.dataset_processing.get_pagination_info = (function bb_web_ds_tools$utils$dataset_processing$get_pagination_info(data,page,rows_per_page){
var total_rows = cljs.core.count(data);
var start_idx = (function (){var x__5113__auto__ = (page * rows_per_page);
var y__5114__auto__ = total_rows;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var end_idx = (function (){var x__5113__auto__ = (start_idx + rows_per_page);
var y__5114__auto__ = total_rows;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-rows","total-rows",1745495528),total_rows,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745),start_idx,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788),end_idx,new cljs.core.Keyword(null,"page-data","page-data",1443840710),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(data),start_idx,end_idx)], null);
});
/**
 * Processes dataset data for display in a table: filtering, sorting, and pagination.
 * 
 *   Returns a map containing:
 *  - :filtered-data (seq): Data after filtering.
 *  - :page-data (vector): Data for the current page.
 *  - :total-rows (int): Total count after filtering.
 *  - :start-idx (int): Start index of display.
 *  - :end-idx (int): End index of display.
 *  - :visible-columns (seq): List of visible column keys.
 */
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,p__47661){
var map__47662 = p__47661;
var map__47662__$1 = cljs.core.__destructure_map(map__47662);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var compiled_filters = ((cljs.core.seq(filters))?bb_web_ds_tools.utils.dataset_processing.compile_filters(filters):null);
var filtered_data = bb_web_ds_tools.utils.dataset_processing.apply_filters(data,compiled_filters);
var sorted_data = bb_web_ds_tools.utils.dataset_processing.apply_sorting(filtered_data,sort_col,sort_dir);
var pagination = bb_web_ds_tools.utils.dataset_processing.get_pagination_info(sorted_data,page,rows_per_page);
var visible_columns = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(hidden_columns,all_columns);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),filtered_data,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660),visible_columns], null),pagination], 0));
});

//# sourceMappingURL=bb_web_ds_tools.utils.dataset_processing.js.map
