var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.router.js");
require("./re_frame.db.js");
require("./re_frame.interceptor.js");
require("./re_frame.interop.js");
require("./re_frame.events.js");
require("./re_frame.registrar.js");
require("./re_frame.loggers.js");
require("./re_frame.trace.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("re_frame.fx.js");

goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24415 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24416 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24416);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24538 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24538)){
var new_db_24539 = temp__5825__auto___24538;
var fexpr__24417_24540 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24417_24540.cljs$core$IFn$_invoke$arity$1 ? fexpr__24417_24540.cljs$core$IFn$_invoke$arity$1(new_db_24539) : fexpr__24417_24540.call(null,new_db_24539));
} else {
}

var seq__24425 = cljs.core.seq(effects_without_db);
var chunk__24426 = null;
var count__24427 = (0);
var i__24428 = (0);
while(true){
if((i__24428 < count__24427)){
var vec__24448 = chunk__24426.cljs$core$IIndexed$_nth$arity$2(null,i__24428);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(1),null);
var temp__5823__auto___24541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24541)){
var effect_fn_24542 = temp__5823__auto___24541;
(effect_fn_24542.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24542.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24542.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24543 = seq__24425;
var G__24544 = chunk__24426;
var G__24545 = count__24427;
var G__24546 = (i__24428 + (1));
seq__24425 = G__24543;
chunk__24426 = G__24544;
count__24427 = G__24545;
i__24428 = G__24546;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24425);
if(temp__5825__auto__){
var seq__24425__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24425__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24425__$1);
var G__24547 = cljs.core.chunk_rest(seq__24425__$1);
var G__24548 = c__5548__auto__;
var G__24549 = cljs.core.count(c__5548__auto__);
var G__24550 = (0);
seq__24425 = G__24547;
chunk__24426 = G__24548;
count__24427 = G__24549;
i__24428 = G__24550;
continue;
} else {
var vec__24455 = cljs.core.first(seq__24425__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(1),null);
var temp__5823__auto___24551 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24551)){
var effect_fn_24553 = temp__5823__auto___24551;
(effect_fn_24553.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24553.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24553.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24554 = cljs.core.next(seq__24425__$1);
var G__24555 = null;
var G__24556 = (0);
var G__24557 = (0);
seq__24425 = G__24554;
chunk__24426 = G__24555;
count__24427 = G__24556;
i__24428 = G__24557;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23750__auto___24558 = re_frame.interop.now();
var duration__23751__auto___24559 = (end__23750__auto___24558 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23751__auto___24559,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23750__auto___24558);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24415);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24561 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24561)){
var new_db_24562 = temp__5825__auto___24561;
var fexpr__24461_24563 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24461_24563.cljs$core$IFn$_invoke$arity$1 ? fexpr__24461_24563.cljs$core$IFn$_invoke$arity$1(new_db_24562) : fexpr__24461_24563.call(null,new_db_24562));
} else {
}

