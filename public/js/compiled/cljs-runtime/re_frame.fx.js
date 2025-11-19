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
var _STAR_current_trace_STAR__orig_val__53007 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53008 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53008);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___53111 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___53111)){
var new_db_53112 = temp__5825__auto___53111;
var fexpr__53010_53113 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53010_53113.cljs$core$IFn$_invoke$arity$1 ? fexpr__53010_53113.cljs$core$IFn$_invoke$arity$1(new_db_53112) : fexpr__53010_53113.call(null,new_db_53112));
} else {
}

var seq__53011 = cljs.core.seq(effects_without_db);
var chunk__53012 = null;
var count__53013 = (0);
var i__53014 = (0);
while(true){
if((i__53014 < count__53013)){
var vec__53024 = chunk__53012.cljs$core$IIndexed$_nth$arity$2(null,i__53014);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(1),null);
var temp__5823__auto___53114 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53114)){
var effect_fn_53115 = temp__5823__auto___53114;
(effect_fn_53115.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53115.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53115.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__53116 = seq__53011;
var G__53117 = chunk__53012;
var G__53118 = count__53013;
var G__53119 = (i__53014 + (1));
seq__53011 = G__53116;
chunk__53012 = G__53117;
count__53013 = G__53118;
i__53014 = G__53119;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53011);
if(temp__5825__auto__){
var seq__53011__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53011__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53011__$1);
var G__53120 = cljs.core.chunk_rest(seq__53011__$1);
var G__53121 = c__4679__auto__;
var G__53122 = cljs.core.count(c__4679__auto__);
var G__53123 = (0);
seq__53011 = G__53120;
chunk__53012 = G__53121;
count__53013 = G__53122;
i__53014 = G__53123;
continue;
} else {
var vec__53045 = cljs.core.first(seq__53011__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(1),null);
var temp__5823__auto___53124 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53124)){
var effect_fn_53125 = temp__5823__auto___53124;
(effect_fn_53125.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53125.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53125.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__53126 = cljs.core.next(seq__53011__$1);
var G__53127 = null;
var G__53128 = (0);
var G__53129 = (0);
seq__53011 = G__53126;
chunk__53012 = G__53127;
count__53013 = G__53128;
i__53014 = G__53129;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52665__auto___53130 = re_frame.interop.now();
var duration__52666__auto___53131 = (end__52665__auto___53130 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52666__auto___53131,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52665__auto___53130);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53007);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___53132 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___53132)){
var new_db_53133 = temp__5825__auto___53132;
var fexpr__53053_53134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53053_53134.cljs$core$IFn$_invoke$arity$1 ? fexpr__53053_53134.cljs$core$IFn$_invoke$arity$1(new_db_53133) : fexpr__53053_53134.call(null,new_db_53133));
} else {
}

