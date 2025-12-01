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
var _STAR_current_trace_STAR__orig_val__24302 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24303 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24303);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24520 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24520)){
var new_db_24521 = temp__5825__auto___24520;
var fexpr__24304_24522 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24304_24522.cljs$core$IFn$_invoke$arity$1 ? fexpr__24304_24522.cljs$core$IFn$_invoke$arity$1(new_db_24521) : fexpr__24304_24522.call(null,new_db_24521));
} else {
}

var seq__24305 = cljs.core.seq(effects_without_db);
var chunk__24306 = null;
var count__24307 = (0);
var i__24308 = (0);
while(true){
if((i__24308 < count__24307)){
var vec__24328 = chunk__24306.cljs$core$IIndexed$_nth$arity$2(null,i__24308);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24328,(1),null);
var temp__5823__auto___24523 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24523)){
var effect_fn_24524 = temp__5823__auto___24523;
(effect_fn_24524.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24524.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24524.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24525 = seq__24305;
var G__24526 = chunk__24306;
var G__24527 = count__24307;
var G__24528 = (i__24308 + (1));
seq__24305 = G__24525;
chunk__24306 = G__24526;
count__24307 = G__24527;
i__24308 = G__24528;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24305);
if(temp__5825__auto__){
var seq__24305__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24305__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24305__$1);
var G__24529 = cljs.core.chunk_rest(seq__24305__$1);
var G__24530 = c__5548__auto__;
var G__24531 = cljs.core.count(c__5548__auto__);
var G__24532 = (0);
seq__24305 = G__24529;
chunk__24306 = G__24530;
count__24307 = G__24531;
i__24308 = G__24532;
continue;
} else {
var vec__24335 = cljs.core.first(seq__24305__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24335,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24335,(1),null);
var temp__5823__auto___24533 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24533)){
var effect_fn_24534 = temp__5823__auto___24533;
(effect_fn_24534.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24534.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24534.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24535 = cljs.core.next(seq__24305__$1);
var G__24536 = null;
var G__24537 = (0);
var G__24538 = (0);
seq__24305 = G__24535;
chunk__24306 = G__24536;
count__24307 = G__24537;
i__24308 = G__24538;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23695__auto___24539 = re_frame.interop.now();
var duration__23696__auto___24540 = (end__23695__auto___24539 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23696__auto___24540,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23695__auto___24539);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24302);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24541 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24541)){
var new_db_24542 = temp__5825__auto___24541;
var fexpr__24340_24543 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24340_24543.cljs$core$IFn$_invoke$arity$1 ? fexpr__24340_24543.cljs$core$IFn$_invoke$arity$1(new_db_24542) : fexpr__24340_24543.call(null,new_db_24542));
} else {
}

