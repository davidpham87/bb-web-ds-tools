goog.provide('bb_web_ds_tools.events.journeys_test');
bb_web_ds_tools.events.journeys_test.events_structure_test = (function bb_web_ds_tools$events$journeys_test$events_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$var);
});
bb_web_ds_tools.events.journeys_test.events_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events is a map"], 0));

try{try{var values__11365__auto___57917 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.events,null,(1),null));
var result__11366__auto___57918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57917);
if(cljs.core.truth_(result__11366__auto___57918)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57917),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57917),null,(1),null)),(2),null)),null]));
}

}catch (e57491){var t__11416__auto___57921 = e57491;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),9,8,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null)),8,t__11416__auto___57921,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["events have generators"], 0));

try{var seq__57498 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57499 = null;
var count__57500 = (0);
var i__57501 = (0);
while(true){
if((i__57501 < count__57500)){
var vec__57545 = chunk__57499.cljs$core$IIndexed$_nth$arity$2(null,i__57501);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57545,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57545,(1),null);
try{var values__11365__auto___57922 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57922);
if(cljs.core.truth_(result__11366__auto___57923)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57922),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57922),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57548){var t__11416__auto___57925 = e57548;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57925,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57926 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57926);
if(cljs.core.truth_(result__11366__auto___57927)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57926),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57926),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57549){var t__11416__auto___57928 = e57549;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57928,"Props should be a map"]));
}
try{var values__11365__auto___57929 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57929);
if(cljs.core.truth_(result__11366__auto___57930)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57929),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57929),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57550){var t__11416__auto___57938 = e57550;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57938,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57939 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57939);
if(cljs.core.truth_(result__11366__auto___57940)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57939),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57939),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57555){var t__11416__auto___57942 = e57555;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57942,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57943 = seq__57498;
var G__57944 = chunk__57499;
var G__57945 = count__57500;
var G__57946 = (i__57501 + (1));
seq__57498 = G__57943;
chunk__57499 = G__57944;
count__57500 = G__57945;
i__57501 = G__57946;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57498);
if(temp__5825__auto__){
var seq__57498__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57498__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57498__$1);
var G__57947 = cljs.core.chunk_rest(seq__57498__$1);
var G__57948 = c__5548__auto__;
var G__57949 = cljs.core.count(c__5548__auto__);
var G__57950 = (0);
seq__57498 = G__57947;
chunk__57499 = G__57948;
count__57500 = G__57949;
i__57501 = G__57950;
continue;
} else {
var vec__57556 = cljs.core.first(seq__57498__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57556,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57556,(1),null);
try{var values__11365__auto___57952 = (new cljs.core.List(null,event_key,null,(1),null));
var result__11366__auto___57953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___57952);
if(cljs.core.truth_(result__11366__auto___57953)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57952),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___57952),null,(1),null)),(2),null)),["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57559){var t__11416__auto___57956 = e57559;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),11,12,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event-key","event-key",-564770939,null)),12,t__11416__auto___57956,["Event key should be keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}
try{var values__11365__auto___57958 = (new cljs.core.List(null,props,null,(1),null));
var result__11366__auto___57959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___57958);
if(cljs.core.truth_(result__11366__auto___57959)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57958),"Props should be a map"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___57958),null,(1),null)),(2),null)),"Props should be a map"]));
}

}catch (e57563){var t__11416__auto___57962 = e57563;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),13,t__11416__auto___57962,"Props should be a map"]));
}
try{var values__11365__auto___57964 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864),null,(1),null)),(2),null));
var result__11366__auto___57972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57964);
if(cljs.core.truth_(result__11366__auto___57972)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57964),"Props should contain :args-gen"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57964),null,(1),null)),(2),null)),"Props should contain :args-gen"]));
}

}catch (e57564){var t__11416__auto___57975 = e57564;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,14,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"args-gen","args-gen",305577864)),14,t__11416__auto___57975,"Props should contain :args-gen"]));
}
try{var values__11365__auto___57978 = (new cljs.core.List(null,new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___57979 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.core.schema,values__11365__auto___57978);
if(cljs.core.truth_(result__11366__auto___57979)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57978),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("m","schema","m/schema",58529719,null),values__11365__auto___57978),null,(1),null)),(2),null)),["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

}catch (e57568){var t__11416__auto___57982 = e57568;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol("m","schema","m/schema",58529719,null),cljs.core.list(new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.Symbol(null,"props","props",2093813254,null))),16,t__11416__auto___57982,["Invalid schema for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)].join('')]));
}

