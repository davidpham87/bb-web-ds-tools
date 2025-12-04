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
var G__52558 = db;
var G__52558__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__52558,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),"[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]",new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),"{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}",new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),(10)], null)):G__52558);
if(cljs.core.not(component_state_exists_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52558__$1,new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),"",new cljs.core.Keyword(null,"input-format","input-format",-422703481),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),"",new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
} else {
return G__52558__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),(function (db,p__52559){
var vec__52560 = p__52559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),(function (db,p__52563){
var vec__52564 = p__52563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52564,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52564,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-max-enum-values","malli/set-max-enum-values",-2140449014),(function (db,p__52567){
var vec__52569 = p__52567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276)], null),bb_web_ds_tools.components.malli.parse_int(n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),(function (db,p__52572){
var vec__52573 = p__52572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),(function (db,p__52576){
var vec__52577 = p__52576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52577,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52577,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),(function (db,p__52580){
var vec__52581 = p__52580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52581,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52581,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195)], null),bb_web_ds_tools.components.malli.parse_int(n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),(function (db,p__52584){
var vec__52585 = p__52584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165)], null),fmt);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732),(function (p__52589,_){
var map__52590 = p__52589;
var map__52590__$1 = cljs.core.__destructure_map(map__52590);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52590__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52591 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52591__$1 = cljs.core.__destructure_map(map__52591);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52591__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(result)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),(function (p__52592,p__52593){
var map__52594 = p__52592;
var map__52594__$1 = cljs.core.__destructure_map(map__52594);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52595 = p__52593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52595,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52595,(1),null);
var map__52598 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52598__$1 = cljs.core.__destructure_map(map__52598);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"samples","samples",635504833));
var generation_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"generation-fmt","generation-fmt",239967584));
var result = bb_web_ds_tools.components.malli.generate_data(schema,samples,generation_fmt);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),(function (p__52599,_){
var map__52600 = p__52599;
var map__52600__$1 = cljs.core.__destructure_map(map__52600);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52601 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52601__$1 = cljs.core.__destructure_map(map__52601);
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"input-fmt","input-fmt",-995230963));
var max_enum_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276));
var input_data = (function (){var G__52603 = input_fmt;
var G__52603__$1 = (((G__52603 instanceof cljs.core.Keyword))?G__52603.fqn:null);
switch (G__52603__$1) {
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
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"schema-str","schema-str",-1744815373).cljs$core$IFn$_invoke$arity$1(result):["Invalid input data for format ",cljs.core.name(input_fmt),"."].join(''));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074),(function (p__52605,_){
var map__52606 = p__52605;
var map__52606__$1 = cljs.core.__destructure_map(map__52606);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52606__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52607 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52607__$1 = cljs.core.__destructure_map(map__52607);
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52607__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
var generation_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52607__$1,new cljs.core.Keyword(null,"generation-fmt","generation-fmt",239967584));
var parsed_data = bb_web_ds_tools.components.malli.save_dataset_data(generated_data,generation_fmt);
if(cljs.core.truth_(parsed_data)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["Malli Generated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join(''),new cljs.core.Keyword(null,"data","data",-232669377),parsed_data], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),(function (db,p__52608){
var vec__52609 = p__52608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609,(1),null);
var dataset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),dataset_id], null));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
if(cljs.core.truth_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),bb_web_ds_tools.components.malli.pretty_print_str(data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),new cljs.core.Keyword(null,"edn","edn",1317840885));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","validate","malli/validate",-313382926),(function (p__52612,_){
var map__52613 = p__52612;
var map__52613__$1 = cljs.core.__destructure_map(map__52613);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52613__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52614 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52614__$1 = cljs.core.__destructure_map(map__52614);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"input-fmt","input-fmt",-995230963));
var schema_result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
var input_data = (function (){var G__52615 = input_fmt;
var G__52615__$1 = (((G__52615 instanceof cljs.core.Keyword))?G__52615.fqn:null);
switch (G__52615__$1) {
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606),(function (p__52616,_){
var map__52617 = p__52616;
var map__52617__$1 = cljs.core.__destructure_map(map__52617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52617__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52618 = bb_web_ds_tools.views.malli.get_malli_state(db);
var map__52618__$1 = cljs.core.__destructure_map(map__52618);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52618__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","inference-view-state","malli/inference-view-state",-864156552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","max-enum-values","malli/max-enum-values",1733036801)], null),(function (p__52620,_){
var vec__52621 = p__52620;
var inference_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(0),null);
var inferred_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(1),null);
var datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(2),null);
var input_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(3),null);
var max_enum_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),inference_input,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),inferred_schema,new cljs.core.Keyword(null,"datasets","datasets",1896364419),datasets,new cljs.core.Keyword(null,"input-format","input-format",-422703481),input_format,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276),max_enum_values], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","generation-view-state","malli/generation-view-state",474874594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-samples","malli/generation-samples",292630870)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-format","malli/generation-format",-1660729782)], null),(function (p__52624,_){
var vec__52625 = p__52624;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(0),null);
var generated_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(1),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(2),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),generated_data,new cljs.core.Keyword(null,"samples","samples",635504833),samples,new cljs.core.Keyword(null,"gen-fmt","gen-fmt",1574891958),fmt], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","validation-view-state","malli/validation-view-state",1493956709),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validation-result","malli/validation-result",-1935991260)], null),(function (p__52628,_){
var vec__52629 = p__52628;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(0),null);
var inference_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(1),null);
var input_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(2),null);
var validation_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),inference_input,new cljs.core.Keyword(null,"input-format","input-format",-422703481),input_format,new cljs.core.Keyword(null,"validation-result","validation-result",2129171031),validation_result], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("malli","json-schema-view-state","malli/json-schema-view-state",660889389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","json-schema-result","malli/json-schema-result",-281547296)], null),(function (p__52636,_){
var vec__52637 = p__52636;
var schema_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637,(0),null);
var json_schema_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),schema_text,new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013),json_schema_result], null);
})], 0));
/**
 * Renders a consistent button component.
 * 
 *   Args:
 *  props (map): Props.
 *  children (rest): Children.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.malli.btn = (function bb_web_ds_tools$views$malli$btn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52760 = arguments.length;
var i__5750__auto___52761 = (0);
while(true){
if((i__5750__auto___52761 < len__5749__auto___52760)){
args__5755__auto__.push((arguments[i__5750__auto___52761]));

var G__52762 = (i__5750__auto___52761 + (1));
i__5750__auto___52761 = G__52762;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.views.malli.btn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.views.malli.btn.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__52642 = props;
var map__52642__$1 = cljs.core.__destructure_map(map__52642);
var primary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"primary","primary",817773892));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"class","class",-2030961996)], 0));
var computed_class = ["!py-1 !px-3 !text-sm !font-medium ",(cljs.core.truth_(primary)?["!",bb_web_ds_tools.theme.bg_button_primary," !",bb_web_ds_tools.theme.text_button_primary].join(''):(cljs.core.truth_(active)?["!",bb_web_ds_tools.theme.bg_button_primary," !",bb_web_ds_tools.theme.text_button_primary].join(''):""
))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clean_props,new cljs.core.Keyword(null,"class","class",-2030961996),computed_class)], null),children);
}));

(bb_web_ds_tools.views.malli.btn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.views.malli.btn.cljs$lang$applyTo = (function (seq52640){
var G__52641 = cljs.core.first(seq52640);
var seq52640__$1 = cljs.core.next(seq52640);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52641,seq52640__$1);
}));

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
bb_web_ds_tools.views.malli.unified_view = (function bb_web_ds_tools$views$malli$unified_view(p__52657){
var map__52658 = p__52657;
var map__52658__$1 = cljs.core.__destructure_map(map__52658);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var editors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"editors","editors",557792993));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2 w-full max-w-3xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between py-4 items-center"], null),controls], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$malli$unified_view_$_iter__52659(s__52660){
return (new cljs.core.LazySeq(null,(function (){
var s__52660__$1 = s__52660;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52660__$1);
if(temp__5825__auto__){
var s__52660__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52660__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__52660__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__52662 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__52661 = (0);
while(true){
if((i__52661 < size__5502__auto__)){
var vec__52663 = cljs.core._nth(c__5501__auto__,i__52661);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(0),null);
var editor_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52663,(1),null);
cljs.core.chunk_append(b__52662,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(editor_config);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "85vh";
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(editor_config,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804)], 0))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__52770 = (i__52661 + (1));
i__52661 = G__52770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52662),bb_web_ds_tools$views$malli$unified_view_$_iter__52659(cljs.core.chunk_rest(s__52660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52662),null);
}
} else {
var vec__52678 = cljs.core.first(s__52660__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52678,(0),null);
var editor_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52678,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(editor_config)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(editor_config);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "85vh";
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(editor_config,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804)], 0))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),bb_web_ds_tools$views$malli$unified_view_$_iter__52659(cljs.core.rest(s__52660__$2)));
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
bb_web_ds_tools.views.malli.get_inference_props = (function bb_web_ds_tools$views$malli$get_inference_props(p__52696){
var map__52697 = p__52696;
var map__52697__$1 = cljs.core.__destructure_map(map__52697);
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var inferred_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545));
var datasets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"input-format","input-format",-422703481));
var max_enum_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"max-enum-values","max-enum-values",1635637276));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Data"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
})], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"csv","csv",-1164440893)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"csv","csv",-1164440893)], null));
})], null),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"tsv","tsv",-1254214356)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"tsv","tsv",-1254214356)], null));
})], null),"TSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"json","json",1279968570)], null));
})], null),"JSON"], null),((cljs.core.seq(datasets))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"Load:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 px-2 text-sm",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52686_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),p1__52686_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Dataset..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$malli$get_inference_props_$_iter__52718(s__52719){
return (new cljs.core.LazySeq(null,(function (){
var s__52719__$1 = s__52719;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52719__$1);
if(temp__5825__auto__){
var s__52719__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52719__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__52719__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__52721 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__52720 = (0);
while(true){
if((i__52720 < size__5502__auto__)){
var vec__52722 = cljs.core._nth(c__5501__auto__,i__52720);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52722,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52722,(1),null);
cljs.core.chunk_append(b__52721,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null));

var G__52774 = (i__52720 + (1));
i__52720 = G__52774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52721),bb_web_ds_tools$views$malli$get_inference_props_$_iter__52718(cljs.core.chunk_rest(s__52719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52721),null);
}
} else {
var vec__52725 = cljs.core.first(s__52719__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52725,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52725,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null),bb_web_ds_tools$views$malli$get_inference_props_$_iter__52718(cljs.core.rest(s__52719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(datasets);
})()], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1 ml-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Max Enum:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 py-1 px-2 text-sm",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),max_enum_values,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52690_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-max-enum-values","malli/set-max-enum-values",-2140449014),p1__52690_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170)], null));
})], null),"Infer Schema"], null)], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__52729 = input_format;
var G__52729__$1 = (((G__52729 instanceof cljs.core.Keyword))?G__52729.fqn:null);
switch (G__52729__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52691_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__52691_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),inferred_schema], null);
});
/**
 * Generates props for the unified view in Generation mode.
 */
