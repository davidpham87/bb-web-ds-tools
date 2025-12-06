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
var _STAR_current_trace_STAR__orig_val__26507 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26508 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26508);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26638 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26638)){
var new_db_26639 = temp__5825__auto___26638;
var fexpr__26511_26640 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26511_26640.cljs$core$IFn$_invoke$arity$1 ? fexpr__26511_26640.cljs$core$IFn$_invoke$arity$1(new_db_26639) : fexpr__26511_26640.call(null,new_db_26639));
} else {
}

var seq__26513 = cljs.core.seq(effects_without_db);
var chunk__26514 = null;
var count__26515 = (0);
var i__26516 = (0);
while(true){
if((i__26516 < count__26515)){
var vec__26524 = chunk__26514.cljs$core$IIndexed$_nth$arity$2(null,i__26516);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(1),null);
var temp__5823__auto___26641 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26641)){
var effect_fn_26642 = temp__5823__auto___26641;
(effect_fn_26642.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26642.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26642.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26643 = seq__26513;
var G__26644 = chunk__26514;
var G__26645 = count__26515;
var G__26646 = (i__26516 + (1));
seq__26513 = G__26643;
chunk__26514 = G__26644;
count__26515 = G__26645;
i__26516 = G__26646;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26513);
if(temp__5825__auto__){
var seq__26513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26513__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26513__$1);
var G__26647 = cljs.core.chunk_rest(seq__26513__$1);
var G__26648 = c__5548__auto__;
var G__26649 = cljs.core.count(c__5548__auto__);
var G__26650 = (0);
seq__26513 = G__26647;
chunk__26514 = G__26648;
count__26515 = G__26649;
i__26516 = G__26650;
continue;
} else {
var vec__26527 = cljs.core.first(seq__26513__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,(1),null);
var temp__5823__auto___26651 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26651)){
var effect_fn_26652 = temp__5823__auto___26651;
(effect_fn_26652.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26652.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26652.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26653 = cljs.core.next(seq__26513__$1);
var G__26654 = null;
var G__26655 = (0);
var G__26656 = (0);
seq__26513 = G__26653;
chunk__26514 = G__26654;
count__26515 = G__26655;
i__26516 = G__26656;
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
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26507);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26661 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26661)){
var new_db_26662 = temp__5825__auto___26661;
var fexpr__26533_26664 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26533_26664.cljs$core$IFn$_invoke$arity$1 ? fexpr__26533_26664.cljs$core$IFn$_invoke$arity$1(new_db_26662) : fexpr__26533_26664.call(null,new_db_26662));
} else {
}

