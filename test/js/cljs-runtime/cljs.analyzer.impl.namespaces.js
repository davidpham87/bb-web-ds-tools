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
var vec__52761 = libspec;
var seq__52762 = cljs.core.seq(vec__52761);
var first__52763 = cljs.core.first(seq__52762);
var seq__52762__$1 = cljs.core.next(seq__52762);
var lib = first__52763;
var spec = seq__52762__$1;
var libspec__$1 = vec__52761;
var vec__52764 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(0),null);
var vec__52767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(1),null);
var seq__52768 = cljs.core.seq(vec__52767);
var first__52769 = cljs.core.first(seq__52768);
var seq__52768__$1 = cljs.core.next(seq__52768);
var _ = first__52769;
var first__52769__$1 = cljs.core.first(seq__52768__$1);
var seq__52768__$2 = cljs.core.next(seq__52768__$1);
var alias = first__52769__$1;
var post_spec = seq__52768__$2;
var post = vec__52767;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__52770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52770,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__52770;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__52771 = cljs.core.seq(new_as_aliases);
var chunk__52772 = null;
var count__52773 = (0);
var i__52774 = (0);
while(true){
if((i__52774 < count__52773)){
var vec__52783 = chunk__52772.cljs$core$IIndexed$_nth$arity$2(null,i__52774);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52783,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52783,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52810 = seq__52771;
var G__52811 = chunk__52772;
var G__52812 = count__52773;
var G__52813 = (i__52774 + (1));
seq__52771 = G__52810;
chunk__52772 = G__52811;
count__52773 = G__52812;
i__52774 = G__52813;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52771);
if(temp__5825__auto__){
var seq__52771__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52771__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52771__$1);
var G__52814 = cljs.core.chunk_rest(seq__52771__$1);
var G__52815 = c__5548__auto__;
var G__52816 = cljs.core.count(c__5548__auto__);
var G__52817 = (0);
seq__52771 = G__52814;
chunk__52772 = G__52815;
count__52773 = G__52816;
i__52774 = G__52817;
continue;
} else {
var vec__52789 = cljs.core.first(seq__52771__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52789,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52789,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__52818 = cljs.core.next(seq__52771__$1);
var G__52819 = null;
var G__52820 = (0);
var G__52821 = (0);
seq__52771 = G__52818;
chunk__52772 = G__52819;
count__52773 = G__52820;
i__52774 = G__52821;
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
var G__52793 = arguments.length;
switch (G__52793) {
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
var map__52794 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__52794__$1 = cljs.core.__destructure_map(map__52794);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52794__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52794__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__52795 = ret__$1;
var G__52795__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52795,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__52795);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52795__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__52795__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52796,p__52797){
var map__52798 = p__52796;
var map__52798__$1 = cljs.core.__destructure_map(map__52798);
var ret__$1 = map__52798__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52798__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__52799 = p__52797;
var seq__52800 = cljs.core.seq(vec__52799);
var first__52801 = cljs.core.first(seq__52800);
var seq__52800__$1 = cljs.core.next(seq__52800);
var spec_key = first__52801;
var libspecs = seq__52800__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__52803 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__52803__$1 = cljs.core.__destructure_map(map__52803);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__52804 = ret__$1;
var G__52804__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52804,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__52804);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52804__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__52804__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