bb_web_ds_tools.views.malli.get_generation_props = (function bb_web_ds_tools$views$malli$get_generation_props(p__52738){
var map__52739 = p__52738;
var map__52739__$1 = cljs.core.__destructure_map(map__52739);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var generated_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"generated-data","generated-data",-924406973));
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"samples","samples",635504833));
var gen_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"gen-fmt","gen-fmt",1574891958));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Samples:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 py-1 px-2 text-sm",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),samples,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52730_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),p1__52730_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),"Format:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 px-2 text-sm",new cljs.core.Keyword(null,"value","value",305978217),gen_fmt,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52731_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__52731_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"edn"], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"json"], null),"JSON"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));
})], null),"Generate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074)], null));
})], null),"Save to Datasets"], null)], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52733_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__52733_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),generated_data], null);
});
/**
 * Generates props for the unified view in Validation mode.
 */
bb_web_ds_tools.views.malli.get_validation_props = (function bb_web_ds_tools$views$malli$get_validation_props(p__52743){
var map__52744 = p__52743;
var map__52744__$1 = cljs.core.__destructure_map(map__52744);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var inference_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"inference-input","inference-input",1942128493));
var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"input-format","input-format",-422703481));
var validation_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"validation-result","validation-result",2129171031));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validate","malli/validate",-313382926)], null));
})], null),"Validate"], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52741_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__52741_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"42vh"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Data to Validate",new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__52745 = input_format;
var G__52745__$1 = (((G__52745 instanceof cljs.core.Keyword))?G__52745.fqn:null);
switch (G__52745__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52742_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__52742_SHARP_], null));
}),new cljs.core.Keyword(null,"height","height",1025178622),"42vh"], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),validation_result], null);
});
/**
 * Generates props for the unified view in JSON Schema mode.
 */
bb_web_ds_tools.views.malli.get_json_schema_props = (function bb_web_ds_tools$views$malli$get_json_schema_props(p__52747){
var map__52748 = p__52747;
var map__52748__$1 = cljs.core.__destructure_map(map__52748);
var schema_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52748__$1,new cljs.core.Keyword(null,"schema-text","schema-text",-90970505));
var json_schema_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52748__$1,new cljs.core.Keyword(null,"json-schema-result","json-schema-result",-177590013));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.btn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606)], null));
})], null),"Transform to JSON Schema"], null)], null),new cljs.core.Keyword(null,"editors","editors",557792993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52746_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__52746_SHARP_], null));
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
var view_props = (function (){var G__52750 = active_tab;
var G__52750__$1 = (((G__52750 instanceof cljs.core.Keyword))?G__52750.fqn:null);
switch (G__52750__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52750__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.portal_to_top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.nav_tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52749_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),p1__52749_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.unified_view,view_props], null)], null)], null);
});
/**
 * Main component for the Malli Tools view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.malli.panel = (function bb_web_ds_tools$views$malli$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"malli-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),bb_web_ds_tools.views.malli.panel_render], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.malli.js.map
