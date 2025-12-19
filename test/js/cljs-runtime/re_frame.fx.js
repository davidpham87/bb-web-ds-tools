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
var _STAR_current_trace_STAR__orig_val__26503 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26504 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26504);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26613 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26613)){
var new_db_26614 = temp__5825__auto___26613;
var fexpr__26523_26615 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26523_26615.cljs$core$IFn$_invoke$arity$1 ? fexpr__26523_26615.cljs$core$IFn$_invoke$arity$1(new_db_26614) : fexpr__26523_26615.call(null,new_db_26614));
} else {
}

var seq__26524 = cljs.core.seq(effects_without_db);
var chunk__26525 = null;
var count__26526 = (0);
var i__26527 = (0);
while(true){
if((i__26527 < count__26526)){
var vec__26534 = chunk__26525.cljs$core$IIndexed$_nth$arity$2(null,i__26527);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(1),null);
var temp__5823__auto___26616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26616)){
var effect_fn_26617 = temp__5823__auto___26616;
(effect_fn_26617.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26617.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26617.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26618 = seq__26524;
var G__26619 = chunk__26525;
var G__26620 = count__26526;
var G__26621 = (i__26527 + (1));
seq__26524 = G__26618;
chunk__26525 = G__26619;
count__26526 = G__26620;
i__26527 = G__26621;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26524);
if(temp__5825__auto__){
var seq__26524__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26524__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26524__$1);
var G__26622 = cljs.core.chunk_rest(seq__26524__$1);
var G__26623 = c__5548__auto__;
var G__26624 = cljs.core.count(c__5548__auto__);
var G__26625 = (0);
seq__26524 = G__26622;
chunk__26525 = G__26623;
count__26526 = G__26624;
i__26527 = G__26625;
continue;
} else {
var vec__26537 = cljs.core.first(seq__26524__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537,(1),null);
var temp__5823__auto___26626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26626)){
var effect_fn_26627 = temp__5823__auto___26626;
(effect_fn_26627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26627.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26628 = cljs.core.next(seq__26524__$1);
var G__26629 = null;
var G__26630 = (0);
var G__26631 = (0);
seq__26524 = G__26628;
chunk__26525 = G__26629;
count__26526 = G__26630;
i__26527 = G__26631;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26632 = re_frame.interop.now();
var duration__26177__auto___26633 = (end__26176__auto___26632 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26633,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26632);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26503);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26636 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26636)){
var new_db_26637 = temp__5825__auto___26636;
var fexpr__26540_26638 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26540_26638.cljs$core$IFn$_invoke$arity$1 ? fexpr__26540_26638.cljs$core$IFn$_invoke$arity$1(new_db_26637) : fexpr__26540_26638.call(null,new_db_26637));
} else {
}

