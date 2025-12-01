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
var _STAR_current_trace_STAR__orig_val__36616 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36617 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36617);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36734 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36734)){
var new_db_36735 = temp__5825__auto___36734;
var fexpr__36618_36736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36618_36736.cljs$core$IFn$_invoke$arity$1 ? fexpr__36618_36736.cljs$core$IFn$_invoke$arity$1(new_db_36735) : fexpr__36618_36736.call(null,new_db_36735));
} else {
}

var seq__36619 = cljs.core.seq(effects_without_db);
var chunk__36620 = null;
var count__36621 = (0);
var i__36622 = (0);
while(true){
if((i__36622 < count__36621)){
var vec__36639 = chunk__36620.cljs$core$IIndexed$_nth$arity$2(null,i__36622);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
var temp__5823__auto___36737 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36737)){
var effect_fn_36738 = temp__5823__auto___36737;
(effect_fn_36738.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36738.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36738.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36739 = seq__36619;
var G__36740 = chunk__36620;
var G__36741 = count__36621;
var G__36742 = (i__36622 + (1));
seq__36619 = G__36739;
chunk__36620 = G__36740;
count__36621 = G__36741;
i__36622 = G__36742;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36619);
if(temp__5825__auto__){
var seq__36619__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36619__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36619__$1);
var G__36743 = cljs.core.chunk_rest(seq__36619__$1);
var G__36744 = c__5548__auto__;
var G__36745 = cljs.core.count(c__5548__auto__);
var G__36746 = (0);
seq__36619 = G__36743;
chunk__36620 = G__36744;
count__36621 = G__36745;
i__36622 = G__36746;
continue;
} else {
var vec__36645 = cljs.core.first(seq__36619__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(1),null);
var temp__5823__auto___36747 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36747)){
var effect_fn_36748 = temp__5823__auto___36747;
(effect_fn_36748.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36748.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36748.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36749 = cljs.core.next(seq__36619__$1);
var G__36750 = null;
var G__36751 = (0);
var G__36752 = (0);
seq__36619 = G__36749;
chunk__36620 = G__36750;
count__36621 = G__36751;
i__36622 = G__36752;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36753 = re_frame.interop.now();
var duration__36309__auto___36754 = (end__36308__auto___36753 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36754,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36753);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36616);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36755 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36755)){
var new_db_36756 = temp__5825__auto___36755;
var fexpr__36652_36757 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36652_36757.cljs$core$IFn$_invoke$arity$1 ? fexpr__36652_36757.cljs$core$IFn$_invoke$arity$1(new_db_36756) : fexpr__36652_36757.call(null,new_db_36756));
} else {
}

