goog.provide('bb_web_ds_tools.utils.dataset_processing');
bb_web_ds_tools.utils.dataset_processing.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660)," | ",new cljs.core.Keyword(null,"row-start","row-start",-1075739176),"| ",new cljs.core.Keyword(null,"row-end","row-end",231209112)," |",new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542),"---"], null),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"JSON Parse Error"], null)], null);
bb_web_ds_tools.utils.dataset_processing.normalize_columnar = (function bb_web_ds_tools$utils$dataset_processing$normalize_columnar(data){
var cols = cljs.core.keys(data);
var vals_seq = cljs.core.vals(data);
var cnt = ((cljs.core.seq(vals_seq))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vals_seq)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43456_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__43456_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43457 = cljs.core.get_global_hierarchy;
return (fexpr__43457.cljs$core$IFn$_invoke$arity$0 ? fexpr__43457.cljs$core$IFn$_invoke$arity$0() : fexpr__43457.call(null));
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
var vec__43460 = lines;
var seq__43461 = cljs.core.seq(vec__43460);
var first__43462 = cljs.core.first(seq__43461);
var seq__43461__$1 = cljs.core.next(seq__43461);
var header_line = first__43462;
var first__43462__$1 = cljs.core.first(seq__43461__$1);
var seq__43461__$2 = cljs.core.next(seq__43461__$1);
var ___$2 = first__43462__$1;
var data_lines = seq__43461__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__43464 = arguments.length;
switch (G__43464) {
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
}catch (e43465){if((e43465 instanceof Error)){
var e = e43465;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e43465;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43466 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43466 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43466);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43467 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__43467 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43467);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__43468 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43468 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43468);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__43469 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__43469 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43469);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43470_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43470_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__43474 = arguments.length;
switch (G__43474) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43472_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43472_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__43487 = arguments.length;
switch (G__43487) {
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
var G__43488 = structure;
var G__43488__$1 = (((G__43488 instanceof cljs.core.Keyword))?G__43488.fqn:null);
switch (G__43488__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43488__$1)].join('')));

}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.example_data !== 'undefined')){
} else {
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43497 = cljs.core.get_global_hierarchy;
return (fexpr__43497.cljs$core$IFn$_invoke$arity$0 ? fexpr__43497.cljs$core$IFn$_invoke$arity$0() : fexpr__43497.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__43640__delegate = function (fmt,structure,p__43500){
var vec__43501 = p__43500;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__43640 = function (fmt,structure,var_args){
var p__43500 = null;
if (arguments.length > 2) {
var G__43641__i = 0, G__43641__a = new Array(arguments.length -  2);
while (G__43641__i < G__43641__a.length) {G__43641__a[G__43641__i] = arguments[G__43641__i + 2]; ++G__43641__i;}
  p__43500 = new cljs.core.IndexedSeq(G__43641__a,0,null);
} 
return G__43640__delegate.call(this,fmt,structure,p__43500);};
G__43640.cljs$lang$maxFixedArity = 2;
G__43640.cljs$lang$applyTo = (function (arglist__43642){
var fmt = cljs.core.first(arglist__43642);
arglist__43642 = cljs.core.next(arglist__43642);
var structure = cljs.core.first(arglist__43642);
var p__43500 = cljs.core.rest(arglist__43642);
return G__43640__delegate(fmt,structure,p__43500);
});
G__43640.cljs$core$IFn$_invoke$arity$variadic = G__43640__delegate;
return G__43640;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43644__delegate = function (_,___$1,p__43509){
var vec__43510 = p__43509;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__43644 = function (_,___$1,var_args){
var p__43509 = null;
if (arguments.length > 2) {
var G__43648__i = 0, G__43648__a = new Array(arguments.length -  2);
while (G__43648__i < G__43648__a.length) {G__43648__a[G__43648__i] = arguments[G__43648__i + 2]; ++G__43648__i;}
  p__43509 = new cljs.core.IndexedSeq(G__43648__a,0,null);
} 
return G__43644__delegate.call(this,_,___$1,p__43509);};
G__43644.cljs$lang$maxFixedArity = 2;
G__43644.cljs$lang$applyTo = (function (arglist__43649){
var _ = cljs.core.first(arglist__43649);
arglist__43649 = cljs.core.next(arglist__43649);
var ___$1 = cljs.core.first(arglist__43649);
var p__43509 = cljs.core.rest(arglist__43649);
return G__43644__delegate(_,___$1,p__43509);
});
G__43644.cljs$core$IFn$_invoke$arity$variadic = G__43644__delegate;
return G__43644;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43650__delegate = function (_,___$1,p__43513){
var vec__43514 = p__43513;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43514,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__43650 = function (_,___$1,var_args){
var p__43513 = null;
if (arguments.length > 2) {
var G__43651__i = 0, G__43651__a = new Array(arguments.length -  2);
while (G__43651__i < G__43651__a.length) {G__43651__a[G__43651__i] = arguments[G__43651__i + 2]; ++G__43651__i;}
  p__43513 = new cljs.core.IndexedSeq(G__43651__a,0,null);
} 
return G__43650__delegate.call(this,_,___$1,p__43513);};
G__43650.cljs$lang$maxFixedArity = 2;
G__43650.cljs$lang$applyTo = (function (arglist__43653){
var _ = cljs.core.first(arglist__43653);
arglist__43653 = cljs.core.next(arglist__43653);
var ___$1 = cljs.core.first(arglist__43653);
var p__43513 = cljs.core.rest(arglist__43653);
return G__43650__delegate(_,___$1,p__43513);
});
G__43650.cljs$core$IFn$_invoke$arity$variadic = G__43650__delegate;
return G__43650;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43654__delegate = function (_,___$1,p__43517){
var vec__43518 = p__43517;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43518,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43654 = function (_,___$1,var_args){
var p__43517 = null;
if (arguments.length > 2) {
var G__43660__i = 0, G__43660__a = new Array(arguments.length -  2);
while (G__43660__i < G__43660__a.length) {G__43660__a[G__43660__i] = arguments[G__43660__i + 2]; ++G__43660__i;}
  p__43517 = new cljs.core.IndexedSeq(G__43660__a,0,null);
} 
return G__43654__delegate.call(this,_,___$1,p__43517);};
G__43654.cljs$lang$maxFixedArity = 2;
G__43654.cljs$lang$applyTo = (function (arglist__43661){
var _ = cljs.core.first(arglist__43661);
arglist__43661 = cljs.core.next(arglist__43661);
var ___$1 = cljs.core.first(arglist__43661);
var p__43517 = cljs.core.rest(arglist__43661);
return G__43654__delegate(_,___$1,p__43517);
});
G__43654.cljs$core$IFn$_invoke$arity$variadic = G__43654__delegate;
return G__43654;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43662__delegate = function (_,structure,p__43522){
var vec__43523 = p__43522;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43523,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43662 = function (_,structure,var_args){
var p__43522 = null;
if (arguments.length > 2) {
var G__43664__i = 0, G__43664__a = new Array(arguments.length -  2);
while (G__43664__i < G__43664__a.length) {G__43664__a[G__43664__i] = arguments[G__43664__i + 2]; ++G__43664__i;}
  p__43522 = new cljs.core.IndexedSeq(G__43664__a,0,null);
} 
return G__43662__delegate.call(this,_,structure,p__43522);};
G__43662.cljs$lang$maxFixedArity = 2;
G__43662.cljs$lang$applyTo = (function (arglist__43665){
var _ = cljs.core.first(arglist__43665);
arglist__43665 = cljs.core.next(arglist__43665);
var structure = cljs.core.first(arglist__43665);
var p__43522 = cljs.core.rest(arglist__43665);
return G__43662__delegate(_,structure,p__43522);
});
G__43662.cljs$core$IFn$_invoke$arity$variadic = G__43662__delegate;
return G__43662;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43666__delegate = function (_,structure,p__43526){
var vec__43527 = p__43526;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43527,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43666 = function (_,structure,var_args){
var p__43526 = null;
if (arguments.length > 2) {
var G__43667__i = 0, G__43667__a = new Array(arguments.length -  2);
while (G__43667__i < G__43667__a.length) {G__43667__a[G__43667__i] = arguments[G__43667__i + 2]; ++G__43667__i;}
  p__43526 = new cljs.core.IndexedSeq(G__43667__a,0,null);
} 
return G__43666__delegate.call(this,_,structure,p__43526);};
G__43666.cljs$lang$maxFixedArity = 2;
G__43666.cljs$lang$applyTo = (function (arglist__43668){
var _ = cljs.core.first(arglist__43668);
arglist__43668 = cljs.core.next(arglist__43668);
var structure = cljs.core.first(arglist__43668);
var p__43526 = cljs.core.rest(arglist__43668);
return G__43666__delegate(_,structure,p__43526);
});
G__43666.cljs$core$IFn$_invoke$arity$variadic = G__43666__delegate;
return G__43666;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43670__delegate = function (_,structure,p__43548){
var vec__43549 = p__43548;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43549,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__43670 = function (_,structure,var_args){
var p__43548 = null;
if (arguments.length > 2) {
var G__43675__i = 0, G__43675__a = new Array(arguments.length -  2);
while (G__43675__i < G__43675__a.length) {G__43675__a[G__43675__i] = arguments[G__43675__i + 2]; ++G__43675__i;}
  p__43548 = new cljs.core.IndexedSeq(G__43675__a,0,null);
} 
return G__43670__delegate.call(this,_,structure,p__43548);};
G__43670.cljs$lang$maxFixedArity = 2;
G__43670.cljs$lang$applyTo = (function (arglist__43676){
var _ = cljs.core.first(arglist__43676);
arglist__43676 = cljs.core.next(arglist__43676);
var structure = cljs.core.first(arglist__43676);
var p__43548 = cljs.core.rest(arglist__43676);
return G__43670__delegate(_,structure,p__43548);
});
G__43670.cljs$core$IFn$_invoke$arity$variadic = G__43670__delegate;
return G__43670;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__43678__delegate = function (_,structure,p__43558){
var vec__43559 = p__43558;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43559,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43562_43679 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43563_43680 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43564_43681 = true;
var _STAR_print_fn_STAR__temp_val__43565_43682 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43564_43681);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43565_43682);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43563_43680);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43562_43679);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43678 = function (_,structure,var_args){
var p__43558 = null;
if (arguments.length > 2) {
var G__43684__i = 0, G__43684__a = new Array(arguments.length -  2);
while (G__43684__i < G__43684__a.length) {G__43684__a[G__43684__i] = arguments[G__43684__i + 2]; ++G__43684__i;}
  p__43558 = new cljs.core.IndexedSeq(G__43684__a,0,null);
} 
return G__43678__delegate.call(this,_,structure,p__43558);};
G__43678.cljs$lang$maxFixedArity = 2;
G__43678.cljs$lang$applyTo = (function (arglist__43685){
var _ = cljs.core.first(arglist__43685);
arglist__43685 = cljs.core.next(arglist__43685);
var structure = cljs.core.first(arglist__43685);
var p__43558 = cljs.core.rest(arglist__43685);
return G__43678__delegate(_,structure,p__43558);
});
G__43678.cljs$core$IFn$_invoke$arity$variadic = G__43678__delegate;
return G__43678;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__43686__delegate = function (_,structure,p__43566){
var vec__43567 = p__43566;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43567,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43570_43687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43571_43688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43572_43689 = true;
var _STAR_print_fn_STAR__temp_val__43573_43690 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43572_43689);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43573_43690);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43571_43688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43570_43687);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43686 = function (_,structure,var_args){
var p__43566 = null;
if (arguments.length > 2) {
var G__43691__i = 0, G__43691__a = new Array(arguments.length -  2);
while (G__43691__i < G__43691__a.length) {G__43691__a[G__43691__i] = arguments[G__43691__i + 2]; ++G__43691__i;}
  p__43566 = new cljs.core.IndexedSeq(G__43691__a,0,null);
} 
return G__43686__delegate.call(this,_,structure,p__43566);};
G__43686.cljs$lang$maxFixedArity = 2;
G__43686.cljs$lang$applyTo = (function (arglist__43692){
var _ = cljs.core.first(arglist__43692);
arglist__43692 = cljs.core.next(arglist__43692);
var structure = cljs.core.first(arglist__43692);
var p__43566 = cljs.core.rest(arglist__43692);
return G__43686__delegate(_,structure,p__43566);
});
G__43686.cljs$core$IFn$_invoke$arity$variadic = G__43686__delegate;
return G__43686;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__43693__delegate = function (_,structure,p__43578){
var vec__43579 = p__43578;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43579,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43583_43694 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43584_43695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43585_43696 = true;
var _STAR_print_fn_STAR__temp_val__43586_43697 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43585_43696);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43586_43697);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43584_43695);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43583_43694);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__43693 = function (_,structure,var_args){
var p__43578 = null;
if (arguments.length > 2) {
var G__43698__i = 0, G__43698__a = new Array(arguments.length -  2);
while (G__43698__i < G__43698__a.length) {G__43698__a[G__43698__i] = arguments[G__43698__i + 2]; ++G__43698__i;}
  p__43578 = new cljs.core.IndexedSeq(G__43698__a,0,null);
} 
return G__43693__delegate.call(this,_,structure,p__43578);};
G__43693.cljs$lang$maxFixedArity = 2;
G__43693.cljs$lang$applyTo = (function (arglist__43699){
var _ = cljs.core.first(arglist__43699);
arglist__43699 = cljs.core.next(arglist__43699);
var structure = cljs.core.first(arglist__43699);
var p__43578 = cljs.core.rest(arglist__43699);
return G__43693__delegate(_,structure,p__43578);
});
G__43693.cljs$core$IFn$_invoke$arity$variadic = G__43693__delegate;
return G__43693;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__43705__delegate = function (_,___$1,p__43590){
var vec__43591 = p__43590;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43591,(0),null);
return "";
};
var G__43705 = function (_,___$1,var_args){
var p__43590 = null;
if (arguments.length > 2) {
var G__43709__i = 0, G__43709__a = new Array(arguments.length -  2);
while (G__43709__i < G__43709__a.length) {G__43709__a[G__43709__i] = arguments[G__43709__i + 2]; ++G__43709__i;}
  p__43590 = new cljs.core.IndexedSeq(G__43709__a,0,null);
} 
return G__43705__delegate.call(this,_,___$1,p__43590);};
G__43705.cljs$lang$maxFixedArity = 2;
G__43705.cljs$lang$applyTo = (function (arglist__43710){
var _ = cljs.core.first(arglist__43710);
arglist__43710 = cljs.core.next(arglist__43710);
var ___$1 = cljs.core.first(arglist__43710);
var p__43590 = cljs.core.rest(arglist__43710);
return G__43705__delegate(_,___$1,p__43590);
});
G__43705.cljs$core$IFn$_invoke$arity$variadic = G__43705__delegate;
return G__43705;
})()
);
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,view_state){
var map__43600 = view_state;
var map__43600__$1 = cljs.core.__destructure_map(map__43600);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43600__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var filtered_data = ((cljs.core.seq(filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__43607){
var vec__43608 = p__43607;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(1),null);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k))),clojure.string.lower_case(v));
}),filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__43599_SHARP_,p2__43598_SHARP_){
return cljs.core.compare(p2__43598_SHARP_,p1__43599_SHARP_);
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
