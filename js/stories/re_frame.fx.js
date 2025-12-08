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
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

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
var _STAR_current_trace_STAR__orig_val__24332 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24333 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24333);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24543 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24543)){
var new_db_24544 = temp__5825__auto___24543;
var fexpr__24334_24545 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24334_24545.cljs$core$IFn$_invoke$arity$1 ? fexpr__24334_24545.cljs$core$IFn$_invoke$arity$1(new_db_24544) : fexpr__24334_24545.call(null,new_db_24544));
} else {
}

var seq__24345 = cljs.core.seq(effects_without_db);
var chunk__24346 = null;
var count__24347 = (0);
var i__24348 = (0);
while(true){
if((i__24348 < count__24347)){
var vec__24410 = chunk__24346.cljs$core$IIndexed$_nth$arity$2(null,i__24348);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(1),null);
var temp__5823__auto___24546 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24546)){
var effect_fn_24547 = temp__5823__auto___24546;
(effect_fn_24547.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24547.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24547.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24548 = seq__24345;
var G__24549 = chunk__24346;
var G__24550 = count__24347;
var G__24551 = (i__24348 + (1));
seq__24345 = G__24548;
chunk__24346 = G__24549;
count__24347 = G__24550;
i__24348 = G__24551;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24345);
if(temp__5825__auto__){
var seq__24345__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24345__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24345__$1);
var G__24552 = cljs.core.chunk_rest(seq__24345__$1);
var G__24553 = c__5548__auto__;
var G__24554 = cljs.core.count(c__5548__auto__);
var G__24555 = (0);
seq__24345 = G__24552;
chunk__24346 = G__24553;
count__24347 = G__24554;
i__24348 = G__24555;
continue;
} else {
var vec__24417 = cljs.core.first(seq__24345__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24417,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24417,(1),null);
var temp__5823__auto___24556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24556)){
var effect_fn_24557 = temp__5823__auto___24556;
(effect_fn_24557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24558 = cljs.core.next(seq__24345__$1);
var G__24559 = null;
var G__24560 = (0);
var G__24561 = (0);
seq__24345 = G__24558;
chunk__24346 = G__24559;
count__24347 = G__24560;
i__24348 = G__24561;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23799__auto___24562 = re_frame.interop.now();
var duration__23800__auto___24563 = (end__23799__auto___24562 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23800__auto___24563,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23799__auto___24562);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24332);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24567 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24567)){
var new_db_24568 = temp__5825__auto___24567;
var fexpr__24433_24569 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24433_24569.cljs$core$IFn$_invoke$arity$1 ? fexpr__24433_24569.cljs$core$IFn$_invoke$arity$1(new_db_24568) : fexpr__24433_24569.call(null,new_db_24568));
} else {
}

