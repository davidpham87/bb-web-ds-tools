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
var G__40856 = arguments.length;
switch (G__40856) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__40857 = fixed_arity;
switch (G__40857) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__40858){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__40858);

while(true){
var ret__40052__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40052__auto__)){
continue;
} else {
return ret__40052__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__40858 = null;
if (arguments.length > 0) {
var G__41405__i = 0, G__41405__a = new Array(arguments.length -  0);
while (G__41405__i < G__41405__a.length) {G__41405__a[G__41405__i] = arguments[G__41405__i + 0]; ++G__41405__i;}
  G__40858 = new cljs.core.IndexedSeq(G__41405__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__40858);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__41406){
var G__40858 = cljs.core.seq(arglist__41406);
return sci$impl$fns$arity_0__delegate(G__40858);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__40859,G__40860){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40859);

(invoc_array[vararg_idx] = G__40860);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__40859,var_args){
var G__40860 = null;
if (arguments.length > 1) {
var G__41407__i = 0, G__41407__a = new Array(arguments.length -  1);
while (G__41407__i < G__41407__a.length) {G__41407__a[G__41407__i] = arguments[G__41407__i + 1]; ++G__41407__i;}
  G__40860 = new cljs.core.IndexedSeq(G__41407__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__40859,G__40860);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__41408){
var G__40859 = cljs.core.first(arglist__41408);
var G__40860 = cljs.core.rest(arglist__41408);
return sci$impl$fns$arity_1__delegate(G__40859,G__40860);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__40861,G__40862,G__40863){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40861);

(invoc_array[(1)] = G__40862);

(invoc_array[vararg_idx] = G__40863);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__40861,G__40862,var_args){
var G__40863 = null;
if (arguments.length > 2) {
var G__41412__i = 0, G__41412__a = new Array(arguments.length -  2);
while (G__41412__i < G__41412__a.length) {G__41412__a[G__41412__i] = arguments[G__41412__i + 2]; ++G__41412__i;}
  G__40863 = new cljs.core.IndexedSeq(G__41412__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__40861,G__40862,G__40863);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__41413){
var G__40861 = cljs.core.first(arglist__41413);
arglist__41413 = cljs.core.next(arglist__41413);
var G__40862 = cljs.core.first(arglist__41413);
var G__40863 = cljs.core.rest(arglist__41413);
return sci$impl$fns$arity_2__delegate(G__40861,G__40862,G__40863);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__40864,G__40865,G__40866,G__40867){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40864);

(invoc_array[(1)] = G__40865);

(invoc_array[(2)] = G__40866);

(invoc_array[vararg_idx] = G__40867);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__40864,G__40865,G__40866,var_args){
var G__40867 = null;
if (arguments.length > 3) {
var G__41415__i = 0, G__41415__a = new Array(arguments.length -  3);
while (G__41415__i < G__41415__a.length) {G__41415__a[G__41415__i] = arguments[G__41415__i + 3]; ++G__41415__i;}
  G__40867 = new cljs.core.IndexedSeq(G__41415__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__40864,G__40865,G__40866,G__40867);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__41417){
var G__40864 = cljs.core.first(arglist__41417);
arglist__41417 = cljs.core.next(arglist__41417);
var G__40865 = cljs.core.first(arglist__41417);
arglist__41417 = cljs.core.next(arglist__41417);
var G__40866 = cljs.core.first(arglist__41417);
var G__40867 = cljs.core.rest(arglist__41417);
return sci$impl$fns$arity_3__delegate(G__40864,G__40865,G__40866,G__40867);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__40868,G__40869,G__40870,G__40871,G__40872){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40868);

(invoc_array[(1)] = G__40869);

(invoc_array[(2)] = G__40870);

(invoc_array[(3)] = G__40871);

(invoc_array[vararg_idx] = G__40872);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__40868,G__40869,G__40870,G__40871,var_args){
var G__40872 = null;
if (arguments.length > 4) {
var G__41420__i = 0, G__41420__a = new Array(arguments.length -  4);
while (G__41420__i < G__41420__a.length) {G__41420__a[G__41420__i] = arguments[G__41420__i + 4]; ++G__41420__i;}
  G__40872 = new cljs.core.IndexedSeq(G__41420__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__40868,G__40869,G__40870,G__40871,G__40872);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__41421){
var G__40868 = cljs.core.first(arglist__41421);
arglist__41421 = cljs.core.next(arglist__41421);
var G__40869 = cljs.core.first(arglist__41421);
arglist__41421 = cljs.core.next(arglist__41421);
var G__40870 = cljs.core.first(arglist__41421);
arglist__41421 = cljs.core.next(arglist__41421);
var G__40871 = cljs.core.first(arglist__41421);
var G__40872 = cljs.core.rest(arglist__41421);
return sci$impl$fns$arity_4__delegate(G__40868,G__40869,G__40870,G__40871,G__40872);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__40873,G__40874,G__40875,G__40876,G__40877,G__40878){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40873);

(invoc_array[(1)] = G__40874);

(invoc_array[(2)] = G__40875);

(invoc_array[(3)] = G__40876);

(invoc_array[(4)] = G__40877);

(invoc_array[vararg_idx] = G__40878);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__40873,G__40874,G__40875,G__40876,G__40877,var_args){
var G__40878 = null;
if (arguments.length > 5) {
var G__41425__i = 0, G__41425__a = new Array(arguments.length -  5);
while (G__41425__i < G__41425__a.length) {G__41425__a[G__41425__i] = arguments[G__41425__i + 5]; ++G__41425__i;}
  G__40878 = new cljs.core.IndexedSeq(G__41425__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__40873,G__40874,G__40875,G__40876,G__40877,G__40878);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__41427){
var G__40873 = cljs.core.first(arglist__41427);
arglist__41427 = cljs.core.next(arglist__41427);
var G__40874 = cljs.core.first(arglist__41427);
arglist__41427 = cljs.core.next(arglist__41427);
var G__40875 = cljs.core.first(arglist__41427);
arglist__41427 = cljs.core.next(arglist__41427);
var G__40876 = cljs.core.first(arglist__41427);
arglist__41427 = cljs.core.next(arglist__41427);
var G__40877 = cljs.core.first(arglist__41427);
var G__40878 = cljs.core.rest(arglist__41427);
return sci$impl$fns$arity_5__delegate(G__40873,G__40874,G__40875,G__40876,G__40877,G__40878);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__40879,G__40880,G__40881,G__40882,G__40883,G__40884,G__40885){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40879);

(invoc_array[(1)] = G__40880);

(invoc_array[(2)] = G__40881);

(invoc_array[(3)] = G__40882);

(invoc_array[(4)] = G__40883);

(invoc_array[(5)] = G__40884);

(invoc_array[vararg_idx] = G__40885);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__40879,G__40880,G__40881,G__40882,G__40883,G__40884,var_args){
var G__40885 = null;
if (arguments.length > 6) {
var G__41431__i = 0, G__41431__a = new Array(arguments.length -  6);
while (G__41431__i < G__41431__a.length) {G__41431__a[G__41431__i] = arguments[G__41431__i + 6]; ++G__41431__i;}
  G__40885 = new cljs.core.IndexedSeq(G__41431__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__40879,G__40880,G__40881,G__40882,G__40883,G__40884,G__40885);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__41432){
var G__40879 = cljs.core.first(arglist__41432);
arglist__41432 = cljs.core.next(arglist__41432);
var G__40880 = cljs.core.first(arglist__41432);
arglist__41432 = cljs.core.next(arglist__41432);
var G__40881 = cljs.core.first(arglist__41432);
arglist__41432 = cljs.core.next(arglist__41432);
var G__40882 = cljs.core.first(arglist__41432);
arglist__41432 = cljs.core.next(arglist__41432);
var G__40883 = cljs.core.first(arglist__41432);
arglist__41432 = cljs.core.next(arglist__41432);
var G__40884 = cljs.core.first(arglist__41432);
var G__40885 = cljs.core.rest(arglist__41432);
return sci$impl$fns$arity_6__delegate(G__40879,G__40880,G__40881,G__40882,G__40883,G__40884,G__40885);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__40886,G__40887,G__40888,G__40889,G__40890,G__40891,G__40892,G__40893){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40886);

(invoc_array[(1)] = G__40887);

(invoc_array[(2)] = G__40888);

(invoc_array[(3)] = G__40889);

(invoc_array[(4)] = G__40890);

(invoc_array[(5)] = G__40891);

(invoc_array[(6)] = G__40892);

(invoc_array[vararg_idx] = G__40893);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__40886,G__40887,G__40888,G__40889,G__40890,G__40891,G__40892,var_args){
var G__40893 = null;
if (arguments.length > 7) {
var G__41440__i = 0, G__41440__a = new Array(arguments.length -  7);
while (G__41440__i < G__41440__a.length) {G__41440__a[G__41440__i] = arguments[G__41440__i + 7]; ++G__41440__i;}
  G__40893 = new cljs.core.IndexedSeq(G__41440__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__40886,G__40887,G__40888,G__40889,G__40890,G__40891,G__40892,G__40893);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__41441){
var G__40886 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40887 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40888 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40889 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40890 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40891 = cljs.core.first(arglist__41441);
arglist__41441 = cljs.core.next(arglist__41441);
var G__40892 = cljs.core.first(arglist__41441);
var G__40893 = cljs.core.rest(arglist__41441);
return sci$impl$fns$arity_7__delegate(G__40886,G__40887,G__40888,G__40889,G__40890,G__40891,G__40892,G__40893);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__40894,G__40895,G__40896,G__40897,G__40898,G__40899,G__40900,G__40901,G__40902){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40894);

(invoc_array[(1)] = G__40895);

(invoc_array[(2)] = G__40896);

(invoc_array[(3)] = G__40897);

(invoc_array[(4)] = G__40898);

(invoc_array[(5)] = G__40899);

(invoc_array[(6)] = G__40900);

(invoc_array[(7)] = G__40901);

(invoc_array[vararg_idx] = G__40902);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__40894,G__40895,G__40896,G__40897,G__40898,G__40899,G__40900,G__40901,var_args){
var G__40902 = null;
if (arguments.length > 8) {
var G__41450__i = 0, G__41450__a = new Array(arguments.length -  8);
while (G__41450__i < G__41450__a.length) {G__41450__a[G__41450__i] = arguments[G__41450__i + 8]; ++G__41450__i;}
  G__40902 = new cljs.core.IndexedSeq(G__41450__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__40894,G__40895,G__40896,G__40897,G__40898,G__40899,G__40900,G__40901,G__40902);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__41451){
var G__40894 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40895 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40896 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40897 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40898 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40899 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40900 = cljs.core.first(arglist__41451);
arglist__41451 = cljs.core.next(arglist__41451);
var G__40901 = cljs.core.first(arglist__41451);
var G__40902 = cljs.core.rest(arglist__41451);
return sci$impl$fns$arity_8__delegate(G__40894,G__40895,G__40896,G__40897,G__40898,G__40899,G__40900,G__40901,G__40902);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__40903,G__40904,G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40903);

(invoc_array[(1)] = G__40904);

(invoc_array[(2)] = G__40905);

(invoc_array[(3)] = G__40906);

(invoc_array[(4)] = G__40907);

(invoc_array[(5)] = G__40908);

(invoc_array[(6)] = G__40909);

(invoc_array[(7)] = G__40910);

(invoc_array[(8)] = G__40911);

(invoc_array[vararg_idx] = G__40912);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__40903,G__40904,G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,var_args){
var G__40912 = null;
if (arguments.length > 9) {
var G__41458__i = 0, G__41458__a = new Array(arguments.length -  9);
while (G__41458__i < G__41458__a.length) {G__41458__a[G__41458__i] = arguments[G__41458__i + 9]; ++G__41458__i;}
  G__40912 = new cljs.core.IndexedSeq(G__41458__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__40903,G__40904,G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__41460){
var G__40903 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40904 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40905 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40906 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40907 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40908 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40909 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40910 = cljs.core.first(arglist__41460);
arglist__41460 = cljs.core.next(arglist__41460);
var G__40911 = cljs.core.first(arglist__41460);
var G__40912 = cljs.core.rest(arglist__41460);
return sci$impl$fns$arity_9__delegate(G__40903,G__40904,G__40905,G__40906,G__40907,G__40908,G__40909,G__40910,G__40911,G__40912);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__40913,G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40913);

(invoc_array[(1)] = G__40914);

(invoc_array[(2)] = G__40915);

(invoc_array[(3)] = G__40916);

(invoc_array[(4)] = G__40917);

(invoc_array[(5)] = G__40918);

(invoc_array[(6)] = G__40919);

(invoc_array[(7)] = G__40920);

(invoc_array[(8)] = G__40921);

(invoc_array[(9)] = G__40922);

(invoc_array[vararg_idx] = G__40923);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__40913,G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,var_args){
var G__40923 = null;
if (arguments.length > 10) {
var G__41465__i = 0, G__41465__a = new Array(arguments.length -  10);
while (G__41465__i < G__41465__a.length) {G__41465__a[G__41465__i] = arguments[G__41465__i + 10]; ++G__41465__i;}
  G__40923 = new cljs.core.IndexedSeq(G__41465__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__40913,G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41468){
var G__40913 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40914 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40915 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40916 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40917 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40918 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40919 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40920 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40921 = cljs.core.first(arglist__41468);
arglist__41468 = cljs.core.next(arglist__41468);
var G__40922 = cljs.core.first(arglist__41468);
var G__40923 = cljs.core.rest(arglist__41468);
return sci$impl$fns$arity_10__delegate(G__40913,G__40914,G__40915,G__40916,G__40917,G__40918,G__40919,G__40920,G__40921,G__40922,G__40923);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936,G__40937,G__40938,G__40939){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40928);

(invoc_array[(1)] = G__40929);

(invoc_array[(2)] = G__40930);

(invoc_array[(3)] = G__40931);

(invoc_array[(4)] = G__40932);

(invoc_array[(5)] = G__40933);

(invoc_array[(6)] = G__40934);

(invoc_array[(7)] = G__40935);

(invoc_array[(8)] = G__40936);

(invoc_array[(9)] = G__40937);

(invoc_array[(10)] = G__40938);

(invoc_array[vararg_idx] = G__40939);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936,G__40937,G__40938,var_args){
var G__40939 = null;
if (arguments.length > 11) {
var G__41479__i = 0, G__41479__a = new Array(arguments.length -  11);
while (G__41479__i < G__41479__a.length) {G__41479__a[G__41479__i] = arguments[G__41479__i + 11]; ++G__41479__i;}
  G__40939 = new cljs.core.IndexedSeq(G__41479__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936,G__40937,G__40938,G__40939);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41481){
var G__40928 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40929 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40930 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40931 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40932 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40933 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40934 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40935 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40936 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40937 = cljs.core.first(arglist__41481);
arglist__41481 = cljs.core.next(arglist__41481);
var G__40938 = cljs.core.first(arglist__41481);
var G__40939 = cljs.core.rest(arglist__41481);
return sci$impl$fns$arity_11__delegate(G__40928,G__40929,G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936,G__40937,G__40938,G__40939);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946,G__40947,G__40948,G__40949,G__40950,G__40951,G__40952){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40940);

(invoc_array[(1)] = G__40941);

(invoc_array[(2)] = G__40942);

(invoc_array[(3)] = G__40943);

(invoc_array[(4)] = G__40944);

(invoc_array[(5)] = G__40945);

(invoc_array[(6)] = G__40946);

(invoc_array[(7)] = G__40947);

(invoc_array[(8)] = G__40948);

(invoc_array[(9)] = G__40949);

(invoc_array[(10)] = G__40950);

(invoc_array[(11)] = G__40951);

(invoc_array[vararg_idx] = G__40952);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946,G__40947,G__40948,G__40949,G__40950,G__40951,var_args){
var G__40952 = null;
if (arguments.length > 12) {
var G__41491__i = 0, G__41491__a = new Array(arguments.length -  12);
while (G__41491__i < G__41491__a.length) {G__41491__a[G__41491__i] = arguments[G__41491__i + 12]; ++G__41491__i;}
  G__40952 = new cljs.core.IndexedSeq(G__41491__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946,G__40947,G__40948,G__40949,G__40950,G__40951,G__40952);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41492){
var G__40940 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40941 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40942 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40943 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40944 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40945 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40946 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40947 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40948 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40949 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40950 = cljs.core.first(arglist__41492);
arglist__41492 = cljs.core.next(arglist__41492);
var G__40951 = cljs.core.first(arglist__41492);
var G__40952 = cljs.core.rest(arglist__41492);
return sci$impl$fns$arity_12__delegate(G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946,G__40947,G__40948,G__40949,G__40950,G__40951,G__40952);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40953);

(invoc_array[(1)] = G__40954);

(invoc_array[(2)] = G__40955);

(invoc_array[(3)] = G__40956);

(invoc_array[(4)] = G__40957);

(invoc_array[(5)] = G__40958);

(invoc_array[(6)] = G__40959);

(invoc_array[(7)] = G__40960);

(invoc_array[(8)] = G__40961);

(invoc_array[(9)] = G__40962);

(invoc_array[(10)] = G__40963);

(invoc_array[(11)] = G__40964);

(invoc_array[(12)] = G__40965);

(invoc_array[vararg_idx] = G__40966);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,var_args){
var G__40966 = null;
if (arguments.length > 13) {
var G__41496__i = 0, G__41496__a = new Array(arguments.length -  13);
while (G__41496__i < G__41496__a.length) {G__41496__a[G__41496__i] = arguments[G__41496__i + 13]; ++G__41496__i;}
  G__40966 = new cljs.core.IndexedSeq(G__41496__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41497){
var G__40953 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40954 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40955 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40956 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40957 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40958 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40959 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40960 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40961 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40962 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40963 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40964 = cljs.core.first(arglist__41497);
arglist__41497 = cljs.core.next(arglist__41497);
var G__40965 = cljs.core.first(arglist__41497);
var G__40966 = cljs.core.rest(arglist__41497);
return sci$impl$fns$arity_13__delegate(G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961,G__40962,G__40963,G__40964,G__40965,G__40966);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__40968,G__40969,G__40970,G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40968);

(invoc_array[(1)] = G__40969);

(invoc_array[(2)] = G__40970);

(invoc_array[(3)] = G__40971);

(invoc_array[(4)] = G__40972);

(invoc_array[(5)] = G__40973);

(invoc_array[(6)] = G__40974);

(invoc_array[(7)] = G__40975);

(invoc_array[(8)] = G__40976);

(invoc_array[(9)] = G__40977);

(invoc_array[(10)] = G__40978);

(invoc_array[(11)] = G__40979);

(invoc_array[(12)] = G__40980);

(invoc_array[(13)] = G__40981);

(invoc_array[vararg_idx] = G__40982);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__40968,G__40969,G__40970,G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,var_args){
var G__40982 = null;
if (arguments.length > 14) {
var G__41501__i = 0, G__41501__a = new Array(arguments.length -  14);
while (G__41501__i < G__41501__a.length) {G__41501__a[G__41501__i] = arguments[G__41501__i + 14]; ++G__41501__i;}
  G__40982 = new cljs.core.IndexedSeq(G__41501__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__40968,G__40969,G__40970,G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41502){
var G__40968 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40969 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40970 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40971 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40972 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40973 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40974 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40975 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40976 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40977 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40978 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40979 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40980 = cljs.core.first(arglist__41502);
arglist__41502 = cljs.core.next(arglist__41502);
var G__40981 = cljs.core.first(arglist__41502);
var G__40982 = cljs.core.rest(arglist__41502);
return sci$impl$fns$arity_14__delegate(G__40968,G__40969,G__40970,G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977,G__40978,G__40979,G__40980,G__40981,G__40982);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40986);

(invoc_array[(1)] = G__40987);

(invoc_array[(2)] = G__40988);

(invoc_array[(3)] = G__40989);

(invoc_array[(4)] = G__40990);

(invoc_array[(5)] = G__40991);

(invoc_array[(6)] = G__40992);

(invoc_array[(7)] = G__40993);

(invoc_array[(8)] = G__40994);

(invoc_array[(9)] = G__40995);

(invoc_array[(10)] = G__40996);

(invoc_array[(11)] = G__40997);

(invoc_array[(12)] = G__40998);

(invoc_array[(13)] = G__40999);

(invoc_array[(14)] = G__41000);

(invoc_array[vararg_idx] = G__41001);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,var_args){
var G__41001 = null;
if (arguments.length > 15) {
var G__41513__i = 0, G__41513__a = new Array(arguments.length -  15);
while (G__41513__i < G__41513__a.length) {G__41513__a[G__41513__i] = arguments[G__41513__i + 15]; ++G__41513__i;}
  G__41001 = new cljs.core.IndexedSeq(G__41513__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41514){
var G__40986 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40987 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40988 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40989 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40990 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40991 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40992 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40993 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40994 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40995 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40996 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40997 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40998 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__40999 = cljs.core.first(arglist__41514);
arglist__41514 = cljs.core.next(arglist__41514);
var G__41000 = cljs.core.first(arglist__41514);
var G__41001 = cljs.core.rest(arglist__41514);
return sci$impl$fns$arity_15__delegate(G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,G__41018){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41002);

(invoc_array[(1)] = G__41003);

(invoc_array[(2)] = G__41004);

(invoc_array[(3)] = G__41005);

(invoc_array[(4)] = G__41006);

(invoc_array[(5)] = G__41007);

(invoc_array[(6)] = G__41008);

(invoc_array[(7)] = G__41009);

(invoc_array[(8)] = G__41010);

(invoc_array[(9)] = G__41011);

(invoc_array[(10)] = G__41012);

(invoc_array[(11)] = G__41013);

(invoc_array[(12)] = G__41014);

(invoc_array[(13)] = G__41015);

(invoc_array[(14)] = G__41016);

(invoc_array[(15)] = G__41017);

(invoc_array[vararg_idx] = G__41018);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,var_args){
var G__41018 = null;
if (arguments.length > 16) {
var G__41545__i = 0, G__41545__a = new Array(arguments.length -  16);
while (G__41545__i < G__41545__a.length) {G__41545__a[G__41545__i] = arguments[G__41545__i + 16]; ++G__41545__i;}
  G__41018 = new cljs.core.IndexedSeq(G__41545__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,G__41018);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41546){
var G__41002 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41003 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41004 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41005 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41006 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41007 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41008 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41009 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41010 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41011 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41012 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41013 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41014 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41015 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41016 = cljs.core.first(arglist__41546);
arglist__41546 = cljs.core.next(arglist__41546);
var G__41017 = cljs.core.first(arglist__41546);
var G__41018 = cljs.core.rest(arglist__41546);
return sci$impl$fns$arity_16__delegate(G__41002,G__41003,G__41004,G__41005,G__41006,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,G__41018);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,G__41036){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41019);

(invoc_array[(1)] = G__41020);

(invoc_array[(2)] = G__41021);

(invoc_array[(3)] = G__41022);

(invoc_array[(4)] = G__41023);

(invoc_array[(5)] = G__41024);

(invoc_array[(6)] = G__41025);

(invoc_array[(7)] = G__41026);

(invoc_array[(8)] = G__41027);

(invoc_array[(9)] = G__41028);

(invoc_array[(10)] = G__41029);

(invoc_array[(11)] = G__41030);

(invoc_array[(12)] = G__41031);

(invoc_array[(13)] = G__41032);

(invoc_array[(14)] = G__41033);

(invoc_array[(15)] = G__41034);

(invoc_array[(16)] = G__41035);

(invoc_array[vararg_idx] = G__41036);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,var_args){
var G__41036 = null;
if (arguments.length > 17) {
var G__41551__i = 0, G__41551__a = new Array(arguments.length -  17);
while (G__41551__i < G__41551__a.length) {G__41551__a[G__41551__i] = arguments[G__41551__i + 17]; ++G__41551__i;}
  G__41036 = new cljs.core.IndexedSeq(G__41551__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,G__41036);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41554){
var G__41019 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41020 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41021 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41022 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41023 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41024 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41025 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41026 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41027 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41028 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41029 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41030 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41031 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41032 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41033 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41034 = cljs.core.first(arglist__41554);
arglist__41554 = cljs.core.next(arglist__41554);
var G__41035 = cljs.core.first(arglist__41554);
var G__41036 = cljs.core.rest(arglist__41554);
return sci$impl$fns$arity_17__delegate(G__41019,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,G__41036);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41037);

(invoc_array[(1)] = G__41038);

(invoc_array[(2)] = G__41039);

(invoc_array[(3)] = G__41040);

(invoc_array[(4)] = G__41041);

(invoc_array[(5)] = G__41042);

(invoc_array[(6)] = G__41043);

(invoc_array[(7)] = G__41044);

(invoc_array[(8)] = G__41045);

(invoc_array[(9)] = G__41046);

(invoc_array[(10)] = G__41047);

(invoc_array[(11)] = G__41048);

(invoc_array[(12)] = G__41049);

(invoc_array[(13)] = G__41050);

(invoc_array[(14)] = G__41051);

(invoc_array[(15)] = G__41052);

(invoc_array[(16)] = G__41053);

(invoc_array[(17)] = G__41054);

(invoc_array[vararg_idx] = G__41055);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,var_args){
var G__41055 = null;
if (arguments.length > 18) {
var G__41562__i = 0, G__41562__a = new Array(arguments.length -  18);
while (G__41562__i < G__41562__a.length) {G__41562__a[G__41562__i] = arguments[G__41562__i + 18]; ++G__41562__i;}
  G__41055 = new cljs.core.IndexedSeq(G__41562__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41563){
var G__41037 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41038 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41039 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41040 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41041 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41042 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41043 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41044 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41045 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41046 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41047 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41048 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41049 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41050 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41051 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41052 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41053 = cljs.core.first(arglist__41563);
arglist__41563 = cljs.core.next(arglist__41563);
var G__41054 = cljs.core.first(arglist__41563);
var G__41055 = cljs.core.rest(arglist__41563);
return sci$impl$fns$arity_18__delegate(G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41056);

(invoc_array[(1)] = G__41057);

(invoc_array[(2)] = G__41058);

(invoc_array[(3)] = G__41059);

(invoc_array[(4)] = G__41060);

(invoc_array[(5)] = G__41061);

(invoc_array[(6)] = G__41062);

(invoc_array[(7)] = G__41063);

(invoc_array[(8)] = G__41064);

(invoc_array[(9)] = G__41065);

(invoc_array[(10)] = G__41066);

(invoc_array[(11)] = G__41067);

(invoc_array[(12)] = G__41068);

(invoc_array[(13)] = G__41069);

(invoc_array[(14)] = G__41070);

(invoc_array[(15)] = G__41071);

(invoc_array[(16)] = G__41072);

(invoc_array[(17)] = G__41073);

(invoc_array[(18)] = G__41074);

(invoc_array[vararg_idx] = G__41075);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,var_args){
var G__41075 = null;
if (arguments.length > 19) {
var G__41568__i = 0, G__41568__a = new Array(arguments.length -  19);
while (G__41568__i < G__41568__a.length) {G__41568__a[G__41568__i] = arguments[G__41568__i + 19]; ++G__41568__i;}
  G__41075 = new cljs.core.IndexedSeq(G__41568__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41570){
var G__41056 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41057 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41058 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41059 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41060 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41061 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41062 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41063 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41064 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41065 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41066 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41067 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41068 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41069 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41070 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41071 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41072 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41073 = cljs.core.first(arglist__41570);
arglist__41570 = cljs.core.next(arglist__41570);
var G__41074 = cljs.core.first(arglist__41570);
var G__41075 = cljs.core.rest(arglist__41570);
return sci$impl$fns$arity_19__delegate(G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41086);

(invoc_array[(1)] = G__41087);

(invoc_array[(2)] = G__41088);

(invoc_array[(3)] = G__41089);

(invoc_array[(4)] = G__41090);

(invoc_array[(5)] = G__41091);

(invoc_array[(6)] = G__41092);

(invoc_array[(7)] = G__41093);

(invoc_array[(8)] = G__41094);

(invoc_array[(9)] = G__41095);

(invoc_array[(10)] = G__41096);

(invoc_array[(11)] = G__41097);

(invoc_array[(12)] = G__41098);

(invoc_array[(13)] = G__41099);

(invoc_array[(14)] = G__41100);

(invoc_array[(15)] = G__41101);

(invoc_array[(16)] = G__41102);

(invoc_array[(17)] = G__41103);

(invoc_array[(18)] = G__41104);

(invoc_array[(19)] = G__41105);

(invoc_array[vararg_idx] = G__41106);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,var_args){
var G__41106 = null;
if (arguments.length > 20) {
var G__41588__i = 0, G__41588__a = new Array(arguments.length -  20);
while (G__41588__i < G__41588__a.length) {G__41588__a[G__41588__i] = arguments[G__41588__i + 20]; ++G__41588__i;}
  G__41106 = new cljs.core.IndexedSeq(G__41588__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41589){
var G__41086 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41087 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41088 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41089 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41090 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41091 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41092 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41093 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41094 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41095 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41096 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41097 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41098 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41099 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41100 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41101 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41102 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41103 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41104 = cljs.core.first(arglist__41589);
arglist__41589 = cljs.core.next(arglist__41589);
var G__41105 = cljs.core.first(arglist__41589);
var G__41106 = cljs.core.rest(arglist__41589);
return sci$impl$fns$arity_20__delegate(G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40857)].join('')));

}
})():(function (){var G__41111 = fixed_arity;
switch (G__41111) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__40052__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40052__auto__)){
continue;
} else {
return ret__40052__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__41118){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41118);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__41126,G__41127){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41126);

(invoc_array[(1)] = G__41127);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__41128,G__41129,G__41130){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41128);

(invoc_array[(1)] = G__41129);

(invoc_array[(2)] = G__41130);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__41135,G__41136,G__41137,G__41138){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41135);

(invoc_array[(1)] = G__41136);

(invoc_array[(2)] = G__41137);

(invoc_array[(3)] = G__41138);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__41139,G__41140,G__41141,G__41142,G__41143){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41139);

(invoc_array[(1)] = G__41140);

(invoc_array[(2)] = G__41141);

(invoc_array[(3)] = G__41142);

(invoc_array[(4)] = G__41143);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__41144,G__41145,G__41146,G__41147,G__41148,G__41149){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41144);

(invoc_array[(1)] = G__41145);

(invoc_array[(2)] = G__41146);

(invoc_array[(3)] = G__41147);

(invoc_array[(4)] = G__41148);

(invoc_array[(5)] = G__41149);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41150);

(invoc_array[(1)] = G__41151);

(invoc_array[(2)] = G__41152);

(invoc_array[(3)] = G__41153);

(invoc_array[(4)] = G__41154);

(invoc_array[(5)] = G__41155);

(invoc_array[(6)] = G__41156);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41160);

