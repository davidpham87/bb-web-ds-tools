goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__67011){
var vec__67012 = p__67011;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67012,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67012,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__67015 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__67015__$1 = (((G__67015 instanceof cljs.core.Keyword))?G__67015.fqn:null);
switch (G__67015__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__67017 = (function (){
var seq__67018 = cljs.core.seq(vars__$1);
var chunk__67019 = null;
var count__67020 = (0);
var i__67021 = (0);
while(true){
if((i__67021 < count__67020)){
var v = chunk__67019.cljs$core$IIndexed$_nth$arity$2(null,i__67021);
var temp__5825__auto___67080 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67080)){
var t_67081 = temp__5825__auto___67080;
var G__67030_67082 = ((function (seq__67018,chunk__67019,count__67020,i__67021,t_67081,temp__5825__auto___67080,v,each_fixture_fn,G__67015,G__67015__$1,env,once_fixtures,each_fixtures,vec__67012,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67081)));
});})(seq__67018,chunk__67019,count__67020,i__67021,t_67081,temp__5825__auto___67080,v,each_fixture_fn,G__67015,G__67015__$1,env,once_fixtures,each_fixtures,vec__67012,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67030_67082) : each_fixture_fn.call(null,G__67030_67082));
} else {
}


var G__67083 = seq__67018;
var G__67084 = chunk__67019;
var G__67085 = count__67020;
var G__67086 = (i__67021 + (1));
seq__67018 = G__67083;
chunk__67019 = G__67084;
count__67020 = G__67085;
i__67021 = G__67086;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67018);
if(temp__5825__auto__){
var seq__67018__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67018__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67018__$1);
var G__67087 = cljs.core.chunk_rest(seq__67018__$1);
var G__67088 = c__5548__auto__;
var G__67089 = cljs.core.count(c__5548__auto__);
var G__67090 = (0);
seq__67018 = G__67087;
chunk__67019 = G__67088;
count__67020 = G__67089;
i__67021 = G__67090;
continue;
} else {
var v = cljs.core.first(seq__67018__$1);
var temp__5825__auto___67091__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67091__$1)){
var t_67092 = temp__5825__auto___67091__$1;
var G__67035_67093 = ((function (seq__67018,chunk__67019,count__67020,i__67021,t_67092,temp__5825__auto___67091__$1,v,seq__67018__$1,temp__5825__auto__,each_fixture_fn,G__67015,G__67015__$1,env,once_fixtures,each_fixtures,vec__67012,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67092)));
});})(seq__67018,chunk__67019,count__67020,i__67021,t_67092,temp__5825__auto___67091__$1,v,seq__67018__$1,temp__5825__auto__,each_fixture_fn,G__67015,G__67015__$1,env,once_fixtures,each_fixtures,vec__67012,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67035_67093) : each_fixture_fn.call(null,G__67035_67093));
} else {
}


var G__67094 = cljs.core.next(seq__67018__$1);
var G__67095 = null;
var G__67096 = (0);
var G__67097 = (0);
seq__67018 = G__67094;
chunk__67019 = G__67095;
count__67020 = G__67096;
i__67021 = G__67097;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__67016 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__67016.cljs$core$IFn$_invoke$arity$1 ? fexpr__67016.cljs$core$IFn$_invoke$arity$1(G__67017) : fexpr__67016.call(null,G__67017));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67015__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__67006_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67006_SHARP_));
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

var map__67036 = shadow.test.env.get_test_ns_info(ns);
var map__67036__$1 = cljs.core.__destructure_map(map__67036);
var test_ns = map__67036__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67036__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__67038,vars){
var map__67039 = p__67038;
var map__67039__$1 = cljs.core.__destructure_map(map__67039);
var env = map__67039__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67039__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__67040_67100 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__67042_67101 = null;
var count__67043_67102 = (0);
var i__67044_67103 = (0);
while(true){
if((i__67044_67103 < count__67043_67102)){
var vec__67054_67104 = chunk__67042_67101.cljs$core$IIndexed$_nth$arity$2(null,i__67044_67103);
var test_ns_67105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67054_67104,(0),null);
var ns_info_67106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67054_67104,(1),null);
var map__67057_67107 = ns_info_67106;
var map__67057_67108__$1 = cljs.core.__destructure_map(map__67057_67107);
var fixtures_67109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67057_67108__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67110 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67109);
if(cljs.core.truth_(temp__5825__auto___67110)){
var fix_67111 = temp__5825__auto___67110;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67105,fix_67111], 0));
} else {
}

var temp__5825__auto___67112 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67109);
if(cljs.core.truth_(temp__5825__auto___67112)){
var fix_67114 = temp__5825__auto___67112;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67105,fix_67114], 0));
} else {
}


var G__67115 = seq__67040_67100;
var G__67116 = chunk__67042_67101;
var G__67117 = count__67043_67102;
var G__67118 = (i__67044_67103 + (1));
seq__67040_67100 = G__67115;
chunk__67042_67101 = G__67116;
count__67043_67102 = G__67117;
i__67044_67103 = G__67118;
continue;
} else {
var temp__5825__auto___67119 = cljs.core.seq(seq__67040_67100);
if(temp__5825__auto___67119){
var seq__67040_67120__$1 = temp__5825__auto___67119;
if(cljs.core.chunked_seq_QMARK_(seq__67040_67120__$1)){
var c__5548__auto___67121 = cljs.core.chunk_first(seq__67040_67120__$1);
var G__67122 = cljs.core.chunk_rest(seq__67040_67120__$1);
var G__67123 = c__5548__auto___67121;
var G__67124 = cljs.core.count(c__5548__auto___67121);
var G__67125 = (0);
seq__67040_67100 = G__67122;
chunk__67042_67101 = G__67123;
count__67043_67102 = G__67124;
i__67044_67103 = G__67125;
continue;
} else {
var vec__67058_67126 = cljs.core.first(seq__67040_67120__$1);
var test_ns_67127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67058_67126,(0),null);
var ns_info_67128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67058_67126,(1),null);
var map__67061_67129 = ns_info_67128;
var map__67061_67130__$1 = cljs.core.__destructure_map(map__67061_67129);
var fixtures_67131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67061_67130__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67132__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67131);
if(cljs.core.truth_(temp__5825__auto___67132__$1)){
var fix_67133 = temp__5825__auto___67132__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67127,fix_67133], 0));
} else {
}

var temp__5825__auto___67134__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67131);
if(cljs.core.truth_(temp__5825__auto___67134__$1)){
var fix_67135 = temp__5825__auto___67134__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67127,fix_67135], 0));
} else {
}


var G__67136 = cljs.core.next(seq__67040_67120__$1);
var G__67137 = null;
var G__67138 = (0);
var G__67139 = (0);
seq__67040_67100 = G__67136;
chunk__67042_67101 = G__67137;
count__67043_67102 = G__67138;
i__67044_67103 = G__67139;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67037_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67037_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__67062 = cljs.test.get_current_env();
var map__67062__$1 = cljs.core.__destructure_map(map__67062);
var env = map__67062__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67062__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67062__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__67066 = arguments.length;
switch (G__67066) {
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
var G__67068 = arguments.length;
switch (G__67068) {
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
var map__67069 = shadow.test.env.get_test_ns_info(ns);
var map__67069__$1 = cljs.core.__destructure_map(map__67069);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67069__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__67072 = arguments.length;
switch (G__67072) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67070_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67070_SHARP_)));
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
var G__67075 = arguments.length;
switch (G__67075) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67073_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67073_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
