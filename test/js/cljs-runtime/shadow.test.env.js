goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5503__auto__ = (function shadow$test$env$get_test_vars_$_iter__22162(s__22163){
return (new cljs.core.LazySeq(null,(function (){
var s__22163__$1 = s__22163;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22163__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__22171 = cljs.core.first(xs__6385__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(1),null);
var iterys__5499__auto__ = ((function (s__22163__$1,vec__22171,ns,ns_info,xs__6385__auto__,temp__5825__auto__){
return (function shadow$test$env$get_test_vars_$_iter__22162_$_iter__22166(s__22167){
return (new cljs.core.LazySeq(null,((function (s__22163__$1,vec__22171,ns,ns_info,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__22167__$1 = s__22167;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22167__$1);
if(temp__5825__auto____$1){
var s__22167__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22167__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22167__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22169 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22168 = (0);
while(true){
if((i__22168 < size__5502__auto__)){
var var$ = cljs.core._nth(c__5501__auto__,i__22168);
cljs.core.chunk_append(b__22169,var$);

var G__22186 = (i__22168 + (1));
i__22168 = G__22186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22169),shadow$test$env$get_test_vars_$_iter__22162_$_iter__22166(cljs.core.chunk_rest(s__22167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22169),null);
}
} else {
var var$ = cljs.core.first(s__22167__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__22162_$_iter__22166(cljs.core.rest(s__22167__$2)));
}
} else {
return null;
}
break;
}
});})(s__22163__$1,vec__22171,ns,ns_info,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__22163__$1,vec__22171,ns,ns_info,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$test$env$get_test_vars_$_iter__22162(cljs.core.rest(s__22163__$1)));
} else {
var G__22187 = cljs.core.rest(s__22163__$1);
s__22163__$1 = G__22187;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5503__auto__ = (function shadow$test$env$get_test_count_$_iter__22175(s__22176){
return (new cljs.core.LazySeq(null,(function (){
var s__22176__$1 = s__22176;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22176__$1);
if(temp__5825__auto__){
var s__22176__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22176__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22176__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22178 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22177 = (0);
while(true){
if((i__22177 < size__5502__auto__)){
var map__22179 = cljs.core._nth(c__5501__auto__,i__22177);
var map__22179__$1 = cljs.core.__destructure_map(map__22179);
var test_ns = map__22179__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22179__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__22178,cljs.core.count(vars));

var G__22188 = (i__22177 + (1));
i__22177 = G__22188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22178),shadow$test$env$get_test_count_$_iter__22175(cljs.core.chunk_rest(s__22176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22178),null);
}
} else {
var map__22180 = cljs.core.first(s__22176__$2);
var map__22180__$1 = cljs.core.__destructure_map(map__22180);
var test_ns = map__22180__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22180__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__22175(cljs.core.rest(s__22176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
