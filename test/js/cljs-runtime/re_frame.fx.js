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
var _STAR_current_trace_STAR__orig_val__26477 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26478 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26478);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26580 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26580)){
var new_db_26581 = temp__5825__auto___26580;
var fexpr__26479_26582 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26479_26582.cljs$core$IFn$_invoke$arity$1 ? fexpr__26479_26582.cljs$core$IFn$_invoke$arity$1(new_db_26581) : fexpr__26479_26582.call(null,new_db_26581));
} else {
}

var seq__26480 = cljs.core.seq(effects_without_db);
var chunk__26481 = null;
var count__26482 = (0);
var i__26483 = (0);
while(true){
if((i__26483 < count__26482)){
var vec__26494 = chunk__26481.cljs$core$IIndexed$_nth$arity$2(null,i__26483);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26494,(1),null);
var temp__5823__auto___26583 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26583)){
var effect_fn_26584 = temp__5823__auto___26583;
(effect_fn_26584.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26584.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26584.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26589 = seq__26480;
var G__26590 = chunk__26481;
var G__26591 = count__26482;
var G__26592 = (i__26483 + (1));
seq__26480 = G__26589;
chunk__26481 = G__26590;
count__26482 = G__26591;
i__26483 = G__26592;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26480);
if(temp__5825__auto__){
var seq__26480__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26480__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26480__$1);
var G__26593 = cljs.core.chunk_rest(seq__26480__$1);
var G__26594 = c__5548__auto__;
var G__26595 = cljs.core.count(c__5548__auto__);
var G__26596 = (0);
seq__26480 = G__26593;
chunk__26481 = G__26594;
count__26482 = G__26595;
i__26483 = G__26596;
continue;
} else {
var vec__26503 = cljs.core.first(seq__26480__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26503,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26503,(1),null);
var temp__5823__auto___26597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26597)){
var effect_fn_26598 = temp__5823__auto___26597;
(effect_fn_26598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26599 = cljs.core.next(seq__26480__$1);
var G__26600 = null;
var G__26601 = (0);
var G__26602 = (0);
seq__26480 = G__26599;
chunk__26481 = G__26600;
count__26482 = G__26601;
i__26483 = G__26602;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26603 = re_frame.interop.now();
var duration__26177__auto___26604 = (end__26176__auto___26603 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26604,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26603);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26477);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26605 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26605)){
var new_db_26606 = temp__5825__auto___26605;
var fexpr__26506_26607 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26506_26607.cljs$core$IFn$_invoke$arity$1 ? fexpr__26506_26607.cljs$core$IFn$_invoke$arity$1(new_db_26606) : fexpr__26506_26607.call(null,new_db_26606));
} else {
}

