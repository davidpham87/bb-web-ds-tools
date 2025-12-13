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
var G__29043 = arguments.length;
switch (G__29043) {
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

(portal.runtime.next_id.cljs$core$IFn$_invoke$arity$1 = (function (p__29044){
var map__29045 = p__29044;
var map__29045__$1 = cljs.core.__destructure_map(map__29045);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.inc);
}));

(portal.runtime.next_id.cljs$lang$maxFixedArity = 1);

portal.runtime.get_session = (function portal$runtime$get_session(session_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.runtime.sessions),session_id),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id),new cljs.core.Keyword(null,"options","options",99638489),(function (p1__29046_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(portal.runtime.default_options),p1__29046_SHARP_], 0));
}));
});
portal.runtime.open_session = (function portal$runtime$open_session(p__29048){
var map__29049 = p__29048;
var map__29049__$1 = cljs.core.__destructure_map(map__29049);
var session = map__29049__$1;
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29049__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portal.runtime.get_session(session_id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"value-cache","value-cache",-844944621),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null),session], 0));
});
portal.runtime.close_session = (function portal$runtime$close_session(session_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.sessions,cljs.core.dissoc,session_id);
});
portal.runtime.reset_session = (function portal$runtime$reset_session(p__29050){
var map__29051 = p__29050;
var map__29051__$1 = cljs.core.__destructure_map(map__29051);
var session = map__29051__$1;
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29051__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29051__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29051__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
cljs.core.reset_BANG_(value_cache,cljs.core.PersistentArrayMap.EMPTY);

var seq__29052_29218 = cljs.core.seq(cljs.core.deref(watch_registry));
var chunk__29053_29219 = null;
var count__29054_29220 = (0);
var i__29055_29221 = (0);
while(true){
if((i__29055_29221 < count__29054_29220)){
var a_29222 = chunk__29053_29219.cljs$core$IIndexed$_nth$arity$2(null,i__29055_29221);
cljs.core.remove_watch(a_29222,session_id);


var G__29223 = seq__29052_29218;
var G__29224 = chunk__29053_29219;
var G__29225 = count__29054_29220;
var G__29226 = (i__29055_29221 + (1));
seq__29052_29218 = G__29223;
chunk__29053_29219 = G__29224;
count__29054_29220 = G__29225;
i__29055_29221 = G__29226;
continue;
} else {
var temp__5825__auto___29227 = cljs.core.seq(seq__29052_29218);
if(temp__5825__auto___29227){
var seq__29052_29228__$1 = temp__5825__auto___29227;
if(cljs.core.chunked_seq_QMARK_(seq__29052_29228__$1)){
var c__5548__auto___29231 = cljs.core.chunk_first(seq__29052_29228__$1);
var G__29232 = cljs.core.chunk_rest(seq__29052_29228__$1);
var G__29233 = c__5548__auto___29231;
var G__29234 = cljs.core.count(c__5548__auto___29231);
var G__29235 = (0);
seq__29052_29218 = G__29232;
chunk__29053_29219 = G__29233;
count__29054_29220 = G__29234;
i__29055_29221 = G__29235;
continue;
} else {
var a_29238 = cljs.core.first(seq__29052_29228__$1);
cljs.core.remove_watch(a_29238,session_id);


var G__29239 = cljs.core.next(seq__29052_29228__$1);
var G__29240 = null;
var G__29241 = (0);
var G__29242 = (0);
seq__29052_29218 = G__29239;
chunk__29053_29219 = G__29240;
count__29054_29220 = G__29241;
i__29055_29221 = G__29242;
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
}catch (e29058){var _ = e29058;
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
}),(((1) + ((cljs.core.sorted_QMARK_(x))?(1):(0))) + (function (){var G__29060 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__29060) : portal.runtime.hash_PLUS_.call(null,G__29060));
})()),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,v){
return (out + (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.hash_PLUS_.call(null,v)));
}),(((cljs.core.list_QMARK_(x))?(3):((cljs.core.set_QMARK_(x))?((cljs.core.sorted_QMARK_(x))?(4):(5)):((cljs.core.vector_QMARK_(x))?(6):(7)
))) + (function (){var G__29062 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__29062) : portal.runtime.hash_PLUS_.call(null,G__29062));
})()),x);
} else {
var G__29063 = (cljs.core.hash(x) + cljs.core.hash(cljs.core.type(x)));
if(portal.runtime.can_meta_QMARK_(x)){
return (G__29063 + (function (){var G__29064 = cljs.core.meta(x);
return (portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.hash_PLUS_.cljs$core$IFn$_invoke$arity$1(G__29064) : portal.runtime.hash_PLUS_.call(null,G__29064));
})());
} else {
return G__29063;
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
var G__29108 = session_id;
var G__29109 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("portal.rpc","invalidate","portal.rpc/invalidate",718224599),new cljs.core.Keyword(null,"atom","atom",-397043653),a], null);
return (request.cljs$core$IFn$_invoke$arity$2 ? request.cljs$core$IFn$_invoke$arity$2(G__29108,G__29109) : request.call(null,G__29108,G__29109));
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
var map__29114 = portal.runtime._STAR_session_STAR_;
var map__29114__$1 = cljs.core.__destructure_map(map__29114);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
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
var map__29117 = portal.runtime._STAR_session_STAR_;
var map__29117__$1 = cljs.core.__destructure_map(map__29117);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29117__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29117__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
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

