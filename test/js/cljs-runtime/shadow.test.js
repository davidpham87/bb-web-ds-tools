goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__67108){
var vec__67109 = p__67108;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__67112 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__67112__$1 = (((G__67112 instanceof cljs.core.Keyword))?G__67112.fqn:null);
switch (G__67112__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__67114 = (function (){
var seq__67117 = cljs.core.seq(vars__$1);
var chunk__67120 = null;
var count__67121 = (0);
var i__67122 = (0);
while(true){
if((i__67122 < count__67121)){
var v = chunk__67120.cljs$core$IIndexed$_nth$arity$2(null,i__67122);
var temp__5825__auto___67176 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67176)){
var t_67177 = temp__5825__auto___67176;
var G__67131_67178 = ((function (seq__67117,chunk__67120,count__67121,i__67122,t_67177,temp__5825__auto___67176,v,each_fixture_fn,G__67112,G__67112__$1,env,once_fixtures,each_fixtures,vec__67109,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67177)));
});})(seq__67117,chunk__67120,count__67121,i__67122,t_67177,temp__5825__auto___67176,v,each_fixture_fn,G__67112,G__67112__$1,env,once_fixtures,each_fixtures,vec__67109,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67131_67178) : each_fixture_fn.call(null,G__67131_67178));
} else {
}


var G__67179 = seq__67117;
var G__67180 = chunk__67120;
var G__67181 = count__67121;
var G__67182 = (i__67122 + (1));
seq__67117 = G__67179;
chunk__67120 = G__67180;
count__67121 = G__67181;
i__67122 = G__67182;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67117);
if(temp__5825__auto__){
var seq__67117__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67117__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67117__$1);
var G__67183 = cljs.core.chunk_rest(seq__67117__$1);
var G__67184 = c__5548__auto__;
var G__67185 = cljs.core.count(c__5548__auto__);
var G__67186 = (0);
seq__67117 = G__67183;
chunk__67120 = G__67184;
count__67121 = G__67185;
i__67122 = G__67186;
continue;
} else {
var v = cljs.core.first(seq__67117__$1);
var temp__5825__auto___67187__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___67187__$1)){
var t_67188 = temp__5825__auto___67187__$1;
var G__67136_67189 = ((function (seq__67117,chunk__67120,count__67121,i__67122,t_67188,temp__5825__auto___67187__$1,v,seq__67117__$1,temp__5825__auto__,each_fixture_fn,G__67112,G__67112__$1,env,once_fixtures,each_fixtures,vec__67109,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_67188)));
});})(seq__67117,chunk__67120,count__67121,i__67122,t_67188,temp__5825__auto___67187__$1,v,seq__67117__$1,temp__5825__auto__,each_fixture_fn,G__67112,G__67112__$1,env,once_fixtures,each_fixtures,vec__67109,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__67136_67189) : each_fixture_fn.call(null,G__67136_67189));
} else {
}


var G__67190 = cljs.core.next(seq__67117__$1);
var G__67191 = null;
var G__67192 = (0);
var G__67193 = (0);
seq__67117 = G__67190;
chunk__67120 = G__67191;
count__67121 = G__67192;
i__67122 = G__67193;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__67113 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__67113.cljs$core$IFn$_invoke$arity$1 ? fexpr__67113.cljs$core$IFn$_invoke$arity$1(G__67114) : fexpr__67113.call(null,G__67114));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67112__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__67106_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67106_SHARP_));
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

var map__67137 = shadow.test.env.get_test_ns_info(ns);
var map__67137__$1 = cljs.core.__destructure_map(map__67137);
var test_ns = map__67137__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67137__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__67139,vars){
var map__67140 = p__67139;
var map__67140__$1 = cljs.core.__destructure_map(map__67140);
var env = map__67140__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67140__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__67141_67194 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__67143_67195 = null;
var count__67144_67196 = (0);
var i__67145_67197 = (0);
while(true){
if((i__67145_67197 < count__67144_67196)){
var vec__67155_67198 = chunk__67143_67195.cljs$core$IIndexed$_nth$arity$2(null,i__67145_67197);
var test_ns_67199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67155_67198,(0),null);
var ns_info_67200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67155_67198,(1),null);
var map__67158_67201 = ns_info_67200;
var map__67158_67202__$1 = cljs.core.__destructure_map(map__67158_67201);
var fixtures_67203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67158_67202__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67204 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67203);
if(cljs.core.truth_(temp__5825__auto___67204)){
var fix_67205 = temp__5825__auto___67204;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67199,fix_67205], 0));
} else {
}

var temp__5825__auto___67206 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67203);
if(cljs.core.truth_(temp__5825__auto___67206)){
var fix_67207 = temp__5825__auto___67206;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67199,fix_67207], 0));
} else {
}


var G__67208 = seq__67141_67194;
var G__67209 = chunk__67143_67195;
var G__67210 = count__67144_67196;
var G__67211 = (i__67145_67197 + (1));
seq__67141_67194 = G__67208;
chunk__67143_67195 = G__67209;
count__67144_67196 = G__67210;
i__67145_67197 = G__67211;
continue;
} else {
var temp__5825__auto___67212 = cljs.core.seq(seq__67141_67194);
if(temp__5825__auto___67212){
var seq__67141_67213__$1 = temp__5825__auto___67212;
if(cljs.core.chunked_seq_QMARK_(seq__67141_67213__$1)){
var c__5548__auto___67214 = cljs.core.chunk_first(seq__67141_67213__$1);
var G__67215 = cljs.core.chunk_rest(seq__67141_67213__$1);
var G__67216 = c__5548__auto___67214;
var G__67217 = cljs.core.count(c__5548__auto___67214);
var G__67218 = (0);
seq__67141_67194 = G__67215;
chunk__67143_67195 = G__67216;
count__67144_67196 = G__67217;
i__67145_67197 = G__67218;
continue;
} else {
var vec__67159_67219 = cljs.core.first(seq__67141_67213__$1);
var test_ns_67220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67159_67219,(0),null);
var ns_info_67221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67159_67219,(1),null);
var map__67162_67222 = ns_info_67221;
var map__67162_67223__$1 = cljs.core.__destructure_map(map__67162_67222);
var fixtures_67224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67162_67223__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___67225__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_67224);
if(cljs.core.truth_(temp__5825__auto___67225__$1)){
var fix_67226 = temp__5825__auto___67225__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67220,fix_67226], 0));
} else {
}

var temp__5825__auto___67227__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_67224);
if(cljs.core.truth_(temp__5825__auto___67227__$1)){
var fix_67228 = temp__5825__auto___67227__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_67220,fix_67228], 0));
} else {
}


var G__67229 = cljs.core.next(seq__67141_67213__$1);
var G__67230 = null;
var G__67231 = (0);
var G__67232 = (0);
seq__67141_67194 = G__67229;
chunk__67143_67195 = G__67230;
count__67144_67196 = G__67231;
i__67145_67197 = G__67232;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67138_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67138_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__67163 = cljs.test.get_current_env();
var map__67163__$1 = cljs.core.__destructure_map(map__67163);
var env = map__67163__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67163__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67163__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__67165 = arguments.length;
switch (G__67165) {
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
var G__67167 = arguments.length;
switch (G__67167) {
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
var map__67168 = shadow.test.env.get_test_ns_info(ns);
var map__67168__$1 = cljs.core.__destructure_map(map__67168);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67168__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__67171 = arguments.length;
switch (G__67171) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67169_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__67169_SHARP_)));
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
var G__67174 = arguments.length;
switch (G__67174) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67172_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67172_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
