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
var G__29864 = arguments.length;
switch (G__29864) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__29865 = fixed_arity;
switch (G__29865) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__29866){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__29866);

while(true){
var ret__29139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29139__auto__)){
continue;
} else {
return ret__29139__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__29866 = null;
if (arguments.length > 0) {
var G__30545__i = 0, G__30545__a = new Array(arguments.length -  0);
while (G__30545__i < G__30545__a.length) {G__30545__a[G__30545__i] = arguments[G__30545__i + 0]; ++G__30545__i;}
  G__29866 = new cljs.core.IndexedSeq(G__30545__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__29866);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__30546){
var G__29866 = cljs.core.seq(arglist__30546);
return sci$impl$fns$arity_0__delegate(G__29866);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__29869,G__29870){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29869);

(invoc_array[vararg_idx] = G__29870);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__29869,var_args){
var G__29870 = null;
if (arguments.length > 1) {
var G__30547__i = 0, G__30547__a = new Array(arguments.length -  1);
while (G__30547__i < G__30547__a.length) {G__30547__a[G__30547__i] = arguments[G__30547__i + 1]; ++G__30547__i;}
  G__29870 = new cljs.core.IndexedSeq(G__30547__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__29869,G__29870);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__30548){
var G__29869 = cljs.core.first(arglist__30548);
var G__29870 = cljs.core.rest(arglist__30548);
return sci$impl$fns$arity_1__delegate(G__29869,G__29870);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__29872,G__29873,G__29874){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29872);

(invoc_array[(1)] = G__29873);

(invoc_array[vararg_idx] = G__29874);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__29872,G__29873,var_args){
var G__29874 = null;
if (arguments.length > 2) {
var G__30549__i = 0, G__30549__a = new Array(arguments.length -  2);
while (G__30549__i < G__30549__a.length) {G__30549__a[G__30549__i] = arguments[G__30549__i + 2]; ++G__30549__i;}
  G__29874 = new cljs.core.IndexedSeq(G__30549__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__29872,G__29873,G__29874);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__30550){
var G__29872 = cljs.core.first(arglist__30550);
arglist__30550 = cljs.core.next(arglist__30550);
var G__29873 = cljs.core.first(arglist__30550);
var G__29874 = cljs.core.rest(arglist__30550);
return sci$impl$fns$arity_2__delegate(G__29872,G__29873,G__29874);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__29875,G__29876,G__29877,G__29878){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29875);

(invoc_array[(1)] = G__29876);

(invoc_array[(2)] = G__29877);

(invoc_array[vararg_idx] = G__29878);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__29875,G__29876,G__29877,var_args){
var G__29878 = null;
if (arguments.length > 3) {
var G__30551__i = 0, G__30551__a = new Array(arguments.length -  3);
while (G__30551__i < G__30551__a.length) {G__30551__a[G__30551__i] = arguments[G__30551__i + 3]; ++G__30551__i;}
  G__29878 = new cljs.core.IndexedSeq(G__30551__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__29875,G__29876,G__29877,G__29878);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__30552){
var G__29875 = cljs.core.first(arglist__30552);
arglist__30552 = cljs.core.next(arglist__30552);
var G__29876 = cljs.core.first(arglist__30552);
arglist__30552 = cljs.core.next(arglist__30552);
var G__29877 = cljs.core.first(arglist__30552);
var G__29878 = cljs.core.rest(arglist__30552);
return sci$impl$fns$arity_3__delegate(G__29875,G__29876,G__29877,G__29878);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__29879,G__29880,G__29881,G__29882,G__29883){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29879);

(invoc_array[(1)] = G__29880);

(invoc_array[(2)] = G__29881);

(invoc_array[(3)] = G__29882);

(invoc_array[vararg_idx] = G__29883);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__29879,G__29880,G__29881,G__29882,var_args){
var G__29883 = null;
if (arguments.length > 4) {
var G__30555__i = 0, G__30555__a = new Array(arguments.length -  4);
while (G__30555__i < G__30555__a.length) {G__30555__a[G__30555__i] = arguments[G__30555__i + 4]; ++G__30555__i;}
  G__29883 = new cljs.core.IndexedSeq(G__30555__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__29879,G__29880,G__29881,G__29882,G__29883);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__30556){
var G__29879 = cljs.core.first(arglist__30556);
arglist__30556 = cljs.core.next(arglist__30556);
var G__29880 = cljs.core.first(arglist__30556);
arglist__30556 = cljs.core.next(arglist__30556);
var G__29881 = cljs.core.first(arglist__30556);
arglist__30556 = cljs.core.next(arglist__30556);
var G__29882 = cljs.core.first(arglist__30556);
var G__29883 = cljs.core.rest(arglist__30556);
return sci$impl$fns$arity_4__delegate(G__29879,G__29880,G__29881,G__29882,G__29883);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__29884,G__29885,G__29886,G__29887,G__29888,G__29889){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29884);

(invoc_array[(1)] = G__29885);

(invoc_array[(2)] = G__29886);

(invoc_array[(3)] = G__29887);

(invoc_array[(4)] = G__29888);

(invoc_array[vararg_idx] = G__29889);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__29884,G__29885,G__29886,G__29887,G__29888,var_args){
var G__29889 = null;
if (arguments.length > 5) {
var G__30558__i = 0, G__30558__a = new Array(arguments.length -  5);
while (G__30558__i < G__30558__a.length) {G__30558__a[G__30558__i] = arguments[G__30558__i + 5]; ++G__30558__i;}
  G__29889 = new cljs.core.IndexedSeq(G__30558__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__29884,G__29885,G__29886,G__29887,G__29888,G__29889);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__30559){
var G__29884 = cljs.core.first(arglist__30559);
arglist__30559 = cljs.core.next(arglist__30559);
var G__29885 = cljs.core.first(arglist__30559);
arglist__30559 = cljs.core.next(arglist__30559);
var G__29886 = cljs.core.first(arglist__30559);
arglist__30559 = cljs.core.next(arglist__30559);
var G__29887 = cljs.core.first(arglist__30559);
arglist__30559 = cljs.core.next(arglist__30559);
var G__29888 = cljs.core.first(arglist__30559);
var G__29889 = cljs.core.rest(arglist__30559);
return sci$impl$fns$arity_5__delegate(G__29884,G__29885,G__29886,G__29887,G__29888,G__29889);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,G__29896){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29890);

(invoc_array[(1)] = G__29891);

(invoc_array[(2)] = G__29892);

(invoc_array[(3)] = G__29893);

(invoc_array[(4)] = G__29894);

(invoc_array[(5)] = G__29895);

(invoc_array[vararg_idx] = G__29896);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,var_args){
var G__29896 = null;
if (arguments.length > 6) {
var G__30565__i = 0, G__30565__a = new Array(arguments.length -  6);
while (G__30565__i < G__30565__a.length) {G__30565__a[G__30565__i] = arguments[G__30565__i + 6]; ++G__30565__i;}
  G__29896 = new cljs.core.IndexedSeq(G__30565__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,G__29896);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__30566){
var G__29890 = cljs.core.first(arglist__30566);
arglist__30566 = cljs.core.next(arglist__30566);
var G__29891 = cljs.core.first(arglist__30566);
arglist__30566 = cljs.core.next(arglist__30566);
var G__29892 = cljs.core.first(arglist__30566);
arglist__30566 = cljs.core.next(arglist__30566);
var G__29893 = cljs.core.first(arglist__30566);
arglist__30566 = cljs.core.next(arglist__30566);
var G__29894 = cljs.core.first(arglist__30566);
arglist__30566 = cljs.core.next(arglist__30566);
var G__29895 = cljs.core.first(arglist__30566);
var G__29896 = cljs.core.rest(arglist__30566);
return sci$impl$fns$arity_6__delegate(G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,G__29896);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__29897,G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,G__29904){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29897);

(invoc_array[(1)] = G__29898);

(invoc_array[(2)] = G__29899);

(invoc_array[(3)] = G__29900);

(invoc_array[(4)] = G__29901);

(invoc_array[(5)] = G__29902);

(invoc_array[(6)] = G__29903);

(invoc_array[vararg_idx] = G__29904);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__29897,G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,var_args){
var G__29904 = null;
if (arguments.length > 7) {
var G__30569__i = 0, G__30569__a = new Array(arguments.length -  7);
while (G__30569__i < G__30569__a.length) {G__30569__a[G__30569__i] = arguments[G__30569__i + 7]; ++G__30569__i;}
  G__29904 = new cljs.core.IndexedSeq(G__30569__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__29897,G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,G__29904);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__30571){
var G__29897 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29898 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29899 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29900 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29901 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29902 = cljs.core.first(arglist__30571);
arglist__30571 = cljs.core.next(arglist__30571);
var G__29903 = cljs.core.first(arglist__30571);
var G__29904 = cljs.core.rest(arglist__30571);
return sci$impl$fns$arity_7__delegate(G__29897,G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,G__29904);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__29909,G__29910,G__29911,G__29912,G__29913,G__29914,G__29915,G__29916,G__29917){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29909);

(invoc_array[(1)] = G__29910);

(invoc_array[(2)] = G__29911);

(invoc_array[(3)] = G__29912);

(invoc_array[(4)] = G__29913);

(invoc_array[(5)] = G__29914);

(invoc_array[(6)] = G__29915);

(invoc_array[(7)] = G__29916);

(invoc_array[vararg_idx] = G__29917);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__29909,G__29910,G__29911,G__29912,G__29913,G__29914,G__29915,G__29916,var_args){
var G__29917 = null;
if (arguments.length > 8) {
var G__30572__i = 0, G__30572__a = new Array(arguments.length -  8);
while (G__30572__i < G__30572__a.length) {G__30572__a[G__30572__i] = arguments[G__30572__i + 8]; ++G__30572__i;}
  G__29917 = new cljs.core.IndexedSeq(G__30572__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__29909,G__29910,G__29911,G__29912,G__29913,G__29914,G__29915,G__29916,G__29917);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__30573){
var G__29909 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29910 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29911 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29912 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29913 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29914 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29915 = cljs.core.first(arglist__30573);
arglist__30573 = cljs.core.next(arglist__30573);
var G__29916 = cljs.core.first(arglist__30573);
var G__29917 = cljs.core.rest(arglist__30573);
return sci$impl$fns$arity_8__delegate(G__29909,G__29910,G__29911,G__29912,G__29913,G__29914,G__29915,G__29916,G__29917);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,G__29927){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29918);

(invoc_array[(1)] = G__29919);

(invoc_array[(2)] = G__29920);

(invoc_array[(3)] = G__29921);

(invoc_array[(4)] = G__29922);

(invoc_array[(5)] = G__29923);

(invoc_array[(6)] = G__29924);

(invoc_array[(7)] = G__29925);

(invoc_array[(8)] = G__29926);

(invoc_array[vararg_idx] = G__29927);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,var_args){
var G__29927 = null;
if (arguments.length > 9) {
var G__30574__i = 0, G__30574__a = new Array(arguments.length -  9);
while (G__30574__i < G__30574__a.length) {G__30574__a[G__30574__i] = arguments[G__30574__i + 9]; ++G__30574__i;}
  G__29927 = new cljs.core.IndexedSeq(G__30574__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,G__29927);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__30575){
var G__29918 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29919 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29920 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29921 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29922 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29923 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29924 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29925 = cljs.core.first(arglist__30575);
arglist__30575 = cljs.core.next(arglist__30575);
var G__29926 = cljs.core.first(arglist__30575);
var G__29927 = cljs.core.rest(arglist__30575);
return sci$impl$fns$arity_9__delegate(G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,G__29927);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__29928,G__29929,G__29930,G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,G__29938){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29928);

(invoc_array[(1)] = G__29929);

(invoc_array[(2)] = G__29930);

(invoc_array[(3)] = G__29931);

(invoc_array[(4)] = G__29932);

(invoc_array[(5)] = G__29933);

(invoc_array[(6)] = G__29934);

(invoc_array[(7)] = G__29935);

(invoc_array[(8)] = G__29936);

(invoc_array[(9)] = G__29937);

(invoc_array[vararg_idx] = G__29938);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__29928,G__29929,G__29930,G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,var_args){
var G__29938 = null;
if (arguments.length > 10) {
var G__30578__i = 0, G__30578__a = new Array(arguments.length -  10);
while (G__30578__i < G__30578__a.length) {G__30578__a[G__30578__i] = arguments[G__30578__i + 10]; ++G__30578__i;}
  G__29938 = new cljs.core.IndexedSeq(G__30578__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__29928,G__29929,G__29930,G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,G__29938);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__30579){
var G__29928 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29929 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29930 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29931 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29932 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29933 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29934 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29935 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29936 = cljs.core.first(arglist__30579);
arglist__30579 = cljs.core.next(arglist__30579);
var G__29937 = cljs.core.first(arglist__30579);
var G__29938 = cljs.core.rest(arglist__30579);
return sci$impl$fns$arity_10__delegate(G__29928,G__29929,G__29930,G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,G__29938);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946,G__29947,G__29948,G__29949,G__29950){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29939);

(invoc_array[(1)] = G__29940);

(invoc_array[(2)] = G__29941);

(invoc_array[(3)] = G__29942);

(invoc_array[(4)] = G__29943);

(invoc_array[(5)] = G__29944);

(invoc_array[(6)] = G__29945);

(invoc_array[(7)] = G__29946);

(invoc_array[(8)] = G__29947);

(invoc_array[(9)] = G__29948);

(invoc_array[(10)] = G__29949);

(invoc_array[vararg_idx] = G__29950);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946,G__29947,G__29948,G__29949,var_args){
var G__29950 = null;
if (arguments.length > 11) {
var G__30580__i = 0, G__30580__a = new Array(arguments.length -  11);
while (G__30580__i < G__30580__a.length) {G__30580__a[G__30580__i] = arguments[G__30580__i + 11]; ++G__30580__i;}
  G__29950 = new cljs.core.IndexedSeq(G__30580__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946,G__29947,G__29948,G__29949,G__29950);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__30581){
var G__29939 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29940 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29941 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29942 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29943 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29944 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29945 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29946 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29947 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29948 = cljs.core.first(arglist__30581);
arglist__30581 = cljs.core.next(arglist__30581);
var G__29949 = cljs.core.first(arglist__30581);
var G__29950 = cljs.core.rest(arglist__30581);
return sci$impl$fns$arity_11__delegate(G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946,G__29947,G__29948,G__29949,G__29950);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,G__29963){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29951);

(invoc_array[(1)] = G__29952);

(invoc_array[(2)] = G__29953);

(invoc_array[(3)] = G__29954);

(invoc_array[(4)] = G__29955);

(invoc_array[(5)] = G__29956);

(invoc_array[(6)] = G__29957);

(invoc_array[(7)] = G__29958);

(invoc_array[(8)] = G__29959);

(invoc_array[(9)] = G__29960);

(invoc_array[(10)] = G__29961);

(invoc_array[(11)] = G__29962);

(invoc_array[vararg_idx] = G__29963);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,var_args){
var G__29963 = null;
if (arguments.length > 12) {
var G__30585__i = 0, G__30585__a = new Array(arguments.length -  12);
while (G__30585__i < G__30585__a.length) {G__30585__a[G__30585__i] = arguments[G__30585__i + 12]; ++G__30585__i;}
  G__29963 = new cljs.core.IndexedSeq(G__30585__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,G__29963);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__30586){
var G__29951 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29952 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29953 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29954 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29955 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29956 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29957 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29958 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29959 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29960 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29961 = cljs.core.first(arglist__30586);
arglist__30586 = cljs.core.next(arglist__30586);
var G__29962 = cljs.core.first(arglist__30586);
var G__29963 = cljs.core.rest(arglist__30586);
return sci$impl$fns$arity_12__delegate(G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,G__29963);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,G__29977){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29964);

(invoc_array[(1)] = G__29965);

(invoc_array[(2)] = G__29966);

(invoc_array[(3)] = G__29967);

(invoc_array[(4)] = G__29968);

(invoc_array[(5)] = G__29969);

(invoc_array[(6)] = G__29970);

(invoc_array[(7)] = G__29971);

(invoc_array[(8)] = G__29972);

(invoc_array[(9)] = G__29973);

(invoc_array[(10)] = G__29974);

(invoc_array[(11)] = G__29975);

(invoc_array[(12)] = G__29976);

(invoc_array[vararg_idx] = G__29977);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,var_args){
var G__29977 = null;
if (arguments.length > 13) {
var G__30598__i = 0, G__30598__a = new Array(arguments.length -  13);
while (G__30598__i < G__30598__a.length) {G__30598__a[G__30598__i] = arguments[G__30598__i + 13]; ++G__30598__i;}
  G__29977 = new cljs.core.IndexedSeq(G__30598__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,G__29977);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__30599){
var G__29964 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29965 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29966 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29967 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29968 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29969 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29970 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29971 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29972 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29973 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29974 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29975 = cljs.core.first(arglist__30599);
arglist__30599 = cljs.core.next(arglist__30599);
var G__29976 = cljs.core.first(arglist__30599);
var G__29977 = cljs.core.rest(arglist__30599);
return sci$impl$fns$arity_13__delegate(G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,G__29977);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__29978,G__29979,G__29980,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,G__29992){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29978);

(invoc_array[(1)] = G__29979);

(invoc_array[(2)] = G__29980);

(invoc_array[(3)] = G__29981);

(invoc_array[(4)] = G__29982);

(invoc_array[(5)] = G__29983);

(invoc_array[(6)] = G__29984);

(invoc_array[(7)] = G__29985);

(invoc_array[(8)] = G__29986);

(invoc_array[(9)] = G__29987);

(invoc_array[(10)] = G__29988);

(invoc_array[(11)] = G__29989);

(invoc_array[(12)] = G__29990);

(invoc_array[(13)] = G__29991);

(invoc_array[vararg_idx] = G__29992);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__29978,G__29979,G__29980,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,var_args){
var G__29992 = null;
if (arguments.length > 14) {
var G__30600__i = 0, G__30600__a = new Array(arguments.length -  14);
while (G__30600__i < G__30600__a.length) {G__30600__a[G__30600__i] = arguments[G__30600__i + 14]; ++G__30600__i;}
  G__29992 = new cljs.core.IndexedSeq(G__30600__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__29978,G__29979,G__29980,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,G__29992);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__30601){
var G__29978 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29979 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29980 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29981 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29982 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29983 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29984 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29985 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29986 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29987 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29988 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29989 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29990 = cljs.core.first(arglist__30601);
arglist__30601 = cljs.core.next(arglist__30601);
var G__29991 = cljs.core.first(arglist__30601);
var G__29992 = cljs.core.rest(arglist__30601);
return sci$impl$fns$arity_14__delegate(G__29978,G__29979,G__29980,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,G__29992);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__29993,G__29994,G__29995,G__29996,G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,G__30008){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29993);

(invoc_array[(1)] = G__29994);

(invoc_array[(2)] = G__29995);

(invoc_array[(3)] = G__29996);

(invoc_array[(4)] = G__29997);

(invoc_array[(5)] = G__29998);

(invoc_array[(6)] = G__29999);

(invoc_array[(7)] = G__30000);

(invoc_array[(8)] = G__30001);

(invoc_array[(9)] = G__30002);

(invoc_array[(10)] = G__30003);

(invoc_array[(11)] = G__30004);

(invoc_array[(12)] = G__30005);

(invoc_array[(13)] = G__30006);

(invoc_array[(14)] = G__30007);

(invoc_array[vararg_idx] = G__30008);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__29993,G__29994,G__29995,G__29996,G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,var_args){
var G__30008 = null;
if (arguments.length > 15) {
var G__30611__i = 0, G__30611__a = new Array(arguments.length -  15);
while (G__30611__i < G__30611__a.length) {G__30611__a[G__30611__i] = arguments[G__30611__i + 15]; ++G__30611__i;}
  G__30008 = new cljs.core.IndexedSeq(G__30611__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__29993,G__29994,G__29995,G__29996,G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,G__30008);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__30614){
var G__29993 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29994 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29995 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29996 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29997 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29998 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__29999 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30000 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30001 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30002 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30003 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30004 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30005 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30006 = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var G__30007 = cljs.core.first(arglist__30614);
var G__30008 = cljs.core.rest(arglist__30614);
return sci$impl$fns$arity_15__delegate(G__29993,G__29994,G__29995,G__29996,G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,G__30008);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30009);

(invoc_array[(1)] = G__30010);

(invoc_array[(2)] = G__30011);

(invoc_array[(3)] = G__30012);

(invoc_array[(4)] = G__30013);

(invoc_array[(5)] = G__30014);

(invoc_array[(6)] = G__30015);

(invoc_array[(7)] = G__30016);

(invoc_array[(8)] = G__30017);

(invoc_array[(9)] = G__30018);

(invoc_array[(10)] = G__30019);

(invoc_array[(11)] = G__30020);

(invoc_array[(12)] = G__30021);

(invoc_array[(13)] = G__30022);

(invoc_array[(14)] = G__30023);

(invoc_array[(15)] = G__30024);

(invoc_array[vararg_idx] = G__30025);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,var_args){
var G__30025 = null;
if (arguments.length > 16) {
var G__30620__i = 0, G__30620__a = new Array(arguments.length -  16);
while (G__30620__i < G__30620__a.length) {G__30620__a[G__30620__i] = arguments[G__30620__i + 16]; ++G__30620__i;}
  G__30025 = new cljs.core.IndexedSeq(G__30620__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__30621){
var G__30009 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30010 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30011 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30012 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30013 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30014 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30015 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30016 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30017 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30018 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30019 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30020 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30021 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30022 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30023 = cljs.core.first(arglist__30621);
arglist__30621 = cljs.core.next(arglist__30621);
var G__30024 = cljs.core.first(arglist__30621);
var G__30025 = cljs.core.rest(arglist__30621);
return sci$impl$fns$arity_16__delegate(G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30028);

(invoc_array[(1)] = G__30029);

(invoc_array[(2)] = G__30030);

(invoc_array[(3)] = G__30031);

(invoc_array[(4)] = G__30032);

(invoc_array[(5)] = G__30033);

(invoc_array[(6)] = G__30034);

(invoc_array[(7)] = G__30035);

(invoc_array[(8)] = G__30036);

(invoc_array[(9)] = G__30037);

(invoc_array[(10)] = G__30038);

(invoc_array[(11)] = G__30039);

(invoc_array[(12)] = G__30040);

(invoc_array[(13)] = G__30041);

(invoc_array[(14)] = G__30042);

(invoc_array[(15)] = G__30043);

(invoc_array[(16)] = G__30044);

(invoc_array[vararg_idx] = G__30045);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,var_args){
var G__30045 = null;
if (arguments.length > 17) {
var G__30622__i = 0, G__30622__a = new Array(arguments.length -  17);
while (G__30622__i < G__30622__a.length) {G__30622__a[G__30622__i] = arguments[G__30622__i + 17]; ++G__30622__i;}
  G__30045 = new cljs.core.IndexedSeq(G__30622__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__30623){
var G__30028 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30029 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30030 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30031 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30032 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30033 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30034 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30035 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30036 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30037 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30038 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30039 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30040 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30041 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30042 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30043 = cljs.core.first(arglist__30623);
arglist__30623 = cljs.core.next(arglist__30623);
var G__30044 = cljs.core.first(arglist__30623);
var G__30045 = cljs.core.rest(arglist__30623);
return sci$impl$fns$arity_17__delegate(G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30054);

(invoc_array[(1)] = G__30055);

(invoc_array[(2)] = G__30056);

(invoc_array[(3)] = G__30057);

(invoc_array[(4)] = G__30058);

(invoc_array[(5)] = G__30059);

(invoc_array[(6)] = G__30060);

(invoc_array[(7)] = G__30061);

(invoc_array[(8)] = G__30062);

(invoc_array[(9)] = G__30063);

(invoc_array[(10)] = G__30064);

(invoc_array[(11)] = G__30065);

(invoc_array[(12)] = G__30066);

(invoc_array[(13)] = G__30067);

(invoc_array[(14)] = G__30068);

(invoc_array[(15)] = G__30069);

(invoc_array[(16)] = G__30070);

(invoc_array[(17)] = G__30071);

(invoc_array[vararg_idx] = G__30072);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,var_args){
var G__30072 = null;
if (arguments.length > 18) {
var G__30628__i = 0, G__30628__a = new Array(arguments.length -  18);
while (G__30628__i < G__30628__a.length) {G__30628__a[G__30628__i] = arguments[G__30628__i + 18]; ++G__30628__i;}
  G__30072 = new cljs.core.IndexedSeq(G__30628__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__30631){
var G__30054 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30055 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30056 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30057 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30058 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30059 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30060 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30061 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30062 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30063 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30064 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30065 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30066 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30067 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30068 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30069 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30070 = cljs.core.first(arglist__30631);
arglist__30631 = cljs.core.next(arglist__30631);
var G__30071 = cljs.core.first(arglist__30631);
var G__30072 = cljs.core.rest(arglist__30631);
return sci$impl$fns$arity_18__delegate(G__30054,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30077);

(invoc_array[(1)] = G__30078);

(invoc_array[(2)] = G__30079);

(invoc_array[(3)] = G__30080);

(invoc_array[(4)] = G__30081);

(invoc_array[(5)] = G__30082);

(invoc_array[(6)] = G__30083);

(invoc_array[(7)] = G__30084);

(invoc_array[(8)] = G__30085);

(invoc_array[(9)] = G__30086);

(invoc_array[(10)] = G__30087);

(invoc_array[(11)] = G__30088);

(invoc_array[(12)] = G__30089);

(invoc_array[(13)] = G__30090);

(invoc_array[(14)] = G__30091);

(invoc_array[(15)] = G__30092);

(invoc_array[(16)] = G__30093);

(invoc_array[(17)] = G__30094);

(invoc_array[(18)] = G__30095);

(invoc_array[vararg_idx] = G__30096);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,var_args){
var G__30096 = null;
if (arguments.length > 19) {
var G__30634__i = 0, G__30634__a = new Array(arguments.length -  19);
while (G__30634__i < G__30634__a.length) {G__30634__a[G__30634__i] = arguments[G__30634__i + 19]; ++G__30634__i;}
  G__30096 = new cljs.core.IndexedSeq(G__30634__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__30635){
var G__30077 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30078 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30079 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30080 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30081 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30082 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30083 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30084 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30085 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30086 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30087 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30088 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30089 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30090 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30091 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30092 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30093 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30094 = cljs.core.first(arglist__30635);
arglist__30635 = cljs.core.next(arglist__30635);
var G__30095 = cljs.core.first(arglist__30635);
var G__30096 = cljs.core.rest(arglist__30635);
return sci$impl$fns$arity_19__delegate(G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094,G__30095,G__30096);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30105);

(invoc_array[(1)] = G__30106);

(invoc_array[(2)] = G__30107);

(invoc_array[(3)] = G__30108);

(invoc_array[(4)] = G__30109);

(invoc_array[(5)] = G__30110);

(invoc_array[(6)] = G__30111);

(invoc_array[(7)] = G__30112);

(invoc_array[(8)] = G__30113);

(invoc_array[(9)] = G__30114);

(invoc_array[(10)] = G__30115);

(invoc_array[(11)] = G__30116);

(invoc_array[(12)] = G__30117);

(invoc_array[(13)] = G__30118);

(invoc_array[(14)] = G__30119);

(invoc_array[(15)] = G__30120);

(invoc_array[(16)] = G__30121);

(invoc_array[(17)] = G__30122);

(invoc_array[(18)] = G__30123);

(invoc_array[(19)] = G__30124);

(invoc_array[vararg_idx] = G__30125);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,var_args){
var G__30125 = null;
if (arguments.length > 20) {
var G__30642__i = 0, G__30642__a = new Array(arguments.length -  20);
while (G__30642__i < G__30642__a.length) {G__30642__a[G__30642__i] = arguments[G__30642__i + 20]; ++G__30642__i;}
  G__30125 = new cljs.core.IndexedSeq(G__30642__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__30645){
var G__30105 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30106 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30107 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30108 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30109 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30110 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30111 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30112 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30113 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30114 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30115 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30116 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30117 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30118 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30119 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30120 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30121 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30122 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30123 = cljs.core.first(arglist__30645);
arglist__30645 = cljs.core.next(arglist__30645);
var G__30124 = cljs.core.first(arglist__30645);
var G__30125 = cljs.core.rest(arglist__30645);
return sci$impl$fns$arity_20__delegate(G__30105,G__30106,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121,G__30122,G__30123,G__30124,G__30125);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29865)].join('')));

}
})():(function (){var G__30130 = fixed_arity;
switch (G__30130) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__29139__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29139__auto__)){
continue;
} else {
return ret__29139__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__30131){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30131);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__30132,G__30133){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30132);

(invoc_array[(1)] = G__30133);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__30134,G__30135,G__30136){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30134);

(invoc_array[(1)] = G__30135);

(invoc_array[(2)] = G__30136);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__30137,G__30138,G__30139,G__30140){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30137);