var G__29120 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),value);
if(cljs.core.truth_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29120,k,id);
} else {
return G__29120;
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
}catch (e29124){var _ = e29124;
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

return portal.runtime.cson.tag(buffer,"object",(function (){var G__29125 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"id","id",-1388402092),portal.runtime.value__GT_id(value),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(value)], 0)),new cljs.core.Keyword(null,"pr-str","pr-str",587523624),portal.runtime.pr_str_SINGLEQUOTE_(value),new cljs.core.Keyword(null,"protocols","protocols",-5615896),(function (){var G__29126 = cljs.core.PersistentHashSet.EMPTY;
if(portal.runtime.deref_QMARK_(value)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29126,new cljs.core.Keyword(null,"IDeref","IDeref",97891670));
} else {
return G__29126;
}
})()], null);
var G__29125__$1 = (cljs.core.truth_(m)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29125,new cljs.core.Keyword(null,"meta","meta",1499536964),m):G__29125);
if(cljs.core.truth_(rep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29125__$1,new cljs.core.Keyword(null,"rep","rep",-1226820564),rep);
} else {
return G__29125__$1;
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
}catch (e29127){var _e = e29127;
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
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(value,cljs.core.merge,(function (){var G__29128 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","id","portal.runtime/id",1768418782),portal.runtime.value__GT_id(value)], null);
if(cljs.core.record_QMARK_(value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29128,new cljs.core.Keyword("portal.runtime","type","portal.runtime/type",36635890),cljs.core.type(value));
} else {
return G__29128;
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
var _STAR_session_STAR__orig_val__29129 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__29130 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__29130);

try{return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2(value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([session,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(portal.runtime.id_var,portal.runtime.id_coll),new cljs.core.Keyword(null,"to-object","to-object",37050231),portal.runtime.to_object], null)], 0)));
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__29129);
}});
portal.runtime.read = (function portal$runtime$read(string,session){
var _STAR_session_STAR__orig_val__29131 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__29132 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__29132);

try{return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2(string,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([session,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),(function (op,value){
var G__29133 = op;
switch (G__29133) {
case "ref":
return portal.runtime.id__GT_value(value);

break;
default:
return portal.runtime.cson.tagged_value(op,value);

}
})], null)], 0)));
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__29131);
}});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.tap_list !== 'undefined')){
} else {
portal.runtime.tap_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044)], null)));
}
portal.runtime.realize_value_BANG_ = (function portal$runtime$realize_value_BANG_(x){
if(cljs.core.map_QMARK_(x)){
var seq__29134 = cljs.core.seq(x);
var chunk__29135 = null;
var count__29136 = (0);
var i__29137 = (0);
while(true){
if((i__29137 < count__29136)){
var vec__29144 = chunk__29135.cljs$core$IIndexed$_nth$arity$2(null,i__29137);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(1),null);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(k) : portal.runtime.realize_value_BANG_.call(null,k));

(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__29257 = seq__29134;
var G__29258 = chunk__29135;
var G__29259 = count__29136;
var G__29260 = (i__29137 + (1));
seq__29134 = G__29257;
chunk__29135 = G__29258;
count__29136 = G__29259;
i__29137 = G__29260;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29134);
if(temp__5825__auto__){
var seq__29134__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29134__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29134__$1);
var G__29261 = cljs.core.chunk_rest(seq__29134__$1);
var G__29262 = c__5548__auto__;
var G__29263 = cljs.core.count(c__5548__auto__);
var G__29264 = (0);
seq__29134 = G__29261;
chunk__29135 = G__29262;
count__29136 = G__29263;
i__29137 = G__29264;
continue;
} else {
var vec__29147 = cljs.core.first(seq__29134__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(1),null);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(k) : portal.runtime.realize_value_BANG_.call(null,k));

(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__29265 = cljs.core.next(seq__29134__$1);
var G__29266 = null;
var G__29267 = (0);
var G__29268 = (0);
seq__29134 = G__29265;
chunk__29135 = G__29266;
count__29136 = G__29267;
i__29137 = G__29268;
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
var seq__29150 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((100000),x));
var chunk__29151 = null;
var count__29152 = (0);
var i__29153 = (0);
while(true){
if((i__29153 < count__29152)){
var v = chunk__29151.cljs$core$IIndexed$_nth$arity$2(null,i__29153);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__29269 = seq__29150;
var G__29270 = chunk__29151;
var G__29271 = count__29152;
var G__29272 = (i__29153 + (1));
seq__29150 = G__29269;
chunk__29151 = G__29270;
count__29152 = G__29271;
i__29153 = G__29272;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29150);
if(temp__5825__auto__){
var seq__29150__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29150__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29150__$1);
var G__29273 = cljs.core.chunk_rest(seq__29150__$1);
var G__29274 = c__5548__auto__;
var G__29275 = cljs.core.count(c__5548__auto__);
var G__29276 = (0);
seq__29150 = G__29273;
chunk__29151 = G__29274;
count__29152 = G__29275;
i__29153 = G__29276;
continue;
} else {
var v = cljs.core.first(seq__29150__$1);
(portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.realize_value_BANG_.cljs$core$IFn$_invoke$arity$1(v) : portal.runtime.realize_value_BANG_.call(null,v));


var G__29277 = cljs.core.next(seq__29150__$1);
var G__29278 = null;
var G__29279 = (0);
var G__29280 = (0);
seq__29150 = G__29277;
chunk__29151 = G__29278;
count__29152 = G__29279;
i__29153 = G__29280;
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
}catch (e29154){var e = e29154;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.tap_list,cljs.core.conj,portal.runtime.error__GT_data(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to receive value.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value-type","value-type",576005757),cljs.core.type(new_value)], null),e)));
}});
portal.runtime.runtime_keymap = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true], null)));
portal.runtime.get_options = (function portal$runtime$get_options(){
var map__29155 = portal.runtime._STAR_session_STAR_;
var map__29155__$1 = cljs.core.__destructure_map(map__29155);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29155__$1,new cljs.core.Keyword(null,"options","options",99638489));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29155__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(options)))?"portal-dev":"portal"),new cljs.core.Keyword(null,"version","version",425292698),"0.62.0",new cljs.core.Keyword(null,"runtime","runtime",-1331573996),portal.runtime.runtime(),new cljs.core.Keyword(null,"platform","platform",-1086422114),(((typeof window !== 'undefined'))?"web":(((typeof process !== 'undefined'))?"node":(((typeof PLANCK_VERSION !== 'undefined'))?"planck":"web"
))),new cljs.core.Keyword(null,"value","value",305978217),portal.runtime.tap_list,new cljs.core.Keyword(null,"keymap","keymap",-499605268),portal.runtime.runtime_keymap,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936),watch_registry], null),options], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","no-cache","portal.runtime/no-cache",-631302980),true], null));
});
portal.runtime.clear_values = (function portal$runtime$clear_values(var_args){
var G__29157 = arguments.length;
switch (G__29157) {
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
var temp__5825__auto___29283 = portal.runtime._STAR_session_STAR_;
if(cljs.core.truth_(temp__5825__auto___29283)){
var map__29158_29284 = temp__5825__auto___29283;
var map__29158_29285__$1 = cljs.core.__destructure_map(map__29158_29284);
var session_id_29286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29158_29285__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache_29287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29158_29285__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry_29288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29158_29285__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
var value_29289 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(portal.runtime.get_options());
if(portal.runtime.atom_QMARK_(value_29289)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(value_29289,cljs.core.empty);
} else {
}

cljs.core.reset_BANG_(value_cache_29287,cljs.core.PersistentArrayMap.EMPTY);

var seq__29159_29290 = cljs.core.seq(cljs.core.deref(watch_registry_29288));
var chunk__29160_29291 = null;
var count__29161_29292 = (0);
var i__29162_29293 = (0);
while(true){
if((i__29162_29293 < count__29161_29292)){
var a_29294 = chunk__29160_29291.cljs$core$IIndexed$_nth$arity$2(null,i__29162_29293);
cljs.core.remove_watch(a_29294,session_id_29286);


var G__29295 = seq__29159_29290;
var G__29296 = chunk__29160_29291;
var G__29297 = count__29161_29292;
var G__29298 = (i__29162_29293 + (1));
seq__29159_29290 = G__29295;
chunk__29160_29291 = G__29296;
count__29161_29292 = G__29297;
i__29162_29293 = G__29298;
continue;
} else {
var temp__5825__auto___29299__$1 = cljs.core.seq(seq__29159_29290);
if(temp__5825__auto___29299__$1){
var seq__29159_29300__$1 = temp__5825__auto___29299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29159_29300__$1)){
var c__5548__auto___29301 = cljs.core.chunk_first(seq__29159_29300__$1);
var G__29302 = cljs.core.chunk_rest(seq__29159_29300__$1);
var G__29303 = c__5548__auto___29301;
var G__29304 = cljs.core.count(c__5548__auto___29301);
var G__29305 = (0);
seq__29159_29290 = G__29302;
chunk__29160_29291 = G__29303;
count__29161_29292 = G__29304;
i__29162_29293 = G__29305;
continue;
} else {
var a_29306 = cljs.core.first(seq__29159_29300__$1);
cljs.core.remove_watch(a_29306,session_id_29286);


var G__29307 = cljs.core.next(seq__29159_29300__$1);
var G__29308 = null;
var G__29309 = (0);
var G__29310 = (0);
seq__29159_29290 = G__29307;
chunk__29160_29291 = G__29308;
count__29161_29292 = G__29309;
i__29162_29293 = G__29310;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(watch_registry_29288,cljs.core.PersistentHashSet.EMPTY);
} else {
}

portal.runtime.cleanup_sessions();

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(null) : done.call(null,null));
}));

(portal.runtime.clear_values.cljs$lang$maxFixedArity = 2);

portal.runtime.cache_evict = (function portal$runtime$cache_evict(id){
var value = portal.runtime.id__GT_value(id);
var map__29163 = portal.runtime._STAR_session_STAR_;
var map__29163__$1 = cljs.core.__destructure_map(map__29163);
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29163__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var value_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29163__$1,new cljs.core.Keyword(null,"value-cache","value-cache",-844944621));
var watch_registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29163__$1,new cljs.core.Keyword(null,"watch-registry","watch-registry",1089587936));
if(portal.runtime.atom_QMARK_(value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(watch_registry,cljs.core.disj,value);

cljs.core.remove_watch(value,session_id);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value_cache,cljs.core.dissoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),portal.runtime.value__GT_key(value));

return null;
});
portal.runtime.update_selected = (function portal$runtime$update_selected(var_args){
var G__29165 = arguments.length;
switch (G__29165) {
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
try{var G__29167 = out;
if(cljs.core.truth_((predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29167,name,result);
} else {
return G__29167;
}
}catch (e29166){var _ex = e29166;
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
portal.runtime.invoke = (function portal$runtime$invoke(p__29168,done){
var map__29169 = p__29168;
var map__29169__$1 = cljs.core.__destructure_map(map__29169);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var session = portal.runtime._STAR_session_STAR_;
var f__$1 = (((f instanceof cljs.core.Symbol))?portal.runtime.get_function(f):f);
return Promise.resolve(null).then((function (){
return Promise.resolve(Promise.resolve((function (){var _STAR_session_STAR__orig_val__29170 = portal.runtime._STAR_session_STAR_;
var _STAR_session_STAR__temp_val__29171 = session;
(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__temp_val__29171);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
}finally {(portal.runtime._STAR_session_STAR_ = _STAR_session_STAR__orig_val__29170);
}})()).then((function (return$){
return Promise.resolve(null).then((function (){
return Promise.resolve((function (){var G__29172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(portal.runtime.source_info(f__$1),new cljs.core.Keyword(null,"return","return",-1891502105),return$);
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__29172) : done.call(null,G__29172));
})());
}));
})));
})).catch((function (e){
return Promise.resolve(null).then((function (){
return Promise.resolve((function (){var G__29173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(portal.runtime.source_info(f__$1),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.datafy.datafy(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_message(e),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("portal.runtime","function","portal.runtime/function",-993796991),f__$1,new cljs.core.Keyword("portal.runtime","args","portal.runtime/args",-1707404986),args,new cljs.core.Keyword("portal.runtime","found?","portal.runtime/found?",2080719246),(!((f__$1 == null))),new cljs.core.Keyword("portal.runtime","data","portal.runtime/data",907180777),cljs.core.ex_data(e)], null))),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),portal.runtime.runtime()));
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__29173) : done.call(null,G__29173));
})());
}));
}));
});
portal.runtime.ops = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.rpc","invoke","portal.rpc/invoke",1414499084),new cljs.core.Var(function(){return portal.runtime.invoke;},new cljs.core.Symbol("portal.runtime","invoke","portal.runtime/invoke",-498714524,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"invoke","invoke",-1508508610,null),"portal/runtime.cljc",13,1,491,491,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)], null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.invoke)?portal.runtime.invoke.cljs$lang$test:null)]))], null);
portal.runtime.aliases = new cljs.core.PersistentArrayMap(null, 1, ["cljs.core","clojure.core"], null);
portal.runtime.var__GT_name = (function portal$runtime$var__GT_name(var$){
var map__29176 = cljs.core.meta(var$);
var map__29176__$1 = cljs.core.__destructure_map(map__29176);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((portal.runtime.aliases.cljs$core$IFn$_invoke$arity$2 ? portal.runtime.aliases.cljs$core$IFn$_invoke$arity$2(ns__$1,ns__$1) : portal.runtime.aliases.call(null,ns__$1,ns__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
portal.runtime.register_BANG_ = (function portal$runtime$register_BANG_(var_args){
var G__29178 = arguments.length;
switch (G__29178) {
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
var seq__29179_29315 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(opts)));
var chunk__29180_29316 = null;
var count__29181_29317 = (0);
var i__29182_29318 = (0);
while(true){
if((i__29182_29318 < count__29181_29317)){
var shortcut_29319 = chunk__29180_29316.cljs$core$IIndexed$_nth$arity$2(null,i__29182_29318);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.runtime_keymap,cljs.core.assoc,shortcut_29319,name);


var G__29320 = seq__29179_29315;
var G__29321 = chunk__29180_29316;
var G__29322 = count__29181_29317;
var G__29323 = (i__29182_29318 + (1));
seq__29179_29315 = G__29320;
chunk__29180_29316 = G__29321;
count__29181_29317 = G__29322;
i__29182_29318 = G__29323;
continue;
} else {
var temp__5825__auto___29324 = cljs.core.seq(seq__29179_29315);
if(temp__5825__auto___29324){
var seq__29179_29325__$1 = temp__5825__auto___29324;
if(cljs.core.chunked_seq_QMARK_(seq__29179_29325__$1)){
var c__5548__auto___29326 = cljs.core.chunk_first(seq__29179_29325__$1);
var G__29327 = cljs.core.chunk_rest(seq__29179_29325__$1);
var G__29328 = c__5548__auto___29326;
var G__29329 = cljs.core.count(c__5548__auto___29326);
var G__29330 = (0);
seq__29179_29315 = G__29327;
chunk__29180_29316 = G__29328;
count__29181_29317 = G__29329;
i__29182_29318 = G__29330;
continue;
} else {
var shortcut_29331 = cljs.core.first(seq__29179_29325__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.runtime_keymap,cljs.core.assoc,shortcut_29331,name);


var G__29332 = cljs.core.next(seq__29179_29325__$1);
var G__29333 = null;
var G__29334 = (0);
var G__29335 = (0);
seq__29179_29315 = G__29332;
chunk__29180_29316 = G__29333;
count__29181_29317 = G__29334;
i__29182_29318 = G__29335;
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

var seq__29187_29336 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return portal.runtime.ping;},new cljs.core.Symbol("portal.runtime","ping","portal.runtime/ping",-1301457895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"ping","ping",-29583257,null),"portal/runtime.cljc",12,1,482,482,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.ping)?portal.runtime.ping.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.cache_evict;},new cljs.core.Symbol("portal.runtime","cache-evict","portal.runtime/cache-evict",-228220051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"cache-evict","cache-evict",1043785499,null),"portal/runtime.cljc",19,1,443,443,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)),null,(cljs.core.truth_(portal.runtime.cache_evict)?portal.runtime.cache_evict.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.get_options;},new cljs.core.Symbol("portal.runtime","get-options","portal.runtime/get-options",-355075714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"get-options","get-options",652557604,null),"portal/runtime.cljc",19,1,402,402,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.get_options)?portal.runtime.get_options.cljs$lang$test:null)])),new cljs.core.Var(function(){return portal.runtime.get_functions;},new cljs.core.Symbol("portal.runtime","get-functions","portal.runtime/get-functions",-62603721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"get-functions","get-functions",940964841,null),"portal/runtime.cljc",21,1,461,461,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(portal.runtime.get_functions)?portal.runtime.get_functions.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.type;},new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"cljs/core.cljs",11,1,317,317,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return x's constructor.",(cljs.core.truth_(cljs.core.type)?cljs.core.type.cljs$lang$test:null)]))], null));
var chunk__29188_29337 = null;
var count__29189_29338 = (0);
var i__29190_29339 = (0);
while(true){
if((i__29190_29339 < count__29189_29338)){
var var_29341 = chunk__29188_29337.cljs$core$IIndexed$_nth$arity$2(null,i__29190_29339);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1(var_29341);


var G__29342 = seq__29187_29336;
var G__29343 = chunk__29188_29337;
var G__29344 = count__29189_29338;
var G__29345 = (i__29190_29339 + (1));
seq__29187_29336 = G__29342;
chunk__29188_29337 = G__29343;
count__29189_29338 = G__29344;
i__29190_29339 = G__29345;
continue;
} else {
var temp__5825__auto___29346 = cljs.core.seq(seq__29187_29336);
if(temp__5825__auto___29346){
var seq__29187_29347__$1 = temp__5825__auto___29346;
if(cljs.core.chunked_seq_QMARK_(seq__29187_29347__$1)){
var c__5548__auto___29348 = cljs.core.chunk_first(seq__29187_29347__$1);
var G__29349 = cljs.core.chunk_rest(seq__29187_29347__$1);
var G__29350 = c__5548__auto___29348;
var G__29351 = cljs.core.count(c__5548__auto___29348);
var G__29352 = (0);
seq__29187_29336 = G__29349;
chunk__29188_29337 = G__29350;
count__29189_29338 = G__29351;
i__29190_29339 = G__29352;
continue;
} else {
var var_29353 = cljs.core.first(seq__29187_29347__$1);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1(var_29353);


var G__29354 = cljs.core.next(seq__29187_29347__$1);
var G__29355 = null;
var G__29356 = (0);
var G__29357 = (0);
seq__29187_29336 = G__29354;
chunk__29188_29337 = G__29355;
count__29189_29338 = G__29356;
i__29190_29339 = G__29357;
continue;
}
} else {
}
}
break;
}
var seq__29193_29358 = cljs.core.seq(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Var(function(){return cljs.core.pr_str;},new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"cljs/core.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"objs","objs",-170194107,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10644,10644,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),"pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.",(cljs.core.truth_(cljs.core.pr_str)?cljs.core.pr_str.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null)], null),new cljs.core.Var(function(){return cljs.core.deref;},new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),"cljs/core.cljs",12,1,1499,1499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null)),"Also reader macro: @var/@atom/@delay. Returns the\n   most-recently-committed value of ref. When applied to a var\n   or atom, returns its current state. When applied to a delay, forces\n   it if not already forced. See also - realized?.",(cljs.core.truth_(cljs.core.deref)?cljs.core.deref.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.deref_QMARK_], null),new cljs.core.Var(function(){return cljs.core.meta;},new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),"cljs/core.cljs",11,1,2136,2136,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null)),"Returns the metadata of obj, returns nil if there is no metadata.",(cljs.core.truth_(cljs.core.meta)?cljs.core.meta.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.can_meta_QMARK_], null),new cljs.core.Var(function(){return portal.runtime.update_selected;},new cljs.core.Symbol("portal.runtime","update-selected","portal.runtime/update-selected",713792101,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"update-selected","update-selected",-161784109,null),"portal/runtime.cljc",22,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,452,452,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(portal.runtime.update_selected)?portal.runtime.update_selected.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null),new cljs.core.Var(function(){return portal.runtime.clear_values;},new cljs.core.Symbol("portal.runtime","clear-values","portal.runtime/clear-values",1961286450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"clear-values","clear-values",-1328446232,null),"portal/runtime.cljc",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,429,429,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.clear_values)?portal.runtime.clear_values.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null),new cljs.core.Var(function(){return clojure.datafy.nav;},new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),"clojure/datafy.cljs",10,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Returns (possibly transformed) v in the context of coll and k (a\n  key/index or nil). Callers should attempt to provide the key/index\n  context k for Indexed/Associative/ILookup colls if possible, but not\n  to fabricate one e.g. for sequences (pass nil). nav will return the\n  value of clojure.core.protocols/nav.",(cljs.core.truth_(clojure.datafy.nav)?clojure.datafy.nav.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["enter",null], null), null)], null)], null),new cljs.core.Var(function(){return clojure.datafy.datafy;},new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"datafy","datafy",-1790598647,null),"clojure/datafy.cljs",13,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Attempts to return x as data.\n  datafy will return the value of clojure.protocols/datafy. If\n  the value has been transformed and the result supports\n  metadata, :clojure.datafy/obj will be set on the metadata to the\n  original value of x.",(cljs.core.truth_(clojure.datafy.datafy)?clojure.datafy.datafy.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["shift",null,"enter",null], null), null)], null)], null),new cljs.core.Var(function(){return portal.runtime.toggle_watch;},new cljs.core.Symbol("portal.runtime","toggle-watch","portal.runtime/toggle-watch",1647096761,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"toggle-watch","toggle-watch",509308931,null),"portal/runtime.cljc",20,true,1,191,191,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),"Toggle watching an atom for a given Portal session.",(cljs.core.truth_(portal.runtime.toggle_watch)?portal.runtime.toggle_watch.cljs$lang$test:null)])),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),false,new cljs.core.Keyword(null,"predicate","predicate",-1742501860),portal.runtime.atom_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("portal.api","toggle-watch","portal.api/toggle-watch",778447483,null)], null)]));
var chunk__29194_29359 = null;
var count__29195_29360 = (0);
var i__29196_29361 = (0);
while(true){
if((i__29196_29361 < count__29195_29360)){
var vec__29208_29363 = chunk__29194_29359.cljs$core$IIndexed$_nth$arity$2(null,i__29196_29361);
var var_29364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208_29363,(0),null);
var opts_29365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208_29363,(1),null);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2(var_29364,opts_29365);


