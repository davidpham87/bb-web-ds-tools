goog.provide('bb_web_ds_tools.utils.dataset_processing');
/**
 * Normalizes a column name based on the provided configuration.
 * 
 *   Args:
 *  col-name (keyword/string/symbol): The original column name.
 *  config (map): Normalization config with keys :case and :output.
 * 
 *   Returns:
 *  keyword/string/symbol: The normalized column name.
 */
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__43835){
var map__43836 = p__43835;
var map__43836__$1 = cljs.core.__destructure_map(map__43836);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43836__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43836__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var pred__43837 = cljs.core._EQ_;
var expr__43838 = case$;
if(cljs.core.truth_((pred__43837.cljs$core$IFn$_invoke$arity$2 ? pred__43837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43838) : pred__43837.call(null,new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),expr__43838)))){
return camel_snake_kebab.core.__GT_snake_case(s);
} else {
if(cljs.core.truth_((pred__43837.cljs$core$IFn$_invoke$arity$2 ? pred__43837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43838) : pred__43837.call(null,new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),expr__43838)))){
return camel_snake_kebab.core.__GT_PascalCase(s);
} else {
if(cljs.core.truth_((pred__43837.cljs$core$IFn$_invoke$arity$2 ? pred__43837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43838) : pred__43837.call(null,new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),expr__43838)))){
return camel_snake_kebab.core.__GT_kebab_case(s);
} else {
return s;
}
}
}
})();
var pred__43840 = cljs.core._EQ_;
var expr__43841 = output;
if(cljs.core.truth_((pred__43840.cljs$core$IFn$_invoke$arity$2 ? pred__43840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43841) : pred__43840.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),expr__43841)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
if(cljs.core.truth_((pred__43840.cljs$core$IFn$_invoke$arity$2 ? pred__43840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43841) : pred__43840.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43841)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s_case);
} else {
return s_case;
}
}
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
var col_vecs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(data,cols);
var cnt = ((cljs.core.seq(col_vecs))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,col_vecs)):(0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43843_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__43843_SHARP_,i,null);
}),col_vecs));
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
var G__43859 = arguments.length;
switch (G__43859) {
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
}catch (e43874){if((e43874 instanceof Error)){
var e = e43874;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e43874;

}
}}));

(bb_web_ds_tools.utils.dataset_processing.parse_json.cljs$lang$maxFixedArity = 2);

/**
 * Parses a YAML string into Clojure data.
 * 
 *   Args:
 *  text (string): The YAML string.
 * 
 *   Returns:
 *  any: Parsed Clojure data or nil on error.
 */
bb_web_ds_tools.utils.dataset_processing.parse_yaml = (function bb_web_ds_tools$utils$dataset_processing$parse_yaml(text){
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$js_yaml.load(text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e43875){if((e43875 instanceof Error)){
var e = e43875;
console.error("YAML Parse Error",e);

return null;
} else {
throw e43875;

}
}});
/**
 * Parses structured text (JSON/EDN/YAML) and normalizes it based on the target structure.
 * 
 *   Args:
 *  parse-fn (fn): Function to parse text into data (e.g., parse-json, edn/read-string).
 *  structure (keyword): Target structure (:columnar, :row-maps, :row-arrays, :tree).
 *  text (string): The text to parse.
 * 
 *   Returns:
 *  any: The normalized data.
 */
