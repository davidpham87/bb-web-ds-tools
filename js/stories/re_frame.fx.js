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
var _STAR_current_trace_STAR__orig_val__24427 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24428 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24428);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24586 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24586)){
var new_db_24587 = temp__5825__auto___24586;
var fexpr__24431_24588 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24431_24588.cljs$core$IFn$_invoke$arity$1 ? fexpr__24431_24588.cljs$core$IFn$_invoke$arity$1(new_db_24587) : fexpr__24431_24588.call(null,new_db_24587));
} else {
}

var seq__24433 = cljs.core.seq(effects_without_db);
var chunk__24434 = null;
var count__24435 = (0);
var i__24436 = (0);
while(true){
if((i__24436 < count__24435)){
var vec__24455 = chunk__24434.cljs$core$IIndexed$_nth$arity$2(null,i__24436);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(1),null);
var temp__5823__auto___24590 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24590)){
var effect_fn_24591 = temp__5823__auto___24590;
(effect_fn_24591.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24591.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24591.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24592 = seq__24433;
var G__24593 = chunk__24434;
var G__24594 = count__24435;
var G__24595 = (i__24436 + (1));
seq__24433 = G__24592;
chunk__24434 = G__24593;
count__24435 = G__24594;
i__24436 = G__24595;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24433);
if(temp__5825__auto__){
var seq__24433__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24433__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24433__$1);
var G__24596 = cljs.core.chunk_rest(seq__24433__$1);
var G__24597 = c__5548__auto__;
var G__24598 = cljs.core.count(c__5548__auto__);
var G__24599 = (0);
seq__24433 = G__24596;
chunk__24434 = G__24597;
count__24435 = G__24598;
i__24436 = G__24599;
continue;
} else {
var vec__24462 = cljs.core.first(seq__24433__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(1),null);
var temp__5823__auto___24602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24602)){
var effect_fn_24603 = temp__5823__auto___24602;
(effect_fn_24603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24604 = cljs.core.next(seq__24433__$1);
var G__24605 = null;
var G__24606 = (0);
var G__24607 = (0);
seq__24433 = G__24604;
chunk__24434 = G__24605;
count__24435 = G__24606;
i__24436 = G__24607;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23790__auto___24608 = re_frame.interop.now();
var duration__23791__auto___24609 = (end__23790__auto___24608 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23791__auto___24609,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23790__auto___24608);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24427);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24610 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24610)){
var new_db_24611 = temp__5825__auto___24610;
var fexpr__24466_24612 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24466_24612.cljs$core$IFn$_invoke$arity$1 ? fexpr__24466_24612.cljs$core$IFn$_invoke$arity$1(new_db_24611) : fexpr__24466_24612.call(null,new_db_24611));
} else {
}

