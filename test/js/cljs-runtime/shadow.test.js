goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65557){
var vec__65558 = p__65557;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65558,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65558,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65561 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65561__$1 = (((G__65561 instanceof cljs.core.Keyword))?G__65561.fqn:null);
switch (G__65561__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65563 = (function (){
var seq__65564 = cljs.core.seq(vars__$1);
var chunk__65565 = null;
var count__65566 = (0);
var i__65567 = (0);
while(true){
if((i__65567 < count__65566)){
var v = chunk__65565.cljs$core$IIndexed$_nth$arity$2(null,i__65567);
var temp__5825__auto___65654 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65654)){
var t_65655 = temp__5825__auto___65654;
var G__65570_65656 = ((function (seq__65564,chunk__65565,count__65566,i__65567,t_65655,temp__5825__auto___65654,v,each_fixture_fn,G__65561,G__65561__$1,env,once_fixtures,each_fixtures,vec__65558,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65655)));
});})(seq__65564,chunk__65565,count__65566,i__65567,t_65655,temp__5825__auto___65654,v,each_fixture_fn,G__65561,G__65561__$1,env,once_fixtures,each_fixtures,vec__65558,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65570_65656) : each_fixture_fn.call(null,G__65570_65656));
} else {
}


var G__65657 = seq__65564;
var G__65658 = chunk__65565;
var G__65659 = count__65566;
var G__65660 = (i__65567 + (1));
seq__65564 = G__65657;
chunk__65565 = G__65658;
count__65566 = G__65659;
i__65567 = G__65660;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65564);
if(temp__5825__auto__){
var seq__65564__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65564__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65564__$1);
var G__65661 = cljs.core.chunk_rest(seq__65564__$1);
var G__65662 = c__5548__auto__;
var G__65663 = cljs.core.count(c__5548__auto__);
var G__65664 = (0);
seq__65564 = G__65661;
chunk__65565 = G__65662;
count__65566 = G__65663;
i__65567 = G__65664;
continue;
} else {
var v = cljs.core.first(seq__65564__$1);
var temp__5825__auto___65669__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65669__$1)){
var t_65670 = temp__5825__auto___65669__$1;
var G__65571_65671 = ((function (seq__65564,chunk__65565,count__65566,i__65567,t_65670,temp__5825__auto___65669__$1,v,seq__65564__$1,temp__5825__auto__,each_fixture_fn,G__65561,G__65561__$1,env,once_fixtures,each_fixtures,vec__65558,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65670)));
});})(seq__65564,chunk__65565,count__65566,i__65567,t_65670,temp__5825__auto___65669__$1,v,seq__65564__$1,temp__5825__auto__,each_fixture_fn,G__65561,G__65561__$1,env,once_fixtures,each_fixtures,vec__65558,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65571_65671) : each_fixture_fn.call(null,G__65571_65671));
} else {
}


var G__65675 = cljs.core.next(seq__65564__$1);
var G__65676 = null;
var G__65677 = (0);
var G__65678 = (0);
seq__65564 = G__65675;
chunk__65565 = G__65676;
count__65566 = G__65677;
i__65567 = G__65678;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65562 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65562.cljs$core$IFn$_invoke$arity$1 ? fexpr__65562.cljs$core$IFn$_invoke$arity$1(G__65563) : fexpr__65562.call(null,G__65563));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65561__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65556_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65556_SHARP_));
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

var map__65572 = shadow.test.env.get_test_ns_info(ns);
var map__65572__$1 = cljs.core.__destructure_map(map__65572);
var test_ns = map__65572__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65572__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65574,vars){
var map__65575 = p__65574;
var map__65575__$1 = cljs.core.__destructure_map(map__65575);
var env = map__65575__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65575__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65576_65682 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65578_65683 = null;
var count__65579_65684 = (0);
var i__65580_65685 = (0);
while(true){
if((i__65580_65685 < count__65579_65684)){
var vec__65594_65686 = chunk__65578_65683.cljs$core$IIndexed$_nth$arity$2(null,i__65580_65685);
var test_ns_65687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594_65686,(0),null);
var ns_info_65688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594_65686,(1),null);
var map__65597_65692 = ns_info_65688;
var map__65597_65693__$1 = cljs.core.__destructure_map(map__65597_65692);
var fixtures_65694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597_65693__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65695 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65694);
if(cljs.core.truth_(temp__5825__auto___65695)){
var fix_65696 = temp__5825__auto___65695;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65687,fix_65696], 0));
} else {
}

var temp__5825__auto___65697 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65694);
if(cljs.core.truth_(temp__5825__auto___65697)){
var fix_65698 = temp__5825__auto___65697;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65687,fix_65698], 0));
} else {
}


var G__65699 = seq__65576_65682;
var G__65700 = chunk__65578_65683;
var G__65701 = count__65579_65684;
var G__65702 = (i__65580_65685 + (1));
seq__65576_65682 = G__65699;
chunk__65578_65683 = G__65700;
count__65579_65684 = G__65701;
i__65580_65685 = G__65702;
continue;
} else {
var temp__5825__auto___65703 = cljs.core.seq(seq__65576_65682);
if(temp__5825__auto___65703){
var seq__65576_65704__$1 = temp__5825__auto___65703;
if(cljs.core.chunked_seq_QMARK_(seq__65576_65704__$1)){
var c__5548__auto___65705 = cljs.core.chunk_first(seq__65576_65704__$1);
var G__65706 = cljs.core.chunk_rest(seq__65576_65704__$1);
var G__65707 = c__5548__auto___65705;
var G__65708 = cljs.core.count(c__5548__auto___65705);
var G__65709 = (0);
seq__65576_65682 = G__65706;
chunk__65578_65683 = G__65707;
count__65579_65684 = G__65708;
i__65580_65685 = G__65709;
continue;
} else {
var vec__65603_65710 = cljs.core.first(seq__65576_65704__$1);
var test_ns_65714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65603_65710,(0),null);
var ns_info_65715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65603_65710,(1),null);
var map__65606_65716 = ns_info_65715;
var map__65606_65717__$1 = cljs.core.__destructure_map(map__65606_65716);
var fixtures_65718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65606_65717__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65719__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65718);
if(cljs.core.truth_(temp__5825__auto___65719__$1)){
var fix_65720 = temp__5825__auto___65719__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65714,fix_65720], 0));
} else {
}

var temp__5825__auto___65721__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65718);
if(cljs.core.truth_(temp__5825__auto___65721__$1)){
var fix_65722 = temp__5825__auto___65721__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65714,fix_65722], 0));
} else {
}


var G__65723 = cljs.core.next(seq__65576_65704__$1);
var G__65724 = null;
var G__65725 = (0);
var G__65726 = (0);
seq__65576_65682 = G__65723;
chunk__65578_65683 = G__65724;
count__65579_65684 = G__65725;
i__65580_65685 = G__65726;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65573_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65573_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65614 = cljs.test.get_current_env();
var map__65614__$1 = cljs.core.__destructure_map(map__65614);
var env = map__65614__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65614__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65614__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65616 = arguments.length;
switch (G__65616) {
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
var G__65625 = arguments.length;
switch (G__65625) {
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
var map__65626 = shadow.test.env.get_test_ns_info(ns);
var map__65626__$1 = cljs.core.__destructure_map(map__65626);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65626__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65629 = arguments.length;
switch (G__65629) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65627_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65627_SHARP_)));
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
var G__65636 = arguments.length;
switch (G__65636) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65634_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65634_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
