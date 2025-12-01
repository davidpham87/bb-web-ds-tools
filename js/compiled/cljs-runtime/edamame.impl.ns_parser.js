goog.provide('edamame.impl.ns_parser');
/**
 * Returns true if x is a libspec
 */
edamame.impl.ns_parser.libspec_QMARK_ = (function edamame$impl$ns_parser$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Prepends a symbol or a seq to coll
 */
edamame.impl.ns_parser.prependss = (function edamame$impl$ns_parser$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
edamame.impl.ns_parser.load_lib = (function edamame$impl$ns_parser$load_lib(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26042 = arguments.length;
var i__5750__auto___26043 = (0);
while(true){
if((i__5750__auto___26043 < len__5749__auto___26042)){
args__5755__auto__.push((arguments[i__5750__auto___26043]));

var G__26044 = (i__5750__auto___26043 + (1));
i__5750__auto___26043 = G__26044;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return edamame.impl.ns_parser.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(edamame.impl.ns_parser.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (prefix,lib,options){
var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"lib","lib",191808726),lib__$1);
}));

(edamame.impl.ns_parser.load_lib.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(edamame.impl.ns_parser.load_lib.cljs$lang$applyTo = (function (seq26017){
var G__26018 = cljs.core.first(seq26017);
var seq26017__$1 = cljs.core.next(seq26017);
var G__26019 = cljs.core.first(seq26017__$1);
var seq26017__$2 = cljs.core.next(seq26017__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26018,G__26019,seq26017__$2);
}));

edamame.impl.ns_parser.load_libs = (function edamame$impl$ns_parser$load_libs(kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (arg){
if(edamame.impl.ns_parser.libspec_QMARK_(arg)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(edamame.impl.ns_parser.load_lib,null,edamame.impl.ns_parser.prependss(arg,opts))], null);
} else {
var vec__26025 = arg;
var seq__26026 = cljs.core.seq(vec__26025);
var first__26027 = cljs.core.first(seq__26026);
var seq__26026__$1 = cljs.core.next(seq__26026);
var prefix = first__26027;
var args_STAR___$2 = seq__26026__$1;
if((prefix == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
}

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (arg__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(edamame.impl.ns_parser.load_lib,prefix,edamame.impl.ns_parser.prependss(arg__$1,opts))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_STAR___$2], 0));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_STAR___$1], 0));
});
edamame.impl.ns_parser._ns = (function edamame$impl$ns_parser$_ns(p__26031){
var vec__26032 = p__26031;
var seq__26033 = cljs.core.seq(vec__26032);
var first__26034 = cljs.core.first(seq__26033);
var seq__26033__$1 = cljs.core.next(seq__26033);
var _ns = first__26034;
var first__26034__$1 = cljs.core.first(seq__26033__$1);
var seq__26033__$2 = cljs.core.next(seq__26033__$1);
var name = first__26034__$1;
var references = seq__26033__$2;
var docstring = ((typeof cljs.core.first(references) === 'string')?cljs.core.first(references):null);
var references__$1 = (cljs.core.truth_(docstring)?cljs.core.next(references):references);
var name__$1 = (cljs.core.truth_(docstring)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):name);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(references__$1)))?cljs.core.first(references__$1):null);
var references__$2 = (cljs.core.truth_(metadata)?cljs.core.next(references__$1):references__$1);
var references__$3 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,references__$2);
var references__$4 = cljs.core.group_by(cljs.core.first,references__$3);
var requires = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26028_SHARP_){
return edamame.impl.ns_parser.load_libs(new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.rest(p1__26028_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(references__$4)], 0));
var imports = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__26035){
var vec__26036 = p__26035;
var seq__26037 = cljs.core.seq(vec__26036);
var first__26038 = cljs.core.first(seq__26037);
var seq__26037__$1 = cljs.core.next(seq__26037);
var _ = first__26038;
var specs = seq__26037__$1;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (spec){
if((spec instanceof cljs.core.Symbol)){
var last_dot_idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),".");
var spec_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-classname","full-classname",-750434875),spec,new cljs.core.Keyword(null,"classname","classname",777390796),(cljs.core.truth_(last_dot_idx)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(spec_str,(last_dot_idx + (1)))):spec),new cljs.core.Keyword(null,"package","package",1189062786),(cljs.core.truth_(last_dot_idx)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec_str,(0),last_dot_idx)):null)], null)], null);
} else {
var vec__26039 = spec;
var seq__26040 = cljs.core.seq(vec__26039);
var first__26041 = cljs.core.first(seq__26040);
var seq__26040__$1 = cljs.core.next(seq__26040);
var pkg = first__26041;
var classes = seq__26040__$1;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (clazz){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-classname","full-classname",-750434875),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkg),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clazz)].join('')),new cljs.core.Keyword(null,"package","package",1189062786),pkg,new cljs.core.Keyword(null,"classname","classname",777390796),clazz], null);
}),classes);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([specs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"import","import",-1399500709).cljs$core$IFn$_invoke$arity$1(references__$4)], 0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current","current",-1088038603),name__$1,new cljs.core.Keyword(null,"meta","meta",1499536964),metadata,new cljs.core.Keyword(null,"requires","requires",-1201390927),requires,new cljs.core.Keyword(null,"aliases","aliases",1346874714),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,require){
var temp__5823__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(require);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(require);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var alias = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,alias,new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(require));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,requires),new cljs.core.Keyword(null,"imports","imports",-1249933394),imports], null);
});
edamame.impl.ns_parser.parse_ns_form = (function edamame$impl$ns_parser$parse_ns_form(ns_form){
return edamame.impl.ns_parser._ns(ns_form);
});

//# sourceMappingURL=edamame.impl.ns_parser.js.map
