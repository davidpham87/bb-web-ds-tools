goog.provide('bb_web_ds_tools.events.journeys_test');
bb_web_ds_tools.events.journeys_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
/**
 * Map of route names to a list of critical subscriptions for that view.
 * Used to verify that the view state is accessible and consistent.
 */
bb_web_ds_tools.events.journeys_test.view_subscriptions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","user-input-root","bb-web-ds-tools.views.datasets/user-input-root",540281190),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword("bb-web-ds-tools.events.settings","column-normalizer","bb-web-ds-tools.events.settings/column-normalizer",-462853964)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","user-input-root","bb-web-ds-tools.views.gemma/user-input-root",1533408284),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","messages","bb-web-ds-tools.views.gemma/messages",-815148230)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","user-input-root","malli/user-input-root",-1704561067),new cljs.core.Keyword("malli","component-root","malli/component-root",-523952967),new cljs.core.Keyword("malli","schema-text","malli/schema-text",-196762812),new cljs.core.Keyword("malli","inference-input","malli/inference-input",2111715866),new cljs.core.Keyword("malli","active-tab","malli/active-tab",998734819),new cljs.core.Keyword("malli","inference-view-state","malli/inference-view-state",-864156552)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","user-input-root","honeysql/user-input-root",2072182455),new cljs.core.Keyword("honeysql","component-root","honeysql/component-root",36074719),new cljs.core.Keyword("honeysql","input-text","honeysql/input-text",363901609),new cljs.core.Keyword("honeysql","sql-output","honeysql/sql-output",1455501449)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","code","bb-web-ds-tools.views.pyodide/code",-1315684971),new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323),new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029)], null)]);
bb_web_ds_tools.events.journeys_test.generate_journey_test = (function bb_web_ds_tools$events$journeys_test$generate_journey_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generates a valid sequence of events"], 0));

try{var journey = cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(100)], null)));
try{var values__11365__auto___67263 = (new cljs.core.List(null,journey,null,(1),null));
var result__11366__auto___67264 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,values__11365__auto___67263);
if(cljs.core.truth_(result__11366__auto___67264)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___67263),"Journey should not be empty"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___67263),null,(1),null)),(2),null)),"Journey should not be empty"]));
}

}catch (e66482){var t__11416__auto___67267 = e66482;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,t__11416__auto___67267,"Journey should not be empty"]));
}
var seq__66494 = cljs.core.seq(journey);
var chunk__66495 = null;
var count__66496 = (0);
var i__66497 = (0);
while(true){
if((i__66497 < count__66496)){
var vec__66520 = chunk__66495.cljs$core$IIndexed$_nth$arity$2(null,i__66497);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66520,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66520,(1),null);
var event_def_67269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_67270 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_67269);
try{var value__11369__auto___67271 = event_def_67269;
if(cljs.core.truth_(value__11369__auto___67271)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___67271,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___67271,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e66527){var t__11416__auto___67274 = e66527;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,t__11416__auto___67274,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___67276 = (new cljs.core.List(null,args_schema_67270,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___67277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___67276);
if(cljs.core.truth_(result__11366__auto___67277)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___67276),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___67276),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e66529){var t__11416__auto___67282 = e66529;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,t__11416__auto___67282,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__67283 = seq__66494;
var G__67284 = chunk__66495;
var G__67285 = count__66496;
var G__67286 = (i__66497 + (1));
seq__66494 = G__67283;
chunk__66495 = G__67284;
count__66496 = G__67285;
i__66497 = G__67286;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66494);
if(temp__5825__auto__){
var seq__66494__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66494__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66494__$1);
var G__67287 = cljs.core.chunk_rest(seq__66494__$1);
var G__67288 = c__5548__auto__;
var G__67289 = cljs.core.count(c__5548__auto__);
var G__67290 = (0);
seq__66494 = G__67287;
chunk__66495 = G__67288;
count__66496 = G__67289;
i__66497 = G__67290;
continue;
} else {
var vec__66531 = cljs.core.first(seq__66494__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531,(1),null);
var event_def_67291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_67292 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_67291);
try{var value__11369__auto___67293 = event_def_67291;
if(cljs.core.truth_(value__11369__auto___67293)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___67293,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___67293,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e66534){var t__11416__auto___67294 = e66534;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,t__11416__auto___67294,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___67295 = (new cljs.core.List(null,args_schema_67292,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___67296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___67295);
if(cljs.core.truth_(result__11366__auto___67296)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___67295),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___67295),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e66546){var t__11416__auto___67297 = e66546;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,t__11416__auto___67297,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__67298 = cljs.core.next(seq__66494__$1);
var G__67299 = null;
var G__67300 = (0);
var G__67301 = (0);
seq__66494 = G__67298;
chunk__66495 = G__67299;
count__66496 = G__67300;
i__66497 = G__67301;
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

(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.generate_journey_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","generate-journey-test","bb-web-ds-tools.events.journeys-test/generate-journey-test",-859906664,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"generate-journey-test","generate-journey-test",148081894,null),"bb_web_ds_tools/events/journeys_test.cljs",31,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.generate_journey_test)?bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.fsm_structure_test = (function bb_web_ds_tools$events$journeys_test$fsm_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FSM is fully connected and normalized"], 0));

