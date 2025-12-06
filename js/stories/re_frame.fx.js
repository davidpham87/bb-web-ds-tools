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
var _STAR_current_trace_STAR__orig_val__24437 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24438 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24438);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24560 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24560)){
var new_db_24561 = temp__5825__auto___24560;
var fexpr__24452_24562 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24452_24562.cljs$core$IFn$_invoke$arity$1 ? fexpr__24452_24562.cljs$core$IFn$_invoke$arity$1(new_db_24561) : fexpr__24452_24562.call(null,new_db_24561));
} else {
}

var seq__24455 = cljs.core.seq(effects_without_db);
var chunk__24456 = null;
var count__24457 = (0);
var i__24458 = (0);
while(true){
if((i__24458 < count__24457)){
var vec__24467 = chunk__24456.cljs$core$IIndexed$_nth$arity$2(null,i__24458);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(1),null);
var temp__5823__auto___24563 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24563)){
var effect_fn_24564 = temp__5823__auto___24563;
(effect_fn_24564.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24564.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24564.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24565 = seq__24455;
var G__24566 = chunk__24456;
var G__24567 = count__24457;
var G__24568 = (i__24458 + (1));
seq__24455 = G__24565;
chunk__24456 = G__24566;
count__24457 = G__24567;
i__24458 = G__24568;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24455);
if(temp__5825__auto__){
var seq__24455__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24455__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24455__$1);
var G__24569 = cljs.core.chunk_rest(seq__24455__$1);
var G__24570 = c__5548__auto__;
var G__24571 = cljs.core.count(c__5548__auto__);
var G__24572 = (0);
seq__24455 = G__24569;
chunk__24456 = G__24570;
count__24457 = G__24571;
i__24458 = G__24572;
continue;
} else {
var vec__24470 = cljs.core.first(seq__24455__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24470,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24470,(1),null);
var temp__5823__auto___24573 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24573)){
var effect_fn_24574 = temp__5823__auto___24573;
(effect_fn_24574.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24574.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24574.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24575 = cljs.core.next(seq__24455__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__24455 = G__24575;
chunk__24456 = G__24576;
count__24457 = G__24577;
i__24458 = G__24578;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23778__auto___24579 = re_frame.interop.now();
var duration__23779__auto___24580 = (end__23778__auto___24579 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23779__auto___24580,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23778__auto___24579);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24437);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24581 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24581)){
var new_db_24582 = temp__5825__auto___24581;
var fexpr__24473_24583 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24473_24583.cljs$core$IFn$_invoke$arity$1 ? fexpr__24473_24583.cljs$core$IFn$_invoke$arity$1(new_db_24582) : fexpr__24473_24583.call(null,new_db_24582));
} else {
}

