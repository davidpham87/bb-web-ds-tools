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
var _STAR_current_trace_STAR__orig_val__24347 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24348 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24348);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24522 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24522)){
var new_db_24523 = temp__5825__auto___24522;
var fexpr__24350_24524 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24350_24524.cljs$core$IFn$_invoke$arity$1 ? fexpr__24350_24524.cljs$core$IFn$_invoke$arity$1(new_db_24523) : fexpr__24350_24524.call(null,new_db_24523));
} else {
}

var seq__24351 = cljs.core.seq(effects_without_db);
var chunk__24352 = null;
var count__24353 = (0);
var i__24354 = (0);
while(true){
if((i__24354 < count__24353)){
var vec__24369 = chunk__24352.cljs$core$IIndexed$_nth$arity$2(null,i__24354);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(1),null);
var temp__5823__auto___24525 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24525)){
var effect_fn_24526 = temp__5823__auto___24525;
(effect_fn_24526.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24526.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24526.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24527 = seq__24351;
var G__24528 = chunk__24352;
var G__24529 = count__24353;
var G__24530 = (i__24354 + (1));
seq__24351 = G__24527;
chunk__24352 = G__24528;
count__24353 = G__24529;
i__24354 = G__24530;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24351);
if(temp__5825__auto__){
var seq__24351__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24351__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24351__$1);
var G__24531 = cljs.core.chunk_rest(seq__24351__$1);
var G__24532 = c__5548__auto__;
var G__24533 = cljs.core.count(c__5548__auto__);
var G__24534 = (0);
seq__24351 = G__24531;
chunk__24352 = G__24532;
count__24353 = G__24533;
i__24354 = G__24534;
continue;
} else {
var vec__24413 = cljs.core.first(seq__24351__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(1),null);
var temp__5823__auto___24535 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24535)){
var effect_fn_24536 = temp__5823__auto___24535;
(effect_fn_24536.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24536.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24536.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24537 = cljs.core.next(seq__24351__$1);
var G__24538 = null;
var G__24539 = (0);
var G__24540 = (0);
seq__24351 = G__24537;
chunk__24352 = G__24538;
count__24353 = G__24539;
i__24354 = G__24540;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23775__auto___24541 = re_frame.interop.now();
var duration__23776__auto___24542 = (end__23775__auto___24541 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23776__auto___24542,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23775__auto___24541);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24347);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24543 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24543)){
var new_db_24544 = temp__5825__auto___24543;
var fexpr__24422_24545 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24422_24545.cljs$core$IFn$_invoke$arity$1 ? fexpr__24422_24545.cljs$core$IFn$_invoke$arity$1(new_db_24544) : fexpr__24422_24545.call(null,new_db_24544));
} else {
}

