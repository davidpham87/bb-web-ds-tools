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
var vec__52870 = libspec;
var seq__52871 = cljs.core.seq(vec__52870);
var first__52872 = cljs.core.first(seq__52871);
var seq__52871__$1 = cljs.core.next(seq__52871);
var lib = first__52872;
var spec = seq__52871__$1;
var libspec__$1 = vec__52870;
var vec__52873 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52873,(0),null);
var vec__52876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52873,(1),null);
var seq__52877 = cljs.core.seq(vec__52876);
var first__52878 = cljs.core.first(seq__52877);
var seq__52877__$1 = cljs.core.next(seq__52877);
var _ = first__52878;
var first__52878__$1 = cljs.core.first(seq__52877__$1);
var seq__52877__$2 = cljs.core.next(seq__52877__$1);
var alias = first__52878__$1;
var post_spec = seq__52877__$2;
var post = vec__52876;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52879,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52879;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52884 = cljs.core.seq(new_as_aliases);
var chunk__52885 = null;
var count__52886 = (0);
var i__52887 = (0);
while(true){
if((i__52887 < count__52886)){
var vec__52894 = chunk__52885.cljs$core$IIndexed$_nth$arity$2(null,i__52887);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52894,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52894,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52917 = seq__52884;
var G__52918 = chunk__52885;
var G__52919 = count__52886;
var G__52920 = (i__52887 + (1));
seq__52884 = G__52917;
chunk__52885 = G__52918;
count__52886 = G__52919;
i__52887 = G__52920;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52884);
if(temp__5825__auto__){
var seq__52884__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52884__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52884__$1);
var G__52921 = cljs.core.chunk_rest(seq__52884__$1);
var G__52922 = c__5548__auto__;
var G__52923 = cljs.core.count(c__5548__auto__);
var G__52924 = (0);
seq__52884 = G__52921;
chunk__52885 = G__52922;
count__52886 = G__52923;
i__52887 = G__52924;
continue;
} else {
var vec__52898 = cljs.core.first(seq__52884__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52925 = cljs.core.next(seq__52884__$1);
var G__52926 = null;
var G__52927 = (0);
var G__52928 = (0);
seq__52884 = G__52925;
chunk__52885 = G__52926;
count__52886 = G__52927;
i__52887 = G__52928;
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
var G__52903 = arguments.length;
switch (G__52903) {
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
var map__52905 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52905__$1 = cljs.core.__destructure_map(map__52905);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52905__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52905__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52906 = ret__$1;
var G__52906__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52906,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52906);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52906__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52906__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52908,p__52909){
var map__52910 = p__52908;
var map__52910__$1 = cljs.core.__destructure_map(map__52910);
var ret__$1 = map__52910__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52911 = p__52909;
var seq__52912 = cljs.core.seq(vec__52911);
var first__52913 = cljs.core.first(seq__52912);
var seq__52912__$1 = cljs.core.next(seq__52912);
var spec_key = first__52913;
var libspecs = seq__52912__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52914 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52914__$1 = cljs.core.__destructure_map(map__52914);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52915 = ret__$1;
var G__52915__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52915,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52915);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52915__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52915__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