bb_web_ds_tools.utils.dataset_processing.parse_structured = (function bb_web_ds_tools$utils$dataset_processing$parse_structured(parse_fn,structure,text){
var data = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(text) : parse_fn.call(null,text));
var G__43876 = structure;
var G__43876__$1 = (((G__43876 instanceof cljs.core.Keyword))?G__43876.fqn:null);
switch (G__43876__$1) {
case "columnar":
var G__43886 = data;
if((G__43886 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__43886);
}

break;
case "row-maps":
return data;

break;
case "row-arrays":
var G__43887 = data;
if((G__43887 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__43887);
}

break;
case "tree":
return data;

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
 *  format (keyword): The format of the input text (:csv, :tsv, :json, :edn, :yaml, :markdown, :text).
 *  structure (keyword): The desired structure of the output data (:columnar, :row-maps, :row-arrays, :tree, :lines, :raw).
 *  text (string): The raw input text.
 * 
 *   Returns:
 *  any: The parsed dataset.
 */
bb_web_ds_tools.utils.dataset_processing.parse_dataset = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43888 = cljs.core.get_global_hierarchy;
return (fexpr__43888.cljs$core$IFn$_invoke$arity$0 ? fexpr__43888.cljs$core$IFn$_invoke$arity$0() : fexpr__43888.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","parse-dataset"),(function (format,structure,_text){
if(cljs.core.truth_((function (){var fexpr__43889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__43889.cljs$core$IFn$_invoke$arity$1 ? fexpr__43889.cljs$core$IFn$_invoke$arity$1(format) : fexpr__43889.call(null,format));
})())){
return format;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,structure], null);
}
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
bb_web_ds_tools.utils.dataset_processing.parse_markdown_row = (function bb_web_ds_tools$utils$dataset_processing$parse_markdown_row(line){
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
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_)),clojure.string.split_lines(text));
var vec__43902 = lines;
var seq__43903 = cljs.core.seq(vec__43902);
var first__43904 = cljs.core.first(seq__43903);
var seq__43903__$1 = cljs.core.next(seq__43903);
var header_line = first__43904;
var first__43904__$1 = cljs.core.first(seq__43903__$1);
var seq__43903__$2 = cljs.core.next(seq__43903__$1);
var ___$2 = first__43904__$1;
var data_lines = seq__43903__$2;
var header = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bb_web_ds_tools.utils.dataset_processing.parse_markdown_row(header_line));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.zipmap(header,bb_web_ds_tools.utils.dataset_processing.parse_markdown_row(line));
}),data_lines);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(bb_web_ds_tools.utils.dataset_processing.parse_json,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(clojure.edn.read_string,structure,text);
}));
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yaml","yaml",2065170959),(function (_,structure,text){
return bb_web_ds_tools.utils.dataset_processing.parse_structured(bb_web_ds_tools.utils.dataset_processing.parse_yaml,structure,text);
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
 * Example tree data for testing.
 */
bb_web_ds_tools.utils.dataset_processing.example_tree = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"root",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"child1",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"child2",new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"grandchild1",new cljs.core.Keyword(null,"value","value",305978217),(3)], null)], null)], null)], null)], null);
/**
 * Converts a sequence of row maps to columnar format.
 */
bb_web_ds_tools.utils.dataset_processing.to_columnar = (function bb_web_ds_tools$utils$dataset_processing$to_columnar(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43917_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43917_SHARP_,k);
}),rows));
}),cljs.core.PersistentArrayMap.EMPTY,ks);
});
/**
 * Converts a sequence of row maps to row-array format (with header).
 */
bb_web_ds_tools.utils.dataset_processing.to_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$to_row_arrays(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.vec(cljs.core.cons(cljs.core.vec(ks),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43929_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__43929_SHARP_);
}),ks);
}),rows)));
});
/**
 * Formats data as a Markdown table.
 */
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__43933 = arguments.length;
switch (G__43933) {
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
var map__43934 = (function (){var or__5025__auto__ = conf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config);
}
})();
var map__43934__$1 = cljs.core.__destructure_map(map__43934);
var cell_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934__$1,new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660));
var row_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934__$1,new cljs.core.Keyword(null,"row-start","row-start",-1075739176));
var row_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934__$1,new cljs.core.Keyword(null,"row-end","row-end",231209112));
var header_dash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934__$1,new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542));
var ks = cljs.core.keys(cljs.core.first(rows));
var row_fmt = (function (vals){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_separator,vals),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(row_fmt(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks)),cljs.core.cons(row_fmt(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ks),header_dash)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43930_SHARP_){
return row_fmt(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43930_SHARP_,k);
}),ks));
}),rows))));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

/**
 * Converts data to a JSON string with indentation.
 */
bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__43937 = arguments.length;
switch (G__43937) {
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
 * Converts data to a YAML string.
 */
bb_web_ds_tools.utils.dataset_processing.stringify_yaml = (function bb_web_ds_tools$utils$dataset_processing$stringify_yaml(data){
return shadow.js.shim.module$js_yaml.dump(cljs.core.clj__GT_js(data));
});
/**
 * Returns the example data in the requested structure.
 */
bb_web_ds_tools.utils.dataset_processing.get_structured_data = (function bb_web_ds_tools$utils$dataset_processing$get_structured_data(structure){
var G__43938 = structure;
var G__43938__$1 = (((G__43938 instanceof cljs.core.Keyword))?G__43938.fqn:null);
switch (G__43938__$1) {
case "row-maps":
return bb_web_ds_tools.utils.dataset_processing.example_rows;

break;
case "columnar":
return bb_web_ds_tools.utils.dataset_processing.to_columnar(bb_web_ds_tools.utils.dataset_processing.example_rows);

break;
case "row-arrays":
return bb_web_ds_tools.utils.dataset_processing.to_row_arrays(bb_web_ds_tools.utils.dataset_processing.example_rows);

break;
case "tree":
return bb_web_ds_tools.utils.dataset_processing.example_tree;

break;
default:
return bb_web_ds_tools.utils.dataset_processing.example_rows;

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
 *  fmt (keyword): Output format (:csv, :tsv, :json, :edn, :yaml, :markdown, :text).
 *  structure (keyword): Data structure (:columnar, :row-maps, :row-arrays, :tree, :lines, :raw).
 *  conf (map, optional): Configuration map.
 * 
 *   Returns:
 *  string: The example data string.
 */
bb_web_ds_tools.utils.dataset_processing.example_data = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43940 = cljs.core.get_global_hierarchy;
return (fexpr__43940.cljs$core$IFn$_invoke$arity$0 ? fexpr__43940.cljs$core$IFn$_invoke$arity$0() : fexpr__43940.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__44029__delegate = function (fmt,structure,p__43941){
var vec__43942 = p__43941;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43942,(0),null);
if(cljs.core.truth_((function (){var fexpr__43945 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__43945.cljs$core$IFn$_invoke$arity$1 ? fexpr__43945.cljs$core$IFn$_invoke$arity$1(fmt) : fexpr__43945.call(null,fmt));
})())){
return fmt;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
}
};
var G__44029 = function (fmt,structure,var_args){
var p__43941 = null;
if (arguments.length > 2) {
var G__44030__i = 0, G__44030__a = new Array(arguments.length -  2);
while (G__44030__i < G__44030__a.length) {G__44030__a[G__44030__i] = arguments[G__44030__i + 2]; ++G__44030__i;}
  p__43941 = new cljs.core.IndexedSeq(G__44030__a,0,null);
} 
return G__44029__delegate.call(this,fmt,structure,p__43941);};
G__44029.cljs$lang$maxFixedArity = 2;
G__44029.cljs$lang$applyTo = (function (arglist__44031){
var fmt = cljs.core.first(arglist__44031);
arglist__44031 = cljs.core.next(arglist__44031);
var structure = cljs.core.first(arglist__44031);
var p__43941 = cljs.core.rest(arglist__44031);
return G__44029__delegate(fmt,structure,p__43941);
});
G__44029.cljs$core$IFn$_invoke$arity$variadic = G__44029__delegate;
return G__44029;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44032__delegate = function (_,___$1,p__43946){
var vec__43947 = p__43946;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43947,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__44032 = function (_,___$1,var_args){
var p__43946 = null;
if (arguments.length > 2) {
var G__44037__i = 0, G__44037__a = new Array(arguments.length -  2);
while (G__44037__i < G__44037__a.length) {G__44037__a[G__44037__i] = arguments[G__44037__i + 2]; ++G__44037__i;}
  p__43946 = new cljs.core.IndexedSeq(G__44037__a,0,null);
} 
return G__44032__delegate.call(this,_,___$1,p__43946);};
G__44032.cljs$lang$maxFixedArity = 2;
G__44032.cljs$lang$applyTo = (function (arglist__44038){
var _ = cljs.core.first(arglist__44038);
arglist__44038 = cljs.core.next(arglist__44038);
var ___$1 = cljs.core.first(arglist__44038);
var p__43946 = cljs.core.rest(arglist__44038);
return G__44032__delegate(_,___$1,p__43946);
});
G__44032.cljs$core$IFn$_invoke$arity$variadic = G__44032__delegate;
return G__44032;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44039__delegate = function (_,___$1,p__43953){
var vec__43954 = p__43953;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43954,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__44039 = function (_,___$1,var_args){
var p__43953 = null;
if (arguments.length > 2) {
var G__44040__i = 0, G__44040__a = new Array(arguments.length -  2);
while (G__44040__i < G__44040__a.length) {G__44040__a[G__44040__i] = arguments[G__44040__i + 2]; ++G__44040__i;}
  p__43953 = new cljs.core.IndexedSeq(G__44040__a,0,null);
} 
return G__44039__delegate.call(this,_,___$1,p__43953);};
G__44039.cljs$lang$maxFixedArity = 2;
G__44039.cljs$lang$applyTo = (function (arglist__44041){
var _ = cljs.core.first(arglist__44041);
arglist__44041 = cljs.core.next(arglist__44041);
var ___$1 = cljs.core.first(arglist__44041);
var p__43953 = cljs.core.rest(arglist__44041);
return G__44039__delegate(_,___$1,p__43953);
});
G__44039.cljs$core$IFn$_invoke$arity$variadic = G__44039__delegate;
return G__44039;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__44042__delegate = function (_,___$1,p__43957){
var vec__43958 = p__43957;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43958,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__44042 = function (_,___$1,var_args){
var p__43957 = null;
if (arguments.length > 2) {
var G__44043__i = 0, G__44043__a = new Array(arguments.length -  2);
while (G__44043__i < G__44043__a.length) {G__44043__a[G__44043__i] = arguments[G__44043__i + 2]; ++G__44043__i;}
  p__43957 = new cljs.core.IndexedSeq(G__44043__a,0,null);
} 
return G__44042__delegate.call(this,_,___$1,p__43957);};
G__44042.cljs$lang$maxFixedArity = 2;
G__44042.cljs$lang$applyTo = (function (arglist__44044){
var _ = cljs.core.first(arglist__44044);
arglist__44044 = cljs.core.next(arglist__44044);
var ___$1 = cljs.core.first(arglist__44044);
var p__43957 = cljs.core.rest(arglist__44044);
return G__44042__delegate(_,___$1,p__43957);
});
G__44042.cljs$core$IFn$_invoke$arity$variadic = G__44042__delegate;
return G__44042;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function() { 
var G__44045__delegate = function (_,structure,p__43961){
var vec__43962 = p__43961;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43962,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__44045 = function (_,structure,var_args){
var p__43961 = null;
if (arguments.length > 2) {
var G__44046__i = 0, G__44046__a = new Array(arguments.length -  2);
while (G__44046__i < G__44046__a.length) {G__44046__a[G__44046__i] = arguments[G__44046__i + 2]; ++G__44046__i;}
  p__43961 = new cljs.core.IndexedSeq(G__44046__a,0,null);
} 
return G__44045__delegate.call(this,_,structure,p__43961);};
G__44045.cljs$lang$maxFixedArity = 2;
G__44045.cljs$lang$applyTo = (function (arglist__44047){
var _ = cljs.core.first(arglist__44047);
arglist__44047 = cljs.core.next(arglist__44047);
var structure = cljs.core.first(arglist__44047);
var p__43961 = cljs.core.rest(arglist__44047);
return G__44045__delegate(_,structure,p__43961);
});
G__44045.cljs$core$IFn$_invoke$arity$variadic = G__44045__delegate;
return G__44045;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function() { 
var G__44048__delegate = function (_,structure,p__43968){
var vec__43969 = p__43968;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43969,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43972_44049 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43973_44050 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43974_44051 = true;
var _STAR_print_fn_STAR__temp_val__43975_44052 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43974_44051);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43975_44052);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43973_44050);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43972_44049);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__44048 = function (_,structure,var_args){
var p__43968 = null;
if (arguments.length > 2) {
var G__44053__i = 0, G__44053__a = new Array(arguments.length -  2);
while (G__44053__i < G__44053__a.length) {G__44053__a[G__44053__i] = arguments[G__44053__i + 2]; ++G__44053__i;}
  p__43968 = new cljs.core.IndexedSeq(G__44053__a,0,null);
} 
return G__44048__delegate.call(this,_,structure,p__43968);};
G__44048.cljs$lang$maxFixedArity = 2;
G__44048.cljs$lang$applyTo = (function (arglist__44054){
var _ = cljs.core.first(arglist__44054);
arglist__44054 = cljs.core.next(arglist__44054);
var structure = cljs.core.first(arglist__44054);
var p__43968 = cljs.core.rest(arglist__44054);
return G__44048__delegate(_,structure,p__43968);
});
G__44048.cljs$core$IFn$_invoke$arity$variadic = G__44048__delegate;
return G__44048;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yaml","yaml",2065170959),(function() { 
var G__44055__delegate = function (_,structure,p__43976){
var vec__43977 = p__43976;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43977,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
return bb_web_ds_tools.utils.dataset_processing.stringify_yaml(d);
}),structure,conf);
};
var G__44055 = function (_,structure,var_args){
var p__43976 = null;
if (arguments.length > 2) {
var G__44056__i = 0, G__44056__a = new Array(arguments.length -  2);
while (G__44056__i < G__44056__a.length) {G__44056__a[G__44056__i] = arguments[G__44056__i + 2]; ++G__44056__i;}
  p__43976 = new cljs.core.IndexedSeq(G__44056__a,0,null);
} 
return G__44055__delegate.call(this,_,structure,p__43976);};
G__44055.cljs$lang$maxFixedArity = 2;
G__44055.cljs$lang$applyTo = (function (arglist__44057){
var _ = cljs.core.first(arglist__44057);
arglist__44057 = cljs.core.next(arglist__44057);
var structure = cljs.core.first(arglist__44057);
var p__43976 = cljs.core.rest(arglist__44057);
return G__44055__delegate(_,structure,p__43976);
});
G__44055.cljs$core$IFn$_invoke$arity$variadic = G__44055__delegate;
return G__44055;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(function() { 
var G__44058__delegate = function (_,___$1,p__43980){
var vec__43981 = p__43980;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43981,(0),null);
return "Line 1: Hello World\nLine 2: This is a text file\nLine 3: 123-456-7890";
};
var G__44058 = function (_,___$1,var_args){
var p__43980 = null;
if (arguments.length > 2) {
var G__44059__i = 0, G__44059__a = new Array(arguments.length -  2);
while (G__44059__i < G__44059__a.length) {G__44059__a[G__44059__i] = arguments[G__44059__i + 2]; ++G__44059__i;}
  p__43980 = new cljs.core.IndexedSeq(G__44059__a,0,null);
} 
return G__44058__delegate.call(this,_,___$1,p__43980);};
G__44058.cljs$lang$maxFixedArity = 2;
G__44058.cljs$lang$applyTo = (function (arglist__44060){
var _ = cljs.core.first(arglist__44060);
arglist__44060 = cljs.core.next(arglist__44060);
var ___$1 = cljs.core.first(arglist__44060);
var p__43980 = cljs.core.rest(arglist__44060);
return G__44058__delegate(_,___$1,p__43980);
});
G__44058.cljs$core$IFn$_invoke$arity$variadic = G__44058__delegate;
return G__44058;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"raw","raw",1604651272)], null),(function() { 
var G__44061__delegate = function (_,___$1,p__43986){
var vec__43987 = p__43986;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43987,(0),null);
return "This is a raw text block.\nIt contains newlines and special characters.\n\nUse it to test regex matching on the whole content.";
};
var G__44061 = function (_,___$1,var_args){
var p__43986 = null;
if (arguments.length > 2) {
var G__44062__i = 0, G__44062__a = new Array(arguments.length -  2);
while (G__44062__i < G__44062__a.length) {G__44062__a[G__44062__i] = arguments[G__44062__i + 2]; ++G__44062__i;}
  p__43986 = new cljs.core.IndexedSeq(G__44062__a,0,null);
} 
return G__44061__delegate.call(this,_,___$1,p__43986);};
G__44061.cljs$lang$maxFixedArity = 2;
G__44061.cljs$lang$applyTo = (function (arglist__44063){
var _ = cljs.core.first(arglist__44063);
arglist__44063 = cljs.core.next(arglist__44063);
var ___$1 = cljs.core.first(arglist__44063);
var p__43986 = cljs.core.rest(arglist__44063);
return G__44061__delegate(_,___$1,p__43986);
});
G__44061.cljs$core$IFn$_invoke$arity$variadic = G__44061__delegate;
return G__44061;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__44064__delegate = function (_,___$1,p__43990){
var vec__43991 = p__43990;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43991,(0),null);
return "";
};
var G__44064 = function (_,___$1,var_args){
var p__43990 = null;
if (arguments.length > 2) {
var G__44065__i = 0, G__44065__a = new Array(arguments.length -  2);
while (G__44065__i < G__44065__a.length) {G__44065__a[G__44065__i] = arguments[G__44065__i + 2]; ++G__44065__i;}
  p__43990 = new cljs.core.IndexedSeq(G__44065__a,0,null);
} 
return G__44064__delegate.call(this,_,___$1,p__43990);};
G__44064.cljs$lang$maxFixedArity = 2;
G__44064.cljs$lang$applyTo = (function (arglist__44066){
var _ = cljs.core.first(arglist__44066);
arglist__44066 = cljs.core.next(arglist__44066);
var ___$1 = cljs.core.first(arglist__44066);
var p__43990 = cljs.core.rest(arglist__44066);
return G__44064__delegate(_,___$1,p__43990);
});
G__44064.cljs$core$IFn$_invoke$arity$variadic = G__44064__delegate;
return G__44064;
})()
);
bb_web_ds_tools.utils.dataset_processing.remove_internal_keys = (function bb_web_ds_tools$utils$dataset_processing$remove_internal_keys(data){
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.map_QMARK_(cljs.core.first(data))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43994_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43994_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
})),data);
} else {
return data;
}
});
bb_web_ds_tools.utils.dataset_processing.format_data = (function bb_web_ds_tools$utils$dataset_processing$format_data(clean_data,structured_data,format,structure){
var G__43995 = format;
var G__43995__$1 = (((G__43995 instanceof cljs.core.Keyword))?G__43995.fqn:null);
switch (G__43995__$1) {
case "csv":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.Keyword(null,"columnar","columnar",-1122999701))){
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(clean_data),({"header": true}));
} else {
return "CSV only supports columnar structure.";
}