var seq__26507 = cljs.core.seq(effects_without_db);
var chunk__26508 = null;
var count__26509 = (0);
var i__26510 = (0);
while(true){
if((i__26510 < count__26509)){
var vec__26519 = chunk__26508.cljs$core$IIndexed$_nth$arity$2(null,i__26510);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,(1),null);
var temp__5823__auto___26608 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26608)){
var effect_fn_26609 = temp__5823__auto___26608;
(effect_fn_26609.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26609.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26609.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26610 = seq__26507;
var G__26611 = chunk__26508;
var G__26612 = count__26509;
var G__26613 = (i__26510 + (1));
seq__26507 = G__26610;
chunk__26508 = G__26611;
count__26509 = G__26612;
i__26510 = G__26613;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26507);
if(temp__5825__auto__){
var seq__26507__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26507__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26507__$1);
var G__26614 = cljs.core.chunk_rest(seq__26507__$1);
var G__26615 = c__5548__auto__;
var G__26616 = cljs.core.count(c__5548__auto__);
var G__26617 = (0);
seq__26507 = G__26614;
chunk__26508 = G__26615;
count__26509 = G__26616;
i__26510 = G__26617;
continue;
} else {
var vec__26523 = cljs.core.first(seq__26507__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26523,(1),null);
var temp__5823__auto___26618 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26618)){
var effect_fn_26619 = temp__5823__auto___26618;
(effect_fn_26619.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26619.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26619.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26623 = cljs.core.next(seq__26507__$1);
var G__26624 = null;
var G__26625 = (0);
var G__26626 = (0);
seq__26507 = G__26623;
chunk__26508 = G__26624;
count__26509 = G__26625;
i__26510 = G__26626;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26526){
var map__26527 = p__26526;
var map__26527__$1 = cljs.core.__destructure_map(map__26527);
var effect = map__26527__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26527__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26527__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26533 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26534 = null;
var count__26535 = (0);
var i__26536 = (0);
while(true){
if((i__26536 < count__26535)){
var effect = chunk__26534.cljs$core$IIndexed$_nth$arity$2(null,i__26536);
re_frame.fx.dispatch_later(effect);


var G__26627 = seq__26533;
var G__26628 = chunk__26534;
var G__26629 = count__26535;
var G__26630 = (i__26536 + (1));
seq__26533 = G__26627;
chunk__26534 = G__26628;
count__26535 = G__26629;
i__26536 = G__26630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26533);
if(temp__5825__auto__){
var seq__26533__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26533__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26533__$1);
var G__26631 = cljs.core.chunk_rest(seq__26533__$1);
var G__26632 = c__5548__auto__;
var G__26633 = cljs.core.count(c__5548__auto__);
var G__26634 = (0);
seq__26533 = G__26631;
chunk__26534 = G__26632;
count__26535 = G__26633;
i__26536 = G__26634;
continue;
} else {
var effect = cljs.core.first(seq__26533__$1);
re_frame.fx.dispatch_later(effect);


var G__26635 = cljs.core.next(seq__26533__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26533 = G__26635;
chunk__26534 = G__26636;
count__26535 = G__26637;
i__26536 = G__26638;
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
var seq__26550 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26551 = null;
var count__26552 = (0);
var i__26553 = (0);
while(true){
if((i__26553 < count__26552)){
var vec__26564 = chunk__26551.cljs$core$IIndexed$_nth$arity$2(null,i__26553);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26564,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26639)){
var effect_fn_26642 = temp__5823__auto___26639;
(effect_fn_26642.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26642.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26642.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26643 = seq__26550;
var G__26644 = chunk__26551;
var G__26645 = count__26552;
var G__26646 = (i__26553 + (1));
seq__26550 = G__26643;
chunk__26551 = G__26644;
count__26552 = G__26645;
i__26553 = G__26646;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26550);
if(temp__5825__auto__){
var seq__26550__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26550__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26550__$1);
var G__26647 = cljs.core.chunk_rest(seq__26550__$1);
var G__26648 = c__5548__auto__;
var G__26649 = cljs.core.count(c__5548__auto__);
var G__26650 = (0);
seq__26550 = G__26647;
chunk__26551 = G__26648;
count__26552 = G__26649;
i__26553 = G__26650;
continue;
} else {
var vec__26567 = cljs.core.first(seq__26550__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26651 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26651)){
var effect_fn_26652 = temp__5823__auto___26651;
(effect_fn_26652.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26652.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26652.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26653 = cljs.core.next(seq__26550__$1);
var G__26654 = null;
var G__26655 = (0);
var G__26656 = (0);
seq__26550 = G__26653;
chunk__26551 = G__26654;
count__26552 = G__26655;
i__26553 = G__26656;
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


var G__26657 = seq__26570;
var G__26658 = chunk__26571;
var G__26659 = count__26572;
var G__26660 = (i__26573 + (1));
seq__26570 = G__26657;
chunk__26571 = G__26658;
count__26572 = G__26659;
i__26573 = G__26660;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26570);
if(temp__5825__auto__){
var seq__26570__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26570__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26570__$1);
var G__26661 = cljs.core.chunk_rest(seq__26570__$1);
var G__26662 = c__5548__auto__;
var G__26663 = cljs.core.count(c__5548__auto__);
var G__26664 = (0);
seq__26570 = G__26661;
chunk__26571 = G__26662;
count__26572 = G__26663;
i__26573 = G__26664;
continue;
} else {
var event = cljs.core.first(seq__26570__$1);
re_frame.router.dispatch(event);


var G__26665 = cljs.core.next(seq__26570__$1);
var G__26666 = null;
var G__26667 = (0);
var G__26668 = (0);
seq__26570 = G__26665;
chunk__26571 = G__26666;
count__26572 = G__26667;
i__26573 = G__26668;
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


var G__26669 = seq__26574;
var G__26670 = chunk__26575;
var G__26671 = count__26576;
var G__26672 = (i__26577 + (1));
seq__26574 = G__26669;
chunk__26575 = G__26670;
count__26576 = G__26671;
i__26577 = G__26672;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26574);
if(temp__5825__auto__){
var seq__26574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26574__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26574__$1);
var G__26673 = cljs.core.chunk_rest(seq__26574__$1);
var G__26674 = c__5548__auto__;
var G__26675 = cljs.core.count(c__5548__auto__);
var G__26676 = (0);
seq__26574 = G__26673;
chunk__26575 = G__26674;
count__26576 = G__26675;
i__26577 = G__26676;
continue;
} else {
var event = cljs.core.first(seq__26574__$1);
clear_event(event);


var G__26677 = cljs.core.next(seq__26574__$1);
var G__26678 = null;
var G__26679 = (0);
var G__26680 = (0);
seq__26574 = G__26677;
chunk__26575 = G__26678;
count__26576 = G__26679;
i__26577 = G__26680;
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
var _STAR_current_trace_STAR__orig_val__26578 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26579 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26579);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26681 = re_frame.interop.now();
var duration__26177__auto___26682 = (end__26176__auto___26681 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26682,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26681);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26578);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