var seq__24434 = cljs.core.seq(effects_without_db);
var chunk__24435 = null;
var count__24436 = (0);
var i__24437 = (0);
while(true){
if((i__24437 < count__24436)){
var vec__24454 = chunk__24435.cljs$core$IIndexed$_nth$arity$2(null,i__24437);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(1),null);
var temp__5823__auto___24570 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24570)){
var effect_fn_24571 = temp__5823__auto___24570;
(effect_fn_24571.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24571.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24571.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24572 = seq__24434;
var G__24573 = chunk__24435;
var G__24574 = count__24436;
var G__24575 = (i__24437 + (1));
seq__24434 = G__24572;
chunk__24435 = G__24573;
count__24436 = G__24574;
i__24437 = G__24575;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24434);
if(temp__5825__auto__){
var seq__24434__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24434__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24434__$1);
var G__24576 = cljs.core.chunk_rest(seq__24434__$1);
var G__24577 = c__5548__auto__;
var G__24578 = cljs.core.count(c__5548__auto__);
var G__24579 = (0);
seq__24434 = G__24576;
chunk__24435 = G__24577;
count__24436 = G__24578;
i__24437 = G__24579;
continue;
} else {
var vec__24458 = cljs.core.first(seq__24434__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458,(1),null);
var temp__5823__auto___24580 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24580)){
var effect_fn_24581 = temp__5823__auto___24580;
(effect_fn_24581.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24581.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24581.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24582 = cljs.core.next(seq__24434__$1);
var G__24583 = null;
var G__24584 = (0);
var G__24585 = (0);
seq__24434 = G__24582;
chunk__24435 = G__24583;
count__24436 = G__24584;
i__24437 = G__24585;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24478){
var map__24479 = p__24478;
var map__24479__$1 = cljs.core.__destructure_map(map__24479);
var effect = map__24479__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24479__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24479__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24486 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24487 = null;
var count__24488 = (0);
var i__24489 = (0);
while(true){
if((i__24489 < count__24488)){
var effect = chunk__24487.cljs$core$IIndexed$_nth$arity$2(null,i__24489);
re_frame.fx.dispatch_later(effect);


var G__24591 = seq__24486;
var G__24592 = chunk__24487;
var G__24593 = count__24488;
var G__24594 = (i__24489 + (1));
seq__24486 = G__24591;
chunk__24487 = G__24592;
count__24488 = G__24593;
i__24489 = G__24594;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24486);
if(temp__5825__auto__){
var seq__24486__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24486__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24486__$1);
var G__24597 = cljs.core.chunk_rest(seq__24486__$1);
var G__24598 = c__5548__auto__;
var G__24599 = cljs.core.count(c__5548__auto__);
var G__24600 = (0);
seq__24486 = G__24597;
chunk__24487 = G__24598;
count__24488 = G__24599;
i__24489 = G__24600;
continue;
} else {
var effect = cljs.core.first(seq__24486__$1);
re_frame.fx.dispatch_later(effect);


var G__24601 = cljs.core.next(seq__24486__$1);
var G__24602 = null;
var G__24603 = (0);
var G__24604 = (0);
seq__24486 = G__24601;
chunk__24487 = G__24602;
count__24488 = G__24603;
i__24489 = G__24604;
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
var seq__24505 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24506 = null;
var count__24507 = (0);
var i__24508 = (0);
while(true){
if((i__24508 < count__24507)){
var vec__24517 = chunk__24506.cljs$core$IIndexed$_nth$arity$2(null,i__24508);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24517,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24517,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24605 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24605)){
var effect_fn_24606 = temp__5823__auto___24605;
(effect_fn_24606.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24606.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24606.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24607 = seq__24505;
var G__24608 = chunk__24506;
var G__24609 = count__24507;
var G__24610 = (i__24508 + (1));
seq__24505 = G__24607;
chunk__24506 = G__24608;
count__24507 = G__24609;
i__24508 = G__24610;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24505);
if(temp__5825__auto__){
var seq__24505__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24505__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24505__$1);
var G__24612 = cljs.core.chunk_rest(seq__24505__$1);
var G__24613 = c__5548__auto__;
var G__24614 = cljs.core.count(c__5548__auto__);
var G__24615 = (0);
seq__24505 = G__24612;
chunk__24506 = G__24613;
count__24507 = G__24614;
i__24508 = G__24615;
continue;
} else {
var vec__24523 = cljs.core.first(seq__24505__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24616)){
var effect_fn_24617 = temp__5823__auto___24616;
(effect_fn_24617.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24617.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24617.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24618 = cljs.core.next(seq__24505__$1);
var G__24619 = null;
var G__24620 = (0);
var G__24621 = (0);
seq__24505 = G__24618;
chunk__24506 = G__24619;
count__24507 = G__24620;
i__24508 = G__24621;
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
var seq__24527 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24528 = null;
var count__24529 = (0);
var i__24530 = (0);
while(true){
if((i__24530 < count__24529)){
var event = chunk__24528.cljs$core$IIndexed$_nth$arity$2(null,i__24530);
re_frame.router.dispatch(event);


var G__24624 = seq__24527;
var G__24625 = chunk__24528;
var G__24626 = count__24529;
var G__24627 = (i__24530 + (1));
seq__24527 = G__24624;
chunk__24528 = G__24625;
count__24529 = G__24626;
i__24530 = G__24627;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24527);
if(temp__5825__auto__){
var seq__24527__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24527__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24527__$1);
var G__24628 = cljs.core.chunk_rest(seq__24527__$1);
var G__24629 = c__5548__auto__;
var G__24630 = cljs.core.count(c__5548__auto__);
var G__24631 = (0);
seq__24527 = G__24628;
chunk__24528 = G__24629;
count__24529 = G__24630;
i__24530 = G__24631;
continue;
} else {
var event = cljs.core.first(seq__24527__$1);
re_frame.router.dispatch(event);


var G__24632 = cljs.core.next(seq__24527__$1);
var G__24633 = null;
var G__24634 = (0);
var G__24635 = (0);
seq__24527 = G__24632;
chunk__24528 = G__24633;
count__24529 = G__24634;
i__24530 = G__24635;
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
var seq__24535 = cljs.core.seq(value);
var chunk__24536 = null;
var count__24537 = (0);
var i__24538 = (0);
while(true){
if((i__24538 < count__24537)){
var event = chunk__24536.cljs$core$IIndexed$_nth$arity$2(null,i__24538);
clear_event(event);


var G__24636 = seq__24535;
var G__24637 = chunk__24536;
var G__24638 = count__24537;
var G__24639 = (i__24538 + (1));
seq__24535 = G__24636;
chunk__24536 = G__24637;
count__24537 = G__24638;
i__24538 = G__24639;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24535);
if(temp__5825__auto__){
var seq__24535__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24535__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24535__$1);
var G__24642 = cljs.core.chunk_rest(seq__24535__$1);
var G__24643 = c__5548__auto__;
var G__24644 = cljs.core.count(c__5548__auto__);
var G__24645 = (0);
seq__24535 = G__24642;
chunk__24536 = G__24643;
count__24537 = G__24644;
i__24538 = G__24645;
continue;
} else {
var event = cljs.core.first(seq__24535__$1);
clear_event(event);


var G__24646 = cljs.core.next(seq__24535__$1);
var G__24647 = null;
var G__24648 = (0);
var G__24649 = (0);
seq__24535 = G__24646;
chunk__24536 = G__24647;
count__24537 = G__24648;
i__24538 = G__24649;
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
var _STAR_current_trace_STAR__orig_val__24539 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24540 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24540);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23799__auto___24650 = re_frame.interop.now();
var duration__23800__auto___24651 = (end__23799__auto___24650 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23800__auto___24651,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23799__auto___24650);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24539);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
