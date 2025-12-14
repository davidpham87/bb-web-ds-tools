goog.provide('bb_web_ds_tools.views.malli');
/**
 * Extracts the malli view state from the application database.
 * 
 *   Args:
 *  db (map): The application state map.
 * 
 *   Returns:
 *  map: The extracted state containing schemas, inputs, and results.
 */
bb_web_ds_tools.views.malli.get_malli_state = (function bb_web_ds_tools$views$malli$get_malli_state(db){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"generation-fmt","generation-fmt",239967584),new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),new cljs.core.Keyword(null,"input-fmt","input-fmt",-995230963),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276)],[cljs.core.get.cljs$core$IFn$_invoke$arity$3(component_state,new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(component_state,new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1)),new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013).cljs$core$IFn$_invoke$arity$1(component_state),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973).cljs$core$IFn$_invoke$arity$1(component_state),new cljs.core.Keyword(null,"input-format","input-format",-422703481).cljs$core$IFn$_invoke$arity$1(component_state),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493).cljs$core$IFn$_invoke$arity$1(user_input),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031).cljs$core$IFn$_invoke$arity$1(component_state),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505).cljs$core$IFn$_invoke$arity$1(user_input),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(component_state),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545).cljs$core$IFn$_invoke$arity$1(component_state),cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_input,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),(10))]);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","initialize","malli/initialize",521496988),(function (db,_){
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state_exists_QMARK_ = new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
var G__60036 = db;
var G__60036__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__60036,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),"[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]",new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),"{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}",new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),(10)], null)):G__60036);
if(cljs.core.not(component_state_exists_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60036__$1,new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),"",new cljs.core.Keyword(null,"input-format","input-format",-422703481),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),"",new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
} else {
return G__60036__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),(function (db,p__60038){
var vec__60039 = p__60038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),(function (db,p__60042){
var vec__60044 = p__60042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60044,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60044,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-max-enum-values","malli/set-max-enum-values",-2140449014),(function (db,p__60047){
var vec__60048 = p__60047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276)], null),bb_web_ds_tools.components.malli.parse_int(n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),(function (db,p__60051){
var vec__60052 = p__60051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60052,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60052,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),(function (db,p__60055){
var vec__60056 = p__60055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60056,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60056,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),(function (db,p__60059){
var vec__60060 = p__60059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195)], null),bb_web_ds_tools.components.malli.parse_int(n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),(function (db,p__60063){
var vec__60064 = p__60063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165)], null),fmt);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732),(function (p__60068,_){
var map__60069 = p__60068;
var map__60069__$1 = cljs.core.__destructure_map(map__60069);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__60071 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60071__$1 = cljs.core.__destructure_map(map__60071);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60071__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(result)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),(function (p__60073,p__60074){
var map__60075 = p__60073;
var map__60075__$1 = cljs.core.__destructure_map(map__60075);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60076 = p__60074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60076,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60076,(1),null);
var map__60079 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60079__$1 = cljs.core.__destructure_map(map__60079);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60079__$1,new cljs.core.Keyword(null,"samples","samples",635504833));
var generation_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60079__$1,new cljs.core.Keyword(null,"generation-fmt","generation-fmt",239967584));
var result = bb_web_ds_tools.components.malli.generate_data(schema,samples,generation_fmt);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),(function (p__60080,_){
var map__60081 = p__60080;
var map__60081__$1 = cljs.core.__destructure_map(map__60081);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60081__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__60082 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60082__$1 = cljs.core.__destructure_map(map__60082);
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60082__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60082__$1,new cljs.core.Keyword(null,"input-fmt","input-fmt",-995230963));
var max_enum_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60082__$1,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276));
var input_data = (function (){var G__60084 = input_fmt;
var G__60084__$1 = (((G__60084 instanceof cljs.core.Keyword))?G__60084.fqn:null);
switch (G__60084__$1) {
case "edn":
return bb_web_ds_tools.components.malli.detect_and_parse(inference_input);

break;
case "json":
return bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),inference_input);

break;
default:
return bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(input_fmt,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),inference_input);

}
})();
var result = bb_web_ds_tools.components.malli.infer_schema.cljs$core$IFn$_invoke$arity$2(input_data,max_enum_values);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?bb_web_ds_tools.components.malli.pretty_print_str(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(result)):["Invalid input data for format ",cljs.core.name(input_fmt),"."].join(''));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074),(function (p__60085,_){
var map__60086 = p__60085;
var map__60086__$1 = cljs.core.__destructure_map(map__60086);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__60087 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60087__$1 = cljs.core.__destructure_map(map__60087);
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60087__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
var generation_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60087__$1,new cljs.core.Keyword(null,"generation-fmt","generation-fmt",239967584));
var parsed_data = bb_web_ds_tools.components.malli.save_dataset_data(generated_data,generation_fmt);
if(cljs.core.truth_(parsed_data)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["Malli Generated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join(''),new cljs.core.Keyword(null,"data","data",-232669377),parsed_data], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),(function (db,p__60088){
var vec__60089 = p__60088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60089,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60089,(1),null);
var dataset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),dataset_id], null));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
if(cljs.core.truth_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),bb_web_ds_tools.components.malli.pretty_print_str(data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),new cljs.core.Keyword(null,"edn","edn",1317840885));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","validate","malli/validate",-313382926),(function (p__60092,_){
var map__60093 = p__60092;
var map__60093__$1 = cljs.core.__destructure_map(map__60093);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__60094 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60094__$1 = cljs.core.__destructure_map(map__60094);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"input-fmt","input-fmt",-995230963));
var schema_result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
var input_data = (function (){var G__60095 = input_fmt;
var G__60095__$1 = (((G__60095 instanceof cljs.core.Keyword))?G__60095.fqn:null);
switch (G__60095__$1) {
case "edn":
return bb_web_ds_tools.components.malli.detect_and_parse(inference_input);

break;
default:
return bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$2(input_fmt,inference_input);

}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(schema_result))){
var result = bb_web_ds_tools.components.malli.validate_data(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(schema_result),input_data);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031)], null),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(schema_result))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606),(function (p__60096,_){
var map__60097 = p__60096;
var map__60097__$1 = cljs.core.__destructure_map(map__60097);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__60098 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__60098__$1 = cljs.core.__destructure_map(map__60098);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var schema_result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(schema_result))){
var result = bb_web_ds_tools.components.malli.transform_to_json_schema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(schema_result));
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"json-schema","json-schema",389191695).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013)], null),output)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(schema_result))], null);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067)], null),(function (root,_){
return new cljs.core.Keyword(null,"schema-text","schema-text",-90970505).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return new cljs.core.Keyword(null,"generated-data","generated-data",-924406973).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067)], null),(function (root,_){
return new cljs.core.Keyword(null,"inference-input","inference-input",1942128493).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","max-enum-values","malli/max-enum-values",1733036801),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),(10));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","active-tab","malli/active-tab",998734819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"input-format","input-format",-422703481),new cljs.core.Keyword(null,"edn","edn",1317840885));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","generation-samples","malli/generation-samples",292630870),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","generation-format","malli/generation-format",-1660729782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","validation-result","malli/validation-result",-1935991260),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return new cljs.core.Keyword(null,"validation-result","validation-result",2129171031).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","json-schema-result","malli/json-schema-result",-281547296),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967)], null),(function (root,_){
return new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","inference-view-state","malli/inference-view-state",-864156552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","max-enum-values","malli/max-enum-values",1733036801)], null),(function (p__60099,_){
var vec__60100 = p__60099;
var inference_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(0),null);
var inferred_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(1),null);
var datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(2),null);
var input_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(3),null);
var max_enum_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),inference_input,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),inferred_schema,new cljs.core.Keyword(null,"datasets","datasets",1896364419),datasets,new cljs.core.Keyword(null,"input-format","input-format",-422703481),input_format,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),max_enum_values], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","generation-view-state","malli/generation-view-state",474874594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-samples","malli/generation-samples",292630870)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-format","malli/generation-format",-1660729782)], null),(function (p__60103,_){
var vec__60104 = p__60103;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60104,(0),null);
var generated_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60104,(1),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60104,(2),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60104,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),generated_data,new cljs.core.Keyword(null,"samples","samples",635504833),samples,new cljs.core.Keyword(null,"gen-fmt","gen-fmt",1574891958),fmt], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","validation-view-state","malli/validation-view-state",1493956709),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validation-result","malli/validation-result",-1935991260)], null),(function (p__60107,_){
var vec__60108 = p__60107;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(0),null);
var inference_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(1),null);
var input_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(2),null);
var validation_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),inference_input,new cljs.core.Keyword(null,"input-format","input-format",-422703481),input_format,new cljs.core.Keyword(null,"validation-result","validation-result",2129171031),validation_result], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","json-schema-view-state","malli/json-schema-view-state",660889389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","json-schema-result","malli/json-schema-result",-281547296)], null),(function (p__60111,_){
var vec__60112 = p__60111;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60112,(0),null);
var json_schema_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60112,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013),json_schema_result], null);
})], 0));
/**
 * A unified view component for Malli sub-views to prevent unmounting and ensure consistency.
 * 
 *   Args:
 *  props (map): Configuration props. Keys:
 *    - :controls (vector): Hiccup for the top control bar.
 *    - :editors (vector): List of editor configs (maps with :value, :language, :on-change, :height, :label).
 *    - :output (any): Data to display in the portal panel.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.malli.unified_view = (function bb_web_ds_tools$views$malli$unified_view(p__60115){
var map__60116 = p__60115;
var map__60116__$1 = cljs.core.__destructure_map(map__60116);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60116__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var editors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60116__$1,new cljs.core.Keyword(null,"editors","editors",557792993));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60116__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2 w-full max-w-3xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between py-4 items-center"], null),controls], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$malli$unified_view_$_iter__60117(s__60118){
return (new cljs.core.LazySeq(null,(function (){
var s__60118__$1 = s__60118;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60118__$1);
if(temp__5825__auto__){
var s__60118__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60118__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60118__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60120 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60119 = (0);
while(true){
if((i__60119 < size__5502__auto__)){
var vec__60121 = cljs.core._nth(c__5501__auto__,i__60119);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60121,(0),null);
var editor_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60121,(1),null);
cljs.core.chunk_append(b__60120,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(editor_config);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "85vh";
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(editor_config,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804)], 0))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__60197 = (i__60119 + (1));
i__60119 = G__60197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60120),bb_web_ds_tools$views$malli$unified_view_$_iter__60117(cljs.core.chunk_rest(s__60118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60120),null);
}
} else {
var vec__60124 = cljs.core.first(s__60118__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60124,(0),null);
var editor_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60124,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(editor_config);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "85vh";
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(editor_config,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804)], 0))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),bb_web_ds_tools$views$malli$unified_view_$_iter__60117(cljs.core.rest(s__60118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,editors));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,output], null)], null);
});
/**
 * Generates props for the unified view in Inference mode.
 */