(invoc_array[(1)] = G__41161);

(invoc_array[(2)] = G__41162);

(invoc_array[(3)] = G__41163);

(invoc_array[(4)] = G__41164);

(invoc_array[(5)] = G__41165);

(invoc_array[(6)] = G__41166);

(invoc_array[(7)] = G__41167);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41168);

(invoc_array[(1)] = G__41169);

(invoc_array[(2)] = G__41170);

(invoc_array[(3)] = G__41171);

(invoc_array[(4)] = G__41172);

(invoc_array[(5)] = G__41173);

(invoc_array[(6)] = G__41174);

(invoc_array[(7)] = G__41175);

(invoc_array[(8)] = G__41176);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__41177,G__41178,G__41179,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186){
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

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199,G__41200){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41190);

(invoc_array[(1)] = G__41191);

(invoc_array[(2)] = G__41192);

(invoc_array[(3)] = G__41193);

(invoc_array[(4)] = G__41194);

(invoc_array[(5)] = G__41195);

(invoc_array[(6)] = G__41196);

(invoc_array[(7)] = G__41197);

(invoc_array[(8)] = G__41198);

(invoc_array[(9)] = G__41199);

(invoc_array[(10)] = G__41200);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__41202,G__41203,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41202);

(invoc_array[(1)] = G__41203);

