goog.provide('spec_tools.openapi.core');
spec_tools.openapi.core.spec_dispatch = (function spec_tools$openapi$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.accept_spec !== 'undefined')){
} else {
spec_tools.openapi.core.accept_spec = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54509 = cljs.core.get_global_hierarchy;
return (fexpr__54509.cljs$core$IFn$_invoke$arity$0 ? fexpr__54509.cljs$core$IFn$_invoke$arity$0() : fexpr__54509.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","accept-spec"),spec_tools.openapi.core.spec_dispatch,new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","sequential?","clojure.core/sequential?",1943138316,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enum","enum",1679018432),children,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),(function (dispatch,spec,children,options){
var vec__54511 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54511,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54511,(1),null);
var openapi_meta = spec_tools.impl.unlift_keys(data,"openapi");
var or__5025__auto__ = new cljs.core.Keyword(null,"openapi","openapi",1860088859).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options),openapi_meta], 0));
}
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),(function (dispatch,spec,children,options){
return spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options);
}));
/**
 * Generate OpenAPI3 schema matching the given clojure.spec spec.
 */
spec_tools.openapi.core.transform = (function spec_tools$openapi$core$transform(var_args){
var G__54515 = arguments.length;
switch (G__54515) {
case 1:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.openapi.core.accept_spec,options);
}));

(spec_tools.openapi.core.transform.cljs$lang$maxFixedArity = 2);