bb_web_ds_tools.views.malli.get_inference_props = (function bb_web_ds_tools$views$malli$get_inference_props(p__60130){
var map__60131 = p__60130;
var map__60131__$1 = cljs.core.__destructure_map(map__60131);
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var inferred_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545));
var datasets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword(null,"input-format","input-format",-422703481));
var max_enum_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"malli","malli",814072082)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Malli",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"edn","edn",1317840885)))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
})], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"csv","csv",-1164440893)))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"csv","csv",-1164440893)], null));
})], null),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"tsv","tsv",-1254214356)))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"tsv","tsv",-1254214356)], null));
})], null),"TSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"json","json",1279968570)))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"json","json",1279968570)], null));
})], null),"JSON"], null),((cljs.core.seq(datasets))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"Load:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 px-2 text-sm",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60127_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),p1__60127_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Dataset..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$malli$get_inference_props_$_iter__60132(s__60133){
return (new cljs.core.LazySeq(null,(function (){
var s__60133__$1 = s__60133;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60133__$1);
if(temp__5825__auto__){
var s__60133__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60133__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60133__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60135 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60134 = (0);
while(true){
if((i__60134 < size__5502__auto__)){
var vec__60136 = cljs.core._nth(c__5501__auto__,i__60134);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60136,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60136,(1),null);
cljs.core.chunk_append(b__60135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null));

var G__60200 = (i__60134 + (1));
i__60134 = G__60200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),bb_web_ds_tools$views$malli$get_inference_props_$_iter__60132(cljs.core.chunk_rest(s__60133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),null);
}
} else {
var vec__60139 = cljs.core.first(s__60133__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null),bb_web_ds_tools$views$malli$get_inference_props_$_iter__60132(cljs.core.rest(s__60133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(datasets);
})()], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1 ml-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Max Enum:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 py-1 px-2 text-sm",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),max_enum_values,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60128_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-max-enum-values","malli/set-max-enum-values",-2140449014),p1__60128_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170)], null));
})], null),"Infer Schema"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-4 text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"CLI: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-1 rounded"], null),"bb -x bb-web-ds-tools.cli.malli/infer"], null)], null)], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__60143 = input_format;
var G__60143__$1 = (((G__60143 instanceof cljs.core.Keyword))?G__60143.fqn:null);
switch (G__60143__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60129_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__60129_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),inferred_schema], null);
});
/**
 * Generates props for the unified view in Generation mode.
 */
