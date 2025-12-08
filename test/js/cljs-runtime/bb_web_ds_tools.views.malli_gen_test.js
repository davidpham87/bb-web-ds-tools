goog.provide('bb_web_ds_tools.views.malli_gen_test');
bb_web_ds_tools.views.malli_gen_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.malli_gen_test.malli_property_test = (function bb_web_ds_tools$views$malli_gen_test$malli_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.malli_gen_test.malli_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-schema","update-schema",-691503438),"[:map [:a int?]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-schema","update-schema",-691503438),"[:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generate","generate",-163452822)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:a 1}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"infer","infer",-403321830)], null)], null)], null));
var seq__59893 = cljs.core.seq(actions);
var chunk__59894 = null;
var count__59895 = (0);
var i__59896 = (0);
while(true){
if((i__59896 < count__59895)){
var action = chunk__59894.cljs$core$IIndexed$_nth$arity$2(null,i__59896);
var vec__59940_59985 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_59986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59940_59985,(0),null);
var arg_59987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59940_59985,(1),null);
var G__59943_59988 = cmd_59986;
var G__59943_59989__$1 = (((G__59943_59988 instanceof cljs.core.Keyword))?G__59943_59988.fqn:null);
switch (G__59943_59989__$1) {
case "update-schema":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),arg_59987], null));

try{var values__11365__auto___59991 = (new cljs.core.List(null,arg_59987,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null))),null,(1),null)),(2),null));
var result__11366__auto___59992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59991);
if(cljs.core.truth_(result__11366__auto___59992)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"pass","pass",1574159993),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59991),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"fail","fail",1706214930),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59991),null,(1),null)),(2),null)),null]));
}

}catch (e59944){var t__11416__auto___59993 = e59944;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"error","error",-978969032),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,t__11416__auto___59993,null]));
}
break;
case "generate":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));

var res_59994 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null)));
try{var values__11365__auto___59995 = (new cljs.core.List(null,res_59994,null,(1),null));
var result__11366__auto___59996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59995);
if(cljs.core.truth_(result__11366__auto___59996)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59995),"Should produce string output (data or error)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59995),null,(1),null)),(2),null)),"Should produce string output (data or error)"]));
}

}catch (e59945){var t__11416__auto___59997 = e59945;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,t__11416__auto___59997,"Should produce string output (data or error)"]));
}
break;
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),arg_59987], null));

try{var values__11365__auto___59998 = (new cljs.core.List(null,arg_59987,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null))),null,(1),null)),(2),null));
var result__11366__auto___59999 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59998);
if(cljs.core.truth_(result__11366__auto___59999)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59998),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59998),null,(1),null)),(2),null)),null]));
}

}catch (e59946){var t__11416__auto___60001 = e59946;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,t__11416__auto___60001,null]));
}
break;
case "infer":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),new cljs.core.PersistentArrayMap(null, 1, ["inference-input",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))], null)], null));

var res_60002 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null)));
try{var values__11365__auto___60003 = (new cljs.core.List(null,res_60002,null,(1),null));
var result__11366__auto___60004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___60003);
if(cljs.core.truth_(result__11366__auto___60004)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60003),"Should produce string output"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60003),null,(1),null)),(2),null)),"Should produce string output"]));
}

}catch (e59947){var t__11416__auto___60005 = e59947;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,t__11416__auto___60005,"Should produce string output"]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59943_59989__$1)].join('')));

}


var G__60006 = seq__59893;
var G__60007 = chunk__59894;
var G__60008 = count__59895;
var G__60009 = (i__59896 + (1));
seq__59893 = G__60006;
chunk__59894 = G__60007;
count__59895 = G__60008;
i__59896 = G__60009;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59893);
if(temp__5825__auto__){
var seq__59893__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59893__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__59893__$1);
var G__60010 = cljs.core.chunk_rest(seq__59893__$1);
var G__60011 = c__5548__auto__;
var G__60012 = cljs.core.count(c__5548__auto__);
var G__60013 = (0);
seq__59893 = G__60010;
chunk__59894 = G__60011;
count__59895 = G__60012;
i__59896 = G__60013;
continue;
} else {
var action = cljs.core.first(seq__59893__$1);
var vec__59952_60014 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_60015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952_60014,(0),null);
var arg_60016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952_60014,(1),null);
var G__59955_60017 = cmd_60015;
var G__59955_60018__$1 = (((G__59955_60017 instanceof cljs.core.Keyword))?G__59955_60017.fqn:null);
switch (G__59955_60018__$1) {
case "update-schema":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),arg_60016], null));

try{var values__11365__auto___60020 = (new cljs.core.List(null,arg_60016,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null))),null,(1),null)),(2),null));
var result__11366__auto___60021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___60020);
if(cljs.core.truth_(result__11366__auto___60021)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"pass","pass",1574159993),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___60020),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"fail","fail",1706214930),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___60020),null,(1),null)),(2),null)),null]));
}

}catch (e59957){var t__11416__auto___60022 = e59957;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",62,new cljs.core.Keyword(null,"error","error",-978969032),18,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812)], null)))),31,t__11416__auto___60022,null]));
}
break;
case "generate":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732)], null));

var res_60023 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","generated-data","malli/generated-data",-777359584)], null)));
try{var values__11365__auto___60024 = (new cljs.core.List(null,res_60023,null,(1),null));
var result__11366__auto___60025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___60024);
if(cljs.core.truth_(result__11366__auto___60025)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60024),"Should produce string output (data or error)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60024),null,(1),null)),(2),null)),"Should produce string output (data or error)"]));
}

}catch (e59959){var t__11416__auto___60026 = e59959;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),37,t__11416__auto___60026,"Should produce string output (data or error)"]));
}
break;
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),arg_60016], null));

try{var values__11365__auto___60027 = (new cljs.core.List(null,arg_60016,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null))),null,(1),null)),(2),null));
var result__11366__auto___60028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___60027);
if(cljs.core.truth_(result__11366__auto___60028)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___60027),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___60027),null,(1),null)),(2),null)),null]));
}

}catch (e59961){var t__11416__auto___60029 = e59961;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))),42,t__11416__auto___60029,null]));
}
break;
case "infer":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),new cljs.core.PersistentArrayMap(null, 1, ["inference-input",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866)], null)))], null)], null));

var res_60030 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","inferred-schema","malli/inferred-schema",1451039750)], null)));
try{var values__11365__auto___60031 = (new cljs.core.List(null,res_60030,null,(1),null));
var result__11366__auto___60032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___60031);
if(cljs.core.truth_(result__11366__auto___60032)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60031),"Should produce string output"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___60031),null,(1),null)),(2),null)),"Should produce string output"]));
}

}catch (e59978){var t__11416__auto___60033 = e59978;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/malli_gen_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),20,48,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"res","res",245523648,null)),48,t__11416__auto___60033,"Should produce string output"]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59955_60018__$1)].join('')));

}


var G__60034 = cljs.core.next(seq__59893__$1);
var G__60035 = null;
var G__60036 = (0);
var G__60037 = (0);
seq__59893 = G__60034;
chunk__59894 = G__60035;
count__59895 = G__60036;
i__59896 = G__60037;
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
