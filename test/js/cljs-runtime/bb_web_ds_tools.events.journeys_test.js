goog.provide('bb_web_ds_tools.events.journeys_test');
bb_web_ds_tools.events.journeys_test.events_structure_test = (function bb_web_ds_tools$events$journeys_test$events_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events is a map"], 0));

try{try{var values__11365__auto___57522 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,null,(1),null));
var result__11366__auto___57523 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57522);
if(cljs.core.truth_(result__11366__auto___57523)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57522),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57522),null,(1),null)),(2),null)),null]));
}

}catch (e57223){var t__11416__auto___57526 = e57223;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,t__11416__auto___57526,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events have generators"], 0));

try{var seq__57228 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57229 = null;
var count__57230 = (0);
var i__57231 = (0);
while(true){
if((i__57231 < count__57230)){
var vec__57303 = chunk__57229.cljs$core$IIndexed$_nth$arity$2(null,i__57231);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57303,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57303,(1),null);
try{var values__11365__auto___57527 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57527);
if(cljs.core.truth_(result__11366__auto___57528)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57527),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57527),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57306){var t__11416__auto___57531 = e57306;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57531,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57532 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57532);
if(cljs.core.truth_(result__11366__auto___57533)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57532),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57532),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57307){var t__11416__auto___57536 = e57307;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57536,"Props should be a map"]));
}
try{var values__11365__auto___57537 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57537);
if(cljs.core.truth_(result__11366__auto___57538)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57537),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57537),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57308){var t__11416__auto___57539 = e57308;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57539,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57541 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57541);
if(cljs.core.truth_(result__11366__auto___57542)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57541),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57541),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57309){var t__11416__auto___57544 = e57309;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57544,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57546 = seq__57228;
var G__57547 = chunk__57229;
var G__57548 = count__57230;
var G__57549 = (i__57231 + (1));
seq__57228 = G__57546;
chunk__57229 = G__57547;
count__57230 = G__57548;
i__57231 = G__57549;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57228);
if(temp__5825__auto__){
var seq__57228__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57228__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57228__$1);
var G__57550 = cljs.core.chunk_rest(seq__57228__$1);
var G__57551 = c__5548__auto__;
var G__57552 = cljs.core.count(c__5548__auto__);
var G__57553 = (0);
seq__57228 = G__57550;
chunk__57229 = G__57551;
count__57230 = G__57552;
i__57231 = G__57553;
continue;
} else {
var vec__57310 = cljs.core.first(seq__57228__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57310,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57310,(1),null);
try{var values__11365__auto___57555 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57555);
if(cljs.core.truth_(result__11366__auto___57556)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57555),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57555),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57313){var t__11416__auto___57563 = e57313;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57563,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57564 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57564);
if(cljs.core.truth_(result__11366__auto___57565)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57564),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57564),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57314){var t__11416__auto___57567 = e57314;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57567,"Props should be a map"]));
}
try{var values__11365__auto___57568 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57568);
if(cljs.core.truth_(result__11366__auto___57569)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57568),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57568),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57315){var t__11416__auto___57574 = e57315;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57574,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57575 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57575);
if(cljs.core.truth_(result__11366__auto___57576)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57575),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57575),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57316){var t__11416__auto___57579 = e57316;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57579,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57580 = cljs.core.next(seq__57228__$1);
var G__57581 = null;
var G__57582 = (0);
var G__57583 = (0);
seq__57228 = G__57580;
chunk__57229 = G__57581;
count__57230 = G__57582;
i__57231 = G__57583;
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

(bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.events_structure_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","events-structure-test","bb-web-ds-tools.events.journeys-test/events-structure-test",1677085091,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"events-structure-test","events-structure-test",-1090414047,null),"bb_web_ds_tools/events/journeys_test.cljs",31,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.events_structure_test)?bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.events_metadata_test = (function bb_web_ds_tools$events$journeys_test$events_metadata_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.events_metadata_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.events_metadata_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events have route metadata"], 0));

