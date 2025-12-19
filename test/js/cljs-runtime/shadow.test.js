goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68775){
var vec__68776 = p__68775;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68776,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68776,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__68779 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__68779__$1 = (((G__68779 instanceof cljs.core.Keyword))?G__68779.fqn:null);
switch (G__68779__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__68781 = (function (){
var seq__68782 = cljs.core.seq(vars__$1);
var chunk__68783 = null;
var count__68784 = (0);
var i__68785 = (0);
while(true){
if((i__68785 < count__68784)){
var v = chunk__68783.cljs$core$IIndexed$_nth$arity$2(null,i__68785);
var temp__5825__auto___68849 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68849)){
var t_68850 = temp__5825__auto___68849;
var G__68790_68853 = ((function (seq__68782,chunk__68783,count__68784,i__68785,t_68850,temp__5825__auto___68849,v,each_fixture_fn,G__68779,G__68779__$1,env,once_fixtures,each_fixtures,vec__68776,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68850)));
});})(seq__68782,chunk__68783,count__68784,i__68785,t_68850,temp__5825__auto___68849,v,each_fixture_fn,G__68779,G__68779__$1,env,once_fixtures,each_fixtures,vec__68776,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68790_68853) : each_fixture_fn.call(null,G__68790_68853));
} else {
}


var G__68854 = seq__68782;
var G__68855 = chunk__68783;
var G__68856 = count__68784;
var G__68857 = (i__68785 + (1));
seq__68782 = G__68854;
chunk__68783 = G__68855;
count__68784 = G__68856;
i__68785 = G__68857;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68782);
if(temp__5825__auto__){
var seq__68782__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68782__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68782__$1);
var G__68858 = cljs.core.chunk_rest(seq__68782__$1);
var G__68859 = c__5548__auto__;
var G__68860 = cljs.core.count(c__5548__auto__);
var G__68861 = (0);
seq__68782 = G__68858;
chunk__68783 = G__68859;
count__68784 = G__68860;
i__68785 = G__68861;
continue;
} else {
var v = cljs.core.first(seq__68782__$1);
var temp__5825__auto___68862__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68862__$1)){
var t_68863 = temp__5825__auto___68862__$1;
var G__68791_68864 = ((function (seq__68782,chunk__68783,count__68784,i__68785,t_68863,temp__5825__auto___68862__$1,v,seq__68782__$1,temp__5825__auto__,each_fixture_fn,G__68779,G__68779__$1,env,once_fixtures,each_fixtures,vec__68776,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68863)));
});})(seq__68782,chunk__68783,count__68784,i__68785,t_68863,temp__5825__auto___68862__$1,v,seq__68782__$1,temp__5825__auto__,each_fixture_fn,G__68779,G__68779__$1,env,once_fixtures,each_fixtures,vec__68776,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68791_68864) : each_fixture_fn.call(null,G__68791_68864));
} else {
}


var G__68865 = cljs.core.next(seq__68782__$1);
var G__68866 = null;
var G__68867 = (0);
var G__68868 = (0);
seq__68782 = G__68865;
chunk__68783 = G__68866;
count__68784 = G__68867;
i__68785 = G__68868;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__68780 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__68780.cljs$core$IFn$_invoke$arity$1 ? fexpr__68780.cljs$core$IFn$_invoke$arity$1(G__68781) : fexpr__68780.call(null,G__68781));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68779__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__68774_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68774_SHARP_));
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

var map__68792 = shadow.test.env.get_test_ns_info(ns);
var map__68792__$1 = cljs.core.__destructure_map(map__68792);
var test_ns = map__68792__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68792__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__68794,vars){
var map__68797 = p__68794;
var map__68797__$1 = cljs.core.__destructure_map(map__68797);
var env = map__68797__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68797__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__68798_68869 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__68801_68870 = null;
var count__68802_68871 = (0);
var i__68803_68872 = (0);
while(true){
if((i__68803_68872 < count__68802_68871)){
var vec__68819_68873 = chunk__68801_68870.cljs$core$IIndexed$_nth$arity$2(null,i__68803_68872);
var test_ns_68874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68819_68873,(0),null);
var ns_info_68875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68819_68873,(1),null);
var map__68822_68876 = ns_info_68875;
var map__68822_68877__$1 = cljs.core.__destructure_map(map__68822_68876);
var fixtures_68878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822_68877__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68879 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68878);
if(cljs.core.truth_(temp__5825__auto___68879)){
var fix_68880 = temp__5825__auto___68879;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68874,fix_68880], 0));
} else {
}

var temp__5825__auto___68881 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68878);
if(cljs.core.truth_(temp__5825__auto___68881)){
var fix_68882 = temp__5825__auto___68881;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68874,fix_68882], 0));
} else {
}


var G__68883 = seq__68798_68869;
var G__68884 = chunk__68801_68870;
var G__68885 = count__68802_68871;
var G__68886 = (i__68803_68872 + (1));
seq__68798_68869 = G__68883;
chunk__68801_68870 = G__68884;
count__68802_68871 = G__68885;
i__68803_68872 = G__68886;
continue;
} else {
var temp__5825__auto___68887 = cljs.core.seq(seq__68798_68869);
if(temp__5825__auto___68887){
var seq__68798_68888__$1 = temp__5825__auto___68887;
if(cljs.core.chunked_seq_QMARK_(seq__68798_68888__$1)){
var c__5548__auto___68889 = cljs.core.chunk_first(seq__68798_68888__$1);
var G__68890 = cljs.core.chunk_rest(seq__68798_68888__$1);
var G__68891 = c__5548__auto___68889;
var G__68892 = cljs.core.count(c__5548__auto___68889);
var G__68893 = (0);
seq__68798_68869 = G__68890;
chunk__68801_68870 = G__68891;
count__68802_68871 = G__68892;
i__68803_68872 = G__68893;
continue;
} else {
var vec__68823_68894 = cljs.core.first(seq__68798_68888__$1);
var test_ns_68895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68823_68894,(0),null);
var ns_info_68896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68823_68894,(1),null);
var map__68827_68897 = ns_info_68896;
var map__68827_68898__$1 = cljs.core.__destructure_map(map__68827_68897);
var fixtures_68899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68827_68898__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68900__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68899);
if(cljs.core.truth_(temp__5825__auto___68900__$1)){
var fix_68901 = temp__5825__auto___68900__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68895,fix_68901], 0));
} else {
}

var temp__5825__auto___68902__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68899);
if(cljs.core.truth_(temp__5825__auto___68902__$1)){
var fix_68903 = temp__5825__auto___68902__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68895,fix_68903], 0));
} else {
}


var G__68904 = cljs.core.next(seq__68798_68888__$1);
var G__68905 = null;
var G__68906 = (0);
var G__68907 = (0);
seq__68798_68869 = G__68904;
chunk__68801_68870 = G__68905;
count__68802_68871 = G__68906;
i__68803_68872 = G__68907;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68793_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68793_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__68834 = cljs.test.get_current_env();
var map__68834__$1 = cljs.core.__destructure_map(map__68834);
var env = map__68834__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68834__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68834__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__68836 = arguments.length;
switch (G__68836) {
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
var G__68838 = arguments.length;
switch (G__68838) {
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
var map__68839 = shadow.test.env.get_test_ns_info(ns);
var map__68839__$1 = cljs.core.__destructure_map(map__68839);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__68842 = arguments.length;
switch (G__68842) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68840_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68840_SHARP_)));
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
var G__68846 = arguments.length;
switch (G__68846) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68843_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68843_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
