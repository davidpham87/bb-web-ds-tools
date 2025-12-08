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
var _STAR_current_trace_STAR__orig_val__26518 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26519 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26519);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26641 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26641)){
var new_db_26642 = temp__5825__auto___26641;
var fexpr__26529_26643 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26529_26643.cljs$core$IFn$_invoke$arity$1 ? fexpr__26529_26643.cljs$core$IFn$_invoke$arity$1(new_db_26642) : fexpr__26529_26643.call(null,new_db_26642));
} else {
}

var seq__26530 = cljs.core.seq(effects_without_db);
var chunk__26531 = null;
var count__26532 = (0);
var i__26533 = (0);
while(true){
if((i__26533 < count__26532)){
var vec__26550 = chunk__26531.cljs$core$IIndexed$_nth$arity$2(null,i__26533);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(1),null);
var temp__5823__auto___26644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26644)){
var effect_fn_26645 = temp__5823__auto___26644;
(effect_fn_26645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26646 = seq__26530;
var G__26647 = chunk__26531;
var G__26648 = count__26532;
var G__26649 = (i__26533 + (1));
seq__26530 = G__26646;
chunk__26531 = G__26647;
count__26532 = G__26648;
i__26533 = G__26649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26530);
if(temp__5825__auto__){
var seq__26530__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26530__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26530__$1);
var G__26650 = cljs.core.chunk_rest(seq__26530__$1);
var G__26651 = c__5548__auto__;
var G__26652 = cljs.core.count(c__5548__auto__);
var G__26653 = (0);
seq__26530 = G__26650;
chunk__26531 = G__26651;
count__26532 = G__26652;
i__26533 = G__26653;
continue;
} else {
var vec__26553 = cljs.core.first(seq__26530__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(1),null);
var temp__5823__auto___26654 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26654)){
var effect_fn_26655 = temp__5823__auto___26654;
(effect_fn_26655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26655.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26656 = cljs.core.next(seq__26530__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26530 = G__26656;
chunk__26531 = G__26657;
count__26532 = G__26658;
i__26533 = G__26659;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26660 = re_frame.interop.now();
var duration__26177__auto___26661 = (end__26176__auto___26660 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26660);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26518);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26662 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26662)){
var new_db_26663 = temp__5825__auto___26662;
var fexpr__26560_26664 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26560_26664.cljs$core$IFn$_invoke$arity$1 ? fexpr__26560_26664.cljs$core$IFn$_invoke$arity$1(new_db_26663) : fexpr__26560_26664.call(null,new_db_26663));
} else {
}

