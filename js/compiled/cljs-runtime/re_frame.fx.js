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
var _STAR_current_trace_STAR__orig_val__36630 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36631 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36631);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36754 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36754)){
var new_db_36755 = temp__5825__auto___36754;
var fexpr__36641_36756 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36641_36756.cljs$core$IFn$_invoke$arity$1 ? fexpr__36641_36756.cljs$core$IFn$_invoke$arity$1(new_db_36755) : fexpr__36641_36756.call(null,new_db_36755));
} else {
}

var seq__36642 = cljs.core.seq(effects_without_db);
var chunk__36643 = null;
var count__36644 = (0);
var i__36645 = (0);
while(true){
if((i__36645 < count__36644)){
var vec__36659 = chunk__36643.cljs$core$IIndexed$_nth$arity$2(null,i__36645);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36659,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36659,(1),null);
var temp__5823__auto___36761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36761)){
var effect_fn_36762 = temp__5823__auto___36761;
(effect_fn_36762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36763 = seq__36642;
var G__36764 = chunk__36643;
var G__36765 = count__36644;
var G__36766 = (i__36645 + (1));
seq__36642 = G__36763;
chunk__36643 = G__36764;
count__36644 = G__36765;
i__36645 = G__36766;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36642);
if(temp__5825__auto__){
var seq__36642__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36642__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36642__$1);
var G__36767 = cljs.core.chunk_rest(seq__36642__$1);
var G__36768 = c__5548__auto__;
var G__36769 = cljs.core.count(c__5548__auto__);
var G__36770 = (0);
seq__36642 = G__36767;
chunk__36643 = G__36768;
count__36644 = G__36769;
i__36645 = G__36770;
continue;
} else {
var vec__36663 = cljs.core.first(seq__36642__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36663,(1),null);
var temp__5823__auto___36771 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36771)){
var effect_fn_36772 = temp__5823__auto___36771;
(effect_fn_36772.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36772.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36772.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36773 = cljs.core.next(seq__36642__$1);
var G__36774 = null;
var G__36775 = (0);
var G__36776 = (0);
seq__36642 = G__36773;
chunk__36643 = G__36774;
count__36644 = G__36775;
i__36645 = G__36776;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36302__auto___36777 = re_frame.interop.now();
var duration__36303__auto___36778 = (end__36302__auto___36777 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36303__auto___36778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36302__auto___36777);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36630);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___36779 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___36779)){
var new_db_36780 = temp__5825__auto___36779;
var fexpr__36685_36781 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36685_36781.cljs$core$IFn$_invoke$arity$1 ? fexpr__36685_36781.cljs$core$IFn$_invoke$arity$1(new_db_36780) : fexpr__36685_36781.call(null,new_db_36780));
} else {
}

