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
var _STAR_current_trace_STAR__orig_val__24452 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24453 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24453);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24554 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24554)){
var new_db_24555 = temp__5825__auto___24554;
var fexpr__24456_24556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24456_24556.cljs$core$IFn$_invoke$arity$1 ? fexpr__24456_24556.cljs$core$IFn$_invoke$arity$1(new_db_24555) : fexpr__24456_24556.call(null,new_db_24555));
} else {
}

var seq__24457 = cljs.core.seq(effects_without_db);
var chunk__24458 = null;
var count__24459 = (0);
var i__24460 = (0);
while(true){
if((i__24460 < count__24459)){
var vec__24471 = chunk__24458.cljs$core$IIndexed$_nth$arity$2(null,i__24460);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(1),null);
var temp__5823__auto___24557 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24557)){
var effect_fn_24558 = temp__5823__auto___24557;
(effect_fn_24558.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24558.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24558.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24559 = seq__24457;
var G__24560 = chunk__24458;
var G__24561 = count__24459;
var G__24562 = (i__24460 + (1));
seq__24457 = G__24559;
chunk__24458 = G__24560;
count__24459 = G__24561;
i__24460 = G__24562;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24457);
if(temp__5825__auto__){
var seq__24457__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24457__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24457__$1);
var G__24563 = cljs.core.chunk_rest(seq__24457__$1);
var G__24564 = c__5548__auto__;
var G__24565 = cljs.core.count(c__5548__auto__);
var G__24566 = (0);
seq__24457 = G__24563;
chunk__24458 = G__24564;
count__24459 = G__24565;
i__24460 = G__24566;
continue;
} else {
var vec__24478 = cljs.core.first(seq__24457__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(1),null);
var temp__5823__auto___24567 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24567)){
var effect_fn_24568 = temp__5823__auto___24567;
(effect_fn_24568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24568.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24569 = cljs.core.next(seq__24457__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24457 = G__24569;
chunk__24458 = G__24570;
count__24459 = G__24571;
i__24460 = G__24572;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23878__auto___24573 = re_frame.interop.now();
var duration__23879__auto___24574 = (end__23878__auto___24573 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23879__auto___24574,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23878__auto___24573);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24452);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24575 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24575)){
var new_db_24576 = temp__5825__auto___24575;
var fexpr__24482_24577 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24482_24577.cljs$core$IFn$_invoke$arity$1 ? fexpr__24482_24577.cljs$core$IFn$_invoke$arity$1(new_db_24576) : fexpr__24482_24577.call(null,new_db_24576));
} else {
}

