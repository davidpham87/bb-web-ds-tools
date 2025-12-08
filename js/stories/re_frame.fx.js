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
var _STAR_current_trace_STAR__orig_val__24460 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24461 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24461);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24563 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24563)){
var new_db_24564 = temp__5825__auto___24563;
var fexpr__24463_24565 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24463_24565.cljs$core$IFn$_invoke$arity$1 ? fexpr__24463_24565.cljs$core$IFn$_invoke$arity$1(new_db_24564) : fexpr__24463_24565.call(null,new_db_24564));
} else {
}

var seq__24466 = cljs.core.seq(effects_without_db);
var chunk__24467 = null;
var count__24468 = (0);
var i__24469 = (0);
while(true){
if((i__24469 < count__24468)){
var vec__24476 = chunk__24467.cljs$core$IIndexed$_nth$arity$2(null,i__24469);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(1),null);
var temp__5823__auto___24566 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24566)){
var effect_fn_24567 = temp__5823__auto___24566;
(effect_fn_24567.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24567.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24567.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24568 = seq__24466;
var G__24569 = chunk__24467;
var G__24570 = count__24468;
var G__24571 = (i__24469 + (1));
seq__24466 = G__24568;
chunk__24467 = G__24569;
count__24468 = G__24570;
i__24469 = G__24571;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24466);
if(temp__5825__auto__){
var seq__24466__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24466__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24466__$1);
var G__24572 = cljs.core.chunk_rest(seq__24466__$1);
var G__24573 = c__5548__auto__;
var G__24574 = cljs.core.count(c__5548__auto__);
var G__24575 = (0);
seq__24466 = G__24572;
chunk__24467 = G__24573;
count__24468 = G__24574;
i__24469 = G__24575;
continue;
} else {
var vec__24480 = cljs.core.first(seq__24466__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(1),null);
var temp__5823__auto___24576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24576)){
var effect_fn_24577 = temp__5823__auto___24576;
(effect_fn_24577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24578 = cljs.core.next(seq__24466__$1);
var G__24579 = null;
var G__24580 = (0);
var G__24581 = (0);
seq__24466 = G__24578;
chunk__24467 = G__24579;
count__24468 = G__24580;
i__24469 = G__24581;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23896__auto___24582 = re_frame.interop.now();
var duration__23897__auto___24583 = (end__23896__auto___24582 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23897__auto___24583,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23896__auto___24582);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24460);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24584 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24584)){
var new_db_24585 = temp__5825__auto___24584;
var fexpr__24483_24586 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24483_24586.cljs$core$IFn$_invoke$arity$1 ? fexpr__24483_24586.cljs$core$IFn$_invoke$arity$1(new_db_24585) : fexpr__24483_24586.call(null,new_db_24585));
} else {
}

