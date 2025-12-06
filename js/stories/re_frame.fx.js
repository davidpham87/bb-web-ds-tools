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
var _STAR_current_trace_STAR__orig_val__24442 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24443 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24443);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24576 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24576)){
var new_db_24577 = temp__5825__auto___24576;
var fexpr__24452_24578 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24452_24578.cljs$core$IFn$_invoke$arity$1 ? fexpr__24452_24578.cljs$core$IFn$_invoke$arity$1(new_db_24577) : fexpr__24452_24578.call(null,new_db_24577));
} else {
}

var seq__24453 = cljs.core.seq(effects_without_db);
var chunk__24454 = null;
var count__24455 = (0);
var i__24456 = (0);
while(true){
if((i__24456 < count__24455)){
var vec__24467 = chunk__24454.cljs$core$IIndexed$_nth$arity$2(null,i__24456);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(1),null);
var temp__5823__auto___24579 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24579)){
var effect_fn_24580 = temp__5823__auto___24579;
(effect_fn_24580.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24580.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24580.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24581 = seq__24453;
var G__24582 = chunk__24454;
var G__24583 = count__24455;
var G__24584 = (i__24456 + (1));
seq__24453 = G__24581;
chunk__24454 = G__24582;
count__24455 = G__24583;
i__24456 = G__24584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24453);
if(temp__5825__auto__){
var seq__24453__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24453__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24453__$1);
var G__24588 = cljs.core.chunk_rest(seq__24453__$1);
var G__24589 = c__5548__auto__;
var G__24590 = cljs.core.count(c__5548__auto__);
var G__24591 = (0);
seq__24453 = G__24588;
chunk__24454 = G__24589;
count__24455 = G__24590;
i__24456 = G__24591;
continue;
} else {
var vec__24470 = cljs.core.first(seq__24453__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24470,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24470,(1),null);
var temp__5823__auto___24592 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24592)){
var effect_fn_24593 = temp__5823__auto___24592;
(effect_fn_24593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24594 = cljs.core.next(seq__24453__$1);
var G__24595 = null;
var G__24596 = (0);
var G__24597 = (0);
seq__24453 = G__24594;
chunk__24454 = G__24595;
count__24455 = G__24596;
i__24456 = G__24597;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23795__auto___24598 = re_frame.interop.now();
var duration__23796__auto___24599 = (end__23795__auto___24598 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23796__auto___24599,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23795__auto___24598);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24442);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24600 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24600)){
var new_db_24601 = temp__5825__auto___24600;
var fexpr__24473_24602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24473_24602.cljs$core$IFn$_invoke$arity$1 ? fexpr__24473_24602.cljs$core$IFn$_invoke$arity$1(new_db_24601) : fexpr__24473_24602.call(null,new_db_24601));
} else {
}

