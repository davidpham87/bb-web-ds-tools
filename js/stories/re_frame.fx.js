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
var _STAR_current_trace_STAR__orig_val__24475 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24476 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24476);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24583 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24583)){
var new_db_24584 = temp__5825__auto___24583;
var fexpr__24478_24585 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24478_24585.cljs$core$IFn$_invoke$arity$1 ? fexpr__24478_24585.cljs$core$IFn$_invoke$arity$1(new_db_24584) : fexpr__24478_24585.call(null,new_db_24584));
} else {
}

var seq__24479 = cljs.core.seq(effects_without_db);
var chunk__24480 = null;
var count__24481 = (0);
var i__24482 = (0);
while(true){
if((i__24482 < count__24481)){
var vec__24496 = chunk__24480.cljs$core$IIndexed$_nth$arity$2(null,i__24482);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(1),null);
var temp__5823__auto___24586 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24586)){
var effect_fn_24587 = temp__5823__auto___24586;
(effect_fn_24587.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24587.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24587.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24588 = seq__24479;
var G__24589 = chunk__24480;
var G__24590 = count__24481;
var G__24591 = (i__24482 + (1));
seq__24479 = G__24588;
chunk__24480 = G__24589;
count__24481 = G__24590;
i__24482 = G__24591;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24479);
if(temp__5825__auto__){
var seq__24479__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24479__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24479__$1);
var G__24592 = cljs.core.chunk_rest(seq__24479__$1);
var G__24593 = c__5548__auto__;
var G__24594 = cljs.core.count(c__5548__auto__);
var G__24595 = (0);
seq__24479 = G__24592;
chunk__24480 = G__24593;
count__24481 = G__24594;
i__24482 = G__24595;
continue;
} else {
var vec__24511 = cljs.core.first(seq__24479__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(1),null);
var temp__5823__auto___24596 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24596)){
var effect_fn_24597 = temp__5823__auto___24596;
(effect_fn_24597.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24597.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24597.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24598 = cljs.core.next(seq__24479__$1);
var G__24599 = null;
var G__24600 = (0);
var G__24601 = (0);
seq__24479 = G__24598;
chunk__24480 = G__24599;
count__24481 = G__24600;
i__24482 = G__24601;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23878__auto___24602 = re_frame.interop.now();
var duration__23879__auto___24603 = (end__23878__auto___24602 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23879__auto___24603,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23878__auto___24602);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24475);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24604 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24604)){
var new_db_24605 = temp__5825__auto___24604;
var fexpr__24514_24606 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24514_24606.cljs$core$IFn$_invoke$arity$1 ? fexpr__24514_24606.cljs$core$IFn$_invoke$arity$1(new_db_24605) : fexpr__24514_24606.call(null,new_db_24605));
} else {
}