var seq__24483 = cljs.core.seq(effects_without_db);
var chunk__24484 = null;
var count__24485 = (0);
var i__24486 = (0);
while(true){
if((i__24486 < count__24485)){
var vec__24493 = chunk__24484.cljs$core$IIndexed$_nth$arity$2(null,i__24486);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24493,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24493,(1),null);
var temp__5823__auto___24578 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24578)){
var effect_fn_24579 = temp__5823__auto___24578;
(effect_fn_24579.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24579.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24579.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24580 = seq__24483;
var G__24581 = chunk__24484;
var G__24582 = count__24485;
var G__24583 = (i__24486 + (1));
seq__24483 = G__24580;
chunk__24484 = G__24581;
count__24485 = G__24582;
i__24486 = G__24583;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24483);
if(temp__5825__auto__){
var seq__24483__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24483__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24483__$1);
var G__24584 = cljs.core.chunk_rest(seq__24483__$1);
var G__24585 = c__5548__auto__;
var G__24586 = cljs.core.count(c__5548__auto__);
var G__24587 = (0);
seq__24483 = G__24584;
chunk__24484 = G__24585;
count__24485 = G__24586;
i__24486 = G__24587;
continue;
} else {
var vec__24499 = cljs.core.first(seq__24483__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(1),null);
var temp__5823__auto___24588 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24588)){
var effect_fn_24589 = temp__5823__auto___24588;
(effect_fn_24589.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24589.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24589.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24590 = cljs.core.next(seq__24483__$1);
var G__24591 = null;
var G__24592 = (0);
var G__24593 = (0);
seq__24483 = G__24590;
chunk__24484 = G__24591;
count__24485 = G__24592;
i__24486 = G__24593;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24502){
var map__24503 = p__24502;
var map__24503__$1 = cljs.core.__destructure_map(map__24503);
var effect = map__24503__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24503__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24503__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24505 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24506 = null;
var count__24507 = (0);
var i__24508 = (0);
while(true){
if((i__24508 < count__24507)){
var effect = chunk__24506.cljs$core$IIndexed$_nth$arity$2(null,i__24508);
re_frame.fx.dispatch_later(effect);


var G__24594 = seq__24505;
var G__24595 = chunk__24506;
var G__24596 = count__24507;
var G__24597 = (i__24508 + (1));
seq__24505 = G__24594;
chunk__24506 = G__24595;
count__24507 = G__24596;
i__24508 = G__24597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24505);
if(temp__5825__auto__){
var seq__24505__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24505__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24505__$1);
var G__24598 = cljs.core.chunk_rest(seq__24505__$1);
var G__24599 = c__5548__auto__;
var G__24600 = cljs.core.count(c__5548__auto__);
var G__24601 = (0);
seq__24505 = G__24598;
chunk__24506 = G__24599;
count__24507 = G__24600;
i__24508 = G__24601;
continue;
} else {
var effect = cljs.core.first(seq__24505__$1);
re_frame.fx.dispatch_later(effect);


var G__24602 = cljs.core.next(seq__24505__$1);
var G__24603 = null;
var G__24604 = (0);
var G__24605 = (0);
seq__24505 = G__24602;
chunk__24506 = G__24603;
count__24507 = G__24604;
i__24508 = G__24605;
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
var seq__24521 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24522 = null;
var count__24523 = (0);
var i__24524 = (0);
while(true){
if((i__24524 < count__24523)){
var vec__24537 = chunk__24522.cljs$core$IIndexed$_nth$arity$2(null,i__24524);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24606 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24606)){
var effect_fn_24607 = temp__5823__auto___24606;
(effect_fn_24607.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24607.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24607.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24608 = seq__24521;
var G__24609 = chunk__24522;
var G__24610 = count__24523;
var G__24611 = (i__24524 + (1));
seq__24521 = G__24608;
chunk__24522 = G__24609;
count__24523 = G__24610;
i__24524 = G__24611;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24521);
if(temp__5825__auto__){
var seq__24521__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24521__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24521__$1);
var G__24612 = cljs.core.chunk_rest(seq__24521__$1);
var G__24613 = c__5548__auto__;
var G__24614 = cljs.core.count(c__5548__auto__);
var G__24615 = (0);
seq__24521 = G__24612;
chunk__24522 = G__24613;
count__24523 = G__24614;
i__24524 = G__24615;
continue;
} else {
var vec__24540 = cljs.core.first(seq__24521__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24540,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24540,(1),null);
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


var G__24618 = cljs.core.next(seq__24521__$1);
var G__24619 = null;
var G__24620 = (0);
var G__24621 = (0);
seq__24521 = G__24618;
chunk__24522 = G__24619;
count__24523 = G__24620;
i__24524 = G__24621;
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
var seq__24544 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24545 = null;
var count__24546 = (0);
var i__24547 = (0);
while(true){
if((i__24547 < count__24546)){
var event = chunk__24545.cljs$core$IIndexed$_nth$arity$2(null,i__24547);
re_frame.router.dispatch(event);


var G__24622 = seq__24544;
var G__24623 = chunk__24545;
var G__24624 = count__24546;
var G__24625 = (i__24547 + (1));
seq__24544 = G__24622;
chunk__24545 = G__24623;
count__24546 = G__24624;
i__24547 = G__24625;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24544);
if(temp__5825__auto__){
var seq__24544__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24544__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24544__$1);
var G__24626 = cljs.core.chunk_rest(seq__24544__$1);
var G__24627 = c__5548__auto__;
var G__24628 = cljs.core.count(c__5548__auto__);
var G__24629 = (0);
seq__24544 = G__24626;
chunk__24545 = G__24627;
count__24546 = G__24628;
i__24547 = G__24629;
continue;
} else {
var event = cljs.core.first(seq__24544__$1);
re_frame.router.dispatch(event);


var G__24630 = cljs.core.next(seq__24544__$1);
var G__24631 = null;
var G__24632 = (0);
var G__24633 = (0);
seq__24544 = G__24630;
chunk__24545 = G__24631;
count__24546 = G__24632;
i__24547 = G__24633;
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
var seq__24548 = cljs.core.seq(value);
var chunk__24549 = null;
var count__24550 = (0);
var i__24551 = (0);
while(true){
if((i__24551 < count__24550)){
var event = chunk__24549.cljs$core$IIndexed$_nth$arity$2(null,i__24551);
clear_event(event);


var G__24634 = seq__24548;
var G__24635 = chunk__24549;
var G__24636 = count__24550;
var G__24637 = (i__24551 + (1));
seq__24548 = G__24634;
chunk__24549 = G__24635;
count__24550 = G__24636;
i__24551 = G__24637;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24548);
if(temp__5825__auto__){
var seq__24548__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24548__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24548__$1);
var G__24638 = cljs.core.chunk_rest(seq__24548__$1);
var G__24639 = c__5548__auto__;
var G__24640 = cljs.core.count(c__5548__auto__);
var G__24641 = (0);
seq__24548 = G__24638;
chunk__24549 = G__24639;
count__24550 = G__24640;
i__24551 = G__24641;
continue;
} else {
var event = cljs.core.first(seq__24548__$1);
clear_event(event);


var G__24642 = cljs.core.next(seq__24548__$1);
var G__24643 = null;
var G__24644 = (0);
var G__24645 = (0);
seq__24548 = G__24642;
chunk__24549 = G__24643;
count__24550 = G__24644;
i__24551 = G__24645;
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
var end__23878__auto___24646 = re_frame.interop.now();
var duration__23879__auto___24647 = (end__23878__auto___24646 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23879__auto___24647,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23878__auto___24646);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24552);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
