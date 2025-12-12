goog.provide('malli.generator');





/**
 * @interface
 */
malli.generator.Generator = function(){};

var malli$generator$Generator$_generator$dyn_59802 = (function (this$,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.generator._generator[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5374__auto__.call(null,this$,options));
} else {
var m__5372__auto__ = (malli.generator._generator["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5372__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("Generator.-generator",this$);
}
}
});
/**
 * returns generator for schema
 */
malli.generator._generator = (function malli$generator$_generator(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$generator$Generator$_generator$arity$2 == null)))))){
return this$.malli$generator$Generator$_generator$arity$2(this$,options);
} else {
return malli$generator$Generator$_generator$dyn_59802(this$,options);
}
});

malli.generator.nil_gen = clojure.test.check.generators.return$(null);
malli.generator._child = (function malli$generator$_child(schema,options){
return cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options));
});
malli.generator._child_gen = (function malli$generator$_child_gen(schema,options){
var G__59609 = malli.generator._child(schema,options);
var G__59610 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59609,G__59610) : malli.generator.generator.call(null,G__59609,G__59610));
});
/**
 * Return a generator of no values that is compatible with -unreachable-gen?.
 */
malli.generator._never_gen = (function malli$generator$_never_gen(p__59611){
var map__59612 = p__59611;
var map__59612__$1 = cljs.core.__destructure_map(map__59612);
var _options = map__59612__$1;
var original_generator_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59612__$1,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395));
return cljs.core.with_meta(clojure.test.check.generators.sized((function (_){
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","unsatisfiable-schema","malli.generator/unsatisfiable-schema",919209538),(function (){var G__59614 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(original_generator_schema)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59614,new cljs.core.Keyword(null,"schema","schema",-1582001791),original_generator_schema);
} else {
return G__59614;
}
})());
})),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.generator","never-gen","malli.generator/never-gen",-887335792),true,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395),original_generator_schema], null));
});
/**
 * Returns true iff generator g generators no values.
 */
