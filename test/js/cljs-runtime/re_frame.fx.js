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
var temp__5825__auto___26602 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26602)){
var new_db_26603 = temp__5825__auto___26602;
var fexpr__26494_26604 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26494_26604.cljs$core$IFn$_invoke$arity$1 ? fexpr__26494_26604.cljs$core$IFn$_invoke$arity$1(new_db_26603) : fexpr__26494_26604.call(null,new_db_26603));
} else {
}

var seq__26495 = cljs.core.seq(effects_without_db);
var chunk__26496 = null;
var count__26497 = (0);
var i__26498 = (0);
while(true){
if((i__26498 < count__26497)){
var vec__26511 = chunk__26496.cljs$core$IIndexed$_nth$arity$2(null,i__26498);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26511,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26511,(1),null);
var temp__5823__auto___26605 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26605)){
var effect_fn_26606 = temp__5823__auto___26605;
(effect_fn_26606.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26606.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26606.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26610 = seq__26495;
var G__26611 = chunk__26496;
var G__26612 = count__26497;
var G__26613 = (i__26498 + (1));
seq__26495 = G__26610;
chunk__26496 = G__26611;
count__26497 = G__26612;
i__26498 = G__26613;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26495);
if(temp__5825__auto__){
var seq__26495__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26495__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26495__$1);
var G__26614 = cljs.core.chunk_rest(seq__26495__$1);
var G__26615 = c__5548__auto__;
var G__26616 = cljs.core.count(c__5548__auto__);
var G__26617 = (0);
seq__26495 = G__26614;
chunk__26496 = G__26615;
count__26497 = G__26616;
i__26498 = G__26617;
continue;
} else {
var vec__26520 = cljs.core.first(seq__26495__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(1),null);
var temp__5823__auto___26618 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26618)){
var effect_fn_26619 = temp__5823__auto___26618;
(effect_fn_26619.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26619.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26619.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26620 = cljs.core.next(seq__26495__$1);
var G__26621 = null;
var G__26622 = (0);
var G__26623 = (0);
seq__26495 = G__26620;
chunk__26496 = G__26621;
count__26497 = G__26622;
i__26498 = G__26623;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26624 = re_frame.interop.now();
var duration__26177__auto___26625 = (end__26176__auto___26624 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26625,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26624);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26492);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26626 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26626)){
var new_db_26627 = temp__5825__auto___26626;
var fexpr__26523_26628 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26523_26628.cljs$core$IFn$_invoke$arity$1 ? fexpr__26523_26628.cljs$core$IFn$_invoke$arity$1(new_db_26627) : fexpr__26523_26628.call(null,new_db_26627));
} else {
}

