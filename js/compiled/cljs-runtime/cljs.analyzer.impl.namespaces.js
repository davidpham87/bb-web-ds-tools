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
var vec__50191 = libspec;
var seq__50192 = cljs.core.seq(vec__50191);
var first__50193 = cljs.core.first(seq__50192);
var seq__50192__$1 = cljs.core.next(seq__50192);
var lib = first__50193;
var spec = seq__50192__$1;
var libspec__$1 = vec__50191;
var vec__50194 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50194,(0),null);
var vec__50197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50194,(1),null);
var seq__50198 = cljs.core.seq(vec__50197);
var first__50199 = cljs.core.first(seq__50198);
var seq__50198__$1 = cljs.core.next(seq__50198);
var _ = first__50199;
var first__50199__$1 = cljs.core.first(seq__50198__$1);
var seq__50198__$2 = cljs.core.next(seq__50198__$1);
var alias = first__50199__$1;
var post_spec = seq__50198__$2;
var post = vec__50197;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__50204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50204,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__50204;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__50211 = cljs.core.seq(new_as_aliases);
var chunk__50212 = null;
var count__50213 = (0);
var i__50214 = (0);
while(true){
if((i__50214 < count__50213)){
var vec__50223 = chunk__50212.cljs$core$IIndexed$_nth$arity$2(null,i__50214);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50223,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50223,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50245 = seq__50211;
var G__50246 = chunk__50212;
var G__50247 = count__50213;
var G__50248 = (i__50214 + (1));
seq__50211 = G__50245;
chunk__50212 = G__50246;
count__50213 = G__50247;
i__50214 = G__50248;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50211);
if(temp__5825__auto__){
var seq__50211__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50211__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__50211__$1);
var G__50249 = cljs.core.chunk_rest(seq__50211__$1);
var G__50250 = c__5548__auto__;
var G__50251 = cljs.core.count(c__5548__auto__);
var G__50252 = (0);
seq__50211 = G__50249;
chunk__50212 = G__50250;
count__50213 = G__50251;
i__50214 = G__50252;
continue;
} else {
var vec__50228 = cljs.core.first(seq__50211__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50253 = cljs.core.next(seq__50211__$1);
var G__50254 = null;
var G__50255 = (0);
var G__50256 = (0);
seq__50211 = G__50253;
chunk__50212 = G__50254;
count__50213 = G__50255;
i__50214 = G__50256;
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
var G__50232 = arguments.length;
switch (G__50232) {
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
var map__50233 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__50233__$1 = cljs.core.__destructure_map(map__50233);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50233__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50233__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__50234 = ret__$1;
var G__50234__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50234,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__50234);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50234__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__50234__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50235,p__50236){
var map__50237 = p__50235;
var map__50237__$1 = cljs.core.__destructure_map(map__50237);
var ret__$1 = map__50237__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__50238 = p__50236;
var seq__50239 = cljs.core.seq(vec__50238);
var first__50240 = cljs.core.first(seq__50239);
var seq__50239__$1 = cljs.core.next(seq__50239);
var spec_key = first__50240;
var libspecs = seq__50239__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__50241 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__50241__$1 = cljs.core.__destructure_map(map__50241);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__50242 = ret__$1;
var G__50242__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50242,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__50242);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50242__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__50242__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
