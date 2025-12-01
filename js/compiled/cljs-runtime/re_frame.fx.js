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
var _STAR_current_trace_STAR__orig_val__36637 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36638 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36638);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36773 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36773)){
var new_db_36774 = temp__5825__auto___36773;
var fexpr__36654_36775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36654_36775.cljs$core$IFn$_invoke$arity$1 ? fexpr__36654_36775.cljs$core$IFn$_invoke$arity$1(new_db_36774) : fexpr__36654_36775.call(null,new_db_36774));
} else {
}

var seq__36655 = cljs.core.seq(effects_without_db);
var chunk__36656 = null;
var count__36657 = (0);
var i__36658 = (0);
while(true){
if((i__36658 < count__36657)){
var vec__36684 = chunk__36656.cljs$core$IIndexed$_nth$arity$2(null,i__36658);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36684,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36684,(1),null);
var temp__5823__auto___36776 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36776)){
var effect_fn_36777 = temp__5823__auto___36776;
(effect_fn_36777.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36777.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36777.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36778 = seq__36655;
var G__36779 = chunk__36656;
var G__36780 = count__36657;
var G__36781 = (i__36658 + (1));
seq__36655 = G__36778;
chunk__36656 = G__36779;
count__36657 = G__36780;
i__36658 = G__36781;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36655);
if(temp__5825__auto__){
var seq__36655__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36655__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36655__$1);
var G__36782 = cljs.core.chunk_rest(seq__36655__$1);
var G__36783 = c__5548__auto__;
var G__36784 = cljs.core.count(c__5548__auto__);
var G__36785 = (0);
seq__36655 = G__36782;
chunk__36656 = G__36783;
count__36657 = G__36784;
i__36658 = G__36785;
continue;
} else {
var vec__36687 = cljs.core.first(seq__36655__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687,(1),null);
var temp__5823__auto___36786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36786)){
var effect_fn_36787 = temp__5823__auto___36786;
(effect_fn_36787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36787.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36788 = cljs.core.next(seq__36655__$1);
var G__36789 = null;
var G__36790 = (0);
var G__36791 = (0);
seq__36655 = G__36788;
chunk__36656 = G__36789;
count__36657 = G__36790;
i__36658 = G__36791;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36792 = re_frame.interop.now();
var duration__36309__auto___36793 = (end__36308__auto___36792 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36793,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36792);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36637);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36794 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36794)){
var new_db_36795 = temp__5825__auto___36794;
var fexpr__36694_36796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36694_36796.cljs$core$IFn$_invoke$arity$1 ? fexpr__36694_36796.cljs$core$IFn$_invoke$arity$1(new_db_36795) : fexpr__36694_36796.call(null,new_db_36795));
} else {
}

