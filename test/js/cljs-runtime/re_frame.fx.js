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
var _STAR_current_trace_STAR__orig_val__26497 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26498 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26498);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26632 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26632)){
var new_db_26633 = temp__5825__auto___26632;
var fexpr__26499_26634 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26499_26634.cljs$core$IFn$_invoke$arity$1 ? fexpr__26499_26634.cljs$core$IFn$_invoke$arity$1(new_db_26633) : fexpr__26499_26634.call(null,new_db_26633));
} else {
}

var seq__26500 = cljs.core.seq(effects_without_db);
var chunk__26501 = null;
var count__26502 = (0);
var i__26503 = (0);
while(true){
if((i__26503 < count__26502)){
var vec__26517 = chunk__26501.cljs$core$IIndexed$_nth$arity$2(null,i__26503);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26517,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26517,(1),null);
var temp__5823__auto___26637 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26637)){
var effect_fn_26638 = temp__5823__auto___26637;
(effect_fn_26638.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26638.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26638.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26640 = seq__26500;
var G__26641 = chunk__26501;
var G__26642 = count__26502;
var G__26643 = (i__26503 + (1));
seq__26500 = G__26640;
chunk__26501 = G__26641;
count__26502 = G__26642;
i__26503 = G__26643;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26500);
if(temp__5825__auto__){
var seq__26500__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26500__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26500__$1);
var G__26644 = cljs.core.chunk_rest(seq__26500__$1);
var G__26645 = c__5548__auto__;
var G__26646 = cljs.core.count(c__5548__auto__);
var G__26647 = (0);
seq__26500 = G__26644;
chunk__26501 = G__26645;
count__26502 = G__26646;
i__26503 = G__26647;
continue;
} else {
var vec__26521 = cljs.core.first(seq__26500__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(1),null);
var temp__5823__auto___26648 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26648)){
var effect_fn_26649 = temp__5823__auto___26648;
(effect_fn_26649.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26649.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26649.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26653 = cljs.core.next(seq__26500__$1);
var G__26654 = null;
var G__26655 = (0);
var G__26656 = (0);
seq__26500 = G__26653;
chunk__26501 = G__26654;
count__26502 = G__26655;
i__26503 = G__26656;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26657 = re_frame.interop.now();
var duration__26177__auto___26658 = (end__26176__auto___26657 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26658,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26657);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26497);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26659 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26659)){
var new_db_26660 = temp__5825__auto___26659;
var fexpr__26530_26661 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26530_26661.cljs$core$IFn$_invoke$arity$1 ? fexpr__26530_26661.cljs$core$IFn$_invoke$arity$1(new_db_26660) : fexpr__26530_26661.call(null,new_db_26660));
} else {
}

