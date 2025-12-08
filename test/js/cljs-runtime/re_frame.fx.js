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
var _STAR_current_trace_STAR__orig_val__26479 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26480 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26480);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26580 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26580)){
var new_db_26581 = temp__5825__auto___26580;
var fexpr__26481_26582 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26481_26582.cljs$core$IFn$_invoke$arity$1 ? fexpr__26481_26582.cljs$core$IFn$_invoke$arity$1(new_db_26581) : fexpr__26481_26582.call(null,new_db_26581));
} else {
}

var seq__26482 = cljs.core.seq(effects_without_db);
var chunk__26483 = null;
var count__26484 = (0);
var i__26485 = (0);
while(true){
if((i__26485 < count__26484)){
var vec__26497 = chunk__26483.cljs$core$IIndexed$_nth$arity$2(null,i__26485);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26497,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26497,(1),null);
var temp__5823__auto___26583 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26583)){
var effect_fn_26584 = temp__5823__auto___26583;
(effect_fn_26584.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26584.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26584.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26585 = seq__26482;
var G__26586 = chunk__26483;
var G__26587 = count__26484;
var G__26588 = (i__26485 + (1));
seq__26482 = G__26585;
chunk__26483 = G__26586;
count__26484 = G__26587;
i__26485 = G__26588;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26482);
if(temp__5825__auto__){
var seq__26482__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26482__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26482__$1);
var G__26589 = cljs.core.chunk_rest(seq__26482__$1);
var G__26590 = c__5548__auto__;
var G__26591 = cljs.core.count(c__5548__auto__);
var G__26592 = (0);
seq__26482 = G__26589;
chunk__26483 = G__26590;
count__26484 = G__26591;
i__26485 = G__26592;
continue;
} else {
var vec__26505 = cljs.core.first(seq__26482__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,(1),null);
var temp__5823__auto___26593 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26593)){
var effect_fn_26594 = temp__5823__auto___26593;
(effect_fn_26594.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26594.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26594.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26595 = cljs.core.next(seq__26482__$1);
var G__26596 = null;
var G__26597 = (0);
var G__26598 = (0);
seq__26482 = G__26595;
chunk__26483 = G__26596;
count__26484 = G__26597;
i__26485 = G__26598;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26176__auto___26599 = re_frame.interop.now();
var duration__26177__auto___26600 = (end__26176__auto___26599 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26600,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26599);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26479);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26601 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26601)){
var new_db_26602 = temp__5825__auto___26601;
var fexpr__26509_26603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26509_26603.cljs$core$IFn$_invoke$arity$1 ? fexpr__26509_26603.cljs$core$IFn$_invoke$arity$1(new_db_26602) : fexpr__26509_26603.call(null,new_db_26602));
} else {
}

