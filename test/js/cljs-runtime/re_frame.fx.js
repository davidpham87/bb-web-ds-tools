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
var _STAR_current_trace_STAR__orig_val__26500 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26501 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26501);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26638 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26638)){
var new_db_26639 = temp__5825__auto___26638;
var fexpr__26504_26640 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26504_26640.cljs$core$IFn$_invoke$arity$1 ? fexpr__26504_26640.cljs$core$IFn$_invoke$arity$1(new_db_26639) : fexpr__26504_26640.call(null,new_db_26639));
} else {
}

var seq__26506 = cljs.core.seq(effects_without_db);
var chunk__26507 = null;
var count__26508 = (0);
var i__26509 = (0);
while(true){
if((i__26509 < count__26508)){
var vec__26537 = chunk__26507.cljs$core$IIndexed$_nth$arity$2(null,i__26509);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537,(1),null);
var temp__5823__auto___26644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26644)){
var effect_fn_26645 = temp__5823__auto___26644;
(effect_fn_26645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26646 = seq__26506;
var G__26647 = chunk__26507;
var G__26648 = count__26508;
var G__26649 = (i__26509 + (1));
seq__26506 = G__26646;
chunk__26507 = G__26647;
count__26508 = G__26648;
i__26509 = G__26649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26506);
if(temp__5825__auto__){
var seq__26506__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26506__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26506__$1);
var G__26650 = cljs.core.chunk_rest(seq__26506__$1);
var G__26651 = c__5548__auto__;
var G__26652 = cljs.core.count(c__5548__auto__);
var G__26653 = (0);
seq__26506 = G__26650;
chunk__26507 = G__26651;
count__26508 = G__26652;
i__26509 = G__26653;
continue;
} else {
var vec__26540 = cljs.core.first(seq__26506__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540,(1),null);
var temp__5823__auto___26654 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26654)){
var effect_fn_26655 = temp__5823__auto___26654;
(effect_fn_26655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26655.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26656 = cljs.core.next(seq__26506__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26506 = G__26656;
chunk__26507 = G__26657;
count__26508 = G__26658;
i__26509 = G__26659;
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
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26500);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___26662 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___26662)){
var new_db_26663 = temp__5825__auto___26662;
var fexpr__26546_26664 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26546_26664.cljs$core$IFn$_invoke$arity$1 ? fexpr__26546_26664.cljs$core$IFn$_invoke$arity$1(new_db_26663) : fexpr__26546_26664.call(null,new_db_26663));
} else {
}

