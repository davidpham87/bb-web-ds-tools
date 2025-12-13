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
var _STAR_current_trace_STAR__orig_val__26486 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26487 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26487);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26592 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26592)){
var new_db_26593 = temp__5825__auto___26592;
var fexpr__26488_26594 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26488_26594.cljs$core$IFn$_invoke$arity$1 ? fexpr__26488_26594.cljs$core$IFn$_invoke$arity$1(new_db_26593) : fexpr__26488_26594.call(null,new_db_26593));
} else {
}

var seq__26489 = cljs.core.seq(effects_without_db);
var chunk__26490 = null;
var count__26491 = (0);
var i__26492 = (0);
while(true){
if((i__26492 < count__26491)){
var vec__26504 = chunk__26490.cljs$core$IIndexed$_nth$arity$2(null,i__26492);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(1),null);
var temp__5823__auto___26595 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26595)){
var effect_fn_26596 = temp__5823__auto___26595;
(effect_fn_26596.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26596.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26596.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26597 = seq__26489;
var G__26598 = chunk__26490;
var G__26599 = count__26491;
var G__26600 = (i__26492 + (1));
seq__26489 = G__26597;
chunk__26490 = G__26598;
count__26491 = G__26599;
i__26492 = G__26600;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26489);
if(temp__5825__auto__){
var seq__26489__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26489__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26489__$1);
var G__26601 = cljs.core.chunk_rest(seq__26489__$1);
var G__26602 = c__5548__auto__;
var G__26603 = cljs.core.count(c__5548__auto__);
var G__26604 = (0);
seq__26489 = G__26601;
chunk__26490 = G__26602;
count__26491 = G__26603;
i__26492 = G__26604;
continue;
} else {
var vec__26508 = cljs.core.first(seq__26489__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26508,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26508,(1),null);
var temp__5823__auto___26605 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26605)){
var effect_fn_26606 = temp__5823__auto___26605;
(effect_fn_26606.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26606.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26606.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26607 = cljs.core.next(seq__26489__$1);
var G__26608 = null;
var G__26609 = (0);
var G__26610 = (0);
seq__26489 = G__26607;
chunk__26490 = G__26608;
count__26491 = G__26609;
i__26492 = G__26610;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26611 = re_frame.interop.now();
var duration__26177__auto___26612 = (end__26176__auto___26611 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26612,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26611);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26486);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26613 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26613)){
var new_db_26614 = temp__5825__auto___26613;
var fexpr__26511_26615 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26511_26615.cljs$core$IFn$_invoke$arity$1 ? fexpr__26511_26615.cljs$core$IFn$_invoke$arity$1(new_db_26614) : fexpr__26511_26615.call(null,new_db_26614));
} else {
}

