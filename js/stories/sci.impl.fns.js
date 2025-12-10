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
var G__29989 = arguments.length;
switch (G__29989) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__29993 = fixed_arity;
switch (G__29993) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__29994){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__29994);

while(true){
var ret__29169__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29169__auto__)){
continue;
} else {
return ret__29169__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__29994 = null;
if (arguments.length > 0) {
var G__30686__i = 0, G__30686__a = new Array(arguments.length -  0);
while (G__30686__i < G__30686__a.length) {G__30686__a[G__30686__i] = arguments[G__30686__i + 0]; ++G__30686__i;}
  G__29994 = new cljs.core.IndexedSeq(G__30686__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__29994);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__30687){
var G__29994 = cljs.core.seq(arglist__30687);
return sci$impl$fns$arity_0__delegate(G__29994);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__29995,G__29996){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29995);

(invoc_array[vararg_idx] = G__29996);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__29995,var_args){
var G__29996 = null;
if (arguments.length > 1) {
var G__30690__i = 0, G__30690__a = new Array(arguments.length -  1);
while (G__30690__i < G__30690__a.length) {G__30690__a[G__30690__i] = arguments[G__30690__i + 1]; ++G__30690__i;}
  G__29996 = new cljs.core.IndexedSeq(G__30690__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__29995,G__29996);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__30691){
var G__29995 = cljs.core.first(arglist__30691);
var G__29996 = cljs.core.rest(arglist__30691);
return sci$impl$fns$arity_1__delegate(G__29995,G__29996);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__29997,G__29998,G__29999){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29997);

(invoc_array[(1)] = G__29998);

(invoc_array[vararg_idx] = G__29999);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__29997,G__29998,var_args){
var G__29999 = null;
if (arguments.length > 2) {
var G__30692__i = 0, G__30692__a = new Array(arguments.length -  2);
while (G__30692__i < G__30692__a.length) {G__30692__a[G__30692__i] = arguments[G__30692__i + 2]; ++G__30692__i;}
  G__29999 = new cljs.core.IndexedSeq(G__30692__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__29997,G__29998,G__29999);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__30693){
var G__29997 = cljs.core.first(arglist__30693);
arglist__30693 = cljs.core.next(arglist__30693);
var G__29998 = cljs.core.first(arglist__30693);
var G__29999 = cljs.core.rest(arglist__30693);
return sci$impl$fns$arity_2__delegate(G__29997,G__29998,G__29999);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__30000,G__30001,G__30002,G__30003){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30000);

(invoc_array[(1)] = G__30001);

(invoc_array[(2)] = G__30002);

(invoc_array[vararg_idx] = G__30003);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__30000,G__30001,G__30002,var_args){
var G__30003 = null;
if (arguments.length > 3) {
var G__30696__i = 0, G__30696__a = new Array(arguments.length -  3);
while (G__30696__i < G__30696__a.length) {G__30696__a[G__30696__i] = arguments[G__30696__i + 3]; ++G__30696__i;}
  G__30003 = new cljs.core.IndexedSeq(G__30696__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__30000,G__30001,G__30002,G__30003);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__30697){
var G__30000 = cljs.core.first(arglist__30697);
arglist__30697 = cljs.core.next(arglist__30697);
var G__30001 = cljs.core.first(arglist__30697);
arglist__30697 = cljs.core.next(arglist__30697);
var G__30002 = cljs.core.first(arglist__30697);
var G__30003 = cljs.core.rest(arglist__30697);
return sci$impl$fns$arity_3__delegate(G__30000,G__30001,G__30002,G__30003);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__30004,G__30005,G__30006,G__30007,G__30008){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30004);

(invoc_array[(1)] = G__30005);

(invoc_array[(2)] = G__30006);

(invoc_array[(3)] = G__30007);

(invoc_array[vararg_idx] = G__30008);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__30004,G__30005,G__30006,G__30007,var_args){
var G__30008 = null;
if (arguments.length > 4) {
var G__30698__i = 0, G__30698__a = new Array(arguments.length -  4);
while (G__30698__i < G__30698__a.length) {G__30698__a[G__30698__i] = arguments[G__30698__i + 4]; ++G__30698__i;}
  G__30008 = new cljs.core.IndexedSeq(G__30698__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__30004,G__30005,G__30006,G__30007,G__30008);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__30699){
var G__30004 = cljs.core.first(arglist__30699);
arglist__30699 = cljs.core.next(arglist__30699);
var G__30005 = cljs.core.first(arglist__30699);
arglist__30699 = cljs.core.next(arglist__30699);
var G__30006 = cljs.core.first(arglist__30699);
arglist__30699 = cljs.core.next(arglist__30699);
var G__30007 = cljs.core.first(arglist__30699);
var G__30008 = cljs.core.rest(arglist__30699);
return sci$impl$fns$arity_4__delegate(G__30004,G__30005,G__30006,G__30007,G__30008);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__30013,G__30014,G__30015,G__30016,G__30017,G__30018){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30013);

(invoc_array[(1)] = G__30014);

(invoc_array[(2)] = G__30015);

(invoc_array[(3)] = G__30016);

(invoc_array[(4)] = G__30017);

(invoc_array[vararg_idx] = G__30018);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__30013,G__30014,G__30015,G__30016,G__30017,var_args){
var G__30018 = null;
if (arguments.length > 5) {
var G__30700__i = 0, G__30700__a = new Array(arguments.length -  5);
while (G__30700__i < G__30700__a.length) {G__30700__a[G__30700__i] = arguments[G__30700__i + 5]; ++G__30700__i;}
  G__30018 = new cljs.core.IndexedSeq(G__30700__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__30701){
var G__30013 = cljs.core.first(arglist__30701);
arglist__30701 = cljs.core.next(arglist__30701);
var G__30014 = cljs.core.first(arglist__30701);
arglist__30701 = cljs.core.next(arglist__30701);
var G__30015 = cljs.core.first(arglist__30701);
arglist__30701 = cljs.core.next(arglist__30701);
var G__30016 = cljs.core.first(arglist__30701);
arglist__30701 = cljs.core.next(arglist__30701);
var G__30017 = cljs.core.first(arglist__30701);
var G__30018 = cljs.core.rest(arglist__30701);
return sci$impl$fns$arity_5__delegate(G__30013,G__30014,G__30015,G__30016,G__30017,G__30018);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30019);

(invoc_array[(1)] = G__30020);

(invoc_array[(2)] = G__30021);

(invoc_array[(3)] = G__30022);

(invoc_array[(4)] = G__30023);

(invoc_array[(5)] = G__30024);

(invoc_array[vararg_idx] = G__30025);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,var_args){
var G__30025 = null;
if (arguments.length > 6) {
var G__30702__i = 0, G__30702__a = new Array(arguments.length -  6);
while (G__30702__i < G__30702__a.length) {G__30702__a[G__30702__i] = arguments[G__30702__i + 6]; ++G__30702__i;}
  G__30025 = new cljs.core.IndexedSeq(G__30702__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__30703){
var G__30019 = cljs.core.first(arglist__30703);
arglist__30703 = cljs.core.next(arglist__30703);
var G__30020 = cljs.core.first(arglist__30703);
arglist__30703 = cljs.core.next(arglist__30703);
var G__30021 = cljs.core.first(arglist__30703);
arglist__30703 = cljs.core.next(arglist__30703);
var G__30022 = cljs.core.first(arglist__30703);
arglist__30703 = cljs.core.next(arglist__30703);
var G__30023 = cljs.core.first(arglist__30703);
arglist__30703 = cljs.core.next(arglist__30703);
var G__30024 = cljs.core.first(arglist__30703);
var G__30025 = cljs.core.rest(arglist__30703);
return sci$impl$fns$arity_6__delegate(G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30026);

(invoc_array[(1)] = G__30027);

(invoc_array[(2)] = G__30028);

(invoc_array[(3)] = G__30029);

(invoc_array[(4)] = G__30030);

(invoc_array[(5)] = G__30031);

(invoc_array[(6)] = G__30032);

(invoc_array[vararg_idx] = G__30033);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,var_args){
var G__30033 = null;
if (arguments.length > 7) {
var G__30705__i = 0, G__30705__a = new Array(arguments.length -  7);
while (G__30705__i < G__30705__a.length) {G__30705__a[G__30705__i] = arguments[G__30705__i + 7]; ++G__30705__i;}
  G__30033 = new cljs.core.IndexedSeq(G__30705__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__30707){
var G__30026 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30027 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30028 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30029 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30030 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30031 = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var G__30032 = cljs.core.first(arglist__30707);
var G__30033 = cljs.core.rest(arglist__30707);
return sci$impl$fns$arity_7__delegate(G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30034);

(invoc_array[(1)] = G__30035);

(invoc_array[(2)] = G__30036);

(invoc_array[(3)] = G__30037);

(invoc_array[(4)] = G__30038);

(invoc_array[(5)] = G__30039);

(invoc_array[(6)] = G__30040);

(invoc_array[(7)] = G__30041);

(invoc_array[vararg_idx] = G__30042);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,var_args){
var G__30042 = null;
if (arguments.length > 8) {
var G__30712__i = 0, G__30712__a = new Array(arguments.length -  8);
while (G__30712__i < G__30712__a.length) {G__30712__a[G__30712__i] = arguments[G__30712__i + 8]; ++G__30712__i;}
  G__30042 = new cljs.core.IndexedSeq(G__30712__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__30713){
var G__30034 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30035 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30036 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30037 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30038 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30039 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30040 = cljs.core.first(arglist__30713);
arglist__30713 = cljs.core.next(arglist__30713);
var G__30041 = cljs.core.first(arglist__30713);
var G__30042 = cljs.core.rest(arglist__30713);
return sci$impl$fns$arity_8__delegate(G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30043);

(invoc_array[(1)] = G__30044);

(invoc_array[(2)] = G__30045);

(invoc_array[(3)] = G__30046);

(invoc_array[(4)] = G__30047);

(invoc_array[(5)] = G__30048);

(invoc_array[(6)] = G__30049);

(invoc_array[(7)] = G__30050);

(invoc_array[(8)] = G__30051);

(invoc_array[vararg_idx] = G__30052);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,var_args){
var G__30052 = null;
if (arguments.length > 9) {
var G__30720__i = 0, G__30720__a = new Array(arguments.length -  9);
while (G__30720__i < G__30720__a.length) {G__30720__a[G__30720__i] = arguments[G__30720__i + 9]; ++G__30720__i;}
  G__30052 = new cljs.core.IndexedSeq(G__30720__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__30721){
var G__30043 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30044 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30045 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30046 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30047 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30048 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30049 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30050 = cljs.core.first(arglist__30721);
arglist__30721 = cljs.core.next(arglist__30721);
var G__30051 = cljs.core.first(arglist__30721);
var G__30052 = cljs.core.rest(arglist__30721);
return sci$impl$fns$arity_9__delegate(G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30053);

(invoc_array[(1)] = G__30054);

(invoc_array[(2)] = G__30055);

(invoc_array[(3)] = G__30056);

(invoc_array[(4)] = G__30057);

(invoc_array[(5)] = G__30058);

(invoc_array[(6)] = G__30059);

(invoc_array[(7)] = G__30060);

(invoc_array[(8)] = G__30061);

(invoc_array[(9)] = G__30062);

(invoc_array[vararg_idx] = G__30063);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,var_args){
var G__30063 = null;
if (arguments.length > 10) {
var G__30725__i = 0, G__30725__a = new Array(arguments.length -  10);
while (G__30725__i < G__30725__a.length) {G__30725__a[G__30725__i] = arguments[G__30725__i + 10]; ++G__30725__i;}
  G__30063 = new cljs.core.IndexedSeq(G__30725__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__30726){
var G__30053 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30054 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30055 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30056 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30057 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30058 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30059 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30060 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30061 = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var G__30062 = cljs.core.first(arglist__30726);
var G__30063 = cljs.core.rest(arglist__30726);
return sci$impl$fns$arity_10__delegate(G__30053,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,G__30075){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30064);

(invoc_array[(1)] = G__30065);

(invoc_array[(2)] = G__30066);

(invoc_array[(3)] = G__30067);

(invoc_array[(4)] = G__30068);

(invoc_array[(5)] = G__30069);

(invoc_array[(6)] = G__30070);

(invoc_array[(7)] = G__30071);

(invoc_array[(8)] = G__30072);

(invoc_array[(9)] = G__30073);

(invoc_array[(10)] = G__30074);

(invoc_array[vararg_idx] = G__30075);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,var_args){
var G__30075 = null;
if (arguments.length > 11) {
var G__30737__i = 0, G__30737__a = new Array(arguments.length -  11);
while (G__30737__i < G__30737__a.length) {G__30737__a[G__30737__i] = arguments[G__30737__i + 11]; ++G__30737__i;}
  G__30075 = new cljs.core.IndexedSeq(G__30737__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,G__30075);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__30738){
var G__30064 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30065 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30066 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30067 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30068 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30069 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30070 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30071 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30072 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30073 = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var G__30074 = cljs.core.first(arglist__30738);
var G__30075 = cljs.core.rest(arglist__30738);
return sci$impl$fns$arity_11__delegate(G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,G__30075);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30076);

(invoc_array[(1)] = G__30077);

(invoc_array[(2)] = G__30078);

(invoc_array[(3)] = G__30079);

(invoc_array[(4)] = G__30080);

(invoc_array[(5)] = G__30081);

(invoc_array[(6)] = G__30082);

(invoc_array[(7)] = G__30083);

(invoc_array[(8)] = G__30084);

(invoc_array[(9)] = G__30085);

(invoc_array[(10)] = G__30086);

(invoc_array[(11)] = G__30087);

(invoc_array[vararg_idx] = G__30088);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,var_args){
var G__30088 = null;
if (arguments.length > 12) {
var G__30742__i = 0, G__30742__a = new Array(arguments.length -  12);
while (G__30742__i < G__30742__a.length) {G__30742__a[G__30742__i] = arguments[G__30742__i + 12]; ++G__30742__i;}
  G__30088 = new cljs.core.IndexedSeq(G__30742__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__30743){
var G__30076 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30077 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30078 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30079 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30080 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30081 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30082 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30083 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30084 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30085 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30086 = cljs.core.first(arglist__30743);
arglist__30743 = cljs.core.next(arglist__30743);
var G__30087 = cljs.core.first(arglist__30743);
var G__30088 = cljs.core.rest(arglist__30743);
return sci$impl$fns$arity_12__delegate(G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30089);

(invoc_array[(1)] = G__30090);

(invoc_array[(2)] = G__30091);

(invoc_array[(3)] = G__30092);

(invoc_array[(4)] = G__30093);

(invoc_array[(5)] = G__30094);

(invoc_array[(6)] = G__30095);

(invoc_array[(7)] = G__30096);

(invoc_array[(8)] = G__30097);

(invoc_array[(9)] = G__30098);

(invoc_array[(10)] = G__30099);

(invoc_array[(11)] = G__30100);

(invoc_array[(12)] = G__30101);

(invoc_array[vararg_idx] = G__30102);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,var_args){
var G__30102 = null;
if (arguments.length > 13) {
var G__30770__i = 0, G__30770__a = new Array(arguments.length -  13);
while (G__30770__i < G__30770__a.length) {G__30770__a[G__30770__i] = arguments[G__30770__i + 13]; ++G__30770__i;}
  G__30102 = new cljs.core.IndexedSeq(G__30770__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__30772){
var G__30089 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30090 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30091 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30092 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30093 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30094 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30095 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30096 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30097 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30098 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30099 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30100 = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var G__30101 = cljs.core.first(arglist__30772);
var G__30102 = cljs.core.rest(arglist__30772);
return sci$impl$fns$arity_13__delegate(G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__30103,G__30104,G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30103);

(invoc_array[(1)] = G__30104);

(invoc_array[(2)] = G__30105);

(invoc_array[(3)] = G__30106);

(invoc_array[(4)] = G__30107);

(invoc_array[(5)] = G__30108);

(invoc_array[(6)] = G__30109);

(invoc_array[(7)] = G__30110);

(invoc_array[(8)] = G__30111);

(invoc_array[(9)] = G__30112);

(invoc_array[(10)] = G__30113);

(invoc_array[(11)] = G__30114);

(invoc_array[(12)] = G__30115);

(invoc_array[(13)] = G__30116);

(invoc_array[vararg_idx] = G__30117);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__30103,G__30104,G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,var_args){
var G__30117 = null;
if (arguments.length > 14) {
var G__30777__i = 0, G__30777__a = new Array(arguments.length -  14);
while (G__30777__i < G__30777__a.length) {G__30777__a[G__30777__i] = arguments[G__30777__i + 14]; ++G__30777__i;}
  G__30117 = new cljs.core.IndexedSeq(G__30777__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__30103,G__30104,G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__30778){
var G__30103 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30104 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30105 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30106 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30107 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30108 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30109 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30110 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30111 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30112 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30113 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30114 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30115 = cljs.core.first(arglist__30778);
arglist__30778 = cljs.core.next(arglist__30778);
var G__30116 = cljs.core.first(arglist__30778);
var G__30117 = cljs.core.rest(arglist__30778);
return sci$impl$fns$arity_14__delegate(G__30103,G__30104,G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30128);

(invoc_array[(1)] = G__30129);

(invoc_array[(2)] = G__30130);

(invoc_array[(3)] = G__30131);

(invoc_array[(4)] = G__30132);

(invoc_array[(5)] = G__30133);

(invoc_array[(6)] = G__30134);

(invoc_array[(7)] = G__30135);

(invoc_array[(8)] = G__30136);

(invoc_array[(9)] = G__30137);

(invoc_array[(10)] = G__30138);

(invoc_array[(11)] = G__30139);

(invoc_array[(12)] = G__30140);

(invoc_array[(13)] = G__30141);

(invoc_array[(14)] = G__30142);

(invoc_array[vararg_idx] = G__30143);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,var_args){
var G__30143 = null;
if (arguments.length > 15) {
var G__30866__i = 0, G__30866__a = new Array(arguments.length -  15);
while (G__30866__i < G__30866__a.length) {G__30866__a[G__30866__i] = arguments[G__30866__i + 15]; ++G__30866__i;}
  G__30143 = new cljs.core.IndexedSeq(G__30866__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__30867){
var G__30128 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30129 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30130 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30131 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30132 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30133 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30134 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30135 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30136 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30137 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30138 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30139 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30140 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30141 = cljs.core.first(arglist__30867);
arglist__30867 = cljs.core.next(arglist__30867);
var G__30142 = cljs.core.first(arglist__30867);
var G__30143 = cljs.core.rest(arglist__30867);
return sci$impl$fns$arity_15__delegate(G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30144);

(invoc_array[(1)] = G__30145);

(invoc_array[(2)] = G__30146);

(invoc_array[(3)] = G__30147);

(invoc_array[(4)] = G__30148);

(invoc_array[(5)] = G__30149);

(invoc_array[(6)] = G__30150);

(invoc_array[(7)] = G__30151);

(invoc_array[(8)] = G__30152);

(invoc_array[(9)] = G__30153);

(invoc_array[(10)] = G__30154);

(invoc_array[(11)] = G__30155);

(invoc_array[(12)] = G__30156);

(invoc_array[(13)] = G__30157);

(invoc_array[(14)] = G__30158);

(invoc_array[(15)] = G__30159);

(invoc_array[vararg_idx] = G__30160);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,var_args){
var G__30160 = null;
if (arguments.length > 16) {
var G__30873__i = 0, G__30873__a = new Array(arguments.length -  16);
while (G__30873__i < G__30873__a.length) {G__30873__a[G__30873__i] = arguments[G__30873__i + 16]; ++G__30873__i;}
  G__30160 = new cljs.core.IndexedSeq(G__30873__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__30874){
var G__30144 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30145 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30146 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30147 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30148 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30149 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30150 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30151 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30152 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30153 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30154 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30155 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30156 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30157 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30158 = cljs.core.first(arglist__30874);
arglist__30874 = cljs.core.next(arglist__30874);
var G__30159 = cljs.core.first(arglist__30874);
var G__30160 = cljs.core.rest(arglist__30874);
return sci$impl$fns$arity_16__delegate(G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30169);

(invoc_array[(1)] = G__30170);

(invoc_array[(2)] = G__30171);

(invoc_array[(3)] = G__30172);

(invoc_array[(4)] = G__30173);

(invoc_array[(5)] = G__30174);

(invoc_array[(6)] = G__30175);

(invoc_array[(7)] = G__30176);

(invoc_array[(8)] = G__30177);

(invoc_array[(9)] = G__30178);

(invoc_array[(10)] = G__30179);

(invoc_array[(11)] = G__30180);

(invoc_array[(12)] = G__30181);

(invoc_array[(13)] = G__30182);

(invoc_array[(14)] = G__30183);

(invoc_array[(15)] = G__30184);

(invoc_array[(16)] = G__30185);

(invoc_array[vararg_idx] = G__30186);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,var_args){
var G__30186 = null;
if (arguments.length > 17) {
var G__30887__i = 0, G__30887__a = new Array(arguments.length -  17);
while (G__30887__i < G__30887__a.length) {G__30887__a[G__30887__i] = arguments[G__30887__i + 17]; ++G__30887__i;}
  G__30186 = new cljs.core.IndexedSeq(G__30887__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__30888){
var G__30169 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30170 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30171 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30172 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30173 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30174 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30175 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30176 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30177 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30178 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30179 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30180 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30181 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30182 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30183 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30184 = cljs.core.first(arglist__30888);
arglist__30888 = cljs.core.next(arglist__30888);
var G__30185 = cljs.core.first(arglist__30888);
var G__30186 = cljs.core.rest(arglist__30888);
return sci$impl$fns$arity_17__delegate(G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30192);

(invoc_array[(1)] = G__30193);

(invoc_array[(2)] = G__30194);

(invoc_array[(3)] = G__30195);

(invoc_array[(4)] = G__30196);

(invoc_array[(5)] = G__30197);

(invoc_array[(6)] = G__30198);

(invoc_array[(7)] = G__30199);

(invoc_array[(8)] = G__30200);

(invoc_array[(9)] = G__30201);

(invoc_array[(10)] = G__30202);

(invoc_array[(11)] = G__30203);

(invoc_array[(12)] = G__30204);

(invoc_array[(13)] = G__30205);

(invoc_array[(14)] = G__30206);

(invoc_array[(15)] = G__30207);

(invoc_array[(16)] = G__30208);

(invoc_array[(17)] = G__30209);

(invoc_array[vararg_idx] = G__30210);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,var_args){
var G__30210 = null;
if (arguments.length > 18) {
var G__30893__i = 0, G__30893__a = new Array(arguments.length -  18);
while (G__30893__i < G__30893__a.length) {G__30893__a[G__30893__i] = arguments[G__30893__i + 18]; ++G__30893__i;}
  G__30210 = new cljs.core.IndexedSeq(G__30893__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__30896){
var G__30192 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30193 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30194 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30195 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30196 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30197 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30198 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30199 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30200 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30201 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30202 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30203 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30204 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30205 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30206 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30207 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30208 = cljs.core.first(arglist__30896);
arglist__30896 = cljs.core.next(arglist__30896);
var G__30209 = cljs.core.first(arglist__30896);
var G__30210 = cljs.core.rest(arglist__30896);
return sci$impl$fns$arity_18__delegate(G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30215);

(invoc_array[(1)] = G__30216);

(invoc_array[(2)] = G__30217);

(invoc_array[(3)] = G__30218);

(invoc_array[(4)] = G__30219);

(invoc_array[(5)] = G__30220);

(invoc_array[(6)] = G__30221);

(invoc_array[(7)] = G__30222);

(invoc_array[(8)] = G__30223);

(invoc_array[(9)] = G__30224);

(invoc_array[(10)] = G__30225);

(invoc_array[(11)] = G__30226);

(invoc_array[(12)] = G__30227);

(invoc_array[(13)] = G__30228);

(invoc_array[(14)] = G__30229);

(invoc_array[(15)] = G__30230);

(invoc_array[(16)] = G__30231);

(invoc_array[(17)] = G__30232);

(invoc_array[(18)] = G__30233);

(invoc_array[vararg_idx] = G__30234);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,var_args){
var G__30234 = null;
if (arguments.length > 19) {
var G__30905__i = 0, G__30905__a = new Array(arguments.length -  19);
while (G__30905__i < G__30905__a.length) {G__30905__a[G__30905__i] = arguments[G__30905__i + 19]; ++G__30905__i;}
  G__30234 = new cljs.core.IndexedSeq(G__30905__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__30906){
var G__30215 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30216 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30217 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30218 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30219 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30220 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30221 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30222 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30223 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30224 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30225 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30226 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30227 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30228 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30229 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30230 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30231 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30232 = cljs.core.first(arglist__30906);
arglist__30906 = cljs.core.next(arglist__30906);
var G__30233 = cljs.core.first(arglist__30906);
var G__30234 = cljs.core.rest(arglist__30906);
return sci$impl$fns$arity_19__delegate(G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30238);

(invoc_array[(1)] = G__30239);

(invoc_array[(2)] = G__30240);

(invoc_array[(3)] = G__30241);

(invoc_array[(4)] = G__30242);

(invoc_array[(5)] = G__30243);

(invoc_array[(6)] = G__30244);

(invoc_array[(7)] = G__30245);

(invoc_array[(8)] = G__30246);

(invoc_array[(9)] = G__30247);

(invoc_array[(10)] = G__30248);

(invoc_array[(11)] = G__30249);

(invoc_array[(12)] = G__30250);

(invoc_array[(13)] = G__30251);

(invoc_array[(14)] = G__30252);

(invoc_array[(15)] = G__30253);

(invoc_array[(16)] = G__30254);

(invoc_array[(17)] = G__30255);

(invoc_array[(18)] = G__30256);

(invoc_array[(19)] = G__30257);

(invoc_array[vararg_idx] = G__30258);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,var_args){
var G__30258 = null;
if (arguments.length > 20) {
var G__30910__i = 0, G__30910__a = new Array(arguments.length -  20);
while (G__30910__i < G__30910__a.length) {G__30910__a[G__30910__i] = arguments[G__30910__i + 20]; ++G__30910__i;}
  G__30258 = new cljs.core.IndexedSeq(G__30910__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__30914){
var G__30238 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30239 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30240 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30241 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30242 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30243 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30244 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30245 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30246 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30247 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30248 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30249 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30250 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30251 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30252 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30253 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30254 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30255 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30256 = cljs.core.first(arglist__30914);
arglist__30914 = cljs.core.next(arglist__30914);
var G__30257 = cljs.core.first(arglist__30914);
var G__30258 = cljs.core.rest(arglist__30914);
return sci$impl$fns$arity_20__delegate(G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29993)].join('')));

}
})():(function (){var G__30260 = fixed_arity;
switch (G__30260) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__29169__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29169__auto__)){
continue;
} else {
return ret__29169__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__30262){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30262);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__30266,G__30267){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30266);

(invoc_array[(1)] = G__30267);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__30271,G__30272,G__30273){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30271);

(invoc_array[(1)] = G__30272);

(invoc_array[(2)] = G__30273);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__30275,G__30276,G__30277,G__30278){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30275);

(invoc_array[(1)] = G__30276);

(invoc_array[(2)] = G__30277);

(invoc_array[(3)] = G__30278);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__30282,G__30283,G__30284,G__30285,G__30286){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30282);

(invoc_array[(1)] = G__30283);

(invoc_array[(2)] = G__30284);

(invoc_array[(3)] = G__30285);

(invoc_array[(4)] = G__30286);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__30290,G__30291,G__30292,G__30293,G__30294,G__30295){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30290);

(invoc_array[(1)] = G__30291);

(invoc_array[(2)] = G__30292);

(invoc_array[(3)] = G__30293);

(invoc_array[(4)] = G__30294);

(invoc_array[(5)] = G__30295);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30297);

(invoc_array[(1)] = G__30298);

(invoc_array[(2)] = G__30299);

(invoc_array[(3)] = G__30300);

(invoc_array[(4)] = G__30301);

(invoc_array[(5)] = G__30302);

(invoc_array[(6)] = G__30303);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30305);

(invoc_array[(1)] = G__30306);

(invoc_array[(2)] = G__30307);

(invoc_array[(3)] = G__30308);

(invoc_array[(4)] = G__30309);

(invoc_array[(5)] = G__30310);

(invoc_array[(6)] = G__30311);

(invoc_array[(7)] = G__30312);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30314);

(invoc_array[(1)] = G__30315);

(invoc_array[(2)] = G__30316);

(invoc_array[(3)] = G__30317);

(invoc_array[(4)] = G__30318);

(invoc_array[(5)] = G__30319);

(invoc_array[(6)] = G__30320);

(invoc_array[(7)] = G__30321);

(invoc_array[(8)] = G__30322);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30325);

(invoc_array[(1)] = G__30326);

(invoc_array[(2)] = G__30327);

(invoc_array[(3)] = G__30328);

(invoc_array[(4)] = G__30329);

(invoc_array[(5)] = G__30330);

(invoc_array[(6)] = G__30331);

(invoc_array[(7)] = G__30332);

(invoc_array[(8)] = G__30333);

(invoc_array[(9)] = G__30334);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345){
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

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__30353,G__30354,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30353);

(invoc_array[(1)] = G__30354);

(invoc_array[(2)] = G__30355);

(invoc_array[(3)] = G__30356);

(invoc_array[(4)] = G__30357);

(invoc_array[(5)] = G__30358);

(invoc_array[(6)] = G__30359);

(invoc_array[(7)] = G__30360);

(invoc_array[(8)] = G__30361);

(invoc_array[(9)] = G__30362);

(invoc_array[(10)] = G__30363);

(invoc_array[(11)] = G__30364);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__30371,G__30372,G__30373,G__30374,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30371);

(invoc_array[(1)] = G__30372);

(invoc_array[(2)] = G__30373);

(invoc_array[(3)] = G__30374);

(invoc_array[(4)] = G__30375);

(invoc_array[(5)] = G__30376);

(invoc_array[(6)] = G__30377);

(invoc_array[(7)] = G__30378);

(invoc_array[(8)] = G__30379);

(invoc_array[(9)] = G__30380);

(invoc_array[(10)] = G__30381);

(invoc_array[(11)] = G__30382);

(invoc_array[(12)] = G__30383);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__30384,G__30385,G__30386,G__30387,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393,G__30394,G__30395,G__30396,G__30397){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30384);

(invoc_array[(1)] = G__30385);

(invoc_array[(2)] = G__30386);

(invoc_array[(3)] = G__30387);

(invoc_array[(4)] = G__30388);

(invoc_array[(5)] = G__30389);

(invoc_array[(6)] = G__30390);

(invoc_array[(7)] = G__30391);

(invoc_array[(8)] = G__30392);

(invoc_array[(9)] = G__30393);

(invoc_array[(10)] = G__30394);

(invoc_array[(11)] = G__30395);

(invoc_array[(12)] = G__30396);

(invoc_array[(13)] = G__30397);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__30398,G__30399,G__30400,G__30401,G__30402,G__30403,G__30404,G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30398);

(invoc_array[(1)] = G__30399);

(invoc_array[(2)] = G__30400);

(invoc_array[(3)] = G__30401);

(invoc_array[(4)] = G__30402);

(invoc_array[(5)] = G__30403);

(invoc_array[(6)] = G__30404);

(invoc_array[(7)] = G__30405);

(invoc_array[(8)] = G__30406);

(invoc_array[(9)] = G__30407);

(invoc_array[(10)] = G__30408);

(invoc_array[(11)] = G__30409);

(invoc_array[(12)] = G__30410);

(invoc_array[(13)] = G__30411);

(invoc_array[(14)] = G__30412);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__30413,G__30414,G__30415,G__30416,G__30417,G__30418,G__30419,G__30420,G__30421,G__30422,G__30423,G__30424,G__30425,G__30426,G__30427,G__30428){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30413);

(invoc_array[(1)] = G__30414);

(invoc_array[(2)] = G__30415);

(invoc_array[(3)] = G__30416);

(invoc_array[(4)] = G__30417);

(invoc_array[(5)] = G__30418);

(invoc_array[(6)] = G__30419);

(invoc_array[(7)] = G__30420);

(invoc_array[(8)] = G__30421);

(invoc_array[(9)] = G__30422);

(invoc_array[(10)] = G__30423);

(invoc_array[(11)] = G__30424);

(invoc_array[(12)] = G__30425);

(invoc_array[(13)] = G__30426);

(invoc_array[(14)] = G__30427);

(invoc_array[(15)] = G__30428);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__30433,G__30434,G__30435,G__30436,G__30437,G__30438,G__30439,G__30440,G__30441,G__30442,G__30443,G__30444,G__30445,G__30446,G__30447,G__30448,G__30449){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30433);

(invoc_array[(1)] = G__30434);

(invoc_array[(2)] = G__30435);

(invoc_array[(3)] = G__30436);

(invoc_array[(4)] = G__30437);

(invoc_array[(5)] = G__30438);

(invoc_array[(6)] = G__30439);

(invoc_array[(7)] = G__30440);

(invoc_array[(8)] = G__30441);

(invoc_array[(9)] = G__30442);

(invoc_array[(10)] = G__30443);

(invoc_array[(11)] = G__30444);

(invoc_array[(12)] = G__30445);

(invoc_array[(13)] = G__30446);

(invoc_array[(14)] = G__30447);

(invoc_array[(15)] = G__30448);

(invoc_array[(16)] = G__30449);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__30455,G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30455);

(invoc_array[(1)] = G__30456);

(invoc_array[(2)] = G__30457);

(invoc_array[(3)] = G__30458);

(invoc_array[(4)] = G__30459);

(invoc_array[(5)] = G__30460);

(invoc_array[(6)] = G__30461);

(invoc_array[(7)] = G__30462);

(invoc_array[(8)] = G__30463);

(invoc_array[(9)] = G__30464);

(invoc_array[(10)] = G__30465);

(invoc_array[(11)] = G__30466);

(invoc_array[(12)] = G__30467);

(invoc_array[(13)] = G__30468);

(invoc_array[(14)] = G__30469);

(invoc_array[(15)] = G__30470);

(invoc_array[(16)] = G__30471);

(invoc_array[(17)] = G__30472);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__30473,G__30474,G__30475,G__30476,G__30477,G__30478,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488,G__30489,G__30490,G__30491){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30473);

(invoc_array[(1)] = G__30474);

(invoc_array[(2)] = G__30475);

(invoc_array[(3)] = G__30476);

(invoc_array[(4)] = G__30477);

(invoc_array[(5)] = G__30478);

(invoc_array[(6)] = G__30479);

(invoc_array[(7)] = G__30480);

(invoc_array[(8)] = G__30481);

(invoc_array[(9)] = G__30482);

(invoc_array[(10)] = G__30483);

(invoc_array[(11)] = G__30484);

(invoc_array[(12)] = G__30485);

(invoc_array[(13)] = G__30486);

(invoc_array[(14)] = G__30487);

(invoc_array[(15)] = G__30488);

(invoc_array[(16)] = G__30489);

(invoc_array[(17)] = G__30490);

(invoc_array[(18)] = G__30491);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514,G__30515,G__30516,G__30517,G__30518,G__30519,G__30520,G__30521,G__30522){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30503);

(invoc_array[(1)] = G__30504);

(invoc_array[(2)] = G__30505);

(invoc_array[(3)] = G__30506);

(invoc_array[(4)] = G__30507);

(invoc_array[(5)] = G__30508);

(invoc_array[(6)] = G__30509);

(invoc_array[(7)] = G__30510);

(invoc_array[(8)] = G__30511);

(invoc_array[(9)] = G__30512);

(invoc_array[(10)] = G__30513);

(invoc_array[(11)] = G__30514);

(invoc_array[(12)] = G__30515);

(invoc_array[(13)] = G__30516);

(invoc_array[(14)] = G__30517);

(invoc_array[(15)] = G__30518);

(invoc_array[(16)] = G__30519);

(invoc_array[(17)] = G__30520);

(invoc_array[(18)] = G__30521);

(invoc_array[(19)] = G__30522);

while(true){
var ret__29170__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29170__auto__)){
continue;
} else {
return ret__29170__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30260)].join('')));

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
var G__30930 = cljs.core.next(params__$1);
var G__30931 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__30932 = lets;
params__$1 = G__30930;
new_params = G__30931;
lets = G__30932;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__30933 = cljs.core.next(params__$1);
var G__30934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__30935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__30933;
new_params = G__30934;
lets = G__30935;
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
var len__5749__auto___30941 = arguments.length;
var i__5750__auto___30942 = (0);
while(true){
if((i__5750__auto___30942 < len__5749__auto___30941)){
args__5755__auto__.push((arguments[i__5750__auto___30942]));

var G__30943 = (i__5750__auto___30942 + (1));
i__5750__auto___30942 = G__30943;
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

var vec__30603 = sig;
var seq__30604 = cljs.core.seq(vec__30603);
var first__30605 = cljs.core.first(seq__30604);
var seq__30604__$1 = cljs.core.next(seq__30604);
var params = first__30605;
var body = seq__30604__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq30573){
var G__30574 = cljs.core.first(seq30573);
var seq30573__$1 = cljs.core.next(seq30573);
var G__30575 = cljs.core.first(seq30573__$1);
var seq30573__$2 = cljs.core.next(seq30573__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30574,G__30575,seq30573__$2);
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
var G__30951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__30952 = cljs.core.next(fdecls);
ret = G__30951;
fdecls = G__30952;
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
var len__5749__auto___30953 = arguments.length;
var i__5750__auto___30954 = (0);
while(true){
if((i__5750__auto___30954 < len__5749__auto___30953)){
args__5755__auto__.push((arguments[i__5750__auto___30954]));

var G__30955 = (i__5750__auto___30954 + (1));
i__5750__auto___30954 = G__30955;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq30654){
var G__30655 = cljs.core.first(seq30654);
var seq30654__$1 = cljs.core.next(seq30654);
var G__30656 = cljs.core.first(seq30654__$1);
var seq30654__$2 = cljs.core.next(seq30654__$1);
var G__30657 = cljs.core.first(seq30654__$2);
var seq30654__$3 = cljs.core.next(seq30654__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30655,G__30656,G__30657,seq30654__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30962 = arguments.length;
var i__5750__auto___30963 = (0);
while(true){
if((i__5750__auto___30963 < len__5749__auto___30962)){
args__5755__auto__.push((arguments[i__5750__auto___30963]));

var G__30964 = (i__5750__auto___30963 + (1));
i__5750__auto___30963 = G__30964;
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
var G__30968 = cljs.core.cons(f,p);
var G__30969 = cljs.core.next(args__$1);
p = G__30968;
args__$1 = G__30969;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__30970 = cljs.core.cons(f,p);
var G__30971 = cljs.core.next(args__$1);
p = G__30970;
args__$1 = G__30971;
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
var G__30972 = cljs.core.next(fd);
fd = G__30972;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__30973 = cljs.core.next(fd);
fd = G__30973;
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
var G__30976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__30977 = cljs.core.next(ds);
acc = G__30976;
ds = G__30977;
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
var G__30984 = cljs.core.next(p);
var G__30985 = cljs.core.cons(cljs.core.first(p),d);
p = G__30984;
d = G__30985;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq30664){
var G__30665 = cljs.core.first(seq30664);
var seq30664__$1 = cljs.core.next(seq30664);
var G__30666 = cljs.core.first(seq30664__$1);
var seq30664__$2 = cljs.core.next(seq30664__$1);
var G__30667 = cljs.core.first(seq30664__$2);
var seq30664__$3 = cljs.core.next(seq30664__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30665,G__30666,G__30667,seq30664__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
