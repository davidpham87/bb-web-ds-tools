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
try{var values__11365__auto___43459 = (new cljs.core.List(null,journey,null,(1),null));
var result__11366__auto___43460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,values__11365__auto___43459);
if(cljs.core.truth_(result__11366__auto___43460)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___43459),"Journey should not be empty"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___43459),null,(1),null)),(2),null)),"Journey should not be empty"]));
}

}catch (e42730){var t__11416__auto___43464 = e42730;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),11,72,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),72,t__11416__auto___43464,"Journey should not be empty"]));
}
var seq__42732 = cljs.core.seq(journey);
var chunk__42733 = null;
var count__42734 = (0);
var i__42735 = (0);
while(true){
if((i__42735 < count__42734)){
var vec__42757 = chunk__42733.cljs$core$IIndexed$_nth$arity$2(null,i__42735);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42757,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42757,(1),null);
var event_def_43466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_43467 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_43466);
try{var value__11369__auto___43469 = event_def_43466;
if(cljs.core.truth_(value__11369__auto___43469)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43469,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43469,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e42760){var t__11416__auto___43471 = e42760;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___43471,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___43473 = (new cljs.core.List(null,args_schema_43467,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___43474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___43473);
if(cljs.core.truth_(result__11366__auto___43474)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43473),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43473),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e42761){var t__11416__auto___43476 = e42761;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___43476,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__43479 = seq__42732;
var G__43480 = chunk__42733;
var G__43481 = count__42734;
var G__43482 = (i__42735 + (1));
seq__42732 = G__43479;
chunk__42733 = G__43480;
count__42734 = G__43481;
i__42735 = G__43482;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42732);
if(temp__5825__auto__){
var seq__42732__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42732__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42732__$1);
var G__43483 = cljs.core.chunk_rest(seq__42732__$1);
var G__43484 = c__5548__auto__;
var G__43485 = cljs.core.count(c__5548__auto__);
var G__43486 = (0);
seq__42732 = G__43483;
chunk__42733 = G__43484;
count__42734 = G__43485;
i__42735 = G__43486;
continue;
} else {
var vec__42763 = cljs.core.first(seq__42732__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42763,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42763,(1),null);
var event_def_43487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_43488 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_43487);
try{var value__11369__auto___43489 = event_def_43487;
if(cljs.core.truth_(value__11369__auto___43489)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43489,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,value__11369__auto___43489,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e42766){var t__11416__auto___43492 = e42766;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,76,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),76,t__11416__auto___43492,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___43493 = (new cljs.core.List(null,args_schema_43488,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___43494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___43493);
if(cljs.core.truth_(result__11366__auto___43494)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43493),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___43493),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e42767){var t__11416__auto___43496 = e42767;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,77,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),77,t__11416__auto___43496,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__43498 = cljs.core.next(seq__42732__$1);
var G__43499 = null;
var G__43507 = (0);
var G__43508 = (0);
seq__42732 = G__43498;
chunk__42733 = G__43499;
count__42734 = G__43507;
i__42735 = G__43508;
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

