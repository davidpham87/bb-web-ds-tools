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
try{var values__11365__auto___65941 = (new cljs.core.List(null,journey,null,(1),null));
var result__11366__auto___65942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,values__11365__auto___65941);
if(cljs.core.truth_(result__11366__auto___65942)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___65941),"Journey should not be empty"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__11365__auto___65941),null,(1),null)),(2),null)),"Journey should not be empty"]));
}

}catch (e65740){var t__11416__auto___65943 = e65740;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),11,67,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),67,t__11416__auto___65943,"Journey should not be empty"]));
}
var seq__65742 = cljs.core.seq(journey);
var chunk__65743 = null;
var count__65744 = (0);
var i__65745 = (0);
while(true){
if((i__65745 < count__65744)){
var vec__65773 = chunk__65743.cljs$core$IIndexed$_nth$arity$2(null,i__65745);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65773,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65773,(1),null);
var event_def_65956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_65957 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_65956);
try{var value__11369__auto___65958 = event_def_65956;
if(cljs.core.truth_(value__11369__auto___65958)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___65958,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___65958,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e65779){var t__11416__auto___65959 = e65779;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,t__11416__auto___65959,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___65960 = (new cljs.core.List(null,args_schema_65957,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___65961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___65960);
if(cljs.core.truth_(result__11366__auto___65961)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___65960),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___65960),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e65783){var t__11416__auto___65962 = e65783;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,t__11416__auto___65962,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__65963 = seq__65742;
var G__65964 = chunk__65743;
var G__65965 = count__65744;
var G__65966 = (i__65745 + (1));
seq__65742 = G__65963;
chunk__65743 = G__65964;
count__65744 = G__65965;
i__65745 = G__65966;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65742);
if(temp__5825__auto__){
var seq__65742__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65742__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65742__$1);
var G__65967 = cljs.core.chunk_rest(seq__65742__$1);
var G__65968 = c__5548__auto__;
var G__65969 = cljs.core.count(c__5548__auto__);
var G__65970 = (0);
seq__65742 = G__65967;
chunk__65743 = G__65968;
count__65744 = G__65969;
i__65745 = G__65970;
continue;
} else {
var vec__65785 = cljs.core.first(seq__65742__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65785,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65785,(1),null);
var event_def_65971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var args_schema_65972 = new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(event_def_65971);
try{var value__11369__auto___65973 = event_def_65971;
if(cljs.core.truth_(value__11369__auto___65973)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"pass","pass",1574159993),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___65973,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"fail","fail",1706214930),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,value__11369__auto___65973,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}

}catch (e65788){var t__11416__auto___65974 = e65788;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",24,new cljs.core.Keyword(null,"error","error",-978969032),15,71,new cljs.core.Symbol(null,"event-def","event-def",758693980,null),71,t__11416__auto___65974,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should exist in definitions"].join('')]));
}
try{var values__11365__auto___65975 = (new cljs.core.List(null,args_schema_65972,(new cljs.core.List(null,args,null,(1),null)),(2),null));
var result__11366__auto___65976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.validate,values__11365__auto___65975);
if(cljs.core.truth_(result__11366__auto___65976)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___65975),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),values__11365__auto___65975),null,(1),null)),(2),null)),["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

}catch (e65789){var t__11416__auto___65977 = e65789;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),15,72,cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"args-schema","args-schema",-549939071,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),72,t__11416__auto___65977,["Args for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should match schema"].join('')]));
}

var G__65978 = cljs.core.next(seq__65742__$1);
var G__65979 = null;
var G__65980 = (0);
var G__65981 = (0);
seq__65742 = G__65978;
chunk__65743 = G__65979;
count__65744 = G__65980;
i__65745 = G__65981;
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