var seq__24484 = cljs.core.seq(effects_without_db);
var chunk__24485 = null;
var count__24486 = (0);
var i__24487 = (0);
while(true){
if((i__24487 < count__24486)){
var vec__24497 = chunk__24485.cljs$core$IIndexed$_nth$arity$2(null,i__24487);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24497,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24497,(1),null);
var temp__5823__auto___24587 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24587)){
var effect_fn_24588 = temp__5823__auto___24587;
(effect_fn_24588.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24588.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24588.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24589 = seq__24484;
var G__24590 = chunk__24485;
var G__24591 = count__24486;
var G__24592 = (i__24487 + (1));
seq__24484 = G__24589;
chunk__24485 = G__24590;
count__24486 = G__24591;
i__24487 = G__24592;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24484);
if(temp__5825__auto__){
var seq__24484__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24484__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24484__$1);
var G__24593 = cljs.core.chunk_rest(seq__24484__$1);
var G__24594 = c__5548__auto__;
var G__24595 = cljs.core.count(c__5548__auto__);
var G__24596 = (0);
seq__24484 = G__24593;
chunk__24485 = G__24594;
count__24486 = G__24595;
i__24487 = G__24596;
continue;
} else {
var vec__24512 = cljs.core.first(seq__24484__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512,(1),null);
var temp__5823__auto___24597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24597)){
var effect_fn_24598 = temp__5823__auto___24597;
(effect_fn_24598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24599 = cljs.core.next(seq__24484__$1);
var G__24600 = null;
var G__24601 = (0);
var G__24602 = (0);
seq__24484 = G__24599;
chunk__24485 = G__24600;
count__24486 = G__24601;
i__24487 = G__24602;
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


var G__24605 = seq__24521;
var G__24606 = chunk__24522;
var G__24607 = count__24523;
var G__24608 = (i__24524 + (1));
seq__24521 = G__24605;
chunk__24522 = G__24606;
count__24523 = G__24607;
i__24524 = G__24608;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24521);
if(temp__5825__auto__){
var seq__24521__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24521__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24521__$1);
var G__24609 = cljs.core.chunk_rest(seq__24521__$1);
var G__24610 = c__5548__auto__;
var G__24611 = cljs.core.count(c__5548__auto__);
var G__24612 = (0);
seq__24521 = G__24609;
chunk__24522 = G__24610;
count__24523 = G__24611;
i__24524 = G__24612;
continue;
} else {
var effect = cljs.core.first(seq__24521__$1);
re_frame.fx.dispatch_later(effect);


var G__24613 = cljs.core.next(seq__24521__$1);
var G__24614 = null;
var G__24616 = (0);
var G__24617 = (0);
seq__24521 = G__24613;
chunk__24522 = G__24614;
count__24523 = G__24616;
i__24524 = G__24617;
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
var vec__24538 = chunk__24526.cljs$core$IIndexed$_nth$arity$2(null,i__24528);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24618 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24618)){
var effect_fn_24619 = temp__5823__auto___24618;
(effect_fn_24619.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24619.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24619.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24620 = seq__24525;
var G__24621 = chunk__24526;
var G__24622 = count__24527;
var G__24623 = (i__24528 + (1));
seq__24525 = G__24620;
chunk__24526 = G__24621;
count__24527 = G__24622;
i__24528 = G__24623;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24525);
if(temp__5825__auto__){
var seq__24525__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24525__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24525__$1);
var G__24624 = cljs.core.chunk_rest(seq__24525__$1);
var G__24625 = c__5548__auto__;
var G__24626 = cljs.core.count(c__5548__auto__);
var G__24627 = (0);
seq__24525 = G__24624;
chunk__24526 = G__24625;
count__24527 = G__24626;
i__24528 = G__24627;
continue;
} else {
var vec__24541 = cljs.core.first(seq__24525__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24628 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24628)){
var effect_fn_24629 = temp__5823__auto___24628;
(effect_fn_24629.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24629.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24629.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24630 = cljs.core.next(seq__24525__$1);
var G__24631 = null;
var G__24632 = (0);
var G__24633 = (0);
seq__24525 = G__24630;
chunk__24526 = G__24631;
count__24527 = G__24632;
i__24528 = G__24633;
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


var G__24637 = seq__24544;
var G__24638 = chunk__24545;
var G__24639 = count__24546;
var G__24640 = (i__24547 + (1));
seq__24544 = G__24637;
chunk__24545 = G__24638;
count__24546 = G__24639;
i__24547 = G__24640;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24544);
if(temp__5825__auto__){
var seq__24544__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24544__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24544__$1);
var G__24641 = cljs.core.chunk_rest(seq__24544__$1);
var G__24642 = c__5548__auto__;
var G__24643 = cljs.core.count(c__5548__auto__);
var G__24644 = (0);
seq__24544 = G__24641;
chunk__24545 = G__24642;
count__24546 = G__24643;
i__24547 = G__24644;
continue;
} else {
var event = cljs.core.first(seq__24544__$1);
re_frame.router.dispatch(event);


var G__24645 = cljs.core.next(seq__24544__$1);
var G__24646 = null;
var G__24647 = (0);
var G__24648 = (0);
seq__24544 = G__24645;
chunk__24545 = G__24646;
count__24546 = G__24647;
i__24547 = G__24648;
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


var G__24649 = seq__24548;
var G__24650 = chunk__24549;
var G__24651 = count__24550;
var G__24652 = (i__24551 + (1));
seq__24548 = G__24649;
chunk__24549 = G__24650;
count__24550 = G__24651;
i__24551 = G__24652;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24548);
if(temp__5825__auto__){
var seq__24548__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24548__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24548__$1);
var G__24654 = cljs.core.chunk_rest(seq__24548__$1);
var G__24655 = c__5548__auto__;
var G__24656 = cljs.core.count(c__5548__auto__);
var G__24657 = (0);
seq__24548 = G__24654;
chunk__24549 = G__24655;
count__24550 = G__24656;
i__24551 = G__24657;
continue;
} else {
var event = cljs.core.first(seq__24548__$1);
clear_event(event);


var G__24658 = cljs.core.next(seq__24548__$1);
var G__24659 = null;
var G__24660 = (0);
var G__24661 = (0);
seq__24548 = G__24658;
chunk__24549 = G__24659;
count__24550 = G__24660;
i__24551 = G__24661;
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
var _STAR_current_trace_STAR__orig_val__24559 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24560 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24560);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23896__auto___24662 = re_frame.interop.now();
var duration__23897__auto___24663 = (end__23896__auto___24662 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23897__auto___24663,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23896__auto___24662);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24559);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
