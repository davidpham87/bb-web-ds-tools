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
var vec__52730 = libspec;
var seq__52731 = cljs.core.seq(vec__52730);
var first__52732 = cljs.core.first(seq__52731);
var seq__52731__$1 = cljs.core.next(seq__52731);
var lib = first__52732;
var spec = seq__52731__$1;
var libspec__$1 = vec__52730;
var vec__52733 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(0),null);
var vec__52736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(1),null);
var seq__52737 = cljs.core.seq(vec__52736);
var first__52738 = cljs.core.first(seq__52737);
var seq__52737__$1 = cljs.core.next(seq__52737);
var _ = first__52738;
var first__52738__$1 = cljs.core.first(seq__52737__$1);
var seq__52737__$2 = cljs.core.next(seq__52737__$1);
var alias = first__52738__$1;
var post_spec = seq__52737__$2;
var post = vec__52736;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52743 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52743,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52743;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52745 = cljs.core.seq(new_as_aliases);
var chunk__52746 = null;
var count__52747 = (0);
var i__52748 = (0);
while(true){
if((i__52748 < count__52747)){
var vec__52757 = chunk__52746.cljs$core$IIndexed$_nth$arity$2(null,i__52748);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52757,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52757,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52783 = seq__52745;
var G__52784 = chunk__52746;
var G__52785 = count__52747;
var G__52786 = (i__52748 + (1));
seq__52745 = G__52783;
chunk__52746 = G__52784;
count__52747 = G__52785;
i__52748 = G__52786;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52745);
if(temp__5825__auto__){
var seq__52745__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52745__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52745__$1);
var G__52787 = cljs.core.chunk_rest(seq__52745__$1);
var G__52788 = c__5548__auto__;
var G__52789 = cljs.core.count(c__5548__auto__);
var G__52790 = (0);
seq__52745 = G__52787;
chunk__52746 = G__52788;
count__52747 = G__52789;
i__52748 = G__52790;
continue;
} else {
var vec__52762 = cljs.core.first(seq__52745__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52762,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52762,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52791 = cljs.core.next(seq__52745__$1);
var G__52792 = null;
var G__52793 = (0);
var G__52794 = (0);
seq__52745 = G__52791;
chunk__52746 = G__52792;
count__52747 = G__52793;
i__52748 = G__52794;
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
var G__52766 = arguments.length;
switch (G__52766) {
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
var map__52767 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52767__$1 = cljs.core.__destructure_map(map__52767);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52770,p__52771){
var map__52772 = p__52770;
var map__52772__$1 = cljs.core.__destructure_map(map__52772);
var ret__$1 = map__52772__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52772__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52773 = p__52771;
var seq__52774 = cljs.core.seq(vec__52773);
var first__52775 = cljs.core.first(seq__52774);
var seq__52774__$1 = cljs.core.next(seq__52774);
var spec_key = first__52775;
var libspecs = seq__52774__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52776 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52776__$1 = cljs.core.__destructure_map(map__52776);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52777 = ret__$1;
var G__52777__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52777,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52777);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52777__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52777__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
