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
var _STAR_current_trace_STAR__orig_val__24420 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24421 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24421);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24571 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24571)){
var new_db_24572 = temp__5825__auto___24571;
var fexpr__24427_24573 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24427_24573.cljs$core$IFn$_invoke$arity$1 ? fexpr__24427_24573.cljs$core$IFn$_invoke$arity$1(new_db_24572) : fexpr__24427_24573.call(null,new_db_24572));
} else {
}

var seq__24429 = cljs.core.seq(effects_without_db);
var chunk__24430 = null;
var count__24431 = (0);
var i__24432 = (0);
while(true){
if((i__24432 < count__24431)){
var vec__24445 = chunk__24430.cljs$core$IIndexed$_nth$arity$2(null,i__24432);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24445,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24445,(1),null);
var temp__5823__auto___24574 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24574)){
var effect_fn_24575 = temp__5823__auto___24574;
(effect_fn_24575.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24575.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24575.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24577 = seq__24429;
var G__24578 = chunk__24430;
var G__24579 = count__24431;
var G__24580 = (i__24432 + (1));
seq__24429 = G__24577;
chunk__24430 = G__24578;
count__24431 = G__24579;
i__24432 = G__24580;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24429);
if(temp__5825__auto__){
var seq__24429__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24429__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24429__$1);
var G__24581 = cljs.core.chunk_rest(seq__24429__$1);
var G__24582 = c__5548__auto__;
var G__24583 = cljs.core.count(c__5548__auto__);
var G__24584 = (0);
seq__24429 = G__24581;
chunk__24430 = G__24582;
count__24431 = G__24583;
i__24432 = G__24584;
continue;
} else {
var vec__24456 = cljs.core.first(seq__24429__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24456,(1),null);
var temp__5823__auto___24585 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24585)){
var effect_fn_24586 = temp__5823__auto___24585;
(effect_fn_24586.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24586.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24586.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24587 = cljs.core.next(seq__24429__$1);
var G__24588 = null;
var G__24589 = (0);
var G__24590 = (0);
seq__24429 = G__24587;
chunk__24430 = G__24588;
count__24431 = G__24589;
i__24432 = G__24590;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23801__auto___24591 = re_frame.interop.now();
var duration__23802__auto___24592 = (end__23801__auto___24591 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23802__auto___24592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23801__auto___24591);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24420);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24593 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24593)){
var new_db_24594 = temp__5825__auto___24593;
var fexpr__24460_24595 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24460_24595.cljs$core$IFn$_invoke$arity$1 ? fexpr__24460_24595.cljs$core$IFn$_invoke$arity$1(new_db_24594) : fexpr__24460_24595.call(null,new_db_24594));
} else {
}