var seq__24430 = cljs.core.seq(effects_without_db);
var chunk__24431 = null;
var count__24432 = (0);
var i__24433 = (0);
while(true){
if((i__24433 < count__24432)){
var vec__24448 = chunk__24431.cljs$core$IIndexed$_nth$arity$2(null,i__24433);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(1),null);
var temp__5823__auto___24546 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24546)){
var effect_fn_24547 = temp__5823__auto___24546;
(effect_fn_24547.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24547.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24547.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24548 = seq__24430;
var G__24549 = chunk__24431;
var G__24550 = count__24432;
var G__24551 = (i__24433 + (1));
seq__24430 = G__24548;
chunk__24431 = G__24549;
count__24432 = G__24550;
i__24433 = G__24551;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24430);
if(temp__5825__auto__){
var seq__24430__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24430__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24430__$1);
var G__24555 = cljs.core.chunk_rest(seq__24430__$1);
var G__24556 = c__5548__auto__;
var G__24557 = cljs.core.count(c__5548__auto__);
var G__24558 = (0);
seq__24430 = G__24555;
chunk__24431 = G__24556;
count__24432 = G__24557;
i__24433 = G__24558;
continue;
} else {
var vec__24453 = cljs.core.first(seq__24430__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(1),null);
var temp__5823__auto___24562 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24562)){
var effect_fn_24563 = temp__5823__auto___24562;
(effect_fn_24563.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24563.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24563.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24564 = cljs.core.next(seq__24430__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__24430 = G__24564;
chunk__24431 = G__24565;
count__24432 = G__24566;
i__24433 = G__24567;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24462){
var map__24463 = p__24462;
var map__24463__$1 = cljs.core.__destructure_map(map__24463);
var effect = map__24463__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24467 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24468 = null;
var count__24469 = (0);
var i__24470 = (0);
while(true){
if((i__24470 < count__24469)){
var effect = chunk__24468.cljs$core$IIndexed$_nth$arity$2(null,i__24470);
re_frame.fx.dispatch_later(effect);


var G__24568 = seq__24467;
var G__24569 = chunk__24468;
var G__24570 = count__24469;
var G__24571 = (i__24470 + (1));
seq__24467 = G__24568;
chunk__24468 = G__24569;
count__24469 = G__24570;
i__24470 = G__24571;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24467);
if(temp__5825__auto__){
var seq__24467__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24467__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24467__$1);
var G__24572 = cljs.core.chunk_rest(seq__24467__$1);
var G__24573 = c__5548__auto__;
var G__24574 = cljs.core.count(c__5548__auto__);
var G__24575 = (0);
seq__24467 = G__24572;
chunk__24468 = G__24573;
count__24469 = G__24574;
i__24470 = G__24575;
continue;
} else {
var effect = cljs.core.first(seq__24467__$1);
re_frame.fx.dispatch_later(effect);


var G__24576 = cljs.core.next(seq__24467__$1);
var G__24577 = null;
var G__24578 = (0);
var G__24579 = (0);
seq__24467 = G__24576;
chunk__24468 = G__24577;
count__24469 = G__24578;
i__24470 = G__24579;
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
var seq__24472 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24473 = null;
var count__24474 = (0);
var i__24475 = (0);
while(true){
if((i__24475 < count__24474)){
var vec__24490 = chunk__24473.cljs$core$IIndexed$_nth$arity$2(null,i__24475);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24580 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24580)){
var effect_fn_24581 = temp__5823__auto___24580;
(effect_fn_24581.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24581.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24581.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24582 = seq__24472;
var G__24583 = chunk__24473;
var G__24584 = count__24474;
var G__24585 = (i__24475 + (1));
seq__24472 = G__24582;
chunk__24473 = G__24583;
count__24474 = G__24584;
i__24475 = G__24585;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24472);
if(temp__5825__auto__){
var seq__24472__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24472__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24472__$1);
var G__24586 = cljs.core.chunk_rest(seq__24472__$1);
var G__24587 = c__5548__auto__;
var G__24588 = cljs.core.count(c__5548__auto__);
var G__24589 = (0);
seq__24472 = G__24586;
chunk__24473 = G__24587;
count__24474 = G__24588;
i__24475 = G__24589;
continue;
} else {
var vec__24493 = cljs.core.first(seq__24472__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24493,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24493,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24590 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24590)){
var effect_fn_24591 = temp__5823__auto___24590;
(effect_fn_24591.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24591.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24591.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24592 = cljs.core.next(seq__24472__$1);
var G__24593 = null;
var G__24594 = (0);
var G__24595 = (0);
seq__24472 = G__24592;
chunk__24473 = G__24593;
count__24474 = G__24594;
i__24475 = G__24595;
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
var seq__24498 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24499 = null;
var count__24500 = (0);
var i__24501 = (0);
while(true){
if((i__24501 < count__24500)){
var event = chunk__24499.cljs$core$IIndexed$_nth$arity$2(null,i__24501);
re_frame.router.dispatch(event);


var G__24596 = seq__24498;
var G__24597 = chunk__24499;
var G__24598 = count__24500;
var G__24599 = (i__24501 + (1));
seq__24498 = G__24596;
chunk__24499 = G__24597;
count__24500 = G__24598;
i__24501 = G__24599;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24498);
if(temp__5825__auto__){
var seq__24498__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24498__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24498__$1);
var G__24600 = cljs.core.chunk_rest(seq__24498__$1);
var G__24601 = c__5548__auto__;
var G__24602 = cljs.core.count(c__5548__auto__);
var G__24603 = (0);
seq__24498 = G__24600;
chunk__24499 = G__24601;
count__24500 = G__24602;
i__24501 = G__24603;
continue;
} else {
var event = cljs.core.first(seq__24498__$1);
re_frame.router.dispatch(event);


var G__24604 = cljs.core.next(seq__24498__$1);
var G__24605 = null;
var G__24606 = (0);
var G__24607 = (0);
seq__24498 = G__24604;
chunk__24499 = G__24605;
count__24500 = G__24606;
i__24501 = G__24607;
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
var seq__24508 = cljs.core.seq(value);
var chunk__24509 = null;
var count__24510 = (0);
var i__24511 = (0);
while(true){
if((i__24511 < count__24510)){
var event = chunk__24509.cljs$core$IIndexed$_nth$arity$2(null,i__24511);
clear_event(event);


var G__24611 = seq__24508;
var G__24612 = chunk__24509;
var G__24613 = count__24510;
var G__24614 = (i__24511 + (1));
seq__24508 = G__24611;
chunk__24509 = G__24612;
count__24510 = G__24613;
i__24511 = G__24614;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24508);
if(temp__5825__auto__){
var seq__24508__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24508__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24508__$1);
var G__24615 = cljs.core.chunk_rest(seq__24508__$1);
var G__24616 = c__5548__auto__;
var G__24617 = cljs.core.count(c__5548__auto__);
var G__24618 = (0);
seq__24508 = G__24615;
chunk__24509 = G__24616;
count__24510 = G__24617;
i__24511 = G__24618;
continue;
} else {
var event = cljs.core.first(seq__24508__$1);
clear_event(event);


var G__24621 = cljs.core.next(seq__24508__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24508 = G__24621;
chunk__24509 = G__24622;
count__24510 = G__24623;
i__24511 = G__24624;
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
var _STAR_current_trace_STAR__orig_val__24519 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24520 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24520);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23775__auto___24625 = re_frame.interop.now();
var duration__23776__auto___24626 = (end__23775__auto___24625 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23776__auto___24626,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23775__auto___24625);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24519);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
