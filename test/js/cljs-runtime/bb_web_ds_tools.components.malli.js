goog.provide('bb_web_ds_tools.components.malli');
/**
 * Parses a string to an integer. Cross-platform.
 * 
 *   Args:
 *  s (string): The string to parse.
 * 
 *   Returns:
 *  integer: The parsed integer.
 */
bb_web_ds_tools.components.malli.parse_int = (function bb_web_ds_tools$components$malli$parse_int(s){
return parseInt(s);
});
/**
 * Reads EDN from a string. Cross-platform.
 * 
 *   Args:
 *  s (string): The EDN string.
 * 
 *   Returns:
 *  any: The parsed data.
 */
bb_web_ds_tools.components.malli.read_edn = (function bb_web_ds_tools$components$malli$read_edn(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Parses a JSON string. Cross-platform.
 * 
 *   Args:
 *  s (string): The JSON string.
 * 
 *   Returns:
 *  any: The parsed data (keywordized keys in Clojure).
 */
bb_web_ds_tools.components.malli.parse_json = (function bb_web_ds_tools$components$malli$parse_json(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * Generates a JSON string from data. Cross-platform.
 * 
 *   Args:
 *  data (any): The data to serialize.
 * 
 *   Returns:
 *  string: The JSON string.
 */
bb_web_ds_tools.components.malli.generate_json = (function bb_web_ds_tools$components$malli$generate_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data),null,(2));
});
/**
 * Pretty prints data to a string. Cross-platform.
 * 
 *   Args:
 *  data (any): The data to print.
 * 
 *   Returns:
 *  string: The formatted string.
 */
bb_web_ds_tools.components.malli.pretty_print_str = (function bb_web_ds_tools$components$malli$pretty_print_str(data){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48772_48796 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48773_48797 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48774_48798 = true;
var _STAR_print_fn_STAR__temp_val__48775_48799 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48774_48798);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48775_48799);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48773_48797);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48772_48796);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
/**
 * Detects input format (EDN or JSON) and parses it.
 * 
 *   Args:
 *  text (string): The input text.
 * 
 *   Returns:
 *  any: The parsed data or nil.
 */
bb_web_ds_tools.components.malli.detect_and_parse = (function bb_web_ds_tools$components$malli$detect_and_parse(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
try{return bb_web_ds_tools.components.malli.read_edn(text);
}catch (e48777){var _ = e48777;
try{return bb_web_ds_tools.components.malli.parse_json(text);
}catch (e48778){var ___$1 = e48778;
return null;
}}}
});
/**
 * Parses a Malli schema from EDN string.
 * 
 *   Args:
 *  schema-text (string): The schema EDN string.
 * 
 *   Returns:
 *  map: {:success true :schema ...} or {:success false :error ...}.
 */
bb_web_ds_tools.components.malli.parse_schema_and_generate = (function bb_web_ds_tools$components$malli$parse_schema_and_generate(schema_text){
try{var schema = bb_web_ds_tools.components.malli.read_edn(schema_text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
}catch (e48779){var e = e48779;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Invalid schema EDN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join('')], null);
}});
/**
 * Generates random data from a Malli schema.
 * 
 *   Args:
 *  schema (any): The Malli schema.
 *  samples (int): Number of samples.
 *  format (keyword): Output format (:edn or :json).
 * 
 *   Returns:
 *  map: {:success true :output string :data any}.
 */
