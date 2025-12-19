goog.provide('bb_web_ds_tools.events.journeys_test');
bb_web_ds_tools.events.journeys_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
/**
 * Map of route names to a list of critical subscriptions for that view.
 * Used to verify that the view state is accessible and consistent.
 */
bb_web_ds_tools.events.journeys_test.view_subscriptions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","user-input-root","bb-web-ds-tools.views.datasets/user-input-root",540281190),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword("bb-web-ds-tools.events.settings","column-normalizer","bb-web-ds-tools.events.settings/column-normalizer",-462853964)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","user-input-root","bb-web-ds-tools.views.gemma/user-input-root",1533408284),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","messages","bb-web-ds-tools.views.gemma/messages",-815148230)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067),new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967),new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812),new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866),new cljs.core.Keyword("malli","active-tab","malli/active-tab",998734819),new cljs.core.Keyword("malli","inference-view-state","malli/inference-view-state",-864156552)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","user-input-root","honeysql/user-input-root",2072182455),new cljs.core.Keyword("honeysql","component-root","honeysql/component-root",36074719),new cljs.core.Keyword("honeysql","input","honeysql/input",201662062),new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971),new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323),new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","user-input-root","bb-web-ds-tools.views.vega-lite.subs/user-input-root",2051836186),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","component-root","bb-web-ds-tools.views.vega-lite.subs/component-root",17299576),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","data-input","bb-web-ds-tools.views.vega-lite.subs/data-input",-378223886),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","config-input","bb-web-ds-tools.views.vega-lite.subs/config-input",120073368)], null)]);
bb_web_ds_tools.events.journeys_test.generate_journey_test = (function bb_web_ds_tools$events$journeys_test$generate_journey_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generates a valid sequence of events"], 0));

try{var journey = cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(100)], null)));
try{var values__11365__auto___41841 = (new cljs.core.List(null,journey,null,(1),null));
var result__11366__auto___41842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,values__11365__auto___41841);
if(cljs.core.truth_(result__11366__auto___41842)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___41841),"Journey should not be empty"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___41841),null,(1),null)),(2),null)),"Journey should not be empty"]));
}

}catch (e40942){var t__11416__auto___41849 = e40942;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,t__11416__auto___41849,"Journey should not be empty"]));
}
var seq__40944 = cljs.core.seq(journey);
var chunk__40945 = null;
var count__40946 = (0);
var i__40947 = (0);
while(true){
if((i__40947 < count__40946)){
var vec__40976 = chunk__40945.cljs$core$IIndexed$_nth$arity$2(null,i__40947);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40976,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40976,(1),null);
var event_def_41850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_41851 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_41850);
try{var value__11369__auto___41852 = event_def_41850;
if(cljs.core.truth_(value__11369__auto___41852)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___41852,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___41852,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e40979){var t__11416__auto___41853 = e40979;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___41853,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___41855 = (new cljs.core.List(null,args_schema_41851,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___41856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___41855);
if(cljs.core.truth_(result__11366__auto___41856)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___41855),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___41855),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e40982){var t__11416__auto___41864 = e40982;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___41864,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__41865 = seq__40944;
var G__41866 = chunk__40945;
var G__41867 = count__40946;
var G__41868 = (i__40947 + (1));
seq__40944 = G__41865;
chunk__40945 = G__41866;
count__40946 = G__41867;
i__40947 = G__41868;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40944);
if(temp__5825__auto__){
var seq__40944__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40944__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__40944__$1);
var G__41869 = cljs.core.chunk_rest(seq__40944__$1);
var G__41870 = c__5548__auto__;
var G__41871 = cljs.core.count(c__5548__auto__);
var G__41872 = (0);
seq__40944 = G__41869;
chunk__40945 = G__41870;
count__40946 = G__41871;
i__40947 = G__41872;
continue;
} else {
var vec__40983 = cljs.core.first(seq__40944__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40983,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40983,(1),null);
var event_def_41873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_41874 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_41873);
try{var value__11369__auto___41875 = event_def_41873;
if(cljs.core.truth_(value__11369__auto___41875)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___41875,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___41875,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e40987){var t__11416__auto___41876 = e40987;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___41876,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___41890 = (new cljs.core.List(null,args_schema_41874,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___41891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___41890);
if(cljs.core.truth_(result__11366__auto___41891)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___41890),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___41890),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e40989){var t__11416__auto___41895 = e40989;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___41895,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__41896 = cljs.core.next(seq__40944__$1);
var G__41897 = null;
var G__41898 = (0);
var G__41899 = (0);
seq__40944 = G__41896;
chunk__40945 = G__41897;
count__40946 = G__41898;
i__40947 = G__41899;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.generate_journey_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","generate-journey-test","bb-web-ds-tools.events.journeys-test/generate-journey-test",-859906664,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"generate-journey-test","generate-journey-test",148081894,null),"bb_web_ds_tools/events/journeys_test.cljs",31,1,69,69,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.generate_journey_test)?bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.fsm_structure_test = (function bb_web_ds_tools$events$journeys_test$fsm_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FSM is fully connected and normalized"], 0));

