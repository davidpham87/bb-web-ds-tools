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
var _STAR_current_trace_STAR__orig_val__24315 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24317 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24317);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24472 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24472)){
var new_db_24473 = temp__5825__auto___24472;
var fexpr__24322_24474 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24322_24474.cljs$core$IFn$_invoke$arity$1 ? fexpr__24322_24474.cljs$core$IFn$_invoke$arity$1(new_db_24473) : fexpr__24322_24474.call(null,new_db_24473));
} else {
}

var seq__24330 = cljs.core.seq(effects_without_db);
var chunk__24331 = null;
var count__24332 = (0);
var i__24333 = (0);
while(true){
if((i__24333 < count__24332)){
var vec__24357 = chunk__24331.cljs$core$IIndexed$_nth$arity$2(null,i__24333);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24357,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24357,(1),null);
var temp__5823__auto___24476 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24476)){
var effect_fn_24477 = temp__5823__auto___24476;
(effect_fn_24477.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24477.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24477.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24478 = seq__24330;
var G__24479 = chunk__24331;
var G__24480 = count__24332;
var G__24481 = (i__24333 + (1));
seq__24330 = G__24478;
chunk__24331 = G__24479;
count__24332 = G__24480;
i__24333 = G__24481;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24330);
if(temp__5825__auto__){
var seq__24330__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24330__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24330__$1);
var G__24482 = cljs.core.chunk_rest(seq__24330__$1);
var G__24483 = c__5548__auto__;
var G__24484 = cljs.core.count(c__5548__auto__);
var G__24485 = (0);
seq__24330 = G__24482;
chunk__24331 = G__24483;
count__24332 = G__24484;
i__24333 = G__24485;
continue;
} else {
var vec__24362 = cljs.core.first(seq__24330__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(1),null);
var temp__5823__auto___24486 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24486)){
var effect_fn_24487 = temp__5823__auto___24486;
(effect_fn_24487.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24487.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24487.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24488 = cljs.core.next(seq__24330__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24330 = G__24488;
chunk__24331 = G__24489;
count__24332 = G__24490;
i__24333 = G__24491;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23745__auto___24492 = re_frame.interop.now();
var duration__23746__auto___24493 = (end__23745__auto___24492 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23746__auto___24493,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23745__auto___24492);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24315);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24498 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24498)){
var new_db_24499 = temp__5825__auto___24498;
var fexpr__24365_24500 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24365_24500.cljs$core$IFn$_invoke$arity$1 ? fexpr__24365_24500.cljs$core$IFn$_invoke$arity$1(new_db_24499) : fexpr__24365_24500.call(null,new_db_24499));
} else {
}