var seq__24341 = cljs.core.seq(effects_without_db);
var chunk__24342 = null;
var count__24343 = (0);
var i__24344 = (0);
while(true){
if((i__24344 < count__24343)){
var vec__24363 = chunk__24342.cljs$core$IIndexed$_nth$arity$2(null,i__24344);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24363,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24363,(1),null);
var temp__5823__auto___24544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24544)){
var effect_fn_24545 = temp__5823__auto___24544;
(effect_fn_24545.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24545.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24545.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24546 = seq__24341;
var G__24547 = chunk__24342;
var G__24548 = count__24343;
var G__24549 = (i__24344 + (1));
seq__24341 = G__24546;
chunk__24342 = G__24547;
count__24343 = G__24548;
i__24344 = G__24549;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24341);
if(temp__5825__auto__){
var seq__24341__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24341__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24341__$1);
var G__24550 = cljs.core.chunk_rest(seq__24341__$1);
var G__24551 = c__5548__auto__;
var G__24552 = cljs.core.count(c__5548__auto__);
var G__24553 = (0);
seq__24341 = G__24550;
chunk__24342 = G__24551;
count__24343 = G__24552;
i__24344 = G__24553;
continue;
} else {
var vec__24366 = cljs.core.first(seq__24341__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366,(1),null);
var temp__5823__auto___24554 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24554)){
var effect_fn_24555 = temp__5823__auto___24554;
(effect_fn_24555.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24555.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24555.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24556 = cljs.core.next(seq__24341__$1);
var G__24557 = null;
var G__24558 = (0);
var G__24559 = (0);
seq__24341 = G__24556;
chunk__24342 = G__24557;
count__24343 = G__24558;
i__24344 = G__24559;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24386){
var map__24388 = p__24386;
var map__24388__$1 = cljs.core.__destructure_map(map__24388);
var effect = map__24388__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24388__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24388__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24419 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24420 = null;
var count__24421 = (0);
var i__24422 = (0);
while(true){
if((i__24422 < count__24421)){
var effect = chunk__24420.cljs$core$IIndexed$_nth$arity$2(null,i__24422);
re_frame.fx.dispatch_later(effect);


var G__24560 = seq__24419;
var G__24561 = chunk__24420;
var G__24562 = count__24421;
var G__24563 = (i__24422 + (1));
seq__24419 = G__24560;
chunk__24420 = G__24561;
count__24421 = G__24562;
i__24422 = G__24563;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24419);
if(temp__5825__auto__){
var seq__24419__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24419__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24419__$1);
var G__24564 = cljs.core.chunk_rest(seq__24419__$1);
var G__24565 = c__5548__auto__;
var G__24566 = cljs.core.count(c__5548__auto__);
var G__24567 = (0);
seq__24419 = G__24564;
chunk__24420 = G__24565;
count__24421 = G__24566;
i__24422 = G__24567;
continue;
} else {
var effect = cljs.core.first(seq__24419__$1);
re_frame.fx.dispatch_later(effect);


var G__24568 = cljs.core.next(seq__24419__$1);
var G__24569 = null;
var G__24570 = (0);
var G__24571 = (0);
seq__24419 = G__24568;
chunk__24420 = G__24569;
count__24421 = G__24570;
i__24422 = G__24571;
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
var seq__24462 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24463 = null;
var count__24464 = (0);
var i__24465 = (0);
while(true){
if((i__24465 < count__24464)){
var vec__24479 = chunk__24463.cljs$core$IIndexed$_nth$arity$2(null,i__24465);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24572 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24572)){
var effect_fn_24573 = temp__5823__auto___24572;
(effect_fn_24573.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24573.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24573.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24574 = seq__24462;
var G__24575 = chunk__24463;
var G__24576 = count__24464;
var G__24577 = (i__24465 + (1));
seq__24462 = G__24574;
chunk__24463 = G__24575;
count__24464 = G__24576;
i__24465 = G__24577;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24462);
if(temp__5825__auto__){
var seq__24462__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24462__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24462__$1);
var G__24578 = cljs.core.chunk_rest(seq__24462__$1);
var G__24579 = c__5548__auto__;
var G__24580 = cljs.core.count(c__5548__auto__);
var G__24581 = (0);
seq__24462 = G__24578;
chunk__24463 = G__24579;
count__24464 = G__24580;
i__24465 = G__24581;
continue;
} else {
var vec__24485 = cljs.core.first(seq__24462__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___24582 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24582)){
var effect_fn_24583 = temp__5823__auto___24582;
(effect_fn_24583.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24583.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24583.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24584 = cljs.core.next(seq__24462__$1);
var G__24585 = null;
var G__24586 = (0);
var G__24587 = (0);
seq__24462 = G__24584;
chunk__24463 = G__24585;
count__24464 = G__24586;
i__24465 = G__24587;
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
var seq__24492 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24493 = null;
var count__24494 = (0);
var i__24495 = (0);
while(true){
if((i__24495 < count__24494)){
var event = chunk__24493.cljs$core$IIndexed$_nth$arity$2(null,i__24495);
re_frame.router.dispatch(event);


var G__24588 = seq__24492;
var G__24589 = chunk__24493;
var G__24590 = count__24494;
var G__24591 = (i__24495 + (1));
seq__24492 = G__24588;
chunk__24493 = G__24589;
count__24494 = G__24590;
i__24495 = G__24591;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24492);
if(temp__5825__auto__){
var seq__24492__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24492__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24492__$1);
var G__24592 = cljs.core.chunk_rest(seq__24492__$1);
var G__24593 = c__5548__auto__;
var G__24594 = cljs.core.count(c__5548__auto__);
var G__24595 = (0);
seq__24492 = G__24592;
chunk__24493 = G__24593;
count__24494 = G__24594;
i__24495 = G__24595;
continue;
} else {
var event = cljs.core.first(seq__24492__$1);
re_frame.router.dispatch(event);


var G__24596 = cljs.core.next(seq__24492__$1);
var G__24597 = null;
var G__24598 = (0);
var G__24599 = (0);
seq__24492 = G__24596;
chunk__24493 = G__24597;
count__24494 = G__24598;
i__24495 = G__24599;
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
var seq__24508 = cljs.core.seq(value);
var chunk__24509 = null;
var count__24510 = (0);
var i__24511 = (0);
while(true){
if((i__24511 < count__24510)){
var event = chunk__24509.cljs$core$IIndexed$_nth$arity$2(null,i__24511);
clear_event(event);


var G__24601 = seq__24508;
var G__24602 = chunk__24509;
var G__24603 = count__24510;
var G__24604 = (i__24511 + (1));
seq__24508 = G__24601;
chunk__24509 = G__24602;
count__24510 = G__24603;
i__24511 = G__24604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24508);
if(temp__5825__auto__){
var seq__24508__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24508__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24508__$1);
var G__24605 = cljs.core.chunk_rest(seq__24508__$1);
var G__24606 = c__5548__auto__;
var G__24607 = cljs.core.count(c__5548__auto__);
var G__24608 = (0);
seq__24508 = G__24605;
chunk__24509 = G__24606;
count__24510 = G__24607;
i__24511 = G__24608;
continue;
} else {
var event = cljs.core.first(seq__24508__$1);
clear_event(event);


var G__24610 = cljs.core.next(seq__24508__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24508 = G__24610;
chunk__24509 = G__24611;
count__24510 = G__24612;
i__24511 = G__24613;
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
var _STAR_current_trace_STAR__orig_val__24516 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24517 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24517);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23695__auto___24615 = re_frame.interop.now();
var duration__23696__auto___24616 = (end__23695__auto___24615 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23696__auto___24616,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23695__auto___24615);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24516);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
