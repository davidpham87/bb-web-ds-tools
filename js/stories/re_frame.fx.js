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
var _STAR_current_trace_STAR__orig_val__24356 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24357 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24357);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24553 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24553)){
var new_db_24554 = temp__5825__auto___24553;
var fexpr__24359_24555 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24359_24555.cljs$core$IFn$_invoke$arity$1 ? fexpr__24359_24555.cljs$core$IFn$_invoke$arity$1(new_db_24554) : fexpr__24359_24555.call(null,new_db_24554));
} else {
}

var seq__24360 = cljs.core.seq(effects_without_db);
var chunk__24361 = null;
var count__24362 = (0);
var i__24363 = (0);
while(true){
if((i__24363 < count__24362)){
var vec__24448 = chunk__24361.cljs$core$IIndexed$_nth$arity$2(null,i__24363);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448,(1),null);
var temp__5823__auto___24556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24556)){
var effect_fn_24557 = temp__5823__auto___24556;
(effect_fn_24557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24558 = seq__24360;
var G__24559 = chunk__24361;
var G__24560 = count__24362;
var G__24561 = (i__24363 + (1));
seq__24360 = G__24558;
chunk__24361 = G__24559;
count__24362 = G__24560;
i__24363 = G__24561;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24360);
if(temp__5825__auto__){
var seq__24360__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24360__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24360__$1);
var G__24562 = cljs.core.chunk_rest(seq__24360__$1);
var G__24563 = c__5548__auto__;
var G__24564 = cljs.core.count(c__5548__auto__);
var G__24565 = (0);
seq__24360 = G__24562;
chunk__24361 = G__24563;
count__24362 = G__24564;
i__24363 = G__24565;
continue;
} else {
var vec__24451 = cljs.core.first(seq__24360__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24451,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24451,(1),null);
var temp__5823__auto___24567 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24567)){
var effect_fn_24568 = temp__5823__auto___24567;
(effect_fn_24568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24568.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24569 = cljs.core.next(seq__24360__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24360 = G__24569;
chunk__24361 = G__24570;
count__24362 = G__24571;
i__24363 = G__24572;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23737__auto___24574 = re_frame.interop.now();
var duration__23738__auto___24575 = (end__23737__auto___24574 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23738__auto___24575,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23737__auto___24574);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24356);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24576 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24576)){
var new_db_24577 = temp__5825__auto___24576;
var fexpr__24463_24578 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24463_24578.cljs$core$IFn$_invoke$arity$1 ? fexpr__24463_24578.cljs$core$IFn$_invoke$arity$1(new_db_24577) : fexpr__24463_24578.call(null,new_db_24577));
} else {
}

