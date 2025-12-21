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
bb_web_ds_tools.utils.dataset_processing.normalize_column_name = (function bb_web_ds_tools$utils$dataset_processing$normalize_column_name(col_name,p__29383){
var map__29384 = p__29383;
var map__29384__$1 = cljs.core.__destructure_map(map__29384);
var case$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29384__$1,new cljs.core.Keyword(null,"case","case",1143702196));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29384__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var s = cljs.core.name(col_name);
var s_case = (function (){var G__29385 = case$;
var G__29385__$1 = (((G__29385 instanceof cljs.core.Keyword))?G__29385.fqn:null);
switch (G__29385__$1) {
case "snake_case":
return camel_snake_kebab.core.__GT_snake_case(s);

break;
case "CamelCase":
return camel_snake_kebab.core.__GT_PascalCase(s);

break;
case "kebab-case":
return camel_snake_kebab.core.__GT_kebab_case(s);

break;
default:
return s;

}
})();
var G__29386 = output;
var G__29386__$1 = (((G__29386 instanceof cljs.core.Keyword))?G__29386.fqn:null);
switch (G__29386__$1) {
case "keyword":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s_case);

break;
case "symbol":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s_case);

break;
default:
return s_case;

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
var col_vecs = cljs.core.vals(data);
var cnt = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core.max,(0),col_vecs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.zipmap(cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29387_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__29387_SHARP_,i,null);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29388_SHARP_){
return cljs.core.zipmap(header,p1__29388_SHARP_);
}))),data);
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
var G__29390 = arguments.length;
switch (G__29390) {
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
}catch (e29391){if((e29391 instanceof Error)){
var e = e29391;
console.error(new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(conf__$1),e);

return null;
} else {
throw e29391;

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
}catch (e29392){if((e29392 instanceof Error)){
var e = e29392;
console.error("YAML Parse Error",e);

return null;
} else {
throw e29392;

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
var G__29393 = structure;
var G__29393__$1 = (((G__29393 instanceof cljs.core.Keyword))?G__29393.fqn:null);
switch (G__29393__$1) {
case "columnar":
var G__29394 = data;
if((G__29394 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_columnar(G__29394);
}

break;
case "row-maps":
return data;

break;
case "row-arrays":
var G__29395 = data;
if((G__29395 == null)){
return null;
} else {
return bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(G__29395);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29400 = cljs.core.get_global_hierarchy;
return (fexpr__29400.cljs$core$IFn$_invoke$arity$0 ? fexpr__29400.cljs$core$IFn$_invoke$arity$0() : fexpr__29400.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","parse-dataset"),(function (format,structure,_text){
if(cljs.core.truth_((function (){var fexpr__29403 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__29403.cljs$core$IFn$_invoke$arity$1 ? fexpr__29403.cljs$core$IFn$_invoke$arity$1(format) : fexpr__29403.call(null,format));
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
if(clojure.string.blank_QMARK_(line)){
return cljs.core.PersistentVector.EMPTY;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/\|/);
var first_empty_QMARK_ = cljs.core.empty_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(parts,(0),""));
var last_empty_QMARK_ = cljs.core.empty_QMARK_(cljs.core.peek(parts));
var trimmed = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),parts);
var G__29406 = trimmed;
var G__29406__$1 = ((((first_empty_QMARK_) && ((cljs.core.count(trimmed) > (0)))))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__29406,(1)):G__29406);
if(((last_empty_QMARK_) && ((cljs.core.count(trimmed) > (0))))){
return cljs.core.pop(G__29406__$1);
} else {
return G__29406__$1;
}
}
});
bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function (_,___$1,text){
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_)),clojure.string.split_lines(text));
var vec__29407 = lines;
var seq__29408 = cljs.core.seq(vec__29407);
var first__29409 = cljs.core.first(seq__29408);
var seq__29408__$1 = cljs.core.next(seq__29408);
var header_line = first__29409;
var first__29409__$1 = cljs.core.first(seq__29408__$1);
var seq__29408__$2 = cljs.core.next(seq__29408__$1);
var ___$2 = first__29409__$1;
var data_lines = seq__29408__$2;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29410_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29410_SHARP_,k);
}),rows));
}),cljs.core.PersistentArrayMap.EMPTY,ks);
});
/**
 * Converts a sequence of row maps to row-array format (with header).
 */
