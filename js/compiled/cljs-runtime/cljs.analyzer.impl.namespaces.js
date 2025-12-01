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
var vec__51297 = libspec;
var seq__51298 = cljs.core.seq(vec__51297);
var first__51299 = cljs.core.first(seq__51298);
var seq__51298__$1 = cljs.core.next(seq__51298);
var lib = first__51299;
var spec = seq__51298__$1;
var libspec__$1 = vec__51297;
var vec__51300 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51300,(0),null);
var vec__51303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51300,(1),null);
var seq__51304 = cljs.core.seq(vec__51303);
var first__51305 = cljs.core.first(seq__51304);
var seq__51304__$1 = cljs.core.next(seq__51304);
var _ = first__51305;
var first__51305__$1 = cljs.core.first(seq__51304__$1);
var seq__51304__$2 = cljs.core.next(seq__51304__$1);
var alias = first__51305__$1;
var post_spec = seq__51304__$2;
var post = vec__51303;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__51317 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51317,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__51317;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__51319 = cljs.core.seq(new_as_aliases);
var chunk__51320 = null;
var count__51321 = (0);
var i__51322 = (0);
while(true){
if((i__51322 < count__51321)){
var vec__51333 = chunk__51320.cljs$core$IIndexed$_nth$arity$2(null,i__51322);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51333,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51333,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__51433 = seq__51319;
var G__51434 = chunk__51320;
var G__51435 = count__51321;
var G__51436 = (i__51322 + (1));
seq__51319 = G__51433;
chunk__51320 = G__51434;
count__51321 = G__51435;
i__51322 = G__51436;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51319);
if(temp__5825__auto__){
var seq__51319__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51319__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__51319__$1);
var G__51437 = cljs.core.chunk_rest(seq__51319__$1);
var G__51438 = c__5548__auto__;
var G__51439 = cljs.core.count(c__5548__auto__);
var G__51440 = (0);
seq__51319 = G__51437;
chunk__51320 = G__51438;
count__51321 = G__51439;
i__51322 = G__51440;
continue;
} else {
var vec__51337 = cljs.core.first(seq__51319__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51337,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51337,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__51444 = cljs.core.next(seq__51319__$1);
var G__51445 = null;
var G__51446 = (0);
var G__51447 = (0);
seq__51319 = G__51444;
chunk__51320 = G__51445;
count__51321 = G__51446;
i__51322 = G__51447;
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
var G__51349 = arguments.length;
switch (G__51349) {
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
var map__51373 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__51373__$1 = cljs.core.__destructure_map(map__51373);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__51374 = ret__$1;
var G__51374__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51374,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__51374);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51374__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__51374__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51380,p__51381){
var map__51382 = p__51380;
var map__51382__$1 = cljs.core.__destructure_map(map__51382);
var ret__$1 = map__51382__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51382__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__51383 = p__51381;
var seq__51384 = cljs.core.seq(vec__51383);
var first__51385 = cljs.core.first(seq__51384);
var seq__51384__$1 = cljs.core.next(seq__51384);
var spec_key = first__51385;
var libspecs = seq__51384__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__51388 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__51388__$1 = cljs.core.__destructure_map(map__51388);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__51389 = ret__$1;
var G__51389__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51389,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__51389);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51389__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__51389__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