(invoc_array[(2)] = G__41204);

(invoc_array[(3)] = G__41205);

(invoc_array[(4)] = G__41206);

(invoc_array[(5)] = G__41207);

(invoc_array[(6)] = G__41208);

(invoc_array[(7)] = G__41209);

(invoc_array[(8)] = G__41210);

(invoc_array[(9)] = G__41211);

(invoc_array[(10)] = G__41212);

(invoc_array[(11)] = G__41213);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__41214,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225,G__41226){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41214);

(invoc_array[(1)] = G__41215);

(invoc_array[(2)] = G__41216);

(invoc_array[(3)] = G__41217);

(invoc_array[(4)] = G__41218);

(invoc_array[(5)] = G__41219);

(invoc_array[(6)] = G__41220);

(invoc_array[(7)] = G__41221);

(invoc_array[(8)] = G__41222);

(invoc_array[(9)] = G__41223);

(invoc_array[(10)] = G__41224);

(invoc_array[(11)] = G__41225);

(invoc_array[(12)] = G__41226);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__41227,G__41228,G__41229,G__41230,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41227);

(invoc_array[(1)] = G__41228);

(invoc_array[(2)] = G__41229);

(invoc_array[(3)] = G__41230);

(invoc_array[(4)] = G__41231);

(invoc_array[(5)] = G__41232);