var seq__36686 = cljs.core.seq(effects_without_db);
var chunk__36687 = null;
var count__36688 = (0);
var i__36689 = (0);
while(true){
if((i__36689 < count__36688)){
var vec__36699 = chunk__36687.cljs$core$IIndexed$_nth$arity$2(null,i__36689);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(1),null);
var temp__5823__auto___36782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36782)){
var effect_fn_36785 = temp__5823__auto___36782;
(effect_fn_36785.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36785.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36785.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36786 = seq__36686;
var G__36787 = chunk__36687;
var G__36788 = count__36688;
var G__36789 = (i__36689 + (1));
seq__36686 = G__36786;
chunk__36687 = G__36787;
count__36688 = G__36788;
i__36689 = G__36789;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36686);
if(temp__5825__auto__){
var seq__36686__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36686__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36686__$1);
var G__36790 = cljs.core.chunk_rest(seq__36686__$1);
var G__36791 = c__5548__auto__;
var G__36792 = cljs.core.count(c__5548__auto__);
var G__36793 = (0);
seq__36686 = G__36790;
chunk__36687 = G__36791;
count__36688 = G__36792;
i__36689 = G__36793;
continue;
} else {
var vec__36702 = cljs.core.first(seq__36686__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36702,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36702,(1),null);
var temp__5823__auto___36795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36795)){
var effect_fn_36796 = temp__5823__auto___36795;
(effect_fn_36796.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36796.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36796.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__36797 = cljs.core.next(seq__36686__$1);
var G__36798 = null;
var G__36799 = (0);
var G__36800 = (0);
seq__36686 = G__36797;
chunk__36687 = G__36798;
count__36688 = G__36799;
i__36689 = G__36800;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36705){
var map__36706 = p__36705;
var map__36706__$1 = cljs.core.__destructure_map(map__36706);
var effect = map__36706__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36706__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36706__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__36710 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36711 = null;
var count__36712 = (0);
var i__36713 = (0);
while(true){
if((i__36713 < count__36712)){
var effect = chunk__36711.cljs$core$IIndexed$_nth$arity$2(null,i__36713);
re_frame.fx.dispatch_later(effect);


var G__36801 = seq__36710;
var G__36802 = chunk__36711;
var G__36803 = count__36712;
var G__36804 = (i__36713 + (1));
seq__36710 = G__36801;
chunk__36711 = G__36802;
count__36712 = G__36803;
i__36713 = G__36804;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36710);
if(temp__5825__auto__){
var seq__36710__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36710__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36710__$1);
var G__36805 = cljs.core.chunk_rest(seq__36710__$1);
var G__36806 = c__5548__auto__;
var G__36807 = cljs.core.count(c__5548__auto__);
var G__36808 = (0);
seq__36710 = G__36805;
chunk__36711 = G__36806;
count__36712 = G__36807;
i__36713 = G__36808;
continue;
} else {
var effect = cljs.core.first(seq__36710__$1);
re_frame.fx.dispatch_later(effect);


var G__36809 = cljs.core.next(seq__36710__$1);
var G__36810 = null;
var G__36811 = (0);
var G__36812 = (0);
seq__36710 = G__36809;
chunk__36711 = G__36810;
count__36712 = G__36811;
i__36713 = G__36812;
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
var seq__36717 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36718 = null;
var count__36719 = (0);
var i__36720 = (0);
while(true){
if((i__36720 < count__36719)){
var vec__36729 = chunk__36718.cljs$core$IIndexed$_nth$arity$2(null,i__36720);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36729,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36729,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36816)){
var effect_fn_36817 = temp__5823__auto___36816;
(effect_fn_36817.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36817.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36817.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36818 = seq__36717;
var G__36819 = chunk__36718;
var G__36820 = count__36719;
var G__36821 = (i__36720 + (1));
seq__36717 = G__36818;
chunk__36718 = G__36819;
count__36719 = G__36820;
i__36720 = G__36821;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36717);
if(temp__5825__auto__){
var seq__36717__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36717__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36717__$1);
var G__36828 = cljs.core.chunk_rest(seq__36717__$1);
var G__36829 = c__5548__auto__;
var G__36830 = cljs.core.count(c__5548__auto__);
var G__36831 = (0);
seq__36717 = G__36828;
chunk__36718 = G__36829;
count__36719 = G__36830;
i__36720 = G__36831;
continue;
} else {
var vec__36735 = cljs.core.first(seq__36717__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36735,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___36832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___36832)){
var effect_fn_36833 = temp__5823__auto___36832;
(effect_fn_36833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36834 = cljs.core.next(seq__36717__$1);
var G__36835 = null;
var G__36836 = (0);
var G__36837 = (0);
seq__36717 = G__36834;
chunk__36718 = G__36835;
count__36719 = G__36836;
i__36720 = G__36837;
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
var seq__36738 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36739 = null;
var count__36740 = (0);
var i__36741 = (0);
while(true){
if((i__36741 < count__36740)){
var event = chunk__36739.cljs$core$IIndexed$_nth$arity$2(null,i__36741);
re_frame.router.dispatch(event);


var G__36838 = seq__36738;
var G__36839 = chunk__36739;
var G__36840 = count__36740;
var G__36841 = (i__36741 + (1));
seq__36738 = G__36838;
chunk__36739 = G__36839;
count__36740 = G__36840;
i__36741 = G__36841;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36738);
if(temp__5825__auto__){
var seq__36738__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36738__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36738__$1);
var G__36845 = cljs.core.chunk_rest(seq__36738__$1);
var G__36846 = c__5548__auto__;
var G__36847 = cljs.core.count(c__5548__auto__);
var G__36848 = (0);
seq__36738 = G__36845;
chunk__36739 = G__36846;
count__36740 = G__36847;
i__36741 = G__36848;
continue;
} else {
var event = cljs.core.first(seq__36738__$1);
re_frame.router.dispatch(event);


var G__36849 = cljs.core.next(seq__36738__$1);
var G__36850 = null;
var G__36851 = (0);
var G__36852 = (0);
seq__36738 = G__36849;
chunk__36739 = G__36850;
count__36740 = G__36851;
i__36741 = G__36852;
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
var seq__36742 = cljs.core.seq(value);
var chunk__36743 = null;
var count__36744 = (0);
var i__36745 = (0);
while(true){
if((i__36745 < count__36744)){
var event = chunk__36743.cljs$core$IIndexed$_nth$arity$2(null,i__36745);
clear_event(event);


var G__36853 = seq__36742;
var G__36854 = chunk__36743;
var G__36855 = count__36744;
var G__36856 = (i__36745 + (1));
seq__36742 = G__36853;
chunk__36743 = G__36854;
count__36744 = G__36855;
i__36745 = G__36856;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36742);
if(temp__5825__auto__){
var seq__36742__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36742__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36742__$1);
var G__36857 = cljs.core.chunk_rest(seq__36742__$1);
var G__36858 = c__5548__auto__;
var G__36859 = cljs.core.count(c__5548__auto__);
var G__36860 = (0);
seq__36742 = G__36857;
chunk__36743 = G__36858;
count__36744 = G__36859;
i__36745 = G__36860;
continue;
} else {
var event = cljs.core.first(seq__36742__$1);
clear_event(event);


var G__36861 = cljs.core.next(seq__36742__$1);
var G__36862 = null;
var G__36863 = (0);
var G__36864 = (0);
seq__36742 = G__36861;
chunk__36743 = G__36862;
count__36744 = G__36863;
i__36745 = G__36864;
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
var _STAR_current_trace_STAR__orig_val__36751 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36752 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36752);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36302__auto___36865 = re_frame.interop.now();
var duration__36303__auto___36866 = (end__36302__auto___36865 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36303__auto___36866,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36302__auto___36865);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36751);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
