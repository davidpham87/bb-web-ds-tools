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
var _STAR_current_trace_STAR__orig_val__26492 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26493 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26493);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26598 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26598)){
var new_db_26599 = temp__5825__auto___26598;
var fexpr__26511_26600 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26511_26600.cljs$core$IFn$_invoke$arity$1 ? fexpr__26511_26600.cljs$core$IFn$_invoke$arity$1(new_db_26599) : fexpr__26511_26600.call(null,new_db_26599));
} else {
}

var seq__26512 = cljs.core.seq(effects_without_db);
var chunk__26513 = null;
var count__26514 = (0);
var i__26515 = (0);
while(true){
if((i__26515 < count__26514)){
var vec__26522 = chunk__26513.cljs$core$IIndexed$_nth$arity$2(null,i__26515);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(1),null);
var temp__5823__auto___26601 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26601)){
var effect_fn_26602 = temp__5823__auto___26601;
(effect_fn_26602.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26602.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26602.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26603 = seq__26512;
var G__26604 = chunk__26513;
var G__26605 = count__26514;
var G__26606 = (i__26515 + (1));
seq__26512 = G__26603;
chunk__26513 = G__26604;
count__26514 = G__26605;
i__26515 = G__26606;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26512);
if(temp__5825__auto__){
var seq__26512__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26512__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26512__$1);
var G__26607 = cljs.core.chunk_rest(seq__26512__$1);
var G__26608 = c__5548__auto__;
var G__26609 = cljs.core.count(c__5548__auto__);
var G__26610 = (0);
seq__26512 = G__26607;
chunk__26513 = G__26608;
count__26514 = G__26609;
i__26515 = G__26610;
continue;
} else {
var vec__26525 = cljs.core.first(seq__26512__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26525,(1),null);
var temp__5823__auto___26611 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26611)){
var effect_fn_26612 = temp__5823__auto___26611;
(effect_fn_26612.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26612.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26612.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26613 = cljs.core.next(seq__26512__$1);
var G__26614 = null;
var G__26615 = (0);
var G__26616 = (0);
seq__26512 = G__26613;
chunk__26513 = G__26614;
count__26514 = G__26615;
i__26515 = G__26616;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26617 = re_frame.interop.now();
var duration__26177__auto___26618 = (end__26176__auto___26617 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26618,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26617);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26492);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26619 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26619)){
var new_db_26620 = temp__5825__auto___26619;
var fexpr__26528_26621 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26528_26621.cljs$core$IFn$_invoke$arity$1 ? fexpr__26528_26621.cljs$core$IFn$_invoke$arity$1(new_db_26620) : fexpr__26528_26621.call(null,new_db_26620));
} else {
}

