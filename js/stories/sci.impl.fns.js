var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./sci.impl.types.js");
require("./sci.impl.utils.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution = {});
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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("sci.impl.fns.js");

goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__40859 = arguments.length;
switch (G__40859) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__40860 = fixed_arity;
switch (G__40860) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__40861){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__40861);

while(true){
var ret__40058__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40058__auto__)){
continue;
} else {
return ret__40058__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__40861 = null;
if (arguments.length > 0) {
var G__41760__i = 0, G__41760__a = new Array(arguments.length -  0);
while (G__41760__i < G__41760__a.length) {G__41760__a[G__41760__i] = arguments[G__41760__i + 0]; ++G__41760__i;}
  G__40861 = new cljs.core.IndexedSeq(G__41760__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__40861);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__41761){
var G__40861 = cljs.core.seq(arglist__41761);
return sci$impl$fns$arity_0__delegate(G__40861);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__40862,G__40863){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40862);

(invoc_array[vararg_idx] = G__40863);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__40862,var_args){
var G__40863 = null;
if (arguments.length > 1) {
var G__41762__i = 0, G__41762__a = new Array(arguments.length -  1);
while (G__41762__i < G__41762__a.length) {G__41762__a[G__41762__i] = arguments[G__41762__i + 1]; ++G__41762__i;}
  G__40863 = new cljs.core.IndexedSeq(G__41762__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__40862,G__40863);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__41763){
var G__40862 = cljs.core.first(arglist__41763);
var G__40863 = cljs.core.rest(arglist__41763);
return sci$impl$fns$arity_1__delegate(G__40862,G__40863);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__40864,G__40865,G__40866){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40864);

(invoc_array[(1)] = G__40865);

(invoc_array[vararg_idx] = G__40866);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__40864,G__40865,var_args){
var G__40866 = null;
if (arguments.length > 2) {
var G__41764__i = 0, G__41764__a = new Array(arguments.length -  2);
while (G__41764__i < G__41764__a.length) {G__41764__a[G__41764__i] = arguments[G__41764__i + 2]; ++G__41764__i;}
  G__40866 = new cljs.core.IndexedSeq(G__41764__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__40864,G__40865,G__40866);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__41765){
var G__40864 = cljs.core.first(arglist__41765);
arglist__41765 = cljs.core.next(arglist__41765);
var G__40865 = cljs.core.first(arglist__41765);
var G__40866 = cljs.core.rest(arglist__41765);
return sci$impl$fns$arity_2__delegate(G__40864,G__40865,G__40866);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__40867,G__40868,G__40869,G__40870){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40867);

(invoc_array[(1)] = G__40868);

(invoc_array[(2)] = G__40869);

(invoc_array[vararg_idx] = G__40870);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__40867,G__40868,G__40869,var_args){
var G__40870 = null;
if (arguments.length > 3) {
var G__41767__i = 0, G__41767__a = new Array(arguments.length -  3);
while (G__41767__i < G__41767__a.length) {G__41767__a[G__41767__i] = arguments[G__41767__i + 3]; ++G__41767__i;}
  G__40870 = new cljs.core.IndexedSeq(G__41767__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__40867,G__40868,G__40869,G__40870);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__41768){
var G__40867 = cljs.core.first(arglist__41768);
arglist__41768 = cljs.core.next(arglist__41768);
var G__40868 = cljs.core.first(arglist__41768);
arglist__41768 = cljs.core.next(arglist__41768);
var G__40869 = cljs.core.first(arglist__41768);
var G__40870 = cljs.core.rest(arglist__41768);
return sci$impl$fns$arity_3__delegate(G__40867,G__40868,G__40869,G__40870);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__40871,G__40872,G__40873,G__40874,G__40875){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40871);

(invoc_array[(1)] = G__40872);

(invoc_array[(2)] = G__40873);

(invoc_array[(3)] = G__40874);

(invoc_array[vararg_idx] = G__40875);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__40871,G__40872,G__40873,G__40874,var_args){
var G__40875 = null;
if (arguments.length > 4) {
var G__41770__i = 0, G__41770__a = new Array(arguments.length -  4);
while (G__41770__i < G__41770__a.length) {G__41770__a[G__41770__i] = arguments[G__41770__i + 4]; ++G__41770__i;}
  G__40875 = new cljs.core.IndexedSeq(G__41770__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__40871,G__40872,G__40873,G__40874,G__40875);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__41772){
var G__40871 = cljs.core.first(arglist__41772);
arglist__41772 = cljs.core.next(arglist__41772);
var G__40872 = cljs.core.first(arglist__41772);
arglist__41772 = cljs.core.next(arglist__41772);
var G__40873 = cljs.core.first(arglist__41772);
arglist__41772 = cljs.core.next(arglist__41772);
var G__40874 = cljs.core.first(arglist__41772);
var G__40875 = cljs.core.rest(arglist__41772);
return sci$impl$fns$arity_4__delegate(G__40871,G__40872,G__40873,G__40874,G__40875);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__40876,G__40877,G__40878,G__40879,G__40880,G__40881){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40876);

(invoc_array[(1)] = G__40877);

(invoc_array[(2)] = G__40878);

(invoc_array[(3)] = G__40879);

(invoc_array[(4)] = G__40880);

(invoc_array[vararg_idx] = G__40881);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__40876,G__40877,G__40878,G__40879,G__40880,var_args){
var G__40881 = null;
if (arguments.length > 5) {
var G__41776__i = 0, G__41776__a = new Array(arguments.length -  5);
while (G__41776__i < G__41776__a.length) {G__41776__a[G__41776__i] = arguments[G__41776__i + 5]; ++G__41776__i;}
  G__40881 = new cljs.core.IndexedSeq(G__41776__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__40876,G__40877,G__40878,G__40879,G__40880,G__40881);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__41777){
var G__40876 = cljs.core.first(arglist__41777);
arglist__41777 = cljs.core.next(arglist__41777);
var G__40877 = cljs.core.first(arglist__41777);
arglist__41777 = cljs.core.next(arglist__41777);
var G__40878 = cljs.core.first(arglist__41777);
arglist__41777 = cljs.core.next(arglist__41777);
var G__40879 = cljs.core.first(arglist__41777);
arglist__41777 = cljs.core.next(arglist__41777);
var G__40880 = cljs.core.first(arglist__41777);
var G__40881 = cljs.core.rest(arglist__41777);
return sci$impl$fns$arity_5__delegate(G__40876,G__40877,G__40878,G__40879,G__40880,G__40881);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__40882,G__40883,G__40884,G__40885,G__40886,G__40887,G__40888){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40882);

(invoc_array[(1)] = G__40883);

(invoc_array[(2)] = G__40884);

(invoc_array[(3)] = G__40885);

(invoc_array[(4)] = G__40886);

(invoc_array[(5)] = G__40887);

(invoc_array[vararg_idx] = G__40888);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__40882,G__40883,G__40884,G__40885,G__40886,G__40887,var_args){
var G__40888 = null;
if (arguments.length > 6) {
var G__41778__i = 0, G__41778__a = new Array(arguments.length -  6);
while (G__41778__i < G__41778__a.length) {G__41778__a[G__41778__i] = arguments[G__41778__i + 6]; ++G__41778__i;}
  G__40888 = new cljs.core.IndexedSeq(G__41778__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__40882,G__40883,G__40884,G__40885,G__40886,G__40887,G__40888);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__41779){
var G__40882 = cljs.core.first(arglist__41779);
arglist__41779 = cljs.core.next(arglist__41779);
var G__40883 = cljs.core.first(arglist__41779);
arglist__41779 = cljs.core.next(arglist__41779);
var G__40884 = cljs.core.first(arglist__41779);
arglist__41779 = cljs.core.next(arglist__41779);
var G__40885 = cljs.core.first(arglist__41779);
arglist__41779 = cljs.core.next(arglist__41779);
var G__40886 = cljs.core.first(arglist__41779);
arglist__41779 = cljs.core.next(arglist__41779);
var G__40887 = cljs.core.first(arglist__41779);
var G__40888 = cljs.core.rest(arglist__41779);
return sci$impl$fns$arity_6__delegate(G__40882,G__40883,G__40884,G__40885,G__40886,G__40887,G__40888);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__40889,G__40890,G__40891,G__40892,G__40893,G__40894,G__40895,G__40896){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40889);

(invoc_array[(1)] = G__40890);

(invoc_array[(2)] = G__40891);

(invoc_array[(3)] = G__40892);

(invoc_array[(4)] = G__40893);

(invoc_array[(5)] = G__40894);

(invoc_array[(6)] = G__40895);

(invoc_array[vararg_idx] = G__40896);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__40889,G__40890,G__40891,G__40892,G__40893,G__40894,G__40895,var_args){
var G__40896 = null;
if (arguments.length > 7) {
var G__41782__i = 0, G__41782__a = new Array(arguments.length -  7);
while (G__41782__i < G__41782__a.length) {G__41782__a[G__41782__i] = arguments[G__41782__i + 7]; ++G__41782__i;}
  G__40896 = new cljs.core.IndexedSeq(G__41782__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__40889,G__40890,G__40891,G__40892,G__40893,G__40894,G__40895,G__40896);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__41783){
var G__40889 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40890 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40891 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40892 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40893 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40894 = cljs.core.first(arglist__41783);
arglist__41783 = cljs.core.next(arglist__41783);
var G__40895 = cljs.core.first(arglist__41783);
var G__40896 = cljs.core.rest(arglist__41783);
return sci$impl$fns$arity_7__delegate(G__40889,G__40890,G__40891,G__40892,G__40893,G__40894,G__40895,G__40896);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912,G__40913){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40905);

(invoc_array[(1)] = G__40906);

(invoc_array[(2)] = G__40907);

(invoc_array[(3)] = G__40908);

(invoc_array[(4)] = G__40909);

(invoc_array[(5)] = G__40910);

(invoc_array[(6)] = G__40911);

(invoc_array[(7)] = G__40912);

(invoc_array[vararg_idx] = G__40913);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912,var_args){
var G__40913 = null;
if (arguments.length > 8) {
var G__41787__i = 0, G__41787__a = new Array(arguments.length -  8);
while (G__41787__i < G__41787__a.length) {G__41787__a[G__41787__i] = arguments[G__41787__i + 8]; ++G__41787__i;}
  G__40913 = new cljs.core.IndexedSeq(G__41787__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912,G__40913);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__41788){
var G__40905 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40906 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40907 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40908 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40909 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40910 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40911 = cljs.core.first(arglist__41788);
arglist__41788 = cljs.core.next(arglist__41788);
var G__40912 = cljs.core.first(arglist__41788);
var G__40913 = cljs.core.rest(arglist__41788);
return sci$impl$fns$arity_8__delegate(G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912,G__40913);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40914);

(invoc_array[(1)] = G__40915);

(invoc_array[(2)] = G__40916);

(invoc_array[(3)] = G__40917);

(invoc_array[(4)] = G__40918);

(invoc_array[(5)] = G__40919);

(invoc_array[(6)] = G__40920);

(invoc_array[(7)] = G__40921);

(invoc_array[(8)] = G__40922);

(invoc_array[vararg_idx] = G__40923);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,var_args){
var G__40923 = null;
if (arguments.length > 9) {
var G__41790__i = 0, G__41790__a = new Array(arguments.length -  9);
while (G__41790__i < G__41790__a.length) {G__41790__a[G__41790__i] = arguments[G__41790__i + 9]; ++G__41790__i;}
  G__40923 = new cljs.core.IndexedSeq(G__41790__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__41791){
var G__40914 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40915 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40916 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40917 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40918 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40919 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40920 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40921 = cljs.core.first(arglist__41791);
arglist__41791 = cljs.core.next(arglist__41791);
var G__40922 = cljs.core.first(arglist__41791);
var G__40923 = cljs.core.rest(arglist__41791);
return sci$impl$fns$arity_9__delegate(G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__40924,G__40925,G__40926,G__40927,G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40924);

(invoc_array[(1)] = G__40925);

(invoc_array[(2)] = G__40926);

(invoc_array[(3)] = G__40927);

(invoc_array[(4)] = G__40928);

(invoc_array[(5)] = G__40929);

(invoc_array[(6)] = G__40930);

(invoc_array[(7)] = G__40931);

(invoc_array[(8)] = G__40932);

(invoc_array[(9)] = G__40933);

(invoc_array[vararg_idx] = G__40934);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__40924,G__40925,G__40926,G__40927,G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,var_args){
var G__40934 = null;
if (arguments.length > 10) {
var G__41797__i = 0, G__41797__a = new Array(arguments.length -  10);
while (G__41797__i < G__41797__a.length) {G__41797__a[G__41797__i] = arguments[G__41797__i + 10]; ++G__41797__i;}
  G__40934 = new cljs.core.IndexedSeq(G__41797__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__40924,G__40925,G__40926,G__40927,G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41801){
var G__40924 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40925 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40926 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40927 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40928 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40929 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40930 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40931 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40932 = cljs.core.first(arglist__41801);
arglist__41801 = cljs.core.next(arglist__41801);
var G__40933 = cljs.core.first(arglist__41801);
var G__40934 = cljs.core.rest(arglist__41801);
return sci$impl$fns$arity_10__delegate(G__40924,G__40925,G__40926,G__40927,G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40959);

(invoc_array[(1)] = G__40960);

(invoc_array[(2)] = G__40961);

(invoc_array[(3)] = G__40962);

(invoc_array[(4)] = G__40963);

(invoc_array[(5)] = G__40964);

(invoc_array[(6)] = G__40965);

(invoc_array[(7)] = G__40966);

(invoc_array[(8)] = G__40967);

(invoc_array[(9)] = G__40968);

(invoc_array[(10)] = G__40969);

(invoc_array[vararg_idx] = G__40970);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,var_args){
var G__40970 = null;
if (arguments.length > 11) {
var G__41807__i = 0, G__41807__a = new Array(arguments.length -  11);
while (G__41807__i < G__41807__a.length) {G__41807__a[G__41807__i] = arguments[G__41807__i + 11]; ++G__41807__i;}
  G__40970 = new cljs.core.IndexedSeq(G__41807__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41813){
var G__40959 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40960 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40961 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40962 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40963 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40964 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40965 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40966 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40967 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40968 = cljs.core.first(arglist__41813);
arglist__41813 = cljs.core.next(arglist__41813);
var G__40969 = cljs.core.first(arglist__41813);
var G__40970 = cljs.core.rest(arglist__41813);
return sci$impl$fns$arity_11__delegate(G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,G__40987){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40975);

(invoc_array[(1)] = G__40976);

(invoc_array[(2)] = G__40977);

(invoc_array[(3)] = G__40978);

(invoc_array[(4)] = G__40979);

(invoc_array[(5)] = G__40980);

(invoc_array[(6)] = G__40981);

(invoc_array[(7)] = G__40982);

(invoc_array[(8)] = G__40983);

(invoc_array[(9)] = G__40984);

(invoc_array[(10)] = G__40985);

(invoc_array[(11)] = G__40986);

(invoc_array[vararg_idx] = G__40987);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,var_args){
var G__40987 = null;
if (arguments.length > 12) {
var G__41823__i = 0, G__41823__a = new Array(arguments.length -  12);
while (G__41823__i < G__41823__a.length) {G__41823__a[G__41823__i] = arguments[G__41823__i + 12]; ++G__41823__i;}
  G__40987 = new cljs.core.IndexedSeq(G__41823__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,G__40987);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41830){
var G__40975 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40976 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40977 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40978 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40979 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40980 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40981 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40982 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40983 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40984 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40985 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__40986 = cljs.core.first(arglist__41830);
var G__40987 = cljs.core.rest(arglist__41830);
return sci$impl$fns$arity_12__delegate(G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,G__40987);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41000);

(invoc_array[(1)] = G__41001);

(invoc_array[(2)] = G__41002);

(invoc_array[(3)] = G__41003);

(invoc_array[(4)] = G__41004);

(invoc_array[(5)] = G__41005);

(invoc_array[(6)] = G__41006);

(invoc_array[(7)] = G__41007);

(invoc_array[(8)] = G__41008);

(invoc_array[(9)] = G__41009);

(invoc_array[(10)] = G__41010);

(invoc_array[(11)] = G__41011);

(invoc_array[(12)] = G__41012);

(invoc_array[vararg_idx] = G__41013);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,var_args){
var G__41013 = null;
if (arguments.length > 13) {
var G__41836__i = 0, G__41836__a = new Array(arguments.length -  13);
while (G__41836__i < G__41836__a.length) {G__41836__a[G__41836__i] = arguments[G__41836__i + 13]; ++G__41836__i;}
  G__41013 = new cljs.core.IndexedSeq(G__41836__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41837){
var G__41000 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41001 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41002 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41003 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41004 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41005 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41006 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41007 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41008 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41009 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41010 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41011 = cljs.core.first(arglist__41837);
arglist__41837 = cljs.core.next(arglist__41837);
var G__41012 = cljs.core.first(arglist__41837);
var G__41013 = cljs.core.rest(arglist__41837);
return sci$impl$fns$arity_13__delegate(G__41000,G__41001,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__41015,G__41016,G__41017,G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41015);

(invoc_array[(1)] = G__41016);

(invoc_array[(2)] = G__41017);

(invoc_array[(3)] = G__41018);

(invoc_array[(4)] = G__41019);

(invoc_array[(5)] = G__41020);

(invoc_array[(6)] = G__41021);

(invoc_array[(7)] = G__41022);

(invoc_array[(8)] = G__41023);

(invoc_array[(9)] = G__41024);

(invoc_array[(10)] = G__41025);

(invoc_array[(11)] = G__41026);

(invoc_array[(12)] = G__41027);

(invoc_array[(13)] = G__41028);

(invoc_array[vararg_idx] = G__41029);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__41015,G__41016,G__41017,G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,var_args){
var G__41029 = null;
if (arguments.length > 14) {
var G__41838__i = 0, G__41838__a = new Array(arguments.length -  14);
while (G__41838__i < G__41838__a.length) {G__41838__a[G__41838__i] = arguments[G__41838__i + 14]; ++G__41838__i;}
  G__41029 = new cljs.core.IndexedSeq(G__41838__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__41015,G__41016,G__41017,G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41839){
var G__41015 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41016 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41017 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41018 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41019 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41020 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41021 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41022 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41023 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41024 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41025 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41026 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41027 = cljs.core.first(arglist__41839);
arglist__41839 = cljs.core.next(arglist__41839);
var G__41028 = cljs.core.first(arglist__41839);
var G__41029 = cljs.core.rest(arglist__41839);
return sci$impl$fns$arity_14__delegate(G__41015,G__41016,G__41017,G__41018,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__41032,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41032);

(invoc_array[(1)] = G__41033);

(invoc_array[(2)] = G__41034);

(invoc_array[(3)] = G__41035);

(invoc_array[(4)] = G__41036);

(invoc_array[(5)] = G__41037);

(invoc_array[(6)] = G__41038);

(invoc_array[(7)] = G__41039);

(invoc_array[(8)] = G__41040);

(invoc_array[(9)] = G__41041);

(invoc_array[(10)] = G__41042);

(invoc_array[(11)] = G__41043);

(invoc_array[(12)] = G__41044);

(invoc_array[(13)] = G__41045);

(invoc_array[(14)] = G__41046);

(invoc_array[vararg_idx] = G__41047);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__41032,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,var_args){
var G__41047 = null;
if (arguments.length > 15) {
var G__41840__i = 0, G__41840__a = new Array(arguments.length -  15);
while (G__41840__i < G__41840__a.length) {G__41840__a[G__41840__i] = arguments[G__41840__i + 15]; ++G__41840__i;}
  G__41047 = new cljs.core.IndexedSeq(G__41840__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__41032,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41841){
var G__41032 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41033 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41034 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41035 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41036 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41037 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41038 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41039 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41040 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41041 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41042 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41043 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41044 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41045 = cljs.core.first(arglist__41841);
arglist__41841 = cljs.core.next(arglist__41841);
var G__41046 = cljs.core.first(arglist__41841);
var G__41047 = cljs.core.rest(arglist__41841);
return sci$impl$fns$arity_15__delegate(G__41032,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41049);

(invoc_array[(1)] = G__41050);

(invoc_array[(2)] = G__41051);

(invoc_array[(3)] = G__41052);

(invoc_array[(4)] = G__41053);

(invoc_array[(5)] = G__41054);

(invoc_array[(6)] = G__41055);

(invoc_array[(7)] = G__41056);

(invoc_array[(8)] = G__41057);

(invoc_array[(9)] = G__41058);

(invoc_array[(10)] = G__41059);

(invoc_array[(11)] = G__41060);

(invoc_array[(12)] = G__41061);

(invoc_array[(13)] = G__41062);

(invoc_array[(14)] = G__41063);

(invoc_array[(15)] = G__41064);

(invoc_array[vararg_idx] = G__41065);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,var_args){
var G__41065 = null;
if (arguments.length > 16) {
var G__41844__i = 0, G__41844__a = new Array(arguments.length -  16);
while (G__41844__i < G__41844__a.length) {G__41844__a[G__41844__i] = arguments[G__41844__i + 16]; ++G__41844__i;}
  G__41065 = new cljs.core.IndexedSeq(G__41844__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41845){
var G__41049 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41050 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41051 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41052 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41053 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41054 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41055 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41056 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41057 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41058 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41059 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41060 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41061 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41062 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41063 = cljs.core.first(arglist__41845);
arglist__41845 = cljs.core.next(arglist__41845);
var G__41064 = cljs.core.first(arglist__41845);
var G__41065 = cljs.core.rest(arglist__41845);
return sci$impl$fns$arity_16__delegate(G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089){
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

(invoc_array[(14)] = G__41086);

(invoc_array[(15)] = G__41087);

(invoc_array[(16)] = G__41088);

(invoc_array[vararg_idx] = G__41089);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,var_args){
var G__41089 = null;
if (arguments.length > 17) {
var G__41847__i = 0, G__41847__a = new Array(arguments.length -  17);
while (G__41847__i < G__41847__a.length) {G__41847__a[G__41847__i] = arguments[G__41847__i + 17]; ++G__41847__i;}
  G__41089 = new cljs.core.IndexedSeq(G__41847__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41848){
var G__41072 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41073 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41074 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41075 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41076 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41077 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41078 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41079 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41080 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41081 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41082 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41083 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41084 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41085 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41086 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41087 = cljs.core.first(arglist__41848);
arglist__41848 = cljs.core.next(arglist__41848);
var G__41088 = cljs.core.first(arglist__41848);
var G__41089 = cljs.core.rest(arglist__41848);
return sci$impl$fns$arity_17__delegate(G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41090);

(invoc_array[(1)] = G__41091);

(invoc_array[(2)] = G__41092);

(invoc_array[(3)] = G__41093);

(invoc_array[(4)] = G__41094);

(invoc_array[(5)] = G__41095);

(invoc_array[(6)] = G__41096);

(invoc_array[(7)] = G__41097);

(invoc_array[(8)] = G__41098);

(invoc_array[(9)] = G__41099);

(invoc_array[(10)] = G__41100);

(invoc_array[(11)] = G__41101);

(invoc_array[(12)] = G__41102);

(invoc_array[(13)] = G__41103);

(invoc_array[(14)] = G__41104);

(invoc_array[(15)] = G__41105);

(invoc_array[(16)] = G__41106);

(invoc_array[(17)] = G__41107);

(invoc_array[vararg_idx] = G__41108);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,var_args){
var G__41108 = null;
if (arguments.length > 18) {
var G__41849__i = 0, G__41849__a = new Array(arguments.length -  18);
while (G__41849__i < G__41849__a.length) {G__41849__a[G__41849__i] = arguments[G__41849__i + 18]; ++G__41849__i;}
  G__41108 = new cljs.core.IndexedSeq(G__41849__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41850){
var G__41090 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41091 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41092 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41093 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41094 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41095 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41096 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41097 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41098 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41099 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41100 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41101 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41102 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41103 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41104 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41105 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41106 = cljs.core.first(arglist__41850);
arglist__41850 = cljs.core.next(arglist__41850);
var G__41107 = cljs.core.first(arglist__41850);
var G__41108 = cljs.core.rest(arglist__41850);
return sci$impl$fns$arity_18__delegate(G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41110);

(invoc_array[(1)] = G__41111);

(invoc_array[(2)] = G__41112);

(invoc_array[(3)] = G__41113);

(invoc_array[(4)] = G__41114);

(invoc_array[(5)] = G__41115);

(invoc_array[(6)] = G__41116);

(invoc_array[(7)] = G__41117);

(invoc_array[(8)] = G__41118);

(invoc_array[(9)] = G__41119);

(invoc_array[(10)] = G__41120);

(invoc_array[(11)] = G__41121);

(invoc_array[(12)] = G__41122);

(invoc_array[(13)] = G__41123);

(invoc_array[(14)] = G__41124);

(invoc_array[(15)] = G__41125);

(invoc_array[(16)] = G__41126);

(invoc_array[(17)] = G__41127);

(invoc_array[(18)] = G__41128);

(invoc_array[vararg_idx] = G__41129);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,var_args){
var G__41129 = null;
if (arguments.length > 19) {
var G__41851__i = 0, G__41851__a = new Array(arguments.length -  19);
while (G__41851__i < G__41851__a.length) {G__41851__a[G__41851__i] = arguments[G__41851__i + 19]; ++G__41851__i;}
  G__41129 = new cljs.core.IndexedSeq(G__41851__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41852){
var G__41110 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41111 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41112 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41113 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41114 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41115 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41116 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41117 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41118 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41119 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41120 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41121 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41122 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41123 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41124 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41125 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41126 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41127 = cljs.core.first(arglist__41852);
arglist__41852 = cljs.core.next(arglist__41852);
var G__41128 = cljs.core.first(arglist__41852);
var G__41129 = cljs.core.rest(arglist__41852);
return sci$impl$fns$arity_19__delegate(G__41110,G__41111,G__41112,G__41113,G__41114,G__41115,G__41116,G__41117,G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41141);

(invoc_array[(1)] = G__41142);

(invoc_array[(2)] = G__41143);

(invoc_array[(3)] = G__41144);

(invoc_array[(4)] = G__41145);

(invoc_array[(5)] = G__41146);

(invoc_array[(6)] = G__41147);

(invoc_array[(7)] = G__41148);

(invoc_array[(8)] = G__41149);

(invoc_array[(9)] = G__41150);

(invoc_array[(10)] = G__41151);

(invoc_array[(11)] = G__41152);

(invoc_array[(12)] = G__41153);

(invoc_array[(13)] = G__41154);

(invoc_array[(14)] = G__41155);

(invoc_array[(15)] = G__41156);

(invoc_array[(16)] = G__41157);

(invoc_array[(17)] = G__41158);

(invoc_array[(18)] = G__41159);

(invoc_array[(19)] = G__41160);

(invoc_array[vararg_idx] = G__41161);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,var_args){
var G__41161 = null;
if (arguments.length > 20) {
var G__41854__i = 0, G__41854__a = new Array(arguments.length -  20);
while (G__41854__i < G__41854__a.length) {G__41854__a[G__41854__i] = arguments[G__41854__i + 20]; ++G__41854__i;}
  G__41161 = new cljs.core.IndexedSeq(G__41854__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41855){
var G__41141 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41142 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41143 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41144 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41145 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41146 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41147 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41148 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41149 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41150 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41151 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41152 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41153 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41154 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41155 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41156 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41157 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41158 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41159 = cljs.core.first(arglist__41855);
arglist__41855 = cljs.core.next(arglist__41855);
var G__41160 = cljs.core.first(arglist__41855);
var G__41161 = cljs.core.rest(arglist__41855);
return sci$impl$fns$arity_20__delegate(G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40860)].join('')));

}
})():(function (){var G__41176 = fixed_arity;
switch (G__41176) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__40058__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40058__auto__)){
continue;
} else {
return ret__40058__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__41180){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41180);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__41182,G__41183){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41182);

(invoc_array[(1)] = G__41183);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__41188,G__41189,G__41190){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41188);

(invoc_array[(1)] = G__41189);

(invoc_array[(2)] = G__41190);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__41192,G__41193,G__41194,G__41195){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41192);

(invoc_array[(1)] = G__41193);

(invoc_array[(2)] = G__41194);

(invoc_array[(3)] = G__41195);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__41196,G__41197,G__41198,G__41199,G__41200){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41196);

(invoc_array[(1)] = G__41197);

(invoc_array[(2)] = G__41198);

(invoc_array[(3)] = G__41199);

(invoc_array[(4)] = G__41200);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__41213,G__41214,G__41215,G__41216,G__41217,G__41218){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41213);

(invoc_array[(1)] = G__41214);

(invoc_array[(2)] = G__41215);

(invoc_array[(3)] = G__41216);

(invoc_array[(4)] = G__41217);

(invoc_array[(5)] = G__41218);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__41221,G__41222,G__41223,G__41224,G__41225,G__41226,G__41227){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41221);

(invoc_array[(1)] = G__41222);

(invoc_array[(2)] = G__41223);

(invoc_array[(3)] = G__41224);

(invoc_array[(4)] = G__41225);

(invoc_array[(5)] = G__41226);

(invoc_array[(6)] = G__41227);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41231);

(invoc_array[(1)] = G__41232);

(invoc_array[(2)] = G__41233);

(invoc_array[(3)] = G__41234);

(invoc_array[(4)] = G__41235);

(invoc_array[(5)] = G__41236);

(invoc_array[(6)] = G__41237);

(invoc_array[(7)] = G__41238);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__41248,G__41249,G__41250,G__41251,G__41252,G__41253,G__41254,G__41255,G__41256){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41248);

(invoc_array[(1)] = G__41249);

(invoc_array[(2)] = G__41250);

(invoc_array[(3)] = G__41251);

(invoc_array[(4)] = G__41252);

(invoc_array[(5)] = G__41253);

(invoc_array[(6)] = G__41254);

(invoc_array[(7)] = G__41255);

(invoc_array[(8)] = G__41256);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41259);

(invoc_array[(1)] = G__41260);

(invoc_array[(2)] = G__41261);

(invoc_array[(3)] = G__41262);

(invoc_array[(4)] = G__41263);

(invoc_array[(5)] = G__41264);

(invoc_array[(6)] = G__41265);

(invoc_array[(7)] = G__41266);

(invoc_array[(8)] = G__41267);

(invoc_array[(9)] = G__41268);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__41274,G__41275,G__41276,G__41277,G__41278,G__41279,G__41280,G__41281,G__41282,G__41283,G__41284){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41274);

(invoc_array[(1)] = G__41275);

(invoc_array[(2)] = G__41276);

(invoc_array[(3)] = G__41277);

(invoc_array[(4)] = G__41278);

(invoc_array[(5)] = G__41279);

(invoc_array[(6)] = G__41280);

(invoc_array[(7)] = G__41281);

(invoc_array[(8)] = G__41282);

(invoc_array[(9)] = G__41283);

(invoc_array[(10)] = G__41284);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41290);

(invoc_array[(1)] = G__41291);

(invoc_array[(2)] = G__41292);

(invoc_array[(3)] = G__41293);

(invoc_array[(4)] = G__41294);

(invoc_array[(5)] = G__41295);

(invoc_array[(6)] = G__41296);

(invoc_array[(7)] = G__41297);

(invoc_array[(8)] = G__41298);

(invoc_array[(9)] = G__41299);

(invoc_array[(10)] = G__41300);

(invoc_array[(11)] = G__41301);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__41309,G__41310,G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321){
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

(invoc_array[(12)] = G__41321);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41328);

(invoc_array[(1)] = G__41329);

(invoc_array[(2)] = G__41330);

(invoc_array[(3)] = G__41331);

(invoc_array[(4)] = G__41332);

(invoc_array[(5)] = G__41333);

(invoc_array[(6)] = G__41334);

(invoc_array[(7)] = G__41335);

(invoc_array[(8)] = G__41336);

(invoc_array[(9)] = G__41337);

(invoc_array[(10)] = G__41338);

(invoc_array[(11)] = G__41339);

(invoc_array[(12)] = G__41340);

(invoc_array[(13)] = G__41341);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__41348,G__41349,G__41350,G__41351,G__41352,G__41353,G__41354,G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41348);

(invoc_array[(1)] = G__41349);

(invoc_array[(2)] = G__41350);

(invoc_array[(3)] = G__41351);

(invoc_array[(4)] = G__41352);

(invoc_array[(5)] = G__41353);

(invoc_array[(6)] = G__41354);

(invoc_array[(7)] = G__41355);

(invoc_array[(8)] = G__41356);

(invoc_array[(9)] = G__41357);

(invoc_array[(10)] = G__41358);

(invoc_array[(11)] = G__41359);

(invoc_array[(12)] = G__41360);

(invoc_array[(13)] = G__41361);

(invoc_array[(14)] = G__41362);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__41376,G__41377,G__41378,G__41379,G__41380,G__41381,G__41382,G__41383,G__41384,G__41385,G__41386,G__41387,G__41388,G__41389,G__41390,G__41391){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41376);

(invoc_array[(1)] = G__41377);

(invoc_array[(2)] = G__41378);

(invoc_array[(3)] = G__41379);

(invoc_array[(4)] = G__41380);

(invoc_array[(5)] = G__41381);

(invoc_array[(6)] = G__41382);

(invoc_array[(7)] = G__41383);

(invoc_array[(8)] = G__41384);

(invoc_array[(9)] = G__41385);

(invoc_array[(10)] = G__41386);

(invoc_array[(11)] = G__41387);

(invoc_array[(12)] = G__41388);

(invoc_array[(13)] = G__41389);

(invoc_array[(14)] = G__41390);

(invoc_array[(15)] = G__41391);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__41406,G__41407,G__41408,G__41409,G__41410,G__41411,G__41412,G__41413,G__41414,G__41415,G__41416,G__41417,G__41418,G__41419,G__41420,G__41421,G__41422){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41406);

(invoc_array[(1)] = G__41407);

(invoc_array[(2)] = G__41408);

(invoc_array[(3)] = G__41409);

(invoc_array[(4)] = G__41410);

(invoc_array[(5)] = G__41411);

(invoc_array[(6)] = G__41412);

(invoc_array[(7)] = G__41413);

(invoc_array[(8)] = G__41414);

(invoc_array[(9)] = G__41415);

(invoc_array[(10)] = G__41416);

(invoc_array[(11)] = G__41417);

(invoc_array[(12)] = G__41418);

(invoc_array[(13)] = G__41419);

(invoc_array[(14)] = G__41420);

(invoc_array[(15)] = G__41421);

(invoc_array[(16)] = G__41422);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__41427,G__41428,G__41429,G__41430,G__41431,G__41432,G__41433,G__41434,G__41435,G__41436,G__41437,G__41438,G__41439,G__41440,G__41441,G__41442,G__41443,G__41444){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41427);

(invoc_array[(1)] = G__41428);

(invoc_array[(2)] = G__41429);

(invoc_array[(3)] = G__41430);

(invoc_array[(4)] = G__41431);

(invoc_array[(5)] = G__41432);

(invoc_array[(6)] = G__41433);

(invoc_array[(7)] = G__41434);

(invoc_array[(8)] = G__41435);

(invoc_array[(9)] = G__41436);

(invoc_array[(10)] = G__41437);

(invoc_array[(11)] = G__41438);

(invoc_array[(12)] = G__41439);

(invoc_array[(13)] = G__41440);

(invoc_array[(14)] = G__41441);

(invoc_array[(15)] = G__41442);

(invoc_array[(16)] = G__41443);

(invoc_array[(17)] = G__41444);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__41451,G__41452,G__41453,G__41454,G__41455,G__41456,G__41457,G__41458,G__41459,G__41460,G__41461,G__41462,G__41463,G__41464,G__41465,G__41466,G__41467,G__41468,G__41469){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41451);

(invoc_array[(1)] = G__41452);

(invoc_array[(2)] = G__41453);

(invoc_array[(3)] = G__41454);

(invoc_array[(4)] = G__41455);

(invoc_array[(5)] = G__41456);

(invoc_array[(6)] = G__41457);

(invoc_array[(7)] = G__41458);

(invoc_array[(8)] = G__41459);

(invoc_array[(9)] = G__41460);

(invoc_array[(10)] = G__41461);

(invoc_array[(11)] = G__41462);

(invoc_array[(12)] = G__41463);

(invoc_array[(13)] = G__41464);

(invoc_array[(14)] = G__41465);

(invoc_array[(15)] = G__41466);

(invoc_array[(16)] = G__41467);

(invoc_array[(17)] = G__41468);

(invoc_array[(18)] = G__41469);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__41476,G__41477,G__41478,G__41479,G__41480,G__41481,G__41482,G__41483,G__41484,G__41485,G__41486,G__41487,G__41488,G__41489,G__41490,G__41491,G__41492,G__41493,G__41494,G__41495){
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

(invoc_array[(15)] = G__41491);

(invoc_array[(16)] = G__41492);

(invoc_array[(17)] = G__41493);

(invoc_array[(18)] = G__41494);

(invoc_array[(19)] = G__41495);

while(true){
var ret__40059__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40059__auto__)){
continue;
} else {
return ret__40059__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41176)].join('')));

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
var G__41917 = cljs.core.next(params__$1);
var G__41918 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41919 = lets;
params__$1 = G__41917;
new_params = G__41918;
lets = G__41919;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41920 = cljs.core.next(params__$1);
var G__41921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41920;
new_params = G__41921;
lets = G__41922;
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
var len__5749__auto___41927 = arguments.length;
var i__5750__auto___41928 = (0);
while(true){
if((i__5750__auto___41928 < len__5749__auto___41927)){
args__5755__auto__.push((arguments[i__5750__auto___41928]));

var G__41929 = (i__5750__auto___41928 + (1));
i__5750__auto___41928 = G__41929;
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

var vec__41669 = sig;
var seq__41670 = cljs.core.seq(vec__41669);
var first__41671 = cljs.core.first(seq__41670);
var seq__41670__$1 = cljs.core.next(seq__41670);
var params = first__41671;
var body = seq__41670__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq41642){
var G__41644 = cljs.core.first(seq41642);
var seq41642__$1 = cljs.core.next(seq41642);
var G__41645 = cljs.core.first(seq41642__$1);
var seq41642__$2 = cljs.core.next(seq41642__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41644,G__41645,seq41642__$2);
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
var G__41939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41940 = cljs.core.next(fdecls);
ret = G__41939;
fdecls = G__41940;
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
var len__5749__auto___41943 = arguments.length;
var i__5750__auto___41944 = (0);
while(true){
if((i__5750__auto___41944 < len__5749__auto___41943)){
args__5755__auto__.push((arguments[i__5750__auto___41944]));

var G__41945 = (i__5750__auto___41944 + (1));
i__5750__auto___41944 = G__41945;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq41702){
var G__41703 = cljs.core.first(seq41702);
var seq41702__$1 = cljs.core.next(seq41702);
var G__41704 = cljs.core.first(seq41702__$1);
var seq41702__$2 = cljs.core.next(seq41702__$1);
var G__41705 = cljs.core.first(seq41702__$2);
var seq41702__$3 = cljs.core.next(seq41702__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41703,G__41704,G__41705,seq41702__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41959 = arguments.length;
var i__5750__auto___41960 = (0);
while(true){
if((i__5750__auto___41960 < len__5749__auto___41959)){
args__5755__auto__.push((arguments[i__5750__auto___41960]));

var G__41962 = (i__5750__auto___41960 + (1));
i__5750__auto___41960 = G__41962;
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
var G__41964 = cljs.core.cons(f,p);
var G__41965 = cljs.core.next(args__$1);
p = G__41964;
args__$1 = G__41965;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41966 = cljs.core.cons(f,p);
var G__41967 = cljs.core.next(args__$1);
p = G__41966;
args__$1 = G__41967;
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
var G__41968 = cljs.core.next(fd);
fd = G__41968;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__41969 = cljs.core.next(fd);
fd = G__41969;
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
var G__41972 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__41973 = cljs.core.next(ds);
acc = G__41972;
ds = G__41973;
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
var G__41977 = cljs.core.next(p);
var G__41978 = cljs.core.cons(cljs.core.first(p),d);
p = G__41977;
d = G__41978;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq41722){
var G__41723 = cljs.core.first(seq41722);
var seq41722__$1 = cljs.core.next(seq41722);
var G__41724 = cljs.core.first(seq41722__$1);
var seq41722__$2 = cljs.core.next(seq41722__$1);
var G__41725 = cljs.core.first(seq41722__$2);
var seq41722__$3 = cljs.core.next(seq41722__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41723,G__41724,G__41725,seq41722__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
