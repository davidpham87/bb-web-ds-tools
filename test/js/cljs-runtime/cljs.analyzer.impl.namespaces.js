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
var vec__52957 = libspec;
var seq__52958 = cljs.core.seq(vec__52957);
var first__52959 = cljs.core.first(seq__52958);
var seq__52958__$1 = cljs.core.next(seq__52958);
var lib = first__52959;
var spec = seq__52958__$1;
var libspec__$1 = vec__52957;
var vec__52960 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(0),null);
var vec__52963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(1),null);
var seq__52964 = cljs.core.seq(vec__52963);
var first__52965 = cljs.core.first(seq__52964);
var seq__52964__$1 = cljs.core.next(seq__52964);
var _ = first__52965;
var first__52965__$1 = cljs.core.first(seq__52964__$1);
var seq__52964__$2 = cljs.core.next(seq__52964__$1);
var alias = first__52965__$1;
var post_spec = seq__52964__$2;
var post = vec__52963;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52966,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52966;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52967 = cljs.core.seq(new_as_aliases);
var chunk__52968 = null;
var count__52969 = (0);
var i__52970 = (0);
while(true){
if((i__52970 < count__52969)){
var vec__52985 = chunk__52968.cljs$core$IIndexed$_nth$arity$2(null,i__52970);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53006 = seq__52967;
var G__53007 = chunk__52968;
var G__53008 = count__52969;
var G__53009 = (i__52970 + (1));
seq__52967 = G__53006;
chunk__52968 = G__53007;
count__52969 = G__53008;
i__52970 = G__53009;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52967);
if(temp__5825__auto__){
var seq__52967__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52967__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52967__$1);
var G__53011 = cljs.core.chunk_rest(seq__52967__$1);
var G__53012 = c__5548__auto__;
var G__53013 = cljs.core.count(c__5548__auto__);
var G__53014 = (0);
seq__52967 = G__53011;
chunk__52968 = G__53012;
count__52969 = G__53013;
i__52970 = G__53014;
continue;
} else {
var vec__52988 = cljs.core.first(seq__52967__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52988,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52988,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53016 = cljs.core.next(seq__52967__$1);
var G__53017 = null;
var G__53018 = (0);
var G__53019 = (0);
seq__52967 = G__53016;
chunk__52968 = G__53017;
count__52969 = G__53018;
i__52970 = G__53019;
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
var G__52994 = arguments.length;
switch (G__52994) {
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
var map__52996 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52996__$1 = cljs.core.__destructure_map(map__52996);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52997 = ret__$1;
var G__52997__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52997,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52997);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52997__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52997__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52998,p__52999){
var map__53000 = p__52998;
var map__53000__$1 = cljs.core.__destructure_map(map__53000);
var ret__$1 = map__53000__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__53001 = p__52999;
var seq__53002 = cljs.core.seq(vec__53001);
var first__53003 = cljs.core.first(seq__53002);
var seq__53002__$1 = cljs.core.next(seq__53002);
var spec_key = first__53003;
var libspecs = seq__53002__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__53004 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__53004__$1 = cljs.core.__destructure_map(map__53004);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53004__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53004__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__53005 = ret__$1;
var G__53005__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53005,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__53005);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53005__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__53005__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
