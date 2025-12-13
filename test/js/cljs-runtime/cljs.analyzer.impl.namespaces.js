goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__60416 = libspec;
var seq__60417 = cljs.core.seq(vec__60416);
var first__60418 = cljs.core.first(seq__60417);
var seq__60417__$1 = cljs.core.next(seq__60417);
var lib = first__60418;
var spec = seq__60417__$1;
var libspec__$1 = vec__60416;
var vec__60419 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60419,(0),null);
var vec__60422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60419,(1),null);
var seq__60423 = cljs.core.seq(vec__60422);
var first__60424 = cljs.core.first(seq__60423);
var seq__60423__$1 = cljs.core.next(seq__60423);
var _ = first__60424;
var first__60424__$1 = cljs.core.first(seq__60423__$1);
var seq__60423__$2 = cljs.core.next(seq__60423__$1);
var alias = first__60424__$1;
var post_spec = seq__60423__$2;
var post = vec__60422;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__60425 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60425,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__60425;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__60426 = cljs.core.seq(new_as_aliases);
var chunk__60427 = null;
var count__60428 = (0);
var i__60429 = (0);
while(true){
if((i__60429 < count__60428)){
var vec__60436 = chunk__60427.cljs$core$IIndexed$_nth$arity$2(null,i__60429);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60436,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60436,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60465 = seq__60426;
var G__60466 = chunk__60427;
var G__60467 = count__60428;
var G__60468 = (i__60429 + (1));
seq__60426 = G__60465;
chunk__60427 = G__60466;
count__60428 = G__60467;
i__60429 = G__60468;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60426);
if(temp__5825__auto__){
var seq__60426__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60426__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__60426__$1);
var G__60469 = cljs.core.chunk_rest(seq__60426__$1);
var G__60470 = c__5548__auto__;
var G__60471 = cljs.core.count(c__5548__auto__);
var G__60472 = (0);
seq__60426 = G__60469;
chunk__60427 = G__60470;
count__60428 = G__60471;
i__60429 = G__60472;
continue;
} else {
var vec__60439 = cljs.core.first(seq__60426__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60439,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60439,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60473 = cljs.core.next(seq__60426__$1);
var G__60474 = null;
var G__60475 = (0);
var G__60476 = (0);
seq__60426 = G__60473;
chunk__60427 = G__60474;
count__60428 = G__60475;
i__60429 = G__60476;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__60443 = arguments.length;
switch (G__60443) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__60446 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__60446__$1 = cljs.core.__destructure_map(map__60446);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__60450 = ret__$1;
var G__60450__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60450,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__60450);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60450__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__60450__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60454,p__60455){
var map__60456 = p__60454;
var map__60456__$1 = cljs.core.__destructure_map(map__60456);
var ret__$1 = map__60456__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__60457 = p__60455;
var seq__60458 = cljs.core.seq(vec__60457);
var first__60459 = cljs.core.first(seq__60458);
var seq__60458__$1 = cljs.core.next(seq__60458);
var spec_key = first__60459;
var libspecs = seq__60458__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__60460 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__60460__$1 = cljs.core.__destructure_map(map__60460);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__60461 = ret__$1;
var G__60461__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60461,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__60461);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60461__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__60461__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
