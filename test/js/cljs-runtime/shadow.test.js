goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65780){
var vec__65781 = p__65780;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65781,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65781,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__65784 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__65784__$1 = (((G__65784 instanceof cljs.core.Keyword))?G__65784.fqn:null);
switch (G__65784__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__65786 = (function (){
var seq__65787 = cljs.core.seq(vars__$1);
var chunk__65788 = null;
var count__65789 = (0);
var i__65790 = (0);
while(true){
if((i__65790 < count__65789)){
var v = chunk__65788.cljs$core$IIndexed$_nth$arity$2(null,i__65790);
var temp__5825__auto___65852 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65852)){
var t_65853 = temp__5825__auto___65852;
var G__65793_65854 = ((function (seq__65787,chunk__65788,count__65789,i__65790,t_65853,temp__5825__auto___65852,v,each_fixture_fn,G__65784,G__65784__$1,env,once_fixtures,each_fixtures,vec__65781,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65853)));
});})(seq__65787,chunk__65788,count__65789,i__65790,t_65853,temp__5825__auto___65852,v,each_fixture_fn,G__65784,G__65784__$1,env,once_fixtures,each_fixtures,vec__65781,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65793_65854) : each_fixture_fn.call(null,G__65793_65854));
} else {
}


var G__65855 = seq__65787;
var G__65856 = chunk__65788;
var G__65857 = count__65789;
var G__65858 = (i__65790 + (1));
seq__65787 = G__65855;
chunk__65788 = G__65856;
count__65789 = G__65857;
i__65790 = G__65858;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65787);
if(temp__5825__auto__){
var seq__65787__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65787__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65787__$1);
var G__65859 = cljs.core.chunk_rest(seq__65787__$1);
var G__65860 = c__5548__auto__;
var G__65861 = cljs.core.count(c__5548__auto__);
var G__65862 = (0);
seq__65787 = G__65859;
chunk__65788 = G__65860;
count__65789 = G__65861;
i__65790 = G__65862;
continue;
} else {
var v = cljs.core.first(seq__65787__$1);
var temp__5825__auto___65863__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5825__auto___65863__$1)){
var t_65864 = temp__5825__auto___65863__$1;
var G__65794_65865 = ((function (seq__65787,chunk__65788,count__65789,i__65790,t_65864,temp__5825__auto___65863__$1,v,seq__65787__$1,temp__5825__auto__,each_fixture_fn,G__65784,G__65784__$1,env,once_fixtures,each_fixtures,vec__65781,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_65864)));
});})(seq__65787,chunk__65788,count__65789,i__65790,t_65864,temp__5825__auto___65863__$1,v,seq__65787__$1,temp__5825__auto__,each_fixture_fn,G__65784,G__65784__$1,env,once_fixtures,each_fixtures,vec__65781,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__65794_65865) : each_fixture_fn.call(null,G__65794_65865));
} else {
}


var G__65866 = cljs.core.next(seq__65787__$1);
var G__65867 = null;
var G__65868 = (0);
var G__65869 = (0);
seq__65787 = G__65866;
chunk__65788 = G__65867;
count__65789 = G__65868;
i__65790 = G__65869;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__65785 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__65785.cljs$core$IFn$_invoke$arity$1 ? fexpr__65785.cljs$core$IFn$_invoke$arity$1(G__65786) : fexpr__65785.call(null,G__65786));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65784__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__65779_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65779_SHARP_));
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

var map__65795 = shadow.test.env.get_test_ns_info(ns);
var map__65795__$1 = cljs.core.__destructure_map(map__65795);
var test_ns = map__65795__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65795__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__65797,vars){
var map__65798 = p__65797;
var map__65798__$1 = cljs.core.__destructure_map(map__65798);
var env = map__65798__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65798__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__65799_65870 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__65801_65871 = null;
var count__65802_65872 = (0);
var i__65803_65873 = (0);
while(true){
if((i__65803_65873 < count__65802_65872)){
var vec__65816_65874 = chunk__65801_65871.cljs$core$IIndexed$_nth$arity$2(null,i__65803_65873);
var test_ns_65875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65816_65874,(0),null);
var ns_info_65876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65816_65874,(1),null);
var map__65823_65877 = ns_info_65876;
var map__65823_65878__$1 = cljs.core.__destructure_map(map__65823_65877);
var fixtures_65879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65823_65878__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65880 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65879);
if(cljs.core.truth_(temp__5825__auto___65880)){
var fix_65881 = temp__5825__auto___65880;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65875,fix_65881], 0));
} else {
}

var temp__5825__auto___65882 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65879);
if(cljs.core.truth_(temp__5825__auto___65882)){
var fix_65883 = temp__5825__auto___65882;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65875,fix_65883], 0));
} else {
}


var G__65884 = seq__65799_65870;
var G__65885 = chunk__65801_65871;
var G__65886 = count__65802_65872;
var G__65887 = (i__65803_65873 + (1));
seq__65799_65870 = G__65884;
chunk__65801_65871 = G__65885;
count__65802_65872 = G__65886;
i__65803_65873 = G__65887;
continue;
} else {
var temp__5825__auto___65888 = cljs.core.seq(seq__65799_65870);
if(temp__5825__auto___65888){
var seq__65799_65889__$1 = temp__5825__auto___65888;
if(cljs.core.chunked_seq_QMARK_(seq__65799_65889__$1)){
var c__5548__auto___65890 = cljs.core.chunk_first(seq__65799_65889__$1);
var G__65891 = cljs.core.chunk_rest(seq__65799_65889__$1);
var G__65892 = c__5548__auto___65890;
var G__65893 = cljs.core.count(c__5548__auto___65890);
var G__65894 = (0);
seq__65799_65870 = G__65891;
chunk__65801_65871 = G__65892;
count__65802_65872 = G__65893;
i__65803_65873 = G__65894;
continue;
} else {
var vec__65824_65895 = cljs.core.first(seq__65799_65889__$1);
var test_ns_65896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65824_65895,(0),null);
var ns_info_65897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65824_65895,(1),null);
var map__65827_65898 = ns_info_65897;
var map__65827_65899__$1 = cljs.core.__destructure_map(map__65827_65898);
var fixtures_65900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65827_65899__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5825__auto___65901__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_65900);
if(cljs.core.truth_(temp__5825__auto___65901__$1)){
var fix_65902 = temp__5825__auto___65901__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65896,fix_65902], 0));
} else {
}

var temp__5825__auto___65903__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_65900);
if(cljs.core.truth_(temp__5825__auto___65903__$1)){
var fix_65904 = temp__5825__auto___65903__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_65896,fix_65904], 0));
} else {
}


var G__65905 = cljs.core.next(seq__65799_65889__$1);
var G__65906 = null;
var G__65907 = (0);
var G__65908 = (0);
seq__65799_65870 = G__65905;
chunk__65801_65871 = G__65906;
count__65802_65872 = G__65907;
i__65803_65873 = G__65908;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65796_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65796_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__65834 = cljs.test.get_current_env();
var map__65834__$1 = cljs.core.__destructure_map(map__65834);
var env = map__65834__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65834__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65834__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__65836 = arguments.length;
switch (G__65836) {
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
var G__65838 = arguments.length;
switch (G__65838) {
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
var map__65841 = shadow.test.env.get_test_ns_info(ns);
var map__65841__$1 = cljs.core.__destructure_map(map__65841);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__65844 = arguments.length;
switch (G__65844) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65842_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__65842_SHARP_)));
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
var G__65847 = arguments.length;
switch (G__65847) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65845_SHARP_){
var or__5025__auto__ = (re == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65845_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