(invoc_array[(1)] = G__30138);

(invoc_array[(2)] = G__30139);

(invoc_array[(3)] = G__30140);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__30141,G__30142,G__30143,G__30144,G__30145){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30141);

(invoc_array[(1)] = G__30142);

(invoc_array[(2)] = G__30143);

(invoc_array[(3)] = G__30144);

(invoc_array[(4)] = G__30145);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__30149,G__30150,G__30151,G__30152,G__30153,G__30154){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30149);

(invoc_array[(1)] = G__30150);

(invoc_array[(2)] = G__30151);

(invoc_array[(3)] = G__30152);

(invoc_array[(4)] = G__30153);

(invoc_array[(5)] = G__30154);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30171);

(invoc_array[(1)] = G__30172);

(invoc_array[(2)] = G__30173);

(invoc_array[(3)] = G__30174);

(invoc_array[(4)] = G__30175);

(invoc_array[(5)] = G__30176);

(invoc_array[(6)] = G__30177);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30178);

(invoc_array[(1)] = G__30179);

(invoc_array[(2)] = G__30180);

(invoc_array[(3)] = G__30181);

(invoc_array[(4)] = G__30182);

(invoc_array[(5)] = G__30183);

(invoc_array[(6)] = G__30184);

(invoc_array[(7)] = G__30185);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30186);

