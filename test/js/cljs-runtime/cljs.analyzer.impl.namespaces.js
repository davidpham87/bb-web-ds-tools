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
var vec__52960 = libspec;
var seq__52961 = cljs.core.seq(vec__52960);
var first__52962 = cljs.core.first(seq__52961);
var seq__52961__$1 = cljs.core.next(seq__52961);
var lib = first__52962;
var spec = seq__52961__$1;
var libspec__$1 = vec__52960;
var vec__52963 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52963,(0),null);
var vec__52966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52963,(1),null);
var seq__52967 = cljs.core.seq(vec__52966);
var first__52968 = cljs.core.first(seq__52967);
var seq__52967__$1 = cljs.core.next(seq__52967);
var _ = first__52968;
var first__52968__$1 = cljs.core.first(seq__52967__$1);
var seq__52967__$2 = cljs.core.next(seq__52967__$1);
var alias = first__52968__$1;
var post_spec = seq__52967__$2;
var post = vec__52966;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52969 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52969,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52969;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52970 = cljs.core.seq(new_as_aliases);
var chunk__52971 = null;
var count__52972 = (0);
var i__52973 = (0);
while(true){
if((i__52973 < count__52972)){
var vec__52980 = chunk__52971.cljs$core$IIndexed$_nth$arity$2(null,i__52973);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52980,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52980,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53003 = seq__52970;
var G__53004 = chunk__52971;
var G__53005 = count__52972;
var G__53006 = (i__52973 + (1));
seq__52970 = G__53003;
chunk__52971 = G__53004;
count__52972 = G__53005;
i__52973 = G__53006;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52970);
if(temp__5825__auto__){
var seq__52970__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52970__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52970__$1);
var G__53008 = cljs.core.chunk_rest(seq__52970__$1);
var G__53009 = c__5548__auto__;
var G__53010 = cljs.core.count(c__5548__auto__);
var G__53011 = (0);
seq__52970 = G__53008;
chunk__52971 = G__53009;
count__52972 = G__53010;
i__52973 = G__53011;
continue;
} else {
var vec__52983 = cljs.core.first(seq__52970__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52983,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52983,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53013 = cljs.core.next(seq__52970__$1);
var G__53014 = null;
var G__53015 = (0);
var G__53016 = (0);
seq__52970 = G__53013;
chunk__52971 = G__53014;
count__52972 = G__53015;
i__52973 = G__53016;
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
var G__52987 = arguments.length;
switch (G__52987) {
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
var map__52988 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52988__$1 = cljs.core.__destructure_map(map__52988);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52988__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52988__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52989 = ret__$1;
var G__52989__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52989,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52989);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52989__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52989__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52990,p__52991){
var map__52992 = p__52990;
var map__52992__$1 = cljs.core.__destructure_map(map__52992);
var ret__$1 = map__52992__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52992__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52993 = p__52991;
var seq__52994 = cljs.core.seq(vec__52993);
var first__52995 = cljs.core.first(seq__52994);
var seq__52994__$1 = cljs.core.next(seq__52994);
var spec_key = first__52995;
var libspecs = seq__52994__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52996 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52996__$1 = cljs.core.__destructure_map(map__52996);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52997 = ret__$1;
var G__52997__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52997,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52997);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52997__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52997__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