var seq__24474 = cljs.core.seq(effects_without_db);
var chunk__24475 = null;
var count__24476 = (0);
var i__24477 = (0);
while(true){
if((i__24477 < count__24476)){
var vec__24492 = chunk__24475.cljs$core$IIndexed$_nth$arity$2(null,i__24477);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24492,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24492,(1),null);
var temp__5823__auto___24584 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24584)){
var effect_fn_24585 = temp__5823__auto___24584;
(effect_fn_24585.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24585.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24585.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24586 = seq__24474;
var G__24587 = chunk__24475;
var G__24588 = count__24476;
var G__24589 = (i__24477 + (1));
seq__24474 = G__24586;
chunk__24475 = G__24587;
count__24476 = G__24588;
i__24477 = G__24589;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24474);
if(temp__5825__auto__){
var seq__24474__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24474__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24474__$1);
var G__24590 = cljs.core.chunk_rest(seq__24474__$1);
var G__24591 = c__5548__auto__;
var G__24592 = cljs.core.count(c__5548__auto__);
var G__24593 = (0);
seq__24474 = G__24590;
chunk__24475 = G__24591;
count__24476 = G__24592;
i__24477 = G__24593;
continue;
} else {
var vec__24496 = cljs.core.first(seq__24474__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(1),null);
var temp__5823__auto___24599 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24599)){
var effect_fn_24600 = temp__5823__auto___24599;
(effect_fn_24600.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24600.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24600.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24610 = cljs.core.next(seq__24474__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24474 = G__24610;
chunk__24475 = G__24611;
count__24476 = G__24612;
i__24477 = G__24613;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24499){
var map__24500 = p__24499;
var map__24500__$1 = cljs.core.__destructure_map(map__24500);
var effect = map__24500__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24500__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24500__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24501 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24502 = null;
var count__24503 = (0);
var i__24504 = (0);
while(true){
if((i__24504 < count__24503)){
var effect = chunk__24502.cljs$core$IIndexed$_nth$arity$2(null,i__24504);
re_frame.fx.dispatch_later(effect);


var G__24614 = seq__24501;
var G__24615 = chunk__24502;
var G__24616 = count__24503;
var G__24617 = (i__24504 + (1));
seq__24501 = G__24614;
chunk__24502 = G__24615;
count__24503 = G__24616;
i__24504 = G__24617;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24501);
if(temp__5825__auto__){
var seq__24501__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24501__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24501__$1);
var G__24618 = cljs.core.chunk_rest(seq__24501__$1);
var G__24619 = c__5548__auto__;
var G__24620 = cljs.core.count(c__5548__auto__);
var G__24621 = (0);
seq__24501 = G__24618;
chunk__24502 = G__24619;
count__24503 = G__24620;
i__24504 = G__24621;
continue;
} else {
var effect = cljs.core.first(seq__24501__$1);
re_frame.fx.dispatch_later(effect);


var G__24622 = cljs.core.next(seq__24501__$1);
var G__24623 = null;
var G__24624 = (0);
var G__24625 = (0);
seq__24501 = G__24622;
chunk__24502 = G__24623;
count__24503 = G__24624;
i__24504 = G__24625;
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
var seq__24508 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24509 = null;
var count__24510 = (0);
var i__24511 = (0);
while(true){
if((i__24511 < count__24510)){
var vec__24523 = chunk__24509.cljs$core$IIndexed$_nth$arity$2(null,i__24511);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24626)){
var effect_fn_24627 = temp__5823__auto___24626;
(effect_fn_24627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24627.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24628 = seq__24508;
var G__24629 = chunk__24509;
var G__24630 = count__24510;
var G__24631 = (i__24511 + (1));
seq__24508 = G__24628;
chunk__24509 = G__24629;
count__24510 = G__24630;
i__24511 = G__24631;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24508);
if(temp__5825__auto__){
var seq__24508__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24508__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24508__$1);
var G__24632 = cljs.core.chunk_rest(seq__24508__$1);
var G__24633 = c__5548__auto__;
var G__24634 = cljs.core.count(c__5548__auto__);
var G__24635 = (0);
seq__24508 = G__24632;
chunk__24509 = G__24633;
count__24510 = G__24634;
i__24511 = G__24635;
continue;
} else {
var vec__24526 = cljs.core.first(seq__24508__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24636 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24636)){
var effect_fn_24637 = temp__5823__auto___24636;
(effect_fn_24637.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24637.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24637.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24638 = cljs.core.next(seq__24508__$1);
var G__24639 = null;
var G__24640 = (0);
var G__24641 = (0);
seq__24508 = G__24638;
chunk__24509 = G__24639;
count__24510 = G__24640;
i__24511 = G__24641;
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
var seq__24534 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24535 = null;
var count__24536 = (0);
var i__24537 = (0);
while(true){
if((i__24537 < count__24536)){
var event = chunk__24535.cljs$core$IIndexed$_nth$arity$2(null,i__24537);
re_frame.router.dispatch(event);


var G__24642 = seq__24534;
var G__24643 = chunk__24535;
var G__24644 = count__24536;
var G__24645 = (i__24537 + (1));
seq__24534 = G__24642;
chunk__24535 = G__24643;
count__24536 = G__24644;
i__24537 = G__24645;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24534);
if(temp__5825__auto__){
var seq__24534__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24534__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24534__$1);
var G__24646 = cljs.core.chunk_rest(seq__24534__$1);
var G__24647 = c__5548__auto__;
var G__24648 = cljs.core.count(c__5548__auto__);
var G__24649 = (0);
seq__24534 = G__24646;
chunk__24535 = G__24647;
count__24536 = G__24648;
i__24537 = G__24649;
continue;
} else {
var event = cljs.core.first(seq__24534__$1);
re_frame.router.dispatch(event);


var G__24650 = cljs.core.next(seq__24534__$1);
var G__24651 = null;
var G__24652 = (0);
var G__24653 = (0);
seq__24534 = G__24650;
chunk__24535 = G__24651;
count__24536 = G__24652;
i__24537 = G__24653;
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
var seq__24540 = cljs.core.seq(value);
var chunk__24541 = null;
var count__24542 = (0);
var i__24543 = (0);
while(true){
if((i__24543 < count__24542)){
var event = chunk__24541.cljs$core$IIndexed$_nth$arity$2(null,i__24543);
clear_event(event);


var G__24654 = seq__24540;
var G__24655 = chunk__24541;
var G__24656 = count__24542;
var G__24657 = (i__24543 + (1));
seq__24540 = G__24654;
chunk__24541 = G__24655;
count__24542 = G__24656;
i__24543 = G__24657;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24540);
if(temp__5825__auto__){
var seq__24540__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24540__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24540__$1);
var G__24658 = cljs.core.chunk_rest(seq__24540__$1);
var G__24659 = c__5548__auto__;
var G__24660 = cljs.core.count(c__5548__auto__);
var G__24661 = (0);
seq__24540 = G__24658;
chunk__24541 = G__24659;
count__24542 = G__24660;
i__24543 = G__24661;
continue;
} else {
var event = cljs.core.first(seq__24540__$1);
clear_event(event);


var G__24663 = cljs.core.next(seq__24540__$1);
var G__24664 = null;
var G__24666 = (0);
var G__24667 = (0);
seq__24540 = G__24663;
chunk__24541 = G__24664;
count__24542 = G__24666;
i__24543 = G__24667;
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
var _STAR_current_trace_STAR__orig_val__24553 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24554 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24554);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23778__auto___24668 = re_frame.interop.now();
var duration__23779__auto___24669 = (end__23778__auto___24668 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23779__auto___24669,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23778__auto___24668);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24553);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
