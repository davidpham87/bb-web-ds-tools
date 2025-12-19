goog.provide('clojure.test.check.clojure_test');
clojure.test.check.clojure_test.assert_check = (function clojure$test$check$clojure_test$assert_check(p__65139){
var map__65140 = p__65139;
var map__65140__$1 = cljs.core.__destructure_map(map__65140);
var m = map__65140__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var result_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"result-data","result-data",-1724248844));
var temp__5823__auto__ = new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635).cljs$core$IFn$_invoke$arity$1(result_data);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
throw error;
} else {
try{var m__65019__auto__ = m;
return clojure.test.check.clojure_test.assertions.check_results(m__65019__auto__);
}catch (e65141){var t__11416__auto__ = e65141;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["clojure/test/check/clojure_test.cljc",54,new cljs.core.Keyword(null,"error","error",-978969032),12,22,cljs.core.list(new cljs.core.Symbol("clojure.test.check.clojure-test","check?","clojure.test.check.clojure-test/check?",1276552392,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),22,t__11416__auto__,null]));
}}
});
clojure.test.check.clojure_test._STAR_default_test_count_STAR_ = (100);
/**
 * Default function passed as the :reporter-fn to clojure.test.check/quick-check.
 *   Delegates to clojure.test/report.
 */
clojure.test.check.clojure_test.default_reporter_fn = (function clojure$test$check$clojure_test$default_reporter_fn(p__65142){
var map__65143 = p__65142;
var map__65143__$1 = cljs.core.__destructure_map(map__65143);
var args = map__65143__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__65144 = type;
var G__65144__$1 = (((G__65144 instanceof cljs.core.Keyword))?G__65144.fqn:null);
switch (G__65144__$1) {
case "complete":
var testing_vars = new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test._STAR_current_env_STAR_);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315)], null)),((cljs.core.seq(testing_vars))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(testing_vars))))], null):null)], 0));
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646),params], null));

break;
case "trial":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"num-tests-total","num-tests-total",-2113009946).cljs$core$IFn$_invoke$arity$1(args)], null)], null));

break;
case "failure":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992),cljs.core.vec(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(args))], null));

break;
case "shrunk":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","shrunk","clojure.test.check.clojure-test/shrunk",1515242807),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992),cljs.core.vec(new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(args)))], null));

break;
default:
return null;

}
});
/**
 * The default options passed to clojure.test.check/quick-check
 *   by defspec.
 */
clojure.test.check.clojure_test._STAR_default_opts_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),clojure.test.check.clojure_test.default_reporter_fn], null);
clojure.test.check.clojure_test.process_options = (function clojure$test$check$clojure_test$process_options(options){
if((options == null)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null),clojure.test.check.clojure_test._STAR_default_opts_STAR_], 0));
} else {
if(typeof options === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.test.check.clojure_test._STAR_default_opts_STAR_,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),options);
} else {
if(cljs.core.map_QMARK_(options)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null),clojure.test.check.clojure_test._STAR_default_opts_STAR_,options], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid defspec options: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bad-options","bad-options",-1002783472),options], null));

}
}
}
});
/**
 * Controls whether property trials should be reported via clojure.test/report.
 *   Valid values include:
 * 
 *   * false - no reporting of trials (default)
 *   * a function - will be passed a clojure.test/report-style map containing
 *   :clojure.test.check/property and :clojure.test.check/trial slots
 *   * true - provides quickcheck-style trial reporting (dots) via
 *   `trial-report-dots`
 * 
 *   (Note that all reporting requires running `quick-check` within the scope of a
 *   clojure.test run (via `test-ns`, `test-all-vars`, etc.))
 * 
 *   Reporting functions offered by clojure.test.check include `trial-report-dots` and
 *   `trial-report-periodic` (which prints more verbose trial progress information
 *   every `*trial-report-period*` milliseconds).
 */
clojure.test.check.clojure_test._STAR_report_trials_STAR_ = false;
/**
 * If true, a verbose report of the property being tested, the
 *   failing return value, and the arguments provoking that failure is emitted
 *   prior to the start of the shrinking search.
 */
clojure.test.check.clojure_test._STAR_report_shrinking_STAR_ = false;
/**
 * Milliseconds between reports emitted by `trial-report-periodic`.
 */
