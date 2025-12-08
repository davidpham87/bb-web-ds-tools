goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65481){
var vec__65482 = p__65481;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65482,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65482,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65485 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65485__$1 = (((G__65485 instanceof cljs.core.Keyword))?G__65485.fqn:null);
switch (G__65485__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65487 = (function (){
var seq__65488 = cljs.core.seq(vars__$1);
var chunk__65489 = null;
var count__65490 = (0);
var i__65491 = (0);
while(true){
if((i__65491 < count__65490)){
var v = chunk__65489.cljs$core$IIndexed$_nth$arity$2(null,i__65491);
var temp__5825__auto___65540 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65540)){
var t_65541 = temp__5825__auto___65540;
var G__65494_65542 = ((function (seq__65488,chunk__65489,count__65490,i__65491,t_65541,temp__5825__auto___65540,v,each_fixture_fn,G__65485,G__65485__$1,env,once_fixtures,each_fixtures,vec__65482,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65541)));
});})(seq__65488,chunk__65489,count__65490,i__65491,t_65541,temp__5825__auto___65540,v,each_fixture_fn,G__65485,G__65485__$1,env,once_fixtures,each_fixtures,vec__65482,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65494_65542) : each_fixture_fn.call(null,G__65494_65542));
} else {
}


var G__65543 = seq__65488;
var G__65544 = chunk__65489;
var G__65545 = count__65490;
var G__65546 = (i__65491 + (1));
seq__65488 = G__65543;
chunk__65489 = G__65544;
count__65490 = G__65545;
i__65491 = G__65546;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65488);
if(temp__5825__auto__){
var seq__65488__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65488__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65488__$1);
var G__65547 = cljs.core.chunk_rest(seq__65488__$1);
var G__65548 = c__5548__auto__;
var G__65549 = cljs.core.count(c__5548__auto__);
var G__65550 = (0);
seq__65488 = G__65547;
chunk__65489 = G__65548;
count__65490 = G__65549;
i__65491 = G__65550;
continue;
} else {
var v = cljs.core.first(seq__65488__$1);
var temp__5825__auto___65551__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65551__$1)){
var t_65552 = temp__5825__auto___65551__$1;
var G__65495_65553 = ((function (seq__65488,chunk__65489,count__65490,i__65491,t_65552,temp__5825__auto___65551__$1,v,seq__65488__$1,temp__5825__auto__,each_fixture_fn,G__65485,G__65485__$1,env,once_fixtures,each_fixtures,vec__65482,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65552)));
});})(seq__65488,chunk__65489,count__65490,i__65491,t_65552,temp__5825__auto___65551__$1,v,seq__65488__$1,temp__5825__auto__,each_fixture_fn,G__65485,G__65485__$1,env,once_fixtures,each_fixtures,vec__65482,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65495_65553) : each_fixture_fn.call(null,G__65495_65553));
} else {
}


var G__65554 = cljs.core.next(seq__65488__$1);
var G__65555 = null;
var G__65556 = (0);
var G__65557 = (0);
seq__65488 = G__65554;
chunk__65489 = G__65555;
count__65490 = G__65556;
i__65491 = G__65557;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65486 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65486.cljs$core$IFn$_invoke$arity$1 ? fexpr__65486.cljs$core$IFn$_invoke$arity$1(G__65487) : fexpr__65486.call(null,G__65487));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65485__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65480_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65480_SHARP_));
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

var seq__65500_65558 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65502_65559 = null;
var count__65503_65560 = (0);
var i__65504_65561 = (0);
while(true){
if((i__65504_65561 < count__65503_65560)){
var vec__65514_65562 = chunk__65502_65559.cljs$core$IIndexed$_nth$arity$2(null,i__65504_65561);
var test_ns_65563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65514_65562,(0),null);
var ns_info_65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65514_65562,(1),null);
var map__65517_65565 = ns_info_65564;
var map__65517_65566__$1 = cljs.core.__destructure_map(map__65517_65565);
var fixtures_65567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517_65566__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65568 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65567);
if(cljs.core.truth_(temp__5825__auto___65568)){
var fix_65569 = temp__5825__auto___65568;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65563,fix_65569], 0));
} else {
}

var temp__5825__auto___65570 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65567);
if(cljs.core.truth_(temp__5825__auto___65570)){
var fix_65571 = temp__5825__auto___65570;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65563,fix_65571], 0));
} else {
}


var G__65572 = seq__65500_65558;
var G__65573 = chunk__65502_65559;
var G__65574 = count__65503_65560;
var G__65575 = (i__65504_65561 + (1));
seq__65500_65558 = G__65572;
chunk__65502_65559 = G__65573;
count__65503_65560 = G__65574;
i__65504_65561 = G__65575;
continue;
} else {
var temp__5825__auto___65576 = cljs.core.seq(seq__65500_65558);
if(temp__5825__auto___65576){
var seq__65500_65577__$1 = temp__5825__auto___65576;
if(cljs.core.chunked_seq_QMARK_(seq__65500_65577__$1)){
var c__5548__auto___65578 = cljs.core.chunk_first(seq__65500_65577__$1);
var G__65579 = cljs.core.chunk_rest(seq__65500_65577__$1);
var G__65580 = c__5548__auto___65578;
var G__65581 = cljs.core.count(c__5548__auto___65578);
var G__65582 = (0);
seq__65500_65558 = G__65579;
chunk__65502_65559 = G__65580;
count__65503_65560 = G__65581;
i__65504_65561 = G__65582;
continue;
} else {
var vec__65518_65583 = cljs.core.first(seq__65500_65577__$1);
var test_ns_65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65518_65583,(0),null);
var ns_info_65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65518_65583,(1),null);
var map__65521_65586 = ns_info_65585;
var map__65521_65587__$1 = cljs.core.__destructure_map(map__65521_65586);
var fixtures_65588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65521_65587__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65589__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65588);
if(cljs.core.truth_(temp__5825__auto___65589__$1)){
var fix_65590 = temp__5825__auto___65589__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65584,fix_65590], 0));
} else {
}

var temp__5825__auto___65591__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65588);
if(cljs.core.truth_(temp__5825__auto___65591__$1)){
var fix_65592 = temp__5825__auto___65591__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65584,fix_65592], 0));
} else {
}


var G__65593 = cljs.core.next(seq__65500_65577__$1);
var G__65594 = null;
var G__65595 = (0);
var G__65596 = (0);
seq__65500_65558 = G__65593;
chunk__65502_65559 = G__65594;
count__65503_65560 = G__65595;
i__65504_65561 = G__65596;
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
var map__65523 = cljs.test.get_current_env();
var map__65523__$1 = cljs.core.__destructure_map(map__65523);
var env = map__65523__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65526 = arguments.length;
switch (G__65526) {
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
var G__65528 = arguments.length;
switch (G__65528) {
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
var map__65531 = shadow.test.env.get_test_ns_info(ns);
var map__65531__$1 = cljs.core.__destructure_map(map__65531);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65531__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65534 = arguments.length;
switch (G__65534) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65532_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65532_SHARP_)));
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
var G__65537 = arguments.length;
switch (G__65537) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65535_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65535_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
