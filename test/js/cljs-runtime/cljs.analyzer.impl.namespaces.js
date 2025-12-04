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
var vec__52849 = libspec;
var seq__52850 = cljs.core.seq(vec__52849);
var first__52851 = cljs.core.first(seq__52850);
var seq__52850__$1 = cljs.core.next(seq__52850);
var lib = first__52851;
var spec = seq__52850__$1;
var libspec__$1 = vec__52849;
var vec__52852 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52852,(0),null);
var vec__52855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52852,(1),null);
var seq__52856 = cljs.core.seq(vec__52855);
var first__52857 = cljs.core.first(seq__52856);
var seq__52856__$1 = cljs.core.next(seq__52856);
var _ = first__52857;
var first__52857__$1 = cljs.core.first(seq__52856__$1);
var seq__52856__$2 = cljs.core.next(seq__52856__$1);
var alias = first__52857__$1;
var post_spec = seq__52856__$2;
var post = vec__52855;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52859,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52859;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52860 = cljs.core.seq(new_as_aliases);
var chunk__52861 = null;
var count__52862 = (0);
var i__52863 = (0);
while(true){
if((i__52863 < count__52862)){
var vec__52877 = chunk__52861.cljs$core$IIndexed$_nth$arity$2(null,i__52863);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52877,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52877,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52897 = seq__52860;
var G__52898 = chunk__52861;
var G__52899 = count__52862;
var G__52900 = (i__52863 + (1));
seq__52860 = G__52897;
chunk__52861 = G__52898;
count__52862 = G__52899;
i__52863 = G__52900;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52860);
if(temp__5825__auto__){
var seq__52860__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52860__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52860__$1);
var G__52901 = cljs.core.chunk_rest(seq__52860__$1);
var G__52902 = c__5548__auto__;
var G__52903 = cljs.core.count(c__5548__auto__);
var G__52904 = (0);
seq__52860 = G__52901;
chunk__52861 = G__52902;
count__52862 = G__52903;
i__52863 = G__52904;
continue;
} else {
var vec__52882 = cljs.core.first(seq__52860__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52882,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52882,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52905 = cljs.core.next(seq__52860__$1);
var G__52906 = null;
var G__52907 = (0);
var G__52908 = (0);
seq__52860 = G__52905;
chunk__52861 = G__52906;
count__52862 = G__52907;
i__52863 = G__52908;
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
var G__52886 = arguments.length;
switch (G__52886) {
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
var map__52887 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52887__$1 = cljs.core.__destructure_map(map__52887);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52888 = ret__$1;
var G__52888__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52888,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52888);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52888__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52888__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52889,p__52890){
var map__52891 = p__52889;
var map__52891__$1 = cljs.core.__destructure_map(map__52891);
var ret__$1 = map__52891__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52892 = p__52890;
var seq__52893 = cljs.core.seq(vec__52892);
var first__52894 = cljs.core.first(seq__52893);
var seq__52893__$1 = cljs.core.next(seq__52893);
var spec_key = first__52894;
var libspecs = seq__52893__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52895 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52895__$1 = cljs.core.__destructure_map(map__52895);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52896 = ret__$1;
var G__52896__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52896,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52896);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52896__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52896__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