try{try{var values__11365__auto___67302 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___67303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___67302);
if(cljs.core.truth_(result__11366__auto___67303)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___67302),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___67302),null,(1),null)),(2),null)),null]));
}

}catch (e66548){var t__11416__auto___67304 = e66548;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,t__11416__auto___67304,null]));
}
var seq__66553 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__66554 = null;
var count__66555 = (0);
var i__66556 = (0);
while(true){
if((i__66556 < count__66555)){
var vec__66755 = chunk__66554.cljs$core$IIndexed$_nth$arity$2(null,i__66556);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(1),null);
try{var values__11365__auto___67306 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___67307 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___67306);
if(cljs.core.truth_(result__11366__auto___67307)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___67306),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___67306),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e66765){var t__11416__auto___67311 = e66765;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,t__11416__auto___67311,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___67312 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___67313 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67312);
if(cljs.core.truth_(result__11366__auto___67313)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67312),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67312),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e66803){var t__11416__auto___67317 = e66803;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,t__11416__auto___67317,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_67318 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___67319 = (new cljs.core.List(null,total_prob_67318,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___67320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___67319);
if(cljs.core.truth_(result__11366__auto___67320)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___67319),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___67319),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e66832){var t__11416__auto___67322 = e66832;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,t__11416__auto___67322,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___67324 = (new cljs.core.List(null,total_prob_67318,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___67325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___67324);
if(cljs.core.truth_(result__11366__auto___67325)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___67324),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___67324),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e66837){var t__11416__auto___67327 = e66837;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,t__11416__auto___67327,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__67328 = seq__66553;
var G__67329 = chunk__66554;
var G__67330 = count__66555;
var G__67331 = (i__66556 + (1));
seq__66553 = G__67328;
chunk__66554 = G__67329;
count__66555 = G__67330;
i__66556 = G__67331;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66553);
if(temp__5825__auto__){
var seq__66553__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66553__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66553__$1);
var G__67332 = cljs.core.chunk_rest(seq__66553__$1);
var G__67333 = c__5548__auto__;
var G__67334 = cljs.core.count(c__5548__auto__);
var G__67335 = (0);
seq__66553 = G__67332;
chunk__66554 = G__67333;
count__66555 = G__67334;
i__66556 = G__67335;
continue;
} else {
var vec__66838 = cljs.core.first(seq__66553__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(1),null);
try{var values__11365__auto___67336 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___67337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___67336);
if(cljs.core.truth_(result__11366__auto___67337)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___67336),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___67336),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e66852){var t__11416__auto___67338 = e66852;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,t__11416__auto___67338,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___67339 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___67340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67339);
if(cljs.core.truth_(result__11366__auto___67340)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67339),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67339),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e66878){var t__11416__auto___67343 = e66878;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,t__11416__auto___67343,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_67345 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___67346 = (new cljs.core.List(null,total_prob_67345,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___67347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___67346);
if(cljs.core.truth_(result__11366__auto___67347)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___67346),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___67346),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e66879){var t__11416__auto___67349 = e66879;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,t__11416__auto___67349,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___67351 = (new cljs.core.List(null,total_prob_67345,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___67352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___67351);
if(cljs.core.truth_(result__11366__auto___67352)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___67351),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___67351),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e66880){var t__11416__auto___67354 = e66880;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,t__11416__auto___67354,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__67355 = cljs.core.next(seq__66553__$1);
var G__67356 = null;
var G__67357 = (0);
var G__67358 = (0);
seq__66553 = G__67355;
chunk__66554 = G__67356;
count__66555 = G__67357;
i__66556 = G__67358;
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

(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.fsm_structure_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","fsm-structure-test","bb-web-ds-tools.events.journeys-test/fsm-structure-test",-1594218574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"fsm-structure-test","fsm-structure-test",-481200324,null),"bb_web_ds_tools/events/journeys_test.cljs",28,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.fsm_structure_test)?bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.journey_execution_test = (function bb_web_ds_tools$events$journeys_test$journey_execution_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Executes a generated journey against the app-db"], 0));