var seq__24366 = cljs.core.seq(effects_without_db);
var chunk__24367 = null;
var count__24368 = (0);
var i__24369 = (0);
while(true){
if((i__24369 < count__24368)){
var vec__24378 = chunk__24367.cljs$core$IIndexed$_nth$arity$2(null,i__24369);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24378,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24378,(1),null);
var temp__5823__auto___24501 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24501)){
var effect_fn_24502 = temp__5823__auto___24501;
(effect_fn_24502.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24502.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24502.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24503 = seq__24366;
var G__24504 = chunk__24367;
var G__24505 = count__24368;
var G__24506 = (i__24369 + (1));
seq__24366 = G__24503;
chunk__24367 = G__24504;
count__24368 = G__24505;
i__24369 = G__24506;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24366);
if(temp__5825__auto__){
var seq__24366__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24366__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24366__$1);
var G__24507 = cljs.core.chunk_rest(seq__24366__$1);
var G__24508 = c__5548__auto__;
var G__24509 = cljs.core.count(c__5548__auto__);
var G__24510 = (0);
seq__24366 = G__24507;
chunk__24367 = G__24508;
count__24368 = G__24509;
i__24369 = G__24510;
continue;
} else {
var vec__24381 = cljs.core.first(seq__24366__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24381,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24381,(1),null);
var temp__5823__auto___24511 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24511)){
var effect_fn_24512 = temp__5823__auto___24511;
(effect_fn_24512.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24512.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24512.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24513 = cljs.core.next(seq__24366__$1);
var G__24514 = null;
var G__24515 = (0);
var G__24516 = (0);
seq__24366 = G__24513;
chunk__24367 = G__24514;
count__24368 = G__24515;
i__24369 = G__24516;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24400){
var map__24401 = p__24400;
var map__24401__$1 = cljs.core.__destructure_map(map__24401);
var effect = map__24401__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24401__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24401__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24402 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24403 = null;
var count__24404 = (0);
var i__24405 = (0);
while(true){
if((i__24405 < count__24404)){
var effect = chunk__24403.cljs$core$IIndexed$_nth$arity$2(null,i__24405);
re_frame.fx.dispatch_later(effect);


var G__24519 = seq__24402;
var G__24520 = chunk__24403;
var G__24521 = count__24404;
var G__24522 = (i__24405 + (1));
seq__24402 = G__24519;
chunk__24403 = G__24520;
count__24404 = G__24521;
i__24405 = G__24522;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24402);
if(temp__5825__auto__){
var seq__24402__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24402__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24402__$1);
var G__24523 = cljs.core.chunk_rest(seq__24402__$1);
var G__24524 = c__5548__auto__;
var G__24525 = cljs.core.count(c__5548__auto__);
var G__24526 = (0);
seq__24402 = G__24523;
chunk__24403 = G__24524;
count__24404 = G__24525;
i__24405 = G__24526;
continue;
} else {
var effect = cljs.core.first(seq__24402__$1);
re_frame.fx.dispatch_later(effect);


var G__24527 = cljs.core.next(seq__24402__$1);
var G__24528 = null;
var G__24529 = (0);
var G__24530 = (0);
seq__24402 = G__24527;
chunk__24403 = G__24528;
count__24404 = G__24529;
i__24405 = G__24530;
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
var seq__24412 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24413 = null;
var count__24414 = (0);
var i__24415 = (0);
while(true){
if((i__24415 < count__24414)){
var vec__24426 = chunk__24413.cljs$core$IIndexed$_nth$arity$2(null,i__24415);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24532 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24532)){
var effect_fn_24534 = temp__5823__auto___24532;
(effect_fn_24534.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24534.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24534.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24536 = seq__24412;
var G__24537 = chunk__24413;
var G__24538 = count__24414;
var G__24539 = (i__24415 + (1));
seq__24412 = G__24536;
chunk__24413 = G__24537;
count__24414 = G__24538;
i__24415 = G__24539;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24412);
if(temp__5825__auto__){
var seq__24412__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24412__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24412__$1);
var G__24540 = cljs.core.chunk_rest(seq__24412__$1);
var G__24541 = c__5548__auto__;
var G__24542 = cljs.core.count(c__5548__auto__);
var G__24543 = (0);
seq__24412 = G__24540;
chunk__24413 = G__24541;
count__24414 = G__24542;
i__24415 = G__24543;
continue;
} else {
var vec__24438 = cljs.core.first(seq__24412__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24438,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24438,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24544)){
var effect_fn_24545 = temp__5823__auto___24544;
(effect_fn_24545.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24545.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24545.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24546 = cljs.core.next(seq__24412__$1);
var G__24547 = null;
var G__24548 = (0);
var G__24549 = (0);
seq__24412 = G__24546;
chunk__24413 = G__24547;
count__24414 = G__24548;
i__24415 = G__24549;
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
var seq__24443 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24444 = null;
var count__24445 = (0);
var i__24446 = (0);
while(true){
if((i__24446 < count__24445)){
var event = chunk__24444.cljs$core$IIndexed$_nth$arity$2(null,i__24446);
re_frame.router.dispatch(event);


var G__24553 = seq__24443;
var G__24554 = chunk__24444;
var G__24555 = count__24445;
var G__24556 = (i__24446 + (1));
seq__24443 = G__24553;
chunk__24444 = G__24554;
count__24445 = G__24555;
i__24446 = G__24556;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24443);
if(temp__5825__auto__){
var seq__24443__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24443__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24443__$1);
var G__24557 = cljs.core.chunk_rest(seq__24443__$1);
var G__24558 = c__5548__auto__;
var G__24559 = cljs.core.count(c__5548__auto__);
var G__24560 = (0);
seq__24443 = G__24557;
chunk__24444 = G__24558;
count__24445 = G__24559;
i__24446 = G__24560;
continue;
} else {
var event = cljs.core.first(seq__24443__$1);
re_frame.router.dispatch(event);


var G__24561 = cljs.core.next(seq__24443__$1);
var G__24562 = null;
var G__24563 = (0);
var G__24564 = (0);
seq__24443 = G__24561;
chunk__24444 = G__24562;
count__24445 = G__24563;
i__24446 = G__24564;
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
var seq__24457 = cljs.core.seq(value);
var chunk__24461 = null;
var count__24462 = (0);
var i__24463 = (0);
while(true){
if((i__24463 < count__24462)){
var event = chunk__24461.cljs$core$IIndexed$_nth$arity$2(null,i__24463);
clear_event(event);


var G__24565 = seq__24457;
var G__24566 = chunk__24461;
var G__24567 = count__24462;
var G__24568 = (i__24463 + (1));
seq__24457 = G__24565;
chunk__24461 = G__24566;
count__24462 = G__24567;
i__24463 = G__24568;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24457);
if(temp__5825__auto__){
var seq__24457__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24457__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24457__$1);
var G__24571 = cljs.core.chunk_rest(seq__24457__$1);
var G__24572 = c__5548__auto__;
var G__24573 = cljs.core.count(c__5548__auto__);
var G__24574 = (0);
seq__24457 = G__24571;
chunk__24461 = G__24572;
count__24462 = G__24573;
i__24463 = G__24574;
continue;
} else {
var event = cljs.core.first(seq__24457__$1);
clear_event(event);


var G__24575 = cljs.core.next(seq__24457__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__24457 = G__24575;
chunk__24461 = G__24576;
count__24462 = G__24577;
i__24463 = G__24578;
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
var _STAR_current_trace_STAR__orig_val__24467 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24468 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24468);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23745__auto___24580 = re_frame.interop.now();
var duration__23746__auto___24581 = (end__23745__auto___24580 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23746__auto___24581,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23745__auto___24580);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24467);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
