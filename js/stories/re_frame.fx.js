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
var _STAR_current_trace_STAR__orig_val__24422 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24423 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24423);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24554 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24554)){
var new_db_24555 = temp__5825__auto___24554;
var fexpr__24434_24556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24434_24556.cljs$core$IFn$_invoke$arity$1 ? fexpr__24434_24556.cljs$core$IFn$_invoke$arity$1(new_db_24555) : fexpr__24434_24556.call(null,new_db_24555));
} else {
}

var seq__24435 = cljs.core.seq(effects_without_db);
var chunk__24436 = null;
var count__24437 = (0);
var i__24438 = (0);
while(true){
if((i__24438 < count__24437)){
var vec__24463 = chunk__24436.cljs$core$IIndexed$_nth$arity$2(null,i__24438);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24463,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24463,(1),null);
var temp__5823__auto___24557 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24557)){
var effect_fn_24558 = temp__5823__auto___24557;
(effect_fn_24558.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24558.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24558.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24559 = seq__24435;
var G__24560 = chunk__24436;
var G__24561 = count__24437;
var G__24562 = (i__24438 + (1));
seq__24435 = G__24559;
chunk__24436 = G__24560;
count__24437 = G__24561;
i__24438 = G__24562;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24435);
if(temp__5825__auto__){
var seq__24435__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24435__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24435__$1);
var G__24563 = cljs.core.chunk_rest(seq__24435__$1);
var G__24564 = c__5548__auto__;
var G__24565 = cljs.core.count(c__5548__auto__);
var G__24566 = (0);
seq__24435 = G__24563;
chunk__24436 = G__24564;
count__24437 = G__24565;
i__24438 = G__24566;
continue;
} else {
var vec__24471 = cljs.core.first(seq__24435__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(1),null);
var temp__5823__auto___24567 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24567)){
var effect_fn_24568 = temp__5823__auto___24567;
(effect_fn_24568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24568.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24569 = cljs.core.next(seq__24435__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24435 = G__24569;
chunk__24436 = G__24570;
count__24437 = G__24571;
i__24438 = G__24572;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23801__auto___24573 = re_frame.interop.now();
var duration__23802__auto___24574 = (end__23801__auto___24573 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23802__auto___24574,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23801__auto___24573);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24422);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24575 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24575)){
var new_db_24576 = temp__5825__auto___24575;
var fexpr__24479_24577 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24479_24577.cljs$core$IFn$_invoke$arity$1 ? fexpr__24479_24577.cljs$core$IFn$_invoke$arity$1(new_db_24576) : fexpr__24479_24577.call(null,new_db_24576));
} else {
}