var seq__26547 = cljs.core.seq(effects_without_db);
var chunk__26548 = null;
var count__26549 = (0);
var i__26550 = (0);
while(true){
if((i__26550 < count__26549)){
var vec__26558 = chunk__26548.cljs$core$IIndexed$_nth$arity$2(null,i__26550);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(1),null);
var temp__5823__auto___26665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26665)){
var effect_fn_26666 = temp__5823__auto___26665;
(effect_fn_26666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26667 = seq__26547;
var G__26668 = chunk__26548;
var G__26669 = count__26549;
var G__26670 = (i__26550 + (1));
seq__26547 = G__26667;
chunk__26548 = G__26668;
count__26549 = G__26669;
i__26550 = G__26670;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26547);
if(temp__5825__auto__){
var seq__26547__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26547__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26547__$1);
var G__26671 = cljs.core.chunk_rest(seq__26547__$1);
var G__26672 = c__5548__auto__;
var G__26673 = cljs.core.count(c__5548__auto__);
var G__26674 = (0);
seq__26547 = G__26671;
chunk__26548 = G__26672;
count__26549 = G__26673;
i__26550 = G__26674;
continue;
} else {
var vec__26563 = cljs.core.first(seq__26547__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(1),null);
var temp__5823__auto___26675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___26675)){
var effect_fn_26676 = temp__5823__auto___26675;
(effect_fn_26676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__26679 = cljs.core.next(seq__26547__$1);
var G__26680 = null;
var G__26681 = (0);
var G__26682 = (0);
seq__26547 = G__26679;
chunk__26548 = G__26680;
count__26549 = G__26681;
i__26550 = G__26682;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26566){
var map__26567 = p__26566;
var map__26567__$1 = cljs.core.__destructure_map(map__26567);
var effect = map__26567__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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


var G__26683 = seq__26569;
var G__26684 = chunk__26570;
var G__26685 = count__26571;
var G__26686 = (i__26572 + (1));
seq__26569 = G__26683;
chunk__26570 = G__26684;
count__26571 = G__26685;
i__26572 = G__26686;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26569);
if(temp__5825__auto__){
var seq__26569__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26569__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26569__$1);
var G__26687 = cljs.core.chunk_rest(seq__26569__$1);
var G__26688 = c__5548__auto__;
var G__26689 = cljs.core.count(c__5548__auto__);
var G__26690 = (0);
seq__26569 = G__26687;
chunk__26570 = G__26688;
count__26571 = G__26689;
i__26572 = G__26690;
continue;
} else {
var effect = cljs.core.first(seq__26569__$1);
re_frame.fx.dispatch_later(effect);


var G__26691 = cljs.core.next(seq__26569__$1);
var G__26692 = null;
var G__26693 = (0);
var G__26694 = (0);
seq__26569 = G__26691;
chunk__26570 = G__26692;
count__26571 = G__26693;
i__26572 = G__26694;
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
var seq__26581 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26582 = null;
var count__26583 = (0);
var i__26584 = (0);
while(true){
if((i__26584 < count__26583)){
var vec__26597 = chunk__26582.cljs$core$IIndexed$_nth$arity$2(null,i__26584);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(1),null);
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


var G__26697 = seq__26581;
var G__26698 = chunk__26582;
var G__26699 = count__26583;
var G__26700 = (i__26584 + (1));
seq__26581 = G__26697;
chunk__26582 = G__26698;
count__26583 = G__26699;
i__26584 = G__26700;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26581);
if(temp__5825__auto__){
var seq__26581__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26581__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26581__$1);
var G__26701 = cljs.core.chunk_rest(seq__26581__$1);
var G__26702 = c__5548__auto__;
var G__26703 = cljs.core.count(c__5548__auto__);
var G__26704 = (0);
seq__26581 = G__26701;
chunk__26582 = G__26702;
count__26583 = G__26703;
i__26584 = G__26704;
continue;
} else {
var vec__26602 = cljs.core.first(seq__26581__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26602,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26602,(1),null);
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


var G__26709 = cljs.core.next(seq__26581__$1);
var G__26710 = null;
var G__26711 = (0);
var G__26712 = (0);
seq__26581 = G__26709;
chunk__26582 = G__26710;
count__26583 = G__26711;
i__26584 = G__26712;
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


var G__26713 = seq__26606;
var G__26714 = chunk__26607;
var G__26715 = count__26608;
var G__26716 = (i__26609 + (1));
seq__26606 = G__26713;
chunk__26607 = G__26714;
count__26608 = G__26715;
i__26609 = G__26716;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26606);
if(temp__5825__auto__){
var seq__26606__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26606__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26606__$1);
var G__26717 = cljs.core.chunk_rest(seq__26606__$1);
var G__26718 = c__5548__auto__;
var G__26719 = cljs.core.count(c__5548__auto__);
var G__26720 = (0);
seq__26606 = G__26717;
chunk__26607 = G__26718;
count__26608 = G__26719;
i__26609 = G__26720;
continue;
} else {
var event = cljs.core.first(seq__26606__$1);
re_frame.router.dispatch(event);


var G__26721 = cljs.core.next(seq__26606__$1);
var G__26722 = null;
var G__26723 = (0);
var G__26724 = (0);
seq__26606 = G__26721;
chunk__26607 = G__26722;
count__26608 = G__26723;
i__26609 = G__26724;
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
var seq__26616 = cljs.core.seq(value);
var chunk__26617 = null;
var count__26618 = (0);
var i__26619 = (0);
while(true){
if((i__26619 < count__26618)){
var event = chunk__26617.cljs$core$IIndexed$_nth$arity$2(null,i__26619);
clear_event(event);


var G__26725 = seq__26616;
var G__26726 = chunk__26617;
var G__26727 = count__26618;
var G__26728 = (i__26619 + (1));
seq__26616 = G__26725;
chunk__26617 = G__26726;
count__26618 = G__26727;
i__26619 = G__26728;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26616);
if(temp__5825__auto__){
var seq__26616__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26616__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26616__$1);
var G__26729 = cljs.core.chunk_rest(seq__26616__$1);
var G__26730 = c__5548__auto__;
var G__26731 = cljs.core.count(c__5548__auto__);
var G__26732 = (0);
seq__26616 = G__26729;
chunk__26617 = G__26730;
count__26618 = G__26731;
i__26619 = G__26732;
continue;
} else {
var event = cljs.core.first(seq__26616__$1);
clear_event(event);


var G__26733 = cljs.core.next(seq__26616__$1);
var G__26734 = null;
var G__26735 = (0);
var G__26736 = (0);
seq__26616 = G__26733;
chunk__26617 = G__26734;
count__26618 = G__26735;
i__26619 = G__26736;
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
var end__26176__auto___26739 = re_frame.interop.now();
var duration__26177__auto___26740 = (end__26176__auto___26739 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26177__auto___26740,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26176__auto___26739);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26627);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
