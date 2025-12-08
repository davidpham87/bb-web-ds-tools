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
var vec__53021 = libspec;
var seq__53022 = cljs.core.seq(vec__53021);
var first__53023 = cljs.core.first(seq__53022);
var seq__53022__$1 = cljs.core.next(seq__53022);
var lib = first__53023;
var spec = seq__53022__$1;
var libspec__$1 = vec__53021;
var vec__53024 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(0),null);
var vec__53027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(1),null);
var seq__53028 = cljs.core.seq(vec__53027);
var first__53029 = cljs.core.first(seq__53028);
var seq__53028__$1 = cljs.core.next(seq__53028);
var _ = first__53029;
var first__53029__$1 = cljs.core.first(seq__53028__$1);
var seq__53028__$2 = cljs.core.next(seq__53028__$1);
var alias = first__53029__$1;
var post_spec = seq__53028__$2;
var post = vec__53027;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__53030 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53030,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__53030;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__53031 = cljs.core.seq(new_as_aliases);
var chunk__53032 = null;
var count__53033 = (0);
var i__53034 = (0);
while(true){
if((i__53034 < count__53033)){
var vec__53049 = chunk__53032.cljs$core$IIndexed$_nth$arity$2(null,i__53034);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53049,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53049,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53070 = seq__53031;
var G__53071 = chunk__53032;
var G__53072 = count__53033;
var G__53073 = (i__53034 + (1));
seq__53031 = G__53070;
chunk__53032 = G__53071;
count__53033 = G__53072;
i__53034 = G__53073;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53031);
if(temp__5825__auto__){
var seq__53031__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53031__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53031__$1);
var G__53074 = cljs.core.chunk_rest(seq__53031__$1);
var G__53075 = c__5548__auto__;
var G__53076 = cljs.core.count(c__5548__auto__);
var G__53077 = (0);
seq__53031 = G__53074;
chunk__53032 = G__53075;
count__53033 = G__53076;
i__53034 = G__53077;
continue;
} else {
var vec__53052 = cljs.core.first(seq__53031__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53052,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53052,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53078 = cljs.core.next(seq__53031__$1);
var G__53079 = null;
var G__53080 = (0);
var G__53081 = (0);
seq__53031 = G__53078;
chunk__53032 = G__53079;
count__53033 = G__53080;
i__53034 = G__53081;
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
var G__53056 = arguments.length;
switch (G__53056) {
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
var map__53060 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__53060__$1 = cljs.core.__destructure_map(map__53060);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53060__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53060__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__53061 = ret__$1;
var G__53061__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53061,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__53061);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53061__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__53061__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__53062,p__53063){
var map__53064 = p__53062;
var map__53064__$1 = cljs.core.__destructure_map(map__53064);
var ret__$1 = map__53064__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53064__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__53065 = p__53063;
var seq__53066 = cljs.core.seq(vec__53065);
var first__53067 = cljs.core.first(seq__53066);
var seq__53066__$1 = cljs.core.next(seq__53066);
var spec_key = first__53067;
var libspecs = seq__53066__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__53068 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__53068__$1 = cljs.core.__destructure_map(map__53068);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__53069 = ret__$1;
var G__53069__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53069,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__53069);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53069__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__53069__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
