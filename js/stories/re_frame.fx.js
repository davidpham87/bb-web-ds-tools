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
var _STAR_current_trace_STAR__orig_val__24256 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24257 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24257);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24414 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24414)){
var new_db_24415 = temp__5825__auto___24414;
var fexpr__24267_24416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24267_24416.cljs$core$IFn$_invoke$arity$1 ? fexpr__24267_24416.cljs$core$IFn$_invoke$arity$1(new_db_24415) : fexpr__24267_24416.call(null,new_db_24415));
} else {
}

var seq__24268 = cljs.core.seq(effects_without_db);
var chunk__24269 = null;
var count__24270 = (0);
var i__24271 = (0);
while(true){
if((i__24271 < count__24270)){
var vec__24300 = chunk__24269.cljs$core$IIndexed$_nth$arity$2(null,i__24271);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24300,(1),null);
var temp__5823__auto___24417 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24417)){
var effect_fn_24418 = temp__5823__auto___24417;
(effect_fn_24418.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24418.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24418.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24419 = seq__24268;
var G__24420 = chunk__24269;
var G__24421 = count__24270;
var G__24422 = (i__24271 + (1));
seq__24268 = G__24419;
chunk__24269 = G__24420;
count__24270 = G__24421;
i__24271 = G__24422;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24268);
if(temp__5825__auto__){
var seq__24268__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24268__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24268__$1);
var G__24423 = cljs.core.chunk_rest(seq__24268__$1);
var G__24424 = c__5548__auto__;
var G__24425 = cljs.core.count(c__5548__auto__);
var G__24426 = (0);
seq__24268 = G__24423;
chunk__24269 = G__24424;
count__24270 = G__24425;
i__24271 = G__24426;
continue;
} else {
var vec__24303 = cljs.core.first(seq__24268__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,(1),null);
var temp__5823__auto___24427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24427)){
var effect_fn_24428 = temp__5823__auto___24427;
(effect_fn_24428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24428.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24429 = cljs.core.next(seq__24268__$1);
var G__24430 = null;
var G__24431 = (0);
var G__24432 = (0);
seq__24268 = G__24429;
chunk__24269 = G__24430;
count__24270 = G__24431;
i__24271 = G__24432;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23749__auto___24433 = re_frame.interop.now();
var duration__23750__auto___24434 = (end__23749__auto___24433 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23750__auto___24434,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23749__auto___24433);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24256);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24439 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24439)){
var new_db_24440 = temp__5825__auto___24439;
var fexpr__24310_24441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24310_24441.cljs$core$IFn$_invoke$arity$1 ? fexpr__24310_24441.cljs$core$IFn$_invoke$arity$1(new_db_24440) : fexpr__24310_24441.call(null,new_db_24440));
} else {
}

