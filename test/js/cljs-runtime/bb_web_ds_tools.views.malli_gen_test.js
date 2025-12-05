goog.provide('bb_web_ds_tools.views.malli_gen_test');
bb_web_ds_tools.views.malli_gen_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.malli_gen_test.malli_property_test = (function bb_web_ds_tools$views$malli_gen_test$malli_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-schema","update-schema",-691503438),"[:map [:a int?]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-schema","update-schema",-691503438),"[:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generate","generate",-163452822)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:a 1}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"infer","infer",-403321830)], null)], null)], null));
var seq__59772 = cljs.core.seq(actions);
var chunk__59773 = null;
var count__59774 = (0);
var i__59775 = (0);
while(true){
if((i__59775 < count__59774)){
var action = chunk__59773.cljs$core$IIndexed$_nth$arity$2(null,i__59775);
var vec__59805_59871 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_59872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59805_59871,(0),null);
var arg_59873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59805_59871,(1),null);
var G__59811_59874 = cmd_59872;
var G__59811_59875__$1 = (((G__59811_59874 instanceof cljs.core.Keyword))?G__59811_59874.fqn:null);
switch (G__59811_59875__$1) {
case "update-schema":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),arg_59873], null));

try{var values__11365__auto___59877 = (new cljs.core.List(null,arg_59873,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null))),null,(1),null)),(2),null));
var result__11366__auto___59878 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59877);
if(cljs.core.truth_(result__11366__auto___59878)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"pass","pass",1574159993),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59877),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"fail","fail",1706214930),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59877),null,(1),null)),(2),null)),null]));
}

}catch (e59812){var t__11416__auto___59880 = e59812;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"error","error",-978969032),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,t__11416__auto___59880,null]));
}
break;
case "generate":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));

var res_59881 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null)));
try{var values__11365__auto___59882 = (new cljs.core.List(null,res_59881,null,(1),null));
var result__11366__auto___59883 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59882);
if(cljs.core.truth_(result__11366__auto___59883)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59882),"Should produce string output (data or error)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59882),null,(1),null)),(2),null)),"Should produce string output (data or error)"]));
}

}catch (e59818){var t__11416__auto___59884 = e59818;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,t__11416__auto___59884,"Should produce string output (data or error)"]));
}
break;
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),arg_59873], null));

try{var values__11365__auto___59885 = (new cljs.core.List(null,arg_59873,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null))),null,(1),null)),(2),null));
var result__11366__auto___59886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59885);
if(cljs.core.truth_(result__11366__auto___59886)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59885),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59885),null,(1),null)),(2),null)),null]));
}

}catch (e59824){var t__11416__auto___59888 = e59824;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,t__11416__auto___59888,null]));
}
break;
case "infer":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),new cljs.core.PersistentArrayMap(null, 1, ["inference-input",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))], null)], null));

var res_59891 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null)));
try{var values__11365__auto___59892 = (new cljs.core.List(null,res_59891,null,(1),null));
var result__11366__auto___59893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59892);
if(cljs.core.truth_(result__11366__auto___59893)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59892),"Should produce string output"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59892),null,(1),null)),(2),null)),"Should produce string output"]));
}

}catch (e59828){var t__11416__auto___59898 = e59828;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,t__11416__auto___59898,"Should produce string output"]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59811_59875__$1)].join('')));

}


var G__59903 = seq__59772;
var G__59904 = chunk__59773;
var G__59905 = count__59774;
var G__59906 = (i__59775 + (1));
seq__59772 = G__59903;
chunk__59773 = G__59904;
count__59774 = G__59905;
i__59775 = G__59906;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59772);
if(temp__5825__auto__){
var seq__59772__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59772__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__59772__$1);
var G__59907 = cljs.core.chunk_rest(seq__59772__$1);
var G__59908 = c__5548__auto__;
var G__59909 = cljs.core.count(c__5548__auto__);
var G__59910 = (0);
seq__59772 = G__59907;
chunk__59773 = G__59908;
count__59774 = G__59909;
i__59775 = G__59910;
continue;
} else {
var action = cljs.core.first(seq__59772__$1);
var vec__59829_59911 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_59912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59829_59911,(0),null);
var arg_59913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59829_59911,(1),null);
var G__59832_59916 = cmd_59912;
var G__59832_59917__$1 = (((G__59832_59916 instanceof cljs.core.Keyword))?G__59832_59916.fqn:null);
switch (G__59832_59917__$1) {
case "update-schema":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),arg_59913], null));

try{var values__11365__auto___59919 = (new cljs.core.List(null,arg_59913,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null))),null,(1),null)),(2),null));
var result__11366__auto___59920 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59919);
if(cljs.core.truth_(result__11366__auto___59920)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"pass","pass",1574159993),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59919),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"fail","fail",1706214930),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59919),null,(1),null)),(2),null)),null]));
}

}catch (e59833){var t__11416__auto___59928 = e59833;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"error","error",-978969032),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,t__11416__auto___59928,null]));
}
break;
case "generate":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));

var res_59931 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null)));
try{var values__11365__auto___59934 = (new cljs.core.List(null,res_59931,null,(1),null));
var result__11366__auto___59935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59934);
if(cljs.core.truth_(result__11366__auto___59935)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59934),"Should produce string output (data or error)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59934),null,(1),null)),(2),null)),"Should produce string output (data or error)"]));
}

}catch (e59838){var t__11416__auto___59936 = e59838;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,t__11416__auto___59936,"Should produce string output (data or error)"]));
}
break;
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),arg_59913], null));

try{var values__11365__auto___59938 = (new cljs.core.List(null,arg_59913,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null))),null,(1),null)),(2),null));
var result__11366__auto___59939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59938);
if(cljs.core.truth_(result__11366__auto___59939)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59938),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59938),null,(1),null)),(2),null)),null]));
}

}catch (e59840){var t__11416__auto___59940 = e59840;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,t__11416__auto___59940,null]));
}
break;
case "infer":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),new cljs.core.PersistentArrayMap(null, 1, ["inference-input",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))], null)], null));

var res_59941 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null)));
try{var values__11365__auto___59942 = (new cljs.core.List(null,res_59941,null,(1),null));
var result__11366__auto___59943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59942);
if(cljs.core.truth_(result__11366__auto___59943)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59942),"Should produce string output"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59942),null,(1),null)),(2),null)),"Should produce string output"]));
}

}catch (e59852){var t__11416__auto___59944 = e59852;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,t__11416__auto___59944,"Should produce string output"]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59832_59917__$1)].join('')));

}


var G__59945 = cljs.core.next(seq__59772__$1);
var G__59946 = null;
var G__59947 = (0);
var G__59948 = (0);
seq__59772 = G__59945;
chunk__59773 = G__59946;
count__59774 = G__59947;
i__59775 = G__59948;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

(bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.views.malli_gen_test.malli_property_test;},new cljs.core.Symbol("bb-web-ds-tools.views.malli-gen-test","malli-property-test","bb-web-ds-tools.views.malli-gen-test/malli-property-test",657166873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.views.malli-gen-test","bb-web-ds-tools.views.malli-gen-test",1995711201,null),new cljs.core.Symbol(null,"malli-property-test","malli-property-test",1895828619,null),"bb_web_ds_tools/views/malli_gen_test.cljs",29,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.views.malli_gen_test.malli_property_test)?bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.views.malli_gen_test.js.map