(invoc_array[(6)] = G__41233);

(invoc_array[(7)] = G__41234);

(invoc_array[(8)] = G__41235);

(invoc_array[(9)] = G__41236);

(invoc_array[(10)] = G__41237);

(invoc_array[(11)] = G__41238);

(invoc_array[(12)] = G__41239);

(invoc_array[(13)] = G__41240);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__41242,G__41243,G__41244,G__41245,G__41246,G__41247,G__41248,G__41249,G__41250,G__41251,G__41252,G__41253,G__41254,G__41255,G__41256){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41242);

(invoc_array[(1)] = G__41243);

(invoc_array[(2)] = G__41244);

(invoc_array[(3)] = G__41245);

(invoc_array[(4)] = G__41246);

(invoc_array[(5)] = G__41247);

(invoc_array[(6)] = G__41248);

(invoc_array[(7)] = G__41249);

(invoc_array[(8)] = G__41250);

(invoc_array[(9)] = G__41251);

(invoc_array[(10)] = G__41252);

(invoc_array[(11)] = G__41253);

(invoc_array[(12)] = G__41254);

(invoc_array[(13)] = G__41255);

(invoc_array[(14)] = G__41256);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41257);

(invoc_array[(1)] = G__41258);

(invoc_array[(2)] = G__41259);

