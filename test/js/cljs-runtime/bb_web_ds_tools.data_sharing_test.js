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

var submit_orig_val__42551 = portal.web.submit;
var submit_temp_val__42552 = (function() { 
var G__42674__delegate = function (val,_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal_submissions,cljs.core.conj,val);
};
var G__42674 = function (val,var_args){
var _ = null;
if (arguments.length > 1) {
var G__42675__i = 0, G__42675__a = new Array(arguments.length -  1);
while (G__42675__i < G__42675__a.length) {G__42675__a[G__42675__i] = arguments[G__42675__i + 1]; ++G__42675__i;}
  _ = new cljs.core.IndexedSeq(G__42675__a,0,null);
} 
return G__42674__delegate.call(this,val,_);};
G__42674.cljs$lang$maxFixedArity = 1;
G__42674.cljs$lang$applyTo = (function (arglist__42676){
var val = cljs.core.first(arglist__42676);
var _ = cljs.core.rest(arglist__42676);
return G__42674__delegate(val,_);
});
G__42674.cljs$core$IFn$_invoke$arity$variadic = G__42674__delegate;
return G__42674;
})()
;
(portal.web.submit = submit_temp_val__42552);

try{cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to datasets view and import dataset"], 0));

try{re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),toy_dataset], null));

var datasets_42677 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null)));
try{var values__11365__auto___42678 = (new cljs.core.List(null,(function (p__42555){
var vec__42556 = p__42555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42556,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,datasets_42677,null,(1),null)),(2),null));
var result__11366__auto___42679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42678);
if(cljs.core.truth_(result__11366__auto___42679)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42678),"Dataset should be added to app-db"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42678),null,(1),null)),(2),null)),"Dataset should be added to app-db"]));
}

}catch (e42554){var t__11416__auto___42683 = e42554;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),18,56,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null)),56,t__11416__auto___42683,"Dataset should be added to app-db"]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to Clojure REPL and eval keys"], 0));

try{re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","add-instance","bb-web-ds-tools.views.repl/add-instance",1684010627)], null));

var instances_42687 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null)));
var instance_id_42688 = cljs.core.ffirst(instances_42687);
var sci_worker_orig_val__42570_42689 = bb_web_ds_tools.runtime.sci.sci_worker;
var init_BANG__orig_val__42571_42690 = bb_web_ds_tools.runtime.sci.init_BANG_;
var post_message_orig_val__42572_42691 = bb_web_ds_tools.utils.worker.post_message;
var sci_worker_temp_val__42573_42692 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(mock_worker);
var init_BANG__temp_val__42574_42693 = (function() { 
var G__42695__delegate = function (_){
return null;
};
var G__42695 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__42696__i = 0, G__42696__a = new Array(arguments.length -  0);
while (G__42696__i < G__42696__a.length) {G__42696__a[G__42696__i] = arguments[G__42696__i + 0]; ++G__42696__i;}
  _ = new cljs.core.IndexedSeq(G__42696__a,0,null);
} 
return G__42695__delegate.call(this,_);};
G__42695.cljs$lang$maxFixedArity = 0;
G__42695.cljs$lang$applyTo = (function (arglist__42697){
var _ = cljs.core.seq(arglist__42697);
return G__42695__delegate(_);
});
G__42695.cljs$core$IFn$_invoke$arity$variadic = G__42695__delegate;
return G__42695;
})()
;
var post_message_temp_val__42575_42694 = (function (w,msg){
var fexpr__42578 = new cljs.core.Keyword(null,"postMessage","postMessage",1183463735).cljs$core$IFn$_invoke$arity$1(w);
return (fexpr__42578.cljs$core$IFn$_invoke$arity$1 ? fexpr__42578.cljs$core$IFn$_invoke$arity$1(msg) : fexpr__42578.call(null,msg));
});
(bb_web_ds_tools.runtime.sci.sci_worker = sci_worker_temp_val__42573_42692);

(bb_web_ds_tools.runtime.sci.init_BANG_ = init_BANG__temp_val__42574_42693);

(bb_web_ds_tools.utils.worker.post_message = post_message_temp_val__42575_42694);

try{var div_42698 = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.panel], null));
try{bb_web_ds_tools.runtime.sci.sync_datasets_BANG_();

try{var values__11365__auto___42699 = (new cljs.core.List(null,(function (p1__42534_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update-datasets",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__42534_SHARP_));
}),(new cljs.core.List(null,cljs.core.deref(worker_msgs),null,(1),null)),(2),null));
var result__11366__auto___42700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42699);
if(cljs.core.truth_(result__11366__auto___42700)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"pass","pass",1574159993),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42699),"SCI worker should receive dataset update"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"fail","fail",1706214930),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42699),null,(1),null)),(2),null)),"SCI worker should receive dataset update"]));
}

}catch (e42589){var t__11416__auto___42701 = e42589;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",76,new cljs.core.Keyword(null,"error","error",-978969032),24,85,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"update-datasets",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42534#","p1__42534#",-1779611214,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),85,t__11416__auto___42701,"SCI worker should receive dataset update"]));
}
cljs.core.reset_BANG_(worker_msgs,cljs.core.PersistentVector.EMPTY);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),instance_id_42688,"(keys @user/datasets)"], null));

