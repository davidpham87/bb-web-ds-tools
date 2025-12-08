goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26196){
var map__26197 = p__26196;
var map__26197__$1 = cljs.core.__destructure_map(map__26197);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5025__auto__ = child_of;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26198_26225 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26199_26226 = null;
var count__26200_26227 = (0);
var i__26201_26228 = (0);
while(true){
if((i__26201_26228 < count__26200_26227)){
var vec__26212_26229 = chunk__26199_26226.cljs$core$IIndexed$_nth$arity$2(null,i__26201_26228);
var k_26230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212_26229,(0),null);
var cb_26231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212_26229,(1),null);
try{var G__26216_26232 = cljs.core.deref(re_frame.trace.traces);
(cb_26231.cljs$core$IFn$_invoke$arity$1 ? cb_26231.cljs$core$IFn$_invoke$arity$1(G__26216_26232) : cb_26231.call(null,G__26216_26232));
}catch (e26215){var e_26233 = e26215;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26230,"while storing",cljs.core.deref(re_frame.trace.traces),e_26233], 0));
}

var G__26234 = seq__26198_26225;
var G__26235 = chunk__26199_26226;
var G__26236 = count__26200_26227;
var G__26237 = (i__26201_26228 + (1));
seq__26198_26225 = G__26234;
chunk__26199_26226 = G__26235;
count__26200_26227 = G__26236;
i__26201_26228 = G__26237;
continue;
} else {
var temp__5825__auto___26238 = cljs.core.seq(seq__26198_26225);
if(temp__5825__auto___26238){
var seq__26198_26239__$1 = temp__5825__auto___26238;
if(cljs.core.chunked_seq_QMARK_(seq__26198_26239__$1)){
var c__5548__auto___26240 = cljs.core.chunk_first(seq__26198_26239__$1);
var G__26241 = cljs.core.chunk_rest(seq__26198_26239__$1);
var G__26242 = c__5548__auto___26240;
var G__26243 = cljs.core.count(c__5548__auto___26240);
var G__26244 = (0);
seq__26198_26225 = G__26241;
chunk__26199_26226 = G__26242;
count__26200_26227 = G__26243;
i__26201_26228 = G__26244;
continue;
} else {
var vec__26217_26245 = cljs.core.first(seq__26198_26239__$1);
var k_26246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217_26245,(0),null);
var cb_26247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217_26245,(1),null);
try{var G__26221_26248 = cljs.core.deref(re_frame.trace.traces);
(cb_26247.cljs$core$IFn$_invoke$arity$1 ? cb_26247.cljs$core$IFn$_invoke$arity$1(G__26221_26248) : cb_26247.call(null,G__26221_26248));
}catch (e26220){var e_26249 = e26220;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26246,"while storing",cljs.core.deref(re_frame.trace.traces),e_26249], 0));
}

var G__26250 = cljs.core.next(seq__26198_26239__$1);
var G__26251 = null;
var G__26252 = (0);
var G__26253 = (0);
seq__26198_26225 = G__26250;
chunk__26199_26226 = G__26251;
count__26200_26227 = G__26252;
i__26201_26228 = G__26253;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
