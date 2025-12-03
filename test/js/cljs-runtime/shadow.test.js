goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__64966){
var vec__64967 = p__64966;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64967,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64967,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__64970 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__64970__$1 = (((G__64970 instanceof cljs.core.Keyword))?G__64970.fqn:null);
switch (G__64970__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__64972 = (function (){
var seq__64973 = cljs.core.seq(vars__$1);
var chunk__64974 = null;
var count__64975 = (0);
var i__64976 = (0);
while(true){
if((i__64976 < count__64975)){
var v = chunk__64974.cljs$core$IIndexed$_nth$arity$2(null,i__64976);
var temp__5825__auto___65027 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65027)){
var t_65028 = temp__5825__auto___65027;
var G__64979_65029 = ((function (seq__64973,chunk__64974,count__64975,i__64976,t_65028,temp__5825__auto___65027,v,each_fixture_fn,G__64970,G__64970__$1,env,once_fixtures,each_fixtures,vec__64967,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65028)));
});})(seq__64973,chunk__64974,count__64975,i__64976,t_65028,temp__5825__auto___65027,v,each_fixture_fn,G__64970,G__64970__$1,env,once_fixtures,each_fixtures,vec__64967,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64979_65029) : each_fixture_fn.call(null,G__64979_65029));
} else {
}


var G__65030 = seq__64973;
var G__65031 = chunk__64974;
var G__65032 = count__64975;
var G__65033 = (i__64976 + (1));
seq__64973 = G__65030;
chunk__64974 = G__65031;
count__64975 = G__65032;
i__64976 = G__65033;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__64973);
if(temp__5825__auto__){
var seq__64973__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64973__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__64973__$1);
var G__65034 = cljs.core.chunk_rest(seq__64973__$1);
var G__65035 = c__5548__auto__;
var G__65036 = cljs.core.count(c__5548__auto__);
var G__65037 = (0);
seq__64973 = G__65034;
chunk__64974 = G__65035;
count__64975 = G__65036;
i__64976 = G__65037;
continue;
} else {
var v = cljs.core.first(seq__64973__$1);
var temp__5825__auto___65038__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65038__$1)){
var t_65039 = temp__5825__auto___65038__$1;
var G__64980_65040 = ((function (seq__64973,chunk__64974,count__64975,i__64976,t_65039,temp__5825__auto___65038__$1,v,seq__64973__$1,temp__5825__auto__,each_fixture_fn,G__64970,G__64970__$1,env,once_fixtures,each_fixtures,vec__64967,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65039)));
});})(seq__64973,chunk__64974,count__64975,i__64976,t_65039,temp__5825__auto___65038__$1,v,seq__64973__$1,temp__5825__auto__,each_fixture_fn,G__64970,G__64970__$1,env,once_fixtures,each_fixtures,vec__64967,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__64980_65040) : each_fixture_fn.call(null,G__64980_65040));
} else {
}


var G__65042 = cljs.core.next(seq__64973__$1);
var G__65043 = null;
var G__65044 = (0);
var G__65045 = (0);
seq__64973 = G__65042;
chunk__64974 = G__65043;
count__64975 = G__65044;
i__64976 = G__65045;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__64971 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__64971.cljs$core$IFn$_invoke$arity$1 ? fexpr__64971.cljs$core$IFn$_invoke$arity$1(G__64972) : fexpr__64971.call(null,G__64972));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64970__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__64965_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64965_SHARP_));
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

var map__64981 = shadow.test.env.get_test_ns_info(ns);
var map__64981__$1 = cljs.core.__destructure_map(map__64981);
var test_ns = map__64981__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64981__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__64983,vars){
var map__64984 = p__64983;
var map__64984__$1 = cljs.core.__destructure_map(map__64984);
var env = map__64984__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64984__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__64985_65048 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__64987_65049 = null;
var count__64988_65050 = (0);
var i__64989_65051 = (0);
while(true){
if((i__64989_65051 < count__64988_65050)){
var vec__64999_65052 = chunk__64987_65049.cljs$core$IIndexed$_nth$arity$2(null,i__64989_65051);
var test_ns_65053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999_65052,(0),null);
var ns_info_65054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999_65052,(1),null);
var map__65002_65056 = ns_info_65054;
var map__65002_65057__$1 = cljs.core.__destructure_map(map__65002_65056);
var fixtures_65058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65002_65057__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65060 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65058);
if(cljs.core.truth_(temp__5825__auto___65060)){
var fix_65061 = temp__5825__auto___65060;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65053,fix_65061], 0));
} else {
}

var temp__5825__auto___65062 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65058);
if(cljs.core.truth_(temp__5825__auto___65062)){
var fix_65063 = temp__5825__auto___65062;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65053,fix_65063], 0));
} else {
}


var G__65064 = seq__64985_65048;
var G__65065 = chunk__64987_65049;
var G__65066 = count__64988_65050;
var G__65067 = (i__64989_65051 + (1));
seq__64985_65048 = G__65064;
chunk__64987_65049 = G__65065;
count__64988_65050 = G__65066;
i__64989_65051 = G__65067;
continue;
} else {
var temp__5825__auto___65068 = cljs.core.seq(seq__64985_65048);
if(temp__5825__auto___65068){
var seq__64985_65069__$1 = temp__5825__auto___65068;
if(cljs.core.chunked_seq_QMARK_(seq__64985_65069__$1)){
var c__5548__auto___65070 = cljs.core.chunk_first(seq__64985_65069__$1);
var G__65071 = cljs.core.chunk_rest(seq__64985_65069__$1);
var G__65072 = c__5548__auto___65070;
var G__65073 = cljs.core.count(c__5548__auto___65070);
var G__65074 = (0);
seq__64985_65048 = G__65071;
chunk__64987_65049 = G__65072;
count__64988_65050 = G__65073;
i__64989_65051 = G__65074;
continue;
} else {
var vec__65003_65075 = cljs.core.first(seq__64985_65069__$1);
var test_ns_65076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65003_65075,(0),null);
var ns_info_65077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65003_65075,(1),null);
var map__65006_65078 = ns_info_65077;
var map__65006_65079__$1 = cljs.core.__destructure_map(map__65006_65078);
var fixtures_65080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65006_65079__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65081__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65080);
if(cljs.core.truth_(temp__5825__auto___65081__$1)){
var fix_65082 = temp__5825__auto___65081__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65076,fix_65082], 0));
} else {
}

var temp__5825__auto___65083__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65080);
if(cljs.core.truth_(temp__5825__auto___65083__$1)){
var fix_65084 = temp__5825__auto___65083__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65076,fix_65084], 0));
} else {
}


var G__65085 = cljs.core.next(seq__64985_65069__$1);
var G__65086 = null;
var G__65087 = (0);
var G__65088 = (0);
seq__64985_65048 = G__65085;
chunk__64987_65049 = G__65086;
count__64988_65050 = G__65087;
i__64989_65051 = G__65088;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64982_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64982_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65007 = cljs.test.get_current_env();
var map__65007__$1 = cljs.core.__destructure_map(map__65007);
var env = map__65007__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65009 = arguments.length;
switch (G__65009) {
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
var G__65011 = arguments.length;
switch (G__65011) {
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
var map__65014 = shadow.test.env.get_test_ns_info(ns);
var map__65014__$1 = cljs.core.__destructure_map(map__65014);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65014__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65017 = arguments.length;
switch (G__65017) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65015_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65015_SHARP_)));
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
var G__65022 = arguments.length;
switch (G__65022) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65020_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65020_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
