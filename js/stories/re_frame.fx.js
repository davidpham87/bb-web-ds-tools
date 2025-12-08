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
var _STAR_current_trace_STAR__orig_val__24453 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24454 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24454);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24614 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24614)){
var new_db_24615 = temp__5825__auto___24614;
var fexpr__24455_24616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24455_24616.cljs$core$IFn$_invoke$arity$1 ? fexpr__24455_24616.cljs$core$IFn$_invoke$arity$1(new_db_24615) : fexpr__24455_24616.call(null,new_db_24615));
} else {
}

var seq__24457 = cljs.core.seq(effects_without_db);
var chunk__24458 = null;
var count__24459 = (0);
var i__24460 = (0);
while(true){
if((i__24460 < count__24459)){
var vec__24482 = chunk__24458.cljs$core$IIndexed$_nth$arity$2(null,i__24460);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(1),null);
var temp__5823__auto___24617 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24617)){
var effect_fn_24618 = temp__5823__auto___24617;
(effect_fn_24618.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24618.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24618.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24619 = seq__24457;
var G__24620 = chunk__24458;
var G__24621 = count__24459;
var G__24622 = (i__24460 + (1));
seq__24457 = G__24619;
chunk__24458 = G__24620;
count__24459 = G__24621;
i__24460 = G__24622;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24457);
if(temp__5825__auto__){
var seq__24457__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24457__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24457__$1);
var G__24623 = cljs.core.chunk_rest(seq__24457__$1);
var G__24624 = c__5548__auto__;
var G__24625 = cljs.core.count(c__5548__auto__);
var G__24626 = (0);
seq__24457 = G__24623;
chunk__24458 = G__24624;
count__24459 = G__24625;
i__24460 = G__24626;
continue;
} else {
var vec__24489 = cljs.core.first(seq__24457__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(1),null);
var temp__5823__auto___24627 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24627)){
var effect_fn_24628 = temp__5823__auto___24627;
(effect_fn_24628.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24628.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24628.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24629 = cljs.core.next(seq__24457__$1);
var G__24630 = null;
var G__24631 = (0);
var G__24632 = (0);
seq__24457 = G__24629;
chunk__24458 = G__24630;
count__24459 = G__24631;
i__24460 = G__24632;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23846__auto___24633 = re_frame.interop.now();
var duration__23847__auto___24634 = (end__23846__auto___24633 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23847__auto___24634,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23846__auto___24633);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24453);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24635 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24635)){
var new_db_24636 = temp__5825__auto___24635;
var fexpr__24492_24637 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24492_24637.cljs$core$IFn$_invoke$arity$1 ? fexpr__24492_24637.cljs$core$IFn$_invoke$arity$1(new_db_24636) : fexpr__24492_24637.call(null,new_db_24636));
} else {
}