var seq__26541 = cljs.core.seq(effects_without_db);
var chunk__26542 = null;
var count__26543 = (0);
var i__26544 = (0);
while(true){
if((i__26544 < count__26543)){
var vec__26551 = chunk__26542.cljs$core$IIndexed$_nth$arity$2(null,i__26544);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551,(1),null);
var temp__5823__auto___26639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26639)){
var effect_fn_26640 = temp__5823__auto___26639;
(effect_fn_26640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26640.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26641 = seq__26541;
var G__26642 = chunk__26542;
var G__26643 = count__26543;
var G__26644 = (i__26544 + (1));
seq__26541 = G__26641;
chunk__26542 = G__26642;
count__26543 = G__26643;
i__26544 = G__26644;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26541);
if(temp__5825__auto__){
var seq__26541__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26541__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26541__$1);
var G__26645 = cljs.core.chunk_rest(seq__26541__$1);
var G__26646 = c__5548__auto__;
var G__26647 = cljs.core.count(c__5548__auto__);
var G__26648 = (0);
seq__26541 = G__26645;
chunk__26542 = G__26646;
count__26543 = G__26647;
i__26544 = G__26648;
continue;
} else {
var vec__26554 = cljs.core.first(seq__26541__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(1),null);
var temp__5823__auto___26649 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26649)){
var effect_fn_26650 = temp__5823__auto___26649;
(effect_fn_26650.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26650.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26650.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26651 = cljs.core.next(seq__26541__$1);
var G__26652 = null;
var G__26653 = (0);
var G__26654 = (0);
seq__26541 = G__26651;
chunk__26542 = G__26652;
count__26543 = G__26653;
i__26544 = G__26654;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26557){
var map__26558 = p__26557;
var map__26558__$1 = cljs.core.__destructure_map(map__26558);
var effect = map__26558__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26558__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26558__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26561 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26562 = null;
var count__26563 = (0);
var i__26564 = (0);
while(true){
if((i__26564 < count__26563)){
var effect = chunk__26562.cljs$core$IIndexed$_nth$arity$2(null,i__26564);
re_frame.fx.dispatch_later(effect);


var G__26655 = seq__26561;
var G__26656 = chunk__26562;
var G__26657 = count__26563;
var G__26658 = (i__26564 + (1));
seq__26561 = G__26655;
chunk__26562 = G__26656;
count__26563 = G__26657;
i__26564 = G__26658;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26561);
if(temp__5825__auto__){
var seq__26561__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26561__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26561__$1);
var G__26659 = cljs.core.chunk_rest(seq__26561__$1);
var G__26660 = c__5548__auto__;
var G__26661 = cljs.core.count(c__5548__auto__);
var G__26662 = (0);
seq__26561 = G__26659;
chunk__26562 = G__26660;
count__26563 = G__26661;
i__26564 = G__26662;
continue;
} else {
var effect = cljs.core.first(seq__26561__$1);
re_frame.fx.dispatch_later(effect);


var G__26663 = cljs.core.next(seq__26561__$1);
var G__26664 = null;
var G__26665 = (0);
var G__26666 = (0);
seq__26561 = G__26663;
chunk__26562 = G__26664;
count__26563 = G__26665;
i__26564 = G__26666;
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
var seq__26567 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26568 = null;
var count__26569 = (0);
var i__26570 = (0);
while(true){
if((i__26570 < count__26569)){
var vec__26580 = chunk__26568.cljs$core$IIndexed$_nth$arity$2(null,i__26570);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(1),null);
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


var G__26669 = seq__26567;
var G__26670 = chunk__26568;
var G__26671 = count__26569;
var G__26672 = (i__26570 + (1));
seq__26567 = G__26669;
chunk__26568 = G__26670;
count__26569 = G__26671;
i__26570 = G__26672;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26567);
if(temp__5825__auto__){
var seq__26567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26567__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26567__$1);
var G__26674 = cljs.core.chunk_rest(seq__26567__$1);
var G__26675 = c__5548__auto__;
var G__26676 = cljs.core.count(c__5548__auto__);
var G__26677 = (0);
seq__26567 = G__26674;
chunk__26568 = G__26675;
count__26569 = G__26676;
i__26570 = G__26677;
continue;
} else {
var vec__26585 = cljs.core.first(seq__26567__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26585,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26585,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26678 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26678)){
var effect_fn_26679 = temp__5823__auto___26678;
(effect_fn_26679.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26679.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26679.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26680 = cljs.core.next(seq__26567__$1);
var G__26681 = null;
var G__26682 = (0);
var G__26683 = (0);
seq__26567 = G__26680;
chunk__26568 = G__26681;
count__26569 = G__26682;
i__26570 = G__26683;
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
var seq__26592 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26593 = null;
var count__26594 = (0);
var i__26595 = (0);
while(true){
if((i__26595 < count__26594)){
var event = chunk__26593.cljs$core$IIndexed$_nth$arity$2(null,i__26595);
re_frame.router.dispatch(event);


var G__26684 = seq__26592;
var G__26685 = chunk__26593;
var G__26686 = count__26594;
var G__26687 = (i__26595 + (1));
seq__26592 = G__26684;
chunk__26593 = G__26685;
count__26594 = G__26686;
i__26595 = G__26687;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26592);
if(temp__5825__auto__){
var seq__26592__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26592__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26592__$1);
var G__26688 = cljs.core.chunk_rest(seq__26592__$1);
var G__26689 = c__5548__auto__;
var G__26690 = cljs.core.count(c__5548__auto__);
var G__26691 = (0);
seq__26592 = G__26688;
chunk__26593 = G__26689;
count__26594 = G__26690;
i__26595 = G__26691;
continue;
} else {
var event = cljs.core.first(seq__26592__$1);
re_frame.router.dispatch(event);


var G__26692 = cljs.core.next(seq__26592__$1);
var G__26693 = null;
var G__26694 = (0);
var G__26695 = (0);
seq__26592 = G__26692;
chunk__26593 = G__26693;
count__26594 = G__26694;
i__26595 = G__26695;
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
var seq__26599 = cljs.core.seq(value);
var chunk__26600 = null;
var count__26601 = (0);
var i__26602 = (0);
while(true){
if((i__26602 < count__26601)){
var event = chunk__26600.cljs$core$IIndexed$_nth$arity$2(null,i__26602);
clear_event(event);


var G__26698 = seq__26599;
var G__26699 = chunk__26600;
var G__26700 = count__26601;
var G__26701 = (i__26602 + (1));
seq__26599 = G__26698;
chunk__26600 = G__26699;
count__26601 = G__26700;
i__26602 = G__26701;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26599);
if(temp__5825__auto__){
var seq__26599__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26599__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26599__$1);
var G__26705 = cljs.core.chunk_rest(seq__26599__$1);
var G__26706 = c__5548__auto__;
var G__26707 = cljs.core.count(c__5548__auto__);
var G__26708 = (0);
seq__26599 = G__26705;
chunk__26600 = G__26706;
count__26601 = G__26707;
i__26602 = G__26708;
continue;
} else {
var event = cljs.core.first(seq__26599__$1);
clear_event(event);


var G__26709 = cljs.core.next(seq__26599__$1);
var G__26710 = null;
var G__26711 = (0);
var G__26712 = (0);
seq__26599 = G__26709;
chunk__26600 = G__26710;
count__26601 = G__26711;
i__26602 = G__26712;
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
var _STAR_current_trace_STAR__orig_val__26607 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26608 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26608);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26713 = re_frame.interop.now();
var duration__26177__auto___26714 = (end__26176__auto___26713 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26714,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26713);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26607);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
