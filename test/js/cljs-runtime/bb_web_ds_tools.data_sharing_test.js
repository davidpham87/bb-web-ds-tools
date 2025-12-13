goog.provide('bb_web_ds_tools.data_sharing_test');
bb_web_ds_tools.data_sharing_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.data_sharing_test.mount_component = (function bb_web_ds_tools$data_sharing_test$mount_component(comp){
var div = document.createElement("div");
document.body.appendChild(div);

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,div);

reagent.core.flush();

return div;
});
bb_web_ds_tools.data_sharing_test.unmount_component = (function bb_web_ds_tools$data_sharing_test$unmount_component(div){
reagent.dom.unmount_component_at_node(div);

return document.body.removeChild(div);
});
bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test = (function bb_web_ds_tools$data_sharing_test$data_sharing_e2e_test(){
return cljs.test.test_var(bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$var);
});
bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data sharing across runtimes"], 0));

try{var portal_submissions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var pyodide_synced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var webr_synced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var toy_dataset_name = "toy-data";
var toy_dataset_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null);
var toy_dataset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),toy_dataset_name,new cljs.core.Keyword(null,"data","data",-232669377),toy_dataset_data], null);
var worker_msgs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var mock_worker = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postMessage","postMessage",1183463735),(function (msg){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(worker_msgs,cljs.core.conj,msg);
})], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null));

var submit_orig_val__65737 = portal.web.submit;
var submit_temp_val__65738 = (function() { 
var G__65837__delegate = function (val,_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal_submissions,cljs.core.conj,val);
};
var G__65837 = function (val,var_args){
var _ = null;
if (arguments.length > 1) {
var G__65838__i = 0, G__65838__a = new Array(arguments.length -  1);
while (G__65838__i < G__65838__a.length) {G__65838__a[G__65838__i] = arguments[G__65838__i + 1]; ++G__65838__i;}
  _ = new cljs.core.IndexedSeq(G__65838__a,0,null);
} 
return G__65837__delegate.call(this,val,_);};
G__65837.cljs$lang$maxFixedArity = 1;
G__65837.cljs$lang$applyTo = (function (arglist__65839){
var val = cljs.core.first(arglist__65839);
var _ = cljs.core.rest(arglist__65839);
return G__65837__delegate(val,_);
});
G__65837.cljs$core$IFn$_invoke$arity$variadic = G__65837__delegate;
return G__65837;
})()
;
(portal.web.submit = submit_temp_val__65738);

try{cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to datasets view and import dataset"], 0));

try{re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),toy_dataset], null));

var datasets_65841 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null)));
try{var values__11365__auto___65842 = (new cljs.core.List(null,(function (p__65759){
var vec__65760 = p__65759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65760,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65760,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,datasets_65841,null,(1),null)),(2),null));
var result__11366__auto___65843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65842);
if(cljs.core.truth_(result__11366__auto___65843)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65842),"Dataset should be added to app-db"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65842),null,(1),null)),(2),null)),"Dataset should be added to app-db"]));
}

}catch (e65750){var t__11416__auto___65845 = e65750;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,t__11416__auto___65845,"Dataset should be added to app-db"]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to Clojure REPL and eval keys"], 0));