bb_web_ds_tools.views.malli.get_generation_props = (function bb_web_ds_tools$views$malli$get_generation_props(p__60153){
var map__60154 = p__60153;
var map__60154__$1 = cljs.core.__destructure_map(map__60154);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60154__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60154__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60154__$1,new cljs.core.Keyword(null,"samples","samples",635504833));
var gen_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60154__$1,new cljs.core.Keyword(null,"gen-fmt","gen-fmt",1574891958));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"malli","malli",814072082)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Malli Generation",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Samples:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 py-1 px-2 text-sm",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),samples,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60148_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),p1__60148_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Format:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 px-2 text-sm",new cljs.core.Keyword(null,"value","value",305978217),gen_fmt,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60149_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__60149_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"edn"], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"json"], null),"JSON"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));
})], null),"Generate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074)], null));
})], null),"Save to Datasets"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-4 text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"CLI: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-1 rounded"], null),"bb -x bb-web-ds-tools.cli.malli/generate"], null)], null)], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60150_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__60150_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),generated_data], null);
});
/**
 * Generates props for the unified view in Validation mode.
 */
bb_web_ds_tools.views.malli.get_validation_props = (function bb_web_ds_tools$views$malli$get_validation_props(p__60157){
var map__60158 = p__60157;
var map__60158__$1 = cljs.core.__destructure_map(map__60158);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"input-format","input-format",-422703481));
var validation_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"validation-result","validation-result",2129171031));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"malli","malli",814072082)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Malli Validation",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validate","malli/validate",-313382926)], null));
})], null),"Validate"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-4 text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"CLI: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-1 rounded"], null),"bb -x bb-web-ds-tools.cli.malli/validate"], null)], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60155_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__60155_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"42vh"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Data to Validate",new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__60159 = input_format;
var G__60159__$1 = (((G__60159 instanceof cljs.core.Keyword))?G__60159.fqn:null);
switch (G__60159__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60156_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__60156_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"42vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),validation_result], null);
});
/**
 * Generates props for the unified view in JSON Schema mode.
 */
