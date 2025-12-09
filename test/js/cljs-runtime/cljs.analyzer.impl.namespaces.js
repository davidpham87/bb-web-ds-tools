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
var vec__59811 = libspec;
var seq__59812 = cljs.core.seq(vec__59811);
var first__59813 = cljs.core.first(seq__59812);
var seq__59812__$1 = cljs.core.next(seq__59812);
var lib = first__59813;
var spec = seq__59812__$1;
var libspec__$1 = vec__59811;
var vec__59814 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59814,(0),null);
var vec__59817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59814,(1),null);
var seq__59818 = cljs.core.seq(vec__59817);
var first__59819 = cljs.core.first(seq__59818);
var seq__59818__$1 = cljs.core.next(seq__59818);
var _ = first__59819;
var first__59819__$1 = cljs.core.first(seq__59818__$1);
var seq__59818__$2 = cljs.core.next(seq__59818__$1);
var alias = first__59819__$1;
var post_spec = seq__59818__$2;
var post = vec__59817;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__59820 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59820,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__59820;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__59821 = cljs.core.seq(new_as_aliases);
var chunk__59822 = null;
var count__59823 = (0);
var i__59824 = (0);
while(true){
if((i__59824 < count__59823)){
var vec__59831 = chunk__59822.cljs$core$IIndexed$_nth$arity$2(null,i__59824);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59831,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59831,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__59860 = seq__59821;
var G__59861 = chunk__59822;
var G__59862 = count__59823;
var G__59863 = (i__59824 + (1));
seq__59821 = G__59860;
chunk__59822 = G__59861;
count__59823 = G__59862;
i__59824 = G__59863;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59821);
if(temp__5825__auto__){
var seq__59821__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59821__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__59821__$1);
var G__59864 = cljs.core.chunk_rest(seq__59821__$1);
var G__59865 = c__5548__auto__;
var G__59866 = cljs.core.count(c__5548__auto__);
var G__59867 = (0);
seq__59821 = G__59864;
chunk__59822 = G__59865;
count__59823 = G__59866;
i__59824 = G__59867;
continue;
} else {
var vec__59836 = cljs.core.first(seq__59821__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59836,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59836,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__59868 = cljs.core.next(seq__59821__$1);
var G__59869 = null;
var G__59870 = (0);
var G__59871 = (0);
seq__59821 = G__59868;
chunk__59822 = G__59869;
count__59823 = G__59870;
i__59824 = G__59871;
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
var G__59845 = arguments.length;
switch (G__59845) {
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
var map__59847 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__59847__$1 = cljs.core.__destructure_map(map__59847);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__59849 = ret__$1;
var G__59849__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59849,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__59849);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59849__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__59849__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59852,p__59853){
var map__59854 = p__59852;
var map__59854__$1 = cljs.core.__destructure_map(map__59854);
var ret__$1 = map__59854__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59854__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__59855 = p__59853;
var seq__59856 = cljs.core.seq(vec__59855);
var first__59857 = cljs.core.first(seq__59856);
var seq__59856__$1 = cljs.core.next(seq__59856);
var spec_key = first__59857;
var libspecs = seq__59856__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__59858 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__59858__$1 = cljs.core.__destructure_map(map__59858);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59858__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59858__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__59859 = ret__$1;
var G__59859__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59859,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__59859);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59859__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__59859__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