var G__57983 = cljs.core.next(seq__57498__$1);
var G__57984 = null;
var G__57985 = (0);
var G__57986 = (0);
seq__57498 = G__57983;
chunk__57499 = G__57984;
count__57500 = G__57985;
i__57501 = G__57986;
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

try{var seq__57571 = cljs.core.seq(bb_web_ds_tools.events.journeys.events);
var chunk__57572 = null;
var count__57573 = (0);
var i__57574 = (0);
while(true){
if((i__57574 < count__57573)){
var vec__57595 = chunk__57572.cljs$core$IIndexed$_nth$arity$2(null,i__57574);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57595,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57595,(1),null);
try{var values__11365__auto___57987 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___57988 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___57987);
if(cljs.core.truth_(result__11366__auto___57988)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57987),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___57987),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57598){var t__11416__auto___57993 = e57598;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___57993,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___58009 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___58010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___58009);
if(cljs.core.truth_(result__11366__auto___58010)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58009),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58009),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57599){var t__11416__auto___58013 = e57599;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___58013,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__58014 = seq__57571;
var G__58015 = chunk__57572;
var G__58016 = count__57573;
var G__58017 = (i__57574 + (1));
seq__57571 = G__58014;
chunk__57572 = G__58015;
count__57573 = G__58016;
i__57574 = G__58017;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57571);
if(temp__5825__auto__){
var seq__57571__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57571__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57571__$1);
var G__58019 = cljs.core.chunk_rest(seq__57571__$1);
var G__58020 = c__5548__auto__;
var G__58021 = cljs.core.count(c__5548__auto__);
var G__58022 = (0);
seq__57571 = G__58019;
chunk__57572 = G__58020;
count__57573 = G__58021;
i__57574 = G__58022;
continue;
} else {
var vec__57611 = cljs.core.first(seq__57571__$1);
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57611,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57611,(1),null);
try{var values__11365__auto___58023 = (new cljs.core.List(null,props,(new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309),null,(1),null)),(2),null));
var result__11366__auto___58024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___58023);
if(cljs.core.truth_(result__11366__auto___58024)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58023),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58023),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}

}catch (e57614){var t__11416__auto___58026 = e57614;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"route","route",329891309)),21,t__11416__auto___58026,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should have :route metadata"].join('')]));
}
try{var values__11365__auto___58028 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(props),null,(1),null));
var result__11366__auto___58029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___58028);
if(cljs.core.truth_(result__11366__auto___58029)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58028),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58028),null,(1),null)),(2),null)),["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

}catch (e57615){var t__11416__auto___58032 = e57615;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"props","props",2093813254,null))),22,t__11416__auto___58032,["Route for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_key)," should be a keyword"].join('')]));
}

var G__58059 = cljs.core.next(seq__57571__$1);
var G__58060 = null;
var G__58061 = (0);
var G__58062 = (0);
seq__57571 = G__58059;
chunk__57572 = G__58060;
count__57573 = G__58061;
i__57574 = G__58062;
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

try{try{var values__11365__auto___58067 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,null,(1),null));
var result__11366__auto___58068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___58067);
if(cljs.core.truth_(result__11366__auto___58068)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58067),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58067),null,(1),null)),(2),null)),null]));
}

}catch (e57641){var t__11416__auto___58074 = e57641;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),9,26,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null)),26,t__11416__auto___58074,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm keys are events"], 0));

try{try{var values__11365__auto___58076 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(bb_web_ds_tools.events.journeys.fsm),null,(1),null)),(2),null));
var result__11366__auto___58077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___58076);
if(cljs.core.truth_(result__11366__auto___58077)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58076),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58076),null,(1),null)),(2),null)),null]));
}

}catch (e57643){var t__11416__auto___58079 = e57643;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),9,29,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null))),29,t__11416__auto___58079,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fsm values are maps of next events to weights"], 0));

