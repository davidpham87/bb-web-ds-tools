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
var vec__50285 = libspec;
var seq__50286 = cljs.core.seq(vec__50285);
var first__50287 = cljs.core.first(seq__50286);
var seq__50286__$1 = cljs.core.next(seq__50286);
var lib = first__50287;
var spec = seq__50286__$1;
var libspec__$1 = vec__50285;
var vec__50288 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50288,(0),null);
var vec__50291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50288,(1),null);
var seq__50292 = cljs.core.seq(vec__50291);
var first__50293 = cljs.core.first(seq__50292);
var seq__50292__$1 = cljs.core.next(seq__50292);
var _ = first__50293;
var first__50293__$1 = cljs.core.first(seq__50292__$1);
var seq__50292__$2 = cljs.core.next(seq__50292__$1);
var alias = first__50293__$1;
var post_spec = seq__50292__$2;
var post = vec__50291;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__50294 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__50294;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__50298 = cljs.core.seq(new_as_aliases);
var chunk__50299 = null;
var count__50300 = (0);
var i__50301 = (0);
while(true){
if((i__50301 < count__50300)){
var vec__50313 = chunk__50299.cljs$core$IIndexed$_nth$arity$2(null,i__50301);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50313,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50313,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50339 = seq__50298;
var G__50340 = chunk__50299;
var G__50341 = count__50300;
var G__50342 = (i__50301 + (1));
seq__50298 = G__50339;
chunk__50299 = G__50340;
count__50300 = G__50341;
i__50301 = G__50342;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50298);
if(temp__5825__auto__){
var seq__50298__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50298__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__50298__$1);
var G__50343 = cljs.core.chunk_rest(seq__50298__$1);
var G__50344 = c__5548__auto__;
var G__50345 = cljs.core.count(c__5548__auto__);
var G__50346 = (0);
seq__50298 = G__50343;
chunk__50299 = G__50344;
count__50300 = G__50345;
i__50301 = G__50346;
continue;
} else {
var vec__50316 = cljs.core.first(seq__50298__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50316,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50316,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50347 = cljs.core.next(seq__50298__$1);
var G__50348 = null;
var G__50349 = (0);
var G__50350 = (0);
seq__50298 = G__50347;
chunk__50299 = G__50348;
count__50300 = G__50349;
i__50301 = G__50350;
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
var G__50320 = arguments.length;
switch (G__50320) {
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
var map__50326 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__50326__$1 = cljs.core.__destructure_map(map__50326);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__50327 = ret__$1;
var G__50327__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50327,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__50327);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50327__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__50327__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50328,p__50329){
var map__50330 = p__50328;
var map__50330__$1 = cljs.core.__destructure_map(map__50330);
var ret__$1 = map__50330__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50330__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__50334 = p__50329;
var seq__50335 = cljs.core.seq(vec__50334);
var first__50336 = cljs.core.first(seq__50335);
var seq__50335__$1 = cljs.core.next(seq__50335);
var spec_key = first__50336;
var libspecs = seq__50335__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__50337 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__50337__$1 = cljs.core.__destructure_map(map__50337);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50337__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__50338 = ret__$1;
var G__50338__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50338,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__50338);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50338__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__50338__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
