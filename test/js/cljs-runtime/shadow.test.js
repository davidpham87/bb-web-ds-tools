goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65477){
var vec__65478 = p__65477;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65478,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65478,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65481 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65481__$1 = (((G__65481 instanceof cljs.core.Keyword))?G__65481.fqn:null);
switch (G__65481__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65483 = (function (){
var seq__65484 = cljs.core.seq(vars__$1);
var chunk__65485 = null;
var count__65486 = (0);
var i__65487 = (0);
while(true){
if((i__65487 < count__65486)){
var v = chunk__65485.cljs$core$IIndexed$_nth$arity$2(null,i__65487);
var temp__5825__auto___65593 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65593)){
var t_65597 = temp__5825__auto___65593;
var G__65490_65598 = ((function (seq__65484,chunk__65485,count__65486,i__65487,t_65597,temp__5825__auto___65593,v,each_fixture_fn,G__65481,G__65481__$1,env,once_fixtures,each_fixtures,vec__65478,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65597)));
});})(seq__65484,chunk__65485,count__65486,i__65487,t_65597,temp__5825__auto___65593,v,each_fixture_fn,G__65481,G__65481__$1,env,once_fixtures,each_fixtures,vec__65478,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65490_65598) : each_fixture_fn.call(null,G__65490_65598));
} else {
}


var G__65599 = seq__65484;
var G__65600 = chunk__65485;
var G__65601 = count__65486;
var G__65602 = (i__65487 + (1));
seq__65484 = G__65599;
chunk__65485 = G__65600;
count__65486 = G__65601;
i__65487 = G__65602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65484);
if(temp__5825__auto__){
var seq__65484__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65484__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65484__$1);
var G__65604 = cljs.core.chunk_rest(seq__65484__$1);
var G__65605 = c__5548__auto__;
var G__65606 = cljs.core.count(c__5548__auto__);
var G__65607 = (0);
seq__65484 = G__65604;
chunk__65485 = G__65605;
count__65486 = G__65606;
i__65487 = G__65607;
continue;
} else {
var v = cljs.core.first(seq__65484__$1);
var temp__5825__auto___65608__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65608__$1)){
var t_65609 = temp__5825__auto___65608__$1;
var G__65491_65610 = ((function (seq__65484,chunk__65485,count__65486,i__65487,t_65609,temp__5825__auto___65608__$1,v,seq__65484__$1,temp__5825__auto__,each_fixture_fn,G__65481,G__65481__$1,env,once_fixtures,each_fixtures,vec__65478,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65609)));
});})(seq__65484,chunk__65485,count__65486,i__65487,t_65609,temp__5825__auto___65608__$1,v,seq__65484__$1,temp__5825__auto__,each_fixture_fn,G__65481,G__65481__$1,env,once_fixtures,each_fixtures,vec__65478,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65491_65610) : each_fixture_fn.call(null,G__65491_65610));
} else {
}


var G__65611 = cljs.core.next(seq__65484__$1);
var G__65612 = null;
var G__65613 = (0);
var G__65614 = (0);
seq__65484 = G__65611;
chunk__65485 = G__65612;
count__65486 = G__65613;
i__65487 = G__65614;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65482 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65482.cljs$core$IFn$_invoke$arity$1 ? fexpr__65482.cljs$core$IFn$_invoke$arity$1(G__65483) : fexpr__65482.call(null,G__65483));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65481__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65476_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65476_SHARP_));
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

var map__65494 = shadow.test.env.get_test_ns_info(ns);
var map__65494__$1 = cljs.core.__destructure_map(map__65494);
var test_ns = map__65494__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65494__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65496,vars){
var map__65497 = p__65496;
var map__65497__$1 = cljs.core.__destructure_map(map__65497);
var env = map__65497__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65498_65634 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65500_65635 = null;
var count__65501_65636 = (0);
var i__65502_65637 = (0);
while(true){
if((i__65502_65637 < count__65501_65636)){
var vec__65520_65638 = chunk__65500_65635.cljs$core$IIndexed$_nth$arity$2(null,i__65502_65637);
var test_ns_65639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65520_65638,(0),null);
var ns_info_65640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65520_65638,(1),null);
var map__65524_65641 = ns_info_65640;
var map__65524_65642__$1 = cljs.core.__destructure_map(map__65524_65641);
var fixtures_65643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524_65642__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65646 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65643);
if(cljs.core.truth_(temp__5825__auto___65646)){
var fix_65647 = temp__5825__auto___65646;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65639,fix_65647], 0));
} else {
}

var temp__5825__auto___65652 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65643);
if(cljs.core.truth_(temp__5825__auto___65652)){
var fix_65653 = temp__5825__auto___65652;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65639,fix_65653], 0));
} else {
}


var G__65654 = seq__65498_65634;
var G__65655 = chunk__65500_65635;
var G__65656 = count__65501_65636;
var G__65657 = (i__65502_65637 + (1));
seq__65498_65634 = G__65654;
chunk__65500_65635 = G__65655;
count__65501_65636 = G__65656;
i__65502_65637 = G__65657;
continue;
} else {
var temp__5825__auto___65658 = cljs.core.seq(seq__65498_65634);
if(temp__5825__auto___65658){
var seq__65498_65659__$1 = temp__5825__auto___65658;
if(cljs.core.chunked_seq_QMARK_(seq__65498_65659__$1)){
var c__5548__auto___65660 = cljs.core.chunk_first(seq__65498_65659__$1);
var G__65661 = cljs.core.chunk_rest(seq__65498_65659__$1);
var G__65662 = c__5548__auto___65660;
var G__65663 = cljs.core.count(c__5548__auto___65660);
var G__65664 = (0);
seq__65498_65634 = G__65661;
chunk__65500_65635 = G__65662;
count__65501_65636 = G__65663;
i__65502_65637 = G__65664;
continue;
} else {
var vec__65525_65665 = cljs.core.first(seq__65498_65659__$1);
var test_ns_65666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65525_65665,(0),null);
var ns_info_65667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65525_65665,(1),null);
var map__65528_65668 = ns_info_65667;
var map__65528_65669__$1 = cljs.core.__destructure_map(map__65528_65668);
var fixtures_65670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65528_65669__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65671__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65670);
if(cljs.core.truth_(temp__5825__auto___65671__$1)){
var fix_65672 = temp__5825__auto___65671__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65666,fix_65672], 0));
} else {
}

var temp__5825__auto___65673__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65670);
if(cljs.core.truth_(temp__5825__auto___65673__$1)){
var fix_65674 = temp__5825__auto___65673__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65666,fix_65674], 0));
} else {
}


var G__65675 = cljs.core.next(seq__65498_65659__$1);
var G__65676 = null;
var G__65677 = (0);
var G__65678 = (0);
seq__65498_65634 = G__65675;
chunk__65500_65635 = G__65676;
count__65501_65636 = G__65677;
i__65502_65637 = G__65678;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65495_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65495_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65535 = cljs.test.get_current_env();
var map__65535__$1 = cljs.core.__destructure_map(map__65535);
var env = map__65535__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65538 = arguments.length;
switch (G__65538) {
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
var G__65546 = arguments.length;
switch (G__65546) {
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
var map__65548 = shadow.test.env.get_test_ns_info(ns);
var map__65548__$1 = cljs.core.__destructure_map(map__65548);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65551 = arguments.length;
switch (G__65551) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65549_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65549_SHARP_)));
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
var G__65588 = arguments.length;
switch (G__65588) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65583_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65583_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