try{var seq__57317 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57318 = null;
var count__57319 = (0);
var i__57320 = (0);
while(true){
if((i__57320 < count__57319)){
var vec__57332 = chunk__57318.cljs$core$IIndexed$_nth$arity$2(null,i__57320);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57332,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57332,(1),null);
try{var values__11365__auto___57592 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___57593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57592);
if(cljs.core.truth_(result__11366__auto___57593)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57592),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57592),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57335){var t__11416__auto___57595 = e57335;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___57595,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___57596 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57596);
if(cljs.core.truth_(result__11366__auto___57597)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57596),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57596),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57336){var t__11416__auto___57600 = e57336;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___57600,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__57603 = seq__57317;
var G__57604 = chunk__57318;
var G__57605 = count__57319;
var G__57606 = (i__57320 + (1));
seq__57317 = G__57603;
chunk__57318 = G__57604;
count__57319 = G__57605;
i__57320 = G__57606;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57317);
if(temp__5825__auto__){
var seq__57317__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57317__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57317__$1);
var G__57608 = cljs.core.chunk_rest(seq__57317__$1);
var G__57609 = c__5548__auto__;
var G__57610 = cljs.core.count(c__5548__auto__);
var G__57611 = (0);
seq__57317 = G__57608;
chunk__57318 = G__57609;
count__57319 = G__57610;
i__57320 = G__57611;
continue;
} else {
var vec__57339 = cljs.core.first(seq__57317__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57339,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57339,(1),null);
try{var values__11365__auto___57612 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___57613 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57612);
if(cljs.core.truth_(result__11366__auto___57613)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57612),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57612),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57342){var t__11416__auto___57616 = e57342;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___57616,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___57617 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57617);
if(cljs.core.truth_(result__11366__auto___57618)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57617),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57617),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57344){var t__11416__auto___57622 = e57344;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___57622,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__57623 = cljs.core.next(seq__57317__$1);
var G__57624 = null;
var G__57625 = (0);
var G__57626 = (0);
seq__57317 = G__57623;
chunk__57318 = G__57624;
count__57319 = G__57625;
i__57320 = G__57626;
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

(bb_web_ds_tools.events.journeys_test.events_metadata_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.events_metadata_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","events-metadata-test","bb-web-ds-tools.events.journeys-test/events-metadata-test",-494470885,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"events-metadata-test","events-metadata-test",1584548249,null),"bb_web_ds_tools/events/journeys_test.cljs",30,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.events_metadata_test)?bb_web_ds_tools.events.journeys_test.events_metadata_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.fsm_structure_test = (function bb_web_ds_tools$events$journeys_test$fsm_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm is a map"], 0));

try{try{var values__11365__auto___57627 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___57628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57627);
if(cljs.core.truth_(result__11366__auto___57628)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57627),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57627),null,(1),null)),(2),null)),null]));
}

}catch (e57346){var t__11416__auto___57632 = e57346;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,t__11416__auto___57632,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm keys are events"], 0));

try{try{var values__11365__auto___57633 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(bb_web_ds_tools.events.journeys.fsm),null,(1),null)),(2),null));
var result__11366__auto___57634 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57633);
if(cljs.core.truth_(result__11366__auto___57634)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57633),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57633),null,(1),null)),(2),null)),null]));
}

}catch (e57348){var t__11416__auto___57639 = e57348;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,t__11416__auto___57639,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm values are maps of next events to weights"], 0));

try{var seq__57353_57640 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57354_57641 = null;
var count__57355_57642 = (0);
var i__57356_57643 = (0);
while(true){
if((i__57356_57643 < count__57355_57642)){
var vec__57369_57644 = chunk__57354_57641.cljs$core$IIndexed$_nth$arity$2(null,i__57356_57643);
var current_57645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57369_57644,(0),null);
var nexts_57646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57369_57644,(1),null);
try{var values__11365__auto___57647 = (new cljs.core.List(null,nexts_57646,null,(1),null));
var result__11366__auto___57648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57647);
if(cljs.core.truth_(result__11366__auto___57648)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57647),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57647),null,(1),null)),(2),null)),null]));
}

}catch (e57372){var t__11416__auto___57656 = e57372;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___57656,null]));
}
try{var values__11365__auto___57658 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_57646),null,(1),null)),(2),null));
var result__11366__auto___57659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57658);
if(cljs.core.truth_(result__11366__auto___57659)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57658),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57658),null,(1),null)),(2),null)),null]));
}

}catch (e57373){var t__11416__auto___57662 = e57373;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___57662,null]));
}
try{var values__11365__auto___57665 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_57646),null,(1),null)),(2),null));
var result__11366__auto___57666 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57665);
if(cljs.core.truth_(result__11366__auto___57666)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57665),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57665),null,(1),null)),(2),null)),null]));
}

}catch (e57374){var t__11416__auto___57668 = e57374;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___57668,null]));
}