try{try{var values__11365__auto___65983 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___65984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___65983);
if(cljs.core.truth_(result__11366__auto___65984)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___65983),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___65983),null,(1),null)),(2),null)),null]));
}

}catch (e65790){var t__11416__auto___65985 = e65790;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),9,76,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sut","fsm","sut/fsm",-1716365273,null)),76,t__11416__auto___65985,null]));
}
var seq__65791 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__65792 = null;
var count__65793 = (0);
var i__65794 = (0);
while(true){
if((i__65794 < count__65793)){
var vec__65811 = chunk__65792.cljs$core$IIndexed$_nth$arity$2(null,i__65794);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(1),null);
try{var values__11365__auto___65986 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___65987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___65986);
if(cljs.core.truth_(result__11366__auto___65987)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___65986),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___65986),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e65814){var t__11416__auto___65988 = e65814;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,t__11416__auto___65988,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___65989 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___65990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___65989);
if(cljs.core.truth_(result__11366__auto___65990)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___65989),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___65989),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e65815){var t__11416__auto___65991 = e65815;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,t__11416__auto___65991,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_65992 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___65993 = (new cljs.core.List(null,total_prob_65992,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___65994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___65993);
if(cljs.core.truth_(result__11366__auto___65994)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___65993),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___65993),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e65816){var t__11416__auto___65996 = e65816;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,t__11416__auto___65996,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___65998 = (new cljs.core.List(null,total_prob_65992,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___65999 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___65998);
if(cljs.core.truth_(result__11366__auto___65999)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___65998),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___65998),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e65817){var t__11416__auto___66000 = e65817;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,t__11416__auto___66000,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__66001 = seq__65791;
var G__66002 = chunk__65792;
var G__66003 = count__65793;
var G__66004 = (i__65794 + (1));
seq__65791 = G__66001;
chunk__65792 = G__66002;
count__65793 = G__66003;
i__65794 = G__66004;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65791);
if(temp__5825__auto__){
var seq__65791__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65791__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65791__$1);
var G__66005 = cljs.core.chunk_rest(seq__65791__$1);
var G__66006 = c__5548__auto__;
var G__66007 = cljs.core.count(c__5548__auto__);
var G__66008 = (0);
seq__65791 = G__66005;
chunk__65792 = G__66006;
count__65793 = G__66007;
i__65794 = G__66008;
continue;
} else {
var vec__65818 = cljs.core.first(seq__65791__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(1),null);
try{var values__11365__auto___66009 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,(new cljs.core.List(null,event,null,(1),null)),(2),null));
var result__11366__auto___66010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___66009);
if(cljs.core.truth_(result__11366__auto___66010)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___66009),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___66009),null,(1),null)),(2),null)),["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}

}catch (e65821){var t__11416__auto___66011 = e65821;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,78,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("sut","events","sut/events",-860949874,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),78,t__11416__auto___66011,["FSM node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should be a valid event"].join('')]));
}
try{var values__11365__auto___66013 = (new cljs.core.List(null,cljs.core.empty_QMARK_(transitions),null,(1),null));
var result__11366__auto___66014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___66013);
if(cljs.core.truth_(result__11366__auto___66014)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66013),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66013),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}

}catch (e65822){var t__11416__auto___66018 = e65822;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),11,79,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"transitions","transitions",-405684594,null))),79,t__11416__auto___66018,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should have transitions"].join('')]));
}
var total_prob_66019 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(transitions));
try{var values__11365__auto___66020 = (new cljs.core.List(null,total_prob_66019,(new cljs.core.List(null,0.9,null,(1),null)),(2),null));
var result__11366__auto___66021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,values__11365__auto___66020);
if(cljs.core.truth_(result__11366__auto___66021)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___66020),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,">",">",1085014381,null),values__11365__auto___66020),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e65823){var t__11416__auto___66023 = e65823;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,82,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),0.9),82,t__11416__auto___66023,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}
try{var values__11365__auto___66024 = (new cljs.core.List(null,total_prob_66019,(new cljs.core.List(null,1.1,null,(1),null)),(2),null));
var result__11366__auto___66025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,values__11365__auto___66024);
if(cljs.core.truth_(result__11366__auto___66025)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___66024),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<","<",993667236,null),values__11365__auto___66024),null,(1),null)),(2),null)),["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

}catch (e65824){var t__11416__auto___66027 = e65824;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),13,83,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"total-prob","total-prob",1947777906,null),1.1),83,t__11416__auto___66027,["Probabilities for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should sum to ~1.0"].join('')]));
}

var G__66028 = cljs.core.next(seq__65791__$1);
var G__66029 = null;
var G__66030 = (0);
var G__66031 = (0);
seq__65791 = G__66028;
chunk__65792 = G__66029;
count__65793 = G__66030;
i__65794 = G__66031;
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
var seq__65828 = cljs.core.seq(journey);
var chunk__65829 = null;
var count__65830 = (0);
var i__65831 = (0);
while(true){
if((i__65831 < count__65830)){
var vec__65872 = chunk__65829.cljs$core$IIndexed$_nth$arity$2(null,i__65831);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(1),null);
re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),args));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__65877_66037 = args;
var route_name_66038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65877_66037,(0),null);
var params_66039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65877_66037,(1),null);
var query_66040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65877_66037,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_66038], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_66039,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_66040], null)], null));
} else {
}

