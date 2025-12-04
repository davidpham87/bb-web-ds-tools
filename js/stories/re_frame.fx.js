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
var _STAR_current_trace_STAR__orig_val__24322 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24323 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24323);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24523 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24523)){
var new_db_24524 = temp__5825__auto___24523;
var fexpr__24328_24525 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24328_24525.cljs$core$IFn$_invoke$arity$1 ? fexpr__24328_24525.cljs$core$IFn$_invoke$arity$1(new_db_24524) : fexpr__24328_24525.call(null,new_db_24524));
} else {
}

var seq__24329 = cljs.core.seq(effects_without_db);
var chunk__24330 = null;
var count__24331 = (0);
var i__24332 = (0);
while(true){
if((i__24332 < count__24331)){
var vec__24346 = chunk__24330.cljs$core$IIndexed$_nth$arity$2(null,i__24332);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24346,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24346,(1),null);
var temp__5823__auto___24527 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24527)){
var effect_fn_24528 = temp__5823__auto___24527;
(effect_fn_24528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24528.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24529 = seq__24329;
var G__24530 = chunk__24330;
var G__24531 = count__24331;
var G__24532 = (i__24332 + (1));
seq__24329 = G__24529;
chunk__24330 = G__24530;
count__24331 = G__24531;
i__24332 = G__24532;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24329);
if(temp__5825__auto__){
var seq__24329__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24329__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24329__$1);
var G__24534 = cljs.core.chunk_rest(seq__24329__$1);
var G__24535 = c__5548__auto__;
var G__24536 = cljs.core.count(c__5548__auto__);
var G__24537 = (0);
seq__24329 = G__24534;
chunk__24330 = G__24535;
count__24331 = G__24536;
i__24332 = G__24537;
continue;
} else {
var vec__24354 = cljs.core.first(seq__24329__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24354,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24354,(1),null);
var temp__5823__auto___24540 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24540)){
var effect_fn_24541 = temp__5823__auto___24540;
(effect_fn_24541.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24541.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24541.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24542 = cljs.core.next(seq__24329__$1);
var G__24543 = null;
var G__24544 = (0);
var G__24545 = (0);
seq__24329 = G__24542;
chunk__24330 = G__24543;
count__24331 = G__24544;
i__24332 = G__24545;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23702__auto___24546 = re_frame.interop.now();
var duration__23703__auto___24547 = (end__23702__auto___24546 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23703__auto___24547,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23702__auto___24546);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24322);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24548 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24548)){
var new_db_24549 = temp__5825__auto___24548;
var fexpr__24359_24550 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24359_24550.cljs$core$IFn$_invoke$arity$1 ? fexpr__24359_24550.cljs$core$IFn$_invoke$arity$1(new_db_24549) : fexpr__24359_24550.call(null,new_db_24549));
} else {
}

