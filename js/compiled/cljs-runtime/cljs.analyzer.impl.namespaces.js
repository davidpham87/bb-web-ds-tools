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
var vec__50218 = libspec;
var seq__50219 = cljs.core.seq(vec__50218);
var first__50220 = cljs.core.first(seq__50219);
var seq__50219__$1 = cljs.core.next(seq__50219);
var lib = first__50220;
var spec = seq__50219__$1;
var libspec__$1 = vec__50218;
var vec__50221 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221,(0),null);
var vec__50224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221,(1),null);
var seq__50225 = cljs.core.seq(vec__50224);
var first__50226 = cljs.core.first(seq__50225);
var seq__50225__$1 = cljs.core.next(seq__50225);
var _ = first__50226;
var first__50226__$1 = cljs.core.first(seq__50225__$1);
var seq__50225__$2 = cljs.core.next(seq__50225__$1);
var alias = first__50226__$1;
var post_spec = seq__50225__$2;
var post = vec__50224;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__50227 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50227,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__50227;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__50228 = cljs.core.seq(new_as_aliases);
var chunk__50229 = null;
var count__50230 = (0);
var i__50231 = (0);
while(true){
if((i__50231 < count__50230)){
var vec__50238 = chunk__50229.cljs$core$IIndexed$_nth$arity$2(null,i__50231);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50238,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50238,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50272 = seq__50228;
var G__50273 = chunk__50229;
var G__50274 = count__50230;
var G__50275 = (i__50231 + (1));
seq__50228 = G__50272;
chunk__50229 = G__50273;
count__50230 = G__50274;
i__50231 = G__50275;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50228);
if(temp__5825__auto__){
var seq__50228__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50228__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__50228__$1);
var G__50276 = cljs.core.chunk_rest(seq__50228__$1);
var G__50277 = c__5548__auto__;
var G__50278 = cljs.core.count(c__5548__auto__);
var G__50279 = (0);
seq__50228 = G__50276;
chunk__50229 = G__50277;
count__50230 = G__50278;
i__50231 = G__50279;
continue;
} else {
var vec__50241 = cljs.core.first(seq__50228__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__50280 = cljs.core.next(seq__50228__$1);
var G__50281 = null;
var G__50282 = (0);
var G__50283 = (0);
seq__50228 = G__50280;
chunk__50229 = G__50281;
count__50230 = G__50282;
i__50231 = G__50283;
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
var G__50245 = arguments.length;
switch (G__50245) {
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
var map__50246 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__50246__$1 = cljs.core.__destructure_map(map__50246);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50246__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50246__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__50247 = ret__$1;
var G__50247__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50247,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__50247);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50247__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__50247__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50248,p__50249){
var map__50250 = p__50248;
var map__50250__$1 = cljs.core.__destructure_map(map__50250);
var ret__$1 = map__50250__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50250__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__50251 = p__50249;
var seq__50252 = cljs.core.seq(vec__50251);
var first__50253 = cljs.core.first(seq__50252);
var seq__50252__$1 = cljs.core.next(seq__50252);
var spec_key = first__50253;
var libspecs = seq__50252__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__50254 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__50254__$1 = cljs.core.__destructure_map(map__50254);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50254__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50254__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__50257 = ret__$1;
var G__50257__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50257,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__50257);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50257__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__50257__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