(invoc_array[(1)] = G__30187);

(invoc_array[(2)] = G__30188);

(invoc_array[(3)] = G__30189);

(invoc_array[(4)] = G__30190);

(invoc_array[(5)] = G__30191);

(invoc_array[(6)] = G__30192);

(invoc_array[(7)] = G__30193);

(invoc_array[(8)] = G__30194);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__30198,G__30200,G__30201,G__30203,G__30204,G__30206,G__30208,G__30209,G__30210,G__30211){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30198);

(invoc_array[(1)] = G__30200);

(invoc_array[(2)] = G__30201);

(invoc_array[(3)] = G__30203);

(invoc_array[(4)] = G__30204);

(invoc_array[(5)] = G__30206);

(invoc_array[(6)] = G__30208);

(invoc_array[(7)] = G__30209);

(invoc_array[(8)] = G__30210);

(invoc_array[(9)] = G__30211);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30228);

(invoc_array[(1)] = G__30229);

(invoc_array[(2)] = G__30230);

(invoc_array[(3)] = G__30231);

(invoc_array[(4)] = G__30232);

(invoc_array[(5)] = G__30233);

(invoc_array[(6)] = G__30234);

(invoc_array[(7)] = G__30235);

(invoc_array[(8)] = G__30236);

(invoc_array[(9)] = G__30237);

