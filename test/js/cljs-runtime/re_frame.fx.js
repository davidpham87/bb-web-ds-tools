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
var _STAR_current_trace_STAR__orig_val__26490 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26491 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26491);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26599 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26599)){
var new_db_26600 = temp__5825__auto___26599;
var fexpr__26492_26601 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26492_26601.cljs$core$IFn$_invoke$arity$1 ? fexpr__26492_26601.cljs$core$IFn$_invoke$arity$1(new_db_26600) : fexpr__26492_26601.call(null,new_db_26600));
} else {
}

var seq__26499 = cljs.core.seq(effects_without_db);
var chunk__26500 = null;
var count__26501 = (0);
var i__26502 = (0);
while(true){
if((i__26502 < count__26501)){
var vec__26513 = chunk__26500.cljs$core$IIndexed$_nth$arity$2(null,i__26502);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(1),null);
var temp__5823__auto___26602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26602)){
var effect_fn_26603 = temp__5823__auto___26602;
(effect_fn_26603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26604 = seq__26499;
var G__26605 = chunk__26500;
var G__26606 = count__26501;
var G__26607 = (i__26502 + (1));
seq__26499 = G__26604;
chunk__26500 = G__26605;
count__26501 = G__26606;
i__26502 = G__26607;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26499);
if(temp__5825__auto__){
var seq__26499__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26499__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26499__$1);
var G__26608 = cljs.core.chunk_rest(seq__26499__$1);
var G__26609 = c__5548__auto__;
var G__26610 = cljs.core.count(c__5548__auto__);
var G__26611 = (0);
seq__26499 = G__26608;
chunk__26500 = G__26609;
count__26501 = G__26610;
i__26502 = G__26611;
continue;
} else {
var vec__26517 = cljs.core.first(seq__26499__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26517,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26517,(1),null);
var temp__5823__auto___26612 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26612)){
var effect_fn_26613 = temp__5823__auto___26612;
(effect_fn_26613.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26613.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26613.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26617 = cljs.core.next(seq__26499__$1);
var G__26618 = null;
var G__26619 = (0);
var G__26620 = (0);
seq__26499 = G__26617;
chunk__26500 = G__26618;
count__26501 = G__26619;
i__26502 = G__26620;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26621 = re_frame.interop.now();
var duration__26177__auto___26622 = (end__26176__auto___26621 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26622,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26621);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26490);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26626 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26626)){
var new_db_26627 = temp__5825__auto___26626;
var fexpr__26520_26628 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26520_26628.cljs$core$IFn$_invoke$arity$1 ? fexpr__26520_26628.cljs$core$IFn$_invoke$arity$1(new_db_26627) : fexpr__26520_26628.call(null,new_db_26627));
} else {
}

