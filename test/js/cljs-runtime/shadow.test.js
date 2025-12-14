goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68055){
var vec__68056 = p__68055;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68056,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68056,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__68059 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__68059__$1 = (((G__68059 instanceof cljs.core.Keyword))?G__68059.fqn:null);
switch (G__68059__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__68061 = (function (){
var seq__68062 = cljs.core.seq(vars__$1);
var chunk__68063 = null;
var count__68064 = (0);
var i__68065 = (0);
while(true){
if((i__68065 < count__68064)){
var v = chunk__68063.cljs$core$IIndexed$_nth$arity$2(null,i__68065);
var temp__5825__auto___68138 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68138)){
var t_68139 = temp__5825__auto___68138;
var G__68070_68140 = ((function (seq__68062,chunk__68063,count__68064,i__68065,t_68139,temp__5825__auto___68138,v,each_fixture_fn,G__68059,G__68059__$1,env,once_fixtures,each_fixtures,vec__68056,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68139)));
});})(seq__68062,chunk__68063,count__68064,i__68065,t_68139,temp__5825__auto___68138,v,each_fixture_fn,G__68059,G__68059__$1,env,once_fixtures,each_fixtures,vec__68056,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68070_68140) : each_fixture_fn.call(null,G__68070_68140));
} else {
}


var G__68141 = seq__68062;
var G__68142 = chunk__68063;
var G__68143 = count__68064;
var G__68144 = (i__68065 + (1));
seq__68062 = G__68141;
chunk__68063 = G__68142;
count__68064 = G__68143;
i__68065 = G__68144;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68062);
if(temp__5825__auto__){
var seq__68062__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68062__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68062__$1);
var G__68146 = cljs.core.chunk_rest(seq__68062__$1);
var G__68147 = c__5548__auto__;
var G__68148 = cljs.core.count(c__5548__auto__);
var G__68149 = (0);
seq__68062 = G__68146;
chunk__68063 = G__68147;
count__68064 = G__68148;
i__68065 = G__68149;
continue;
} else {
var v = cljs.core.first(seq__68062__$1);
var temp__5825__auto___68155__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___68155__$1)){
var t_68156 = temp__5825__auto___68155__$1;
var G__68072_68157 = ((function (seq__68062,chunk__68063,count__68064,i__68065,t_68156,temp__5825__auto___68155__$1,v,seq__68062__$1,temp__5825__auto__,each_fixture_fn,G__68059,G__68059__$1,env,once_fixtures,each_fixtures,vec__68056,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_68156)));
});})(seq__68062,chunk__68063,count__68064,i__68065,t_68156,temp__5825__auto___68155__$1,v,seq__68062__$1,temp__5825__auto__,each_fixture_fn,G__68059,G__68059__$1,env,once_fixtures,each_fixtures,vec__68056,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__68072_68157) : each_fixture_fn.call(null,G__68072_68157));
} else {
}


var G__68158 = cljs.core.next(seq__68062__$1);
var G__68159 = null;
var G__68160 = (0);
var G__68161 = (0);
seq__68062 = G__68158;
chunk__68063 = G__68159;
count__68064 = G__68160;
i__68065 = G__68161;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__68060 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__68060.cljs$core$IFn$_invoke$arity$1 ? fexpr__68060.cljs$core$IFn$_invoke$arity$1(G__68061) : fexpr__68060.call(null,G__68061));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68059__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__68054_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68054_SHARP_));
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

var map__68077 = shadow.test.env.get_test_ns_info(ns);
var map__68077__$1 = cljs.core.__destructure_map(map__68077);
var test_ns = map__68077__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68077__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__68079,vars){
var map__68080 = p__68079;
var map__68080__$1 = cljs.core.__destructure_map(map__68080);
var env = map__68080__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68080__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__68081_68163 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__68083_68164 = null;
var count__68084_68165 = (0);
var i__68085_68166 = (0);
while(true){
if((i__68085_68166 < count__68084_68165)){
var vec__68104_68168 = chunk__68083_68164.cljs$core$IIndexed$_nth$arity$2(null,i__68085_68166);
var test_ns_68169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68104_68168,(0),null);
var ns_info_68170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68104_68168,(1),null);
var map__68108_68171 = ns_info_68170;
var map__68108_68172__$1 = cljs.core.__destructure_map(map__68108_68171);
var fixtures_68173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68108_68172__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68174 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68173);
if(cljs.core.truth_(temp__5825__auto___68174)){
var fix_68175 = temp__5825__auto___68174;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68169,fix_68175], 0));
} else {
}

var temp__5825__auto___68176 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68173);
if(cljs.core.truth_(temp__5825__auto___68176)){
var fix_68177 = temp__5825__auto___68176;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68169,fix_68177], 0));
} else {
}


var G__68178 = seq__68081_68163;
var G__68179 = chunk__68083_68164;
var G__68180 = count__68084_68165;
var G__68181 = (i__68085_68166 + (1));
seq__68081_68163 = G__68178;
chunk__68083_68164 = G__68179;
count__68084_68165 = G__68180;
i__68085_68166 = G__68181;
continue;
} else {
var temp__5825__auto___68182 = cljs.core.seq(seq__68081_68163);
if(temp__5825__auto___68182){
var seq__68081_68183__$1 = temp__5825__auto___68182;
if(cljs.core.chunked_seq_QMARK_(seq__68081_68183__$1)){
var c__5548__auto___68184 = cljs.core.chunk_first(seq__68081_68183__$1);
var G__68185 = cljs.core.chunk_rest(seq__68081_68183__$1);
var G__68186 = c__5548__auto___68184;
var G__68187 = cljs.core.count(c__5548__auto___68184);
var G__68188 = (0);
seq__68081_68163 = G__68185;
chunk__68083_68164 = G__68186;
count__68084_68165 = G__68187;
i__68085_68166 = G__68188;
continue;
} else {
var vec__68109_68189 = cljs.core.first(seq__68081_68183__$1);
var test_ns_68190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68109_68189,(0),null);
var ns_info_68191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68109_68189,(1),null);
var map__68112_68192 = ns_info_68191;
var map__68112_68193__$1 = cljs.core.__destructure_map(map__68112_68192);
var fixtures_68194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68112_68193__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___68195__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_68194);
if(cljs.core.truth_(temp__5825__auto___68195__$1)){
var fix_68196 = temp__5825__auto___68195__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68190,fix_68196], 0));
} else {
}

var temp__5825__auto___68197__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_68194);
if(cljs.core.truth_(temp__5825__auto___68197__$1)){
var fix_68203 = temp__5825__auto___68197__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_68190,fix_68203], 0));
} else {
}


var G__68204 = cljs.core.next(seq__68081_68183__$1);
var G__68205 = null;
var G__68206 = (0);
var G__68207 = (0);
seq__68081_68163 = G__68204;
chunk__68083_68164 = G__68205;
count__68084_68165 = G__68206;
i__68085_68166 = G__68207;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68078_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68078_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__68113 = cljs.test.get_current_env();
var map__68113__$1 = cljs.core.__destructure_map(map__68113);
var env = map__68113__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68113__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68113__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__68115 = arguments.length;
switch (G__68115) {
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
var G__68117 = arguments.length;
switch (G__68117) {
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
var map__68119 = shadow.test.env.get_test_ns_info(ns);
var map__68119__$1 = cljs.core.__destructure_map(map__68119);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68119__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__68123 = arguments.length;
switch (G__68123) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68121_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__68121_SHARP_)));
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
var G__68128 = arguments.length;
switch (G__68128) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68126_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68126_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
