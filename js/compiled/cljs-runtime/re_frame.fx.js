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
var _STAR_current_trace_STAR__orig_val__24396 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24397 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24397);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24520 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24520)){
var new_db_24521 = temp__5825__auto___24520;
var fexpr__24398_24522 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24398_24522.cljs$core$IFn$_invoke$arity$1 ? fexpr__24398_24522.cljs$core$IFn$_invoke$arity$1(new_db_24521) : fexpr__24398_24522.call(null,new_db_24521));
} else {
}

var seq__24399 = cljs.core.seq(effects_without_db);
var chunk__24400 = null;
var count__24401 = (0);
var i__24402 = (0);
while(true){
if((i__24402 < count__24401)){
var vec__24423 = chunk__24400.cljs$core$IIndexed$_nth$arity$2(null,i__24402);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423,(1),null);
var temp__5823__auto___24523 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24523)){
var effect_fn_24524 = temp__5823__auto___24523;
(effect_fn_24524.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24524.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24524.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24525 = seq__24399;
var G__24526 = chunk__24400;
var G__24527 = count__24401;
var G__24528 = (i__24402 + (1));
seq__24399 = G__24525;
chunk__24400 = G__24526;
count__24401 = G__24527;
i__24402 = G__24528;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24399);
if(temp__5825__auto__){
var seq__24399__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24399__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24399__$1);
var G__24529 = cljs.core.chunk_rest(seq__24399__$1);
var G__24530 = c__5548__auto__;
var G__24531 = cljs.core.count(c__5548__auto__);
var G__24532 = (0);
seq__24399 = G__24529;
chunk__24400 = G__24530;
count__24401 = G__24531;
i__24402 = G__24532;
continue;
} else {
var vec__24428 = cljs.core.first(seq__24399__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(1),null);
var temp__5823__auto___24533 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24533)){
var effect_fn_24534 = temp__5823__auto___24533;
(effect_fn_24534.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24534.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24534.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24535 = cljs.core.next(seq__24399__$1);
var G__24536 = null;
var G__24537 = (0);
var G__24538 = (0);
seq__24399 = G__24535;
chunk__24400 = G__24536;
count__24401 = G__24537;
i__24402 = G__24538;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23726__auto___24540 = re_frame.interop.now();
var duration__23727__auto___24541 = (end__23726__auto___24540 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23727__auto___24541,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23726__auto___24540);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24396);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24542 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24542)){
var new_db_24543 = temp__5825__auto___24542;
var fexpr__24433_24544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24433_24544.cljs$core$IFn$_invoke$arity$1 ? fexpr__24433_24544.cljs$core$IFn$_invoke$arity$1(new_db_24543) : fexpr__24433_24544.call(null,new_db_24543));
} else {
}