var seq__26524 = cljs.core.seq(effects_without_db);
var chunk__26526 = null;
var count__26527 = (0);
var i__26528 = (0);
while(true){
if((i__26528 < count__26527)){
var vec__26539 = chunk__26526.cljs$core$IIndexed$_nth$arity$2(null,i__26528);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(1),null);
var temp__5823__auto___26629 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26629)){
var effect_fn_26630 = temp__5823__auto___26629;
(effect_fn_26630.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26630.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26630.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26631 = seq__26524;
var G__26632 = chunk__26526;
var G__26633 = count__26527;
var G__26634 = (i__26528 + (1));
seq__26524 = G__26631;
chunk__26526 = G__26632;
count__26527 = G__26633;
i__26528 = G__26634;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26524);
if(temp__5825__auto__){
var seq__26524__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26524__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26524__$1);
var G__26635 = cljs.core.chunk_rest(seq__26524__$1);
var G__26636 = c__5548__auto__;
var G__26637 = cljs.core.count(c__5548__auto__);
var G__26638 = (0);
seq__26524 = G__26635;
chunk__26526 = G__26636;
count__26527 = G__26637;
i__26528 = G__26638;
continue;
} else {
var vec__26548 = cljs.core.first(seq__26524__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(1),null);
var temp__5823__auto___26639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26639)){
var effect_fn_26640 = temp__5823__auto___26639;
(effect_fn_26640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26640.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26641 = cljs.core.next(seq__26524__$1);
var G__26642 = null;
var G__26643 = (0);
var G__26644 = (0);
seq__26524 = G__26641;
chunk__26526 = G__26642;
count__26527 = G__26643;
i__26528 = G__26644;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26551){
var map__26552 = p__26551;
var map__26552__$1 = cljs.core.__destructure_map(map__26552);
var effect = map__26552__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26552__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26552__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var chunk__26570 = null;
var count__26571 = (0);
var i__26572 = (0);
while(true){
if((i__26572 < count__26571)){
var effect = chunk__26570.cljs$core$IIndexed$_nth$arity$2(null,i__26572);
re_frame.fx.dispatch_later(effect);


var G__26645 = seq__26569;
var G__26646 = chunk__26570;
var G__26647 = count__26571;
var G__26648 = (i__26572 + (1));
seq__26569 = G__26645;
chunk__26570 = G__26646;
count__26571 = G__26647;
i__26572 = G__26648;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26569);
if(temp__5825__auto__){
var seq__26569__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26569__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26569__$1);
var G__26649 = cljs.core.chunk_rest(seq__26569__$1);
var G__26650 = c__5548__auto__;
var G__26651 = cljs.core.count(c__5548__auto__);
var G__26652 = (0);
seq__26569 = G__26649;
chunk__26570 = G__26650;
count__26571 = G__26651;
i__26572 = G__26652;
continue;
} else {
var effect = cljs.core.first(seq__26569__$1);
re_frame.fx.dispatch_later(effect);


var G__26653 = cljs.core.next(seq__26569__$1);
var G__26654 = null;
var G__26655 = (0);
var G__26656 = (0);
seq__26569 = G__26653;
chunk__26570 = G__26654;
count__26571 = G__26655;
i__26572 = G__26656;
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
var seq__26573 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26574 = null;
var count__26575 = (0);
var i__26576 = (0);
while(true){
if((i__26576 < count__26575)){
var vec__26583 = chunk__26574.cljs$core$IIndexed$_nth$arity$2(null,i__26576);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583,(1),null);
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


var G__26659 = seq__26573;
var G__26660 = chunk__26574;
var G__26661 = count__26575;
var G__26662 = (i__26576 + (1));
seq__26573 = G__26659;
chunk__26574 = G__26660;
count__26575 = G__26661;
i__26576 = G__26662;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26573);
if(temp__5825__auto__){
var seq__26573__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26573__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26573__$1);
var G__26663 = cljs.core.chunk_rest(seq__26573__$1);
var G__26664 = c__5548__auto__;
var G__26665 = cljs.core.count(c__5548__auto__);
var G__26666 = (0);
seq__26573 = G__26663;
chunk__26574 = G__26664;
count__26575 = G__26665;
i__26576 = G__26666;
continue;
} else {
var vec__26586 = cljs.core.first(seq__26573__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(1),null);
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


var G__26669 = cljs.core.next(seq__26573__$1);
var G__26670 = null;
var G__26671 = (0);
var G__26672 = (0);
seq__26573 = G__26669;
chunk__26574 = G__26670;
count__26575 = G__26671;
i__26576 = G__26672;
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


var G__26673 = seq__26589;
var G__26674 = chunk__26590;
var G__26675 = count__26591;
var G__26676 = (i__26592 + (1));
seq__26589 = G__26673;
chunk__26590 = G__26674;
count__26591 = G__26675;
i__26592 = G__26676;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26589);
if(temp__5825__auto__){
var seq__26589__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26589__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26589__$1);
var G__26679 = cljs.core.chunk_rest(seq__26589__$1);
var G__26680 = c__5548__auto__;
var G__26681 = cljs.core.count(c__5548__auto__);
var G__26682 = (0);
seq__26589 = G__26679;
chunk__26590 = G__26680;
count__26591 = G__26681;
i__26592 = G__26682;
continue;
} else {
var event = cljs.core.first(seq__26589__$1);
re_frame.router.dispatch(event);


var G__26683 = cljs.core.next(seq__26589__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26589 = G__26683;
chunk__26590 = G__26684;
count__26591 = G__26685;
i__26592 = G__26686;
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


var G__26687 = seq__26593;
var G__26688 = chunk__26594;
var G__26689 = count__26595;
var G__26690 = (i__26596 + (1));
seq__26593 = G__26687;
chunk__26594 = G__26688;
count__26595 = G__26689;
i__26596 = G__26690;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26593);
if(temp__5825__auto__){
var seq__26593__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26593__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26593__$1);
var G__26691 = cljs.core.chunk_rest(seq__26593__$1);
var G__26692 = c__5548__auto__;
var G__26693 = cljs.core.count(c__5548__auto__);
var G__26694 = (0);
seq__26593 = G__26691;
chunk__26594 = G__26692;
count__26595 = G__26693;
i__26596 = G__26694;
continue;
} else {
var event = cljs.core.first(seq__26593__$1);
clear_event(event);


var G__26695 = cljs.core.next(seq__26593__$1);
var G__26696 = null;
var G__26697 = (0);
var G__26698 = (0);
seq__26593 = G__26695;
chunk__26594 = G__26696;
count__26595 = G__26697;
i__26596 = G__26698;
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
var end__26176__auto___26699 = re_frame.interop.now();
var duration__26177__auto___26700 = (end__26176__auto___26699 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26700,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26699);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26597);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
