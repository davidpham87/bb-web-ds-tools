var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./portal.async.js");
require("./clojure.datafy.js");
require("./cljs.pprint.js");
require("./portal.runtime.cson.js");
require("./portal.viewer.js");
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("portal.runtime.js");

goog.provide('portal.runtime');
portal.runtime.tagged_type = cljs.core.type(portal.runtime.cson.__GT_Tagged("tag",cljs.core.PersistentVector.EMPTY));
cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,portal.runtime.tagged_type,(function (value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value),"remote")){
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rep","rep",-1226820564).cljs$core$IFn$_invoke$arity$1(value)], 0));
}
}));
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.default_options !== 'undefined')){
} else {
portal.runtime.default_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime._STAR_session_STAR_ !== 'undefined')){
} else {
portal.runtime._STAR_session_STAR_ = null;
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.sessions !== 'undefined')){
} else {
portal.runtime.sessions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(portal.viewer.table.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"selected","selected",574897764)], null)], null)));
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.connections !== 'undefined')){
} else {
portal.runtime.connections = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.pending_requests !== 'undefined')){
} else {
portal.runtime.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
portal.runtime.active_sessions = (function portal$runtime$active_sessions(){
return cljs.core.keys(cljs.core.deref(portal.runtime.connections));
});
portal.runtime.cleanup_sessions = (function portal$runtime$cleanup_sessions(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.sessions,cljs.core.select_keys,cljs.core.keys(cljs.core.deref(portal.runtime.connections)));
});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.id !== 'undefined')){
} else {
portal.runtime.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
portal.runtime.next_id = (function portal$runtime$next_id(var_args){
var G__36923 = arguments.length;
switch (G__36923) {
case 0:
return portal.runtime.next_id.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return portal.runtime.next_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.next_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portal.runtime.id,cljs.core.inc);
}));

(portal.runtime.next_id.cljs$core$IFn$_invoke$arity$1 = (function (p__36925){
var map__36926 = p__36925;
var map__36926__$1 = cljs.core.__destructure_map(map__36926);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.inc);
}));

(portal.runtime.next_id.cljs$lang$maxFixedArity = 1);

portal.runtime.get_session = (function portal$runtime$get_session(session_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.runtime.sessions),session_id),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id),new cljs.core.Keyword(null,"options","options",99638489),(function (p1__36927_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(portal.runtime.default_options),p1__36927_SHARP_], 0));
}));
});
portal.runtime.open_session = (function portal$runtime$open_session(p__36946){
var map__36947 = p__36946;
var map__36947__$1 = cljs.core.__destructure_map(map__36947);
var session = map__36947__$1;
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36947__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portal.runtime.get_session(session_id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"value-cache","value-cache",-844944621),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null),session], 0));
});
portal.runtime.close_session = (function portal$runtime$close_session(session_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.sessions,cljs.core.dissoc,session_id);
});
portal.runtime.reset_session = (function portal$runtime$reset_session(p__36969){
var map__36970 = p__36969;
var map__36970__$1 = cljs.core.__destructure_map(map__36970);
var session = map__36970__$1;
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
cljs.core.reset_BANG_(value_cache,cljs.core.PersistentArrayMap.EMPTY);

var seq__36981_37097 = cljs.core.seq(cljs.core.deref(watch_registry));
var chunk__36982_37098 = null;
var count__36983_37099 = (0);
var i__36984_37100 = (0);
while(true){
if((i__36984_37100 < count__36983_37099)){
var a_37101 = chunk__36982_37098.cljs$core$IIndexed$_nth$arity$2(null,i__36984_37100);
cljs.core.remove_watch(a_37101,session_id);


var G__37102 = seq__36981_37097;
var G__37103 = chunk__36982_37098;
var G__37104 = count__36983_37099;
var G__37105 = (i__36984_37100 + (1));
seq__36981_37097 = G__37102;
chunk__36982_37098 = G__37103;
count__36983_37099 = G__37104;
i__36984_37100 = G__37105;
continue;
} else {
var temp__5825__auto___37106 = cljs.core.seq(seq__36981_37097);
if(temp__5825__auto___37106){
var seq__36981_37107__$1 = temp__5825__auto___37106;
if(cljs.core.chunked_seq_QMARK_(seq__36981_37107__$1)){
var c__5548__auto___37108 = cljs.core.chunk_first(seq__36981_37107__$1);
var G__37109 = cljs.core.chunk_rest(seq__36981_37107__$1);
var G__37110 = c__5548__auto___37108;
var G__37111 = cljs.core.count(c__5548__auto___37108);
var G__37112 = (0);
seq__36981_37097 = G__37109;
chunk__36982_37098 = G__37110;
count__36983_37099 = G__37111;
i__36984_37100 = G__37112;
continue;
} else {
var a_37113 = cljs.core.first(seq__36981_37107__$1);
cljs.core.remove_watch(a_37113,session_id);


var G__37114 = cljs.core.next(seq__36981_37107__$1);
var G__37115 = null;
var G__37116 = (0);
var G__37117 = (0);
seq__36981_37097 = G__37114;
chunk__36982_37098 = G__37115;
count__36983_37099 = G__37116;
i__36984_37100 = G__37117;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(watch_registry,cljs.core.PersistentHashSet.EMPTY);

return session;
});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.request !== 'undefined')){
} else {
portal.runtime.request = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
portal.runtime.set_timeout = (function portal$runtime$set_timeout(f,timeout){
setTimeout(f,timeout);

return null;
});
portal.runtime.hashable_QMARK_ = (function portal$runtime$hashable_QMARK_(value){
try{var and__5023__auto__ = cljs.core.hash(value);
if(cljs.core.truth_(and__5023__auto__)){
return true;
} else {
return and__5023__auto__;
}
}catch (e36991){var _ = e36991;
return false;
}});
portal.runtime.can_meta_QMARK_ = (function portal$runtime$can_meta_QMARK_(value){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
portal.runtime.hash_PLUS_ = (function portal$runtime$hash_PLUS_(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (out,k,v){
return ((out + (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(k) : portal.runtime.hash_PLUS_.call(null,k))) + (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.hash_PLUS_.call(null,v)));
}),(((1) + ((cljs.core.sorted_QMARK_(x))?(1):(0))) + (function (){var G__36993 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36993) : portal.runtime.hash_PLUS_.call(null,G__36993));
})()),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,v){
return (out + (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.hash_PLUS_.call(null,v)));
}),(((cljs.core.list_QMARK_(x))?(3):((cljs.core.set_QMARK_(x))?((cljs.core.sorted_QMARK_(x))?(4):(5)):((cljs.core.vector_QMARK_(x))?(6):(7)
))) + (function (){var G__36994 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36994) : portal.runtime.hash_PLUS_.call(null,G__36994));
})()),x);
} else {
var G__36995 = (cljs.core.hash(x) + cljs.core.hash(cljs.core.type(x)));
if(portal.runtime.can_meta_QMARK_(x)){
return (G__36995 + (function (){var G__36996 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__36996) : portal.runtime.hash_PLUS_.call(null,G__36996));
})());
} else {
return G__36995;
}

}
}
});
/**
 * Include metadata when capturing values in cache.
 */
