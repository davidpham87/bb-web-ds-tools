goog.provide('bb_web_ds_tools.views.pyodide');
/**
 * List of Python packages to install via micropip on initialization.
 */
bb_web_ds_tools.views.pyodide.packages = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["numpy","pandas","altair","cytoolz","scikit-learn","sqlite3","protobuf","vega-datasets"], null);
/**
 * Plots to show how to use altair
 */
bb_web_ds_tools.views.pyodide.plot_code = "source = vd.data.cars()\n\nchart = alt.Chart(source).mark_circle(size=60).encode(\n    x='Horsepower',\n    y='Miles_per_Gallon',\n    color='Origin',\n    tooltip=['Name', 'Origin', 'Horsepower', 'Miles_per_Gallon']\n).interactive()\n\n# Then in portal, click on value and then the \"v\" key and choose HTML viewer\nchart.to_html()";
/**
 * initial code from the console
 */
bb_web_ds_tools.views.pyodide.initial_code = (function (){var import_fn = (function (p1__32525_SHARP_,p2__32526_SHARP_){
return ["import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32525_SHARP_),(cljs.core.truth_(p2__32526_SHARP_)?[" as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32526_SHARP_)].join(''):null)].join('');
});
var install_fn = (function (p1__32527_SHARP_){
return ["await micropip.install(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32527_SHARP_),"\")"].join('');
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["import micropip","from datasets import datasets","",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(install_fn,bb_web_ds_tools.views.pyodide.packages)),"",import_fn("numpy","np"),import_fn("pandas","pd"),import_fn("altair","alt"),import_fn("sklearn.linear_model","lm"),import_fn("cytoolz","tz"),import_fn("vega_datasets","vd"),"",bb_web_ds_tools.views.pyodide.plot_code], null));
})();
/**
 * Code run at start of pyodide
 */
bb_web_ds_tools.views.pyodide.setup_code = ["import pyodide_js\nawait pyodide_js.loadPackage('micropip')","\n",bb_web_ds_tools.views.pyodide.initial_code].join('');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-update","bb-web-ds-tools.views.pyodide/handle-dataset-update",-1582082681),(function (p__32528,p__32529){
var map__32530 = p__32528;
var map__32530__$1 = cljs.core.__destructure_map(map__32530);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32530__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32531 = p__32529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32531,(0),null);
var map__32534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32531,(1),null);
var map__32534__$1 = cljs.core.__destructure_map(map__32534);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32534__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32534__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"data","data",-232669377),value], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-delete","bb-web-ds-tools.views.pyodide/handle-dataset-delete",-1207199684),(function (p__32535,p__32536){
var map__32537 = p__32535;
var map__32537__$1 = cljs.core.__destructure_map(map__32537);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32537__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32538 = p__32536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32538,(0),null);
var map__32541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32538,(1),null);
var map__32541__$1 = cljs.core.__destructure_map(map__32541);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),key], null)], null)], null)], null);
}));
/**
 * Handles messages from the Pyodide worker.
 * 
 *   Args:
 *  msg (map): The message object.
 * 
 *   Returns:
 *  nil: Dispatches events.
 */
bb_web_ds_tools.views.pyodide.on_worker_message = (function bb_web_ds_tools$views$pyodide$on_worker_message(msg){
var map__32544 = msg;
var map__32544__$1 = cljs.core.__destructure_map(map__32544);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32544__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32544__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32544__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__32545 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__32545__$1 = (((G__32545 instanceof cljs.core.Keyword))?G__32545.fqn:null);
switch (G__32545__$1) {
case "ready":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","on-ready","bb-web-ds-tools.views.pyodide/on-ready",1916532562)], null));

break;
case "error":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),msg], null));

break;
case "result":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value], null));

break;
case "stdout":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814),text], null),new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));

break;
case "dataset-update":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-update","bb-web-ds-tools.views.pyodide/handle-dataset-update",-1582082681),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null));

