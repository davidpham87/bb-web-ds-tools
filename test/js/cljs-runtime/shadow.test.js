goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__64960){
var vec__64961 = p__64960;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64961,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64961,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__64964 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__64964__$1 = (((G__64964 instanceof cljs.core.Keyword))?G__64964.fqn:null);
switch (G__64964__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__64966 = (function (){
var seq__64967 = cljs.core.seq(vars__$1);
var chunk__64968 = null;
var count__64969 = (0);
var i__64970 = (0);
while(true){
if((i__64970 < count__64969)){
var v = chunk__64968.cljs$core$IIndexed$_nth$arity$2(null,i__64970);
var temp__5825__auto___65031 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65031)){
var t_65032 = temp__5825__auto___65031;
var G__64973_65033 = ((function (seq__64967,chunk__64968,count__64969,i__64970,t_65032,temp__5825__auto___65031,v,each_fixture_fn,G__64964,G__64964__$1,env,once_fixtures,each_fixtures,vec__64961,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65032)));
});})(seq__64967,chunk__64968,count__64969,i__64970,t_65032,temp__5825__auto___65031,v,each_fixture_fn,G__64964,G__64964__$1,env,once_fixtures,each_fixtures,vec__64961,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64973_65033) : each_fixture_fn.call(null,G__64973_65033));
} else {
}


var G__65035 = seq__64967;
var G__65036 = chunk__64968;
var G__65037 = count__64969;
var G__65038 = (i__64970 + (1));
seq__64967 = G__65035;
chunk__64968 = G__65036;
count__64969 = G__65037;
i__64970 = G__65038;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__64967);
if(temp__5825__auto__){
var seq__64967__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64967__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__64967__$1);
var G__65039 = cljs.core.chunk_rest(seq__64967__$1);
var G__65040 = c__5548__auto__;
var G__65041 = cljs.core.count(c__5548__auto__);
var G__65042 = (0);
seq__64967 = G__65039;
chunk__64968 = G__65040;
count__64969 = G__65041;
i__64970 = G__65042;
continue;
} else {
var v = cljs.core.first(seq__64967__$1);
var temp__5825__auto___65043__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65043__$1)){
var t_65044 = temp__5825__auto___65043__$1;
var G__64974_65045 = ((function (seq__64967,chunk__64968,count__64969,i__64970,t_65044,temp__5825__auto___65043__$1,v,seq__64967__$1,temp__5825__auto__,each_fixture_fn,G__64964,G__64964__$1,env,once_fixtures,each_fixtures,vec__64961,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65044)));
});})(seq__64967,chunk__64968,count__64969,i__64970,t_65044,temp__5825__auto___65043__$1,v,seq__64967__$1,temp__5825__auto__,each_fixture_fn,G__64964,G__64964__$1,env,once_fixtures,each_fixtures,vec__64961,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64974_65045) : each_fixture_fn.call(null,G__64974_65045));
} else {
}


var G__65046 = cljs.core.next(seq__64967__$1);
var G__65047 = null;
var G__65048 = (0);
var G__65049 = (0);
seq__64967 = G__65046;
chunk__64968 = G__65047;
count__64969 = G__65048;
i__64970 = G__65049;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__64965 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__64965.cljs$core$IFn$_invoke$arity$1 ? fexpr__64965.cljs$core$IFn$_invoke$arity$1(G__64966) : fexpr__64965.call(null,G__64966));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64964__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__64959_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64959_SHARP_));
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

var map__64975 = shadow.test.env.get_test_ns_info(ns);
var map__64975__$1 = cljs.core.__destructure_map(map__64975);
var test_ns = map__64975__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64975__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__64977,vars){
var map__64978 = p__64977;
var map__64978__$1 = cljs.core.__destructure_map(map__64978);
var env = map__64978__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__64979_65054 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__64981_65055 = null;
var count__64982_65056 = (0);
var i__64983_65057 = (0);
while(true){
if((i__64983_65057 < count__64982_65056)){
var vec__64995_65058 = chunk__64981_65055.cljs$core$IIndexed$_nth$arity$2(null,i__64983_65057);
var test_ns_65059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64995_65058,(0),null);
var ns_info_65060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64995_65058,(1),null);
var map__64998_65061 = ns_info_65060;
var map__64998_65062__$1 = cljs.core.__destructure_map(map__64998_65061);
var fixtures_65063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64998_65062__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65064 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65063);
if(cljs.core.truth_(temp__5825__auto___65064)){
var fix_65065 = temp__5825__auto___65064;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65059,fix_65065], 0));
} else {
}

var temp__5825__auto___65066 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65063);
if(cljs.core.truth_(temp__5825__auto___65066)){
var fix_65067 = temp__5825__auto___65066;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65059,fix_65067], 0));
} else {
}


var G__65068 = seq__64979_65054;
var G__65069 = chunk__64981_65055;
var G__65070 = count__64982_65056;
var G__65071 = (i__64983_65057 + (1));
seq__64979_65054 = G__65068;
chunk__64981_65055 = G__65069;
count__64982_65056 = G__65070;
i__64983_65057 = G__65071;
continue;
} else {
var temp__5825__auto___65072 = cljs.core.seq(seq__64979_65054);
if(temp__5825__auto___65072){
var seq__64979_65073__$1 = temp__5825__auto___65072;
if(cljs.core.chunked_seq_QMARK_(seq__64979_65073__$1)){
var c__5548__auto___65074 = cljs.core.chunk_first(seq__64979_65073__$1);
var G__65075 = cljs.core.chunk_rest(seq__64979_65073__$1);
var G__65076 = c__5548__auto___65074;
var G__65077 = cljs.core.count(c__5548__auto___65074);
var G__65078 = (0);
seq__64979_65054 = G__65075;
chunk__64981_65055 = G__65076;
count__64982_65056 = G__65077;
i__64983_65057 = G__65078;
continue;
} else {
var vec__64999_65079 = cljs.core.first(seq__64979_65073__$1);
var test_ns_65080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999_65079,(0),null);
var ns_info_65081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999_65079,(1),null);
var map__65002_65082 = ns_info_65081;
var map__65002_65083__$1 = cljs.core.__destructure_map(map__65002_65082);
var fixtures_65084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65002_65083__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65086__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65084);
if(cljs.core.truth_(temp__5825__auto___65086__$1)){
var fix_65088 = temp__5825__auto___65086__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65080,fix_65088], 0));
} else {
}

var temp__5825__auto___65089__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65084);
if(cljs.core.truth_(temp__5825__auto___65089__$1)){
var fix_65090 = temp__5825__auto___65089__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65080,fix_65090], 0));
} else {
}


var G__65091 = cljs.core.next(seq__64979_65073__$1);
var G__65092 = null;
var G__65093 = (0);
var G__65094 = (0);
seq__64979_65054 = G__65091;
chunk__64981_65055 = G__65092;
count__64982_65056 = G__65093;
i__64983_65057 = G__65094;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64976_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64976_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65003 = cljs.test.get_current_env();
var map__65003__$1 = cljs.core.__destructure_map(map__65003);
var env = map__65003__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65003__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65003__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65007 = arguments.length;
switch (G__65007) {
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
var G__65012 = arguments.length;
switch (G__65012) {
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
var map__65013 = shadow.test.env.get_test_ns_info(ns);
var map__65013__$1 = cljs.core.__destructure_map(map__65013);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65013__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65018 = arguments.length;
switch (G__65018) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65016_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65016_SHARP_)));
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
var G__65023 = arguments.length;
switch (G__65023) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65021_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65021_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