portal.runtime.value__GT_key = (function portal$runtime$value__GT_key(value){
if(cljs.core.truth_(portal.runtime.hashable_QMARK_(value))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value,portal.runtime.hash_PLUS_(value)], null);
} else {
return null;
}
});
portal.runtime.atom_QMARK_ = (function portal$runtime$atom_QMARK_(o){
if((!((o == null)))){
if((((o.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IAtom$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,o);
}
});
portal.runtime.notify = (function portal$runtime$notify(session_id,a){
var temp__5825__auto__ = cljs.core.deref(portal.runtime.request);
if(cljs.core.truth_(temp__5825__auto__)){
var request = temp__5825__auto__;
var G__36998 = session_id;
var G__36999 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("portal.rpc","invalidate","portal.rpc/invalidate",718224599),new cljs.core.Keyword(null,"atom","atom",-397043653),a], null);
return (request.cljs$core$IFn$_invoke$arity$2 ? request.cljs$core$IFn$_invoke$arity$2(G__36998,G__36999) : request.call(null,G__36998,G__36999));
} else {
return null;
}
});
portal.runtime.invalidate = (function portal$runtime$invalidate(session_id,a,old,new$){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(portal.runtime.value__GT_key(old),portal.runtime.value__GT_key(new$))))){
return portal.runtime.set_timeout((function (){
if((cljs.core.deref(a) === new$)){
return portal.runtime.notify(session_id,a);
} else {
return null;
}
}),(100));
} else {
return null;
}
});
portal.runtime.watch_atom = (function portal$runtime$watch_atom(a){
var map__37000 = portal.runtime._STAR_session_STAR_;
var map__37000__$1 = cljs.core.__destructure_map(map__37000);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
if(cljs.core.contains_QMARK_(cljs.core.deref(watch_registry),a)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(watch_registry,(function (atoms){
if(cljs.core.contains_QMARK_(atoms,a)){
return atoms;
} else {
cljs.core.add_watch(a,session_id,new cljs.core.Var(function(){return portal.runtime.invalidate;},new cljs.core.Symbol("portal.runtime","invalidate","portal.runtime/invalidate",1356720653,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"invalidate","invalidate",-1662211653,null),"portal/runtime.cljc",18,1,172,172,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"old","old",-184691163,null),new cljs.core.Symbol(null,"new","new",-444906321,null)], null)),null,(cljs.core.truth_(portal.runtime.invalidate)?portal.runtime.invalidate.cljs$lang$test:null)])));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(atoms,a);
}
}));
}
});
/**
 * Toggle watching an atom for a given Portal session.
 */