var seq__24467 = cljs.core.seq(effects_without_db);
var chunk__24468 = null;
var count__24469 = (0);
var i__24470 = (0);
while(true){
if((i__24470 < count__24469)){
var vec__24494 = chunk__24468.cljs$core$IIndexed$_nth$arity$2(null,i__24470);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24494,(1),null);
var temp__5823__auto___24614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24614)){
var effect_fn_24615 = temp__5823__auto___24614;
(effect_fn_24615.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24615.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24615.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24616 = seq__24467;
var G__24617 = chunk__24468;
var G__24618 = count__24469;
var G__24619 = (i__24470 + (1));
seq__24467 = G__24616;
chunk__24468 = G__24617;
count__24469 = G__24618;
i__24470 = G__24619;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24467);
if(temp__5825__auto__){
var seq__24467__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24467__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24467__$1);
var G__24620 = cljs.core.chunk_rest(seq__24467__$1);
var G__24621 = c__5548__auto__;
var G__24622 = cljs.core.count(c__5548__auto__);
var G__24623 = (0);
seq__24467 = G__24620;
chunk__24468 = G__24621;
count__24469 = G__24622;
i__24470 = G__24623;
continue;
} else {
var vec__24499 = cljs.core.first(seq__24467__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(1),null);
var temp__5823__auto___24624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24624)){
var effect_fn_24625 = temp__5823__auto___24624;
(effect_fn_24625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24626 = cljs.core.next(seq__24467__$1);
var G__24627 = null;
var G__24628 = (0);
var G__24629 = (0);
seq__24467 = G__24626;
chunk__24468 = G__24627;
count__24469 = G__24628;
i__24470 = G__24629;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24506){
var map__24508 = p__24506;
var map__24508__$1 = cljs.core.__destructure_map(map__24508);
var effect = map__24508__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24509 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24510 = null;
var count__24511 = (0);
var i__24512 = (0);
while(true){
if((i__24512 < count__24511)){
var effect = chunk__24510.cljs$core$IIndexed$_nth$arity$2(null,i__24512);
re_frame.fx.dispatch_later(effect);


var G__24630 = seq__24509;
var G__24631 = chunk__24510;
var G__24632 = count__24511;
var G__24633 = (i__24512 + (1));
seq__24509 = G__24630;
chunk__24510 = G__24631;
count__24511 = G__24632;
i__24512 = G__24633;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24509);
if(temp__5825__auto__){
var seq__24509__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24509__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24509__$1);
var G__24634 = cljs.core.chunk_rest(seq__24509__$1);
var G__24635 = c__5548__auto__;
var G__24636 = cljs.core.count(c__5548__auto__);
var G__24637 = (0);
seq__24509 = G__24634;
chunk__24510 = G__24635;
count__24511 = G__24636;
i__24512 = G__24637;
continue;
} else {
var effect = cljs.core.first(seq__24509__$1);
re_frame.fx.dispatch_later(effect);


var G__24638 = cljs.core.next(seq__24509__$1);
var G__24639 = null;
var G__24640 = (0);
var G__24641 = (0);
seq__24509 = G__24638;
chunk__24510 = G__24639;
count__24511 = G__24640;
i__24512 = G__24641;
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
var seq__24518 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24519 = null;
var count__24520 = (0);
var i__24521 = (0);
while(true){
if((i__24521 < count__24520)){
var vec__24529 = chunk__24519.cljs$core$IIndexed$_nth$arity$2(null,i__24521);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24642 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24642)){
var effect_fn_24643 = temp__5823__auto___24642;
(effect_fn_24643.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24643.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24643.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24649 = seq__24518;
var G__24650 = chunk__24519;
var G__24651 = count__24520;
var G__24652 = (i__24521 + (1));
seq__24518 = G__24649;
chunk__24519 = G__24650;
count__24520 = G__24651;
i__24521 = G__24652;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24518);
if(temp__5825__auto__){
var seq__24518__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24518__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24518__$1);
var G__24653 = cljs.core.chunk_rest(seq__24518__$1);
var G__24654 = c__5548__auto__;
var G__24655 = cljs.core.count(c__5548__auto__);
var G__24656 = (0);
seq__24518 = G__24653;
chunk__24519 = G__24654;
count__24520 = G__24655;
i__24521 = G__24656;
continue;
} else {
var vec__24535 = cljs.core.first(seq__24518__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24657)){
var effect_fn_24658 = temp__5823__auto___24657;
(effect_fn_24658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24659 = cljs.core.next(seq__24518__$1);
var G__24660 = null;
var G__24661 = (0);
var G__24662 = (0);
seq__24518 = G__24659;
chunk__24519 = G__24660;
count__24520 = G__24661;
i__24521 = G__24662;
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


var G__24664 = seq__24544;
var G__24665 = chunk__24545;
var G__24666 = count__24546;
var G__24667 = (i__24547 + (1));
seq__24544 = G__24664;
chunk__24545 = G__24665;
count__24546 = G__24666;
i__24547 = G__24667;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24544);
if(temp__5825__auto__){
var seq__24544__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24544__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24544__$1);
var G__24668 = cljs.core.chunk_rest(seq__24544__$1);
var G__24669 = c__5548__auto__;
var G__24670 = cljs.core.count(c__5548__auto__);
var G__24671 = (0);
seq__24544 = G__24668;
chunk__24545 = G__24669;
count__24546 = G__24670;
i__24547 = G__24671;
continue;
} else {
var event = cljs.core.first(seq__24544__$1);
re_frame.router.dispatch(event);


var G__24672 = cljs.core.next(seq__24544__$1);
var G__24673 = null;
var G__24674 = (0);
var G__24675 = (0);
seq__24544 = G__24672;
chunk__24545 = G__24673;
count__24546 = G__24674;
i__24547 = G__24675;
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
var seq__24562 = cljs.core.seq(value);
var chunk__24563 = null;
var count__24564 = (0);
var i__24565 = (0);
while(true){
if((i__24565 < count__24564)){
var event = chunk__24563.cljs$core$IIndexed$_nth$arity$2(null,i__24565);
clear_event(event);


var G__24676 = seq__24562;
var G__24677 = chunk__24563;
var G__24678 = count__24564;
var G__24679 = (i__24565 + (1));
seq__24562 = G__24676;
chunk__24563 = G__24677;
count__24564 = G__24678;
i__24565 = G__24679;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24562);
if(temp__5825__auto__){
var seq__24562__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24562__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24562__$1);
var G__24684 = cljs.core.chunk_rest(seq__24562__$1);
var G__24685 = c__5548__auto__;
var G__24686 = cljs.core.count(c__5548__auto__);
var G__24687 = (0);
seq__24562 = G__24684;
chunk__24563 = G__24685;
count__24564 = G__24686;
i__24565 = G__24687;
continue;
} else {
var event = cljs.core.first(seq__24562__$1);
clear_event(event);


var G__24688 = cljs.core.next(seq__24562__$1);
var G__24689 = null;
var G__24690 = (0);
var G__24691 = (0);
seq__24562 = G__24688;
chunk__24563 = G__24689;
count__24564 = G__24690;
i__24565 = G__24691;
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
var _STAR_current_trace_STAR__orig_val__24577 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24578 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24578);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23790__auto___24692 = re_frame.interop.now();
var duration__23791__auto___24693 = (end__23790__auto___24692 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23791__auto___24693,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23790__auto___24692);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24577);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
