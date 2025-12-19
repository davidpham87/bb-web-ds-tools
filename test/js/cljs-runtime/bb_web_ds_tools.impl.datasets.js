goog.provide('bb_web_ds_tools.impl.datasets');
/**
 * Detects the structure of the input data.
 * 
 *   Args:
 *  data: The data to inspect.
 * 
 *   Returns:
 *  keyword: :row-maps, :columnar, :rows, or :unknown.
 */
bb_web_ds_tools.impl.datasets.detect_structure = (function bb_web_ds_tools$impl$datasets$detect_structure(data){
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.map_QMARK_(cljs.core.first(data))))){
return new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.Keyword(null,"columnar","columnar",-1122999701);
} else {
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.sequential_QMARK_(cljs.core.first(data))))){
return new cljs.core.Keyword(null,"rows","rows",850049680);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.impl !== 'undefined') && (typeof bb_web_ds_tools.impl.datasets !== 'undefined') && (typeof bb_web_ds_tools.impl.datasets.transform !== 'undefined')){
} else {
/**
 * Transforms data between different structures (row-maps, columnar, rows).
 * 
 *   Args:
 *  data: The input data.
 *  input-struct: The structure of the input data (keyword).
 *  output-struct: The desired output structure (keyword).
 * 
 *   Returns:
 *  The transformed data.
 */
bb_web_ds_tools.impl.datasets.transform = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__66540 = cljs.core.get_global_hierarchy;
return (fexpr__66540.cljs$core$IFn$_invoke$arity$0 ? fexpr__66540.cljs$core$IFn$_invoke$arity$0() : fexpr__66540.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.impl.datasets","transform"),(function (data,input_struct,output_struct){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5025__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_struct);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = bb_web_ds_tools.impl.datasets.detect_structure(data);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284);
}
}
})(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(output_struct)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data,_,___$1){

return data;
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (data,_,___$1){

return data;
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (data,_,___$1){

return data;
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"rows","rows",850049680)], null),(function (data,_,___$1){

return data;
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (data,_,___$1){

if(cljs.core.empty_QMARK_(data)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var cols = cljs.core.keys(cljs.core.first(data));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,col,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66541_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__66541_SHARP_,col);
}),data));
}),cljs.core.PersistentArrayMap.EMPTY,cols);
}
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"rows","rows",850049680)], null),(function (data,_,___$1){

if(cljs.core.empty_QMARK_(data)){
return cljs.core.PersistentVector.EMPTY;
} else {
var header = cljs.core.keys(cljs.core.first(data));
return cljs.core.cons(header,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66542_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__66542_SHARP_);
}),header);
}),data));
}
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (data,_,___$1){

var cols = cljs.core.keys(data);
var col_vecs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(data,cols);
var cnt = ((cljs.core.seq(col_vecs))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,col_vecs)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66543_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__66543_SHARP_,i,null);
}),col_vecs));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"rows","rows",850049680)], null),(function (data,_,___$1){

if(cljs.core.empty_QMARK_(data)){
return cljs.core.PersistentVector.EMPTY;
} else {
var header = cljs.core.keys(data);
var col_vecs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(data,header);
var cnt = ((cljs.core.seq(col_vecs))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,col_vecs)):(0));
var rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66544_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__66544_SHARP_,i,null);
}),col_vecs);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
return cljs.core.cons(header,rows);
}
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)], null),(function (data,_,___$1){

var header = cljs.core.first(data);
var rows = cljs.core.rest(data);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66545_SHARP_){
return cljs.core.zipmap(header,p1__66545_SHARP_);
}),rows);
}));
bb_web_ds_tools.impl.datasets.transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (data,_,___$1){

var header = cljs.core.first(data);
var rows = cljs.core.rest(data);
if(cljs.core.empty_QMARK_(rows)){
return cljs.core.zipmap(header,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,i){
var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(header,i);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,col_name,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66546_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__66546_SHARP_,i);
}),rows));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(header)));
}
}));

//# sourceMappingURL=bb_web_ds_tools.impl.datasets.js.map
