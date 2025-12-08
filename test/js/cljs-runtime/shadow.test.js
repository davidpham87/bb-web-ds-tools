goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65465){
var vec__65466 = p__65465;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65466,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65466,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65469 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65469__$1 = (((G__65469 instanceof cljs.core.Keyword))?G__65469.fqn:null);
switch (G__65469__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65472 = (function (){
var seq__65473 = cljs.core.seq(vars__$1);
var chunk__65474 = null;
var count__65475 = (0);
var i__65476 = (0);
while(true){
if((i__65476 < count__65475)){
var v = chunk__65474.cljs$core$IIndexed$_nth$arity$2(null,i__65476);
var temp__5825__auto___65593 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65593)){
var t_65594 = temp__5825__auto___65593;
var G__65494_65595 = ((function (seq__65473,chunk__65474,count__65475,i__65476,t_65594,temp__5825__auto___65593,v,each_fixture_fn,G__65469,G__65469__$1,env,once_fixtures,each_fixtures,vec__65466,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65594)));
});})(seq__65473,chunk__65474,count__65475,i__65476,t_65594,temp__5825__auto___65593,v,each_fixture_fn,G__65469,G__65469__$1,env,once_fixtures,each_fixtures,vec__65466,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65494_65595) : each_fixture_fn.call(null,G__65494_65595));
} else {
}


var G__65596 = seq__65473;
var G__65597 = chunk__65474;
var G__65598 = count__65475;
var G__65599 = (i__65476 + (1));
seq__65473 = G__65596;
chunk__65474 = G__65597;
count__65475 = G__65598;
i__65476 = G__65599;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65473);
if(temp__5825__auto__){
var seq__65473__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65473__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65473__$1);
var G__65600 = cljs.core.chunk_rest(seq__65473__$1);
var G__65601 = c__5548__auto__;
var G__65602 = cljs.core.count(c__5548__auto__);
var G__65603 = (0);
seq__65473 = G__65600;
chunk__65474 = G__65601;
count__65475 = G__65602;
i__65476 = G__65603;
continue;
} else {
var v = cljs.core.first(seq__65473__$1);
var temp__5825__auto___65604__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65604__$1)){
var t_65605 = temp__5825__auto___65604__$1;
var G__65495_65606 = ((function (seq__65473,chunk__65474,count__65475,i__65476,t_65605,temp__5825__auto___65604__$1,v,seq__65473__$1,temp__5825__auto__,each_fixture_fn,G__65469,G__65469__$1,env,once_fixtures,each_fixtures,vec__65466,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65605)));
});})(seq__65473,chunk__65474,count__65475,i__65476,t_65605,temp__5825__auto___65604__$1,v,seq__65473__$1,temp__5825__auto__,each_fixture_fn,G__65469,G__65469__$1,env,once_fixtures,each_fixtures,vec__65466,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65495_65606) : each_fixture_fn.call(null,G__65495_65606));
} else {
}


var G__65607 = cljs.core.next(seq__65473__$1);
var G__65608 = null;
var G__65609 = (0);
var G__65610 = (0);
seq__65473 = G__65607;
chunk__65474 = G__65608;
count__65475 = G__65609;
i__65476 = G__65610;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65471 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65471.cljs$core$IFn$_invoke$arity$1 ? fexpr__65471.cljs$core$IFn$_invoke$arity$1(G__65472) : fexpr__65471.call(null,G__65472));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65469__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65461_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65461_SHARP_));
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

var map__65498 = shadow.test.env.get_test_ns_info(ns);
var map__65498__$1 = cljs.core.__destructure_map(map__65498);
var test_ns = map__65498__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65498__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65501,vars){
var map__65502 = p__65501;
var map__65502__$1 = cljs.core.__destructure_map(map__65502);
var env = map__65502__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65509_65613 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65511_65614 = null;
var count__65512_65615 = (0);
var i__65513_65616 = (0);
while(true){
if((i__65513_65616 < count__65512_65615)){
var vec__65526_65617 = chunk__65511_65614.cljs$core$IIndexed$_nth$arity$2(null,i__65513_65616);
var test_ns_65618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65526_65617,(0),null);
var ns_info_65619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65526_65617,(1),null);
var map__65532_65620 = ns_info_65619;
var map__65532_65621__$1 = cljs.core.__destructure_map(map__65532_65620);
var fixtures_65622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532_65621__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65623 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65622);
if(cljs.core.truth_(temp__5825__auto___65623)){
var fix_65624 = temp__5825__auto___65623;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65618,fix_65624], 0));
} else {
}

var temp__5825__auto___65625 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65622);
if(cljs.core.truth_(temp__5825__auto___65625)){
var fix_65626 = temp__5825__auto___65625;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65618,fix_65626], 0));
} else {
}


var G__65627 = seq__65509_65613;
var G__65628 = chunk__65511_65614;
var G__65629 = count__65512_65615;
var G__65630 = (i__65513_65616 + (1));
seq__65509_65613 = G__65627;
chunk__65511_65614 = G__65628;
count__65512_65615 = G__65629;
i__65513_65616 = G__65630;
continue;
} else {
var temp__5825__auto___65631 = cljs.core.seq(seq__65509_65613);
if(temp__5825__auto___65631){
var seq__65509_65632__$1 = temp__5825__auto___65631;
if(cljs.core.chunked_seq_QMARK_(seq__65509_65632__$1)){
var c__5548__auto___65633 = cljs.core.chunk_first(seq__65509_65632__$1);
var G__65634 = cljs.core.chunk_rest(seq__65509_65632__$1);
var G__65635 = c__5548__auto___65633;
var G__65636 = cljs.core.count(c__5548__auto___65633);
var G__65637 = (0);
seq__65509_65613 = G__65634;
chunk__65511_65614 = G__65635;
count__65512_65615 = G__65636;
i__65513_65616 = G__65637;
continue;
} else {
var vec__65535_65638 = cljs.core.first(seq__65509_65632__$1);
var test_ns_65639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65535_65638,(0),null);
var ns_info_65640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65535_65638,(1),null);
var map__65538_65641 = ns_info_65640;
var map__65538_65642__$1 = cljs.core.__destructure_map(map__65538_65641);
var fixtures_65643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65538_65642__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65644__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65643);
if(cljs.core.truth_(temp__5825__auto___65644__$1)){
var fix_65645 = temp__5825__auto___65644__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65639,fix_65645], 0));
} else {
}

var temp__5825__auto___65646__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65643);
if(cljs.core.truth_(temp__5825__auto___65646__$1)){
var fix_65647 = temp__5825__auto___65646__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65639,fix_65647], 0));
} else {
}


var G__65648 = cljs.core.next(seq__65509_65632__$1);
var G__65649 = null;
var G__65650 = (0);
var G__65651 = (0);
seq__65509_65613 = G__65648;
chunk__65511_65614 = G__65649;
count__65512_65615 = G__65650;
i__65513_65616 = G__65651;
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
var map__65544 = cljs.test.get_current_env();
var map__65544__$1 = cljs.core.__destructure_map(map__65544);
var env = map__65544__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65544__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65544__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65546 = arguments.length;
switch (G__65546) {
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
var G__65548 = arguments.length;
switch (G__65548) {
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
var map__65551 = shadow.test.env.get_test_ns_info(ns);
var map__65551__$1 = cljs.core.__destructure_map(map__65551);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65551__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65554 = arguments.length;
switch (G__65554) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65552_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65552_SHARP_)));
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
var G__65570 = arguments.length;
switch (G__65570) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65565_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65565_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
