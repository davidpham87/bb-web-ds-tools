goog.provide('bb_web_ds_tools.events.journeys_test');
bb_web_ds_tools.events.journeys_test.events_structure_test = (function bb_web_ds_tools$events$journeys_test$events_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events is a map"], 0));

try{try{var values__11365__auto___57669 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,null,(1),null));
var result__11366__auto___57670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57669);
if(cljs.core.truth_(result__11366__auto___57670)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57669),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57669),null,(1),null)),(2),null)),null]));
}

}catch (e57398){var t__11416__auto___57671 = e57398;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,t__11416__auto___57671,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events have generators"], 0));

try{var seq__57399 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57400 = null;
var count__57401 = (0);
var i__57402 = (0);
while(true){
if((i__57402 < count__57401)){
var vec__57433 = chunk__57400.cljs$core$IIndexed$_nth$arity$2(null,i__57402);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57433,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57433,(1),null);
try{var values__11365__auto___57678 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57678);
if(cljs.core.truth_(result__11366__auto___57679)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57678),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57678),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57436){var t__11416__auto___57683 = e57436;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57683,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57686 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57687 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57686);
if(cljs.core.truth_(result__11366__auto___57687)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57686),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57686),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57438){var t__11416__auto___57692 = e57438;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57692,"Props should be a map"]));
}
try{var values__11365__auto___57695 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57696 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57695);
if(cljs.core.truth_(result__11366__auto___57696)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57695),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57695),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57441){var t__11416__auto___57697 = e57441;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57697,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57699 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57699);
if(cljs.core.truth_(result__11366__auto___57700)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57699),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57699),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57444){var t__11416__auto___57703 = e57444;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57703,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57704 = seq__57399;
var G__57705 = chunk__57400;
var G__57706 = count__57401;
var G__57707 = (i__57402 + (1));
seq__57399 = G__57704;
chunk__57400 = G__57705;
count__57401 = G__57706;
i__57402 = G__57707;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57399);
if(temp__5825__auto__){
var seq__57399__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57399__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57399__$1);
var G__57709 = cljs.core.chunk_rest(seq__57399__$1);
var G__57710 = c__5548__auto__;
var G__57711 = cljs.core.count(c__5548__auto__);
var G__57712 = (0);
seq__57399 = G__57709;
chunk__57400 = G__57710;
count__57401 = G__57711;
i__57402 = G__57712;
continue;
} else {
var vec__57446 = cljs.core.first(seq__57399__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57446,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57446,(1),null);
try{var values__11365__auto___57713 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57713);
if(cljs.core.truth_(result__11366__auto___57714)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57713),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57713),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57449){var t__11416__auto___57716 = e57449;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57716,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57718 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57718);
if(cljs.core.truth_(result__11366__auto___57719)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57718),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57718),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57450){var t__11416__auto___57720 = e57450;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57720,"Props should be a map"]));
}
try{var values__11365__auto___57721 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57721);
if(cljs.core.truth_(result__11366__auto___57722)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57721),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57721),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57451){var t__11416__auto___57723 = e57451;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57723,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57724 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57724);
if(cljs.core.truth_(result__11366__auto___57725)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57724),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57724),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57452){var t__11416__auto___57729 = e57452;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57729,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57731 = cljs.core.next(seq__57399__$1);
var G__57732 = null;
var G__57733 = (0);
var G__57734 = (0);
seq__57399 = G__57731;
chunk__57400 = G__57732;
count__57401 = G__57733;
i__57402 = G__57734;
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

try{var seq__57456 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57457 = null;
var count__57458 = (0);
var i__57459 = (0);
while(true){
if((i__57459 < count__57458)){
var vec__57479 = chunk__57457.cljs$core$IIndexed$_nth$arity$2(null,i__57459);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57479,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57479,(1),null);
try{var values__11365__auto___57740 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___57741 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57740);
if(cljs.core.truth_(result__11366__auto___57741)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57740),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57740),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57482){var t__11416__auto___57745 = e57482;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___57745,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___57748 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57748);
if(cljs.core.truth_(result__11366__auto___57749)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57748),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57748),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57488){var t__11416__auto___57750 = e57488;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___57750,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__57752 = seq__57456;
var G__57753 = chunk__57457;
var G__57754 = count__57458;
var G__57755 = (i__57459 + (1));
seq__57456 = G__57752;
chunk__57457 = G__57753;
count__57458 = G__57754;
i__57459 = G__57755;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57456);
if(temp__5825__auto__){
var seq__57456__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57456__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57456__$1);
var G__57758 = cljs.core.chunk_rest(seq__57456__$1);
var G__57759 = c__5548__auto__;
var G__57760 = cljs.core.count(c__5548__auto__);
var G__57761 = (0);
seq__57456 = G__57758;
chunk__57457 = G__57759;
count__57458 = G__57760;
i__57459 = G__57761;
continue;
} else {
var vec__57492 = cljs.core.first(seq__57456__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57492,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57492,(1),null);
try{var values__11365__auto___57763 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___57764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57763);
if(cljs.core.truth_(result__11366__auto___57764)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57763),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57763),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57496){var t__11416__auto___57780 = e57496;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___57780,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___57781 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57781);
if(cljs.core.truth_(result__11366__auto___57782)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57781),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57781),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57508){var t__11416__auto___57786 = e57508;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___57786,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__57787 = cljs.core.next(seq__57456__$1);
var G__57788 = null;
var G__57789 = (0);
var G__57790 = (0);
seq__57456 = G__57787;
chunk__57457 = G__57788;
count__57458 = G__57789;
i__57459 = G__57790;
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

try{try{var values__11365__auto___57794 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___57795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57794);
if(cljs.core.truth_(result__11366__auto___57795)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57794),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57794),null,(1),null)),(2),null)),null]));
}

}catch (e57514){var t__11416__auto___57797 = e57514;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,t__11416__auto___57797,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm keys are events"], 0));

try{try{var values__11365__auto___57798 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(bb_web_ds_tools.events.journeys.fsm),null,(1),null)),(2),null));
var result__11366__auto___57799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57798);
if(cljs.core.truth_(result__11366__auto___57799)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57798),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57798),null,(1),null)),(2),null)),null]));
}

}catch (e57519){var t__11416__auto___57800 = e57519;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,t__11416__auto___57800,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm values are maps of next events to weights"], 0));

try{var seq__57521_57801 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57522_57802 = null;
var count__57523_57803 = (0);
var i__57524_57804 = (0);
while(true){
if((i__57524_57804 < count__57523_57803)){
var vec__57542_57805 = chunk__57522_57802.cljs$core$IIndexed$_nth$arity$2(null,i__57524_57804);
var current_57806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57542_57805,(0),null);
var nexts_57807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57542_57805,(1),null);
try{var values__11365__auto___57808 = (new cljs.core.List(null,nexts_57807,null,(1),null));
var result__11366__auto___57809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57808);
if(cljs.core.truth_(result__11366__auto___57809)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57808),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57808),null,(1),null)),(2),null)),null]));
}

}catch (e57545){var t__11416__auto___57821 = e57545;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___57821,null]));
}
try{var values__11365__auto___57822 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_57807),null,(1),null)),(2),null));
var result__11366__auto___57823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57822);
if(cljs.core.truth_(result__11366__auto___57823)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57822),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57822),null,(1),null)),(2),null)),null]));
}

}catch (e57546){var t__11416__auto___57824 = e57546;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___57824,null]));
}
try{var values__11365__auto___57825 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_57807),null,(1),null)),(2),null));
var result__11366__auto___57826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57825);
if(cljs.core.truth_(result__11366__auto___57826)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57825),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57825),null,(1),null)),(2),null)),null]));
}

}catch (e57548){var t__11416__auto___57827 = e57548;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___57827,null]));
}