var seq__24493 = cljs.core.seq(effects_without_db);
var chunk__24494 = null;
var count__24495 = (0);
var i__24496 = (0);
while(true){
if((i__24496 < count__24495)){
var vec__24509 = chunk__24494.cljs$core$IIndexed$_nth$arity$2(null,i__24496);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(1),null);
var temp__5823__auto___24638 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24638)){
var effect_fn_24639 = temp__5823__auto___24638;
(effect_fn_24639.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24639.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24639.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24640 = seq__24493;
var G__24641 = chunk__24494;
var G__24642 = count__24495;
var G__24643 = (i__24496 + (1));
seq__24493 = G__24640;
chunk__24494 = G__24641;
count__24495 = G__24642;
i__24496 = G__24643;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24493);
if(temp__5825__auto__){
var seq__24493__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24493__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24493__$1);
var G__24644 = cljs.core.chunk_rest(seq__24493__$1);
var G__24645 = c__5548__auto__;
var G__24646 = cljs.core.count(c__5548__auto__);
var G__24647 = (0);
seq__24493 = G__24644;
chunk__24494 = G__24645;
count__24495 = G__24646;
i__24496 = G__24647;
continue;
} else {
var vec__24515 = cljs.core.first(seq__24493__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(1),null);
var temp__5823__auto___24648 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24648)){
var effect_fn_24649 = temp__5823__auto___24648;
(effect_fn_24649.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24649.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24649.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24650 = cljs.core.next(seq__24493__$1);
var G__24651 = null;
var G__24652 = (0);
var G__24653 = (0);
seq__24493 = G__24650;
chunk__24494 = G__24651;
count__24495 = G__24652;
i__24496 = G__24653;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24519){
var map__24520 = p__24519;
var map__24520__$1 = cljs.core.__destructure_map(map__24520);
var effect = map__24520__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24527 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24528 = null;
var count__24529 = (0);
var i__24530 = (0);
while(true){
if((i__24530 < count__24529)){
var effect = chunk__24528.cljs$core$IIndexed$_nth$arity$2(null,i__24530);
re_frame.fx.dispatch_later(effect);


var G__24655 = seq__24527;
var G__24656 = chunk__24528;
var G__24657 = count__24529;
var G__24658 = (i__24530 + (1));
seq__24527 = G__24655;
chunk__24528 = G__24656;
count__24529 = G__24657;
i__24530 = G__24658;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24527);
if(temp__5825__auto__){
var seq__24527__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24527__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24527__$1);
var G__24659 = cljs.core.chunk_rest(seq__24527__$1);
var G__24660 = c__5548__auto__;
var G__24661 = cljs.core.count(c__5548__auto__);
var G__24662 = (0);
seq__24527 = G__24659;
chunk__24528 = G__24660;
count__24529 = G__24661;
i__24530 = G__24662;
continue;
} else {
var effect = cljs.core.first(seq__24527__$1);
re_frame.fx.dispatch_later(effect);


var G__24663 = cljs.core.next(seq__24527__$1);
var G__24664 = null;
var G__24665 = (0);
var G__24666 = (0);
seq__24527 = G__24663;
chunk__24528 = G__24664;
count__24529 = G__24665;
i__24530 = G__24666;
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
var vec__24551 = chunk__24537.cljs$core$IIndexed$_nth$arity$2(null,i__24539);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24667 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24667)){
var effect_fn_24668 = temp__5823__auto___24667;
(effect_fn_24668.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24668.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24668.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24669 = seq__24536;
var G__24670 = chunk__24537;
var G__24671 = count__24538;
var G__24672 = (i__24539 + (1));
seq__24536 = G__24669;
chunk__24537 = G__24670;
count__24538 = G__24671;
i__24539 = G__24672;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24536);
if(temp__5825__auto__){
var seq__24536__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24536__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24536__$1);
var G__24673 = cljs.core.chunk_rest(seq__24536__$1);
var G__24674 = c__5548__auto__;
var G__24675 = cljs.core.count(c__5548__auto__);
var G__24676 = (0);
seq__24536 = G__24673;
chunk__24537 = G__24674;
count__24538 = G__24675;
i__24539 = G__24676;
continue;
} else {
var vec__24562 = cljs.core.first(seq__24536__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24562,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24562,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24677 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24677)){
var effect_fn_24678 = temp__5823__auto___24677;
(effect_fn_24678.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24678.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24678.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24679 = cljs.core.next(seq__24536__$1);
var G__24680 = null;
var G__24681 = (0);
var G__24682 = (0);
seq__24536 = G__24679;
chunk__24537 = G__24680;
count__24538 = G__24681;
i__24539 = G__24682;
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
var seq__24571 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24572 = null;
var count__24573 = (0);
var i__24574 = (0);
while(true){
if((i__24574 < count__24573)){
var event = chunk__24572.cljs$core$IIndexed$_nth$arity$2(null,i__24574);
re_frame.router.dispatch(event);


var G__24683 = seq__24571;
var G__24684 = chunk__24572;
var G__24685 = count__24573;
var G__24686 = (i__24574 + (1));
seq__24571 = G__24683;
chunk__24572 = G__24684;
count__24573 = G__24685;
i__24574 = G__24686;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24571);
if(temp__5825__auto__){
var seq__24571__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24571__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24571__$1);
var G__24687 = cljs.core.chunk_rest(seq__24571__$1);
var G__24688 = c__5548__auto__;
var G__24689 = cljs.core.count(c__5548__auto__);
var G__24690 = (0);
seq__24571 = G__24687;
chunk__24572 = G__24688;
count__24573 = G__24689;
i__24574 = G__24690;
continue;
} else {
var event = cljs.core.first(seq__24571__$1);
re_frame.router.dispatch(event);


var G__24691 = cljs.core.next(seq__24571__$1);
var G__24692 = null;
var G__24693 = (0);
var G__24694 = (0);
seq__24571 = G__24691;
chunk__24572 = G__24692;
count__24573 = G__24693;
i__24574 = G__24694;
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
var seq__24595 = cljs.core.seq(value);
var chunk__24596 = null;
var count__24597 = (0);
var i__24598 = (0);
while(true){
if((i__24598 < count__24597)){
var event = chunk__24596.cljs$core$IIndexed$_nth$arity$2(null,i__24598);
clear_event(event);


var G__24695 = seq__24595;
var G__24696 = chunk__24596;
var G__24697 = count__24597;
var G__24698 = (i__24598 + (1));
seq__24595 = G__24695;
chunk__24596 = G__24696;
count__24597 = G__24697;
i__24598 = G__24698;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24595);
if(temp__5825__auto__){
var seq__24595__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24595__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24595__$1);
var G__24699 = cljs.core.chunk_rest(seq__24595__$1);
var G__24700 = c__5548__auto__;
var G__24701 = cljs.core.count(c__5548__auto__);
var G__24702 = (0);
seq__24595 = G__24699;
chunk__24596 = G__24700;
count__24597 = G__24701;
i__24598 = G__24702;
continue;
} else {
var event = cljs.core.first(seq__24595__$1);
clear_event(event);


var G__24703 = cljs.core.next(seq__24595__$1);
var G__24704 = null;
var G__24705 = (0);
var G__24706 = (0);
seq__24595 = G__24703;
chunk__24596 = G__24704;
count__24597 = G__24705;
i__24598 = G__24706;
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
var _STAR_current_trace_STAR__orig_val__24608 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24609 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24609);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23846__auto___24707 = re_frame.interop.now();
var duration__23847__auto___24708 = (end__23846__auto___24707 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23847__auto___24708,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23846__auto___24707);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24608);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