bb_web_ds_tools.utils.dataset_processing.to_row_arrays = (function bb_web_ds_tools$utils$dataset_processing$to_row_arrays(rows){
var ks = cljs.core.keys(cljs.core.first(rows));
return cljs.core.vec(cljs.core.cons(cljs.core.vec(ks),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29411_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__29411_SHARP_);
}),ks);
}),rows)));
});
/**
 * Formats data as a Markdown table.
 */
bb_web_ds_tools.utils.dataset_processing.to_markdown_table = (function bb_web_ds_tools$utils$dataset_processing$to_markdown_table(var_args){
var G__29421 = arguments.length;
switch (G__29421) {
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
var map__29427 = (function (){var or__5025__auto__ = conf;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing.config);
}
})();
var map__29427__$1 = cljs.core.__destructure_map(map__29427);
var cell_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,new cljs.core.Keyword(null,"cell-separator","cell-separator",565874660));
var row_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,new cljs.core.Keyword(null,"row-start","row-start",-1075739176));
var row_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,new cljs.core.Keyword(null,"row-end","row-end",231209112));
var header_dash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427__$1,new cljs.core.Keyword(null,"header-dash","header-dash",-1691335542));
var ks = cljs.core.keys(cljs.core.first(rows));
var row_fmt = (function (vals){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_start),clojure.string.join.cljs$core$IFn$_invoke$arity$2(cell_separator,vals),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_end)].join('');
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(row_fmt(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks)),cljs.core.cons(row_fmt(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ks),header_dash)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29418_SHARP_){
return row_fmt(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29418_SHARP_,k);
}),ks));
}),rows))));
}));

(bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$maxFixedArity = 2);

/**
 * Converts data to a JSON string with indentation.
 */
