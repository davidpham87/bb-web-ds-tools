goog.provide('spec_tools.visitor');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol(spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55368 = cljs.core.get_global_hierarchy;
return (fexpr__55368.cljs$core$IFn$_invoke$arity$0 ? fexpr__55368.cljs$core$IFn$_invoke$arity$0() : fexpr__55368.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__55372 = arguments.length;
switch (G__55372) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__55380){
var map__55381 = p__55380;
var map__55381__$1 = cljs.core.__destructure_map(map__55381);
var options = map__55381__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
var G__55383 = new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
var G__55384 = spec;
var G__55385 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__55386 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55383,G__55384,G__55385,G__55386) : accept.call(null,G__55383,G__55384,G__55385,G__55386));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__55389 = new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null);
var G__55390 = spec;
var G__55391 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55388_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55388_SHARP_,accept,options);
}),keys);
var G__55392 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55389,G__55390,G__55391,G__55392) : accept.call(null,G__55389,G__55390,G__55391,G__55392));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__55395 = spec_tools.impl.extract_form(spec);
var seq__55396 = cljs.core.seq(vec__55395);
var first__55397 = cljs.core.first(seq__55396);
var seq__55396__$1 = cljs.core.next(seq__55396);
var _ = first__55397;
var map__55398 = seq__55396__$1;
var map__55398__$1 = cljs.core.__destructure_map(map__55398);
var inner_spec_map = map__55398__$1;
var G__55399 = new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null);
var G__55400 = spec;
var G__55401 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55394_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55394_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__55402 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55399,G__55400,G__55401,G__55402) : accept.call(null,G__55399,G__55400,G__55401,G__55402));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__55412 = spec_tools.impl.extract_form(spec);
var seq__55413 = cljs.core.seq(vec__55412);
var first__55414 = cljs.core.first(seq__55413);
var seq__55413__$1 = cljs.core.next(seq__55413);
var _ = first__55414;
var inner_specs = seq__55413__$1;
var G__55415 = new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null);
var G__55416 = spec;
var G__55417 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55411_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55411_SHARP_,accept,options);
}),inner_specs);
var G__55418 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55415,G__55416,G__55417,G__55418) : accept.call(null,G__55415,G__55416,G__55417,G__55418));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__55420 = spec_tools.impl.extract_form(spec);
var seq__55421 = cljs.core.seq(vec__55420);
var first__55422 = cljs.core.first(seq__55421);
var seq__55421__$1 = cljs.core.next(seq__55421);
var _ = first__55422;
var inner_specs = seq__55421__$1;
var G__55423 = new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null);
var G__55424 = spec;
var G__55425 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55419_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55419_SHARP_,accept,options);
}),inner_specs);
var G__55426 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55423,G__55424,G__55425,G__55426) : accept.call(null,G__55423,G__55424,G__55425,G__55426));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","multi-spec","clojure.spec.alpha/multi-spec",1408976740,null),(function (spec,accept,options){
var methods_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,spec_tools.parse.get_multi_spec_sub_specs(spec_tools.impl.extract_form(spec)));
var G__55433 = new cljs.core.Symbol("clojure.spec.alpha","multi-spec","clojure.spec.alpha/multi-spec",1408976740,null);
var G__55434 = spec;
var G__55435 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55427_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__55427_SHARP_),accept,options);
}),methods_specs);
var G__55436 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55433,G__55434,G__55435,G__55436) : accept.call(null,G__55433,G__55434,G__55435,G__55436));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__55438 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55438,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55438,(1),null);
var G__55441 = new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null);
var G__55442 = spec;
var G__55443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55444 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55441,G__55442,G__55443,G__55444) : accept.call(null,G__55441,G__55442,G__55443,G__55444));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__55446 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55446,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55446,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55446,(2),null);
var G__55449 = new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null);
var G__55450 = spec;
var G__55451 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55445_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55445_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__55452 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55449,G__55450,G__55451,G__55452) : accept.call(null,G__55449,G__55450,G__55451,G__55452));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__55453 = spec_tools.parse.parse_spec.cljs$core$IFn$_invoke$arity$1(form);
var map__55453__$1 = cljs.core.__destructure_map(map__55453);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55453__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__55454 = type;
var G__55454__$1 = (((G__55454 instanceof cljs.core.Keyword))?G__55454.fqn:null);
switch (G__55454__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55454__$1)].join('')));

}
})();
var G__55455 = dispatch;
var G__55456 = spec;
var G__55457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__55458 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55455,G__55456,G__55457,G__55458) : accept.call(null,G__55455,G__55456,G__55457,G__55458));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__55462 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55462,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55462,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55462,(2),null);
var G__55465 = new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);
var G__55466 = spec;
var G__55467 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55460_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55460_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__55468 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55465,G__55466,G__55467,G__55468) : accept.call(null,G__55465,G__55466,G__55467,G__55468));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__55473 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55473,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55473,(1),null);
var G__55476 = new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null);
var G__55477 = spec;
var G__55478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55479 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55476,G__55477,G__55478,G__55479) : accept.call(null,G__55476,G__55477,G__55478,G__55479));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__55480 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55480,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55480,(1),null);
var G__55484 = new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null);
var G__55485 = spec;
var G__55486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55487 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55484,G__55485,G__55486,G__55487) : accept.call(null,G__55484,G__55485,G__55486,G__55487));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__55488 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55488,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55488,(1),null);
var G__55491 = new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null);
var G__55492 = spec;
var G__55493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55494 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55491,G__55492,G__55493,G__55494) : accept.call(null,G__55491,G__55492,G__55493,G__55494));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__55498 = spec_tools.impl.extract_form(spec);
var seq__55499 = cljs.core.seq(vec__55498);
var first__55500 = cljs.core.first(seq__55499);
var seq__55499__$1 = cljs.core.next(seq__55499);
var _ = first__55500;
var map__55501 = seq__55499__$1;
var map__55501__$1 = cljs.core.__destructure_map(map__55501);
var inner_spec_map = map__55501__$1;
var G__55502 = new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null);
var G__55503 = spec;
var G__55504 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55496_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55496_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__55505 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55502,G__55503,G__55504,G__55505) : accept.call(null,G__55502,G__55503,G__55504,G__55505));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__55508 = spec_tools.impl.extract_form(spec);
var seq__55509 = cljs.core.seq(vec__55508);
var first__55510 = cljs.core.first(seq__55509);
var seq__55509__$1 = cljs.core.next(seq__55509);
var _ = first__55510;
var map__55511 = seq__55509__$1;
var map__55511__$1 = cljs.core.__destructure_map(map__55511);
var inner_spec_map = map__55511__$1;
var G__55512 = new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null);
var G__55513 = spec;
var G__55514 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55506_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55506_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__55515 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55512,G__55513,G__55514,G__55515) : accept.call(null,G__55512,G__55513,G__55514,G__55515));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__55517 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55517,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55517,(1),null);
var G__55523 = new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null);
var G__55524 = spec;
var G__55525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55526 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55523,G__55524,G__55525,G__55526) : accept.call(null,G__55523,G__55524,G__55525,G__55526));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__55528 = spec_tools.impl.extract_form(spec);
var seq__55529 = cljs.core.seq(vec__55528);
var first__55530 = cljs.core.first(seq__55529);
var seq__55529__$1 = cljs.core.next(seq__55529);
var _ = first__55530;
var inner_specs = seq__55529__$1;
var G__55531 = new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null);
var G__55532 = spec;
var G__55533 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55527_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55527_SHARP_,accept,options);
}),inner_specs);
var G__55534 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55531,G__55532,G__55533,G__55534) : accept.call(null,G__55531,G__55532,G__55533,G__55534));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__55536 = new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null);
var G__55537 = spec;
var G__55538 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55535_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55535_SHARP_,accept,options);
}),keys);
var G__55539 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55536,G__55537,G__55538,G__55539) : accept.call(null,G__55536,G__55537,G__55538,G__55539));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__55540 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(1),null);
var G__55544 = new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null);
var G__55545 = spec;
var G__55546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55547 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55544,G__55545,G__55546,G__55547) : accept.call(null,G__55544,G__55545,G__55546,G__55547));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__55553 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55553,(0),null);
var map__55556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55553,(1),null);
var map__55556__$1 = cljs.core.__destructure_map(map__55556);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55556__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var G__55558 = new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200);
var G__55559 = spec;
var G__55560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55561 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55558,G__55559,G__55560,G__55561) : accept.call(null,G__55558,G__55559,G__55560,G__55561));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
var G__55562 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__55563 = spec;
var G__55564 = null;
var G__55565 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55562,G__55563,G__55564,G__55565) : accept.call(null,G__55562,G__55563,G__55564,G__55565));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

//# sourceMappingURL=spec_tools.visitor.js.map
