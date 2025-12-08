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
var _STAR_current_trace_STAR__orig_val__24473 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24474 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24474);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24573 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24573)){
var new_db_24574 = temp__5825__auto___24573;
var fexpr__24475_24575 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24475_24575.cljs$core$IFn$_invoke$arity$1 ? fexpr__24475_24575.cljs$core$IFn$_invoke$arity$1(new_db_24574) : fexpr__24475_24575.call(null,new_db_24574));
} else {
}

var seq__24476 = cljs.core.seq(effects_without_db);
var chunk__24477 = null;
var count__24478 = (0);
var i__24479 = (0);
while(true){
if((i__24479 < count__24478)){
var vec__24491 = chunk__24477.cljs$core$IIndexed$_nth$arity$2(null,i__24479);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(1),null);
var temp__5823__auto___24576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24576)){
var effect_fn_24577 = temp__5823__auto___24576;
(effect_fn_24577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24578 = seq__24476;
var G__24579 = chunk__24477;
var G__24580 = count__24478;
var G__24581 = (i__24479 + (1));
seq__24476 = G__24578;
chunk__24477 = G__24579;
count__24478 = G__24580;
i__24479 = G__24581;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24476);
if(temp__5825__auto__){
var seq__24476__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24476__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24476__$1);
var G__24582 = cljs.core.chunk_rest(seq__24476__$1);
var G__24583 = c__5548__auto__;
var G__24584 = cljs.core.count(c__5548__auto__);
var G__24585 = (0);
seq__24476 = G__24582;
chunk__24477 = G__24583;
count__24478 = G__24584;
i__24479 = G__24585;
continue;
} else {
var vec__24495 = cljs.core.first(seq__24476__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(1),null);
var temp__5823__auto___24586 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24586)){
var effect_fn_24587 = temp__5823__auto___24586;
(effect_fn_24587.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24587.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24587.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24588 = cljs.core.next(seq__24476__$1);
var G__24589 = null;
var G__24590 = (0);
var G__24591 = (0);
seq__24476 = G__24588;
chunk__24477 = G__24589;
count__24478 = G__24590;
i__24479 = G__24591;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23934__auto___24592 = re_frame.interop.now();
var duration__23935__auto___24593 = (end__23934__auto___24592 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23935__auto___24593,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23934__auto___24592);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24473);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24594 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24594)){
var new_db_24595 = temp__5825__auto___24594;
var fexpr__24502_24596 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24502_24596.cljs$core$IFn$_invoke$arity$1 ? fexpr__24502_24596.cljs$core$IFn$_invoke$arity$1(new_db_24595) : fexpr__24502_24596.call(null,new_db_24595));
} else {
}