spec_tools.openapi.core.is_nilable_QMARK_ = (function spec_tools$openapi$core$is_nilable_QMARK_(spec){
return ((cljs.core.contains_QMARK_(spec,new cljs.core.Keyword(null,"oneOf","oneOf",1209080187))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)))) && (cljs.core.contains_QMARK_(cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)),"null")))));
});
spec_tools.openapi.core.extract_nilable = (function spec_tools$openapi$core$extract_nilable(spec){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54520_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54520_SHARP_),"null");
}),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)));
});
spec_tools.openapi.core.extract_single_param = (function spec_tools$openapi$core$extract_single_param(in$,spec){
var nilable_QMARK_ = spec_tools.openapi.core.is_nilable_QMARK_(spec);
var new_spec = ((nilable_QMARK_)?spec_tools.openapi.core.extract_nilable(spec):spec);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new_spec);
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__54528 = in$;
var G__54528__$1 = (((G__54528 instanceof cljs.core.Keyword))?G__54528.fqn:null);
switch (G__54528__$1) {
case "path":
return true;

break;
default:
return (!(nilable_QMARK_));

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),new_spec], null);
});
spec_tools.openapi.core.extract_object_param = (function spec_tools$openapi$core$extract_object_param(in$,p__54530){
var map__54531 = p__54530;
var map__54531__$1 = cljs.core.__destructure_map(map__54531);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__54532){
var vec__54533 = p__54532;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54533,(0),null);
var map__54536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54533,(1),null);
var map__54536__$1 = cljs.core.__destructure_map(map__54536);
var schema = map__54536__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54536__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5025__auto__ = description;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__54538 = in$;
var G__54538__$1 = (((G__54538 instanceof cljs.core.Keyword))?G__54538.fqn:null);
switch (G__54538__$1) {
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(cljs.core.set(required),k);

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
}),properties);
});
spec_tools.openapi.core.extract_parameter = (function spec_tools$openapi$core$extract_parameter(in$,spec){
var parameter_spec = spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec);
var object_QMARK_ = ((cljs.core.contains_QMARK_(parameter_spec,new cljs.core.Keyword(null,"properties","properties",685819552))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parameter_spec))));
if(object_QMARK_){
return spec_tools.openapi.core.extract_object_param(in$,parameter_spec);
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[spec_tools.openapi.core.extract_single_param(in$,parameter_spec)],null));
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.expand !== 'undefined')){
} else {
spec_tools.openapi.core.expand = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54545 = cljs.core.get_global_hierarchy;
return (fexpr__54545.cljs$core$IFn$_invoke$arity$0 ? fexpr__54545.cljs$core$IFn$_invoke$arity$0() : fexpr__54545.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","schemas","spec-tools.openapi.core/schemas",-459896419),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5503__auto__ = (function spec_tools$openapi$core$iter__54546(s__54547){
return (new cljs.core.LazySeq(null,(function (){
var s__54547__$1 = s__54547;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54547__$1);
if(temp__5825__auto__){
var s__54547__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54547__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__54547__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__54549 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__54548 = (0);
while(true){
if((i__54548 < size__5502__auto__)){
var vec__54578 = cljs.core._nth(c__5501__auto__,i__54548);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54578,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54578,(1),null);
cljs.core.chunk_append(b__54549,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]));

var G__54641 = (i__54548 + (1));
i__54548 = G__54641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54549),spec_tools$openapi$core$iter__54546(cljs.core.chunk_rest(s__54547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54549),null);
}
} else {
var vec__54585 = cljs.core.first(s__54547__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54585,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54585,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]),spec_tools$openapi$core$iter__54546(cljs.core.rest(s__54547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","content","spec-tools.openapi.core/content",-1096703814),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5503__auto__ = (function spec_tools$openapi$core$iter__54591(s__54592){
return (new cljs.core.LazySeq(null,(function (){
var s__54592__$1 = s__54592;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54592__$1);
if(temp__5825__auto__){
var s__54592__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54592__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__54592__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__54594 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__54593 = (0);
while(true){
if((i__54593 < size__5502__auto__)){
var vec__54598 = cljs.core._nth(c__5501__auto__,i__54593);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(1),null);
cljs.core.chunk_append(b__54594,cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]));

var G__54646 = (i__54593 + (1));
i__54593 = G__54646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54594),spec_tools$openapi$core$iter__54591(cljs.core.chunk_rest(s__54592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54594),null);
}
} else {
var vec__54601 = cljs.core.first(s__54592__$2);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54601,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54601,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]),spec_tools$openapi$core$iter__54591(cljs.core.rest(s__54592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","parameters","spec-tools.openapi.core/parameters",1686119738),(function (_,v,acc,___$1){
var old = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__54614){
var vec__54615 = p__54614;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54615,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54615,(1),null);
return spec_tools.openapi.core.extract_parameter(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54618,p){
var vec__54619 = p__54618;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(1),null);
var acc__$1 = vec__54619;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.openapi.core","headers","spec-tools.openapi.core/headers",336203721),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5503__auto__ = (function spec_tools$openapi$core$iter__54622(s__54623){
return (new cljs.core.LazySeq(null,(function (){
var s__54623__$1 = s__54623;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54623__$1);
if(temp__5825__auto__){
var s__54623__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54623__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__54623__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__54625 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__54624 = (0);
while(true){
if((i__54624 < size__5502__auto__)){
var vec__54628 = cljs.core._nth(c__5501__auto__,i__54624);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(1),null);
cljs.core.chunk_append(b__54625,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]));

var G__54647 = (i__54624 + (1));
i__54624 = G__54647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54625),spec_tools$openapi$core$iter__54622(cljs.core.chunk_rest(s__54623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54625),null);
}
} else {
var vec__54631 = cljs.core.first(s__54623__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54631,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54631,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]),spec_tools$openapi$core$iter__54622(cljs.core.rest(s__54623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand_qualified_keywords = (function spec_tools$openapi$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(spec_tools.openapi.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),spec_tools.openapi.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a OpenAPI3 spec. Input data must conform to the
 *   Swagger3 Spec (https://swagger.io/specification/) with a exception that it
 *   can have any qualified keywords which are expanded with the
 *   `spec-tools.openapi.core/expand` multimethod.
 */
spec_tools.openapi.core.openapi_spec = (function spec_tools$openapi$core$openapi_spec(var_args){
var G__54635 = arguments.length;
switch (G__54635) {
case 1:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.openapi.core.expand_qualified_keywords(x,options);
}));

(spec_tools.openapi.core.openapi_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.openapi.core.js.map
