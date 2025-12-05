goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65448){
var vec__65449 = p__65448;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65449,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65449,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65453 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65453__$1 = (((G__65453 instanceof cljs.core.Keyword))?G__65453.fqn:null);
switch (G__65453__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65458 = (function (){
var seq__65461 = cljs.core.seq(vars__$1);
var chunk__65462 = null;
var count__65463 = (0);
var i__65464 = (0);
while(true){
if((i__65464 < count__65463)){
var v = chunk__65462.cljs$core$IIndexed$_nth$arity$2(null,i__65464);
var temp__5825__auto___65533 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65533)){
var t_65534 = temp__5825__auto___65533;
var G__65468_65535 = ((function (seq__65461,chunk__65462,count__65463,i__65464,t_65534,temp__5825__auto___65533,v,each_fixture_fn,G__65453,G__65453__$1,env,once_fixtures,each_fixtures,vec__65449,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65534)));
});})(seq__65461,chunk__65462,count__65463,i__65464,t_65534,temp__5825__auto___65533,v,each_fixture_fn,G__65453,G__65453__$1,env,once_fixtures,each_fixtures,vec__65449,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65468_65535) : each_fixture_fn.call(null,G__65468_65535));
} else {
}


var G__65536 = seq__65461;
var G__65537 = chunk__65462;
var G__65538 = count__65463;
var G__65539 = (i__65464 + (1));
seq__65461 = G__65536;
chunk__65462 = G__65537;
count__65463 = G__65538;
i__65464 = G__65539;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65461);
if(temp__5825__auto__){
var seq__65461__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65461__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65461__$1);
var G__65541 = cljs.core.chunk_rest(seq__65461__$1);
var G__65542 = c__5548__auto__;
var G__65543 = cljs.core.count(c__5548__auto__);
var G__65544 = (0);
seq__65461 = G__65541;
chunk__65462 = G__65542;
count__65463 = G__65543;
i__65464 = G__65544;
continue;
} else {
var v = cljs.core.first(seq__65461__$1);
var temp__5825__auto___65546__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65546__$1)){
var t_65547 = temp__5825__auto___65546__$1;
var G__65469_65548 = ((function (seq__65461,chunk__65462,count__65463,i__65464,t_65547,temp__5825__auto___65546__$1,v,seq__65461__$1,temp__5825__auto__,each_fixture_fn,G__65453,G__65453__$1,env,once_fixtures,each_fixtures,vec__65449,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65547)));
});})(seq__65461,chunk__65462,count__65463,i__65464,t_65547,temp__5825__auto___65546__$1,v,seq__65461__$1,temp__5825__auto__,each_fixture_fn,G__65453,G__65453__$1,env,once_fixtures,each_fixtures,vec__65449,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65469_65548) : each_fixture_fn.call(null,G__65469_65548));
} else {
}


var G__65549 = cljs.core.next(seq__65461__$1);
var G__65550 = null;
var G__65551 = (0);
var G__65552 = (0);
seq__65461 = G__65549;
chunk__65462 = G__65550;
count__65463 = G__65551;
i__65464 = G__65552;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65457 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65457.cljs$core$IFn$_invoke$arity$1 ? fexpr__65457.cljs$core$IFn$_invoke$arity$1(G__65458) : fexpr__65457.call(null,G__65458));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65453__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65444_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65444_SHARP_));
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

var map__65470 = shadow.test.env.get_test_ns_info(ns);
var map__65470__$1 = cljs.core.__destructure_map(map__65470);
var test_ns = map__65470__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65472,vars){
var map__65473 = p__65472;
var map__65473__$1 = cljs.core.__destructure_map(map__65473);
var env = map__65473__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65474_65567 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65476_65568 = null;
var count__65477_65569 = (0);
var i__65478_65570 = (0);
while(true){
if((i__65478_65570 < count__65477_65569)){
var vec__65490_65574 = chunk__65476_65568.cljs$core$IIndexed$_nth$arity$2(null,i__65478_65570);
var test_ns_65575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65490_65574,(0),null);
var ns_info_65576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65490_65574,(1),null);
var map__65493_65577 = ns_info_65576;
var map__65493_65578__$1 = cljs.core.__destructure_map(map__65493_65577);
var fixtures_65579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493_65578__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65580 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65579);
if(cljs.core.truth_(temp__5825__auto___65580)){
var fix_65581 = temp__5825__auto___65580;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65575,fix_65581], 0));
} else {
}

var temp__5825__auto___65582 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65579);
if(cljs.core.truth_(temp__5825__auto___65582)){
var fix_65583 = temp__5825__auto___65582;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65575,fix_65583], 0));
} else {
}


var G__65584 = seq__65474_65567;
var G__65585 = chunk__65476_65568;
var G__65586 = count__65477_65569;
var G__65587 = (i__65478_65570 + (1));
seq__65474_65567 = G__65584;
chunk__65476_65568 = G__65585;
count__65477_65569 = G__65586;
i__65478_65570 = G__65587;
continue;
} else {
var temp__5825__auto___65588 = cljs.core.seq(seq__65474_65567);
if(temp__5825__auto___65588){
var seq__65474_65589__$1 = temp__5825__auto___65588;
if(cljs.core.chunked_seq_QMARK_(seq__65474_65589__$1)){
var c__5548__auto___65590 = cljs.core.chunk_first(seq__65474_65589__$1);
var G__65591 = cljs.core.chunk_rest(seq__65474_65589__$1);
var G__65592 = c__5548__auto___65590;
var G__65593 = cljs.core.count(c__5548__auto___65590);
var G__65594 = (0);
seq__65474_65567 = G__65591;
chunk__65476_65568 = G__65592;
count__65477_65569 = G__65593;
i__65478_65570 = G__65594;
continue;
} else {
var vec__65494_65599 = cljs.core.first(seq__65474_65589__$1);
var test_ns_65600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65494_65599,(0),null);
var ns_info_65601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65494_65599,(1),null);
var map__65497_65602 = ns_info_65601;
var map__65497_65603__$1 = cljs.core.__destructure_map(map__65497_65602);
var fixtures_65604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497_65603__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65605__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65604);
if(cljs.core.truth_(temp__5825__auto___65605__$1)){
var fix_65609 = temp__5825__auto___65605__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65600,fix_65609], 0));
} else {
}

var temp__5825__auto___65610__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65604);
if(cljs.core.truth_(temp__5825__auto___65610__$1)){
var fix_65611 = temp__5825__auto___65610__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65600,fix_65611], 0));
} else {
}


var G__65612 = cljs.core.next(seq__65474_65589__$1);
var G__65613 = null;
var G__65614 = (0);
var G__65615 = (0);
seq__65474_65567 = G__65612;
chunk__65476_65568 = G__65613;
count__65477_65569 = G__65614;
i__65478_65570 = G__65615;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65471_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65471_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65501 = cljs.test.get_current_env();
var map__65501__$1 = cljs.core.__destructure_map(map__65501);
var env = map__65501__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65501__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65501__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65504 = arguments.length;
switch (G__65504) {
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
var G__65513 = arguments.length;
switch (G__65513) {
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
var map__65514 = shadow.test.env.get_test_ns_info(ns);
var map__65514__$1 = cljs.core.__destructure_map(map__65514);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65514__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65519 = arguments.length;
switch (G__65519) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65515_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65515_SHARP_)));
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
var G__65527 = arguments.length;
switch (G__65527) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65525_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65525_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