(invoc_array[(10)] = G__30238);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__30266,G__30267,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276,G__30277){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30266);

(invoc_array[(1)] = G__30267);

(invoc_array[(2)] = G__30268);

(invoc_array[(3)] = G__30269);

(invoc_array[(4)] = G__30270);

(invoc_array[(5)] = G__30271);

(invoc_array[(6)] = G__30272);

(invoc_array[(7)] = G__30273);

(invoc_array[(8)] = G__30274);

(invoc_array[(9)] = G__30275);

(invoc_array[(10)] = G__30276);

(invoc_array[(11)] = G__30277);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__30291,G__30292,G__30293,G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30291);

(invoc_array[(1)] = G__30292);

(invoc_array[(2)] = G__30293);

(invoc_array[(3)] = G__30294);

(invoc_array[(4)] = G__30295);

(invoc_array[(5)] = G__30296);

(invoc_array[(6)] = G__30297);

(invoc_array[(7)] = G__30298);

(invoc_array[(8)] = G__30299);

(invoc_array[(9)] = G__30300);

(invoc_array[(10)] = G__30301);

(invoc_array[(11)] = G__30302);

(invoc_array[(12)] = G__30303);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323,G__30324,G__30325,G__30326){
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

(invoc_array[(11)] = G__30324);

(invoc_array[(12)] = G__30325);

(invoc_array[(13)] = G__30326);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334,G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30327);

