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
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__43821){
var map__43822 = p__43821;
var map__43822__$1 = cljs.core.__destructure_map(map__43822);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43822__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43822__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__43823 = cljs.core._EQ_;
var expr__43824 = case$;
if(cljs.core.truth_((pred__43823.cljs$core$IFn$_invoke$arity$2 ? pred__43823.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43824) : pred__43823.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43824)))){
return camel_snake_kebab.core.__GT_snake_case(s);
} else {
if(cljs.core.truth_((pred__43823.cljs$core$IFn$_invoke$arity$2 ? pred__43823.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43824) : pred__43823.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43824)))){
return camel_snake_kebab.core.__GT_PascalCase(s);
} else {
if(cljs.core.truth_((pred__43823.cljs$core$IFn$_invoke$arity$2 ? pred__43823.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43824) : pred__43823.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43824)))){
return camel_snake_kebab.core.__GT_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__43826 = cljs.core._EQ_;
var expr__43827 = output;
if(cljs.core.truth_((pred__43826.cljs$core$IFn$_invoke$arity$2 ? pred__43826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__43827) : pred__43826.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__43827)))){
return s_case;
} else {
if(cljs.core.truth_((pred__43826.cljs$core$IFn$_invoke$arity$2 ? pred__43826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43827) : pred__43826.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43827)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__43826.cljs$core$IFn$_invoke$arity$2 ? pred__43826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43827) : pred__43826.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43827)))){
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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43832_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__43832_SHARP_),i);
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
var G__43858 = arguments.length;
switch (G__43858) {
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
}catch (e43865){if((e43865 instanceof Error)){
var e = e43865;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e43865;

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
var G__43883 = structure;
var G__43883__$1 = (((G__43883 instanceof cljs.core.Keyword))?G__43883.fqn:null);
switch (G__43883__$1) {
case "columnar":
var G__43885 = data;
if((G__43885 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43885);
}

break;
case "row-maps":
return data;

break;
case "row-arrays":
var G__43886 = data;
if((G__43886 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43886);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43893 = cljs.core.get_global_hierarchy;
return (fexpr__43893.cljs$core$IFn$_invoke$arity$0 ? fexpr__43893.cljs$core$IFn$_invoke$arity$0() : fexpr__43893.call(null));
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
var vec__43916 = lines;
var seq__43917 = cljs.core.seq(vec__43916);
var first__43918 = cljs.core.first(seq__43917);
var seq__43917__$1 = cljs.core.next(seq__43917);
var header_line = first__43918;
var first__43918__$1 = cljs.core.first(seq__43917__$1);
var seq__43917__$2 = cljs.core.next(seq__43917__$1);
var ___$2 = first__43918__$1;
var data_lines = seq__43917__$2;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43924_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43924_SHARP_);
}),ks);
}),rows)));
});
/**
 * Formats data as a Markdown table.
 */
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__43927 = arguments.length;
switch (G__43927) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43925_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43925_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

/**
 * Converts data to a JSON string with indentation.
 */
bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__43929 = arguments.length;
switch (G__43929) {
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
var G__43930 = structure;
var G__43930__$1 = (((G__43930 instanceof cljs.core.Keyword))?G__43930.fqn:null);
switch (G__43930__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43930__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43931 = cljs.core.get_global_hierarchy;
return (fexpr__43931.cljs$core$IFn$_invoke$arity$0 ? fexpr__43931.cljs$core$IFn$_invoke$arity$0() : fexpr__43931.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__44020__delegate = function (fmt,structure,p__43932){
var vec__43933 = p__43932;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43933,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__44020 = function (fmt,structure,var_args){
var p__43932 = null;
if (arguments.length > 2) {
var G__44021__i = 0, G__44021__a = new Array(arguments.length -  2);
while (G__44021__i < G__44021__a.length) {G__44021__a[G__44021__i] = arguments[G__44021__i + 2]; ++G__44021__i;}
  p__43932 = new cljs.core.IndexedSeq(G__44021__a,0,null);
} 
return G__44020__delegate.call(this,fmt,structure,p__43932);};
G__44020.cljs$lang$maxFixedArity = 2;
G__44020.cljs$lang$applyTo = (function (arglist__44022){
var fmt = cljs.core.first(arglist__44022);
arglist__44022 = cljs.core.next(arglist__44022);
var structure = cljs.core.first(arglist__44022);
var p__43932 = cljs.core.rest(arglist__44022);
return G__44020__delegate(fmt,structure,p__43932);
});
G__44020.cljs$core$IFn$_invoke$arity$variadic = G__44020__delegate;
return G__44020;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44023__delegate = function (_,___$1,p__43936){
var vec__43937 = p__43936;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43937,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__44023 = function (_,___$1,var_args){
var p__43936 = null;
if (arguments.length > 2) {
var G__44024__i = 0, G__44024__a = new Array(arguments.length -  2);
while (G__44024__i < G__44024__a.length) {G__44024__a[G__44024__i] = arguments[G__44024__i + 2]; ++G__44024__i;}
  p__43936 = new cljs.core.IndexedSeq(G__44024__a,0,null);
} 
return G__44023__delegate.call(this,_,___$1,p__43936);};
G__44023.cljs$lang$maxFixedArity = 2;
G__44023.cljs$lang$applyTo = (function (arglist__44025){
var _ = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var ___$1 = cljs.core.first(arglist__44025);
var p__43936 = cljs.core.rest(arglist__44025);
return G__44023__delegate(_,___$1,p__43936);
});
G__44023.cljs$core$IFn$_invoke$arity$variadic = G__44023__delegate;
return G__44023;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44026__delegate = function (_,___$1,p__43942){
var vec__43943 = p__43942;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43943,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__44026 = function (_,___$1,var_args){
var p__43942 = null;
if (arguments.length > 2) {
var G__44027__i = 0, G__44027__a = new Array(arguments.length -  2);
while (G__44027__i < G__44027__a.length) {G__44027__a[G__44027__i] = arguments[G__44027__i + 2]; ++G__44027__i;}
  p__43942 = new cljs.core.IndexedSeq(G__44027__a,0,null);
} 
return G__44026__delegate.call(this,_,___$1,p__43942);};
G__44026.cljs$lang$maxFixedArity = 2;
G__44026.cljs$lang$applyTo = (function (arglist__44028){
var _ = cljs.core.first(arglist__44028);
arglist__44028 = cljs.core.next(arglist__44028);
var ___$1 = cljs.core.first(arglist__44028);
var p__43942 = cljs.core.rest(arglist__44028);
return G__44026__delegate(_,___$1,p__43942);
});
G__44026.cljs$core$IFn$_invoke$arity$variadic = G__44026__delegate;
return G__44026;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44029__delegate = function (_,___$1,p__43946){
var vec__43947 = p__43946;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43947,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__44029 = function (_,___$1,var_args){
var p__43946 = null;
if (arguments.length > 2) {
var G__44030__i = 0, G__44030__a = new Array(arguments.length -  2);
while (G__44030__i < G__44030__a.length) {G__44030__a[G__44030__i] = arguments[G__44030__i + 2]; ++G__44030__i;}
  p__43946 = new cljs.core.IndexedSeq(G__44030__a,0,null);
} 
return G__44029__delegate.call(this,_,___$1,p__43946);};
G__44029.cljs$lang$maxFixedArity = 2;
G__44029.cljs$lang$applyTo = (function (arglist__44031){
var _ = cljs.core.first(arglist__44031);
arglist__44031 = cljs.core.next(arglist__44031);
var ___$1 = cljs.core.first(arglist__44031);
var p__43946 = cljs.core.rest(arglist__44031);
return G__44029__delegate(_,___$1,p__43946);
});
G__44029.cljs$core$IFn$_invoke$arity$variadic = G__44029__delegate;
return G__44029;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44032__delegate = function (_,structure,p__43950){
var vec__43951 = p__43950;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43951,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__44032 = function (_,structure,var_args){
var p__43950 = null;
if (arguments.length > 2) {
var G__44033__i = 0, G__44033__a = new Array(arguments.length -  2);
while (G__44033__i < G__44033__a.length) {G__44033__a[G__44033__i] = arguments[G__44033__i + 2]; ++G__44033__i;}
  p__43950 = new cljs.core.IndexedSeq(G__44033__a,0,null);
} 
return G__44032__delegate.call(this,_,structure,p__43950);};
G__44032.cljs$lang$maxFixedArity = 2;
G__44032.cljs$lang$applyTo = (function (arglist__44034){
var _ = cljs.core.first(arglist__44034);
arglist__44034 = cljs.core.next(arglist__44034);
var structure = cljs.core.first(arglist__44034);
var p__43950 = cljs.core.rest(arglist__44034);
return G__44032__delegate(_,structure,p__43950);
});
G__44032.cljs$core$IFn$_invoke$arity$variadic = G__44032__delegate;
return G__44032;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__44035__delegate = function (_,structure,p__43954){
var vec__43955 = p__43954;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43955,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__44035 = function (_,structure,var_args){
var p__43954 = null;
if (arguments.length > 2) {
var G__44036__i = 0, G__44036__a = new Array(arguments.length -  2);
while (G__44036__i < G__44036__a.length) {G__44036__a[G__44036__i] = arguments[G__44036__i + 2]; ++G__44036__i;}
  p__43954 = new cljs.core.IndexedSeq(G__44036__a,0,null);
} 
return G__44035__delegate.call(this,_,structure,p__43954);};
G__44035.cljs$lang$maxFixedArity = 2;
G__44035.cljs$lang$applyTo = (function (arglist__44037){
var _ = cljs.core.first(arglist__44037);
arglist__44037 = cljs.core.next(arglist__44037);
var structure = cljs.core.first(arglist__44037);
var p__43954 = cljs.core.rest(arglist__44037);
return G__44035__delegate(_,structure,p__43954);
});
G__44035.cljs$core$IFn$_invoke$arity$variadic = G__44035__delegate;
return G__44035;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__44038__delegate = function (_,structure,p__43958){
var vec__43959 = p__43958;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43959,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__44038 = function (_,structure,var_args){
var p__43958 = null;
if (arguments.length > 2) {
var G__44039__i = 0, G__44039__a = new Array(arguments.length -  2);
while (G__44039__i < G__44039__a.length) {G__44039__a[G__44039__i] = arguments[G__44039__i + 2]; ++G__44039__i;}
  p__43958 = new cljs.core.IndexedSeq(G__44039__a,0,null);
} 
return G__44038__delegate.call(this,_,structure,p__43958);};
G__44038.cljs$lang$maxFixedArity = 2;
G__44038.cljs$lang$applyTo = (function (arglist__44043){
var _ = cljs.core.first(arglist__44043);
arglist__44043 = cljs.core.next(arglist__44043);
var structure = cljs.core.first(arglist__44043);
var p__43958 = cljs.core.rest(arglist__44043);
return G__44038__delegate(_,structure,p__43958);
});
G__44038.cljs$core$IFn$_invoke$arity$variadic = G__44038__delegate;
return G__44038;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44044__delegate = function (_,structure,p__43962){
var vec__43963 = p__43962;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43963,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43966_44045 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43967_44046 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43968_44047 = true;
var _STAR_print_fn_STAR__temp_val__43969_44048 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43968_44047);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43969_44048);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43967_44046);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43966_44045);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__44044 = function (_,structure,var_args){
var p__43962 = null;
if (arguments.length > 2) {
var G__44049__i = 0, G__44049__a = new Array(arguments.length -  2);
while (G__44049__i < G__44049__a.length) {G__44049__a[G__44049__i] = arguments[G__44049__i + 2]; ++G__44049__i;}
  p__43962 = new cljs.core.IndexedSeq(G__44049__a,0,null);
} 
return G__44044__delegate.call(this,_,structure,p__43962);};
G__44044.cljs$lang$maxFixedArity = 2;
G__44044.cljs$lang$applyTo = (function (arglist__44050){
var _ = cljs.core.first(arglist__44050);
arglist__44050 = cljs.core.next(arglist__44050);
var structure = cljs.core.first(arglist__44050);
var p__43962 = cljs.core.rest(arglist__44050);
return G__44044__delegate(_,structure,p__43962);
});
G__44044.cljs$core$IFn$_invoke$arity$variadic = G__44044__delegate;
return G__44044;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__44051__delegate = function (_,structure,p__43971){
var vec__43972 = p__43971;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43972,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43975_44052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43976_44053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43977_44054 = true;
var _STAR_print_fn_STAR__temp_val__43978_44055 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43977_44054);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43978_44055);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43976_44053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43975_44052);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__44051 = function (_,structure,var_args){
var p__43971 = null;
if (arguments.length > 2) {
var G__44056__i = 0, G__44056__a = new Array(arguments.length -  2);
while (G__44056__i < G__44056__a.length) {G__44056__a[G__44056__i] = arguments[G__44056__i + 2]; ++G__44056__i;}
  p__43971 = new cljs.core.IndexedSeq(G__44056__a,0,null);
} 
return G__44051__delegate.call(this,_,structure,p__43971);};
G__44051.cljs$lang$maxFixedArity = 2;
G__44051.cljs$lang$applyTo = (function (arglist__44057){
var _ = cljs.core.first(arglist__44057);
arglist__44057 = cljs.core.next(arglist__44057);
var structure = cljs.core.first(arglist__44057);
var p__43971 = cljs.core.rest(arglist__44057);
return G__44051__delegate(_,structure,p__43971);
});
G__44051.cljs$core$IFn$_invoke$arity$variadic = G__44051__delegate;
return G__44051;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__44058__delegate = function (_,structure,p__43980){
var vec__43981 = p__43980;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43981,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43984_44059 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43985_44060 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43986_44061 = true;
var _STAR_print_fn_STAR__temp_val__43987_44062 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43986_44061);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43987_44062);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43985_44060);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43984_44059);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__44058 = function (_,structure,var_args){
var p__43980 = null;
if (arguments.length > 2) {
var G__44063__i = 0, G__44063__a = new Array(arguments.length -  2);
while (G__44063__i < G__44063__a.length) {G__44063__a[G__44063__i] = arguments[G__44063__i + 2]; ++G__44063__i;}
  p__43980 = new cljs.core.IndexedSeq(G__44063__a,0,null);
} 
return G__44058__delegate.call(this,_,structure,p__43980);};
G__44058.cljs$lang$maxFixedArity = 2;
G__44058.cljs$lang$applyTo = (function (arglist__44064){
var _ = cljs.core.first(arglist__44064);
arglist__44064 = cljs.core.next(arglist__44064);
var structure = cljs.core.first(arglist__44064);
var p__43980 = cljs.core.rest(arglist__44064);
return G__44058__delegate(_,structure,p__43980);
});
G__44058.cljs$core$IFn$_invoke$arity$variadic = G__44058__delegate;
return G__44058;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(function() { 
var G__44065__delegate = function (_,___$1,p__43988){
var vec__43989 = p__43988;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43989,(0),null);
return "Line 1: Hello World\nLine 2: This is a text file\nLine 3: 123-456-7890";
};
var G__44065 = function (_,___$1,var_args){
var p__43988 = null;
if (arguments.length > 2) {
var G__44066__i = 0, G__44066__a = new Array(arguments.length -  2);
while (G__44066__i < G__44066__a.length) {G__44066__a[G__44066__i] = arguments[G__44066__i + 2]; ++G__44066__i;}
  p__43988 = new cljs.core.IndexedSeq(G__44066__a,0,null);
} 
return G__44065__delegate.call(this,_,___$1,p__43988);};
G__44065.cljs$lang$maxFixedArity = 2;
G__44065.cljs$lang$applyTo = (function (arglist__44067){
var _ = cljs.core.first(arglist__44067);
arglist__44067 = cljs.core.next(arglist__44067);
var ___$1 = cljs.core.first(arglist__44067);
var p__43988 = cljs.core.rest(arglist__44067);
return G__44065__delegate(_,___$1,p__43988);
});
G__44065.cljs$core$IFn$_invoke$arity$variadic = G__44065__delegate;
return G__44065;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"raw","raw",1604651272)], null),(function() { 
var G__44068__delegate = function (_,___$1,p__43992){
var vec__43993 = p__43992;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43993,(0),null);
return "This is a raw text block.\nIt contains newlines and special characters.\n\nUse it to test regex matching on the whole content.";
};
var G__44068 = function (_,___$1,var_args){
var p__43992 = null;
if (arguments.length > 2) {
var G__44069__i = 0, G__44069__a = new Array(arguments.length -  2);
while (G__44069__i < G__44069__a.length) {G__44069__a[G__44069__i] = arguments[G__44069__i + 2]; ++G__44069__i;}
  p__43992 = new cljs.core.IndexedSeq(G__44069__a,0,null);
} 
return G__44068__delegate.call(this,_,___$1,p__43992);};
G__44068.cljs$lang$maxFixedArity = 2;
G__44068.cljs$lang$applyTo = (function (arglist__44070){
var _ = cljs.core.first(arglist__44070);
arglist__44070 = cljs.core.next(arglist__44070);
var ___$1 = cljs.core.first(arglist__44070);
var p__43992 = cljs.core.rest(arglist__44070);
return G__44068__delegate(_,___$1,p__43992);
});
G__44068.cljs$core$IFn$_invoke$arity$variadic = G__44068__delegate;
return G__44068;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__44071__delegate = function (_,___$1,p__43996){
var vec__43997 = p__43996;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43997,(0),null);
return "";
};
var G__44071 = function (_,___$1,var_args){
var p__43996 = null;
if (arguments.length > 2) {
var G__44072__i = 0, G__44072__a = new Array(arguments.length -  2);
while (G__44072__i < G__44072__a.length) {G__44072__a[G__44072__i] = arguments[G__44072__i + 2]; ++G__44072__i;}
  p__43996 = new cljs.core.IndexedSeq(G__44072__a,0,null);
} 
return G__44071__delegate.call(this,_,___$1,p__43996);};
G__44071.cljs$lang$maxFixedArity = 2;
G__44071.cljs$lang$applyTo = (function (arglist__44073){
var _ = cljs.core.first(arglist__44073);
arglist__44073 = cljs.core.next(arglist__44073);
var ___$1 = cljs.core.first(arglist__44073);
var p__43996 = cljs.core.rest(arglist__44073);
return G__44071__delegate(_,___$1,p__43996);
});
G__44071.cljs$core$IFn$_invoke$arity$variadic = G__44071__delegate;
return G__44071;
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
}catch (e44000){var _ = e44000;
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
return cljs.core.every_QMARK_((function (p__44001){
var vec__44002 = p__44001;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44002,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44002,(1),null);
try{var G__44006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44006) : f.call(null,G__44006));
}catch (e44005){var _ = e44005;
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__44008_SHARP_,p2__44007_SHARP_){
return cljs.core.compare(p2__44007_SHARP_,p1__44008_SHARP_);
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
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,p__44009){
var map__44010 = p__44009;
var map__44010__$1 = cljs.core.__destructure_map(map__44010);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44010__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