var seq__24462 = cljs.core.seq(effects_without_db);
var chunk__24463 = null;
var count__24464 = (0);
var i__24465 = (0);
while(true){
if((i__24465 < count__24464)){
var vec__24472 = chunk__24463.cljs$core$IIndexed$_nth$arity$2(null,i__24465);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(1),null);
var temp__5823__auto___24564 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24564)){
var effect_fn_24565 = temp__5823__auto___24564;
(effect_fn_24565.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24565.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24565.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24566 = seq__24462;
var G__24567 = chunk__24463;
var G__24568 = count__24464;
var G__24569 = (i__24465 + (1));
seq__24462 = G__24566;
chunk__24463 = G__24567;
count__24464 = G__24568;
i__24465 = G__24569;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24462);
if(temp__5825__auto__){
var seq__24462__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24462__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24462__$1);
var G__24571 = cljs.core.chunk_rest(seq__24462__$1);
var G__24572 = c__5548__auto__;
var G__24573 = cljs.core.count(c__5548__auto__);
var G__24574 = (0);
seq__24462 = G__24571;
chunk__24463 = G__24572;
count__24464 = G__24573;
i__24465 = G__24574;
continue;
} else {
var vec__24478 = cljs.core.first(seq__24462__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(1),null);
var temp__5823__auto___24575 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24575)){
var effect_fn_24576 = temp__5823__auto___24575;
(effect_fn_24576.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24576.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24576.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24577 = cljs.core.next(seq__24462__$1);
var G__24578 = null;
var G__24579 = (0);
var G__24580 = (0);
seq__24462 = G__24577;
chunk__24463 = G__24578;
count__24464 = G__24579;
i__24465 = G__24580;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24485){
var map__24486 = p__24485;
var map__24486__$1 = cljs.core.__destructure_map(map__24486);
var effect = map__24486__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24486__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24486__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24487 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24488 = null;
var count__24489 = (0);
var i__24490 = (0);
while(true){
if((i__24490 < count__24489)){
var effect = chunk__24488.cljs$core$IIndexed$_nth$arity$2(null,i__24490);
re_frame.fx.dispatch_later(effect);


var G__24581 = seq__24487;
var G__24582 = chunk__24488;
var G__24583 = count__24489;
var G__24584 = (i__24490 + (1));
seq__24487 = G__24581;
chunk__24488 = G__24582;
count__24489 = G__24583;
i__24490 = G__24584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24487);
if(temp__5825__auto__){
var seq__24487__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24487__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24487__$1);
var G__24585 = cljs.core.chunk_rest(seq__24487__$1);
var G__24586 = c__5548__auto__;
var G__24587 = cljs.core.count(c__5548__auto__);
var G__24588 = (0);
seq__24487 = G__24585;
chunk__24488 = G__24586;
count__24489 = G__24587;
i__24490 = G__24588;
continue;
} else {
var effect = cljs.core.first(seq__24487__$1);
re_frame.fx.dispatch_later(effect);


var G__24589 = cljs.core.next(seq__24487__$1);
var G__24590 = null;
var G__24591 = (0);
var G__24592 = (0);
seq__24487 = G__24589;
chunk__24488 = G__24590;
count__24489 = G__24591;
i__24490 = G__24592;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24493 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24494 = null;
var count__24495 = (0);
var i__24496 = (0);
while(true){
if((i__24496 < count__24495)){
var vec__24503 = chunk__24494.cljs$core$IIndexed$_nth$arity$2(null,i__24496);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24593 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24593)){
var effect_fn_24594 = temp__5823__auto___24593;
(effect_fn_24594.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24594.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24594.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24595 = seq__24493;
var G__24596 = chunk__24494;
var G__24597 = count__24495;
var G__24598 = (i__24496 + (1));
seq__24493 = G__24595;
chunk__24494 = G__24596;
count__24495 = G__24597;
i__24496 = G__24598;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24493);
if(temp__5825__auto__){
var seq__24493__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24493__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24493__$1);
var G__24599 = cljs.core.chunk_rest(seq__24493__$1);
var G__24600 = c__5548__auto__;
var G__24601 = cljs.core.count(c__5548__auto__);
var G__24602 = (0);
seq__24493 = G__24599;
chunk__24494 = G__24600;
count__24495 = G__24601;
i__24496 = G__24602;
continue;
} else {
var vec__24510 = cljs.core.first(seq__24493__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24510,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24510,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24603)){
var effect_fn_24604 = temp__5823__auto___24603;
(effect_fn_24604.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24604.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24604.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24605 = cljs.core.next(seq__24493__$1);
var G__24606 = null;
var G__24607 = (0);
var G__24608 = (0);
seq__24493 = G__24605;
chunk__24494 = G__24606;
count__24495 = G__24607;
i__24496 = G__24608;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24520 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24521 = null;
var count__24522 = (0);
var i__24523 = (0);
while(true){
if((i__24523 < count__24522)){
var event = chunk__24521.cljs$core$IIndexed$_nth$arity$2(null,i__24523);
re_frame.router.dispatch(event);


var G__24609 = seq__24520;
var G__24610 = chunk__24521;
var G__24611 = count__24522;
var G__24612 = (i__24523 + (1));
seq__24520 = G__24609;
chunk__24521 = G__24610;
count__24522 = G__24611;
i__24523 = G__24612;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24520);
if(temp__5825__auto__){
var seq__24520__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24520__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24520__$1);
var G__24613 = cljs.core.chunk_rest(seq__24520__$1);
var G__24614 = c__5548__auto__;
var G__24615 = cljs.core.count(c__5548__auto__);
var G__24616 = (0);
seq__24520 = G__24613;
chunk__24521 = G__24614;
count__24522 = G__24615;
i__24523 = G__24616;
continue;
} else {
var event = cljs.core.first(seq__24520__$1);
re_frame.router.dispatch(event);


var G__24617 = cljs.core.next(seq__24520__$1);
var G__24618 = null;
var G__24619 = (0);
var G__24620 = (0);
seq__24520 = G__24617;
chunk__24521 = G__24618;
count__24522 = G__24619;
i__24523 = G__24620;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24525 = cljs.core.seq(value);
var chunk__24526 = null;
var count__24527 = (0);
var i__24528 = (0);
while(true){
if((i__24528 < count__24527)){
var event = chunk__24526.cljs$core$IIndexed$_nth$arity$2(null,i__24528);
clear_event(event);


var G__24621 = seq__24525;
var G__24622 = chunk__24526;
var G__24623 = count__24527;
var G__24624 = (i__24528 + (1));
seq__24525 = G__24621;
chunk__24526 = G__24622;
count__24527 = G__24623;
i__24528 = G__24624;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24525);
if(temp__5825__auto__){
var seq__24525__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24525__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24525__$1);
var G__24625 = cljs.core.chunk_rest(seq__24525__$1);
var G__24626 = c__5548__auto__;
var G__24627 = cljs.core.count(c__5548__auto__);
var G__24628 = (0);
seq__24525 = G__24625;
chunk__24526 = G__24626;
count__24527 = G__24627;
i__24528 = G__24628;
continue;
} else {
var event = cljs.core.first(seq__24525__$1);
clear_event(event);


var G__24629 = cljs.core.next(seq__24525__$1);
var G__24630 = null;
var G__24631 = (0);
var G__24632 = (0);
seq__24525 = G__24629;
chunk__24526 = G__24630;
count__24527 = G__24631;
i__24528 = G__24632;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24532 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24533 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24533);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23750__auto___24633 = re_frame.interop.now();
var duration__23751__auto___24634 = (end__23750__auto___24633 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23751__auto___24634,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23750__auto___24633);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24532);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
