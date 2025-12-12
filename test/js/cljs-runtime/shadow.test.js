goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__66983){
var vec__66984 = p__66983;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66984,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66984,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__66987 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__66987__$1 = (((G__66987 instanceof cljs.core.Keyword))?G__66987.fqn:null);
switch (G__66987__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__66989 = (function (){
var seq__66990 = cljs.core.seq(vars__$1);
var chunk__66991 = null;
var count__66992 = (0);
var i__66993 = (0);
while(true){
if((i__66993 < count__66992)){
var v = chunk__66991.cljs$core$IIndexed$_nth$arity$2(null,i__66993);
var temp__5825__auto___67044 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67044)){
var t_67045 = temp__5825__auto___67044;
var G__66999_67046 = ((function (seq__66990,chunk__66991,count__66992,i__66993,t_67045,temp__5825__auto___67044,v,each_fixture_fn,G__66987,G__66987__$1,env,once_fixtures,each_fixtures,vec__66984,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67045)));
});})(seq__66990,chunk__66991,count__66992,i__66993,t_67045,temp__5825__auto___67044,v,each_fixture_fn,G__66987,G__66987__$1,env,once_fixtures,each_fixtures,vec__66984,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__66999_67046) : each_fixture_fn.call(null,G__66999_67046));
} else {
}


var G__67047 = seq__66990;
var G__67048 = chunk__66991;
var G__67049 = count__66992;
var G__67050 = (i__66993 + (1));
seq__66990 = G__67047;
chunk__66991 = G__67048;
count__66992 = G__67049;
i__66993 = G__67050;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66990);
if(temp__5825__auto__){
var seq__66990__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66990__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66990__$1);
var G__67051 = cljs.core.chunk_rest(seq__66990__$1);
var G__67052 = c__5548__auto__;
var G__67053 = cljs.core.count(c__5548__auto__);
var G__67054 = (0);
seq__66990 = G__67051;
chunk__66991 = G__67052;
count__66992 = G__67053;
i__66993 = G__67054;
continue;
} else {
var v = cljs.core.first(seq__66990__$1);
var temp__5825__auto___67055__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67055__$1)){
var t_67056 = temp__5825__auto___67055__$1;
var G__67000_67057 = ((function (seq__66990,chunk__66991,count__66992,i__66993,t_67056,temp__5825__auto___67055__$1,v,seq__66990__$1,temp__5825__auto__,each_fixture_fn,G__66987,G__66987__$1,env,once_fixtures,each_fixtures,vec__66984,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67056)));
});})(seq__66990,chunk__66991,count__66992,i__66993,t_67056,temp__5825__auto___67055__$1,v,seq__66990__$1,temp__5825__auto__,each_fixture_fn,G__66987,G__66987__$1,env,once_fixtures,each_fixtures,vec__66984,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67000_67057) : each_fixture_fn.call(null,G__67000_67057));
} else {
}


var G__67058 = cljs.core.next(seq__66990__$1);
var G__67059 = null;
var G__67060 = (0);
var G__67061 = (0);
seq__66990 = G__67058;
chunk__66991 = G__67059;
count__66992 = G__67060;
i__66993 = G__67061;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__66988 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__66988.cljs$core$IFn$_invoke$arity$1 ? fexpr__66988.cljs$core$IFn$_invoke$arity$1(G__66989) : fexpr__66988.call(null,G__66989));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66987__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__66980_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__66980_SHARP_));
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

var seq__67005_67063 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__67007_67064 = null;
var count__67008_67065 = (0);
var i__67009_67066 = (0);
while(true){
if((i__67009_67066 < count__67008_67065)){
var vec__67019_67067 = chunk__67007_67064.cljs$core$IIndexed$_nth$arity$2(null,i__67009_67066);
var test_ns_67068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67019_67067,(0),null);
var ns_info_67069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67019_67067,(1),null);
var map__67022_67070 = ns_info_67069;
var map__67022_67071__$1 = cljs.core.__destructure_map(map__67022_67070);
var fixtures_67072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67022_67071__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67073 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67072);
if(cljs.core.truth_(temp__5825__auto___67073)){
var fix_67074 = temp__5825__auto___67073;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67068,fix_67074], 0));
} else {
}

var temp__5825__auto___67076 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67072);
if(cljs.core.truth_(temp__5825__auto___67076)){
var fix_67077 = temp__5825__auto___67076;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67068,fix_67077], 0));
} else {
}


var G__67079 = seq__67005_67063;
var G__67080 = chunk__67007_67064;
var G__67081 = count__67008_67065;
var G__67082 = (i__67009_67066 + (1));
seq__67005_67063 = G__67079;
chunk__67007_67064 = G__67080;
count__67008_67065 = G__67081;
i__67009_67066 = G__67082;
continue;
} else {
var temp__5825__auto___67083 = cljs.core.seq(seq__67005_67063);
if(temp__5825__auto___67083){
var seq__67005_67084__$1 = temp__5825__auto___67083;
if(cljs.core.chunked_seq_QMARK_(seq__67005_67084__$1)){
var c__5548__auto___67085 = cljs.core.chunk_first(seq__67005_67084__$1);
var G__67086 = cljs.core.chunk_rest(seq__67005_67084__$1);
var G__67087 = c__5548__auto___67085;
var G__67088 = cljs.core.count(c__5548__auto___67085);
var G__67089 = (0);
seq__67005_67063 = G__67086;
chunk__67007_67064 = G__67087;
count__67008_67065 = G__67088;
i__67009_67066 = G__67089;
continue;
} else {
var vec__67023_67090 = cljs.core.first(seq__67005_67084__$1);
var test_ns_67091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67023_67090,(0),null);
var ns_info_67092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67023_67090,(1),null);
var map__67026_67093 = ns_info_67092;
var map__67026_67094__$1 = cljs.core.__destructure_map(map__67026_67093);
var fixtures_67095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67026_67094__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67097__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67095);
if(cljs.core.truth_(temp__5825__auto___67097__$1)){
var fix_67098 = temp__5825__auto___67097__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67091,fix_67098], 0));
} else {
}

var temp__5825__auto___67099__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67095);
if(cljs.core.truth_(temp__5825__auto___67099__$1)){
var fix_67100 = temp__5825__auto___67099__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67091,fix_67100], 0));
} else {
}


var G__67101 = cljs.core.next(seq__67005_67084__$1);
var G__67102 = null;
var G__67103 = (0);
var G__67104 = (0);
seq__67005_67063 = G__67101;
chunk__67007_67064 = G__67102;
count__67008_67065 = G__67103;
i__67009_67066 = G__67104;
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
var map__67027 = cljs.test.get_current_env();
var map__67027__$1 = cljs.core.__destructure_map(map__67027);
var env = map__67027__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67027__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67027__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__67029 = arguments.length;
switch (G__67029) {
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
var G__67031 = arguments.length;
switch (G__67031) {
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
var map__67032 = shadow.test.env.get_test_ns_info(ns);
var map__67032__$1 = cljs.core.__destructure_map(map__67032);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67032__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__67035 = arguments.length;
switch (G__67035) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67033_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67033_SHARP_)));
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
var G__67038 = arguments.length;
switch (G__67038) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67036_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67036_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
