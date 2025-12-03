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
var vec__52692 = libspec;
var seq__52693 = cljs.core.seq(vec__52692);
var first__52694 = cljs.core.first(seq__52693);
var seq__52693__$1 = cljs.core.next(seq__52693);
var lib = first__52694;
var spec = seq__52693__$1;
var libspec__$1 = vec__52692;
var vec__52697 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52697,(0),null);
var vec__52700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52697,(1),null);
var seq__52701 = cljs.core.seq(vec__52700);
var first__52702 = cljs.core.first(seq__52701);
var seq__52701__$1 = cljs.core.next(seq__52701);
var _ = first__52702;
var first__52702__$1 = cljs.core.first(seq__52701__$1);
var seq__52701__$2 = cljs.core.next(seq__52701__$1);
var alias = first__52702__$1;
var post_spec = seq__52701__$2;
var post = vec__52700;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52730 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52730,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52730;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52735 = cljs.core.seq(new_as_aliases);
var chunk__52736 = null;
var count__52737 = (0);
var i__52738 = (0);
while(true){
if((i__52738 < count__52737)){
var vec__52753 = chunk__52736.cljs$core$IIndexed$_nth$arity$2(null,i__52738);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52753,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52753,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52791 = seq__52735;
var G__52792 = chunk__52736;
var G__52793 = count__52737;
var G__52794 = (i__52738 + (1));
seq__52735 = G__52791;
chunk__52736 = G__52792;
count__52737 = G__52793;
i__52738 = G__52794;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52735);
if(temp__5825__auto__){
var seq__52735__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52735__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52735__$1);
var G__52795 = cljs.core.chunk_rest(seq__52735__$1);
var G__52796 = c__5548__auto__;
var G__52797 = cljs.core.count(c__5548__auto__);
var G__52798 = (0);
seq__52735 = G__52795;
chunk__52736 = G__52796;
count__52737 = G__52797;
i__52738 = G__52798;
continue;
} else {
var vec__52756 = cljs.core.first(seq__52735__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52756,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52756,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52800 = cljs.core.next(seq__52735__$1);
var G__52801 = null;
var G__52802 = (0);
var G__52803 = (0);
seq__52735 = G__52800;
chunk__52736 = G__52801;
count__52737 = G__52802;
i__52738 = G__52803;
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
var G__52764 = arguments.length;
switch (G__52764) {
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
var map__52765 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52765__$1 = cljs.core.__destructure_map(map__52765);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52768 = ret__$1;
var G__52768__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52768,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52768);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52768__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52768__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52776,p__52777){
var map__52778 = p__52776;
var map__52778__$1 = cljs.core.__destructure_map(map__52778);
var ret__$1 = map__52778__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52779 = p__52777;
var seq__52780 = cljs.core.seq(vec__52779);
var first__52781 = cljs.core.first(seq__52780);
var seq__52780__$1 = cljs.core.next(seq__52780);
var spec_key = first__52781;
var libspecs = seq__52780__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52783 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52783__$1 = cljs.core.__destructure_map(map__52783);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52784 = ret__$1;
var G__52784__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52784,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52784);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52784__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52784__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
