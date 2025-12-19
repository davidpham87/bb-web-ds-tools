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
var vec__61019 = libspec;
var seq__61020 = cljs.core.seq(vec__61019);
var first__61021 = cljs.core.first(seq__61020);
var seq__61020__$1 = cljs.core.next(seq__61020);
var lib = first__61021;
var spec = seq__61020__$1;
var libspec__$1 = vec__61019;
var vec__61022 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61022,(0),null);
var vec__61025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61022,(1),null);
var seq__61026 = cljs.core.seq(vec__61025);
var first__61027 = cljs.core.first(seq__61026);
var seq__61026__$1 = cljs.core.next(seq__61026);
var _ = first__61027;
var first__61027__$1 = cljs.core.first(seq__61026__$1);
var seq__61026__$2 = cljs.core.next(seq__61026__$1);
var alias = first__61027__$1;
var post_spec = seq__61026__$2;
var post = vec__61025;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__61028 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61028,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__61028;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__61030 = cljs.core.seq(new_as_aliases);
var chunk__61031 = null;
var count__61032 = (0);
var i__61033 = (0);
while(true){
if((i__61033 < count__61032)){
var vec__61046 = chunk__61031.cljs$core$IIndexed$_nth$arity$2(null,i__61033);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__61068 = seq__61030;
var G__61069 = chunk__61031;
var G__61070 = count__61032;
var G__61071 = (i__61033 + (1));
seq__61030 = G__61068;
chunk__61031 = G__61069;
count__61032 = G__61070;
i__61033 = G__61071;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61030);
if(temp__5825__auto__){
var seq__61030__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61030__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61030__$1);
var G__61072 = cljs.core.chunk_rest(seq__61030__$1);
var G__61073 = c__5548__auto__;
var G__61074 = cljs.core.count(c__5548__auto__);
var G__61075 = (0);
seq__61030 = G__61072;
chunk__61031 = G__61073;
count__61032 = G__61074;
i__61033 = G__61075;
continue;
} else {
var vec__61050 = cljs.core.first(seq__61030__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61050,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61050,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__61076 = cljs.core.next(seq__61030__$1);
var G__61077 = null;
var G__61078 = (0);
var G__61079 = (0);
seq__61030 = G__61076;
chunk__61031 = G__61077;
count__61032 = G__61078;
i__61033 = G__61079;
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
var G__61055 = arguments.length;
switch (G__61055) {
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
var map__61057 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__61057__$1 = cljs.core.__destructure_map(map__61057);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__61059 = ret__$1;
var G__61059__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61059,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__61059);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61059__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__61059__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__61060,p__61061){
var map__61062 = p__61060;
var map__61062__$1 = cljs.core.__destructure_map(map__61062);
var ret__$1 = map__61062__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__61063 = p__61061;
var seq__61064 = cljs.core.seq(vec__61063);
var first__61065 = cljs.core.first(seq__61064);
var seq__61064__$1 = cljs.core.next(seq__61064);
var spec_key = first__61065;
var libspecs = seq__61064__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__61066 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__61066__$1 = cljs.core.__destructure_map(map__61066);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61066__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61066__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__61067 = ret__$1;
var G__61067__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61067,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__61067);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61067__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__61067__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