var G__57828 = seq__57521_57801;
var G__57829 = chunk__57522_57802;
var G__57830 = count__57523_57803;
var G__57831 = (i__57524_57804 + (1));
seq__57521_57801 = G__57828;
chunk__57522_57802 = G__57829;
count__57523_57803 = G__57830;
i__57524_57804 = G__57831;
continue;
} else {
var temp__5825__auto___57832 = cljs.core.seq(seq__57521_57801);
if(temp__5825__auto___57832){
var seq__57521_57833__$1 = temp__5825__auto___57832;
if(cljs.core.chunked_seq_QMARK_(seq__57521_57833__$1)){
var c__5548__auto___57834 = cljs.core.chunk_first(seq__57521_57833__$1);
var G__57835 = cljs.core.chunk_rest(seq__57521_57833__$1);
var G__57836 = c__5548__auto___57834;
var G__57837 = cljs.core.count(c__5548__auto___57834);
var G__57838 = (0);
seq__57521_57801 = G__57835;
chunk__57522_57802 = G__57836;
count__57523_57803 = G__57837;
i__57524_57804 = G__57838;
continue;
} else {
var vec__57550_57839 = cljs.core.first(seq__57521_57833__$1);
var current_57840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57550_57839,(0),null);
var nexts_57841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57550_57839,(1),null);
try{var values__11365__auto___57842 = (new cljs.core.List(null,nexts_57841,null,(1),null));
var result__11366__auto___57843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57842);
if(cljs.core.truth_(result__11366__auto___57843)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57842),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57842),null,(1),null)),(2),null)),null]));
}

}catch (e57553){var t__11416__auto___57844 = e57553;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___57844,null]));
}
try{var values__11365__auto___57845 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_57841),null,(1),null)),(2),null));
var result__11366__auto___57846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57845);
if(cljs.core.truth_(result__11366__auto___57846)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57845),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57845),null,(1),null)),(2),null)),null]));
}

}catch (e57554){var t__11416__auto___57847 = e57554;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___57847,null]));
}
try{var values__11365__auto___57848 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_57841),null,(1),null)),(2),null));
var result__11366__auto___57849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___57848);
if(cljs.core.truth_(result__11366__auto___57849)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57848),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___57848),null,(1),null)),(2),null)),null]));
}

}catch (e57555){var t__11416__auto___57850 = e57555;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___57850,null]));
}