(invoc_array[(1)] = G__30328);

(invoc_array[(2)] = G__30329);

(invoc_array[(3)] = G__30330);

(invoc_array[(4)] = G__30331);

(invoc_array[(5)] = G__30332);

(invoc_array[(6)] = G__30333);

(invoc_array[(7)] = G__30334);

(invoc_array[(8)] = G__30335);

(invoc_array[(9)] = G__30336);

(invoc_array[(10)] = G__30337);

(invoc_array[(11)] = G__30338);

(invoc_array[(12)] = G__30339);

(invoc_array[(13)] = G__30340);

(invoc_array[(14)] = G__30341);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__30351,G__30352,G__30353,G__30354,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364,G__30365,G__30366){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30351);

(invoc_array[(1)] = G__30352);

(invoc_array[(2)] = G__30353);

(invoc_array[(3)] = G__30354);

(invoc_array[(4)] = G__30355);

(invoc_array[(5)] = G__30356);

(invoc_array[(6)] = G__30357);

(invoc_array[(7)] = G__30358);

(invoc_array[(8)] = G__30359);

(invoc_array[(9)] = G__30360);

(invoc_array[(10)] = G__30361);

(invoc_array[(11)] = G__30362);

(invoc_array[(12)] = G__30363);

(invoc_array[(13)] = G__30364);