var seq__24364 = cljs.core.seq(effects_without_db);
var chunk__24365 = null;
var count__24366 = (0);
var i__24367 = (0);
while(true){
if((i__24367 < count__24366)){
var vec__24392 = chunk__24365.cljs$core$IIndexed$_nth$arity$2(null,i__24367);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,(1),null);
var temp__5823__auto___24551 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24551)){
var effect_fn_24552 = temp__5823__auto___24551;
(effect_fn_24552.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24552.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24552.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24553 = seq__24364;
var G__24554 = chunk__24365;
var G__24555 = count__24366;
var G__24556 = (i__24367 + (1));
seq__24364 = G__24553;
chunk__24365 = G__24554;
count__24366 = G__24555;
i__24367 = G__24556;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24364);
if(temp__5825__auto__){
var seq__24364__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24364__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24364__$1);
var G__24558 = cljs.core.chunk_rest(seq__24364__$1);
var G__24559 = c__5548__auto__;
var G__24560 = cljs.core.count(c__5548__auto__);
var G__24561 = (0);
seq__24364 = G__24558;
chunk__24365 = G__24559;
count__24366 = G__24560;
i__24367 = G__24561;
continue;
} else {
var vec__24398 = cljs.core.first(seq__24364__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24398,(1),null);
var temp__5823__auto___24562 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24562)){
var effect_fn_24563 = temp__5823__auto___24562;
(effect_fn_24563.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24563.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24563.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24564 = cljs.core.next(seq__24364__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__24364 = G__24564;
chunk__24365 = G__24565;
count__24366 = G__24566;
i__24367 = G__24567;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24403){
var map__24404 = p__24403;
var map__24404__$1 = cljs.core.__destructure_map(map__24404);
var effect = map__24404__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24405 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24406 = null;
var count__24407 = (0);
var i__24408 = (0);
while(true){
if((i__24408 < count__24407)){
var effect = chunk__24406.cljs$core$IIndexed$_nth$arity$2(null,i__24408);
re_frame.fx.dispatch_later(effect);


var G__24569 = seq__24405;
var G__24570 = chunk__24406;
var G__24571 = count__24407;
var G__24572 = (i__24408 + (1));
seq__24405 = G__24569;
chunk__24406 = G__24570;
count__24407 = G__24571;
i__24408 = G__24572;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24405);
if(temp__5825__auto__){
var seq__24405__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24405__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24405__$1);
var G__24573 = cljs.core.chunk_rest(seq__24405__$1);
var G__24574 = c__5548__auto__;
var G__24575 = cljs.core.count(c__5548__auto__);
var G__24576 = (0);
seq__24405 = G__24573;
chunk__24406 = G__24574;
count__24407 = G__24575;
i__24408 = G__24576;
continue;
} else {
var effect = cljs.core.first(seq__24405__$1);
re_frame.fx.dispatch_later(effect);


var G__24577 = cljs.core.next(seq__24405__$1);
var G__24578 = null;
var G__24579 = (0);
var G__24580 = (0);
seq__24405 = G__24577;
chunk__24406 = G__24578;
count__24407 = G__24579;
i__24408 = G__24580;
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
var seq__24420 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24421 = null;
var count__24422 = (0);
var i__24423 = (0);
while(true){
if((i__24423 < count__24422)){
var vec__24481 = chunk__24421.cljs$core$IIndexed$_nth$arity$2(null,i__24423);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24481,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24481,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24582 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24582)){
var effect_fn_24583 = temp__5823__auto___24582;
(effect_fn_24583.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24583.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24583.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24584 = seq__24420;
var G__24585 = chunk__24421;
var G__24586 = count__24422;
var G__24587 = (i__24423 + (1));
seq__24420 = G__24584;
chunk__24421 = G__24585;
count__24422 = G__24586;
i__24423 = G__24587;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24420);
if(temp__5825__auto__){
var seq__24420__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24420__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24420__$1);
var G__24589 = cljs.core.chunk_rest(seq__24420__$1);
var G__24590 = c__5548__auto__;
var G__24591 = cljs.core.count(c__5548__auto__);
var G__24592 = (0);
seq__24420 = G__24589;
chunk__24421 = G__24590;
count__24422 = G__24591;
i__24423 = G__24592;
continue;
} else {
var vec__24485 = cljs.core.first(seq__24420__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485,(1),null);
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


var G__24595 = cljs.core.next(seq__24420__$1);
var G__24596 = null;
var G__24597 = (0);
var G__24598 = (0);
seq__24420 = G__24595;
chunk__24421 = G__24596;
count__24422 = G__24597;
i__24423 = G__24598;
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
var seq__24496 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24497 = null;
var count__24498 = (0);
var i__24499 = (0);
while(true){
if((i__24499 < count__24498)){
var event = chunk__24497.cljs$core$IIndexed$_nth$arity$2(null,i__24499);
re_frame.router.dispatch(event);


var G__24599 = seq__24496;
var G__24600 = chunk__24497;
var G__24601 = count__24498;
var G__24602 = (i__24499 + (1));
seq__24496 = G__24599;
chunk__24497 = G__24600;
count__24498 = G__24601;
i__24499 = G__24602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24496);
if(temp__5825__auto__){
var seq__24496__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24496__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24496__$1);
var G__24603 = cljs.core.chunk_rest(seq__24496__$1);
var G__24604 = c__5548__auto__;
var G__24605 = cljs.core.count(c__5548__auto__);
var G__24606 = (0);
seq__24496 = G__24603;
chunk__24497 = G__24604;
count__24498 = G__24605;
i__24499 = G__24606;
continue;
} else {
var event = cljs.core.first(seq__24496__$1);
re_frame.router.dispatch(event);


var G__24607 = cljs.core.next(seq__24496__$1);
var G__24608 = null;
var G__24609 = (0);
var G__24610 = (0);
seq__24496 = G__24607;
chunk__24497 = G__24608;
count__24498 = G__24609;
i__24499 = G__24610;
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
var seq__24502 = cljs.core.seq(value);
var chunk__24503 = null;
var count__24504 = (0);
var i__24505 = (0);
while(true){
if((i__24505 < count__24504)){
var event = chunk__24503.cljs$core$IIndexed$_nth$arity$2(null,i__24505);
clear_event(event);


var G__24611 = seq__24502;
var G__24612 = chunk__24503;
var G__24613 = count__24504;
var G__24614 = (i__24505 + (1));
seq__24502 = G__24611;
chunk__24503 = G__24612;
count__24504 = G__24613;
i__24505 = G__24614;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24502);
if(temp__5825__auto__){
var seq__24502__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24502__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24502__$1);
var G__24616 = cljs.core.chunk_rest(seq__24502__$1);
var G__24617 = c__5548__auto__;
var G__24618 = cljs.core.count(c__5548__auto__);
var G__24619 = (0);
seq__24502 = G__24616;
chunk__24503 = G__24617;
count__24504 = G__24618;
i__24505 = G__24619;
continue;
} else {
var event = cljs.core.first(seq__24502__$1);
clear_event(event);


var G__24620 = cljs.core.next(seq__24502__$1);
var G__24621 = null;
var G__24622 = (0);
var G__24623 = (0);
seq__24502 = G__24620;
chunk__24503 = G__24621;
count__24504 = G__24622;
i__24505 = G__24623;
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
var _STAR_current_trace_STAR__orig_val__24513 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24514 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24514);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23702__auto___24625 = re_frame.interop.now();
var duration__23703__auto___24626 = (end__23702__auto___24625 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23703__auto___24626,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23702__auto___24625);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24513);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