try{try{var values__11365__auto___43513 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___43514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___43513);
if(cljs.core.truth_(result__11366__auto___43514)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___43513),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___43513),null,(1),null)),(2),null)),null]));
}

}catch (e42774){var t__11416__auto___43517 = e42774;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),9,81,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),81,t__11416__auto___43517,null]));
}
var seq__42777 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__42778 = null;
var count__42779 = (0);
var i__42780 = (0);
while(true){
if((i__42780 < count__42779)){
var vec__42796 = chunk__42778.cljs$core$IIndexed$_nth$arity$2(null,i__42780);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(1),null);
try{var values__11365__auto___43520 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___43521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___43520);
if(cljs.core.truth_(result__11366__auto___43521)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43520),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43520),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e42799){var t__11416__auto___43527 = e42799;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___43527,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___43529 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___43530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___43529);
if(cljs.core.truth_(result__11366__auto___43530)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43529),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43529),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e42800){var t__11416__auto___43534 = e42800;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___43534,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_43535 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___43537 = (new cljs.core.List(null,total_prob_43535,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___43538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___43537);
if(cljs.core.truth_(result__11366__auto___43538)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43537),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43537),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42801){var t__11416__auto___43540 = e42801;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___43540,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___43546 = (new cljs.core.List(null,total_prob_43535,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___43547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___43546);
if(cljs.core.truth_(result__11366__auto___43547)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43546),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43546),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42802){var t__11416__auto___43549 = e42802;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___43549,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__43550 = seq__42777;
var G__43551 = chunk__42778;
var G__43552 = count__42779;
var G__43553 = (i__42780 + (1));
seq__42777 = G__43550;
chunk__42778 = G__43551;
count__42779 = G__43552;
i__42780 = G__43553;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42777);
if(temp__5825__auto__){
var seq__42777__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42777__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42777__$1);
var G__43554 = cljs.core.chunk_rest(seq__42777__$1);
var G__43555 = c__5548__auto__;
var G__43556 = cljs.core.count(c__5548__auto__);
var G__43557 = (0);
seq__42777 = G__43554;
chunk__42778 = G__43555;
count__42779 = G__43556;
i__42780 = G__43557;
continue;
} else {
var vec__42803 = cljs.core.first(seq__42777__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(1),null);
try{var values__11365__auto___43559 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___43560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___43559);
if(cljs.core.truth_(result__11366__auto___43560)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43559),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___43559),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e42806){var t__11416__auto___43574 = e42806;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,83,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),83,t__11416__auto___43574,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___43575 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___43576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___43575);
if(cljs.core.truth_(result__11366__auto___43576)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43575),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___43575),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e42807){var t__11416__auto___43578 = e42807;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,84,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),84,t__11416__auto___43578,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_43579 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___43580 = (new cljs.core.List(null,total_prob_43579,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___43581 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___43580);
if(cljs.core.truth_(result__11366__auto___43581)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43580),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___43580),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42808){var t__11416__auto___43589 = e42808;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,87,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),87,t__11416__auto___43589,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___43591 = (new cljs.core.List(null,total_prob_43579,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___43592 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___43591);
if(cljs.core.truth_(result__11366__auto___43592)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43591),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___43591),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e42813){var t__11416__auto___43593 = e42813;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,88,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),88,t__11416__auto___43593,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__43594 = cljs.core.next(seq__42777__$1);
var G__43595 = null;
var G__43596 = (0);
var G__43597 = (0);
seq__42777 = G__43594;
chunk__42778 = G__43595;
count__42779 = G__43596;
i__42780 = G__43597;
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

try{var seq__43033_43613 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,journey));
var chunk__43034_43614 = null;
var count__43035_43615 = (0);
var i__43036_43616 = (0);
while(true){
if((i__43036_43616 < count__43035_43615)){
var vec__43319_43617 = chunk__43034_43614.cljs$core$IIndexed$_nth$arity$2(null,i__43036_43616);
var i_43618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43319_43617,(0),null);
var vec__43322_43619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43319_43617,(1),null);
var event_43620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322_43619,(0),null);
var args_43621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322_43619,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_43620], null),args_43621));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_43620,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__43332_43622 = args_43621;
var route_name_43623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43622,(0),null);
var params_43624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43622,(1),null);
var query_43625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332_43622,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_43623], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_43624,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_43625], null)], null));
} else {
}

var current_route_match_43635 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_43636 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_43635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_43637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_43620);
var expected_route_43638 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_43637);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_43638;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43638,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43638,current_route_name_43636)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43620)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_43638)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43636)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___43639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_43636);
if(cljs.core.truth_(temp__5825__auto___43639)){
var subs_43640 = temp__5825__auto___43639;
var seq__43335_43641 = cljs.core.seq(subs_43640);
var chunk__43336_43642 = null;
var count__43337_43643 = (0);
var i__43338_43644 = (0);
while(true){
if((i__43338_43644 < count__43337_43643)){
var sub_43645 = chunk__43336_43642.cljs$core$IIndexed$_nth$arity$2(null,i__43338_43644);
try{var val_43646 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43645], null)));
if((val_43646 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43645)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43636)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43353){var e_43647 = e43353;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43645)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43636)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43647);
}

