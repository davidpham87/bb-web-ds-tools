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
var _STAR_current_trace_STAR__orig_val__26484 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26485 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26485);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26589 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26589)){
var new_db_26590 = temp__5825__auto___26589;
var fexpr__26489_26591 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26489_26591.cljs$core$IFn$_invoke$arity$1 ? fexpr__26489_26591.cljs$core$IFn$_invoke$arity$1(new_db_26590) : fexpr__26489_26591.call(null,new_db_26590));
} else {
}

var seq__26490 = cljs.core.seq(effects_without_db);
var chunk__26491 = null;
var count__26492 = (0);
var i__26493 = (0);
while(true){
if((i__26493 < count__26492)){
var vec__26505 = chunk__26491.cljs$core$IIndexed$_nth$arity$2(null,i__26493);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,(1),null);
var temp__5823__auto___26592 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26592)){
var effect_fn_26593 = temp__5823__auto___26592;
(effect_fn_26593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26594 = seq__26490;
var G__26595 = chunk__26491;
var G__26596 = count__26492;
var G__26597 = (i__26493 + (1));
seq__26490 = G__26594;
chunk__26491 = G__26595;
count__26492 = G__26596;
i__26493 = G__26597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26490);
if(temp__5825__auto__){
var seq__26490__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26490__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26490__$1);
var G__26598 = cljs.core.chunk_rest(seq__26490__$1);
var G__26599 = c__5548__auto__;
var G__26600 = cljs.core.count(c__5548__auto__);
var G__26601 = (0);
seq__26490 = G__26598;
chunk__26491 = G__26599;
count__26492 = G__26600;
i__26493 = G__26601;
continue;
} else {
var vec__26508 = cljs.core.first(seq__26490__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26508,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26508,(1),null);
var temp__5823__auto___26602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26602)){
var effect_fn_26603 = temp__5823__auto___26602;
(effect_fn_26603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26604 = cljs.core.next(seq__26490__$1);
var G__26605 = null;
var G__26606 = (0);
var G__26607 = (0);
seq__26490 = G__26604;
chunk__26491 = G__26605;
count__26492 = G__26606;
i__26493 = G__26607;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26608 = re_frame.interop.now();
var duration__26177__auto___26609 = (end__26176__auto___26608 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26609,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26608);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26484);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26610 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26610)){
var new_db_26611 = temp__5825__auto___26610;
var fexpr__26512_26612 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26512_26612.cljs$core$IFn$_invoke$arity$1 ? fexpr__26512_26612.cljs$core$IFn$_invoke$arity$1(new_db_26611) : fexpr__26512_26612.call(null,new_db_26611));
} else {
}

