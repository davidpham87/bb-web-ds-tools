goog.provide('bb_web_ds_tools.views.honeysql_test');
bb_web_ds_tools.views.honeysql_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.honeysql_test.honeysql_property_test = (function bb_web_ds_tools$views$honeysql_test$honeysql_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:select [:a] :from [:b]}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"convert","convert",912478626)], null)], null)], null));
var seq__66808 = cljs.core.seq(actions);
var chunk__66809 = null;
var count__66810 = (0);
var i__66811 = (0);
while(true){
if((i__66811 < count__66810)){
var action = chunk__66809.cljs$core$IIndexed$_nth$arity$2(null,i__66811);
var vec__66842_66856 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_66857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66842_66856,(0),null);
var arg_66858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66842_66856,(1),null);
var G__66845_66859 = cmd_66857;
var G__66845_66860__$1 = (((G__66845_66859 instanceof cljs.core.Keyword))?G__66845_66859.fqn:null);
switch (G__66845_66860__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_66858], null));

try{var values__11365__auto___66862 = (new cljs.core.List(null,arg_66858,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___66863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66862);
if(cljs.core.truth_(result__11366__auto___66863)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66862),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66862),null,(1),null)),(2),null)),null]));
}

}catch (e66846){var t__11416__auto___66865 = e66846;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___66865,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_66867 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___66868 = (new cljs.core.List(null,output_66867,null,(1),null));
var result__11366__auto___66869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___66868);
if(cljs.core.truth_(result__11366__auto___66869)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___66868),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___66868),null,(1),null)),(2),null)),null]));
}

}catch (e66847){var t__11416__auto___66870 = e66847;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___66870,null]));
}
try{var value__11369__auto___66871 = ((clojure.string.includes_QMARK_(output_66867,"SELECT")) || (((clojure.string.includes_QMARK_(output_66867,"Error")) || (clojure.string.includes_QMARK_(output_66867,"Invalid")))));
if(value__11369__auto___66871){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___66871,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___66871,null]));
}

}catch (e66848){var t__11416__auto___66873 = e66848;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___66873,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66845_66860__$1)].join('')));

}


var G__66874 = seq__66808;
var G__66875 = chunk__66809;
var G__66876 = count__66810;
var G__66877 = (i__66811 + (1));
seq__66808 = G__66874;
chunk__66809 = G__66875;
count__66810 = G__66876;
i__66811 = G__66877;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66808);
if(temp__5825__auto__){
var seq__66808__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66808__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66808__$1);
var G__66878 = cljs.core.chunk_rest(seq__66808__$1);
var G__66879 = c__5548__auto__;
var G__66880 = cljs.core.count(c__5548__auto__);
var G__66881 = (0);
seq__66808 = G__66878;
chunk__66809 = G__66879;
count__66810 = G__66880;
i__66811 = G__66881;
continue;
} else {
var action = cljs.core.first(seq__66808__$1);
var vec__66849_66883 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_66884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66849_66883,(0),null);
var arg_66885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66849_66883,(1),null);
var G__66852_66886 = cmd_66884;
var G__66852_66887__$1 = (((G__66852_66886 instanceof cljs.core.Keyword))?G__66852_66886.fqn:null);
switch (G__66852_66887__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_66885], null));

try{var values__11365__auto___66889 = (new cljs.core.List(null,arg_66885,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___66890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66889);
if(cljs.core.truth_(result__11366__auto___66890)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66889),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66889),null,(1),null)),(2),null)),null]));
}

}catch (e66853){var t__11416__auto___66891 = e66853;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___66891,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_66892 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___66893 = (new cljs.core.List(null,output_66892,null,(1),null));
var result__11366__auto___66894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___66893);
if(cljs.core.truth_(result__11366__auto___66894)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___66893),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___66893),null,(1),null)),(2),null)),null]));
}

}catch (e66854){var t__11416__auto___66896 = e66854;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___66896,null]));
}
try{var value__11369__auto___66897 = ((clojure.string.includes_QMARK_(output_66892,"SELECT")) || (((clojure.string.includes_QMARK_(output_66892,"Error")) || (clojure.string.includes_QMARK_(output_66892,"Invalid")))));
if(value__11369__auto___66897){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___66897,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___66897,null]));
}

}catch (e66855){var t__11416__auto___66899 = e66855;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___66899,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66852_66887__$1)].join('')));

}


var G__66900 = cljs.core.next(seq__66808__$1);
var G__66901 = null;
var G__66902 = (0);
var G__66903 = (0);
seq__66808 = G__66900;
chunk__66809 = G__66901;
count__66810 = G__66902;
i__66811 = G__66903;
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