var seq__36695 = cljs.core.seq(effects_without_db);
var chunk__36696 = null;
var count__36697 = (0);
var i__36698 = (0);
while(true){
if((i__36698 < count__36697)){
var vec__36709 = chunk__36696.cljs$core$IIndexed$_nth$arity$2(null,i__36698);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36709,(1),null);
var temp__5823__auto___36797 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36797)){
var effect_fn_36798 = temp__5823__auto___36797;
(effect_fn_36798.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36798.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36798.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
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
var vec__36712 = cljs.core.first(seq__36695__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36712,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36712,(1),null);
var temp__5823__auto___36807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36807)){
var effect_fn_36808 = temp__5823__auto___36807;
(effect_fn_36808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36808.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36809 = cljs.core.next(seq__36695__$1);
var G__36810 = null;
var G__36811 = (0);
var G__36812 = (0);
seq__36695 = G__36809;
chunk__36696 = G__36810;
count__36697 = G__36811;
i__36698 = G__36812;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36716){
var map__36717 = p__36716;
var map__36717__$1 = cljs.core.__destructure_map(map__36717);
var effect = map__36717__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36717__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36717__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__36718 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36719 = null;
var count__36720 = (0);
var i__36721 = (0);
while(true){
if((i__36721 < count__36720)){
var effect = chunk__36719.cljs$core$IIndexed$_nth$arity$2(null,i__36721);
re_frame.fx.dispatch_later(effect);


var G__36813 = seq__36718;
var G__36814 = chunk__36719;
var G__36815 = count__36720;
var G__36816 = (i__36721 + (1));
seq__36718 = G__36813;
chunk__36719 = G__36814;
count__36720 = G__36815;
i__36721 = G__36816;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36718);
if(temp__5825__auto__){
var seq__36718__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36718__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36718__$1);
var G__36817 = cljs.core.chunk_rest(seq__36718__$1);
var G__36818 = c__5548__auto__;
var G__36819 = cljs.core.count(c__5548__auto__);
var G__36820 = (0);
seq__36718 = G__36817;
chunk__36719 = G__36818;
count__36720 = G__36819;
i__36721 = G__36820;
continue;
} else {
var effect = cljs.core.first(seq__36718__$1);
re_frame.fx.dispatch_later(effect);


var G__36821 = cljs.core.next(seq__36718__$1);
var G__36822 = null;
var G__36823 = (0);
var G__36824 = (0);
seq__36718 = G__36821;
chunk__36719 = G__36822;
count__36720 = G__36823;
i__36721 = G__36824;
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
var seq__36727 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36728 = null;
var count__36729 = (0);
var i__36730 = (0);
while(true){
if((i__36730 < count__36729)){
var vec__36745 = chunk__36728.cljs$core$IIndexed$_nth$arity$2(null,i__36730);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36745,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36825 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36825)){
var effect_fn_36826 = temp__5823__auto___36825;
(effect_fn_36826.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36826.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36826.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36827 = seq__36727;
var G__36828 = chunk__36728;
var G__36829 = count__36729;
var G__36830 = (i__36730 + (1));
seq__36727 = G__36827;
chunk__36728 = G__36828;
count__36729 = G__36829;
i__36730 = G__36830;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36727);
if(temp__5825__auto__){
var seq__36727__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36727__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36727__$1);
var G__36831 = cljs.core.chunk_rest(seq__36727__$1);
var G__36832 = c__5548__auto__;
var G__36833 = cljs.core.count(c__5548__auto__);
var G__36834 = (0);
seq__36727 = G__36831;
chunk__36728 = G__36832;
count__36729 = G__36833;
i__36730 = G__36834;
continue;
} else {
var vec__36751 = cljs.core.first(seq__36727__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36835 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36835)){
var effect_fn_36836 = temp__5823__auto___36835;
(effect_fn_36836.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36836.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36836.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36837 = cljs.core.next(seq__36727__$1);
var G__36838 = null;
var G__36839 = (0);
var G__36840 = (0);
seq__36727 = G__36837;
chunk__36728 = G__36838;
count__36729 = G__36839;
i__36730 = G__36840;
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
var seq__36760 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36761 = null;
var count__36762 = (0);
var i__36763 = (0);
while(true){
if((i__36763 < count__36762)){
var event = chunk__36761.cljs$core$IIndexed$_nth$arity$2(null,i__36763);
re_frame.router.dispatch(event);


var G__36841 = seq__36760;
var G__36842 = chunk__36761;
var G__36843 = count__36762;
var G__36844 = (i__36763 + (1));
seq__36760 = G__36841;
chunk__36761 = G__36842;
count__36762 = G__36843;
i__36763 = G__36844;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36760);
if(temp__5825__auto__){
var seq__36760__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36760__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36760__$1);
var G__36845 = cljs.core.chunk_rest(seq__36760__$1);
var G__36846 = c__5548__auto__;
var G__36847 = cljs.core.count(c__5548__auto__);
var G__36848 = (0);
seq__36760 = G__36845;
chunk__36761 = G__36846;
count__36762 = G__36847;
i__36763 = G__36848;
continue;
} else {
var event = cljs.core.first(seq__36760__$1);
re_frame.router.dispatch(event);


var G__36849 = cljs.core.next(seq__36760__$1);
var G__36850 = null;
var G__36851 = (0);
var G__36852 = (0);
seq__36760 = G__36849;
chunk__36761 = G__36850;
count__36762 = G__36851;
i__36763 = G__36852;
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
var seq__36767 = cljs.core.seq(value);
var chunk__36768 = null;
var count__36769 = (0);
var i__36770 = (0);
while(true){
if((i__36770 < count__36769)){
var event = chunk__36768.cljs$core$IIndexed$_nth$arity$2(null,i__36770);
clear_event(event);


var G__36853 = seq__36767;
var G__36854 = chunk__36768;
var G__36855 = count__36769;
var G__36856 = (i__36770 + (1));
seq__36767 = G__36853;
chunk__36768 = G__36854;
count__36769 = G__36855;
i__36770 = G__36856;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36767);
if(temp__5825__auto__){
var seq__36767__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36767__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36767__$1);
var G__36857 = cljs.core.chunk_rest(seq__36767__$1);
var G__36858 = c__5548__auto__;
var G__36859 = cljs.core.count(c__5548__auto__);
var G__36860 = (0);
seq__36767 = G__36857;
chunk__36768 = G__36858;
count__36769 = G__36859;
i__36770 = G__36860;
continue;
} else {
var event = cljs.core.first(seq__36767__$1);
clear_event(event);


var G__36861 = cljs.core.next(seq__36767__$1);
var G__36862 = null;
var G__36863 = (0);
var G__36864 = (0);
seq__36767 = G__36861;
chunk__36768 = G__36862;
count__36769 = G__36863;
i__36770 = G__36864;
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
var _STAR_current_trace_STAR__orig_val__36771 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36772 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36772);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36308__auto___36865 = re_frame.interop.now();
var duration__36309__auto___36866 = (end__36308__auto___36865 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36309__auto___36866,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36308__auto___36865);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36771);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
