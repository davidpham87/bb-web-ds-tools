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
var vec__60407 = libspec;
var seq__60408 = cljs.core.seq(vec__60407);
var first__60409 = cljs.core.first(seq__60408);
var seq__60408__$1 = cljs.core.next(seq__60408);
var lib = first__60409;
var spec = seq__60408__$1;
var libspec__$1 = vec__60407;
var vec__60410 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60410,(0),null);
var vec__60413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60410,(1),null);
var seq__60414 = cljs.core.seq(vec__60413);
var first__60415 = cljs.core.first(seq__60414);
var seq__60414__$1 = cljs.core.next(seq__60414);
var _ = first__60415;
var first__60415__$1 = cljs.core.first(seq__60414__$1);
var seq__60414__$2 = cljs.core.next(seq__60414__$1);
var alias = first__60415__$1;
var post_spec = seq__60414__$2;
var post = vec__60413;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__60426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60426,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__60426;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__60427 = cljs.core.seq(new_as_aliases);
var chunk__60428 = null;
var count__60429 = (0);
var i__60430 = (0);
while(true){
if((i__60430 < count__60429)){
var vec__60440 = chunk__60428.cljs$core$IIndexed$_nth$arity$2(null,i__60430);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60440,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60440,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60465 = seq__60427;
var G__60466 = chunk__60428;
var G__60467 = count__60429;
var G__60468 = (i__60430 + (1));
seq__60427 = G__60465;
chunk__60428 = G__60466;
count__60429 = G__60467;
i__60430 = G__60468;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60427);
if(temp__5825__auto__){
var seq__60427__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60427__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__60427__$1);
var G__60470 = cljs.core.chunk_rest(seq__60427__$1);
var G__60471 = c__5548__auto__;
var G__60472 = cljs.core.count(c__5548__auto__);
var G__60473 = (0);
seq__60427 = G__60470;
chunk__60428 = G__60471;
count__60429 = G__60472;
i__60430 = G__60473;
continue;
} else {
var vec__60445 = cljs.core.first(seq__60427__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60475 = cljs.core.next(seq__60427__$1);
var G__60476 = null;
var G__60477 = (0);
var G__60478 = (0);
seq__60427 = G__60475;
chunk__60428 = G__60476;
count__60429 = G__60477;
i__60430 = G__60478;
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
var G__60449 = arguments.length;
switch (G__60449) {
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
var map__60450 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__60450__$1 = cljs.core.__destructure_map(map__60450);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__60451 = ret__$1;
var G__60451__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60451,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__60451);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60451__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__60451__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60452,p__60453){
var map__60454 = p__60452;
var map__60454__$1 = cljs.core.__destructure_map(map__60454);
var ret__$1 = map__60454__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60454__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__60455 = p__60453;
var seq__60456 = cljs.core.seq(vec__60455);
var first__60457 = cljs.core.first(seq__60456);
var seq__60456__$1 = cljs.core.next(seq__60456);
var spec_key = first__60457;
var libspecs = seq__60456__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__60458 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__60458__$1 = cljs.core.__destructure_map(map__60458);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60458__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60458__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__60459 = ret__$1;
var G__60459__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60459,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__60459);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60459__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__60459__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
