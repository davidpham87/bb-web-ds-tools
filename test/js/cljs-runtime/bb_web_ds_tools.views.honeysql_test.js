goog.provide('bb_web_ds_tools.views.honeysql_test');
bb_web_ds_tools.views.honeysql_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.honeysql_test.honeysql_property_test = (function bb_web_ds_tools$views$honeysql_test$honeysql_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.honeysql_test.honeysql_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

var actions = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:select [:a] :from [:b]}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),"{:invalid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"convert","convert",912478626)], null)], null)], null));
var seq__59100 = cljs.core.seq(actions);
var chunk__59101 = null;
var count__59102 = (0);
var i__59103 = (0);
while(true){
if((i__59103 < count__59102)){
var action = chunk__59101.cljs$core$IIndexed$_nth$arity$2(null,i__59103);
var vec__59140_59182 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_59183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140_59182,(0),null);
var arg_59184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140_59182,(1),null);
var G__59144_59185 = cmd_59183;
var G__59144_59186__$1 = (((G__59144_59185 instanceof cljs.core.Keyword))?G__59144_59185.fqn:null);
switch (G__59144_59186__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_59184], null));

try{var values__11365__auto___59188 = (new cljs.core.List(null,arg_59184,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___59189 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59188);
if(cljs.core.truth_(result__11366__auto___59189)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59188),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59188),null,(1),null)),(2),null)),null]));
}

}catch (e59145){var t__11416__auto___59193 = e59145;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___59193,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_59194 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___59195 = (new cljs.core.List(null,output_59194,null,(1),null));
var result__11366__auto___59196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59195);
if(cljs.core.truth_(result__11366__auto___59196)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59195),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59195),null,(1),null)),(2),null)),null]));
}

}catch (e59153){var t__11416__auto___59200 = e59153;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___59200,null]));
}
try{var value__11369__auto___59201 = ((clojure.string.includes_QMARK_(output_59194,"SELECT")) || (((clojure.string.includes_QMARK_(output_59194,"Error")) || (clojure.string.includes_QMARK_(output_59194,"Invalid")))));
if(value__11369__auto___59201){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___59201,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___59201,null]));
}

}catch (e59156){var t__11416__auto___59209 = e59156;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___59209,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59144_59186__$1)].join('')));

}


var G__59219 = seq__59100;
var G__59220 = chunk__59101;
var G__59221 = count__59102;
var G__59222 = (i__59103 + (1));
seq__59100 = G__59219;
chunk__59101 = G__59220;
count__59102 = G__59221;
i__59103 = G__59222;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59100);
if(temp__5825__auto__){
var seq__59100__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59100__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__59100__$1);
var G__59225 = cljs.core.chunk_rest(seq__59100__$1);
var G__59226 = c__5548__auto__;
var G__59227 = cljs.core.count(c__5548__auto__);
var G__59228 = (0);
seq__59100 = G__59225;
chunk__59101 = G__59226;
count__59102 = G__59227;
i__59103 = G__59228;
continue;
} else {
var action = cljs.core.first(seq__59100__$1);
var vec__59159_59231 = ((cljs.core.vector_QMARK_(action))?action:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,null], null));
var cmd_59232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59159_59231,(0),null);
var arg_59233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59159_59231,(1),null);
var G__59163_59239 = cmd_59232;
var G__59163_59240__$1 = (((G__59163_59239 instanceof cljs.core.Keyword))?G__59163_59239.fqn:null);
switch (G__59163_59240__$1) {
case "update-input":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),arg_59233], null));

try{var values__11365__auto___59243 = (new cljs.core.List(null,arg_59233,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null))),null,(1),null)),(2),null));
var result__11366__auto___59244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___59243);
if(cljs.core.truth_(result__11366__auto___59244)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59243),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___59243),null,(1),null)),(2),null)),null]));
}

}catch (e59165){var t__11416__auto___59249 = e59165;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),18,29,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null)))),29,t__11416__auto___59249,null]));
}
break;
case "convert":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));

var output_59254 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null)));
try{var values__11365__auto___59255 = (new cljs.core.List(null,output_59254,null,(1),null));
var result__11366__auto___59256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__11365__auto___59255);
if(cljs.core.truth_(result__11366__auto___59256)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59255),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__11365__auto___59255),null,(1),null)),(2),null)),null]));
}

}catch (e59166){var t__11416__auto___59258 = e59166;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),20,35,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"output","output",534662484,null)),35,t__11416__auto___59258,null]));
}
try{var value__11369__auto___59261 = ((clojure.string.includes_QMARK_(output_59254,"SELECT")) || (((clojure.string.includes_QMARK_(output_59254,"Error")) || (clojure.string.includes_QMARK_(output_59254,"Invalid")))));
if(value__11369__auto___59261){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___59261,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,value__11369__auto___59261,null]));
}

}catch (e59168){var t__11416__auto___59262 = e59168;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/honeysql_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),20,37,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"SELECT"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Error"),cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"output","output",534662484,null),"Invalid")),39,t__11416__auto___59262,null]));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59163_59240__$1)].join('')));

}


var G__59264 = cljs.core.next(seq__59100__$1);
var G__59265 = null;
var G__59266 = (0);
var G__59267 = (0);
seq__59100 = G__59264;
chunk__59101 = G__59265;
count__59102 = G__59266;
i__59103 = G__59267;
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
