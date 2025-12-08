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
var vec__58946 = libspec;
var seq__58947 = cljs.core.seq(vec__58946);
var first__58948 = cljs.core.first(seq__58947);
var seq__58947__$1 = cljs.core.next(seq__58947);
var lib = first__58948;
var spec = seq__58947__$1;
var libspec__$1 = vec__58946;
var vec__58949 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58949,(0),null);
var vec__58952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58949,(1),null);
var seq__58953 = cljs.core.seq(vec__58952);
var first__58954 = cljs.core.first(seq__58953);
var seq__58953__$1 = cljs.core.next(seq__58953);
var _ = first__58954;
var first__58954__$1 = cljs.core.first(seq__58953__$1);
var seq__58953__$2 = cljs.core.next(seq__58953__$1);
var alias = first__58954__$1;
var post_spec = seq__58953__$2;
var post = vec__58952;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__58956 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58956,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__58956;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__58957 = cljs.core.seq(new_as_aliases);
var chunk__58958 = null;
var count__58959 = (0);
var i__58960 = (0);
while(true){
if((i__58960 < count__58959)){
var vec__58968 = chunk__58958.cljs$core$IIndexed$_nth$arity$2(null,i__58960);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58968,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58968,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__58986 = seq__58957;
var G__58987 = chunk__58958;
var G__58988 = count__58959;
var G__58989 = (i__58960 + (1));
seq__58957 = G__58986;
chunk__58958 = G__58987;
count__58959 = G__58988;
i__58960 = G__58989;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58957);
if(temp__5825__auto__){
var seq__58957__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58957__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__58957__$1);
var G__58990 = cljs.core.chunk_rest(seq__58957__$1);
var G__58991 = c__5548__auto__;
var G__58992 = cljs.core.count(c__5548__auto__);
var G__58993 = (0);
seq__58957 = G__58990;
chunk__58958 = G__58991;
count__58959 = G__58992;
i__58960 = G__58993;
continue;
} else {
var vec__58971 = cljs.core.first(seq__58957__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58971,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58971,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__58994 = cljs.core.next(seq__58957__$1);
var G__58995 = null;
var G__58996 = (0);
var G__58997 = (0);
seq__58957 = G__58994;
chunk__58958 = G__58995;
count__58959 = G__58996;
i__58960 = G__58997;
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
var G__58975 = arguments.length;
switch (G__58975) {
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
var map__58976 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__58976__$1 = cljs.core.__destructure_map(map__58976);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__58977 = ret__$1;
var G__58977__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58977,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__58977);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58977__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__58977__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58978,p__58979){
var map__58980 = p__58978;
var map__58980__$1 = cljs.core.__destructure_map(map__58980);
var ret__$1 = map__58980__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__58981 = p__58979;
var seq__58982 = cljs.core.seq(vec__58981);
var first__58983 = cljs.core.first(seq__58982);
var seq__58982__$1 = cljs.core.next(seq__58982);
var spec_key = first__58983;
var libspecs = seq__58982__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__58984 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__58984__$1 = cljs.core.__destructure_map(map__58984);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58984__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58984__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__58985 = ret__$1;
var G__58985__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58985,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__58985);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58985__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__58985__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