var current_route_match_66041 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_66042 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_66041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_66043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var expected_route_66044 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_66043);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_66044;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_66044,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___66045 = (new cljs.core.List(null,expected_route_66044,(new cljs.core.List(null,current_route_name_66042,null,(1),null)),(2),null));
var result__11366__auto___66046 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66045);
if(cljs.core.truth_(result__11366__auto___66046)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66045),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66044)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66045),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66044)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}

}catch (e65880){var t__11416__auto___66047 = e65880;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,t__11416__auto___66047,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66044)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}} else {
}

var temp__5825__auto___66049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_66042);
if(cljs.core.truth_(temp__5825__auto___66049)){
var subs_66050 = temp__5825__auto___66049;
var seq__65881_66051 = cljs.core.seq(subs_66050);
var chunk__65882_66052 = null;
var count__65883_66053 = (0);
var i__65884_66054 = (0);
while(true){
if((i__65884_66054 < count__65883_66053)){
var sub_66057 = chunk__65882_66052.cljs$core$IIndexed$_nth$arity$2(null,i__65884_66054);
var val_66058 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_66057], null)));
try{var values__11365__auto___66059 = (new cljs.core.List(null,(val_66058 == null),null,(1),null));
var result__11366__auto___66060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___66059);
if(cljs.core.truth_(result__11366__auto___66060)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66059),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66057)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66059),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66057)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}

}catch (e65898){var t__11416__auto___66061 = e65898;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___66061,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66057)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}

var G__66062 = seq__65881_66051;
var G__66063 = chunk__65882_66052;
var G__66064 = count__65883_66053;
var G__66065 = (i__65884_66054 + (1));
seq__65881_66051 = G__66062;
chunk__65882_66052 = G__66063;
count__65883_66053 = G__66064;
i__65884_66054 = G__66065;
continue;
} else {
var temp__5825__auto___66067__$1 = cljs.core.seq(seq__65881_66051);
if(temp__5825__auto___66067__$1){
var seq__65881_66068__$1 = temp__5825__auto___66067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65881_66068__$1)){
var c__5548__auto___66069 = cljs.core.chunk_first(seq__65881_66068__$1);
var G__66070 = cljs.core.chunk_rest(seq__65881_66068__$1);
var G__66071 = c__5548__auto___66069;
var G__66072 = cljs.core.count(c__5548__auto___66069);
var G__66073 = (0);
seq__65881_66051 = G__66070;
chunk__65882_66052 = G__66071;
count__65883_66053 = G__66072;
i__65884_66054 = G__66073;
continue;
} else {
var sub_66074 = cljs.core.first(seq__65881_66068__$1);
var val_66075 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_66074], null)));
try{var values__11365__auto___66076 = (new cljs.core.List(null,(val_66075 == null),null,(1),null));
var result__11366__auto___66077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___66076);
if(cljs.core.truth_(result__11366__auto___66077)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66076),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66074)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66076),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66074)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}

}catch (e65899){var t__11416__auto___66078 = e65899;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___66078,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66074)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66042)].join('')]));
}

var G__66080 = cljs.core.next(seq__65881_66068__$1);
var G__66081 = null;
var G__66082 = (0);
var G__66083 = (0);
seq__65881_66051 = G__66080;
chunk__65882_66052 = G__66081;
count__65883_66053 = G__66082;
i__65884_66054 = G__66083;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__66084 = seq__65828;
var G__66085 = chunk__65829;
var G__66086 = count__65830;
var G__66087 = (i__65831 + (1));
seq__65828 = G__66084;
chunk__65829 = G__66085;
count__65830 = G__66086;
i__65831 = G__66087;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65828);
if(temp__5825__auto__){
var seq__65828__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65828__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65828__$1);
var G__66088 = cljs.core.chunk_rest(seq__65828__$1);
var G__66089 = c__5548__auto__;
var G__66090 = cljs.core.count(c__5548__auto__);
var G__66091 = (0);
seq__65828 = G__66088;
chunk__65829 = G__66089;
count__65830 = G__66090;
i__65831 = G__66091;
continue;
} else {
var vec__65902 = cljs.core.first(seq__65828__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65902,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65902,(1),null);
re_frame.core.dispatch(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),args));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557))){
var vec__65905_66092 = args;
var route_name_66093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905_66092,(0),null);
var params_66094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905_66092,(1),null);
var query_66095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905_66092,(2),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),route_name_66093], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),params_66094,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_66095], null)], null));
} else {
}