bb_web_ds_tools.utils.dataset_processing.stringify_json = (function bb_web_ds_tools$utils$dataset_processing$stringify_json(var_args){
var G__29434 = arguments.length;
switch (G__29434) {
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
var G__29447 = structure;
var G__29447__$1 = (((G__29447 instanceof cljs.core.Keyword))?G__29447.fqn:null);
switch (G__29447__$1) {
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29456 = cljs.core.get_global_hierarchy;
return (fexpr__29456.cljs$core$IFn$_invoke$arity$0 ? fexpr__29456.cljs$core$IFn$_invoke$arity$0() : fexpr__29456.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.utils.dataset-processing","example-data"),(function() { 
var G__29762__delegate = function (fmt,structure,p__29461){
var vec__29463 = p__29461;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29463,(0),null);
if(cljs.core.truth_((function (){var fexpr__29466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__29466.cljs$core$IFn$_invoke$arity$1 ? fexpr__29466.cljs$core$IFn$_invoke$arity$1(fmt) : fexpr__29466.call(null,fmt));
})())){
return fmt;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fmt,structure], null);
}
};
var G__29762 = function (fmt,structure,var_args){
var p__29461 = null;
if (arguments.length > 2) {
var G__29775__i = 0, G__29775__a = new Array(arguments.length -  2);
while (G__29775__i < G__29775__a.length) {G__29775__a[G__29775__i] = arguments[G__29775__i + 2]; ++G__29775__i;}
  p__29461 = new cljs.core.IndexedSeq(G__29775__a,0,null);
} 
return G__29762__delegate.call(this,fmt,structure,p__29461);};
G__29762.cljs$lang$maxFixedArity = 2;
G__29762.cljs$lang$applyTo = (function (arglist__29779){
var fmt = cljs.core.first(arglist__29779);
arglist__29779 = cljs.core.next(arglist__29779);
var structure = cljs.core.first(arglist__29779);
var p__29461 = cljs.core.rest(arglist__29779);
return G__29762__delegate(fmt,structure,p__29461);
});
G__29762.cljs$core$IFn$_invoke$arity$variadic = G__29762__delegate;
return G__29762;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__29781__delegate = function (_,___$1,p__29476){
var vec__29477 = p__29476;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"header": true}));
};
var G__29781 = function (_,___$1,var_args){
var p__29476 = null;
if (arguments.length > 2) {
var G__29782__i = 0, G__29782__a = new Array(arguments.length -  2);
while (G__29782__i < G__29782__a.length) {G__29782__a[G__29782__i] = arguments[G__29782__i + 2]; ++G__29782__i;}
  p__29476 = new cljs.core.IndexedSeq(G__29782__a,0,null);
} 
return G__29781__delegate.call(this,_,___$1,p__29476);};
G__29781.cljs$lang$maxFixedArity = 2;
G__29781.cljs$lang$applyTo = (function (arglist__29783){
var _ = cljs.core.first(arglist__29783);
arglist__29783 = cljs.core.next(arglist__29783);
var ___$1 = cljs.core.first(arglist__29783);
var p__29476 = cljs.core.rest(arglist__29783);
return G__29781__delegate(_,___$1,p__29476);
});
G__29781.cljs$core$IFn$_invoke$arity$variadic = G__29781__delegate;
return G__29781;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__29786__delegate = function (_,___$1,p__29497){
var vec__29498 = p__29497;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29498,(0),null);
return shadow.js.shim.module$papaparse.unparse(cljs.core.clj__GT_js(bb_web_ds_tools.utils.dataset_processing.example_rows),({"delimiter": "\t", "header": true}));
};
var G__29786 = function (_,___$1,var_args){
var p__29497 = null;
if (arguments.length > 2) {
var G__29787__i = 0, G__29787__a = new Array(arguments.length -  2);
while (G__29787__i < G__29787__a.length) {G__29787__a[G__29787__i] = arguments[G__29787__i + 2]; ++G__29787__i;}
  p__29497 = new cljs.core.IndexedSeq(G__29787__a,0,null);
} 
return G__29786__delegate.call(this,_,___$1,p__29497);};
G__29786.cljs$lang$maxFixedArity = 2;
G__29786.cljs$lang$applyTo = (function (arglist__29789){
var _ = cljs.core.first(arglist__29789);
arglist__29789 = cljs.core.next(arglist__29789);
var ___$1 = cljs.core.first(arglist__29789);
var p__29497 = cljs.core.rest(arglist__29789);
return G__29786__delegate(_,___$1,p__29497);
});
G__29786.cljs$core$IFn$_invoke$arity$variadic = G__29786__delegate;
return G__29786;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null),(function() { 
var G__29791__delegate = function (_,___$1,p__29506){
var vec__29507 = p__29506;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29507,(0),null);
return bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing.example_rows,new cljs.core.Keyword(null,"markdown","markdown",1227225089).cljs$core$IFn$_invoke$arity$1(conf));
};
var G__29791 = function (_,___$1,var_args){
var p__29506 = null;
if (arguments.length > 2) {
var G__29792__i = 0, G__29792__a = new Array(arguments.length -  2);
while (G__29792__i < G__29792__a.length) {G__29792__a[G__29792__i] = arguments[G__29792__i + 2]; ++G__29792__i;}
  p__29506 = new cljs.core.IndexedSeq(G__29792__a,0,null);
} 
return G__29791__delegate.call(this,_,___$1,p__29506);};
G__29791.cljs$lang$maxFixedArity = 2;
G__29791.cljs$lang$applyTo = (function (arglist__29795){
var _ = cljs.core.first(arglist__29795);
arglist__29795 = cljs.core.next(arglist__29795);
var ___$1 = cljs.core.first(arglist__29795);
var p__29506 = cljs.core.rest(arglist__29795);
return G__29791__delegate(_,___$1,p__29506);
});
G__29791.cljs$core$IFn$_invoke$arity$variadic = G__29791__delegate;
return G__29791;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function() { 
var G__29796__delegate = function (_,structure,p__29513){
var vec__29514 = p__29513;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29514,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured(bb_web_ds_tools.utils.dataset_processing.stringify_json,structure,conf);
};
var G__29796 = function (_,structure,var_args){
var p__29513 = null;
if (arguments.length > 2) {
var G__29797__i = 0, G__29797__a = new Array(arguments.length -  2);
while (G__29797__i < G__29797__a.length) {G__29797__a[G__29797__i] = arguments[G__29797__i + 2]; ++G__29797__i;}
  p__29513 = new cljs.core.IndexedSeq(G__29797__a,0,null);
} 
return G__29796__delegate.call(this,_,structure,p__29513);};
G__29796.cljs$lang$maxFixedArity = 2;
G__29796.cljs$lang$applyTo = (function (arglist__29798){
var _ = cljs.core.first(arglist__29798);
arglist__29798 = cljs.core.next(arglist__29798);
var structure = cljs.core.first(arglist__29798);
var p__29513 = cljs.core.rest(arglist__29798);
return G__29796__delegate(_,structure,p__29513);
});
G__29796.cljs$core$IFn$_invoke$arity$variadic = G__29796__delegate;
return G__29796;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function() { 
var G__29799__delegate = function (_,structure,p__29519){
var vec__29520 = p__29519;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29520,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29523_29800 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29524_29801 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29531_29802 = true;
var _STAR_print_fn_STAR__temp_val__29532_29803 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29531_29802);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29532_29803);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(d);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29524_29801);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29523_29800);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}),structure,conf);
};
var G__29799 = function (_,structure,var_args){
var p__29519 = null;
if (arguments.length > 2) {
var G__29809__i = 0, G__29809__a = new Array(arguments.length -  2);
while (G__29809__i < G__29809__a.length) {G__29809__a[G__29809__i] = arguments[G__29809__i + 2]; ++G__29809__i;}
  p__29519 = new cljs.core.IndexedSeq(G__29809__a,0,null);
} 
return G__29799__delegate.call(this,_,structure,p__29519);};
G__29799.cljs$lang$maxFixedArity = 2;
G__29799.cljs$lang$applyTo = (function (arglist__29810){
var _ = cljs.core.first(arglist__29810);
arglist__29810 = cljs.core.next(arglist__29810);
var structure = cljs.core.first(arglist__29810);
var p__29519 = cljs.core.rest(arglist__29810);
return G__29799__delegate(_,structure,p__29519);
});
G__29799.cljs$core$IFn$_invoke$arity$variadic = G__29799__delegate;
return G__29799;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yaml","yaml",2065170959),(function() { 
var G__29812__delegate = function (_,structure,p__29533){
var vec__29534 = p__29533;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534,(0),null);
return bb_web_ds_tools.utils.dataset_processing.example_structured((function (d,___$1){
return bb_web_ds_tools.utils.dataset_processing.stringify_yaml(d);
}),structure,conf);
};
var G__29812 = function (_,structure,var_args){
var p__29533 = null;
if (arguments.length > 2) {
var G__29813__i = 0, G__29813__a = new Array(arguments.length -  2);
while (G__29813__i < G__29813__a.length) {G__29813__a[G__29813__i] = arguments[G__29813__i + 2]; ++G__29813__i;}
  p__29533 = new cljs.core.IndexedSeq(G__29813__a,0,null);
} 
return G__29812__delegate.call(this,_,structure,p__29533);};
G__29812.cljs$lang$maxFixedArity = 2;
G__29812.cljs$lang$applyTo = (function (arglist__29814){
var _ = cljs.core.first(arglist__29814);
arglist__29814 = cljs.core.next(arglist__29814);
var structure = cljs.core.first(arglist__29814);
var p__29533 = cljs.core.rest(arglist__29814);
return G__29812__delegate(_,structure,p__29533);
});
G__29812.cljs$core$IFn$_invoke$arity$variadic = G__29812__delegate;
return G__29812;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(function() { 
var G__29815__delegate = function (_,___$1,p__29537){
var vec__29538 = p__29537;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29538,(0),null);
return "Line 1: Hello World\nLine 2: This is a text file\nLine 3: 123-456-7890";
};
var G__29815 = function (_,___$1,var_args){
var p__29537 = null;
if (arguments.length > 2) {
var G__29816__i = 0, G__29816__a = new Array(arguments.length -  2);
while (G__29816__i < G__29816__a.length) {G__29816__a[G__29816__i] = arguments[G__29816__i + 2]; ++G__29816__i;}
  p__29537 = new cljs.core.IndexedSeq(G__29816__a,0,null);
} 
return G__29815__delegate.call(this,_,___$1,p__29537);};
G__29815.cljs$lang$maxFixedArity = 2;
G__29815.cljs$lang$applyTo = (function (arglist__29818){
var _ = cljs.core.first(arglist__29818);
arglist__29818 = cljs.core.next(arglist__29818);
var ___$1 = cljs.core.first(arglist__29818);
var p__29537 = cljs.core.rest(arglist__29818);
return G__29815__delegate(_,___$1,p__29537);
});
G__29815.cljs$core$IFn$_invoke$arity$variadic = G__29815__delegate;
return G__29815;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"raw","raw",1604651272)], null),(function() { 
var G__29820__delegate = function (_,___$1,p__29541){
var vec__29542 = p__29541;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29542,(0),null);
return "This is a raw text block.\nIt contains newlines and special characters.\n\nUse it to test regex matching on the whole content.";
};
var G__29820 = function (_,___$1,var_args){
var p__29541 = null;
if (arguments.length > 2) {
var G__29822__i = 0, G__29822__a = new Array(arguments.length -  2);
while (G__29822__i < G__29822__a.length) {G__29822__a[G__29822__i] = arguments[G__29822__i + 2]; ++G__29822__i;}
  p__29541 = new cljs.core.IndexedSeq(G__29822__a,0,null);
} 
return G__29820__delegate.call(this,_,___$1,p__29541);};
G__29820.cljs$lang$maxFixedArity = 2;
G__29820.cljs$lang$applyTo = (function (arglist__29823){
var _ = cljs.core.first(arglist__29823);
arglist__29823 = cljs.core.next(arglist__29823);
var ___$1 = cljs.core.first(arglist__29823);
var p__29541 = cljs.core.rest(arglist__29823);
return G__29820__delegate(_,___$1,p__29541);
});
G__29820.cljs$core$IFn$_invoke$arity$variadic = G__29820__delegate;
return G__29820;
})()
);
bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__29824__delegate = function (_,___$1,p__29545){
var vec__29546 = p__29545;
var conf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29546,(0),null);
return "";
};
var G__29824 = function (_,___$1,var_args){
var p__29545 = null;
if (arguments.length > 2) {
var G__29825__i = 0, G__29825__a = new Array(arguments.length -  2);
while (G__29825__i < G__29825__a.length) {G__29825__a[G__29825__i] = arguments[G__29825__i + 2]; ++G__29825__i;}
  p__29545 = new cljs.core.IndexedSeq(G__29825__a,0,null);
} 
return G__29824__delegate.call(this,_,___$1,p__29545);};
G__29824.cljs$lang$maxFixedArity = 2;
G__29824.cljs$lang$applyTo = (function (arglist__29826){
var _ = cljs.core.first(arglist__29826);
arglist__29826 = cljs.core.next(arglist__29826);
var ___$1 = cljs.core.first(arglist__29826);
var p__29545 = cljs.core.rest(arglist__29826);
return G__29824__delegate(_,___$1,p__29545);
});
G__29824.cljs$core$IFn$_invoke$arity$variadic = G__29824__delegate;
return G__29824;
})()
);
bb_web_ds_tools.utils.dataset_processing.remove_internal_keys = (function bb_web_ds_tools$utils$dataset_processing$remove_internal_keys(data){
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.map_QMARK_(cljs.core.first(data))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29549_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29549_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
})),data);
} else {
return data;
}
});
bb_web_ds_tools.utils.dataset_processing.format_data = (function bb_web_ds_tools$utils$dataset_processing$format_data(clean_data,structured_data,format,structure){
var G__29556 = format;
var G__29556__$1 = (((G__29556 instanceof cljs.core.Keyword))?G__29556.fqn:null);
switch (G__29556__$1) {
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
var _STAR_print_newline_STAR__orig_val__29559_29830 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29560_29831 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29561_29832 = true;
var _STAR_print_fn_STAR__temp_val__29562_29833 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29561_29832);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29562_29833);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(structured_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29560_29831);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29559_29830);
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
var structured_data = (function (){var G__29565 = structure;
var G__29565__$1 = (((G__29565 instanceof cljs.core.Keyword))?G__29565.fqn:null);
switch (G__29565__$1) {
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
}catch (e29569){var _ = e29569;
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
bb_web_ds_tools.utils.dataset_processing.match_filter_QMARK_ = (function bb_web_ds_tools$utils$dataset_processing$match_filter_QMARK_(row,p__29592){
var vec__29593 = p__29592;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(1),null);
try{var G__29601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29601) : f.call(null,G__29601));
}catch (e29600){var _ = e29600;
return false;
}});
/**
 * Filters the data based on the compiled filters map.
 * Uses a transducer for performance.
 */
bb_web_ds_tools.utils.dataset_processing.apply_filters = (function bb_web_ds_tools$utils$dataset_processing$apply_filters(data,compiled_filters){
if(cljs.core.seq(compiled_filters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (row){
return cljs.core.every_QMARK_((function (p1__29604_SHARP_){
return bb_web_ds_tools.utils.dataset_processing.match_filter_QMARK_(row,p1__29604_SHARP_);
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.compare:(function (p1__29607_SHARP_,p2__29606_SHARP_){
return cljs.core.compare(p2__29606_SHARP_,p1__29607_SHARP_);
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
bb_web_ds_tools.utils.dataset_processing.process_table_data = (function bb_web_ds_tools$utils$dataset_processing$process_table_data(data,p__29637){
var map__29638 = p__29637;
var map__29638__$1 = cljs.core.__destructure_map(map__29638);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
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