(invoc_array[(3)] = G__41260);

(invoc_array[(4)] = G__41261);

(invoc_array[(5)] = G__41262);

(invoc_array[(6)] = G__41263);

(invoc_array[(7)] = G__41264);

(invoc_array[(8)] = G__41265);

(invoc_array[(9)] = G__41266);

(invoc_array[(10)] = G__41267);

(invoc_array[(11)] = G__41268);

(invoc_array[(12)] = G__41269);

(invoc_array[(13)] = G__41270);

(invoc_array[(14)] = G__41271);

(invoc_array[(15)] = G__41272);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__41276,G__41277,G__41278,G__41279,G__41280,G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288,G__41289,G__41290,G__41291,G__41292){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41276);

(invoc_array[(1)] = G__41277);

(invoc_array[(2)] = G__41278);

(invoc_array[(3)] = G__41279);

(invoc_array[(4)] = G__41280);

(invoc_array[(5)] = G__41281);

(invoc_array[(6)] = G__41282);

(invoc_array[(7)] = G__41283);

(invoc_array[(8)] = G__41284);

(invoc_array[(9)] = G__41285);

(invoc_array[(10)] = G__41286);

(invoc_array[(11)] = G__41287);

(invoc_array[(12)] = G__41288);

(invoc_array[(13)] = G__41289);