try{var seq__57645_58081 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57646_58082 = null;
var count__57647_58083 = (0);
var i__57648_58084 = (0);
while(true){
if((i__57648_58084 < count__57647_58083)){
var vec__57729_58085 = chunk__57646_58082.cljs$core$IIndexed$_nth$arity$2(null,i__57648_58084);
var current_58086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57729_58085,(0),null);
var nexts_58087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57729_58085,(1),null);
try{var values__11365__auto___58089 = (new cljs.core.List(null,nexts_58087,null,(1),null));
var result__11366__auto___58090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___58089);
if(cljs.core.truth_(result__11366__auto___58090)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58089),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58089),null,(1),null)),(2),null)),null]));
}

}catch (e57732){var t__11416__auto___58097 = e57732;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___58097,null]));
}
try{var values__11365__auto___58098 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_58087),null,(1),null)),(2),null));
var result__11366__auto___58099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___58098);
if(cljs.core.truth_(result__11366__auto___58099)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58098),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58098),null,(1),null)),(2),null)),null]));
}

}catch (e57733){var t__11416__auto___58101 = e57733;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___58101,null]));
}
try{var values__11365__auto___58102 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_58087),null,(1),null)),(2),null));
var result__11366__auto___58103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___58102);
if(cljs.core.truth_(result__11366__auto___58103)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58102),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58102),null,(1),null)),(2),null)),null]));
}

}catch (e57752){var t__11416__auto___58105 = e57752;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___58105,null]));
}

var G__58106 = seq__57645_58081;
var G__58107 = chunk__57646_58082;
var G__58108 = count__57647_58083;
var G__58109 = (i__57648_58084 + (1));
seq__57645_58081 = G__58106;
chunk__57646_58082 = G__58107;
count__57647_58083 = G__58108;
i__57648_58084 = G__58109;
continue;
} else {
var temp__5825__auto___58110 = cljs.core.seq(seq__57645_58081);
if(temp__5825__auto___58110){
var seq__57645_58111__$1 = temp__5825__auto___58110;
if(cljs.core.chunked_seq_QMARK_(seq__57645_58111__$1)){
var c__5548__auto___58112 = cljs.core.chunk_first(seq__57645_58111__$1);
var G__58113 = cljs.core.chunk_rest(seq__57645_58111__$1);
var G__58114 = c__5548__auto___58112;
var G__58115 = cljs.core.count(c__5548__auto___58112);
var G__58116 = (0);
seq__57645_58081 = G__58113;
chunk__57646_58082 = G__58114;
count__57647_58083 = G__58115;
i__57648_58084 = G__58116;
continue;
} else {
var vec__57753_58117 = cljs.core.first(seq__57645_58111__$1);
var current_58118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57753_58117,(0),null);
var nexts_58119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57753_58117,(1),null);
try{var values__11365__auto___58120 = (new cljs.core.List(null,nexts_58119,null,(1),null));
var result__11366__auto___58121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,values__11365__auto___58120);
if(cljs.core.truth_(result__11366__auto___58121)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"pass","pass",1574159993),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58120),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"fail","fail",1706214930),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),values__11365__auto___58120),null,(1),null)),(2),null)),null]));
}

}catch (e57757){var t__11416__auto___58132 = e57757;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",23,new cljs.core.Keyword(null,"error","error",-978969032),11,33,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null)),33,t__11416__auto___58132,null]));
}
try{var values__11365__auto___58133 = (new cljs.core.List(null,cljs.core.keyword_QMARK_,(new cljs.core.List(null,cljs.core.keys(nexts_58119),null,(1),null)),(2),null));
var result__11366__auto___58134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___58133);
if(cljs.core.truth_(result__11366__auto___58134)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58133),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58133),null,(1),null)),(2),null)),null]));
}

}catch (e57759){var t__11416__auto___58142 = e57759;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),11,34,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),34,t__11416__auto___58142,null]));
}
try{var values__11365__auto___58144 = (new cljs.core.List(null,cljs.core.number_QMARK_,(new cljs.core.List(null,cljs.core.vals(nexts_58119),null,(1),null)),(2),null));
var result__11366__auto___58145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__11365__auto___58144);
if(cljs.core.truth_(result__11366__auto___58145)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58144),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__11365__auto___58144),null,(1),null)),(2),null)),null]));
}

}catch (e57770){var t__11416__auto___58150 = e57770;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null))),35,t__11416__auto___58150,null]));
}

