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
var _STAR_current_trace_STAR__orig_val__24435 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24436 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24436);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24587 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24587)){
var new_db_24588 = temp__5825__auto___24587;
var fexpr__24437_24589 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24437_24589.cljs$core$IFn$_invoke$arity$1 ? fexpr__24437_24589.cljs$core$IFn$_invoke$arity$1(new_db_24588) : fexpr__24437_24589.call(null,new_db_24588));
} else {
}

var seq__24439 = cljs.core.seq(effects_without_db);
var chunk__24440 = null;
var count__24441 = (0);
var i__24442 = (0);
while(true){
if((i__24442 < count__24441)){
var vec__24463 = chunk__24440.cljs$core$IIndexed$_nth$arity$2(null,i__24442);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24463,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24463,(1),null);
var temp__5823__auto___24592 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24592)){
var effect_fn_24593 = temp__5823__auto___24592;
(effect_fn_24593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24594 = seq__24439;
var G__24595 = chunk__24440;
var G__24596 = count__24441;
var G__24597 = (i__24442 + (1));
seq__24439 = G__24594;
chunk__24440 = G__24595;
count__24441 = G__24596;
i__24442 = G__24597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24439);
if(temp__5825__auto__){
var seq__24439__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24439__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24439__$1);
var G__24598 = cljs.core.chunk_rest(seq__24439__$1);
var G__24599 = c__5548__auto__;
var G__24600 = cljs.core.count(c__5548__auto__);
var G__24601 = (0);
seq__24439 = G__24598;
chunk__24440 = G__24599;
count__24441 = G__24600;
i__24442 = G__24601;
continue;
} else {
var vec__24467 = cljs.core.first(seq__24439__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467,(1),null);
var temp__5823__auto___24602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24602)){
var effect_fn_24603 = temp__5823__auto___24602;
(effect_fn_24603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24604 = cljs.core.next(seq__24439__$1);
var G__24605 = null;
var G__24606 = (0);
var G__24607 = (0);
seq__24439 = G__24604;
chunk__24440 = G__24605;
count__24441 = G__24606;
i__24442 = G__24607;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23736__auto___24608 = re_frame.interop.now();
var duration__23737__auto___24609 = (end__23736__auto___24608 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23737__auto___24609,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23736__auto___24608);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24435);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24610 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24610)){
var new_db_24611 = temp__5825__auto___24610;
var fexpr__24475_24612 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24475_24612.cljs$core$IFn$_invoke$arity$1 ? fexpr__24475_24612.cljs$core$IFn$_invoke$arity$1(new_db_24611) : fexpr__24475_24612.call(null,new_db_24611));
} else {
}

