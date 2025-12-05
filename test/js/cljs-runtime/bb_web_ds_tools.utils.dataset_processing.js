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
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43449_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__43449_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43450 = cljs.core.get_global_hierarchy;
return (fexpr__43450.cljs$core$IFn$_invoke$arity$0 ? fexpr__43450.cljs$core$IFn$_invoke$arity$0() : fexpr__43450.call(null));
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
var vec__43451 = lines;
var seq__43452 = cljs.core.seq(vec__43451);
var first__43453 = cljs.core.first(seq__43452);
var seq__43452__$1 = cljs.core.next(seq__43452);
var header_line = first__43453;
var first__43453__$1 = cljs.core.first(seq__43452__$1);
var seq__43452__$2 = cljs.core.next(seq__43452__$1);
var ___$2 = first__43453__$1;
var data_lines = seq__43452__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__43455 = arguments.length;
switch (G__43455) {
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
}catch (e43456){if((e43456 instanceof Error)){
var e = e43456;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e43456;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43457 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43457 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43457);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43458 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43458 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43458);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43459 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43459 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43459);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43460 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43460 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43460);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43461_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43461_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__43464 = arguments.length;
switch (G__43464) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43462_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43462_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
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
var G__43467 = structure;
var G__43467__$1 = (((G__43467 instanceof cljs.core.Keyword))?G__43467.fqn:null);
switch (G__43467__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43467__$1)].join('')));

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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43468 = cljs.core.get_global_hierarchy;
return (fexpr__43468.cljs$core$IFn$_invoke$arity$0 ? fexpr__43468.cljs$core$IFn$_invoke$arity$0() : fexpr__43468.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__43604__delegate = function (fmt,structure,p__43469){
var vec__43470 = p__43469;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43470,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__43604 = function (fmt,structure,var_args){
var p__43469 = null;
if (arguments.length > 2) {
var G__43608__i = 0, G__43608__a = new Array(arguments.length -  2);
while (G__43608__i < G__43608__a.length) {G__43608__a[G__43608__i] = arguments[G__43608__i + 2]; ++G__43608__i;}
  p__43469 = new cljs.core.IndexedSeq(G__43608__a,0,null);
} 
return G__43604__delegate.call(this,fmt,structure,p__43469);};
G__43604.cljs$lang$maxFixedArity = 2;
G__43604.cljs$lang$applyTo = (function (arglist__43609){
var fmt = cljs.core.first(arglist__43609);
arglist__43609 = cljs.core.next(arglist__43609);
var structure = cljs.core.first(arglist__43609);
var p__43469 = cljs.core.rest(arglist__43609);
return G__43604__delegate(fmt,structure,p__43469);
});
G__43604.cljs$core$IFn$_invoke$arity$variadic = G__43604__delegate;
return G__43604;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43610__delegate = function (_,___$1,p__43473){
var vec__43474 = p__43473;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43474,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__43610 = function (_,___$1,var_args){
var p__43473 = null;
if (arguments.length > 2) {
var G__43612__i = 0, G__43612__a = new Array(arguments.length -  2);
while (G__43612__i < G__43612__a.length) {G__43612__a[G__43612__i] = arguments[G__43612__i + 2]; ++G__43612__i;}
  p__43473 = new cljs.core.IndexedSeq(G__43612__a,0,null);
} 
return G__43610__delegate.call(this,_,___$1,p__43473);};
G__43610.cljs$lang$maxFixedArity = 2;
G__43610.cljs$lang$applyTo = (function (arglist__43613){
var _ = cljs.core.first(arglist__43613);
arglist__43613 = cljs.core.next(arglist__43613);
var ___$1 = cljs.core.first(arglist__43613);
var p__43473 = cljs.core.rest(arglist__43613);
return G__43610__delegate(_,___$1,p__43473);
});
G__43610.cljs$core$IFn$_invoke$arity$variadic = G__43610__delegate;
return G__43610;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43617__delegate = function (_,___$1,p__43477){
var vec__43478 = p__43477;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__43617 = function (_,___$1,var_args){
var p__43477 = null;
if (arguments.length > 2) {
var G__43618__i = 0, G__43618__a = new Array(arguments.length -  2);
while (G__43618__i < G__43618__a.length) {G__43618__a[G__43618__i] = arguments[G__43618__i + 2]; ++G__43618__i;}
  p__43477 = new cljs.core.IndexedSeq(G__43618__a,0,null);
} 
return G__43617__delegate.call(this,_,___$1,p__43477);};
G__43617.cljs$lang$maxFixedArity = 2;
G__43617.cljs$lang$applyTo = (function (arglist__43619){
var _ = cljs.core.first(arglist__43619);
arglist__43619 = cljs.core.next(arglist__43619);
var ___$1 = cljs.core.first(arglist__43619);
var p__43477 = cljs.core.rest(arglist__43619);
return G__43617__delegate(_,___$1,p__43477);
});
G__43617.cljs$core$IFn$_invoke$arity$variadic = G__43617__delegate;
return G__43617;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43621__delegate = function (_,___$1,p__43481){
var vec__43482 = p__43481;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43621 = function (_,___$1,var_args){
var p__43481 = null;
if (arguments.length > 2) {
var G__43622__i = 0, G__43622__a = new Array(arguments.length -  2);
while (G__43622__i < G__43622__a.length) {G__43622__a[G__43622__i] = arguments[G__43622__i + 2]; ++G__43622__i;}
  p__43481 = new cljs.core.IndexedSeq(G__43622__a,0,null);
} 
return G__43621__delegate.call(this,_,___$1,p__43481);};
G__43621.cljs$lang$maxFixedArity = 2;
G__43621.cljs$lang$applyTo = (function (arglist__43623){
var _ = cljs.core.first(arglist__43623);
arglist__43623 = cljs.core.next(arglist__43623);
var ___$1 = cljs.core.first(arglist__43623);
var p__43481 = cljs.core.rest(arglist__43623);
return G__43621__delegate(_,___$1,p__43481);
});
G__43621.cljs$core$IFn$_invoke$arity$variadic = G__43621__delegate;
return G__43621;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43625__delegate = function (_,structure,p__43485){
var vec__43486 = p__43485;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43625 = function (_,structure,var_args){
var p__43485 = null;
if (arguments.length > 2) {
var G__43630__i = 0, G__43630__a = new Array(arguments.length -  2);
while (G__43630__i < G__43630__a.length) {G__43630__a[G__43630__i] = arguments[G__43630__i + 2]; ++G__43630__i;}
  p__43485 = new cljs.core.IndexedSeq(G__43630__a,0,null);
} 
return G__43625__delegate.call(this,_,structure,p__43485);};
G__43625.cljs$lang$maxFixedArity = 2;
G__43625.cljs$lang$applyTo = (function (arglist__43631){
var _ = cljs.core.first(arglist__43631);
arglist__43631 = cljs.core.next(arglist__43631);
var structure = cljs.core.first(arglist__43631);
var p__43485 = cljs.core.rest(arglist__43631);
return G__43625__delegate(_,structure,p__43485);
});
G__43625.cljs$core$IFn$_invoke$arity$variadic = G__43625__delegate;
return G__43625;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43632__delegate = function (_,structure,p__43489){
var vec__43490 = p__43489;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43490,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43632 = function (_,structure,var_args){
var p__43489 = null;
if (arguments.length > 2) {
var G__43633__i = 0, G__43633__a = new Array(arguments.length -  2);
while (G__43633__i < G__43633__a.length) {G__43633__a[G__43633__i] = arguments[G__43633__i + 2]; ++G__43633__i;}
  p__43489 = new cljs.core.IndexedSeq(G__43633__a,0,null);
} 
return G__43632__delegate.call(this,_,structure,p__43489);};
G__43632.cljs$lang$maxFixedArity = 2;
G__43632.cljs$lang$applyTo = (function (arglist__43634){
var _ = cljs.core.first(arglist__43634);
arglist__43634 = cljs.core.next(arglist__43634);
var structure = cljs.core.first(arglist__43634);
var p__43489 = cljs.core.rest(arglist__43634);
return G__43632__delegate(_,structure,p__43489);
});
G__43632.cljs$core$IFn$_invoke$arity$variadic = G__43632__delegate;
return G__43632;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43635__delegate = function (_,structure,p__43493){
var vec__43494 = p__43493;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43494,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43635 = function (_,structure,var_args){
var p__43493 = null;
if (arguments.length > 2) {
var G__43636__i = 0, G__43636__a = new Array(arguments.length -  2);
while (G__43636__i < G__43636__a.length) {G__43636__a[G__43636__i] = arguments[G__43636__i + 2]; ++G__43636__i;}
  p__43493 = new cljs.core.IndexedSeq(G__43636__a,0,null);
} 
return G__43635__delegate.call(this,_,structure,p__43493);};
G__43635.cljs$lang$maxFixedArity = 2;
G__43635.cljs$lang$applyTo = (function (arglist__43637){
var _ = cljs.core.first(arglist__43637);
arglist__43637 = cljs.core.next(arglist__43637);
var structure = cljs.core.first(arglist__43637);
var p__43493 = cljs.core.rest(arglist__43637);
return G__43635__delegate(_,structure,p__43493);
});
G__43635.cljs$core$IFn$_invoke$arity$variadic = G__43635__delegate;
return G__43635;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43638__delegate = function (_,structure,p__43498){
var vec__43499 = p__43498;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43499,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43502_43643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43503_43644 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43504_43645 = true;
var _STAR_print_fn_STAR__temp_val__43505_43646 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43504_43645);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43505_43646);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43503_43644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43502_43643);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43638 = function (_,structure,var_args){
var p__43498 = null;
if (arguments.length > 2) {
var G__43647__i = 0, G__43647__a = new Array(arguments.length -  2);
while (G__43647__i < G__43647__a.length) {G__43647__a[G__43647__i] = arguments[G__43647__i + 2]; ++G__43647__i;}
  p__43498 = new cljs.core.IndexedSeq(G__43647__a,0,null);
} 
return G__43638__delegate.call(this,_,structure,p__43498);};
G__43638.cljs$lang$maxFixedArity = 2;
G__43638.cljs$lang$applyTo = (function (arglist__43648){
var _ = cljs.core.first(arglist__43648);
arglist__43648 = cljs.core.next(arglist__43648);
var structure = cljs.core.first(arglist__43648);
var p__43498 = cljs.core.rest(arglist__43648);
return G__43638__delegate(_,structure,p__43498);
});
G__43638.cljs$core$IFn$_invoke$arity$variadic = G__43638__delegate;
return G__43638;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43649__delegate = function (_,structure,p__43513){
var vec__43514 = p__43513;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43514,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43517_43650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43518_43651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43519_43652 = true;
var _STAR_print_fn_STAR__temp_val__43520_43653 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43519_43652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43520_43653);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43518_43651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43517_43650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43649 = function (_,structure,var_args){
var p__43513 = null;
if (arguments.length > 2) {
var G__43658__i = 0, G__43658__a = new Array(arguments.length -  2);
while (G__43658__i < G__43658__a.length) {G__43658__a[G__43658__i] = arguments[G__43658__i + 2]; ++G__43658__i;}
  p__43513 = new cljs.core.IndexedSeq(G__43658__a,0,null);
} 
return G__43649__delegate.call(this,_,structure,p__43513);};
G__43649.cljs$lang$maxFixedArity = 2;
G__43649.cljs$lang$applyTo = (function (arglist__43659){
var _ = cljs.core.first(arglist__43659);
arglist__43659 = cljs.core.next(arglist__43659);
var structure = cljs.core.first(arglist__43659);
var p__43513 = cljs.core.rest(arglist__43659);
return G__43649__delegate(_,structure,p__43513);
});
G__43649.cljs$core$IFn$_invoke$arity$variadic = G__43649__delegate;
return G__43649;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43660__delegate = function (_,structure,p__43521){
var vec__43522 = p__43521;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43522,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43525_43661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43526_43662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43527_43663 = true;
var _STAR_print_fn_STAR__temp_val__43528_43664 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43527_43663);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43528_43664);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43526_43662);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43525_43661);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43660 = function (_,structure,var_args){
var p__43521 = null;
if (arguments.length > 2) {
var G__43666__i = 0, G__43666__a = new Array(arguments.length -  2);
while (G__43666__i < G__43666__a.length) {G__43666__a[G__43666__i] = arguments[G__43666__i + 2]; ++G__43666__i;}
  p__43521 = new cljs.core.IndexedSeq(G__43666__a,0,null);
} 
return G__43660__delegate.call(this,_,structure,p__43521);};
G__43660.cljs$lang$maxFixedArity = 2;
G__43660.cljs$lang$applyTo = (function (arglist__43670){
var _ = cljs.core.first(arglist__43670);
arglist__43670 = cljs.core.next(arglist__43670);
var structure = cljs.core.first(arglist__43670);
var p__43521 = cljs.core.rest(arglist__43670);
return G__43660__delegate(_,structure,p__43521);
});
G__43660.cljs$core$IFn$_invoke$arity$variadic = G__43660__delegate;
return G__43660;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__43671__delegate = function (_,___$1,p__43533){
var vec__43534 = p__43533;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43534,(0),null);
return "";
};
var G__43671 = function (_,___$1,var_args){
var p__43533 = null;
if (arguments.length > 2) {
var G__43672__i = 0, G__43672__a = new Array(arguments.length -  2);
while (G__43672__i < G__43672__a.length) {G__43672__a[G__43672__i] = arguments[G__43672__i + 2]; ++G__43672__i;}
  p__43533 = new cljs.core.IndexedSeq(G__43672__a,0,null);
} 
return G__43671__delegate.call(this,_,___$1,p__43533);};
G__43671.cljs$lang$maxFixedArity = 2;
G__43671.cljs$lang$applyTo = (function (arglist__43673){
var _ = cljs.core.first(arglist__43673);
arglist__43673 = cljs.core.next(arglist__43673);
var ___$1 = cljs.core.first(arglist__43673);
var p__43533 = cljs.core.rest(arglist__43673);
return G__43671__delegate(_,___$1,p__43533);
});
G__43671.cljs$core$IFn$_invoke$arity$variadic = G__43671__delegate;
return G__43671;
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
var map__43539 = view_state;
var map__43539__$1 = cljs.core.__destructure_map(map__43539);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43539__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var filtered_data = ((cljs.core.seq(filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__43540){
var vec__43541 = p__43540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43541,(1),null);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k))),clojure.string.lower_case(v));
}),filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__43538_SHARP_,p2__43537_SHARP_){
return cljs.core.compare(p2__43537_SHARP_,p1__43538_SHARP_);
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