try{try{var values__11365__auto___41901 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___41902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___41901);
if(cljs.core.truth_(result__11366__auto___41902)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___41901),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___41901),null,(1),null)),(2),null)),null]));
}

}catch (e40992){var t__11416__auto___41913 = e40992;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,t__11416__auto___41913,null]));
}
var seq__40993 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__40994 = null;
var count__40995 = (0);
var i__40996 = (0);
while(true){
if((i__40996 < count__40995)){
var vec__41063 = chunk__40994.cljs$core$IIndexed$_nth$arity$2(null,i__40996);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063,(1),null);
try{var values__11365__auto___41916 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___41917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___41916);
if(cljs.core.truth_(result__11366__auto___41917)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___41916),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___41916),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e41068){var t__11416__auto___41919 = e41068;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___41919,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___41924 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___41925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___41924);
if(cljs.core.truth_(result__11366__auto___41925)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___41924),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___41924),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e41069){var t__11416__auto___41928 = e41069;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___41928,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_41937 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___41938 = (new cljs.core.List(null,total_prob_41937,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___41939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___41938);
if(cljs.core.truth_(result__11366__auto___41939)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___41938),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___41938),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e41081){var t__11416__auto___41942 = e41081;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___41942,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___41944 = (new cljs.core.List(null,total_prob_41937,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___41945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___41944);
if(cljs.core.truth_(result__11366__auto___41945)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___41944),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___41944),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e41085){var t__11416__auto___41949 = e41085;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___41949,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__41950 = seq__40993;
var G__41951 = chunk__40994;
var G__41952 = count__40995;
var G__41953 = (i__40996 + (1));
seq__40993 = G__41950;
chunk__40994 = G__41951;
count__40995 = G__41952;
i__40996 = G__41953;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40993);
if(temp__5825__auto__){
var seq__40993__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40993__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__40993__$1);
var G__41961 = cljs.core.chunk_rest(seq__40993__$1);
var G__41962 = c__5548__auto__;
var G__41963 = cljs.core.count(c__5548__auto__);
var G__41964 = (0);
seq__40993 = G__41961;
chunk__40994 = G__41962;
count__40995 = G__41963;
i__40996 = G__41964;
continue;
} else {
var vec__41096 = cljs.core.first(seq__40993__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41096,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41096,(1),null);
try{var values__11365__auto___41965 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___41966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___41965);
if(cljs.core.truth_(result__11366__auto___41966)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___41965),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___41965),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e41102){var t__11416__auto___41967 = e41102;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___41967,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___41968 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___41969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___41968);
if(cljs.core.truth_(result__11366__auto___41969)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___41968),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___41968),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e41139){var t__11416__auto___41970 = e41139;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___41970,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_41975 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___41976 = (new cljs.core.List(null,total_prob_41975,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___41977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___41976);
if(cljs.core.truth_(result__11366__auto___41977)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___41976),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___41976),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e41222){var t__11416__auto___41978 = e41222;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___41978,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___41979 = (new cljs.core.List(null,total_prob_41975,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___41980 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___41979);
if(cljs.core.truth_(result__11366__auto___41980)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___41979),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___41979),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e41256){var t__11416__auto___41986 = e41256;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___41986,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__41988 = cljs.core.next(seq__40993__$1);
var G__41989 = null;
var G__41990 = (0);
var G__41991 = (0);
seq__40993 = G__41988;
chunk__40994 = G__41989;
count__40995 = G__41990;
i__40996 = G__41991;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.fsm_structure_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","fsm-structure-test","bb-web-ds-tools.events.journeys-test/fsm-structure-test",-1594218574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"fsm-structure-test","fsm-structure-test",-481200324,null),"bb_web_ds_tools/events/journeys_test.cljs",28,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.fsm_structure_test)?bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.journey_execution_test = (function bb_web_ds_tools$events$journeys_test$journey_execution_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Executes generated journeys against the app-db using test.check"], 0));

