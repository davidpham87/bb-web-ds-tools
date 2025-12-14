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
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
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
var _STAR_current_trace_STAR__orig_val__24400 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24401 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24401);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24522 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24522)){
var new_db_24523 = temp__5825__auto___24522;
var fexpr__24412_24524 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24412_24524.cljs$core$IFn$_invoke$arity$1 ? fexpr__24412_24524.cljs$core$IFn$_invoke$arity$1(new_db_24523) : fexpr__24412_24524.call(null,new_db_24523));
} else {
}

var seq__24413 = cljs.core.seq(effects_without_db);
var chunk__24414 = null;
var count__24415 = (0);
var i__24416 = (0);
while(true){
if((i__24416 < count__24415)){
var vec__24433 = chunk__24414.cljs$core$IIndexed$_nth$arity$2(null,i__24416);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433,(1),null);
var temp__5823__auto___24525 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24525)){
var effect_fn_24526 = temp__5823__auto___24525;
(effect_fn_24526.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24526.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24526.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24527 = seq__24413;
var G__24528 = chunk__24414;
var G__24529 = count__24415;
var G__24530 = (i__24416 + (1));
seq__24413 = G__24527;
chunk__24414 = G__24528;
count__24415 = G__24529;
i__24416 = G__24530;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24413);
if(temp__5825__auto__){
var seq__24413__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24413__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24413__$1);
var G__24531 = cljs.core.chunk_rest(seq__24413__$1);
var G__24532 = c__5548__auto__;
var G__24533 = cljs.core.count(c__5548__auto__);
var G__24534 = (0);
seq__24413 = G__24531;
chunk__24414 = G__24532;
count__24415 = G__24533;
i__24416 = G__24534;
continue;
} else {
var vec__24436 = cljs.core.first(seq__24413__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(1),null);
var temp__5823__auto___24535 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24535)){
var effect_fn_24536 = temp__5823__auto___24535;
(effect_fn_24536.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24536.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24536.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24538 = cljs.core.next(seq__24413__$1);
var G__24539 = null;
var G__24540 = (0);
var G__24541 = (0);
seq__24413 = G__24538;
chunk__24414 = G__24539;
count__24415 = G__24540;
i__24416 = G__24541;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23833__auto___24542 = re_frame.interop.now();
var duration__23834__auto___24543 = (end__23833__auto___24542 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23834__auto___24543,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23833__auto___24542);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24400);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24544 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24544)){
var new_db_24545 = temp__5825__auto___24544;
var fexpr__24466_24546 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24466_24546.cljs$core$IFn$_invoke$arity$1 ? fexpr__24466_24546.cljs$core$IFn$_invoke$arity$1(new_db_24545) : fexpr__24466_24546.call(null,new_db_24545));
} else {
}

