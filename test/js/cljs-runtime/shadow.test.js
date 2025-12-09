goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68348){
var vec__68349 = p__68348;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68349,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68349,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__68352 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__68352__$1 = (((G__68352 instanceof cljs.core.Keyword))?G__68352.fqn:null);
switch (G__68352__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__68356 = (function (){
var seq__68357 = cljs.core.seq(vars__$1);
var chunk__68358 = null;
var count__68359 = (0);
var i__68360 = (0);
while(true){
if((i__68360 < count__68359)){
var v = chunk__68358.cljs$core$IIndexed$_nth$arity$2(null,i__68360);
var temp__5825__auto___68446 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68446)){
var t_68447 = temp__5825__auto___68446;
var G__68372_68448 = ((function (seq__68357,chunk__68358,count__68359,i__68360,t_68447,temp__5825__auto___68446,v,each_fixture_fn,G__68352,G__68352__$1,env,once_fixtures,each_fixtures,vec__68349,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68447)));
});})(seq__68357,chunk__68358,count__68359,i__68360,t_68447,temp__5825__auto___68446,v,each_fixture_fn,G__68352,G__68352__$1,env,once_fixtures,each_fixtures,vec__68349,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68372_68448) : each_fixture_fn.call(null,G__68372_68448));
} else {
}


var G__68449 = seq__68357;
var G__68450 = chunk__68358;
var G__68451 = count__68359;
var G__68452 = (i__68360 + (1));
seq__68357 = G__68449;
chunk__68358 = G__68450;
count__68359 = G__68451;
i__68360 = G__68452;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68357);
if(temp__5825__auto__){
var seq__68357__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68357__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68357__$1);
var G__68453 = cljs.core.chunk_rest(seq__68357__$1);
var G__68454 = c__5548__auto__;
var G__68455 = cljs.core.count(c__5548__auto__);
var G__68456 = (0);
seq__68357 = G__68453;
chunk__68358 = G__68454;
count__68359 = G__68455;
i__68360 = G__68456;
continue;
} else {
var v = cljs.core.first(seq__68357__$1);
var temp__5825__auto___68457__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68457__$1)){
var t_68459 = temp__5825__auto___68457__$1;
var G__68376_68460 = ((function (seq__68357,chunk__68358,count__68359,i__68360,t_68459,temp__5825__auto___68457__$1,v,seq__68357__$1,temp__5825__auto__,each_fixture_fn,G__68352,G__68352__$1,env,once_fixtures,each_fixtures,vec__68349,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68459)));
});})(seq__68357,chunk__68358,count__68359,i__68360,t_68459,temp__5825__auto___68457__$1,v,seq__68357__$1,temp__5825__auto__,each_fixture_fn,G__68352,G__68352__$1,env,once_fixtures,each_fixtures,vec__68349,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68376_68460) : each_fixture_fn.call(null,G__68376_68460));
} else {
}


var G__68462 = cljs.core.next(seq__68357__$1);
var G__68463 = null;
var G__68464 = (0);
var G__68465 = (0);
seq__68357 = G__68462;
chunk__68358 = G__68463;
count__68359 = G__68464;
i__68360 = G__68465;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__68355 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__68355.cljs$core$IFn$_invoke$arity$1 ? fexpr__68355.cljs$core$IFn$_invoke$arity$1(G__68356) : fexpr__68355.call(null,G__68356));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68352__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__68347_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68347_SHARP_));
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

var map__68378 = shadow.test.env.get_test_ns_info(ns);
var map__68378__$1 = cljs.core.__destructure_map(map__68378);
var test_ns = map__68378__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__68381,vars){
var map__68382 = p__68381;
var map__68382__$1 = cljs.core.__destructure_map(map__68382);
var env = map__68382__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68382__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__68383_68466 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__68386_68467 = null;
var count__68387_68468 = (0);
var i__68388_68469 = (0);
while(true){
if((i__68388_68469 < count__68387_68468)){
var vec__68401_68471 = chunk__68386_68467.cljs$core$IIndexed$_nth$arity$2(null,i__68388_68469);
var test_ns_68472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401_68471,(0),null);
var ns_info_68473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401_68471,(1),null);
var map__68405_68474 = ns_info_68473;
var map__68405_68475__$1 = cljs.core.__destructure_map(map__68405_68474);
var fixtures_68476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405_68475__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68478 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68476);
if(cljs.core.truth_(temp__5825__auto___68478)){
var fix_68479 = temp__5825__auto___68478;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68472,fix_68479], 0));
} else {
}

var temp__5825__auto___68480 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68476);
if(cljs.core.truth_(temp__5825__auto___68480)){
var fix_68481 = temp__5825__auto___68480;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68472,fix_68481], 0));
} else {
}


var G__68482 = seq__68383_68466;
var G__68483 = chunk__68386_68467;
var G__68484 = count__68387_68468;
var G__68485 = (i__68388_68469 + (1));
seq__68383_68466 = G__68482;
chunk__68386_68467 = G__68483;
count__68387_68468 = G__68484;
i__68388_68469 = G__68485;
continue;
} else {
var temp__5825__auto___68486 = cljs.core.seq(seq__68383_68466);
if(temp__5825__auto___68486){
var seq__68383_68487__$1 = temp__5825__auto___68486;
if(cljs.core.chunked_seq_QMARK_(seq__68383_68487__$1)){
var c__5548__auto___68488 = cljs.core.chunk_first(seq__68383_68487__$1);
var G__68489 = cljs.core.chunk_rest(seq__68383_68487__$1);
var G__68490 = c__5548__auto___68488;
var G__68491 = cljs.core.count(c__5548__auto___68488);
var G__68492 = (0);
seq__68383_68466 = G__68489;
chunk__68386_68467 = G__68490;
count__68387_68468 = G__68491;
i__68388_68469 = G__68492;
continue;
} else {
var vec__68407_68493 = cljs.core.first(seq__68383_68487__$1);
var test_ns_68494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68407_68493,(0),null);
var ns_info_68495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68407_68493,(1),null);
var map__68411_68496 = ns_info_68495;
var map__68411_68497__$1 = cljs.core.__destructure_map(map__68411_68496);
var fixtures_68498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68411_68497__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68499__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68498);
if(cljs.core.truth_(temp__5825__auto___68499__$1)){
var fix_68500 = temp__5825__auto___68499__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68494,fix_68500], 0));
} else {
}

var temp__5825__auto___68501__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68498);
if(cljs.core.truth_(temp__5825__auto___68501__$1)){
var fix_68502 = temp__5825__auto___68501__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68494,fix_68502], 0));
} else {
}


var G__68503 = cljs.core.next(seq__68383_68487__$1);
var G__68504 = null;
var G__68505 = (0);
var G__68506 = (0);
seq__68383_68466 = G__68503;
chunk__68386_68467 = G__68504;
count__68387_68468 = G__68505;
i__68388_68469 = G__68506;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68380_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68380_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__68415 = cljs.test.get_current_env();
var map__68415__$1 = cljs.core.__destructure_map(map__68415);
var env = map__68415__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__68417 = arguments.length;
switch (G__68417) {
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
var G__68421 = arguments.length;
switch (G__68421) {
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
var map__68424 = shadow.test.env.get_test_ns_info(ns);
var map__68424__$1 = cljs.core.__destructure_map(map__68424);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68424__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__68432 = arguments.length;
switch (G__68432) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68425_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68425_SHARP_)));
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
var G__68441 = arguments.length;
switch (G__68441) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68433_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68433_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