portal.runtime.toggle_watch = (function portal$runtime$toggle_watch(a){
var map__37001 = portal.runtime._STAR_session_STAR_;
var map__37001__$1 = cljs.core.__destructure_map(map__37001);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37001__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37001__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
if(cljs.core.contains_QMARK_(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(watch_registry,(function (atoms){
if(cljs.core.contains_QMARK_(atoms,a)){
cljs.core.remove_watch(a,session_id);

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(atoms,a);
} else {
cljs.core.add_watch(a,session_id,new cljs.core.Var(function(){return portal.runtime.invalidate;},new cljs.core.Symbol("portal.runtime","invalidate","portal.runtime/invalidate",1356720653,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"invalidate","invalidate",-1662211653,null),"portal/runtime.cljc",18,1,172,172,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"old","old",-184691163,null),new cljs.core.Symbol(null,"new","new",-444906321,null)], null)),null,(cljs.core.truth_(portal.runtime.invalidate)?portal.runtime.invalidate.cljs$lang$test:null)])));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(atoms,a);
}
})),a)){
return portal.runtime.set_timeout((function (){
return portal.runtime.notify(session_id,a);
}),(0));
} else {
return null;
}
});
portal.runtime.value__GT_id = (function portal$runtime$value__GT_id(value){
var k = portal.runtime.value__GT_key(value);
var out = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_session_STAR_),(function (cache){
var temp__5823__auto__ = (function (){var and__5023__auto__ = k;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
cljs.core.reset_BANG_(out,id);

return cache;
} else {
var id = portal.runtime.next_id.cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_session_STAR_);
cljs.core.reset_BANG_(out,id);

var G__37002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),value);
if(cljs.core.truth_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37002,k,id);
} else {
return G__37002;
}
}
}));

return cljs.core.deref(out);
});
portal.runtime.value__GT_id_QMARK_ = (function portal$runtime$value__GT_id_QMARK_(value){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_session_STAR_)),portal.runtime.value__GT_key(value));
});
portal.runtime.id__GT_value = (function portal$runtime$id__GT_value(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_session_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
portal.runtime.deref_QMARK_ = (function portal$runtime$deref_QMARK_(value){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value);
}
});
portal.runtime.pr_str_SINGLEQUOTE_ = (function portal$runtime$pr_str_SINGLEQUOTE_(value){
try{if((!(portal.runtime.deref_QMARK_(value)))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
return ["#object ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type(value),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword("portal.runtime","elided","portal.runtime/elided",-869783975)], null)], null)], 0))].join('');
}
}catch (e37004){var _ = e37004;
return ["#object [",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(value)], 0))," unprintable]"].join('');
}});
portal.runtime.to_object = (function portal$runtime$to_object(buffer,value,tag,rep){
if(cljs.core.not(portal.runtime._STAR_session_STAR_)){
return portal.runtime.cson.to_json_STAR_(cljs.core.with_meta(portal.runtime.cson.tagged_value("remote",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))),cljs.core.meta(value)),buffer);
} else {
var temp__5823__auto__ = portal.runtime.value__GT_id_QMARK_(value);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return portal.runtime.cson.tagged_value("ref",id).portal$runtime$cson$ToJson$to_json_STAR_$arity$2(null,buffer);
} else {
var m = cljs.core.meta(value);
if(portal.runtime.atom_QMARK_(value)){
portal.runtime.watch_atom(value);
} else {
}

return portal.runtime.cson.tag(buffer,"object",(function (){var G__37005 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"id","id",-1388402092),portal.runtime.value__GT_id(value),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(value)], 0)),new cljs.core.Keyword(null,"pr-str","pr-str",587523624),portal.runtime.pr_str_SINGLEQUOTE_(value),new cljs.core.Keyword(null,"protocols","protocols",-5615896),(function (){var G__37006 = cljs.core.PersistentHashSet.EMPTY;
if(portal.runtime.deref_QMARK_(value)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37006,new cljs.core.Keyword(null,"IDeref","IDeref",97891670));
} else {
return G__37006;
}
})()], null);
var G__37005__$1 = (cljs.core.truth_(m)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37005,new cljs.core.Keyword(null,"meta","meta",1499536964),m):G__37005);
if(cljs.core.truth_(rep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37005__$1,new cljs.core.Keyword(null,"rep","rep",-1226820564),rep);
} else {
return G__37005__$1;
}
})());
}
}
});
(portal.runtime.cson.ToJson["_"] = true);

