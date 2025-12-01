goog.provide('bb_web_ds_tools.views.malli');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","initialize","malli/initialize",521496988),(function (db,_){
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state_exists_QMARK_ = new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
var G__46265 = db;
var G__46265__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__46265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema-text","schema-text",-90970505),"[:map\n [:name string?]\n [:age int?]\n [:tags [:set keyword?]]]",new cljs.core.Keyword(null,"inference-input","inference-input",1942128493),"{:user/id 1\n :user/name \"Alice\"\n :user/email \"alice@example.com\"\n :user/active? true\n :user/roles #{:admin :editor}}"], null)):G__46265);
if(cljs.core.not(component_state_exists_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46265__$1,new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generated-data","generated-data",-924406973),"",new cljs.core.Keyword(null,"input-format","input-format",-422703481),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),"",new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
} else {
return G__46265__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),(function (db,p__46276){
var vec__46277 = p__46276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46277,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46277,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),(function (db,p__46281){
var vec__46282 = p__46281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),(function (db,p__46286){
var vec__46287 = p__46286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46287,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46287,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),(function (db,p__46291){
var vec__46292 = p__46291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46292,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46292,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),(function (db,p__46296){
var vec__46298 = p__46296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46298,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46298,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195)], null),bb_web_ds_tools.components.malli.parse_int(n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),(function (db,p__46302){
var vec__46303 = p__46302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165)], null),fmt);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732),(function (p__46306,_){
var map__46307 = p__46306;
var map__46307__$1 = cljs.core.__destructure_map(map__46307);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46307__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schema_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null));
var result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(result)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","generate-data","malli/generate-data",-1669696744),(function (p__46317,p__46318){
var map__46319 = p__46317;
var map__46319__$1 = cljs.core.__destructure_map(map__46319);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46319__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46320 = p__46318;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46320,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46320,(1),null);
var component_state = new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$3(component_state,new cljs.core.Keyword(null,"generation-samples","generation-samples",396584195),(1));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(component_state,new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165),new cljs.core.Keyword(null,"edn","edn",1317840885));
var result = bb_web_ds_tools.components.malli.generate_data(schema,samples,format);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),(function (p__46323,_){
var map__46324 = p__46323;
var map__46324__$1 = cljs.core.__destructure_map(map__46324);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964).cljs$core$IFn$_invoke$arity$1(db);
var input_text = new cljs.core.Keyword(null,"inference-input","inference-input",1942128493).cljs$core$IFn$_invoke$arity$1(user_input);
var format = new cljs.core.Keyword(null,"input-format","input-format",-422703481).cljs$core$IFn$_invoke$arity$1(component_state);
var input_data = (function (){var G__46325 = format;
var G__46325__$1 = (((G__46325 instanceof cljs.core.Keyword))?G__46325.fqn:null);
switch (G__46325__$1) {
case "edn":
return bb_web_ds_tools.components.malli.detect_and_parse(input_text);

break;
default:
return bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$2(format,input_text);

}
})();
var result = bb_web_ds_tools.components.malli.infer_schema(input_data);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"schema-str","schema-str",-1744815373).cljs$core$IFn$_invoke$arity$1(result):["Invalid input data for format ",cljs.core.name(format),"."].join(''));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545)], null),output)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074),(function (p__46326,_){
var map__46327 = p__46326;
var map__46327__$1 = cljs.core.__destructure_map(map__46327);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46327__$1,new cljs.core.Keyword(null,"db","db",993250759));
var generated_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generated-data","generated-data",-924406973)], null));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"generation-format","generation-format",-1898583165)], null),new cljs.core.Keyword(null,"edn","edn",1317840885));
var parsed_data = bb_web_ds_tools.components.malli.save_dataset_data(generated_data,format);
if(cljs.core.truth_(parsed_data)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["Malli Generated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join(''),new cljs.core.Keyword(null,"data","data",-232669377),parsed_data], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),(function (db,p__46328){
var vec__46329 = p__46328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329,(1),null);
var dataset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),dataset_id], null));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
if(cljs.core.truth_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null),bb_web_ds_tools.components.malli.pretty_print_str(data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),new cljs.core.Keyword(null,"edn","edn",1317840885));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","validate","malli/validate",-313382926),(function (p__46332,_){
var map__46333 = p__46332;
var map__46333__$1 = cljs.core.__destructure_map(map__46333);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46333__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schema_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null));
var input_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"inference-input","inference-input",1942128493)], null));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"input-format","input-format",-422703481)], null),new cljs.core.Keyword(null,"edn","edn",1317840885));
var schema_result = bb_web_ds_tools.components.malli.parse_schema_and_generate(schema_text);
var input_data = (function (){var G__46334 = format;
var G__46334__$1 = (((G__46334 instanceof cljs.core.Keyword))?G__46334.fqn:null);
switch (G__46334__$1) {
case "edn":
return bb_web_ds_tools.components.malli.detect_and_parse(input_text);

break;
default:
return bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$2(format,input_text);

}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(schema_result))){
var result = bb_web_ds_tools.components.malli.validate_data(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(schema_result),input_data);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031)], null),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.malli","malli","bb-web-ds-tools.views.malli/malli",-838390964),new cljs.core.Keyword(null,"validation-result","validation-result",2129171031)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(schema_result))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606),(function (p__46335,_){
var map__46336 = p__46335;
var map__46336__$1 = cljs.core.__destructure_map(map__46336);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46336__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schema_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"schema-text","schema-text",-90970505)], null));
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
bb_web_ds_tools.views.malli.inference_view = (function bb_web_ds_tools$views$malli$inference_view(){
var inference_input_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null));
var inferred_schema_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null));
var datasets_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null));
var input_format_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null));
return (function (){
var inference_input = cljs.core.deref(inference_input_sub);
var inferred_schema = cljs.core.deref(inferred_schema_sub);
var datasets = cljs.core.deref(datasets_sub);
var input_format = cljs.core.deref(input_format_sub);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Data"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"edn","edn",1317840885)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
})], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"csv","csv",-1164440893)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"csv","csv",-1164440893)], null));
})], null),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"tsv","tsv",-1254214356)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"tsv","tsv",-1254214356)], null));
})], null),"TSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_format,new cljs.core.Keyword(null,"json","json",1279968570)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword(null,"json","json",1279968570)], null));
})], null),"JSON"], null)], null),((cljs.core.seq(datasets))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"Load:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 px-2 text-xs",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46342_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),p1__46342_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Dataset..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$malli$inference_view_$_iter__46344(s__46345){
return (new cljs.core.LazySeq(null,(function (){
var s__46345__$1 = s__46345;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46345__$1);
if(temp__5825__auto__){
var s__46345__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46345__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__46345__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__46347 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__46346 = (0);
while(true){
if((i__46346 < size__5502__auto__)){
var vec__46348 = cljs.core._nth(c__5501__auto__,i__46346);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46348,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46348,(1),null);
cljs.core.chunk_append(b__46347,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null));

var G__46376 = (i__46346 + (1));
i__46346 = G__46376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46347),bb_web_ds_tools$views$malli$inference_view_$_iter__46344(cljs.core.chunk_rest(s__46345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46347),null);
}
} else {
var vec__46351 = cljs.core.first(s__46345__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46351,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46351,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null),bb_web_ds_tools$views$malli$inference_view_$_iter__46344(cljs.core.rest(s__46345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(datasets);
})()], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__46354 = input_format;
var G__46354__$1 = (((G__46354 instanceof cljs.core.Keyword))?G__46354.fqn:null);
switch (G__46354__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46343_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__46343_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170)], null));
})], null),"Infer Schema"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Inferred Schema"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_viewer,inferred_schema], null)], null)], null);
});
});
bb_web_ds_tools.views.malli.generation_view = (function bb_web_ds_tools$views$malli$generation_view(){
var schema_text = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)));
var generated_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null)));
var samples = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-samples","malli/generation-samples",292630870)], null)));
var format = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generation-format","malli/generation-format",-1660729782)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46355_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__46355_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-end gap-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Samples"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),samples,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46356_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),p1__46356_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-32"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Format"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),format,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46357_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__46357_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"edn"], null),"EDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"json"], null),"JSON"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-[1px] flex-grow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));
})], null),"Parse and Generate"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Generated Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074)], null));
})], null),"Save to Datasets"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_viewer,generated_data], null)], null)], null);
});
bb_web_ds_tools.views.malli.validation_view = (function bb_web_ds_tools$views$malli$validation_view(){
var schema_text = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)));
var inference_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)));
var input_format = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","input-format","malli/input-format",-455291986)], null)));
var validation_result = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validation-result","malli/validation-result",-1935991260)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46361_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__46361_SHARP_], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Data to Validate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),inference_input,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__46364 = input_format;
var G__46364__$1 = (((G__46364 instanceof cljs.core.Keyword))?G__46364.fqn:null);
switch (G__46364__$1) {
case "edn":
return "clojure";

break;
case "json":
return "json";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46362_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),p1__46362_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","validate","malli/validate",-313382926)], null));
})], null),"Validate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Validation Result"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_viewer,validation_result], null)], null)], null);
});
bb_web_ds_tools.views.malli.json_schema_view = (function bb_web_ds_tools$views$malli$json_schema_view(){
var schema_text = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)));
var json_schema_result = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","json-schema-result","malli/json-schema-result",-281547296)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Schema (EDN)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),schema_text,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46365_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),p1__46365_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606)], null));
})], null),"Transform to JSON Schema"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4 space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"JSON Schema"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_viewer,json_schema_result], null)], null)], null);
});
bb_web_ds_tools.views.malli.panel_render = (function bb_web_ds_tools$views$malli$panel_render(){
var active_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","active-tab","malli/active-tab",998734819)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"inference","inference",1425333267);
}
})();
var tabs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"label","label",1718410804),"Inference"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"label","label",1718410804),"Generation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"label","label",1718410804),"Validation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"json-schema","json-schema",389191695),new cljs.core.Keyword(null,"label","label",1718410804),"JSON Schema"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.nav_tabs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46366_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),p1__46366_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden"], null),(function (){var G__46367 = active_tab;
var G__46367__$1 = (((G__46367 instanceof cljs.core.Keyword))?G__46367.fqn:null);
switch (G__46367__$1) {
case "inference":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.inference_view], null);

break;
case "generation":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.generation_view], null);

break;
case "validation":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.validation_view], null);

break;
case "json-schema":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.json_schema_view], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46367__$1)].join('')));

}
})()], null)], null);
});
bb_web_ds_tools.views.malli.panel = (function bb_web_ds_tools$views$malli$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"malli-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),bb_web_ds_tools.views.malli.panel_render], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.malli.js.map