(invoc_array[(14)] = G__30365);

(invoc_array[(15)] = G__30366);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383,G__30384,G__30385,G__30386,G__30387,G__30388,G__30389,G__30390,G__30391){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30375);

(invoc_array[(1)] = G__30376);

(invoc_array[(2)] = G__30377);

(invoc_array[(3)] = G__30378);

(invoc_array[(4)] = G__30379);

(invoc_array[(5)] = G__30380);

(invoc_array[(6)] = G__30381);

(invoc_array[(7)] = G__30382);

(invoc_array[(8)] = G__30383);

(invoc_array[(9)] = G__30384);

(invoc_array[(10)] = G__30385);

(invoc_array[(11)] = G__30386);

(invoc_array[(12)] = G__30387);

(invoc_array[(13)] = G__30388);

(invoc_array[(14)] = G__30389);

(invoc_array[(15)] = G__30390);

(invoc_array[(16)] = G__30391);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__30403,G__30404,G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418,G__30419,G__30420){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30403);

(invoc_array[(1)] = G__30404);

(invoc_array[(2)] = G__30405);

(invoc_array[(3)] = G__30406);

(invoc_array[(4)] = G__30407);

(invoc_array[(5)] = G__30408);

(invoc_array[(6)] = G__30409);

(invoc_array[(7)] = G__30410);