bb_web_ds_tools.views.malli.get_json_schema_props = (function bb_web_ds_tools$views$malli$get_json_schema_props(p__60163){
var map__60165 = p__60163;
var map__60165__$1 = cljs.core.__destructure_map(map__60165);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60165__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var json_schema_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60165__$1,new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"malli","malli",814072082)),new cljs.core.Keyword(null,"title","title",636505583),"Help: JSON Schema",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606)], null));
})], null),"Transform to JSON Schema"], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60160_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__60160_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),json_schema_result], null);
});
/**
 * Renders the main malli panel content including tabs.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.malli.panel_render = (function bb_web_ds_tools$views$malli$panel_render(){
var active_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","active-tab","malli/active-tab",998734819)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"inference","inference",1425333267);
}
})();
var tabs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"label","label",1718410804),"Inference"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"label","label",1718410804),"Generation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"label","label",1718410804),"Validation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"json-schema","json-schema",389191695),new cljs.core.Keyword(null,"label","label",1718410804),"JSON Schema"], null)], null);
var view_props = (function (){var G__60168 = active_tab;
var G__60168__$1 = (((G__60168 instanceof cljs.core.Keyword))?G__60168.fqn:null);
switch (G__60168__$1) {
case "inference":
return bb_web_ds_tools.views.malli.get_inference_props(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-view-state","malli/inference-view-state",-864156552)], null))));

break;
case "generation":
return bb_web_ds_tools.views.malli.get_generation_props(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-view-state","malli/generation-view-state",474874594)], null))));

break;
case "validation":
return bb_web_ds_tools.views.malli.get_validation_props(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validation-view-state","malli/validation-view-state",1493956709)], null))));

break;
case "json-schema":
return bb_web_ds_tools.views.malli.get_json_schema_props(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","json-schema-view-state","malli/json-schema-view-state",660889389)], null))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60168__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.portal_to_top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.nav_tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60167_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),p1__60167_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.unified_view,view_props], null)], null)], null);
});
/**
 * Main component for the Malli Tools view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.malli.panel = (function bb_web_ds_tools$views$malli$panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.create_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"malli-panel",new cljs.core.Keyword(null,"init-event","init-event",-2064696416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),bb_web_ds_tools.views.malli.panel_render], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.malli.js.map
