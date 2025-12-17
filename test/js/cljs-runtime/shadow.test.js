goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68673){
var vec__68674 = p__68673;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68674,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68674,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__68677 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__68677__$1 = (((G__68677 instanceof cljs.core.Keyword))?G__68677.fqn:null);
switch (G__68677__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__68679 = (function (){
var seq__68680 = cljs.core.seq(vars__$1);
var chunk__68681 = null;
var count__68682 = (0);
var i__68683 = (0);
while(true){
if((i__68683 < count__68682)){
var v = chunk__68681.cljs$core$IIndexed$_nth$arity$2(null,i__68683);
var temp__5825__auto___68753 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68753)){
var t_68755 = temp__5825__auto___68753;
var G__68686_68756 = ((function (seq__68680,chunk__68681,count__68682,i__68683,t_68755,temp__5825__auto___68753,v,each_fixture_fn,G__68677,G__68677__$1,env,once_fixtures,each_fixtures,vec__68674,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68755)));
});})(seq__68680,chunk__68681,count__68682,i__68683,t_68755,temp__5825__auto___68753,v,each_fixture_fn,G__68677,G__68677__$1,env,once_fixtures,each_fixtures,vec__68674,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68686_68756) : each_fixture_fn.call(null,G__68686_68756));
} else {
}


var G__68757 = seq__68680;
var G__68758 = chunk__68681;
var G__68759 = count__68682;
var G__68760 = (i__68683 + (1));
seq__68680 = G__68757;
chunk__68681 = G__68758;
count__68682 = G__68759;
i__68683 = G__68760;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68680);
if(temp__5825__auto__){
var seq__68680__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68680__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68680__$1);
var G__68761 = cljs.core.chunk_rest(seq__68680__$1);
var G__68762 = c__5548__auto__;
var G__68763 = cljs.core.count(c__5548__auto__);
var G__68764 = (0);
seq__68680 = G__68761;
chunk__68681 = G__68762;
count__68682 = G__68763;
i__68683 = G__68764;
continue;
} else {
var v = cljs.core.first(seq__68680__$1);
var temp__5825__auto___68765__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68765__$1)){
var t_68766 = temp__5825__auto___68765__$1;
var G__68688_68767 = ((function (seq__68680,chunk__68681,count__68682,i__68683,t_68766,temp__5825__auto___68765__$1,v,seq__68680__$1,temp__5825__auto__,each_fixture_fn,G__68677,G__68677__$1,env,once_fixtures,each_fixtures,vec__68674,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68766)));
});})(seq__68680,chunk__68681,count__68682,i__68683,t_68766,temp__5825__auto___68765__$1,v,seq__68680__$1,temp__5825__auto__,each_fixture_fn,G__68677,G__68677__$1,env,once_fixtures,each_fixtures,vec__68674,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68688_68767) : each_fixture_fn.call(null,G__68688_68767));
} else {
}


var G__68771 = cljs.core.next(seq__68680__$1);
var G__68772 = null;
var G__68773 = (0);
var G__68774 = (0);
seq__68680 = G__68771;
chunk__68681 = G__68772;
count__68682 = G__68773;
i__68683 = G__68774;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__68678 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__68678.cljs$core$IFn$_invoke$arity$1 ? fexpr__68678.cljs$core$IFn$_invoke$arity$1(G__68679) : fexpr__68678.call(null,G__68679));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68677__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__68672_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68672_SHARP_));
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

var map__68690 = shadow.test.env.get_test_ns_info(ns);
var map__68690__$1 = cljs.core.__destructure_map(map__68690);
var test_ns = map__68690__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68690__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__68692,vars){
var map__68693 = p__68692;
var map__68693__$1 = cljs.core.__destructure_map(map__68693);
var env = map__68693__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68693__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__68694_68777 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__68696_68778 = null;
var count__68697_68779 = (0);
var i__68698_68780 = (0);
while(true){
if((i__68698_68780 < count__68697_68779)){
var vec__68711_68781 = chunk__68696_68778.cljs$core$IIndexed$_nth$arity$2(null,i__68698_68780);
var test_ns_68782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68711_68781,(0),null);
var ns_info_68783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68711_68781,(1),null);
var map__68714_68784 = ns_info_68783;
var map__68714_68785__$1 = cljs.core.__destructure_map(map__68714_68784);
var fixtures_68786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68714_68785__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68787 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68786);
if(cljs.core.truth_(temp__5825__auto___68787)){
var fix_68788 = temp__5825__auto___68787;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68782,fix_68788], 0));
} else {
}

var temp__5825__auto___68793 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68786);
if(cljs.core.truth_(temp__5825__auto___68793)){
var fix_68794 = temp__5825__auto___68793;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68782,fix_68794], 0));
} else {
}


var G__68795 = seq__68694_68777;
var G__68796 = chunk__68696_68778;
var G__68797 = count__68697_68779;
var G__68798 = (i__68698_68780 + (1));
seq__68694_68777 = G__68795;
chunk__68696_68778 = G__68796;
count__68697_68779 = G__68797;
i__68698_68780 = G__68798;
continue;
} else {
var temp__5825__auto___68799 = cljs.core.seq(seq__68694_68777);
if(temp__5825__auto___68799){
var seq__68694_68800__$1 = temp__5825__auto___68799;
if(cljs.core.chunked_seq_QMARK_(seq__68694_68800__$1)){
var c__5548__auto___68801 = cljs.core.chunk_first(seq__68694_68800__$1);
var G__68802 = cljs.core.chunk_rest(seq__68694_68800__$1);
var G__68803 = c__5548__auto___68801;
var G__68804 = cljs.core.count(c__5548__auto___68801);
var G__68805 = (0);
seq__68694_68777 = G__68802;
chunk__68696_68778 = G__68803;
count__68697_68779 = G__68804;
i__68698_68780 = G__68805;
continue;
} else {
var vec__68715_68806 = cljs.core.first(seq__68694_68800__$1);
var test_ns_68807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68715_68806,(0),null);
var ns_info_68808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68715_68806,(1),null);
var map__68718_68809 = ns_info_68808;
var map__68718_68810__$1 = cljs.core.__destructure_map(map__68718_68809);
var fixtures_68811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68718_68810__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68812__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68811);
if(cljs.core.truth_(temp__5825__auto___68812__$1)){
var fix_68813 = temp__5825__auto___68812__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68807,fix_68813], 0));
} else {
}

var temp__5825__auto___68814__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68811);
if(cljs.core.truth_(temp__5825__auto___68814__$1)){
var fix_68815 = temp__5825__auto___68814__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68807,fix_68815], 0));
} else {
}


var G__68816 = cljs.core.next(seq__68694_68800__$1);
var G__68817 = null;
var G__68818 = (0);
var G__68819 = (0);
seq__68694_68777 = G__68816;
chunk__68696_68778 = G__68817;
count__68697_68779 = G__68818;
i__68698_68780 = G__68819;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68691_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68691_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__68722 = cljs.test.get_current_env();
var map__68722__$1 = cljs.core.__destructure_map(map__68722);
var env = map__68722__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68722__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68722__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__68728 = arguments.length;
switch (G__68728) {
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
var G__68732 = arguments.length;
switch (G__68732) {
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
var map__68733 = shadow.test.env.get_test_ns_info(ns);
var map__68733__$1 = cljs.core.__destructure_map(map__68733);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68733__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__68738 = arguments.length;
switch (G__68738) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68736_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68736_SHARP_)));
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
var G__68743 = arguments.length;
switch (G__68743) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68741_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68741_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