(invoc_array[(8)] = G__30411);

(invoc_array[(9)] = G__30412);

(invoc_array[(10)] = G__30413);

(invoc_array[(11)] = G__30414);

(invoc_array[(12)] = G__30415);

(invoc_array[(13)] = G__30416);

(invoc_array[(14)] = G__30417);

(invoc_array[(15)] = G__30418);

(invoc_array[(16)] = G__30419);

(invoc_array[(17)] = G__30420);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__30421,G__30422,G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436,G__30437,G__30438,G__30439){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30421);

(invoc_array[(1)] = G__30422);

(invoc_array[(2)] = G__30423);

(invoc_array[(3)] = G__30424);

(invoc_array[(4)] = G__30425);

(invoc_array[(5)] = G__30426);

(invoc_array[(6)] = G__30427);

(invoc_array[(7)] = G__30428);

(invoc_array[(8)] = G__30429);

(invoc_array[(9)] = G__30430);

(invoc_array[(10)] = G__30431);

(invoc_array[(11)] = G__30432);

(invoc_array[(12)] = G__30433);

(invoc_array[(13)] = G__30434);

(invoc_array[(14)] = G__30435);

(invoc_array[(15)] = G__30436);

(invoc_array[(16)] = G__30437);

(invoc_array[(17)] = G__30438);