var seq__24476 = cljs.core.seq(effects_without_db);
var chunk__24477 = null;
var count__24478 = (0);
var i__24479 = (0);
while(true){
if((i__24479 < count__24478)){
var vec__24526 = chunk__24477.cljs$core$IIndexed$_nth$arity$2(null,i__24479);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(1),null);
var temp__5823__auto___24613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24613)){
var effect_fn_24614 = temp__5823__auto___24613;
(effect_fn_24614.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24614.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24614.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24615 = seq__24476;
var G__24616 = chunk__24477;
var G__24617 = count__24478;
var G__24618 = (i__24479 + (1));
seq__24476 = G__24615;
chunk__24477 = G__24616;
count__24478 = G__24617;
i__24479 = G__24618;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24476);
if(temp__5825__auto__){
var seq__24476__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24476__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24476__$1);
var G__24619 = cljs.core.chunk_rest(seq__24476__$1);
var G__24620 = c__5548__auto__;
var G__24621 = cljs.core.count(c__5548__auto__);
var G__24622 = (0);
seq__24476 = G__24619;
chunk__24477 = G__24620;
count__24478 = G__24621;
i__24479 = G__24622;
continue;
} else {
var vec__24535 = cljs.core.first(seq__24476__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(1),null);
var temp__5823__auto___24623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24623)){
var effect_fn_24624 = temp__5823__auto___24623;
(effect_fn_24624.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24624.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24624.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24626 = cljs.core.next(seq__24476__$1);
var G__24627 = null;
var G__24628 = (0);
var G__24629 = (0);
seq__24476 = G__24626;
chunk__24477 = G__24627;
count__24478 = G__24628;
i__24479 = G__24629;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24538){
var map__24539 = p__24538;
var map__24539__$1 = cljs.core.__destructure_map(map__24539);
var effect = map__24539__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24539__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24539__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24543 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24544 = null;
var count__24545 = (0);
var i__24546 = (0);
while(true){
if((i__24546 < count__24545)){
var effect = chunk__24544.cljs$core$IIndexed$_nth$arity$2(null,i__24546);
re_frame.fx.dispatch_later(effect);


var G__24630 = seq__24543;
var G__24631 = chunk__24544;
var G__24632 = count__24545;
var G__24633 = (i__24546 + (1));
seq__24543 = G__24630;
chunk__24544 = G__24631;
count__24545 = G__24632;
i__24546 = G__24633;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24543);
if(temp__5825__auto__){
var seq__24543__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24543__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24543__$1);
var G__24634 = cljs.core.chunk_rest(seq__24543__$1);
var G__24635 = c__5548__auto__;
var G__24636 = cljs.core.count(c__5548__auto__);
var G__24637 = (0);
seq__24543 = G__24634;
chunk__24544 = G__24635;
count__24545 = G__24636;
i__24546 = G__24637;
continue;
} else {
var effect = cljs.core.first(seq__24543__$1);
re_frame.fx.dispatch_later(effect);


var G__24638 = cljs.core.next(seq__24543__$1);
var G__24639 = null;
var G__24640 = (0);
var G__24641 = (0);
seq__24543 = G__24638;
chunk__24544 = G__24639;
count__24545 = G__24640;
i__24546 = G__24641;
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

var temp__5823__auto___24642 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24642)){
var effect_fn_24643 = temp__5823__auto___24642;
(effect_fn_24643.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24643.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24643.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24644 = seq__24547;
var G__24645 = chunk__24548;
var G__24646 = count__24549;
var G__24647 = (i__24550 + (1));
seq__24547 = G__24644;
chunk__24548 = G__24645;
count__24549 = G__24646;
i__24550 = G__24647;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24547);
if(temp__5825__auto__){
var seq__24547__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24547__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24547__$1);
var G__24648 = cljs.core.chunk_rest(seq__24547__$1);
var G__24649 = c__5548__auto__;
var G__24650 = cljs.core.count(c__5548__auto__);
var G__24651 = (0);
seq__24547 = G__24648;
chunk__24548 = G__24649;
count__24549 = G__24650;
i__24550 = G__24651;
continue;
} else {
var vec__24560 = cljs.core.first(seq__24547__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24652 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24652)){
var effect_fn_24653 = temp__5823__auto___24652;
(effect_fn_24653.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24653.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24653.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24654 = cljs.core.next(seq__24547__$1);
var G__24655 = null;
var G__24656 = (0);
var G__24657 = (0);
seq__24547 = G__24654;
chunk__24548 = G__24655;
count__24549 = G__24656;
i__24550 = G__24657;
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
var seq__24566 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24567 = null;
var count__24568 = (0);
var i__24569 = (0);
while(true){
if((i__24569 < count__24568)){
var event = chunk__24567.cljs$core$IIndexed$_nth$arity$2(null,i__24569);
re_frame.router.dispatch(event);


var G__24658 = seq__24566;
var G__24659 = chunk__24567;
var G__24660 = count__24568;
var G__24661 = (i__24569 + (1));
seq__24566 = G__24658;
chunk__24567 = G__24659;
count__24568 = G__24660;
i__24569 = G__24661;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24566);
if(temp__5825__auto__){
var seq__24566__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24566__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24566__$1);
var G__24662 = cljs.core.chunk_rest(seq__24566__$1);
var G__24663 = c__5548__auto__;
var G__24664 = cljs.core.count(c__5548__auto__);
var G__24665 = (0);
seq__24566 = G__24662;
chunk__24567 = G__24663;
count__24568 = G__24664;
i__24569 = G__24665;
continue;
} else {
var event = cljs.core.first(seq__24566__$1);
re_frame.router.dispatch(event);


var G__24666 = cljs.core.next(seq__24566__$1);
var G__24667 = null;
var G__24668 = (0);
var G__24669 = (0);
seq__24566 = G__24666;
chunk__24567 = G__24667;
count__24568 = G__24668;
i__24569 = G__24669;
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
var seq__24576 = cljs.core.seq(value);
var chunk__24577 = null;
var count__24578 = (0);
var i__24579 = (0);
while(true){
if((i__24579 < count__24578)){
var event = chunk__24577.cljs$core$IIndexed$_nth$arity$2(null,i__24579);
clear_event(event);


var G__24672 = seq__24576;
var G__24673 = chunk__24577;
var G__24674 = count__24578;
var G__24675 = (i__24579 + (1));
seq__24576 = G__24672;
chunk__24577 = G__24673;
count__24578 = G__24674;
i__24579 = G__24675;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24576);
if(temp__5825__auto__){
var seq__24576__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24576__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24576__$1);
var G__24676 = cljs.core.chunk_rest(seq__24576__$1);
var G__24677 = c__5548__auto__;
var G__24678 = cljs.core.count(c__5548__auto__);
var G__24679 = (0);
seq__24576 = G__24676;
chunk__24577 = G__24677;
count__24578 = G__24678;
i__24579 = G__24679;
continue;
} else {
var event = cljs.core.first(seq__24576__$1);
clear_event(event);


var G__24680 = cljs.core.next(seq__24576__$1);
var G__24681 = null;
var G__24682 = (0);
var G__24683 = (0);
seq__24576 = G__24680;
chunk__24577 = G__24681;
count__24578 = G__24682;
i__24579 = G__24683;
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
var _STAR_current_trace_STAR__orig_val__24583 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24584 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24584);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23736__auto___24684 = re_frame.interop.now();
var duration__23737__auto___24685 = (end__23736__auto___24684 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23737__auto___24685,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23736__auto___24684);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24583);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
