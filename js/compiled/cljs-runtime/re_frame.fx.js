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
var _STAR_current_trace_STAR__orig_val__36623 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36624 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36624);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36740 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36740)){
var new_db_36741 = temp__5825__auto___36740;
var fexpr__36625_36742 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36625_36742.cljs$core$IFn$_invoke$arity$1 ? fexpr__36625_36742.cljs$core$IFn$_invoke$arity$1(new_db_36741) : fexpr__36625_36742.call(null,new_db_36741));
} else {
}

var seq__36626 = cljs.core.seq(effects_without_db);
var chunk__36627 = null;
var count__36628 = (0);
var i__36629 = (0);
while(true){
if((i__36629 < count__36628)){
var vec__36638 = chunk__36627.cljs$core$IIndexed$_nth$arity$2(null,i__36629);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36638,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36638,(1),null);
var temp__5823__auto___36743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36743)){
var effect_fn_36744 = temp__5823__auto___36743;
(effect_fn_36744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36745 = seq__36626;
var G__36746 = chunk__36627;
var G__36747 = count__36628;
var G__36748 = (i__36629 + (1));
seq__36626 = G__36745;
chunk__36627 = G__36746;
count__36628 = G__36747;
i__36629 = G__36748;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36626);
if(temp__5825__auto__){
var seq__36626__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36626__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36626__$1);
var G__36749 = cljs.core.chunk_rest(seq__36626__$1);
var G__36750 = c__5548__auto__;
var G__36751 = cljs.core.count(c__5548__auto__);
var G__36752 = (0);
seq__36626 = G__36749;
chunk__36627 = G__36750;
count__36628 = G__36751;
i__36629 = G__36752;
continue;
} else {
var vec__36641 = cljs.core.first(seq__36626__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641,(1),null);
var temp__5823__auto___36754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36754)){
var effect_fn_36755 = temp__5823__auto___36754;
(effect_fn_36755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36758 = cljs.core.next(seq__36626__$1);
var G__36759 = null;
var G__36760 = (0);
var G__36761 = (0);
seq__36626 = G__36758;
chunk__36627 = G__36759;
count__36628 = G__36760;
i__36629 = G__36761;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36762 = re_frame.interop.now();
var duration__36309__auto___36763 = (end__36308__auto___36762 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36763,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36762);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36623);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36764 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36764)){
var new_db_36765 = temp__5825__auto___36764;
var fexpr__36647_36766 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36647_36766.cljs$core$IFn$_invoke$arity$1 ? fexpr__36647_36766.cljs$core$IFn$_invoke$arity$1(new_db_36765) : fexpr__36647_36766.call(null,new_db_36765));
} else {
}

