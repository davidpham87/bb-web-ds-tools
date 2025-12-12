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
var vec__60233 = libspec;
var seq__60234 = cljs.core.seq(vec__60233);
var first__60235 = cljs.core.first(seq__60234);
var seq__60234__$1 = cljs.core.next(seq__60234);
var lib = first__60235;
var spec = seq__60234__$1;
var libspec__$1 = vec__60233;
var vec__60236 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60236,(0),null);
var vec__60239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60236,(1),null);
var seq__60240 = cljs.core.seq(vec__60239);
var first__60241 = cljs.core.first(seq__60240);
var seq__60240__$1 = cljs.core.next(seq__60240);
var _ = first__60241;
var first__60241__$1 = cljs.core.first(seq__60240__$1);
var seq__60240__$2 = cljs.core.next(seq__60240__$1);
var alias = first__60241__$1;
var post_spec = seq__60240__$2;
var post = vec__60239;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__60242 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60242,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__60242;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__60243 = cljs.core.seq(new_as_aliases);
var chunk__60244 = null;
var count__60245 = (0);
var i__60246 = (0);
while(true){
if((i__60246 < count__60245)){
var vec__60253 = chunk__60244.cljs$core$IIndexed$_nth$arity$2(null,i__60246);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60253,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60253,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60276 = seq__60243;
var G__60277 = chunk__60244;
var G__60278 = count__60245;
var G__60279 = (i__60246 + (1));
seq__60243 = G__60276;
chunk__60244 = G__60277;
count__60245 = G__60278;
i__60246 = G__60279;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60243);
if(temp__5825__auto__){
var seq__60243__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60243__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__60243__$1);
var G__60280 = cljs.core.chunk_rest(seq__60243__$1);
var G__60281 = c__5548__auto__;
var G__60282 = cljs.core.count(c__5548__auto__);
var G__60283 = (0);
seq__60243 = G__60280;
chunk__60244 = G__60281;
count__60245 = G__60282;
i__60246 = G__60283;
continue;
} else {
var vec__60256 = cljs.core.first(seq__60243__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60256,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60256,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__60284 = cljs.core.next(seq__60243__$1);
var G__60285 = null;
var G__60286 = (0);
var G__60287 = (0);
seq__60243 = G__60284;
chunk__60244 = G__60285;
count__60245 = G__60286;
i__60246 = G__60287;
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
var G__60260 = arguments.length;
switch (G__60260) {
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
var map__60261 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__60261__$1 = cljs.core.__destructure_map(map__60261);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60261__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60261__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__60262 = ret__$1;
var G__60262__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60262,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__60262);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60262__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__60262__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60263,p__60264){
var map__60265 = p__60263;
var map__60265__$1 = cljs.core.__destructure_map(map__60265);
var ret__$1 = map__60265__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60265__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__60266 = p__60264;
var seq__60267 = cljs.core.seq(vec__60266);
var first__60268 = cljs.core.first(seq__60267);
var seq__60267__$1 = cljs.core.next(seq__60267);
var spec_key = first__60268;
var libspecs = seq__60267__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__60269 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__60269__$1 = cljs.core.__destructure_map(map__60269);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60269__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60269__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__60271 = ret__$1;
var G__60271__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60271,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__60271);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60271__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__60271__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
