goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43443 = arguments.length;
var i__5750__auto___43444 = (0);
while(true){
if((i__5750__auto___43444 < len__5749__auto___43443)){
args__5755__auto__.push((arguments[i__5750__auto___43444]));

var G__43445 = (i__5750__auto___43444 + (1));
i__5750__auto___43444 = G__43445;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__43433){
var map__43434 = p__43433;
var map__43434__$1 = cljs.core.__destructure_map(map__43434);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43434__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5823__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5823__auto__){
var vec__43439 = temp__5823__auto__;
var seq__43440 = cljs.core.seq(vec__43439);
var first__43441 = cljs.core.first(seq__43440);
var seq__43440__$1 = cljs.core.next(seq__43440);
var first = first__43441;
var rest = seq__43440__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq43425){
var G__43426 = cljs.core.first(seq43425);
var seq43425__$1 = cljs.core.next(seq43425);
var G__43427 = cljs.core.first(seq43425__$1);
var seq43425__$2 = cljs.core.next(seq43425__$1);
var G__43428 = cljs.core.first(seq43425__$2);
var seq43425__$3 = cljs.core.next(seq43425__$2);
var G__43432 = cljs.core.first(seq43425__$3);
var seq43425__$4 = cljs.core.next(seq43425__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43426,G__43427,G__43428,G__43432,seq43425__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5025__auto__ = (function (){var G__43442 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__43442) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__43442));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
