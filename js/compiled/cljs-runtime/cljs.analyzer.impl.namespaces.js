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
var vec__51344 = libspec;
var seq__51345 = cljs.core.seq(vec__51344);
var first__51346 = cljs.core.first(seq__51345);
var seq__51345__$1 = cljs.core.next(seq__51345);
var lib = first__51346;
var spec = seq__51345__$1;
var libspec__$1 = vec__51344;
var vec__51347 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51347,(0),null);
var vec__51350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51347,(1),null);
var seq__51351 = cljs.core.seq(vec__51350);
var first__51352 = cljs.core.first(seq__51351);
var seq__51351__$1 = cljs.core.next(seq__51351);
var _ = first__51352;
var first__51352__$1 = cljs.core.first(seq__51351__$1);
var seq__51351__$2 = cljs.core.next(seq__51351__$1);
var alias = first__51352__$1;
var post_spec = seq__51351__$2;
var post = vec__51350;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__51358 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51358,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__51358;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__51367 = cljs.core.seq(new_as_aliases);
var chunk__51368 = null;
var count__51369 = (0);
var i__51370 = (0);
while(true){
if((i__51370 < count__51369)){
var vec__51378 = chunk__51368.cljs$core$IIndexed$_nth$arity$2(null,i__51370);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__51405 = seq__51367;
var G__51406 = chunk__51368;
var G__51407 = count__51369;
var G__51408 = (i__51370 + (1));
seq__51367 = G__51405;
chunk__51368 = G__51406;
count__51369 = G__51407;
i__51370 = G__51408;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51367);
if(temp__5825__auto__){
var seq__51367__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51367__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__51367__$1);
var G__51416 = cljs.core.chunk_rest(seq__51367__$1);
var G__51417 = c__5548__auto__;
var G__51418 = cljs.core.count(c__5548__auto__);
var G__51419 = (0);
seq__51367 = G__51416;
chunk__51368 = G__51417;
count__51369 = G__51418;
i__51370 = G__51419;
continue;
} else {
var vec__51381 = cljs.core.first(seq__51367__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__51420 = cljs.core.next(seq__51367__$1);
var G__51421 = null;
var G__51422 = (0);
var G__51423 = (0);
seq__51367 = G__51420;
chunk__51368 = G__51421;
count__51369 = G__51422;
i__51370 = G__51423;
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
var G__51385 = arguments.length;
switch (G__51385) {
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
var map__51392 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__51392__$1 = cljs.core.__destructure_map(map__51392);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__51393 = ret__$1;
var G__51393__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51393,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__51393);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51393__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__51393__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51394,p__51395){
var map__51396 = p__51394;
var map__51396__$1 = cljs.core.__destructure_map(map__51396);
var ret__$1 = map__51396__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51396__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__51397 = p__51395;
var seq__51398 = cljs.core.seq(vec__51397);
var first__51399 = cljs.core.first(seq__51398);
var seq__51398__$1 = cljs.core.next(seq__51398);
var spec_key = first__51399;
var libspecs = seq__51398__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__51400 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__51400__$1 = cljs.core.__destructure_map(map__51400);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__51401 = ret__$1;
var G__51401__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51401,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__51401);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51401__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__51401__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