(portal.runtime.cson.to_json_STAR_["_"] = (function (value,buffer){
return portal.runtime.to_object(buffer,value,new cljs.core.Keyword(null,"object","object",1474613949),null);
}));
portal.runtime.has_QMARK_ = (function portal$runtime$has_QMARK_(m,k){
try{return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m));
}catch (e37007){var _e = e37007;
return null;
}});
portal.runtime.no_cache = (function portal$runtime$no_cache(value){
var or__5025__auto__ = (!(cljs.core.coll_QMARK_(value)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.empty_QMARK_(value);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = portal.runtime.cson.tagged_value_QMARK_(value);
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = (!(portal.runtime.can_meta_QMARK_(value)));
if(or__5025__auto____$3){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = portal.runtime.has_QMARK_(value,new cljs.core.Keyword("portal.runtime","id","portal.runtime/id",1768418782));
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = portal.runtime.has_QMARK_(value,new cljs.core.Keyword("portal.rpc","id","portal.rpc/id",-1119763215));
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
return new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(value));
}
}
}
}
}
}
});
portal.runtime.id_coll = (function portal$runtime$id_coll(value){
if(cljs.core.truth_(portal.runtime.no_cache(value))){
return value;
} else {
var temp__5823__auto__ = portal.runtime.value__GT_id_QMARK_(value);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return portal.runtime.cson.tagged_value("ref",id);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(value,cljs.core.merge,(function (){var G__37008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","id","portal.runtime/id",1768418782),portal.runtime.value__GT_id(value)], null);
if(cljs.core.record_QMARK_(value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37008,new cljs.core.Keyword("portal.runtime","type","portal.runtime/type",36635890),cljs.core.type(value));
} else {
return G__37008;
}
})());
}
}
});
portal.runtime.id_var = (function portal$runtime$id_var(value){
if((!(cljs.core.var_QMARK_(value)))){
return value;
} else {
return cljs.core.with_meta(portal.runtime.cson.tagged_value("portal/var",cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(value)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(value),new cljs.core.Keyword("portal.runtime","id","portal.runtime/id",1768418782),portal.runtime.value__GT_id(value)));
}
});
portal.runtime.write = (function portal$runtime$write(value,session){
var _STAR_session_STAR__orig_val__37009 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__37010 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__37010);

try{return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2(value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([session,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(portal.runtime.id_var,portal.runtime.id_coll),new cljs.core.Keyword(null,"to-object","to-object",37050231),portal.runtime.to_object], null)], 0)));
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__37009);
}});
portal.runtime.read = (function portal$runtime$read(string,session){
var _STAR_session_STAR__orig_val__37011 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__37012 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__37012);

try{return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2(string,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([session,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),(function (op,value){
var G__37013 = op;
switch (G__37013) {
case "ref":
return portal.runtime.id__GT_value(value);

break;
default:
return portal.runtime.cson.tagged_value(op,value);

}
})], null)], 0)));
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__37011);
}});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.tap_list !== 'undefined')){
} else {
portal.runtime.tap_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044)], null)));
}
portal.runtime.realize_value_BANG_ = (function portal$runtime$realize_value_BANG_(x){
if(cljs.core.map_QMARK_(x)){
var seq__37014 = cljs.core.seq(x);
var chunk__37015 = null;
var count__37016 = (0);
var i__37017 = (0);
while(true){
if((i__37017 < count__37016)){
var vec__37024 = chunk__37015.cljs$core$IIndexed$_nth$arity$2(null,i__37017);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(1),null);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(k) : portal.runtime.realize_value_BANG_.call(null,k));

(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__37125 = seq__37014;
var G__37126 = chunk__37015;
var G__37127 = count__37016;
var G__37128 = (i__37017 + (1));
seq__37014 = G__37125;
chunk__37015 = G__37126;
count__37016 = G__37127;
i__37017 = G__37128;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37014);
if(temp__5825__auto__){
var seq__37014__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37014__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37014__$1);
var G__37129 = cljs.core.chunk_rest(seq__37014__$1);
var G__37130 = c__5548__auto__;
var G__37131 = cljs.core.count(c__5548__auto__);
var G__37132 = (0);
seq__37014 = G__37129;
chunk__37015 = G__37130;
count__37016 = G__37131;
i__37017 = G__37132;
continue;
} else {
var vec__37027 = cljs.core.first(seq__37014__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37027,(1),null);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(k) : portal.runtime.realize_value_BANG_.call(null,k));

(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__37133 = cljs.core.next(seq__37014__$1);
var G__37134 = null;
var G__37135 = (0);
var G__37136 = (0);
seq__37014 = G__37133;
chunk__37015 = G__37134;
count__37016 = G__37135;
i__37017 = G__37136;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.coll_QMARK_(x)){
var seq__37030 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((100000),x));
var chunk__37031 = null;
var count__37032 = (0);
var i__37033 = (0);
while(true){
if((i__37033 < count__37032)){
var v = chunk__37031.cljs$core$IIndexed$_nth$arity$2(null,i__37033);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__37137 = seq__37030;
var G__37138 = chunk__37031;
var G__37139 = count__37032;
var G__37140 = (i__37033 + (1));
seq__37030 = G__37137;
chunk__37031 = G__37138;
count__37032 = G__37139;
i__37033 = G__37140;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37030);
if(temp__5825__auto__){
var seq__37030__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37030__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37030__$1);
var G__37141 = cljs.core.chunk_rest(seq__37030__$1);
var G__37142 = c__5548__auto__;
var G__37143 = cljs.core.count(c__5548__auto__);
var G__37144 = (0);
seq__37030 = G__37141;
chunk__37031 = G__37142;
count__37032 = G__37143;
i__37033 = G__37144;
continue;
} else {
var v = cljs.core.first(seq__37030__$1);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__37145 = cljs.core.next(seq__37030__$1);
var G__37146 = null;
var G__37147 = (0);
var G__37148 = (0);
seq__37030 = G__37145;
chunk__37031 = G__37146;
count__37032 = G__37147;
i__37033 = G__37148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
portal.runtime.runtime = (function portal$runtime$runtime(){
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);
});
portal.runtime.error__GT_data = (function portal$runtime$error__GT_data(e){
return e;
});
portal.runtime.update_value = (function portal$runtime$update_value(new_value){
try{portal.runtime.realize_value_BANG_(new_value);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.tap_list,cljs.core.conj,new_value);
}catch (e37034){var e = e37034;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.tap_list,cljs.core.conj,portal.runtime.error__GT_data(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to receive value.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value-type","value-type",576005757),cljs.core.type(new_value)], null),e)));
}});
portal.runtime.runtime_keymap = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true], null)));
portal.runtime.get_options = (function portal$runtime$get_options(){
var map__37035 = portal.runtime._STAR_session_STAR_;
var map__37035__$1 = cljs.core.__destructure_map(map__37035);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37035__$1,new cljs.core.Keyword(null,"options","options",99638489));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37035__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(options)))?"portal-dev":"portal"),new cljs.core.Keyword(null,"version","version",425292698),"0.62.0",new cljs.core.Keyword(null,"runtime","runtime",-1331573996),portal.runtime.runtime(),new cljs.core.Keyword(null,"platform","platform",-1086422114),(((typeof window !== 'undefined'))?"web":(((typeof process !== 'undefined'))?"node":(((typeof PLANCK_VERSION !== 'undefined'))?"planck":"web"
))),new cljs.core.Keyword(null,"value","value",305978217),portal.runtime.tap_list,new cljs.core.Keyword(null,"keymap","keymap",-499605268),portal.runtime.runtime_keymap,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936),watch_registry], null),options], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true], null));
});
portal.runtime.clear_values = (function portal$runtime$clear_values(var_args){
var G__37037 = arguments.length;
switch (G__37037) {
case 0:
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$0 = (function (){
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2(null,cljs.core.identity);
}));

(portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2 = (function (_request,done){
var temp__5825__auto___37150 = portal.runtime._STAR_session_STAR_;
if(cljs.core.truth_(temp__5825__auto___37150)){
var map__37038_37151 = temp__5825__auto___37150;
var map__37038_37152__$1 = cljs.core.__destructure_map(map__37038_37151);
var session_id_37153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37152__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache_37154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37152__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry_37155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37152__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
var value_37156 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(portal.runtime.get_options());
if(portal.runtime.atom_QMARK_(value_37156)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(value_37156,cljs.core.empty);
} else {
}

cljs.core.reset_BANG_(value_cache_37154,cljs.core.PersistentArrayMap.EMPTY);

var seq__37041_37157 = cljs.core.seq(cljs.core.deref(watch_registry_37155));
var chunk__37042_37158 = null;
var count__37043_37159 = (0);
var i__37044_37160 = (0);
while(true){
if((i__37044_37160 < count__37043_37159)){
var a_37161 = chunk__37042_37158.cljs$core$IIndexed$_nth$arity$2(null,i__37044_37160);
cljs.core.remove_watch(a_37161,session_id_37153);


var G__37162 = seq__37041_37157;
var G__37163 = chunk__37042_37158;
var G__37164 = count__37043_37159;
var G__37165 = (i__37044_37160 + (1));
seq__37041_37157 = G__37162;
chunk__37042_37158 = G__37163;
count__37043_37159 = G__37164;
i__37044_37160 = G__37165;
continue;
} else {
var temp__5825__auto___37166__$1 = cljs.core.seq(seq__37041_37157);
if(temp__5825__auto___37166__$1){
var seq__37041_37167__$1 = temp__5825__auto___37166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37041_37167__$1)){
var c__5548__auto___37168 = cljs.core.chunk_first(seq__37041_37167__$1);
var G__37169 = cljs.core.chunk_rest(seq__37041_37167__$1);
var G__37170 = c__5548__auto___37168;
var G__37171 = cljs.core.count(c__5548__auto___37168);
var G__37172 = (0);
seq__37041_37157 = G__37169;
chunk__37042_37158 = G__37170;
count__37043_37159 = G__37171;
i__37044_37160 = G__37172;
continue;
} else {
var a_37173 = cljs.core.first(seq__37041_37167__$1);
cljs.core.remove_watch(a_37173,session_id_37153);


var G__37174 = cljs.core.next(seq__37041_37167__$1);
var G__37175 = null;
var G__37176 = (0);
var G__37177 = (0);
seq__37041_37157 = G__37174;
chunk__37042_37158 = G__37175;
count__37043_37159 = G__37176;
i__37044_37160 = G__37177;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(watch_registry_37155,cljs.core.PersistentHashSet.EMPTY);
} else {
}

portal.runtime.cleanup_sessions();

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(null) : done.call(null,null));
}));

(portal.runtime.clear_values.cljs$lang$maxFixedArity = 2);

portal.runtime.cache_evict = (function portal$runtime$cache_evict(id){
var value = portal.runtime.id__GT_value(id);
var map__37045 = portal.runtime._STAR_session_STAR_;
var map__37045__$1 = cljs.core.__destructure_map(map__37045);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
if(portal.runtime.atom_QMARK_(value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(watch_registry,cljs.core.disj,value);

cljs.core.remove_watch(value,session_id);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value_cache,cljs.core.dissoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),portal.runtime.value__GT_key(value));

return null;
});
portal.runtime.update_selected = (function portal$runtime$update_selected(var_args){
var G__37051 = arguments.length;
switch (G__37051) {
case 1:
return portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_session_STAR_),value);
}));

(portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$2 = (function (session_id,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.sessions,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [session_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),value);

return null;
}));

