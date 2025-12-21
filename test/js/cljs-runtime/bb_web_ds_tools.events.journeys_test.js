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
try{var values__11365__auto___43437 = (new cljs.core.List(null,journey,null,(1),null));
var result__11366__auto___43438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,values__11365__auto___43437);
if(cljs.core.truth_(result__11366__auto___43438)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___43437),"Journey should not be empty"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___43437),null,(1),null)),(2),null)),"Journey should not be empty"]));
}

}catch (e42733){var t__11416__auto___43439 = e42733;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,t__11416__auto___43439,"Journey should not be empty"]));
}
var seq__42734 = cljs.core.seq(journey);
var chunk__42735 = null;
var count__42736 = (0);
var i__42737 = (0);
while(true){
if((i__42737 < count__42736)){
var vec__42749 = chunk__42735.cljs$core$IIndexed$_nth$arity$2(null,i__42737);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42749,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42749,(1),null);
var event_def_43440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_43449 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_43440);
try{var value__11369__auto___43450 = event_def_43440;
if(cljs.core.truth_(value__11369__auto___43450)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43450,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43450,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e42752){var t__11416__auto___43451 = e42752;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___43451,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___43452 = (new cljs.core.List(null,args_schema_43449,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___43453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___43452);
if(cljs.core.truth_(result__11366__auto___43453)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43452),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43452),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e42755){var t__11416__auto___43454 = e42755;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___43454,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__43455 = seq__42734;
var G__43456 = chunk__42735;
var G__43457 = count__42736;
var G__43458 = (i__42737 + (1));
seq__42734 = G__43455;
chunk__42735 = G__43456;
count__42736 = G__43457;
i__42737 = G__43458;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42734);
if(temp__5825__auto__){
var seq__42734__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42734__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42734__$1);
var G__43459 = cljs.core.chunk_rest(seq__42734__$1);
var G__43460 = c__5548__auto__;
var G__43461 = cljs.core.count(c__5548__auto__);
var G__43462 = (0);
seq__42734 = G__43459;
chunk__42735 = G__43460;
count__42736 = G__43461;
i__42737 = G__43462;
continue;
} else {
var vec__42757 = cljs.core.first(seq__42734__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42757,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42757,(1),null);
var event_def_43463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_43464 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_43463);
try{var value__11369__auto___43465 = event_def_43463;
if(cljs.core.truth_(value__11369__auto___43465)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43465,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43465,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e42760){var t__11416__auto___43474 = e42760;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___43474,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___43475 = (new cljs.core.List(null,args_schema_43464,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___43476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___43475);
if(cljs.core.truth_(result__11366__auto___43476)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43475),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43475),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e42761){var t__11416__auto___43477 = e42761;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___43477,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__43478 = cljs.core.next(seq__42734__$1);
var G__43479 = null;
var G__43480 = (0);
var G__43481 = (0);
seq__42734 = G__43478;
chunk__42735 = G__43479;
count__42736 = G__43480;
i__42737 = G__43481;
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

try{try{var values__11365__auto___43482 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___43483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___43482);
if(cljs.core.truth_(result__11366__auto___43483)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___43482),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___43482),null,(1),null)),(2),null)),null]));
}

}catch (e42763){var t__11416__auto___43484 = e42763;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,t__11416__auto___43484,null]));
}
var seq__42772 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__42773 = null;
var count__42774 = (0);
var i__42775 = (0);
while(true){
if((i__42775 < count__42774)){
var vec__42796 = chunk__42773.cljs$core$IIndexed$_nth$arity$2(null,i__42775);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(1),null);
try{var values__11365__auto___43485 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___43486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___43485);
if(cljs.core.truth_(result__11366__auto___43486)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43485),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43485),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e42799){var t__11416__auto___43487 = e42799;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___43487,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___43489 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___43490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___43489);
if(cljs.core.truth_(result__11366__auto___43490)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43489),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43489),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e42800){var t__11416__auto___43492 = e42800;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___43492,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_43493 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___43494 = (new cljs.core.List(null,total_prob_43493,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___43495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___43494);
if(cljs.core.truth_(result__11366__auto___43495)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43494),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43494),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42801){var t__11416__auto___43500 = e42801;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___43500,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___43503 = (new cljs.core.List(null,total_prob_43493,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___43504 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___43503);
if(cljs.core.truth_(result__11366__auto___43504)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43503),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43503),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42802){var t__11416__auto___43505 = e42802;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___43505,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__43506 = seq__42772;
var G__43507 = chunk__42773;
var G__43508 = count__42774;
var G__43509 = (i__42775 + (1));
seq__42772 = G__43506;
chunk__42773 = G__43507;
count__42774 = G__43508;
i__42775 = G__43509;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42772);
if(temp__5825__auto__){
var seq__42772__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42772__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42772__$1);
var G__43510 = cljs.core.chunk_rest(seq__42772__$1);
var G__43511 = c__5548__auto__;
var G__43512 = cljs.core.count(c__5548__auto__);
var G__43513 = (0);
seq__42772 = G__43510;
chunk__42773 = G__43511;
count__42774 = G__43512;
i__42775 = G__43513;
continue;
} else {
var vec__42803 = cljs.core.first(seq__42772__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(1),null);
try{var values__11365__auto___43514 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___43515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___43514);
if(cljs.core.truth_(result__11366__auto___43515)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43514),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43514),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e42806){var t__11416__auto___43516 = e42806;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___43516,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___43517 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___43518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___43517);
if(cljs.core.truth_(result__11366__auto___43518)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43517),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43517),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e42807){var t__11416__auto___43519 = e42807;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___43519,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_43520 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___43521 = (new cljs.core.List(null,total_prob_43520,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___43522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___43521);
if(cljs.core.truth_(result__11366__auto___43522)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43521),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43521),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42808){var t__11416__auto___43525 = e42808;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___43525,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___43528 = (new cljs.core.List(null,total_prob_43520,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___43529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___43528);
if(cljs.core.truth_(result__11366__auto___43529)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43528),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43528),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42809){var t__11416__auto___43530 = e42809;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___43530,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__43531 = cljs.core.next(seq__42772__$1);
var G__43532 = null;
var G__43533 = (0);
var G__43534 = (0);
seq__42772 = G__43531;
chunk__42773 = G__43532;
count__42774 = G__43533;
i__42775 = G__43534;
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

try{var seq__42881_43535 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,journey));
var chunk__42882_43536 = null;
var count__42883_43537 = (0);
var i__42884_43538 = (0);
while(true){
if((i__42884_43538 < count__42883_43537)){
var vec__43324_43539 = chunk__42882_43536.cljs$core$IIndexed$_nth$arity$2(null,i__42884_43538);
var i_43540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324_43539,(0),null);
var vec__43327_43541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324_43539,(1),null);
var event_43542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43327_43541,(0),null);
var args_43543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43327_43541,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_43542], null),args_43543));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_43542,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__43332_43544 = args_43543;
var route_name_43545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43544,(0),null);
var params_43546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43544,(1),null);
var query_43547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43544,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_43545], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_43546,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_43547], null)], null));
} else {
}