var G__43648 = seq__43335_43641;
var G__43649 = chunk__43336_43642;
var G__43650 = count__43337_43643;
var G__43651 = (i__43338_43644 + (1));
seq__43335_43641 = G__43648;
chunk__43336_43642 = G__43649;
count__43337_43643 = G__43650;
i__43338_43644 = G__43651;
continue;
} else {
var temp__5825__auto___43652__$1 = cljs.core.seq(seq__43335_43641);
if(temp__5825__auto___43652__$1){
var seq__43335_43653__$1 = temp__5825__auto___43652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43335_43653__$1)){
var c__5548__auto___43654 = cljs.core.chunk_first(seq__43335_43653__$1);
var G__43655 = cljs.core.chunk_rest(seq__43335_43653__$1);
var G__43656 = c__5548__auto___43654;
var G__43657 = cljs.core.count(c__5548__auto___43654);
var G__43658 = (0);
seq__43335_43641 = G__43655;
chunk__43336_43642 = G__43656;
count__43337_43643 = G__43657;
i__43338_43644 = G__43658;
continue;
} else {
var sub_43659 = cljs.core.first(seq__43335_43653__$1);
try{var val_43660 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43659], null)));
if((val_43660 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43659)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43636)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43367){var e_43661 = e43367;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43659)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43636)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43661);
}

var G__43662 = cljs.core.next(seq__43335_43653__$1);
var G__43663 = null;
var G__43664 = (0);
var G__43665 = (0);
seq__43335_43641 = G__43662;
chunk__43336_43642 = G__43663;
count__43337_43643 = G__43664;
i__43338_43644 = G__43665;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e43325){var e_43666 = e43325;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43618),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43620)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_43621)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_43618,new cljs.core.Keyword(null,"event","event",301435442),event_43620,new cljs.core.Keyword(null,"args","args",1315556576),args_43621], null),e_43666);
}

var G__43669 = seq__43033_43613;
var G__43670 = chunk__43034_43614;
var G__43671 = count__43035_43615;
var G__43672 = (i__43036_43616 + (1));
seq__43033_43613 = G__43669;
chunk__43034_43614 = G__43670;
count__43035_43615 = G__43671;
i__43036_43616 = G__43672;
continue;
} else {
var temp__5825__auto___43673 = cljs.core.seq(seq__43033_43613);
if(temp__5825__auto___43673){
var seq__43033_43674__$1 = temp__5825__auto___43673;
if(cljs.core.chunked_seq_QMARK_(seq__43033_43674__$1)){
var c__5548__auto___43675 = cljs.core.chunk_first(seq__43033_43674__$1);
var G__43676 = cljs.core.chunk_rest(seq__43033_43674__$1);
var G__43677 = c__5548__auto___43675;
var G__43678 = cljs.core.count(c__5548__auto___43675);
var G__43679 = (0);
seq__43033_43613 = G__43676;
chunk__43034_43614 = G__43677;
count__43035_43615 = G__43678;
i__43036_43616 = G__43679;
continue;
} else {
var vec__43368_43680 = cljs.core.first(seq__43033_43674__$1);
var i_43681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368_43680,(0),null);
var vec__43371_43682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368_43680,(1),null);
var event_43683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371_43682,(0),null);
var args_43684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43371_43682,(1),null);
try{re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_43683], null),args_43684));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_43683,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__43383_43685 = args_43684;
var route_name_43686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43383_43685,(0),null);
var params_43687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43383_43685,(1),null);
var query_43688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43383_43685,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_43686], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_43687,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_43688], null)], null));
} else {
}