(invoc_array[(14)] = G__41290);

(invoc_array[(15)] = G__41291);

(invoc_array[(16)] = G__41292);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310,G__41311){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41294);

(invoc_array[(1)] = G__41295);

(invoc_array[(2)] = G__41296);

(invoc_array[(3)] = G__41297);

(invoc_array[(4)] = G__41298);

(invoc_array[(5)] = G__41299);

(invoc_array[(6)] = G__41300);

(invoc_array[(7)] = G__41301);

(invoc_array[(8)] = G__41302);

(invoc_array[(9)] = G__41303);

(invoc_array[(10)] = G__41304);

(invoc_array[(11)] = G__41305);

(invoc_array[(12)] = G__41306);

(invoc_array[(13)] = G__41307);

(invoc_array[(14)] = G__41308);

(invoc_array[(15)] = G__41309);

(invoc_array[(16)] = G__41310);

(invoc_array[(17)] = G__41311);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41314);

(invoc_array[(1)] = G__41315);

(invoc_array[(2)] = G__41316);

(invoc_array[(3)] = G__41317);

(invoc_array[(4)] = G__41318);

(invoc_array[(5)] = G__41319);

(invoc_array[(6)] = G__41320);

(invoc_array[(7)] = G__41321);

(invoc_array[(8)] = G__41322);