var seq__26521 = cljs.core.seq(effects_without_db);
var chunk__26522 = null;
var count__26523 = (0);
var i__26524 = (0);
while(true){
if((i__26524 < count__26523)){
var vec__26538 = chunk__26522.cljs$core$IIndexed$_nth$arity$2(null,i__26524);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(1),null);
var temp__5823__auto___26629 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26629)){
var effect_fn_26630 = temp__5823__auto___26629;
(effect_fn_26630.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26630.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26630.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26631 = seq__26521;
var G__26632 = chunk__26522;
var G__26633 = count__26523;
var G__26634 = (i__26524 + (1));
seq__26521 = G__26631;
chunk__26522 = G__26632;
count__26523 = G__26633;
i__26524 = G__26634;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26521);
if(temp__5825__auto__){
var seq__26521__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26521__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26521__$1);
var G__26635 = cljs.core.chunk_rest(seq__26521__$1);
var G__26636 = c__5548__auto__;
var G__26637 = cljs.core.count(c__5548__auto__);
var G__26638 = (0);
seq__26521 = G__26635;
chunk__26522 = G__26636;
count__26523 = G__26637;
i__26524 = G__26638;
continue;
} else {
var vec__26541 = cljs.core.first(seq__26521__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(1),null);
var temp__5823__auto___26639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26639)){
var effect_fn_26640 = temp__5823__auto___26639;
(effect_fn_26640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26640.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26641 = cljs.core.next(seq__26521__$1);
var G__26642 = null;
var G__26643 = (0);
var G__26644 = (0);
seq__26521 = G__26641;
chunk__26522 = G__26642;
count__26523 = G__26643;
i__26524 = G__26644;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26556){
var map__26557 = p__26556;
var map__26557__$1 = cljs.core.__destructure_map(map__26557);
var effect = map__26557__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26558 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26559 = null;
var count__26560 = (0);
var i__26561 = (0);
while(true){
if((i__26561 < count__26560)){
var effect = chunk__26559.cljs$core$IIndexed$_nth$arity$2(null,i__26561);
re_frame.fx.dispatch_later(effect);


var G__26647 = seq__26558;
var G__26648 = chunk__26559;
var G__26649 = count__26560;
var G__26650 = (i__26561 + (1));
seq__26558 = G__26647;
chunk__26559 = G__26648;
count__26560 = G__26649;
i__26561 = G__26650;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26558);
if(temp__5825__auto__){
var seq__26558__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26558__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26558__$1);
var G__26651 = cljs.core.chunk_rest(seq__26558__$1);
var G__26652 = c__5548__auto__;
var G__26653 = cljs.core.count(c__5548__auto__);
var G__26654 = (0);
seq__26558 = G__26651;
chunk__26559 = G__26652;
count__26560 = G__26653;
i__26561 = G__26654;
continue;
} else {
var effect = cljs.core.first(seq__26558__$1);
re_frame.fx.dispatch_later(effect);


var G__26655 = cljs.core.next(seq__26558__$1);
var G__26656 = null;
var G__26657 = (0);
var G__26658 = (0);
seq__26558 = G__26655;
chunk__26559 = G__26656;
count__26560 = G__26657;
i__26561 = G__26658;
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
var seq__26570 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26571 = null;
var count__26572 = (0);
var i__26573 = (0);
while(true){
if((i__26573 < count__26572)){
var vec__26582 = chunk__26571.cljs$core$IIndexed$_nth$arity$2(null,i__26573);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26582,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26582,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26661 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26661)){
var effect_fn_26662 = temp__5823__auto___26661;
(effect_fn_26662.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26662.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26662.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26663 = seq__26570;
var G__26664 = chunk__26571;
var G__26665 = count__26572;
var G__26666 = (i__26573 + (1));
seq__26570 = G__26663;
chunk__26571 = G__26664;
count__26572 = G__26665;
i__26573 = G__26666;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26570);
if(temp__5825__auto__){
var seq__26570__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26570__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26570__$1);
var G__26667 = cljs.core.chunk_rest(seq__26570__$1);
var G__26668 = c__5548__auto__;
var G__26669 = cljs.core.count(c__5548__auto__);
var G__26670 = (0);
seq__26570 = G__26667;
chunk__26571 = G__26668;
count__26572 = G__26669;
i__26573 = G__26670;
continue;
} else {
var vec__26585 = cljs.core.first(seq__26570__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26585,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26585,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26671 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26671)){
var effect_fn_26672 = temp__5823__auto___26671;
(effect_fn_26672.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26672.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26672.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26673 = cljs.core.next(seq__26570__$1);
var G__26674 = null;
var G__26675 = (0);
var G__26676 = (0);
seq__26570 = G__26673;
chunk__26571 = G__26674;
count__26572 = G__26675;
i__26573 = G__26676;
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
var seq__26589 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26590 = null;
var count__26591 = (0);
var i__26592 = (0);
while(true){
if((i__26592 < count__26591)){
var event = chunk__26590.cljs$core$IIndexed$_nth$arity$2(null,i__26592);
re_frame.router.dispatch(event);


var G__26677 = seq__26589;
var G__26678 = chunk__26590;
var G__26679 = count__26591;
var G__26680 = (i__26592 + (1));
seq__26589 = G__26677;
chunk__26590 = G__26678;
count__26591 = G__26679;
i__26592 = G__26680;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26589);
if(temp__5825__auto__){
var seq__26589__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26589__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26589__$1);
var G__26681 = cljs.core.chunk_rest(seq__26589__$1);
var G__26682 = c__5548__auto__;
var G__26683 = cljs.core.count(c__5548__auto__);
var G__26684 = (0);
seq__26589 = G__26681;
chunk__26590 = G__26682;
count__26591 = G__26683;
i__26592 = G__26684;
continue;
} else {
var event = cljs.core.first(seq__26589__$1);
re_frame.router.dispatch(event);


var G__26685 = cljs.core.next(seq__26589__$1);
var G__26686 = null;
var G__26687 = (0);
var G__26688 = (0);
seq__26589 = G__26685;
chunk__26590 = G__26686;
count__26591 = G__26687;
i__26592 = G__26688;
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
var seq__26593 = cljs.core.seq(value);
var chunk__26594 = null;
var count__26595 = (0);
var i__26596 = (0);
while(true){
if((i__26596 < count__26595)){
var event = chunk__26594.cljs$core$IIndexed$_nth$arity$2(null,i__26596);
clear_event(event);


var G__26689 = seq__26593;
var G__26690 = chunk__26594;
var G__26691 = count__26595;
var G__26692 = (i__26596 + (1));
seq__26593 = G__26689;
chunk__26594 = G__26690;
count__26595 = G__26691;
i__26596 = G__26692;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26593);
if(temp__5825__auto__){
var seq__26593__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26593__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26593__$1);
var G__26695 = cljs.core.chunk_rest(seq__26593__$1);
var G__26696 = c__5548__auto__;
var G__26697 = cljs.core.count(c__5548__auto__);
var G__26698 = (0);
seq__26593 = G__26695;
chunk__26594 = G__26696;
count__26595 = G__26697;
i__26596 = G__26698;
continue;
} else {
var event = cljs.core.first(seq__26593__$1);
clear_event(event);


var G__26699 = cljs.core.next(seq__26593__$1);
var G__26700 = null;
var G__26701 = (0);
var G__26702 = (0);
seq__26593 = G__26699;
chunk__26594 = G__26700;
count__26595 = G__26701;
i__26596 = G__26702;
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
var _STAR_current_trace_STAR__orig_val__26597 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26598 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26598);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26703 = re_frame.interop.now();
var duration__26177__auto___26704 = (end__26176__auto___26703 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26704,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26703);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26597);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