var seq__26512 = cljs.core.seq(effects_without_db);
var chunk__26513 = null;
var count__26514 = (0);
var i__26515 = (0);
while(true){
if((i__26515 < count__26514)){
var vec__26525 = chunk__26513.cljs$core$IIndexed$_nth$arity$2(null,i__26515);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(1),null);
var temp__5823__auto___26616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26616)){
var effect_fn_26617 = temp__5823__auto___26616;
(effect_fn_26617.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26617.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26617.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26618 = seq__26512;
var G__26619 = chunk__26513;
var G__26620 = count__26514;
var G__26621 = (i__26515 + (1));
seq__26512 = G__26618;
chunk__26513 = G__26619;
count__26514 = G__26620;
i__26515 = G__26621;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26512);
if(temp__5825__auto__){
var seq__26512__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26512__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26512__$1);
var G__26622 = cljs.core.chunk_rest(seq__26512__$1);
var G__26623 = c__5548__auto__;
var G__26624 = cljs.core.count(c__5548__auto__);
var G__26625 = (0);
seq__26512 = G__26622;
chunk__26513 = G__26623;
count__26514 = G__26624;
i__26515 = G__26625;
continue;
} else {
var vec__26529 = cljs.core.first(seq__26512__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26529,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26529,(1),null);
var temp__5823__auto___26626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26626)){
var effect_fn_26627 = temp__5823__auto___26626;
(effect_fn_26627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26627.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26628 = cljs.core.next(seq__26512__$1);
var G__26629 = null;
var G__26630 = (0);
var G__26631 = (0);
seq__26512 = G__26628;
chunk__26513 = G__26629;
count__26514 = G__26630;
i__26515 = G__26631;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26544){
var map__26545 = p__26544;
var map__26545__$1 = cljs.core.__destructure_map(map__26545);
var effect = map__26545__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26545__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26545__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26546 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26547 = null;
var count__26548 = (0);
var i__26549 = (0);
while(true){
if((i__26549 < count__26548)){
var effect = chunk__26547.cljs$core$IIndexed$_nth$arity$2(null,i__26549);
re_frame.fx.dispatch_later(effect);


var G__26632 = seq__26546;
var G__26633 = chunk__26547;
var G__26634 = count__26548;
var G__26635 = (i__26549 + (1));
seq__26546 = G__26632;
chunk__26547 = G__26633;
count__26548 = G__26634;
i__26549 = G__26635;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26546);
if(temp__5825__auto__){
var seq__26546__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26546__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26546__$1);
var G__26636 = cljs.core.chunk_rest(seq__26546__$1);
var G__26637 = c__5548__auto__;
var G__26638 = cljs.core.count(c__5548__auto__);
var G__26639 = (0);
seq__26546 = G__26636;
chunk__26547 = G__26637;
count__26548 = G__26638;
i__26549 = G__26639;
continue;
} else {
var effect = cljs.core.first(seq__26546__$1);
re_frame.fx.dispatch_later(effect);


var G__26640 = cljs.core.next(seq__26546__$1);
var G__26641 = null;
var G__26642 = (0);
var G__26643 = (0);
seq__26546 = G__26640;
chunk__26547 = G__26641;
count__26548 = G__26642;
i__26549 = G__26643;
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
var seq__26561 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26562 = null;
var count__26563 = (0);
var i__26564 = (0);
while(true){
if((i__26564 < count__26563)){
var vec__26573 = chunk__26562.cljs$core$IIndexed$_nth$arity$2(null,i__26564);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26573,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26573,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26644)){
var effect_fn_26645 = temp__5823__auto___26644;
(effect_fn_26645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26646 = seq__26561;
var G__26647 = chunk__26562;
var G__26648 = count__26563;
var G__26649 = (i__26564 + (1));
seq__26561 = G__26646;
chunk__26562 = G__26647;
count__26563 = G__26648;
i__26564 = G__26649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26561);
if(temp__5825__auto__){
var seq__26561__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26561__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26561__$1);
var G__26650 = cljs.core.chunk_rest(seq__26561__$1);
var G__26651 = c__5548__auto__;
var G__26652 = cljs.core.count(c__5548__auto__);
var G__26653 = (0);
seq__26561 = G__26650;
chunk__26562 = G__26651;
count__26563 = G__26652;
i__26564 = G__26653;
continue;
} else {
var vec__26576 = cljs.core.first(seq__26561__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26654 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26654)){
var effect_fn_26655 = temp__5823__auto___26654;
(effect_fn_26655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26655.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26657 = cljs.core.next(seq__26561__$1);
var G__26658 = null;
var G__26659 = (0);
var G__26660 = (0);
seq__26561 = G__26657;
chunk__26562 = G__26658;
count__26563 = G__26659;
i__26564 = G__26660;
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
var seq__26579 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26580 = null;
var count__26581 = (0);
var i__26582 = (0);
while(true){
if((i__26582 < count__26581)){
var event = chunk__26580.cljs$core$IIndexed$_nth$arity$2(null,i__26582);
re_frame.router.dispatch(event);


var G__26661 = seq__26579;
var G__26662 = chunk__26580;
var G__26663 = count__26581;
var G__26664 = (i__26582 + (1));
seq__26579 = G__26661;
chunk__26580 = G__26662;
count__26581 = G__26663;
i__26582 = G__26664;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26579);
if(temp__5825__auto__){
var seq__26579__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26579__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26579__$1);
var G__26665 = cljs.core.chunk_rest(seq__26579__$1);
var G__26666 = c__5548__auto__;
var G__26667 = cljs.core.count(c__5548__auto__);
var G__26668 = (0);
seq__26579 = G__26665;
chunk__26580 = G__26666;
count__26581 = G__26667;
i__26582 = G__26668;
continue;
} else {
var event = cljs.core.first(seq__26579__$1);
re_frame.router.dispatch(event);


var G__26670 = cljs.core.next(seq__26579__$1);
var G__26671 = null;
var G__26672 = (0);
var G__26673 = (0);
seq__26579 = G__26670;
chunk__26580 = G__26671;
count__26581 = G__26672;
i__26582 = G__26673;
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
var seq__26583 = cljs.core.seq(value);
var chunk__26584 = null;
var count__26585 = (0);
var i__26586 = (0);
while(true){
if((i__26586 < count__26585)){
var event = chunk__26584.cljs$core$IIndexed$_nth$arity$2(null,i__26586);
clear_event(event);


var G__26675 = seq__26583;
var G__26676 = chunk__26584;
var G__26677 = count__26585;
var G__26678 = (i__26586 + (1));
seq__26583 = G__26675;
chunk__26584 = G__26676;
count__26585 = G__26677;
i__26586 = G__26678;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26583);
if(temp__5825__auto__){
var seq__26583__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26583__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26583__$1);
var G__26679 = cljs.core.chunk_rest(seq__26583__$1);
var G__26680 = c__5548__auto__;
var G__26681 = cljs.core.count(c__5548__auto__);
var G__26682 = (0);
seq__26583 = G__26679;
chunk__26584 = G__26680;
count__26585 = G__26681;
i__26586 = G__26682;
continue;
} else {
var event = cljs.core.first(seq__26583__$1);
clear_event(event);


var G__26683 = cljs.core.next(seq__26583__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26583 = G__26683;
chunk__26584 = G__26684;
count__26585 = G__26685;
i__26586 = G__26686;
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
var _STAR_current_trace_STAR__orig_val__26588 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26589 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26589);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26687 = re_frame.interop.now();
var duration__26177__auto___26688 = (end__26176__auto___26687 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26687);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26588);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
