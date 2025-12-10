goog.provide('bb_web_ds_tools.views.honeysql_test');
bb_web_ds_tools.views.honeysql_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.honeysql_test.honeysql_property_test = (function bb_web_ds_tools$views$honeysql_test$honeysql_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:select [:a] :from [:b]}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"convert","convert",912478626)], null)], null)], null));
var seq__42317 = cljs.core.seq(actions);
var chunk__42318 = null;
var count__42319 = (0);
var i__42320 = (0);
while(true){
if((i__42320 < count__42319)){
var action = chunk__42318.cljs$core$IIndexed$_nth$arity$2(null,i__42320);
var vec__42386_42482 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_42483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42386_42482,(0),null);
var arg_42484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42386_42482,(1),null);
var G__42391_42485 = cmd_42483;
var G__42391_42486__$1 = (((G__42391_42485 instanceof cljs.core.Keyword))?G__42391_42485.fqn:null);
switch (G__42391_42486__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_42484], null));

try{var values__11365__auto___42489 = (new cljs.core.List(null,arg_42484,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___42490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42489);
if(cljs.core.truth_(result__11366__auto___42490)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42489),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42489),null,(1),null)),(2),null)),null]));
}

}catch (e42392){var t__11416__auto___42493 = e42392;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___42493,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_42495 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___42496 = (new cljs.core.List(null,output_42495,null,(1),null));
var result__11366__auto___42497 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___42496);
if(cljs.core.truth_(result__11366__auto___42497)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___42496),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___42496),null,(1),null)),(2),null)),null]));
}

}catch (e42404){var t__11416__auto___42500 = e42404;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___42500,null]));
}
try{var value__11369__auto___42502 = ((clojure.string.includes_QMARK_(output_42495,"SELECT")) || (((clojure.string.includes_QMARK_(output_42495,"Error")) || (clojure.string.includes_QMARK_(output_42495,"Invalid")))));
if(value__11369__auto___42502){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___42502,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___42502,null]));
}

}catch (e42425){var t__11416__auto___42504 = e42425;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___42504,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42391_42486__$1)].join('')));

}


var G__42505 = seq__42317;
var G__42506 = chunk__42318;
var G__42507 = count__42319;
var G__42508 = (i__42320 + (1));
seq__42317 = G__42505;
chunk__42318 = G__42506;
count__42319 = G__42507;
i__42320 = G__42508;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42317);
if(temp__5825__auto__){
var seq__42317__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42317__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42317__$1);
var G__42509 = cljs.core.chunk_rest(seq__42317__$1);
var G__42510 = c__5548__auto__;
var G__42511 = cljs.core.count(c__5548__auto__);
var G__42512 = (0);
seq__42317 = G__42509;
chunk__42318 = G__42510;
count__42319 = G__42511;
i__42320 = G__42512;
continue;
} else {
var action = cljs.core.first(seq__42317__$1);
var vec__42441_42514 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_42515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441_42514,(0),null);
var arg_42516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441_42514,(1),null);
var G__42446_42517 = cmd_42515;
var G__42446_42518__$1 = (((G__42446_42517 instanceof cljs.core.Keyword))?G__42446_42517.fqn:null);
switch (G__42446_42518__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_42516], null));

try{var values__11365__auto___42520 = (new cljs.core.List(null,arg_42516,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___42521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42520);
if(cljs.core.truth_(result__11366__auto___42521)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42520),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42520),null,(1),null)),(2),null)),null]));
}

}catch (e42448){var t__11416__auto___42522 = e42448;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___42522,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_42523 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___42524 = (new cljs.core.List(null,output_42523,null,(1),null));
var result__11366__auto___42525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___42524);
if(cljs.core.truth_(result__11366__auto___42525)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___42524),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___42524),null,(1),null)),(2),null)),null]));
}

}catch (e42466){var t__11416__auto___42526 = e42466;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___42526,null]));
}
try{var value__11369__auto___42527 = ((clojure.string.includes_QMARK_(output_42523,"SELECT")) || (((clojure.string.includes_QMARK_(output_42523,"Error")) || (clojure.string.includes_QMARK_(output_42523,"Invalid")))));
if(value__11369__auto___42527){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___42527,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___42527,null]));
}

}catch (e42474){var t__11416__auto___42528 = e42474;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___42528,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42446_42518__$1)].join('')));

}


var G__42529 = cljs.core.next(seq__42317__$1);
var G__42530 = null;
var G__42531 = (0);
var G__42532 = (0);
seq__42317 = G__42529;
chunk__42318 = G__42530;
count__42319 = G__42531;
i__42320 = G__42532;
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

(bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.views.honeysql_test.honeysql_property_test;},new cljs.core.Symbol("bb-web-ds-tools.views.honeysql-test","honeysql-property-test","bb-web-ds-tools.views.honeysql-test/honeysql-property-test",-1566862486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.views.honeysql-test","bb-web-ds-tools.views.honeysql-test",718848577,null),new cljs.core.Symbol(null,"honeysql-property-test","honeysql-property-test",-1872770869,null),"bb_web_ds_tools/views/honeysql_test.cljs",32,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.views.honeysql_test.honeysql_property_test)?bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.views.honeysql_test.js.map