var G__57851 = cljs.core.next(seq__57521_57833__$1);
var G__57852 = null;
var G__57853 = (0);
var G__57854 = (0);
seq__57521_57801 = G__57851;
chunk__57522_57802 = G__57852;
count__57523_57803 = G__57853;
i__57524_57804 = G__57854;
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
try{var values__11365__auto___57855 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57855);
if(cljs.core.truth_(result__11366__auto___57856)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57855),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57855),null,(1),null)),(2),null)),null]));
}

}catch (e57556){var t__11416__auto___57857 = e57556;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,t__11416__auto___57857,null]));
}
try{var values__11365__auto___57858 = (new cljs.core.List(null,cljs.core.set(cljs.core.keys(bb_web_ds_tools.events.journeys.events)),(new cljs.core.List(null,cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.fsm,nav_event))),null,(1),null)),(2),null));
var result__11366__auto___57859 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57858);
if(cljs.core.truth_(result__11366__auto___57859)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"pass","pass",1574159993),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57858),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"fail","fail",1706214930),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57858),null,(1),null)),(2),null)),null]));
}

}catch (e57558){var t__11416__auto___57860 = e57558;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"error","error",-978969032),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,t__11416__auto___57860,null]));
}
var seq__57560 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57561 = null;
var count__57562 = (0);
var i__57563 = (0);
while(true){
if((i__57563 < count__57562)){
var vec__57574 = chunk__57561.cljs$core$IIndexed$_nth$arity$2(null,i__57563);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57574,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57574,(1),null);
try{var values__11365__auto___57861 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57861);
if(cljs.core.truth_(result__11366__auto___57862)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57861),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57861),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57577){var t__11416__auto___57863 = e57577;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___57863,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__57864 = seq__57560;
var G__57865 = chunk__57561;
var G__57866 = count__57562;
var G__57867 = (i__57563 + (1));
seq__57560 = G__57864;
chunk__57561 = G__57865;
count__57562 = G__57866;
i__57563 = G__57867;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57560);
if(temp__5825__auto__){
var seq__57560__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57560__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57560__$1);
var G__57868 = cljs.core.chunk_rest(seq__57560__$1);
var G__57869 = c__5548__auto__;
var G__57870 = cljs.core.count(c__5548__auto__);
var G__57871 = (0);
seq__57560 = G__57868;
chunk__57561 = G__57869;
count__57562 = G__57870;
i__57563 = G__57871;
continue;
} else {
var vec__57578 = cljs.core.first(seq__57560__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57578,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57578,(1),null);
try{var values__11365__auto___57872 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___57873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57872);
if(cljs.core.truth_(result__11366__auto___57873)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57872),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57872),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57581){var t__11416__auto___57874 = e57581;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___57874,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__57875 = cljs.core.next(seq__57560__$1);
var G__57876 = null;
var G__57877 = (0);
var G__57878 = (0);
seq__57560 = G__57875;
chunk__57561 = G__57876;
count__57562 = G__57877;
i__57563 = G__57878;
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

try{var journey_57879 = bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(10)], null));
try{var values__11365__auto___57880 = (new cljs.core.List(null,journey_57879,null,(1),null));
var result__11366__auto___57881 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,values__11365__auto___57880);
if(cljs.core.truth_(result__11366__auto___57881)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"pass","pass",1574159993),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___57880),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"fail","fail",1706214930),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___57880),null,(1),null)),(2),null)),null]));
}

}catch (e57590){var t__11416__auto___57882 = e57590;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"error","error",-978969032),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,t__11416__auto___57882,null]));
}
try{var values__11365__auto___57883 = (new cljs.core.List(null,cljs.core.count(journey_57879),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__11366__auto___57884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,values__11365__auto___57883);
if(cljs.core.truth_(result__11366__auto___57884)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___57883),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___57883),null,(1),null)),(2),null)),null]));
}

}catch (e57594){var t__11416__auto___57885 = e57594;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,t__11416__auto___57885,null]));
}
var seq__57595_57886 = cljs.core.seq(journey_57879);
var chunk__57596_57887 = null;
var count__57597_57888 = (0);
var i__57598_57889 = (0);
while(true){
if((i__57598_57889 < count__57597_57888)){
var vec__57613_57890 = chunk__57596_57887.cljs$core$IIndexed$_nth$arity$2(null,i__57598_57889);
var event_57891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57613_57890,(0),null);
var args_57892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57613_57890,(1),null);
try{var values__11365__auto___57893 = (new cljs.core.List(null,event_57891,null,(1),null));
var result__11366__auto___57894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57893);
if(cljs.core.truth_(result__11366__auto___57894)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57893),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57893),null,(1),null)),(2),null)),null]));
}

}catch (e57620){var t__11416__auto___57895 = e57620;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___57895,null]));
}
try{var values__11365__auto___57896 = (new cljs.core.List(null,args_57892,null,(1),null));
var result__11366__auto___57897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___57896);
if(cljs.core.truth_(result__11366__auto___57897)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57896),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57896),null,(1),null)),(2),null)),null]));
}

}catch (e57621){var t__11416__auto___57898 = e57621;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___57898,null]));
}