(portal.runtime.update_selected.cljs$lang$maxFixedArity = 2);

portal.runtime.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(portal.viewer.table.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"predicate","predicate",-1742501860),new cljs.core.Keyword(null,"private","private",-558947994)], null)], null)));
portal.runtime.get_functions = (function portal$runtime$get_functions(v){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(portal.viewer.table.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv((function (out,name,opts){
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(opts)),opts], 0));
var result = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"command","command",-894540724)], null)),new cljs.core.Keyword(null,"name","name",1843675177),name),cljs.core.assoc,new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(m))){
return out;
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"predicate","predicate",-1742501860).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var predicate = temp__5823__auto__;
try{var G__37054 = out;
if(cljs.core.truth_((predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37054,name,result);
} else {
return G__37054;
}
}catch (e37053){var _ex = e37053;
return out;
}} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,name,result);
}
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(portal.runtime.registry)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"command","command",-894540724)], null)], null)),cljs.core.assoc,new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true);
});
portal.runtime.ping = (function portal$runtime$ping(){
return new cljs.core.Keyword("portal.runtime","pong","portal.runtime/pong",-1979114888);
});
portal.runtime.get_function = (function portal$runtime$get_function(f){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.runtime.registry),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"var","var",-769682797)], null));
});
portal.runtime.source_info = (function portal$runtime$source_info(f){
if(portal.runtime.can_meta_QMARK_(f)){
return cljs.core.select_keys(cljs.core.meta(f),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null));
} else {
return null;
}
});
portal.runtime.invoke = (function portal$runtime$invoke(p__37056,done){
var map__37057 = p__37056;
var map__37057__$1 = cljs.core.__destructure_map(map__37057);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var session = portal.runtime._STAR_session_STAR_;
var f__$1 = (((f instanceof cljs.core.Symbol))?portal.runtime.get_function(f):f);
return Promise.resolve(null).then((function (){
return Promise.resolve(Promise.resolve((function (){var _STAR_session_STAR__orig_val__37062 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__37063 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__37063);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__37062);
}})()).then((function (return$){
return Promise.resolve(null).then((function (){
return Promise.resolve((function (){var G__37064 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(portal.runtime.source_info(f__$1),new cljs.core.Keyword(null,"return","return",-1891502105),return$);
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37064) : done.call(null,G__37064));
})());
}));
})));
})).catch((function (e){
return Promise.resolve(null).then((function (){
return Promise.resolve((function (){var G__37065 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(portal.runtime.source_info(f__$1),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.datafy.datafy(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_message(e),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("portal.runtime","function","portal.runtime/function",-993796991),f__$1,new cljs.core.Keyword("portal.runtime","args","portal.runtime/args",-1707404986),args,new cljs.core.Keyword("portal.runtime","found?","portal.runtime/found?",2080719246),(!((f__$1 == null))),new cljs.core.Keyword("portal.runtime","data","portal.runtime/data",907180777),cljs.core.ex_data(e)], null))),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),portal.runtime.runtime()));
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37065) : done.call(null,G__37065));
})());
}));
}));
});
portal.runtime.ops = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.rpc","invoke","portal.rpc/invoke",1414499084),new cljs.core.Var(function(){return portal.runtime.invoke;},new cljs.core.Symbol("portal.runtime","invoke","portal.runtime/invoke",-498714524,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"invoke","invoke",-1508508610,null),"portal/runtime.cljc",13,1,491,491,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)], null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.invoke)?portal.runtime.invoke.cljs$lang$test:null)]))], null);
portal.runtime.aliases = new cljs.core.PersistentArrayMap(null, 1, ["cljs.core","clojure.core"], null);
portal.runtime.var__GT_name = (function portal$runtime$var__GT_name(var$){
var map__37066 = cljs.core.meta(var$);
var map__37066__$1 = cljs.core.__destructure_map(map__37066);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((portal.runtime.aliases.cljs$core$IFn$_invoke$arity$2 ? portal.runtime.aliases.cljs$core$IFn$_invoke$arity$2(ns__$1,ns__$1) : portal.runtime.aliases.call(null,ns__$1,ns__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
portal.runtime.register_BANG_ = (function portal$runtime$register_BANG_(var_args){
var G__37068 = arguments.length;
switch (G__37068) {
case 1:
return portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2(var$,cljs.core.PersistentArrayMap.EMPTY);
}));

(portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (var$,opts){
var m = cljs.core.meta(var$);
var name = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return portal.runtime.var__GT_name(var$);
}
})();
var seq__37070_37181 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts)));
var chunk__37071_37182 = null;
var count__37072_37183 = (0);
var i__37073_37184 = (0);
while(true){
if((i__37073_37184 < count__37072_37183)){
var shortcut_37185 = chunk__37071_37182.cljs$core$IIndexed$_nth$arity$2(null,i__37073_37184);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.runtime_keymap,cljs.core.assoc,shortcut_37185,name);


var G__37186 = seq__37070_37181;
var G__37187 = chunk__37071_37182;
var G__37188 = count__37072_37183;
var G__37189 = (i__37073_37184 + (1));
seq__37070_37181 = G__37186;
chunk__37071_37182 = G__37187;
count__37072_37183 = G__37188;
i__37073_37184 = G__37189;
continue;
} else {
var temp__5825__auto___37190 = cljs.core.seq(seq__37070_37181);
if(temp__5825__auto___37190){
var seq__37070_37191__$1 = temp__5825__auto___37190;
if(cljs.core.chunked_seq_QMARK_(seq__37070_37191__$1)){
var c__5548__auto___37192 = cljs.core.chunk_first(seq__37070_37191__$1);
var G__37193 = cljs.core.chunk_rest(seq__37070_37191__$1);
var G__37194 = c__5548__auto___37192;
var G__37195 = cljs.core.count(c__5548__auto___37192);
var G__37196 = (0);
seq__37070_37181 = G__37193;
chunk__37071_37182 = G__37194;
count__37072_37183 = G__37195;
i__37073_37184 = G__37196;
continue;
} else {
var shortcut_37197 = cljs.core.first(seq__37070_37191__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.runtime_keymap,cljs.core.assoc,shortcut_37197,name);


var G__37198 = cljs.core.next(seq__37070_37191__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__37070_37181 = G__37198;
chunk__37071_37182 = G__37199;
count__37072_37183 = G__37200;
i__37073_37184 = G__37201;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.registry,cljs.core.assoc,name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),var$], null),opts], 0)));
}));

