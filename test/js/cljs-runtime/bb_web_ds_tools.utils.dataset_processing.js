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
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__43524){
var map__43525 = p__43524;
var map__43525__$1 = cljs.core.__destructure_map(map__43525);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43525__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43525__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__43526 = cljs.core._EQ_;
var expr__43527 = case$;
if(cljs.core.truth_((pred__43526.cljs$core$IFn$_invoke$arity$2 ? pred__43526.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43527) : pred__43526.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43527)))){
return bb_web_ds_tools.utils.dataset_processing.to_snake_case(s);
} else {
if(cljs.core.truth_((pred__43526.cljs$core$IFn$_invoke$arity$2 ? pred__43526.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43527) : pred__43526.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43527)))){
return bb_web_ds_tools.utils.dataset_processing.to_camel_case(s);
} else {
if(cljs.core.truth_((pred__43526.cljs$core$IFn$_invoke$arity$2 ? pred__43526.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43527) : pred__43526.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43527)))){
return bb_web_ds_tools.utils.dataset_processing.to_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__43529 = cljs.core._EQ_;
var expr__43530 = output;
if(cljs.core.truth_((pred__43529.cljs$core$IFn$_invoke$arity$2 ? pred__43529.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__43530) : pred__43529.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__43530)))){
return s_case;
} else {
if(cljs.core.truth_((pred__43529.cljs$core$IFn$_invoke$arity$2 ? pred__43529.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43530) : pred__43529.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43530)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__43529.cljs$core$IFn$_invoke$arity$2 ? pred__43529.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43530) : pred__43529.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43530)))){
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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43533_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__43533_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43539 = cljs.core.get_global_hierarchy;
return (fexpr__43539.cljs$core$IFn$_invoke$arity$0 ? fexpr__43539.cljs$core$IFn$_invoke$arity$0() : fexpr__43539.call(null));
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
var vec__43540 = lines;
var seq__43541 = cljs.core.seq(vec__43540);
var first__43542 = cljs.core.first(seq__43541);
var seq__43541__$1 = cljs.core.next(seq__43541);
var header_line = first__43542;
var first__43542__$1 = cljs.core.first(seq__43541__$1);
var seq__43541__$2 = cljs.core.next(seq__43541__$1);
var ___$2 = first__43542__$1;
var data_lines = seq__43541__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__43544 = arguments.length;
switch (G__43544) {
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
}catch (e43545){if((e43545 instanceof Error)){
var e = e43545;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e43545;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43548 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43548 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43548);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43549 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43549 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43549);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43550 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43550 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43550);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43551 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43551 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43551);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43552_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43552_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__43555 = arguments.length;
switch (G__43555) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43553_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43553_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__43557 = arguments.length;
switch (G__43557) {
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
var G__43558 = structure;
var G__43558__$1 = (((G__43558 instanceof cljs.core.Keyword))?G__43558.fqn:null);
switch (G__43558__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43558__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43559 = cljs.core.get_global_hierarchy;
return (fexpr__43559.cljs$core$IFn$_invoke$arity$0 ? fexpr__43559.cljs$core$IFn$_invoke$arity$0() : fexpr__43559.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__43634__delegate = function (fmt,structure,p__43560){
var vec__43561 = p__43560;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43561,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__43634 = function (fmt,structure,var_args){
var p__43560 = null;
if (arguments.length > 2) {
var G__43635__i = 0, G__43635__a = new Array(arguments.length -  2);
while (G__43635__i < G__43635__a.length) {G__43635__a[G__43635__i] = arguments[G__43635__i + 2]; ++G__43635__i;}
  p__43560 = new cljs.core.IndexedSeq(G__43635__a,0,null);
} 
return G__43634__delegate.call(this,fmt,structure,p__43560);};
G__43634.cljs$lang$maxFixedArity = 2;
G__43634.cljs$lang$applyTo = (function (arglist__43636){
var fmt = cljs.core.first(arglist__43636);
arglist__43636 = cljs.core.next(arglist__43636);
var structure = cljs.core.first(arglist__43636);
var p__43560 = cljs.core.rest(arglist__43636);
return G__43634__delegate(fmt,structure,p__43560);
});
G__43634.cljs$core$IFn$_invoke$arity$variadic = G__43634__delegate;
return G__43634;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43637__delegate = function (_,___$1,p__43564){
var vec__43565 = p__43564;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__43637 = function (_,___$1,var_args){
var p__43564 = null;
if (arguments.length > 2) {
var G__43638__i = 0, G__43638__a = new Array(arguments.length -  2);
while (G__43638__i < G__43638__a.length) {G__43638__a[G__43638__i] = arguments[G__43638__i + 2]; ++G__43638__i;}
  p__43564 = new cljs.core.IndexedSeq(G__43638__a,0,null);
} 
return G__43637__delegate.call(this,_,___$1,p__43564);};
G__43637.cljs$lang$maxFixedArity = 2;
G__43637.cljs$lang$applyTo = (function (arglist__43639){
var _ = cljs.core.first(arglist__43639);
arglist__43639 = cljs.core.next(arglist__43639);
var ___$1 = cljs.core.first(arglist__43639);
var p__43564 = cljs.core.rest(arglist__43639);
return G__43637__delegate(_,___$1,p__43564);
});
G__43637.cljs$core$IFn$_invoke$arity$variadic = G__43637__delegate;
return G__43637;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43640__delegate = function (_,___$1,p__43568){
var vec__43569 = p__43568;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43569,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__43640 = function (_,___$1,var_args){
var p__43568 = null;
if (arguments.length > 2) {
var G__43641__i = 0, G__43641__a = new Array(arguments.length -  2);
while (G__43641__i < G__43641__a.length) {G__43641__a[G__43641__i] = arguments[G__43641__i + 2]; ++G__43641__i;}
  p__43568 = new cljs.core.IndexedSeq(G__43641__a,0,null);
} 
return G__43640__delegate.call(this,_,___$1,p__43568);};
G__43640.cljs$lang$maxFixedArity = 2;
G__43640.cljs$lang$applyTo = (function (arglist__43642){
var _ = cljs.core.first(arglist__43642);
arglist__43642 = cljs.core.next(arglist__43642);
var ___$1 = cljs.core.first(arglist__43642);
var p__43568 = cljs.core.rest(arglist__43642);
return G__43640__delegate(_,___$1,p__43568);
});
G__43640.cljs$core$IFn$_invoke$arity$variadic = G__43640__delegate;
return G__43640;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43643__delegate = function (_,___$1,p__43572){
var vec__43573 = p__43572;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43573,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43643 = function (_,___$1,var_args){
var p__43572 = null;
if (arguments.length > 2) {
var G__43644__i = 0, G__43644__a = new Array(arguments.length -  2);
while (G__43644__i < G__43644__a.length) {G__43644__a[G__43644__i] = arguments[G__43644__i + 2]; ++G__43644__i;}
  p__43572 = new cljs.core.IndexedSeq(G__43644__a,0,null);
} 
return G__43643__delegate.call(this,_,___$1,p__43572);};
G__43643.cljs$lang$maxFixedArity = 2;
G__43643.cljs$lang$applyTo = (function (arglist__43645){
var _ = cljs.core.first(arglist__43645);
arglist__43645 = cljs.core.next(arglist__43645);
var ___$1 = cljs.core.first(arglist__43645);
var p__43572 = cljs.core.rest(arglist__43645);
return G__43643__delegate(_,___$1,p__43572);
});
G__43643.cljs$core$IFn$_invoke$arity$variadic = G__43643__delegate;
return G__43643;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43646__delegate = function (_,structure,p__43576){
var vec__43577 = p__43576;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43577,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43646 = function (_,structure,var_args){
var p__43576 = null;
if (arguments.length > 2) {
var G__43647__i = 0, G__43647__a = new Array(arguments.length -  2);
while (G__43647__i < G__43647__a.length) {G__43647__a[G__43647__i] = arguments[G__43647__i + 2]; ++G__43647__i;}
  p__43576 = new cljs.core.IndexedSeq(G__43647__a,0,null);
} 
return G__43646__delegate.call(this,_,structure,p__43576);};
G__43646.cljs$lang$maxFixedArity = 2;
G__43646.cljs$lang$applyTo = (function (arglist__43648){
var _ = cljs.core.first(arglist__43648);
arglist__43648 = cljs.core.next(arglist__43648);
var structure = cljs.core.first(arglist__43648);
var p__43576 = cljs.core.rest(arglist__43648);
return G__43646__delegate(_,structure,p__43576);
});
G__43646.cljs$core$IFn$_invoke$arity$variadic = G__43646__delegate;
return G__43646;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43649__delegate = function (_,structure,p__43580){
var vec__43581 = p__43580;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43581,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43649 = function (_,structure,var_args){
var p__43580 = null;
if (arguments.length > 2) {
var G__43650__i = 0, G__43650__a = new Array(arguments.length -  2);
while (G__43650__i < G__43650__a.length) {G__43650__a[G__43650__i] = arguments[G__43650__i + 2]; ++G__43650__i;}
  p__43580 = new cljs.core.IndexedSeq(G__43650__a,0,null);
} 
return G__43649__delegate.call(this,_,structure,p__43580);};
G__43649.cljs$lang$maxFixedArity = 2;
G__43649.cljs$lang$applyTo = (function (arglist__43651){
var _ = cljs.core.first(arglist__43651);
arglist__43651 = cljs.core.next(arglist__43651);
var structure = cljs.core.first(arglist__43651);
var p__43580 = cljs.core.rest(arglist__43651);
return G__43649__delegate(_,structure,p__43580);
});
G__43649.cljs$core$IFn$_invoke$arity$variadic = G__43649__delegate;
return G__43649;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43652__delegate = function (_,structure,p__43584){
var vec__43585 = p__43584;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43585,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43652 = function (_,structure,var_args){
var p__43584 = null;
if (arguments.length > 2) {
var G__43653__i = 0, G__43653__a = new Array(arguments.length -  2);
while (G__43653__i < G__43653__a.length) {G__43653__a[G__43653__i] = arguments[G__43653__i + 2]; ++G__43653__i;}
  p__43584 = new cljs.core.IndexedSeq(G__43653__a,0,null);
} 
return G__43652__delegate.call(this,_,structure,p__43584);};
G__43652.cljs$lang$maxFixedArity = 2;
G__43652.cljs$lang$applyTo = (function (arglist__43654){
var _ = cljs.core.first(arglist__43654);
arglist__43654 = cljs.core.next(arglist__43654);
var structure = cljs.core.first(arglist__43654);
var p__43584 = cljs.core.rest(arglist__43654);
return G__43652__delegate(_,structure,p__43584);
});
G__43652.cljs$core$IFn$_invoke$arity$variadic = G__43652__delegate;
return G__43652;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43655__delegate = function (_,structure,p__43588){
var vec__43589 = p__43588;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43589,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43592_43656 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43593_43657 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43594_43658 = true;
var _STAR_print_fn_STAR__temp_val__43595_43659 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43594_43658);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43595_43659);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43593_43657);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43592_43656);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43655 = function (_,structure,var_args){
var p__43588 = null;
if (arguments.length > 2) {
var G__43660__i = 0, G__43660__a = new Array(arguments.length -  2);
while (G__43660__i < G__43660__a.length) {G__43660__a[G__43660__i] = arguments[G__43660__i + 2]; ++G__43660__i;}
  p__43588 = new cljs.core.IndexedSeq(G__43660__a,0,null);
} 
return G__43655__delegate.call(this,_,structure,p__43588);};
G__43655.cljs$lang$maxFixedArity = 2;
G__43655.cljs$lang$applyTo = (function (arglist__43661){
var _ = cljs.core.first(arglist__43661);
arglist__43661 = cljs.core.next(arglist__43661);
var structure = cljs.core.first(arglist__43661);
var p__43588 = cljs.core.rest(arglist__43661);
return G__43655__delegate(_,structure,p__43588);
});
G__43655.cljs$core$IFn$_invoke$arity$variadic = G__43655__delegate;
return G__43655;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43662__delegate = function (_,structure,p__43596){
var vec__43597 = p__43596;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43600_43663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43601_43664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43602_43665 = true;
var _STAR_print_fn_STAR__temp_val__43603_43666 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43602_43665);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43603_43666);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43601_43664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43600_43663);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43662 = function (_,structure,var_args){
var p__43596 = null;
if (arguments.length > 2) {
var G__43667__i = 0, G__43667__a = new Array(arguments.length -  2);
while (G__43667__i < G__43667__a.length) {G__43667__a[G__43667__i] = arguments[G__43667__i + 2]; ++G__43667__i;}
  p__43596 = new cljs.core.IndexedSeq(G__43667__a,0,null);
} 
return G__43662__delegate.call(this,_,structure,p__43596);};
G__43662.cljs$lang$maxFixedArity = 2;
G__43662.cljs$lang$applyTo = (function (arglist__43668){
var _ = cljs.core.first(arglist__43668);
arglist__43668 = cljs.core.next(arglist__43668);
var structure = cljs.core.first(arglist__43668);
var p__43596 = cljs.core.rest(arglist__43668);
return G__43662__delegate(_,structure,p__43596);
});
G__43662.cljs$core$IFn$_invoke$arity$variadic = G__43662__delegate;
return G__43662;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43669__delegate = function (_,structure,p__43604){
var vec__43605 = p__43604;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43605,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43608_43670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43609_43671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43610_43672 = true;
var _STAR_print_fn_STAR__temp_val__43611_43673 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43610_43672);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43611_43673);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43609_43671);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43608_43670);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43669 = function (_,structure,var_args){
var p__43604 = null;
if (arguments.length > 2) {
var G__43674__i = 0, G__43674__a = new Array(arguments.length -  2);
while (G__43674__i < G__43674__a.length) {G__43674__a[G__43674__i] = arguments[G__43674__i + 2]; ++G__43674__i;}
  p__43604 = new cljs.core.IndexedSeq(G__43674__a,0,null);
} 
return G__43669__delegate.call(this,_,structure,p__43604);};
G__43669.cljs$lang$maxFixedArity = 2;
G__43669.cljs$lang$applyTo = (function (arglist__43675){
var _ = cljs.core.first(arglist__43675);
arglist__43675 = cljs.core.next(arglist__43675);
var structure = cljs.core.first(arglist__43675);
var p__43604 = cljs.core.rest(arglist__43675);
return G__43669__delegate(_,structure,p__43604);
});
G__43669.cljs$core$IFn$_invoke$arity$variadic = G__43669__delegate;
return G__43669;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__43676__delegate = function (_,___$1,p__43612){
var vec__43613 = p__43612;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43613,(0),null);
return "";
};
var G__43676 = function (_,___$1,var_args){
var p__43612 = null;
if (arguments.length > 2) {
var G__43677__i = 0, G__43677__a = new Array(arguments.length -  2);
while (G__43677__i < G__43677__a.length) {G__43677__a[G__43677__i] = arguments[G__43677__i + 2]; ++G__43677__i;}
  p__43612 = new cljs.core.IndexedSeq(G__43677__a,0,null);
} 
return G__43676__delegate.call(this,_,___$1,p__43612);};
G__43676.cljs$lang$maxFixedArity = 2;
G__43676.cljs$lang$applyTo = (function (arglist__43678){
var _ = cljs.core.first(arglist__43678);
arglist__43678 = cljs.core.next(arglist__43678);
var ___$1 = cljs.core.first(arglist__43678);
var p__43612 = cljs.core.rest(arglist__43678);
return G__43676__delegate(_,___$1,p__43612);
});
G__43676.cljs$core$IFn$_invoke$arity$variadic = G__43676__delegate;
return G__43676;
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
}catch (e43616){var _ = e43616;
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
var map__43621 = view_state;
var map__43621__$1 = cljs.core.__destructure_map(map__43621);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
return cljs.core.every_QMARK_((function (p__43624){
var vec__43625 = p__43624;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(1),null);
try{var G__43629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43629) : f.call(null,G__43629));
}catch (e43628){var _ = e43628;
return false;
}}),compiled_filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__43620_SHARP_,p2__43619_SHARP_){
return cljs.core.compare(p2__43619_SHARP_,p1__43620_SHARP_);
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