try{re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","add-instance","bb-web-ds-tools.views.repl/add-instance",1684010627)], null));

var instances_65850 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null)));
var instance_id_65851 = cljs.core.ffirst(instances_65850);
var sci_worker_orig_val__65763_65852 = bb_web_ds_tools.runtime.sci.sci_worker;
var init_BANG__orig_val__65764_65853 = bb_web_ds_tools.runtime.sci.init_BANG_;
var post_message_orig_val__65765_65854 = bb_web_ds_tools.utils.worker.post_message;
var sci_worker_temp_val__65766_65855 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(mock_worker);
var init_BANG__temp_val__65767_65856 = (function() { 
var G__65878__delegate = function (_){
return null;
};
var G__65878 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__65879__i = 0, G__65879__a = new Array(arguments.length -  0);
while (G__65879__i < G__65879__a.length) {G__65879__a[G__65879__i] = arguments[G__65879__i + 0]; ++G__65879__i;}
  _ = new cljs.core.IndexedSeq(G__65879__a,0,null);
} 
return G__65878__delegate.call(this,_);};
G__65878.cljs$lang$maxFixedArity = 0;
G__65878.cljs$lang$applyTo = (function (arglist__65881){
var _ = cljs.core.seq(arglist__65881);
return G__65878__delegate(_);
});
G__65878.cljs$core$IFn$_invoke$arity$variadic = G__65878__delegate;
return G__65878;
})()
;
var post_message_temp_val__65768_65857 = (function (w,msg){
var fexpr__65769 = new cljs.core.Keyword(null,"postMessage","postMessage",1183463735).cljs$core$IFn$_invoke$arity$1(w);
return (fexpr__65769.cljs$core$IFn$_invoke$arity$1 ? fexpr__65769.cljs$core$IFn$_invoke$arity$1(msg) : fexpr__65769.call(null,msg));
});
(bb_web_ds_tools.runtime.sci.sci_worker = sci_worker_temp_val__65766_65855);

(bb_web_ds_tools.runtime.sci.init_BANG_ = init_BANG__temp_val__65767_65856);

(bb_web_ds_tools.utils.worker.post_message = post_message_temp_val__65768_65857);

try{var div_65884 = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.panel], null));
try{bb_web_ds_tools.runtime.sci.sync_datasets_BANG_();

try{var values__11365__auto___65885 = (new cljs.core.List(null,(function (p1__65720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update-datasets",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__65720_SHARP_));
}),(new cljs.core.List(null,cljs.core.deref(worker_msgs),null,(1),null)),(2),null));
var result__11366__auto___65886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65885);
if(cljs.core.truth_(result__11366__auto___65886)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"pass","pass",1574159993),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65885),"SCI worker should receive dataset update"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"fail","fail",1706214930),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65885),null,(1),null)),(2),null)),"SCI worker should receive dataset update"]));
}

}catch (e65780){var t__11416__auto___65888 = e65780;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"error","error",-978969032),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65720#","p1__65720#",1528457401,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,t__11416__auto___65888,"SCI worker should receive dataset update"]));
}
cljs.core.reset_BANG_(worker_msgs,cljs.core.PersistentVector.EMPTY);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),instance_id_65851,"(keys @user/datasets)"], null));

try{var values__11365__auto___65892 = (new cljs.core.List(null,(function (p1__65721_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("eval",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__65721_SHARP_));
}),(new cljs.core.List(null,cljs.core.deref(worker_msgs),null,(1),null)),(2),null));
var result__11366__auto___65893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65892);
if(cljs.core.truth_(result__11366__auto___65893)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65892),"SCI worker should receive eval message"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65892),null,(1),null)),(2),null)),"SCI worker should receive eval message"]));
}

}catch (e65781){var t__11416__auto___65898 = e65781;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__65721#","p1__65721#",427192052,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,t__11416__auto___65898,"SCI worker should receive eval message"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div_65884);
}}finally {(bb_web_ds_tools.utils.worker.post_message = post_message_orig_val__65765_65854);

(bb_web_ds_tools.runtime.sci.init_BANG_ = init_BANG__orig_val__65764_65853);

(bb_web_ds_tools.runtime.sci.sci_worker = sci_worker_orig_val__65763_65852);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to Python view and verify access"], 0));

try{var sync_datasets_orig_val__65793_65904 = bb_web_ds_tools.runtime.pyodide.sync_datasets;
var eval_in_worker_orig_val__65794_65905 = bb_web_ds_tools.runtime.pyodide.eval_in_worker;
var sync_datasets_temp_val__65795_65906 = (function (ds){
return cljs.core.reset_BANG_(pyodide_synced,ds);
});
var eval_in_worker_temp_val__65796_65907 = (function (code){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"keys(datasets)");
if(and__5023__auto__){
return cljs.core.some((function (p__65800){
var vec__65801 = p__65800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65801,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65801,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),cljs.core.deref(pyodide_synced));
} else {
return and__5023__auto__;
}
})())){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.List(null,toy_dataset_name,null,(1),null))], null));
} else {
return null;
}
});
(bb_web_ds_tools.runtime.pyodide.sync_datasets = sync_datasets_temp_val__65795_65906);

