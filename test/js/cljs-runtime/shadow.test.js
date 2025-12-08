goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65464){
var vec__65465 = p__65464;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65465,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65465,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65468 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65468__$1 = (((G__65468 instanceof cljs.core.Keyword))?G__65468.fqn:null);
switch (G__65468__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65471 = (function (){
var seq__65472 = cljs.core.seq(vars__$1);
var chunk__65473 = null;
var count__65474 = (0);
var i__65475 = (0);
while(true){
if((i__65475 < count__65474)){
var v = chunk__65473.cljs$core$IIndexed$_nth$arity$2(null,i__65475);
var temp__5825__auto___65558 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65558)){
var t_65559 = temp__5825__auto___65558;
var G__65484_65560 = ((function (seq__65472,chunk__65473,count__65474,i__65475,t_65559,temp__5825__auto___65558,v,each_fixture_fn,G__65468,G__65468__$1,env,once_fixtures,each_fixtures,vec__65465,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65559)));
});})(seq__65472,chunk__65473,count__65474,i__65475,t_65559,temp__5825__auto___65558,v,each_fixture_fn,G__65468,G__65468__$1,env,once_fixtures,each_fixtures,vec__65465,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65484_65560) : each_fixture_fn.call(null,G__65484_65560));
} else {
}


var G__65561 = seq__65472;
var G__65562 = chunk__65473;
var G__65563 = count__65474;
var G__65564 = (i__65475 + (1));
seq__65472 = G__65561;
chunk__65473 = G__65562;
count__65474 = G__65563;
i__65475 = G__65564;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65472);
if(temp__5825__auto__){
var seq__65472__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65472__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65472__$1);
var G__65565 = cljs.core.chunk_rest(seq__65472__$1);
var G__65566 = c__5548__auto__;
var G__65567 = cljs.core.count(c__5548__auto__);
var G__65568 = (0);
seq__65472 = G__65565;
chunk__65473 = G__65566;
count__65474 = G__65567;
i__65475 = G__65568;
continue;
} else {
var v = cljs.core.first(seq__65472__$1);
var temp__5825__auto___65569__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65569__$1)){
var t_65570 = temp__5825__auto___65569__$1;
var G__65489_65571 = ((function (seq__65472,chunk__65473,count__65474,i__65475,t_65570,temp__5825__auto___65569__$1,v,seq__65472__$1,temp__5825__auto__,each_fixture_fn,G__65468,G__65468__$1,env,once_fixtures,each_fixtures,vec__65465,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65570)));
});})(seq__65472,chunk__65473,count__65474,i__65475,t_65570,temp__5825__auto___65569__$1,v,seq__65472__$1,temp__5825__auto__,each_fixture_fn,G__65468,G__65468__$1,env,once_fixtures,each_fixtures,vec__65465,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65489_65571) : each_fixture_fn.call(null,G__65489_65571));
} else {
}


var G__65572 = cljs.core.next(seq__65472__$1);
var G__65573 = null;
var G__65574 = (0);
var G__65575 = (0);
seq__65472 = G__65572;
chunk__65473 = G__65573;
count__65474 = G__65574;
i__65475 = G__65575;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65470 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65470.cljs$core$IFn$_invoke$arity$1 ? fexpr__65470.cljs$core$IFn$_invoke$arity$1(G__65471) : fexpr__65470.call(null,G__65471));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65468__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65462_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65462_SHARP_));
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
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65502,vars){
var map__65503 = p__65502;
var map__65503__$1 = cljs.core.__destructure_map(map__65503);
var env = map__65503__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65505_65578 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65507_65579 = null;
var count__65508_65580 = (0);
var i__65509_65581 = (0);
while(true){
if((i__65509_65581 < count__65508_65580)){
var vec__65522_65582 = chunk__65507_65579.cljs$core$IIndexed$_nth$arity$2(null,i__65509_65581);
var test_ns_65583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65522_65582,(0),null);
var ns_info_65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65522_65582,(1),null);
var map__65526_65585 = ns_info_65584;
var map__65526_65586__$1 = cljs.core.__destructure_map(map__65526_65585);
var fixtures_65587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526_65586__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65588 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65587);
if(cljs.core.truth_(temp__5825__auto___65588)){
var fix_65589 = temp__5825__auto___65588;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65583,fix_65589], 0));
} else {
}

var temp__5825__auto___65590 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65587);
if(cljs.core.truth_(temp__5825__auto___65590)){
var fix_65591 = temp__5825__auto___65590;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65583,fix_65591], 0));
} else {
}


var G__65592 = seq__65505_65578;
var G__65593 = chunk__65507_65579;
var G__65594 = count__65508_65580;
var G__65595 = (i__65509_65581 + (1));
seq__65505_65578 = G__65592;
chunk__65507_65579 = G__65593;
count__65508_65580 = G__65594;
i__65509_65581 = G__65595;
continue;
} else {
var temp__5825__auto___65596 = cljs.core.seq(seq__65505_65578);
if(temp__5825__auto___65596){
var seq__65505_65597__$1 = temp__5825__auto___65596;
if(cljs.core.chunked_seq_QMARK_(seq__65505_65597__$1)){
var c__5548__auto___65598 = cljs.core.chunk_first(seq__65505_65597__$1);
var G__65599 = cljs.core.chunk_rest(seq__65505_65597__$1);
var G__65600 = c__5548__auto___65598;
var G__65601 = cljs.core.count(c__5548__auto___65598);
var G__65602 = (0);
seq__65505_65578 = G__65599;
chunk__65507_65579 = G__65600;
count__65508_65580 = G__65601;
i__65509_65581 = G__65602;
continue;
} else {
var vec__65528_65603 = cljs.core.first(seq__65505_65597__$1);
var test_ns_65604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65528_65603,(0),null);
var ns_info_65605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65528_65603,(1),null);
var map__65532_65606 = ns_info_65605;
var map__65532_65607__$1 = cljs.core.__destructure_map(map__65532_65606);
var fixtures_65608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532_65607__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65609__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65608);
if(cljs.core.truth_(temp__5825__auto___65609__$1)){
var fix_65610 = temp__5825__auto___65609__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65604,fix_65610], 0));
} else {
}

var temp__5825__auto___65611__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65608);
if(cljs.core.truth_(temp__5825__auto___65611__$1)){
var fix_65612 = temp__5825__auto___65611__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65604,fix_65612], 0));
} else {
}


var G__65613 = cljs.core.next(seq__65505_65597__$1);
var G__65614 = null;
var G__65615 = (0);
var G__65616 = (0);
seq__65505_65578 = G__65613;
chunk__65507_65579 = G__65614;
count__65508_65580 = G__65615;
i__65509_65581 = G__65616;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65500_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65500_SHARP_));
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
var G__65537 = arguments.length;
switch (G__65537) {
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
var G__65542 = arguments.length;
switch (G__65542) {
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
var map__65543 = shadow.test.env.get_test_ns_info(ns);
var map__65543__$1 = cljs.core.__destructure_map(map__65543);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65548 = arguments.length;
switch (G__65548) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65544_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65544_SHARP_)));
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
var G__65552 = arguments.length;
switch (G__65552) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65550_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65550_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
