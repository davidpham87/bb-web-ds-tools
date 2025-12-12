goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__66984){
var vec__66985 = p__66984;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66985,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66985,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__66988 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__66988__$1 = (((G__66988 instanceof cljs.core.Keyword))?G__66988.fqn:null);
switch (G__66988__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__66990 = (function (){
var seq__66991 = cljs.core.seq(vars__$1);
var chunk__66992 = null;
var count__66993 = (0);
var i__66994 = (0);
while(true){
if((i__66994 < count__66993)){
var v = chunk__66992.cljs$core$IIndexed$_nth$arity$2(null,i__66994);
var temp__5825__auto___67060 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67060)){
var t_67061 = temp__5825__auto___67060;
var G__66997_67062 = ((function (seq__66991,chunk__66992,count__66993,i__66994,t_67061,temp__5825__auto___67060,v,each_fixture_fn,G__66988,G__66988__$1,env,once_fixtures,each_fixtures,vec__66985,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67061)));
});})(seq__66991,chunk__66992,count__66993,i__66994,t_67061,temp__5825__auto___67060,v,each_fixture_fn,G__66988,G__66988__$1,env,once_fixtures,each_fixtures,vec__66985,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__66997_67062) : each_fixture_fn.call(null,G__66997_67062));
} else {
}


var G__67063 = seq__66991;
var G__67064 = chunk__66992;
var G__67065 = count__66993;
var G__67066 = (i__66994 + (1));
seq__66991 = G__67063;
chunk__66992 = G__67064;
count__66993 = G__67065;
i__66994 = G__67066;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66991);
if(temp__5825__auto__){
var seq__66991__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66991__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66991__$1);
var G__67067 = cljs.core.chunk_rest(seq__66991__$1);
var G__67068 = c__5548__auto__;
var G__67069 = cljs.core.count(c__5548__auto__);
var G__67070 = (0);
seq__66991 = G__67067;
chunk__66992 = G__67068;
count__66993 = G__67069;
i__66994 = G__67070;
continue;
} else {
var v = cljs.core.first(seq__66991__$1);
var temp__5825__auto___67071__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67071__$1)){
var t_67072 = temp__5825__auto___67071__$1;
var G__67000_67073 = ((function (seq__66991,chunk__66992,count__66993,i__66994,t_67072,temp__5825__auto___67071__$1,v,seq__66991__$1,temp__5825__auto__,each_fixture_fn,G__66988,G__66988__$1,env,once_fixtures,each_fixtures,vec__66985,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67072)));
});})(seq__66991,chunk__66992,count__66993,i__66994,t_67072,temp__5825__auto___67071__$1,v,seq__66991__$1,temp__5825__auto__,each_fixture_fn,G__66988,G__66988__$1,env,once_fixtures,each_fixtures,vec__66985,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67000_67073) : each_fixture_fn.call(null,G__67000_67073));
} else {
}


var G__67074 = cljs.core.next(seq__66991__$1);
var G__67075 = null;
var G__67076 = (0);
var G__67077 = (0);
seq__66991 = G__67074;
chunk__66992 = G__67075;
count__66993 = G__67076;
i__66994 = G__67077;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__66989 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__66989.cljs$core$IFn$_invoke$arity$1 ? fexpr__66989.cljs$core$IFn$_invoke$arity$1(G__66990) : fexpr__66989.call(null,G__66990));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66988__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__66983_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__66983_SHARP_));
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

var map__67001 = shadow.test.env.get_test_ns_info(ns);
var map__67001__$1 = cljs.core.__destructure_map(map__67001);
var test_ns = map__67001__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67001__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__67003,vars){
var map__67004 = p__67003;
var map__67004__$1 = cljs.core.__destructure_map(map__67004);
var env = map__67004__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67004__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__67005_67078 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__67008_67079 = null;
var count__67009_67080 = (0);
var i__67010_67081 = (0);
while(true){
if((i__67010_67081 < count__67009_67080)){
var vec__67024_67082 = chunk__67008_67079.cljs$core$IIndexed$_nth$arity$2(null,i__67010_67081);
var test_ns_67083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67024_67082,(0),null);
var ns_info_67084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67024_67082,(1),null);
var map__67027_67085 = ns_info_67084;
var map__67027_67086__$1 = cljs.core.__destructure_map(map__67027_67085);
var fixtures_67087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67027_67086__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67089 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67087);
if(cljs.core.truth_(temp__5825__auto___67089)){
var fix_67090 = temp__5825__auto___67089;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67083,fix_67090], 0));
} else {
}

var temp__5825__auto___67092 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67087);
if(cljs.core.truth_(temp__5825__auto___67092)){
var fix_67093 = temp__5825__auto___67092;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67083,fix_67093], 0));
} else {
}


var G__67094 = seq__67005_67078;
var G__67095 = chunk__67008_67079;
var G__67096 = count__67009_67080;
var G__67097 = (i__67010_67081 + (1));
seq__67005_67078 = G__67094;
chunk__67008_67079 = G__67095;
count__67009_67080 = G__67096;
i__67010_67081 = G__67097;
continue;
} else {
var temp__5825__auto___67098 = cljs.core.seq(seq__67005_67078);
if(temp__5825__auto___67098){
var seq__67005_67099__$1 = temp__5825__auto___67098;
if(cljs.core.chunked_seq_QMARK_(seq__67005_67099__$1)){
var c__5548__auto___67100 = cljs.core.chunk_first(seq__67005_67099__$1);
var G__67101 = cljs.core.chunk_rest(seq__67005_67099__$1);
var G__67102 = c__5548__auto___67100;
var G__67103 = cljs.core.count(c__5548__auto___67100);
var G__67104 = (0);
seq__67005_67078 = G__67101;
chunk__67008_67079 = G__67102;
count__67009_67080 = G__67103;
i__67010_67081 = G__67104;
continue;
} else {
var vec__67030_67105 = cljs.core.first(seq__67005_67099__$1);
var test_ns_67106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67030_67105,(0),null);
var ns_info_67107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67030_67105,(1),null);
var map__67033_67108 = ns_info_67107;
var map__67033_67109__$1 = cljs.core.__destructure_map(map__67033_67108);
var fixtures_67110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67033_67109__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67111__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67110);
if(cljs.core.truth_(temp__5825__auto___67111__$1)){
var fix_67112 = temp__5825__auto___67111__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67106,fix_67112], 0));
} else {
}

var temp__5825__auto___67113__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67110);
if(cljs.core.truth_(temp__5825__auto___67113__$1)){
var fix_67114 = temp__5825__auto___67113__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67106,fix_67114], 0));
} else {
}


var G__67115 = cljs.core.next(seq__67005_67099__$1);
var G__67116 = null;
var G__67117 = (0);
var G__67118 = (0);
seq__67005_67078 = G__67115;
chunk__67008_67079 = G__67116;
count__67009_67080 = G__67117;
i__67010_67081 = G__67118;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67002_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67002_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__67036 = cljs.test.get_current_env();
var map__67036__$1 = cljs.core.__destructure_map(map__67036);
var env = map__67036__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67036__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67036__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__67038 = arguments.length;
switch (G__67038) {
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
var G__67042 = arguments.length;
switch (G__67042) {
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
var map__67045 = shadow.test.env.get_test_ns_info(ns);
var map__67045__$1 = cljs.core.__destructure_map(map__67045);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__67050 = arguments.length;
switch (G__67050) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67048_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67048_SHARP_)));
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
var G__67054 = arguments.length;
switch (G__67054) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67052_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67052_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
