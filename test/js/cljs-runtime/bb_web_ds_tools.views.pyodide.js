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
bb_web_ds_tools.views.pyodide.initial_code = (function (){var import_fn = (function (p1__49271_SHARP_,p2__49272_SHARP_){
return ["import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49271_SHARP_),(cljs.core.truth_(p2__49272_SHARP_)?[" as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49272_SHARP_)].join(''):null)].join('');
});
var install_fn = (function (p1__49273_SHARP_){
return ["await micropip.install(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49273_SHARP_),"\")"].join('');
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["import micropip","from datasets import datasets","",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(install_fn,bb_web_ds_tools.views.pyodide.packages)),"",import_fn("numpy","np"),import_fn("pandas","pd"),import_fn("altair","alt"),import_fn("sklearn.linear_model","lm"),import_fn("cytoolz","tz"),import_fn("vega_datasets","vd"),"",bb_web_ds_tools.views.pyodide.plot_code], null));
})();
/**
 * Code run at start of pyodide
 */
bb_web_ds_tools.views.pyodide.setup_code = ["import pyodide_js\nawait pyodide_js.loadPackage('micropip')","\n",bb_web_ds_tools.views.pyodide.initial_code].join('');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-update","bb-web-ds-tools.views.pyodide/handle-dataset-update",-1582082681),(function (p__49278,p__49279){
var map__49280 = p__49278;
var map__49280__$1 = cljs.core.__destructure_map(map__49280);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49280__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49281 = p__49279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(0),null);
var map__49284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(1),null);
var map__49284__$1 = cljs.core.__destructure_map(map__49284);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49284__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49284__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"data","data",-232669377),value], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","handle-dataset-delete","bb-web-ds-tools.views.pyodide/handle-dataset-delete",-1207199684),(function (p__49285,p__49286){
var map__49287 = p__49285;
var map__49287__$1 = cljs.core.__destructure_map(map__49287);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49287__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49288 = p__49286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49288,(0),null);
var map__49291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49288,(1),null);
var map__49291__$1 = cljs.core.__destructure_map(map__49291);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
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
var map__49292 = msg;
var map__49292__$1 = cljs.core.__destructure_map(map__49292);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__49300 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__49300__$1 = (((G__49300 instanceof cljs.core.Keyword))?G__49300.fqn:null);
switch (G__49300__$1) {
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","initialize","bb-web-ds-tools.views.pyodide/initialize",-110047080),(function (p__49307,_){
var map__49308 = p__49307;
var map__49308__$1 = cljs.core.__destructure_map(map__49308);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49308__$1,new cljs.core.Keyword(null,"db","db",993250759));
var exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null));
var ready_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in((function (){var G__49309 = db;
if(cljs.core.not(exists_QMARK_)){
return cljs.core.assoc_in(G__49309,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null),bb_web_ds_tools.views.pyodide.initial_code);
} else {
return G__49309;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189),(function (db,p__49336){
var vec__49337 = p__49336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49337,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-loading","bb-web-ds-tools.views.pyodide/set-loading",-844163320),(function (db,p__49341){
var vec__49342 = p__49341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-ready","bb-web-ds-tools.views.pyodide/set-ready",-104921681),(function (db,p__49345){
var vec__49346 = p__49345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49346,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null),v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","on-ready","bb-web-ds-tools.views.pyodide/on-ready",1916532562),(function (p__49350,_){
var map__49351 = p__49350;
var map__49351__$1 = cljs.core.__destructure_map(map__49351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49351__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),(function (_,p__49353){
var vec__49354 = p__49353;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354,(1),null);
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
bb_web_ds_tools.views.pyodide.internal_view = (function bb_web_ds_tools$views$pyodide$internal_view(datasets){
var code_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var datasets__$1 = cljs.core.second(reagent.core.argv(this$));
return bb_web_ds_tools.runtime.pyodide.sync_datasets(datasets__$1);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__49360){
var vec__49361 = p__49360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49361,(0),null);
var old_datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49361,(1),null);
var new_datasets = cljs.core.second(reagent.core.argv(this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_datasets,new_datasets)){
return bb_web_ds_tools.runtime.pyodide.sync_datasets(new_datasets);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (datasets__$1){
var code = cljs.core.deref(code_sub);
var mac_os_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","mac-os?","bb-web-ds-tools.views.pyodide/mac-os?",-1659496014)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","loading?","bb-web-ds-tools.views.pyodide/loading?",445355050)], null)));
var ready_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","ready?","bb-web-ds-tools.views.pyodide/ready?",1283113202)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full rounded mb-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full p-2 space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Python Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"code","code",1586293142)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Python (Pyodide)",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),code], null));
})], null),"Run"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border  ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"python",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49358_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189),p1__49358_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__49359_SHARP_){
return bb_web_ds_tools.components.editor.setup_editor_actions(p1__49359_SHARP_,mac_os_QMARK_,(function (c){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),c], null));
}));
})], null)], null)], null)], null)], null);
})], null));
});
/**
 * Main component for the Pyodide view. Initializes on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.pyodide.panel = (function bb_web_ds_tools$views$pyodide$panel(){
var datasets_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","initialize","bb-web-ds-tools.views.pyodide/initialize",-110047080)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.internal_view,cljs.core.deref(datasets_sub)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.pyodide.js.map
