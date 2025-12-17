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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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
var _STAR_current_trace_STAR__orig_val__24397 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24398 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24398);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24526 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24526)){
var new_db_24527 = temp__5825__auto___24526;
var fexpr__24401_24528 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24401_24528.cljs$core$IFn$_invoke$arity$1 ? fexpr__24401_24528.cljs$core$IFn$_invoke$arity$1(new_db_24527) : fexpr__24401_24528.call(null,new_db_24527));
} else {
}

var seq__24403 = cljs.core.seq(effects_without_db);
var chunk__24404 = null;
var count__24405 = (0);
var i__24406 = (0);
while(true){
if((i__24406 < count__24405)){
var vec__24422 = chunk__24404.cljs$core$IIndexed$_nth$arity$2(null,i__24406);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24422,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24422,(1),null);
var temp__5823__auto___24529 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24529)){
var effect_fn_24530 = temp__5823__auto___24529;
(effect_fn_24530.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24530.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24530.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24534 = seq__24403;
var G__24535 = chunk__24404;
var G__24536 = count__24405;
var G__24537 = (i__24406 + (1));
seq__24403 = G__24534;
chunk__24404 = G__24535;
count__24405 = G__24536;
i__24406 = G__24537;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24403);
if(temp__5825__auto__){
var seq__24403__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24403__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24403__$1);
var G__24538 = cljs.core.chunk_rest(seq__24403__$1);
var G__24539 = c__5548__auto__;
var G__24540 = cljs.core.count(c__5548__auto__);
var G__24541 = (0);
seq__24403 = G__24538;
chunk__24404 = G__24539;
count__24405 = G__24540;
i__24406 = G__24541;
continue;
} else {
var vec__24431 = cljs.core.first(seq__24403__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24431,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24431,(1),null);
var temp__5823__auto___24542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24542)){
var effect_fn_24543 = temp__5823__auto___24542;
(effect_fn_24543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24544 = cljs.core.next(seq__24403__$1);
var G__24545 = null;
var G__24546 = (0);
var G__24547 = (0);
seq__24403 = G__24544;
chunk__24404 = G__24545;
count__24405 = G__24546;
i__24406 = G__24547;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23678__auto___24549 = re_frame.interop.now();
var duration__23679__auto___24550 = (end__23678__auto___24549 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23679__auto___24550,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23678__auto___24549);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24397);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24552 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24552)){
var new_db_24553 = temp__5825__auto___24552;
var fexpr__24435_24554 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24435_24554.cljs$core$IFn$_invoke$arity$1 ? fexpr__24435_24554.cljs$core$IFn$_invoke$arity$1(new_db_24553) : fexpr__24435_24554.call(null,new_db_24553));
} else {
}