(invoc_array[(9)] = G__41323);

(invoc_array[(10)] = G__41324);

(invoc_array[(11)] = G__41325);

(invoc_array[(12)] = G__41326);

(invoc_array[(13)] = G__41327);

(invoc_array[(14)] = G__41328);

(invoc_array[(15)] = G__41329);

(invoc_array[(16)] = G__41330);

(invoc_array[(17)] = G__41331);

(invoc_array[(18)] = G__41332);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348,G__41349,G__41350,G__41351,G__41352,G__41353,G__41354){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41335);

(invoc_array[(1)] = G__41336);

(invoc_array[(2)] = G__41337);

(invoc_array[(3)] = G__41338);

(invoc_array[(4)] = G__41339);

(invoc_array[(5)] = G__41340);

(invoc_array[(6)] = G__41341);

(invoc_array[(7)] = G__41342);

(invoc_array[(8)] = G__41343);

(invoc_array[(9)] = G__41344);

(invoc_array[(10)] = G__41345);

(invoc_array[(11)] = G__41346);

(invoc_array[(12)] = G__41347);

(invoc_array[(13)] = G__41348);

(invoc_array[(14)] = G__41349);

(invoc_array[(15)] = G__41350);

(invoc_array[(16)] = G__41351);

(invoc_array[(17)] = G__41352);