var seq__24467 = cljs.core.seq(effects_without_db);
var chunk__24468 = null;
var count__24469 = (0);
var i__24470 = (0);
while(true){
if((i__24470 < count__24469)){
var vec__24481 = chunk__24468.cljs$core$IIndexed$_nth$arity$2(null,i__24470);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24481,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24481,(1),null);
var temp__5823__auto___24547 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24547)){
var effect_fn_24548 = temp__5823__auto___24547;
(effect_fn_24548.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24548.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24548.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24549 = seq__24467;
var G__24550 = chunk__24468;
var G__24551 = count__24469;
var G__24552 = (i__24470 + (1));
seq__24467 = G__24549;
chunk__24468 = G__24550;
count__24469 = G__24551;
i__24470 = G__24552;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24467);
if(temp__5825__auto__){
var seq__24467__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24467__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24467__$1);
var G__24553 = cljs.core.chunk_rest(seq__24467__$1);
var G__24554 = c__5548__auto__;
var G__24555 = cljs.core.count(c__5548__auto__);
var G__24556 = (0);
seq__24467 = G__24553;
chunk__24468 = G__24554;
count__24469 = G__24555;
i__24470 = G__24556;
continue;
} else {
var vec__24484 = cljs.core.first(seq__24467__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(1),null);
var temp__5823__auto___24557 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24557)){
var effect_fn_24558 = temp__5823__auto___24557;
(effect_fn_24558.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24558.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24558.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24559 = cljs.core.next(seq__24467__$1);
var G__24560 = null;
var G__24561 = (0);
var G__24562 = (0);
seq__24467 = G__24559;
chunk__24468 = G__24560;
count__24469 = G__24561;
i__24470 = G__24562;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24487){
var map__24488 = p__24487;
var map__24488__$1 = cljs.core.__destructure_map(map__24488);
var effect = map__24488__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24488__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24488__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24489 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24490 = null;
var count__24491 = (0);
var i__24492 = (0);
while(true){
if((i__24492 < count__24491)){
var effect = chunk__24490.cljs$core$IIndexed$_nth$arity$2(null,i__24492);
re_frame.fx.dispatch_later(effect);


var G__24564 = seq__24489;
var G__24565 = chunk__24490;
var G__24566 = count__24491;
var G__24567 = (i__24492 + (1));
seq__24489 = G__24564;
chunk__24490 = G__24565;
count__24491 = G__24566;
i__24492 = G__24567;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24489);
if(temp__5825__auto__){
var seq__24489__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24489__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24489__$1);
var G__24568 = cljs.core.chunk_rest(seq__24489__$1);
var G__24569 = c__5548__auto__;
var G__24570 = cljs.core.count(c__5548__auto__);
var G__24571 = (0);
seq__24489 = G__24568;
chunk__24490 = G__24569;
count__24491 = G__24570;
i__24492 = G__24571;
continue;
} else {
var effect = cljs.core.first(seq__24489__$1);
re_frame.fx.dispatch_later(effect);


var G__24572 = cljs.core.next(seq__24489__$1);
var G__24573 = null;
var G__24574 = (0);
var G__24575 = (0);
seq__24489 = G__24572;
chunk__24490 = G__24573;
count__24491 = G__24574;
i__24492 = G__24575;
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

var temp__5823__auto___24576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24576)){
var effect_fn_24577 = temp__5823__auto___24576;
(effect_fn_24577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24578 = seq__24493;
var G__24579 = chunk__24494;
var G__24580 = count__24495;
var G__24581 = (i__24496 + (1));
seq__24493 = G__24578;
chunk__24494 = G__24579;
count__24495 = G__24580;
i__24496 = G__24581;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24493);
if(temp__5825__auto__){
var seq__24493__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24493__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24493__$1);
var G__24582 = cljs.core.chunk_rest(seq__24493__$1);
var G__24583 = c__5548__auto__;
var G__24584 = cljs.core.count(c__5548__auto__);
var G__24585 = (0);
seq__24493 = G__24582;
chunk__24494 = G__24583;
count__24495 = G__24584;
i__24496 = G__24585;
continue;
} else {
var vec__24506 = cljs.core.first(seq__24493__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24588 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24588)){
var effect_fn_24589 = temp__5823__auto___24588;
(effect_fn_24589.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24589.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24589.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24590 = cljs.core.next(seq__24493__$1);
var G__24591 = null;
var G__24592 = (0);
var G__24593 = (0);
seq__24493 = G__24590;
chunk__24494 = G__24591;
count__24495 = G__24592;
i__24496 = G__24593;
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
var seq__24509 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24510 = null;
var count__24511 = (0);
var i__24512 = (0);
while(true){
if((i__24512 < count__24511)){
var event = chunk__24510.cljs$core$IIndexed$_nth$arity$2(null,i__24512);
re_frame.router.dispatch(event);


var G__24594 = seq__24509;
var G__24595 = chunk__24510;
var G__24596 = count__24511;
var G__24597 = (i__24512 + (1));
seq__24509 = G__24594;
chunk__24510 = G__24595;
count__24511 = G__24596;
i__24512 = G__24597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24509);
if(temp__5825__auto__){
var seq__24509__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24509__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24509__$1);
var G__24598 = cljs.core.chunk_rest(seq__24509__$1);
var G__24599 = c__5548__auto__;
var G__24600 = cljs.core.count(c__5548__auto__);
var G__24601 = (0);
seq__24509 = G__24598;
chunk__24510 = G__24599;
count__24511 = G__24600;
i__24512 = G__24601;
continue;
} else {
var event = cljs.core.first(seq__24509__$1);
re_frame.router.dispatch(event);


var G__24602 = cljs.core.next(seq__24509__$1);
var G__24603 = null;
var G__24604 = (0);
var G__24605 = (0);
seq__24509 = G__24602;
chunk__24510 = G__24603;
count__24511 = G__24604;
i__24512 = G__24605;
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
var seq__24516 = cljs.core.seq(value);
var chunk__24517 = null;
var count__24518 = (0);
var i__24519 = (0);
while(true){
if((i__24519 < count__24518)){
var event = chunk__24517.cljs$core$IIndexed$_nth$arity$2(null,i__24519);
clear_event(event);


var G__24610 = seq__24516;
var G__24611 = chunk__24517;
var G__24612 = count__24518;
var G__24613 = (i__24519 + (1));
seq__24516 = G__24610;
chunk__24517 = G__24611;
count__24518 = G__24612;
i__24519 = G__24613;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24516);
if(temp__5825__auto__){
var seq__24516__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24516__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24516__$1);
var G__24614 = cljs.core.chunk_rest(seq__24516__$1);
var G__24615 = c__5548__auto__;
var G__24616 = cljs.core.count(c__5548__auto__);
var G__24617 = (0);
seq__24516 = G__24614;
chunk__24517 = G__24615;
count__24518 = G__24616;
i__24519 = G__24617;
continue;
} else {
var event = cljs.core.first(seq__24516__$1);
clear_event(event);


var G__24618 = cljs.core.next(seq__24516__$1);
var G__24619 = null;
var G__24620 = (0);
var G__24621 = (0);
seq__24516 = G__24618;
chunk__24517 = G__24619;
count__24518 = G__24620;
i__24519 = G__24621;
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
var _STAR_current_trace_STAR__orig_val__24520 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24521 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24521);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23833__auto___24622 = re_frame.interop.now();
var duration__23834__auto___24623 = (end__23833__auto___24622 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23834__auto___24623,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23833__auto___24622);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24520);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