(portal.runtime.register_BANG_.cljs$lang$maxFixedArity = 2);

var seq__37074_37202 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return portal.runtime.ping;},new cljs.core.Symbol("portal.runtime","ping","portal.runtime/ping",-1301457895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"ping","ping",-29583257,null),"portal/runtime.cljc",12,1,482,482,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.ping)?portal.runtime.ping.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.cache_evict;},new cljs.core.Symbol("portal.runtime","cache-evict","portal.runtime/cache-evict",-228220051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"cache-evict","cache-evict",1043785499,null),"portal/runtime.cljc",19,1,443,443,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)),null,(cljs.core.truth_(portal.runtime.cache_evict)?portal.runtime.cache_evict.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.get_options;},new cljs.core.Symbol("portal.runtime","get-options","portal.runtime/get-options",-355075714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"get-options","get-options",652557604,null),"portal/runtime.cljc",19,1,402,402,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.get_options)?portal.runtime.get_options.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.get_functions;},new cljs.core.Symbol("portal.runtime","get-functions","portal.runtime/get-functions",-62603721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"get-functions","get-functions",940964841,null),"portal/runtime.cljc",21,1,461,461,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(portal.runtime.get_functions)?portal.runtime.get_functions.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.type;},new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"cljs/core.cljs",11,1,317,317,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return x's constructor.",(cljs.core.truth_(cljs.core.type)?cljs.core.type.cljs$lang$test:null)]))], null));
var chunk__37075_37203 = null;
var count__37076_37204 = (0);
var i__37077_37205 = (0);
while(true){
if((i__37077_37205 < count__37076_37204)){
var var_37206 = chunk__37075_37203.cljs$core$IIndexed$_nth$arity$2(null,i__37077_37205);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1(var_37206);


var G__37207 = seq__37074_37202;
var G__37208 = chunk__37075_37203;
var G__37209 = count__37076_37204;
var G__37210 = (i__37077_37205 + (1));
seq__37074_37202 = G__37207;
chunk__37075_37203 = G__37208;
count__37076_37204 = G__37209;
i__37077_37205 = G__37210;
continue;
} else {
var temp__5825__auto___37211 = cljs.core.seq(seq__37074_37202);
if(temp__5825__auto___37211){
var seq__37074_37212__$1 = temp__5825__auto___37211;
if(cljs.core.chunked_seq_QMARK_(seq__37074_37212__$1)){
var c__5548__auto___37213 = cljs.core.chunk_first(seq__37074_37212__$1);
var G__37214 = cljs.core.chunk_rest(seq__37074_37212__$1);
var G__37215 = c__5548__auto___37213;
var G__37216 = cljs.core.count(c__5548__auto___37213);
var G__37217 = (0);
seq__37074_37202 = G__37214;
chunk__37075_37203 = G__37215;
count__37076_37204 = G__37216;
i__37077_37205 = G__37217;
continue;
} else {
var var_37218 = cljs.core.first(seq__37074_37212__$1);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1(var_37218);


var G__37219 = cljs.core.next(seq__37074_37212__$1);
var G__37220 = null;
var G__37221 = (0);
var G__37222 = (0);
seq__37074_37202 = G__37219;
chunk__37075_37203 = G__37220;
count__37076_37204 = G__37221;
i__37077_37205 = G__37222;
continue;
}
} else {
}
}
break;
}
var seq__37078_37223 = cljs.core.seq(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Var(function(){return cljs.core.pr_str;},new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"cljs/core.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"objs","objs",-170194107,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10644,10644,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),"pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.",(cljs.core.truth_(cljs.core.pr_str)?cljs.core.pr_str.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null)], null),new cljs.core.Var(function(){return cljs.core.deref;},new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),"cljs/core.cljs",12,1,1499,1499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null)),"Also reader macro: @var/@atom/@delay. Returns the\n   most-recently-committed value of ref. When applied to a var\n   or atom, returns its current state. When applied to a delay, forces\n   it if not already forced. See also - realized?.",(cljs.core.truth_(cljs.core.deref)?cljs.core.deref.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.deref_QMARK_], null),new cljs.core.Var(function(){return cljs.core.meta;},new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),"cljs/core.cljs",11,1,2136,2136,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null)),"Returns the metadata of obj, returns nil if there is no metadata.",(cljs.core.truth_(cljs.core.meta)?cljs.core.meta.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.can_meta_QMARK_], null),new cljs.core.Var(function(){return portal.runtime.update_selected;},new cljs.core.Symbol("portal.runtime","update-selected","portal.runtime/update-selected",713792101,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"update-selected","update-selected",-161784109,null),"portal/runtime.cljc",22,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,452,452,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(portal.runtime.update_selected)?portal.runtime.update_selected.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null),new cljs.core.Var(function(){return portal.runtime.clear_values;},new cljs.core.Symbol("portal.runtime","clear-values","portal.runtime/clear-values",1961286450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"clear-values","clear-values",-1328446232,null),"portal/runtime.cljc",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,429,429,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.clear_values)?portal.runtime.clear_values.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null),new cljs.core.Var(function(){return clojure.datafy.nav;},new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),"clojure/datafy.cljs",10,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Returns (possibly transformed) v in the context of coll and k (a\n  key/index or nil). Callers should attempt to provide the key/index\n  context k for Indexed/Associative/ILookup colls if possible, but not\n  to fabricate one e.g. for sequences (pass nil). nav will return the\n  value of clojure.core.protocols/nav.",(cljs.core.truth_(clojure.datafy.nav)?clojure.datafy.nav.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["enter",null], null), null)], null)], null),new cljs.core.Var(function(){return clojure.datafy.datafy;},new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"datafy","datafy",-1790598647,null),"clojure/datafy.cljs",13,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Attempts to return x as data.\n  datafy will return the value of clojure.protocols/datafy. If\n  the value has been transformed and the result supports\n  metadata, :clojure.datafy/obj will be set on the metadata to the\n  original value of x.",(cljs.core.truth_(clojure.datafy.datafy)?clojure.datafy.datafy.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["shift",null,"enter",null], null), null)], null)], null),new cljs.core.Var(function(){return portal.runtime.toggle_watch;},new cljs.core.Symbol("portal.runtime","toggle-watch","portal.runtime/toggle-watch",1647096761,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"toggle-watch","toggle-watch",509308931,null),"portal/runtime.cljc",20,true,1,191,191,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),"Toggle watching an atom for a given Portal session.",(cljs.core.truth_(portal.runtime.toggle_watch)?portal.runtime.toggle_watch.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),false,new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.atom_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("portal.api","toggle-watch","portal.api/toggle-watch",778447483,null)], null)]));
var chunk__37079_37224 = null;
var count__37080_37225 = (0);
var i__37081_37226 = (0);
while(true){
if((i__37081_37226 < count__37080_37225)){
var vec__37088_37227 = chunk__37079_37224.cljs$core$IIndexed$_nth$arity$2(null,i__37081_37226);
var var_37228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088_37227,(0),null);
var opts_37229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088_37227,(1),null);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2(var_37228,opts_37229);