(bb_web_ds_tools.runtime.pyodide.eval_in_worker = eval_in_worker_temp_val__65796_65907);

try{var div_65920 = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.panel], null));
try{reagent.core.flush();

try{var values__11365__auto___65921 = (new cljs.core.List(null,(function (p__65805){
var vec__65806 = p__65805;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65806,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65806,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,cljs.core.deref(pyodide_synced),null,(1),null)),(2),null));
var result__11366__auto___65922 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65921);
if(cljs.core.truth_(result__11366__auto___65922)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"pass","pass",1574159993),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65921),"Pyodide runtime should receive datasets via component mount"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"fail","fail",1706214930),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65921),null,(1),null)),(2),null)),"Pyodide runtime should receive datasets via component mount"]));
}

}catch (e65804){var t__11416__auto___65924 = e65804;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"error","error",-978969032),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,t__11416__auto___65924,"Pyodide runtime should receive datasets via component mount"]));
}
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),"keys(datasets)"], null));

try{var values__11365__auto___65925 = (new cljs.core.List(null,(function (p1__65722_SHARP_){
return ((cljs.core.map_QMARK_(p1__65722_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__65722_SHARP_),(new cljs.core.List(null,toy_dataset_name,null,(1),null)))));
}),(new cljs.core.List(null,cljs.core.deref(portal_submissions),null,(1),null)),(2),null));
var result__11366__auto___65926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65925);
if(cljs.core.truth_(result__11366__auto___65926)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65925),"Portal should show dataset keys from Python"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65925),null,(1),null)),(2),null)),"Portal should show dataset keys from Python"]));
}

}catch (e65812){var t__11416__auto___65927 = e65812;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65722#","p1__65722#",618106251,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,t__11416__auto___65927,"Portal should show dataset keys from Python"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div_65920);
}}finally {(bb_web_ds_tools.runtime.pyodide.eval_in_worker = eval_in_worker_orig_val__65794_65905);

(bb_web_ds_tools.runtime.pyodide.sync_datasets = sync_datasets_orig_val__65793_65904);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to R view and verify access"], 0));

try{var bind_datasets_orig_val__65813 = bb_web_ds_tools.runtime.webr.bind_datasets;
var eval_in_main_orig_val__65814 = bb_web_ds_tools.runtime.webr.eval_in_main;
var bind_datasets_temp_val__65815 = (function() { 
var G__65934__delegate = function (ds,_){
return cljs.core.reset_BANG_(webr_synced,ds);
};
var G__65934 = function (ds,var_args){
var _ = null;
if (arguments.length > 1) {
var G__65935__i = 0, G__65935__a = new Array(arguments.length -  1);
while (G__65935__i < G__65935__a.length) {G__65935__a[G__65935__i] = arguments[G__65935__i + 1]; ++G__65935__i;}
  _ = new cljs.core.IndexedSeq(G__65935__a,0,null);
} 
return G__65934__delegate.call(this,ds,_);};
G__65934.cljs$lang$maxFixedArity = 1;
G__65934.cljs$lang$applyTo = (function (arglist__65936){
var ds = cljs.core.first(arglist__65936);
var _ = cljs.core.rest(arglist__65936);
return G__65934__delegate(ds,_);
});
G__65934.cljs$core$IFn$_invoke$arity$variadic = G__65934__delegate;
return G__65934;
})()
;
var eval_in_main_temp_val__65816 = (function() { 
var G__65937__delegate = function (code,args){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"names(datasets)");
if(and__5023__auto__){
return cljs.core.some((function (p__65817){
var vec__65818 = p__65817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),cljs.core.deref(webr_synced));
} else {
return and__5023__auto__;
}
})())){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.List(null,toy_dataset_name,null,(1),null))], null));
} else {
return null;
}
};
var G__65937 = function (code,var_args){
var args = null;
if (arguments.length > 1) {
var G__65939__i = 0, G__65939__a = new Array(arguments.length -  1);
while (G__65939__i < G__65939__a.length) {G__65939__a[G__65939__i] = arguments[G__65939__i + 1]; ++G__65939__i;}
  args = new cljs.core.IndexedSeq(G__65939__a,0,null);
} 
return G__65937__delegate.call(this,code,args);};
G__65937.cljs$lang$maxFixedArity = 1;
G__65937.cljs$lang$applyTo = (function (arglist__65940){
var code = cljs.core.first(arglist__65940);
var args = cljs.core.rest(arglist__65940);
return G__65937__delegate(code,args);
});
G__65937.cljs$core$IFn$_invoke$arity$variadic = G__65937__delegate;
return G__65937;
})()
;
(bb_web_ds_tools.runtime.webr.bind_datasets = bind_datasets_temp_val__65815);