var seq__26531 = cljs.core.seq(effects_without_db);
var chunk__26532 = null;
var count__26533 = (0);
var i__26534 = (0);
while(true){
if((i__26534 < count__26533)){
var vec__26552 = chunk__26532.cljs$core$IIndexed$_nth$arity$2(null,i__26534);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26552,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26552,(1),null);
var temp__5823__auto___26662 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26662)){
var effect_fn_26663 = temp__5823__auto___26662;
(effect_fn_26663.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26663.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26663.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26664 = seq__26531;
var G__26665 = chunk__26532;
var G__26666 = count__26533;
var G__26667 = (i__26534 + (1));
seq__26531 = G__26664;
chunk__26532 = G__26665;
count__26533 = G__26666;
i__26534 = G__26667;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26531);
if(temp__5825__auto__){
var seq__26531__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26531__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26531__$1);
var G__26668 = cljs.core.chunk_rest(seq__26531__$1);
var G__26669 = c__5548__auto__;
var G__26670 = cljs.core.count(c__5548__auto__);
var G__26671 = (0);
seq__26531 = G__26668;
chunk__26532 = G__26669;
count__26533 = G__26670;
i__26534 = G__26671;
continue;
} else {
var vec__26561 = cljs.core.first(seq__26531__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(1),null);
var temp__5823__auto___26672 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26672)){
var effect_fn_26673 = temp__5823__auto___26672;
(effect_fn_26673.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26673.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26673.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26674 = cljs.core.next(seq__26531__$1);
var G__26675 = null;
var G__26676 = (0);
var G__26677 = (0);
seq__26531 = G__26674;
chunk__26532 = G__26675;
count__26533 = G__26676;
i__26534 = G__26677;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26580){
var map__26581 = p__26580;
var map__26581__$1 = cljs.core.__destructure_map(map__26581);
var effect = map__26581__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26581__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26581__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26584 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26585 = null;
var count__26586 = (0);
var i__26587 = (0);
while(true){
if((i__26587 < count__26586)){
var effect = chunk__26585.cljs$core$IIndexed$_nth$arity$2(null,i__26587);
re_frame.fx.dispatch_later(effect);


var G__26681 = seq__26584;
var G__26682 = chunk__26585;
var G__26683 = count__26586;
var G__26684 = (i__26587 + (1));
seq__26584 = G__26681;
chunk__26585 = G__26682;
count__26586 = G__26683;
i__26587 = G__26684;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26584);
if(temp__5825__auto__){
var seq__26584__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26584__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26584__$1);
var G__26685 = cljs.core.chunk_rest(seq__26584__$1);
var G__26686 = c__5548__auto__;
var G__26687 = cljs.core.count(c__5548__auto__);
var G__26688 = (0);
seq__26584 = G__26685;
chunk__26585 = G__26686;
count__26586 = G__26687;
i__26587 = G__26688;
continue;
} else {
var effect = cljs.core.first(seq__26584__$1);
re_frame.fx.dispatch_later(effect);


var G__26689 = cljs.core.next(seq__26584__$1);
var G__26690 = null;
var G__26691 = (0);
var G__26692 = (0);
seq__26584 = G__26689;
chunk__26585 = G__26690;
count__26586 = G__26691;
i__26587 = G__26692;
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
var seq__26590 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26591 = null;
var count__26592 = (0);
var i__26593 = (0);
while(true){
if((i__26593 < count__26592)){
var vec__26600 = chunk__26591.cljs$core$IIndexed$_nth$arity$2(null,i__26593);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26600,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26600,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26693 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26693)){
var effect_fn_26694 = temp__5823__auto___26693;
(effect_fn_26694.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26694.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26694.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26695 = seq__26590;
var G__26696 = chunk__26591;
var G__26697 = count__26592;
var G__26698 = (i__26593 + (1));
seq__26590 = G__26695;
chunk__26591 = G__26696;
count__26592 = G__26697;
i__26593 = G__26698;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26590);
if(temp__5825__auto__){
var seq__26590__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26590__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26590__$1);
var G__26699 = cljs.core.chunk_rest(seq__26590__$1);
var G__26700 = c__5548__auto__;
var G__26701 = cljs.core.count(c__5548__auto__);
var G__26702 = (0);
seq__26590 = G__26699;
chunk__26591 = G__26700;
count__26592 = G__26701;
i__26593 = G__26702;
continue;
} else {
var vec__26608 = cljs.core.first(seq__26590__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26703 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26703)){
var effect_fn_26704 = temp__5823__auto___26703;
(effect_fn_26704.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26704.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26704.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26705 = cljs.core.next(seq__26590__$1);
var G__26706 = null;
var G__26707 = (0);
var G__26708 = (0);
seq__26590 = G__26705;
chunk__26591 = G__26706;
count__26592 = G__26707;
i__26593 = G__26708;
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
var seq__26611 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26612 = null;
var count__26613 = (0);
var i__26614 = (0);
while(true){
if((i__26614 < count__26613)){
var event = chunk__26612.cljs$core$IIndexed$_nth$arity$2(null,i__26614);
re_frame.router.dispatch(event);


var G__26709 = seq__26611;
var G__26710 = chunk__26612;
var G__26711 = count__26613;
var G__26712 = (i__26614 + (1));
seq__26611 = G__26709;
chunk__26612 = G__26710;
count__26613 = G__26711;
i__26614 = G__26712;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26611);
if(temp__5825__auto__){
var seq__26611__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26611__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26611__$1);
var G__26713 = cljs.core.chunk_rest(seq__26611__$1);
var G__26714 = c__5548__auto__;
var G__26715 = cljs.core.count(c__5548__auto__);
var G__26716 = (0);
seq__26611 = G__26713;
chunk__26612 = G__26714;
count__26613 = G__26715;
i__26614 = G__26716;
continue;
} else {
var event = cljs.core.first(seq__26611__$1);
re_frame.router.dispatch(event);


var G__26717 = cljs.core.next(seq__26611__$1);
var G__26718 = null;
var G__26719 = (0);
var G__26720 = (0);
seq__26611 = G__26717;
chunk__26612 = G__26718;
count__26613 = G__26719;
i__26614 = G__26720;
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
var seq__26620 = cljs.core.seq(value);
var chunk__26621 = null;
var count__26622 = (0);
var i__26623 = (0);
while(true){
if((i__26623 < count__26622)){
var event = chunk__26621.cljs$core$IIndexed$_nth$arity$2(null,i__26623);
clear_event(event);


var G__26721 = seq__26620;
var G__26722 = chunk__26621;
var G__26723 = count__26622;
var G__26724 = (i__26623 + (1));
seq__26620 = G__26721;
chunk__26621 = G__26722;
count__26622 = G__26723;
i__26623 = G__26724;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26620);
if(temp__5825__auto__){
var seq__26620__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26620__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26620__$1);
var G__26725 = cljs.core.chunk_rest(seq__26620__$1);
var G__26726 = c__5548__auto__;
var G__26727 = cljs.core.count(c__5548__auto__);
var G__26728 = (0);
seq__26620 = G__26725;
chunk__26621 = G__26726;
count__26622 = G__26727;
i__26623 = G__26728;
continue;
} else {
var event = cljs.core.first(seq__26620__$1);
clear_event(event);


var G__26729 = cljs.core.next(seq__26620__$1);
var G__26730 = null;
var G__26731 = (0);
var G__26732 = (0);
seq__26620 = G__26729;
chunk__26621 = G__26730;
count__26622 = G__26731;
i__26623 = G__26732;
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
var _STAR_current_trace_STAR__orig_val__26627 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26628 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26628);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26733 = re_frame.interop.now();
var duration__26177__auto___26734 = (end__26176__auto___26733 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26733);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26627);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