var G__57669 = seq__57353_57640;
var G__57670 = chunk__57354_57641;
var G__57671 = count__57355_57642;
var G__57672 = (i__57356_57643 + (1));
seq__57353_57640 = G__57669;
chunk__57354_57641 = G__57670;
count__57355_57642 = G__57671;
i__57356_57643 = G__57672;
continue;
} else {
var temp__5825__auto___57673 = cljs.core.seq(seq__57353_57640);
if(temp__5825__auto___57673){
var seq__57353_57674__$1 = temp__5825__auto___57673;
if(cljs.core.chunked_seq_QMARK_(seq__57353_57674__$1)){
var c__5548__auto___57675 = cljs.core.chunk_first(seq__57353_57674__$1);
var G__57676 = cljs.core.chunk_rest(seq__57353_57674__$1);
var G__57677 = c__5548__auto___57675;
var G__57678 = cljs.core.count(c__5548__auto___57675);
var G__57679 = (0);
seq__57353_57640 = G__57676;
chunk__57354_57641 = G__57677;
count__57355_57642 = G__57678;
i__57356_57643 = G__57679;
continue;
} else {
var vec__57376_57680 = cljs.core.first(seq__57353_57674__$1);
var current_57681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57376_57680,(0),null);
var nexts_57682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57376_57680,(1),null);
try{var values__11365__auto___57683 = (new cljs.core.List(null,nexts_57682,null,(1),null));
var result__11366__auto___57684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57683);
if(cljs.core.truth_(result__11366__auto___57684)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57683),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57683),null,(1),null)),(2),null)),null]));
}

}catch (e57379){var t__11416__auto___57685 = e57379;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___57685,null]));
}
try{var values__11365__auto___57686 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_57682),null,(1),null)),(2),null));
var result__11366__auto___57687 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57686);
if(cljs.core.truth_(result__11366__auto___57687)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57686),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57686),null,(1),null)),(2),null)),null]));
}

}catch (e57384){var t__11416__auto___57693 = e57384;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___57693,null]));
}
try{var values__11365__auto___57694 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_57682),null,(1),null)),(2),null));
var result__11366__auto___57695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57694);
if(cljs.core.truth_(result__11366__auto___57695)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57694),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57694),null,(1),null)),(2),null)),null]));
}

}catch (e57386){var t__11416__auto___57700 = e57386;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___57700,null]));
}

