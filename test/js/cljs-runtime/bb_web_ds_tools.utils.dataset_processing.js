goog.provide('bb_web_ds_tools.utils.dataset_processing');
bb_web_ds_tools.utils.dataset_processing.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660)," | ",new cljs.core.Keyword(null,"row-start","row-start",-1075739176),"| ",new cljs.core.Keyword(null,"row-end","row-end",231209112)," |",new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542),"---"], null),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"JSON Parse Error"], null)], null);
bb_web_ds_tools.utils.dataset_processing.normalize_columnar = (function bb_web_ds_tools$utils$dataset_processing$normalize_columnar(data){
var cols = cljs.core.keys(data);
var vals_seq = cljs.core.vals(data);
var cnt = ((cljs.core.seq(vals_seq))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vals_seq)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30808_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__30808_SHARP_),i);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30810 = cljs.core.get_global_hierarchy;
return (fexpr__30810.cljs$core$IFn$_invoke$arity$0 ? fexpr__30810.cljs$core$IFn$_invoke$arity$0() : fexpr__30810.call(null));
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
var vec__30811 = lines;
var seq__30812 = cljs.core.seq(vec__30811);
var first__30813 = cljs.core.first(seq__30812);
var seq__30812__$1 = cljs.core.next(seq__30812);
var header_line = first__30813;
var first__30813__$1 = cljs.core.first(seq__30812__$1);
var seq__30812__$2 = cljs.core.next(seq__30812__$1);
var ___$2 = first__30813__$1;
var data_lines = seq__30812__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,parse_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,parse_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_json = (function bb_web_ds_tools$utils$dataset_processing$parse_json(var_args){
var G__30819 = arguments.length;
switch (G__30819) {
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
}catch (e30820){if((e30820 instanceof Error)){
var e = e30820;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e30820;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__30822 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__30822 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__30822);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__30826 = bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$core$IFn$_invoke$arity$1(text);
if((G__30826 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__30826);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var G__30827 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__30827 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__30827);
}
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (_,___$1,text){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function (_,___$1,text){
var G__30828 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(text);
if((G__30828 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__30828);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30829_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30829_SHARP_);
}),ks);
}),rows)));
});
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__30832 = arguments.length;
switch (G__30832) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30830_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30830_SHARP_);
}),ks)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
}),rows);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(header,cljs.core.cons(separator,data_lines)));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__30837 = arguments.length;
switch (G__30837) {
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
var G__30841 = structure;
var G__30841__$1 = (((G__30841 instanceof cljs.core.Keyword))?G__30841.fqn:null);
switch (G__30841__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30841__$1)].join('')));

}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.utils !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing !== 'undefined') && (typeof bb_web_ds_tools.utils.dataset_processing.example_data !== 'undefined')){
} else {
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30842 = cljs.core.get_global_hierarchy;
return (fexpr__30842.cljs$core$IFn$_invoke$arity$0 ? fexpr__30842.cljs$core$IFn$_invoke$arity$0() : fexpr__30842.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__30958__delegate = function (fmt,structure,p__30843){
var vec__30844 = p__30843;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30844,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
};
var G__30958 = function (fmt,structure,var_args){
var p__30843 = null;
if (arguments.length > 2) {
var G__30959__i = 0, G__30959__a = new Array(arguments.length -  2);
while (G__30959__i < G__30959__a.length) {G__30959__a[G__30959__i] = arguments[G__30959__i + 2]; ++G__30959__i;}
  p__30843 = new cljs.core.IndexedSeq(G__30959__a,0,null);
} 
return G__30958__delegate.call(this,fmt,structure,p__30843);};
G__30958.cljs$lang$maxFixedArity = 2;
G__30958.cljs$lang$applyTo = (function (arglist__30960){
var fmt = cljs.core.first(arglist__30960);
arglist__30960 = cljs.core.next(arglist__30960);
var structure = cljs.core.first(arglist__30960);
var p__30843 = cljs.core.rest(arglist__30960);
return G__30958__delegate(fmt,structure,p__30843);
});
G__30958.cljs$core$IFn$_invoke$arity$variadic = G__30958__delegate;
return G__30958;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30961__delegate = function (_,___$1,p__30848){
var vec__30849 = p__30848;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30849,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__30961 = function (_,___$1,var_args){
var p__30848 = null;
if (arguments.length > 2) {
var G__30962__i = 0, G__30962__a = new Array(arguments.length -  2);
while (G__30962__i < G__30962__a.length) {G__30962__a[G__30962__i] = arguments[G__30962__i + 2]; ++G__30962__i;}
  p__30848 = new cljs.core.IndexedSeq(G__30962__a,0,null);
} 
return G__30961__delegate.call(this,_,___$1,p__30848);};
G__30961.cljs$lang$maxFixedArity = 2;
G__30961.cljs$lang$applyTo = (function (arglist__30963){
var _ = cljs.core.first(arglist__30963);
arglist__30963 = cljs.core.next(arglist__30963);
var ___$1 = cljs.core.first(arglist__30963);
var p__30848 = cljs.core.rest(arglist__30963);
return G__30961__delegate(_,___$1,p__30848);
});
G__30961.cljs$core$IFn$_invoke$arity$variadic = G__30961__delegate;
return G__30961;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30965__delegate = function (_,___$1,p__30853){
var vec__30854 = p__30853;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30854,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__30965 = function (_,___$1,var_args){
var p__30853 = null;
if (arguments.length > 2) {
var G__30966__i = 0, G__30966__a = new Array(arguments.length -  2);
while (G__30966__i < G__30966__a.length) {G__30966__a[G__30966__i] = arguments[G__30966__i + 2]; ++G__30966__i;}
  p__30853 = new cljs.core.IndexedSeq(G__30966__a,0,null);
} 
return G__30965__delegate.call(this,_,___$1,p__30853);};
G__30965.cljs$lang$maxFixedArity = 2;
G__30965.cljs$lang$applyTo = (function (arglist__30967){
var _ = cljs.core.first(arglist__30967);
arglist__30967 = cljs.core.next(arglist__30967);
var ___$1 = cljs.core.first(arglist__30967);
var p__30853 = cljs.core.rest(arglist__30967);
return G__30965__delegate(_,___$1,p__30853);
});
G__30965.cljs$core$IFn$_invoke$arity$variadic = G__30965__delegate;
return G__30965;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30968__delegate = function (_,___$1,p__30859){
var vec__30860 = p__30859;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30860,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30968 = function (_,___$1,var_args){
var p__30859 = null;
if (arguments.length > 2) {
var G__30970__i = 0, G__30970__a = new Array(arguments.length -  2);
while (G__30970__i < G__30970__a.length) {G__30970__a[G__30970__i] = arguments[G__30970__i + 2]; ++G__30970__i;}
  p__30859 = new cljs.core.IndexedSeq(G__30970__a,0,null);
} 
return G__30968__delegate.call(this,_,___$1,p__30859);};
G__30968.cljs$lang$maxFixedArity = 2;
G__30968.cljs$lang$applyTo = (function (arglist__30971){
var _ = cljs.core.first(arglist__30971);
arglist__30971 = cljs.core.next(arglist__30971);
var ___$1 = cljs.core.first(arglist__30971);
var p__30859 = cljs.core.rest(arglist__30971);
return G__30968__delegate(_,___$1,p__30859);
});
G__30968.cljs$core$IFn$_invoke$arity$variadic = G__30968__delegate;
return G__30968;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__30972__delegate = function (_,structure,p__30864){
var vec__30865 = p__30864;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30865,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30972 = function (_,structure,var_args){
var p__30864 = null;
if (arguments.length > 2) {
var G__30974__i = 0, G__30974__a = new Array(arguments.length -  2);
while (G__30974__i < G__30974__a.length) {G__30974__a[G__30974__i] = arguments[G__30974__i + 2]; ++G__30974__i;}
  p__30864 = new cljs.core.IndexedSeq(G__30974__a,0,null);
} 
return G__30972__delegate.call(this,_,structure,p__30864);};
G__30972.cljs$lang$maxFixedArity = 2;
G__30972.cljs$lang$applyTo = (function (arglist__30975){
var _ = cljs.core.first(arglist__30975);
arglist__30975 = cljs.core.next(arglist__30975);
var structure = cljs.core.first(arglist__30975);
var p__30864 = cljs.core.rest(arglist__30975);
return G__30972__delegate(_,structure,p__30864);
});
G__30972.cljs$core$IFn$_invoke$arity$variadic = G__30972__delegate;
return G__30972;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__30976__delegate = function (_,structure,p__30868){
var vec__30869 = p__30868;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30869,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30976 = function (_,structure,var_args){
var p__30868 = null;
if (arguments.length > 2) {
var G__30977__i = 0, G__30977__a = new Array(arguments.length -  2);
while (G__30977__i < G__30977__a.length) {G__30977__a[G__30977__i] = arguments[G__30977__i + 2]; ++G__30977__i;}
  p__30868 = new cljs.core.IndexedSeq(G__30977__a,0,null);
} 
return G__30976__delegate.call(this,_,structure,p__30868);};
G__30976.cljs$lang$maxFixedArity = 2;
G__30976.cljs$lang$applyTo = (function (arglist__30995){
var _ = cljs.core.first(arglist__30995);
arglist__30995 = cljs.core.next(arglist__30995);
var structure = cljs.core.first(arglist__30995);
var p__30868 = cljs.core.rest(arglist__30995);
return G__30976__delegate(_,structure,p__30868);
});
G__30976.cljs$core$IFn$_invoke$arity$variadic = G__30976__delegate;
return G__30976;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__30996__delegate = function (_,structure,p__30872){
var vec__30873 = p__30872;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(0),null);
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure),new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__30996 = function (_,structure,var_args){
var p__30872 = null;
if (arguments.length > 2) {
var G__31001__i = 0, G__31001__a = new Array(arguments.length -  2);
while (G__31001__i < G__31001__a.length) {G__31001__a[G__31001__i] = arguments[G__31001__i + 2]; ++G__31001__i;}
  p__30872 = new cljs.core.IndexedSeq(G__31001__a,0,null);
} 
return G__30996__delegate.call(this,_,structure,p__30872);};
G__30996.cljs$lang$maxFixedArity = 2;
G__30996.cljs$lang$applyTo = (function (arglist__31002){
var _ = cljs.core.first(arglist__31002);
arglist__31002 = cljs.core.next(arglist__31002);
var structure = cljs.core.first(arglist__31002);
var p__30872 = cljs.core.rest(arglist__31002);
return G__30996__delegate(_,structure,p__30872);
});
G__30996.cljs$core$IFn$_invoke$arity$variadic = G__30996__delegate;
return G__30996;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__31003__delegate = function (_,structure,p__30876){
var vec__30877 = p__30876;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30877,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30880_31004 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30881_31005 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30882_31006 = true;
var _STAR_print_fn_STAR__temp_val__30883_31007 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30882_31006);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30883_31007);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30881_31005);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30880_31004);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__31003 = function (_,structure,var_args){
var p__30876 = null;
if (arguments.length > 2) {
var G__31008__i = 0, G__31008__a = new Array(arguments.length -  2);
while (G__31008__i < G__31008__a.length) {G__31008__a[G__31008__i] = arguments[G__31008__i + 2]; ++G__31008__i;}
  p__30876 = new cljs.core.IndexedSeq(G__31008__a,0,null);
} 
return G__31003__delegate.call(this,_,structure,p__30876);};
G__31003.cljs$lang$maxFixedArity = 2;
G__31003.cljs$lang$applyTo = (function (arglist__31010){
var _ = cljs.core.first(arglist__31010);
arglist__31010 = cljs.core.next(arglist__31010);
var structure = cljs.core.first(arglist__31010);
var p__30876 = cljs.core.rest(arglist__31010);
return G__31003__delegate(_,structure,p__30876);
});
G__31003.cljs$core$IFn$_invoke$arity$variadic = G__31003__delegate;
return G__31003;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function() { 
var G__31011__delegate = function (_,structure,p__30884){
var vec__30885 = p__30884;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30885,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30888_31015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30889_31016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30890_31017 = true;
var _STAR_print_fn_STAR__temp_val__30891_31018 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30890_31017);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30891_31018);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30889_31016);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30888_31015);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__31011 = function (_,structure,var_args){
var p__30884 = null;
if (arguments.length > 2) {
var G__31019__i = 0, G__31019__a = new Array(arguments.length -  2);
while (G__31019__i < G__31019__a.length) {G__31019__a[G__31019__i] = arguments[G__31019__i + 2]; ++G__31019__i;}
  p__30884 = new cljs.core.IndexedSeq(G__31019__a,0,null);
} 
return G__31011__delegate.call(this,_,structure,p__30884);};
G__31011.cljs$lang$maxFixedArity = 2;
G__31011.cljs$lang$applyTo = (function (arglist__31020){
var _ = cljs.core.first(arglist__31020);
arglist__31020 = cljs.core.next(arglist__31020);
var structure = cljs.core.first(arglist__31020);
var p__30884 = cljs.core.rest(arglist__31020);
return G__31011__delegate(_,structure,p__30884);
});
G__31011.cljs$core$IFn$_invoke$arity$variadic = G__31011__delegate;
return G__31011;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null),(function() { 
var G__31021__delegate = function (_,structure,p__30896){
var vec__30897 = p__30896;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30897,(0),null);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30900_31022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30901_31024 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30902_31025 = true;
var _STAR_print_fn_STAR__temp_val__30903_31026 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30902_31025);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30903_31026);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.get_structured_data(structure));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30901_31024);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30900_31022);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
};
var G__31021 = function (_,structure,var_args){
var p__30896 = null;
if (arguments.length > 2) {
var G__31030__i = 0, G__31030__a = new Array(arguments.length -  2);
while (G__31030__i < G__31030__a.length) {G__31030__a[G__31030__i] = arguments[G__31030__i + 2]; ++G__31030__i;}
  p__30896 = new cljs.core.IndexedSeq(G__31030__a,0,null);
} 
return G__31021__delegate.call(this,_,structure,p__30896);};
G__31021.cljs$lang$maxFixedArity = 2;
G__31021.cljs$lang$applyTo = (function (arglist__31031){
var _ = cljs.core.first(arglist__31031);
arglist__31031 = cljs.core.next(arglist__31031);
var structure = cljs.core.first(arglist__31031);
var p__30896 = cljs.core.rest(arglist__31031);
return G__31021__delegate(_,structure,p__30896);
});
G__31021.cljs$core$IFn$_invoke$arity$variadic = G__31021__delegate;
return G__31021;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__31032__delegate = function (_,___$1,p__30904){
var vec__30905 = p__30904;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(0),null);
return "";
};
var G__31032 = function (_,___$1,var_args){
var p__30904 = null;
if (arguments.length > 2) {
var G__31033__i = 0, G__31033__a = new Array(arguments.length -  2);
while (G__31033__i < G__31033__a.length) {G__31033__a[G__31033__i] = arguments[G__31033__i + 2]; ++G__31033__i;}
  p__30904 = new cljs.core.IndexedSeq(G__31033__a,0,null);
} 
return G__31032__delegate.call(this,_,___$1,p__30904);};
G__31032.cljs$lang$maxFixedArity = 2;
G__31032.cljs$lang$applyTo = (function (arglist__31034){
var _ = cljs.core.first(arglist__31034);
arglist__31034 = cljs.core.next(arglist__31034);
var ___$1 = cljs.core.first(arglist__31034);
var p__30904 = cljs.core.rest(arglist__31034);
return G__31032__delegate(_,___$1,p__30904);
});
G__31032.cljs$core$IFn$_invoke$arity$variadic = G__31032__delegate;
return G__31032;
})()
);
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,view_state){
var map__30910 = view_state;
var map__30910__$1 = cljs.core.__destructure_map(map__30910);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var all_columns = (function (){var or__5025__auto__ = columns;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.keys(cljs.core.first(data));
}
})();
var filtered_data = ((cljs.core.seq(filters))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.every_QMARK_((function (p__30914){
var vec__30915 = p__30914;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30915,(1),null);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k))),clojure.string.lower_case(v));
}),filters);
}),data):data);
var sorted_data = (cljs.core.truth_(sort_col)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__30909_SHARP_,p2__30908_SHARP_){
return cljs.core.compare(p2__30908_SHARP_,p1__30909_SHARP_);
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
