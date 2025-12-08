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
var iter__5503__auto__ = (function shadow$test$env$get_test_vars_$_iter__22169(s__22170){
return (new cljs.core.LazySeq(null,(function (){
var s__22170__$1 = s__22170;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22170__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__22175 = cljs.core.first(xs__6385__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(1),null);
var iterys__5499__auto__ = ((function (s__22170__$1,vec__22175,ns,ns_info,xs__6385__auto__,temp__5825__auto__){
return (function shadow$test$env$get_test_vars_$_iter__22169_$_iter__22171(s__22172){
return (new cljs.core.LazySeq(null,((function (s__22170__$1,vec__22175,ns,ns_info,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__22172__$1 = s__22172;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22172__$1);
if(temp__5825__auto____$1){
var s__22172__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22172__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22172__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22174 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22173 = (0);
while(true){
if((i__22173 < size__5502__auto__)){
var var$ = cljs.core._nth(c__5501__auto__,i__22173);
cljs.core.chunk_append(b__22174,var$);

var G__22188 = (i__22173 + (1));
i__22173 = G__22188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22174),shadow$test$env$get_test_vars_$_iter__22169_$_iter__22171(cljs.core.chunk_rest(s__22172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22174),null);
}
} else {
var var$ = cljs.core.first(s__22172__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__22169_$_iter__22171(cljs.core.rest(s__22172__$2)));
}
} else {
return null;
}
break;
}
});})(s__22170__$1,vec__22175,ns,ns_info,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__22170__$1,vec__22175,ns,ns_info,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$test$env$get_test_vars_$_iter__22169(cljs.core.rest(s__22170__$1)));
} else {
var G__22191 = cljs.core.rest(s__22170__$1);
s__22170__$1 = G__22191;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5503__auto__ = (function shadow$test$env$get_test_count_$_iter__22180(s__22181){
return (new cljs.core.LazySeq(null,(function (){
var s__22181__$1 = s__22181;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22181__$1);
if(temp__5825__auto__){
var s__22181__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22181__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22181__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22183 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22182 = (0);
while(true){
if((i__22182 < size__5502__auto__)){
var map__22184 = cljs.core._nth(c__5501__auto__,i__22182);
var map__22184__$1 = cljs.core.__destructure_map(map__22184);
var test_ns = map__22184__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22184__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__22183,cljs.core.count(vars));

var G__22200 = (i__22182 + (1));
i__22182 = G__22200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22183),shadow$test$env$get_test_count_$_iter__22180(cljs.core.chunk_rest(s__22181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22183),null);
}
} else {
var map__22185 = cljs.core.first(s__22181__$2);
var map__22185__$1 = cljs.core.__destructure_map(map__22185);
var test_ns = map__22185__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__22180(cljs.core.rest(s__22181__$2)));
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
