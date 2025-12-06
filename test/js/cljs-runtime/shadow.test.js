goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65527){
var vec__65528 = p__65527;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65528,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65528,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65531 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65531__$1 = (((G__65531 instanceof cljs.core.Keyword))?G__65531.fqn:null);
switch (G__65531__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65534 = (function (){
var seq__65535 = cljs.core.seq(vars__$1);
var chunk__65536 = null;
var count__65537 = (0);
var i__65538 = (0);
while(true){
if((i__65538 < count__65537)){
var v = chunk__65536.cljs$core$IIndexed$_nth$arity$2(null,i__65538);
var temp__5825__auto___65596 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65596)){
var t_65597 = temp__5825__auto___65596;
var G__65546_65598 = ((function (seq__65535,chunk__65536,count__65537,i__65538,t_65597,temp__5825__auto___65596,v,each_fixture_fn,G__65531,G__65531__$1,env,once_fixtures,each_fixtures,vec__65528,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65597)));
});})(seq__65535,chunk__65536,count__65537,i__65538,t_65597,temp__5825__auto___65596,v,each_fixture_fn,G__65531,G__65531__$1,env,once_fixtures,each_fixtures,vec__65528,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65546_65598) : each_fixture_fn.call(null,G__65546_65598));
} else {
}


var G__65599 = seq__65535;
var G__65600 = chunk__65536;
var G__65601 = count__65537;
var G__65602 = (i__65538 + (1));
seq__65535 = G__65599;
chunk__65536 = G__65600;
count__65537 = G__65601;
i__65538 = G__65602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65535);
if(temp__5825__auto__){
var seq__65535__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65535__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65535__$1);
var G__65603 = cljs.core.chunk_rest(seq__65535__$1);
var G__65604 = c__5548__auto__;
var G__65605 = cljs.core.count(c__5548__auto__);
var G__65606 = (0);
seq__65535 = G__65603;
chunk__65536 = G__65604;
count__65537 = G__65605;
i__65538 = G__65606;
continue;
} else {
var v = cljs.core.first(seq__65535__$1);
var temp__5825__auto___65607__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65607__$1)){
var t_65608 = temp__5825__auto___65607__$1;
var G__65547_65609 = ((function (seq__65535,chunk__65536,count__65537,i__65538,t_65608,temp__5825__auto___65607__$1,v,seq__65535__$1,temp__5825__auto__,each_fixture_fn,G__65531,G__65531__$1,env,once_fixtures,each_fixtures,vec__65528,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65608)));
});})(seq__65535,chunk__65536,count__65537,i__65538,t_65608,temp__5825__auto___65607__$1,v,seq__65535__$1,temp__5825__auto__,each_fixture_fn,G__65531,G__65531__$1,env,once_fixtures,each_fixtures,vec__65528,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65547_65609) : each_fixture_fn.call(null,G__65547_65609));
} else {
}


var G__65610 = cljs.core.next(seq__65535__$1);
var G__65611 = null;
var G__65612 = (0);
var G__65613 = (0);
seq__65535 = G__65610;
chunk__65536 = G__65611;
count__65537 = G__65612;
i__65538 = G__65613;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65533 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65533.cljs$core$IFn$_invoke$arity$1 ? fexpr__65533.cljs$core$IFn$_invoke$arity$1(G__65534) : fexpr__65533.call(null,G__65534));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65531__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65526_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65526_SHARP_));
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

var map__65550 = shadow.test.env.get_test_ns_info(ns);
var map__65550__$1 = cljs.core.__destructure_map(map__65550);
var test_ns = map__65550__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
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

var seq__65560_65614 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65562_65615 = null;
var count__65563_65616 = (0);
var i__65564_65617 = (0);
while(true){
if((i__65564_65617 < count__65563_65616)){
var vec__65575_65618 = chunk__65562_65615.cljs$core$IIndexed$_nth$arity$2(null,i__65564_65617);
var test_ns_65619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65575_65618,(0),null);
var ns_info_65620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65575_65618,(1),null);
var map__65578_65621 = ns_info_65620;
var map__65578_65622__$1 = cljs.core.__destructure_map(map__65578_65621);
var fixtures_65623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65578_65622__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65624 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65623);
if(cljs.core.truth_(temp__5825__auto___65624)){
var fix_65625 = temp__5825__auto___65624;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65619,fix_65625], 0));
} else {
}

var temp__5825__auto___65626 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65623);
if(cljs.core.truth_(temp__5825__auto___65626)){
var fix_65627 = temp__5825__auto___65626;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65619,fix_65627], 0));
} else {
}


var G__65628 = seq__65560_65614;
var G__65629 = chunk__65562_65615;
var G__65630 = count__65563_65616;
var G__65631 = (i__65564_65617 + (1));
seq__65560_65614 = G__65628;
chunk__65562_65615 = G__65629;
count__65563_65616 = G__65630;
i__65564_65617 = G__65631;
continue;
} else {
var temp__5825__auto___65632 = cljs.core.seq(seq__65560_65614);
if(temp__5825__auto___65632){
var seq__65560_65633__$1 = temp__5825__auto___65632;
if(cljs.core.chunked_seq_QMARK_(seq__65560_65633__$1)){
var c__5548__auto___65634 = cljs.core.chunk_first(seq__65560_65633__$1);
var G__65635 = cljs.core.chunk_rest(seq__65560_65633__$1);
var G__65636 = c__5548__auto___65634;
var G__65637 = cljs.core.count(c__5548__auto___65634);
var G__65638 = (0);
seq__65560_65614 = G__65635;
chunk__65562_65615 = G__65636;
count__65563_65616 = G__65637;
i__65564_65617 = G__65638;
continue;
} else {
var vec__65579_65639 = cljs.core.first(seq__65560_65633__$1);
var test_ns_65640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65579_65639,(0),null);
var ns_info_65641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65579_65639,(1),null);
var map__65582_65642 = ns_info_65641;
var map__65582_65643__$1 = cljs.core.__destructure_map(map__65582_65642);
var fixtures_65644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65582_65643__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65645__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65644);
if(cljs.core.truth_(temp__5825__auto___65645__$1)){
var fix_65646 = temp__5825__auto___65645__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65640,fix_65646], 0));
} else {
}

var temp__5825__auto___65647__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65644);
if(cljs.core.truth_(temp__5825__auto___65647__$1)){
var fix_65648 = temp__5825__auto___65647__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65640,fix_65648], 0));
} else {
}


var G__65649 = cljs.core.next(seq__65560_65633__$1);
var G__65650 = null;
var G__65651 = (0);
var G__65652 = (0);
seq__65560_65614 = G__65649;
chunk__65562_65615 = G__65650;
count__65563_65616 = G__65651;
i__65564_65617 = G__65652;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65554_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65554_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65583 = cljs.test.get_current_env();
var map__65583__$1 = cljs.core.__destructure_map(map__65583);
var env = map__65583__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65583__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65583__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65585 = arguments.length;
switch (G__65585) {
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
var G__65587 = arguments.length;
switch (G__65587) {
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
var map__65588 = shadow.test.env.get_test_ns_info(ns);
var map__65588__$1 = cljs.core.__destructure_map(map__65588);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65588__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65591 = arguments.length;
switch (G__65591) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65589_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65589_SHARP_)));
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
var G__65594 = arguments.length;
switch (G__65594) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65592_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65592_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
