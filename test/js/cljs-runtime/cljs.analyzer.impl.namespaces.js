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
var vec__52762 = libspec;
var seq__52763 = cljs.core.seq(vec__52762);
var first__52764 = cljs.core.first(seq__52763);
var seq__52763__$1 = cljs.core.next(seq__52763);
var lib = first__52764;
var spec = seq__52763__$1;
var libspec__$1 = vec__52762;
var vec__52765 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52765,(0),null);
var vec__52768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52765,(1),null);
var seq__52769 = cljs.core.seq(vec__52768);
var first__52770 = cljs.core.first(seq__52769);
var seq__52769__$1 = cljs.core.next(seq__52769);
var _ = first__52770;
var first__52770__$1 = cljs.core.first(seq__52769__$1);
var seq__52769__$2 = cljs.core.next(seq__52769__$1);
var alias = first__52770__$1;
var post_spec = seq__52769__$2;
var post = vec__52768;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52771 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52771,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52771;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52776 = cljs.core.seq(new_as_aliases);
var chunk__52777 = null;
var count__52778 = (0);
var i__52779 = (0);
while(true){
if((i__52779 < count__52778)){
var vec__52786 = chunk__52777.cljs$core$IIndexed$_nth$arity$2(null,i__52779);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52786,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52786,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52832 = seq__52776;
var G__52833 = chunk__52777;
var G__52834 = count__52778;
var G__52835 = (i__52779 + (1));
seq__52776 = G__52832;
chunk__52777 = G__52833;
count__52778 = G__52834;
i__52779 = G__52835;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52776);
if(temp__5825__auto__){
var seq__52776__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52776__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52776__$1);
var G__52836 = cljs.core.chunk_rest(seq__52776__$1);
var G__52837 = c__5548__auto__;
var G__52838 = cljs.core.count(c__5548__auto__);
var G__52839 = (0);
seq__52776 = G__52836;
chunk__52777 = G__52837;
count__52778 = G__52838;
i__52779 = G__52839;
continue;
} else {
var vec__52793 = cljs.core.first(seq__52776__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52793,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52793,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52840 = cljs.core.next(seq__52776__$1);
var G__52841 = null;
var G__52842 = (0);
var G__52843 = (0);
seq__52776 = G__52840;
chunk__52777 = G__52841;
count__52778 = G__52842;
i__52779 = G__52843;
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
var G__52801 = arguments.length;
switch (G__52801) {
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
var map__52803 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52803__$1 = cljs.core.__destructure_map(map__52803);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52812 = ret__$1;
var G__52812__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52812,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52812);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52812__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52812__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52816,p__52817){
var map__52819 = p__52816;
var map__52819__$1 = cljs.core.__destructure_map(map__52819);
var ret__$1 = map__52819__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52820 = p__52817;
var seq__52821 = cljs.core.seq(vec__52820);
var first__52822 = cljs.core.first(seq__52821);
var seq__52821__$1 = cljs.core.next(seq__52821);
var spec_key = first__52822;
var libspecs = seq__52821__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52823 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52823__$1 = cljs.core.__destructure_map(map__52823);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52824 = ret__$1;
var G__52824__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52824,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52824);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52824__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52824__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