var seq__24465 = cljs.core.seq(effects_without_db);
var chunk__24466 = null;
var count__24467 = (0);
var i__24468 = (0);
while(true){
if((i__24468 < count__24467)){
var vec__24479 = chunk__24466.cljs$core$IIndexed$_nth$arity$2(null,i__24468);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(1),null);
var temp__5823__auto___24579 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24579)){
var effect_fn_24580 = temp__5823__auto___24579;
(effect_fn_24580.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24580.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24580.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24581 = seq__24465;
var G__24582 = chunk__24466;
var G__24583 = count__24467;
var G__24584 = (i__24468 + (1));
seq__24465 = G__24581;
chunk__24466 = G__24582;
count__24467 = G__24583;
i__24468 = G__24584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24465);
if(temp__5825__auto__){
var seq__24465__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24465__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24465__$1);
var G__24585 = cljs.core.chunk_rest(seq__24465__$1);
var G__24586 = c__5548__auto__;
var G__24587 = cljs.core.count(c__5548__auto__);
var G__24588 = (0);
seq__24465 = G__24585;
chunk__24466 = G__24586;
count__24467 = G__24587;
i__24468 = G__24588;
continue;
} else {
var vec__24484 = cljs.core.first(seq__24465__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(1),null);
var temp__5823__auto___24589 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24589)){
var effect_fn_24590 = temp__5823__auto___24589;
(effect_fn_24590.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24590.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24590.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24591 = cljs.core.next(seq__24465__$1);
var G__24592 = null;
var G__24593 = (0);
var G__24594 = (0);
seq__24465 = G__24591;
chunk__24466 = G__24592;
count__24467 = G__24593;
i__24468 = G__24594;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24492){
var map__24494 = p__24492;
var map__24494__$1 = cljs.core.__destructure_map(map__24494);
var effect = map__24494__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24497 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24498 = null;
var count__24499 = (0);
var i__24500 = (0);
while(true){
if((i__24500 < count__24499)){
var effect = chunk__24498.cljs$core$IIndexed$_nth$arity$2(null,i__24500);
re_frame.fx.dispatch_later(effect);


var G__24595 = seq__24497;
var G__24596 = chunk__24498;
var G__24597 = count__24499;
var G__24598 = (i__24500 + (1));
seq__24497 = G__24595;
chunk__24498 = G__24596;
count__24499 = G__24597;
i__24500 = G__24598;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24497);
if(temp__5825__auto__){
var seq__24497__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24497__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24497__$1);
var G__24599 = cljs.core.chunk_rest(seq__24497__$1);
var G__24600 = c__5548__auto__;
var G__24601 = cljs.core.count(c__5548__auto__);
var G__24602 = (0);
seq__24497 = G__24599;
chunk__24498 = G__24600;
count__24499 = G__24601;
i__24500 = G__24602;
continue;
} else {
var effect = cljs.core.first(seq__24497__$1);
re_frame.fx.dispatch_later(effect);


var G__24603 = cljs.core.next(seq__24497__$1);
var G__24604 = null;
var G__24605 = (0);
var G__24606 = (0);
seq__24497 = G__24603;
chunk__24498 = G__24604;
count__24499 = G__24605;
i__24500 = G__24606;
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
var seq__24503 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24504 = null;
var count__24505 = (0);
var i__24506 = (0);
while(true){
if((i__24506 < count__24505)){
var vec__24515 = chunk__24504.cljs$core$IIndexed$_nth$arity$2(null,i__24506);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24607)){
var effect_fn_24608 = temp__5823__auto___24607;
(effect_fn_24608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24608.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24608.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24609 = seq__24503;
var G__24610 = chunk__24504;
var G__24611 = count__24505;
var G__24612 = (i__24506 + (1));
seq__24503 = G__24609;
chunk__24504 = G__24610;
count__24505 = G__24611;
i__24506 = G__24612;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24503);
if(temp__5825__auto__){
var seq__24503__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24503__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24503__$1);
var G__24613 = cljs.core.chunk_rest(seq__24503__$1);
var G__24614 = c__5548__auto__;
var G__24615 = cljs.core.count(c__5548__auto__);
var G__24616 = (0);
seq__24503 = G__24613;
chunk__24504 = G__24614;
count__24505 = G__24615;
i__24506 = G__24616;
continue;
} else {
var vec__24518 = cljs.core.first(seq__24503__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24518,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24518,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24617 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24617)){
var effect_fn_24618 = temp__5823__auto___24617;
(effect_fn_24618.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24618.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24618.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24620 = cljs.core.next(seq__24503__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24503 = G__24620;
chunk__24504 = G__24622;
count__24505 = G__24623;
i__24506 = G__24624;
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
var seq__24528 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24529 = null;
var count__24530 = (0);
var i__24531 = (0);
while(true){
if((i__24531 < count__24530)){
var event = chunk__24529.cljs$core$IIndexed$_nth$arity$2(null,i__24531);
re_frame.router.dispatch(event);


var G__24625 = seq__24528;
var G__24626 = chunk__24529;
var G__24627 = count__24530;
var G__24628 = (i__24531 + (1));
seq__24528 = G__24625;
chunk__24529 = G__24626;
count__24530 = G__24627;
i__24531 = G__24628;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24528);
if(temp__5825__auto__){
var seq__24528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24528__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24528__$1);
var G__24629 = cljs.core.chunk_rest(seq__24528__$1);
var G__24630 = c__5548__auto__;
var G__24631 = cljs.core.count(c__5548__auto__);
var G__24632 = (0);
seq__24528 = G__24629;
chunk__24529 = G__24630;
count__24530 = G__24631;
i__24531 = G__24632;
continue;
} else {
var event = cljs.core.first(seq__24528__$1);
re_frame.router.dispatch(event);


var G__24633 = cljs.core.next(seq__24528__$1);
var G__24634 = null;
var G__24635 = (0);
var G__24636 = (0);
seq__24528 = G__24633;
chunk__24529 = G__24634;
count__24530 = G__24635;
i__24531 = G__24636;
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
var seq__24539 = cljs.core.seq(value);
var chunk__24540 = null;
var count__24541 = (0);
var i__24542 = (0);
while(true){
if((i__24542 < count__24541)){
var event = chunk__24540.cljs$core$IIndexed$_nth$arity$2(null,i__24542);
clear_event(event);


var G__24637 = seq__24539;
var G__24638 = chunk__24540;
var G__24639 = count__24541;
var G__24640 = (i__24542 + (1));
seq__24539 = G__24637;
chunk__24540 = G__24638;
count__24541 = G__24639;
i__24542 = G__24640;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24539);
if(temp__5825__auto__){
var seq__24539__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24539__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24539__$1);
var G__24641 = cljs.core.chunk_rest(seq__24539__$1);
var G__24642 = c__5548__auto__;
var G__24643 = cljs.core.count(c__5548__auto__);
var G__24644 = (0);
seq__24539 = G__24641;
chunk__24540 = G__24642;
count__24541 = G__24643;
i__24542 = G__24644;
continue;
} else {
var event = cljs.core.first(seq__24539__$1);
clear_event(event);


var G__24645 = cljs.core.next(seq__24539__$1);
var G__24646 = null;
var G__24647 = (0);
var G__24648 = (0);
seq__24539 = G__24645;
chunk__24540 = G__24646;
count__24541 = G__24647;
i__24542 = G__24648;
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
var _STAR_current_trace_STAR__orig_val__24549 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24550 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24550);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23737__auto___24649 = re_frame.interop.now();
var duration__23738__auto___24650 = (end__23737__auto___24649 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23738__auto___24650,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23737__auto___24649);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24549);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