var seq__24480 = cljs.core.seq(effects_without_db);
var chunk__24482 = null;
var count__24484 = (0);
var i__24485 = (0);
while(true){
if((i__24485 < count__24484)){
var vec__24509 = chunk__24482.cljs$core$IIndexed$_nth$arity$2(null,i__24485);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(1),null);
var temp__5823__auto___24579 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24579)){
var effect_fn_24583 = temp__5823__auto___24579;
(effect_fn_24583.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24583.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24583.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24584 = seq__24480;
var G__24585 = chunk__24482;
var G__24586 = count__24484;
var G__24587 = (i__24485 + (1));
seq__24480 = G__24584;
chunk__24482 = G__24585;
count__24484 = G__24586;
i__24485 = G__24587;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24480);
if(temp__5825__auto__){
var seq__24480__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24480__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24480__$1);
var G__24588 = cljs.core.chunk_rest(seq__24480__$1);
var G__24589 = c__5548__auto__;
var G__24590 = cljs.core.count(c__5548__auto__);
var G__24591 = (0);
seq__24480 = G__24588;
chunk__24482 = G__24589;
count__24484 = G__24590;
i__24485 = G__24591;
continue;
} else {
var vec__24516 = cljs.core.first(seq__24480__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516,(1),null);
var temp__5823__auto___24592 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24592)){
var effect_fn_24593 = temp__5823__auto___24592;
(effect_fn_24593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24594 = cljs.core.next(seq__24480__$1);
var G__24595 = null;
var G__24596 = (0);
var G__24597 = (0);
seq__24480 = G__24594;
chunk__24482 = G__24595;
count__24484 = G__24596;
i__24485 = G__24597;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24519){
var map__24520 = p__24519;
var map__24520__$1 = cljs.core.__destructure_map(map__24520);
var effect = map__24520__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24521 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24522 = null;
var count__24523 = (0);
var i__24524 = (0);
while(true){
if((i__24524 < count__24523)){
var effect = chunk__24522.cljs$core$IIndexed$_nth$arity$2(null,i__24524);
re_frame.fx.dispatch_later(effect);


var G__24601 = seq__24521;
var G__24602 = chunk__24522;
var G__24603 = count__24523;
var G__24604 = (i__24524 + (1));
seq__24521 = G__24601;
chunk__24522 = G__24602;
count__24523 = G__24603;
i__24524 = G__24604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24521);
if(temp__5825__auto__){
var seq__24521__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24521__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24521__$1);
var G__24606 = cljs.core.chunk_rest(seq__24521__$1);
var G__24607 = c__5548__auto__;
var G__24608 = cljs.core.count(c__5548__auto__);
var G__24609 = (0);
seq__24521 = G__24606;
chunk__24522 = G__24607;
count__24523 = G__24608;
i__24524 = G__24609;
continue;
} else {
var effect = cljs.core.first(seq__24521__$1);
re_frame.fx.dispatch_later(effect);


var G__24611 = cljs.core.next(seq__24521__$1);
var G__24612 = null;
var G__24613 = (0);
var G__24614 = (0);
seq__24521 = G__24611;
chunk__24522 = G__24612;
count__24523 = G__24613;
i__24524 = G__24614;
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
var seq__24525 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24526 = null;
var count__24527 = (0);
var i__24528 = (0);
while(true){
if((i__24528 < count__24527)){
var vec__24535 = chunk__24526.cljs$core$IIndexed$_nth$arity$2(null,i__24528);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24615 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24615)){
var effect_fn_24616 = temp__5823__auto___24615;
(effect_fn_24616.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24616.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24616.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24617 = seq__24525;
var G__24618 = chunk__24526;
var G__24619 = count__24527;
var G__24620 = (i__24528 + (1));
seq__24525 = G__24617;
chunk__24526 = G__24618;
count__24527 = G__24619;
i__24528 = G__24620;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24525);
if(temp__5825__auto__){
var seq__24525__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24525__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24525__$1);
var G__24621 = cljs.core.chunk_rest(seq__24525__$1);
var G__24622 = c__5548__auto__;
var G__24623 = cljs.core.count(c__5548__auto__);
var G__24624 = (0);
seq__24525 = G__24621;
chunk__24526 = G__24622;
count__24527 = G__24623;
i__24528 = G__24624;
continue;
} else {
var vec__24538 = cljs.core.first(seq__24525__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24625 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24625)){
var effect_fn_24626 = temp__5823__auto___24625;
(effect_fn_24626.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24626.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24626.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24627 = cljs.core.next(seq__24525__$1);
var G__24628 = null;
var G__24629 = (0);
var G__24630 = (0);
seq__24525 = G__24627;
chunk__24526 = G__24628;
count__24527 = G__24629;
i__24528 = G__24630;
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
var seq__24541 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24542 = null;
var count__24543 = (0);
var i__24544 = (0);
while(true){
if((i__24544 < count__24543)){
var event = chunk__24542.cljs$core$IIndexed$_nth$arity$2(null,i__24544);
re_frame.router.dispatch(event);


var G__24631 = seq__24541;
var G__24632 = chunk__24542;
var G__24633 = count__24543;
var G__24634 = (i__24544 + (1));
seq__24541 = G__24631;
chunk__24542 = G__24632;
count__24543 = G__24633;
i__24544 = G__24634;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24541);
if(temp__5825__auto__){
var seq__24541__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24541__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24541__$1);
var G__24635 = cljs.core.chunk_rest(seq__24541__$1);
var G__24636 = c__5548__auto__;
var G__24637 = cljs.core.count(c__5548__auto__);
var G__24638 = (0);
seq__24541 = G__24635;
chunk__24542 = G__24636;
count__24543 = G__24637;
i__24544 = G__24638;
continue;
} else {
var event = cljs.core.first(seq__24541__$1);
re_frame.router.dispatch(event);


var G__24639 = cljs.core.next(seq__24541__$1);
var G__24640 = null;
var G__24641 = (0);
var G__24642 = (0);
seq__24541 = G__24639;
chunk__24542 = G__24640;
count__24543 = G__24641;
i__24544 = G__24642;
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
var seq__24547 = cljs.core.seq(value);
var chunk__24548 = null;
var count__24549 = (0);
var i__24550 = (0);
while(true){
if((i__24550 < count__24549)){
var event = chunk__24548.cljs$core$IIndexed$_nth$arity$2(null,i__24550);
clear_event(event);


var G__24643 = seq__24547;
var G__24644 = chunk__24548;
var G__24645 = count__24549;
var G__24646 = (i__24550 + (1));
seq__24547 = G__24643;
chunk__24548 = G__24644;
count__24549 = G__24645;
i__24550 = G__24646;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24547);
if(temp__5825__auto__){
var seq__24547__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24547__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24547__$1);
var G__24647 = cljs.core.chunk_rest(seq__24547__$1);
var G__24648 = c__5548__auto__;
var G__24649 = cljs.core.count(c__5548__auto__);
var G__24650 = (0);
seq__24547 = G__24647;
chunk__24548 = G__24648;
count__24549 = G__24649;
i__24550 = G__24650;
continue;
} else {
var event = cljs.core.first(seq__24547__$1);
clear_event(event);


var G__24651 = cljs.core.next(seq__24547__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24547 = G__24651;
chunk__24548 = G__24652;
count__24549 = G__24653;
i__24550 = G__24654;
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
var _STAR_current_trace_STAR__orig_val__24552 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24553 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24553);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23801__auto___24655 = re_frame.interop.now();
var duration__23802__auto___24656 = (end__23801__auto___24655 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23802__auto___24656,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23801__auto___24655);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24552);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