bb_web_ds_tools.components.malli.generate_data = (function bb_web_ds_tools$components$malli$generate_data(schema,samples,format){
if(cljs.core.truth_(schema)){
var data = (((samples > (1)))?cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(samples,(function (){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1(schema);
}))):malli.generator.generate.cljs$core$IFn$_invoke$arity$1(schema));
var output = (function (){var G__48780 = format;
var G__48780__$1 = (((G__48780 instanceof cljs.core.Keyword))?G__48780.fqn:null);
switch (G__48780__$1) {
case "edn":
return bb_web_ds_tools.components.malli.pretty_print_str(data);

break;
case "json":
return bb_web_ds_tools.components.malli.generate_json(data);

break;
default:
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"output","output",-1105869043),output,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid schema."], null);
}
});
/**
 * Infers a Malli schema from data.
 * 
 *   Args:
 *  input-data (coll): The input data sample.
 * 
 *   Returns:
 *  map: {:success true :schema-str string} or error.
 */
bb_web_ds_tools.components.malli.infer_schema = (function bb_web_ds_tools$components$malli$infer_schema(input_data){
if(((cljs.core.coll_QMARK_(input_data)) && (cljs.core.seq(input_data)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"schema-str","schema-str",-1744815373),bb_web_ds_tools.components.malli.pretty_print_str(malli.provider.provide.cljs$core$IFn$_invoke$arity$1(input_data))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid input data or empty sequence."], null);
}
});
/**
 * Parses generated data string back to data for saving.
 * 
 *   Args:
 *  generated-data (string): The data string.
 *  format (keyword): The format.
 * 
 *   Returns:
 *  any: The parsed data or nil.
 */
bb_web_ds_tools.components.malli.save_dataset_data = (function bb_web_ds_tools$components$malli$save_dataset_data(generated_data,format){
var G__48784 = format;
var G__48784__$1 = (((G__48784 instanceof cljs.core.Keyword))?G__48784.fqn:null);
switch (G__48784__$1) {
case "edn":
try{return bb_web_ds_tools.components.malli.read_edn(generated_data);
}catch (e48785){var _ = e48785;
return null;
}
break;
case "json":
try{return bb_web_ds_tools.components.malli.parse_json(generated_data);
}catch (e48786){var _ = e48786;
return null;
}
break;
default:
return null;

}
});
/**
 * Validates data against a schema.
 * 
 *   Args:
 *  schema (any): The Malli schema.
 *  data (any): The data to validate.
 * 
 *   Returns:
 *  map: {:success true :result string} or error.
 */
bb_web_ds_tools.components.malli.validate_data = (function bb_web_ds_tools$components$malli$validate_data(schema,data){
if(cljs.core.truth_((function (){var and__5023__auto__ = schema;
if(cljs.core.truth_(and__5023__auto__)){
return data;
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(schema,data))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"result","result",1415092211),"\u2705 Data is valid."], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"result","result",1415092211),malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,data)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid schema or data."], null);
}
});
/**
 * Transforms a Malli schema to JSON Schema.
 * 
 *   Args:
 *  schema (any): The Malli schema.
 * 
 *   Returns:
 *  map: {:success true :json-schema string} or error.
 */
bb_web_ds_tools.components.malli.transform_to_json_schema = (function bb_web_ds_tools$components$malli$transform_to_json_schema(schema){
if(cljs.core.truth_(schema)){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"json-schema","json-schema",389191695),bb_web_ds_tools.components.malli.generate_json(malli.json_schema.transform.cljs$core$IFn$_invoke$arity$1(schema))], null);
}catch (e48787){var e = e48787;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Transformation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join('')], null);
}} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid schema."], null);
}
});
/**
 * Renders the legacy inference panel.
 * 
 *     Args:
 *       props (map): {:values, :handle-change, :on-infer, :inferred-schema}.
 * 
 *     Returns:
 *       vector: A hiccup vector.
 */
bb_web_ds_tools.components.malli.inference_panel = (function bb_web_ds_tools$components$malli$inference_panel(p__48788){
var map__48789 = p__48788;
var map__48789__$1 = cljs.core.__destructure_map(map__48789);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var on_infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"on-infer","on-infer",78181482));
var inferred_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48789__$1,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-white mb-4 flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83E\uDDE9"], null),"Schema Inference"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Data (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"inference-input"),new cljs.core.Keyword(null,"name","name",1843675177),"inference-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"{:user/name \"Alice\" :user/age 30}",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_infer], null),"Infer Schema"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Inferred Schema"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.pre_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),inferred_schema,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null)], null)], null)], null)], null);
});

/**
 * Renders the legacy generation panel.
 * 
 *     Args:
 *       props (map): {:values, :handle-change, :on-generate, :generated-data}.
 * 
 *     Returns:
 *       vector: A hiccup vector.
 */
bb_web_ds_tools.components.malli.generation_panel = (function bb_web_ds_tools$components$malli$generation_panel(p__48791){
var map__48793 = p__48791;
var map__48793__$1 = cljs.core.__destructure_map(map__48793);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var on_generate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"on-generate","on-generate",-1231561477));
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-white mb-4 flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83C\uDFB2"], null),"Data Generation"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"schema-text"),new cljs.core.Keyword(null,"name","name",1843675177),"schema-text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:map [:x int?] [:y int?]]",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_generate], null),"Generate Data"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Generated Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.pre_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),generated_data,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.components.malli.js.map