var seq__24507 = cljs.core.seq(effects_without_db);
var chunk__24508 = null;
var count__24509 = (0);
var i__24510 = (0);
while(true){
if((i__24510 < count__24509)){
var vec__24530 = chunk__24508.cljs$core$IIndexed$_nth$arity$2(null,i__24510);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24530,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24530,(1),null);
var temp__5823__auto___24597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24597)){
var effect_fn_24598 = temp__5823__auto___24597;
(effect_fn_24598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24599 = seq__24507;
var G__24600 = chunk__24508;
var G__24601 = count__24509;
var G__24602 = (i__24510 + (1));
seq__24507 = G__24599;
chunk__24508 = G__24600;
count__24509 = G__24601;
i__24510 = G__24602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24507);
if(temp__5825__auto__){
var seq__24507__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24507__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24507__$1);
var G__24603 = cljs.core.chunk_rest(seq__24507__$1);
var G__24604 = c__5548__auto__;
var G__24605 = cljs.core.count(c__5548__auto__);
var G__24606 = (0);
seq__24507 = G__24603;
chunk__24508 = G__24604;
count__24509 = G__24605;
i__24510 = G__24606;
continue;
} else {
var vec__24534 = cljs.core.first(seq__24507__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(1),null);
var temp__5823__auto___24607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24607)){
var effect_fn_24608 = temp__5823__auto___24607;
(effect_fn_24608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24608.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24608.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24609 = cljs.core.next(seq__24507__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24507 = G__24609;
chunk__24508 = G__24610;
count__24509 = G__24611;
i__24510 = G__24612;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24540){
var map__24541 = p__24540;
var map__24541__$1 = cljs.core.__destructure_map(map__24541);
var effect = map__24541__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24541__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24541__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24542 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24543 = null;
var count__24544 = (0);
var i__24545 = (0);
while(true){
if((i__24545 < count__24544)){
var effect = chunk__24543.cljs$core$IIndexed$_nth$arity$2(null,i__24545);
re_frame.fx.dispatch_later(effect);


var G__24613 = seq__24542;
var G__24614 = chunk__24543;
var G__24615 = count__24544;
var G__24616 = (i__24545 + (1));
seq__24542 = G__24613;
chunk__24543 = G__24614;
count__24544 = G__24615;
i__24545 = G__24616;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24542);
if(temp__5825__auto__){
var seq__24542__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24542__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24542__$1);
var G__24617 = cljs.core.chunk_rest(seq__24542__$1);
var G__24618 = c__5548__auto__;
var G__24619 = cljs.core.count(c__5548__auto__);
var G__24620 = (0);
seq__24542 = G__24617;
chunk__24543 = G__24618;
count__24544 = G__24619;
i__24545 = G__24620;
continue;
} else {
var effect = cljs.core.first(seq__24542__$1);
re_frame.fx.dispatch_later(effect);


var G__24621 = cljs.core.next(seq__24542__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24542 = G__24621;
chunk__24543 = G__24622;
count__24544 = G__24623;
i__24545 = G__24624;
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
var seq__24547 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24548 = null;
var count__24549 = (0);
var i__24550 = (0);
while(true){
if((i__24550 < count__24549)){
var vec__24557 = chunk__24548.cljs$core$IIndexed$_nth$arity$2(null,i__24550);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24557,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24557,(1),null);
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


var G__24629 = seq__24547;
var G__24631 = chunk__24548;
var G__24632 = count__24549;
var G__24633 = (i__24550 + (1));
seq__24547 = G__24629;
chunk__24548 = G__24631;
count__24549 = G__24632;
i__24550 = G__24633;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24547);
if(temp__5825__auto__){
var seq__24547__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24547__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24547__$1);
var G__24634 = cljs.core.chunk_rest(seq__24547__$1);
var G__24635 = c__5548__auto__;
var G__24636 = cljs.core.count(c__5548__auto__);
var G__24637 = (0);
seq__24547 = G__24634;
chunk__24548 = G__24635;
count__24549 = G__24636;
i__24550 = G__24637;
continue;
} else {
var vec__24560 = cljs.core.first(seq__24547__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24638 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24638)){
var effect_fn_24639 = temp__5823__auto___24638;
(effect_fn_24639.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24639.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24639.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24640 = cljs.core.next(seq__24547__$1);
var G__24641 = null;
var G__24642 = (0);
var G__24643 = (0);
seq__24547 = G__24640;
chunk__24548 = G__24641;
count__24549 = G__24642;
i__24550 = G__24643;
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
var seq__24563 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24564 = null;
var count__24565 = (0);
var i__24566 = (0);
while(true){
if((i__24566 < count__24565)){
var event = chunk__24564.cljs$core$IIndexed$_nth$arity$2(null,i__24566);
re_frame.router.dispatch(event);


var G__24644 = seq__24563;
var G__24645 = chunk__24564;
var G__24646 = count__24565;
var G__24647 = (i__24566 + (1));
seq__24563 = G__24644;
chunk__24564 = G__24645;
count__24565 = G__24646;
i__24566 = G__24647;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24563);
if(temp__5825__auto__){
var seq__24563__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24563__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24563__$1);
var G__24648 = cljs.core.chunk_rest(seq__24563__$1);
var G__24649 = c__5548__auto__;
var G__24650 = cljs.core.count(c__5548__auto__);
var G__24651 = (0);
seq__24563 = G__24648;
chunk__24564 = G__24649;
count__24565 = G__24650;
i__24566 = G__24651;
continue;
} else {
var event = cljs.core.first(seq__24563__$1);
re_frame.router.dispatch(event);


var G__24655 = cljs.core.next(seq__24563__$1);
var G__24656 = null;
var G__24657 = (0);
var G__24658 = (0);
seq__24563 = G__24655;
chunk__24564 = G__24656;
count__24565 = G__24657;
i__24566 = G__24658;
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


var G__24659 = seq__24567;
var G__24660 = chunk__24568;
var G__24661 = count__24569;
var G__24662 = (i__24570 + (1));
seq__24567 = G__24659;
chunk__24568 = G__24660;
count__24569 = G__24661;
i__24570 = G__24662;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24567);
if(temp__5825__auto__){
var seq__24567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24567__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24567__$1);
var G__24663 = cljs.core.chunk_rest(seq__24567__$1);
var G__24664 = c__5548__auto__;
var G__24665 = cljs.core.count(c__5548__auto__);
var G__24666 = (0);
seq__24567 = G__24663;
chunk__24568 = G__24664;
count__24569 = G__24665;
i__24570 = G__24666;
continue;
} else {
var event = cljs.core.first(seq__24567__$1);
clear_event(event);


var G__24667 = cljs.core.next(seq__24567__$1);
var G__24668 = null;
var G__24669 = (0);
var G__24670 = (0);
seq__24567 = G__24667;
chunk__24568 = G__24668;
count__24569 = G__24669;
i__24570 = G__24670;
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
var end__23934__auto___24671 = re_frame.interop.now();
var duration__23935__auto___24672 = (end__23934__auto___24671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23935__auto___24672,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23934__auto___24671);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24571);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
