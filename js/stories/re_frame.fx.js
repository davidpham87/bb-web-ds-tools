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
var _STAR_current_trace_STAR__orig_val__24460 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24461 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24461);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24573 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24573)){
var new_db_24574 = temp__5825__auto___24573;
var fexpr__24462_24575 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24462_24575.cljs$core$IFn$_invoke$arity$1 ? fexpr__24462_24575.cljs$core$IFn$_invoke$arity$1(new_db_24574) : fexpr__24462_24575.call(null,new_db_24574));
} else {
}

var seq__24463 = cljs.core.seq(effects_without_db);
var chunk__24464 = null;
var count__24465 = (0);
var i__24466 = (0);
while(true){
if((i__24466 < count__24465)){
var vec__24480 = chunk__24464.cljs$core$IIndexed$_nth$arity$2(null,i__24466);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(1),null);
var temp__5823__auto___24576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24576)){
var effect_fn_24577 = temp__5823__auto___24576;
(effect_fn_24577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24578 = seq__24463;
var G__24579 = chunk__24464;
var G__24580 = count__24465;
var G__24581 = (i__24466 + (1));
seq__24463 = G__24578;
chunk__24464 = G__24579;
count__24465 = G__24580;
i__24466 = G__24581;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24463);
if(temp__5825__auto__){
var seq__24463__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24463__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24463__$1);
var G__24582 = cljs.core.chunk_rest(seq__24463__$1);
var G__24583 = c__5548__auto__;
var G__24584 = cljs.core.count(c__5548__auto__);
var G__24585 = (0);
seq__24463 = G__24582;
chunk__24464 = G__24583;
count__24465 = G__24584;
i__24466 = G__24585;
continue;
} else {
var vec__24483 = cljs.core.first(seq__24463__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24483,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24483,(1),null);
var temp__5823__auto___24586 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24586)){
var effect_fn_24587 = temp__5823__auto___24586;
(effect_fn_24587.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24587.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24587.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24588 = cljs.core.next(seq__24463__$1);
var G__24589 = null;
var G__24590 = (0);
var G__24591 = (0);
seq__24463 = G__24588;
chunk__24464 = G__24589;
count__24465 = G__24590;
i__24466 = G__24591;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23750__auto___24592 = re_frame.interop.now();
var duration__23751__auto___24593 = (end__23750__auto___24592 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23751__auto___24593,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23750__auto___24592);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24460);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24594 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24594)){
var new_db_24595 = temp__5825__auto___24594;
var fexpr__24486_24596 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24486_24596.cljs$core$IFn$_invoke$arity$1 ? fexpr__24486_24596.cljs$core$IFn$_invoke$arity$1(new_db_24595) : fexpr__24486_24596.call(null,new_db_24595));
} else {
}