var seq__24515 = cljs.core.seq(effects_without_db);
var chunk__24516 = null;
var count__24517 = (0);
var i__24518 = (0);
while(true){
if((i__24518 < count__24517)){
var vec__24529 = chunk__24516.cljs$core$IIndexed$_nth$arity$2(null,i__24518);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(1),null);
var temp__5823__auto___24607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24607)){
var effect_fn_24608 = temp__5823__auto___24607;
(effect_fn_24608.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24608.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24608.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24609 = seq__24515;
var G__24610 = chunk__24516;
var G__24611 = count__24517;
var G__24612 = (i__24518 + (1));
seq__24515 = G__24609;
chunk__24516 = G__24610;
count__24517 = G__24611;
i__24518 = G__24612;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24515);
if(temp__5825__auto__){
var seq__24515__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24515__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24515__$1);
var G__24613 = cljs.core.chunk_rest(seq__24515__$1);
var G__24614 = c__5548__auto__;
var G__24615 = cljs.core.count(c__5548__auto__);
var G__24616 = (0);
seq__24515 = G__24613;
chunk__24516 = G__24614;
count__24517 = G__24615;
i__24518 = G__24616;
continue;
} else {
var vec__24532 = cljs.core.first(seq__24515__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24532,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24532,(1),null);
var temp__5823__auto___24617 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24617)){
var effect_fn_24618 = temp__5823__auto___24617;
(effect_fn_24618.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24618.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24618.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24619 = cljs.core.next(seq__24515__$1);
var G__24620 = null;
var G__24621 = (0);
var G__24622 = (0);
seq__24515 = G__24619;
chunk__24516 = G__24620;
count__24517 = G__24621;
i__24518 = G__24622;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24537){
var map__24538 = p__24537;
var map__24538__$1 = cljs.core.__destructure_map(map__24538);
var effect = map__24538__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24538__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24538__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24540 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24541 = null;
var count__24542 = (0);
var i__24543 = (0);
while(true){
if((i__24543 < count__24542)){
var effect = chunk__24541.cljs$core$IIndexed$_nth$arity$2(null,i__24543);
re_frame.fx.dispatch_later(effect);


var G__24625 = seq__24540;
var G__24626 = chunk__24541;
var G__24627 = count__24542;
var G__24628 = (i__24543 + (1));
seq__24540 = G__24625;
chunk__24541 = G__24626;
count__24542 = G__24627;
i__24543 = G__24628;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24540);
if(temp__5825__auto__){
var seq__24540__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24540__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24540__$1);
var G__24630 = cljs.core.chunk_rest(seq__24540__$1);
var G__24631 = c__5548__auto__;
var G__24632 = cljs.core.count(c__5548__auto__);
var G__24633 = (0);
seq__24540 = G__24630;
chunk__24541 = G__24631;
count__24542 = G__24632;
i__24543 = G__24633;
continue;
} else {
var effect = cljs.core.first(seq__24540__$1);
re_frame.fx.dispatch_later(effect);


var G__24634 = cljs.core.next(seq__24540__$1);
var G__24635 = null;
var G__24636 = (0);
var G__24637 = (0);
seq__24540 = G__24634;
chunk__24541 = G__24635;
count__24542 = G__24636;
i__24543 = G__24637;
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

var temp__5823__auto___24639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24639)){
var effect_fn_24640 = temp__5823__auto___24639;
(effect_fn_24640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24640.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24641 = seq__24547;
var G__24642 = chunk__24548;
var G__24643 = count__24549;
var G__24644 = (i__24550 + (1));
seq__24547 = G__24641;
chunk__24548 = G__24642;
count__24549 = G__24643;
i__24550 = G__24644;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24547);
if(temp__5825__auto__){
var seq__24547__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24547__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24547__$1);
var G__24645 = cljs.core.chunk_rest(seq__24547__$1);
var G__24646 = c__5548__auto__;
var G__24647 = cljs.core.count(c__5548__auto__);
var G__24648 = (0);
seq__24547 = G__24645;
chunk__24548 = G__24646;
count__24549 = G__24647;
i__24550 = G__24648;
continue;
} else {
var vec__24560 = cljs.core.first(seq__24547__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24560,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24649 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24649)){
var effect_fn_24650 = temp__5823__auto___24649;
(effect_fn_24650.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24650.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24650.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24651 = cljs.core.next(seq__24547__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24547 = G__24651;
chunk__24548 = G__24652;
count__24549 = G__24653;
i__24550 = G__24654;
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


var G__24657 = seq__24563;
var G__24658 = chunk__24564;
var G__24659 = count__24565;
var G__24660 = (i__24566 + (1));
seq__24563 = G__24657;
chunk__24564 = G__24658;
count__24565 = G__24659;
i__24566 = G__24660;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24563);
if(temp__5825__auto__){
var seq__24563__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24563__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24563__$1);
var G__24661 = cljs.core.chunk_rest(seq__24563__$1);
var G__24662 = c__5548__auto__;
var G__24663 = cljs.core.count(c__5548__auto__);
var G__24664 = (0);
seq__24563 = G__24661;
chunk__24564 = G__24662;
count__24565 = G__24663;
i__24566 = G__24664;
continue;
} else {
var event = cljs.core.first(seq__24563__$1);
re_frame.router.dispatch(event);


var G__24665 = cljs.core.next(seq__24563__$1);
var G__24666 = null;
var G__24667 = (0);
var G__24668 = (0);
seq__24563 = G__24665;
chunk__24564 = G__24666;
count__24565 = G__24667;
i__24566 = G__24668;
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
var seq__24573 = cljs.core.seq(value);
var chunk__24574 = null;
var count__24575 = (0);
var i__24576 = (0);
while(true){
if((i__24576 < count__24575)){
var event = chunk__24574.cljs$core$IIndexed$_nth$arity$2(null,i__24576);
clear_event(event);


var G__24669 = seq__24573;
var G__24670 = chunk__24574;
var G__24671 = count__24575;
var G__24672 = (i__24576 + (1));
seq__24573 = G__24669;
chunk__24574 = G__24670;
count__24575 = G__24671;
i__24576 = G__24672;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24573);
if(temp__5825__auto__){
var seq__24573__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24573__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24573__$1);
var G__24673 = cljs.core.chunk_rest(seq__24573__$1);
var G__24674 = c__5548__auto__;
var G__24675 = cljs.core.count(c__5548__auto__);
var G__24676 = (0);
seq__24573 = G__24673;
chunk__24574 = G__24674;
count__24575 = G__24675;
i__24576 = G__24676;
continue;
} else {
var event = cljs.core.first(seq__24573__$1);
clear_event(event);


var G__24677 = cljs.core.next(seq__24573__$1);
var G__24678 = null;
var G__24679 = (0);
var G__24680 = (0);
seq__24573 = G__24677;
chunk__24574 = G__24678;
count__24575 = G__24679;
i__24576 = G__24680;
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
var _STAR_current_trace_STAR__temp_val__24579 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24579);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23878__auto___24681 = re_frame.interop.now();
var duration__23879__auto___24682 = (end__23878__auto___24681 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23879__auto___24682,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23878__auto___24681);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24577);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