var seq__24474 = cljs.core.seq(effects_without_db);
var chunk__24476 = null;
var count__24477 = (0);
var i__24478 = (0);
while(true){
if((i__24478 < count__24477)){
var vec__24495 = chunk__24476.cljs$core$IIndexed$_nth$arity$2(null,i__24478);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(1),null);
var temp__5823__auto___24603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24603)){
var effect_fn_24604 = temp__5823__auto___24603;
(effect_fn_24604.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24604.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24604.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24605 = seq__24474;
var G__24606 = chunk__24476;
var G__24607 = count__24477;
var G__24608 = (i__24478 + (1));
seq__24474 = G__24605;
chunk__24476 = G__24606;
count__24477 = G__24607;
i__24478 = G__24608;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24474);
if(temp__5825__auto__){
var seq__24474__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24474__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24474__$1);
var G__24609 = cljs.core.chunk_rest(seq__24474__$1);
var G__24610 = c__5548__auto__;
var G__24611 = cljs.core.count(c__5548__auto__);
var G__24612 = (0);
seq__24474 = G__24609;
chunk__24476 = G__24610;
count__24477 = G__24611;
i__24478 = G__24612;
continue;
} else {
var vec__24501 = cljs.core.first(seq__24474__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(1),null);
var temp__5823__auto___24613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24613)){
var effect_fn_24614 = temp__5823__auto___24613;
(effect_fn_24614.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24614.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24614.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24615 = cljs.core.next(seq__24474__$1);
var G__24616 = null;
var G__24617 = (0);
var G__24618 = (0);
seq__24474 = G__24615;
chunk__24476 = G__24616;
count__24477 = G__24617;
i__24478 = G__24618;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24510){
var map__24511 = p__24510;
var map__24511__$1 = cljs.core.__destructure_map(map__24511);
var effect = map__24511__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24511__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24511__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24528 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24529 = null;
var count__24530 = (0);
var i__24531 = (0);
while(true){
if((i__24531 < count__24530)){
var effect = chunk__24529.cljs$core$IIndexed$_nth$arity$2(null,i__24531);
re_frame.fx.dispatch_later(effect);


var G__24619 = seq__24528;
var G__24620 = chunk__24529;
var G__24621 = count__24530;
var G__24622 = (i__24531 + (1));
seq__24528 = G__24619;
chunk__24529 = G__24620;
count__24530 = G__24621;
i__24531 = G__24622;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24528);
if(temp__5825__auto__){
var seq__24528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24528__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24528__$1);
var G__24623 = cljs.core.chunk_rest(seq__24528__$1);
var G__24624 = c__5548__auto__;
var G__24625 = cljs.core.count(c__5548__auto__);
var G__24626 = (0);
seq__24528 = G__24623;
chunk__24529 = G__24624;
count__24530 = G__24625;
i__24531 = G__24626;
continue;
} else {
var effect = cljs.core.first(seq__24528__$1);
re_frame.fx.dispatch_later(effect);


var G__24627 = cljs.core.next(seq__24528__$1);
var G__24628 = null;
var G__24629 = (0);
var G__24630 = (0);
seq__24528 = G__24627;
chunk__24529 = G__24628;
count__24530 = G__24629;
i__24531 = G__24630;
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

var temp__5823__auto___24631 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24631)){
var effect_fn_24632 = temp__5823__auto___24631;
(effect_fn_24632.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24632.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24632.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24633 = seq__24536;
var G__24634 = chunk__24537;
var G__24635 = count__24538;
var G__24636 = (i__24539 + (1));
seq__24536 = G__24633;
chunk__24537 = G__24634;
count__24538 = G__24635;
i__24539 = G__24636;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24536);
if(temp__5825__auto__){
var seq__24536__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24536__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24536__$1);
var G__24637 = cljs.core.chunk_rest(seq__24536__$1);
var G__24638 = c__5548__auto__;
var G__24639 = cljs.core.count(c__5548__auto__);
var G__24640 = (0);
seq__24536 = G__24637;
chunk__24537 = G__24638;
count__24538 = G__24639;
i__24539 = G__24640;
continue;
} else {
var vec__24553 = cljs.core.first(seq__24536__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24553,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24641 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24641)){
var effect_fn_24642 = temp__5823__auto___24641;
(effect_fn_24642.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24642.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24642.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24643 = cljs.core.next(seq__24536__$1);
var G__24644 = null;
var G__24645 = (0);
var G__24646 = (0);
seq__24536 = G__24643;
chunk__24537 = G__24644;
count__24538 = G__24645;
i__24539 = G__24646;
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


var G__24649 = seq__24556;
var G__24650 = chunk__24557;
var G__24651 = count__24558;
var G__24652 = (i__24559 + (1));
seq__24556 = G__24649;
chunk__24557 = G__24650;
count__24558 = G__24651;
i__24559 = G__24652;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24556);
if(temp__5825__auto__){
var seq__24556__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24556__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24556__$1);
var G__24653 = cljs.core.chunk_rest(seq__24556__$1);
var G__24654 = c__5548__auto__;
var G__24655 = cljs.core.count(c__5548__auto__);
var G__24656 = (0);
seq__24556 = G__24653;
chunk__24557 = G__24654;
count__24558 = G__24655;
i__24559 = G__24656;
continue;
} else {
var event = cljs.core.first(seq__24556__$1);
re_frame.router.dispatch(event);


var G__24657 = cljs.core.next(seq__24556__$1);
var G__24658 = null;
var G__24659 = (0);
var G__24660 = (0);
seq__24556 = G__24657;
chunk__24557 = G__24658;
count__24558 = G__24659;
i__24559 = G__24660;
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
var seq__24567 = cljs.core.seq(value);
var chunk__24568 = null;
var count__24569 = (0);
var i__24570 = (0);
while(true){
if((i__24570 < count__24569)){
var event = chunk__24568.cljs$core$IIndexed$_nth$arity$2(null,i__24570);
clear_event(event);


var G__24661 = seq__24567;
var G__24662 = chunk__24568;
var G__24663 = count__24569;
var G__24664 = (i__24570 + (1));
seq__24567 = G__24661;
chunk__24568 = G__24662;
count__24569 = G__24663;
i__24570 = G__24664;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24567);
if(temp__5825__auto__){
var seq__24567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24567__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24567__$1);
var G__24666 = cljs.core.chunk_rest(seq__24567__$1);
var G__24667 = c__5548__auto__;
var G__24668 = cljs.core.count(c__5548__auto__);
var G__24669 = (0);
seq__24567 = G__24666;
chunk__24568 = G__24667;
count__24569 = G__24668;
i__24570 = G__24669;
continue;
} else {
var event = cljs.core.first(seq__24567__$1);
clear_event(event);


var G__24670 = cljs.core.next(seq__24567__$1);
var G__24671 = null;
var G__24672 = (0);
var G__24673 = (0);
seq__24567 = G__24670;
chunk__24568 = G__24671;
count__24569 = G__24672;
i__24570 = G__24673;
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
var _STAR_current_trace_STAR__orig_val__24571 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24572 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24572);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23795__auto___24675 = re_frame.interop.now();
var duration__23796__auto___24676 = (end__23795__auto___24675 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23796__auto___24676,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23795__auto___24675);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24571);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