var current_route_match_43549 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_43550 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_43549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_43551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_43542);
var expected_route_43552 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_43551);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_43552;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43552,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43552,current_route_name_43550)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43542)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_43552)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43550)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___43553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_43550);
if(cljs.core.truth_(temp__5825__auto___43553)){
var subs_43554 = temp__5825__auto___43553;
var seq__43344_43555 = cljs.core.seq(subs_43554);
var chunk__43345_43556 = null;
var count__43346_43557 = (0);
var i__43347_43558 = (0);
while(true){
if((i__43347_43558 < count__43346_43557)){
var sub_43559 = chunk__43345_43556.cljs$core$IIndexed$_nth$arity$2(null,i__43347_43558);
try{var val_43560 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43559], null)));
if((val_43560 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43559)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43550)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43371){var e_43561 = e43371;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43559)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43550)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43561);
}

var G__43562 = seq__43344_43555;
var G__43563 = chunk__43345_43556;
var G__43564 = count__43346_43557;
var G__43565 = (i__43347_43558 + (1));
seq__43344_43555 = G__43562;
chunk__43345_43556 = G__43563;
count__43346_43557 = G__43564;
i__43347_43558 = G__43565;
continue;
} else {
var temp__5825__auto___43566__$1 = cljs.core.seq(seq__43344_43555);
if(temp__5825__auto___43566__$1){
var seq__43344_43567__$1 = temp__5825__auto___43566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43344_43567__$1)){
var c__5548__auto___43568 = cljs.core.chunk_first(seq__43344_43567__$1);
var G__43569 = cljs.core.chunk_rest(seq__43344_43567__$1);
var G__43570 = c__5548__auto___43568;
var G__43571 = cljs.core.count(c__5548__auto___43568);
var G__43572 = (0);
seq__43344_43555 = G__43569;
chunk__43345_43556 = G__43570;
count__43346_43557 = G__43571;
i__43347_43558 = G__43572;
continue;
} else {
var sub_43573 = cljs.core.first(seq__43344_43567__$1);
try{var val_43574 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43573], null)));
if((val_43574 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43573)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43550)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43373){var e_43575 = e43373;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43573)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43550)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43575);
}

var G__43576 = cljs.core.next(seq__43344_43567__$1);
var G__43577 = null;
var G__43578 = (0);
var G__43579 = (0);
seq__43344_43555 = G__43576;
chunk__43345_43556 = G__43577;
count__43346_43557 = G__43578;
i__43347_43558 = G__43579;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e43330){var e_43580 = e43330;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43540),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43542)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_43543)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_43540,new cljs.core.Keyword(null,"event","event",301435442),event_43542,new cljs.core.Keyword(null,"args","args",1315556576),args_43543], null),e_43580);
}