var G__37231 = seq__37078_37223;
var G__37232 = chunk__37079_37224;
var G__37233 = count__37080_37225;
var G__37234 = (i__37081_37226 + (1));
seq__37078_37223 = G__37231;
chunk__37079_37224 = G__37232;
count__37080_37225 = G__37233;
i__37081_37226 = G__37234;
continue;
} else {
var temp__5825__auto___37235 = cljs.core.seq(seq__37078_37223);
if(temp__5825__auto___37235){
var seq__37078_37236__$1 = temp__5825__auto___37235;
if(cljs.core.chunked_seq_QMARK_(seq__37078_37236__$1)){
var c__5548__auto___37237 = cljs.core.chunk_first(seq__37078_37236__$1);
var G__37238 = cljs.core.chunk_rest(seq__37078_37236__$1);
var G__37239 = c__5548__auto___37237;
var G__37240 = cljs.core.count(c__5548__auto___37237);
var G__37241 = (0);
seq__37078_37223 = G__37238;
chunk__37079_37224 = G__37239;
count__37080_37225 = G__37240;
i__37081_37226 = G__37241;
continue;
} else {
var vec__37091_37242 = cljs.core.first(seq__37078_37236__$1);
var var_37243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37091_37242,(0),null);
var opts_37244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37091_37242,(1),null);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2(var_37243,opts_37244);


var G__37245 = cljs.core.next(seq__37078_37236__$1);
var G__37246 = null;
var G__37247 = (0);
var G__37248 = (0);
seq__37078_37223 = G__37245;
chunk__37079_37224 = G__37246;
count__37080_37225 = G__37247;
i__37081_37226 = G__37248;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=portal.runtime.js.map