try{return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","initialize","malli/initialize",521496988)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","initialize","bb-web-ds-tools.views.vega-lite/initialize",1758779882)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","initialize","bb-web-ds-tools.views.gemma/initialize",1645538905)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","initialize","bb-web-ds-tools.views.code/initialize",1752373785)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","initialize","bb-web-ds-tools.events.settings/initialize",-887932124)], null));

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

var journey = cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(20)], null)));
var seq__66987 = cljs.core.seq(journey);
var chunk__66988 = null;
var count__66989 = (0);
var i__66990 = (0);
while(true){
if((i__66990 < count__66989)){
var vec__67194 = chunk__66988.cljs$core$IIndexed$_nth$arity$2(null,i__66990);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67194,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67194,(1),null);
re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),args));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__67198_67360 = args;
var route_name_67361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67198_67360,(0),null);
var params_67362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67198_67360,(1),null);
var query_67363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67198_67360,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_67361], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_67362,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_67363], null)], null));
} else {
}

var current_route_match_67364 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_67365 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_67364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_67366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var expected_route_67367 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_67366);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_67367;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_67367,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___67369 = (new cljs.core.List(null,expected_route_67367,(new cljs.core.List(null,current_route_name_67365,null,(1),null)),(2),null));
var result__11366__auto___67370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___67369);
if(cljs.core.truth_(result__11366__auto___67370)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___67369),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67367)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___67369),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67367)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}

}catch (e67202){var t__11416__auto___67372 = e67202;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,t__11416__auto___67372,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67367)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}} else {
}

var temp__5825__auto___67373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_67365);
if(cljs.core.truth_(temp__5825__auto___67373)){
var subs_67374 = temp__5825__auto___67373;
var seq__67204_67375 = cljs.core.seq(subs_67374);
var chunk__67205_67376 = null;
var count__67206_67377 = (0);
var i__67207_67378 = (0);
while(true){
if((i__67207_67378 < count__67206_67377)){
var sub_67379 = chunk__67205_67376.cljs$core$IIndexed$_nth$arity$2(null,i__67207_67378);
var val_67380 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_67379], null)));
try{var values__11365__auto___67381 = (new cljs.core.List(null,(val_67380 == null),null,(1),null));
var result__11366__auto___67382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67381);
if(cljs.core.truth_(result__11366__auto___67382)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67381),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67379)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67381),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67379)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}

}catch (e67213){var t__11416__auto___67384 = e67213;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___67384,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67379)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}

var G__67385 = seq__67204_67375;
var G__67386 = chunk__67205_67376;
var G__67387 = count__67206_67377;
var G__67388 = (i__67207_67378 + (1));
seq__67204_67375 = G__67385;
chunk__67205_67376 = G__67386;
count__67206_67377 = G__67387;
i__67207_67378 = G__67388;
continue;
} else {
var temp__5825__auto___67389__$1 = cljs.core.seq(seq__67204_67375);
if(temp__5825__auto___67389__$1){
var seq__67204_67391__$1 = temp__5825__auto___67389__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67204_67391__$1)){
var c__5548__auto___67392 = cljs.core.chunk_first(seq__67204_67391__$1);
var G__67393 = cljs.core.chunk_rest(seq__67204_67391__$1);
var G__67394 = c__5548__auto___67392;
var G__67395 = cljs.core.count(c__5548__auto___67392);
var G__67396 = (0);
seq__67204_67375 = G__67393;
chunk__67205_67376 = G__67394;
count__67206_67377 = G__67395;
i__67207_67378 = G__67396;
continue;
} else {
var sub_67397 = cljs.core.first(seq__67204_67391__$1);
var val_67398 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_67397], null)));
try{var values__11365__auto___67399 = (new cljs.core.List(null,(val_67398 == null),null,(1),null));
var result__11366__auto___67400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67399);
if(cljs.core.truth_(result__11366__auto___67400)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67399),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67397)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67399),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67397)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}

}catch (e67218){var t__11416__auto___67403 = e67218;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___67403,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67397)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67365)].join('')]));
}

var G__67405 = cljs.core.next(seq__67204_67391__$1);
var G__67406 = null;
var G__67407 = (0);
var G__67408 = (0);
seq__67204_67375 = G__67405;
chunk__67205_67376 = G__67406;
count__67206_67377 = G__67407;
i__67207_67378 = G__67408;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__67409 = seq__66987;
var G__67410 = chunk__66988;
var G__67411 = count__66989;
var G__67412 = (i__66990 + (1));
seq__66987 = G__67409;
chunk__66988 = G__67410;
count__66989 = G__67411;
i__66990 = G__67412;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66987);
if(temp__5825__auto__){
var seq__66987__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66987__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66987__$1);
var G__67413 = cljs.core.chunk_rest(seq__66987__$1);
var G__67414 = c__5548__auto__;
var G__67415 = cljs.core.count(c__5548__auto__);
var G__67416 = (0);
seq__66987 = G__67413;
chunk__66988 = G__67414;
count__66989 = G__67415;
i__66990 = G__67416;
continue;
} else {
var vec__67222 = cljs.core.first(seq__66987__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67222,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67222,(1),null);
re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),args));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__67225_67420 = args;
var route_name_67421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67225_67420,(0),null);
var params_67422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67225_67420,(1),null);
var query_67423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67225_67420,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_67421], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_67422,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_67423], null)], null));
} else {
}