var G__57899 = seq__57595_57886;
var G__57900 = chunk__57596_57887;
var G__57901 = count__57597_57888;
var G__57902 = (i__57598_57889 + (1));
seq__57595_57886 = G__57899;
chunk__57596_57887 = G__57900;
count__57597_57888 = G__57901;
i__57598_57889 = G__57902;
continue;
} else {
var temp__5825__auto___57903 = cljs.core.seq(seq__57595_57886);
if(temp__5825__auto___57903){
var seq__57595_57904__$1 = temp__5825__auto___57903;
if(cljs.core.chunked_seq_QMARK_(seq__57595_57904__$1)){
var c__5548__auto___57905 = cljs.core.chunk_first(seq__57595_57904__$1);
var G__57906 = cljs.core.chunk_rest(seq__57595_57904__$1);
var G__57907 = c__5548__auto___57905;
var G__57908 = cljs.core.count(c__5548__auto___57905);
var G__57909 = (0);
seq__57595_57886 = G__57906;
chunk__57596_57887 = G__57907;
count__57597_57888 = G__57908;
i__57598_57889 = G__57909;
continue;
} else {
var vec__57622_57910 = cljs.core.first(seq__57595_57904__$1);
var event_57911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57622_57910,(0),null);
var args_57912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57622_57910,(1),null);
try{var values__11365__auto___57913 = (new cljs.core.List(null,event_57911,null,(1),null));
var result__11366__auto___57914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57913);
if(cljs.core.truth_(result__11366__auto___57914)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57913),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57913),null,(1),null)),(2),null)),null]));
}

}catch (e57625){var t__11416__auto___57915 = e57625;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___57915,null]));
}
try{var values__11365__auto___57916 = (new cljs.core.List(null,args_57912,null,(1),null));
var result__11366__auto___57917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___57916);
if(cljs.core.truth_(result__11366__auto___57917)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57916),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___57916),null,(1),null)),(2),null)),null]));
}

}catch (e57626){var t__11416__auto___57918 = e57626;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___57918,null]));
}

var G__57919 = cljs.core.next(seq__57595_57904__$1);
var G__57920 = null;
var G__57921 = (0);
var G__57922 = (0);
seq__57595_57886 = G__57919;
chunk__57596_57887 = G__57920;
count__57597_57888 = G__57921;
i__57598_57889 = G__57922;
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
var vec__57648 = cljs.core.first(remaining);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57648,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57648,(1),null);
var evt_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
if(cljs.core.truth_((function (){var and__5023__auto__ = current_route;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___57923 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),(new cljs.core.List(null,current_route,null,(1),null)),(2),null));
var result__11366__auto___57924 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57923);
if(cljs.core.truth_(result__11366__auto___57924)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57923),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57923),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}

}catch (e57658){var t__11416__auto___57925 = e57658;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,t__11416__auto___57925,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}} else {
}

var new_route = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,nav_event))?cljs.core.first(args):current_route);
var G__57926 = cljs.core.rest(remaining);
var G__57927 = new_route;
remaining = G__57926;
current_route = G__57927;
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
