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
var vec__52741 = libspec;
var seq__52742 = cljs.core.seq(vec__52741);
var first__52743 = cljs.core.first(seq__52742);
var seq__52742__$1 = cljs.core.next(seq__52742);
var lib = first__52743;
var spec = seq__52742__$1;
var libspec__$1 = vec__52741;
var vec__52744 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52744,(0),null);
var vec__52747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52744,(1),null);
var seq__52748 = cljs.core.seq(vec__52747);
var first__52749 = cljs.core.first(seq__52748);
var seq__52748__$1 = cljs.core.next(seq__52748);
var _ = first__52749;
var first__52749__$1 = cljs.core.first(seq__52748__$1);
var seq__52748__$2 = cljs.core.next(seq__52748__$1);
var alias = first__52749__$1;
var post_spec = seq__52748__$2;
var post = vec__52747;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52750 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52750,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52750;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52753 = cljs.core.seq(new_as_aliases);
var chunk__52754 = null;
var count__52755 = (0);
var i__52756 = (0);
while(true){
if((i__52756 < count__52755)){
var vec__52770 = chunk__52754.cljs$core$IIndexed$_nth$arity$2(null,i__52756);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52770,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52770,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52795 = seq__52753;
var G__52796 = chunk__52754;
var G__52797 = count__52755;
var G__52798 = (i__52756 + (1));
seq__52753 = G__52795;
chunk__52754 = G__52796;
count__52755 = G__52797;
i__52756 = G__52798;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52753);
if(temp__5825__auto__){
var seq__52753__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52753__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52753__$1);
var G__52800 = cljs.core.chunk_rest(seq__52753__$1);
var G__52801 = c__5548__auto__;
var G__52802 = cljs.core.count(c__5548__auto__);
var G__52803 = (0);
seq__52753 = G__52800;
chunk__52754 = G__52801;
count__52755 = G__52802;
i__52756 = G__52803;
continue;
} else {
var vec__52774 = cljs.core.first(seq__52753__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52774,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52774,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52804 = cljs.core.next(seq__52753__$1);
var G__52805 = null;
var G__52806 = (0);
var G__52807 = (0);
seq__52753 = G__52804;
chunk__52754 = G__52805;
count__52755 = G__52806;
i__52756 = G__52807;
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
var G__52780 = arguments.length;
switch (G__52780) {
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
var map__52783 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52783__$1 = cljs.core.__destructure_map(map__52783);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52784 = ret__$1;
var G__52784__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52784,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52784);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52784__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52784__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52786,p__52787){
var map__52788 = p__52786;
var map__52788__$1 = cljs.core.__destructure_map(map__52788);
var ret__$1 = map__52788__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52788__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52789 = p__52787;
var seq__52790 = cljs.core.seq(vec__52789);
var first__52791 = cljs.core.first(seq__52790);
var seq__52790__$1 = cljs.core.next(seq__52790);
var spec_key = first__52791;
var libspecs = seq__52790__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52792 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52792__$1 = cljs.core.__destructure_map(map__52792);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52792__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52792__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52793 = ret__$1;
var G__52793__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52793,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52793);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52793__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52793__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