var current_route_match_67424 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_67425 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_67424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_67426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var expected_route_67427 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_67426);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_67427;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_67427,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___67429 = (new cljs.core.List(null,expected_route_67427,(new cljs.core.List(null,current_route_name_67425,null,(1),null)),(2),null));
var result__11366__auto___67430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___67429);
if(cljs.core.truth_(result__11366__auto___67430)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___67429),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67427)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___67429),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67427)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}

}catch (e67228){var t__11416__auto___67433 = e67228;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,t__11416__auto___67433,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_67427)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}} else {
}

var temp__5825__auto___67434__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_67425);
if(cljs.core.truth_(temp__5825__auto___67434__$1)){
var subs_67435 = temp__5825__auto___67434__$1;
var seq__67232_67438 = cljs.core.seq(subs_67435);
var chunk__67233_67439 = null;
var count__67234_67440 = (0);
var i__67235_67441 = (0);
while(true){
if((i__67235_67441 < count__67234_67440)){
var sub_67442 = chunk__67233_67439.cljs$core$IIndexed$_nth$arity$2(null,i__67235_67441);
var val_67443 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_67442], null)));
try{var values__11365__auto___67444 = (new cljs.core.List(null,(val_67443 == null),null,(1),null));
var result__11366__auto___67445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67444);
if(cljs.core.truth_(result__11366__auto___67445)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67444),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67442)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67444),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67442)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}

}catch (e67248){var t__11416__auto___67447 = e67248;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___67447,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67442)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}

var G__67448 = seq__67232_67438;
var G__67449 = chunk__67233_67439;
var G__67450 = count__67234_67440;
var G__67451 = (i__67235_67441 + (1));
seq__67232_67438 = G__67448;
chunk__67233_67439 = G__67449;
count__67234_67440 = G__67450;
i__67235_67441 = G__67451;
continue;
} else {
var temp__5825__auto___67452__$2 = cljs.core.seq(seq__67232_67438);
if(temp__5825__auto___67452__$2){
var seq__67232_67453__$1 = temp__5825__auto___67452__$2;
if(cljs.core.chunked_seq_QMARK_(seq__67232_67453__$1)){
var c__5548__auto___67454 = cljs.core.chunk_first(seq__67232_67453__$1);
var G__67455 = cljs.core.chunk_rest(seq__67232_67453__$1);
var G__67456 = c__5548__auto___67454;
var G__67457 = cljs.core.count(c__5548__auto___67454);
var G__67458 = (0);
seq__67232_67438 = G__67455;
chunk__67233_67439 = G__67456;
count__67234_67440 = G__67457;
i__67235_67441 = G__67458;
continue;
} else {
var sub_67459 = cljs.core.first(seq__67232_67453__$1);
var val_67460 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_67459], null)));
try{var values__11365__auto___67461 = (new cljs.core.List(null,(val_67460 == null),null,(1),null));
var result__11366__auto___67462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___67461);
if(cljs.core.truth_(result__11366__auto___67462)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67461),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67459)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___67461),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67459)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}

}catch (e67260){var t__11416__auto___67463 = e67260;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___67463,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_67459)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_67425)].join('')]));
}

var G__67465 = cljs.core.next(seq__67232_67453__$1);
var G__67467 = null;
var G__67468 = (0);
var G__67469 = (0);
seq__67232_67438 = G__67465;
chunk__67233_67439 = G__67467;
count__67234_67440 = G__67468;
i__67235_67441 = G__67469;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__67470 = cljs.core.next(seq__66987__$1);
var G__67471 = null;
var G__67472 = (0);
var G__67473 = (0);
seq__66987 = G__67470;
chunk__66988 = G__67471;
count__66989 = G__67472;
i__66990 = G__67473;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.journey_execution_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","journey-execution-test","bb-web-ds-tools.events.journeys-test/journey-execution-test",816232536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"journey-execution-test","journey-execution-test",2093738202,null),"bb_web_ds_tools/events/journeys_test.cljs",32,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.journey_execution_test)?bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.events.journeys_test.js.map