var current_route_match_66098 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_route_name_66099 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route_match_66098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var event_def_66100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
var expected_route_66101 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(event_def_66100);
if(cljs.core.truth_((function (){var and__5023__auto__ = expected_route_66101;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_route_66101,new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___66102 = (new cljs.core.List(null,expected_route_66101,(new cljs.core.List(null,current_route_name_66099,null,(1),null)),(2),null));
var result__11366__auto___66103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66102);
if(cljs.core.truth_(result__11366__auto___66103)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66102),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66101)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66102),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66101)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}

}catch (e65908){var t__11416__auto___66104 = e65908;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),18,156,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expected-route","expected-route",1691560169,null),new cljs.core.Symbol(null,"current-route-name","current-route-name",-1177733175,null)),156,t__11416__auto___66104,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_route_66101)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}} else {
}

var temp__5825__auto___66105__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys_test.view_subscriptions,current_route_name_66099);
if(cljs.core.truth_(temp__5825__auto___66105__$1)){
var subs_66106 = temp__5825__auto___66105__$1;
var seq__65909_66107 = cljs.core.seq(subs_66106);
var chunk__65910_66108 = null;
var count__65911_66109 = (0);
var i__65912_66110 = (0);
while(true){
if((i__65912_66110 < count__65911_66109)){
var sub_66111 = chunk__65910_66108.cljs$core$IIndexed$_nth$arity$2(null,i__65912_66110);
var val_66112 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_66111], null)));
try{var values__11365__auto___66114 = (new cljs.core.List(null,(val_66112 == null),null,(1),null));
var result__11366__auto___66115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___66114);
if(cljs.core.truth_(result__11366__auto___66115)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66114),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66111)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66114),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66111)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}

}catch (e65932){var t__11416__auto___66116 = e65932;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___66116,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66111)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}

var G__66117 = seq__65909_66107;
var G__66118 = chunk__65910_66108;
var G__66119 = count__65911_66109;
var G__66120 = (i__65912_66110 + (1));
seq__65909_66107 = G__66117;
chunk__65910_66108 = G__66118;
count__65911_66109 = G__66119;
i__65912_66110 = G__66120;
continue;
} else {
var temp__5825__auto___66121__$2 = cljs.core.seq(seq__65909_66107);
if(temp__5825__auto___66121__$2){
var seq__65909_66122__$1 = temp__5825__auto___66121__$2;
if(cljs.core.chunked_seq_QMARK_(seq__65909_66122__$1)){
var c__5548__auto___66123 = cljs.core.chunk_first(seq__65909_66122__$1);
var G__66124 = cljs.core.chunk_rest(seq__65909_66122__$1);
var G__66125 = c__5548__auto___66123;
var G__66126 = cljs.core.count(c__5548__auto___66123);
var G__66127 = (0);
seq__65909_66107 = G__66124;
chunk__65910_66108 = G__66125;
count__65911_66109 = G__66126;
i__65912_66110 = G__66127;
continue;
} else {
var sub_66128 = cljs.core.first(seq__65909_66122__$1);
var val_66129 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_66128], null)));
try{var values__11365__auto___66130 = (new cljs.core.List(null,(val_66129 == null),null,(1),null));
var result__11366__auto___66131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__11365__auto___66130);
if(cljs.core.truth_(result__11366__auto___66131)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66130),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66128)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__11365__auto___66130),null,(1),null)),(2),null)),["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66128)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}

}catch (e65933){var t__11416__auto___66135 = e65933;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),22,163,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))),163,t__11416__auto___66135,["Subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_66128)," should return a value for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name_66099)].join('')]));
}

var G__66136 = cljs.core.next(seq__65909_66122__$1);
var G__66137 = null;
var G__66138 = (0);
var G__66139 = (0);
seq__65909_66107 = G__66136;
chunk__65910_66108 = G__66137;
count__65911_66109 = G__66138;
i__65912_66110 = G__66139;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__66140 = cljs.core.next(seq__65828__$1);
var G__66141 = null;
var G__66142 = (0);
var G__66143 = (0);
seq__65828 = G__66140;
chunk__65829 = G__66141;
count__65830 = G__66142;
i__65831 = G__66143;
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