break;
case "tsv":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.Keyword(null,"columnar","columnar",-1122999701))){
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(clean_data),({"delimiter": "\t", "header": true}));
} else {
return "TSV only supports columnar structure.";
}

break;
case "markdown":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.Keyword(null,"columnar","columnar",-1122999701))){
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$1(clean_data);
} else {
return "Markdown only supports columnar structure.";
}

break;
case "json":
return bb_web_ds_tools.utils.dataset_processing.stringify_json.cljs$core$IFn$_invoke$arity$1(structured_data);

break;
case "edn":
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43996_44068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43997_44069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43998_44070 = true;
var _STAR_print_fn_STAR__temp_val__43999_44071 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43998_44070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43999_44071);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(structured_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43997_44069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43996_44068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);

break;
case "yaml":
return bb_web_ds_tools.utils.dataset_processing.stringify_yaml(structured_data);

break;
default:
return "Unsupported format";

}
});
/**
 * Converts the dataset to the specified format and structure.
 * 
 *   Args:
 *  data (seq): Sequence of row maps (the internal dataset representation).
 *  format (keyword): Target format (:csv, :tsv, :json, :edn, :yaml, :markdown).
 *  structure (keyword): Target structure (:columnar, :row-maps, :row-arrays, :tree).
 * 
 *   Returns:
 *  string: The converted data string.
 */