var seq__26534 = cljs.core.seq(effects_without_db);
var chunk__26535 = null;
var count__26536 = (0);
var i__26537 = (0);
while(true){
if((i__26537 < count__26536)){
var vec__26551 = chunk__26535.cljs$core$IIndexed$_nth$arity$2(null,i__26537);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551,(1),null);
var temp__5823__auto___26665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26665)){
var effect_fn_26666 = temp__5823__auto___26665;
(effect_fn_26666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26667 = seq__26534;
var G__26668 = chunk__26535;
var G__26669 = count__26536;
var G__26670 = (i__26537 + (1));
seq__26534 = G__26667;
chunk__26535 = G__26668;
count__26536 = G__26669;
i__26537 = G__26670;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26534);
if(temp__5825__auto__){
var seq__26534__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26534__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26534__$1);
var G__26671 = cljs.core.chunk_rest(seq__26534__$1);
var G__26672 = c__5548__auto__;
var G__26673 = cljs.core.count(c__5548__auto__);
var G__26674 = (0);
seq__26534 = G__26671;
chunk__26535 = G__26672;
count__26536 = G__26673;
i__26537 = G__26674;
continue;
} else {
var vec__26564 = cljs.core.first(seq__26534__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(1),null);
var temp__5823__auto___26675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26675)){
var effect_fn_26676 = temp__5823__auto___26675;
(effect_fn_26676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26677 = cljs.core.next(seq__26534__$1);
var G__26678 = null;
var G__26679 = (0);
var G__26680 = (0);
seq__26534 = G__26677;
chunk__26535 = G__26678;
count__26536 = G__26679;
i__26537 = G__26680;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26581){
var map__26582 = p__26581;
var map__26582__$1 = cljs.core.__destructure_map(map__26582);
var effect = map__26582__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26582__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26582__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26583 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26584 = null;
var count__26585 = (0);
var i__26586 = (0);
while(true){
if((i__26586 < count__26585)){
var effect = chunk__26584.cljs$core$IIndexed$_nth$arity$2(null,i__26586);
re_frame.fx.dispatch_later(effect);


var G__26681 = seq__26583;
var G__26682 = chunk__26584;
var G__26683 = count__26585;
var G__26684 = (i__26586 + (1));
seq__26583 = G__26681;
chunk__26584 = G__26682;
count__26585 = G__26683;
i__26586 = G__26684;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26583);
if(temp__5825__auto__){
var seq__26583__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26583__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26583__$1);
var G__26685 = cljs.core.chunk_rest(seq__26583__$1);
var G__26686 = c__5548__auto__;
var G__26687 = cljs.core.count(c__5548__auto__);
var G__26688 = (0);
seq__26583 = G__26685;
chunk__26584 = G__26686;
count__26585 = G__26687;
i__26586 = G__26688;
continue;
} else {
var effect = cljs.core.first(seq__26583__$1);
re_frame.fx.dispatch_later(effect);


var G__26689 = cljs.core.next(seq__26583__$1);
var G__26690 = null;
var G__26691 = (0);
var G__26692 = (0);
seq__26583 = G__26689;
chunk__26584 = G__26690;
count__26585 = G__26691;
i__26586 = G__26692;
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
var vec__26606 = chunk__26591.cljs$core$IIndexed$_nth$arity$2(null,i__26593);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26606,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26606,(1),null);
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
var vec__26613 = cljs.core.first(seq__26590__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26613,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26613,(1),null);
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
var seq__26621 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26622 = null;
var count__26623 = (0);
var i__26624 = (0);
while(true){
if((i__26624 < count__26623)){
var event = chunk__26622.cljs$core$IIndexed$_nth$arity$2(null,i__26624);
re_frame.router.dispatch(event);


var G__26709 = seq__26621;
var G__26710 = chunk__26622;
var G__26711 = count__26623;
var G__26712 = (i__26624 + (1));
seq__26621 = G__26709;
chunk__26622 = G__26710;
count__26623 = G__26711;
i__26624 = G__26712;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26621);
if(temp__5825__auto__){
var seq__26621__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26621__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26621__$1);
var G__26713 = cljs.core.chunk_rest(seq__26621__$1);
var G__26714 = c__5548__auto__;
var G__26715 = cljs.core.count(c__5548__auto__);
var G__26716 = (0);
seq__26621 = G__26713;
chunk__26622 = G__26714;
count__26623 = G__26715;
i__26624 = G__26716;
continue;
} else {
var event = cljs.core.first(seq__26621__$1);
re_frame.router.dispatch(event);


var G__26717 = cljs.core.next(seq__26621__$1);
var G__26718 = null;
var G__26719 = (0);
var G__26720 = (0);
seq__26621 = G__26717;
chunk__26622 = G__26718;
count__26623 = G__26719;
i__26624 = G__26720;
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
var seq__26628 = cljs.core.seq(value);
var chunk__26629 = null;
var count__26630 = (0);
var i__26631 = (0);
while(true){
if((i__26631 < count__26630)){
var event = chunk__26629.cljs$core$IIndexed$_nth$arity$2(null,i__26631);
clear_event(event);


var G__26721 = seq__26628;
var G__26722 = chunk__26629;
var G__26723 = count__26630;
var G__26724 = (i__26631 + (1));
seq__26628 = G__26721;
chunk__26629 = G__26722;
count__26630 = G__26723;
i__26631 = G__26724;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26628);
if(temp__5825__auto__){
var seq__26628__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26628__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26628__$1);
var G__26725 = cljs.core.chunk_rest(seq__26628__$1);
var G__26726 = c__5548__auto__;
var G__26727 = cljs.core.count(c__5548__auto__);
var G__26728 = (0);
seq__26628 = G__26725;
chunk__26629 = G__26726;
count__26630 = G__26727;
i__26631 = G__26728;
continue;
} else {
var event = cljs.core.first(seq__26628__$1);
clear_event(event);


var G__26729 = cljs.core.next(seq__26628__$1);
var G__26730 = null;
var G__26731 = (0);
var G__26732 = (0);
seq__26628 = G__26729;
chunk__26629 = G__26730;
count__26630 = G__26731;
i__26631 = G__26732;
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
var _STAR_current_trace_STAR__orig_val__26636 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26637 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26637);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26733 = re_frame.interop.now();
var duration__26177__auto___26734 = (end__26176__auto___26733 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26733);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26636);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
