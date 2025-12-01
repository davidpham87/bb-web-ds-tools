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
var vec__50357 = libspec;
var seq__50358 = cljs.core.seq(vec__50357);
var first__50359 = cljs.core.first(seq__50358);
var seq__50358__$1 = cljs.core.next(seq__50358);
var lib = first__50359;
var spec = seq__50358__$1;
var libspec__$1 = vec__50357;
var vec__50360 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50360,(0),null);
var vec__50363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50360,(1),null);
var seq__50364 = cljs.core.seq(vec__50363);
var first__50365 = cljs.core.first(seq__50364);
var seq__50364__$1 = cljs.core.next(seq__50364);
var _ = first__50365;
var first__50365__$1 = cljs.core.first(seq__50364__$1);
var seq__50364__$2 = cljs.core.next(seq__50364__$1);
var alias = first__50365__$1;
var post_spec = seq__50364__$2;
var post = vec__50363;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__50369 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50369,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__50369;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__50370 = cljs.core.seq(new_as_aliases);
var chunk__50371 = null;
var count__50372 = (0);
var i__50373 = (0);
while(true){
if((i__50373 < count__50372)){
var vec__50383 = chunk__50371.cljs$core$IIndexed$_nth$arity$2(null,i__50373);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50383,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50383,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50417 = seq__50370;
var G__50418 = chunk__50371;
var G__50419 = count__50372;
var G__50420 = (i__50373 + (1));
seq__50370 = G__50417;
chunk__50371 = G__50418;
count__50372 = G__50419;
i__50373 = G__50420;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50370);
if(temp__5825__auto__){
var seq__50370__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50370__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__50370__$1);
var G__50421 = cljs.core.chunk_rest(seq__50370__$1);
var G__50422 = c__5548__auto__;
var G__50423 = cljs.core.count(c__5548__auto__);
var G__50424 = (0);
seq__50370 = G__50421;
chunk__50371 = G__50422;
count__50372 = G__50423;
i__50373 = G__50424;
continue;
} else {
var vec__50386 = cljs.core.first(seq__50370__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50428 = cljs.core.next(seq__50370__$1);
var G__50429 = null;
var G__50430 = (0);
var G__50431 = (0);
seq__50370 = G__50428;
chunk__50371 = G__50429;
count__50372 = G__50430;
i__50373 = G__50431;
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
var G__50393 = arguments.length;
switch (G__50393) {
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
var map__50399 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__50399__$1 = cljs.core.__destructure_map(map__50399);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__50400 = ret__$1;
var G__50400__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50400,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__50400);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50400__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__50400__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50406,p__50407){
var map__50408 = p__50406;
var map__50408__$1 = cljs.core.__destructure_map(map__50408);
var ret__$1 = map__50408__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__50409 = p__50407;
var seq__50410 = cljs.core.seq(vec__50409);
var first__50411 = cljs.core.first(seq__50410);
var seq__50410__$1 = cljs.core.next(seq__50410);
var spec_key = first__50411;
var libspecs = seq__50410__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__50412 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__50412__$1 = cljs.core.__destructure_map(map__50412);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__50413 = ret__$1;
var G__50413__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50413,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__50413);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50413__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__50413__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