var G__29366 = seq__29193_29358;
var G__29367 = chunk__29194_29359;
var G__29368 = count__29195_29360;
var G__29369 = (i__29196_29361 + (1));
seq__29193_29358 = G__29366;
chunk__29194_29359 = G__29367;
count__29195_29360 = G__29368;
i__29196_29361 = G__29369;
continue;
} else {
var temp__5825__auto___29370 = cljs.core.seq(seq__29193_29358);
if(temp__5825__auto___29370){
var seq__29193_29371__$1 = temp__5825__auto___29370;
if(cljs.core.chunked_seq_QMARK_(seq__29193_29371__$1)){
var c__5548__auto___29372 = cljs.core.chunk_first(seq__29193_29371__$1);
var G__29373 = cljs.core.chunk_rest(seq__29193_29371__$1);
var G__29374 = c__5548__auto___29372;
var G__29375 = cljs.core.count(c__5548__auto___29372);
var G__29376 = (0);
seq__29193_29358 = G__29373;
chunk__29194_29359 = G__29374;
count__29195_29360 = G__29375;
i__29196_29361 = G__29376;
continue;
} else {
var vec__29211_29377 = cljs.core.first(seq__29193_29371__$1);
var var_29378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211_29377,(0),null);
var opts_29379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211_29377,(1),null);
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$2(var_29378,opts_29379);


var G__29380 = cljs.core.next(seq__29193_29371__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__29193_29358 = G__29380;
chunk__29194_29359 = G__29381;
count__29195_29360 = G__29382;
i__29196_29361 = G__29383;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=portal.runtime.js.map