var seq__24313 = cljs.core.seq(effects_without_db);
var chunk__24314 = null;
var count__24315 = (0);
var i__24316 = (0);
while(true){
if((i__24316 < count__24315)){
var vec__24343 = chunk__24314.cljs$core$IIndexed$_nth$arity$2(null,i__24316);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24343,(1),null);
var temp__5823__auto___24442 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24442)){
var effect_fn_24443 = temp__5823__auto___24442;
(effect_fn_24443.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24443.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24443.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24444 = seq__24313;
var G__24445 = chunk__24314;
var G__24446 = count__24315;
var G__24447 = (i__24316 + (1));
seq__24313 = G__24444;
chunk__24314 = G__24445;
count__24315 = G__24446;
i__24316 = G__24447;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24313);
if(temp__5825__auto__){
var seq__24313__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24313__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24313__$1);
var G__24448 = cljs.core.chunk_rest(seq__24313__$1);
var G__24449 = c__5548__auto__;
var G__24450 = cljs.core.count(c__5548__auto__);
var G__24451 = (0);
seq__24313 = G__24448;
chunk__24314 = G__24449;
count__24315 = G__24450;
i__24316 = G__24451;
continue;
} else {
var vec__24358 = cljs.core.first(seq__24313__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24358,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24358,(1),null);
var temp__5823__auto___24452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24452)){
var effect_fn_24453 = temp__5823__auto___24452;
(effect_fn_24453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24453.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24454 = cljs.core.next(seq__24313__$1);
var G__24455 = null;
var G__24456 = (0);
var G__24457 = (0);
seq__24313 = G__24454;
chunk__24314 = G__24455;
count__24315 = G__24456;
i__24316 = G__24457;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24361){
var map__24362 = p__24361;
var map__24362__$1 = cljs.core.__destructure_map(map__24362);
var effect = map__24362__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24364 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24365 = null;
var count__24366 = (0);
var i__24367 = (0);
while(true){
if((i__24367 < count__24366)){
var effect = chunk__24365.cljs$core$IIndexed$_nth$arity$2(null,i__24367);
re_frame.fx.dispatch_later(effect);


var G__24460 = seq__24364;
var G__24461 = chunk__24365;
var G__24462 = count__24366;
var G__24463 = (i__24367 + (1));
seq__24364 = G__24460;
chunk__24365 = G__24461;
count__24366 = G__24462;
i__24367 = G__24463;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24364);
if(temp__5825__auto__){
var seq__24364__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24364__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24364__$1);
var G__24467 = cljs.core.chunk_rest(seq__24364__$1);
var G__24468 = c__5548__auto__;
var G__24469 = cljs.core.count(c__5548__auto__);
var G__24470 = (0);
seq__24364 = G__24467;
chunk__24365 = G__24468;
count__24366 = G__24469;
i__24367 = G__24470;
continue;
} else {
var effect = cljs.core.first(seq__24364__$1);
re_frame.fx.dispatch_later(effect);


var G__24471 = cljs.core.next(seq__24364__$1);
var G__24472 = null;
var G__24473 = (0);
var G__24474 = (0);
seq__24364 = G__24471;
chunk__24365 = G__24472;
count__24366 = G__24473;
i__24367 = G__24474;
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
var seq__24380 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24381 = null;
var count__24382 = (0);
var i__24383 = (0);
while(true){
if((i__24383 < count__24382)){
var vec__24394 = chunk__24381.cljs$core$IIndexed$_nth$arity$2(null,i__24383);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24476 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24476)){
var effect_fn_24477 = temp__5823__auto___24476;
(effect_fn_24477.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24477.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24477.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24478 = seq__24380;
var G__24479 = chunk__24381;
var G__24480 = count__24382;
var G__24481 = (i__24383 + (1));
seq__24380 = G__24478;
chunk__24381 = G__24479;
count__24382 = G__24480;
i__24383 = G__24481;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24380);
if(temp__5825__auto__){
var seq__24380__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24380__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24380__$1);
var G__24482 = cljs.core.chunk_rest(seq__24380__$1);
var G__24483 = c__5548__auto__;
var G__24484 = cljs.core.count(c__5548__auto__);
var G__24485 = (0);
seq__24380 = G__24482;
chunk__24381 = G__24483;
count__24382 = G__24484;
i__24383 = G__24485;
continue;
} else {
var vec__24397 = cljs.core.first(seq__24380__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24397,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24397,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24486 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24486)){
var effect_fn_24487 = temp__5823__auto___24486;
(effect_fn_24487.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24487.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24487.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24488 = cljs.core.next(seq__24380__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24380 = G__24488;
chunk__24381 = G__24489;
count__24382 = G__24490;
i__24383 = G__24491;
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
var seq__24400 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24401 = null;
var count__24402 = (0);
var i__24403 = (0);
while(true){
if((i__24403 < count__24402)){
var event = chunk__24401.cljs$core$IIndexed$_nth$arity$2(null,i__24403);
re_frame.router.dispatch(event);


var G__24495 = seq__24400;
var G__24496 = chunk__24401;
var G__24497 = count__24402;
var G__24498 = (i__24403 + (1));
seq__24400 = G__24495;
chunk__24401 = G__24496;
count__24402 = G__24497;
i__24403 = G__24498;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24400);
if(temp__5825__auto__){
var seq__24400__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24400__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24400__$1);
var G__24499 = cljs.core.chunk_rest(seq__24400__$1);
var G__24500 = c__5548__auto__;
var G__24501 = cljs.core.count(c__5548__auto__);
var G__24502 = (0);
seq__24400 = G__24499;
chunk__24401 = G__24500;
count__24402 = G__24501;
i__24403 = G__24502;
continue;
} else {
var event = cljs.core.first(seq__24400__$1);
re_frame.router.dispatch(event);


var G__24503 = cljs.core.next(seq__24400__$1);
var G__24504 = null;
var G__24505 = (0);
var G__24506 = (0);
seq__24400 = G__24503;
chunk__24401 = G__24504;
count__24402 = G__24505;
i__24403 = G__24506;
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
var seq__24404 = cljs.core.seq(value);
var chunk__24405 = null;
var count__24406 = (0);
var i__24407 = (0);
while(true){
if((i__24407 < count__24406)){
var event = chunk__24405.cljs$core$IIndexed$_nth$arity$2(null,i__24407);
clear_event(event);


var G__24507 = seq__24404;
var G__24508 = chunk__24405;
var G__24509 = count__24406;
var G__24510 = (i__24407 + (1));
seq__24404 = G__24507;
chunk__24405 = G__24508;
count__24406 = G__24509;
i__24407 = G__24510;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24404);
if(temp__5825__auto__){
var seq__24404__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24404__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24404__$1);
var G__24511 = cljs.core.chunk_rest(seq__24404__$1);
var G__24512 = c__5548__auto__;
var G__24513 = cljs.core.count(c__5548__auto__);
var G__24514 = (0);
seq__24404 = G__24511;
chunk__24405 = G__24512;
count__24406 = G__24513;
i__24407 = G__24514;
continue;
} else {
var event = cljs.core.first(seq__24404__$1);
clear_event(event);


var G__24515 = cljs.core.next(seq__24404__$1);
var G__24516 = null;
var G__24517 = (0);
var G__24518 = (0);
seq__24404 = G__24515;
chunk__24405 = G__24516;
count__24406 = G__24517;
i__24407 = G__24518;
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
var _STAR_current_trace_STAR__orig_val__24411 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24412 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24412);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23749__auto___24519 = re_frame.interop.now();
var duration__23750__auto___24520 = (end__23749__auto___24519 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23750__auto___24520,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23749__auto___24519);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24411);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
