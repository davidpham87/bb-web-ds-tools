goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65539){
var vec__65540 = p__65539;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65540,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65540,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65543 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65543__$1 = (((G__65543 instanceof cljs.core.Keyword))?G__65543.fqn:null);
switch (G__65543__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65545 = (function (){
var seq__65546 = cljs.core.seq(vars__$1);
var chunk__65547 = null;
var count__65548 = (0);
var i__65549 = (0);
while(true){
if((i__65549 < count__65548)){
var v = chunk__65547.cljs$core$IIndexed$_nth$arity$2(null,i__65549);
var temp__5825__auto___65609 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65609)){
var t_65610 = temp__5825__auto___65609;
var G__65552_65611 = ((function (seq__65546,chunk__65547,count__65548,i__65549,t_65610,temp__5825__auto___65609,v,each_fixture_fn,G__65543,G__65543__$1,env,once_fixtures,each_fixtures,vec__65540,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65610)));
});})(seq__65546,chunk__65547,count__65548,i__65549,t_65610,temp__5825__auto___65609,v,each_fixture_fn,G__65543,G__65543__$1,env,once_fixtures,each_fixtures,vec__65540,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65552_65611) : each_fixture_fn.call(null,G__65552_65611));
} else {
}


var G__65612 = seq__65546;
var G__65613 = chunk__65547;
var G__65614 = count__65548;
var G__65615 = (i__65549 + (1));
seq__65546 = G__65612;
chunk__65547 = G__65613;
count__65548 = G__65614;
i__65549 = G__65615;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65546);
if(temp__5825__auto__){
var seq__65546__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65546__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65546__$1);
var G__65617 = cljs.core.chunk_rest(seq__65546__$1);
var G__65618 = c__5548__auto__;
var G__65619 = cljs.core.count(c__5548__auto__);
var G__65620 = (0);
seq__65546 = G__65617;
chunk__65547 = G__65618;
count__65548 = G__65619;
i__65549 = G__65620;
continue;
} else {
var v = cljs.core.first(seq__65546__$1);
var temp__5825__auto___65621__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65621__$1)){
var t_65623 = temp__5825__auto___65621__$1;
var G__65553_65624 = ((function (seq__65546,chunk__65547,count__65548,i__65549,t_65623,temp__5825__auto___65621__$1,v,seq__65546__$1,temp__5825__auto__,each_fixture_fn,G__65543,G__65543__$1,env,once_fixtures,each_fixtures,vec__65540,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65623)));
});})(seq__65546,chunk__65547,count__65548,i__65549,t_65623,temp__5825__auto___65621__$1,v,seq__65546__$1,temp__5825__auto__,each_fixture_fn,G__65543,G__65543__$1,env,once_fixtures,each_fixtures,vec__65540,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65553_65624) : each_fixture_fn.call(null,G__65553_65624));
} else {
}


var G__65625 = cljs.core.next(seq__65546__$1);
var G__65626 = null;
var G__65627 = (0);
var G__65628 = (0);
seq__65546 = G__65625;
chunk__65547 = G__65626;
count__65548 = G__65627;
i__65549 = G__65628;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65544 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65544.cljs$core$IFn$_invoke$arity$1 ? fexpr__65544.cljs$core$IFn$_invoke$arity$1(G__65545) : fexpr__65544.call(null,G__65545));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65543__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65538_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65538_SHARP_));
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

var map__65554 = shadow.test.env.get_test_ns_info(ns);
var map__65554__$1 = cljs.core.__destructure_map(map__65554);
var test_ns = map__65554__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65554__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65556,vars){
var map__65557 = p__65556;
var map__65557__$1 = cljs.core.__destructure_map(map__65557);
var env = map__65557__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65557__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65558_65629 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65560_65630 = null;
var count__65561_65631 = (0);
var i__65562_65632 = (0);
while(true){
if((i__65562_65632 < count__65561_65631)){
var vec__65572_65633 = chunk__65560_65630.cljs$core$IIndexed$_nth$arity$2(null,i__65562_65632);
var test_ns_65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65572_65633,(0),null);
var ns_info_65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65572_65633,(1),null);
var map__65575_65636 = ns_info_65635;
var map__65575_65637__$1 = cljs.core.__destructure_map(map__65575_65636);
var fixtures_65638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65575_65637__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65639 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65638);
if(cljs.core.truth_(temp__5825__auto___65639)){
var fix_65640 = temp__5825__auto___65639;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65634,fix_65640], 0));
} else {
}

var temp__5825__auto___65642 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65638);
if(cljs.core.truth_(temp__5825__auto___65642)){
var fix_65643 = temp__5825__auto___65642;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65634,fix_65643], 0));
} else {
}


var G__65644 = seq__65558_65629;
var G__65645 = chunk__65560_65630;
var G__65646 = count__65561_65631;
var G__65647 = (i__65562_65632 + (1));
seq__65558_65629 = G__65644;
chunk__65560_65630 = G__65645;
count__65561_65631 = G__65646;
i__65562_65632 = G__65647;
continue;
} else {
var temp__5825__auto___65648 = cljs.core.seq(seq__65558_65629);
if(temp__5825__auto___65648){
var seq__65558_65649__$1 = temp__5825__auto___65648;
if(cljs.core.chunked_seq_QMARK_(seq__65558_65649__$1)){
var c__5548__auto___65651 = cljs.core.chunk_first(seq__65558_65649__$1);
var G__65652 = cljs.core.chunk_rest(seq__65558_65649__$1);
var G__65653 = c__5548__auto___65651;
var G__65654 = cljs.core.count(c__5548__auto___65651);
var G__65655 = (0);
seq__65558_65629 = G__65652;
chunk__65560_65630 = G__65653;
count__65561_65631 = G__65654;
i__65562_65632 = G__65655;
continue;
} else {
var vec__65577_65656 = cljs.core.first(seq__65558_65649__$1);
var test_ns_65657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65577_65656,(0),null);
var ns_info_65658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65577_65656,(1),null);
var map__65581_65659 = ns_info_65658;
var map__65581_65660__$1 = cljs.core.__destructure_map(map__65581_65659);
var fixtures_65661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65581_65660__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65662__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65661);
if(cljs.core.truth_(temp__5825__auto___65662__$1)){
var fix_65663 = temp__5825__auto___65662__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65657,fix_65663], 0));
} else {
}

var temp__5825__auto___65664__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65661);
if(cljs.core.truth_(temp__5825__auto___65664__$1)){
var fix_65665 = temp__5825__auto___65664__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65657,fix_65665], 0));
} else {
}


var G__65666 = cljs.core.next(seq__65558_65649__$1);
var G__65667 = null;
var G__65668 = (0);
var G__65669 = (0);
seq__65558_65629 = G__65666;
chunk__65560_65630 = G__65667;
count__65561_65631 = G__65668;
i__65562_65632 = G__65669;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65555_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65555_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65584 = cljs.test.get_current_env();
var map__65584__$1 = cljs.core.__destructure_map(map__65584);
var env = map__65584__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65589 = arguments.length;
switch (G__65589) {
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
var G__65593 = arguments.length;
switch (G__65593) {
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
var map__65595 = shadow.test.env.get_test_ns_info(ns);
var map__65595__$1 = cljs.core.__destructure_map(map__65595);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65599 = arguments.length;
switch (G__65599) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65597_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65597_SHARP_)));
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
var G__65605 = arguments.length;
switch (G__65605) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65603_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65603_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