malli.generator._unreachable_gen_QMARK_ = (function malli$generator$_unreachable_gen_QMARK_(g){
return cljs.core.boolean$(new cljs.core.Keyword("malli.generator","never-gen","malli.generator/never-gen",-887335792).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(g)));
});
malli.generator._not_unreachable = (function malli$generator$_not_unreachable(g){
if(malli.generator._unreachable_gen_QMARK_(g)){
return null;
} else {
return g;
}
});
malli.generator._unreachable = (function malli$generator$_unreachable(g){
if(malli.generator._unreachable_gen_QMARK_(g)){
return g;
} else {
return null;
}
});
malli.generator._random = (function malli$generator$_random(seed){
if(cljs.core.truth_(seed)){
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed);
} else {
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
}
});
malli.generator._min_max = (function malli$generator$_min_max(schema,options){
var map__59622 = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema,options);
var map__59622__$1 = cljs.core.__destructure_map(map__59622);
var gen_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword("gen","min","gen/min",444569458));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword("gen","max","gen/max",61264228));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = gen_min;
if(cljs.core.truth_(and__5023__auto____$1)){
return (gen_min < min);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","min","gen/min",444569458),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"min","min",444991522),min], null));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = max;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = gen_max;
if(cljs.core.truth_(and__5023__auto____$1)){
return (gen_max > max);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","max","gen/max",61264228),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"max","max",61366548),min], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(function (){var or__5025__auto__ = gen_min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return min;
}
})(),new cljs.core.Keyword(null,"max","max",61366548),(function (){var or__5025__auto__ = gen_max;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return max;
}
})()], null);
});
malli.generator.inf_nan = (function malli$generator$inf_nan(schema,options){
var map__59635 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__59635__$1 = cljs.core.__destructure_map(map__59635);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword("gen","infinite?","gen/infinite?",-2017652832));
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword("gen","NaN?","gen/NaN?",-1917993267));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),infinite_QMARK_,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),NaN_QMARK_], null);
});
malli.generator.gen_fmap = (function malli$generator$gen_fmap(f,gen){
var or__5025__auto__ = malli.generator._unreachable(gen);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return clojure.test.check.generators.fmap(f,gen);
}
});
malli.generator.gen_fcat = (function malli$generator$gen_fcat(gen){
return malli.generator.gen_fmap((function (p1__59641_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__59641_SHARP_);
}),gen);
});
malli.generator.gen_tuple = (function malli$generator$gen_tuple(gens){
var or__5025__auto__ = cljs.core.some(malli.generator._unreachable,gens);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,gens);
}
});
malli.generator.gen_maybe = (function malli$generator$gen_maybe(g){
if(malli.generator._unreachable_gen_QMARK_(g)){
return malli.generator.nil_gen;
} else {
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator.nil_gen,g], null));
}
});
malli.generator.double_default = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),false,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null);
malli.generator.gen_double = (function malli$generator$gen_double(opts){
return clojure.test.check.generators.double_STAR_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(malli.generator.double_default,opts),new cljs.core.Keyword(null,"min","min",444991522),(function (p1__59650_SHARP_){
var G__59654 = p1__59650_SHARP_;
if((G__59654 == null)){
return null;
} else {
return G__59654;
}
})),new cljs.core.Keyword(null,"max","max",61366548),(function (p1__59651_SHARP_){
var G__59655 = p1__59651_SHARP_;
if((G__59655 == null)){
return null;
} else {
return G__59655;
}
})));
});
malli.generator.gen_vector = (function malli$generator$gen_vector(p__59659,g){
var map__59660 = p__59659;
var map__59660__$1 = cljs.core.__destructure_map(map__59660);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59660__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59660__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(malli.generator._unreachable_gen_QMARK_(g)){
if(((function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() === (0))){
return clojure.test.check.generators.return$(cljs.core.PersistentVector.EMPTY);
} else {
return g;
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5023__auto__;
}
})())){
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(g,min);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})())){
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(g,min,max);
} else {
if(cljs.core.truth_(min)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(clojure.test.check.generators.sized((function (p1__59658_SHARP_){
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(g,min,(min + p1__59658_SHARP_));
})),cljs.core.assoc,new cljs.core.Keyword("malli.generator","generator-ast","malli.generator/generator-ast",-1769943051),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector-min","vector-min",-2065952790),new cljs.core.Keyword(null,"generator","generator",-572962281),g,new cljs.core.Keyword(null,"min","min",444991522),min], null));
} else {
if(cljs.core.truth_(max)){
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(g,(0),max);
} else {
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(g);

}
}
}
}
}
});
malli.generator.gen_vector_distinct_by = (function malli$generator$gen_vector_distinct_by(schema,p__59676,f,g){
var map__59677 = p__59676;
var map__59677__$1 = cljs.core.__destructure_map(map__59677);
var m = map__59677__$1;
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"min","min",444991522));
if(malli.generator._unreachable_gen_QMARK_(g)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})())){
return clojure.test.check.generators.return$(cljs.core.PersistentVector.EMPTY);
} else {
return g;
}
} else {
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(f,g,cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,cljs.core.max);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),min], null):clojure.set.rename_keys(m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"min-elements","min-elements",949370780),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"max-elements","max-elements",433034073)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100),new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p1__59674_SHARP_){
return malli.core._exception(new cljs.core.Keyword("malli.generator","distinct-generator-failure","malli.generator/distinct-generator-failure",-2085139904),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59674_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema));
})], null)));
}
});
malli.generator._string_gen = (function malli$generator$_string_gen(schema,options){
return malli.generator.gen_fmap(clojure.string.join,malli.generator.gen_vector(malli.generator._min_max(schema,options),clojure.test.check.generators.char_alphanumeric));
});
malli.generator._coll_gen = (function malli$generator$_coll_gen(var_args){
var G__59683 = arguments.length;
switch (G__59683) {
case 2:
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$2 = (function (schema,options){
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$3(schema,cljs.core.identity,options);
}));

(malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$3 = (function (schema,f,options){
return malli.generator.gen_fmap(f,malli.generator.gen_vector(malli.generator._min_max(schema,options),malli.generator._child_gen(schema,options)));
}));

(malli.generator._coll_gen.cljs$lang$maxFixedArity = 3);

malli.generator.gen_vector_distinct = (function malli$generator$gen_vector_distinct(schema,m,g){
return malli.generator.gen_vector_distinct_by(schema,m,cljs.core.identity,g);
});
malli.generator._coll_distinct_gen = (function malli$generator$_coll_distinct_gen(schema,f,options){
return malli.generator.gen_fmap(f,malli.generator.gen_vector_distinct(schema,malli.generator._min_max(schema,options),malli.generator._child_gen(schema,options)));
});
malli.generator.__GT_such_that_opts = (function malli$generator$__GT_such_that_opts(schema){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100),new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p1__59684_SHARP_){
return malli.core._exception(new cljs.core.Keyword("malli.generator","such-that-failure","malli.generator/such-that-failure",599634585),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59684_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema));
})], null);
});
malli.generator.gen_such_that = (function malli$generator$gen_such_that(schema,pred,gen){
var or__5025__auto__ = malli.generator._unreachable(gen);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,malli.generator.__GT_such_that_opts(schema));
}
});
malli.generator._and_gen = (function malli$generator$_and_gen(schema,options){
return malli.generator.gen_such_that(schema,malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options),malli.generator._child_gen(schema,options));
});
malli.generator.gen_one_of = (function malli$generator$gen_one_of(options,gs){
var temp__5827__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(malli.generator._not_unreachable),gs));
if((temp__5827__auto__ == null)){
return malli.generator._never_gen(options);
} else {
var gs__$1 = temp__5827__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(gs__$1))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(gs__$1,(0));
} else {
return clojure.test.check.generators.one_of(gs__$1);
}
}
});
malli.generator._seqable_gen = (function malli$generator$_seqable_gen(schema,options){
var map__59688 = malli.generator._min_max(schema,options);
var map__59688__$1 = cljs.core.__destructure_map(map__59688);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59688__$1,new cljs.core.Keyword(null,"min","min",444991522));
var el = malli.generator._child(schema,options);
return malli.generator.gen_one_of(options,(function (){var G__59689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__59691 = cljs.core.PersistentVector.EMPTY;
if((((min == null)) || ((min === (0))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59691,malli.generator.nil_gen);
} else {
return G__59691;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__59686_SHARP_){
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$3(schema,p1__59686_SHARP_,options);
})),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.vec,cljs.core.eduction,(function (p1__59687_SHARP_){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(p1__59687_SHARP_);
})], null)),malli.generator._coll_distinct_gen(schema,cljs.core.set,options));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuple","tuple",-472667284),malli.core.type.cljs$core$IFn$_invoke$arity$1(el))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(malli.core.children.cljs$core$IFn$_invoke$arity$1(el)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59689,(function (){var vec__59692 = malli.core.children.cljs$core$IFn$_invoke$arity$1(el);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59692,(1),null);
var G__59695 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (){var or__5025__auto__ = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),k,v], null);
var G__59696 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59695,G__59696) : malli.generator.generator.call(null,G__59695,G__59696));
})());
} else {
return G__59689;
}
})());
});
malli.generator._or_gen = (function malli$generator$_or_gen(schema,options){
return malli.generator.gen_one_of(options,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59697_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__59697_SHARP_,options) : malli.generator.generator.call(null,p1__59697_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
});
malli.generator._merge_keyword_dispatch_map_into_entries = (function malli$generator$_merge_keyword_dispatch_map_into_entries(schema){
var dispatch = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
var G__59699 = schema;
if((dispatch instanceof cljs.core.Keyword)){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(G__59699,(function (p1__59698_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59700){
var vec__59701 = p__59700;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(0),null);
var e = vec__59701;
var G__59704 = e;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176),k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59704,(2),malli.util.merge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),null,k], null)], null)], null));
} else {
return G__59704;
}
}),p1__59698_SHARP_);
}),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema));
} else {
return G__59699;
}
});
malli.generator._multi_gen = (function malli$generator$_multi_gen(schema,options){
return malli.generator.gen_one_of(options,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59705_SHARP_){
var G__59706 = cljs.core.last(p1__59705_SHARP_);
var G__59707 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59706,G__59707) : malli.generator.generator.call(null,G__59706,G__59707));
}),malli.core.entries.cljs$core$IFn$_invoke$arity$2(malli.generator._merge_keyword_dispatch_map_into_entries(schema),options)));
});
malli.generator._build_map = (function malli$generator$_build_map(kvs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__59708){
var vec__59709 = p__59708;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59709,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176))) && (cljs.core.map_QMARK_(v)))){
return cljs.core.reduce_kv(cljs.core.assoc_BANG_,acc,v);
} else {
if((k == null)){
return acc;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);

}
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
});
malli.generator._entry_gen = (function malli$generator$_entry_gen(p__59713,options){
var vec__59714 = p__59713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59714,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59714,(1),null);
var G__59718 = malli.generator.gen_fmap((function (p1__59712_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__59712_SHARP_], null);
}),(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(s,options) : malli.generator.generator.call(null,s,options)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(s)))){
return malli.generator.gen_maybe(G__59718);
} else {
return G__59718;
}
});
malli.generator._map_gen = (function malli$generator$_map_gen(schema,options){
return malli.generator.gen_fmap(malli.generator._build_map,malli.generator.gen_tuple(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59719_SHARP_){
return malli.generator._entry_gen(p1__59719_SHARP_,options);
}),malli.core.entries.cljs$core$IFn$_invoke$arity$1(schema))));
});
malli.generator._map_of_gen = (function malli$generator$_map_of_gen(schema,options){
return malli.generator.gen_fmap((function (p1__59722_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__59722_SHARP_);
}),malli.generator.gen_vector_distinct_by(schema,malli.generator._min_max(schema,options),(function (p1__59721_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__59721_SHARP_,(0));
}),malli.generator.gen_tuple(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59720_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__59720_SHARP_,options) : malli.generator.generator.call(null,p1__59720_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)))));
});
malli.generator._identify_ref_schema = (function malli$generator$_identify_ref_schema(schema){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),malli.registry._schemas(malli.core._registry.cljs$core$IFn$_invoke$arity$1(malli.core._options(schema))),new cljs.core.Keyword(null,"name","name",1843675177),malli.core._ref(schema)], null);
});
malli.generator._ref_gen = (function malli$generator$_ref_gen(schema,options){
var ref_id = malli.generator._identify_ref_schema(schema);
var or__5025__auto__ = cljs.core.force(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var scalar_ref_gen = (new cljs.core.Delay((function (){
return malli.generator._never_gen(options);
}),null));
var dschema = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59724 = (function (){var G__59725 = dschema;
var G__59726 = cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null),scalar_ref_gen);
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59725,G__59726) : malli.generator.generator.call(null,G__59725,G__59726));
})();
if(cljs.core.realized_QMARK_(scalar_ref_gen)){
return clojure.test.check.generators.recursive_gen((function (p1__59723_SHARP_){
var G__59727 = dschema;
var G__59728 = cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null),p1__59723_SHARP_);
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59727,G__59728) : malli.generator.generator.call(null,G__59727,G__59728));
}),G__59724);
} else {
return G__59724;
}
}
});
malli.generator.__EQ__GT__gen = (function malli$generator$__EQ__GT__gen(schema,options){
var output_generator = (function (){var G__59729 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(schema));
var G__59730 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59729,G__59730) : malli.generator.generator.call(null,G__59729,G__59730));
})();
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null),(function() { 
var G__59846__delegate = function (_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(output_generator,options) : malli.generator.generate.call(null,output_generator,options));
};
var G__59846 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__59847__i = 0, G__59847__a = new Array(arguments.length -  0);
while (G__59847__i < G__59847__a.length) {G__59847__a[G__59847__i] = arguments[G__59847__i + 0]; ++G__59847__i;}
  _ = new cljs.core.IndexedSeq(G__59847__a,0,null);
} 
return G__59846__delegate.call(this,_);};
G__59846.cljs$lang$maxFixedArity = 0;
G__59846.cljs$lang$applyTo = (function (arglist__59848){
var _ = cljs.core.seq(arglist__59848);
return G__59846__delegate(_);
});
G__59846.cljs$core$IFn$_invoke$arity$variadic = G__59846__delegate;
return G__59846;
})()
));
});
malli.generator._function_gen = (function malli$generator$_function_gen(schema,options){
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"gen","gen",142575302),(function (p1__59732_SHARP_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(p1__59732_SHARP_,options) : malli.generator.generate.call(null,p1__59732_SHARP_,options));
})], null),null,options));
});
malli.generator._regex_generator = (function malli$generator$_regex_generator(schema,options){
var G__59733 = (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(schema,options) : malli.generator.generator.call(null,schema,options));
if(cljs.core.not(malli.core._regex_op_QMARK_(schema))){
return malli.generator.gen_tuple((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__59733],null)));
} else {
return G__59733;
}
});
malli.generator._re_entry_gen = (function malli$generator$_re_entry_gen(e,options){
return malli.generator._regex_generator(((cljs.core.vector_QMARK_(e))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,(2)):e),options);
});
malli.generator._cat_gen = (function malli$generator$_cat_gen(schema,options){
return malli.generator.gen_fcat(malli.generator.gen_tuple(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59734_SHARP_){
return malli.generator._re_entry_gen(p1__59734_SHARP_,options);
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))));
});
malli.generator._alt_gen = (function malli$generator$_alt_gen(schema,options){
return malli.generator.gen_one_of(options,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59735_SHARP_){
return malli.generator._re_entry_gen(p1__59735_SHARP_,options);
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
});
malli.generator.__QMARK__gen = (function malli$generator$__QMARK__gen(schema,options){
var child = malli.generator._child(schema,options);
var temp__5827__auto__ = malli.generator._not_unreachable((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)));
if((temp__5827__auto__ == null)){
return clojure.test.check.generators.return$(cljs.core.List.EMPTY);
} else {
var g = temp__5827__auto__;
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,clojure.test.check.generators.return$(cljs.core.List.EMPTY)], null));
} else {
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(g,(0),(1));
}
}
});
malli.generator.__STAR__gen = (function malli$generator$__STAR__gen(schema,options){
var child = malli.generator._child(schema,options);
var G__59736 = malli.generator.gen_vector(malli.generator._min_max(schema,options),(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)));
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return malli.generator.gen_fcat(G__59736);
} else {
return G__59736;
}
});
malli.generator.__PLUS__gen = (function malli$generator$__PLUS__gen(schema,options){
var child = malli.generator._child(schema,options);
var G__59740 = malli.generator.gen_vector(cljs.core.update.cljs$core$IFn$_invoke$arity$3(malli.generator._min_max(schema,options),new cljs.core.Keyword(null,"min","min",444991522),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(1))),(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)));
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return malli.generator.gen_fcat(G__59740);
} else {
return G__59740;
}
});
malli.generator._repeat_gen = (function malli$generator$_repeat_gen(schema,options){
var or__5025__auto__ = (function (){var G__59741 = malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$2(schema,options);
var G__59741__$1 = (((G__59741 == null))?null:malli.generator._not_unreachable(G__59741));
if((G__59741__$1 == null)){
return null;
} else {
var G__59742 = G__59741__$1;
if(cljs.core.truth_(malli.core._regex_op_QMARK_(malli.generator._child(schema,options)))){
return malli.generator.gen_fcat(G__59742);
} else {
return G__59742;
}
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return clojure.test.check.generators.return$(cljs.core.List.EMPTY);
}
});
malli.generator._qualified_ident_gen = (function malli$generator$_qualified_ident_gen(schema,mk_value_with_ns,value_with_ns_gen_size,pred,gen){
var temp__5823__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(temp__5823__auto__)){
var namespace_unparsed = temp__5823__auto__;
return malli.generator.gen_fmap((function (k){
var G__59743 = cljs.core.name(namespace_unparsed);
var G__59744 = cljs.core.name(k);
return (mk_value_with_ns.cljs$core$IFn$_invoke$arity$2 ? mk_value_with_ns.cljs$core$IFn$_invoke$arity$2(G__59743,G__59744) : mk_value_with_ns.call(null,G__59743,G__59744));
}),value_with_ns_gen_size);
} else {
return malli.generator.gen_such_that(schema,pred,gen);
}
});
malli.generator._qualified_keyword_gen = (function malli$generator$_qualified_keyword_gen(schema){
return malli.generator._qualified_ident_gen(schema,cljs.core.keyword,clojure.test.check.generators.keyword,cljs.core.qualified_keyword_QMARK_,clojure.test.check.generators.keyword_ns);
});
malli.generator._qualified_symbol_gen = (function malli$generator$_qualified_symbol_gen(schema){
return malli.generator._qualified_ident_gen(schema,cljs.core.symbol,clojure.test.check.generators.symbol,cljs.core.qualified_symbol_QMARK_,clojure.test.check.generators.symbol_ns);
});
malli.generator.gen_elements = (function malli$generator$gen_elements(es){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(es))){
return clojure.test.check.generators.return$(cljs.core.first(es));
} else {
return clojure.test.check.generators.elements(es);
}
});
malli.generator.double_gen = (function malli$generator$double_gen(schema,options){
return clojure.test.check.generators.double_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var props = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema,options);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","infinite?","gen/infinite?",-2017652832),false),new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","NaN?","gen/NaN?",-1917993267),false)], null);
})(),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(malli.generator._min_max(schema,options),new cljs.core.Keyword(null,"min","min",444991522),(function (p1__59745_SHARP_){
var G__59747 = p1__59745_SHARP_;
if((G__59747 == null)){
return null;
} else {
return G__59747;
}
})),new cljs.core.Keyword(null,"max","max",61366548),(function (p1__59746_SHARP_){
var G__59748 = p1__59746_SHARP_;
if((G__59748 == null)){
return null;
} else {
return G__59748;
}
}))], 0)));
});
if((typeof malli !== 'undefined') && (typeof malli.generator !== 'undefined') && (typeof malli.generator._schema_generator !== 'undefined')){
} else {
malli.generator._schema_generator = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59749 = cljs.core.get_global_hierarchy;
return (fexpr__59749.cljs$core$IFn$_invoke$arity$0 ? fexpr__59749.cljs$core$IFn$_invoke$arity$0() : fexpr__59749.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.generator","-schema-generator"),(function (schema,options){
return malli.core.type.cljs$core$IFn$_invoke$arity$2(schema,options);
}),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),(function (schema,options){
return cljs.spec.gen.alpha.gen_for_pred(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),(function (_,___$1){
return cljs.spec.gen.alpha.gen_for_pred(cljs.core.empty_QMARK_);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (schema,options){
return malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(malli.generator._child(schema,options) + (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (schema,options){
return malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),malli.generator._child(schema,options)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (schema,options){
return malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(malli.generator._child(schema,options) - (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (schema,options){
return malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),malli.generator._child(schema,options)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (schema,options){
return clojure.test.check.generators.return$(malli.generator._child(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (schema,options){
return malli.generator.gen_such_that(schema,(function (p1__59750_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__59750_SHARP_,malli.generator._child(schema,options));
}),clojure.test.check.generators.any_printable);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),(function (_,options){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),1.0E-5], null)),malli.generator.gen_fmap(cljs.core.inc,clojure.test.check.generators.nat)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),(function (_,options){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator.gen_double(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),-1.0E-5], null)),malli.generator.gen_fmap(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core._),clojure.test.check.generators.nat)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (schema,options){
return malli.generator.gen_such_that(schema,malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options),cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (schema,options){
return malli.generator._and_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"andn","andn",-872949990),(function (schema,options){
return malli.generator._and_gen(malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"and","and",-971899817),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema)),options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (schema,options){
return malli.generator._or_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"orn","orn",738436484),(function (schema,options){
return malli.generator._or_gen(malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"or","or",235744169),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema)),options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (schema,options){
return malli.generator._child_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (schema,options){
return malli.generator._map_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (schema,options){
return malli.generator._map_of_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (schema,options){
return malli.generator._multi_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (schema,options){
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$2(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (schema,options){
return malli.generator._coll_gen.cljs$core$IFn$_invoke$arity$2(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (schema,options){
return malli.generator._coll_distinct_gen(schema,cljs.core.set,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (schema,options){
return malli.generator.gen_elements(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seqable","seqable",-1305253818),(function (schema,options){
return malli.generator._seqable_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"every","every",-2060295878),(function (schema,options){
return malli.generator._seqable_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (schema,options){
return malli.generator.gen_maybe(malli.generator._child_gen(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (schema,options){
return malli.generator.gen_tuple(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59756_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__59756_SHARP_,options) : malli.generator.generator.call(null,p1__59756_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"any","any",1705907423),(function (_,___$1){
return cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"some","some",-1951079573),(function (_,___$1){
return clojure.test.check.generators.any_printable;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1){
return malli.generator.nil_gen;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (schema,options){
return malli.generator._string_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (schema,options){
return clojure.test.check.generators.large_integer_STAR_(malli.generator._min_max(schema,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (schema,options){
return malli.generator.double_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"float","float",-1732389368),(function (schema,options){
return malli.generator.double_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1){
return clojure.test.check.generators.boolean$;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1){
return clojure.test.check.generators.symbol;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (schema,_){
return malli.generator._qualified_keyword_gen(schema);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (schema,_){
return malli.generator._qualified_symbol_gen(schema);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1){
return clojure.test.check.generators.uuid;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=>","=>",1841166128),(function (schema,options){
return malli.generator.__EQ__GT__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"->","->",514830339),(function (schema,options){
return malli.generator.__EQ__GT__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (schema,options){
return malli.generator._function_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (schema,options){
return malli.generator._ref_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (schema,options){
var G__59757 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59758 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59757,G__59758) : malli.generator.generator.call(null,G__59757,G__59758));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (schema,options){
var G__59759 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59760 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59759,G__59760) : malli.generator.generator.call(null,G__59759,G__59760));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (schema,options){
var G__59761 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59762 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59761,G__59762) : malli.generator.generator.call(null,G__59761,G__59762));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (schema,options){
var G__59763 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59764 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59763,G__59764) : malli.generator.generator.call(null,G__59763,G__59764));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (schema,options){
var G__59765 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59766 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59765,G__59766) : malli.generator.generator.call(null,G__59765,G__59766));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cat","cat",-1457810207),(function (schema,options){
return malli.generator._cat_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"catn","catn",-48807277),(function (schema,options){
return malli.generator._cat_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (schema,options){
return malli.generator._alt_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"altn","altn",1717854417),(function (schema,options){
return malli.generator._alt_gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"?","?",-1703165233),(function (schema,options){
return malli.generator.__QMARK__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"*","*",-1294732318),(function (schema,options){
return malli.generator.__STAR__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"+","+",1913524883),(function (schema,options){
return malli.generator.__PLUS__gen(schema,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"repeat","repeat",832692087),(function (schema,options){
return malli.generator._repeat_gen(schema,options);
}));
malli.generator._create_from_return = (function malli$generator$_create_from_return(props){
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword("gen","return","gen/return",-1891612265))){
return clojure.test.check.generators.return$(new cljs.core.Keyword("gen","return","gen/return",-1891612265).cljs$core$IFn$_invoke$arity$1(props));
} else {
return null;
}
});
malli.generator._create_from_elements = (function malli$generator$_create_from_elements(props){
var G__59767 = new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props);
if((G__59767 == null)){
return null;
} else {
return malli.generator.gen_elements(G__59767);
}
});
(malli.generator.Generator["_"] = true);

(malli.generator._generator["_"] = (function (schema,options){
return malli.generator._schema_generator.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395),schema));
}));
malli.generator._create_from_gen = (function malli$generator$_create_from_gen(props,schema,options){
var or__5025__auto__ = new cljs.core.Keyword("gen","gen","gen/gen",142743606).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props))){
return null;
} else {
return malli.generator._generator(schema,options);
}
}
});
malli.generator._create_from_schema = (function malli$generator$_create_from_schema(props,options){
var G__59768 = new cljs.core.Keyword("gen","schema","gen/schema",-1582038959).cljs$core$IFn$_invoke$arity$1(props);
if((G__59768 == null)){
return null;
} else {
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__59768,options) : malli.generator.generator.call(null,G__59768,options));
}
});
malli.generator._create_from_fmap = (function malli$generator$_create_from_fmap(gen,props,schema,options){
var temp__5829__auto__ = new cljs.core.Keyword("gen","fmap","gen/fmap",-1585733563).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5829__auto__ == null)){
return null;
} else {
var fmap = temp__5829__auto__;
return clojure.test.check.generators.fmap(malli.core.eval.cljs$core$IFn$_invoke$arity$2(fmap,(function (){var or__5025__auto__ = options;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
}
})()),gen);
}
});
malli.generator._create = (function malli$generator$_create(schema,options){
var props = malli.impl.util._merge(malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
var gen = (function (){var or__5025__auto__ = malli.generator._create_from_return(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = malli.generator._create_from_elements(props);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = malli.generator._create_from_schema(props,options);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = malli.generator._create_from_gen(props,schema,options);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","no-generator","malli.generator/no-generator",934332770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
}
}
}
}
})();
var or__5025__auto__ = malli.generator._create_from_fmap(gen,props,schema,options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return gen;
}
});
malli.generator.generator = (function malli$generator$generator(var_args){
var G__59771 = arguments.length;
switch (G__59771) {
case 1:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generator.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
if(cljs.core.truth_(new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558).cljs$core$IFn$_invoke$arity$1(options))){
return malli.generator._create(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),options);
} else {
return malli.core._cached(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),new cljs.core.Keyword(null,"generator","generator",-572962281),(function (p1__59769_SHARP_){
return malli.generator._create(p1__59769_SHARP_,options);
}));
}
}));

(malli.generator.generator.cljs$lang$maxFixedArity = 2);

malli.generator.generate = (function malli$generator$generate(var_args){
var G__59773 = arguments.length;
switch (G__59773) {
case 1:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generate.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.generate.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__59774){
var map__59775 = p__59774;
var map__59775__$1 = cljs.core.__destructure_map(map__59775);
var options = map__59775__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59775__$1,new cljs.core.Keyword(null,"size","size",1098693007),(30));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,malli.generator._random(seed),size));
}));

(malli.generator.generate.cljs$lang$maxFixedArity = 2);

malli.generator.sample = (function malli$generator$sample(var_args){
var G__59779 = arguments.length;
switch (G__59779) {
case 1:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.sample.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.sample.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__59781){
var map__59782 = p__59781;
var map__59782__$1 = cljs.core.__destructure_map(map__59782);
var options = map__59782__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59782__$1,new cljs.core.Keyword(null,"size","size",1098693007),(10));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__59776_SHARP_,p2__59777_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,p1__59776_SHARP_,p2__59777_SHARP_));
}),clojure.test.check.generators.lazy_random_states(malli.generator._random(seed)),clojure.test.check.generators.make_size_range_seq(size)));
}));

(malli.generator.sample.cljs$lang$maxFixedArity = 2);

malli.generator.function_checker = (function malli$generator$function_checker(var_args){
var G__59787 = arguments.length;
switch (G__59787) {
case 1:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,p__59788){
var map__59789 = p__59788;
var map__59789__$1 = cljs.core.__destructure_map(map__59789);
var options = map__59789__$1;
var _EQ__GT_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59789__$1,new cljs.core.Keyword("malli.generator","=>iterations","malli.generator/=>iterations",-1726832707),(100));
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var _try = (function (f){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),true], null);
}catch (e59790){if((e59790 instanceof Error)){
var e = e59790;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,false], null);
} else {
throw e59790;

}
}});
var check = (function (schema__$1){
var map__59791 = malli.core._function_info(schema__$1);
var map__59791__$1 = cljs.core.__destructure_map(map__59791);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var input_generator = malli.generator.generator.cljs$core$IFn$_invoke$arity$2(input,options);
var valid_output_QMARK_ = malli.core.validator.cljs$core$IFn$_invoke$arity$2(output,options);
var valid_guard_QMARK_ = (cljs.core.truth_(guard)?malli.core.validator.cljs$core$IFn$_invoke$arity$2(guard,options):cljs.core.constantly(true));
var validate = (function (f,args){
var $ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var and__5023__auto__ = (valid_output_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_output_QMARK_.cljs$core$IFn$_invoke$arity$1($) : valid_output_QMARK_.call(null,$));
if(cljs.core.truth_(and__5023__auto__)){
var G__59792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,$], null);
return (valid_guard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_guard_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59792) : valid_guard_QMARK_.call(null,G__59792));
} else {
return and__5023__auto__;
}
});
return (function (f){
var map__59793 = clojure.test.check.quick_check(_EQ__GT_iterations,clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_generator], null),(function (p1__59783_SHARP_){
return validate(f,p1__59783_SHARP_);
})));
var map__59793__$1 = cljs.core.__destructure_map(map__59793);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var shrunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412));
var smallest = cljs.core.first(new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(shrunk));
if(result === true){
return null;
} else {
var explain_input = malli.core.explain.cljs$core$IFn$_invoke$arity$2(input,smallest);
var vec__59794 = (cljs.core.truth_(explain_input)?null:_try((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,smallest);
})));
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59794,(0),null);
var success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59794,(1),null);
var explain_output = (cljs.core.truth_((function (){var and__5023__auto__ = success;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(explain_input);
} else {
return and__5023__auto__;
}
})())?malli.core.explain.cljs$core$IFn$_invoke$arity$2(output,result__$1):null);
var explain_guard = (cljs.core.truth_((function (){var and__5023__auto__ = success;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = guard;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(explain_output);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?malli.core.explain.cljs$core$IFn$_invoke$arity$2(guard,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [smallest,result__$1], null)):null);
var G__59797 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shrunk,new cljs.core.Keyword("malli.core","result","malli.core/result",1538632379),result__$1);
var G__59797__$1 = (cljs.core.truth_(explain_input)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59797,new cljs.core.Keyword("malli.core","explain-input","malli.core/explain-input",1441627811),explain_input):G__59797);
var G__59797__$2 = (cljs.core.truth_(explain_output)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59797__$1,new cljs.core.Keyword("malli.core","explain-output","malli.core/explain-output",-124321573),explain_output):G__59797__$1);
var G__59797__$3 = (cljs.core.truth_(explain_guard)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59797__$2,new cljs.core.Keyword("malli.core","explain-guard","malli.core/explain-guard",-1119572847),explain_guard):G__59797__$2);
if(cljs.core.truth_(cljs.core.ex_message(result__$1))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59797__$3,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.ex_message),new cljs.core.Keyword(null,"result-data","result-data",-1724248844));
} else {
return G__59797__$3;
}
}
});
});
if(cljs.core.truth_(malli.core._function_info(schema))){
return check(schema);
} else {
if(cljs.core.truth_(malli.core._function_schema_QMARK_(schema))){
var checkers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59784_SHARP_){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(p1__59784_SHARP_,options);
}),malli.core._function_schema_arities(schema));
return (function (x){
return cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59785_SHARP_){
return (p1__59785_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59785_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__59785_SHARP_.call(null,x));
}),checkers));
});
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-function-schema","malli.generator/invalid-function-schema",-1857583937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core._type(schema)], null));
}
}
}));

(malli.generator.function_checker.cljs$lang$maxFixedArity = 2);

malli.generator.check = (function malli$generator$check(var_args){
var G__59801 = arguments.length;
switch (G__59801) {
case 2:
return malli.generator.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.generator.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.check.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.generator.check.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.generator.check.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.core.explain.cljs$core$IFn$_invoke$arity$2(malli.core._update_options(schema,(function (p1__59799_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59799_SHARP_,new cljs.core.Keyword("malli.core","function-checker","malli.core/function-checker",-792030936),malli.generator.function_checker);
})),f);
}));

(malli.generator.check.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=malli.generator.js.map