var seq__24490 = cljs.core.seq(effects_without_db);
var chunk__24491 = null;
var count__24492 = (0);
var i__24493 = (0);
while(true){
if((i__24493 < count__24492)){
var vec__24512 = chunk__24491.cljs$core$IIndexed$_nth$arity$2(null,i__24493);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24512,(1),null);
var temp__5823__auto___24597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24597)){
var effect_fn_24598 = temp__5823__auto___24597;
(effect_fn_24598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24599 = seq__24490;
var G__24600 = chunk__24491;
var G__24601 = count__24492;
var G__24602 = (i__24493 + (1));
seq__24490 = G__24599;
chunk__24491 = G__24600;
count__24492 = G__24601;
i__24493 = G__24602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24490);
if(temp__5825__auto__){
var seq__24490__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24490__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24490__$1);
var G__24603 = cljs.core.chunk_rest(seq__24490__$1);
var G__24604 = c__5548__auto__;
var G__24605 = cljs.core.count(c__5548__auto__);
var G__24606 = (0);
seq__24490 = G__24603;
chunk__24491 = G__24604;
count__24492 = G__24605;
i__24493 = G__24606;
continue;
} else {
var vec__24515 = cljs.core.first(seq__24490__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(1),null);
var temp__5823__auto___24607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24607)){
var effect_fn_24608 = temp__5823__auto___24607;
(effect_fn_24608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24608.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24608.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24609 = cljs.core.next(seq__24490__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24490 = G__24609;
chunk__24491 = G__24610;
count__24492 = G__24611;
i__24493 = G__24612;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24522){
var map__24523 = p__24522;
var map__24523__$1 = cljs.core.__destructure_map(map__24523);
var effect = map__24523__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24523__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24523__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24524 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24525 = null;
var count__24526 = (0);
var i__24527 = (0);
while(true){
if((i__24527 < count__24526)){
var effect = chunk__24525.cljs$core$IIndexed$_nth$arity$2(null,i__24527);
re_frame.fx.dispatch_later(effect);


var G__24613 = seq__24524;
var G__24614 = chunk__24525;
var G__24615 = count__24526;
var G__24616 = (i__24527 + (1));
seq__24524 = G__24613;
chunk__24525 = G__24614;
count__24526 = G__24615;
i__24527 = G__24616;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24524);
if(temp__5825__auto__){
var seq__24524__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24524__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24524__$1);
var G__24617 = cljs.core.chunk_rest(seq__24524__$1);
var G__24618 = c__5548__auto__;
var G__24619 = cljs.core.count(c__5548__auto__);
var G__24620 = (0);
seq__24524 = G__24617;
chunk__24525 = G__24618;
count__24526 = G__24619;
i__24527 = G__24620;
continue;
} else {
var effect = cljs.core.first(seq__24524__$1);
re_frame.fx.dispatch_later(effect);


var G__24621 = cljs.core.next(seq__24524__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24524 = G__24621;
chunk__24525 = G__24622;
count__24526 = G__24623;
i__24527 = G__24624;
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
var seq__24536 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24537 = null;
var count__24538 = (0);
var i__24539 = (0);
while(true){
if((i__24539 < count__24538)){
var vec__24547 = chunk__24537.cljs$core$IIndexed$_nth$arity$2(null,i__24539);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24547,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24547,(1),null);
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


var G__24627 = seq__24536;
var G__24628 = chunk__24537;
var G__24629 = count__24538;
var G__24630 = (i__24539 + (1));
seq__24536 = G__24627;
chunk__24537 = G__24628;
count__24538 = G__24629;
i__24539 = G__24630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24536);
if(temp__5825__auto__){
var seq__24536__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24536__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24536__$1);
var G__24631 = cljs.core.chunk_rest(seq__24536__$1);
var G__24632 = c__5548__auto__;
var G__24633 = cljs.core.count(c__5548__auto__);
var G__24634 = (0);
seq__24536 = G__24631;
chunk__24537 = G__24632;
count__24538 = G__24633;
i__24539 = G__24634;
continue;
} else {
var vec__24550 = cljs.core.first(seq__24536__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550,(1),null);
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


var G__24640 = cljs.core.next(seq__24536__$1);
var G__24641 = null;
var G__24642 = (0);
var G__24643 = (0);
seq__24536 = G__24640;
chunk__24537 = G__24641;
count__24538 = G__24642;
i__24539 = G__24643;
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
var seq__24556 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24557 = null;
var count__24558 = (0);
var i__24559 = (0);
while(true){
if((i__24559 < count__24558)){
var event = chunk__24557.cljs$core$IIndexed$_nth$arity$2(null,i__24559);
re_frame.router.dispatch(event);


var G__24644 = seq__24556;
var G__24645 = chunk__24557;
var G__24646 = count__24558;
var G__24647 = (i__24559 + (1));
seq__24556 = G__24644;
chunk__24557 = G__24645;
count__24558 = G__24646;
i__24559 = G__24647;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24556);
if(temp__5825__auto__){
var seq__24556__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24556__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24556__$1);
var G__24648 = cljs.core.chunk_rest(seq__24556__$1);
var G__24649 = c__5548__auto__;
var G__24650 = cljs.core.count(c__5548__auto__);
var G__24651 = (0);
seq__24556 = G__24648;
chunk__24557 = G__24649;
count__24558 = G__24650;
i__24559 = G__24651;
continue;
} else {
var event = cljs.core.first(seq__24556__$1);
re_frame.router.dispatch(event);


var G__24652 = cljs.core.next(seq__24556__$1);
var G__24653 = null;
var G__24654 = (0);
var G__24655 = (0);
seq__24556 = G__24652;
chunk__24557 = G__24653;
count__24558 = G__24654;
i__24559 = G__24655;
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
var seq__24564 = cljs.core.seq(value);
var chunk__24565 = null;
var count__24566 = (0);
var i__24567 = (0);
while(true){
if((i__24567 < count__24566)){
var event = chunk__24565.cljs$core$IIndexed$_nth$arity$2(null,i__24567);
clear_event(event);


var G__24656 = seq__24564;
var G__24657 = chunk__24565;
var G__24658 = count__24566;
var G__24659 = (i__24567 + (1));
seq__24564 = G__24656;
chunk__24565 = G__24657;
count__24566 = G__24658;
i__24567 = G__24659;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24564);
if(temp__5825__auto__){
var seq__24564__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24564__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24564__$1);
var G__24663 = cljs.core.chunk_rest(seq__24564__$1);
var G__24664 = c__5548__auto__;
var G__24665 = cljs.core.count(c__5548__auto__);
var G__24666 = (0);
seq__24564 = G__24663;
chunk__24565 = G__24664;
count__24566 = G__24665;
i__24567 = G__24666;
continue;
} else {
var event = cljs.core.first(seq__24564__$1);
clear_event(event);


var G__24667 = cljs.core.next(seq__24564__$1);
var G__24668 = null;
var G__24669 = (0);
var G__24670 = (0);
seq__24564 = G__24667;
chunk__24565 = G__24668;
count__24566 = G__24669;
i__24567 = G__24670;
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
var _STAR_current_trace_STAR__orig_val__24570 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24571 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24571);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23750__auto___24671 = re_frame.interop.now();
var duration__23751__auto___24672 = (end__23750__auto___24671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23751__auto___24672,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23750__auto___24671);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24570);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