var G__58151 = cljs.core.next(seq__57645_58111__$1);
var G__58152 = null;
var G__58153 = (0);
var G__58154 = (0);
seq__57645_58081 = G__58151;
chunk__57646_58082 = G__58152;
count__57647_58083 = G__58153;
i__57648_58084 = G__58154;
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
try{var values__11365__auto___58155 = (new cljs.core.List(null,bb_web_ds_tools.events.journeys.fsm,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___58156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___58155);
if(cljs.core.truth_(result__11366__auto___58156)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58155),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58155),null,(1),null)),(2),null)),null]));
}

}catch (e57771){var t__11416__auto___58158 = e57771;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,39,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),39,t__11416__auto___58158,null]));
}
try{var values__11365__auto___58160 = (new cljs.core.List(null,cljs.core.set(cljs.core.keys(bb_web_ds_tools.events.journeys.events)),(new cljs.core.List(null,cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.fsm,nav_event))),null,(1),null)),(2),null));
var result__11366__auto___58161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___58160);
if(cljs.core.truth_(result__11366__auto___58161)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"pass","pass",1574159993),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___58160),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"fail","fail",1706214930),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___58160),null,(1),null)),(2),null)),null]));
}

}catch (e57778){var t__11416__auto___58166 = e57778;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",85,new cljs.core.Keyword(null,"error","error",-978969032),11,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol("journeys","events","journeys/events",234752047,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("journeys","fsm","journeys/fsm",1451347526,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null))))),41,t__11416__auto___58166,null]));
}
var seq__57784 = cljs.core.seq(bb_web_ds_tools.events.journeys.fsm);
var chunk__57786 = null;
var count__57787 = (0);
var i__57788 = (0);
while(true){
if((i__57788 < count__57787)){
var vec__57817 = chunk__57786.cljs$core$IIndexed$_nth$arity$2(null,i__57788);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57817,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57817,(1),null);
try{var values__11365__auto___58172 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___58173 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___58172);
if(cljs.core.truth_(result__11366__auto___58173)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58172),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58172),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57823){var t__11416__auto___58177 = e57823;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___58177,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__58178 = seq__57784;
var G__58179 = chunk__57786;
var G__58180 = count__57787;
var G__58181 = (i__57788 + (1));
seq__57784 = G__58178;
chunk__57786 = G__58179;
count__57787 = G__58180;
i__57788 = G__58181;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57784);
if(temp__5825__auto__){
var seq__57784__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57784__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57784__$1);
var G__58182 = cljs.core.chunk_rest(seq__57784__$1);
var G__58183 = c__5548__auto__;
var G__58184 = cljs.core.count(c__5548__auto__);
var G__58185 = (0);
seq__57784 = G__58182;
chunk__57786 = G__58183;
count__57787 = G__58184;
i__57788 = G__58185;
continue;
} else {
var vec__57834 = cljs.core.first(seq__57784__$1);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57834,(0),null);
var nexts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57834,(1),null);
try{var values__11365__auto___58186 = (new cljs.core.List(null,nexts,(new cljs.core.List(null,nav_event,null,(1),null)),(2),null));
var result__11366__auto___58187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,values__11365__auto___58186);
if(cljs.core.truth_(result__11366__auto___58187)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58186),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),values__11365__auto___58186),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

}catch (e57838){var t__11416__auto___58207 = e57838;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"nexts","nexts",-1683579407,null),new cljs.core.Symbol(null,"nav-event","nav-event",-616717525,null)),44,t__11416__auto___58207,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," should lead to navigation"].join('')]));
}

var G__58208 = cljs.core.next(seq__57784__$1);
var G__58209 = null;
var G__58210 = (0);
var G__58211 = (0);
seq__57784 = G__58208;
chunk__57786 = G__58209;
count__57787 = G__58210;
i__57788 = G__58211;
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

try{var journey_58217 = bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.events.journeys.fsm,bb_web_ds_tools.events.journeys.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-steps","max-steps",1553604741),(10)], null));
try{var values__11365__auto___58218 = (new cljs.core.List(null,journey_58217,null,(1),null));
var result__11366__auto___58219 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,values__11365__auto___58218);
if(cljs.core.truth_(result__11366__auto___58219)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"pass","pass",1574159993),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___58218),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"fail","fail",1706214930),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__11365__auto___58218),null,(1),null)),(2),null)),null]));
}

}catch (e57844){var t__11416__auto___58221 = e57844;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",25,new cljs.core.Keyword(null,"error","error",-978969032),11,49,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),49,t__11416__auto___58221,null]));
}
try{var values__11365__auto___58222 = (new cljs.core.List(null,cljs.core.count(journey_58217),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__11366__auto___58223 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,values__11365__auto___58222);
if(cljs.core.truth_(result__11366__auto___58223)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___58222),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__11365__auto___58222),null,(1),null)),(2),null)),null]));
}

}catch (e57846){var t__11416__auto___58227 = e57846;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),11,50,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"journey","journey",1837693097,null)),(10)),50,t__11416__auto___58227,null]));
}
var seq__57849_58228 = cljs.core.seq(journey_58217);
var chunk__57850_58229 = null;
var count__57851_58230 = (0);
var i__57852_58231 = (0);
while(true){
if((i__57852_58231 < count__57851_58230)){
var vec__57876_58232 = chunk__57850_58229.cljs$core$IIndexed$_nth$arity$2(null,i__57852_58231);
var event_58233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57876_58232,(0),null);
var args_58234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57876_58232,(1),null);
try{var values__11365__auto___58235 = (new cljs.core.List(null,event_58233,null,(1),null));
var result__11366__auto___58236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___58235);
if(cljs.core.truth_(result__11366__auto___58236)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58235),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58235),null,(1),null)),(2),null)),null]));
}

}catch (e57879){var t__11416__auto___58240 = e57879;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___58240,null]));
}
try{var values__11365__auto___58241 = (new cljs.core.List(null,args_58234,null,(1),null));
var result__11366__auto___58242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___58241);
if(cljs.core.truth_(result__11366__auto___58242)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___58241),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___58241),null,(1),null)),(2),null)),null]));
}

}catch (e57882){var t__11416__auto___58244 = e57882;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___58244,null]));
}