try{var journey_gen = clojure.test.check.generators.fmap((function (_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(50)], null))));
}),clojure.test.check.generators.return$(null));
var prop = clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [journey_gen], null),(function (journey){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","initialize","bb-web-ds-tools.views.gemma/initialize",1645538905)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","initialize","bb-web-ds-tools.views.code/initialize",1752373785)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","initialize","bb-web-ds-tools.events.settings/initialize",-887932124)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","initialize","bb-web-ds-tools.views.app-db/initialize",-1891418852)], null));

re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_){
return null;
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),(function (db,_){
return db;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (_){
return null;
}));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384)], null));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","load-runtime","bb-web-ds-tools.views.r-repl/load-runtime",-1780063609),(function (_){
return null;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),(function (_){
return null;
}));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize","bb-web-ds-tools.views.r-repl/initialize",-1256766244)], null));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","load-runtime","bb-web-ds-tools.views.pyodide/load-runtime",-658206477),(function (_){
return null;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","execute-python","bb-web-ds-tools.views.pyodide/execute-python",2027548435),(function (_){
return null;
}));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","initialize","bb-web-ds-tools.views.pyodide/initialize",-110047080)], null));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model-fx","bb-web-ds-tools.views.gemma/load-model-fx",225161033),(function (_){
return null;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","generate-response-fx","bb-web-ds-tools.views.gemma/generate-response-fx",-476111213),(function (_){
return null;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-datasets","bb-web-ds-tools.views.datasets/fetch-vega-datasets",202932363),(function (_){
return null;
}));

re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-dataset","bb-web-ds-tools.views.datasets/fetch-vega-dataset",1814090652),(function (_){
return null;
}));

try{var seq__41497_42001 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,journey));
var chunk__41498_42002 = null;
var count__41499_42003 = (0);
var i__41500_42004 = (0);
while(true){
if((i__41500_42004 < count__41499_42003)){
var vec__41748_42005 = chunk__41498_42002.cljs$core$IIndexed$_nth$arity$2(null,i__41500_42004);
var i_42006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41748_42005,(0),null);
var vec__41751_42007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41748_42005,(1),null);
var event_42008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751_42007,(0),null);
var args_42009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751_42007,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_42008], null),args_42009));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_42008,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__41759_42010 = args_42009;
var route_name_42011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41759_42010,(0),null);
var params_42012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41759_42010,(1),null);
var query_42013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41759_42010,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_42011], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_42012,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_42013], null)], null));
} else {
}

var current_route_match_42018 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_42019 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_42018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_42020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_42008);
var expected_route_42021 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_42020);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_42021;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_42021,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_42021,current_route_name_42019)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_42008)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_42021)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42019)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___42022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_42019);
if(cljs.core.truth_(temp__5825__auto___42022)){
var subs_42023 = temp__5825__auto___42022;
var seq__41762_42024 = cljs.core.seq(subs_42023);
var chunk__41763_42025 = null;
var count__41764_42026 = (0);
var i__41765_42027 = (0);
while(true){
if((i__41765_42027 < count__41764_42026)){
var sub_42028 = chunk__41763_42025.cljs$core$IIndexed$_nth$arity$2(null,i__41765_42027);
try{var val_42029 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_42028], null)));
if((val_42029 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42028)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42019)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e41775){var e_42030 = e41775;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42028)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42019)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_42030);
}