var G__57701 = cljs.core.next(seq__57353_57674__$1);
var G__57702 = null;
var G__57703 = (0);
var G__57704 = (0);
seq__57353_57640 = G__57701;
chunk__57354_57641 = G__57702;
count__57355_57642 = G__57703;
i__57356_57643 = G__57704;
continue;
}
} else {
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm is connected via navigation"], 0));

try{var nav_event = new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557);
try{var values__11365__auto___57706 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57706);
if(cljs.core.truth_(result__11366__auto___57707)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57706),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57706),null,(1),null)),(2),null)),null]));
}

}catch (e57391){var t__11416__auto___57713 = e57391;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,t__11416__auto___57713,null]));
}
try{var values__11365__auto___57714 = (new cljs.core.List(null,cljs.core.set(cljs.core.keys(bb_web_ds_tools.events.journeys.events)),(new cljs.core.List(null,cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.fsm,nav_event))),null,(1),null)),(2),null));
var result__11366__auto___57715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57714);
if(cljs.core.truth_(result__11366__auto___57715)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"pass","pass",1574159993),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57714),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"fail","fail",1706214930),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57714),null,(1),null)),(2),null)),null]));
}

}catch (e57394){var t__11416__auto___57722 = e57394;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"error","error",-978969032),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,t__11416__auto___57722,null]));
}
var seq__57395 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57396 = null;
var count__57397 = (0);
var i__57398 = (0);
while(true){
if((i__57398 < count__57397)){
var vec__57415 = chunk__57396.cljs$core$IIndexed$_nth$arity$2(null,i__57398);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57415,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57415,(1),null);
try{var values__11365__auto___57724 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57724);
if(cljs.core.truth_(result__11366__auto___57725)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57724),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57418){var t__11416__auto___57732 = e57418;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___57732,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__57734 = seq__57395;
var G__57735 = chunk__57396;
var G__57736 = count__57397;
var G__57737 = (i__57398 + (1));
seq__57395 = G__57734;
chunk__57396 = G__57735;
count__57397 = G__57736;
i__57398 = G__57737;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57395);
if(temp__5825__auto__){
var seq__57395__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57395__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57395__$1);
var G__57739 = cljs.core.chunk_rest(seq__57395__$1);
var G__57740 = c__5548__auto__;
var G__57741 = cljs.core.count(c__5548__auto__);
var G__57742 = (0);
seq__57395 = G__57739;
chunk__57396 = G__57740;
count__57397 = G__57741;
i__57398 = G__57742;
continue;
} else {
var vec__57421 = cljs.core.first(seq__57395__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57421,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57421,(1),null);
try{var values__11365__auto___57745 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57746 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57745);
if(cljs.core.truth_(result__11366__auto___57746)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57745),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57745),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57424){var t__11416__auto___57748 = e57424;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___57748,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__57753 = cljs.core.next(seq__57395__$1);
var G__57754 = null;
var G__57755 = (0);
var G__57756 = (0);
seq__57395 = G__57753;
chunk__57396 = G__57754;
count__57397 = G__57755;
i__57398 = G__57756;
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

(bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.fsm_structure_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","fsm-structure-test","bb-web-ds-tools.events.journeys-test/fsm-structure-test",-1594218574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"fsm-structure-test","fsm-structure-test",-481200324,null),"bb_web_ds_tools/events/journeys_test.cljs",28,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.fsm_structure_test)?bb_web_ds_tools.events.journeys_test.fsm_structure_test.cljs$lang$test:null)])));
bb_web_ds_tools.events.journeys_test.generate_journey_test = (function bb_web_ds_tools$events$journeys_test$generate_journey_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["generates a sequence of events"], 0));

try{var journey_57760 = bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(10)], null));
try{var values__11365__auto___57761 = (new cljs.core.List(null,journey_57760,null,(1),null));
var result__11366__auto___57762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,values__11365__auto___57761);
if(cljs.core.truth_(result__11366__auto___57762)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"pass","pass",1574159993),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___57761),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"fail","fail",1706214930),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___57761),null,(1),null)),(2),null)),null]));
}

}catch (e57429){var t__11416__auto___57765 = e57429;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"error","error",-978969032),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,t__11416__auto___57765,null]));
}
try{var values__11365__auto___57766 = (new cljs.core.List(null,cljs.core.count(journey_57760),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__11366__auto___57767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,values__11365__auto___57766);
if(cljs.core.truth_(result__11366__auto___57767)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___57766),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___57766),null,(1),null)),(2),null)),null]));
}

}catch (e57431){var t__11416__auto___57769 = e57431;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,t__11416__auto___57769,null]));
}
var seq__57433_57770 = cljs.core.seq(journey_57760);
var chunk__57434_57771 = null;
var count__57435_57772 = (0);
var i__57436_57773 = (0);
while(true){
if((i__57436_57773 < count__57435_57772)){
var vec__57484_57774 = chunk__57434_57771.cljs$core$IIndexed$_nth$arity$2(null,i__57436_57773);
var event_57775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57484_57774,(0),null);
var args_57776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57484_57774,(1),null);
try{var values__11365__auto___57779 = (new cljs.core.List(null,event_57775,null,(1),null));
var result__11366__auto___57780 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57779);
if(cljs.core.truth_(result__11366__auto___57780)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57779),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57779),null,(1),null)),(2),null)),null]));
}

}catch (e57487){var t__11416__auto___57783 = e57487;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___57783,null]));
}
try{var values__11365__auto___57784 = (new cljs.core.List(null,args_57776,null,(1),null));
var result__11366__auto___57785 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___57784);
if(cljs.core.truth_(result__11366__auto___57785)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57784),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57784),null,(1),null)),(2),null)),null]));
}

}catch (e57489){var t__11416__auto___57791 = e57489;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___57791,null]));
}