var G__58245 = seq__57849_58228;
var G__58246 = chunk__57850_58229;
var G__58247 = count__57851_58230;
var G__58248 = (i__57852_58231 + (1));
seq__57849_58228 = G__58245;
chunk__57850_58229 = G__58246;
count__57851_58230 = G__58247;
i__57852_58231 = G__58248;
continue;
} else {
var temp__5825__auto___58249 = cljs.core.seq(seq__57849_58228);
if(temp__5825__auto___58249){
var seq__57849_58252__$1 = temp__5825__auto___58249;
if(cljs.core.chunked_seq_QMARK_(seq__57849_58252__$1)){
var c__5548__auto___58253 = cljs.core.chunk_first(seq__57849_58252__$1);
var G__58254 = cljs.core.chunk_rest(seq__57849_58252__$1);
var G__58255 = c__5548__auto___58253;
var G__58256 = cljs.core.count(c__5548__auto___58253);
var G__58257 = (0);
seq__57849_58228 = G__58254;
chunk__57850_58229 = G__58255;
count__57851_58230 = G__58256;
i__57852_58231 = G__58257;
continue;
} else {
var vec__57884_58258 = cljs.core.first(seq__57849_58252__$1);
var event_58259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884_58258,(0),null);
var args_58260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884_58258,(1),null);
try{var values__11365__auto___58261 = (new cljs.core.List(null,event_58259,null,(1),null));
var result__11366__auto___58262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,values__11365__auto___58261);
if(cljs.core.truth_(result__11366__auto___58262)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58261),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),values__11365__auto___58261),null,(1),null)),(2),null)),null]));
}

}catch (e57888){var t__11416__auto___58263 = e57888;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,52,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),52,t__11416__auto___58263,null]));
}
try{var values__11365__auto___58265 = (new cljs.core.List(null,args_58260,null,(1),null));
var result__11366__auto___58266 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,values__11365__auto___58265);
if(cljs.core.truth_(result__11366__auto___58266)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___58265),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),values__11365__auto___58265),null,(1),null)),(2),null)),null]));
}

}catch (e57893){var t__11416__auto___58268 = e57893;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),13,53,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),53,t__11416__auto___58268,null]));
}

var G__58269 = cljs.core.next(seq__57849_58252__$1);
var G__58270 = null;
var G__58271 = (0);
var G__58272 = (0);
seq__57849_58228 = G__58269;
chunk__57850_58229 = G__58270;
count__57851_58230 = G__58271;
i__57852_58231 = G__58272;
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
var vec__57905 = cljs.core.first(remaining);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57905,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57905,(1),null);
var evt_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.events.journeys.events,event);
if(cljs.core.truth_((function (){var and__5023__auto__ = current_route;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),new cljs.core.Keyword(null,"global","global",93595047));
} else {
return and__5023__auto__;
}
})())){
try{var values__11365__auto___58276 = (new cljs.core.List(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props),(new cljs.core.List(null,current_route,null,(1),null)),(2),null));
var result__11366__auto___58277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___58276);
if(cljs.core.truth_(result__11366__auto___58277)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___58276),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___58276),null,(1),null)),(2),null)),["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}

}catch (e57909){var t__11416__auto___58282 = e57909;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/events/journeys_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),19,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"evt-props","evt-props",1534384767,null)),new cljs.core.Symbol(null,"current-route","current-route",-586906321,null)),69,t__11416__auto___58282,["Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(evt_props))," mismatch with current ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route)].join('')]));
}} else {
}

var new_route = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,nav_event))?cljs.core.first(args):current_route);
var G__58284 = cljs.core.rest(remaining);
var G__58285 = new_route;
remaining = G__58284;
current_route = G__58285;
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
