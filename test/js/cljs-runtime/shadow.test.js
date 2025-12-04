goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65434){
var vec__65435 = p__65434;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65438 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65438__$1 = (((G__65438 instanceof cljs.core.Keyword))?G__65438.fqn:null);
switch (G__65438__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65440 = (function (){
var seq__65441 = cljs.core.seq(vars__$1);
var chunk__65442 = null;
var count__65443 = (0);
var i__65444 = (0);
while(true){
if((i__65444 < count__65443)){
var v = chunk__65442.cljs$core$IIndexed$_nth$arity$2(null,i__65444);
var temp__5825__auto___65527 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65527)){
var t_65528 = temp__5825__auto___65527;
var G__65447_65529 = ((function (seq__65441,chunk__65442,count__65443,i__65444,t_65528,temp__5825__auto___65527,v,each_fixture_fn,G__65438,G__65438__$1,env,once_fixtures,each_fixtures,vec__65435,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65528)));
});})(seq__65441,chunk__65442,count__65443,i__65444,t_65528,temp__5825__auto___65527,v,each_fixture_fn,G__65438,G__65438__$1,env,once_fixtures,each_fixtures,vec__65435,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65447_65529) : each_fixture_fn.call(null,G__65447_65529));
} else {
}


var G__65530 = seq__65441;
var G__65531 = chunk__65442;
var G__65532 = count__65443;
var G__65533 = (i__65444 + (1));
seq__65441 = G__65530;
chunk__65442 = G__65531;
count__65443 = G__65532;
i__65444 = G__65533;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65441);
if(temp__5825__auto__){
var seq__65441__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65441__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65441__$1);
var G__65534 = cljs.core.chunk_rest(seq__65441__$1);
var G__65535 = c__5548__auto__;
var G__65536 = cljs.core.count(c__5548__auto__);
var G__65537 = (0);
seq__65441 = G__65534;
chunk__65442 = G__65535;
count__65443 = G__65536;
i__65444 = G__65537;
continue;
} else {
var v = cljs.core.first(seq__65441__$1);
var temp__5825__auto___65538__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65538__$1)){
var t_65539 = temp__5825__auto___65538__$1;
var G__65448_65540 = ((function (seq__65441,chunk__65442,count__65443,i__65444,t_65539,temp__5825__auto___65538__$1,v,seq__65441__$1,temp__5825__auto__,each_fixture_fn,G__65438,G__65438__$1,env,once_fixtures,each_fixtures,vec__65435,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65539)));
});})(seq__65441,chunk__65442,count__65443,i__65444,t_65539,temp__5825__auto___65538__$1,v,seq__65441__$1,temp__5825__auto__,each_fixture_fn,G__65438,G__65438__$1,env,once_fixtures,each_fixtures,vec__65435,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65448_65540) : each_fixture_fn.call(null,G__65448_65540));
} else {
}


var G__65541 = cljs.core.next(seq__65441__$1);
var G__65542 = null;
var G__65543 = (0);
var G__65544 = (0);
seq__65441 = G__65541;
chunk__65442 = G__65542;
count__65443 = G__65543;
i__65444 = G__65544;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65439 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65439.cljs$core$IFn$_invoke$arity$1 ? fexpr__65439.cljs$core$IFn$_invoke$arity$1(G__65440) : fexpr__65439.call(null,G__65440));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65438__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65433_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65433_SHARP_));
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

var map__65450 = shadow.test.env.get_test_ns_info(ns);
var map__65450__$1 = cljs.core.__destructure_map(map__65450);
var test_ns = map__65450__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65450__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65453,vars){
var map__65454 = p__65453;
var map__65454__$1 = cljs.core.__destructure_map(map__65454);
var env = map__65454__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65454__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65455_65557 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65457_65558 = null;
var count__65458_65559 = (0);
var i__65459_65560 = (0);
while(true){
if((i__65459_65560 < count__65458_65559)){
var vec__65472_65561 = chunk__65457_65558.cljs$core$IIndexed$_nth$arity$2(null,i__65459_65560);
var test_ns_65562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65472_65561,(0),null);
var ns_info_65563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65472_65561,(1),null);
var map__65475_65564 = ns_info_65563;
var map__65475_65565__$1 = cljs.core.__destructure_map(map__65475_65564);
var fixtures_65566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475_65565__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65567 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65566);
if(cljs.core.truth_(temp__5825__auto___65567)){
var fix_65568 = temp__5825__auto___65567;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65562,fix_65568], 0));
} else {
}

var temp__5825__auto___65569 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65566);
if(cljs.core.truth_(temp__5825__auto___65569)){
var fix_65570 = temp__5825__auto___65569;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65562,fix_65570], 0));
} else {
}


var G__65571 = seq__65455_65557;
var G__65572 = chunk__65457_65558;
var G__65573 = count__65458_65559;
var G__65574 = (i__65459_65560 + (1));
seq__65455_65557 = G__65571;
chunk__65457_65558 = G__65572;
count__65458_65559 = G__65573;
i__65459_65560 = G__65574;
continue;
} else {
var temp__5825__auto___65575 = cljs.core.seq(seq__65455_65557);
if(temp__5825__auto___65575){
var seq__65455_65576__$1 = temp__5825__auto___65575;
if(cljs.core.chunked_seq_QMARK_(seq__65455_65576__$1)){
var c__5548__auto___65577 = cljs.core.chunk_first(seq__65455_65576__$1);
var G__65579 = cljs.core.chunk_rest(seq__65455_65576__$1);
var G__65580 = c__5548__auto___65577;
var G__65581 = cljs.core.count(c__5548__auto___65577);
var G__65582 = (0);
seq__65455_65557 = G__65579;
chunk__65457_65558 = G__65580;
count__65458_65559 = G__65581;
i__65459_65560 = G__65582;
continue;
} else {
var vec__65476_65584 = cljs.core.first(seq__65455_65576__$1);
var test_ns_65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65476_65584,(0),null);
var ns_info_65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65476_65584,(1),null);
var map__65479_65587 = ns_info_65586;
var map__65479_65588__$1 = cljs.core.__destructure_map(map__65479_65587);
var fixtures_65589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_65588__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65590__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65589);
if(cljs.core.truth_(temp__5825__auto___65590__$1)){
var fix_65591 = temp__5825__auto___65590__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65585,fix_65591], 0));
} else {
}

var temp__5825__auto___65592__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65589);
if(cljs.core.truth_(temp__5825__auto___65592__$1)){
var fix_65593 = temp__5825__auto___65592__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65585,fix_65593], 0));
} else {
}


var G__65594 = cljs.core.next(seq__65455_65576__$1);
var G__65595 = null;
var G__65596 = (0);
var G__65597 = (0);
seq__65455_65557 = G__65594;
chunk__65457_65558 = G__65595;
count__65458_65559 = G__65596;
i__65459_65560 = G__65597;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65452_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65452_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65480 = cljs.test.get_current_env();
var map__65480__$1 = cljs.core.__destructure_map(map__65480);
var env = map__65480__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65480__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65480__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65487 = arguments.length;
switch (G__65487) {
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
var G__65489 = arguments.length;
switch (G__65489) {
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
var map__65490 = shadow.test.env.get_test_ns_info(ns);
var map__65490__$1 = cljs.core.__destructure_map(map__65490);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65490__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65503 = arguments.length;
switch (G__65503) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65501_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65501_SHARP_)));
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
var G__65517 = arguments.length;
switch (G__65517) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65515_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65515_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