var seq__53054 = cljs.core.seq(effects_without_db);
var chunk__53055 = null;
var count__53056 = (0);
var i__53057 = (0);
while(true){
if((i__53057 < count__53056)){
var vec__53067 = chunk__53055.cljs$core$IIndexed$_nth$arity$2(null,i__53057);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(1),null);
var temp__5823__auto___53135 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53135)){
var effect_fn_53136 = temp__5823__auto___53135;
(effect_fn_53136.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53136.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53136.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__53137 = seq__53054;
var G__53138 = chunk__53055;
var G__53139 = count__53056;
var G__53140 = (i__53057 + (1));
seq__53054 = G__53137;
chunk__53055 = G__53138;
count__53056 = G__53139;
i__53057 = G__53140;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53054);
if(temp__5825__auto__){
var seq__53054__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53054__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53054__$1);
var G__53141 = cljs.core.chunk_rest(seq__53054__$1);
var G__53142 = c__4679__auto__;
var G__53143 = cljs.core.count(c__4679__auto__);
var G__53144 = (0);
seq__53054 = G__53141;
chunk__53055 = G__53142;
count__53056 = G__53143;
i__53057 = G__53144;
continue;
} else {
var vec__53070 = cljs.core.first(seq__53054__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(1),null);
var temp__5823__auto___53145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53145)){
var effect_fn_53146 = temp__5823__auto___53145;
(effect_fn_53146.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53146.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53146.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__53147 = cljs.core.next(seq__53054__$1);
var G__53148 = null;
var G__53149 = (0);
var G__53150 = (0);
seq__53054 = G__53147;
chunk__53055 = G__53148;
count__53056 = G__53149;
i__53057 = G__53150;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53075){
var map__53077 = p__53075;
var map__53077__$1 = cljs.core.__destructure_map(map__53077);
var effect = map__53077__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53077__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53077__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__53078 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53079 = null;
var count__53080 = (0);
var i__53081 = (0);
while(true){
if((i__53081 < count__53080)){
var effect = chunk__53079.cljs$core$IIndexed$_nth$arity$2(null,i__53081);
re_frame.fx.dispatch_later(effect);


var G__53151 = seq__53078;
var G__53152 = chunk__53079;
var G__53153 = count__53080;
var G__53154 = (i__53081 + (1));
seq__53078 = G__53151;
chunk__53079 = G__53152;
count__53080 = G__53153;
i__53081 = G__53154;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53078);
if(temp__5825__auto__){
var seq__53078__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53078__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53078__$1);
var G__53156 = cljs.core.chunk_rest(seq__53078__$1);
var G__53157 = c__4679__auto__;
var G__53158 = cljs.core.count(c__4679__auto__);
var G__53159 = (0);
seq__53078 = G__53156;
chunk__53079 = G__53157;
count__53080 = G__53158;
i__53081 = G__53159;
continue;
} else {
var effect = cljs.core.first(seq__53078__$1);
re_frame.fx.dispatch_later(effect);


var G__53160 = cljs.core.next(seq__53078__$1);
var G__53161 = null;
var G__53162 = (0);
var G__53163 = (0);
seq__53078 = G__53160;
chunk__53079 = G__53161;
count__53080 = G__53162;
i__53081 = G__53163;
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
var seq__53085 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53086 = null;
var count__53087 = (0);
var i__53088 = (0);
while(true){
if((i__53088 < count__53087)){
var vec__53095 = chunk__53086.cljs$core$IIndexed$_nth$arity$2(null,i__53088);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53095,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53095,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___53165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53165)){
var effect_fn_53166 = temp__5823__auto___53165;
(effect_fn_53166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53166.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53167 = seq__53085;
var G__53168 = chunk__53086;
var G__53169 = count__53087;
var G__53170 = (i__53088 + (1));
seq__53085 = G__53167;
chunk__53086 = G__53168;
count__53087 = G__53169;
i__53088 = G__53170;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53085);
if(temp__5825__auto__){
var seq__53085__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53085__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53085__$1);
var G__53171 = cljs.core.chunk_rest(seq__53085__$1);
var G__53172 = c__4679__auto__;
var G__53173 = cljs.core.count(c__4679__auto__);
var G__53174 = (0);
seq__53085 = G__53171;
chunk__53086 = G__53172;
count__53087 = G__53173;
i__53088 = G__53174;
continue;
} else {
var vec__53098 = cljs.core.first(seq__53085__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53098,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53098,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___53175 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___53175)){
var effect_fn_53176 = temp__5823__auto___53175;
(effect_fn_53176.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53176.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53176.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53177 = cljs.core.next(seq__53085__$1);
var G__53178 = null;
var G__53179 = (0);
var G__53180 = (0);
seq__53085 = G__53177;
chunk__53086 = G__53178;
count__53087 = G__53179;
i__53088 = G__53180;
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
var seq__53101 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53102 = null;
var count__53103 = (0);
var i__53104 = (0);
while(true){
if((i__53104 < count__53103)){
var event = chunk__53102.cljs$core$IIndexed$_nth$arity$2(null,i__53104);
re_frame.router.dispatch(event);


var G__53181 = seq__53101;
var G__53182 = chunk__53102;
var G__53183 = count__53103;
var G__53184 = (i__53104 + (1));
seq__53101 = G__53181;
chunk__53102 = G__53182;
count__53103 = G__53183;
i__53104 = G__53184;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53101);
if(temp__5825__auto__){
var seq__53101__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53101__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53101__$1);
var G__53185 = cljs.core.chunk_rest(seq__53101__$1);
var G__53186 = c__4679__auto__;
var G__53187 = cljs.core.count(c__4679__auto__);
var G__53188 = (0);
seq__53101 = G__53185;
chunk__53102 = G__53186;
count__53103 = G__53187;
i__53104 = G__53188;
continue;
} else {
var event = cljs.core.first(seq__53101__$1);
re_frame.router.dispatch(event);


var G__53189 = cljs.core.next(seq__53101__$1);
var G__53190 = null;
var G__53191 = (0);
var G__53192 = (0);
seq__53101 = G__53189;
chunk__53102 = G__53190;
count__53103 = G__53191;
i__53104 = G__53192;
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
var seq__53105 = cljs.core.seq(value);
var chunk__53106 = null;
var count__53107 = (0);
var i__53108 = (0);
while(true){
if((i__53108 < count__53107)){
var event = chunk__53106.cljs$core$IIndexed$_nth$arity$2(null,i__53108);
clear_event(event);


var G__53194 = seq__53105;
var G__53195 = chunk__53106;
var G__53196 = count__53107;
var G__53197 = (i__53108 + (1));
seq__53105 = G__53194;
chunk__53106 = G__53195;
count__53107 = G__53196;
i__53108 = G__53197;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53105);
if(temp__5825__auto__){
var seq__53105__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53105__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53105__$1);
var G__53201 = cljs.core.chunk_rest(seq__53105__$1);
var G__53202 = c__4679__auto__;
var G__53203 = cljs.core.count(c__4679__auto__);
var G__53204 = (0);
seq__53105 = G__53201;
chunk__53106 = G__53202;
count__53107 = G__53203;
i__53108 = G__53204;
continue;
} else {
var event = cljs.core.first(seq__53105__$1);
clear_event(event);


var G__53205 = cljs.core.next(seq__53105__$1);
var G__53206 = null;
var G__53207 = (0);
var G__53208 = (0);
seq__53105 = G__53205;
chunk__53106 = G__53206;
count__53107 = G__53207;
i__53108 = G__53208;
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
var _STAR_current_trace_STAR__orig_val__53109 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53110 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53110);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52665__auto___53209 = re_frame.interop.now();
var duration__52666__auto___53210 = (end__52665__auto___53209 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52666__auto___53210,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52665__auto___53209);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53109);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