clojure.test.check.clojure_test._STAR_trial_report_period_STAR_ = (10000);
clojure.test.check.clojure_test.last_trial_report = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.test.check.clojure_test.get_property_name = (function clojure$test$check$clojure_test$get_property_name(p__65154){
var map__65155 = p__65154;
var map__65155__$1 = cljs.core.__destructure_map(map__65155);
var report_map = map__65155__$1;
var property_fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781));
var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(property_fun));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.test.testing_vars_str(report_map);
}
});
clojure.test.check.clojure_test.with_test_out_STAR_ = (function clojure$test$check$clojure_test$with_test_out_STAR_(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a verbose
 *   status every `*trial-report-period*` milliseconds, like this one:
 * 
 *   Passing trial 3286 / 5000 for (your-test-var-name-here) (:)
 */
clojure.test.check.clojure_test.trial_report_periodic = (function clojure$test$check$clojure_test$trial_report_periodic(m){
var t = clojure.test.check.impl.get_current_time_millis();
if(((t - clojure.test.check.clojure_test._STAR_trial_report_period_STAR_) > cljs.core.deref(clojure.test.check.clojure_test.last_trial_report))){
clojure.test.check.clojure_test.with_test_out_STAR_((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Passing trial",cljs.core.first(new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"/",cljs.core.second(new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"for",clojure.test.check.clojure_test.get_property_name(m)], 0));
}));

return cljs.core.reset_BANG_(clojure.test.check.clojure_test.last_trial_report,t);
} else {
return null;
}
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a single
 *   dot every 1000 trials reported.
 */
clojure.test.check.clojure_test.trial_report_dots = (function clojure$test$check$clojure_test$trial_report_dots(p__65162){
var map__65163 = p__65162;
var map__65163__$1 = cljs.core.__destructure_map(map__65163);
var vec__65164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65163__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060));
var so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65164,(0),null);
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65164,(1),null);
if((so_far > (0))){
if((cljs.core.mod(so_far,(1000)) === (0))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["."], 0));

cljs.core.flush();
} else {
}

if((so_far === total)){
return cljs.core.println();
} else {
return null;
}
} else {
return null;
}
});
/**
 * If true, completed tests report test-var, num-tests and seed. Failed tests
 *   report shrunk results. Defaults to true.
 */
clojure.test.check.clojure_test._STAR_report_completion_STAR_ = true;
if(cljs.core.not((function (){var and__5023__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.re_matches(/.*\$macros/,cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)));
} else {
return and__5023__auto__;
}
})())){
if((!((cljs.test.report instanceof cljs.core.MultiFn)))){
var _STAR_out_STAR__orig_val__65171_65192 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__65172_65193 = cljs.core._STAR_out_STAR_;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__65172_65193);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clojure.test/report is not a multimethod, some reporting functions have been disabled."], 0));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__65171_65192);
}} else {
var begin_test_var_method_65194 = cljs.core.get_method(cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
cljs.core.reset_BANG_(clojure.test.check.clojure_test.last_trial_report,clojure.test.check.impl.get_current_time_millis());

if(cljs.core.truth_(begin_test_var_method_65194)){
return (begin_test_var_method_65194.cljs$core$IFn$_invoke$arity$1 ? begin_test_var_method_65194.cljs$core$IFn$_invoke$arity$1(m) : begin_test_var_method_65194.call(null,m));
} else {
return null;
}
}));

cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060)], null),(function (m){
var temp__5825__auto__ = (function (){var and__5023__auto__ = clojure.test.check.clojure_test._STAR_report_trials_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
if(clojure.test.check.clojure_test._STAR_report_trials_STAR_ === true){
return clojure.test.check.clojure_test.trial_report_dots;
} else {
return clojure.test.check.clojure_test._STAR_report_trials_STAR_;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var trial_report_fn = temp__5825__auto__;
return (trial_report_fn.cljs$core$IFn$_invoke$arity$1 ? trial_report_fn.cljs$core$IFn$_invoke$arity$1(m) : trial_report_fn.call(null,m));
} else {
return null;
}
}));

cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399)], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_)){
return clojure.test.check.clojure_test.with_test_out_STAR_((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shrinking",clojure.test.check.clojure_test.get_property_name(m),"starting with parameters",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992).cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}));
} else {
return null;
}
}));

cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646)], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_completion_STAR_)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646).cljs$core$IFn$_invoke$arity$1(m)], 0));
} else {
return null;
}
}));

cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","shrunk","clojure.test.check.clojure-test/shrunk",1515242807)], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_completion_STAR_)){
return clojure.test.check.clojure_test.with_test_out_STAR_((function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
} else {
return null;
}
}));
}
} else {
}

//# sourceMappingURL=clojure.test.check.clojure_test.js.map