(bb_web_ds_tools.runtime.webr.eval_in_main = eval_in_main_temp_val__65816);

try{var div = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel], null));
try{reagent.core.flush();

try{var values__11365__auto___65941 = (new cljs.core.List(null,(function (p__65822){
var vec__65823 = p__65822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65823,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65823,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,cljs.core.deref(webr_synced),null,(1),null)),(2),null));
var result__11366__auto___65942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___65941);
if(cljs.core.truth_(result__11366__auto___65942)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"pass","pass",1574159993),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65941),"WebR runtime should receive datasets via component mount/event"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"fail","fail",1706214930),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___65941),null,(1),null)),(2),null)),"WebR runtime should receive datasets via component mount/event"]));
}

}catch (e65821){var t__11416__auto___65949 = e65821;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"error","error",-978969032),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,t__11416__auto___65949,"WebR runtime should receive datasets via component mount/event"]));
}
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),"names(datasets)"], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),"names(datasets)"], null));

try{var values__11365__auto__ = (new cljs.core.List(null,(function (p1__65723_SHARP_){
return ((cljs.core.map_QMARK_(p1__65723_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__65723_SHARP_),(new cljs.core.List(null,toy_dataset_name,null,(1),null)))));
}),(new cljs.core.List(null,cljs.core.deref(portal_submissions),null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto__),"Portal should show dataset keys from R"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto__),null,(1),null)),(2),null)),"Portal should show dataset keys from R"]));
}

return result__11366__auto__;
}catch (e65826){var t__11416__auto__ = e65826;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__65723#","p1__65723#",720933017,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,t__11416__auto__,"Portal should show dataset keys from R"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div);
}}finally {(bb_web_ds_tools.runtime.webr.eval_in_main = eval_in_main_orig_val__65814);

(bb_web_ds_tools.runtime.webr.bind_datasets = bind_datasets_orig_val__65813);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {(portal.web.submit = submit_orig_val__65737);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));
});

(bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test;},new cljs.core.Symbol("bb-web-ds-tools.data-sharing-test","data-sharing-e2e-test","bb-web-ds-tools.data-sharing-test/data-sharing-e2e-test",-585641493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.data-sharing-test","bb-web-ds-tools.data-sharing-test",1826742280,null),new cljs.core.Symbol(null,"data-sharing-e2e-test","data-sharing-e2e-test",-60329260,null),"bb_web_ds_tools/data_sharing_test.cljs",31,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test)?bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.data_sharing_test.js.map
