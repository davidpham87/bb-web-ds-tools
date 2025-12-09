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
var G__29972 = arguments.length;
switch (G__29972) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__29973 = fixed_arity;
switch (G__29973) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__29974){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__29974);

while(true){
var ret__29194__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29194__auto__)){
continue;
} else {
return ret__29194__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__29974 = null;
if (arguments.length > 0) {
var G__30831__i = 0, G__30831__a = new Array(arguments.length -  0);
while (G__30831__i < G__30831__a.length) {G__30831__a[G__30831__i] = arguments[G__30831__i + 0]; ++G__30831__i;}
  G__29974 = new cljs.core.IndexedSeq(G__30831__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__29974);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__30832){
var G__29974 = cljs.core.seq(arglist__30832);
return sci$impl$fns$arity_0__delegate(G__29974);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__29975,G__29976){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29975);

(invoc_array[vararg_idx] = G__29976);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__29975,var_args){
var G__29976 = null;
if (arguments.length > 1) {
var G__30833__i = 0, G__30833__a = new Array(arguments.length -  1);
while (G__30833__i < G__30833__a.length) {G__30833__a[G__30833__i] = arguments[G__30833__i + 1]; ++G__30833__i;}
  G__29976 = new cljs.core.IndexedSeq(G__30833__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__29975,G__29976);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__30834){
var G__29975 = cljs.core.first(arglist__30834);
var G__29976 = cljs.core.rest(arglist__30834);
return sci$impl$fns$arity_1__delegate(G__29975,G__29976);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__29980,G__29981,G__29982){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29980);

(invoc_array[(1)] = G__29981);

(invoc_array[vararg_idx] = G__29982);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__29980,G__29981,var_args){
var G__29982 = null;
if (arguments.length > 2) {
var G__30835__i = 0, G__30835__a = new Array(arguments.length -  2);
while (G__30835__i < G__30835__a.length) {G__30835__a[G__30835__i] = arguments[G__30835__i + 2]; ++G__30835__i;}
  G__29982 = new cljs.core.IndexedSeq(G__30835__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__29980,G__29981,G__29982);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__30836){
var G__29980 = cljs.core.first(arglist__30836);
arglist__30836 = cljs.core.next(arglist__30836);
var G__29981 = cljs.core.first(arglist__30836);
var G__29982 = cljs.core.rest(arglist__30836);
return sci$impl$fns$arity_2__delegate(G__29980,G__29981,G__29982);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__29983,G__29984,G__29985,G__29986){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29983);

(invoc_array[(1)] = G__29984);

(invoc_array[(2)] = G__29985);

(invoc_array[vararg_idx] = G__29986);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__29983,G__29984,G__29985,var_args){
var G__29986 = null;
if (arguments.length > 3) {
var G__30841__i = 0, G__30841__a = new Array(arguments.length -  3);
while (G__30841__i < G__30841__a.length) {G__30841__a[G__30841__i] = arguments[G__30841__i + 3]; ++G__30841__i;}
  G__29986 = new cljs.core.IndexedSeq(G__30841__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__29983,G__29984,G__29985,G__29986);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__30842){
var G__29983 = cljs.core.first(arglist__30842);
arglist__30842 = cljs.core.next(arglist__30842);
var G__29984 = cljs.core.first(arglist__30842);
arglist__30842 = cljs.core.next(arglist__30842);
var G__29985 = cljs.core.first(arglist__30842);
var G__29986 = cljs.core.rest(arglist__30842);
return sci$impl$fns$arity_3__delegate(G__29983,G__29984,G__29985,G__29986);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__29994,G__29995,G__29996,G__29997,G__29998){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29994);

(invoc_array[(1)] = G__29995);

(invoc_array[(2)] = G__29996);

(invoc_array[(3)] = G__29997);

(invoc_array[vararg_idx] = G__29998);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__29994,G__29995,G__29996,G__29997,var_args){
var G__29998 = null;
if (arguments.length > 4) {
var G__30847__i = 0, G__30847__a = new Array(arguments.length -  4);
while (G__30847__i < G__30847__a.length) {G__30847__a[G__30847__i] = arguments[G__30847__i + 4]; ++G__30847__i;}
  G__29998 = new cljs.core.IndexedSeq(G__30847__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__29994,G__29995,G__29996,G__29997,G__29998);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__30848){
var G__29994 = cljs.core.first(arglist__30848);
arglist__30848 = cljs.core.next(arglist__30848);
var G__29995 = cljs.core.first(arglist__30848);
arglist__30848 = cljs.core.next(arglist__30848);
var G__29996 = cljs.core.first(arglist__30848);
arglist__30848 = cljs.core.next(arglist__30848);
var G__29997 = cljs.core.first(arglist__30848);
var G__29998 = cljs.core.rest(arglist__30848);
return sci$impl$fns$arity_4__delegate(G__29994,G__29995,G__29996,G__29997,G__29998);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__29999,G__30000,G__30001,G__30002,G__30003,G__30004){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29999);

(invoc_array[(1)] = G__30000);

(invoc_array[(2)] = G__30001);

(invoc_array[(3)] = G__30002);

(invoc_array[(4)] = G__30003);

(invoc_array[vararg_idx] = G__30004);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__29999,G__30000,G__30001,G__30002,G__30003,var_args){
var G__30004 = null;
if (arguments.length > 5) {
var G__30849__i = 0, G__30849__a = new Array(arguments.length -  5);
while (G__30849__i < G__30849__a.length) {G__30849__a[G__30849__i] = arguments[G__30849__i + 5]; ++G__30849__i;}
  G__30004 = new cljs.core.IndexedSeq(G__30849__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__30850){
var G__29999 = cljs.core.first(arglist__30850);
arglist__30850 = cljs.core.next(arglist__30850);
var G__30000 = cljs.core.first(arglist__30850);
arglist__30850 = cljs.core.next(arglist__30850);
var G__30001 = cljs.core.first(arglist__30850);
arglist__30850 = cljs.core.next(arglist__30850);
var G__30002 = cljs.core.first(arglist__30850);
arglist__30850 = cljs.core.next(arglist__30850);
var G__30003 = cljs.core.first(arglist__30850);
var G__30004 = cljs.core.rest(arglist__30850);
return sci$impl$fns$arity_5__delegate(G__29999,G__30000,G__30001,G__30002,G__30003,G__30004);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30005);

(invoc_array[(1)] = G__30006);

(invoc_array[(2)] = G__30007);

(invoc_array[(3)] = G__30008);

(invoc_array[(4)] = G__30009);

(invoc_array[(5)] = G__30010);

(invoc_array[vararg_idx] = G__30011);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,var_args){
var G__30011 = null;
if (arguments.length > 6) {
var G__30851__i = 0, G__30851__a = new Array(arguments.length -  6);
while (G__30851__i < G__30851__a.length) {G__30851__a[G__30851__i] = arguments[G__30851__i + 6]; ++G__30851__i;}
  G__30011 = new cljs.core.IndexedSeq(G__30851__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__30852){
var G__30005 = cljs.core.first(arglist__30852);
arglist__30852 = cljs.core.next(arglist__30852);
var G__30006 = cljs.core.first(arglist__30852);
arglist__30852 = cljs.core.next(arglist__30852);
var G__30007 = cljs.core.first(arglist__30852);
arglist__30852 = cljs.core.next(arglist__30852);
var G__30008 = cljs.core.first(arglist__30852);
arglist__30852 = cljs.core.next(arglist__30852);
var G__30009 = cljs.core.first(arglist__30852);
arglist__30852 = cljs.core.next(arglist__30852);
var G__30010 = cljs.core.first(arglist__30852);
var G__30011 = cljs.core.rest(arglist__30852);
return sci$impl$fns$arity_6__delegate(G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30012);

(invoc_array[(1)] = G__30013);

(invoc_array[(2)] = G__30014);

(invoc_array[(3)] = G__30015);

(invoc_array[(4)] = G__30016);

(invoc_array[(5)] = G__30017);

(invoc_array[(6)] = G__30018);

(invoc_array[vararg_idx] = G__30019);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,var_args){
var G__30019 = null;
if (arguments.length > 7) {
var G__30853__i = 0, G__30853__a = new Array(arguments.length -  7);
while (G__30853__i < G__30853__a.length) {G__30853__a[G__30853__i] = arguments[G__30853__i + 7]; ++G__30853__i;}
  G__30019 = new cljs.core.IndexedSeq(G__30853__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__30854){
var G__30012 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30013 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30014 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30015 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30016 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30017 = cljs.core.first(arglist__30854);
arglist__30854 = cljs.core.next(arglist__30854);
var G__30018 = cljs.core.first(arglist__30854);
var G__30019 = cljs.core.rest(arglist__30854);
return sci$impl$fns$arity_7__delegate(G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,G__30028){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30020);

(invoc_array[(1)] = G__30021);

(invoc_array[(2)] = G__30022);

(invoc_array[(3)] = G__30023);

(invoc_array[(4)] = G__30024);

(invoc_array[(5)] = G__30025);

(invoc_array[(6)] = G__30026);

(invoc_array[(7)] = G__30027);

(invoc_array[vararg_idx] = G__30028);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,var_args){
var G__30028 = null;
if (arguments.length > 8) {
var G__30855__i = 0, G__30855__a = new Array(arguments.length -  8);
while (G__30855__i < G__30855__a.length) {G__30855__a[G__30855__i] = arguments[G__30855__i + 8]; ++G__30855__i;}
  G__30028 = new cljs.core.IndexedSeq(G__30855__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,G__30028);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__30856){
var G__30020 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30021 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30022 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30023 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30024 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30025 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30026 = cljs.core.first(arglist__30856);
arglist__30856 = cljs.core.next(arglist__30856);
var G__30027 = cljs.core.first(arglist__30856);
var G__30028 = cljs.core.rest(arglist__30856);
return sci$impl$fns$arity_8__delegate(G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,G__30028);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30029);

(invoc_array[(1)] = G__30030);

(invoc_array[(2)] = G__30031);

(invoc_array[(3)] = G__30032);

(invoc_array[(4)] = G__30033);

(invoc_array[(5)] = G__30034);

(invoc_array[(6)] = G__30035);

(invoc_array[(7)] = G__30036);

(invoc_array[(8)] = G__30037);

(invoc_array[vararg_idx] = G__30038);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,var_args){
var G__30038 = null;
if (arguments.length > 9) {
var G__30862__i = 0, G__30862__a = new Array(arguments.length -  9);
while (G__30862__i < G__30862__a.length) {G__30862__a[G__30862__i] = arguments[G__30862__i + 9]; ++G__30862__i;}
  G__30038 = new cljs.core.IndexedSeq(G__30862__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__30863){
var G__30029 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30030 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30031 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30032 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30033 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30034 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30035 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30036 = cljs.core.first(arglist__30863);
arglist__30863 = cljs.core.next(arglist__30863);
var G__30037 = cljs.core.first(arglist__30863);
var G__30038 = cljs.core.rest(arglist__30863);
return sci$impl$fns$arity_9__delegate(G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30039);

(invoc_array[(1)] = G__30040);

(invoc_array[(2)] = G__30041);

(invoc_array[(3)] = G__30042);

(invoc_array[(4)] = G__30043);

(invoc_array[(5)] = G__30044);

(invoc_array[(6)] = G__30045);

(invoc_array[(7)] = G__30046);

(invoc_array[(8)] = G__30047);

(invoc_array[(9)] = G__30048);

(invoc_array[vararg_idx] = G__30049);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,var_args){
var G__30049 = null;
if (arguments.length > 10) {
var G__30864__i = 0, G__30864__a = new Array(arguments.length -  10);
while (G__30864__i < G__30864__a.length) {G__30864__a[G__30864__i] = arguments[G__30864__i + 10]; ++G__30864__i;}
  G__30049 = new cljs.core.IndexedSeq(G__30864__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__30865){
var G__30039 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30040 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30041 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30042 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30043 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30044 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30045 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30046 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30047 = cljs.core.first(arglist__30865);
arglist__30865 = cljs.core.next(arglist__30865);
var G__30048 = cljs.core.first(arglist__30865);
var G__30049 = cljs.core.rest(arglist__30865);
return sci$impl$fns$arity_10__delegate(G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30050);

(invoc_array[(1)] = G__30051);

(invoc_array[(2)] = G__30052);

(invoc_array[(3)] = G__30053);

(invoc_array[(4)] = G__30054);

(invoc_array[(5)] = G__30055);

(invoc_array[(6)] = G__30056);

(invoc_array[(7)] = G__30057);

(invoc_array[(8)] = G__30058);

(invoc_array[(9)] = G__30059);

(invoc_array[(10)] = G__30060);

(invoc_array[vararg_idx] = G__30061);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,var_args){
var G__30061 = null;
if (arguments.length > 11) {
var G__30866__i = 0, G__30866__a = new Array(arguments.length -  11);
while (G__30866__i < G__30866__a.length) {G__30866__a[G__30866__i] = arguments[G__30866__i + 11]; ++G__30866__i;}
  G__30061 = new cljs.core.IndexedSeq(G__30866__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__30867){
var G__30050 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30051 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30052 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30053 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30054 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30055 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30056 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30057 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30058 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30059 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30060 = cljs.core.first(arglist__30867);
var G__30061 = cljs.core.rest(arglist__30867);
return sci$impl$fns$arity_11__delegate(G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30062);

(invoc_array[(1)] = G__30063);

(invoc_array[(2)] = G__30064);

(invoc_array[(3)] = G__30065);

(invoc_array[(4)] = G__30066);

(invoc_array[(5)] = G__30067);

(invoc_array[(6)] = G__30068);

(invoc_array[(7)] = G__30069);

(invoc_array[(8)] = G__30070);

(invoc_array[(9)] = G__30071);

(invoc_array[(10)] = G__30072);

(invoc_array[(11)] = G__30073);

(invoc_array[vararg_idx] = G__30074);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,var_args){
var G__30074 = null;
if (arguments.length > 12) {
var G__30871__i = 0, G__30871__a = new Array(arguments.length -  12);
while (G__30871__i < G__30871__a.length) {G__30871__a[G__30871__i] = arguments[G__30871__i + 12]; ++G__30871__i;}
  G__30074 = new cljs.core.IndexedSeq(G__30871__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__30872){
var G__30062 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30063 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30064 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30065 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30066 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30067 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30068 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30069 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30070 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30071 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30072 = cljs.core.first(arglist__30872);
arglist__30872 = cljs.core.next(arglist__30872);
var G__30073 = cljs.core.first(arglist__30872);
var G__30074 = cljs.core.rest(arglist__30872);
return sci$impl$fns$arity_12__delegate(G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30075);

(invoc_array[(1)] = G__30076);

(invoc_array[(2)] = G__30077);

(invoc_array[(3)] = G__30078);

(invoc_array[(4)] = G__30079);

(invoc_array[(5)] = G__30080);

(invoc_array[(6)] = G__30081);

(invoc_array[(7)] = G__30082);

(invoc_array[(8)] = G__30083);

(invoc_array[(9)] = G__30084);

(invoc_array[(10)] = G__30085);

(invoc_array[(11)] = G__30086);

(invoc_array[(12)] = G__30087);

(invoc_array[vararg_idx] = G__30088);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,var_args){
var G__30088 = null;
if (arguments.length > 13) {
var G__30878__i = 0, G__30878__a = new Array(arguments.length -  13);
while (G__30878__i < G__30878__a.length) {G__30878__a[G__30878__i] = arguments[G__30878__i + 13]; ++G__30878__i;}
  G__30088 = new cljs.core.IndexedSeq(G__30878__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__30879){
var G__30075 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30076 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30077 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30078 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30079 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30080 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30081 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30082 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30083 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30084 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30085 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30086 = cljs.core.first(arglist__30879);
arglist__30879 = cljs.core.next(arglist__30879);
var G__30087 = cljs.core.first(arglist__30879);
var G__30088 = cljs.core.rest(arglist__30879);
return sci$impl$fns$arity_13__delegate(G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,G__30105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30091);

(invoc_array[(1)] = G__30092);

(invoc_array[(2)] = G__30093);

(invoc_array[(3)] = G__30094);

(invoc_array[(4)] = G__30095);

(invoc_array[(5)] = G__30096);

(invoc_array[(6)] = G__30097);

(invoc_array[(7)] = G__30098);

(invoc_array[(8)] = G__30099);

(invoc_array[(9)] = G__30100);

(invoc_array[(10)] = G__30101);

(invoc_array[(11)] = G__30102);

(invoc_array[(12)] = G__30103);

(invoc_array[(13)] = G__30104);

(invoc_array[vararg_idx] = G__30105);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,var_args){
var G__30105 = null;
if (arguments.length > 14) {
var G__30880__i = 0, G__30880__a = new Array(arguments.length -  14);
while (G__30880__i < G__30880__a.length) {G__30880__a[G__30880__i] = arguments[G__30880__i + 14]; ++G__30880__i;}
  G__30105 = new cljs.core.IndexedSeq(G__30880__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,G__30105);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__30881){
var G__30091 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30092 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30093 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30094 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30095 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30096 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30097 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30098 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30099 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30100 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30101 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30102 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30103 = cljs.core.first(arglist__30881);
arglist__30881 = cljs.core.next(arglist__30881);
var G__30104 = cljs.core.first(arglist__30881);
var G__30105 = cljs.core.rest(arglist__30881);
return sci$impl$fns$arity_14__delegate(G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,G__30105);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,G__30129){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30114);

(invoc_array[(1)] = G__30115);

(invoc_array[(2)] = G__30116);

(invoc_array[(3)] = G__30117);

(invoc_array[(4)] = G__30118);

(invoc_array[(5)] = G__30119);

(invoc_array[(6)] = G__30120);

(invoc_array[(7)] = G__30121);

(invoc_array[(8)] = G__30122);

(invoc_array[(9)] = G__30123);

(invoc_array[(10)] = G__30124);

(invoc_array[(11)] = G__30125);

(invoc_array[(12)] = G__30126);

(invoc_array[(13)] = G__30127);

(invoc_array[(14)] = G__30128);

(invoc_array[vararg_idx] = G__30129);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,var_args){
var G__30129 = null;
if (arguments.length > 15) {
var G__30882__i = 0, G__30882__a = new Array(arguments.length -  15);
while (G__30882__i < G__30882__a.length) {G__30882__a[G__30882__i] = arguments[G__30882__i + 15]; ++G__30882__i;}
  G__30129 = new cljs.core.IndexedSeq(G__30882__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,G__30129);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__30883){
var G__30114 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30115 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30116 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30117 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30118 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30119 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30120 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30121 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30122 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30123 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30124 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30125 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30126 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30127 = cljs.core.first(arglist__30883);
arglist__30883 = cljs.core.next(arglist__30883);
var G__30128 = cljs.core.first(arglist__30883);
var G__30129 = cljs.core.rest(arglist__30883);
return sci$impl$fns$arity_15__delegate(G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,G__30129);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30130);

(invoc_array[(1)] = G__30131);

(invoc_array[(2)] = G__30132);

(invoc_array[(3)] = G__30133);

(invoc_array[(4)] = G__30134);

(invoc_array[(5)] = G__30135);

(invoc_array[(6)] = G__30136);

(invoc_array[(7)] = G__30137);

(invoc_array[(8)] = G__30138);

(invoc_array[(9)] = G__30139);

(invoc_array[(10)] = G__30140);

(invoc_array[(11)] = G__30141);

(invoc_array[(12)] = G__30142);

(invoc_array[(13)] = G__30143);

(invoc_array[(14)] = G__30144);

(invoc_array[(15)] = G__30145);

(invoc_array[vararg_idx] = G__30146);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,var_args){
var G__30146 = null;
if (arguments.length > 16) {
var G__30888__i = 0, G__30888__a = new Array(arguments.length -  16);
while (G__30888__i < G__30888__a.length) {G__30888__a[G__30888__i] = arguments[G__30888__i + 16]; ++G__30888__i;}
  G__30146 = new cljs.core.IndexedSeq(G__30888__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__30889){
var G__30130 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30131 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30132 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30133 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30134 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30135 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30136 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30137 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30138 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30139 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30140 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30141 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30142 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30143 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30144 = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var G__30145 = cljs.core.first(arglist__30889);
var G__30146 = cljs.core.rest(arglist__30889);
return sci$impl$fns$arity_16__delegate(G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30155);

(invoc_array[(1)] = G__30156);

(invoc_array[(2)] = G__30157);

(invoc_array[(3)] = G__30158);

(invoc_array[(4)] = G__30159);

(invoc_array[(5)] = G__30160);

(invoc_array[(6)] = G__30161);

(invoc_array[(7)] = G__30162);

(invoc_array[(8)] = G__30163);

(invoc_array[(9)] = G__30164);

(invoc_array[(10)] = G__30165);

(invoc_array[(11)] = G__30166);

(invoc_array[(12)] = G__30167);

(invoc_array[(13)] = G__30168);

(invoc_array[(14)] = G__30169);

(invoc_array[(15)] = G__30170);

(invoc_array[(16)] = G__30171);

(invoc_array[vararg_idx] = G__30172);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,var_args){
var G__30172 = null;
if (arguments.length > 17) {
var G__30893__i = 0, G__30893__a = new Array(arguments.length -  17);
while (G__30893__i < G__30893__a.length) {G__30893__a[G__30893__i] = arguments[G__30893__i + 17]; ++G__30893__i;}
  G__30172 = new cljs.core.IndexedSeq(G__30893__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__30894){
var G__30155 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30156 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30157 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30158 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30159 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30160 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30161 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30162 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30163 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30164 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30165 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30166 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30167 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30168 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30169 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30170 = cljs.core.first(arglist__30894);
arglist__30894 = cljs.core.next(arglist__30894);
var G__30171 = cljs.core.first(arglist__30894);
var G__30172 = cljs.core.rest(arglist__30894);
return sci$impl$fns$arity_17__delegate(G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30181);

(invoc_array[(1)] = G__30182);

(invoc_array[(2)] = G__30183);

(invoc_array[(3)] = G__30184);

(invoc_array[(4)] = G__30185);

(invoc_array[(5)] = G__30186);

(invoc_array[(6)] = G__30187);

(invoc_array[(7)] = G__30188);

(invoc_array[(8)] = G__30189);

(invoc_array[(9)] = G__30190);

(invoc_array[(10)] = G__30191);

(invoc_array[(11)] = G__30192);

(invoc_array[(12)] = G__30193);

(invoc_array[(13)] = G__30194);

(invoc_array[(14)] = G__30195);

(invoc_array[(15)] = G__30196);

(invoc_array[(16)] = G__30197);

(invoc_array[(17)] = G__30198);

(invoc_array[vararg_idx] = G__30199);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,var_args){
var G__30199 = null;
if (arguments.length > 18) {
var G__30897__i = 0, G__30897__a = new Array(arguments.length -  18);
while (G__30897__i < G__30897__a.length) {G__30897__a[G__30897__i] = arguments[G__30897__i + 18]; ++G__30897__i;}
  G__30199 = new cljs.core.IndexedSeq(G__30897__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__30899){
var G__30181 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30182 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30183 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30184 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30185 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30186 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30187 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30188 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30189 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30190 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30191 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30192 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30193 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30194 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30195 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30196 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30197 = cljs.core.first(arglist__30899);
arglist__30899 = cljs.core.next(arglist__30899);
var G__30198 = cljs.core.first(arglist__30899);
var G__30199 = cljs.core.rest(arglist__30899);
return sci$impl$fns$arity_18__delegate(G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30200);

(invoc_array[(1)] = G__30201);

(invoc_array[(2)] = G__30202);

(invoc_array[(3)] = G__30203);

(invoc_array[(4)] = G__30204);

(invoc_array[(5)] = G__30205);

(invoc_array[(6)] = G__30206);

(invoc_array[(7)] = G__30207);

(invoc_array[(8)] = G__30208);

(invoc_array[(9)] = G__30209);

(invoc_array[(10)] = G__30210);

(invoc_array[(11)] = G__30211);

(invoc_array[(12)] = G__30212);

(invoc_array[(13)] = G__30213);

(invoc_array[(14)] = G__30214);

(invoc_array[(15)] = G__30215);

(invoc_array[(16)] = G__30216);

(invoc_array[(17)] = G__30217);

(invoc_array[(18)] = G__30218);

(invoc_array[vararg_idx] = G__30219);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,var_args){
var G__30219 = null;
if (arguments.length > 19) {
var G__30905__i = 0, G__30905__a = new Array(arguments.length -  19);
while (G__30905__i < G__30905__a.length) {G__30905__a[G__30905__i] = arguments[G__30905__i + 19]; ++G__30905__i;}
  G__30219 = new cljs.core.IndexedSeq(G__30905__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__30906){
var G__30200 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30201 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30202 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30203 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30204 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30205 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30206 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30207 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30208 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30209 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30210 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30211 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30212 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30213 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30214 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30215 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30216 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30217 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30218 = cljs.core.first(arglist__30906);
var G__30219 = cljs.core.rest(arglist__30906);
return sci$impl$fns$arity_19__delegate(G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30220);

(invoc_array[(1)] = G__30221);

(invoc_array[(2)] = G__30222);

(invoc_array[(3)] = G__30223);

(invoc_array[(4)] = G__30224);

(invoc_array[(5)] = G__30225);

(invoc_array[(6)] = G__30226);

(invoc_array[(7)] = G__30227);

(invoc_array[(8)] = G__30228);

(invoc_array[(9)] = G__30229);

(invoc_array[(10)] = G__30230);

(invoc_array[(11)] = G__30231);

(invoc_array[(12)] = G__30232);

(invoc_array[(13)] = G__30233);

(invoc_array[(14)] = G__30234);

(invoc_array[(15)] = G__30235);

(invoc_array[(16)] = G__30236);

(invoc_array[(17)] = G__30237);

(invoc_array[(18)] = G__30238);

(invoc_array[(19)] = G__30239);

(invoc_array[vararg_idx] = G__30240);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,var_args){
var G__30240 = null;
if (arguments.length > 20) {
var G__30918__i = 0, G__30918__a = new Array(arguments.length -  20);
while (G__30918__i < G__30918__a.length) {G__30918__a[G__30918__i] = arguments[G__30918__i + 20]; ++G__30918__i;}
  G__30240 = new cljs.core.IndexedSeq(G__30918__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__30919){
var G__30220 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30221 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30222 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30223 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30224 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30225 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30226 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30227 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30228 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30229 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30230 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30231 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30232 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30233 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30234 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30235 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30236 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30237 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30238 = cljs.core.first(arglist__30919);
arglist__30919 = cljs.core.next(arglist__30919);
var G__30239 = cljs.core.first(arglist__30919);
var G__30240 = cljs.core.rest(arglist__30919);
return sci$impl$fns$arity_20__delegate(G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29973)].join('')));

}
})():(function (){var G__30241 = fixed_arity;
switch (G__30241) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__29194__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29194__auto__)){
continue;
} else {
return ret__29194__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__30246){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30246);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__30247,G__30248){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30247);

(invoc_array[(1)] = G__30248);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__30249,G__30250,G__30251){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30249);

(invoc_array[(1)] = G__30250);

(invoc_array[(2)] = G__30251);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__30252,G__30253,G__30254,G__30255){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30252);

(invoc_array[(1)] = G__30253);

(invoc_array[(2)] = G__30254);

(invoc_array[(3)] = G__30255);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__30256,G__30257,G__30258,G__30259,G__30260){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30256);

(invoc_array[(1)] = G__30257);

(invoc_array[(2)] = G__30258);

(invoc_array[(3)] = G__30259);

(invoc_array[(4)] = G__30260);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__30263,G__30264,G__30265,G__30266,G__30267,G__30268){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30263);

(invoc_array[(1)] = G__30264);

(invoc_array[(2)] = G__30265);

(invoc_array[(3)] = G__30266);

(invoc_array[(4)] = G__30267);

(invoc_array[(5)] = G__30268);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__30277,G__30278,G__30279,G__30280,G__30281,G__30282,G__30283){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30277);

(invoc_array[(1)] = G__30278);

(invoc_array[(2)] = G__30279);

(invoc_array[(3)] = G__30280);

(invoc_array[(4)] = G__30281);

(invoc_array[(5)] = G__30282);

(invoc_array[(6)] = G__30283);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__30284,G__30285,G__30286,G__30287,G__30288,G__30289,G__30290,G__30291){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30284);

(invoc_array[(1)] = G__30285);

(invoc_array[(2)] = G__30286);

(invoc_array[(3)] = G__30287);

(invoc_array[(4)] = G__30288);

(invoc_array[(5)] = G__30289);

(invoc_array[(6)] = G__30290);

(invoc_array[(7)] = G__30291);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30294);

(invoc_array[(1)] = G__30295);

(invoc_array[(2)] = G__30296);

(invoc_array[(3)] = G__30297);

(invoc_array[(4)] = G__30298);

(invoc_array[(5)] = G__30299);

(invoc_array[(6)] = G__30300);

(invoc_array[(7)] = G__30301);

(invoc_array[(8)] = G__30302);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__30303,G__30304,G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30303);

(invoc_array[(1)] = G__30304);

(invoc_array[(2)] = G__30305);

(invoc_array[(3)] = G__30306);

(invoc_array[(4)] = G__30307);

(invoc_array[(5)] = G__30308);

(invoc_array[(6)] = G__30309);

(invoc_array[(7)] = G__30310);

(invoc_array[(8)] = G__30311);

(invoc_array[(9)] = G__30312);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30313);

(invoc_array[(1)] = G__30314);

(invoc_array[(2)] = G__30315);

(invoc_array[(3)] = G__30316);

(invoc_array[(4)] = G__30317);

(invoc_array[(5)] = G__30318);

(invoc_array[(6)] = G__30319);

(invoc_array[(7)] = G__30320);

(invoc_array[(8)] = G__30321);

(invoc_array[(9)] = G__30322);

(invoc_array[(10)] = G__30323);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345,G__30346){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30335);

(invoc_array[(1)] = G__30336);

(invoc_array[(2)] = G__30337);

(invoc_array[(3)] = G__30338);

(invoc_array[(4)] = G__30339);

(invoc_array[(5)] = G__30340);

(invoc_array[(6)] = G__30341);

(invoc_array[(7)] = G__30342);

(invoc_array[(8)] = G__30343);

(invoc_array[(9)] = G__30344);

(invoc_array[(10)] = G__30345);

(invoc_array[(11)] = G__30346);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__30352,G__30353,G__30354,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30352);

(invoc_array[(1)] = G__30353);

(invoc_array[(2)] = G__30354);

(invoc_array[(3)] = G__30355);

(invoc_array[(4)] = G__30356);

(invoc_array[(5)] = G__30357);

(invoc_array[(6)] = G__30358);

(invoc_array[(7)] = G__30359);

(invoc_array[(8)] = G__30360);

(invoc_array[(9)] = G__30361);

(invoc_array[(10)] = G__30362);

(invoc_array[(11)] = G__30363);

(invoc_array[(12)] = G__30364);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__30379,G__30380,G__30381,G__30382,G__30383,G__30384,G__30385,G__30386,G__30387,G__30388,G__30389,G__30390,G__30391,G__30392){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30379);

(invoc_array[(1)] = G__30380);

(invoc_array[(2)] = G__30381);

(invoc_array[(3)] = G__30382);

(invoc_array[(4)] = G__30383);

(invoc_array[(5)] = G__30384);

(invoc_array[(6)] = G__30385);

(invoc_array[(7)] = G__30386);

(invoc_array[(8)] = G__30387);

(invoc_array[(9)] = G__30388);

(invoc_array[(10)] = G__30389);

(invoc_array[(11)] = G__30390);

(invoc_array[(12)] = G__30391);

(invoc_array[(13)] = G__30392);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418,G__30419){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30405);

(invoc_array[(1)] = G__30406);

(invoc_array[(2)] = G__30407);

(invoc_array[(3)] = G__30408);

(invoc_array[(4)] = G__30409);

(invoc_array[(5)] = G__30410);

(invoc_array[(6)] = G__30411);

(invoc_array[(7)] = G__30412);

(invoc_array[(8)] = G__30413);

(invoc_array[(9)] = G__30414);

(invoc_array[(10)] = G__30415);

(invoc_array[(11)] = G__30416);

(invoc_array[(12)] = G__30417);

(invoc_array[(13)] = G__30418);

(invoc_array[(14)] = G__30419);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436,G__30437,G__30438){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30423);

(invoc_array[(1)] = G__30424);

(invoc_array[(2)] = G__30425);

(invoc_array[(3)] = G__30426);

(invoc_array[(4)] = G__30427);

(invoc_array[(5)] = G__30428);

(invoc_array[(6)] = G__30429);

(invoc_array[(7)] = G__30430);

(invoc_array[(8)] = G__30431);

(invoc_array[(9)] = G__30432);

(invoc_array[(10)] = G__30433);

(invoc_array[(11)] = G__30434);

(invoc_array[(12)] = G__30435);

(invoc_array[(13)] = G__30436);

(invoc_array[(14)] = G__30437);

(invoc_array[(15)] = G__30438);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474,G__30475,G__30476,G__30477,G__30478,G__30479,G__30480){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30464);

(invoc_array[(1)] = G__30465);

(invoc_array[(2)] = G__30466);

(invoc_array[(3)] = G__30467);

(invoc_array[(4)] = G__30468);

(invoc_array[(5)] = G__30469);

(invoc_array[(6)] = G__30470);

(invoc_array[(7)] = G__30471);

(invoc_array[(8)] = G__30472);

(invoc_array[(9)] = G__30473);

(invoc_array[(10)] = G__30474);

(invoc_array[(11)] = G__30475);

(invoc_array[(12)] = G__30476);

(invoc_array[(13)] = G__30477);

(invoc_array[(14)] = G__30478);

(invoc_array[(15)] = G__30479);

(invoc_array[(16)] = G__30480);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514,G__30515,G__30516,G__30517,G__30518,G__30519,G__30520,G__30521){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30504);

(invoc_array[(1)] = G__30505);

(invoc_array[(2)] = G__30506);

(invoc_array[(3)] = G__30507);

(invoc_array[(4)] = G__30508);

(invoc_array[(5)] = G__30509);

(invoc_array[(6)] = G__30510);

(invoc_array[(7)] = G__30511);

(invoc_array[(8)] = G__30512);

(invoc_array[(9)] = G__30513);

(invoc_array[(10)] = G__30514);

(invoc_array[(11)] = G__30515);

(invoc_array[(12)] = G__30516);

(invoc_array[(13)] = G__30517);

(invoc_array[(14)] = G__30518);

(invoc_array[(15)] = G__30519);

(invoc_array[(16)] = G__30520);

(invoc_array[(17)] = G__30521);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__30543,G__30544,G__30545,G__30546,G__30547,G__30548,G__30549,G__30550,G__30551,G__30552,G__30553,G__30554,G__30555,G__30556,G__30557,G__30558,G__30559,G__30560,G__30561){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30543);

(invoc_array[(1)] = G__30544);

(invoc_array[(2)] = G__30545);

(invoc_array[(3)] = G__30546);

(invoc_array[(4)] = G__30547);

(invoc_array[(5)] = G__30548);

(invoc_array[(6)] = G__30549);

(invoc_array[(7)] = G__30550);

(invoc_array[(8)] = G__30551);

(invoc_array[(9)] = G__30552);

(invoc_array[(10)] = G__30553);

(invoc_array[(11)] = G__30554);

(invoc_array[(12)] = G__30555);

(invoc_array[(13)] = G__30556);

(invoc_array[(14)] = G__30557);

(invoc_array[(15)] = G__30558);

(invoc_array[(16)] = G__30559);

(invoc_array[(17)] = G__30560);

(invoc_array[(18)] = G__30561);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__30579,G__30580,G__30581,G__30582,G__30583,G__30584,G__30585,G__30586,G__30587,G__30588,G__30589,G__30590,G__30591,G__30592,G__30593,G__30594,G__30595,G__30596,G__30597,G__30598){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30579);

(invoc_array[(1)] = G__30580);

(invoc_array[(2)] = G__30581);

(invoc_array[(3)] = G__30582);

(invoc_array[(4)] = G__30583);

(invoc_array[(5)] = G__30584);

(invoc_array[(6)] = G__30585);

(invoc_array[(7)] = G__30586);

(invoc_array[(8)] = G__30587);

(invoc_array[(9)] = G__30588);

(invoc_array[(10)] = G__30589);

(invoc_array[(11)] = G__30590);

(invoc_array[(12)] = G__30591);

(invoc_array[(13)] = G__30592);

(invoc_array[(14)] = G__30593);

(invoc_array[(15)] = G__30594);

(invoc_array[(16)] = G__30595);

(invoc_array[(17)] = G__30596);

(invoc_array[(18)] = G__30597);

(invoc_array[(19)] = G__30598);

while(true){
var ret__29195__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29195__auto__)){
continue;
} else {
return ret__29195__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30241)].join('')));

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
var G__30990 = cljs.core.next(params__$1);
var G__30991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__30992 = lets;
params__$1 = G__30990;
new_params = G__30991;
lets = G__30992;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__30993 = cljs.core.next(params__$1);
var G__30994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__30995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__30993;
new_params = G__30994;
lets = G__30995;
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
var len__5749__auto___30997 = arguments.length;
var i__5750__auto___30998 = (0);
while(true){
if((i__5750__auto___30998 < len__5749__auto___30997)){
args__5755__auto__.push((arguments[i__5750__auto___30998]));

var G__31000 = (i__5750__auto___30998 + (1));
i__5750__auto___30998 = G__31000;
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

var vec__30669 = sig;
var seq__30670 = cljs.core.seq(vec__30669);
var first__30671 = cljs.core.first(seq__30670);
var seq__30670__$1 = cljs.core.next(seq__30670);
var params = first__30671;
var body = seq__30670__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq30655){
var G__30656 = cljs.core.first(seq30655);
var seq30655__$1 = cljs.core.next(seq30655);
var G__30657 = cljs.core.first(seq30655__$1);
var seq30655__$2 = cljs.core.next(seq30655__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30656,G__30657,seq30655__$2);
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
var G__31027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__31028 = cljs.core.next(fdecls);
ret = G__31027;
fdecls = G__31028;
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
var len__5749__auto___31031 = arguments.length;
var i__5750__auto___31032 = (0);
while(true){
if((i__5750__auto___31032 < len__5749__auto___31031)){
args__5755__auto__.push((arguments[i__5750__auto___31032]));

var G__31035 = (i__5750__auto___31032 + (1));
i__5750__auto___31032 = G__31035;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq30785){
var G__30790 = cljs.core.first(seq30785);
var seq30785__$1 = cljs.core.next(seq30785);
var G__30791 = cljs.core.first(seq30785__$1);
var seq30785__$2 = cljs.core.next(seq30785__$1);
var G__30792 = cljs.core.first(seq30785__$2);
var seq30785__$3 = cljs.core.next(seq30785__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30790,G__30791,G__30792,seq30785__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___31054 = arguments.length;
var i__5750__auto___31055 = (0);
while(true){
if((i__5750__auto___31055 < len__5749__auto___31054)){
args__5755__auto__.push((arguments[i__5750__auto___31055]));

var G__31056 = (i__5750__auto___31055 + (1));
i__5750__auto___31055 = G__31056;
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
var G__31057 = cljs.core.cons(f,p);
var G__31058 = cljs.core.next(args__$1);
p = G__31057;
args__$1 = G__31058;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__31060 = cljs.core.cons(f,p);
var G__31061 = cljs.core.next(args__$1);
p = G__31060;
args__$1 = G__31061;
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
var G__31062 = cljs.core.next(fd);
fd = G__31062;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__31063 = cljs.core.next(fd);
fd = G__31063;
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
var G__31064 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__31065 = cljs.core.next(ds);
acc = G__31064;
ds = G__31065;
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
var G__31066 = cljs.core.next(p);
var G__31067 = cljs.core.cons(cljs.core.first(p),d);
p = G__31066;
d = G__31067;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq30814){
var G__30815 = cljs.core.first(seq30814);
var seq30814__$1 = cljs.core.next(seq30814);
var G__30816 = cljs.core.first(seq30814__$1);
var seq30814__$2 = cljs.core.next(seq30814__$1);
var G__30817 = cljs.core.first(seq30814__$2);
var seq30814__$3 = cljs.core.next(seq30814__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30815,G__30816,G__30817,seq30814__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