var seq__36648 = cljs.core.seq(effects_without_db);
var chunk__36649 = null;
var count__36650 = (0);
var i__36651 = (0);
while(true){
if((i__36651 < count__36650)){
var vec__36658 = chunk__36649.cljs$core$IIndexed$_nth$arity$2(null,i__36651);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658,(1),null);
var temp__5823__auto___36767 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36767)){
var effect_fn_36768 = temp__5823__auto___36767;
(effect_fn_36768.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36768.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36768.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36769 = seq__36648;
var G__36770 = chunk__36649;
var G__36771 = count__36650;
var G__36772 = (i__36651 + (1));
seq__36648 = G__36769;
chunk__36649 = G__36770;
count__36650 = G__36771;
i__36651 = G__36772;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36648);
if(temp__5825__auto__){
var seq__36648__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36648__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36648__$1);
var G__36773 = cljs.core.chunk_rest(seq__36648__$1);
var G__36774 = c__5548__auto__;
var G__36775 = cljs.core.count(c__5548__auto__);
var G__36776 = (0);
seq__36648 = G__36773;
chunk__36649 = G__36774;
count__36650 = G__36775;
i__36651 = G__36776;
continue;
} else {
var vec__36681 = cljs.core.first(seq__36648__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36681,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36681,(1),null);
var temp__5823__auto___36777 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36777)){
var effect_fn_36778 = temp__5823__auto___36777;
(effect_fn_36778.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36778.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36778.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36779 = cljs.core.next(seq__36648__$1);
var G__36780 = null;
var G__36781 = (0);
var G__36782 = (0);
seq__36648 = G__36779;
chunk__36649 = G__36780;
count__36650 = G__36781;
i__36651 = G__36782;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36687){
var map__36688 = p__36687;
var map__36688__$1 = cljs.core.__destructure_map(map__36688);
var effect = map__36688__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36688__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36688__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__36691 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36692 = null;
var count__36693 = (0);
var i__36694 = (0);
while(true){
if((i__36694 < count__36693)){
var effect = chunk__36692.cljs$core$IIndexed$_nth$arity$2(null,i__36694);
re_frame.fx.dispatch_later(effect);


var G__36783 = seq__36691;
var G__36784 = chunk__36692;
var G__36785 = count__36693;
var G__36786 = (i__36694 + (1));
seq__36691 = G__36783;
chunk__36692 = G__36784;
count__36693 = G__36785;
i__36694 = G__36786;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36691);
if(temp__5825__auto__){
var seq__36691__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36691__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36691__$1);
var G__36787 = cljs.core.chunk_rest(seq__36691__$1);
var G__36788 = c__5548__auto__;
var G__36789 = cljs.core.count(c__5548__auto__);
var G__36790 = (0);
seq__36691 = G__36787;
chunk__36692 = G__36788;
count__36693 = G__36789;
i__36694 = G__36790;
continue;
} else {
var effect = cljs.core.first(seq__36691__$1);
re_frame.fx.dispatch_later(effect);


var G__36791 = cljs.core.next(seq__36691__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__36691 = G__36791;
chunk__36692 = G__36792;
count__36693 = G__36793;
i__36694 = G__36794;
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
var seq__36695 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36696 = null;
var count__36697 = (0);
var i__36698 = (0);
while(true){
if((i__36698 < count__36697)){
var vec__36705 = chunk__36696.cljs$core$IIndexed$_nth$arity$2(null,i__36698);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36705,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36705,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36797 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36797)){
var effect_fn_36798 = temp__5823__auto___36797;
(effect_fn_36798.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36798.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36798.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36799 = seq__36695;
var G__36800 = chunk__36696;
var G__36801 = count__36697;
var G__36802 = (i__36698 + (1));
seq__36695 = G__36799;
chunk__36696 = G__36800;
count__36697 = G__36801;
i__36698 = G__36802;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36695);
if(temp__5825__auto__){
var seq__36695__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36695__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36695__$1);
var G__36803 = cljs.core.chunk_rest(seq__36695__$1);
var G__36804 = c__5548__auto__;
var G__36805 = cljs.core.count(c__5548__auto__);
var G__36806 = (0);
seq__36695 = G__36803;
chunk__36696 = G__36804;
count__36697 = G__36805;
i__36698 = G__36806;
continue;
} else {
var vec__36710 = cljs.core.first(seq__36695__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36807)){
var effect_fn_36810 = temp__5823__auto___36807;
(effect_fn_36810.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36810.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36810.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36811 = cljs.core.next(seq__36695__$1);
var G__36812 = null;
var G__36813 = (0);
var G__36814 = (0);
seq__36695 = G__36811;
chunk__36696 = G__36812;
count__36697 = G__36813;
i__36698 = G__36814;
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
var seq__36718 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36719 = null;
var count__36720 = (0);
var i__36721 = (0);
while(true){
if((i__36721 < count__36720)){
var event = chunk__36719.cljs$core$IIndexed$_nth$arity$2(null,i__36721);
re_frame.router.dispatch(event);


var G__36815 = seq__36718;
var G__36816 = chunk__36719;
var G__36817 = count__36720;
var G__36818 = (i__36721 + (1));
seq__36718 = G__36815;
chunk__36719 = G__36816;
count__36720 = G__36817;
i__36721 = G__36818;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36718);
if(temp__5825__auto__){
var seq__36718__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36718__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36718__$1);
var G__36819 = cljs.core.chunk_rest(seq__36718__$1);
var G__36820 = c__5548__auto__;
var G__36821 = cljs.core.count(c__5548__auto__);
var G__36822 = (0);
seq__36718 = G__36819;
chunk__36719 = G__36820;
count__36720 = G__36821;
i__36721 = G__36822;
continue;
} else {
var event = cljs.core.first(seq__36718__$1);
re_frame.router.dispatch(event);


var G__36823 = cljs.core.next(seq__36718__$1);
var G__36824 = null;
var G__36825 = (0);
var G__36826 = (0);
seq__36718 = G__36823;
chunk__36719 = G__36824;
count__36720 = G__36825;
i__36721 = G__36826;
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
var seq__36730 = cljs.core.seq(value);
var chunk__36731 = null;
var count__36732 = (0);
var i__36733 = (0);
while(true){
if((i__36733 < count__36732)){
var event = chunk__36731.cljs$core$IIndexed$_nth$arity$2(null,i__36733);
clear_event(event);


var G__36827 = seq__36730;
var G__36828 = chunk__36731;
var G__36829 = count__36732;
var G__36830 = (i__36733 + (1));
seq__36730 = G__36827;
chunk__36731 = G__36828;
count__36732 = G__36829;
i__36733 = G__36830;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36730);
if(temp__5825__auto__){
var seq__36730__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36730__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36730__$1);
var G__36831 = cljs.core.chunk_rest(seq__36730__$1);
var G__36832 = c__5548__auto__;
var G__36833 = cljs.core.count(c__5548__auto__);
var G__36834 = (0);
seq__36730 = G__36831;
chunk__36731 = G__36832;
count__36732 = G__36833;
i__36733 = G__36834;
continue;
} else {
var event = cljs.core.first(seq__36730__$1);
clear_event(event);


var G__36835 = cljs.core.next(seq__36730__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36730 = G__36835;
chunk__36731 = G__36836;
count__36732 = G__36837;
i__36733 = G__36838;
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
var _STAR_current_trace_STAR__orig_val__36734 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36735 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36735);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36839 = re_frame.interop.now();
var duration__36309__auto___36840 = (end__36308__auto___36839 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36840,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36839);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36734);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