var seq__26529 = cljs.core.seq(effects_without_db);
var chunk__26530 = null;
var count__26531 = (0);
var i__26532 = (0);
while(true){
if((i__26532 < count__26531)){
var vec__26541 = chunk__26530.cljs$core$IIndexed$_nth$arity$2(null,i__26532);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(1),null);
var temp__5823__auto___26622 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26622)){
var effect_fn_26624 = temp__5823__auto___26622;
(effect_fn_26624.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26624.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26624.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26625 = seq__26529;
var G__26626 = chunk__26530;
var G__26627 = count__26531;
var G__26628 = (i__26532 + (1));
seq__26529 = G__26625;
chunk__26530 = G__26626;
count__26531 = G__26627;
i__26532 = G__26628;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26529);
if(temp__5825__auto__){
var seq__26529__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26529__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26529__$1);
var G__26629 = cljs.core.chunk_rest(seq__26529__$1);
var G__26630 = c__5548__auto__;
var G__26631 = cljs.core.count(c__5548__auto__);
var G__26632 = (0);
seq__26529 = G__26629;
chunk__26530 = G__26630;
count__26531 = G__26631;
i__26532 = G__26632;
continue;
} else {
var vec__26545 = cljs.core.first(seq__26529__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(1),null);
var temp__5823__auto___26633 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26633)){
var effect_fn_26634 = temp__5823__auto___26633;
(effect_fn_26634.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26634.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26634.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26635 = cljs.core.next(seq__26529__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26529 = G__26635;
chunk__26530 = G__26636;
count__26531 = G__26637;
i__26532 = G__26638;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26548){
var map__26549 = p__26548;
var map__26549__$1 = cljs.core.__destructure_map(map__26549);
var effect = map__26549__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26549__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26549__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26550 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26551 = null;
var count__26552 = (0);
var i__26553 = (0);
while(true){
if((i__26553 < count__26552)){
var effect = chunk__26551.cljs$core$IIndexed$_nth$arity$2(null,i__26553);
re_frame.fx.dispatch_later(effect);


var G__26639 = seq__26550;
var G__26640 = chunk__26551;
var G__26641 = count__26552;
var G__26642 = (i__26553 + (1));
seq__26550 = G__26639;
chunk__26551 = G__26640;
count__26552 = G__26641;
i__26553 = G__26642;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26550);
if(temp__5825__auto__){
var seq__26550__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26550__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26550__$1);
var G__26643 = cljs.core.chunk_rest(seq__26550__$1);
var G__26644 = c__5548__auto__;
var G__26645 = cljs.core.count(c__5548__auto__);
var G__26646 = (0);
seq__26550 = G__26643;
chunk__26551 = G__26644;
count__26552 = G__26645;
i__26553 = G__26646;
continue;
} else {
var effect = cljs.core.first(seq__26550__$1);
re_frame.fx.dispatch_later(effect);


var G__26647 = cljs.core.next(seq__26550__$1);
var G__26648 = null;
var G__26649 = (0);
var G__26650 = (0);
seq__26550 = G__26647;
chunk__26551 = G__26648;
count__26552 = G__26649;
i__26553 = G__26650;
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
var vec__26571 = chunk__26555.cljs$core$IIndexed$_nth$arity$2(null,i__26557);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26571,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26571,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26657)){
var effect_fn_26658 = temp__5823__auto___26657;
(effect_fn_26658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26659 = seq__26554;
var G__26660 = chunk__26555;
var G__26661 = count__26556;
var G__26662 = (i__26557 + (1));
seq__26554 = G__26659;
chunk__26555 = G__26660;
count__26556 = G__26661;
i__26557 = G__26662;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26554);
if(temp__5825__auto__){
var seq__26554__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26554__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26554__$1);
var G__26663 = cljs.core.chunk_rest(seq__26554__$1);
var G__26664 = c__5548__auto__;
var G__26665 = cljs.core.count(c__5548__auto__);
var G__26666 = (0);
seq__26554 = G__26663;
chunk__26555 = G__26664;
count__26556 = G__26665;
i__26557 = G__26666;
continue;
} else {
var vec__26576 = cljs.core.first(seq__26554__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26667 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26667)){
var effect_fn_26668 = temp__5823__auto___26667;
(effect_fn_26668.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26668.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26668.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26669 = cljs.core.next(seq__26554__$1);
var G__26670 = null;
var G__26671 = (0);
var G__26672 = (0);
seq__26554 = G__26669;
chunk__26555 = G__26670;
count__26556 = G__26671;
i__26557 = G__26672;
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


var G__26673 = seq__26579;
var G__26674 = chunk__26580;
var G__26675 = count__26581;
var G__26676 = (i__26582 + (1));
seq__26579 = G__26673;
chunk__26580 = G__26674;
count__26581 = G__26675;
i__26582 = G__26676;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26579);
if(temp__5825__auto__){
var seq__26579__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26579__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26579__$1);
var G__26677 = cljs.core.chunk_rest(seq__26579__$1);
var G__26678 = c__5548__auto__;
var G__26679 = cljs.core.count(c__5548__auto__);
var G__26680 = (0);
seq__26579 = G__26677;
chunk__26580 = G__26678;
count__26581 = G__26679;
i__26582 = G__26680;
continue;
} else {
var event = cljs.core.first(seq__26579__$1);
re_frame.router.dispatch(event);


var G__26681 = cljs.core.next(seq__26579__$1);
var G__26682 = null;
var G__26683 = (0);
var G__26684 = (0);
seq__26579 = G__26681;
chunk__26580 = G__26682;
count__26581 = G__26683;
i__26582 = G__26684;
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
var seq__26586 = cljs.core.seq(value);
var chunk__26587 = null;
var count__26588 = (0);
var i__26589 = (0);
while(true){
if((i__26589 < count__26588)){
var event = chunk__26587.cljs$core$IIndexed$_nth$arity$2(null,i__26589);
clear_event(event);


var G__26685 = seq__26586;
var G__26686 = chunk__26587;
var G__26687 = count__26588;
var G__26688 = (i__26589 + (1));
seq__26586 = G__26685;
chunk__26587 = G__26686;
count__26588 = G__26687;
i__26589 = G__26688;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26586);
if(temp__5825__auto__){
var seq__26586__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26586__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26586__$1);
var G__26689 = cljs.core.chunk_rest(seq__26586__$1);
var G__26690 = c__5548__auto__;
var G__26691 = cljs.core.count(c__5548__auto__);
var G__26692 = (0);
seq__26586 = G__26689;
chunk__26587 = G__26690;
count__26588 = G__26691;
i__26589 = G__26692;
continue;
} else {
var event = cljs.core.first(seq__26586__$1);
clear_event(event);


var G__26693 = cljs.core.next(seq__26586__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26586 = G__26693;
chunk__26587 = G__26694;
count__26588 = G__26695;
i__26589 = G__26696;
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
var _STAR_current_trace_STAR__orig_val__26594 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26595 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26595);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26699 = re_frame.interop.now();
var duration__26177__auto___26700 = (end__26176__auto___26699 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26700,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26699);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26594);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