break;
case "dataset-delete":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-delete","bb-web-ds-tools.views.pyodide/handle-dataset-delete",-1207199684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)], null));

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","initialize","bb-web-ds-tools.views.pyodide/initialize",-110047080),(function (p__32546,_){
var map__32547 = p__32546;
var map__32547__$1 = cljs.core.__destructure_map(map__32547);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null));
var ready_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in((function (){var G__32549 = db;
if(cljs.core.not(exists_QMARK_)){
return cljs.core.assoc_in(G__32549,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null),bb_web_ds_tools.views.pyodide.initial_code);
} else {
return G__32549;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050)], null),cljs.core.not(ready_QMARK_)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(ready_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","load-runtime","bb-web-ds-tools.views.pyodide/load-runtime",-658206477)], null))], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","user-input-root","bb-web-ds-tools.views.pyodide/user-input-root",-1555968511),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","user-input-root","bb-web-ds-tools.views.pyodide/user-input-root",-1555968511)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","pyodide","bb-web-ds-tools.views.pyodide/pyodide",-452684650),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","pyodide","bb-web-ds-tools.views.pyodide/pyodide",-452684650)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","pyodide","bb-web-ds-tools.views.pyodide/pyodide",-452684650)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","mac-os?","bb-web-ds-tools.views.pyodide/mac-os?",-1659496014),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189),(function (db,p__32554){
var vec__32555 = p__32554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-loading","bb-web-ds-tools.views.pyodide/set-loading",-844163320),(function (db,p__32558){
var vec__32559 = p__32558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-ready","bb-web-ds-tools.views.pyodide/set-ready",-104921681),(function (db,p__32562){
var vec__32563 = p__32562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null),v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","on-ready","bb-web-ds-tools.views.pyodide/on-ready",1916532562),(function (p__32567,_){
var map__32568 = p__32567;
var map__32568__$1 = cljs.core.__destructure_map(map__32568);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32568__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-loading","bb-web-ds-tools.views.pyodide/set-loading",-844163320),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),bb_web_ds_tools.views.pyodide.setup_code], null)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","load-runtime","bb-web-ds-tools.views.pyodide/load-runtime",-658206477),(function (_){
return bb_web_ds_tools.runtime.pyodide.load_runtime_worker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bb_web_ds_tools.views.pyodide.on_worker_message], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","execute-python","bb-web-ds-tools.views.pyodide/execute-python",2027548435),(function (code){
return bb_web_ds_tools.runtime.pyodide.eval_in_worker(code);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","sync-datasets","bb-web-ds-tools.views.pyodide/sync-datasets",-336788001),(function (datasets){
return bb_web_ds_tools.runtime.pyodide.sync_datasets(datasets);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),(function (_,p__32572){
var vec__32573 = p__32572;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32573,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32573,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","execute-python","bb-web-ds-tools.views.pyodide/execute-python",2027548435),code], null)], null)], null);
}));
/**
 * Renders the internal Pyodide view content.
 * 
 *   Args:
 *  datasets (map): The datasets map.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.pyodide.internal_view = (function bb_web_ds_tools$views$pyodide$internal_view(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32619 = arguments.length;
var i__5750__auto___32620 = (0);
while(true){
if((i__5750__auto___32620 < len__5749__auto___32619)){
args__5755__auto__.push((arguments[i__5750__auto___32620]));

var G__32621 = (i__5750__auto___32620 + (1));
i__5750__auto___32620 = G__32621;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.views.pyodide.internal_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.views.pyodide.internal_view.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__32581){
var vec__32583 = p__32581;
var map__32586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32583,(0),null);
var map__32586__$1 = cljs.core.__destructure_map(map__32586);
var header_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32586__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var code_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var datasets__$1 = cljs.core.second(reagent.core.argv(this$));
return bb_web_ds_tools.runtime.pyodide.sync_datasets(datasets__$1);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__32588){
var vec__32589 = p__32588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(0),null);
var old_datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(1),null);
var new_datasets = cljs.core.second(reagent.core.argv(this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_datasets,new_datasets)){
return bb_web_ds_tools.runtime.pyodide.sync_datasets(new_datasets);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__32622__delegate = function (datasets__$1,p__32592){
var vec__32593 = p__32592;
var map__32596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32593,(0),null);
var map__32596__$1 = cljs.core.__destructure_map(map__32596);
var header_content__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var code = cljs.core.deref(code_sub);
var mac_os_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","mac-os?","bb-web-ds-tools.views.pyodide/mac-os?",-1659496014)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050)], null)));
var ready_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Python Code",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"python",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32576_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189),p1__32576_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__32577_SHARP_){
return bb_web_ds_tools.components.editor.setup_editor_actions(p1__32577_SHARP_,mac_os_QMARK_,(function (c){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),c], null));
}));
})], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),code], null));
})], null),"Run"], null)], null)], null);
};
var G__32622 = function (datasets__$1,var_args){
var p__32592 = null;
if (arguments.length > 1) {
var G__32628__i = 0, G__32628__a = new Array(arguments.length -  1);
while (G__32628__i < G__32628__a.length) {G__32628__a[G__32628__i] = arguments[G__32628__i + 1]; ++G__32628__i;}
  p__32592 = new cljs.core.IndexedSeq(G__32628__a,0,null);
} 
return G__32622__delegate.call(this,datasets__$1,p__32592);};
G__32622.cljs$lang$maxFixedArity = 1;
G__32622.cljs$lang$applyTo = (function (arglist__32629){
var datasets__$1 = cljs.core.first(arglist__32629);
var p__32592 = cljs.core.rest(arglist__32629);
return G__32622__delegate(datasets__$1,p__32592);
});
G__32622.cljs$core$IFn$_invoke$arity$variadic = G__32622__delegate;
return G__32622;
})()
], null));
}));

(bb_web_ds_tools.views.pyodide.internal_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.views.pyodide.internal_view.cljs$lang$applyTo = (function (seq32578){
var G__32579 = cljs.core.first(seq32578);
var seq32578__$1 = cljs.core.next(seq32578);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32579,seq32578__$1);
}));

/**
 * Main component for the Pyodide view. Initializes on mount.
 * 
 *   Args:
 *  props (map, optional): Configuration props.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.pyodide.panel = (function bb_web_ds_tools$views$pyodide$panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32631 = arguments.length;
var i__5750__auto___32632 = (0);
while(true){
if((i__5750__auto___32632 < len__5749__auto___32631)){
args__5755__auto__.push((arguments[i__5750__auto___32632]));

var G__32633 = (i__5750__auto___32632 + (1));
i__5750__auto___32632 = G__32633;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.pyodide.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.pyodide.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__32607){
var vec__32608 = p__32607;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32608,(0),null);
var datasets_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","initialize","bb-web-ds-tools.views.pyodide/initialize",-110047080)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__32640__delegate = function (p__32611){
var vec__32612 = p__32611;
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32612,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.internal_view,cljs.core.deref(datasets_sub),props__$1], null);
};
var G__32640 = function (var_args){
var p__32611 = null;
if (arguments.length > 0) {
var G__32641__i = 0, G__32641__a = new Array(arguments.length -  0);
while (G__32641__i < G__32641__a.length) {G__32641__a[G__32641__i] = arguments[G__32641__i + 0]; ++G__32641__i;}
  p__32611 = new cljs.core.IndexedSeq(G__32641__a,0,null);
} 
return G__32640__delegate.call(this,p__32611);};
G__32640.cljs$lang$maxFixedArity = 0;
G__32640.cljs$lang$applyTo = (function (arglist__32642){
var p__32611 = cljs.core.seq(arglist__32642);
return G__32640__delegate(p__32611);
});
G__32640.cljs$core$IFn$_invoke$arity$variadic = G__32640__delegate;
return G__32640;
})()
], null));
}));

(bb_web_ds_tools.views.pyodide.panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.pyodide.panel.cljs$lang$applyTo = (function (seq32603){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32603));
}));


//# sourceMappingURL=bb_web_ds_tools.views.pyodide.js.map