var seq__24436 = cljs.core.seq(effects_without_db);
var chunk__24437 = null;
var count__24438 = (0);
var i__24439 = (0);
while(true){
if((i__24439 < count__24438)){
var vec__24453 = chunk__24437.cljs$core$IIndexed$_nth$arity$2(null,i__24439);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(1),null);
var temp__5823__auto___24555 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24555)){
var effect_fn_24556 = temp__5823__auto___24555;
(effect_fn_24556.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24556.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24556.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24557 = seq__24436;
var G__24558 = chunk__24437;
var G__24559 = count__24438;
var G__24560 = (i__24439 + (1));
seq__24436 = G__24557;
chunk__24437 = G__24558;
count__24438 = G__24559;
i__24439 = G__24560;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24436);
if(temp__5825__auto__){
var seq__24436__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24436__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24436__$1);
var G__24561 = cljs.core.chunk_rest(seq__24436__$1);
var G__24562 = c__5548__auto__;
var G__24563 = cljs.core.count(c__5548__auto__);
var G__24564 = (0);
seq__24436 = G__24561;
chunk__24437 = G__24562;
count__24438 = G__24563;
i__24439 = G__24564;
continue;
} else {
var vec__24456 = cljs.core.first(seq__24436__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24456,(1),null);
var temp__5823__auto___24565 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24565)){
var effect_fn_24566 = temp__5823__auto___24565;
(effect_fn_24566.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24566.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24566.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24567 = cljs.core.next(seq__24436__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__24436 = G__24567;
chunk__24437 = G__24568;
count__24438 = G__24569;
i__24439 = G__24570;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24461){
var map__24462 = p__24461;
var map__24462__$1 = cljs.core.__destructure_map(map__24462);
var effect = map__24462__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24462__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24462__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24481 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24482 = null;
var count__24483 = (0);
var i__24484 = (0);
while(true){
if((i__24484 < count__24483)){
var effect = chunk__24482.cljs$core$IIndexed$_nth$arity$2(null,i__24484);
re_frame.fx.dispatch_later(effect);


var G__24571 = seq__24481;
var G__24572 = chunk__24482;
var G__24573 = count__24483;
var G__24574 = (i__24484 + (1));
seq__24481 = G__24571;
chunk__24482 = G__24572;
count__24483 = G__24573;
i__24484 = G__24574;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24481);
if(temp__5825__auto__){
var seq__24481__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24481__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24481__$1);
var G__24575 = cljs.core.chunk_rest(seq__24481__$1);
var G__24576 = c__5548__auto__;
var G__24577 = cljs.core.count(c__5548__auto__);
var G__24578 = (0);
seq__24481 = G__24575;
chunk__24482 = G__24576;
count__24483 = G__24577;
i__24484 = G__24578;
continue;
} else {
var effect = cljs.core.first(seq__24481__$1);
re_frame.fx.dispatch_later(effect);


var G__24579 = cljs.core.next(seq__24481__$1);
var G__24580 = null;
var G__24581 = (0);
var G__24582 = (0);
seq__24481 = G__24579;
chunk__24482 = G__24580;
count__24483 = G__24581;
i__24484 = G__24582;
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
var seq__24486 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24487 = null;
var count__24488 = (0);
var i__24489 = (0);
while(true){
if((i__24489 < count__24488)){
var vec__24503 = chunk__24487.cljs$core$IIndexed$_nth$arity$2(null,i__24489);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24503,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24583 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24583)){
var effect_fn_24584 = temp__5823__auto___24583;
(effect_fn_24584.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24584.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24584.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24585 = seq__24486;
var G__24586 = chunk__24487;
var G__24587 = count__24488;
var G__24588 = (i__24489 + (1));
seq__24486 = G__24585;
chunk__24487 = G__24586;
count__24488 = G__24587;
i__24489 = G__24588;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24486);
if(temp__5825__auto__){
var seq__24486__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24486__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24486__$1);
var G__24589 = cljs.core.chunk_rest(seq__24486__$1);
var G__24590 = c__5548__auto__;
var G__24591 = cljs.core.count(c__5548__auto__);
var G__24592 = (0);
seq__24486 = G__24589;
chunk__24487 = G__24590;
count__24488 = G__24591;
i__24489 = G__24592;
continue;
} else {
var vec__24506 = cljs.core.first(seq__24486__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24506,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24593 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24593)){
var effect_fn_24594 = temp__5823__auto___24593;
(effect_fn_24594.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24594.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24594.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24596 = cljs.core.next(seq__24486__$1);
var G__24597 = null;
var G__24598 = (0);
var G__24599 = (0);
seq__24486 = G__24596;
chunk__24487 = G__24597;
count__24488 = G__24598;
i__24489 = G__24599;
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
var seq__24509 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24510 = null;
var count__24511 = (0);
var i__24512 = (0);
while(true){
if((i__24512 < count__24511)){
var event = chunk__24510.cljs$core$IIndexed$_nth$arity$2(null,i__24512);
re_frame.router.dispatch(event);


var G__24601 = seq__24509;
var G__24602 = chunk__24510;
var G__24603 = count__24511;
var G__24604 = (i__24512 + (1));
seq__24509 = G__24601;
chunk__24510 = G__24602;
count__24511 = G__24603;
i__24512 = G__24604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24509);
if(temp__5825__auto__){
var seq__24509__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24509__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24509__$1);
var G__24606 = cljs.core.chunk_rest(seq__24509__$1);
var G__24607 = c__5548__auto__;
var G__24608 = cljs.core.count(c__5548__auto__);
var G__24609 = (0);
seq__24509 = G__24606;
chunk__24510 = G__24607;
count__24511 = G__24608;
i__24512 = G__24609;
continue;
} else {
var event = cljs.core.first(seq__24509__$1);
re_frame.router.dispatch(event);


var G__24610 = cljs.core.next(seq__24509__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24509 = G__24610;
chunk__24510 = G__24611;
count__24511 = G__24612;
i__24512 = G__24613;
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
var seq__24515 = cljs.core.seq(value);
var chunk__24516 = null;
var count__24517 = (0);
var i__24518 = (0);
while(true){
if((i__24518 < count__24517)){
var event = chunk__24516.cljs$core$IIndexed$_nth$arity$2(null,i__24518);
clear_event(event);


var G__24615 = seq__24515;
var G__24616 = chunk__24516;
var G__24617 = count__24517;
var G__24618 = (i__24518 + (1));
seq__24515 = G__24615;
chunk__24516 = G__24616;
count__24517 = G__24617;
i__24518 = G__24618;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24515);
if(temp__5825__auto__){
var seq__24515__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24515__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24515__$1);
var G__24620 = cljs.core.chunk_rest(seq__24515__$1);
var G__24621 = c__5548__auto__;
var G__24622 = cljs.core.count(c__5548__auto__);
var G__24623 = (0);
seq__24515 = G__24620;
chunk__24516 = G__24621;
count__24517 = G__24622;
i__24518 = G__24623;
continue;
} else {
var event = cljs.core.first(seq__24515__$1);
clear_event(event);


var G__24624 = cljs.core.next(seq__24515__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24515 = G__24624;
chunk__24516 = G__24625;
count__24517 = G__24626;
i__24518 = G__24627;
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
var _STAR_current_trace_STAR__orig_val__24520 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24521 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24521);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23678__auto___24631 = re_frame.interop.now();
var duration__23679__auto___24632 = (end__23678__auto___24631 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23679__auto___24632,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23678__auto___24631);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24520);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