var G__57792 = seq__57433_57770;
var G__57793 = chunk__57434_57771;
var G__57794 = count__57435_57772;
var G__57795 = (i__57436_57773 + (1));
seq__57433_57770 = G__57792;
chunk__57434_57771 = G__57793;
count__57435_57772 = G__57794;
i__57436_57773 = G__57795;
continue;
} else {
var temp__5825__auto___57796 = cljs.core.seq(seq__57433_57770);
if(temp__5825__auto___57796){
var seq__57433_57797__$1 = temp__5825__auto___57796;
if(cljs.core.chunked_seq_QMARK_(seq__57433_57797__$1)){
var c__5548__auto___57798 = cljs.core.chunk_first(seq__57433_57797__$1);
var G__57799 = cljs.core.chunk_rest(seq__57433_57797__$1);
var G__57800 = c__5548__auto___57798;
var G__57801 = cljs.core.count(c__5548__auto___57798);
var G__57802 = (0);
seq__57433_57770 = G__57799;
chunk__57434_57771 = G__57800;
count__57435_57772 = G__57801;
i__57436_57773 = G__57802;
continue;
} else {
var vec__57492_57803 = cljs.core.first(seq__57433_57797__$1);
var event_57804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57492_57803,(0),null);
var args_57805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57492_57803,(1),null);
try{var values__11365__auto___57806 = (new cljs.core.List(null,event_57804,null,(1),null));
var result__11366__auto___57807 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57806);
if(cljs.core.truth_(result__11366__auto___57807)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57806),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57806),null,(1),null)),(2),null)),null]));
}

}catch (e57496){var t__11416__auto___57813 = e57496;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___57813,null]));
}
try{var values__11365__auto___57815 = (new cljs.core.List(null,args_57805,null,(1),null));
var result__11366__auto___57816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___57815);
if(cljs.core.truth_(result__11366__auto___57816)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57815),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57815),null,(1),null)),(2),null)),null]));
}

}catch (e57499){var t__11416__auto___57819 = e57499;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___57819,null]));
}

var G__57820 = cljs.core.next(seq__57433_57797__$1);
var G__57821 = null;
var G__57822 = (0);
var G__57823 = (0);
seq__57433_57770 = G__57820;
chunk__57434_57771 = G__57821;
count__57435_57772 = G__57822;
i__57436_57773 = G__57823;
continue;
}
} else {
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["respects route constraints"], 0));

try{var journey = bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(50)], null));
var nav_event = bb_web_ds_tools.events.journeys.nav_event;
var remaining = journey;
var current_route = null;
while(true){
if(cljs.core.seq(remaining)){
var vec__57512 = cljs.core.first(remaining);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57512,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57512,(1),null);
var evt_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
if(cljs.core.truth_((function (){var and__5023__auto__ = current_route;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___57828 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),(new cljs.core.List(null,current_route,null,(1),null)),(2),null));
var result__11366__auto___57829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57828);
if(cljs.core.truth_(result__11366__auto___57829)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57828),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57828),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}

}catch (e57516){var t__11416__auto___57836 = e57516;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,t__11416__auto___57836,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}} else {
}

var new_route = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,nav_event))?cljs.core.first(args):current_route);
var G__57840 = cljs.core.rest(remaining);
var G__57841 = new_route;
remaining = G__57840;
current_route = G__57841;
continue;
} else {
return null;
}
break;
}
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.events.journeys_test.generate_journey_test;},new cljs.core.Symbol("bb-web-ds-tools.events.journeys-test","generate-journey-test","bb-web-ds-tools.events.journeys-test/generate-journey-test",-859906664,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.events.journeys-test","bb-web-ds-tools.events.journeys-test",1385761077,null),new cljs.core.Symbol(null,"generate-journey-test","generate-journey-test",148081894,null),"bb_web_ds_tools/events/journeys_test.cljs",31,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.events.journeys_test.generate_journey_test)?bb_web_ds_tools.events.journeys_test.generate_journey_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.events.journeys_test.js.map
