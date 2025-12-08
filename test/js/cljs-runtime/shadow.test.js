goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65543){
var vec__65544 = p__65543;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65544,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65544,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65547 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65547__$1 = (((G__65547 instanceof cljs.core.Keyword))?G__65547.fqn:null);
switch (G__65547__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65549 = (function (){
var seq__65550 = cljs.core.seq(vars__$1);
var chunk__65551 = null;
var count__65552 = (0);
var i__65553 = (0);
while(true){
if((i__65553 < count__65552)){
var v = chunk__65551.cljs$core$IIndexed$_nth$arity$2(null,i__65553);
var temp__5825__auto___65599 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65599)){
var t_65600 = temp__5825__auto___65599;
var G__65556_65601 = ((function (seq__65550,chunk__65551,count__65552,i__65553,t_65600,temp__5825__auto___65599,v,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65544,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65600)));
});})(seq__65550,chunk__65551,count__65552,i__65553,t_65600,temp__5825__auto___65599,v,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65544,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65556_65601) : each_fixture_fn.call(null,G__65556_65601));
} else {
}


var G__65602 = seq__65550;
var G__65603 = chunk__65551;
var G__65604 = count__65552;
var G__65605 = (i__65553 + (1));
seq__65550 = G__65602;
chunk__65551 = G__65603;
count__65552 = G__65604;
i__65553 = G__65605;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65550);
if(temp__5825__auto__){
var seq__65550__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65550__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65550__$1);
var G__65606 = cljs.core.chunk_rest(seq__65550__$1);
var G__65607 = c__5548__auto__;
var G__65608 = cljs.core.count(c__5548__auto__);
var G__65609 = (0);
seq__65550 = G__65606;
chunk__65551 = G__65607;
count__65552 = G__65608;
i__65553 = G__65609;
continue;
} else {
var v = cljs.core.first(seq__65550__$1);
var temp__5825__auto___65610__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65610__$1)){
var t_65612 = temp__5825__auto___65610__$1;
var G__65557_65613 = ((function (seq__65550,chunk__65551,count__65552,i__65553,t_65612,temp__5825__auto___65610__$1,v,seq__65550__$1,temp__5825__auto__,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65544,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65612)));
});})(seq__65550,chunk__65551,count__65552,i__65553,t_65612,temp__5825__auto___65610__$1,v,seq__65550__$1,temp__5825__auto__,each_fixture_fn,G__65547,G__65547__$1,env,once_fixtures,each_fixtures,vec__65544,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65557_65613) : each_fixture_fn.call(null,G__65557_65613));
} else {
}


var G__65614 = cljs.core.next(seq__65550__$1);
var G__65615 = null;
var G__65616 = (0);
var G__65617 = (0);
seq__65550 = G__65614;
chunk__65551 = G__65615;
count__65552 = G__65616;
i__65553 = G__65617;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65548 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65548.cljs$core$IFn$_invoke$arity$1 ? fexpr__65548.cljs$core$IFn$_invoke$arity$1(G__65549) : fexpr__65548.call(null,G__65549));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65547__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65542_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65542_SHARP_));
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

var map__65558 = shadow.test.env.get_test_ns_info(ns);
var map__65558__$1 = cljs.core.__destructure_map(map__65558);
var test_ns = map__65558__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65558__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65560,vars){
var map__65561 = p__65560;
var map__65561__$1 = cljs.core.__destructure_map(map__65561);
var env = map__65561__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65561__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65562_65619 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65564_65620 = null;
var count__65565_65621 = (0);
var i__65566_65622 = (0);
while(true){
if((i__65566_65622 < count__65565_65621)){
var vec__65576_65623 = chunk__65564_65620.cljs$core$IIndexed$_nth$arity$2(null,i__65566_65622);
var test_ns_65624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65576_65623,(0),null);
var ns_info_65625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65576_65623,(1),null);
var map__65579_65626 = ns_info_65625;
var map__65579_65627__$1 = cljs.core.__destructure_map(map__65579_65626);
var fixtures_65628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65579_65627__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65630 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65628);
if(cljs.core.truth_(temp__5825__auto___65630)){
var fix_65631 = temp__5825__auto___65630;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65624,fix_65631], 0));
} else {
}

var temp__5825__auto___65632 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65628);
if(cljs.core.truth_(temp__5825__auto___65632)){
var fix_65634 = temp__5825__auto___65632;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65624,fix_65634], 0));
} else {
}


var G__65635 = seq__65562_65619;
var G__65636 = chunk__65564_65620;
var G__65637 = count__65565_65621;
var G__65638 = (i__65566_65622 + (1));
seq__65562_65619 = G__65635;
chunk__65564_65620 = G__65636;
count__65565_65621 = G__65637;
i__65566_65622 = G__65638;
continue;
} else {
var temp__5825__auto___65639 = cljs.core.seq(seq__65562_65619);
if(temp__5825__auto___65639){
var seq__65562_65641__$1 = temp__5825__auto___65639;
if(cljs.core.chunked_seq_QMARK_(seq__65562_65641__$1)){
var c__5548__auto___65642 = cljs.core.chunk_first(seq__65562_65641__$1);
var G__65643 = cljs.core.chunk_rest(seq__65562_65641__$1);
var G__65644 = c__5548__auto___65642;
var G__65645 = cljs.core.count(c__5548__auto___65642);
var G__65646 = (0);
seq__65562_65619 = G__65643;
chunk__65564_65620 = G__65644;
count__65565_65621 = G__65645;
i__65566_65622 = G__65646;
continue;
} else {
var vec__65580_65647 = cljs.core.first(seq__65562_65641__$1);
var test_ns_65648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65580_65647,(0),null);
var ns_info_65649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65580_65647,(1),null);
var map__65583_65650 = ns_info_65649;
var map__65583_65651__$1 = cljs.core.__destructure_map(map__65583_65650);
var fixtures_65652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65583_65651__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65653__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65652);
if(cljs.core.truth_(temp__5825__auto___65653__$1)){
var fix_65654 = temp__5825__auto___65653__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65648,fix_65654], 0));
} else {
}

var temp__5825__auto___65655__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65652);
if(cljs.core.truth_(temp__5825__auto___65655__$1)){
var fix_65656 = temp__5825__auto___65655__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65648,fix_65656], 0));
} else {
}


var G__65657 = cljs.core.next(seq__65562_65641__$1);
var G__65658 = null;
var G__65659 = (0);
var G__65660 = (0);
seq__65562_65619 = G__65657;
chunk__65564_65620 = G__65658;
count__65565_65621 = G__65659;
i__65566_65622 = G__65660;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65559_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65559_SHARP_));
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
var G__65586 = arguments.length;
switch (G__65586) {
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
var G__65588 = arguments.length;
switch (G__65588) {
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
var map__65589 = shadow.test.env.get_test_ns_info(ns);
var map__65589__$1 = cljs.core.__destructure_map(map__65589);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65589__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65592 = arguments.length;
switch (G__65592) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65590_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65590_SHARP_)));
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
var G__65595 = arguments.length;
switch (G__65595) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65593_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65593_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
