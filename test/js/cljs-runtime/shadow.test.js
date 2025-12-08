goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65467){
var vec__65468 = p__65467;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65468,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65468,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65479 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65479__$1 = (((G__65479 instanceof cljs.core.Keyword))?G__65479.fqn:null);
switch (G__65479__$1) {
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
var temp__5825__auto___65553 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65553)){
var t_65554 = temp__5825__auto___65553;
var G__65494_65555 = ((function (seq__65484,chunk__65485,count__65486,i__65487,t_65554,temp__5825__auto___65553,v,each_fixture_fn,G__65479,G__65479__$1,env,once_fixtures,each_fixtures,vec__65468,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65554)));
});})(seq__65484,chunk__65485,count__65486,i__65487,t_65554,temp__5825__auto___65553,v,each_fixture_fn,G__65479,G__65479__$1,env,once_fixtures,each_fixtures,vec__65468,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65494_65555) : each_fixture_fn.call(null,G__65494_65555));
} else {
}


var G__65556 = seq__65484;
var G__65557 = chunk__65485;
var G__65558 = count__65486;
var G__65559 = (i__65487 + (1));
seq__65484 = G__65556;
chunk__65485 = G__65557;
count__65486 = G__65558;
i__65487 = G__65559;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65484);
if(temp__5825__auto__){
var seq__65484__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65484__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65484__$1);
var G__65562 = cljs.core.chunk_rest(seq__65484__$1);
var G__65563 = c__5548__auto__;
var G__65564 = cljs.core.count(c__5548__auto__);
var G__65565 = (0);
seq__65484 = G__65562;
chunk__65485 = G__65563;
count__65486 = G__65564;
i__65487 = G__65565;
continue;
} else {
var v = cljs.core.first(seq__65484__$1);
var temp__5825__auto___65568__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65568__$1)){
var t_65570 = temp__5825__auto___65568__$1;
var G__65495_65571 = ((function (seq__65484,chunk__65485,count__65486,i__65487,t_65570,temp__5825__auto___65568__$1,v,seq__65484__$1,temp__5825__auto__,each_fixture_fn,G__65479,G__65479__$1,env,once_fixtures,each_fixtures,vec__65468,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65570)));
});})(seq__65484,chunk__65485,count__65486,i__65487,t_65570,temp__5825__auto___65568__$1,v,seq__65484__$1,temp__5825__auto__,each_fixture_fn,G__65479,G__65479__$1,env,once_fixtures,each_fixtures,vec__65468,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65495_65571) : each_fixture_fn.call(null,G__65495_65571));
} else {
}


var G__65573 = cljs.core.next(seq__65484__$1);
var G__65574 = null;
var G__65575 = (0);
var G__65576 = (0);
seq__65484 = G__65573;
chunk__65485 = G__65574;
count__65486 = G__65575;
i__65487 = G__65576;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65479__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65466_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65466_SHARP_));
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

var map__65496 = shadow.test.env.get_test_ns_info(ns);
var map__65496__$1 = cljs.core.__destructure_map(map__65496);
var test_ns = map__65496__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65496__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65498,vars){
var map__65499 = p__65498;
var map__65499__$1 = cljs.core.__destructure_map(map__65499);
var env = map__65499__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65500_65578 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65502_65579 = null;
var count__65503_65580 = (0);
var i__65504_65581 = (0);
while(true){
if((i__65504_65581 < count__65503_65580)){
var vec__65516_65582 = chunk__65502_65579.cljs$core$IIndexed$_nth$arity$2(null,i__65504_65581);
var test_ns_65583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65516_65582,(0),null);
var ns_info_65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65516_65582,(1),null);
var map__65519_65586 = ns_info_65584;
var map__65519_65587__$1 = cljs.core.__destructure_map(map__65519_65586);
var fixtures_65588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65519_65587__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65589 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65588);
if(cljs.core.truth_(temp__5825__auto___65589)){
var fix_65590 = temp__5825__auto___65589;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65583,fix_65590], 0));
} else {
}

var temp__5825__auto___65593 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65588);
if(cljs.core.truth_(temp__5825__auto___65593)){
var fix_65594 = temp__5825__auto___65593;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65583,fix_65594], 0));
} else {
}


var G__65595 = seq__65500_65578;
var G__65596 = chunk__65502_65579;
var G__65597 = count__65503_65580;
var G__65598 = (i__65504_65581 + (1));
seq__65500_65578 = G__65595;
chunk__65502_65579 = G__65596;
count__65503_65580 = G__65597;
i__65504_65581 = G__65598;
continue;
} else {
var temp__5825__auto___65600 = cljs.core.seq(seq__65500_65578);
if(temp__5825__auto___65600){
var seq__65500_65601__$1 = temp__5825__auto___65600;
if(cljs.core.chunked_seq_QMARK_(seq__65500_65601__$1)){
var c__5548__auto___65602 = cljs.core.chunk_first(seq__65500_65601__$1);
var G__65603 = cljs.core.chunk_rest(seq__65500_65601__$1);
var G__65604 = c__5548__auto___65602;
var G__65605 = cljs.core.count(c__5548__auto___65602);
var G__65606 = (0);
seq__65500_65578 = G__65603;
chunk__65502_65579 = G__65604;
count__65503_65580 = G__65605;
i__65504_65581 = G__65606;
continue;
} else {
var vec__65522_65608 = cljs.core.first(seq__65500_65601__$1);
var test_ns_65609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65522_65608,(0),null);
var ns_info_65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65522_65608,(1),null);
var map__65525_65611 = ns_info_65610;
var map__65525_65612__$1 = cljs.core.__destructure_map(map__65525_65611);
var fixtures_65613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65525_65612__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65614__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65613);
if(cljs.core.truth_(temp__5825__auto___65614__$1)){
var fix_65615 = temp__5825__auto___65614__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65609,fix_65615], 0));
} else {
}

var temp__5825__auto___65616__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65613);
if(cljs.core.truth_(temp__5825__auto___65616__$1)){
var fix_65617 = temp__5825__auto___65616__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65609,fix_65617], 0));
} else {
}


var G__65618 = cljs.core.next(seq__65500_65601__$1);
var G__65619 = null;
var G__65620 = (0);
var G__65621 = (0);
seq__65500_65578 = G__65618;
chunk__65502_65579 = G__65619;
count__65503_65580 = G__65620;
i__65504_65581 = G__65621;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65497_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65497_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65526 = cljs.test.get_current_env();
var map__65526__$1 = cljs.core.__destructure_map(map__65526);
var env = map__65526__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65532 = arguments.length;
switch (G__65532) {
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
var G__65536 = arguments.length;
switch (G__65536) {
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
var map__65539 = shadow.test.env.get_test_ns_info(ns);
var map__65539__$1 = cljs.core.__destructure_map(map__65539);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65539__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65542 = arguments.length;
switch (G__65542) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65540_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65540_SHARP_)));
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
var G__65547 = arguments.length;
switch (G__65547) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65545_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65545_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