var seq__36653 = cljs.core.seq(effects_without_db);
var chunk__36654 = null;
var count__36655 = (0);
var i__36656 = (0);
while(true){
if((i__36656 < count__36655)){
var vec__36667 = chunk__36654.cljs$core$IIndexed$_nth$arity$2(null,i__36656);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(1),null);
var temp__5823__auto___36758 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36758)){
var effect_fn_36759 = temp__5823__auto___36758;
(effect_fn_36759.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36759.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36759.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36760 = seq__36653;
var G__36761 = chunk__36654;
var G__36762 = count__36655;
var G__36763 = (i__36656 + (1));
seq__36653 = G__36760;
chunk__36654 = G__36761;
count__36655 = G__36762;
i__36656 = G__36763;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36653);
if(temp__5825__auto__){
var seq__36653__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36653__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36653__$1);
var G__36764 = cljs.core.chunk_rest(seq__36653__$1);
var G__36765 = c__5548__auto__;
var G__36766 = cljs.core.count(c__5548__auto__);
var G__36767 = (0);
seq__36653 = G__36764;
chunk__36654 = G__36765;
count__36655 = G__36766;
i__36656 = G__36767;
continue;
} else {
var vec__36685 = cljs.core.first(seq__36653__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36685,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36685,(1),null);
var temp__5823__auto___36768 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36768)){
var effect_fn_36769 = temp__5823__auto___36768;
(effect_fn_36769.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36769.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36769.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36773 = cljs.core.next(seq__36653__$1);
var G__36774 = null;
var G__36775 = (0);
var G__36776 = (0);
seq__36653 = G__36773;
chunk__36654 = G__36774;
count__36655 = G__36775;
i__36656 = G__36776;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36688){
var map__36689 = p__36688;
var map__36689__$1 = cljs.core.__destructure_map(map__36689);
var effect = map__36689__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36689__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36689__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__36697 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36698 = null;
var count__36699 = (0);
var i__36700 = (0);
while(true){
if((i__36700 < count__36699)){
var effect = chunk__36698.cljs$core$IIndexed$_nth$arity$2(null,i__36700);
re_frame.fx.dispatch_later(effect);


var G__36777 = seq__36697;
var G__36778 = chunk__36698;
var G__36779 = count__36699;
var G__36780 = (i__36700 + (1));
seq__36697 = G__36777;
chunk__36698 = G__36778;
count__36699 = G__36779;
i__36700 = G__36780;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36697);
if(temp__5825__auto__){
var seq__36697__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36697__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36697__$1);
var G__36781 = cljs.core.chunk_rest(seq__36697__$1);
var G__36782 = c__5548__auto__;
var G__36783 = cljs.core.count(c__5548__auto__);
var G__36784 = (0);
seq__36697 = G__36781;
chunk__36698 = G__36782;
count__36699 = G__36783;
i__36700 = G__36784;
continue;
} else {
var effect = cljs.core.first(seq__36697__$1);
re_frame.fx.dispatch_later(effect);


var G__36785 = cljs.core.next(seq__36697__$1);
var G__36786 = null;
var G__36787 = (0);
var G__36788 = (0);
seq__36697 = G__36785;
chunk__36698 = G__36786;
count__36699 = G__36787;
i__36700 = G__36788;
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
var seq__36704 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36705 = null;
var count__36706 = (0);
var i__36707 = (0);
while(true){
if((i__36707 < count__36706)){
var vec__36715 = chunk__36705.cljs$core$IIndexed$_nth$arity$2(null,i__36707);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36715,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36789 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36789)){
var effect_fn_36790 = temp__5823__auto___36789;
(effect_fn_36790.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36790.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36790.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36791 = seq__36704;
var G__36792 = chunk__36705;
var G__36793 = count__36706;
var G__36794 = (i__36707 + (1));
seq__36704 = G__36791;
chunk__36705 = G__36792;
count__36706 = G__36793;
i__36707 = G__36794;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36704);
if(temp__5825__auto__){
var seq__36704__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36704__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36704__$1);
var G__36795 = cljs.core.chunk_rest(seq__36704__$1);
var G__36796 = c__5548__auto__;
var G__36797 = cljs.core.count(c__5548__auto__);
var G__36798 = (0);
seq__36704 = G__36795;
chunk__36705 = G__36796;
count__36706 = G__36797;
i__36707 = G__36798;
continue;
} else {
var vec__36718 = cljs.core.first(seq__36704__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36718,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36799 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36799)){
var effect_fn_36800 = temp__5823__auto___36799;
(effect_fn_36800.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36800.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36800.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36801 = cljs.core.next(seq__36704__$1);
var G__36802 = null;
var G__36803 = (0);
var G__36804 = (0);
seq__36704 = G__36801;
chunk__36705 = G__36802;
count__36706 = G__36803;
i__36707 = G__36804;
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
var seq__36721 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36722 = null;
var count__36723 = (0);
var i__36724 = (0);
while(true){
if((i__36724 < count__36723)){
var event = chunk__36722.cljs$core$IIndexed$_nth$arity$2(null,i__36724);
re_frame.router.dispatch(event);


var G__36805 = seq__36721;
var G__36806 = chunk__36722;
var G__36807 = count__36723;
var G__36808 = (i__36724 + (1));
seq__36721 = G__36805;
chunk__36722 = G__36806;
count__36723 = G__36807;
i__36724 = G__36808;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36721);
if(temp__5825__auto__){
var seq__36721__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36721__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36721__$1);
var G__36809 = cljs.core.chunk_rest(seq__36721__$1);
var G__36810 = c__5548__auto__;
var G__36811 = cljs.core.count(c__5548__auto__);
var G__36812 = (0);
seq__36721 = G__36809;
chunk__36722 = G__36810;
count__36723 = G__36811;
i__36724 = G__36812;
continue;
} else {
var event = cljs.core.first(seq__36721__$1);
re_frame.router.dispatch(event);


var G__36813 = cljs.core.next(seq__36721__$1);
var G__36814 = null;
var G__36815 = (0);
var G__36816 = (0);
seq__36721 = G__36813;
chunk__36722 = G__36814;
count__36723 = G__36815;
i__36724 = G__36816;
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
var seq__36725 = cljs.core.seq(value);
var chunk__36726 = null;
var count__36727 = (0);
var i__36728 = (0);
while(true){
if((i__36728 < count__36727)){
var event = chunk__36726.cljs$core$IIndexed$_nth$arity$2(null,i__36728);
clear_event(event);


var G__36817 = seq__36725;
var G__36818 = chunk__36726;
var G__36819 = count__36727;
var G__36820 = (i__36728 + (1));
seq__36725 = G__36817;
chunk__36726 = G__36818;
count__36727 = G__36819;
i__36728 = G__36820;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36725);
if(temp__5825__auto__){
var seq__36725__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36725__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36725__$1);
var G__36821 = cljs.core.chunk_rest(seq__36725__$1);
var G__36822 = c__5548__auto__;
var G__36823 = cljs.core.count(c__5548__auto__);
var G__36824 = (0);
seq__36725 = G__36821;
chunk__36726 = G__36822;
count__36727 = G__36823;
i__36728 = G__36824;
continue;
} else {
var event = cljs.core.first(seq__36725__$1);
clear_event(event);


var G__36825 = cljs.core.next(seq__36725__$1);
var G__36826 = null;
var G__36827 = (0);
var G__36828 = (0);
seq__36725 = G__36825;
chunk__36726 = G__36826;
count__36727 = G__36827;
i__36728 = G__36828;
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
var _STAR_current_trace_STAR__orig_val__36729 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36730 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36730);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36829 = re_frame.interop.now();
var duration__36309__auto___36830 = (end__36308__auto___36829 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36830,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36829);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36729);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
