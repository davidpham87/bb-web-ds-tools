goog.provide('bb_web_ds_tools.views.editor_test');
bb_web_ds_tools.views.editor_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.views.editor_test.editor_property_test = (function bb_web_ds_tools$views$editor_test$editor_property_test(){
return cljs.test.test_var(bb_web_ds_tools.views.editor_test.editor_property_test.cljs$lang$var);
});
bb_web_ds_tools.views.editor_test.editor_property_test.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

var new_codes = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),cljs.core.string_QMARK_], null));
var seq__66380 = cljs.core.seq(new_codes);
var chunk__66381 = null;
var count__66382 = (0);
var i__66383 = (0);
while(true){
if((i__66383 < count__66382)){
var code = chunk__66381.cljs$core$IIndexed$_nth$arity$2(null,i__66383);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),code], null));

try{var values__11365__auto___66414 = (new cljs.core.List(null,code,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null))),null,(1),null)),(2),null));
var result__11366__auto___66415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66414);
if(cljs.core.truth_(result__11366__auto___66415)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66414),"Code should be updated in app-db"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66414),null,(1),null)),(2),null)),"Code should be updated in app-db"]));
}

}catch (e66394){var t__11416__auto___66418 = e66394;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,t__11416__auto___66418,"Code should be updated in app-db"]));
}

var G__66420 = seq__66380;
var G__66421 = chunk__66381;
var G__66422 = count__66382;
var G__66423 = (i__66383 + (1));
seq__66380 = G__66420;
chunk__66381 = G__66421;
count__66382 = G__66422;
i__66383 = G__66423;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66380);
if(temp__5825__auto__){
var seq__66380__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66380__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66380__$1);
var G__66424 = cljs.core.chunk_rest(seq__66380__$1);
var G__66425 = c__5548__auto__;
var G__66426 = cljs.core.count(c__5548__auto__);
var G__66427 = (0);
seq__66380 = G__66424;
chunk__66381 = G__66425;
count__66382 = G__66426;
i__66383 = G__66427;
continue;
} else {
var code = cljs.core.first(seq__66380__$1);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),code], null));

try{var values__11365__auto___66430 = (new cljs.core.List(null,code,(new cljs.core.List(null,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null))),null,(1),null)),(2),null));
var result__11366__auto___66431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66430);
if(cljs.core.truth_(result__11366__auto___66431)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66430),"Code should be updated in app-db"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66430),null,(1),null)),(2),null)),"Code should be updated in app-db"]));
}

}catch (e66396){var t__11416__auto___66435 = e66396;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/editor_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("rf","subscribe","rf/subscribe",2056788919,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)))),19,t__11416__auto___66435,"Code should be updated in app-db"]));
}

var G__66437 = cljs.core.next(seq__66380__$1);
var G__66438 = null;
var G__66439 = (0);
var G__66440 = (0);
seq__66380 = G__66437;
chunk__66381 = G__66438;
count__66382 = G__66439;
i__66383 = G__66440;
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

(bb_web_ds_tools.views.editor_test.editor_property_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.views.editor_test.editor_property_test;},new cljs.core.Symbol("bb-web-ds-tools.views.editor-test","editor-property-test","bb-web-ds-tools.views.editor-test/editor-property-test",1771690188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.views.editor-test","bb-web-ds-tools.views.editor-test",-1043788371,null),new cljs.core.Symbol(null,"editor-property-test","editor-property-test",-529277211,null),"bb_web_ds_tools/views/editor_test.cljs",30,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.views.editor_test.editor_property_test)?bb_web_ds_tools.views.editor_test.editor_property_test.cljs$lang$test:null)])));
bb_web_ds_tools.views.editor_test.editor_save_test = (function bb_web_ds_tools$views$editor_test$editor_save_test(){
return cljs.test.test_var(bb_web_ds_tools.views.editor_test.editor_save_test.cljs$lang$var);
});
bb_web_ds_tools.views.editor_test.editor_save_test.cljs$lang$test = (function (){
var alert_orig_val__66402 = alert;
var alert_temp_val__66403 = (function (_){
return null;
});
(alert = alert_temp_val__66403);

try{return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.editor","save-code","bb-web-ds-tools.views.editor/save-code",1365207386)], null));

try{var value__11369__auto__ = true;
if(value__11369__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,true,null,value__11369__auto__,"Save code executed without error"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,true,null,value__11369__auto__,"Save code executed without error"]));
}

return value__11369__auto__;
}catch (e66407){var t__11416__auto__ = e66407;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,true,null,t__11416__auto__,"Save code executed without error"]));
}}));
}finally {(alert = alert_orig_val__66402);
}});

(bb_web_ds_tools.views.editor_test.editor_save_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.views.editor_test.editor_save_test;},new cljs.core.Symbol("bb-web-ds-tools.views.editor-test","editor-save-test","bb-web-ds-tools.views.editor-test/editor-save-test",-376564526,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.views.editor-test","bb-web-ds-tools.views.editor-test",-1043788371,null),new cljs.core.Symbol(null,"editor-save-test","editor-save-test",1847857801,null),"bb_web_ds_tools/views/editor_test.cljs",26,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.views.editor_test.editor_save_test)?bb_web_ds_tools.views.editor_test.editor_save_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.views.editor_test.js.map