var current_route_match_43689 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_43690 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_43689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_43691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event_43683);
var expected_route_43692 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_43691);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_43692;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43692,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_43692,current_route_name_43690)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43683)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_43692)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43690)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

var temp__5825__auto___43693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_43690);
if(cljs.core.truth_(temp__5825__auto___43693__$1)){
var subs_43707 = temp__5825__auto___43693__$1;
var seq__43387_43708 = cljs.core.seq(subs_43707);
var chunk__43388_43709 = null;
var count__43389_43710 = (0);
var i__43390_43711 = (0);
while(true){
if((i__43390_43711 < count__43389_43710)){
var sub_43712 = chunk__43388_43709.cljs$core$IIndexed$_nth$arity$2(null,i__43390_43711);
try{var val_43713 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43712], null)));
if((val_43713 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43712)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43690)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43418){var e_43714 = e43418;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43712)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43690)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43714);
}

var G__43715 = seq__43387_43708;
var G__43716 = chunk__43388_43709;
var G__43717 = count__43389_43710;
var G__43718 = (i__43390_43711 + (1));
seq__43387_43708 = G__43715;
chunk__43388_43709 = G__43716;
count__43389_43710 = G__43717;
i__43390_43711 = G__43718;
continue;
} else {
var temp__5825__auto___43720__$2 = cljs.core.seq(seq__43387_43708);
if(temp__5825__auto___43720__$2){
var seq__43387_43721__$1 = temp__5825__auto___43720__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43387_43721__$1)){
var c__5548__auto___43722 = cljs.core.chunk_first(seq__43387_43721__$1);
var G__43723 = cljs.core.chunk_rest(seq__43387_43721__$1);
var G__43724 = c__5548__auto___43722;
var G__43725 = cljs.core.count(c__5548__auto___43722);
var G__43726 = (0);
seq__43387_43708 = G__43723;
chunk__43388_43709 = G__43724;
count__43389_43710 = G__43725;
i__43390_43711 = G__43726;
continue;
} else {
var sub_43727 = cljs.core.first(seq__43387_43721__$1);
try{var val_43729 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_43727], null)));
if((val_43729 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43727)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43690)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
}catch (e43423){var e_43731 = e43423;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error checking subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_43727)," at route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_43690)].join(''),cljs.core.PersistentArrayMap.EMPTY,e_43731);
}

var G__43732 = cljs.core.next(seq__43387_43721__$1);
var G__43733 = null;
var G__43734 = (0);
var G__43735 = (0);
seq__43387_43708 = G__43732;
chunk__43388_43709 = G__43733;
count__43389_43710 = G__43734;
i__43390_43711 = G__43735;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e43382){var e_43736 = e43382;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error at step ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43681),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_43683)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_43684)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),i_43681,new cljs.core.Keyword(null,"event","event",301435442),event_43683,new cljs.core.Keyword(null,"args","args",1315556576),args_43684], null),e_43736);
}

var G__43737 = cljs.core.next(seq__43033_43674__$1);
var G__43738 = null;
var G__43739 = (0);
var G__43740 = (0);
seq__43033_43613 = G__43737;
chunk__43034_43614 = G__43738;
count__43035_43615 = G__43739;
i__43036_43616 = G__43740;
continue;
}
} else {
}
}
break;
}

return true;
}catch (e43032){var e = e43032;
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
}catch (e43428){var t__11416__auto__ = e43428;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),11,186,cljs.core.list(new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"result","result",-1239343558,null)),186,t__11416__auto__,["Generative test failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.journey_execution_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","journey-execution-test","bb-web-ds-tools.events.journeys-test/journey-execution-test",816232536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"journey-execution-test","journey-execution-test",2093738202,null),"bb_web_ds_tools/events/journeys_test.cljs",32,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.journey_execution_test)?bb_web_ds_tools.events.journeys_test.journey_execution_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.events.journeys_test.js.map