var seq__26513 = cljs.core.seq(effects_without_db);
var chunk__26514 = null;
var count__26515 = (0);
var i__26516 = (0);
while(true){
if((i__26516 < count__26515)){
var vec__26539 = chunk__26514.cljs$core$IIndexed$_nth$arity$2(null,i__26516);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(1),null);
var temp__5823__auto___26613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26613)){
var effect_fn_26614 = temp__5823__auto___26613;
(effect_fn_26614.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26614.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26614.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26615 = seq__26513;
var G__26616 = chunk__26514;
var G__26617 = count__26515;
var G__26618 = (i__26516 + (1));
seq__26513 = G__26615;
chunk__26514 = G__26616;
count__26515 = G__26617;
i__26516 = G__26618;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26513);
if(temp__5825__auto__){
var seq__26513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26513__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26513__$1);
var G__26619 = cljs.core.chunk_rest(seq__26513__$1);
var G__26620 = c__5548__auto__;
var G__26621 = cljs.core.count(c__5548__auto__);
var G__26622 = (0);
seq__26513 = G__26619;
chunk__26514 = G__26620;
count__26515 = G__26621;
i__26516 = G__26622;
continue;
} else {
var vec__26542 = cljs.core.first(seq__26513__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(1),null);
var temp__5823__auto___26623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26623)){
var effect_fn_26624 = temp__5823__auto___26623;
(effect_fn_26624.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26624.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26624.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26625 = cljs.core.next(seq__26513__$1);
var G__26626 = null;
var G__26627 = (0);
var G__26628 = (0);
seq__26513 = G__26625;
chunk__26514 = G__26626;
count__26515 = G__26627;
i__26516 = G__26628;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26547){
var map__26548 = p__26547;
var map__26548__$1 = cljs.core.__destructure_map(map__26548);
var effect = map__26548__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26548__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26548__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26549 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26550 = null;
var count__26551 = (0);
var i__26552 = (0);
while(true){
if((i__26552 < count__26551)){
var effect = chunk__26550.cljs$core$IIndexed$_nth$arity$2(null,i__26552);
re_frame.fx.dispatch_later(effect);


var G__26631 = seq__26549;
var G__26632 = chunk__26550;
var G__26633 = count__26551;
var G__26634 = (i__26552 + (1));
seq__26549 = G__26631;
chunk__26550 = G__26632;
count__26551 = G__26633;
i__26552 = G__26634;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26549);
if(temp__5825__auto__){
var seq__26549__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26549__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26549__$1);
var G__26636 = cljs.core.chunk_rest(seq__26549__$1);
var G__26637 = c__5548__auto__;
var G__26638 = cljs.core.count(c__5548__auto__);
var G__26639 = (0);
seq__26549 = G__26636;
chunk__26550 = G__26637;
count__26551 = G__26638;
i__26552 = G__26639;
continue;
} else {
var effect = cljs.core.first(seq__26549__$1);
re_frame.fx.dispatch_later(effect);


var G__26640 = cljs.core.next(seq__26549__$1);
var G__26641 = null;
var G__26642 = (0);
var G__26643 = (0);
seq__26549 = G__26640;
chunk__26550 = G__26641;
count__26551 = G__26642;
i__26552 = G__26643;
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
var seq__26554 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26555 = null;
var count__26556 = (0);
var i__26557 = (0);
while(true){
if((i__26557 < count__26556)){
var vec__26564 = chunk__26555.cljs$core$IIndexed$_nth$arity$2(null,i__26557);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(1),null);
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


var G__26646 = seq__26554;
var G__26647 = chunk__26555;
var G__26648 = count__26556;
var G__26649 = (i__26557 + (1));
seq__26554 = G__26646;
chunk__26555 = G__26647;
count__26556 = G__26648;
i__26557 = G__26649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26554);
if(temp__5825__auto__){
var seq__26554__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26554__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26554__$1);
var G__26650 = cljs.core.chunk_rest(seq__26554__$1);
var G__26651 = c__5548__auto__;
var G__26652 = cljs.core.count(c__5548__auto__);
var G__26653 = (0);
seq__26554 = G__26650;
chunk__26555 = G__26651;
count__26556 = G__26652;
i__26557 = G__26653;
continue;
} else {
var vec__26567 = cljs.core.first(seq__26554__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(1),null);
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


var G__26656 = cljs.core.next(seq__26554__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26554 = G__26656;
chunk__26555 = G__26657;
count__26556 = G__26658;
i__26557 = G__26659;
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
var seq__26570 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26571 = null;
var count__26572 = (0);
var i__26573 = (0);
while(true){
if((i__26573 < count__26572)){
var event = chunk__26571.cljs$core$IIndexed$_nth$arity$2(null,i__26573);
re_frame.router.dispatch(event);


var G__26660 = seq__26570;
var G__26661 = chunk__26571;
var G__26662 = count__26572;
var G__26663 = (i__26573 + (1));
seq__26570 = G__26660;
chunk__26571 = G__26661;
count__26572 = G__26662;
i__26573 = G__26663;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26570);
if(temp__5825__auto__){
var seq__26570__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26570__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26570__$1);
var G__26664 = cljs.core.chunk_rest(seq__26570__$1);
var G__26665 = c__5548__auto__;
var G__26666 = cljs.core.count(c__5548__auto__);
var G__26667 = (0);
seq__26570 = G__26664;
chunk__26571 = G__26665;
count__26572 = G__26666;
i__26573 = G__26667;
continue;
} else {
var event = cljs.core.first(seq__26570__$1);
re_frame.router.dispatch(event);


var G__26668 = cljs.core.next(seq__26570__$1);
var G__26669 = null;
var G__26670 = (0);
var G__26671 = (0);
seq__26570 = G__26668;
chunk__26571 = G__26669;
count__26572 = G__26670;
i__26573 = G__26671;
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
var seq__26574 = cljs.core.seq(value);
var chunk__26575 = null;
var count__26576 = (0);
var i__26577 = (0);
while(true){
if((i__26577 < count__26576)){
var event = chunk__26575.cljs$core$IIndexed$_nth$arity$2(null,i__26577);
clear_event(event);


var G__26673 = seq__26574;
var G__26674 = chunk__26575;
var G__26675 = count__26576;
var G__26676 = (i__26577 + (1));
seq__26574 = G__26673;
chunk__26575 = G__26674;
count__26576 = G__26675;
i__26577 = G__26676;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26574);
if(temp__5825__auto__){
var seq__26574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26574__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26574__$1);
var G__26677 = cljs.core.chunk_rest(seq__26574__$1);
var G__26678 = c__5548__auto__;
var G__26679 = cljs.core.count(c__5548__auto__);
var G__26680 = (0);
seq__26574 = G__26677;
chunk__26575 = G__26678;
count__26576 = G__26679;
i__26577 = G__26680;
continue;
} else {
var event = cljs.core.first(seq__26574__$1);
clear_event(event);


var G__26681 = cljs.core.next(seq__26574__$1);
var G__26682 = null;
var G__26683 = (0);
var G__26684 = (0);
seq__26574 = G__26681;
chunk__26575 = G__26682;
count__26576 = G__26683;
i__26577 = G__26684;
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
var _STAR_current_trace_STAR__orig_val__26585 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26586 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26586);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26687 = re_frame.interop.now();
var duration__26177__auto___26688 = (end__26176__auto___26687 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26687);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26585);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