bb_web_ds_tools.utils.dataset_processing.convert_data = (function bb_web_ds_tools$utils$dataset_processing$convert_data(data,format,structure){
var clean_data = bb_web_ds_tools.utils.dataset_processing.remove_internal_keys(data);
var structured_data = (function (){var G__44002 = structure;
var G__44002__$1 = (((G__44002 instanceof cljs.core.Keyword))?G__44002.fqn:null);
switch (G__44002__$1) {
case "columnar":
return bb_web_ds_tools.utils.dataset_processing.to_columnar(clean_data);

break;
case "row-arrays":
return bb_web_ds_tools.utils.dataset_processing.to_row_arrays(clean_data);

break;
default:
return clean_data;

}
})();
return bb_web_ds_tools.utils.dataset_processing.format_data(clean_data,structured_data,format,structure);
});
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
}catch (e44003){var _ = e44003;
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
bb_web_ds_tools.utils.dataset_processing.match_filter_QMARK_ = (function bb_web_ds_tools$utils$dataset_processing$match_filter_QMARK_(row,p__44004){
var vec__44005 = p__44004;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44005,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44005,(1),null);
try{var G__44011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44011) : f.call(null,G__44011));
}catch (e44010){var _ = e44010;
return false;
}});
/**
 * Filters the data based on the compiled filters map.
 * Uses a transducer for performance.
 */
bb_web_ds_tools.utils.dataset_processing.apply_filters = (function bb_web_ds_tools$utils$dataset_processing$apply_filters(data,compiled_filters){
if(cljs.core.seq(compiled_filters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (row){
return cljs.core.every_QMARK_((function (p1__44012_SHARP_){
return bb_web_ds_tools.utils.dataset_processing.match_filter_QMARK_(row,p1__44012_SHARP_);
}),compiled_filters);
})),data);
} else {
return data;
}
});
/**
 * Sorts the data based on sort column and direction.
 */
bb_web_ds_tools.utils.dataset_processing.apply_sorting = (function bb_web_ds_tools$utils$dataset_processing$apply_sorting(data,sort_col,sort_dir){
if(cljs.core.truth_(sort_col)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__44014_SHARP_,p2__44013_SHARP_){
return cljs.core.compare(p2__44013_SHARP_,p1__44014_SHARP_);
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
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,p__44020){
var map__44021 = p__44020;
var map__44021__$1 = cljs.core.__destructure_map(map__44021);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
