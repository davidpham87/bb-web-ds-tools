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
var _STAR_current_trace_STAR__orig_val__26511 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26512 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26512);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26621 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26621)){
var new_db_26622 = temp__5825__auto___26621;
var fexpr__26514_26623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26514_26623.cljs$core$IFn$_invoke$arity$1 ? fexpr__26514_26623.cljs$core$IFn$_invoke$arity$1(new_db_26622) : fexpr__26514_26623.call(null,new_db_26622));
} else {
}

var seq__26515 = cljs.core.seq(effects_without_db);
var chunk__26516 = null;
var count__26517 = (0);
var i__26518 = (0);
while(true){
if((i__26518 < count__26517)){
var vec__26544 = chunk__26516.cljs$core$IIndexed$_nth$arity$2(null,i__26518);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26544,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26544,(1),null);
var temp__5823__auto___26624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26624)){
var effect_fn_26625 = temp__5823__auto___26624;
(effect_fn_26625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26627 = seq__26515;
var G__26628 = chunk__26516;
var G__26629 = count__26517;
var G__26630 = (i__26518 + (1));
seq__26515 = G__26627;
chunk__26516 = G__26628;
count__26517 = G__26629;
i__26518 = G__26630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26515);
if(temp__5825__auto__){
var seq__26515__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26515__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26515__$1);
var G__26631 = cljs.core.chunk_rest(seq__26515__$1);
var G__26632 = c__5548__auto__;
var G__26633 = cljs.core.count(c__5548__auto__);
var G__26634 = (0);
seq__26515 = G__26631;
chunk__26516 = G__26632;
count__26517 = G__26633;
i__26518 = G__26634;
continue;
} else {
var vec__26547 = cljs.core.first(seq__26515__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547,(1),null);
var temp__5823__auto___26635 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26635)){
var effect_fn_26636 = temp__5823__auto___26635;
(effect_fn_26636.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26636.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26636.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26637 = cljs.core.next(seq__26515__$1);
var G__26638 = null;
var G__26639 = (0);
var G__26640 = (0);
seq__26515 = G__26637;
chunk__26516 = G__26638;
count__26517 = G__26639;
i__26518 = G__26640;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26641 = re_frame.interop.now();
var duration__26177__auto___26642 = (end__26176__auto___26641 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26642,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26641);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26511);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26643 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26643)){
var new_db_26644 = temp__5825__auto___26643;
var fexpr__26550_26645 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26550_26645.cljs$core$IFn$_invoke$arity$1 ? fexpr__26550_26645.cljs$core$IFn$_invoke$arity$1(new_db_26644) : fexpr__26550_26645.call(null,new_db_26644));
} else {
}

