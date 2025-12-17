var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./sci.impl.types.js");
require("./sci.impl.utils.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("sci.impl.fns.js");

goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__40961 = arguments.length;
switch (G__40961) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__40962 = fixed_arity;
switch (G__40962) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__40963){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__40963);

while(true){
var ret__40138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40138__auto__)){
continue;
} else {
return ret__40138__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__40963 = null;
if (arguments.length > 0) {
var G__41544__i = 0, G__41544__a = new Array(arguments.length -  0);
while (G__41544__i < G__41544__a.length) {G__41544__a[G__41544__i] = arguments[G__41544__i + 0]; ++G__41544__i;}
  G__40963 = new cljs.core.IndexedSeq(G__41544__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__40963);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__41545){
var G__40963 = cljs.core.seq(arglist__41545);
return sci$impl$fns$arity_0__delegate(G__40963);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__40964,G__40965){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40964);

(invoc_array[vararg_idx] = G__40965);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__40964,var_args){
var G__40965 = null;
if (arguments.length > 1) {
var G__41548__i = 0, G__41548__a = new Array(arguments.length -  1);
while (G__41548__i < G__41548__a.length) {G__41548__a[G__41548__i] = arguments[G__41548__i + 1]; ++G__41548__i;}
  G__40965 = new cljs.core.IndexedSeq(G__41548__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__40964,G__40965);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__41549){
var G__40964 = cljs.core.first(arglist__41549);
var G__40965 = cljs.core.rest(arglist__41549);
return sci$impl$fns$arity_1__delegate(G__40964,G__40965);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__40966,G__40967,G__40968){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40966);

(invoc_array[(1)] = G__40967);

(invoc_array[vararg_idx] = G__40968);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__40966,G__40967,var_args){
var G__40968 = null;
if (arguments.length > 2) {
var G__41552__i = 0, G__41552__a = new Array(arguments.length -  2);
while (G__41552__i < G__41552__a.length) {G__41552__a[G__41552__i] = arguments[G__41552__i + 2]; ++G__41552__i;}
  G__40968 = new cljs.core.IndexedSeq(G__41552__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__40966,G__40967,G__40968);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__41553){
var G__40966 = cljs.core.first(arglist__41553);
arglist__41553 = cljs.core.next(arglist__41553);
var G__40967 = cljs.core.first(arglist__41553);
var G__40968 = cljs.core.rest(arglist__41553);
return sci$impl$fns$arity_2__delegate(G__40966,G__40967,G__40968);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__40969,G__40970,G__40971,G__40972){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40969);

(invoc_array[(1)] = G__40970);

(invoc_array[(2)] = G__40971);

(invoc_array[vararg_idx] = G__40972);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__40969,G__40970,G__40971,var_args){
var G__40972 = null;
if (arguments.length > 3) {
var G__41554__i = 0, G__41554__a = new Array(arguments.length -  3);
while (G__41554__i < G__41554__a.length) {G__41554__a[G__41554__i] = arguments[G__41554__i + 3]; ++G__41554__i;}
  G__40972 = new cljs.core.IndexedSeq(G__41554__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__40969,G__40970,G__40971,G__40972);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__41555){
var G__40969 = cljs.core.first(arglist__41555);
arglist__41555 = cljs.core.next(arglist__41555);
var G__40970 = cljs.core.first(arglist__41555);
arglist__41555 = cljs.core.next(arglist__41555);
var G__40971 = cljs.core.first(arglist__41555);
var G__40972 = cljs.core.rest(arglist__41555);
return sci$impl$fns$arity_3__delegate(G__40969,G__40970,G__40971,G__40972);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__40973,G__40974,G__40975,G__40976,G__40977){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40973);

(invoc_array[(1)] = G__40974);

(invoc_array[(2)] = G__40975);

(invoc_array[(3)] = G__40976);

(invoc_array[vararg_idx] = G__40977);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__40973,G__40974,G__40975,G__40976,var_args){
var G__40977 = null;
if (arguments.length > 4) {
var G__41556__i = 0, G__41556__a = new Array(arguments.length -  4);
while (G__41556__i < G__41556__a.length) {G__41556__a[G__41556__i] = arguments[G__41556__i + 4]; ++G__41556__i;}
  G__40977 = new cljs.core.IndexedSeq(G__41556__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__40973,G__40974,G__40975,G__40976,G__40977);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__41557){
var G__40973 = cljs.core.first(arglist__41557);
arglist__41557 = cljs.core.next(arglist__41557);
var G__40974 = cljs.core.first(arglist__41557);
arglist__41557 = cljs.core.next(arglist__41557);
var G__40975 = cljs.core.first(arglist__41557);
arglist__41557 = cljs.core.next(arglist__41557);
var G__40976 = cljs.core.first(arglist__41557);
var G__40977 = cljs.core.rest(arglist__41557);
return sci$impl$fns$arity_4__delegate(G__40973,G__40974,G__40975,G__40976,G__40977);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__40978,G__40979,G__40980,G__40981,G__40982,G__40983){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40978);

(invoc_array[(1)] = G__40979);

(invoc_array[(2)] = G__40980);

(invoc_array[(3)] = G__40981);

(invoc_array[(4)] = G__40982);

(invoc_array[vararg_idx] = G__40983);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__40978,G__40979,G__40980,G__40981,G__40982,var_args){
var G__40983 = null;
if (arguments.length > 5) {
var G__41558__i = 0, G__41558__a = new Array(arguments.length -  5);
while (G__41558__i < G__41558__a.length) {G__41558__a[G__41558__i] = arguments[G__41558__i + 5]; ++G__41558__i;}
  G__40983 = new cljs.core.IndexedSeq(G__41558__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__41559){
var G__40978 = cljs.core.first(arglist__41559);
arglist__41559 = cljs.core.next(arglist__41559);
var G__40979 = cljs.core.first(arglist__41559);
arglist__41559 = cljs.core.next(arglist__41559);
var G__40980 = cljs.core.first(arglist__41559);
arglist__41559 = cljs.core.next(arglist__41559);
var G__40981 = cljs.core.first(arglist__41559);
arglist__41559 = cljs.core.next(arglist__41559);
var G__40982 = cljs.core.first(arglist__41559);
var G__40983 = cljs.core.rest(arglist__41559);
return sci$impl$fns$arity_5__delegate(G__40978,G__40979,G__40980,G__40981,G__40982,G__40983);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40984);

(invoc_array[(1)] = G__40985);

(invoc_array[(2)] = G__40986);

(invoc_array[(3)] = G__40987);

(invoc_array[(4)] = G__40988);

(invoc_array[(5)] = G__40989);

(invoc_array[vararg_idx] = G__40990);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,var_args){
var G__40990 = null;
if (arguments.length > 6) {
var G__41560__i = 0, G__41560__a = new Array(arguments.length -  6);
while (G__41560__i < G__41560__a.length) {G__41560__a[G__41560__i] = arguments[G__41560__i + 6]; ++G__41560__i;}
  G__40990 = new cljs.core.IndexedSeq(G__41560__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__41561){
var G__40984 = cljs.core.first(arglist__41561);
arglist__41561 = cljs.core.next(arglist__41561);
var G__40985 = cljs.core.first(arglist__41561);
arglist__41561 = cljs.core.next(arglist__41561);
var G__40986 = cljs.core.first(arglist__41561);
arglist__41561 = cljs.core.next(arglist__41561);
var G__40987 = cljs.core.first(arglist__41561);
arglist__41561 = cljs.core.next(arglist__41561);
var G__40988 = cljs.core.first(arglist__41561);
arglist__41561 = cljs.core.next(arglist__41561);
var G__40989 = cljs.core.first(arglist__41561);
var G__40990 = cljs.core.rest(arglist__41561);
return sci$impl$fns$arity_6__delegate(G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40991);

(invoc_array[(1)] = G__40992);

(invoc_array[(2)] = G__40993);

(invoc_array[(3)] = G__40994);

(invoc_array[(4)] = G__40995);

(invoc_array[(5)] = G__40996);

(invoc_array[(6)] = G__40997);

(invoc_array[vararg_idx] = G__40998);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,var_args){
var G__40998 = null;
if (arguments.length > 7) {
var G__41565__i = 0, G__41565__a = new Array(arguments.length -  7);
while (G__41565__i < G__41565__a.length) {G__41565__a[G__41565__i] = arguments[G__41565__i + 7]; ++G__41565__i;}
  G__40998 = new cljs.core.IndexedSeq(G__41565__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__41566){
var G__40991 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40992 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40993 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40994 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40995 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40996 = cljs.core.first(arglist__41566);
arglist__41566 = cljs.core.next(arglist__41566);
var G__40997 = cljs.core.first(arglist__41566);
var G__40998 = cljs.core.rest(arglist__41566);
return sci$impl$fns$arity_7__delegate(G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__40999,G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40999);

(invoc_array[(1)] = G__41000);

(invoc_array[(2)] = G__41001);

(invoc_array[(3)] = G__41002);

(invoc_array[(4)] = G__41003);

(invoc_array[(5)] = G__41004);

(invoc_array[(6)] = G__41005);

(invoc_array[(7)] = G__41006);

(invoc_array[vararg_idx] = G__41007);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__40999,G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,var_args){
var G__41007 = null;
if (arguments.length > 8) {
var G__41568__i = 0, G__41568__a = new Array(arguments.length -  8);
while (G__41568__i < G__41568__a.length) {G__41568__a[G__41568__i] = arguments[G__41568__i + 8]; ++G__41568__i;}
  G__41007 = new cljs.core.IndexedSeq(G__41568__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__41569){
var G__40999 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41000 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41001 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41002 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41003 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41004 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41005 = cljs.core.first(arglist__41569);
arglist__41569 = cljs.core.next(arglist__41569);
var G__41006 = cljs.core.first(arglist__41569);
var G__41007 = cljs.core.rest(arglist__41569);
return sci$impl$fns$arity_8__delegate(G__40999,G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41008);

(invoc_array[(1)] = G__41009);

(invoc_array[(2)] = G__41010);

(invoc_array[(3)] = G__41011);

(invoc_array[(4)] = G__41012);

(invoc_array[(5)] = G__41013);

(invoc_array[(6)] = G__41014);

(invoc_array[(7)] = G__41015);

(invoc_array[(8)] = G__41016);

(invoc_array[vararg_idx] = G__41017);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,var_args){
var G__41017 = null;
if (arguments.length > 9) {
var G__41570__i = 0, G__41570__a = new Array(arguments.length -  9);
while (G__41570__i < G__41570__a.length) {G__41570__a[G__41570__i] = arguments[G__41570__i + 9]; ++G__41570__i;}
  G__41017 = new cljs.core.IndexedSeq(G__41570__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__41571){
var G__41008 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41009 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41010 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41011 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41012 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41013 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41014 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41015 = cljs.core.first(arglist__41571);
arglist__41571 = cljs.core.next(arglist__41571);
var G__41016 = cljs.core.first(arglist__41571);
var G__41017 = cljs.core.rest(arglist__41571);
return sci$impl$fns$arity_9__delegate(G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41018);

(invoc_array[(1)] = G__41019);

(invoc_array[(2)] = G__41020);

(invoc_array[(3)] = G__41021);

(invoc_array[(4)] = G__41022);

(invoc_array[(5)] = G__41023);

(invoc_array[(6)] = G__41024);

(invoc_array[(7)] = G__41025);

(invoc_array[(8)] = G__41026);

(invoc_array[(9)] = G__41027);

(invoc_array[vararg_idx] = G__41028);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,var_args){
var G__41028 = null;
if (arguments.length > 10) {
var G__41594__i = 0, G__41594__a = new Array(arguments.length -  10);
while (G__41594__i < G__41594__a.length) {G__41594__a[G__41594__i] = arguments[G__41594__i + 10]; ++G__41594__i;}
  G__41028 = new cljs.core.IndexedSeq(G__41594__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41595){
var G__41018 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41019 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41020 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41021 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41022 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41023 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41024 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41025 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41026 = cljs.core.first(arglist__41595);
arglist__41595 = cljs.core.next(arglist__41595);
var G__41027 = cljs.core.first(arglist__41595);
var G__41028 = cljs.core.rest(arglist__41595);
return sci$impl$fns$arity_10__delegate(G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41033);

(invoc_array[(1)] = G__41034);

(invoc_array[(2)] = G__41035);

(invoc_array[(3)] = G__41036);

(invoc_array[(4)] = G__41037);

(invoc_array[(5)] = G__41038);

(invoc_array[(6)] = G__41039);

(invoc_array[(7)] = G__41040);

(invoc_array[(8)] = G__41041);

(invoc_array[(9)] = G__41042);

(invoc_array[(10)] = G__41043);

(invoc_array[vararg_idx] = G__41044);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,var_args){
var G__41044 = null;
if (arguments.length > 11) {
var G__41598__i = 0, G__41598__a = new Array(arguments.length -  11);
while (G__41598__i < G__41598__a.length) {G__41598__a[G__41598__i] = arguments[G__41598__i + 11]; ++G__41598__i;}
  G__41044 = new cljs.core.IndexedSeq(G__41598__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41599){
var G__41033 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41034 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41035 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41036 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41037 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41038 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41039 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41040 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41041 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41042 = cljs.core.first(arglist__41599);
arglist__41599 = cljs.core.next(arglist__41599);
var G__41043 = cljs.core.first(arglist__41599);
var G__41044 = cljs.core.rest(arglist__41599);
return sci$impl$fns$arity_11__delegate(G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41045);

(invoc_array[(1)] = G__41046);

(invoc_array[(2)] = G__41047);

(invoc_array[(3)] = G__41048);

(invoc_array[(4)] = G__41049);

(invoc_array[(5)] = G__41050);

(invoc_array[(6)] = G__41051);

(invoc_array[(7)] = G__41052);

(invoc_array[(8)] = G__41053);

(invoc_array[(9)] = G__41054);

(invoc_array[(10)] = G__41055);

(invoc_array[(11)] = G__41056);

(invoc_array[vararg_idx] = G__41057);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,var_args){
var G__41057 = null;
if (arguments.length > 12) {
var G__41611__i = 0, G__41611__a = new Array(arguments.length -  12);
while (G__41611__i < G__41611__a.length) {G__41611__a[G__41611__i] = arguments[G__41611__i + 12]; ++G__41611__i;}
  G__41057 = new cljs.core.IndexedSeq(G__41611__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41616){
var G__41045 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41046 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41047 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41048 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41049 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41050 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41051 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41052 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41053 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41054 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41055 = cljs.core.first(arglist__41616);
arglist__41616 = cljs.core.next(arglist__41616);
var G__41056 = cljs.core.first(arglist__41616);
var G__41057 = cljs.core.rest(arglist__41616);
return sci$impl$fns$arity_12__delegate(G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41058);

(invoc_array[(1)] = G__41059);

(invoc_array[(2)] = G__41060);

(invoc_array[(3)] = G__41061);

(invoc_array[(4)] = G__41062);

(invoc_array[(5)] = G__41063);

(invoc_array[(6)] = G__41064);

(invoc_array[(7)] = G__41065);

(invoc_array[(8)] = G__41066);

(invoc_array[(9)] = G__41067);

(invoc_array[(10)] = G__41068);

(invoc_array[(11)] = G__41069);

(invoc_array[(12)] = G__41070);

(invoc_array[vararg_idx] = G__41071);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,var_args){
var G__41071 = null;
if (arguments.length > 13) {
var G__41693__i = 0, G__41693__a = new Array(arguments.length -  13);
while (G__41693__i < G__41693__a.length) {G__41693__a[G__41693__i] = arguments[G__41693__i + 13]; ++G__41693__i;}
  G__41071 = new cljs.core.IndexedSeq(G__41693__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41696){
var G__41058 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41059 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41060 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41061 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41062 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41063 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41064 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41065 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41066 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41067 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41068 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41069 = cljs.core.first(arglist__41696);
arglist__41696 = cljs.core.next(arglist__41696);
var G__41070 = cljs.core.first(arglist__41696);
var G__41071 = cljs.core.rest(arglist__41696);
return sci$impl$fns$arity_13__delegate(G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41072);

(invoc_array[(1)] = G__41073);

(invoc_array[(2)] = G__41074);

(invoc_array[(3)] = G__41075);

(invoc_array[(4)] = G__41076);

(invoc_array[(5)] = G__41077);

(invoc_array[(6)] = G__41078);

(invoc_array[(7)] = G__41079);

(invoc_array[(8)] = G__41080);

(invoc_array[(9)] = G__41081);

(invoc_array[(10)] = G__41082);

(invoc_array[(11)] = G__41083);

(invoc_array[(12)] = G__41084);

(invoc_array[(13)] = G__41085);

(invoc_array[vararg_idx] = G__41086);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,var_args){
var G__41086 = null;
if (arguments.length > 14) {
var G__41707__i = 0, G__41707__a = new Array(arguments.length -  14);
while (G__41707__i < G__41707__a.length) {G__41707__a[G__41707__i] = arguments[G__41707__i + 14]; ++G__41707__i;}
  G__41086 = new cljs.core.IndexedSeq(G__41707__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41708){
var G__41072 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41073 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41074 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41075 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41076 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41077 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41078 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41079 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41080 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41081 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41082 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41083 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41084 = cljs.core.first(arglist__41708);
arglist__41708 = cljs.core.next(arglist__41708);
var G__41085 = cljs.core.first(arglist__41708);
var G__41086 = cljs.core.rest(arglist__41708);
return sci$impl$fns$arity_14__delegate(G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41087);

(invoc_array[(1)] = G__41088);

(invoc_array[(2)] = G__41089);

(invoc_array[(3)] = G__41090);

(invoc_array[(4)] = G__41091);

(invoc_array[(5)] = G__41092);

(invoc_array[(6)] = G__41093);

(invoc_array[(7)] = G__41094);

(invoc_array[(8)] = G__41095);

(invoc_array[(9)] = G__41096);

(invoc_array[(10)] = G__41097);

(invoc_array[(11)] = G__41098);

(invoc_array[(12)] = G__41099);

(invoc_array[(13)] = G__41100);

(invoc_array[(14)] = G__41101);

(invoc_array[vararg_idx] = G__41102);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,var_args){
var G__41102 = null;
if (arguments.length > 15) {
var G__41721__i = 0, G__41721__a = new Array(arguments.length -  15);
while (G__41721__i < G__41721__a.length) {G__41721__a[G__41721__i] = arguments[G__41721__i + 15]; ++G__41721__i;}
  G__41102 = new cljs.core.IndexedSeq(G__41721__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41722){
var G__41087 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41088 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41089 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41090 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41091 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41092 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41093 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41094 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41095 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41096 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41097 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41098 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41099 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41100 = cljs.core.first(arglist__41722);
arglist__41722 = cljs.core.next(arglist__41722);
var G__41101 = cljs.core.first(arglist__41722);
var G__41102 = cljs.core.rest(arglist__41722);
return sci$impl$fns$arity_15__delegate(G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41103);

(invoc_array[(1)] = G__41104);

(invoc_array[(2)] = G__41105);

(invoc_array[(3)] = G__41106);

(invoc_array[(4)] = G__41107);

(invoc_array[(5)] = G__41108);

(invoc_array[(6)] = G__41109);

(invoc_array[(7)] = G__41110);

(invoc_array[(8)] = G__41111);

(invoc_array[(9)] = G__41112);

(invoc_array[(10)] = G__41113);

(invoc_array[(11)] = G__41114);

(invoc_array[(12)] = G__41115);

(invoc_array[(13)] = G__41116);

(invoc_array[(14)] = G__41117);

(invoc_array[(15)] = G__41118);

(invoc_array[vararg_idx] = G__41119);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,var_args){
var G__41119 = null;
if (arguments.length > 16) {
var G__41723__i = 0, G__41723__a = new Array(arguments.length -  16);
while (G__41723__i < G__41723__a.length) {G__41723__a[G__41723__i] = arguments[G__41723__i + 16]; ++G__41723__i;}
  G__41119 = new cljs.core.IndexedSeq(G__41723__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41724){
var G__41103 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41104 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41105 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41106 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41107 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41108 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41109 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41110 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41111 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41112 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41113 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41114 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41115 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41116 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41117 = cljs.core.first(arglist__41724);
arglist__41724 = cljs.core.next(arglist__41724);
var G__41118 = cljs.core.first(arglist__41724);
var G__41119 = cljs.core.rest(arglist__41724);
return sci$impl$fns$arity_16__delegate(G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41120);

(invoc_array[(1)] = G__41121);

(invoc_array[(2)] = G__41122);

(invoc_array[(3)] = G__41123);

(invoc_array[(4)] = G__41124);

(invoc_array[(5)] = G__41125);

(invoc_array[(6)] = G__41126);

(invoc_array[(7)] = G__41127);

(invoc_array[(8)] = G__41128);

(invoc_array[(9)] = G__41129);

(invoc_array[(10)] = G__41130);

(invoc_array[(11)] = G__41131);

(invoc_array[(12)] = G__41132);

(invoc_array[(13)] = G__41133);

(invoc_array[(14)] = G__41134);

(invoc_array[(15)] = G__41135);

(invoc_array[(16)] = G__41136);

(invoc_array[vararg_idx] = G__41137);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,var_args){
var G__41137 = null;
if (arguments.length > 17) {
var G__41725__i = 0, G__41725__a = new Array(arguments.length -  17);
while (G__41725__i < G__41725__a.length) {G__41725__a[G__41725__i] = arguments[G__41725__i + 17]; ++G__41725__i;}
  G__41137 = new cljs.core.IndexedSeq(G__41725__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41726){
var G__41120 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41121 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41122 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41123 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41124 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41125 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41126 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41127 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41128 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41129 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41130 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41131 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41132 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41133 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41134 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41135 = cljs.core.first(arglist__41726);
arglist__41726 = cljs.core.next(arglist__41726);
var G__41136 = cljs.core.first(arglist__41726);
var G__41137 = cljs.core.rest(arglist__41726);
return sci$impl$fns$arity_17__delegate(G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__41138,G__41139,G__41140,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41138);

(invoc_array[(1)] = G__41139);

(invoc_array[(2)] = G__41140);

(invoc_array[(3)] = G__41141);

(invoc_array[(4)] = G__41142);

(invoc_array[(5)] = G__41143);

(invoc_array[(6)] = G__41144);

(invoc_array[(7)] = G__41145);

(invoc_array[(8)] = G__41146);

(invoc_array[(9)] = G__41147);

(invoc_array[(10)] = G__41148);

(invoc_array[(11)] = G__41149);

(invoc_array[(12)] = G__41150);

(invoc_array[(13)] = G__41151);

(invoc_array[(14)] = G__41152);

(invoc_array[(15)] = G__41153);

(invoc_array[(16)] = G__41154);

(invoc_array[(17)] = G__41155);

(invoc_array[vararg_idx] = G__41156);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__41138,G__41139,G__41140,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,var_args){
var G__41156 = null;
if (arguments.length > 18) {
var G__41744__i = 0, G__41744__a = new Array(arguments.length -  18);
while (G__41744__i < G__41744__a.length) {G__41744__a[G__41744__i] = arguments[G__41744__i + 18]; ++G__41744__i;}
  G__41156 = new cljs.core.IndexedSeq(G__41744__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__41138,G__41139,G__41140,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41745){
var G__41138 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41139 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41140 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41141 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41142 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41143 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41144 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41145 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41146 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41147 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41148 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41149 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41150 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41151 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41152 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41153 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41154 = cljs.core.first(arglist__41745);
arglist__41745 = cljs.core.next(arglist__41745);
var G__41155 = cljs.core.first(arglist__41745);
var G__41156 = cljs.core.rest(arglist__41745);
return sci$impl$fns$arity_18__delegate(G__41138,G__41139,G__41140,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41157);

(invoc_array[(1)] = G__41158);

(invoc_array[(2)] = G__41159);

(invoc_array[(3)] = G__41160);

(invoc_array[(4)] = G__41161);

(invoc_array[(5)] = G__41162);

(invoc_array[(6)] = G__41163);

(invoc_array[(7)] = G__41164);

(invoc_array[(8)] = G__41165);

(invoc_array[(9)] = G__41166);

(invoc_array[(10)] = G__41167);

(invoc_array[(11)] = G__41168);

(invoc_array[(12)] = G__41169);

(invoc_array[(13)] = G__41170);

(invoc_array[(14)] = G__41171);

(invoc_array[(15)] = G__41172);

(invoc_array[(16)] = G__41173);

(invoc_array[(17)] = G__41174);

(invoc_array[(18)] = G__41175);

(invoc_array[vararg_idx] = G__41176);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,var_args){
var G__41176 = null;
if (arguments.length > 19) {
var G__41746__i = 0, G__41746__a = new Array(arguments.length -  19);
while (G__41746__i < G__41746__a.length) {G__41746__a[G__41746__i] = arguments[G__41746__i + 19]; ++G__41746__i;}
  G__41176 = new cljs.core.IndexedSeq(G__41746__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41755){
var G__41157 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41158 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41159 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41160 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41161 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41162 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41163 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41164 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41165 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41166 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41167 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41168 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41169 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41170 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41171 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41172 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41173 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41174 = cljs.core.first(arglist__41755);
arglist__41755 = cljs.core.next(arglist__41755);
var G__41175 = cljs.core.first(arglist__41755);
var G__41176 = cljs.core.rest(arglist__41755);
return sci$impl$fns$arity_19__delegate(G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41177);

(invoc_array[(1)] = G__41178);

(invoc_array[(2)] = G__41179);

(invoc_array[(3)] = G__41180);

(invoc_array[(4)] = G__41181);

(invoc_array[(5)] = G__41182);

(invoc_array[(6)] = G__41183);

(invoc_array[(7)] = G__41184);

(invoc_array[(8)] = G__41185);

(invoc_array[(9)] = G__41186);

(invoc_array[(10)] = G__41187);

(invoc_array[(11)] = G__41188);

(invoc_array[(12)] = G__41189);

(invoc_array[(13)] = G__41190);

(invoc_array[(14)] = G__41191);

(invoc_array[(15)] = G__41192);

(invoc_array[(16)] = G__41193);

(invoc_array[(17)] = G__41194);

(invoc_array[(18)] = G__41195);

(invoc_array[(19)] = G__41196);

(invoc_array[vararg_idx] = G__41197);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,var_args){
var G__41197 = null;
if (arguments.length > 20) {
var G__41759__i = 0, G__41759__a = new Array(arguments.length -  20);
while (G__41759__i < G__41759__a.length) {G__41759__a[G__41759__i] = arguments[G__41759__i + 20]; ++G__41759__i;}
  G__41197 = new cljs.core.IndexedSeq(G__41759__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41760){
var G__41177 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41178 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41179 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41180 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41181 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41182 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41183 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41184 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41185 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41186 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41187 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41188 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41189 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41190 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41191 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41192 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41193 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41194 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41195 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41196 = cljs.core.first(arglist__41760);
var G__41197 = cljs.core.rest(arglist__41760);
return sci$impl$fns$arity_20__delegate(G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40962)].join('')));

}
})():(function (){var G__41202 = fixed_arity;
switch (G__41202) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__40138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40138__auto__)){
continue;
} else {
return ret__40138__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__41203){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41203);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__41205,G__41206){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41205);

(invoc_array[(1)] = G__41206);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__41208,G__41209,G__41210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41208);

(invoc_array[(1)] = G__41209);

(invoc_array[(2)] = G__41210);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__41211,G__41212,G__41213,G__41214){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41211);

(invoc_array[(1)] = G__41212);

(invoc_array[(2)] = G__41213);

(invoc_array[(3)] = G__41214);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__41215,G__41216,G__41217,G__41218,G__41219){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41215);

(invoc_array[(1)] = G__41216);

(invoc_array[(2)] = G__41217);

(invoc_array[(3)] = G__41218);

(invoc_array[(4)] = G__41219);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__41220,G__41221,G__41222,G__41223,G__41224,G__41225){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41220);

(invoc_array[(1)] = G__41221);

(invoc_array[(2)] = G__41222);

(invoc_array[(3)] = G__41223);

(invoc_array[(4)] = G__41224);

(invoc_array[(5)] = G__41225);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__41246,G__41247,G__41248,G__41249,G__41250,G__41251,G__41252){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41246);

(invoc_array[(1)] = G__41247);

(invoc_array[(2)] = G__41248);

(invoc_array[(3)] = G__41249);

(invoc_array[(4)] = G__41250);

(invoc_array[(5)] = G__41251);

(invoc_array[(6)] = G__41252);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41255);

(invoc_array[(1)] = G__41256);

(invoc_array[(2)] = G__41257);

(invoc_array[(3)] = G__41258);

(invoc_array[(4)] = G__41259);

(invoc_array[(5)] = G__41260);

(invoc_array[(6)] = G__41261);

(invoc_array[(7)] = G__41262);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41264);

(invoc_array[(1)] = G__41265);

(invoc_array[(2)] = G__41266);

(invoc_array[(3)] = G__41267);

(invoc_array[(4)] = G__41268);

(invoc_array[(5)] = G__41269);

(invoc_array[(6)] = G__41270);

(invoc_array[(7)] = G__41271);

(invoc_array[(8)] = G__41272);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__41287,G__41288,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41287);

(invoc_array[(1)] = G__41288);

(invoc_array[(2)] = G__41289);

(invoc_array[(3)] = G__41290);

(invoc_array[(4)] = G__41291);

(invoc_array[(5)] = G__41292);

(invoc_array[(6)] = G__41293);

(invoc_array[(7)] = G__41294);

(invoc_array[(8)] = G__41295);

(invoc_array[(9)] = G__41296);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307,G__41308){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41298);

(invoc_array[(1)] = G__41299);

(invoc_array[(2)] = G__41300);

(invoc_array[(3)] = G__41301);

(invoc_array[(4)] = G__41302);

(invoc_array[(5)] = G__41303);

(invoc_array[(6)] = G__41304);

(invoc_array[(7)] = G__41305);

(invoc_array[(8)] = G__41306);

(invoc_array[(9)] = G__41307);

(invoc_array[(10)] = G__41308);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__41309,G__41310,G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41309);

(invoc_array[(1)] = G__41310);

(invoc_array[(2)] = G__41311);

(invoc_array[(3)] = G__41312);

(invoc_array[(4)] = G__41313);

(invoc_array[(5)] = G__41314);

(invoc_array[(6)] = G__41315);

(invoc_array[(7)] = G__41316);

(invoc_array[(8)] = G__41317);

(invoc_array[(9)] = G__41318);

(invoc_array[(10)] = G__41319);

(invoc_array[(11)] = G__41320);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41322);

(invoc_array[(1)] = G__41323);

(invoc_array[(2)] = G__41324);

(invoc_array[(3)] = G__41325);

(invoc_array[(4)] = G__41326);

(invoc_array[(5)] = G__41327);

(invoc_array[(6)] = G__41328);

(invoc_array[(7)] = G__41329);

(invoc_array[(8)] = G__41330);

(invoc_array[(9)] = G__41331);

(invoc_array[(10)] = G__41332);

(invoc_array[(11)] = G__41333);

(invoc_array[(12)] = G__41334);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348,G__41349,G__41350){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41337);

(invoc_array[(1)] = G__41338);

(invoc_array[(2)] = G__41339);

(invoc_array[(3)] = G__41340);

(invoc_array[(4)] = G__41341);

(invoc_array[(5)] = G__41342);

(invoc_array[(6)] = G__41343);

(invoc_array[(7)] = G__41344);

(invoc_array[(8)] = G__41345);

(invoc_array[(9)] = G__41346);

(invoc_array[(10)] = G__41347);

(invoc_array[(11)] = G__41348);

(invoc_array[(12)] = G__41349);

(invoc_array[(13)] = G__41350);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__41352,G__41353,G__41354,G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362,G__41363,G__41364,G__41365,G__41366){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41352);

(invoc_array[(1)] = G__41353);

(invoc_array[(2)] = G__41354);

(invoc_array[(3)] = G__41355);

(invoc_array[(4)] = G__41356);

(invoc_array[(5)] = G__41357);

(invoc_array[(6)] = G__41358);

(invoc_array[(7)] = G__41359);

(invoc_array[(8)] = G__41360);

(invoc_array[(9)] = G__41361);

(invoc_array[(10)] = G__41362);

(invoc_array[(11)] = G__41363);

(invoc_array[(12)] = G__41364);

(invoc_array[(13)] = G__41365);

(invoc_array[(14)] = G__41366);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__41367,G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374,G__41375,G__41376,G__41377,G__41378,G__41379,G__41380,G__41381,G__41382){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41367);

(invoc_array[(1)] = G__41368);

(invoc_array[(2)] = G__41369);

(invoc_array[(3)] = G__41370);

(invoc_array[(4)] = G__41371);

(invoc_array[(5)] = G__41372);

(invoc_array[(6)] = G__41373);

(invoc_array[(7)] = G__41374);

(invoc_array[(8)] = G__41375);

(invoc_array[(9)] = G__41376);

(invoc_array[(10)] = G__41377);

(invoc_array[(11)] = G__41378);

(invoc_array[(12)] = G__41379);

(invoc_array[(13)] = G__41380);

(invoc_array[(14)] = G__41381);

(invoc_array[(15)] = G__41382);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__41387,G__41388,G__41389,G__41390,G__41391,G__41392,G__41393,G__41394,G__41395,G__41396,G__41397,G__41398,G__41399,G__41400,G__41401,G__41402,G__41403){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41387);

(invoc_array[(1)] = G__41388);

(invoc_array[(2)] = G__41389);

(invoc_array[(3)] = G__41390);

(invoc_array[(4)] = G__41391);

(invoc_array[(5)] = G__41392);

(invoc_array[(6)] = G__41393);

(invoc_array[(7)] = G__41394);

(invoc_array[(8)] = G__41395);

(invoc_array[(9)] = G__41396);

(invoc_array[(10)] = G__41397);

(invoc_array[(11)] = G__41398);

(invoc_array[(12)] = G__41399);

(invoc_array[(13)] = G__41400);

(invoc_array[(14)] = G__41401);

(invoc_array[(15)] = G__41402);

(invoc_array[(16)] = G__41403);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__41404,G__41405,G__41406,G__41407,G__41408,G__41409,G__41410,G__41411,G__41412,G__41413,G__41414,G__41415,G__41416,G__41417,G__41418,G__41419,G__41420,G__41421){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41404);

(invoc_array[(1)] = G__41405);

(invoc_array[(2)] = G__41406);

(invoc_array[(3)] = G__41407);

(invoc_array[(4)] = G__41408);

(invoc_array[(5)] = G__41409);

(invoc_array[(6)] = G__41410);

(invoc_array[(7)] = G__41411);

(invoc_array[(8)] = G__41412);

(invoc_array[(9)] = G__41413);

(invoc_array[(10)] = G__41414);

(invoc_array[(11)] = G__41415);

(invoc_array[(12)] = G__41416);

(invoc_array[(13)] = G__41417);

(invoc_array[(14)] = G__41418);

(invoc_array[(15)] = G__41419);

(invoc_array[(16)] = G__41420);

(invoc_array[(17)] = G__41421);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__41422,G__41423,G__41424,G__41425,G__41426,G__41427,G__41428,G__41429,G__41430,G__41431,G__41432,G__41433,G__41434,G__41435,G__41436,G__41437,G__41438,G__41439,G__41440){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41422);

(invoc_array[(1)] = G__41423);

(invoc_array[(2)] = G__41424);

(invoc_array[(3)] = G__41425);

(invoc_array[(4)] = G__41426);

(invoc_array[(5)] = G__41427);

(invoc_array[(6)] = G__41428);

(invoc_array[(7)] = G__41429);

(invoc_array[(8)] = G__41430);

(invoc_array[(9)] = G__41431);

(invoc_array[(10)] = G__41432);

(invoc_array[(11)] = G__41433);

(invoc_array[(12)] = G__41434);

(invoc_array[(13)] = G__41435);

(invoc_array[(14)] = G__41436);

(invoc_array[(15)] = G__41437);

(invoc_array[(16)] = G__41438);

(invoc_array[(17)] = G__41439);

(invoc_array[(18)] = G__41440);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__41441,G__41442,G__41443,G__41444,G__41445,G__41446,G__41447,G__41448,G__41449,G__41450,G__41451,G__41452,G__41453,G__41454,G__41455,G__41456,G__41457,G__41458,G__41459,G__41460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41441);

(invoc_array[(1)] = G__41442);

(invoc_array[(2)] = G__41443);

(invoc_array[(3)] = G__41444);

(invoc_array[(4)] = G__41445);

(invoc_array[(5)] = G__41446);

(invoc_array[(6)] = G__41447);

(invoc_array[(7)] = G__41448);

(invoc_array[(8)] = G__41449);

(invoc_array[(9)] = G__41450);

(invoc_array[(10)] = G__41451);

(invoc_array[(11)] = G__41452);

(invoc_array[(12)] = G__41453);

(invoc_array[(13)] = G__41454);

(invoc_array[(14)] = G__41455);

(invoc_array[(15)] = G__41456);

(invoc_array[(16)] = G__41457);

(invoc_array[(17)] = G__41458);

(invoc_array[(18)] = G__41459);

(invoc_array[(19)] = G__41460);

while(true){
var ret__40139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40139__auto__)){
continue;
} else {
return ret__40139__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41202)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__41803 = cljs.core.next(params__$1);
var G__41804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41805 = lets;
params__$1 = G__41803;
new_params = G__41804;
lets = G__41805;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41806 = cljs.core.next(params__$1);
var G__41807 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41806;
new_params = G__41807;
lets = G__41808;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41810 = arguments.length;
var i__5750__auto___41811 = (0);
while(true){
if((i__5750__auto___41811 < len__5749__auto___41810)){
args__5755__auto__.push((arguments[i__5750__auto___41811]));

var G__41812 = (i__5750__auto___41811 + (1));
i__5750__auto___41811 = G__41812;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__41491 = sig;
var seq__41492 = cljs.core.seq(vec__41491);
var first__41493 = cljs.core.first(seq__41492);
var seq__41492__$1 = cljs.core.next(seq__41492);
var params = first__41493;
var body = seq__41492__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5025__auto__ = conds;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq41481){
var G__41482 = cljs.core.first(seq41481);
var seq41481__$1 = cljs.core.next(seq41481);
var G__41483 = cljs.core.first(seq41481__$1);
var seq41481__$2 = cljs.core.next(seq41481__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41482,G__41483,seq41481__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__41821 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41822 = cljs.core.next(fdecls);
ret = G__41821;
fdecls = G__41822;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41823 = arguments.length;
var i__5750__auto___41824 = (0);
while(true){
if((i__5750__auto___41824 < len__5749__auto___41823)){
args__5755__auto__.push((arguments[i__5750__auto___41824]));

var G__41825 = (i__5750__auto___41824 + (1));
i__5750__auto___41824 = G__41825;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5025__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq41506){
var G__41507 = cljs.core.first(seq41506);
var seq41506__$1 = cljs.core.next(seq41506);
var G__41508 = cljs.core.first(seq41506__$1);
var seq41506__$2 = cljs.core.next(seq41506__$1);
var G__41509 = cljs.core.first(seq41506__$2);
var seq41506__$3 = cljs.core.next(seq41506__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41507,G__41508,G__41509,seq41506__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41831 = arguments.length;
var i__5750__auto___41832 = (0);
while(true){
if((i__5750__auto___41832 < len__5749__auto___41831)){
args__5755__auto__.push((arguments[i__5750__auto___41832]));

var G__41833 = (i__5750__auto___41832 + (1));
i__5750__auto___41832 = G__41833;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__41838 = cljs.core.cons(f,p);
var G__41839 = cljs.core.next(args__$1);
p = G__41838;
args__$1 = G__41839;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41840 = cljs.core.cons(f,p);
var G__41841 = cljs.core.next(args__$1);
p = G__41840;
args__$1 = G__41841;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__41842 = cljs.core.next(fd);
fd = G__41842;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__41843 = cljs.core.next(fd);
fd = G__41843;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__41846 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__41847 = cljs.core.next(ds);
acc = G__41846;
ds = G__41847;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__41848 = cljs.core.next(p);
var G__41849 = cljs.core.cons(cljs.core.first(p),d);
p = G__41848;
d = G__41849;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq41524){
var G__41525 = cljs.core.first(seq41524);
var seq41524__$1 = cljs.core.next(seq41524);
var G__41526 = cljs.core.first(seq41524__$1);
var seq41524__$2 = cljs.core.next(seq41524__$1);
var G__41527 = cljs.core.first(seq41524__$2);
var seq41524__$3 = cljs.core.next(seq41524__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41525,G__41526,G__41527,seq41524__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
