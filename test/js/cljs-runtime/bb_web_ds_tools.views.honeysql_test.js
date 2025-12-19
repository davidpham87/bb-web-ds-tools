goog.provide('bb_web_ds_tools.views.honeysql_test');
bb_web_ds_tools.views.honeysql_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.honeysql_test.honeysql_property_test = (function bb_web_ds_tools$views$honeysql_test$honeysql_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:select [:a] :from [:b]}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"convert","convert",912478626)], null)], null)], null));
var seq__68421 = cljs.core.seq(actions);
var chunk__68422 = null;
var count__68423 = (0);
var i__68424 = (0);
while(true){
if((i__68424 < count__68423)){
var action = chunk__68422.cljs$core$IIndexed$_nth$arity$2(null,i__68424);
var vec__68451_68502 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_68503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68451_68502,(0),null);
var arg_68504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68451_68502,(1),null);
var G__68455_68507 = cmd_68503;
var G__68455_68508__$1 = (((G__68455_68507 instanceof cljs.core.Keyword))?G__68455_68507.fqn:null);
switch (G__68455_68508__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_68504], null));

try{var values__11365__auto___68512 = (new cljs.core.List(null,arg_68504,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___68513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___68512);
if(cljs.core.truth_(result__11366__auto___68513)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68512),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68512),null,(1),null)),(2),null)),null]));
}

}catch (e68457){var t__11416__auto___68518 = e68457;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___68518,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_68519 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___68523 = (new cljs.core.List(null,output_68519,null,(1),null));
var result__11366__auto___68524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___68523);
if(cljs.core.truth_(result__11366__auto___68524)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___68523),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___68523),null,(1),null)),(2),null)),null]));
}

}catch (e68460){var t__11416__auto___68528 = e68460;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___68528,null]));
}
try{var value__11369__auto___68529 = ((clojure.string.includes_QMARK_(output_68519,"SELECT")) || (((clojure.string.includes_QMARK_(output_68519,"Error")) || (clojure.string.includes_QMARK_(output_68519,"Invalid")))));
if(value__11369__auto___68529){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___68529,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___68529,null]));
}

}catch (e68464){var t__11416__auto___68533 = e68464;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___68533,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68455_68508__$1)].join('')));

}


var G__68534 = seq__68421;
var G__68535 = chunk__68422;
var G__68536 = count__68423;
var G__68537 = (i__68424 + (1));
seq__68421 = G__68534;
chunk__68422 = G__68535;
count__68423 = G__68536;
i__68424 = G__68537;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68421);
if(temp__5825__auto__){
var seq__68421__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68421__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68421__$1);
var G__68539 = cljs.core.chunk_rest(seq__68421__$1);
var G__68540 = c__5548__auto__;
var G__68541 = cljs.core.count(c__5548__auto__);
var G__68542 = (0);
seq__68421 = G__68539;
chunk__68422 = G__68540;
count__68423 = G__68541;
i__68424 = G__68542;
continue;
} else {
var action = cljs.core.first(seq__68421__$1);
var vec__68466_68545 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_68546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68466_68545,(0),null);
var arg_68547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68466_68545,(1),null);
var G__68471_68549 = cmd_68546;
var G__68471_68550__$1 = (((G__68471_68549 instanceof cljs.core.Keyword))?G__68471_68549.fqn:null);
switch (G__68471_68550__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_68547], null));

try{var values__11365__auto___68552 = (new cljs.core.List(null,arg_68547,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___68553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___68552);
if(cljs.core.truth_(result__11366__auto___68553)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68552),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68552),null,(1),null)),(2),null)),null]));
}

}catch (e68472){var t__11416__auto___68563 = e68472;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___68563,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_68568 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___68571 = (new cljs.core.List(null,output_68568,null,(1),null));
var result__11366__auto___68572 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___68571);
if(cljs.core.truth_(result__11366__auto___68572)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___68571),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___68571),null,(1),null)),(2),null)),null]));
}

}catch (e68476){var t__11416__auto___68576 = e68476;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___68576,null]));
}
try{var value__11369__auto___68579 = ((clojure.string.includes_QMARK_(output_68568,"SELECT")) || (((clojure.string.includes_QMARK_(output_68568,"Error")) || (clojure.string.includes_QMARK_(output_68568,"Invalid")))));
if(value__11369__auto___68579){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___68579,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___68579,null]));
}

}catch (e68483){var t__11416__auto___68582 = e68483;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___68582,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68471_68550__$1)].join('')));

}


var G__68585 = cljs.core.next(seq__68421__$1);
var G__68586 = null;
var G__68587 = (0);
var G__68588 = (0);
seq__68421 = G__68585;
chunk__68422 = G__68586;
count__68423 = G__68587;
i__68424 = G__68588;
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