var G__42031 = seq__41762_42024;
var G__42032 = chunk__41763_42025;
var G__42033 = count__41764_42026;
var G__42034 = (i__41765_42027 + (1));
seq__41762_42024 = G__42031;
chunk__41763_42025 = G__42032;
count__41764_42026 = G__42033;
i__41765_42027 = G__42034;
continue;
} else {
var temp__5825__auto___42035__$1 = cljs.core.seq(seq__41762_42024);
if(temp__5825__auto___42035__$1){
var seq__41762_42036__$1 = temp__5825__auto___42035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41762_42036__$1)){
var c__5548__auto___42037 = cljs.core.chunk_first(seq__41762_42036__$1);
var G__42038 = cljs.core.chunk_rest(seq__41762_42036__$1);
var G__42039 = c__5548__auto___42037;
var G__42040 = cljs.core.count(c__5548__auto___42037);
var G__42041 = (0);
seq__41762_42024 = G__42038;
chunk__41763_42025 = G__42039;
count__41764_42026 = G__42040;
i__41765_42027 = G__42041;
continue;
} else {
var sub_42042 = cljs.core.first(seq__41762_42036__$1);
try{var val_42043 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_42042], null)));
if((val_42043 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42042)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42019)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e41783){var e_42048 = e41783;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42042)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42019)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_42048);
}

var G__42049 = cljs.core.next(seq__41762_42036__$1);
var G__42050 = null;
var G__42051 = (0);
var G__42052 = (0);
seq__41762_42024 = G__42049;
chunk__41763_42025 = G__42050;
count__41764_42026 = G__42051;
i__41765_42027 = G__42052;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e41755){var e_42053 = e41755;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42006),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_42008)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_42009)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_42006,new cljs.core.Keyword(null,"event","event",301435442),event_42008,new cljs.core.Keyword(null,"args","args",1315556576),args_42009], null),e_42053);
}

var G__42054 = seq__41497_42001;
var G__42055 = chunk__41498_42002;
var G__42056 = count__41499_42003;
var G__42057 = (i__41500_42004 + (1));
seq__41497_42001 = G__42054;
chunk__41498_42002 = G__42055;
count__41499_42003 = G__42056;
i__41500_42004 = G__42057;
continue;
} else {
var temp__5825__auto___42058 = cljs.core.seq(seq__41497_42001);
if(temp__5825__auto___42058){
var seq__41497_42059__$1 = temp__5825__auto___42058;
if(cljs.core.chunked_seq_QMARK_(seq__41497_42059__$1)){
var c__5548__auto___42060 = cljs.core.chunk_first(seq__41497_42059__$1);
var G__42061 = cljs.core.chunk_rest(seq__41497_42059__$1);
var G__42062 = c__5548__auto___42060;
var G__42063 = cljs.core.count(c__5548__auto___42060);
var G__42064 = (0);
seq__41497_42001 = G__42061;
chunk__41498_42002 = G__42062;
count__41499_42003 = G__42063;
i__41500_42004 = G__42064;
continue;
} else {
var vec__41792_42065 = cljs.core.first(seq__41497_42059__$1);
var i_42066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41792_42065,(0),null);
var vec__41795_42067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41792_42065,(1),null);
var event_42068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41795_42067,(0),null);
var args_42069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41795_42067,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_42068], null),args_42069));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_42068,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__41799_42070 = args_42069;
var route_name_42071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799_42070,(0),null);
var params_42072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799_42070,(1),null);
var query_42073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799_42070,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_42071], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_42072,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_42073], null)], null));
} else {
}

