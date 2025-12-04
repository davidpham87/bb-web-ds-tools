goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65245){
var vec__65246 = p__65245;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65246,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65246,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65249 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65249__$1 = (((G__65249 instanceof cljs.core.Keyword))?G__65249.fqn:null);
switch (G__65249__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65252 = (function (){
var seq__65253 = cljs.core.seq(vars__$1);
var chunk__65254 = null;
var count__65255 = (0);
var i__65256 = (0);
while(true){
if((i__65256 < count__65255)){
var v = chunk__65254.cljs$core$IIndexed$_nth$arity$2(null,i__65256);
var temp__5825__auto___65334 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65334)){
var t_65335 = temp__5825__auto___65334;
var G__65261_65336 = ((function (seq__65253,chunk__65254,count__65255,i__65256,t_65335,temp__5825__auto___65334,v,each_fixture_fn,G__65249,G__65249__$1,env,once_fixtures,each_fixtures,vec__65246,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65335)));
});})(seq__65253,chunk__65254,count__65255,i__65256,t_65335,temp__5825__auto___65334,v,each_fixture_fn,G__65249,G__65249__$1,env,once_fixtures,each_fixtures,vec__65246,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65261_65336) : each_fixture_fn.call(null,G__65261_65336));
} else {
}


var G__65337 = seq__65253;
var G__65338 = chunk__65254;
var G__65339 = count__65255;
var G__65340 = (i__65256 + (1));
seq__65253 = G__65337;
chunk__65254 = G__65338;
count__65255 = G__65339;
i__65256 = G__65340;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65253);
if(temp__5825__auto__){
var seq__65253__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65253__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65253__$1);
var G__65341 = cljs.core.chunk_rest(seq__65253__$1);
var G__65342 = c__5548__auto__;
var G__65343 = cljs.core.count(c__5548__auto__);
var G__65344 = (0);
seq__65253 = G__65341;
chunk__65254 = G__65342;
count__65255 = G__65343;
i__65256 = G__65344;
continue;
} else {
var v = cljs.core.first(seq__65253__$1);
var temp__5825__auto___65345__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65345__$1)){
var t_65346 = temp__5825__auto___65345__$1;
var G__65269_65347 = ((function (seq__65253,chunk__65254,count__65255,i__65256,t_65346,temp__5825__auto___65345__$1,v,seq__65253__$1,temp__5825__auto__,each_fixture_fn,G__65249,G__65249__$1,env,once_fixtures,each_fixtures,vec__65246,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65346)));
});})(seq__65253,chunk__65254,count__65255,i__65256,t_65346,temp__5825__auto___65345__$1,v,seq__65253__$1,temp__5825__auto__,each_fixture_fn,G__65249,G__65249__$1,env,once_fixtures,each_fixtures,vec__65246,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65269_65347) : each_fixture_fn.call(null,G__65269_65347));
} else {
}


var G__65348 = cljs.core.next(seq__65253__$1);
var G__65349 = null;
var G__65350 = (0);
var G__65351 = (0);
seq__65253 = G__65348;
chunk__65254 = G__65349;
count__65255 = G__65350;
i__65256 = G__65351;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65251 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65251.cljs$core$IFn$_invoke$arity$1 ? fexpr__65251.cljs$core$IFn$_invoke$arity$1(G__65252) : fexpr__65251.call(null,G__65252));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65249__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65243_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65243_SHARP_));
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

var map__65274 = shadow.test.env.get_test_ns_info(ns);
var map__65274__$1 = cljs.core.__destructure_map(map__65274);
var test_ns = map__65274__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65274__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65279,vars){
var map__65280 = p__65279;
var map__65280__$1 = cljs.core.__destructure_map(map__65280);
var env = map__65280__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65281_65352 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65283_65353 = null;
var count__65284_65354 = (0);
var i__65285_65355 = (0);
while(true){
if((i__65285_65355 < count__65284_65354)){
var vec__65297_65357 = chunk__65283_65353.cljs$core$IIndexed$_nth$arity$2(null,i__65285_65355);
var test_ns_65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65297_65357,(0),null);
var ns_info_65359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65297_65357,(1),null);
var map__65300_65360 = ns_info_65359;
var map__65300_65361__$1 = cljs.core.__destructure_map(map__65300_65360);
var fixtures_65362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300_65361__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65363 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65362);
if(cljs.core.truth_(temp__5825__auto___65363)){
var fix_65364 = temp__5825__auto___65363;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65358,fix_65364], 0));
} else {
}

var temp__5825__auto___65365 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65362);
if(cljs.core.truth_(temp__5825__auto___65365)){
var fix_65366 = temp__5825__auto___65365;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65358,fix_65366], 0));
} else {
}


var G__65367 = seq__65281_65352;
var G__65368 = chunk__65283_65353;
var G__65369 = count__65284_65354;
var G__65370 = (i__65285_65355 + (1));
seq__65281_65352 = G__65367;
chunk__65283_65353 = G__65368;
count__65284_65354 = G__65369;
i__65285_65355 = G__65370;
continue;
} else {
var temp__5825__auto___65371 = cljs.core.seq(seq__65281_65352);
if(temp__5825__auto___65371){
var seq__65281_65372__$1 = temp__5825__auto___65371;
if(cljs.core.chunked_seq_QMARK_(seq__65281_65372__$1)){
var c__5548__auto___65373 = cljs.core.chunk_first(seq__65281_65372__$1);
var G__65374 = cljs.core.chunk_rest(seq__65281_65372__$1);
var G__65375 = c__5548__auto___65373;
var G__65376 = cljs.core.count(c__5548__auto___65373);
var G__65377 = (0);
seq__65281_65352 = G__65374;
chunk__65283_65353 = G__65375;
count__65284_65354 = G__65376;
i__65285_65355 = G__65377;
continue;
} else {
var vec__65301_65378 = cljs.core.first(seq__65281_65372__$1);
var test_ns_65379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65301_65378,(0),null);
var ns_info_65380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65301_65378,(1),null);
var map__65304_65381 = ns_info_65380;
var map__65304_65382__$1 = cljs.core.__destructure_map(map__65304_65381);
var fixtures_65383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304_65382__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65384__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65383);
if(cljs.core.truth_(temp__5825__auto___65384__$1)){
var fix_65385 = temp__5825__auto___65384__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65379,fix_65385], 0));
} else {
}

var temp__5825__auto___65386__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65383);
if(cljs.core.truth_(temp__5825__auto___65386__$1)){
var fix_65387 = temp__5825__auto___65386__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65379,fix_65387], 0));
} else {
}


var G__65388 = cljs.core.next(seq__65281_65372__$1);
var G__65389 = null;
var G__65390 = (0);
var G__65391 = (0);
seq__65281_65352 = G__65388;
chunk__65283_65353 = G__65389;
count__65284_65354 = G__65390;
i__65285_65355 = G__65391;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65278_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65278_SHARP_));
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
var G__65311 = arguments.length;
switch (G__65311) {
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
var G__65316 = arguments.length;
switch (G__65316) {
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
var map__65317 = shadow.test.env.get_test_ns_info(ns);
var map__65317__$1 = cljs.core.__destructure_map(map__65317);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65322 = arguments.length;
switch (G__65322) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65320_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65320_SHARP_)));
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
var G__65328 = arguments.length;
switch (G__65328) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65326_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65326_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
