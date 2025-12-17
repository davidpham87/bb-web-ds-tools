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
var vec__61013 = libspec;
var seq__61014 = cljs.core.seq(vec__61013);
var first__61015 = cljs.core.first(seq__61014);
var seq__61014__$1 = cljs.core.next(seq__61014);
var lib = first__61015;
var spec = seq__61014__$1;
var libspec__$1 = vec__61013;
var vec__61016 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61016,(0),null);
var vec__61019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61016,(1),null);
var seq__61020 = cljs.core.seq(vec__61019);
var first__61021 = cljs.core.first(seq__61020);
var seq__61020__$1 = cljs.core.next(seq__61020);
var _ = first__61021;
var first__61021__$1 = cljs.core.first(seq__61020__$1);
var seq__61020__$2 = cljs.core.next(seq__61020__$1);
var alias = first__61021__$1;
var post_spec = seq__61020__$2;
var post = vec__61019;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__61024 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61024,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__61024;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__61025 = cljs.core.seq(new_as_aliases);
var chunk__61026 = null;
var count__61027 = (0);
var i__61028 = (0);
while(true){
if((i__61028 < count__61027)){
var vec__61041 = chunk__61026.cljs$core$IIndexed$_nth$arity$2(null,i__61028);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61041,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61041,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__61062 = seq__61025;
var G__61063 = chunk__61026;
var G__61064 = count__61027;
var G__61065 = (i__61028 + (1));
seq__61025 = G__61062;
chunk__61026 = G__61063;
count__61027 = G__61064;
i__61028 = G__61065;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61025);
if(temp__5825__auto__){
var seq__61025__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61025__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61025__$1);
var G__61066 = cljs.core.chunk_rest(seq__61025__$1);
var G__61067 = c__5548__auto__;
var G__61068 = cljs.core.count(c__5548__auto__);
var G__61069 = (0);
seq__61025 = G__61066;
chunk__61026 = G__61067;
count__61027 = G__61068;
i__61028 = G__61069;
continue;
} else {
var vec__61046 = cljs.core.first(seq__61025__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__61070 = cljs.core.next(seq__61025__$1);
var G__61071 = null;
var G__61072 = (0);
var G__61073 = (0);
seq__61025 = G__61070;
chunk__61026 = G__61071;
count__61027 = G__61072;
i__61028 = G__61073;
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
var G__61051 = arguments.length;
switch (G__61051) {
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
var map__61052 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__61052__$1 = cljs.core.__destructure_map(map__61052);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__61053 = ret__$1;
var G__61053__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61053,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__61053);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61053__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__61053__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__61054,p__61055){
var map__61056 = p__61054;
var map__61056__$1 = cljs.core.__destructure_map(map__61056);
var ret__$1 = map__61056__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61056__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__61057 = p__61055;
var seq__61058 = cljs.core.seq(vec__61057);
var first__61059 = cljs.core.first(seq__61058);
var seq__61058__$1 = cljs.core.next(seq__61058);
var spec_key = first__61059;
var libspecs = seq__61058__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__61060 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__61060__$1 = cljs.core.__destructure_map(map__61060);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61060__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61060__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__61061 = ret__$1;
var G__61061__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61061,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__61061);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61061__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__61061__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
