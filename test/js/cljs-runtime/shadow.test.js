goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65554){
var vec__65555 = p__65554;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65555,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65555,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65558 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65558__$1 = (((G__65558 instanceof cljs.core.Keyword))?G__65558.fqn:null);
switch (G__65558__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65560 = (function (){
var seq__65561 = cljs.core.seq(vars__$1);
var chunk__65562 = null;
var count__65563 = (0);
var i__65564 = (0);
while(true){
if((i__65564 < count__65563)){
var v = chunk__65562.cljs$core$IIndexed$_nth$arity$2(null,i__65564);
var temp__5825__auto___65626 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65626)){
var t_65627 = temp__5825__auto___65626;
var G__65567_65628 = ((function (seq__65561,chunk__65562,count__65563,i__65564,t_65627,temp__5825__auto___65626,v,each_fixture_fn,G__65558,G__65558__$1,env,once_fixtures,each_fixtures,vec__65555,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65627)));
});})(seq__65561,chunk__65562,count__65563,i__65564,t_65627,temp__5825__auto___65626,v,each_fixture_fn,G__65558,G__65558__$1,env,once_fixtures,each_fixtures,vec__65555,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65567_65628) : each_fixture_fn.call(null,G__65567_65628));
} else {
}


var G__65629 = seq__65561;
var G__65630 = chunk__65562;
var G__65631 = count__65563;
var G__65632 = (i__65564 + (1));
seq__65561 = G__65629;
chunk__65562 = G__65630;
count__65563 = G__65631;
i__65564 = G__65632;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65561);
if(temp__5825__auto__){
var seq__65561__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65561__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65561__$1);
var G__65633 = cljs.core.chunk_rest(seq__65561__$1);
var G__65634 = c__5548__auto__;
var G__65635 = cljs.core.count(c__5548__auto__);
var G__65636 = (0);
seq__65561 = G__65633;
chunk__65562 = G__65634;
count__65563 = G__65635;
i__65564 = G__65636;
continue;
} else {
var v = cljs.core.first(seq__65561__$1);
var temp__5825__auto___65637__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65637__$1)){
var t_65638 = temp__5825__auto___65637__$1;
var G__65568_65639 = ((function (seq__65561,chunk__65562,count__65563,i__65564,t_65638,temp__5825__auto___65637__$1,v,seq__65561__$1,temp__5825__auto__,each_fixture_fn,G__65558,G__65558__$1,env,once_fixtures,each_fixtures,vec__65555,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65638)));
});})(seq__65561,chunk__65562,count__65563,i__65564,t_65638,temp__5825__auto___65637__$1,v,seq__65561__$1,temp__5825__auto__,each_fixture_fn,G__65558,G__65558__$1,env,once_fixtures,each_fixtures,vec__65555,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65568_65639) : each_fixture_fn.call(null,G__65568_65639));
} else {
}


var G__65640 = cljs.core.next(seq__65561__$1);
var G__65641 = null;
var G__65642 = (0);
var G__65643 = (0);
seq__65561 = G__65640;
chunk__65562 = G__65641;
count__65563 = G__65642;
i__65564 = G__65643;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65559 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65559.cljs$core$IFn$_invoke$arity$1 ? fexpr__65559.cljs$core$IFn$_invoke$arity$1(G__65560) : fexpr__65559.call(null,G__65560));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65558__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65553_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65553_SHARP_));
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

var map__65571 = shadow.test.env.get_test_ns_info(ns);
var map__65571__$1 = cljs.core.__destructure_map(map__65571);
var test_ns = map__65571__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65571__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65573,vars){
var map__65574 = p__65573;
var map__65574__$1 = cljs.core.__destructure_map(map__65574);
var env = map__65574__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65574__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65575_65645 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65577_65646 = null;
var count__65578_65647 = (0);
var i__65579_65648 = (0);
while(true){
if((i__65579_65648 < count__65578_65647)){
var vec__65592_65649 = chunk__65577_65646.cljs$core$IIndexed$_nth$arity$2(null,i__65579_65648);
var test_ns_65650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65592_65649,(0),null);
var ns_info_65651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65592_65649,(1),null);
var map__65595_65652 = ns_info_65651;
var map__65595_65653__$1 = cljs.core.__destructure_map(map__65595_65652);
var fixtures_65654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595_65653__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65655 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65654);
if(cljs.core.truth_(temp__5825__auto___65655)){
var fix_65656 = temp__5825__auto___65655;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65650,fix_65656], 0));
} else {
}

var temp__5825__auto___65657 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65654);
if(cljs.core.truth_(temp__5825__auto___65657)){
var fix_65658 = temp__5825__auto___65657;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65650,fix_65658], 0));
} else {
}


var G__65659 = seq__65575_65645;
var G__65660 = chunk__65577_65646;
var G__65661 = count__65578_65647;
var G__65662 = (i__65579_65648 + (1));
seq__65575_65645 = G__65659;
chunk__65577_65646 = G__65660;
count__65578_65647 = G__65661;
i__65579_65648 = G__65662;
continue;
} else {
var temp__5825__auto___65663 = cljs.core.seq(seq__65575_65645);
if(temp__5825__auto___65663){
var seq__65575_65664__$1 = temp__5825__auto___65663;
if(cljs.core.chunked_seq_QMARK_(seq__65575_65664__$1)){
var c__5548__auto___65665 = cljs.core.chunk_first(seq__65575_65664__$1);
var G__65666 = cljs.core.chunk_rest(seq__65575_65664__$1);
var G__65667 = c__5548__auto___65665;
var G__65668 = cljs.core.count(c__5548__auto___65665);
var G__65669 = (0);
seq__65575_65645 = G__65666;
chunk__65577_65646 = G__65667;
count__65578_65647 = G__65668;
i__65579_65648 = G__65669;
continue;
} else {
var vec__65596_65670 = cljs.core.first(seq__65575_65664__$1);
var test_ns_65671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65596_65670,(0),null);
var ns_info_65672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65596_65670,(1),null);
var map__65599_65673 = ns_info_65672;
var map__65599_65674__$1 = cljs.core.__destructure_map(map__65599_65673);
var fixtures_65675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65599_65674__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65676__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65675);
if(cljs.core.truth_(temp__5825__auto___65676__$1)){
var fix_65677 = temp__5825__auto___65676__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65671,fix_65677], 0));
} else {
}

var temp__5825__auto___65682__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65675);
if(cljs.core.truth_(temp__5825__auto___65682__$1)){
var fix_65683 = temp__5825__auto___65682__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65671,fix_65683], 0));
} else {
}


var G__65684 = cljs.core.next(seq__65575_65664__$1);
var G__65685 = null;
var G__65686 = (0);
var G__65687 = (0);
seq__65575_65645 = G__65684;
chunk__65577_65646 = G__65685;
count__65578_65647 = G__65686;
i__65579_65648 = G__65687;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65572_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65572_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65601 = cljs.test.get_current_env();
var map__65601__$1 = cljs.core.__destructure_map(map__65601);
var env = map__65601__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65605 = arguments.length;
switch (G__65605) {
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
var G__65609 = arguments.length;
switch (G__65609) {
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
var map__65612 = shadow.test.env.get_test_ns_info(ns);
var map__65612__$1 = cljs.core.__destructure_map(map__65612);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65612__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65615 = arguments.length;
switch (G__65615) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65613_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65613_SHARP_)));
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
var G__65620 = arguments.length;
switch (G__65620) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65618_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65618_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
