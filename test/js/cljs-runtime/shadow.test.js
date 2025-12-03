goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__64933){
var vec__64934 = p__64933;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64934,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64934,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__64947 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__64947__$1 = (((G__64947 instanceof cljs.core.Keyword))?G__64947.fqn:null);
switch (G__64947__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__64949 = (function (){
var seq__64950 = cljs.core.seq(vars__$1);
var chunk__64951 = null;
var count__64952 = (0);
var i__64953 = (0);
while(true){
if((i__64953 < count__64952)){
var v = chunk__64951.cljs$core$IIndexed$_nth$arity$2(null,i__64953);
var temp__5825__auto___65055 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65055)){
var t_65056 = temp__5825__auto___65055;
var G__64958_65057 = ((function (seq__64950,chunk__64951,count__64952,i__64953,t_65056,temp__5825__auto___65055,v,each_fixture_fn,G__64947,G__64947__$1,env,once_fixtures,each_fixtures,vec__64934,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65056)));
});})(seq__64950,chunk__64951,count__64952,i__64953,t_65056,temp__5825__auto___65055,v,each_fixture_fn,G__64947,G__64947__$1,env,once_fixtures,each_fixtures,vec__64934,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64958_65057) : each_fixture_fn.call(null,G__64958_65057));
} else {
}


var G__65058 = seq__64950;
var G__65059 = chunk__64951;
var G__65060 = count__64952;
var G__65061 = (i__64953 + (1));
seq__64950 = G__65058;
chunk__64951 = G__65059;
count__64952 = G__65060;
i__64953 = G__65061;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__64950);
if(temp__5825__auto__){
var seq__64950__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64950__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__64950__$1);
var G__65062 = cljs.core.chunk_rest(seq__64950__$1);
var G__65063 = c__5548__auto__;
var G__65064 = cljs.core.count(c__5548__auto__);
var G__65065 = (0);
seq__64950 = G__65062;
chunk__64951 = G__65063;
count__64952 = G__65064;
i__64953 = G__65065;
continue;
} else {
var v = cljs.core.first(seq__64950__$1);
var temp__5825__auto___65066__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65066__$1)){
var t_65067 = temp__5825__auto___65066__$1;
var G__64959_65068 = ((function (seq__64950,chunk__64951,count__64952,i__64953,t_65067,temp__5825__auto___65066__$1,v,seq__64950__$1,temp__5825__auto__,each_fixture_fn,G__64947,G__64947__$1,env,once_fixtures,each_fixtures,vec__64934,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65067)));
});})(seq__64950,chunk__64951,count__64952,i__64953,t_65067,temp__5825__auto___65066__$1,v,seq__64950__$1,temp__5825__auto__,each_fixture_fn,G__64947,G__64947__$1,env,once_fixtures,each_fixtures,vec__64934,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64959_65068) : each_fixture_fn.call(null,G__64959_65068));
} else {
}


var G__65069 = cljs.core.next(seq__64950__$1);
var G__65070 = null;
var G__65071 = (0);
var G__65072 = (0);
seq__64950 = G__65069;
chunk__64951 = G__65070;
count__64952 = G__65071;
i__64953 = G__65072;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__64948 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__64948.cljs$core$IFn$_invoke$arity$1 ? fexpr__64948.cljs$core$IFn$_invoke$arity$1(G__64949) : fexpr__64948.call(null,G__64949));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64947__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__64932_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64932_SHARP_));
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

var map__64963 = shadow.test.env.get_test_ns_info(ns);
var map__64963__$1 = cljs.core.__destructure_map(map__64963);
var test_ns = map__64963__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64963__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__64967,vars){
var map__64968 = p__64967;
var map__64968__$1 = cljs.core.__destructure_map(map__64968);
var env = map__64968__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64968__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__64970_65073 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__64972_65074 = null;
var count__64973_65075 = (0);
var i__64974_65076 = (0);
while(true){
if((i__64974_65076 < count__64973_65075)){
var vec__64988_65079 = chunk__64972_65074.cljs$core$IIndexed$_nth$arity$2(null,i__64974_65076);
var test_ns_65080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64988_65079,(0),null);
var ns_info_65081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64988_65079,(1),null);
var map__64992_65090 = ns_info_65081;
var map__64992_65091__$1 = cljs.core.__destructure_map(map__64992_65090);
var fixtures_65092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64992_65091__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65093 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65092);
if(cljs.core.truth_(temp__5825__auto___65093)){
var fix_65094 = temp__5825__auto___65093;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65080,fix_65094], 0));
} else {
}

var temp__5825__auto___65095 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65092);
if(cljs.core.truth_(temp__5825__auto___65095)){
var fix_65097 = temp__5825__auto___65095;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65080,fix_65097], 0));
} else {
}


var G__65098 = seq__64970_65073;
var G__65099 = chunk__64972_65074;
var G__65100 = count__64973_65075;
var G__65101 = (i__64974_65076 + (1));
seq__64970_65073 = G__65098;
chunk__64972_65074 = G__65099;
count__64973_65075 = G__65100;
i__64974_65076 = G__65101;
continue;
} else {
var temp__5825__auto___65105 = cljs.core.seq(seq__64970_65073);
if(temp__5825__auto___65105){
var seq__64970_65106__$1 = temp__5825__auto___65105;
if(cljs.core.chunked_seq_QMARK_(seq__64970_65106__$1)){
var c__5548__auto___65107 = cljs.core.chunk_first(seq__64970_65106__$1);
var G__65108 = cljs.core.chunk_rest(seq__64970_65106__$1);
var G__65109 = c__5548__auto___65107;
var G__65110 = cljs.core.count(c__5548__auto___65107);
var G__65111 = (0);
seq__64970_65073 = G__65108;
chunk__64972_65074 = G__65109;
count__64973_65075 = G__65110;
i__64974_65076 = G__65111;
continue;
} else {
var vec__64996_65112 = cljs.core.first(seq__64970_65106__$1);
var test_ns_65113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64996_65112,(0),null);
var ns_info_65114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64996_65112,(1),null);
var map__64999_65115 = ns_info_65114;
var map__64999_65116__$1 = cljs.core.__destructure_map(map__64999_65115);
var fixtures_65117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64999_65116__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65118__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65117);
if(cljs.core.truth_(temp__5825__auto___65118__$1)){
var fix_65119 = temp__5825__auto___65118__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65113,fix_65119], 0));
} else {
}

var temp__5825__auto___65122__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65117);
if(cljs.core.truth_(temp__5825__auto___65122__$1)){
var fix_65123 = temp__5825__auto___65122__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65113,fix_65123], 0));
} else {
}


var G__65124 = cljs.core.next(seq__64970_65106__$1);
var G__65125 = null;
var G__65126 = (0);
var G__65127 = (0);
seq__64970_65073 = G__65124;
chunk__64972_65074 = G__65125;
count__64973_65075 = G__65126;
i__64974_65076 = G__65127;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64966_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64966_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65004 = cljs.test.get_current_env();
var map__65004__$1 = cljs.core.__destructure_map(map__65004);
var env = map__65004__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65004__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65004__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65008 = arguments.length;
switch (G__65008) {
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
var G__65017 = arguments.length;
switch (G__65017) {
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
var map__65022 = shadow.test.env.get_test_ns_info(ns);
var map__65022__$1 = cljs.core.__destructure_map(map__65022);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65032 = arguments.length;
switch (G__65032) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65027_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65027_SHARP_)));
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
var G__65045 = arguments.length;
switch (G__65045) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65040_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65040_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
