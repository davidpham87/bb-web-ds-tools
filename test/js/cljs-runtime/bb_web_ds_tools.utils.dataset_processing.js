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
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__30311){
var map__30312 = p__30311;
var map__30312__$1 = cljs.core.__destructure_map(map__30312);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30312__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30312__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__30313 = cljs.core._EQ_;
var expr__30314 = case$;
if(cljs.core.truth_((pred__30313.cljs$core$IFn$_invoke$arity$2 ? pred__30313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__30314) : pred__30313.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__30314)))){
return bb_web_ds_tools.utils.dataset_processing.to_snake_case(s);
} else {
if(cljs.core.truth_((pred__30313.cljs$core$IFn$_invoke$arity$2 ? pred__30313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__30314) : pred__30313.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__30314)))){
return bb_web_ds_tools.utils.dataset_processing.to_camel_case(s);
} else {
if(cljs.core.truth_((pred__30313.cljs$core$IFn$_invoke$arity$2 ? pred__30313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__30314) : pred__30313.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__30314)))){
return bb_web_ds_tools.utils.dataset_processing.to_kebab_case(s);
} else {
return s;
}
}
}
})();
var final_val = (function (){var pred__30316 = cljs.core._EQ_;
var expr__30317 = output;
if(cljs.core.truth_((pred__30316.cljs$core$IFn$_invoke$arity$2 ? pred__30316.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__30317) : pred__30316.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__30317)))){
return s_case;
} else {
if(cljs.core.truth_((pred__30316.cljs$core$IFn$_invoke$arity$2 ? pred__30316.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__30317) : pred__30316.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__30317)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__30316.cljs$core$IFn$_invoke$arity$2 ? pred__30316.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__30317) : pred__30316.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__30317)))){
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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30319_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__30319_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30326 = cljs.core.get_global_hierarchy;
return (fexpr__30326.cljs$core$IFn$_invoke$arity$0 ? fexpr__30326.cljs$core$IFn$_invoke$arity$0() : fexpr__30326.call(null));
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
var vec__30333 = lines;
var seq__30334 = cljs.core.seq(vec__30333);
var first__30335 = cljs.core.first(seq__30334);
var seq__30334__$1 = cljs.core.next(seq__30334);
var header_line = first__30335;
var first__30335__$1 = cljs.core.first(seq__30334__$1);
var seq__30334__$2 = cljs.core.next(seq__30334__$1);
var ___$2 = first__30335__$1;
var data_lines = seq__30334__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__30393 = arguments.length;
switch (G__30393) {
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
}catch (e30407){if((e30407 instanceof Error)){
var e = e30407;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e30407;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__30419 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__30419 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__30419);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__30420 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__30420 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__30420);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__30421 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__30421 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__30421);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__30426 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__30426 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__30426);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30434_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30434_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__30453 = arguments.length;
switch (G__30453) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30449_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30449_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__30476 = arguments.length;
switch (G__30476) {
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
var G__30487 = structure;
var G__30487__$1 = (((G__30487 instanceof cljs.core.Keyword))?G__30487.fqn:null);
switch (G__30487__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30487__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30488 = cljs.core.get_global_hierarchy;
return (fexpr__30488.cljs$core$IFn$_invoke$arity$0 ? fexpr__30488.cljs$core$IFn$_invoke$arity$0() : fexpr__30488.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__30713__delegate = function (fmt,structure,p__30491){
var vec__30492 = p__30491;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30492,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__30713 = function (fmt,structure,var_args){
var p__30491 = null;
if (arguments.length > 2) {
var G__30716__i = 0, G__30716__a = new Array(arguments.length -  2);
while (G__30716__i < G__30716__a.length) {G__30716__a[G__30716__i] = arguments[G__30716__i + 2]; ++G__30716__i;}
  p__30491 = new cljs.core.IndexedSeq(G__30716__a,0,null);
} 
return G__30713__delegate.call(this,fmt,structure,p__30491);};
G__30713.cljs$lang$maxFixedArity = 2;
G__30713.cljs$lang$applyTo = (function (arglist__30717){
var fmt = cljs.core.first(arglist__30717);
arglist__30717 = cljs.core.next(arglist__30717);
var structure = cljs.core.first(arglist__30717);
var p__30491 = cljs.core.rest(arglist__30717);
return G__30713__delegate(fmt,structure,p__30491);
});
G__30713.cljs$core$IFn$_invoke$arity$variadic = G__30713__delegate;
return G__30713;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30720__delegate = function (_,___$1,p__30497){
var vec__30499 = p__30497;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30499,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__30720 = function (_,___$1,var_args){
var p__30497 = null;
if (arguments.length > 2) {
var G__30722__i = 0, G__30722__a = new Array(arguments.length -  2);
while (G__30722__i < G__30722__a.length) {G__30722__a[G__30722__i] = arguments[G__30722__i + 2]; ++G__30722__i;}
  p__30497 = new cljs.core.IndexedSeq(G__30722__a,0,null);
} 
return G__30720__delegate.call(this,_,___$1,p__30497);};
G__30720.cljs$lang$maxFixedArity = 2;
G__30720.cljs$lang$applyTo = (function (arglist__30723){
var _ = cljs.core.first(arglist__30723);
arglist__30723 = cljs.core.next(arglist__30723);
var ___$1 = cljs.core.first(arglist__30723);
var p__30497 = cljs.core.rest(arglist__30723);
return G__30720__delegate(_,___$1,p__30497);
});
G__30720.cljs$core$IFn$_invoke$arity$variadic = G__30720__delegate;
return G__30720;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30726__delegate = function (_,___$1,p__30503){
var vec__30504 = p__30503;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30504,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__30726 = function (_,___$1,var_args){
var p__30503 = null;
if (arguments.length > 2) {
var G__30727__i = 0, G__30727__a = new Array(arguments.length -  2);
while (G__30727__i < G__30727__a.length) {G__30727__a[G__30727__i] = arguments[G__30727__i + 2]; ++G__30727__i;}
  p__30503 = new cljs.core.IndexedSeq(G__30727__a,0,null);
} 
return G__30726__delegate.call(this,_,___$1,p__30503);};
G__30726.cljs$lang$maxFixedArity = 2;
G__30726.cljs$lang$applyTo = (function (arglist__30728){
var _ = cljs.core.first(arglist__30728);
arglist__30728 = cljs.core.next(arglist__30728);
var ___$1 = cljs.core.first(arglist__30728);
var p__30503 = cljs.core.rest(arglist__30728);
return G__30726__delegate(_,___$1,p__30503);
});
G__30726.cljs$core$IFn$_invoke$arity$variadic = G__30726__delegate;
return G__30726;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30730__delegate = function (_,___$1,p__30507){
var vec__30508 = p__30507;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30730 = function (_,___$1,var_args){
var p__30507 = null;
if (arguments.length > 2) {
var G__30735__i = 0, G__30735__a = new Array(arguments.length -  2);
while (G__30735__i < G__30735__a.length) {G__30735__a[G__30735__i] = arguments[G__30735__i + 2]; ++G__30735__i;}
  p__30507 = new cljs.core.IndexedSeq(G__30735__a,0,null);
} 
return G__30730__delegate.call(this,_,___$1,p__30507);};
G__30730.cljs$lang$maxFixedArity = 2;
G__30730.cljs$lang$applyTo = (function (arglist__30736){
var _ = cljs.core.first(arglist__30736);
arglist__30736 = cljs.core.next(arglist__30736);
var ___$1 = cljs.core.first(arglist__30736);
var p__30507 = cljs.core.rest(arglist__30736);
return G__30730__delegate(_,___$1,p__30507);
});
G__30730.cljs$core$IFn$_invoke$arity$variadic = G__30730__delegate;
return G__30730;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30738__delegate = function (_,structure,p__30511){
var vec__30512 = p__30511;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30512,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30738 = function (_,structure,var_args){
var p__30511 = null;
if (arguments.length > 2) {
var G__30739__i = 0, G__30739__a = new Array(arguments.length -  2);
while (G__30739__i < G__30739__a.length) {G__30739__a[G__30739__i] = arguments[G__30739__i + 2]; ++G__30739__i;}
  p__30511 = new cljs.core.IndexedSeq(G__30739__a,0,null);
} 
return G__30738__delegate.call(this,_,structure,p__30511);};
G__30738.cljs$lang$maxFixedArity = 2;
G__30738.cljs$lang$applyTo = (function (arglist__30740){
var _ = cljs.core.first(arglist__30740);
arglist__30740 = cljs.core.next(arglist__30740);
var structure = cljs.core.first(arglist__30740);
var p__30511 = cljs.core.rest(arglist__30740);
return G__30738__delegate(_,structure,p__30511);
});
G__30738.cljs$core$IFn$_invoke$arity$variadic = G__30738__delegate;
return G__30738;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__30744__delegate = function (_,structure,p__30523){
var vec__30527 = p__30523;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30527,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30744 = function (_,structure,var_args){
var p__30523 = null;
if (arguments.length > 2) {
var G__30748__i = 0, G__30748__a = new Array(arguments.length -  2);
while (G__30748__i < G__30748__a.length) {G__30748__a[G__30748__i] = arguments[G__30748__i + 2]; ++G__30748__i;}
  p__30523 = new cljs.core.IndexedSeq(G__30748__a,0,null);
} 
return G__30744__delegate.call(this,_,structure,p__30523);};
G__30744.cljs$lang$maxFixedArity = 2;
G__30744.cljs$lang$applyTo = (function (arglist__30750){
var _ = cljs.core.first(arglist__30750);
arglist__30750 = cljs.core.next(arglist__30750);
var structure = cljs.core.first(arglist__30750);
var p__30523 = cljs.core.rest(arglist__30750);
return G__30744__delegate(_,structure,p__30523);
});
G__30744.cljs$core$IFn$_invoke$arity$variadic = G__30744__delegate;
return G__30744;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__30751__delegate = function (_,structure,p__30531){
var vec__30532 = p__30531;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30532,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30751 = function (_,structure,var_args){
var p__30531 = null;
if (arguments.length > 2) {
var G__30753__i = 0, G__30753__a = new Array(arguments.length -  2);
while (G__30753__i < G__30753__a.length) {G__30753__a[G__30753__i] = arguments[G__30753__i + 2]; ++G__30753__i;}
  p__30531 = new cljs.core.IndexedSeq(G__30753__a,0,null);
} 
return G__30751__delegate.call(this,_,structure,p__30531);};
G__30751.cljs$lang$maxFixedArity = 2;
G__30751.cljs$lang$applyTo = (function (arglist__30754){
var _ = cljs.core.first(arglist__30754);
arglist__30754 = cljs.core.next(arglist__30754);
var structure = cljs.core.first(arglist__30754);
var p__30531 = cljs.core.rest(arglist__30754);
return G__30751__delegate(_,structure,p__30531);
});
G__30751.cljs$core$IFn$_invoke$arity$variadic = G__30751__delegate;
return G__30751;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30755__delegate = function (_,structure,p__30538){
var vec__30539 = p__30538;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30539,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30543_30756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30544_30757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30545_30758 = true;
var _STAR_print_fn_STAR__temp_val__30546_30759 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30545_30758);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30546_30759);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30544_30757);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30543_30756);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__30755 = function (_,structure,var_args){
var p__30538 = null;
if (arguments.length > 2) {
var G__30762__i = 0, G__30762__a = new Array(arguments.length -  2);
while (G__30762__i < G__30762__a.length) {G__30762__a[G__30762__i] = arguments[G__30762__i + 2]; ++G__30762__i;}
  p__30538 = new cljs.core.IndexedSeq(G__30762__a,0,null);
} 
return G__30755__delegate.call(this,_,structure,p__30538);};
G__30755.cljs$lang$maxFixedArity = 2;
G__30755.cljs$lang$applyTo = (function (arglist__30763){
var _ = cljs.core.first(arglist__30763);
arglist__30763 = cljs.core.next(arglist__30763);
var structure = cljs.core.first(arglist__30763);
var p__30538 = cljs.core.rest(arglist__30763);
return G__30755__delegate(_,structure,p__30538);
});
G__30755.cljs$core$IFn$_invoke$arity$variadic = G__30755__delegate;
return G__30755;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__30764__delegate = function (_,structure,p__30552){
var vec__30553 = p__30552;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30553,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30556_30765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30557_30766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30558_30767 = true;
var _STAR_print_fn_STAR__temp_val__30559_30768 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30558_30767);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30559_30768);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30557_30766);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30556_30765);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__30764 = function (_,structure,var_args){
var p__30552 = null;
if (arguments.length > 2) {
var G__30771__i = 0, G__30771__a = new Array(arguments.length -  2);
while (G__30771__i < G__30771__a.length) {G__30771__a[G__30771__i] = arguments[G__30771__i + 2]; ++G__30771__i;}
  p__30552 = new cljs.core.IndexedSeq(G__30771__a,0,null);
} 
return G__30764__delegate.call(this,_,structure,p__30552);};
G__30764.cljs$lang$maxFixedArity = 2;
G__30764.cljs$lang$applyTo = (function (arglist__30772){
var _ = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var structure = cljs.core.first(arglist__30772);
var p__30552 = cljs.core.rest(arglist__30772);
return G__30764__delegate(_,structure,p__30552);
});
G__30764.cljs$core$IFn$_invoke$arity$variadic = G__30764__delegate;
return G__30764;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__30774__delegate = function (_,structure,p__30565){
var vec__30566 = p__30565;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30566,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30570_30777 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30571_30778 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30572_30779 = true;
var _STAR_print_fn_STAR__temp_val__30573_30780 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30572_30779);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30573_30780);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30571_30778);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30570_30777);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__30774 = function (_,structure,var_args){
var p__30565 = null;
if (arguments.length > 2) {
var G__30782__i = 0, G__30782__a = new Array(arguments.length -  2);
while (G__30782__i < G__30782__a.length) {G__30782__a[G__30782__i] = arguments[G__30782__i + 2]; ++G__30782__i;}
  p__30565 = new cljs.core.IndexedSeq(G__30782__a,0,null);
} 
return G__30774__delegate.call(this,_,structure,p__30565);};
G__30774.cljs$lang$maxFixedArity = 2;
G__30774.cljs$lang$applyTo = (function (arglist__30783){
var _ = cljs.core.first(arglist__30783);
arglist__30783 = cljs.core.next(arglist__30783);
var structure = cljs.core.first(arglist__30783);
var p__30565 = cljs.core.rest(arglist__30783);
return G__30774__delegate(_,structure,p__30565);
});
G__30774.cljs$core$IFn$_invoke$arity$variadic = G__30774__delegate;
return G__30774;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__30785__delegate = function (_,___$1,p__30585){
var vec__30586 = p__30585;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30586,(0),null);
return "";
};
var G__30785 = function (_,___$1,var_args){
var p__30585 = null;
if (arguments.length > 2) {
var G__30791__i = 0, G__30791__a = new Array(arguments.length -  2);
while (G__30791__i < G__30791__a.length) {G__30791__a[G__30791__i] = arguments[G__30791__i + 2]; ++G__30791__i;}
  p__30585 = new cljs.core.IndexedSeq(G__30791__a,0,null);
} 
return G__30785__delegate.call(this,_,___$1,p__30585);};
G__30785.cljs$lang$maxFixedArity = 2;
G__30785.cljs$lang$applyTo = (function (arglist__30794){
var _ = cljs.core.first(arglist__30794);
arglist__30794 = cljs.core.next(arglist__30794);
var ___$1 = cljs.core.first(arglist__30794);
var p__30585 = cljs.core.rest(arglist__30794);
return G__30785__delegate(_,___$1,p__30585);
});
G__30785.cljs$core$IFn$_invoke$arity$variadic = G__30785__delegate;
return G__30785;
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
}catch (e30599){var _ = e30599;
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
var map__30604 = view_state;
var map__30604__$1 = cljs.core.__destructure_map(map__30604);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30604__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
return cljs.core.every_QMARK_((function (p__30617){
var vec__30618 = p__30617;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(1),null);
try{var G__30622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30622) : f.call(null,G__30622));
}catch (e30621){var _ = e30621;
return false;
}}),compiled_filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__30601_SHARP_,p2__30600_SHARP_){
return cljs.core.compare(p2__30600_SHARP_,p1__30601_SHARP_);
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
