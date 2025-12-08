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
var vec__53027 = libspec;
var seq__53028 = cljs.core.seq(vec__53027);
var first__53029 = cljs.core.first(seq__53028);
var seq__53028__$1 = cljs.core.next(seq__53028);
var lib = first__53029;
var spec = seq__53028__$1;
var libspec__$1 = vec__53027;
var vec__53030 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53030,(0),null);
var vec__53033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53030,(1),null);
var seq__53034 = cljs.core.seq(vec__53033);
var first__53035 = cljs.core.first(seq__53034);
var seq__53034__$1 = cljs.core.next(seq__53034);
var _ = first__53035;
var first__53035__$1 = cljs.core.first(seq__53034__$1);
var seq__53034__$2 = cljs.core.next(seq__53034__$1);
var alias = first__53035__$1;
var post_spec = seq__53034__$2;
var post = vec__53033;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__53039 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53039,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__53039;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__53043 = cljs.core.seq(new_as_aliases);
var chunk__53044 = null;
var count__53045 = (0);
var i__53046 = (0);
while(true){
if((i__53046 < count__53045)){
var vec__53056 = chunk__53044.cljs$core$IIndexed$_nth$arity$2(null,i__53046);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53079 = seq__53043;
var G__53080 = chunk__53044;
var G__53081 = count__53045;
var G__53082 = (i__53046 + (1));
seq__53043 = G__53079;
chunk__53044 = G__53080;
count__53045 = G__53081;
i__53046 = G__53082;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53043);
if(temp__5825__auto__){
var seq__53043__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53043__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53043__$1);
var G__53083 = cljs.core.chunk_rest(seq__53043__$1);
var G__53084 = c__5548__auto__;
var G__53085 = cljs.core.count(c__5548__auto__);
var G__53086 = (0);
seq__53043 = G__53083;
chunk__53044 = G__53084;
count__53045 = G__53085;
i__53046 = G__53086;
continue;
} else {
var vec__53059 = cljs.core.first(seq__53043__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53087 = cljs.core.next(seq__53043__$1);
var G__53088 = null;
var G__53089 = (0);
var G__53090 = (0);
seq__53043 = G__53087;
chunk__53044 = G__53088;
count__53045 = G__53089;
i__53046 = G__53090;
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
var G__53063 = arguments.length;
switch (G__53063) {
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
var map__53064 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__53064__$1 = cljs.core.__destructure_map(map__53064);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53064__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53064__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__53065 = ret__$1;
var G__53065__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53065,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__53065);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53065__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__53065__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__53066,p__53067){
var map__53069 = p__53066;
var map__53069__$1 = cljs.core.__destructure_map(map__53069);
var ret__$1 = map__53069__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__53071 = p__53067;
var seq__53072 = cljs.core.seq(vec__53071);
var first__53073 = cljs.core.first(seq__53072);
var seq__53072__$1 = cljs.core.next(seq__53072);
var spec_key = first__53073;
var libspecs = seq__53072__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__53076 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__53076__$1 = cljs.core.__destructure_map(map__53076);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53076__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53076__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__53078 = ret__$1;
var G__53078__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53078,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__53078);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53078__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__53078__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