try{var values__11365__auto___42702 = (new cljs.core.List(null,(function (p1__42535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("eval",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__42535_SHARP_));
}),(new cljs.core.List(null,cljs.core.deref(worker_msgs),null,(1),null)),(2),null));
var result__11366__auto___42703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42702);
if(cljs.core.truth_(result__11366__auto___42703)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42702),"SCI worker should receive eval message"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42702),null,(1),null)),(2),null)),"SCI worker should receive eval message"]));
}

}catch (e42593){var t__11416__auto___42704 = e42593;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),24,90,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"eval",cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__42535#","p1__42535#",232727404,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"worker-msgs","worker-msgs",1742103360,null))),90,t__11416__auto___42704,"SCI worker should receive eval message"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div_42698);
}}finally {(bb_web_ds_tools.utils.worker.post_message = post_message_orig_val__42572_42691);

(bb_web_ds_tools.runtime.sci.init_BANG_ = init_BANG__orig_val__42571_42690);

(bb_web_ds_tools.runtime.sci.sci_worker = sci_worker_orig_val__42570_42689);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to Python view and verify access"], 0));

try{var sync_datasets_orig_val__42607_42706 = bb_web_ds_tools.runtime.pyodide.sync_datasets;
var eval_in_worker_orig_val__42608_42707 = bb_web_ds_tools.runtime.pyodide.eval_in_worker;
var sync_datasets_temp_val__42609_42708 = (function (ds){
return cljs.core.reset_BANG_(pyodide_synced,ds);
});
var eval_in_worker_temp_val__42610_42709 = (function (code){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"keys(datasets)");
if(and__5023__auto__){
return cljs.core.some((function (p__42613){
var vec__42615 = p__42613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42615,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42615,(1),null);
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
(bb_web_ds_tools.runtime.pyodide.sync_datasets = sync_datasets_temp_val__42609_42708);

(bb_web_ds_tools.runtime.pyodide.eval_in_worker = eval_in_worker_temp_val__42610_42709);

try{var div_42715 = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.panel], null));
try{reagent.core.flush();

try{var values__11365__auto___42716 = (new cljs.core.List(null,(function (p__42628){
var vec__42629 = p__42628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,cljs.core.deref(pyodide_synced),null,(1),null)),(2),null));
var result__11366__auto___42717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42716);
if(cljs.core.truth_(result__11366__auto___42717)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"pass","pass",1574159993),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42716),"Pyodide runtime should receive datasets via component mount"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"fail","fail",1706214930),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42716),null,(1),null)),(2),null)),"Pyodide runtime should receive datasets via component mount"]));
}

}catch (e42624){var t__11416__auto___42719 = e42624;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",90,new cljs.core.Keyword(null,"error","error",-978969032),22,108,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"pyodide-synced","pyodide-synced",584681305,null))),108,t__11416__auto___42719,"Pyodide runtime should receive datasets via component mount"]));
}
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","run-code","bb-web-ds-tools.views.pyodide/run-code",-897547225),"keys(datasets)"], null));