(invoc_array[(18)] = G__30439);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454,G__30455,G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30448);

(invoc_array[(1)] = G__30449);

(invoc_array[(2)] = G__30450);

(invoc_array[(3)] = G__30451);

(invoc_array[(4)] = G__30452);

(invoc_array[(5)] = G__30453);

(invoc_array[(6)] = G__30454);

(invoc_array[(7)] = G__30455);

(invoc_array[(8)] = G__30456);

(invoc_array[(9)] = G__30457);

(invoc_array[(10)] = G__30458);

(invoc_array[(11)] = G__30459);

(invoc_array[(12)] = G__30460);

(invoc_array[(13)] = G__30461);

(invoc_array[(14)] = G__30462);

(invoc_array[(15)] = G__30463);

(invoc_array[(16)] = G__30464);

(invoc_array[(17)] = G__30465);

(invoc_array[(18)] = G__30466);

(invoc_array[(19)] = G__30467);

while(true){
var ret__29140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29140__auto__)){
continue;
} else {
return ret__29140__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30130)].join('')));

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
var G__30684 = cljs.core.next(params__$1);
var G__30685 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__30686 = lets;
params__$1 = G__30684;
new_params = G__30685;
lets = G__30686;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__30687 = cljs.core.next(params__$1);
var G__30688 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__30689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__30687;
new_params = G__30688;
lets = G__30689;
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
var len__5749__auto___30690 = arguments.length;
var i__5750__auto___30699 = (0);
while(true){
if((i__5750__auto___30699 < len__5749__auto___30690)){
args__5755__auto__.push((arguments[i__5750__auto___30699]));

var G__30700 = (i__5750__auto___30699 + (1));
i__5750__auto___30699 = G__30700;
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

var vec__30485 = sig;
var seq__30486 = cljs.core.seq(vec__30485);
var first__30487 = cljs.core.first(seq__30486);
var seq__30486__$1 = cljs.core.next(seq__30486);
var params = first__30487;
var body = seq__30486__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq30482){
var G__30483 = cljs.core.first(seq30482);
var seq30482__$1 = cljs.core.next(seq30482);
var G__30484 = cljs.core.first(seq30482__$1);
var seq30482__$2 = cljs.core.next(seq30482__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30483,G__30484,seq30482__$2);
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
var G__30709 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__30710 = cljs.core.next(fdecls);
ret = G__30709;
fdecls = G__30710;
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
var len__5749__auto___30711 = arguments.length;
var i__5750__auto___30712 = (0);
while(true){
if((i__5750__auto___30712 < len__5749__auto___30711)){
args__5755__auto__.push((arguments[i__5750__auto___30712]));

var G__30713 = (i__5750__auto___30712 + (1));
i__5750__auto___30712 = G__30713;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq30505){
var G__30506 = cljs.core.first(seq30505);
var seq30505__$1 = cljs.core.next(seq30505);
var G__30507 = cljs.core.first(seq30505__$1);
var seq30505__$2 = cljs.core.next(seq30505__$1);
var G__30508 = cljs.core.first(seq30505__$2);
var seq30505__$3 = cljs.core.next(seq30505__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30506,G__30507,G__30508,seq30505__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30726 = arguments.length;
var i__5750__auto___30727 = (0);
while(true){
if((i__5750__auto___30727 < len__5749__auto___30726)){
args__5755__auto__.push((arguments[i__5750__auto___30727]));

var G__30728 = (i__5750__auto___30727 + (1));
i__5750__auto___30727 = G__30728;
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
var G__30730 = cljs.core.cons(f,p);
var G__30731 = cljs.core.next(args__$1);
p = G__30730;
args__$1 = G__30731;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__30732 = cljs.core.cons(f,p);
var G__30733 = cljs.core.next(args__$1);
p = G__30732;
args__$1 = G__30733;
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
var G__30735 = cljs.core.next(fd);
fd = G__30735;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__30736 = cljs.core.next(fd);
fd = G__30736;
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
var G__30739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__30740 = cljs.core.next(ds);
acc = G__30739;
ds = G__30740;
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
var G__30742 = cljs.core.next(p);
var G__30743 = cljs.core.cons(cljs.core.first(p),d);
p = G__30742;
d = G__30743;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq30522){
var G__30523 = cljs.core.first(seq30522);
var seq30522__$1 = cljs.core.next(seq30522);
var G__30524 = cljs.core.first(seq30522__$1);
var seq30522__$2 = cljs.core.next(seq30522__$1);
var G__30525 = cljs.core.first(seq30522__$2);
var seq30522__$3 = cljs.core.next(seq30522__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30523,G__30524,G__30525,seq30522__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