var seq__26510 = cljs.core.seq(effects_without_db);
var chunk__26511 = null;
var count__26512 = (0);
var i__26513 = (0);
while(true){
if((i__26513 < count__26512)){
var vec__26520 = chunk__26511.cljs$core$IIndexed$_nth$arity$2(null,i__26513);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(1),null);
var temp__5823__auto___26604 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26604)){
var effect_fn_26605 = temp__5823__auto___26604;
(effect_fn_26605.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26605.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26605.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26606 = seq__26510;
var G__26607 = chunk__26511;
var G__26608 = count__26512;
var G__26609 = (i__26513 + (1));
seq__26510 = G__26606;
chunk__26511 = G__26607;
count__26512 = G__26608;
i__26513 = G__26609;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26510);
if(temp__5825__auto__){
var seq__26510__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26510__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26510__$1);
var G__26610 = cljs.core.chunk_rest(seq__26510__$1);
var G__26611 = c__5548__auto__;
var G__26612 = cljs.core.count(c__5548__auto__);
var G__26613 = (0);
seq__26510 = G__26610;
chunk__26511 = G__26611;
count__26512 = G__26612;
i__26513 = G__26613;
continue;
} else {
var vec__26526 = cljs.core.first(seq__26510__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,(1),null);
var temp__5823__auto___26614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26614)){
var effect_fn_26615 = temp__5823__auto___26614;
(effect_fn_26615.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26615.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26615.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26616 = cljs.core.next(seq__26510__$1);
var G__26617 = null;
var G__26618 = (0);
var G__26619 = (0);
seq__26510 = G__26616;
chunk__26511 = G__26617;
count__26512 = G__26618;
i__26513 = G__26619;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26529){
var map__26530 = p__26529;
var map__26530__$1 = cljs.core.__destructure_map(map__26530);
var effect = map__26530__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26530__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26530__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26543 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26544 = null;
var count__26545 = (0);
var i__26546 = (0);
while(true){
if((i__26546 < count__26545)){
var effect = chunk__26544.cljs$core$IIndexed$_nth$arity$2(null,i__26546);
re_frame.fx.dispatch_later(effect);


var G__26620 = seq__26543;
var G__26621 = chunk__26544;
var G__26622 = count__26545;
var G__26623 = (i__26546 + (1));
seq__26543 = G__26620;
chunk__26544 = G__26621;
count__26545 = G__26622;
i__26546 = G__26623;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26543);
if(temp__5825__auto__){
var seq__26543__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26543__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26543__$1);
var G__26624 = cljs.core.chunk_rest(seq__26543__$1);
var G__26625 = c__5548__auto__;
var G__26626 = cljs.core.count(c__5548__auto__);
var G__26627 = (0);
seq__26543 = G__26624;
chunk__26544 = G__26625;
count__26545 = G__26626;
i__26546 = G__26627;
continue;
} else {
var effect = cljs.core.first(seq__26543__$1);
re_frame.fx.dispatch_later(effect);


var G__26628 = cljs.core.next(seq__26543__$1);
var G__26629 = null;
var G__26630 = (0);
var G__26631 = (0);
seq__26543 = G__26628;
chunk__26544 = G__26629;
count__26545 = G__26630;
i__26546 = G__26631;
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
var seq__26553 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26554 = null;
var count__26555 = (0);
var i__26556 = (0);
while(true){
if((i__26556 < count__26555)){
var vec__26563 = chunk__26554.cljs$core$IIndexed$_nth$arity$2(null,i__26556);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26632 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26632)){
var effect_fn_26633 = temp__5823__auto___26632;
(effect_fn_26633.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26633.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26633.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26634 = seq__26553;
var G__26635 = chunk__26554;
var G__26636 = count__26555;
var G__26637 = (i__26556 + (1));
seq__26553 = G__26634;
chunk__26554 = G__26635;
count__26555 = G__26636;
i__26556 = G__26637;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26553);
if(temp__5825__auto__){
var seq__26553__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26553__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26553__$1);
var G__26638 = cljs.core.chunk_rest(seq__26553__$1);
var G__26639 = c__5548__auto__;
var G__26640 = cljs.core.count(c__5548__auto__);
var G__26641 = (0);
seq__26553 = G__26638;
chunk__26554 = G__26639;
count__26555 = G__26640;
i__26556 = G__26641;
continue;
} else {
var vec__26567 = cljs.core.first(seq__26553__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___26642 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26642)){
var effect_fn_26643 = temp__5823__auto___26642;
(effect_fn_26643.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26643.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26643.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26644 = cljs.core.next(seq__26553__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__26553 = G__26644;
chunk__26554 = G__26645;
count__26555 = G__26646;
i__26556 = G__26647;
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


var G__26648 = seq__26570;
var G__26649 = chunk__26571;
var G__26650 = count__26572;
var G__26651 = (i__26573 + (1));
seq__26570 = G__26648;
chunk__26571 = G__26649;
count__26572 = G__26650;
i__26573 = G__26651;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26570);
if(temp__5825__auto__){
var seq__26570__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26570__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26570__$1);
var G__26653 = cljs.core.chunk_rest(seq__26570__$1);
var G__26654 = c__5548__auto__;
var G__26655 = cljs.core.count(c__5548__auto__);
var G__26656 = (0);
seq__26570 = G__26653;
chunk__26571 = G__26654;
count__26572 = G__26655;
i__26573 = G__26656;
continue;
} else {
var event = cljs.core.first(seq__26570__$1);
re_frame.router.dispatch(event);


var G__26660 = cljs.core.next(seq__26570__$1);
var G__26661 = null;
var G__26662 = (0);
var G__26663 = (0);
seq__26570 = G__26660;
chunk__26571 = G__26661;
count__26572 = G__26662;
i__26573 = G__26663;
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


var G__26664 = seq__26574;
var G__26665 = chunk__26575;
var G__26666 = count__26576;
var G__26667 = (i__26577 + (1));
seq__26574 = G__26664;
chunk__26575 = G__26665;
count__26576 = G__26666;
i__26577 = G__26667;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26574);
if(temp__5825__auto__){
var seq__26574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26574__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26574__$1);
var G__26668 = cljs.core.chunk_rest(seq__26574__$1);
var G__26669 = c__5548__auto__;
var G__26670 = cljs.core.count(c__5548__auto__);
var G__26671 = (0);
seq__26574 = G__26668;
chunk__26575 = G__26669;
count__26576 = G__26670;
i__26577 = G__26671;
continue;
} else {
var event = cljs.core.first(seq__26574__$1);
clear_event(event);


var G__26672 = cljs.core.next(seq__26574__$1);
var G__26673 = null;
var G__26674 = (0);
var G__26675 = (0);
seq__26574 = G__26672;
chunk__26575 = G__26673;
count__26576 = G__26674;
i__26577 = G__26675;
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
var end__26176__auto___26676 = re_frame.interop.now();
var duration__26177__auto___26677 = (end__26176__auto___26676 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26677,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26676);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26578);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