(invoc_array[(18)] = G__41353);

(invoc_array[(19)] = G__41354);

while(true){
var ret__40053__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40053__auto__)){
continue;
} else {
return ret__40053__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41111)].join('')));

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
var G__41637 = cljs.core.next(params__$1);
var G__41638 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41639 = lets;
params__$1 = G__41637;
new_params = G__41638;
lets = G__41639;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41640 = cljs.core.next(params__$1);
var G__41641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41642 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41640;
new_params = G__41641;
lets = G__41642;
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
var len__5749__auto___41644 = arguments.length;
var i__5750__auto___41646 = (0);
while(true){
if((i__5750__auto___41646 < len__5749__auto___41644)){
args__5755__auto__.push((arguments[i__5750__auto___41646]));

var G__41648 = (i__5750__auto___41646 + (1));
i__5750__auto___41646 = G__41648;
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

var vec__41368 = sig;
var seq__41369 = cljs.core.seq(vec__41368);
var first__41370 = cljs.core.first(seq__41369);
var seq__41369__$1 = cljs.core.next(seq__41369);
var params = first__41370;
var body = seq__41369__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq41363){
var G__41364 = cljs.core.first(seq41363);
var seq41363__$1 = cljs.core.next(seq41363);
var G__41365 = cljs.core.first(seq41363__$1);
var seq41363__$2 = cljs.core.next(seq41363__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41364,G__41365,seq41363__$2);
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
var G__41676 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41677 = cljs.core.next(fdecls);
ret = G__41676;
fdecls = G__41677;
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
var len__5749__auto___41681 = arguments.length;
var i__5750__auto___41682 = (0);
while(true){
if((i__5750__auto___41682 < len__5749__auto___41681)){
args__5755__auto__.push((arguments[i__5750__auto___41682]));

var G__41683 = (i__5750__auto___41682 + (1));
i__5750__auto___41682 = G__41683;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq41377){
var G__41378 = cljs.core.first(seq41377);
var seq41377__$1 = cljs.core.next(seq41377);
var G__41379 = cljs.core.first(seq41377__$1);
var seq41377__$2 = cljs.core.next(seq41377__$1);
var G__41380 = cljs.core.first(seq41377__$2);
var seq41377__$3 = cljs.core.next(seq41377__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41378,G__41379,G__41380,seq41377__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41744 = arguments.length;
var i__5750__auto___41749 = (0);
while(true){
if((i__5750__auto___41749 < len__5749__auto___41744)){
args__5755__auto__.push((arguments[i__5750__auto___41749]));

var G__41754 = (i__5750__auto___41749 + (1));
i__5750__auto___41749 = G__41754;
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
var G__41758 = cljs.core.cons(f,p);
var G__41759 = cljs.core.next(args__$1);
p = G__41758;
args__$1 = G__41759;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41760 = cljs.core.cons(f,p);
var G__41761 = cljs.core.next(args__$1);
p = G__41760;
args__$1 = G__41761;
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
var G__41765 = cljs.core.next(fd);
fd = G__41765;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__41766 = cljs.core.next(fd);
fd = G__41766;
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
var G__41768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__41769 = cljs.core.next(ds);
acc = G__41768;
ds = G__41769;
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
var G__41772 = cljs.core.next(p);
var G__41773 = cljs.core.cons(cljs.core.first(p),d);
p = G__41772;
d = G__41773;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq41389){
var G__41390 = cljs.core.first(seq41389);
var seq41389__$1 = cljs.core.next(seq41389);
var G__41391 = cljs.core.first(seq41389__$1);
var seq41389__$2 = cljs.core.next(seq41389__$1);
var G__41392 = cljs.core.first(seq41389__$2);
var seq41389__$3 = cljs.core.next(seq41389__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41390,G__41391,G__41392,seq41389__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
