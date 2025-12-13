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
var vec__60321 = libspec;
var seq__60322 = cljs.core.seq(vec__60321);
var first__60323 = cljs.core.first(seq__60322);
var seq__60322__$1 = cljs.core.next(seq__60322);
var lib = first__60323;
var spec = seq__60322__$1;
var libspec__$1 = vec__60321;
var vec__60324 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60324,(0),null);
var vec__60327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60324,(1),null);
var seq__60328 = cljs.core.seq(vec__60327);
var first__60329 = cljs.core.first(seq__60328);
var seq__60328__$1 = cljs.core.next(seq__60328);
var _ = first__60329;
var first__60329__$1 = cljs.core.first(seq__60328__$1);
var seq__60328__$2 = cljs.core.next(seq__60328__$1);
var alias = first__60329__$1;
var post_spec = seq__60328__$2;
var post = vec__60327;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__60334 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60334,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__60334;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__60337 = cljs.core.seq(new_as_aliases);
var chunk__60338 = null;
var count__60339 = (0);
var i__60340 = (0);
while(true){
if((i__60340 < count__60339)){
var vec__60349 = chunk__60338.cljs$core$IIndexed$_nth$arity$2(null,i__60340);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60349,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60349,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60368 = seq__60337;
var G__60369 = chunk__60338;
var G__60370 = count__60339;
var G__60371 = (i__60340 + (1));
seq__60337 = G__60368;
chunk__60338 = G__60369;
count__60339 = G__60370;
i__60340 = G__60371;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60337);
if(temp__5825__auto__){
var seq__60337__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60337__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__60337__$1);
var G__60372 = cljs.core.chunk_rest(seq__60337__$1);
var G__60373 = c__5548__auto__;
var G__60374 = cljs.core.count(c__5548__auto__);
var G__60375 = (0);
seq__60337 = G__60372;
chunk__60338 = G__60373;
count__60339 = G__60374;
i__60340 = G__60375;
continue;
} else {
var vec__60353 = cljs.core.first(seq__60337__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60353,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60353,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60376 = cljs.core.next(seq__60337__$1);
var G__60377 = null;
var G__60378 = (0);
var G__60379 = (0);
seq__60337 = G__60376;
chunk__60338 = G__60377;
count__60339 = G__60378;
i__60340 = G__60379;
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
var G__60357 = arguments.length;
switch (G__60357) {
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
var map__60358 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__60358__$1 = cljs.core.__destructure_map(map__60358);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__60359 = ret__$1;
var G__60359__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60359,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__60359);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60359__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__60359__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60360,p__60361){
var map__60362 = p__60360;
var map__60362__$1 = cljs.core.__destructure_map(map__60362);
var ret__$1 = map__60362__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__60363 = p__60361;
var seq__60364 = cljs.core.seq(vec__60363);
var first__60365 = cljs.core.first(seq__60364);
var seq__60364__$1 = cljs.core.next(seq__60364);
var spec_key = first__60365;
var libspecs = seq__60364__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__60366 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__60366__$1 = cljs.core.__destructure_map(map__60366);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__60367 = ret__$1;
var G__60367__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60367,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__60367);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60367__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__60367__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