var seq__26551 = cljs.core.seq(effects_without_db);
var chunk__26552 = null;
var count__26553 = (0);
var i__26554 = (0);
while(true){
if((i__26554 < count__26553)){
var vec__26561 = chunk__26552.cljs$core$IIndexed$_nth$arity$2(null,i__26554);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(1),null);
var temp__5823__auto___26646 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26646)){
var effect_fn_26647 = temp__5823__auto___26646;
(effect_fn_26647.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26647.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26647.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26652 = seq__26551;
var G__26653 = chunk__26552;
var G__26654 = count__26553;
var G__26655 = (i__26554 + (1));
seq__26551 = G__26652;
chunk__26552 = G__26653;
count__26553 = G__26654;
i__26554 = G__26655;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26551);
if(temp__5825__auto__){
var seq__26551__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26551__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26551__$1);
var G__26656 = cljs.core.chunk_rest(seq__26551__$1);
var G__26657 = c__5548__auto__;
var G__26658 = cljs.core.count(c__5548__auto__);
var G__26659 = (0);
seq__26551 = G__26656;
chunk__26552 = G__26657;
count__26553 = G__26658;
i__26554 = G__26659;
continue;
} else {
var vec__26564 = cljs.core.first(seq__26551__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(1),null);
var temp__5823__auto___26660 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26660)){
var effect_fn_26661 = temp__5823__auto___26660;
(effect_fn_26661.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26661.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26661.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26662 = cljs.core.next(seq__26551__$1);
var G__26663 = null;
var G__26664 = (0);
var G__26665 = (0);
seq__26551 = G__26662;
chunk__26552 = G__26663;
count__26553 = G__26664;
i__26554 = G__26665;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26567){
var map__26568 = p__26567;
var map__26568__$1 = cljs.core.__destructure_map(map__26568);
var effect = map__26568__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26568__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26568__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26569 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26576 = null;
var count__26577 = (0);
var i__26578 = (0);
while(true){
if((i__26578 < count__26577)){
var effect = chunk__26576.cljs$core$IIndexed$_nth$arity$2(null,i__26578);
re_frame.fx.dispatch_later(effect);


var G__26669 = seq__26569;
var G__26670 = chunk__26576;
var G__26671 = count__26577;
var G__26672 = (i__26578 + (1));
seq__26569 = G__26669;
chunk__26576 = G__26670;
count__26577 = G__26671;
i__26578 = G__26672;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26569);
if(temp__5825__auto__){
var seq__26569__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26569__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26569__$1);
var G__26673 = cljs.core.chunk_rest(seq__26569__$1);
var G__26674 = c__5548__auto__;
var G__26675 = cljs.core.count(c__5548__auto__);
var G__26676 = (0);
seq__26569 = G__26673;
chunk__26576 = G__26674;
count__26577 = G__26675;
i__26578 = G__26676;
continue;
} else {
var effect = cljs.core.first(seq__26569__$1);
re_frame.fx.dispatch_later(effect);


var G__26677 = cljs.core.next(seq__26569__$1);
var G__26678 = null;
var G__26679 = (0);
var G__26680 = (0);
seq__26569 = G__26677;
chunk__26576 = G__26678;
count__26577 = G__26679;
i__26578 = G__26680;
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
var seq__26583 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26584 = null;
var count__26585 = (0);
var i__26586 = (0);
while(true){
if((i__26586 < count__26585)){
var vec__26597 = chunk__26584.cljs$core$IIndexed$_nth$arity$2(null,i__26586);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26683 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26683)){
var effect_fn_26685 = temp__5823__auto___26683;
(effect_fn_26685.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26685.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26685.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26686 = seq__26583;
var G__26687 = chunk__26584;
var G__26688 = count__26585;
var G__26689 = (i__26586 + (1));
seq__26583 = G__26686;
chunk__26584 = G__26687;
count__26585 = G__26688;
i__26586 = G__26689;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26583);
if(temp__5825__auto__){
var seq__26583__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26583__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26583__$1);
var G__26690 = cljs.core.chunk_rest(seq__26583__$1);
var G__26691 = c__5548__auto__;
var G__26692 = cljs.core.count(c__5548__auto__);
var G__26693 = (0);
seq__26583 = G__26690;
chunk__26584 = G__26691;
count__26585 = G__26692;
i__26586 = G__26693;
continue;
} else {
var vec__26602 = cljs.core.first(seq__26583__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26602,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26602,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26697 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26697)){
var effect_fn_26698 = temp__5823__auto___26697;
(effect_fn_26698.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26698.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26698.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26699 = cljs.core.next(seq__26583__$1);
var G__26700 = null;
var G__26701 = (0);
var G__26702 = (0);
seq__26583 = G__26699;
chunk__26584 = G__26700;
count__26585 = G__26701;
i__26586 = G__26702;
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
var seq__26606 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26607 = null;
var count__26608 = (0);
var i__26609 = (0);
while(true){
if((i__26609 < count__26608)){
var event = chunk__26607.cljs$core$IIndexed$_nth$arity$2(null,i__26609);
re_frame.router.dispatch(event);


var G__26705 = seq__26606;
var G__26706 = chunk__26607;
var G__26707 = count__26608;
var G__26708 = (i__26609 + (1));
seq__26606 = G__26705;
chunk__26607 = G__26706;
count__26608 = G__26707;
i__26609 = G__26708;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26606);
if(temp__5825__auto__){
var seq__26606__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26606__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26606__$1);
var G__26710 = cljs.core.chunk_rest(seq__26606__$1);
var G__26711 = c__5548__auto__;
var G__26712 = cljs.core.count(c__5548__auto__);
var G__26713 = (0);
seq__26606 = G__26710;
chunk__26607 = G__26711;
count__26608 = G__26712;
i__26609 = G__26713;
continue;
} else {
var event = cljs.core.first(seq__26606__$1);
re_frame.router.dispatch(event);


var G__26714 = cljs.core.next(seq__26606__$1);
var G__26715 = null;
var G__26716 = (0);
var G__26717 = (0);
seq__26606 = G__26714;
chunk__26607 = G__26715;
count__26608 = G__26716;
i__26609 = G__26717;
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
var seq__26610 = cljs.core.seq(value);
var chunk__26611 = null;
var count__26612 = (0);
var i__26613 = (0);
while(true){
if((i__26613 < count__26612)){
var event = chunk__26611.cljs$core$IIndexed$_nth$arity$2(null,i__26613);
clear_event(event);


var G__26718 = seq__26610;
var G__26719 = chunk__26611;
var G__26720 = count__26612;
var G__26721 = (i__26613 + (1));
seq__26610 = G__26718;
chunk__26611 = G__26719;
count__26612 = G__26720;
i__26613 = G__26721;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26610);
if(temp__5825__auto__){
var seq__26610__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26610__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26610__$1);
var G__26722 = cljs.core.chunk_rest(seq__26610__$1);
var G__26723 = c__5548__auto__;
var G__26724 = cljs.core.count(c__5548__auto__);
var G__26725 = (0);
seq__26610 = G__26722;
chunk__26611 = G__26723;
count__26612 = G__26724;
i__26613 = G__26725;
continue;
} else {
var event = cljs.core.first(seq__26610__$1);
clear_event(event);


var G__26726 = cljs.core.next(seq__26610__$1);
var G__26727 = null;
var G__26728 = (0);
var G__26729 = (0);
seq__26610 = G__26726;
chunk__26611 = G__26727;
count__26612 = G__26728;
i__26613 = G__26729;
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
var _STAR_current_trace_STAR__orig_val__26619 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26620 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26620);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26730 = re_frame.interop.now();
var duration__26177__auto___26731 = (end__26176__auto___26730 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26731,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26730);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26619);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