var seq__26561 = cljs.core.seq(effects_without_db);
var chunk__26562 = null;
var count__26563 = (0);
var i__26564 = (0);
while(true){
if((i__26564 < count__26563)){
var vec__26587 = chunk__26562.cljs$core$IIndexed$_nth$arity$2(null,i__26564);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26587,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26587,(1),null);
var temp__5823__auto___26665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26665)){
var effect_fn_26666 = temp__5823__auto___26665;
(effect_fn_26666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26667 = seq__26561;
var G__26668 = chunk__26562;
var G__26669 = count__26563;
var G__26670 = (i__26564 + (1));
seq__26561 = G__26667;
chunk__26562 = G__26668;
count__26563 = G__26669;
i__26564 = G__26670;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26561);
if(temp__5825__auto__){
var seq__26561__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26561__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26561__$1);
var G__26671 = cljs.core.chunk_rest(seq__26561__$1);
var G__26672 = c__5548__auto__;
var G__26673 = cljs.core.count(c__5548__auto__);
var G__26674 = (0);
seq__26561 = G__26671;
chunk__26562 = G__26672;
count__26563 = G__26673;
i__26564 = G__26674;
continue;
} else {
var vec__26590 = cljs.core.first(seq__26561__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26590,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26590,(1),null);
var temp__5823__auto___26675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26675)){
var effect_fn_26676 = temp__5823__auto___26675;
(effect_fn_26676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26677 = cljs.core.next(seq__26561__$1);
var G__26678 = null;
var G__26679 = (0);
var G__26680 = (0);
seq__26561 = G__26677;
chunk__26562 = G__26678;
count__26563 = G__26679;
i__26564 = G__26680;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26601){
var map__26602 = p__26601;
var map__26602__$1 = cljs.core.__destructure_map(map__26602);
var effect = map__26602__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26602__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26602__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26607 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26608 = null;
var count__26609 = (0);
var i__26610 = (0);
while(true){
if((i__26610 < count__26609)){
var effect = chunk__26608.cljs$core$IIndexed$_nth$arity$2(null,i__26610);
re_frame.fx.dispatch_later(effect);


var G__26681 = seq__26607;
var G__26682 = chunk__26608;
var G__26683 = count__26609;
var G__26684 = (i__26610 + (1));
seq__26607 = G__26681;
chunk__26608 = G__26682;
count__26609 = G__26683;
i__26610 = G__26684;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26607);
if(temp__5825__auto__){
var seq__26607__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26607__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26607__$1);
var G__26685 = cljs.core.chunk_rest(seq__26607__$1);
var G__26686 = c__5548__auto__;
var G__26687 = cljs.core.count(c__5548__auto__);
var G__26688 = (0);
seq__26607 = G__26685;
chunk__26608 = G__26686;
count__26609 = G__26687;
i__26610 = G__26688;
continue;
} else {
var effect = cljs.core.first(seq__26607__$1);
re_frame.fx.dispatch_later(effect);


var G__26689 = cljs.core.next(seq__26607__$1);
var G__26690 = null;
var G__26691 = (0);
var G__26692 = (0);
seq__26607 = G__26689;
chunk__26608 = G__26690;
count__26609 = G__26691;
i__26610 = G__26692;
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
var seq__26615 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26616 = null;
var count__26617 = (0);
var i__26618 = (0);
while(true){
if((i__26618 < count__26617)){
var vec__26625 = chunk__26616.cljs$core$IIndexed$_nth$arity$2(null,i__26618);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26695 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26695)){
var effect_fn_26696 = temp__5823__auto___26695;
(effect_fn_26696.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26696.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26696.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26697 = seq__26615;
var G__26698 = chunk__26616;
var G__26699 = count__26617;
var G__26700 = (i__26618 + (1));
seq__26615 = G__26697;
chunk__26616 = G__26698;
count__26617 = G__26699;
i__26618 = G__26700;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26615);
if(temp__5825__auto__){
var seq__26615__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26615__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26615__$1);
var G__26701 = cljs.core.chunk_rest(seq__26615__$1);
var G__26702 = c__5548__auto__;
var G__26703 = cljs.core.count(c__5548__auto__);
var G__26704 = (0);
seq__26615 = G__26701;
chunk__26616 = G__26702;
count__26617 = G__26703;
i__26618 = G__26704;
continue;
} else {
var vec__26628 = cljs.core.first(seq__26615__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26705)){
var effect_fn_26706 = temp__5823__auto___26705;
(effect_fn_26706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26707 = cljs.core.next(seq__26615__$1);
var G__26708 = null;
var G__26709 = (0);
var G__26710 = (0);
seq__26615 = G__26707;
chunk__26616 = G__26708;
count__26617 = G__26709;
i__26618 = G__26710;
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
var seq__26631 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26632 = null;
var count__26633 = (0);
var i__26634 = (0);
while(true){
if((i__26634 < count__26633)){
var event = chunk__26632.cljs$core$IIndexed$_nth$arity$2(null,i__26634);
re_frame.router.dispatch(event);


var G__26711 = seq__26631;
var G__26712 = chunk__26632;
var G__26713 = count__26633;
var G__26714 = (i__26634 + (1));
seq__26631 = G__26711;
chunk__26632 = G__26712;
count__26633 = G__26713;
i__26634 = G__26714;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26631);
if(temp__5825__auto__){
var seq__26631__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26631__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26631__$1);
var G__26715 = cljs.core.chunk_rest(seq__26631__$1);
var G__26716 = c__5548__auto__;
var G__26717 = cljs.core.count(c__5548__auto__);
var G__26718 = (0);
seq__26631 = G__26715;
chunk__26632 = G__26716;
count__26633 = G__26717;
i__26634 = G__26718;
continue;
} else {
var event = cljs.core.first(seq__26631__$1);
re_frame.router.dispatch(event);


var G__26719 = cljs.core.next(seq__26631__$1);
var G__26720 = null;
var G__26721 = (0);
var G__26722 = (0);
seq__26631 = G__26719;
chunk__26632 = G__26720;
count__26633 = G__26721;
i__26634 = G__26722;
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
var seq__26635 = cljs.core.seq(value);
var chunk__26636 = null;
var count__26637 = (0);
var i__26638 = (0);
while(true){
if((i__26638 < count__26637)){
var event = chunk__26636.cljs$core$IIndexed$_nth$arity$2(null,i__26638);
clear_event(event);


var G__26725 = seq__26635;
var G__26726 = chunk__26636;
var G__26727 = count__26637;
var G__26728 = (i__26638 + (1));
seq__26635 = G__26725;
chunk__26636 = G__26726;
count__26637 = G__26727;
i__26638 = G__26728;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26635);
if(temp__5825__auto__){
var seq__26635__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26635__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26635__$1);
var G__26729 = cljs.core.chunk_rest(seq__26635__$1);
var G__26730 = c__5548__auto__;
var G__26731 = cljs.core.count(c__5548__auto__);
var G__26732 = (0);
seq__26635 = G__26729;
chunk__26636 = G__26730;
count__26637 = G__26731;
i__26638 = G__26732;
continue;
} else {
var event = cljs.core.first(seq__26635__$1);
clear_event(event);


var G__26733 = cljs.core.next(seq__26635__$1);
var G__26734 = null;
var G__26735 = (0);
var G__26736 = (0);
seq__26635 = G__26733;
chunk__26636 = G__26734;
count__26637 = G__26735;
i__26638 = G__26736;
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
var _STAR_current_trace_STAR__orig_val__26639 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26640 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26640);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26737 = re_frame.interop.now();
var duration__26177__auto___26738 = (end__26176__auto___26737 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26738,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26737);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26639);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