var seq__24462 = cljs.core.seq(effects_without_db);
var chunk__24463 = null;
var count__24464 = (0);
var i__24465 = (0);
while(true){
if((i__24465 < count__24464)){
var vec__24478 = chunk__24463.cljs$core$IIndexed$_nth$arity$2(null,i__24465);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(1),null);
var temp__5823__auto___24596 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24596)){
var effect_fn_24597 = temp__5823__auto___24596;
(effect_fn_24597.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24597.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24597.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24599 = seq__24462;
var G__24600 = chunk__24463;
var G__24601 = count__24464;
var G__24602 = (i__24465 + (1));
seq__24462 = G__24599;
chunk__24463 = G__24600;
count__24464 = G__24601;
i__24465 = G__24602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24462);
if(temp__5825__auto__){
var seq__24462__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24462__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24462__$1);
var G__24603 = cljs.core.chunk_rest(seq__24462__$1);
var G__24604 = c__5548__auto__;
var G__24605 = cljs.core.count(c__5548__auto__);
var G__24606 = (0);
seq__24462 = G__24603;
chunk__24463 = G__24604;
count__24464 = G__24605;
i__24465 = G__24606;
continue;
} else {
var vec__24482 = cljs.core.first(seq__24462__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(1),null);
var temp__5823__auto___24607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24607)){
var effect_fn_24608 = temp__5823__auto___24607;
(effect_fn_24608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24608.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24608.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24609 = cljs.core.next(seq__24462__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24462 = G__24609;
chunk__24463 = G__24610;
count__24464 = G__24611;
i__24465 = G__24612;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24491){
var map__24492 = p__24491;
var map__24492__$1 = cljs.core.__destructure_map(map__24492);
var effect = map__24492__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24503 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24504 = null;
var count__24505 = (0);
var i__24506 = (0);
while(true){
if((i__24506 < count__24505)){
var effect = chunk__24504.cljs$core$IIndexed$_nth$arity$2(null,i__24506);
re_frame.fx.dispatch_later(effect);


var G__24613 = seq__24503;
var G__24614 = chunk__24504;
var G__24615 = count__24505;
var G__24616 = (i__24506 + (1));
seq__24503 = G__24613;
chunk__24504 = G__24614;
count__24505 = G__24615;
i__24506 = G__24616;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24503);
if(temp__5825__auto__){
var seq__24503__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24503__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24503__$1);
var G__24617 = cljs.core.chunk_rest(seq__24503__$1);
var G__24618 = c__5548__auto__;
var G__24619 = cljs.core.count(c__5548__auto__);
var G__24620 = (0);
seq__24503 = G__24617;
chunk__24504 = G__24618;
count__24505 = G__24619;
i__24506 = G__24620;
continue;
} else {
var effect = cljs.core.first(seq__24503__$1);
re_frame.fx.dispatch_later(effect);


var G__24621 = cljs.core.next(seq__24503__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24503 = G__24621;
chunk__24504 = G__24622;
count__24505 = G__24623;
i__24506 = G__24624;
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
var seq__24510 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24511 = null;
var count__24512 = (0);
var i__24513 = (0);
while(true){
if((i__24513 < count__24512)){
var vec__24531 = chunk__24511.cljs$core$IIndexed$_nth$arity$2(null,i__24513);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(1),null);
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


var G__24627 = seq__24510;
var G__24628 = chunk__24511;
var G__24629 = count__24512;
var G__24630 = (i__24513 + (1));
seq__24510 = G__24627;
chunk__24511 = G__24628;
count__24512 = G__24629;
i__24513 = G__24630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24510);
if(temp__5825__auto__){
var seq__24510__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24510__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24510__$1);
var G__24631 = cljs.core.chunk_rest(seq__24510__$1);
var G__24632 = c__5548__auto__;
var G__24633 = cljs.core.count(c__5548__auto__);
var G__24634 = (0);
seq__24510 = G__24631;
chunk__24511 = G__24632;
count__24512 = G__24633;
i__24513 = G__24634;
continue;
} else {
var vec__24534 = cljs.core.first(seq__24510__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24635 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24635)){
var effect_fn_24636 = temp__5823__auto___24635;
(effect_fn_24636.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24636.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24636.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24637 = cljs.core.next(seq__24510__$1);
var G__24638 = null;
var G__24639 = (0);
var G__24640 = (0);
seq__24510 = G__24637;
chunk__24511 = G__24638;
count__24512 = G__24639;
i__24513 = G__24640;
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
var seq__24551 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24552 = null;
var count__24553 = (0);
var i__24554 = (0);
while(true){
if((i__24554 < count__24553)){
var event = chunk__24552.cljs$core$IIndexed$_nth$arity$2(null,i__24554);
re_frame.router.dispatch(event);


var G__24641 = seq__24551;
var G__24642 = chunk__24552;
var G__24643 = count__24553;
var G__24644 = (i__24554 + (1));
seq__24551 = G__24641;
chunk__24552 = G__24642;
count__24553 = G__24643;
i__24554 = G__24644;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24551);
if(temp__5825__auto__){
var seq__24551__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24551__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24551__$1);
var G__24645 = cljs.core.chunk_rest(seq__24551__$1);
var G__24646 = c__5548__auto__;
var G__24647 = cljs.core.count(c__5548__auto__);
var G__24648 = (0);
seq__24551 = G__24645;
chunk__24552 = G__24646;
count__24553 = G__24647;
i__24554 = G__24648;
continue;
} else {
var event = cljs.core.first(seq__24551__$1);
re_frame.router.dispatch(event);


var G__24649 = cljs.core.next(seq__24551__$1);
var G__24650 = null;
var G__24651 = (0);
var G__24652 = (0);
seq__24551 = G__24649;
chunk__24552 = G__24650;
count__24553 = G__24651;
i__24554 = G__24652;
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
var seq__24558 = cljs.core.seq(value);
var chunk__24559 = null;
var count__24560 = (0);
var i__24561 = (0);
while(true){
if((i__24561 < count__24560)){
var event = chunk__24559.cljs$core$IIndexed$_nth$arity$2(null,i__24561);
clear_event(event);


var G__24653 = seq__24558;
var G__24654 = chunk__24559;
var G__24655 = count__24560;
var G__24656 = (i__24561 + (1));
seq__24558 = G__24653;
chunk__24559 = G__24654;
count__24560 = G__24655;
i__24561 = G__24656;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24558);
if(temp__5825__auto__){
var seq__24558__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24558__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24558__$1);
var G__24657 = cljs.core.chunk_rest(seq__24558__$1);
var G__24658 = c__5548__auto__;
var G__24659 = cljs.core.count(c__5548__auto__);
var G__24660 = (0);
seq__24558 = G__24657;
chunk__24559 = G__24658;
count__24560 = G__24659;
i__24561 = G__24660;
continue;
} else {
var event = cljs.core.first(seq__24558__$1);
clear_event(event);


var G__24661 = cljs.core.next(seq__24558__$1);
var G__24662 = null;
var G__24663 = (0);
var G__24664 = (0);
seq__24558 = G__24661;
chunk__24559 = G__24662;
count__24560 = G__24663;
i__24561 = G__24664;
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
var _STAR_current_trace_STAR__orig_val__24567 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24568 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24568);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23801__auto___24665 = re_frame.interop.now();
var duration__23802__auto___24666 = (end__23801__auto___24665 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23802__auto___24666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23801__auto___24665);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24567);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
