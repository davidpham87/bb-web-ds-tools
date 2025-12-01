goog.provide('bb_web_ds_tools.components.malli');
bb_web_ds_tools.components.malli.parse_int = (function bb_web_ds_tools$components$malli$parse_int(s){
return parseInt(s);
});
bb_web_ds_tools.components.malli.read_edn = (function bb_web_ds_tools$components$malli$read_edn(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
bb_web_ds_tools.components.malli.parse_json = (function bb_web_ds_tools$components$malli$parse_json(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
bb_web_ds_tools.components.malli.generate_json = (function bb_web_ds_tools$components$malli$generate_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data),null,(2));
});
bb_web_ds_tools.components.malli.pretty_print_str = (function bb_web_ds_tools$components$malli$pretty_print_str(data){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46087_46111 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46088_46112 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46089_46113 = true;
var _STAR_print_fn_STAR__temp_val__46090_46114 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46089_46113);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46090_46114);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46088_46112);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46087_46111);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
bb_web_ds_tools.components.malli.detect_and_parse = (function bb_web_ds_tools$components$malli$detect_and_parse(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
try{return bb_web_ds_tools.components.malli.read_edn(text);
}catch (e46094){var _ = e46094;
try{return bb_web_ds_tools.components.malli.parse_json(text);
}catch (e46095){var ___$1 = e46095;
return null;
}}}
});
bb_web_ds_tools.components.malli.parse_schema_and_generate = (function bb_web_ds_tools$components$malli$parse_schema_and_generate(schema_text){
try{var schema = bb_web_ds_tools.components.malli.read_edn(schema_text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
}catch (e46096){var e = e46096;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Invalid schema EDN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join('')], null);
}});
bb_web_ds_tools.components.malli.generate_data = (function bb_web_ds_tools$components$malli$generate_data(schema,samples,format){
if(cljs.core.truth_(schema)){
var data = (((samples > (1)))?cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(samples,(function (){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1(schema);
}))):malli.generator.generate.cljs$core$IFn$_invoke$arity$1(schema));
var output = (function (){var G__46097 = format;
var G__46097__$1 = (((G__46097 instanceof cljs.core.Keyword))?G__46097.fqn:null);
switch (G__46097__$1) {
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
bb_web_ds_tools.components.malli.infer_schema = (function bb_web_ds_tools$components$malli$infer_schema(input_data){
if(((cljs.core.coll_QMARK_(input_data)) && (cljs.core.seq(input_data)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"schema-str","schema-str",-1744815373),bb_web_ds_tools.components.malli.pretty_print_str(malli.provider.provide.cljs$core$IFn$_invoke$arity$1(input_data))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid input data or empty sequence."], null);
}
});
bb_web_ds_tools.components.malli.save_dataset_data = (function bb_web_ds_tools$components$malli$save_dataset_data(generated_data,format){
var G__46098 = format;
var G__46098__$1 = (((G__46098 instanceof cljs.core.Keyword))?G__46098.fqn:null);
switch (G__46098__$1) {
case "edn":
try{return bb_web_ds_tools.components.malli.read_edn(generated_data);
}catch (e46099){var _ = e46099;
return null;
}
break;
case "json":
try{return bb_web_ds_tools.components.malli.parse_json(generated_data);
}catch (e46100){var _ = e46100;
return null;
}
break;
default:
return null;

}
});
bb_web_ds_tools.components.malli.inference_panel = (function bb_web_ds_tools$components$malli$inference_panel(p__46101){
var map__46102 = p__46101;
var map__46102__$1 = cljs.core.__destructure_map(map__46102);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var on_infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword(null,"on-infer","on-infer",78181482));
var inferred_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-white mb-4 flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83E\uDDE9"], null),"Schema Inference"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Data (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"inference-input"),new cljs.core.Keyword(null,"name","name",1843675177),"inference-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"{:user/name \"Alice\" :user/age 30}",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_infer], null),"Infer Schema"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Inferred Schema"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.pre_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),inferred_schema,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null)], null)], null)], null)], null);
});

bb_web_ds_tools.components.malli.generation_panel = (function bb_web_ds_tools$components$malli$generation_panel(p__46105){
var map__46106 = p__46105;
var map__46106__$1 = cljs.core.__destructure_map(map__46106);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var on_generate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"on-generate","on-generate",-1231561477));
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-white mb-4 flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83C\uDFB2"], null),"Data Generation"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"schema-text"),new cljs.core.Keyword(null,"name","name",1843675177),"schema-text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:map [:x int?] [:y int?]]",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_generate], null),"Generate Data"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Generated Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.pre_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),generated_data,new cljs.core.Keyword(null,"class","class",-2030961996),"h-64"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.components.malli.js.map