try{var values__11365__auto___42720 = (new cljs.core.List(null,(function (p1__42537_SHARP_){
return ((cljs.core.map_QMARK_(p1__42537_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__42537_SHARP_),(new cljs.core.List(null,toy_dataset_name,null,(1),null)))));
}),(new cljs.core.List(null,cljs.core.deref(portal_submissions),null,(1),null)),(2),null));
var result__11366__auto___42722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42720);
if(cljs.core.truth_(result__11366__auto___42722)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42720),"Portal should show dataset keys from Python"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42720),null,(1),null)),(2),null)),"Portal should show dataset keys from Python"]));
}

}catch (e42639){var t__11416__auto___42723 = e42639;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),22,112,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42537#","p1__42537#",1106802971,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),112,t__11416__auto___42723,"Portal should show dataset keys from Python"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div_42715);
}}finally {(bb_web_ds_tools.runtime.pyodide.eval_in_worker = eval_in_worker_orig_val__42608_42707);

(bb_web_ds_tools.runtime.pyodide.sync_datasets = sync_datasets_orig_val__42607_42706);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigate to R view and verify access"], 0));

try{var bind_datasets_orig_val__42646 = bb_web_ds_tools.runtime.webr.bind_datasets;
var eval_in_main_orig_val__42647 = bb_web_ds_tools.runtime.webr.eval_in_main;
var bind_datasets_temp_val__42648 = (function() { 
var G__42724__delegate = function (ds,_){
return cljs.core.reset_BANG_(webr_synced,ds);
};
var G__42724 = function (ds,var_args){
var _ = null;
if (arguments.length > 1) {
var G__42725__i = 0, G__42725__a = new Array(arguments.length -  1);
while (G__42725__i < G__42725__a.length) {G__42725__a[G__42725__i] = arguments[G__42725__i + 1]; ++G__42725__i;}
  _ = new cljs.core.IndexedSeq(G__42725__a,0,null);
} 
return G__42724__delegate.call(this,ds,_);};
G__42724.cljs$lang$maxFixedArity = 1;
G__42724.cljs$lang$applyTo = (function (arglist__42726){
var ds = cljs.core.first(arglist__42726);
var _ = cljs.core.rest(arglist__42726);
return G__42724__delegate(ds,_);
});
G__42724.cljs$core$IFn$_invoke$arity$variadic = G__42724__delegate;
return G__42724;
})()
;
var eval_in_main_temp_val__42649 = (function() { 
var G__42727__delegate = function (code,args){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"names(datasets)");
if(and__5023__auto__){
return cljs.core.some((function (p__42652){
var vec__42653 = p__42652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42653,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42653,(1),null);
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
var G__42727 = function (code,var_args){
var args = null;
if (arguments.length > 1) {
var G__42728__i = 0, G__42728__a = new Array(arguments.length -  1);
while (G__42728__i < G__42728__a.length) {G__42728__a[G__42728__i] = arguments[G__42728__i + 1]; ++G__42728__i;}
  args = new cljs.core.IndexedSeq(G__42728__a,0,null);
} 
return G__42727__delegate.call(this,code,args);};
G__42727.cljs$lang$maxFixedArity = 1;
G__42727.cljs$lang$applyTo = (function (arglist__42729){
var code = cljs.core.first(arglist__42729);
var args = cljs.core.rest(arglist__42729);
return G__42727__delegate(code,args);
});
G__42727.cljs$core$IFn$_invoke$arity$variadic = G__42727__delegate;
return G__42727;
})()
;
(bb_web_ds_tools.runtime.webr.bind_datasets = bind_datasets_temp_val__42648);

(bb_web_ds_tools.runtime.webr.eval_in_main = eval_in_main_temp_val__42649);

try{var div = bb_web_ds_tools.data_sharing_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel], null));
try{reagent.core.flush();

try{var values__11365__auto___42730 = (new cljs.core.List(null,(function (p__42659){
var vec__42660 = p__42659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42660,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42660,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds),toy_dataset_name);
}),(new cljs.core.List(null,cljs.core.deref(webr_synced),null,(1),null)),(2),null));
var result__11366__auto___42731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___42730);
if(cljs.core.truth_(result__11366__auto___42731)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"pass","pass",1574159993),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42730),"WebR runtime should receive datasets via component mount/event"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"fail","fail",1706214930),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___42730),null,(1),null)),(2),null)),"WebR runtime should receive datasets via component mount/event"]));
}

}catch (e42656){var t__11416__auto___42732 = e42656;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",87,new cljs.core.Keyword(null,"error","error",-978969032),22,132,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ds","ds",1383115668,null)),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"webr-synced","webr-synced",1183746641,null))),132,t__11416__auto___42732,"WebR runtime should receive datasets via component mount/event"]));
}
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),"names(datasets)"], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),"names(datasets)"], null));

try{var values__11365__auto__ = (new cljs.core.List(null,(function (p1__42538_SHARP_){
return ((cljs.core.map_QMARK_(p1__42538_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__42538_SHARP_),(new cljs.core.List(null,toy_dataset_name,null,(1),null)))));
}),(new cljs.core.List(null,cljs.core.deref(portal_submissions),null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto__),"Portal should show dataset keys from R"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto__),null,(1),null)),(2),null)),"Portal should show dataset keys from R"]));
}

return result__11366__auto__;
}catch (e42666){var t__11416__auto__ = e42666;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/data_sharing_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),22,138,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"p1__42538#","p1__42538#",188371181,null)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"toy-dataset-name","toy-dataset-name",1578759173,null))))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"portal-submissions","portal-submissions",1001063739,null))),138,t__11416__auto__,"Portal should show dataset keys from R"]));
}}finally {bb_web_ds_tools.data_sharing_test.unmount_component(div);
}}finally {(bb_web_ds_tools.runtime.webr.eval_in_main = eval_in_main_orig_val__42647);

(bb_web_ds_tools.runtime.webr.bind_datasets = bind_datasets_orig_val__42646);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {(portal.web.submit = submit_orig_val__42551);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));
});

(bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test;},new cljs.core.Symbol("bb-web-ds-tools.data-sharing-test","data-sharing-e2e-test","bb-web-ds-tools.data-sharing-test/data-sharing-e2e-test",-585641493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.data-sharing-test","bb-web-ds-tools.data-sharing-test",1826742280,null),new cljs.core.Symbol(null,"data-sharing-e2e-test","data-sharing-e2e-test",-60329260,null),"bb_web_ds_tools/data_sharing_test.cljs",31,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test)?bb_web_ds_tools.data_sharing_test.data_sharing_e2e_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.data_sharing_test.js.map