var seq__24434 = cljs.core.seq(effects_without_db);
var chunk__24435 = null;
var count__24436 = (0);
var i__24437 = (0);
while(true){
if((i__24437 < count__24436)){
var vec__24450 = chunk__24435.cljs$core$IIndexed$_nth$arity$2(null,i__24437);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24450,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24450,(1),null);
var temp__5823__auto___24545 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24545)){
var effect_fn_24546 = temp__5823__auto___24545;
(effect_fn_24546.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24546.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24546.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24548 = seq__24434;
var G__24549 = chunk__24435;
var G__24550 = count__24436;
var G__24551 = (i__24437 + (1));
seq__24434 = G__24548;
chunk__24435 = G__24549;
count__24436 = G__24550;
i__24437 = G__24551;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24434);
if(temp__5825__auto__){
var seq__24434__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24434__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24434__$1);
var G__24552 = cljs.core.chunk_rest(seq__24434__$1);
var G__24553 = c__5548__auto__;
var G__24554 = cljs.core.count(c__5548__auto__);
var G__24555 = (0);
seq__24434 = G__24552;
chunk__24435 = G__24553;
count__24436 = G__24554;
i__24437 = G__24555;
continue;
} else {
var vec__24455 = cljs.core.first(seq__24434__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(1),null);
var temp__5823__auto___24556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24556)){
var effect_fn_24557 = temp__5823__auto___24556;
(effect_fn_24557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24558 = cljs.core.next(seq__24434__$1);
var G__24559 = null;
var G__24560 = (0);
var G__24561 = (0);
seq__24434 = G__24558;
chunk__24435 = G__24559;
count__24436 = G__24560;
i__24437 = G__24561;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24464){
var map__24465 = p__24464;
var map__24465__$1 = cljs.core.__destructure_map(map__24465);
var effect = map__24465__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24465__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24465__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24466 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24467 = null;
var count__24468 = (0);
var i__24469 = (0);
while(true){
if((i__24469 < count__24468)){
var effect = chunk__24467.cljs$core$IIndexed$_nth$arity$2(null,i__24469);
re_frame.fx.dispatch_later(effect);


var G__24564 = seq__24466;
var G__24565 = chunk__24467;
var G__24566 = count__24468;
var G__24567 = (i__24469 + (1));
seq__24466 = G__24564;
chunk__24467 = G__24565;
count__24468 = G__24566;
i__24469 = G__24567;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24466);
if(temp__5825__auto__){
var seq__24466__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24466__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24466__$1);
var G__24568 = cljs.core.chunk_rest(seq__24466__$1);
var G__24569 = c__5548__auto__;
var G__24570 = cljs.core.count(c__5548__auto__);
var G__24571 = (0);
seq__24466 = G__24568;
chunk__24467 = G__24569;
count__24468 = G__24570;
i__24469 = G__24571;
continue;
} else {
var effect = cljs.core.first(seq__24466__$1);
re_frame.fx.dispatch_later(effect);


var G__24572 = cljs.core.next(seq__24466__$1);
var G__24573 = null;
var G__24574 = (0);
var G__24575 = (0);
seq__24466 = G__24572;
chunk__24467 = G__24573;
count__24468 = G__24574;
i__24469 = G__24575;
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
var seq__24485 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24486 = null;
var count__24487 = (0);
var i__24488 = (0);
while(true){
if((i__24488 < count__24487)){
var vec__24495 = chunk__24486.cljs$core$IIndexed$_nth$arity$2(null,i__24488);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24576)){
var effect_fn_24577 = temp__5823__auto___24576;
(effect_fn_24577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24578 = seq__24485;
var G__24579 = chunk__24486;
var G__24580 = count__24487;
var G__24581 = (i__24488 + (1));
seq__24485 = G__24578;
chunk__24486 = G__24579;
count__24487 = G__24580;
i__24488 = G__24581;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24485);
if(temp__5825__auto__){
var seq__24485__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24485__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24485__$1);
var G__24582 = cljs.core.chunk_rest(seq__24485__$1);
var G__24583 = c__5548__auto__;
var G__24584 = cljs.core.count(c__5548__auto__);
var G__24585 = (0);
seq__24485 = G__24582;
chunk__24486 = G__24583;
count__24487 = G__24584;
i__24488 = G__24585;
continue;
} else {
var vec__24498 = cljs.core.first(seq__24485__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24498,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24498,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24587 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24587)){
var effect_fn_24588 = temp__5823__auto___24587;
(effect_fn_24588.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24588.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24588.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24589 = cljs.core.next(seq__24485__$1);
var G__24590 = null;
var G__24591 = (0);
var G__24592 = (0);
seq__24485 = G__24589;
chunk__24486 = G__24590;
count__24487 = G__24591;
i__24488 = G__24592;
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
var seq__24505 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24506 = null;
var count__24507 = (0);
var i__24508 = (0);
while(true){
if((i__24508 < count__24507)){
var event = chunk__24506.cljs$core$IIndexed$_nth$arity$2(null,i__24508);
re_frame.router.dispatch(event);


var G__24602 = seq__24505;
var G__24603 = chunk__24506;
var G__24604 = count__24507;
var G__24605 = (i__24508 + (1));
seq__24505 = G__24602;
chunk__24506 = G__24603;
count__24507 = G__24604;
i__24508 = G__24605;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24505);
if(temp__5825__auto__){
var seq__24505__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24505__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24505__$1);
var G__24608 = cljs.core.chunk_rest(seq__24505__$1);
var G__24609 = c__5548__auto__;
var G__24610 = cljs.core.count(c__5548__auto__);
var G__24611 = (0);
seq__24505 = G__24608;
chunk__24506 = G__24609;
count__24507 = G__24610;
i__24508 = G__24611;
continue;
} else {
var event = cljs.core.first(seq__24505__$1);
re_frame.router.dispatch(event);


var G__24612 = cljs.core.next(seq__24505__$1);
var G__24613 = null;
var G__24614 = (0);
var G__24615 = (0);
seq__24505 = G__24612;
chunk__24506 = G__24613;
count__24507 = G__24614;
i__24508 = G__24615;
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
var seq__24513 = cljs.core.seq(value);
var chunk__24514 = null;
var count__24515 = (0);
var i__24516 = (0);
while(true){
if((i__24516 < count__24515)){
var event = chunk__24514.cljs$core$IIndexed$_nth$arity$2(null,i__24516);
clear_event(event);


var G__24616 = seq__24513;
var G__24617 = chunk__24514;
var G__24618 = count__24515;
var G__24619 = (i__24516 + (1));
seq__24513 = G__24616;
chunk__24514 = G__24617;
count__24515 = G__24618;
i__24516 = G__24619;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24513);
if(temp__5825__auto__){
var seq__24513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24513__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24513__$1);
var G__24620 = cljs.core.chunk_rest(seq__24513__$1);
var G__24621 = c__5548__auto__;
var G__24622 = cljs.core.count(c__5548__auto__);
var G__24623 = (0);
seq__24513 = G__24620;
chunk__24514 = G__24621;
count__24515 = G__24622;
i__24516 = G__24623;
continue;
} else {
var event = cljs.core.first(seq__24513__$1);
clear_event(event);


var G__24624 = cljs.core.next(seq__24513__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24513 = G__24624;
chunk__24514 = G__24625;
count__24515 = G__24626;
i__24516 = G__24627;
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
var _STAR_current_trace_STAR__orig_val__24518 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24519 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24519);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23726__auto___24633 = re_frame.interop.now();
var duration__23727__auto___24634 = (end__23726__auto___24633 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23727__auto___24634,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23726__auto___24633);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24518);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
