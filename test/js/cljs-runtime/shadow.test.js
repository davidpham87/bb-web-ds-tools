goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65262){
var vec__65263 = p__65262;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65263,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65263,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65266 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65266__$1 = (((G__65266 instanceof cljs.core.Keyword))?G__65266.fqn:null);
switch (G__65266__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65268 = (function (){
var seq__65269 = cljs.core.seq(vars__$1);
var chunk__65270 = null;
var count__65271 = (0);
var i__65272 = (0);
while(true){
if((i__65272 < count__65271)){
var v = chunk__65270.cljs$core$IIndexed$_nth$arity$2(null,i__65272);
var temp__5825__auto___65324 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65324)){
var t_65325 = temp__5825__auto___65324;
var G__65275_65326 = ((function (seq__65269,chunk__65270,count__65271,i__65272,t_65325,temp__5825__auto___65324,v,each_fixture_fn,G__65266,G__65266__$1,env,once_fixtures,each_fixtures,vec__65263,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65325)));
});})(seq__65269,chunk__65270,count__65271,i__65272,t_65325,temp__5825__auto___65324,v,each_fixture_fn,G__65266,G__65266__$1,env,once_fixtures,each_fixtures,vec__65263,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65275_65326) : each_fixture_fn.call(null,G__65275_65326));
} else {
}


var G__65328 = seq__65269;
var G__65329 = chunk__65270;
var G__65330 = count__65271;
var G__65331 = (i__65272 + (1));
seq__65269 = G__65328;
chunk__65270 = G__65329;
count__65271 = G__65330;
i__65272 = G__65331;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65269);
if(temp__5825__auto__){
var seq__65269__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65269__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65269__$1);
var G__65333 = cljs.core.chunk_rest(seq__65269__$1);
var G__65334 = c__5548__auto__;
var G__65335 = cljs.core.count(c__5548__auto__);
var G__65336 = (0);
seq__65269 = G__65333;
chunk__65270 = G__65334;
count__65271 = G__65335;
i__65272 = G__65336;
continue;
} else {
var v = cljs.core.first(seq__65269__$1);
var temp__5825__auto___65337__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65337__$1)){
var t_65338 = temp__5825__auto___65337__$1;
var G__65276_65339 = ((function (seq__65269,chunk__65270,count__65271,i__65272,t_65338,temp__5825__auto___65337__$1,v,seq__65269__$1,temp__5825__auto__,each_fixture_fn,G__65266,G__65266__$1,env,once_fixtures,each_fixtures,vec__65263,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65338)));
});})(seq__65269,chunk__65270,count__65271,i__65272,t_65338,temp__5825__auto___65337__$1,v,seq__65269__$1,temp__5825__auto__,each_fixture_fn,G__65266,G__65266__$1,env,once_fixtures,each_fixtures,vec__65263,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65276_65339) : each_fixture_fn.call(null,G__65276_65339));
} else {
}


var G__65340 = cljs.core.next(seq__65269__$1);
var G__65341 = null;
var G__65342 = (0);
var G__65343 = (0);
seq__65269 = G__65340;
chunk__65270 = G__65341;
count__65271 = G__65342;
i__65272 = G__65343;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65267 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65267.cljs$core$IFn$_invoke$arity$1 ? fexpr__65267.cljs$core$IFn$_invoke$arity$1(G__65268) : fexpr__65267.call(null,G__65268));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65266__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65261_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65261_SHARP_));
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

var map__65277 = shadow.test.env.get_test_ns_info(ns);
var map__65277__$1 = cljs.core.__destructure_map(map__65277);
var test_ns = map__65277__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65277__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65281,vars){
var map__65282 = p__65281;
var map__65282__$1 = cljs.core.__destructure_map(map__65282);
var env = map__65282__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65282__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65283_65344 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65285_65345 = null;
var count__65286_65346 = (0);
var i__65287_65347 = (0);
while(true){
if((i__65287_65347 < count__65286_65346)){
var vec__65297_65348 = chunk__65285_65345.cljs$core$IIndexed$_nth$arity$2(null,i__65287_65347);
var test_ns_65349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65297_65348,(0),null);
var ns_info_65350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65297_65348,(1),null);
var map__65300_65351 = ns_info_65350;
var map__65300_65352__$1 = cljs.core.__destructure_map(map__65300_65351);
var fixtures_65353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300_65352__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65354 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65353);
if(cljs.core.truth_(temp__5825__auto___65354)){
var fix_65355 = temp__5825__auto___65354;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65349,fix_65355], 0));
} else {
}

var temp__5825__auto___65356 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65353);
if(cljs.core.truth_(temp__5825__auto___65356)){
var fix_65357 = temp__5825__auto___65356;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65349,fix_65357], 0));
} else {
}


var G__65358 = seq__65283_65344;
var G__65359 = chunk__65285_65345;
var G__65360 = count__65286_65346;
var G__65361 = (i__65287_65347 + (1));
seq__65283_65344 = G__65358;
chunk__65285_65345 = G__65359;
count__65286_65346 = G__65360;
i__65287_65347 = G__65361;
continue;
} else {
var temp__5825__auto___65362 = cljs.core.seq(seq__65283_65344);
if(temp__5825__auto___65362){
var seq__65283_65363__$1 = temp__5825__auto___65362;
if(cljs.core.chunked_seq_QMARK_(seq__65283_65363__$1)){
var c__5548__auto___65364 = cljs.core.chunk_first(seq__65283_65363__$1);
var G__65365 = cljs.core.chunk_rest(seq__65283_65363__$1);
var G__65366 = c__5548__auto___65364;
var G__65367 = cljs.core.count(c__5548__auto___65364);
var G__65368 = (0);
seq__65283_65344 = G__65365;
chunk__65285_65345 = G__65366;
count__65286_65346 = G__65367;
i__65287_65347 = G__65368;
continue;
} else {
var vec__65301_65369 = cljs.core.first(seq__65283_65363__$1);
var test_ns_65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65301_65369,(0),null);
var ns_info_65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65301_65369,(1),null);
var map__65304_65372 = ns_info_65371;
var map__65304_65373__$1 = cljs.core.__destructure_map(map__65304_65372);
var fixtures_65374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304_65373__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65375__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65374);
if(cljs.core.truth_(temp__5825__auto___65375__$1)){
var fix_65376 = temp__5825__auto___65375__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65370,fix_65376], 0));
} else {
}

var temp__5825__auto___65377__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65374);
if(cljs.core.truth_(temp__5825__auto___65377__$1)){
var fix_65378 = temp__5825__auto___65377__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65370,fix_65378], 0));
} else {
}


var G__65379 = cljs.core.next(seq__65283_65363__$1);
var G__65380 = null;
var G__65381 = (0);
var G__65382 = (0);
seq__65283_65344 = G__65379;
chunk__65285_65345 = G__65380;
count__65286_65346 = G__65381;
i__65287_65347 = G__65382;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65279_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65279_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65307 = cljs.test.get_current_env();
var map__65307__$1 = cljs.core.__destructure_map(map__65307);
var env = map__65307__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65309 = arguments.length;
switch (G__65309) {
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
var G__65312 = arguments.length;
switch (G__65312) {
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
var map__65313 = shadow.test.env.get_test_ns_info(ns);
var map__65313__$1 = cljs.core.__destructure_map(map__65313);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65313__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65316 = arguments.length;
switch (G__65316) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65314_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65314_SHARP_)));
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
var G__65321 = arguments.length;
switch (G__65321) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65319_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65319_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