var G__43581 = seq__42881_43535;
var G__43582 = chunk__42882_43536;
var G__43583 = count__42883_43537;
var G__43584 = (i__42884_43538 + (1));
seq__42881_43535 = G__43581;
chunk__42882_43536 = G__43582;
count__42883_43537 = G__43583;
i__42884_43538 = G__43584;
continue;
} else {
var temp__5825__auto___43585 = cljs.core.seq(seq__42881_43535);
if(temp__5825__auto___43585){
var seq__42881_43586__$1 = temp__5825__auto___43585;
if(cljs.core.chunked_seq_QMARK_(seq__42881_43586__$1)){
var c__5548__auto___43587 = cljs.core.chunk_first(seq__42881_43586__$1);
var G__43588 = cljs.core.chunk_rest(seq__42881_43586__$1);
var G__43589 = c__5548__auto___43587;
var G__43590 = cljs.core.count(c__5548__auto___43587);
var G__43591 = (0);
seq__42881_43535 = G__43588;
chunk__42882_43536 = G__43589;
count__42883_43537 = G__43590;
i__42884_43538 = G__43591;
continue;
} else {
var vec__43384_43592 = cljs.core.first(seq__42881_43586__$1);
var i_43593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384_43592,(0),null);
var vec__43387_43594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384_43592,(1),null);
var event_43595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43387_43594,(0),null);
var args_43596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43387_43594,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_43595], null),args_43596));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_43595,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__43391_43598 = args_43596;
var route_name_43599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391_43598,(0),null);
var params_43600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391_43598,(1),null);
var query_43601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391_43598,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_43599], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_43600,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_43601], null)], null));
} else {
}

var current_route_match_43602 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_43603 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_43602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_43604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_43595);
var expected_route_43605 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_43604);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_43605;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43605,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43605,current_route_name_43603)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43595)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_43605)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43603)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___43608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_43603);
if(cljs.core.truth_(temp__5825__auto___43608__$1)){
var subs_43609 = temp__5825__auto___43608__$1;
var seq__43404_43610 = cljs.core.seq(subs_43609);
var chunk__43405_43611 = null;
var count__43406_43612 = (0);
var i__43407_43613 = (0);
while(true){
if((i__43407_43613 < count__43406_43612)){
var sub_43614 = chunk__43405_43611.cljs$core$IIndexed$_nth$arity$2(null,i__43407_43613);
try{var val_43615 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43614], null)));
if((val_43615 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43614)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43603)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43419){var e_43616 = e43419;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43614)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43603)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43616);
}

var G__43618 = seq__43404_43610;
var G__43619 = chunk__43405_43611;
var G__43620 = count__43406_43612;
var G__43621 = (i__43407_43613 + (1));
seq__43404_43610 = G__43618;
chunk__43405_43611 = G__43619;
count__43406_43612 = G__43620;
i__43407_43613 = G__43621;
continue;
} else {
var temp__5825__auto___43622__$2 = cljs.core.seq(seq__43404_43610);
if(temp__5825__auto___43622__$2){
var seq__43404_43623__$1 = temp__5825__auto___43622__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43404_43623__$1)){
var c__5548__auto___43624 = cljs.core.chunk_first(seq__43404_43623__$1);
var G__43625 = cljs.core.chunk_rest(seq__43404_43623__$1);
var G__43626 = c__5548__auto___43624;
var G__43627 = cljs.core.count(c__5548__auto___43624);
var G__43628 = (0);
seq__43404_43610 = G__43625;
chunk__43405_43611 = G__43626;
count__43406_43612 = G__43627;
i__43407_43613 = G__43628;
continue;
} else {
var sub_43629 = cljs.core.first(seq__43404_43623__$1);
try{var val_43630 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43629], null)));
if((val_43630 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43629)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43603)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43420){var e_43631 = e43420;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43629)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43603)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43631);
}

var G__43633 = cljs.core.next(seq__43404_43623__$1);
var G__43634 = null;
var G__43635 = (0);
var G__43636 = (0);
seq__43404_43610 = G__43633;
chunk__43405_43611 = G__43634;
count__43406_43612 = G__43635;
i__43407_43613 = G__43636;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e43390){var e_43637 = e43390;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43593),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43595)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_43596)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_43593,new cljs.core.Keyword(null,"event","event",301435442),event_43595,new cljs.core.Keyword(null,"args","args",1315556576),args_43596], null),e_43637);
}

var G__43638 = cljs.core.next(seq__42881_43586__$1);
var G__43639 = null;
var G__43640 = (0);
var G__43641 = (0);
seq__42881_43535 = G__43638;
chunk__42882_43536 = G__43639;
count__42883_43537 = G__43640;
i__42884_43538 = G__43641;
continue;
}
} else {
}
}
break;
}

return true;
}catch (e42880){var e = e42880;
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
}catch (e43430){var t__11416__auto__ = e43430;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),11,186,cljs.core.list(new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"result","result",-1239343558,null)),186,t__11416__auto__,["Generative test failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.journey_execution_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","journey-execution-test","bb-web-ds-tools.events.journeys-test/journey-execution-test",816232536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"journey-execution-test","journey-execution-test",2093738202,null),"bb_web_ds_tools/events/journeys_test.cljs",32,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.journey_execution_test)?bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.events.journeys_test.js.map
