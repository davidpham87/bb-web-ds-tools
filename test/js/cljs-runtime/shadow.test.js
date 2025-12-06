goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65541){
var vec__65542 = p__65541;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65542,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65542,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65547 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65547__$1 = (((G__65547 instanceof cljs.core.Keyword))?G__65547.fqn:null);
switch (G__65547__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65550 = (function (){
var seq__65551 = cljs.core.seq(vars__$1);
var chunk__65552 = null;
var count__65553 = (0);
var i__65554 = (0);
while(true){
if((i__65554 < count__65553)){
var v = chunk__65552.cljs$core$IIndexed$_nth$arity$2(null,i__65554);
var temp__5825__auto___65679 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65679)){
var t_65680 = temp__5825__auto___65679;
var G__65567_65681 = ((function (seq__65551,chunk__65552,count__65553,i__65554,t_65680,temp__5825__auto___65679,v,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65542,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65680)));
});})(seq__65551,chunk__65552,count__65553,i__65554,t_65680,temp__5825__auto___65679,v,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65542,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65567_65681) : each_fixture_fn.call(null,G__65567_65681));
} else {
}


var G__65682 = seq__65551;
var G__65683 = chunk__65552;
var G__65684 = count__65553;
var G__65685 = (i__65554 + (1));
seq__65551 = G__65682;
chunk__65552 = G__65683;
count__65553 = G__65684;
i__65554 = G__65685;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65551);
if(temp__5825__auto__){
var seq__65551__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65551__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65551__$1);
var G__65686 = cljs.core.chunk_rest(seq__65551__$1);
var G__65687 = c__5548__auto__;
var G__65688 = cljs.core.count(c__5548__auto__);
var G__65689 = (0);
seq__65551 = G__65686;
chunk__65552 = G__65687;
count__65553 = G__65688;
i__65554 = G__65689;
continue;
} else {
var v = cljs.core.first(seq__65551__$1);
var temp__5825__auto___65690__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65690__$1)){
var t_65691 = temp__5825__auto___65690__$1;
var G__65571_65692 = ((function (seq__65551,chunk__65552,count__65553,i__65554,t_65691,temp__5825__auto___65690__$1,v,seq__65551__$1,temp__5825__auto__,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65542,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65691)));
});})(seq__65551,chunk__65552,count__65553,i__65554,t_65691,temp__5825__auto___65690__$1,v,seq__65551__$1,temp__5825__auto__,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65542,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65571_65692) : each_fixture_fn.call(null,G__65571_65692));
} else {
}


var G__65693 = cljs.core.next(seq__65551__$1);
var G__65694 = null;
var G__65695 = (0);
var G__65696 = (0);
seq__65551 = G__65693;
chunk__65552 = G__65694;
count__65553 = G__65695;
i__65554 = G__65696;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65549 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65549.cljs$core$IFn$_invoke$arity$1 ? fexpr__65549.cljs$core$IFn$_invoke$arity$1(G__65550) : fexpr__65549.call(null,G__65550));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65547__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65537_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65537_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__65586 = shadow.test.env.get_test_ns_info(ns);
var map__65586__$1 = cljs.core.__destructure_map(map__65586);
var test_ns = map__65586__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65586__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65590,vars){
var map__65593 = p__65590;
var map__65593__$1 = cljs.core.__destructure_map(map__65593);
var env = map__65593__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65593__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65595_65697 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65597_65698 = null;
var count__65598_65699 = (0);
var i__65599_65700 = (0);
while(true){
if((i__65599_65700 < count__65598_65699)){
var vec__65615_65702 = chunk__65597_65698.cljs$core$IIndexed$_nth$arity$2(null,i__65599_65700);
var test_ns_65703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615_65702,(0),null);
var ns_info_65704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615_65702,(1),null);
var map__65618_65708 = ns_info_65704;
var map__65618_65709__$1 = cljs.core.__destructure_map(map__65618_65708);
var fixtures_65710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65618_65709__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65711 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65710);
if(cljs.core.truth_(temp__5825__auto___65711)){
var fix_65712 = temp__5825__auto___65711;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65703,fix_65712], 0));
} else {
}

var temp__5825__auto___65713 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65710);
if(cljs.core.truth_(temp__5825__auto___65713)){
var fix_65714 = temp__5825__auto___65713;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65703,fix_65714], 0));
} else {
}


var G__65715 = seq__65595_65697;
var G__65716 = chunk__65597_65698;
var G__65717 = count__65598_65699;
var G__65718 = (i__65599_65700 + (1));
seq__65595_65697 = G__65715;
chunk__65597_65698 = G__65716;
count__65598_65699 = G__65717;
i__65599_65700 = G__65718;
continue;
} else {
var temp__5825__auto___65721 = cljs.core.seq(seq__65595_65697);
if(temp__5825__auto___65721){
var seq__65595_65722__$1 = temp__5825__auto___65721;
if(cljs.core.chunked_seq_QMARK_(seq__65595_65722__$1)){
var c__5548__auto___65723 = cljs.core.chunk_first(seq__65595_65722__$1);
var G__65724 = cljs.core.chunk_rest(seq__65595_65722__$1);
var G__65725 = c__5548__auto___65723;
var G__65726 = cljs.core.count(c__5548__auto___65723);
var G__65727 = (0);
seq__65595_65697 = G__65724;
chunk__65597_65698 = G__65725;
count__65598_65699 = G__65726;
i__65599_65700 = G__65727;
continue;
} else {
var vec__65619_65730 = cljs.core.first(seq__65595_65722__$1);
var test_ns_65731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65619_65730,(0),null);
var ns_info_65732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65619_65730,(1),null);
var map__65626_65733 = ns_info_65732;
var map__65626_65734__$1 = cljs.core.__destructure_map(map__65626_65733);
var fixtures_65735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65626_65734__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65736__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65735);
if(cljs.core.truth_(temp__5825__auto___65736__$1)){
var fix_65737 = temp__5825__auto___65736__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65731,fix_65737], 0));
} else {
}

var temp__5825__auto___65738__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65735);
if(cljs.core.truth_(temp__5825__auto___65738__$1)){
var fix_65739 = temp__5825__auto___65738__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65731,fix_65739], 0));
} else {
}


var G__65740 = cljs.core.next(seq__65595_65722__$1);
var G__65741 = null;
var G__65742 = (0);
var G__65743 = (0);
seq__65595_65697 = G__65740;
chunk__65597_65698 = G__65741;
count__65598_65699 = G__65742;
i__65599_65700 = G__65743;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65589_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65589_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65646 = cljs.test.get_current_env();
var map__65646__$1 = cljs.core.__destructure_map(map__65646);
var env = map__65646__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65646__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65646__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65654 = arguments.length;
switch (G__65654) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__65659 = arguments.length;
switch (G__65659) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__65661 = shadow.test.env.get_test_ns_info(ns);
var map__65661__$1 = cljs.core.__destructure_map(map__65661);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65661__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65664 = arguments.length;
switch (G__65664) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65662_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65662_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__65667 = arguments.length;
switch (G__65667) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65665_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65665_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
