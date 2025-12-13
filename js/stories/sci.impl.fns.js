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
var G__41045 = arguments.length;
switch (G__41045) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__41046 = fixed_arity;
switch (G__41046) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__41047){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__41047);

while(true){
var ret__40257__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40257__auto__)){
continue;
} else {
return ret__40257__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__41047 = null;
if (arguments.length > 0) {
var G__41750__i = 0, G__41750__a = new Array(arguments.length -  0);
while (G__41750__i < G__41750__a.length) {G__41750__a[G__41750__i] = arguments[G__41750__i + 0]; ++G__41750__i;}
  G__41047 = new cljs.core.IndexedSeq(G__41750__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__41047);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__41751){
var G__41047 = cljs.core.seq(arglist__41751);
return sci$impl$fns$arity_0__delegate(G__41047);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__41048,G__41049){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41048);

(invoc_array[vararg_idx] = G__41049);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__41048,var_args){
var G__41049 = null;
if (arguments.length > 1) {
var G__41752__i = 0, G__41752__a = new Array(arguments.length -  1);
while (G__41752__i < G__41752__a.length) {G__41752__a[G__41752__i] = arguments[G__41752__i + 1]; ++G__41752__i;}
  G__41049 = new cljs.core.IndexedSeq(G__41752__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__41048,G__41049);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__41754){
var G__41048 = cljs.core.first(arglist__41754);
var G__41049 = cljs.core.rest(arglist__41754);
return sci$impl$fns$arity_1__delegate(G__41048,G__41049);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__41050,G__41051,G__41052){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41050);

(invoc_array[(1)] = G__41051);

(invoc_array[vararg_idx] = G__41052);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__41050,G__41051,var_args){
var G__41052 = null;
if (arguments.length > 2) {
var G__41755__i = 0, G__41755__a = new Array(arguments.length -  2);
while (G__41755__i < G__41755__a.length) {G__41755__a[G__41755__i] = arguments[G__41755__i + 2]; ++G__41755__i;}
  G__41052 = new cljs.core.IndexedSeq(G__41755__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__41050,G__41051,G__41052);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__41756){
var G__41050 = cljs.core.first(arglist__41756);
arglist__41756 = cljs.core.next(arglist__41756);
var G__41051 = cljs.core.first(arglist__41756);
var G__41052 = cljs.core.rest(arglist__41756);
return sci$impl$fns$arity_2__delegate(G__41050,G__41051,G__41052);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__41055,G__41056,G__41057,G__41058){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41055);

(invoc_array[(1)] = G__41056);

(invoc_array[(2)] = G__41057);

(invoc_array[vararg_idx] = G__41058);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__41055,G__41056,G__41057,var_args){
var G__41058 = null;
if (arguments.length > 3) {
var G__41757__i = 0, G__41757__a = new Array(arguments.length -  3);
while (G__41757__i < G__41757__a.length) {G__41757__a[G__41757__i] = arguments[G__41757__i + 3]; ++G__41757__i;}
  G__41058 = new cljs.core.IndexedSeq(G__41757__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__41055,G__41056,G__41057,G__41058);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__41758){
var G__41055 = cljs.core.first(arglist__41758);
arglist__41758 = cljs.core.next(arglist__41758);
var G__41056 = cljs.core.first(arglist__41758);
arglist__41758 = cljs.core.next(arglist__41758);
var G__41057 = cljs.core.first(arglist__41758);
var G__41058 = cljs.core.rest(arglist__41758);
return sci$impl$fns$arity_3__delegate(G__41055,G__41056,G__41057,G__41058);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__41062,G__41063,G__41064,G__41065,G__41066){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41062);

(invoc_array[(1)] = G__41063);

(invoc_array[(2)] = G__41064);

(invoc_array[(3)] = G__41065);

(invoc_array[vararg_idx] = G__41066);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__41062,G__41063,G__41064,G__41065,var_args){
var G__41066 = null;
if (arguments.length > 4) {
var G__41759__i = 0, G__41759__a = new Array(arguments.length -  4);
while (G__41759__i < G__41759__a.length) {G__41759__a[G__41759__i] = arguments[G__41759__i + 4]; ++G__41759__i;}
  G__41066 = new cljs.core.IndexedSeq(G__41759__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__41062,G__41063,G__41064,G__41065,G__41066);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__41760){
var G__41062 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41063 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41064 = cljs.core.first(arglist__41760);
arglist__41760 = cljs.core.next(arglist__41760);
var G__41065 = cljs.core.first(arglist__41760);
var G__41066 = cljs.core.rest(arglist__41760);
return sci$impl$fns$arity_4__delegate(G__41062,G__41063,G__41064,G__41065,G__41066);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__41070,G__41071,G__41072,G__41073,G__41074,G__41075){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41070);

(invoc_array[(1)] = G__41071);

(invoc_array[(2)] = G__41072);

(invoc_array[(3)] = G__41073);

(invoc_array[(4)] = G__41074);

(invoc_array[vararg_idx] = G__41075);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__41070,G__41071,G__41072,G__41073,G__41074,var_args){
var G__41075 = null;
if (arguments.length > 5) {
var G__41763__i = 0, G__41763__a = new Array(arguments.length -  5);
while (G__41763__i < G__41763__a.length) {G__41763__a[G__41763__i] = arguments[G__41763__i + 5]; ++G__41763__i;}
  G__41075 = new cljs.core.IndexedSeq(G__41763__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__41765){
var G__41070 = cljs.core.first(arglist__41765);
arglist__41765 = cljs.core.next(arglist__41765);
var G__41071 = cljs.core.first(arglist__41765);
arglist__41765 = cljs.core.next(arglist__41765);
var G__41072 = cljs.core.first(arglist__41765);
arglist__41765 = cljs.core.next(arglist__41765);
var G__41073 = cljs.core.first(arglist__41765);
arglist__41765 = cljs.core.next(arglist__41765);
var G__41074 = cljs.core.first(arglist__41765);
var G__41075 = cljs.core.rest(arglist__41765);
return sci$impl$fns$arity_5__delegate(G__41070,G__41071,G__41072,G__41073,G__41074,G__41075);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41078);

(invoc_array[(1)] = G__41079);

(invoc_array[(2)] = G__41080);

(invoc_array[(3)] = G__41081);

(invoc_array[(4)] = G__41082);

(invoc_array[(5)] = G__41083);

(invoc_array[vararg_idx] = G__41084);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,var_args){
var G__41084 = null;
if (arguments.length > 6) {
var G__41842__i = 0, G__41842__a = new Array(arguments.length -  6);
while (G__41842__i < G__41842__a.length) {G__41842__a[G__41842__i] = arguments[G__41842__i + 6]; ++G__41842__i;}
  G__41084 = new cljs.core.IndexedSeq(G__41842__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__41844){
var G__41078 = cljs.core.first(arglist__41844);
arglist__41844 = cljs.core.next(arglist__41844);
var G__41079 = cljs.core.first(arglist__41844);
arglist__41844 = cljs.core.next(arglist__41844);
var G__41080 = cljs.core.first(arglist__41844);
arglist__41844 = cljs.core.next(arglist__41844);
var G__41081 = cljs.core.first(arglist__41844);
arglist__41844 = cljs.core.next(arglist__41844);
var G__41082 = cljs.core.first(arglist__41844);
arglist__41844 = cljs.core.next(arglist__41844);
var G__41083 = cljs.core.first(arglist__41844);
var G__41084 = cljs.core.rest(arglist__41844);
return sci$impl$fns$arity_6__delegate(G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41085);

(invoc_array[(1)] = G__41086);

(invoc_array[(2)] = G__41087);

(invoc_array[(3)] = G__41088);

(invoc_array[(4)] = G__41089);

(invoc_array[(5)] = G__41090);

(invoc_array[(6)] = G__41091);

(invoc_array[vararg_idx] = G__41092);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,var_args){
var G__41092 = null;
if (arguments.length > 7) {
var G__41848__i = 0, G__41848__a = new Array(arguments.length -  7);
while (G__41848__i < G__41848__a.length) {G__41848__a[G__41848__i] = arguments[G__41848__i + 7]; ++G__41848__i;}
  G__41092 = new cljs.core.IndexedSeq(G__41848__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__41849){
var G__41085 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41086 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41087 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41088 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41089 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41090 = cljs.core.first(arglist__41849);
arglist__41849 = cljs.core.next(arglist__41849);
var G__41091 = cljs.core.first(arglist__41849);
var G__41092 = cljs.core.rest(arglist__41849);
return sci$impl$fns$arity_7__delegate(G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41097);

(invoc_array[(1)] = G__41098);

(invoc_array[(2)] = G__41099);

(invoc_array[(3)] = G__41100);

(invoc_array[(4)] = G__41101);

(invoc_array[(5)] = G__41102);

(invoc_array[(6)] = G__41103);

(invoc_array[(7)] = G__41104);

(invoc_array[vararg_idx] = G__41105);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,var_args){
var G__41105 = null;
if (arguments.length > 8) {
var G__41857__i = 0, G__41857__a = new Array(arguments.length -  8);
while (G__41857__i < G__41857__a.length) {G__41857__a[G__41857__i] = arguments[G__41857__i + 8]; ++G__41857__i;}
  G__41105 = new cljs.core.IndexedSeq(G__41857__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__41858){
var G__41097 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41098 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41099 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41100 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41101 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41102 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41103 = cljs.core.first(arglist__41858);
arglist__41858 = cljs.core.next(arglist__41858);
var G__41104 = cljs.core.first(arglist__41858);
var G__41105 = cljs.core.rest(arglist__41858);
return sci$impl$fns$arity_8__delegate(G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41106);

(invoc_array[(1)] = G__41107);

(invoc_array[(2)] = G__41108);

(invoc_array[(3)] = G__41109);

(invoc_array[(4)] = G__41110);

(invoc_array[(5)] = G__41111);

(invoc_array[(6)] = G__41112);

(invoc_array[(7)] = G__41113);

(invoc_array[(8)] = G__41114);

(invoc_array[vararg_idx] = G__41115);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,var_args){
var G__41115 = null;
if (arguments.length > 9) {
var G__41862__i = 0, G__41862__a = new Array(arguments.length -  9);
while (G__41862__i < G__41862__a.length) {G__41862__a[G__41862__i] = arguments[G__41862__i + 9]; ++G__41862__i;}
  G__41115 = new cljs.core.IndexedSeq(G__41862__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__41863){
var G__41106 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41107 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41108 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41109 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41110 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41111 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41112 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41113 = cljs.core.first(arglist__41863);
arglist__41863 = cljs.core.next(arglist__41863);
var G__41114 = cljs.core.first(arglist__41863);
var G__41115 = cljs.core.rest(arglist__41863);
return sci$impl$fns$arity_9__delegate(G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41119);

(invoc_array[(1)] = G__41120);

(invoc_array[(2)] = G__41121);

(invoc_array[(3)] = G__41122);

(invoc_array[(4)] = G__41123);

(invoc_array[(5)] = G__41124);

(invoc_array[(6)] = G__41125);

(invoc_array[(7)] = G__41126);

(invoc_array[(8)] = G__41127);

(invoc_array[(9)] = G__41128);

(invoc_array[vararg_idx] = G__41129);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,var_args){
var G__41129 = null;
if (arguments.length > 10) {
var G__41868__i = 0, G__41868__a = new Array(arguments.length -  10);
while (G__41868__i < G__41868__a.length) {G__41868__a[G__41868__i] = arguments[G__41868__i + 10]; ++G__41868__i;}
  G__41129 = new cljs.core.IndexedSeq(G__41868__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41870){
var G__41119 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41120 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41121 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41122 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41123 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41124 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41125 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41126 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41127 = cljs.core.first(arglist__41870);
arglist__41870 = cljs.core.next(arglist__41870);
var G__41128 = cljs.core.first(arglist__41870);
var G__41129 = cljs.core.rest(arglist__41870);
return sci$impl$fns$arity_10__delegate(G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138,G__41139,G__41140,G__41141,G__41142){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41131);

(invoc_array[(1)] = G__41132);

(invoc_array[(2)] = G__41133);

(invoc_array[(3)] = G__41134);

(invoc_array[(4)] = G__41135);

(invoc_array[(5)] = G__41136);

(invoc_array[(6)] = G__41137);

(invoc_array[(7)] = G__41138);

(invoc_array[(8)] = G__41139);

(invoc_array[(9)] = G__41140);

(invoc_array[(10)] = G__41141);

(invoc_array[vararg_idx] = G__41142);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138,G__41139,G__41140,G__41141,var_args){
var G__41142 = null;
if (arguments.length > 11) {
var G__41873__i = 0, G__41873__a = new Array(arguments.length -  11);
while (G__41873__i < G__41873__a.length) {G__41873__a[G__41873__i] = arguments[G__41873__i + 11]; ++G__41873__i;}
  G__41142 = new cljs.core.IndexedSeq(G__41873__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138,G__41139,G__41140,G__41141,G__41142);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41874){
var G__41131 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41132 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41133 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41134 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41135 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41136 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41137 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41138 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41139 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41140 = cljs.core.first(arglist__41874);
arglist__41874 = cljs.core.next(arglist__41874);
var G__41141 = cljs.core.first(arglist__41874);
var G__41142 = cljs.core.rest(arglist__41874);
return sci$impl$fns$arity_11__delegate(G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138,G__41139,G__41140,G__41141,G__41142);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41143);

(invoc_array[(1)] = G__41144);

(invoc_array[(2)] = G__41145);

(invoc_array[(3)] = G__41146);

(invoc_array[(4)] = G__41147);

(invoc_array[(5)] = G__41148);

(invoc_array[(6)] = G__41149);

(invoc_array[(7)] = G__41150);

(invoc_array[(8)] = G__41151);

(invoc_array[(9)] = G__41152);

(invoc_array[(10)] = G__41153);

(invoc_array[(11)] = G__41154);

(invoc_array[vararg_idx] = G__41155);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,var_args){
var G__41155 = null;
if (arguments.length > 12) {
var G__41876__i = 0, G__41876__a = new Array(arguments.length -  12);
while (G__41876__i < G__41876__a.length) {G__41876__a[G__41876__i] = arguments[G__41876__i + 12]; ++G__41876__i;}
  G__41155 = new cljs.core.IndexedSeq(G__41876__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41877){
var G__41143 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41144 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41145 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41146 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41147 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41148 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41149 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41150 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41151 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41152 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41153 = cljs.core.first(arglist__41877);
arglist__41877 = cljs.core.next(arglist__41877);
var G__41154 = cljs.core.first(arglist__41877);
var G__41155 = cljs.core.rest(arglist__41877);
return sci$impl$fns$arity_12__delegate(G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41159);

(invoc_array[(1)] = G__41160);

(invoc_array[(2)] = G__41161);

(invoc_array[(3)] = G__41162);

(invoc_array[(4)] = G__41163);

(invoc_array[(5)] = G__41164);

(invoc_array[(6)] = G__41165);

(invoc_array[(7)] = G__41166);

(invoc_array[(8)] = G__41167);

(invoc_array[(9)] = G__41168);

(invoc_array[(10)] = G__41169);

(invoc_array[(11)] = G__41170);

(invoc_array[(12)] = G__41171);

(invoc_array[vararg_idx] = G__41172);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,var_args){
var G__41172 = null;
if (arguments.length > 13) {
var G__41878__i = 0, G__41878__a = new Array(arguments.length -  13);
while (G__41878__i < G__41878__a.length) {G__41878__a[G__41878__i] = arguments[G__41878__i + 13]; ++G__41878__i;}
  G__41172 = new cljs.core.IndexedSeq(G__41878__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41879){
var G__41159 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41160 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41161 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41162 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41163 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41164 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41165 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41166 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41167 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41168 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41169 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41170 = cljs.core.first(arglist__41879);
arglist__41879 = cljs.core.next(arglist__41879);
var G__41171 = cljs.core.first(arglist__41879);
var G__41172 = cljs.core.rest(arglist__41879);
return sci$impl$fns$arity_13__delegate(G__41159,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41174);

(invoc_array[(1)] = G__41175);

(invoc_array[(2)] = G__41176);

(invoc_array[(3)] = G__41177);

(invoc_array[(4)] = G__41178);

(invoc_array[(5)] = G__41179);

(invoc_array[(6)] = G__41180);

(invoc_array[(7)] = G__41181);

(invoc_array[(8)] = G__41182);

(invoc_array[(9)] = G__41183);

(invoc_array[(10)] = G__41184);

(invoc_array[(11)] = G__41185);

(invoc_array[(12)] = G__41186);

(invoc_array[(13)] = G__41187);

(invoc_array[vararg_idx] = G__41188);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,var_args){
var G__41188 = null;
if (arguments.length > 14) {
var G__41880__i = 0, G__41880__a = new Array(arguments.length -  14);
while (G__41880__i < G__41880__a.length) {G__41880__a[G__41880__i] = arguments[G__41880__i + 14]; ++G__41880__i;}
  G__41188 = new cljs.core.IndexedSeq(G__41880__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41881){
var G__41174 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41175 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41176 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41177 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41178 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41179 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41180 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41181 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41182 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41183 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41184 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41185 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41186 = cljs.core.first(arglist__41881);
arglist__41881 = cljs.core.next(arglist__41881);
var G__41187 = cljs.core.first(arglist__41881);
var G__41188 = cljs.core.rest(arglist__41881);
return sci$impl$fns$arity_14__delegate(G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41189);

(invoc_array[(1)] = G__41190);

(invoc_array[(2)] = G__41191);

(invoc_array[(3)] = G__41192);

(invoc_array[(4)] = G__41193);

(invoc_array[(5)] = G__41194);

(invoc_array[(6)] = G__41195);

(invoc_array[(7)] = G__41196);

(invoc_array[(8)] = G__41197);

(invoc_array[(9)] = G__41198);

(invoc_array[(10)] = G__41199);

(invoc_array[(11)] = G__41200);

(invoc_array[(12)] = G__41201);

(invoc_array[(13)] = G__41202);

(invoc_array[(14)] = G__41203);

(invoc_array[vararg_idx] = G__41204);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,var_args){
var G__41204 = null;
if (arguments.length > 15) {
var G__41889__i = 0, G__41889__a = new Array(arguments.length -  15);
while (G__41889__i < G__41889__a.length) {G__41889__a[G__41889__i] = arguments[G__41889__i + 15]; ++G__41889__i;}
  G__41204 = new cljs.core.IndexedSeq(G__41889__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41890){
var G__41189 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41190 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41191 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41192 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41193 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41194 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41195 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41196 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41197 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41198 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41199 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41200 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41201 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41202 = cljs.core.first(arglist__41890);
arglist__41890 = cljs.core.next(arglist__41890);
var G__41203 = cljs.core.first(arglist__41890);
var G__41204 = cljs.core.rest(arglist__41890);
return sci$impl$fns$arity_15__delegate(G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41209);

(invoc_array[(1)] = G__41210);

(invoc_array[(2)] = G__41211);

(invoc_array[(3)] = G__41212);

(invoc_array[(4)] = G__41213);

(invoc_array[(5)] = G__41214);

(invoc_array[(6)] = G__41215);

(invoc_array[(7)] = G__41216);

(invoc_array[(8)] = G__41217);

(invoc_array[(9)] = G__41218);

(invoc_array[(10)] = G__41219);

(invoc_array[(11)] = G__41220);

(invoc_array[(12)] = G__41221);

(invoc_array[(13)] = G__41222);

(invoc_array[(14)] = G__41223);

(invoc_array[(15)] = G__41224);

(invoc_array[vararg_idx] = G__41225);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,var_args){
var G__41225 = null;
if (arguments.length > 16) {
var G__41891__i = 0, G__41891__a = new Array(arguments.length -  16);
while (G__41891__i < G__41891__a.length) {G__41891__a[G__41891__i] = arguments[G__41891__i + 16]; ++G__41891__i;}
  G__41225 = new cljs.core.IndexedSeq(G__41891__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41892){
var G__41209 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41210 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41211 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41212 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41213 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41214 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41215 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41216 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41217 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41218 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41219 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41220 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41221 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41222 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41223 = cljs.core.first(arglist__41892);
arglist__41892 = cljs.core.next(arglist__41892);
var G__41224 = cljs.core.first(arglist__41892);
var G__41225 = cljs.core.rest(arglist__41892);
return sci$impl$fns$arity_16__delegate(G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__41229,G__41230,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243,G__41244,G__41245,G__41246){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41229);

(invoc_array[(1)] = G__41230);

(invoc_array[(2)] = G__41231);

(invoc_array[(3)] = G__41232);

(invoc_array[(4)] = G__41233);

(invoc_array[(5)] = G__41234);

(invoc_array[(6)] = G__41235);

(invoc_array[(7)] = G__41236);

(invoc_array[(8)] = G__41237);

(invoc_array[(9)] = G__41238);

(invoc_array[(10)] = G__41239);

(invoc_array[(11)] = G__41240);

(invoc_array[(12)] = G__41241);

(invoc_array[(13)] = G__41242);

(invoc_array[(14)] = G__41243);

(invoc_array[(15)] = G__41244);

(invoc_array[(16)] = G__41245);

(invoc_array[vararg_idx] = G__41246);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__41229,G__41230,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243,G__41244,G__41245,var_args){
var G__41246 = null;
if (arguments.length > 17) {
var G__41901__i = 0, G__41901__a = new Array(arguments.length -  17);
while (G__41901__i < G__41901__a.length) {G__41901__a[G__41901__i] = arguments[G__41901__i + 17]; ++G__41901__i;}
  G__41246 = new cljs.core.IndexedSeq(G__41901__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__41229,G__41230,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243,G__41244,G__41245,G__41246);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41902){
var G__41229 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41230 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41231 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41232 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41233 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41234 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41235 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41236 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41237 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41238 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41239 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41240 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41241 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41242 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41243 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41244 = cljs.core.first(arglist__41902);
arglist__41902 = cljs.core.next(arglist__41902);
var G__41245 = cljs.core.first(arglist__41902);
var G__41246 = cljs.core.rest(arglist__41902);
return sci$impl$fns$arity_17__delegate(G__41229,G__41230,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243,G__41244,G__41245,G__41246);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41254);

(invoc_array[(1)] = G__41255);

(invoc_array[(2)] = G__41256);

(invoc_array[(3)] = G__41257);

(invoc_array[(4)] = G__41258);

(invoc_array[(5)] = G__41259);

(invoc_array[(6)] = G__41260);

(invoc_array[(7)] = G__41261);

(invoc_array[(8)] = G__41262);

(invoc_array[(9)] = G__41263);

(invoc_array[(10)] = G__41264);

(invoc_array[(11)] = G__41265);

(invoc_array[(12)] = G__41266);

(invoc_array[(13)] = G__41267);

(invoc_array[(14)] = G__41268);

(invoc_array[(15)] = G__41269);

(invoc_array[(16)] = G__41270);

(invoc_array[(17)] = G__41271);

(invoc_array[vararg_idx] = G__41272);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,var_args){
var G__41272 = null;
if (arguments.length > 18) {
var G__41903__i = 0, G__41903__a = new Array(arguments.length -  18);
while (G__41903__i < G__41903__a.length) {G__41903__a[G__41903__i] = arguments[G__41903__i + 18]; ++G__41903__i;}
  G__41272 = new cljs.core.IndexedSeq(G__41903__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41904){
var G__41254 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41255 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41256 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41257 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41258 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41259 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41260 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41261 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41262 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41263 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41264 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41265 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41266 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41267 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41268 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41269 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41270 = cljs.core.first(arglist__41904);
arglist__41904 = cljs.core.next(arglist__41904);
var G__41271 = cljs.core.first(arglist__41904);
var G__41272 = cljs.core.rest(arglist__41904);
return sci$impl$fns$arity_18__delegate(G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__41288,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41288);

(invoc_array[(1)] = G__41289);

(invoc_array[(2)] = G__41290);

(invoc_array[(3)] = G__41291);

(invoc_array[(4)] = G__41292);

(invoc_array[(5)] = G__41293);

(invoc_array[(6)] = G__41294);

(invoc_array[(7)] = G__41295);

(invoc_array[(8)] = G__41296);

(invoc_array[(9)] = G__41297);

(invoc_array[(10)] = G__41298);

(invoc_array[(11)] = G__41299);

(invoc_array[(12)] = G__41300);

(invoc_array[(13)] = G__41301);

(invoc_array[(14)] = G__41302);

(invoc_array[(15)] = G__41303);

(invoc_array[(16)] = G__41304);

(invoc_array[(17)] = G__41305);

(invoc_array[(18)] = G__41306);

(invoc_array[vararg_idx] = G__41307);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__41288,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,var_args){
var G__41307 = null;
if (arguments.length > 19) {
var G__41915__i = 0, G__41915__a = new Array(arguments.length -  19);
while (G__41915__i < G__41915__a.length) {G__41915__a[G__41915__i] = arguments[G__41915__i + 19]; ++G__41915__i;}
  G__41307 = new cljs.core.IndexedSeq(G__41915__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__41288,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41916){
var G__41288 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41289 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41290 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41291 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41292 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41293 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41294 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41295 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41296 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41297 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41298 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41299 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41300 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41301 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41302 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41303 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41304 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41305 = cljs.core.first(arglist__41916);
arglist__41916 = cljs.core.next(arglist__41916);
var G__41306 = cljs.core.first(arglist__41916);
var G__41307 = cljs.core.rest(arglist__41916);
return sci$impl$fns$arity_19__delegate(G__41288,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,G__41336){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41316);

(invoc_array[(1)] = G__41317);

(invoc_array[(2)] = G__41318);

(invoc_array[(3)] = G__41319);

(invoc_array[(4)] = G__41320);

(invoc_array[(5)] = G__41321);

(invoc_array[(6)] = G__41322);

(invoc_array[(7)] = G__41323);

(invoc_array[(8)] = G__41324);

(invoc_array[(9)] = G__41325);

(invoc_array[(10)] = G__41326);

(invoc_array[(11)] = G__41327);

(invoc_array[(12)] = G__41328);

(invoc_array[(13)] = G__41329);

(invoc_array[(14)] = G__41330);

(invoc_array[(15)] = G__41331);

(invoc_array[(16)] = G__41332);

(invoc_array[(17)] = G__41333);

(invoc_array[(18)] = G__41334);

(invoc_array[(19)] = G__41335);

(invoc_array[vararg_idx] = G__41336);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,var_args){
var G__41336 = null;
if (arguments.length > 20) {
var G__41917__i = 0, G__41917__a = new Array(arguments.length -  20);
while (G__41917__i < G__41917__a.length) {G__41917__a[G__41917__i] = arguments[G__41917__i + 20]; ++G__41917__i;}
  G__41336 = new cljs.core.IndexedSeq(G__41917__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,G__41336);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41918){
var G__41316 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41317 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41318 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41319 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41320 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41321 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41322 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41323 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41324 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41325 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41326 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41327 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41328 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41329 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41330 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41331 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41332 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41333 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41334 = cljs.core.first(arglist__41918);
arglist__41918 = cljs.core.next(arglist__41918);
var G__41335 = cljs.core.first(arglist__41918);
var G__41336 = cljs.core.rest(arglist__41918);
return sci$impl$fns$arity_20__delegate(G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,G__41336);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41046)].join('')));

}
})():(function (){var G__41348 = fixed_arity;
switch (G__41348) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__40257__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40257__auto__)){
continue;
} else {
return ret__40257__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__41349){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41349);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__41350,G__41351){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41350);

(invoc_array[(1)] = G__41351);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__41352,G__41353,G__41354){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41352);

(invoc_array[(1)] = G__41353);

(invoc_array[(2)] = G__41354);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__41362,G__41363,G__41364,G__41365){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41362);

(invoc_array[(1)] = G__41363);

(invoc_array[(2)] = G__41364);

(invoc_array[(3)] = G__41365);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__41366,G__41367,G__41368,G__41369,G__41370){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41366);

(invoc_array[(1)] = G__41367);

(invoc_array[(2)] = G__41368);

(invoc_array[(3)] = G__41369);

(invoc_array[(4)] = G__41370);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__41371,G__41372,G__41373,G__41374,G__41375,G__41376){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41371);

(invoc_array[(1)] = G__41372);

(invoc_array[(2)] = G__41373);

(invoc_array[(3)] = G__41374);

(invoc_array[(4)] = G__41375);

(invoc_array[(5)] = G__41376);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__41384,G__41385,G__41386,G__41387,G__41388,G__41389,G__41390){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41384);

(invoc_array[(1)] = G__41385);

(invoc_array[(2)] = G__41386);

(invoc_array[(3)] = G__41387);

(invoc_array[(4)] = G__41388);

(invoc_array[(5)] = G__41389);

(invoc_array[(6)] = G__41390);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__41391,G__41392,G__41393,G__41394,G__41395,G__41396,G__41397,G__41398){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41391);

(invoc_array[(1)] = G__41392);

(invoc_array[(2)] = G__41393);

(invoc_array[(3)] = G__41394);

(invoc_array[(4)] = G__41395);

(invoc_array[(5)] = G__41396);

(invoc_array[(6)] = G__41397);

(invoc_array[(7)] = G__41398);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__41401,G__41402,G__41403,G__41404,G__41405,G__41406,G__41407,G__41408,G__41409){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41401);

(invoc_array[(1)] = G__41402);

(invoc_array[(2)] = G__41403);

(invoc_array[(3)] = G__41404);

(invoc_array[(4)] = G__41405);

(invoc_array[(5)] = G__41406);

(invoc_array[(6)] = G__41407);

(invoc_array[(7)] = G__41408);

(invoc_array[(8)] = G__41409);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__41410,G__41411,G__41412,G__41413,G__41414,G__41415,G__41416,G__41417,G__41418,G__41419){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41410);

(invoc_array[(1)] = G__41411);

(invoc_array[(2)] = G__41412);

(invoc_array[(3)] = G__41413);

(invoc_array[(4)] = G__41414);

(invoc_array[(5)] = G__41415);

(invoc_array[(6)] = G__41416);

(invoc_array[(7)] = G__41417);

(invoc_array[(8)] = G__41418);

(invoc_array[(9)] = G__41419);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__41422,G__41423,G__41424,G__41425,G__41426,G__41427,G__41428,G__41429,G__41430,G__41431,G__41432){
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

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__41433,G__41434,G__41435,G__41436,G__41437,G__41438,G__41439,G__41440,G__41441,G__41442,G__41443,G__41444){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41433);

(invoc_array[(1)] = G__41434);

(invoc_array[(2)] = G__41435);

(invoc_array[(3)] = G__41436);

(invoc_array[(4)] = G__41437);

(invoc_array[(5)] = G__41438);

(invoc_array[(6)] = G__41439);

(invoc_array[(7)] = G__41440);

(invoc_array[(8)] = G__41441);

(invoc_array[(9)] = G__41442);

(invoc_array[(10)] = G__41443);

(invoc_array[(11)] = G__41444);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__41449,G__41450,G__41451,G__41452,G__41453,G__41454,G__41455,G__41456,G__41457,G__41458,G__41459,G__41460,G__41461){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41449);

(invoc_array[(1)] = G__41450);

(invoc_array[(2)] = G__41451);

(invoc_array[(3)] = G__41452);

(invoc_array[(4)] = G__41453);

(invoc_array[(5)] = G__41454);

(invoc_array[(6)] = G__41455);

(invoc_array[(7)] = G__41456);

(invoc_array[(8)] = G__41457);

(invoc_array[(9)] = G__41458);

(invoc_array[(10)] = G__41459);

(invoc_array[(11)] = G__41460);

(invoc_array[(12)] = G__41461);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__41462,G__41463,G__41464,G__41465,G__41466,G__41467,G__41468,G__41469,G__41470,G__41471,G__41472,G__41473,G__41474,G__41475){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41462);

(invoc_array[(1)] = G__41463);

(invoc_array[(2)] = G__41464);

(invoc_array[(3)] = G__41465);

(invoc_array[(4)] = G__41466);

(invoc_array[(5)] = G__41467);

(invoc_array[(6)] = G__41468);

(invoc_array[(7)] = G__41469);

(invoc_array[(8)] = G__41470);

(invoc_array[(9)] = G__41471);

(invoc_array[(10)] = G__41472);

(invoc_array[(11)] = G__41473);

(invoc_array[(12)] = G__41474);

(invoc_array[(13)] = G__41475);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__41476,G__41477,G__41478,G__41479,G__41480,G__41481,G__41482,G__41483,G__41484,G__41485,G__41486,G__41487,G__41488,G__41489,G__41490){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41476);

(invoc_array[(1)] = G__41477);

(invoc_array[(2)] = G__41478);

(invoc_array[(3)] = G__41479);

(invoc_array[(4)] = G__41480);

(invoc_array[(5)] = G__41481);

(invoc_array[(6)] = G__41482);

(invoc_array[(7)] = G__41483);

(invoc_array[(8)] = G__41484);

(invoc_array[(9)] = G__41485);

(invoc_array[(10)] = G__41486);

(invoc_array[(11)] = G__41487);

(invoc_array[(12)] = G__41488);

(invoc_array[(13)] = G__41489);

(invoc_array[(14)] = G__41490);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__41491,G__41492,G__41493,G__41494,G__41495,G__41496,G__41497,G__41498,G__41499,G__41500,G__41501,G__41502,G__41503,G__41504,G__41505,G__41506){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41491);

(invoc_array[(1)] = G__41492);

(invoc_array[(2)] = G__41493);

(invoc_array[(3)] = G__41494);

(invoc_array[(4)] = G__41495);

(invoc_array[(5)] = G__41496);

(invoc_array[(6)] = G__41497);

(invoc_array[(7)] = G__41498);

(invoc_array[(8)] = G__41499);

(invoc_array[(9)] = G__41500);

(invoc_array[(10)] = G__41501);

(invoc_array[(11)] = G__41502);

(invoc_array[(12)] = G__41503);

(invoc_array[(13)] = G__41504);

(invoc_array[(14)] = G__41505);

(invoc_array[(15)] = G__41506);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__41512,G__41513,G__41514,G__41515,G__41516,G__41517,G__41518,G__41519,G__41520,G__41521,G__41522,G__41523,G__41524,G__41525,G__41526,G__41527,G__41528){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41512);

(invoc_array[(1)] = G__41513);

(invoc_array[(2)] = G__41514);

(invoc_array[(3)] = G__41515);

(invoc_array[(4)] = G__41516);

(invoc_array[(5)] = G__41517);

(invoc_array[(6)] = G__41518);

(invoc_array[(7)] = G__41519);

(invoc_array[(8)] = G__41520);

(invoc_array[(9)] = G__41521);

(invoc_array[(10)] = G__41522);

(invoc_array[(11)] = G__41523);

(invoc_array[(12)] = G__41524);

(invoc_array[(13)] = G__41525);

(invoc_array[(14)] = G__41526);

(invoc_array[(15)] = G__41527);

(invoc_array[(16)] = G__41528);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__41538,G__41539,G__41540,G__41541,G__41542,G__41543,G__41544,G__41545,G__41546,G__41547,G__41548,G__41549,G__41550,G__41551,G__41552,G__41553,G__41554,G__41555){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41538);

(invoc_array[(1)] = G__41539);

(invoc_array[(2)] = G__41540);

(invoc_array[(3)] = G__41541);

(invoc_array[(4)] = G__41542);

(invoc_array[(5)] = G__41543);

(invoc_array[(6)] = G__41544);

(invoc_array[(7)] = G__41545);

(invoc_array[(8)] = G__41546);

(invoc_array[(9)] = G__41547);

(invoc_array[(10)] = G__41548);

(invoc_array[(11)] = G__41549);

(invoc_array[(12)] = G__41550);

(invoc_array[(13)] = G__41551);

(invoc_array[(14)] = G__41552);

(invoc_array[(15)] = G__41553);

(invoc_array[(16)] = G__41554);

(invoc_array[(17)] = G__41555);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__41557,G__41558,G__41559,G__41560,G__41561,G__41562,G__41563,G__41564,G__41565,G__41566,G__41567,G__41568,G__41569,G__41570,G__41571,G__41572,G__41573,G__41574,G__41575){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41557);

(invoc_array[(1)] = G__41558);

(invoc_array[(2)] = G__41559);

(invoc_array[(3)] = G__41560);

(invoc_array[(4)] = G__41561);

(invoc_array[(5)] = G__41562);

(invoc_array[(6)] = G__41563);

(invoc_array[(7)] = G__41564);

(invoc_array[(8)] = G__41565);

(invoc_array[(9)] = G__41566);

(invoc_array[(10)] = G__41567);

(invoc_array[(11)] = G__41568);

(invoc_array[(12)] = G__41569);

(invoc_array[(13)] = G__41570);

(invoc_array[(14)] = G__41571);

(invoc_array[(15)] = G__41572);

(invoc_array[(16)] = G__41573);

(invoc_array[(17)] = G__41574);

(invoc_array[(18)] = G__41575);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__41581,G__41582,G__41583,G__41584,G__41585,G__41586,G__41587,G__41588,G__41589,G__41590,G__41591,G__41592,G__41593,G__41594,G__41595,G__41596,G__41597,G__41598,G__41599,G__41600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41581);

(invoc_array[(1)] = G__41582);

(invoc_array[(2)] = G__41583);

(invoc_array[(3)] = G__41584);

(invoc_array[(4)] = G__41585);

(invoc_array[(5)] = G__41586);

(invoc_array[(6)] = G__41587);

(invoc_array[(7)] = G__41588);

(invoc_array[(8)] = G__41589);

(invoc_array[(9)] = G__41590);

(invoc_array[(10)] = G__41591);

(invoc_array[(11)] = G__41592);

(invoc_array[(12)] = G__41593);

(invoc_array[(13)] = G__41594);

(invoc_array[(14)] = G__41595);

(invoc_array[(15)] = G__41596);

(invoc_array[(16)] = G__41597);

(invoc_array[(17)] = G__41598);

(invoc_array[(18)] = G__41599);

(invoc_array[(19)] = G__41600);

while(true){
var ret__40258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40258__auto__)){
continue;
} else {
return ret__40258__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41348)].join('')));

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
var G__41957 = cljs.core.next(params__$1);
var G__41958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41959 = lets;
params__$1 = G__41957;
new_params = G__41958;
lets = G__41959;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41961 = cljs.core.next(params__$1);
var G__41962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41961;
new_params = G__41962;
lets = G__41963;
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
var len__5749__auto___41964 = arguments.length;
var i__5750__auto___41965 = (0);
while(true){
if((i__5750__auto___41965 < len__5749__auto___41964)){
args__5755__auto__.push((arguments[i__5750__auto___41965]));

var G__41966 = (i__5750__auto___41965 + (1));
i__5750__auto___41965 = G__41966;
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

var vec__41640 = sig;
var seq__41641 = cljs.core.seq(vec__41640);
var first__41642 = cljs.core.first(seq__41641);
var seq__41641__$1 = cljs.core.next(seq__41641);
var params = first__41642;
var body = seq__41641__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq41631){
var G__41632 = cljs.core.first(seq41631);
var seq41631__$1 = cljs.core.next(seq41631);
var G__41633 = cljs.core.first(seq41631__$1);
var seq41631__$2 = cljs.core.next(seq41631__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41632,G__41633,seq41631__$2);
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
var G__41975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41976 = cljs.core.next(fdecls);
ret = G__41975;
fdecls = G__41976;
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
var len__5749__auto___41978 = arguments.length;
var i__5750__auto___41979 = (0);
while(true){
if((i__5750__auto___41979 < len__5749__auto___41978)){
args__5755__auto__.push((arguments[i__5750__auto___41979]));

var G__41980 = (i__5750__auto___41979 + (1));
i__5750__auto___41979 = G__41980;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq41660){
var G__41661 = cljs.core.first(seq41660);
var seq41660__$1 = cljs.core.next(seq41660);
var G__41662 = cljs.core.first(seq41660__$1);
var seq41660__$2 = cljs.core.next(seq41660__$1);
var G__41663 = cljs.core.first(seq41660__$2);
var seq41660__$3 = cljs.core.next(seq41660__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41661,G__41662,G__41663,seq41660__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41989 = arguments.length;
var i__5750__auto___41990 = (0);
while(true){
if((i__5750__auto___41990 < len__5749__auto___41989)){
args__5755__auto__.push((arguments[i__5750__auto___41990]));

var G__41991 = (i__5750__auto___41990 + (1));
i__5750__auto___41990 = G__41991;
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
var G__41995 = cljs.core.cons(f,p);
var G__41996 = cljs.core.next(args__$1);
p = G__41995;
args__$1 = G__41996;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41997 = cljs.core.cons(f,p);
var G__41998 = cljs.core.next(args__$1);
p = G__41997;
args__$1 = G__41998;
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
var G__42000 = cljs.core.next(fd);
fd = G__42000;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__42001 = cljs.core.next(fd);
fd = G__42001;
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
var G__42007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__42008 = cljs.core.next(ds);
acc = G__42007;
ds = G__42008;
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
var G__42009 = cljs.core.next(p);
var G__42010 = cljs.core.cons(cljs.core.first(p),d);
p = G__42009;
d = G__42010;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq41686){
var G__41687 = cljs.core.first(seq41686);
var seq41686__$1 = cljs.core.next(seq41686);
var G__41688 = cljs.core.first(seq41686__$1);
var seq41686__$2 = cljs.core.next(seq41686__$1);
var G__41689 = cljs.core.first(seq41686__$2);
var seq41686__$3 = cljs.core.next(seq41686__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41687,G__41688,G__41689,seq41686__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