var current_route_match_42080 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_42081 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_42080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_42082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_42068);
var expected_route_42083 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_42082);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_42083;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_42083,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_42083,current_route_name_42081)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_42068)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_42083)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42081)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___42087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_42081);
if(cljs.core.truth_(temp__5825__auto___42087__$1)){
var subs_42088 = temp__5825__auto___42087__$1;
var seq__41806_42089 = cljs.core.seq(subs_42088);
var chunk__41807_42090 = null;
var count__41808_42091 = (0);
var i__41809_42092 = (0);
while(true){
if((i__41809_42092 < count__41808_42091)){
var sub_42093 = chunk__41807_42090.cljs$core$IIndexed$_nth$arity$2(null,i__41809_42092);
try{var val_42095 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_42093], null)));
if((val_42095 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42093)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42081)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e41818){var e_42097 = e41818;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42093)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42081)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_42097);
}

var G__42099 = seq__41806_42089;
var G__42100 = chunk__41807_42090;
var G__42101 = count__41808_42091;
var G__42102 = (i__41809_42092 + (1));
seq__41806_42089 = G__42099;
chunk__41807_42090 = G__42100;
count__41808_42091 = G__42101;
i__41809_42092 = G__42102;
continue;
} else {
var temp__5825__auto___42103__$2 = cljs.core.seq(seq__41806_42089);
if(temp__5825__auto___42103__$2){
var seq__41806_42104__$1 = temp__5825__auto___42103__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41806_42104__$1)){
var c__5548__auto___42105 = cljs.core.chunk_first(seq__41806_42104__$1);
var G__42106 = cljs.core.chunk_rest(seq__41806_42104__$1);
var G__42107 = c__5548__auto___42105;
var G__42108 = cljs.core.count(c__5548__auto___42105);
var G__42109 = (0);
seq__41806_42089 = G__42106;
chunk__41807_42090 = G__42107;
count__41808_42091 = G__42108;
i__41809_42092 = G__42109;
continue;
} else {
var sub_42110 = cljs.core.first(seq__41806_42104__$1);
try{var val_42112 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_42110], null)));
if((val_42112 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42110)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42081)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e41820){var e_42114 = e41820;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_42110)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_42081)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_42114);
}

var G__42115 = cljs.core.next(seq__41806_42104__$1);
var G__42116 = null;
var G__42117 = (0);
var G__42118 = (0);
seq__41806_42089 = G__42115;
chunk__41807_42090 = G__42116;
count__41808_42091 = G__42117;
i__41809_42092 = G__42118;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e41798){var e_42119 = e41798;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42066),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_42068)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_42069)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_42066,new cljs.core.Keyword(null,"event","event",301435442),event_42068,new cljs.core.Keyword(null,"args","args",1315556576),args_42069], null),e_42119);
}

var G__42120 = cljs.core.next(seq__41497_42059__$1);
var G__42121 = null;
var G__42122 = (0);
var G__42123 = (0);
seq__41497_42001 = G__42120;
chunk__41498_42002 = G__42121;
count__41499_42003 = G__42122;
i__41500_42004 = G__42123;
continue;
}
} else {
}
}
break;
}

return true;
}catch (e41496){var e = e41496;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed journey execution:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Last event:",cljs.core.last(journey)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error:",e.message], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Journey:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([journey], 0))], 0));

return false;
}}));
}));
var result = clojure.test.check.quick_check((20),prop);
try{var value__11369__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(value__11369__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),11,186,cljs.core.list(new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"result","result",-1239343558,null)),186,value__11369__auto__,["Generative test failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),11,186,cljs.core.list(new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"result","result",-1239343558,null)),186,value__11369__auto__,["Generative test failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}

return value__11369__auto__;
}catch (e41831){var t__11416__auto__ = e41831;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),11,186,cljs.core.list(new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"result","result",-1239343558,null)),186,t__11416__auto__,["Generative test failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.journey_execution_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","journey-execution-test","bb-web-ds-tools.events.journeys-test/journey-execution-test",816232536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"journey-execution-test","journey-execution-test",2093738202,null),"bb_web_ds_tools/events/journeys_test.cljs",32,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.journey_execution_test)?bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.events.journeys_test.js.map
